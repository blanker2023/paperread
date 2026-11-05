#!/usr/bin/env python3
"""计算成像日报 · arXiv 每日抓取脚本

按方向（T01 非视域 / T03 单光子与瞬态 / T04 神经场与逆问题）查询 arXiv API，
去重、打分、分圈，输出候选论文 JSON（pipeline/candidates.json），
供每日自动化编排进 assets/data.js。

用法: python3 pipeline/fetch_daily.py [--days 3] [--per-topic 25]
"""
import argparse
import json
import re
import sys
import time
import urllib.parse
import urllib.request
import xml.etree.ElementTree as ET
from datetime import datetime, timezone, timedelta

ARXIV_API = "https://export.arxiv.org/api/query"
ATOM = "{http://www.w3.org/2005/Atom}"
ARXIV_NS = "{http://arxiv.org/schemas/atom}"

# 方向检索式与锚词（打分用）
TOPICS = {
    "T01": {
        "queries": [
            'all:"non-line-of-sight imaging"',
            'all:"non-line-of-sight" AND all:"reconstruction"',
            'all:"light cone transform"',
            'all:"hidden object" AND all:"imaging"',
            'all:"around the corner" AND all:"imaging"',
            'all:"phasor field"',
            'all:"transient" AND all:"occluded"',
        ],
        "anchors": ["non-line-of-sight", "nlos", "hidden scene", "light cone transform",
                    "light-cone", "phasor field", "occluded", "around corner", "confocal",
                    "hidden object", "line of sight"],
    },
    "T03": {
        "queries": [
            'all:"single-photon" AND all:"imaging"',
            'all:"SPAD" AND all:"imaging"',
            'all:"transient imaging"',
            'all:"single-photon avalanche diode"',
            'all:"time-correlated single photon counting"',
            'all:"photon counting" AND all:"reconstruction"',
            'all:"LiDAR" AND all:"computational"',
        ],
        "anchors": ["single-photon", "single photon", "spad", "tcspc", "transient",
                    "time-correlated", "photon-counting", "photon counting", "lidar",
                    "avalanche diode", "time-of-flight", "depth imaging", "3d imaging"],
    },
    "T04": {
        "queries": [
            'all:"neural field" AND all:"imaging"',
            'all:"3D Gaussian splatting" AND all:"reconstruction"',
            'all:"inverse problem" AND all:"computational imaging"',
            'all:"diffusion prior" AND all:"reconstruction"',
            'all:"deep learning" AND all:"computational imaging"',
            'all:"physics-informed" AND all:"imaging"',
            'all:"unrolled" AND all:"reconstruction"',
            'all:"image reconstruction" AND all:"neural network"',
        ],
        "anchors": ["neural field", "nerf", "gaussian splatting", "3dgs", "inverse problem",
                    "deep unfolding", "unrolled", "diffusion prior", "plug-and-play",
                    "computational imaging", "image reconstruction", "tomography",
                    "physics-informed", "implicit neural", "learned reconstruction"],
    },
    "T02": {
        "queries": [
            'all:"imaging through scattering"',
            'all:"wavefront shaping" AND all:"imaging"',
            'all:"scattering media" AND all:"reconstruction"',
            'all:"transmission matrix" AND all:"imaging"',
            'all:"speckle" AND all:"imaging"',
        ],
        "anchors": ["scattering", "wavefront shaping", "transmission matrix", "speckle",
                    "turbid", "diffuser", "memory effect", "opaque"],
    },
    "T05": {
        "queries": [
            'all:"hyperspectral" AND all:"reconstruction"',
            'all:"snapshot" AND all:"spectral imaging"',
            'all:"CASSI"',
            'all:"compressive" AND all:"spectral"',
            'all:"spectral imaging" AND all:"deep learning"',
        ],
        "anchors": ["hyperspectral", "spectral imaging", "snapshot", "cassi",
                    "compressive spectral", "spectral reconstruction", "multispectral"],
    },
    "T06": {
        "queries": [
            'all:"phase retrieval"',
            'all:"ptychography"',
            'all:"coherent diffractive imaging"',
            'all:"phase imaging" AND all:"reconstruction"',
            'all:"holography" AND all:"computational"',
        ],
        "anchors": ["phase retrieval", "ptychograph", "coherent diffractive",
                    "holograph", "phase imaging", "transport of intensity"],
    },
    "T07": {
        "queries": [
            'all:"light field" AND all:"imaging"',
            'all:"lensless imaging"',
            'all:"coded aperture" AND all:"imaging"',
            'all:"diffuser" AND all:"computational imaging"',
            'all:"mask-based" AND all:"imaging"',
        ],
        "anchors": ["light field", "lensless", "coded aperture", "flatcam",
                    "diffusercam", "mask-based", "plenoptic"],
    },
    "T08": {
        "queries": [
            'all:"computational photography"',
            'all:"computational imaging" AND all:"camera"',
            'all:"burst" AND all:"denoising"',
            'all:"low-light" AND all:"image enhancement"',
            'all:"high dynamic range" AND all:"reconstruction"',
        ],
        "anchors": ["computational photography", "hdr", "burst", "demosaic",
                    "deblur", "image signal processor", "low-light", "camera pipeline",
                    "high dynamic range", "denoise"],
    },
    "T09": {
        "queries": [
            'all:"computational microscopy"',
            'all:"Fourier ptychographic"',
            'all:"super-resolution" AND all:"microscopy"',
            'all:"quantitative phase" AND all:"microscopy"',
            'all:"deep learning" AND all:"microscopy"',
        ],
        "anchors": ["microscopy", "super-resolution", "fourier ptychographic",
                    "fluorescence", "label-free", "phase contrast", "localization microscopy",
                    "quantitative phase"],
    },
    "T10": {
        "queries": [
            'all:"benchmark" AND all:"computational imaging"',
            'all:"dataset" AND all:"image reconstruction"',
            'all:"simulator" AND all:"computational imaging"',
            'all:"open-source" AND all:"imaging"',
            'all:"reproducib" AND all:"imaging"',
        ],
        "anchors": ["benchmark", "dataset", "simulator", "open-source", "open source",
                    "reproducib", "evaluation framework", "toolkit"],
    },
}

