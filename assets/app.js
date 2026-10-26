(function(){
const P=window.PROJECTS||[],PR=window.PROFILE||{};
const T={
en:{"nav.projects":"Projects","nav.about":"About","nav.skills":"Skills","nav.contact":"Contact",
"hero.title":"Turning shop-floor data into decisions",
"hero.lead":"I am a Process Engineer in high-tech component manufacturing, moving into data analytics. This portfolio collects 34 projects: from yield and defect tracking on the production line to public datasets in retail, energy, and the job market.",
"hero.cta1":"Browse projects","hero.cta2":"GitHub profile",
"st.total":"projects","st.ready":"published","st.prog":"in progress or designed",
"proj.title":"Projects","proj.sub":"Every project has its own repository and GitHub Pages site. Each one starts from a business question, then shows the data, analysis, and recommendation.",
"f.search":"Search","f.ph":"Search title, tool, or question","f.all":"All","f.empty":"No project matches the filter.",
"s.no":"Order: project number","s.status":"Order: most complete first","s.skill":"Order: most matching skills",
"f.skill":"Filter by skill","f.skillh":"pick one or more; projects using more of them come first","f.clear":"Clear skills","f.match":(a,b)=>`${a} of ${b} skills`,
"g.db":"Database & SQL","g.py":"Python","g.bi":"BI & dashboard","g.eng":"Engineering & AI",
"count":(n,t)=>`Showing ${n} of ${t} projects`,
"status.planned":"Planned","status.design":"Design ready","status.in-progress":"In progress","status.done":"Published",
"lg.planned":"not started yet","lg.design":"project design published","lg.in-progress":"being built","lg.done":"finished, with live results",

"cat.manufacturing":"Manufacturing","cat.retail":"E-commerce & Retail","cat.tech":"Tech & Energy","cat.weather":"Weather & Environment","cat.property":"Property & Economy","cat.media":"Media & Social","cat.career":"Job Market & Career","cat.aviation":"Aviation & Compliance",
"btn.live":"View project","data.l":"Data","dt.public":"Public","dt.sim":"Simulated","dt.own":"Own collection","dt.tbd":"To be selected","btn.code":"Code","btn.soon":"Coming soon",
"about.title":"About",
"about.p1":"I work on a high-tech component production line: monitoring output, yield, rework, and defects, training new operators, and building small tools in Excel and Python to make reporting faster and more reliable.",
"about.p2":"These projects show how I approach data: define the business question first, clean and validate the data, use SQL and statistics only where they answer the question, and finish with a clear recommendation and an estimated impact.",
"about.h3":"How to read each project",
"about.l1":"<b>Problem</b>: the business question.","about.l2":"<b>Data</b>: source, size, and cleaning steps.","about.l3":"<b>Analysis</b>: method, code, and findings.","about.l4":"<b>Recommendation</b>: actions based on findings.","about.l5":"<b>Impact</b>: formula with explicit assumptions.",
"about.note":"Manufacturing projects use simulated or anonymized data because factory data is confidential. Impact numbers are labeled \"estimated\" or \"simulated\".",
"skills.title":"Skills","skills.sub":"Underlined terms: hover or tap for a short explanation.","tip.used":n=>`Used in ${n} projects →`,
"sk":[["SQL","DuckDB, SQLite, PostgreSQL, BigQuery. CTE, window functions, views, data tests."],["Python","pandas, NumPy, Polars, Plotly, scikit-learn, scripts and notebooks."],["Statistics","Hypothesis tests, confidence intervals, SPC and control charts, Cp/Cpk, A/B testing."],["Excel","Formulas, data validation, sheet protection, Power Query, cross-checking results."],["Dashboards","Streamlit, Looker Studio, Power BI. KPI design for non-technical readers."],["Data pipelines","ETL, parsing messy files, GitHub Actions scheduling, dbt."],["AI for analytics","LLM classification and extraction, natural-language-to-SQL with evaluation."],["Manufacturing domain","Yield, rework, defect Pareto, cycle time, QCC, operator training."]],
"contact.title":"Contact","contact.sub":"Open to Data Analyst roles in Indonesia and abroad.",
"foot":"Built with plain HTML, CSS, and JavaScript. Hosted on GitHub Pages."},
id:{"nav.projects":"Project","nav.about":"Tentang","nav.skills":"Keahlian","nav.contact":"Kontak",
"hero.title":"Mengubah data lantai produksi menjadi keputusan",
"hero.lead":"Saya Process Engineer di manufaktur komponen teknologi tinggi yang sedang beralih ke bidang data analytics. Portofolio ini berisi 34 project: dari pelacakan yield dan defect di lini produksi sampai dataset publik di bidang retail, energi, dan pasar kerja.",
"hero.cta1":"Lihat project","hero.cta2":"Profil GitHub",
"st.total":"project","st.ready":"sudah terbit","st.prog":"sedang dikerjakan atau sudah dirancang",
"proj.title":"Project","proj.sub":"Setiap project punya repository dan situs GitHub Pages sendiri. Semua dimulai dari pertanyaan bisnis, lalu menampilkan data, analisis, dan rekomendasi.",
"f.search":"Cari","f.ph":"Cari judul, tools, atau pertanyaan","f.all":"Semua","f.empty":"Tidak ada project yang cocok dengan filter.",
"s.no":"Urutan: nomor project","s.status":"Urutan: paling lengkap dulu","s.skill":"Urutan: skill paling cocok",
"f.skill":"Filter berdasarkan skill","f.skillh":"pilih satu atau lebih; project yang memakai lebih banyak skill tampil lebih dulu","f.clear":"Hapus pilihan skill","f.match":(a,b)=>`${a} dari ${b} skill`,
"g.db":"Database & SQL","g.py":"Python","g.bi":"BI & dashboard","g.eng":"Engineering & AI",
"count":(n,t)=>`Menampilkan ${n} dari ${t} project`,
"status.planned":"Direncanakan","status.design":"Rancangan siap","status.in-progress":"Dikerjakan","status.done":"Terbit",
"lg.planned":"belum dimulai","lg.design":"rancangan project sudah terbit","lg.in-progress":"sedang dibangun","lg.done":"selesai, hasil bisa dibuka",

"cat.manufacturing":"Manufaktur","cat.retail":"E-commerce & Retail","cat.tech":"Teknologi & Energi","cat.weather":"Cuaca & Lingkungan","cat.property":"Properti & Ekonomi","cat.media":"Media & Sosial","cat.career":"Pasar Kerja & Karier","cat.aviation":"Penerbangan & Compliance",
"btn.live":"Buka project","data.l":"Data","dt.public":"Publik","dt.sim":"Simulasi","dt.own":"Kumpulan sendiri","dt.tbd":"Belum dipilih","btn.code":"Kode","btn.soon":"Segera hadir",
"about.title":"Tentang",
"about.p1":"Saya bekerja di lini produksi komponen teknologi tinggi: memantau output, yield, rework, dan defect, melatih operator baru, serta membuat alat bantu di Excel dan Python agar pelaporan lebih cepat dan andal.",
"about.p2":"Project-project ini menunjukkan cara saya mengolah data: menetapkan pertanyaan bisnis lebih dulu, membersihkan dan memvalidasi data, memakai SQL dan statistik hanya jika menjawab pertanyaan, lalu menutup dengan rekomendasi yang jelas dan estimasi dampak.",
"about.h3":"Cara membaca setiap project",
"about.l1":"<b>Problem</b>: pertanyaan bisnis.","about.l2":"<b>Data</b>: sumber, ukuran, dan langkah cleaning.","about.l3":"<b>Analysis</b>: metode, kode, dan temuan.","about.l4":"<b>Recommendation</b>: tindakan berdasarkan temuan.","about.l5":"<b>Impact</b>: rumus dengan asumsi yang tertulis jelas.",
"about.note":"Project manufaktur memakai data simulasi atau data yang dianonimkan karena data pabrik bersifat rahasia. Angka dampak diberi label \"estimated\" atau \"simulated\".",
"skills.title":"Keahlian","skills.sub":"Istilah bergaris bawah: arahkan kursor atau ketuk untuk penjelasan singkat.","tip.used":n=>`Dipakai di ${n} project →`,
"sk":[["SQL","DuckDB, SQLite, PostgreSQL, BigQuery. CTE, window function, view, data test."],["Python","pandas, NumPy, Polars, Plotly, scikit-learn, skrip dan notebook."],["Statistik","Uji hipotesis, confidence interval, SPC dan control chart, Cp/Cpk, A/B testing."],["Excel","Rumus, data validation, proteksi sheet, Power Query, cek silang hasil."],["Dashboard","Streamlit, Looker Studio, Power BI. Desain KPI untuk pembaca non-teknis."],["Data pipeline","ETL, parsing file berantakan, penjadwalan GitHub Actions, dbt."],["AI untuk analitik","Klasifikasi dan ekstraksi dengan LLM, natural language to SQL beserta evaluasinya."],["Domain manufaktur","Yield, rework, Pareto defect, cycle time, QCC, pelatihan operator."]],
"contact.title":"Kontak","contact.sub":"Terbuka untuk posisi Data Analyst di Indonesia maupun luar negeri.",
"foot":"Dibuat dengan HTML, CSS, dan JavaScript murni. Di-hosting di GitHub Pages."}};
const CATH={manufacturing:"--navyH",retail:"--roseH",tech:"--plumH",weather:"--tealH",property:"--amberH",media:"--roseH",career:"--skyH",aviation:"--plumH"};
const STO={done:0,"in-progress":1,design:2,planned:3};
const $=id=>document.getElementById(id);
const esc=s=>String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const gh=PR.github||"";
const liveURL=p=>p.live||`https://${gh}.github.io/${p.slug}/`,repoURL=p=>p.repo||`https://github.com/${gh}/${p.slug}`;
const hasLink=p=>true;
// Skill taxonomy: derived from the free-text "tools" field. A project may also set "skills": [...] to override.
const SK=[["db","SQL",/\bSQL\b|DuckDB|SQLite|PostgreSQL|BigQuery|dbt/i],["db","DuckDB",/DuckDB/i],["db","SQLite",/SQLite/i],["db","PostgreSQL",/PostgreSQL/i],["db","BigQuery",/BigQuery/i],["db","dbt",/\bdbt/i],
["py","Python",/Python/i],["py","pandas",/pandas/i],["py","NumPy",/NumPy/i],["py","Polars",/Polars/i],["py","SciPy",/SciPy/i],["py","statsmodels",/statsmodels/i],["py","scikit-learn",/scikit-learn/i],["py","Plotly",/plotly/i],["py","matplotlib",/matplotlib/i],["py","Jupyter",/Jupyter/i],["py","pytest",/pytest/i],
["bi","Streamlit",/Streamlit/i],["bi","Power BI",/Power BI/i],["bi","Looker Studio",/Looker/i],["bi","Excel",/Excel/i],["bi","Power Query",/Power Query/i],["bi","HTML dashboard",/dashboard HTML|HTML dashboard/i],
["eng","GitHub Actions",/GitHub Actions/i],["eng","Docker",/Docker/i],["eng","LLM",/LLM|Claude|Gemini|LangChain|LangGraph/i],["eng","NLP",/NLP|sentiment/i],["eng","Web scraping",/Playwright|requests|scraping/i]];
P.forEach(p=>{p._sk=Array.isArray(p.skills)?p.skills:SK.filter(([, ,re])=>re.test(p.tools)).map(([,n])=>n)});
const SKC=n=>P.filter(p=>p._sk.includes(n)).length;
const SKG=["db","py","bi","eng"];
// chip colors: one hue per skill group, darker shades alternate inside a group
const GH={db:"--navyH",py:"--tealH",bi:"--amberH",eng:"--plumH"},SHADE=[0,22,38];
const SKCOL={};SKG.forEach(g=>SK.filter(s=>s[0]===g).forEach((s,i)=>{SKCOL[s[1]]=`color-mix(in srgb,var(${GH[g]}) ${100-SHADE[i%3]}%,#000)`}));
const skc=n=>SKCOL[n]||"var(--blue)";
// Glossary for the Skills cards: platforms and acronyms get a dotted underline and a popover.
// key = text as written in "sk"; f = what the acronym stands for; sk = name in SK (adds the "used in N projects" link); h = match in card titles only
const GL={
"SQL":{h:1,f:"Structured Query Language",en:"The standard language for querying and shaping data in a database.",id:"Bahasa standar untuk mengambil dan mengolah data di database."},
"DuckDB":{sk:"DuckDB",en:"Fast analytics SQL database that runs inside a script with no server; reads CSV and Parquet files directly.",id:"Database SQL analitik yang berjalan di dalam skrip tanpa server; bisa langsung membaca file CSV dan Parquet."},
"SQLite":{sk:"SQLite",en:"Lightweight SQL database stored as a single file; common in small apps.",id:"Database SQL ringan yang tersimpan dalam satu file; umum dipakai di aplikasi kecil."},
"PostgreSQL":{sk:"PostgreSQL",en:"Open-source server database (\"Postgres\") for multi-user applications.",id:"Database server open-source (\"Postgres\") untuk aplikasi dengan banyak pengguna."},
"BigQuery":{sk:"BigQuery",en:"Google Cloud data warehouse: runs SQL over large datasets with no server to manage.",id:"Data warehouse Google Cloud: menjalankan SQL pada data besar tanpa perlu mengelola server."},
"CTE":{f:"Common Table Expression",en:"A named step inside a query (WITH ...) that keeps long queries readable.",id:"Langkah bernama di dalam query (WITH ...) agar query panjang tetap mudah dibaca."},
"Python":{h:1,en:"General-purpose programming language; the main language for data analysis.",id:"Bahasa pemrograman serbaguna; bahasa utama untuk analisis data."},
"pandas":{sk:"pandas",en:"Python library for tables (DataFrames): cleaning, joining, and grouping data.",id:"Library Python untuk tabel (DataFrame): membersihkan, menggabungkan, dan mengelompokkan data."},
"NumPy":{f:"Numerical Python",sk:"NumPy",en:"Fast arrays and math; the foundation of most Python data libraries.",id:"Array dan perhitungan numerik yang cepat; fondasi sebagian besar library data Python."},
"Polars":{sk:"Polars",en:"Newer DataFrame library, faster than pandas on large data.",id:"Library DataFrame yang lebih baru, lebih cepat dari pandas untuk data besar."},
"Plotly":{sk:"Plotly",en:"Interactive charts (zoom, hover) for notebooks, web pages, and dashboards.",id:"Grafik interaktif (zoom, hover) untuk notebook, halaman web, dan dashboard."},
"scikit-learn":{sk:"scikit-learn",en:"Machine-learning library: clustering, classification, regression, and model evaluation.",id:"Library machine learning: clustering, klasifikasi, regresi, dan evaluasi model."},
"notebooks":{f:"Jupyter Notebook",sk:"Jupyter",en:"A document that mixes code, results, and notes; used to explore data step by step.",id:"Dokumen yang menggabungkan kode, hasil, dan catatan; dipakai untuk menelusuri data langkah demi langkah."},
"SPC":{f:"Statistical Process Control",en:"Monitoring a process with statistics to separate normal variation from real problems.",id:"Memantau proses dengan statistik untuk memisahkan variasi normal dari masalah yang nyata."},
"Cp/Cpk":{f:"Process Capability index",en:"How well a process fits its spec limits. Cp looks at spread only; Cpk also at centering. 1.33 or more is commonly treated as capable.",id:"Seberapa baik proses masuk batas spesifikasi. Cp hanya melihat lebar sebaran; Cpk juga posisi tengahnya. Nilai 1,33 ke atas umumnya dianggap capable."},
"A/B testing":{en:"Comparing two versions on random groups to see which one really performs better.",id:"Membandingkan dua versi pada kelompok acak untuk melihat mana yang benar-benar lebih baik."},
"Power Query":{sk:"Power Query",en:"Excel and Power BI tool to import and clean data in recorded, repeatable steps.",id:"Fitur Excel dan Power BI untuk impor dan membersihkan data dengan langkah yang terekam dan bisa diulang."},
"Streamlit":{sk:"Streamlit",en:"Python framework that turns a script into an interactive web app or dashboard.",id:"Framework Python yang mengubah skrip menjadi aplikasi web atau dashboard interaktif."},
"Looker Studio":{sk:"Looker Studio",en:"Google's free dashboard tool (formerly Data Studio); connects to Sheets and BigQuery.",id:"Tool dashboard gratis dari Google (dulu Data Studio); terhubung ke Sheets dan BigQuery."},
"Power BI":{f:"BI = Business Intelligence",sk:"Power BI",en:"Microsoft's dashboard and reporting tool.",id:"Tool dashboard dan pelaporan dari Microsoft."},
"KPI":{f:"Key Performance Indicator",en:"The headline number that shows whether a goal is met, e.g. yield %.",id:"Angka utama yang menunjukkan apakah target tercapai, misalnya yield %."},
"ETL":{f:"Extract, Transform, Load",en:"Pulling data from its sources, cleaning it, and loading it into a database.",id:"Mengambil data dari sumbernya, membersihkannya, lalu memuatnya ke database."},
"GitHub Actions":{sk:"GitHub Actions",en:"GitHub's automation service: runs scripts on a schedule or on every code change.",id:"Layanan otomasi GitHub: menjalankan skrip sesuai jadwal atau setiap ada perubahan kode."},
"dbt":{f:"data build tool",sk:"dbt",en:"Builds analytics tables from SQL models, with built-in tests and documentation.",id:"Membangun tabel analitik dari model SQL, lengkap dengan test dan dokumentasi."},
"AI":{h:1,f:"Artificial Intelligence",en:"Software that does tasks that normally need human judgment, such as reading text.",id:"Perangkat lunak yang mengerjakan tugas yang biasanya butuh penilaian manusia, misalnya membaca teks."},
"LLM":{f:"Large Language Model",sk:"LLM",en:"AI model that reads and writes text, such as Claude or GPT.",id:"Model AI yang membaca dan menulis teks, seperti Claude atau GPT."},
"QCC":{f:"Quality Control Circle",en:"Small team of workers solving a quality problem with structured steps (PDCA).",id:"Kelompok kecil karyawan yang menyelesaikan masalah kualitas dengan langkah terstruktur (PDCA)."}};
// one hue per Skills card, in "sk" order; no two neighbours share a hue in the 4-, 2- or 1-column grid
const SKH=["--navyH","--tealH","--plumH","--amberH","--roseH","--navyH","--tealH","--plumH"];
const GLA={"notebook":"notebooks"};// Indonesian spelling -> glossary key
const glRe=h=>new RegExp(`(?<![\\w-])(${[...Object.keys(GL).filter(k=>h||!GL[k].h),...Object.keys(GLA)].sort((a,b)=>b.length-a.length).map(k=>k.replace(/[.*+?^${}()|[\]\\\/]/g,"\\$&")).join("|")})(?![\\w-])([.,;:)]*)`,"g");
const GLR=[glRe(0),glRe(1)];
// trailing punctuation stays on the same line as the term
const glMark=(s,h)=>s.replace(GLR[h?1:0],(_,m,p)=>`<span class="nw"><button type="button" class="term" data-gl="${GLA[m]||m}" aria-expanded="false">${m}</button>${p}</span>`);
const tip=document.createElement("div");tip.id="tip";tip.setAttribute("role","tooltip");tip.hidden=true;document.body.appendChild(tip);
let tipFor=null,tipT=0;
function showTip(b){clearTimeout(tipT);if(tipFor===b&&!tip.hidden)return;const k=b.dataset.gl,g=GL[k],n=g.sk?SKC(g.sk):0;
 tip.innerHTML=`<b>${esc(k)}</b>${g.f?`<span class="tf">${esc(g.f)}</span>`:""}<p>${esc(g[lang]||g.en)}</p>${n?`<button type="button" class="tl" data-skf="${esc(g.sk)}">${T[lang]["tip.used"](n)}</button>`:""}`;
 tip.style.setProperty("--h",getComputedStyle(b).getPropertyValue("--h")||"var(--blue)");
 if(tipFor)tipFor.setAttribute("aria-expanded","false");tipFor=b;b.setAttribute("aria-expanded","true");tip.hidden=false;
 const r=b.getBoundingClientRect(),w=tip.offsetWidth,h=tip.offsetHeight,vw=document.documentElement.clientWidth;
 const x=Math.max(8,Math.min(r.left+r.width/2-w/2,vw-w-8));let y=r.bottom+8;if(y+h>innerHeight-8&&r.top-h-8>0)y=r.top-h-8;
 tip.style.left=x+scrollX+"px";tip.style.top=y+scrollY+"px"}
function hideTip(){clearTimeout(tipT);tip.hidden=true;if(tipFor)tipFor.setAttribute("aria-expanded","false");tipFor=null}
const STC={done:"var(--tealH)","in-progress":"var(--amberH)",design:"var(--navyH)",planned:"var(--mut)"};
const CHC={category:v=>`var(${CATH[v]||"--navyH"})`,status:v=>STC[v]};

let lang="en";
try{const u=new URLSearchParams(location.search).get("lang");lang=(u==="id"||u==="en")?u:(localStorage.getItem("lang")||((navigator.language||"").startsWith("id")?"id":"en"))}catch(e){}
const S={q:"",category:"*",status:"*",sort:"no",skills:[]};
try{const u=new URLSearchParams(location.search).get("skill");if(u){S.skills=u.split(",").map(x=>x.trim()).filter(x=>SK.some(s=>s[1].toLowerCase()===x.toLowerCase())).map(x=>SK.find(s=>s[1].toLowerCase()===x.toLowerCase())[1]);if(S.skills.length)S.sort="skill"}}catch(e){}
const hit=p=>S.skills.filter(s=>p._sk.includes(s)).length;
function toggleSkill(n){const i=S.skills.indexOf(n);i<0?S.skills.push(n):S.skills.splice(i,1);if(S.skills.length&&S.sort==="no")S.sort="skill";if(!S.skills.length&&S.sort==="skill")S.sort="no";
 syncURL();render()}
function syncURL(){try{const u=new URL(location.href);S.skills.length?u.searchParams.set("skill",S.skills.join(",")):u.searchParams.delete("skill");history.replaceState(null,"",u)}catch(e){}}
const t=k=>T[lang][k]??T.en[k]??k;

function chips(el,key,vals,labelFn){
 el.innerHTML=[["*",t("f.all"),P.length]].concat(vals.map(v=>[v,labelFn(v),P.filter(p=>p[key]===v).length])).map(([v,l,n])=>`<button type="button" class="chipb" data-v="${v}" style="--c:${v==="*"?"var(--blue)":CHC[key](v)}" aria-pressed="${S[key]===v}">${esc(l)}<i>${n}</i></button>`).join("");
 el.onclick=e=>{const b=e.target.closest(".chipb");if(!b)return;S[key]=b.dataset.v;render()};
}
function uniq(k,order){const s=[...new Set(P.map(p=>p[k]))];return order?s.sort((a,b)=>order[a]-order[b]):s.sort((a,b)=>P.filter(p=>p[k]===b).length-P.filter(p=>p[k]===a).length)}

function render(){
 document.documentElement.lang=lang;
 document.querySelectorAll("[data-i]").forEach(el=>{const v=t(el.dataset.i);if(typeof v==="string")el.innerHTML=v});
 document.querySelectorAll("[data-ph]").forEach(el=>el.placeholder=t(el.dataset.ph));
 document.querySelectorAll(".lang button").forEach(b=>b.setAttribute("aria-pressed",b.dataset.lang===lang));
 $("role").textContent=(PR.role&&PR.role[lang])||"";
 $("brand").textContent=PR.name||"";
 const n=s=>P.filter(p=>s.includes(p.status)).length;
 $("stats").innerHTML=[[P.length,"st.total","--navyH"],[n(["done"]),"st.ready","--amberH"],[n(["in-progress","design"]),"st.prog","--plumH"]]
  .map(([v,k,h])=>`<div class="stat" style="--h:var(${h})"><b>${v}</b><span>${t(k)}</span></div>`).join("");
 $("legend").innerHTML=["done","in-progress","design","planned"].map(s=>`<span><span class="badge st-${s}">${t("status."+s)}</span>${t("lg."+s)}</span>`).join("");
 $("fSkill").innerHTML=`<div class="sh"><b>${t("f.skill")}</b><span>${t("f.skillh")}</span>${S.skills.length?`<button type="button" class="clr">${t("f.clear")}</button>`:""}</div>`+
  SKG.map(g=>`<div class="row"><span class="gl">${t("g."+g)}</span>${SK.filter(s=>s[0]===g&&SKC(s[1])).map(s=>`<button type="button" class="chipb sk" data-sk="${esc(s[1])}" style="--c:${skc(s[1])}" aria-pressed="${S.skills.includes(s[1])}">${esc(s[1])}<i>${SKC(s[1])}</i></button>`).join("")}</div>`).join("");
 chips($("fCat"),"category",uniq("category"),v=>t("cat."+v));
 chips($("fStatus"),"status",uniq("status",STO),v=>t("status."+v));
 const q=S.q.trim().toLowerCase();
 let L=P.filter(p=>(S.category==="*"||p.category===S.category)&&(S.status==="*"||p.status===S.status)&&(!S.skills.length||hit(p)>0)&&
  (!q||[p.title,p.tools,p.question.en,p.question.id,p.data?p.data.en+' '+p.data.id:'',t("cat."+p.category),"#"+p.no].join(" ").toLowerCase().includes(q)));
 L.sort((a,b)=>S.sort==="skill"?hit(b)-hit(a)||a.no-b.no:S.sort==="status"?STO[a.status]-STO[b.status]||a.no-b.no:a.no-b.no);
 $("count").textContent=T[lang].count(L.length,P.length);
 $("empty").hidden=L.length>0;
 $("grid").innerHTML=L.map(p=>`<article class="pc" style="--h:var(${CATH[p.category]||"--navyH"})" id="p${p.no}">
  <div class="hd"><span class="no">#${String(p.no).padStart(2,"0")}</span><span class="cat">${esc(t("cat."+p.category))}</span></div>
  <h3>${esc(p.title)}</h3>
  <p class="qq">${esc(p.question[lang]||p.question.en)}</p>
  <div class="tools" title="${esc(p.tools)}">${p._sk.map(s=>`<button type="button" data-sk="${esc(s)}" style="--c:${skc(s)}" class="${S.skills.includes(s)?"on":""}" aria-pressed="${S.skills.includes(s)}">${esc(s)}</button>`).join("")}</div>
  ${p.data?`<p class="ds"><span class="dt dt-${p.data.type}">${t("dt."+p.data.type)}</span>${p.data.url?`<a href="${esc(p.data.url)}" target="_blank" rel="noopener">${esc(p.data[lang]||p.data.en)}</a>`:esc(p.data[lang]||p.data.en)}</p>`:""}
  ${S.skills.length?`<span class="mt">${T[lang]["f.match"](hit(p),S.skills.length)}</span>`:""}
  <div class="meta"><span class="badge st-${p.status}">${t("status."+p.status)}</span></div>
  <div class="links">${hasLink(p)?`<a class="live" href="${liveURL(p)}" target="_blank" rel="noopener">${t("btn.live")}</a><a class="code" href="${repoURL(p)}" target="_blank" rel="noopener">${t("btn.code")}</a>`:`<span>${t("btn.soon")}</span>`}</div>
 </article>`).join("");
 hideTip();
 $("skillGrid").innerHTML=t("sk").map(([h,d],i)=>`<div class="card" style="--h:var(${SKH[i%SKH.length]})"><h3>${glMark(esc(h),1)}</h3><p>${glMark(esc(d))}</p></div>`).join("");
 const c=[];if(gh)c.push(`<a class="btn pri" href="https://github.com/${gh}" target="_blank" rel="noopener">GitHub</a>`);
 if(PR.linkedin)c.push(`<a class="btn" href="${esc(PR.linkedin)}" target="_blank" rel="noopener">LinkedIn</a>`);
 if(PR.email)c.push(`<a class="btn" href="mailto:${esc(PR.email)}">Email</a>`);
 $("contactLinks").innerHTML=c.join("");
 $("ghLink").href=`https://github.com/${gh}`;
 $("sort").value=S.sort;
}
document.querySelector(".lang").onclick=e=>{const b=e.target.closest("button");if(!b)return;lang=b.dataset.lang;try{localStorage.setItem("lang",lang)}catch(x){}render()};
$("q").oninput=e=>{S.q=e.target.value;render()};
document.addEventListener("click",e=>{const b=e.target.closest("[data-sk]");if(b){toggleSkill(b.dataset.sk);return}if(e.target.closest("#fSkill .clr")){S.skills=[];if(S.sort==="skill")S.sort="no";syncURL();render()}});
$("sort").onchange=e=>{S.sort=e.target.value;render()};
// glossary popover: hover or keyboard focus on desktop, tap on touch; the link filters projects by that skill
document.addEventListener("mouseover",e=>{const b=e.target.closest(".term");if(b)showTip(b);else if(e.target.closest("#tip"))clearTimeout(tipT)});
document.addEventListener("mouseout",e=>{if(e.target.closest(".term,#tip"))tipT=setTimeout(hideTip,250)});
document.addEventListener("focusin",e=>{const b=e.target.closest(".term");if(b)showTip(b);else if(e.target.closest("#tip"))clearTimeout(tipT)});
document.addEventListener("focusout",e=>{if(e.target.closest(".term,#tip"))tipT=setTimeout(hideTip,250)});
document.addEventListener("click",e=>{const b=e.target.closest(".term");if(b){showTip(b);return}
 const f=e.target.closest("[data-skf]");if(f){S.skills=[f.dataset.skf];S.sort="skill";syncURL();render();$("projects").scrollIntoView({behavior:"smooth"});return}
 if(!e.target.closest("#tip"))hideTip()});
document.addEventListener("keydown",e=>{if(e.key==="Escape"&&tipFor){const b=tipFor;hideTip();b.focus()}});
addEventListener("resize",hideTip);
$("year").textContent="© "+new Date().getFullYear()+" "+(PR.name||"");
render();
})();
