// Home page logic (Bento layout). Content: data/projects.js (PROFILE, PROJECTS) + data/showcase.js (SHOWCASE).
// UI text for each language lives in T below. To add a language: add a key to T, a button in .lang, and {xx: "..."} in data files
// (missing translations fall back to English).
// Shareable URL options: ?lang=id · ?skill=SQL · ?q=yield
(function () {
const P = window.PROJECTS || [], PR = window.PROFILE || {}, S = window.SHOWCASE || {};
const $ = id => document.getElementById(id);
const esc = s => String(s ?? "").replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const gh = PR.github || "";
const live = p => p.live || `https://${gh}.github.io/${p.slug}/`;
const repo = p => p.repo || `https://github.com/${gh}/${p.slug}`;
const pdf = n => `https://${gh}.github.io/Creatative/Project_${n}/Project-${n}-One-Pager.pdf`;
const THUMB = { 3: "p3d", 4: "p4", 20: "p20", 25: "p25", 2: "p2", 17: "p17" };
const byNo = n => P.find(p => p.no === n), app = id => (S.apps || []).find(a => a.id === id);
const done = P.filter(p => p.status === "done").length, nApps = (S.apps || []).length;

const T = {
en: {
 "nav.work": "Work", "nav.apps": "Apps", "nav.all": "All projects", "nav.svc": "Services", "nav.cta": "Let's work together",
 "hero.hi": "Hi, I'm Bagus 👋", "hero.h1": "Data analyst with a process engineer's eye.",
 "hero.p": "I find the real cause behind yield loss, defects, and rework, then build the dashboards and tools that keep the fix in place.",
 "hero.b1": "See my work", "hero.b2": "Hire me for a project",
 "n.p": "analytics projects", nD: d => `${d} published with full reports`, "n.a": "web apps built", "n.as": "work, learning & daily use",
 "shot.k": "Featured app", "shot.p": "Replaces the operator daily-output Excel on the production floor.",
 "open.h": "Available", "open.p": "Open to Data Analyst roles (Indonesia or remote) and freelance projects.",
 "stack.h": "Most-used skills · click to see the projects",
 "talk.h": "Got a messy Excel?", "talk.p": "Send a sample. I'll tell you what can be automated.", "talk.b": "Chat on WhatsApp",
 "talk.wa": "Hi Bagus, I have an Excel/report process I'd like to automate.",
 "work.eb": "Selected work", "work.h": "Case studies",
 "work.p": "Real manufacturing problems on simulated or anonymized data, plus public datasets. Each has a full report, code, and a one-page PDF.",
 cs: "Case study", code: "Code",
 "apps.eb": "Built & used", "apps.h": "Web apps", "apps.p": "Tools for the production floor, interactive learning platforms, and language apps I use every day.",
 allApps: "All", open: "Open app",
 "all.eb": "Full portfolio", allT: n => `All ${n} analytics projects`, "all.p": "Grouped by industry. Search or filter, then open a project.",
 ph: "Search title, tool, or question…", stAll: "All", stDone: "Published", stWip: "In progress / design",
 cnt: (n, t) => n === t ? `Showing all ${t} projects` : `Showing ${n} of ${t} projects`, empty: "No project matches. Try another word or clear the filter.",
 skill: "Skill", clear: "Clear filter",
 status: { done: "Published", "in-progress": "In progress", design: "Design ready", planned: "Planned" },
 cat: { manufacturing: "Manufacturing", retail: "E-commerce & Retail", tech: "Tech & Energy", weather: "Weather", property: "Property", media: "Media & Social", career: "Job Market", aviation: "Aviation" },
 dtype: { public: "Public data", sim: "Simulated data", own: "Anonymized work data", tbd: "Data TBD" },
 "svc.eb": "Services", "svc.h": "Hire me for a project", "svc.p": "For manufacturing and operations teams that run on Excel and copy-paste.",
 ask: "Ask about this", askWa: t => `Hi Bagus, I'm interested in: ${t}`, examples: "Examples",
 "end.h": "Let's build something useful.", "end.p": "Hiring for a data role, or need a dashboard, automation, or internal tool? Based in Indonesia (UTC+7), open to remote.",
 wa: "Hi Bagus, I found your portfolio and would like to discuss a project.", mail: "Portfolio inquiry",
 vwT: "Welcome! Choose a view", vwP: "This portfolio has a new design. During the transition you can still use the old one.", vwNewT: "New view", vwNewS: "Case studies, web apps, services · EN / ID / 中文", vwOldT: "Old view", vwOldS: "The previous design · EN / ID", vwRem: "Remember my choice", toClassic: "Switch to old view",
 foot: y => `© ${y} Bagus Bernadi · Plain HTML, CSS, and JavaScript on GitHub Pages`, top: "Back to top", menu: "Menu"
},
id: {
 "nav.work": "Karya", "nav.apps": "Aplikasi", "nav.all": "Semua project", "nav.svc": "Jasa", "nav.cta": "Ayo kerja sama",
 "hero.hi": "Halo, saya Bagus 👋", "hero.h1": "Data analyst dengan cara pandang process engineer.",
 "hero.p": "Saya mencari penyebab sebenarnya dari yield loss, defect, dan rework, lalu membangun dashboard dan tools agar perbaikannya bertahan.",
 "hero.b1": "Lihat karya saya", "hero.b2": "Pakai jasa saya",
 "n.p": "project analisis data", nD: d => `${d} sudah terbit dengan laporan lengkap`, "n.a": "web app dibuat", "n.as": "kerja, belajar & harian",
 "shot.k": "Aplikasi unggulan", "shot.p": "Pengganti Excel output harian operator di lantai produksi.",
 "open.h": "Tersedia", "open.p": "Terbuka untuk posisi Data Analyst (Indonesia atau remote) dan project freelance.",
 "stack.h": "Skill paling sering dipakai · klik untuk melihat project-nya",
 "talk.h": "Punya Excel yang berantakan?", "talk.p": "Kirim contohnya. Saya beri tahu bagian mana yang bisa diotomasi.", "talk.b": "Chat via WhatsApp",
 "talk.wa": "Halo Bagus, saya punya proses Excel/laporan yang ingin diotomasi.",
 "work.eb": "Karya pilihan", "work.h": "Studi kasus",
 "work.p": "Masalah manufaktur nyata dengan data simulasi atau yang dianonimkan, plus dataset publik. Masing-masing punya laporan lengkap, kode, dan PDF satu halaman.",
 cs: "Studi kasus", code: "Kode",
 "apps.eb": "Dibuat & dipakai", "apps.h": "Web app", "apps.p": "Tools untuk lantai produksi, platform belajar interaktif, dan aplikasi bahasa yang saya pakai setiap hari.",
 allApps: "Semua", open: "Buka aplikasi",
 "all.eb": "Portofolio lengkap", allT: n => `Semua ${n} project analisis data`, "all.p": "Dikelompokkan per industri. Cari atau filter, lalu buka project-nya.",
 ph: "Cari judul, tools, atau pertanyaan…", stAll: "Semua", stDone: "Terbit", stWip: "Dikerjakan / rancangan",
 cnt: (n, t) => n === t ? `Menampilkan semua ${t} project` : `Menampilkan ${n} dari ${t} project`, empty: "Tidak ada project yang cocok. Coba kata lain atau hapus filter.",
 skill: "Skill", clear: "Hapus filter",
 status: { done: "Terbit", "in-progress": "Dikerjakan", design: "Rancangan siap", planned: "Direncanakan" },
 cat: { manufacturing: "Manufaktur", retail: "E-commerce & Retail", tech: "Teknologi & Energi", weather: "Cuaca", property: "Properti", media: "Media & Sosial", career: "Pasar Kerja", aviation: "Penerbangan" },
 dtype: { public: "Data publik", sim: "Data simulasi", own: "Data kerja dianonimkan", tbd: "Data belum dipilih" },
 "svc.eb": "Jasa", "svc.h": "Pakai jasa saya untuk project Anda", "svc.p": "Untuk tim manufaktur dan operasional yang masih bergantung pada Excel dan copy-paste.",
 ask: "Tanya soal ini", askWa: t => `Halo Bagus, saya tertarik dengan: ${t}`, examples: "Contoh",
 "end.h": "Mari bangun sesuatu yang berguna.", "end.p": "Sedang merekrut untuk posisi data, atau butuh dashboard, otomasi, atau tools internal? Berbasis di Indonesia (UTC+7), terbuka untuk remote.",
 wa: "Halo Bagus, saya melihat portofolio Anda dan ingin mendiskusikan sebuah project.", mail: "Pertanyaan dari portofolio",
 vwT: "Selamat datang! Pilih tampilan", vwP: "Portofolio ini punya desain baru. Selama masa transisi, tampilan lama masih bisa dipakai.", vwNewT: "Tampilan baru", vwNewS: "Studi kasus, web app, jasa · EN / ID / 中文", vwOldT: "Tampilan lama", vwOldS: "Desain sebelumnya · EN / ID", vwRem: "Ingat pilihan saya", toClassic: "Pindah ke tampilan lama",
 foot: y => `© ${y} Bagus Bernadi · HTML, CSS, dan JavaScript murni di GitHub Pages`, top: "Kembali ke atas", menu: "Menu"
},
zh: {
 "nav.work": "作品", "nav.apps": "应用", "nav.all": "全部项目", "nav.svc": "服务", "nav.cta": "合作洽谈",
 "hero.hi": "你好，我是 Bagus 👋", "hero.h1": "具备工艺工程师视角的数据分析师。",
 "hero.p": "我找出良率损失、不良和返工背后的真正原因，再搭建看板和工具，让改善成果持续有效。",
 "hero.b1": "查看作品", "hero.b2": "委托项目",
 "n.p": "个数据分析项目", nD: d => `其中 ${d} 个已发布完整报告`, "n.a": "个 Web 应用", "n.as": "工作、学习与日常使用",
 "shot.k": "精选应用", "shot.p": "在生产现场取代作业员每日产量 Excel。",
 "open.h": "可接洽", "open.p": "寻求数据分析师职位（印尼或远程）及自由职业项目。",
 "stack.h": "最常用技能 · 点击查看相关项目",
 "talk.h": "Excel 太乱？", "talk.p": "发个样本给我，我告诉您哪些可以自动化。", "talk.b": "WhatsApp 联系",
 "talk.wa": "您好 Bagus，我有一个 Excel/报表流程想要自动化。",
 "work.eb": "精选作品", "work.h": "案例研究",
 "work.p": "使用模拟或匿名数据的真实制造业问题，以及公开数据集。每个案例都有完整报告、代码和一页 PDF。",
 cs: "查看案例", code: "代码",
 "apps.eb": "开发并使用中", "apps.h": "Web 应用", "apps.p": "生产现场工具、互动学习平台，以及我每天使用的语言应用。",
 allApps: "全部", open: "打开应用",
 "all.eb": "完整作品集", allT: n => `全部 ${n} 个数据分析项目`, "all.p": "按行业分组。可搜索或筛选，再打开项目。",
 ph: "搜索标题、工具或问题…", stAll: "全部", stDone: "已发布", stWip: "进行中 / 设计中",
 cnt: (n, t) => n === t ? `显示全部 ${t} 个项目` : `显示 ${n} / ${t} 个项目`, empty: "没有匹配的项目。请换个关键词或清除筛选。",
 skill: "技能", clear: "清除筛选",
 status: { done: "已发布", "in-progress": "进行中", design: "设计完成", planned: "计划中" },
 cat: { manufacturing: "制造业", retail: "电商与零售", tech: "科技与能源", weather: "气象", property: "房地产", media: "媒体与社交", career: "就业市场", aviation: "航空" },
 dtype: { public: "公开数据", sim: "模拟数据", own: "匿名工作数据", tbd: "数据待定" },
 "svc.eb": "服务", "svc.h": "委托我做项目", "svc.p": "适合仍依赖 Excel 和复制粘贴的制造与运营团队。",
 ask: "咨询此服务", askWa: t => `您好 Bagus，我对以下服务感兴趣：${t}`, examples: "案例",
 "end.h": "一起做点有用的东西。", "end.p": "正在招聘数据岗位，或需要看板、自动化、内部工具？我在印尼（UTC+7），可远程合作。",
 wa: "您好 Bagus，我看了您的作品集，想和您讨论一个项目。", mail: "作品集咨询",
 vwT: "欢迎！请选择版本", vwP: "本作品集已改版。过渡期间仍可使用旧版。", vwNewT: "新版", vwNewS: "案例研究、Web 应用、服务 · EN / ID / 中文", vwOldT: "旧版", vwOldS: "之前的设计 · EN / ID", vwRem: "记住我的选择", toClassic: "切换到旧版",
 foot: y => `© ${y} Bagus Bernadi · 纯 HTML、CSS 和 JavaScript，托管于 GitHub Pages`, top: "回到顶部", menu: "菜单", sep: "。"
}};

// ---- state ----
const qs = new URLSearchParams(location.search);
const store = { get: k => { try { return localStorage.getItem(k) } catch (e) { return null } }, set: (k, v) => { try { localStorage.setItem(k, v) } catch (e) {} } };
let lang = qs.get("lang") || store.get("lang") || (() => { const n = (navigator.language || "").toLowerCase(); return n.startsWith("id") ? "id" : n.startsWith("zh") ? "zh" : "en"; })();
if (!T[lang]) lang = "en";
let q = (qs.get("q") || "").toLowerCase(), skill = qs.get("skill"), st = "all", g = "all";
const L = x => (x && typeof x === "object" && !Array.isArray(x)) ? (x[lang] ?? x.en) : x;
const t = k => T[lang][k] ?? T.en[k];
const metric = f => lang === "id" ? (f.metricId || f.metric) : f.metric;
const wa = msg => `https://wa.me/${(PR.whatsapp || "").replace(/\D/g, "")}?text=${encodeURIComponent(msg)}`;
const proof = x => {
  if (typeof x === "number") { const p = byNo(x); return p ? { t: `#${p.no} ${p.title}`, u: live(p) } : null; }
  const a = app(x); return a ? { t: a.title, u: a.live || a.repo } : null;
};
const skc = {}; P.forEach(p => (p.skills || []).forEach(s => skc[s] = (skc[s] || 0) + 1));
const topSk = Object.entries(skc).sort((a, b) => b[1] - a[1]).slice(0, 10);
if (skill && !skc[skill]) skill = null;
const ICON = ['<svg viewBox="0 0 24 24" fill="none" stroke-width="2"><path d="M3 3v18h18"/><path d="M7 15l4-4 3 3 5-6"/></svg>',
  '<svg viewBox="0 0 24 24" fill="none" stroke-width="2"><path d="M4 7h10M4 12h16M4 17h7"/><path d="M17 4l3 3-3 3"/></svg>',
  '<svg viewBox="0 0 24 24" fill="none" stroke-width="2"><rect x="3" y="4" width="18" height="14" rx="2"/><path d="M8 21h8M3 9h18"/></svg>'];

// ---- renderers ----
function renderApps() {
  const gs = ["all", ...Object.keys(S.groups || {})];
  $("appF").innerHTML = gs.map(k => `<button class="fchip" type="button" data-g="${k}" aria-pressed="${k === g}">${k === "all" ? t("allApps") : esc(L(S.groups[k]))}</button>`).join("");
  $("apps2").innerHTML = S.apps.filter(a => g === "all" || a.group === g).map(a =>
    `<a class="ac ${a.group === "work" && g === "all" ? "big" : ""}" href="${a.live || a.repo}" target="_blank" rel="noopener"><img src="assets/thumbs/${a.id}.jpg" alt="${esc(a.title)}" loading="lazy"><div class="b"><span class="g">${esc(L(S.groups[a.group]))} · ${esc(L(a.tag))}</span><h3>${esc(a.title)}</h3><p>${esc(L(a.desc))}</p></div></a>`).join("");
}
function renderProjects() {
  $("stF").innerHTML = [["all", t("stAll")], ["done", t("stDone")], ["wip", t("stWip")]].map(([k, l]) => `<button class="fchip" type="button" data-st="${k}" aria-pressed="${k === st}">${l}</button>`).join(" ");
  $("skSel").innerHTML = skill ? `<span class="sel">${t("skill")}: ${esc(skill)} <button type="button" id="skX" aria-label="${t("clear")}">×</button></span>` : "";
  const r = P.filter(p => (st === "all" || (st === "done" ? p.status === "done" : p.status !== "done"))
    && (!skill || (p.skills || []).includes(skill))
    && (!q || [p.title, p.tools, L(p.question), (p.skills || []).join(" "), "#" + p.no].join(" ").toLowerCase().includes(q)));
  const filtered = r.length !== P.length;
  $("cnt").textContent = t("cnt")(r.length, P.length);
  const cats = [...new Set(P.map(p => p.category))].sort((a, b) => P.filter(p => p.category === b).length - P.filter(p => p.category === a).length);
  const html = cats.map((k, i) => {
    const rr = r.filter(p => p.category === k); if (!rr.length) return "";
    return `<details ${filtered || i === 0 ? "open" : ""}><summary>${esc(t("cat")[k] || k)}<span class="c">${rr.length}</span></summary><div class="pl">${rr.map(p =>
      `<a class="pi" href="${live(p)}" target="_blank" rel="noopener" title="${esc(L(p.question))}"><span class="n">#${String(p.no).padStart(2, "0")}</span><span><b>${esc(p.title)}</b><small>${esc((p.skills || []).slice(0, 4).join(" · "))}</small></span><span class="s ${p.status === "done" ? "d" : "w"}">${t("status")[p.status]}</span></a>`).join("")}</div></details>`;
  }).join("");
  $("acc").innerHTML = html || `<div class="empty">${t("empty")}</div>`;
  const x = $("skX"); if (x) x.onclick = () => { skill = null; renderProjects(); };
}
function render() {
  document.documentElement.lang = lang === "zh" ? "zh-CN" : lang;
  document.querySelectorAll("[data-lang]").forEach(b => b.setAttribute("aria-pressed", b.dataset.lang === lang));
  document.querySelectorAll("[data-i]").forEach(el => { const v = t(el.dataset.i); if (typeof v === "string") el.textContent = v; });
  $("nP").textContent = P.length; $("nD").textContent = t("nD")(done); $("nA").textContent = nApps;
  $("chips").innerHTML = topSk.map(([s, n]) => `<button type="button" data-sk="${esc(s)}">${esc(s)}<b>${n}</b></button>`).join("");
  $("waT").href = wa(t("talk.wa"));
  $("feat").innerHTML = S.featured.map(f => { const p = byNo(f.no); if (!p) return ""; return `<article class="fc"><div class="im"><img src="assets/thumbs/${THUMB[f.no] || "mes"}.jpg" alt="${esc(p.title)}" loading="lazy"><span class="badge">${metric(f)}</span></div><div class="b"><span class="m">#${p.no} · ${esc(t("cat")[p.category])} · ${esc(t("dtype")[p.data.type])}</span><h3>${esc(p.title)}</h3><p>${esc(L(f.label))}${t("sep") || ". "}${esc(L(f.point))}</p><div class="act"><a class="btn acc sm" href="${live(p)}" target="_blank" rel="noopener">${t("cs")}</a><a class="btn sm" href="${pdf(p.no)}" target="_blank" rel="noopener">PDF</a><a class="btn sm" href="${repo(p)}" target="_blank" rel="noopener">${t("code")}</a></div></div></article>`; }).join("");
  renderApps();
  $("allT").textContent = t("allT")(P.length); $("q").placeholder = t("ph"); $("q").setAttribute("aria-label", t("ph")); $("q").value = q;
  renderProjects();
  $("svc").innerHTML = S.services.map((s, i) => `<div class="sv ${i === 1 ? "mid" : ""}"><div class="ic">${ICON[i % 3]}</div><h3>${esc(L(s.title))}</h3><p>${esc(L(s.desc))}</p><ul>${L(s.gets).map(x => `<li>${esc(x)}</li>`).join("")}</ul><p style="font-size:13.5px;color:var(--mut)">${t("examples")}: ${s.proof.map(proof).filter(Boolean).map(x => `<a href="${x.u}" target="_blank" rel="noopener" style="color:var(--acc)">${esc(x.t)}</a>`).join(", ")}</p><a class="btn ${i === 1 ? "acc" : ""}" href="${wa(t("askWa")(L(s.title)))}" target="_blank" rel="noopener">${t("ask")}</a></div>`).join("");
  $("steps").innerHTML = S.steps.map((s, i) => `<span><b>${i + 1}</b> ${esc(L(s)[0])}</span>`).join("");
  $("faq").innerHTML = (S.faq || []).map(f => { const [a, b] = L(f); return `<div><b>${esc(a)}</b><span>${esc(b)}</span></div>`; }).join("");
  $("cb").innerHTML = `<a class="btn wa" href="${wa(t("wa"))}" target="_blank" rel="noopener">WhatsApp</a><a class="btn" href="mailto:${PR.email}?subject=${encodeURIComponent(t("mail"))}">Email</a><a class="btn" href="${PR.linkedin}" target="_blank" rel="noopener">LinkedIn</a><a class="btn" href="https://github.com/${gh}" target="_blank" rel="noopener">GitHub</a>`;
  const ph = (PR.whatsapp || "").replace(/\D/g, ""); $("addr").textContent = `${PR.email}${ph ? " · +" + ph : ""}`;
  $("totop").setAttribute("aria-label", t("top")); $("menuBtn").setAttribute("aria-label", t("menu"));
  $("foot").textContent = t("foot")(new Date().getFullYear());
  $("toClassic").textContent = t("toClassic");
  ["vwT", "vwP", "vwNewT", "vwNewS", "vwOldT", "vwOldS"].forEach(k => $(k).textContent = t(k)); $("vwRemT").textContent = t("vwRem");
  document.querySelectorAll("#vwLang [data-l]").forEach(b => b.setAttribute("aria-pressed", b.dataset.l === lang));
}

// ---- events ----
document.querySelector(".lang").onclick = e => {
  const b = e.target.closest("[data-lang]"); if (!b) return; lang = b.dataset.lang; store.set("lang", lang);
  try { const u = new URL(location.href); u.searchParams.delete("lang"); history.replaceState(null, "", u); } catch (e) {}
  render();
};
$("chips").onclick = e => { const b = e.target.closest("[data-sk]"); if (!b) return; skill = b.dataset.sk; st = "all"; renderProjects(); $("all").scrollIntoView({ behavior: "smooth" }); };
$("appF").onclick = e => { const b = e.target.closest("[data-g]"); if (!b) return; g = b.dataset.g; renderApps(); };
$("stF").onclick = e => { const b = e.target.closest("[data-st]"); if (!b) return; st = b.dataset.st; renderProjects(); };
$("q").oninput = e => { q = e.target.value.toLowerCase().trim(); renderProjects(); };
const menuBtn = $("menuBtn"), drawer = $("drawer");
menuBtn.onclick = () => { const o = drawer.classList.toggle("open"); menuBtn.setAttribute("aria-expanded", o); };
drawer.onclick = e => { if (e.target.closest("a")) { drawer.classList.remove("open"); menuBtn.setAttribute("aria-expanded", false); } };
$("totop").onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });
// scrollspy + back-to-top visibility
const secs = ["work", "apps", "all", "services"].map(id => $(id));
let tick = false;
window.addEventListener("scroll", () => {
  if (tick) return; tick = true;
  requestAnimationFrame(() => {
    $("totop").classList.toggle("show", scrollY > 800);
    let cur = ""; secs.forEach(s => { if (s.getBoundingClientRect().top < 120) cur = s.id; });
    document.querySelectorAll(".links a").forEach(a => a.classList.toggle("on", a.getAttribute("href") === "#" + cur));
    tick = false;
  });
}, { passive: true });