# T04 收紧：必须命中成像任务锚词（方案要求）
T04_TASK_ANCHORS = ["imaging", "reconstruction", "tomography", "microscopy",
                    "photography", "sensing", "detection"]

# 计算成像领域权威期刊：命中即显著加权（综合在 arXiv 上的常见写法与期刊关键词）
AUTHORITATIVE_JOURNALS = {
    # 顶级综合/光学
    "nature photonics": 0.18,
    "nature": 0.12,
    "science": 0.12,
    "nature communications": 0.14,
    "science advances": 0.14,
    "pnas": 0.10,
    # 光学旗舰
    "optica": 0.16,
    "light: science": 0.15,
    "light science": 0.15,
    "acs photonics": 0.13,
    "advanced photonics": 0.13,
    "laser": 0.10,
    "photonics research": 0.12,
    "optics express": 0.09,
    "optics letters": 0.09,
    "optics communications": 0.06,
    "applied optics": 0.07,
    "optics and lasers in engineering": 0.09,
    "biomedical optics express": 0.08,
    "journal of biomedical optics": 0.08,
    # 信号/图像处理与模式识别
    "ieee transactions on pattern analysis": 0.14,
    "tpami": 0.14,
    "ieee transactions on image processing": 0.12,
    "tip": 0.12,
    "ieee transactions on computational imaging": 0.15,
    "tci": 0.15,
    "ijcv": 0.13,
    "international journal of computer vision": 0.13,
    "cvpr": 0.11,
    "iccv": 0.11,
    "eccv": 0.10,
    "neurips": 0.10,
    "iclr": 0.10,
    "siggraph": 0.11,
    "computer vision and pattern recognition": 0.11,
    # 物理/成像方法
    "physical review letters": 0.12,
    "prl": 0.12,
    "optics and photonics news": 0.05,
    "scientific reports": 0.05,
}

