(function () {
  "use strict";
  const data = window.NLOS_DATA;
  const STORAGE = {
    read: "nlos-read-v1", feedback: "nlos-feedback-v1", saved: "nlos-saved-v1",
    subscriptions: "imaging-subscriptions-v3", mailSync: "imaging-mail-sync-v2"
  };
  const icons = {
    search: '<circle cx="11" cy="11" r="7"></circle><path d="m20 20-4-4"></path>',
    home: '<path d="m3 11 9-8 9 8"></path><path d="M5 10v10h14V10"></path><path d="M9 20v-6h6v6"></path>',
    archive: '<rect x="3" y="4" width="18" height="5" rx="1"></rect><path d="M5 9v11h14V9M9 13h6"></path>',
    interest: '<path d="M12 3v3M12 18v3M3 12h3M18 12h3"></path><circle cx="12" cy="12" r="5"></circle>',
    topics: '<path d="M4 5h16M4 12h16M4 19h16"></path><circle cx="8" cy="5" r="2"></circle><circle cx="16" cy="12" r="2"></circle><circle cx="10" cy="19" r="2"></circle>',
    bookmark: '<path d="M6 3h12v18l-6-4-6 4z"></path>',
    copy: '<rect x="8" y="8" width="12" height="12" rx="2"></rect><path d="M16 8V4H4v12h4"></path>',
    up: '<path d="M7 10v11H3V10zM7 19h10l3-9h-5l1-6-4 6z"></path>',
    down: '<path d="M7 14V3H3v11zM7 5h10l3 9h-5l1 6-4-6z"></path>',
    arrow: '<path d="M5 12h14M14 7l5 5-5 5"></path>',
    external: '<path d="M14 4h6v6M20 4l-9 9"></path><path d="M18 13v7H4V6h7"></path>',
    download: '<path d="M12 3v12M7 10l5 5 5-5"></path><path d="M4 19h16"></path>',
    empty: '<circle cx="11" cy="11" r="7"></circle><path d="m20 20-4-4M8 11h6"></path>',
    check: '<path d="m5 12 4 4L19 6"></path>',
    cross: '<path d="M8 3H3v5M16 3h5v5M8 21H3v-5M16 21h5v-5"></path><path d="m3 3 18 18M21 3 3 21"></path>'
  };
  function icon(name, cls) {
    return '<svg class="' + (cls || "") + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + (icons[name] || icons.arrow) + '</svg>';
  }
  function esc(value) {
    return String(value == null ? "" : value).replace(/[&<>'"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" }[c]; });
  }
  function readStore(key) {
    try { return JSON.parse(localStorage.getItem(key) || "{}"); } catch (_) { return {}; }
  }
  function writeStore(key, value) {
    try { localStorage.setItem(key, JSON.stringify(value)); return true; } catch (_) { return false; }
  }
  function topicById(id) { return data.topics.find(function (t) { return t.id === id; }); }
  function defaultSubscriptions() {
    const result = {};
    data.topics.filter(function (t) { return t.enabled; }).forEach(function (t) { result[t.id] = t.defWeight; });
    return result;
  }
  function getSubscriptions() {
    let stored = null;
    try { stored = localStorage.getItem(STORAGE.subscriptions); } catch (_) { return defaultSubscriptions(); }
    if (!stored) return defaultSubscriptions();
    try {
      const parsed = JSON.parse(stored);
      const clean = {};
      data.topics.filter(function (t) { return t.enabled; }).forEach(function (t) {
        if (parsed[t.id]) clean[t.id] = Math.max(1, Math.min(3, Number(parsed[t.id]) || t.defWeight));
      });
      return Object.keys(clean).length ? clean : defaultSubscriptions();
    } catch (_) { return defaultSubscriptions(); }
  }
  function subscribedTopics() {
    const subs = getSubscriptions();
    return data.topics.filter(function (t) { return t.enabled && subs[t.id]; }).sort(function (a, b) {
      return subs[b.id] - subs[a.id] || a.order - b.order;
    });
  }
  function paperById(id) { return data.papers.find(function (p) { return p.id === id; }); }
  function bibtex(p) {
    const slug = p.authors[0].split(" ").pop().toLowerCase().replace(/[^a-z]/g, "") + p.published.slice(0, 4) + p.id.replace(".", "");
    const lines = ["@misc{" + slug + ",", "  title = {" + p.title + "},", "  author = {" + p.authors.join(" and ") + "},", "  year = {" + p.published.slice(0, 4) + "},", "  eprint = {" + p.id + "},", "  archivePrefix = {arXiv},", "  primaryClass = {" + p.primaryClass + "},"];
    if (p.doi) lines.push("  doi = {" + p.doi + "},");
    lines.push("  url = {" + p.url + "}", "}");
    return lines.join("\n");
  }
  let toastTimer;
  function toast(message) {
    let el = document.querySelector(".toast");
    if (!el) { el = document.createElement("div"); el.className = "toast"; el.setAttribute("role", "status"); document.body.appendChild(el); }
    el.textContent = message;
    el.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { el.classList.remove("show"); }, 2300);
  }
  function paperCard(p, options) {
    const opts = options || {};
    const read = readStore(STORAGE.read);
    const feedback = readStore(STORAGE.feedback);
    const saved = readStore(STORAGE.saved);
    const state = feedback[p.id] || {};
    const title = opts.highlight ? highlight(esc(p.title), opts.highlight) : esc(p.title);
    const titleZh = opts.highlight ? highlight(esc(p.titleZh), opts.highlight) : esc(p.titleZh);
    const tags = opts.showCross ? p.topicTags : [p.primaryTopic];
    const topicBadges = tags.map(function (id) { return '<span class="topic-badge topic-' + id + '">' + id + '</span>'; }).join('<span class="topic-times">×</span>');
    const displayNo = opts.displayNo || p.no;
    return '<article class="paper-card' + (read[p.id] ? " is-read" : "") + '" data-paper="' + p.id + '">' +
      '<div class="card-top"><span class="card-number">' + String(displayNo).padStart(2, "0") + '</span><span class="tier tier-' + p.tier + '">' + p.tier + ' 圈</span><span class="topic-badges">' + topicBadges + '</span><span class="card-source">' + esc(p.venue) + ' · ' + esc(p.published) + '</span></div>' +
      '<a class="paper-title" href="' + esc(p.url) + '" target="_blank" rel="noopener" data-read="' + p.id + '">' + title + '</a>' +
      '<p class="paper-title-zh">' + titleZh + '</p>' +
      '<p class="paper-authors">' + esc(p.authors.join(" · ")) + '</p>' +
      '<p class="paper-summary">' + esc(p.summary) + '</p>' +
      '<div class="why-read"><strong>为什么读</strong>' + esc(p.why) + '</div>' +
      '<div class="tag-list">' + p.tags.map(function (t) { return '<span class="tag">' + esc(t) + '</span>'; }).join("") + '</div>' +
      '<div class="card-actions">' +
      '<button class="action-btn' + (state.action === "useful" ? " active" : "") + '" data-action="useful" data-id="' + p.id + '" aria-pressed="' + (state.action === "useful") + '">' + icon("up") + '<span>有用</span></button>' +
      '<button class="action-btn' + (state.action === "useless" ? " active" : "") + '" data-action="useless" data-id="' + p.id + '" aria-pressed="' + (state.action === "useless") + '">' + icon("down") + '<span>没用</span></button>' +
      '<button class="action-btn' + (saved[p.id] ? " active" : "") + '" data-action="save" data-id="' + p.id + '" aria-pressed="' + Boolean(saved[p.id]) + '">' + icon("bookmark") + '<span>' + (saved[p.id] ? "已收藏" : "收藏") + '</span></button>' +
      '<button class="action-btn" data-action="copy" data-id="' + p.id + '">' + icon("copy") + '<span>复制 BibTeX</span></button>' +
      '<a class="action-btn open-link" href="' + esc(p.url) + '" target="_blank" rel="noopener" data-read="' + p.id + '">原文' + icon("external") + '</a>' +
      '</div></article>';
  }
  function syncCards(id) {
    const read = readStore(STORAGE.read);
    const feedback = readStore(STORAGE.feedback);
    const saved = readStore(STORAGE.saved);
    document.querySelectorAll('[data-paper="' + id + '"]').forEach(function (card) {
      card.classList.toggle("is-read", Boolean(read[id]));
      card.querySelectorAll("[data-action]").forEach(function (button) {
        const action = button.dataset.action;
        const active = action === "save" ? Boolean(saved[id]) : Boolean(feedback[id] && feedback[id].action === action);
        button.classList.toggle("active", active);
        button.setAttribute("aria-pressed", String(active));
        if (action === "save") button.querySelector("span").textContent = active ? "已收藏" : "收藏";
      });
    });
  }
  function markRead(id) {
    const read = readStore(STORAGE.read);
    read[id] = new Date().toISOString();
    writeStore(STORAGE.read, read);
    syncCards(id);
  }
  function updateFeedback(id, action) {
    const p = paperById(id);
    if (!p) return;
    if (action === "save") {
      const saved = readStore(STORAGE.saved);
      if (saved[id]) { delete saved[id]; toast("已取消收藏"); } else { saved[id] = { title: p.title, titleZh: p.titleZh, summary: p.summary, why: p.why, url: p.url, category: p.primaryTopic, ts: new Date().toISOString() }; toast("已收藏，稍后可在兴趣页查看"); }
      writeStore(STORAGE.saved, saved);
    } else {
      const feedback = readStore(STORAGE.feedback);
      if (feedback[id] && feedback[id].action === action) { delete feedback[id]; toast("已撤销反馈"); }
      else { feedback[id] = { action: action, title: p.title, ts: new Date().toISOString() }; toast(action === "useful" ? "已记下：这篇有用" : "已记下：减少同类推荐"); }
      writeStore(STORAGE.feedback, feedback);
    }
    syncCards(id);
    if (document.body.dataset.page === "interest") renderInterest();
  }
  async function copyText(text) {
    try {
      if (navigator.clipboard && window.isSecureContext) await navigator.clipboard.writeText(text);
      else {
        const area = document.createElement("textarea"); area.value = text; area.style.position = "fixed"; area.style.opacity = "0";
        document.body.appendChild(area); area.select(); document.execCommand("copy"); area.remove();
      }
      toast("BibTeX 已复制，可直接粘贴到 Zotero");
    } catch (_) { toast("复制失败，请允许浏览器访问剪贴板"); }
  }
  function initGlobal() {
    const page = document.body.dataset.page;
    document.querySelectorAll("[data-nav]").forEach(function (a) { if (a.dataset.nav === page) { a.classList.add("active"); a.setAttribute("aria-current", "page"); } });
    document.querySelectorAll("[data-icon]").forEach(function (el) { el.innerHTML = icon(el.dataset.icon) + (el.dataset.label ? '<span>' + esc(el.dataset.label) + '</span>' : ""); });
    document.addEventListener("click", function (event) {
      const readLink = event.target.closest("[data-read]");
      if (readLink) markRead(readLink.dataset.read);
      const button = event.target.closest("[data-action]");
      if (button) {
        const id = button.dataset.id;
        if (button.dataset.action === "copy") {
          const p = paperById(id); if (p) copyText(bibtex(p));
        } else updateFeedback(id, button.dataset.action);
      }
      const exportBtn = event.target.closest("[data-export]");
      if (exportBtn) {
        const payload = Object.assign({}, data, { subscriptions: getSubscriptions() });
        const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
        const a = document.createElement("a"); a.href = URL.createObjectURL(blob); a.download = "imaging-daily-" + data.issue.date + ".json"; a.click();
        setTimeout(function () { URL.revokeObjectURL(a.href); }, 1000); toast("本期与订阅配置已导出");
      }
    });
    const age = Date.now() - new Date(data.issue.updatedAt).getTime();
    if (age > 36 * 3600 * 1000) {
      const banner = document.createElement("div"); banner.className = "stale-banner";
      banner.textContent = "数据更新于 " + data.issue.updatedAt.replace("T", " ").slice(0, 16) + " UTC，可能不是最新";
      document.body.insertBefore(banner, document.body.firstChild);
    }
  }
  function renderToday() {
    const target = document.getElementById("headlines");
    if (!target) return;
    function draw() {
      const subs = getSubscriptions();
      const topics = subscribedTopics();
      const daily = data.issue.dailyIds.map(paperById).filter(Boolean);
      const headlines = data.issue.headlineIds.map(paperById).filter(function (p) { return p && subs[p.primaryTopic]; });
      let number = 1;
      target.innerHTML = headlines.map(function (p) { return paperCard(p, { displayNo: number++, showCross: true }); }).join("");
      const headlineIds = headlines.map(function (p) { return p.id; });
      const crossItems = data.issue.crossIds.map(paperById).filter(function (p) {
        return p && subs[p.primaryTopic] && !headlineIds.includes(p.id) && p.topicTags.filter(function (id) { return subs[id]; }).length >= 2;
      });
      const crossIdSet = crossItems.map(function (p) { return p.id; });
      const displayNumbers = {};
      crossItems.forEach(function (p) { displayNumbers[p.id] = number++; });
      const grouped = topics.map(function (topic) {
        const papers = daily.filter(function (p) { return p.primaryTopic === topic.id && !headlineIds.includes(p.id) && !crossIdSet.includes(p.id); }).sort(function (a, b) { return b.score - a.score; }).slice(0, topic.quota);
        papers.forEach(function (p) { displayNumbers[p.id] = number++; });
        return { topic: topic, papers: papers };
      });
      const groups = document.getElementById("digest-sections");
      let html = "";
      if (crossItems.length) {
        html += '<section id="cross-direction" class="cross-section"><div class="cross-heading"><div><p class="eyebrow">Cross-direction</p><h2>跨方向</h2><p>同时命中多个已订阅方向，通常是可迁移的方法。</p></div><span class="cross-count">' + crossItems.length + ' 篇</span></div><div class="headlines">' + crossItems.map(function (p) {
          return paperCard(p, { displayNo: displayNumbers[p.id], showCross: true });
        }).join("") + '</div></section>';
      }
      grouped.forEach(function (entry) {
        const topic = entry.topic;
        const papers = entry.papers;
        if (!papers.length) return;
        const cards = papers.map(function (p) { return paperCard(p, { displayNo: displayNumbers[p.id], showCross: p.topicTags.length > 1 }); }).join("");
        html += '<details class="digest-section topic-section" id="topic-' + topic.id + '"><summary><span class="section-name"><span class="topic-badge topic-' + topic.id + '">' + topic.id + '</span><strong>' + esc(topic.name) + '</strong><small>' + esc(topic.en) + '</small></span><span class="section-count">' + papers.length + ' 篇 · 权重 ' + subs[topic.id] + '</span><span class="section-chevron"></span></summary><div class="section-body"><p class="section-description">' + esc(topic.description) + '</p>' + cards + '</div></details>';
      });
      groups.innerHTML = html;
      const nav = document.getElementById("topic-nav");
      if (nav) nav.innerHTML = '<span class="topic-nav-label">我的方向</span>' + (crossItems.length ? '<a href="#cross-direction" class="topic-nav-chip cross-chip">跨方向 <strong>' + crossItems.length + '</strong></a>' : "") + topics.map(function (t) {
        const count = daily.filter(function (p) { return p.primaryTopic === t.id; }).length;
        return '<a href="#topic-' + t.id + '" class="topic-nav-chip"><span class="topic-badge topic-' + t.id + '">' + t.id + '</span>' + esc(t.name) + '<strong>' + count + '</strong></a>';
      }).join("") + '<a href="topics.html" class="topic-nav-edit">管理订阅' + icon("arrow") + '</a>';
      const visibleDaily = daily.filter(function (p) { return subs[p.primaryTopic]; });
      const read = readStore(STORAGE.read);
      const readCount = visibleDaily.filter(function (p) { return read[p.id]; }).length;
      document.getElementById("read-progress").style.width = (visibleDaily.length ? readCount / visibleDaily.length * 100 : 0) + "%";
      const dailyCount = document.getElementById("daily-count"); if (dailyCount) dailyCount.textContent = String(visibleDaily.length).padStart(2, "0");
      const topicCount = document.getElementById("topic-count"); if (topicCount) topicCount.textContent = String(topics.length).padStart(2, "0");
      const crossCount = document.getElementById("cross-count"); if (crossCount) crossCount.textContent = String(crossItems.length).padStart(2, "0");
      const issueSummary = document.getElementById("issue-summary"); if (issueSummary) issueSummary.textContent = "今日精选 " + visibleDaily.length + " 篇";
      const headlineNote = document.getElementById("headline-note"); if (headlineNote) headlineNote.textContent = "编辑精选 · 来自 " + topics.length + " 个已订阅方向";
    }
    const expand = document.getElementById("expand-all");
    expand.onclick = function () {
      const sections = Array.from(document.querySelectorAll(".digest-section"));
      const shouldOpen = sections.some(function (s) { return !s.open; });
      sections.forEach(function (s) { s.open = shouldOpen; });
      expand.textContent = shouldOpen ? "全部收起" : "展开全部";
    };
    draw();
    window.addEventListener("storage", function (event) { if (event.key === STORAGE.subscriptions) draw(); });
    const refreshBtn = document.getElementById("refresh-today");
    if (refreshBtn) {
      refreshBtn.addEventListener("click", function () {
        refreshBtn.disabled = true;
        refreshBtn.textContent = "正在同步最新数据…";
        const hint = document.getElementById("refresh-hint");
        loadFreshData(function (ok) {
          refreshBtn.disabled = false;
          refreshBtn.textContent = "⟳ 刷新今日内容";
          if (ok) draw();
          if (hint) { hint.textContent = ok ? "已同步最新一期 · " + data.issue.date : "未能获取最新数据，请稍后重试"; hint.classList.add("show"); setTimeout(function () { hint.classList.remove("show"); }, 3000); }
        });
      });
    }
  }
  function loadFreshData(callback) {
    // 用带时间戳的 URL 强制绕过微信/浏览器缓存，重新拉取 data.js
    const base = "assets/data.js";
    const sep = base.indexOf("?") > -1 ? "&" : "?";
    const url = base + sep + "t=" + Date.now();
    const s = document.createElement("script");
    s.src = url;
    s.async = true;
    s.onload = function () {
      const fresh = window.NLOS_DATA;
      if (fresh && fresh.issue && fresh.issue.date) {
        data.issue = fresh.issue;
        data.papers = fresh.papers;
        data.topics = fresh.topics;
        data.archive = fresh.archive;
        callback(true);
      } else { callback(false); }
    };
    s.onerror = function () { callback(false); };
    document.head.appendChild(s);
  }
  function renderTopicsPage() {
    const grid = document.getElementById("topics-grid");
    if (!grid) return;
    function draw() {
      const subs = getSubscriptions();
      const active = subscribedTopics();
      grid.innerHTML = data.topics.slice().sort(function (a, b) { return a.order - b.order; }).map(function (t) {
        const subscribed = Boolean(subs[t.id]);
        return '<article class="topic-card topic-card-' + t.id + (subscribed ? " subscribed" : "") + (!t.enabled ? " upcoming" : "") + '">' +
          '<div class="topic-card-top"><span class="topic-badge topic-' + t.id + '">' + t.id + '</span><span class="topic-parent">' + esc(t.parent) + '</span><span class="topic-state">' + (t.enabled ? (subscribed ? "已订阅" : "未订阅") : "即将支持") + '</span></div>' +
          '<h2>' + esc(t.name) + '</h2><p class="topic-tagline">' + esc(t.tagline) + '</p><p class="topic-description">' + esc(t.description) + '</p>' +
          '<div class="topic-card-bottom"><span class="topic-cadence">' + esc(t.cadence) + '</span>' + (t.enabled ? '<button class="subscribe-btn" data-subscribe="' + t.id + '" aria-pressed="' + subscribed + '">' + (subscribed ? icon("check") + "已订阅" : "+ 订阅") + '</button>' : '<button class="subscribe-btn" disabled>暂未开放</button>') + '</div>' +
          (t.enabled ? '<div class="topic-weight"><span>排序权重</span><div class="weight-stars" aria-label="' + esc(t.name) + '排序权重">' + [1, 2, 3].map(function (n) { return '<button data-weight="' + t.id + '" data-value="' + n + '" class="' + (subscribed && subs[t.id] >= n ? "active" : "") + '" aria-label="权重 ' + n + '"' + (!subscribed ? " disabled" : "") + '>★</button>'; }).join("") + '</div><span class="weight-value">' + (subscribed ? subs[t.id] + " / 3" : "—") + '</span></div>' : "") +
          '</article>';
      }).join("");
      const summary = document.getElementById("subscription-summary");
      if (summary) summary.innerHTML = '<div><strong>' + active.length + '</strong><span>已订阅方向</span></div><div><strong>' + active.reduce(function (sum, t) { return sum + t.quota; }, 0) + '</strong><span>每日配额上限</span></div><div><strong>' + data.issue.crossIds.length + '</strong><span>本期跨方向</span></div>';
      const order = document.getElementById("subscription-order");
      if (order) order.innerHTML = active.map(function (t, i) { return '<div class="subscription-order-row"><span class="order-index">' + String(i + 1).padStart(2, "0") + '</span><span class="topic-badge topic-' + t.id + '">' + t.id + '</span><strong>' + esc(t.name) + '</strong><span>权重 ' + subs[t.id] + ' · 每期至多 ' + t.quota + ' 篇</span></div>'; }).join("");
      const mailState = document.getElementById("mail-sync-state");
      const sync = readStore(STORAGE.mailSync);
      if (mailState) mailState.textContent = sync.updatedAt ? "本机待同步配置 · " + sync.updatedAt.slice(0, 10) : "邮件接口尚未接入，当前先保存待同步配置";
    }
    grid.addEventListener("click", function (event) {
      const subButton = event.target.closest("[data-subscribe]");
      if (subButton) {
        const id = subButton.dataset.subscribe;
        const subs = getSubscriptions();
        if (subs[id]) {
          if (Object.keys(subs).length === 1) { toast("至少保留一个订阅方向"); return; }
          delete subs[id]; toast("已取消订阅，首页将隐藏该方向");
        } else { subs[id] = topicById(id).defWeight; toast("已订阅，首页已加入该方向"); }
        writeStore(STORAGE.subscriptions, subs); draw(); return;
      }
      const weightButton = event.target.closest("[data-weight]");
      if (weightButton && !weightButton.disabled) {
        const id = weightButton.dataset.weight;
        const subs = getSubscriptions(); subs[id] = Number(weightButton.dataset.value);
        writeStore(STORAGE.subscriptions, subs); draw(); toast("权重已更新，首页版块将立即重排");
      }
    });
    const reset = document.getElementById("reset-subscriptions");
    if (reset) reset.onclick = function () { writeStore(STORAGE.subscriptions, defaultSubscriptions()); draw(); toast("已恢复默认订阅（全部方向）"); };
    const subscribeAll = document.getElementById("subscribe-all");
    if (subscribeAll) subscribeAll.onclick = function () {
      const all = {};
      data.topics.filter(function (t) { return t.enabled; }).forEach(function (t) { all[t.id] = 3; });
      writeStore(STORAGE.subscriptions, all); draw(); toast("已订阅全部方向，权重置顶");
    };
    const syncButton = document.getElementById("mail-sync");
    if (syncButton) syncButton.onclick = function () {
      writeStore(STORAGE.mailSync, { topics: getSubscriptions(), updatedAt: new Date().toISOString(), status: "pending" });
      draw(); toast("待同步配置已保存；邮件接口接入后可用于发送");
    };
    draw();
  }
  function renderArchive() {
    const target = document.getElementById("archive-list");
    if (!target) return;
    const share = window.__shareUrl || function (p) { return p; };
    const live = data.archive.filter(function (i) { return !i.empty; });
    const total = document.getElementById("archive-total");
    if (total) total.textContent = "2026 年 · 共 " + live.length + " 期";
    const params = new URLSearchParams(location.search);
    const issueNo = params.get("issue");
    const issue = issueNo ? data.archive.find(function (i) { return String(i.number) === issueNo && !i.empty; }) : null;
    if (issueNo) {
      if (!issue || !issue.dailyIds || !issue.dailyIds.length) {
        target.innerHTML = '<div class="empty-state">' + icon("empty") + '<h2>没有找到这一期</h2><p>期号不存在，或该期未记录论文清单。</p></div>';
        return;
      }
      const papers = issue.dailyIds.map(paperById).filter(Boolean);
      const headlineSet = issue.headlineIds || [];
      let number = 1;
      const displayNumbers = {};
      const headlineCards = papers.filter(function (p) { return headlineSet.indexOf(p.id) >= 0; }).map(function (p) {
        displayNumbers[p.id] = number++;
        return paperCard(p, { displayNo: displayNumbers[p.id], showCross: true });
      }).join("");
      const rest = papers.filter(function (p) { return headlineSet.indexOf(p.id) < 0; });
      const grouped = data.topics.filter(function (t) { return t.enabled; }).sort(function (a, b) { return a.order - b.order; }).map(function (t) {
        return { topic: t, papers: rest.filter(function (p) { return p.primaryTopic === t.id; }).sort(function (a, b) { return b.score - a.score; }) };
      }).filter(function (g) { return g.papers.length; });
      let html = '<div class="archive-issue-head"><a class="text-link" href="' + share("archive.html") + '">← 返回期刊索引</a>' +
        '<h2>第 ' + issue.number + ' 期 · ' + issue.date + '</h2><p>' + esc(issue.highlights) + (issue.rebuilt ? '（论文清单为回填重建）' : '') + '</p></div>';
      if (headlineCards) html += '<div class="headlines" style="margin:18px 0 8px">' + headlineCards + '</div>';
      grouped.forEach(function (g) {
        const cards = g.papers.map(function (p) { displayNumbers[p.id] = number++; return paperCard(p, { displayNo: displayNumbers[p.id], showCross: p.topicTags.length > 1 }); }).join("");
        html += '<details class="digest-section topic-section" open><summary><span class="section-name"><span class="topic-badge topic-' + g.topic.id + '">' + g.topic.id + '</span><strong>' + esc(g.topic.name) + '</strong><small>' + esc(g.topic.en) + '</small></span><span class="section-count">' + g.papers.length + ' 篇</span><span class="section-chevron"></span></summary><div class="section-body">' + cards + '</div></details>';
      });
      if (!papers.length) html += '<div class="empty-state">' + icon("empty") + '<h2>该期论文清单缺失</h2><p>这一期记录的论文已不在库中。</p></div>';
      target.innerHTML = html;
      return;
    }
    target.innerHTML = data.archive.map(function (iss) {
      const inner = '<div class="archive-date">' + iss.date.slice(5).replace("-", ".") + '<small>' + iss.date.slice(0, 4) + ' · ISSUE ' + String(iss.number).padStart(3, "0") + '</small></div><div class="archive-info"><h2>' + (iss.current ? "计算成像日报 · 今日" : "计算成像日报") + '</h2><p>' + esc(iss.highlights) + '</p></div><div class="archive-count">' + (iss.count || "—") + '<small>' + (iss.count ? "篇入选" : "暂无归档") + '</small></div>';
      if (iss.empty) return '<div class="archive-item archive-empty">' + inner + '</div>';
      const href = iss.dailyIds && iss.dailyIds.length ? share("archive.html?issue=" + iss.number) : share("index.html");
      return '<a class="archive-item" href="' + href + '">' + inner + '</a>';
    }).join("");
  }
  function normalize(value) { return String(value || "").toLowerCase().replace(/[\s\-_—–·:：,，.。()（）\[\]{}]+/g, " ").trim(); }
  function grams(query) {
    const q = normalize(query).replace(/\s/g, "");
    if (q.length < 2) return q ? [q] : [];
    const result = []; for (let i = 0; i < q.length - 1; i++) result.push(q.slice(i, i + 2));
    return result;
  }
  function highlight(text, query) {
    const q = String(query || "").trim();
    if (!q) return text;
    const safe = q.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    return text.replace(new RegExp("(" + safe + ")", "ig"), "<mark>$1</mark>");
  }
  function renderSearch() {
    const input = document.getElementById("search-input");
    if (!input) return;
    const topicFilters = document.getElementById("topic-filters");
    if (topicFilters) topicFilters.innerHTML = '<button class="filter-chip active" data-topic-filter="all">全部方向</button>' + data.topics.filter(function (t) { return t.enabled; }).sort(function (a, b) { return a.order - b.order; }).map(function (t) { return '<button class="filter-chip" data-topic-filter="' + t.id + '">' + t.id + " · " + esc(t.name) + "</button>"; }).join("");
    let activeTier = "all";
    let activeTopic = "all";
    let index = data.papers;
    fetch((window.__shareUrl || function (p) { return p; })("data/search-index.json")).then(function (r) { if (!r.ok) throw new Error("index"); return r.json(); }).then(function (payload) { if (payload.papers && payload.papers.length) index = payload.papers; run(); }).catch(run);
    function run() {
      const query = input.value.trim();
      document.querySelectorAll("[data-tier]").forEach(function (chip) { chip.classList.toggle("active", chip.dataset.tier === activeTier); });
      document.querySelectorAll("[data-topic-filter]").forEach(function (chip) { chip.classList.toggle("active", chip.dataset.topicFilter === activeTopic); });
      const results = document.getElementById("search-results");
      const count = document.getElementById("search-count");
      if (!query) {
        count.textContent = "等待输入";
        results.innerHTML = '<div class="empty-state">' + icon("empty") + '<h2>从一束光开始搜索</h2><p>支持中英文标题、作者、摘要、标签与方向；中文按 2-gram 匹配。</p><div class="search-suggestions"><button class="filter-chip suggestion">光锥变换</button><button class="filter-chip suggestion">Gaussian</button><button class="filter-chip suggestion">SPAD</button><button class="filter-chip suggestion">可微渲染</button></div></div>';
        return;
      }
      const q = normalize(query);
      const qCompact = q.replace(/\s/g, "");
      const queryGrams = grams(query);
      const words = q.split(" ").filter(Boolean);
      const hasChinese = /[\u4e00-\u9fff]/.test(query);
      let matched = index.map(function (p) {
        const topicNames = p.topicTags.map(function (id) { const t = topicById(id); return id + " " + (t ? t.name : ""); }).join(" ");
        const haystack = normalize([p.title, p.titleZh, p.authors.join(" "), p.summary, p.why, p.tags.join(" "), topicNames].join(" "));
        const compact = haystack.replace(/\s/g, "");
        let score = 0;
        const exact = compact.includes(qCompact);
        if (exact) score += 100;
        if (hasChinese) {
          const hitCount = queryGrams.filter(function (g) { return compact.includes(g); }).length;
          const coverage = queryGrams.length ? hitCount / queryGrams.length : 0;
          if (!exact && coverage < 0.5) return { paper: p, score: 0 };
          score += Math.round(coverage * 20);
        } else {
          const hitCount = words.filter(function (w) { return haystack.includes(w); }).length;
          if (!exact && hitCount < words.length) return { paper: p, score: 0 };
          score += hitCount * 12;
        }
        if (p.title.toLowerCase().includes(query.toLowerCase()) || p.titleZh.includes(query)) score += 40;
        if (activeTier !== "all" && p.tier !== activeTier) score = 0;
        if (activeTopic !== "all" && !p.topicTags.includes(activeTopic)) score = 0;
        return { paper: p, score: score };
      }).filter(function (r) { return r.score > 0; }).sort(function (a, b) { return b.score - a.score || a.paper.no - b.paper.no; });
      count.textContent = matched.length + ' 条结果 · 近 90 天';
      results.innerHTML = matched.length ? matched.map(function (r) { return paperCard(r.paper, { highlight: query, showCross: r.paper.topicTags.length > 1 }); }).join("") : '<div class="empty-state">' + icon("empty") + '<h2>没有找到相关论文</h2><p>试试更短的关键词，或切换方向与分圈筛选。</p></div>';
    }
    input.addEventListener("input", run);
    document.getElementById("search-clear").addEventListener("click", function () { input.value = ""; input.focus(); run(); });
    document.querySelector(".search-filters").addEventListener("click", function (event) { const chip = event.target.closest("[data-tier]"); if (chip) { activeTier = chip.dataset.tier; run(); } });
    document.getElementById("topic-filters").addEventListener("click", function (event) { const chip = event.target.closest("[data-topic-filter]"); if (chip) { activeTopic = chip.dataset.topicFilter; run(); } });
    document.getElementById("search-results").addEventListener("click", function (event) { const suggestion = event.target.closest(".suggestion"); if (suggestion) { input.value = suggestion.textContent; run(); input.focus(); } });
    const params = new URLSearchParams(location.search); if (params.get("q")) input.value = params.get("q");
    run();
  }
  function renderInterest() {
    const watch = document.getElementById("watchlist");
    if (!watch) return;
    watch.innerHTML = data.watchlist.map(function (w) { return '<div class="watch-row"><div>' + esc(w.name) + '<small>' + esc(w.type) + '</small></div><div class="watch-focus">' + esc(w.focus) + '</div><div class="watch-weight mono">+' + Math.round(w.weight * 25) + '</div></div>'; }).join("");
    const interestSubs = document.getElementById("interest-subscriptions");
    if (interestSubs) interestSubs.innerHTML = subscribedTopics().map(function (t) { return '<span class="profile-topic"><span class="topic-badge topic-' + t.id + '">' + t.id + '</span> ' + esc(t.name) + '<strong>权重 ' + getSubscriptions()[t.id] + '</strong></span>'; }).join("");
    const feedback = readStore(STORAGE.feedback);
    const saved = readStore(STORAGE.saved);
    const entries = Object.keys(feedback).map(function (id) { return Object.assign({ id: id }, feedback[id]); }).sort(function (a, b) { return b.ts.localeCompare(a.ts); });
    const savedEntries = Object.keys(saved).map(function (id) { return Object.assign({ id: id, action: "save" }, saved[id]); }).sort(function (a, b) { return b.ts.localeCompare(a.ts); });
    const all = entries.concat(savedEntries).sort(function (a, b) { return b.ts.localeCompare(a.ts); });
    const useful = entries.filter(function (e) { return e.action === "useful"; }).length;
    const useless = entries.filter(function (e) { return e.action === "useless"; }).length;
    document.getElementById("feedback-summary").innerHTML = '<div><strong>' + useful + '</strong><span>有用</span></div><div><strong>' + useless + '</strong><span>没用</span></div><div><strong>' + savedEntries.length + '</strong><span>收藏</span></div>';
    renderSavedList(savedEntries);
    const labels = { useful: "有用", useless: "没用", save: "收藏" };
    document.getElementById("feedback-history").innerHTML = all.length ? all.slice(0, 12).map(function (e) { return '<div class="feedback-row"><span class="tier ' + (e.action === "useless" ? "tier-B" : "tier-A") + '">' + labels[e.action] + '</span><span>' + esc(e.title) + '</span><small>' + e.ts.slice(0, 10) + '</small></div>'; }).join("") : '<div class="empty-state"><h2>还没有反馈</h2><p>在论文卡片上点击「有用」「没用」或「收藏」，记录会保存在本机。</p></div>';
    const topicCounts = {};
    entries.forEach(function (e) { const p = paperById(e.id); if (p) p.tags.forEach(function (t) { topicCounts[t] = (topicCounts[t] || 0) + (e.action === "useful" ? 1 : -1); }); });
    const topics = Object.keys(topicCounts).sort(function (a, b) { return topicCounts[b] - topicCounts[a]; }).slice(0, 6);
    document.getElementById("dynamic-topics").innerHTML = topics.length ? topics.map(function (t) { return '<span class="profile-topic">' + esc(t) + '<strong>' + (topicCounts[t] > 0 ? "+" : "") + topicCounts[t] + '</strong></span>'; }).join("") : '<span class="profile-topic">等待你的反馈<strong>·</strong></span>';
  }
  let savedCategory = "all";
  function renderSavedList(savedEntries) {
    const container = document.getElementById("saved-list");
    if (!container) return;
    const categories = data.topics.filter(function (t) { return t.enabled; });
    const chips = '<button class="filter-chip' + (savedCategory === "all" ? " active" : "") + '" data-saved-cat="all">全部</button>' +
      categories.map(function (t) { return '<button class="filter-chip' + (savedCategory === t.id ? " active" : "") + '" data-saved-cat="' + t.id + '">' + esc(t.name) + '</button>'; }).join("");
    const filtered = savedEntries.filter(function (e) { return savedCategory === "all" || e.category === savedCategory; });
    let html = '<div class="saved-filters">' + chips + '</div>';
    if (!filtered.length) {
      html += '<div class="empty-state"><h2>' + (savedEntries.length ? "该分类下还没有收藏" : "还没有收藏") + '</h2><p>在论文卡片上点击「收藏」，即可在这里按方向整理并直达原文。</p></div>';
    } else {
      html += filtered.map(function (e) {
        const t = topicById(e.category);
        const catName = t ? t.name : (e.category || "未分类");
        return '<article class="saved-card" data-saved-id="' + esc(e.id) + '">' +
          '<div class="saved-card-top"><span class="topic-badge topic-' + esc(e.category) + '">' + esc(e.category) + '</span><span class="saved-cat-name">' + esc(catName) + '</span><span class="saved-date">' + esc(e.ts ? e.ts.slice(0, 10) : "") + '</span></div>' +
          '<a class="saved-title" href="' + esc(e.url || "#") + '" target="_blank" rel="noopener">' + esc(e.title) + '</a>' +
          (e.titleZh ? '<p class="saved-title-zh">' + esc(e.titleZh) + '</p>' : "") +
          (e.summary ? '<p class="saved-summary">' + esc(e.summary) + '</p>' : "") +
          '<div class="saved-actions"><a class="saved-link" href="' + esc(e.url || "#") + '" target="_blank" rel="noopener">查看原文<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M14 4h6v6M20 4l-9 9"></path><path d="M18 13v7H4V6h7"></path></svg></a>' +
          '<button class="saved-remove" data-saved-remove="' + esc(e.id) + '" aria-label="取消收藏">移除</button></div></article>';
      }).join("");
    }
    container.innerHTML = html;
  }
  document.addEventListener("click", function (event) {
    const chip = event.target.closest("[data-saved-cat]");
    if (chip) { savedCategory = chip.dataset.savedCat; renderInterest(); return; }
    const removeBtn = event.target.closest("[data-saved-remove]");
    if (removeBtn) {
      event.preventDefault();
      event.stopPropagation();
      const id = removeBtn.dataset.savedRemove;
      const saved = readStore(STORAGE.saved);
      delete saved[id];
      writeStore(STORAGE.saved, saved);
      toast("已移除收藏");
      renderInterest();
    }
  });
  initGlobal();
  renderToday();
  renderTopicsPage();
  renderArchive();
  renderSearch();
  renderInterest();
})();