// ---- view chooser (transition period) ----
const vw = $("vw"), ss = { get: k => { try { return sessionStorage.getItem(k) } catch (e) { return null } }, set: (k, v) => { try { sessionStorage.setItem(k, v) } catch (e) {} } };
let lastFocus = null;
function closeVw() { vw.hidden = true; document.body.style.overflow = ""; if (lastFocus) lastFocus.focus(); }
function choose(v) {
  if ($("vwRem").checked) store.set("view", v); ss.set("view", v);
  if (v === "classic") { location.href = "classic/" + location.search + location.hash; return; }
  closeVw();
}
$("vwNew").onclick = () => choose("new");
$("vwOld").onclick = () => choose("classic");
$("vwLang").onclick = e => { const b = e.target.closest("[data-l]"); if (b) document.querySelector(`.lang [data-lang="${b.dataset.l}"]`).click(); };
vw.addEventListener("keydown", e => {
  if (e.key === "Escape") { ss.set("view", "new"); closeVw(); }
  if (e.key === "Tab") { const f = [...vw.querySelectorAll("button,input")], i = f.indexOf(document.activeElement);
    if (e.shiftKey && i <= 0) { e.preventDefault(); f[f.length - 1].focus(); } else if (!e.shiftKey && i === f.length - 1) { e.preventDefault(); f[0].focus(); } }
});
$("toClassic").onclick = () => store.set("view", "classic");

render();
if (!store.get("view") && !ss.get("view")) { lastFocus = document.activeElement; vw.hidden = false; document.body.style.overflow = "hidden"; setTimeout(() => $("vwNew").focus(), 30); }
if (skill || q) setTimeout(() => $("all").scrollIntoView(), 50);
})();