# 权威期刊匹配词（按标题/摘要中的提及触发加权）
JOURNAL_MENTION_PATTERNS = [
    "nature photonics", "nature communications", "science advances",
    "optica", "light: science", "acs photonics", "photonics research",
    "optics express", "optics letters", "biomedical optics express",
    "ieee transactions on pattern analysis", "ieee transactions on image processing",
    "ieee transactions on computational imaging", "tpami", "tci",
    "international journal of computer vision", "physical review letters",
]

# ---- 第三信源：OpenAlex（覆盖会议、数据库、机构团队，无需密钥） ----
OPENALEX_API = "https://api.openalex.org/works"

# 会议 / 数据库信源（通过 OpenAlex 的 venue/primary_location 匹配收录）
CONFERENCE_SOURCES = {
    "COSI (Computational Optical Sensing and Imaging)": {
        "search": "computational optical sensing imaging",
        "keywords": ["computational optical sensing", "computational imaging", "optical sensing"],
    },
    "ICCP (International Conference on Computational Photography)": {
        "search": "computational photography conference",
        "keywords": ["computational photography", "computational imaging"],
    },
    "SPIE Photonics West": {
        "search": "SPIE photonics west computational imaging",
        "keywords": ["computational imaging", "photonics west", "spie"],
    },
    "SIGGRAPH / SIGGRAPH Asia": {
        "search": "siggraph computational imaging",
        "keywords": ["computational imaging", "computational photography", "siggraph"],
    },
    "CLEO (Conference on Lasers and Electro-Optics)": {
        "search": "CLEO computational imaging",
        "keywords": ["computational imaging", "cleo", "lasers electro-optics"],
    },
    "IEEE ICCP / ICASSP (影像重建相关)": {
        "search": "ICASSP computational imaging reconstruction",
        "keywords": ["image reconstruction", "computational imaging", "icassp"],
    },
}

# 机构 / 团队定向追踪（按作者机构名或团队成员名检索）
INSTITUTION_TRACKING = {
    "中科院光电所（刘博团队）": {
        "search": "Liu Bo non-line-of-sight imaging single-photon",
        "keywords": ["non-line-of-sight", "single-photon", "lidar", "transient"],
    },
    "中科院微电子所（朱精果团队）": {
        "search": "Zhu Jingguo single-photon imaging detector",
        "keywords": ["single-photon", "spad", "detector", "imaging"],
    },
    "中科院上海光机所": {
        "search": "Shanghai Institute of Optics computational imaging",
        "keywords": ["computational imaging", "phase retrieval", "holography"],
    },
    "西湖大学": {
        "search": "Westlake University computational imaging optics",
        "keywords": ["computational imaging", "optics", "microscopy"],
    },
    "西安电子科技大学杭州研究院": {
        "search": "Xidian University computational imaging",
        "keywords": ["computational imaging", "reconstruction", "imaging"],
    },
    "亚利桑那大学（David Brady 团队）": {
        "search": "David Brady computational imaging Arizona",
        "keywords": ["computational imaging", "compressive sensing", "aperture"],
    },
}

# 公众号 / 媒体信源（无法程序化抓取，仅作人工关注清单，见文档）
MEDIA_SOURCES = [
    "中国激光（中激光/爱光学）",
    "中国光学（中国光学期刊网）",
    "光学世界",
    "光电汇",
    "机器之心",
    "量子位",
    "绍兴光电研究中心「学习之窗」",
]


