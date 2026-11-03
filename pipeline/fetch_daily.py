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
        ],
        "anchors": ["non-line-of-sight", "nlos", "hidden scene", "light cone transform",
                    "light-cone", "phasor field", "occluded", "around corner", "confocal"],
    },
    "T03": {
        "queries": [
            'all:"single-photon" AND all:"imaging"',
            'all:"SPAD" AND all:"imaging"',
            'all:"transient imaging"',
        ],
        "anchors": ["single-photon", "single photon", "spad", "tcspc", "transient",
                    "time-correlated", "photon-counting", "photon counting", "lidar"],
    },
    "T04": {
        "queries": [
            'all:"neural field" AND all:"imaging"',
            'all:"3D Gaussian splatting" AND all:"reconstruction"',
            'all:"inverse problem" AND all:"computational imaging"',
            'all:"diffusion prior" AND all:"reconstruction"',
        ],
        "anchors": ["neural field", "nerf", "gaussian splatting", "3dgs", "inverse problem",
                    "deep unfolding", "unrolled", "diffusion prior", "plug-and-play",
                    "computational imaging", "image reconstruction", "tomography"],
    },
    "T02": {
        "queries": [
            'all:"imaging through scattering"',
            'all:"wavefront shaping" AND all:"imaging"',
            'all:"scattering media" AND all:"reconstruction"',
        ],
        "anchors": ["scattering", "wavefront shaping", "transmission matrix", "speckle",
                    "turbid", "diffuser", "memory effect", "opaque"],
    },
    "T05": {
        "queries": [
            'all:"hyperspectral" AND all:"reconstruction"',
            'all:"snapshot" AND all:"spectral imaging"',
            'all:"CASSI"',
        ],
        "anchors": ["hyperspectral", "spectral imaging", "snapshot", "cassi",
                    "compressive spectral", "spectral reconstruction", "multispectral"],
    },
    "T06": {
        "queries": [
            'all:"phase retrieval"',
            'all:"ptychography"',
            'all:"coherent diffractive imaging"',
        ],
        "anchors": ["phase retrieval", "ptychograph", "coherent diffractive",
                    "holograph", "phase imaging", "transport of intensity"],
    },
    "T07": {
        "queries": [
            'all:"light field" AND all:"imaging"',
            'all:"lensless imaging"',
            'all:"coded aperture" AND all:"imaging"',
        ],
        "anchors": ["light field", "lensless", "coded aperture", "flatcam",
                    "diffusercam", "mask-based", "plenoptic"],
    },
    "T08": {
        "queries": [
            'all:"computational photography"',
            'all:"computational imaging" AND all:"camera"',
            'all:"burst" AND all:"denoising"',
        ],
        "anchors": ["computational photography", "hdr", "burst", "demosaic",
                    "deblur", "image signal processor", "low-light", "camera pipeline"],
    },
    "T09": {
        "queries": [
            'all:"computational microscopy"',
            'all:"Fourier ptychographic"',
            'all:"super-resolution" AND all:"microscopy"',
        ],
        "anchors": ["microscopy", "super-resolution", "fourier ptychographic",
                    "fluorescence", "label-free", "phase contrast", "localization microscopy"],
    },
    "T10": {
        "queries": [
            'all:"benchmark" AND all:"computational imaging"',
            'all:"dataset" AND all:"image reconstruction"',
            'all:"simulator" AND all:"computational imaging"',
        ],
        "anchors": ["benchmark", "dataset", "simulator", "open-source", "open source",
                    "reproducib", "evaluation framework", "toolkit"],
    },
}

# T04 收紧：必须命中成像任务锚词（方案要求）
T04_TASK_ANCHORS = ["imaging", "reconstruction", "tomography", "microscopy",
                    "photography", "sensing", "detection"]


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
    if topic_id == "T04" and not any(a in text for a in T04_TASK_ANCHORS):
        return 0.0  # T04 收紧：未命中成像任务锚词则剔除
    return round(score, 2)


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