# 用户指定的完整期刊信源清单（用于 Crossref/OpenAlex 元数据检索与去重加权）
# 每一项：期刊名 -> (ISSN, 检索别名列表)
TARGET_JOURNALS = {
    "IEEE Transactions on Computational Imaging": {
        "issn": "2333-9403",
        "aliases": ["ieee transactions on computational imaging", "tci", "trans. computational imaging"],
    },
    "Optics Express": {
        "issn": "1094-4087",
        "aliases": ["optics express", "opt. express"],
    },
    "Advances in Optics and Photonics": {
        "issn": "1943-8206",
        "aliases": ["advances in optics and photonics"],
    },
    "Light: Science & Applications": {
        "issn": "2047-7538",
        "aliases": ["light: science", "light science and applications", "light sci appl"],
    },
    "Laser & Photonics Reviews": {
        "issn": "1863-8880",
        "aliases": ["laser and photonics reviews", "laser & photonics reviews"],
    },
    "JOSA A": {
        "issn": "1084-7529",
        "aliases": ["journal of the optical society of america a", "josa a", "j. opt. soc. am. a"],
    },
    "IEEE Transactions on Image Processing": {
        "issn": "1057-7149",
        "aliases": ["ieee transactions on image processing", "tip", "trans. image processing"],
    },
    "Computational Visual Media": {
        "issn": "2096-0433",
        "aliases": ["computational visual media", "cvmj"],
    },
    "International Journal of Computer Vision": {
        "issn": "0920-5691",
        "aliases": ["international journal of computer vision", "ijcv"],
    },
    "SIAM Journal on Imaging Sciences": {
        "issn": "1936-4954",
        "aliases": ["siam journal on imaging sciences", "siam j. imaging sci"],
    },
    "IEEE Transactions on Instrumentation and Measurement": {
        "issn": "0018-9456",
        "aliases": ["ieee transactions on instrumentation and measurement", "trans. instrumentation", "ieee trans. instrum. meas"],
    },
    "Journal of Imaging": {
        "issn": "2313-433X",
        "aliases": ["journal of imaging"],
    },
    "Applied Optics": {
        "issn": "1559-128X",
        "aliases": ["applied optics", "appl. opt"],
    },
    "Biomedical Optics Express": {
        "issn": "2156-7085",
        "aliases": ["biomedical optics express", "boe"],
    },
    "Advanced Imaging": {
        "issn": "2995-9488",
        "aliases": ["advanced imaging", "adv. imaging"],
    },
    "Advanced Photonics Nexus": {
        "issn": "2791-1519",
        "aliases": ["advanced photonics nexus"],
    },
    "中国激光 (Chinese Journal of Lasers)": {
        "issn": "0258-7025",
        "aliases": ["chinese journal of lasers", "中国激光"],
    },
    "光学学报 (Acta Optica Sinica)": {
        "issn": "0253-2239",
        "aliases": ["acta optica sinica", "光学学报"],
    },
}


def journal_boost(text):
    """根据摘要/标题中出现的权威期刊提及返回额外权重。"""
    low = text.lower()
    boost = 0.0
    for jn in JOURNAL_MENTION_PATTERNS:
        if jn in low:
            boost = max(boost, AUTHORITATIVE_JOURNALS.get(jn, 0.10))
    return boost


def fetch_query(query, max_results):
    params = urllib.parse.urlencode({
        "search_query": query,
        "start": 0,
        "max_results": max_results,
        "sortBy": "submittedDate",
        "sortOrder": "descending",
    })
    req = urllib.request.Request(ARXIV_API + "?" + params,
                                 headers={"User-Agent": "imaging-daily/2.0 (personal research digest)"})
    with urllib.request.urlopen(req, timeout=45) as resp:
        return resp.read().decode("utf-8", "replace")


# ---- 第二信源：Crossref（覆盖指定期刊的正式发表元数据） ----
CROSSREF_API = "https://api.crossref.org/works"


def fetch_crossref_journal(issn, days, rows=15):
    """按 ISSN 检索某期刊近 N 天的新文章，返回标准化论文列表。"""
    frm = (datetime.now(timezone.utc) - timedelta(days=days)).date().isoformat()
    params = urllib.parse.urlencode({
        "filter": "issn:" + issn + ",from-pub-date:" + frm,
        "rows": rows,
        "select": "DOI,title,abstract,author,container-title,published,issued,URL",
        "sort": "published",
        "order": "desc",
    })
    req = urllib.request.Request(CROSSREF_API + "?" + params,
                                 headers={"User-Agent": "imaging-daily/2.0 (mailto:1296527078@qq.com)"})
    with urllib.request.urlopen(req, timeout=45) as resp:
        data = json.loads(resp.read().decode("utf-8", "replace"))
    items = data.get("message", {}).get("items", [])
    out = []
    for it in items:
        title = (it.get("title") or [""])[0].strip()
        if not title:
            continue
        authors = []
        for a in it.get("author", []):
            nm = (a.get("given", "") + " " + a.get("family", "")).strip()
            if nm:
                authors.append(nm)
        date_parts = it.get("published", {}).get("date-parts", [[None, None, None]])[0]
        year = date_parts[0] if len(date_parts) > 0 else None
        month = date_parts[1] if len(date_parts) > 1 else None
        day = date_parts[2] if len(date_parts) > 2 else None
        pub = "%04d-%02d-%02d" % (year or 0, month or 0, day or 0) if year else ""
        doi = it.get("DOI", "")
        out.append({
            "id": "doi:" + (doi or title),
            "title": title,
            "summary_en": it.get("abstract", ""),
            "authors": authors,
            "published": pub[:10] if pub else "",
            "primaryClass": "journal",
            "doi": doi,
            "venue": (it.get("container-title") or [""])[0],
            "url": it.get("URL", ("https://doi.org/" + doi) if doi else ""),
            "_source": "crossref",
        })
    return out


def fetch_openalex(search, days, rows=15):
    """通过 OpenAlex 全文检索（覆盖会议/数据库/机构团队），返回标准化论文列表。"""
    frm = (datetime.now(timezone.utc) - timedelta(days=days)).date().isoformat()
    params = urllib.parse.urlencode({
        "search": search,
        "filter": "from_publication_date:" + frm + ",type:article|proceedings-article|preprint",
        "per-page": rows,
        "sort": "publication_date:desc",
        "mailto": "1296527078@qq.com",
    })
    req = urllib.request.Request(OPENALEX_API + "?" + params,
                                 headers={"User-Agent": "imaging-daily/2.0 (mailto:1296527078@qq.com)"})
    with urllib.request.urlopen(req, timeout=45) as resp:
        data = json.loads(resp.read().decode("utf-8", "replace"))
    out = []
    for it in data.get("results", []):
        title = (it.get("display_name") or "").strip()
        if not title:
            continue
        # 作者：OpenAlex 返回作者对象，需二次解析，这里取 display_name 兜底
        authors = []
        for a in it.get("authorships", []):
            auth = a.get("author", {})
            nm = (auth.get("display_name") or "").strip()
            if nm:
                authors.append(nm)
        pub = (it.get("publication_date") or "")[:10]
        doi = (it.get("doi") or "").replace("https://doi.org/", "")
        # 摘要：OpenAlex 用倒排索引，需还原，这里尝试重建
        abstract_inv = it.get("abstract_inverted_index")
        summary = ""
        if abstract_inv:
            try:
                pos = {}
                for word, idxs in abstract_inv.items():
                    for i in idxs:
                        pos[i] = word
                summary = " ".join(pos[k] for k in sorted(pos))
            except Exception:
                summary = ""
        primary_loc = it.get("primary_location") or {}
        source = primary_loc.get("source") or {}
        venue = (source.get("display_name") or "") if source else ""
        url = (primary_loc.get("landing_page_url") or it.get("doi") or "")
        out.append({
            "id": "doi:" + (doi or title),
            "title": title,
            "summary_en": summary,
            "authors": authors,
            "published": pub,
            "primaryClass": "openalex",
            "doi": doi,
            "venue": venue,
            "url": url,
            "_source": "openalex",
        })
    return out


def parse_feed(xml_text):
    root = ET.fromstring(xml_text)
    entries = []
    for entry in root.findall(ATOM + "entry"):
        arxiv_id = entry.findtext(ATOM + "id", "").rsplit("/abs/", 1)[-1]
        arxiv_id = re.sub(r"v\d+$", "", arxiv_id)
        title = re.sub(r"\s+", " ", entry.findtext(ATOM + "title", "")).strip()
        summary = re.sub(r"\s+", " ", entry.findtext(ATOM + "summary", "")).strip()
        published = entry.findtext(ATOM + "published", "")[:10]
        authors = [a.findtext(ATOM + "name", "") for a in entry.findall(ATOM + "author")]
        primary = entry.find(ARXIV_NS + "primary_category")
        primary_class = primary.get("term") if primary is not None else ""
        doi_el = entry.find(ARXIV_NS + "doi")
        entries.append({
            "id": arxiv_id,
            "title": title,
            "summary_en": summary,
            "authors": authors,
            "published": published,
            "primaryClass": primary_class,
            "doi": doi_el.text if doi_el is not None else "",
            "url": "https://arxiv.org/abs/" + arxiv_id,
        })
    return entries


def score_paper(paper, topic_id, anchors, cutoff):
    text = (paper["title"] + " " + paper["summary_en"]).lower()
    hits = sum(1 for a in anchors if a in text)
    if hits == 0:
        return 0.0
    score = min(0.95, 0.35 + hits * 0.12)
    if paper["published"] >= cutoff:
        score += 0.05
    # 权威期刊提及加权（Nature Photonics / Optica / TPAMI / TCI 等）
    score += journal_boost(text)
    if topic_id == "T04" and not any(a in text for a in T04_TASK_ANCHORS):
        return 0.0  # T04 收紧：未命中成像任务锚词则剔除
    return round(min(0.98, score), 2)


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--days", type=int, default=3, help="回溯天数")
    ap.add_argument("--per-topic", type=int, default=25, help="每个检索式最大返回数")
    args = ap.parse_args()

    cutoff = (datetime.now(timezone.utc) - timedelta(days=args.days)).date().isoformat()
    seen = {}
    stats = {"queries": 0, "fetched": 0, "errors": []}

    for topic_id, cfg in TOPICS.items():
        for query in cfg["queries"]:
            stats["queries"] += 1
            try:
                xml_text = fetch_query(query, args.per_topic)
                entries = parse_feed(xml_text)
                stats["fetched"] += len(entries)
            except Exception as exc:  # 单源失败不清空旧数据
                stats["errors"].append({"topic": topic_id, "query": query, "error": str(exc)})
                continue
            for p in entries:
                if p["published"] < cutoff:
                    continue
                score = score_paper(p, topic_id, cfg["anchors"], cutoff)
                if score <= 0:
                    continue
                if p["id"] in seen:
                    item = seen[p["id"]]
                    if topic_id not in item["topicTags"]:
                        item["topicTags"].append(topic_id)
                    item["score"] = max(item["score"], score)
                else:
                    p["primaryTopic"] = topic_id
                    p["topicTags"] = [topic_id]
                    p["score"] = score
                    seen[p["id"]] = p
            time.sleep(3)  # arXiv 限速礼仪

    # ---- 第二信源：按期刊检索正式发表论文（Crossref） ----
    journal_days = max(args.days, 7)  # 期刊正式发表节奏慢，回溯窗口放宽到至少 7 天
    for jname, jcfg in TARGET_JOURNALS.items():
        stats["queries"] += 1
        try:
            jentries = fetch_crossref_journal(jcfg["issn"], journal_days, rows=12)
            stats["fetched"] += len(jentries)
        except Exception as exc:
            stats["errors"].append({"source": "crossref", "journal": jname, "error": str(exc)})
            continue
        for p in jentries:
            if not p["published"] or p["published"] < cutoff:
                continue
            text = (p["title"] + " " + p["summary_en"]).lower()
            # 与任一方向锚词命中才收录，避免期刊里大量无关文章
            hit_topics = []
            for topic_id, cfg in TOPICS.items():
                if any(a in text for a in cfg["anchors"]):
                    hit_topics.append(topic_id)
            if not hit_topics:
                continue
            if p["id"] in seen:
                item = seen[p["id"]]
                for t in hit_topics:
                    if t not in item["topicTags"]:
                        item["topicTags"].append(t)
                item["score"] = max(item["score"], 0.70)  # 正式期刊论文给较高基础分
                continue
            p["primaryTopic"] = hit_topics[0]
            p["topicTags"] = hit_topics
            p["score"] = 0.72
            p["venue"] = jname
            seen[p["id"]] = p
        time.sleep(1)  # Crossref 限速礼仪

    # ---- 第三信源：OpenAlex（会议 / 数据库 / 机构团队定向追踪） ----
    openalex_days = max(args.days, 14)  # 会议/机构成果节奏慢，回溯窗口放宽到至少 14 天
    # 会议/数据库信源
    for sname, scfg in CONFERENCE_SOURCES.items():
        stats["queries"] += 1
        try:
            sentries = fetch_openalex(scfg["search"], openalex_days, rows=15)
            stats["fetched"] += len(sentries)
        except Exception as exc:
            stats["errors"].append({"source": "openalex", "name": sname, "error": str(exc)})
            continue
        for p in sentries:
            if not p["published"] or p["published"] < cutoff:
                continue
            text = (p["title"] + " " + p["summary_en"]).lower()
            hit_topics = []
            for topic_id, cfg in TOPICS.items():
                if any(a in text for a in cfg["anchors"]):
                    hit_topics.append(topic_id)
            # 会议源放宽：命中方向锚词，或命中该会议自身关键词
            kw_hit = any(k in text for k in scfg["keywords"])
            if not hit_topics and not kw_hit:
                continue
            if p["id"] in seen:
                item = seen[p["id"]]
                for t in hit_topics:
                    if t not in item["topicTags"]:
                        item["topicTags"].append(t)
                item["score"] = max(item["score"], 0.65)
                continue
            p["primaryTopic"] = hit_topics[0] if hit_topics else "T04"
            p["topicTags"] = hit_topics or ["T04"]
            p["score"] = 0.65
            p["venue"] = sname
            seen[p["id"]] = p
        time.sleep(1)

    # 机构/团队定向追踪
    for iname, icfg in INSTITUTION_TRACKING.items():
        stats["queries"] += 1
        try:
            ientries = fetch_openalex(icfg["search"], openalex_days, rows=10)
            stats["fetched"] += len(ientries)
        except Exception as exc:
            stats["errors"].append({"source": "openalex-institution", "name": iname, "error": str(exc)})
            continue
        for p in ientries:
            if not p["published"] or p["published"] < cutoff:
                continue
            text = (p["title"] + " " + p["summary_en"]).lower()
            hit_topics = []
            for topic_id, cfg in TOPICS.items():
                if any(a in text for a in cfg["anchors"]):
                    hit_topics.append(topic_id)
            if not hit_topics:
                continue
            if p["id"] in seen:
                item = seen[p["id"]]
                for t in hit_topics:
                    if t not in item["topicTags"]:
                        item["topicTags"].append(t)
                item["score"] = max(item["score"], 0.68)
                continue
            p["primaryTopic"] = hit_topics[0]
            p["topicTags"] = hit_topics
            p["score"] = 0.68
            p["venue"] = iname
            seen[p["id"]] = p
        time.sleep(1)

    candidates = sorted(seen.values(), key=lambda p: -p["score"])
    out = {
        "generatedAt": datetime.now(timezone.utc).isoformat(),
        "cutoff": cutoff,
        "stats": stats,
        "count": len(candidates),
        "candidates": candidates,
    }
    out_path = "pipeline/candidates.json"
    with open(out_path, "w", encoding="utf-8") as f:
        json.dump(out, f, ensure_ascii=False, indent=2)
    print(json.dumps({"output": out_path, "count": len(candidates),
                      "fetched": stats["fetched"], "errors": len(stats["errors"])},
                     ensure_ascii=False))
    return 0


if __name__ == "__main__":
    sys.exit(main())
