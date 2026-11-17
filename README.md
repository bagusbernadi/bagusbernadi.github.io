# Bagus Bernadi · Data Analyst Portfolio

**Process Engineer → Data Analyst | Manufacturing · SQL · Python · Statistics · Dashboards**

📍 Karawang, West Java, Indonesia · [LinkedIn](https://www.linkedin.com/in/bagus-bernadi/) · [Email](mailto:bagus.bernadi@gmail.com)

🌐 **Portfolio site:** https://bagusbernadi.github.io/

This repository is the hub that links 34 data projects. Each project has its own repository and GitHub Pages site, and starts from a business question, then shows the data, analysis, recommendation, and estimated impact. Manufacturing projects use simulated or anonymized data.

---

## Maintenance (untuk saya)

Tanpa build step, tanpa framework. Struktur:

```
index.html            Halaman utama baru (layout Bento): hero, case study, web apps, semua project (cari/filter), jasa, FAQ, kontak; toggle EN / ID / 中文
assets/style.css      Tampilan
assets/app.js         Logika halaman + teks UI EN/ID (objek T). Tambah bahasa: key baru di T + tombol di .lang; teks data pakai {en, id, zh}
assets/thumbs/        Screenshot aplikasi & halaman laporan (640x400 .jpg)
data/projects.js      PROFILE (kontak, WhatsApp) + daftar 34 project
data/showcase.js      Case study unggulan, web apps, jasa, langkah kerja, FAQ (semua teks {en, id, zh})
docs/PROJECT-REPO-GUIDE.md   Aturan untuk repo project
classic/              Tampilan lama (masa transisi)
404.html  .nojekyll
```

### Update status project
Edit `data/projects.js`, field `status`: `planned` · `design` · `in-progress` · `done`.
Link otomatis: `https://bagusbernadi.github.io/<slug>/` dan `https://github.com/bagusbernadi/<slug>`; isi `"live"` / `"repo"` jika berbeda.
Skill di daftar project dan chip "Most-used skills" (top 10, bisa diklik) diambil dari field `skills`.

### Update case study, aplikasi, atau jasa
Edit `data/showcase.js`.
- **Case study unggulan** (`featured`): angka harus sama dengan README repo project. Link PDF otomatis ke `Creatative/Project_N/Project-N-One-Pager.pdf`.
- **Aplikasi baru** (`apps`): tambahkan entri + screenshot `assets/thumbs/<id>.jpg` (640x400).
- **Nomor WhatsApp**: `PROFILE.whatsapp` di `data/projects.js` (format `628xxxxxxxxxx`).

### Masa transisi: tampilan lama vs baru
- Tampilan lama dipindah ke `classic/` (`classic/index.html`, `classic/app.js`, `classic/style.css`) dan tetap membaca `data/projects.js`.
- Kunjungan pertama ke halaman utama memunculkan popup pilihan (background blur). Pilihan disimpan di `localStorage` key `view` (`new` / `classic`) jika "Ingat pilihan saya" dicentang; jika tidak, hanya untuk sesi itu.
- Link paksa: `/?view=new` atau `/?view=classic`. Footer halaman baru punya link ke tampilan lama; halaman lama punya banner ke tampilan baru.
- Mengakhiri transisi: hapus folder `classic/`, blok `<script>` "view chooser" di `<head>` dan elemen `#vw` di `index.html`, link `#toClassic` di footer, serta bagian "view chooser" di `assets/app.js` dan `assets/style.css`.

### Link yang bisa dibagikan
- `?lang=id` / `?lang=zh` → langsung Bahasa Indonesia / Mandarin
- `?skill=SQL` → daftar project terfilter satu skill
- `?q=yield` → daftar project dengan kata kunci
- `#services` → langsung ke bagian Jasa (untuk calon customer)

## Daftar repo project

| No | Project | Repo | Status |
|---|---|---|---|
| 01 | Rainfall Pattern Analysis | [`Project-1-Rainfall-Pattern-Analysis`](https://github.com/bagusbernadi/Project-1-Rainfall-Pattern-Analysis) | done |
| 02 | Customer Churn Driver Analysis | [`Project-2-Customer-Churn-Analysis`](https://github.com/bagusbernadi/Project-2-Customer-Churn-Analysis) | done |
| 03 | Yield, Rework & Defect Tracking System | [`Project-3-Yield-Rework-Defect-Tracking`](https://github.com/bagusbernadi/Project-3-Yield-Rework-Defect-Tracking) | done |
| 04 | Before–After Defect Reduction (QCC Insulation Damage) | [`Project-4-Insulation-Damage-Reduction`](https://github.com/bagusbernadi/Project-4-Insulation-Damage-Reduction) | done |
| 05 | Sensor Time-Series Anomaly Detection | [`Project-5-Sensor-Anomaly-Detection`](https://github.com/bagusbernadi/Project-5-Sensor-Anomaly-Detection) | done |
| 06 | Energy Consumption Dashboard | [`Project-6-Energy-Consumption-Dashboard`](https://github.com/bagusbernadi/Project-6-Energy-Consumption-Dashboard) | done |
| 07 | NG Sampling vs ICT | [`Project-7-NG-Sampling-vs-ICT`](https://github.com/bagusbernadi/Project-7-NG-Sampling-vs-ICT) | done |
| 08 | Property Price Analysis | [`Project-8-Property-Price-Analysis`](https://github.com/bagusbernadi/Project-8-Property-Price-Analysis) | done |
| 09 | Sales & Customer Dashboard | [`Project-9-Sales-Customer-Dashboard`](https://github.com/bagusbernadi/Project-9-Sales-Customer-Dashboard) | done |
| 10 | Cycle Time & Bottleneck Analysis | [`Project-10-Cycle-Time-Bottleneck-Analysis`](https://github.com/bagusbernadi/Project-10-Cycle-Time-Bottleneck-Analysis) | done |
| 11 | A/B Test Analysis | [`Project-11-AB-Test-Analysis`](https://github.com/bagusbernadi/Project-11-AB-Test-Analysis) | done |
| 12 | Process Comparison Analysis | [`Project-12-Process-Comparison-Analysis`](https://github.com/bagusbernadi/Project-12-Process-Comparison-Analysis) | done |
| 13 | SpaceX Falcon 9 Landing Analysis | [`Project-13-SpaceX-Falcon9-Landing-Analysis`](https://github.com/bagusbernadi/Project-13-SpaceX-Falcon9-Landing-Analysis) | in-progress |
| 14 | Social Media Performance Analytics | [`Project-14-Social-Media-Performance-Analytics`](https://github.com/bagusbernadi/Project-14-Social-Media-Performance-Analytics) | in-progress |
| 15 | SPC Control Chart & Capability Dashboard with Automated Alerts | [`Project-15-SPC-Control-Chart-Dashboard`](https://github.com/bagusbernadi/Project-15-SPC-Control-Chart-Dashboard) | in-progress |
| 16 | Learning Curve Analysis | [`Project-16-Learning-Curve-Analysis`](https://github.com/bagusbernadi/Project-16-Learning-Curve-Analysis) | done |
| 17 | Supplier Quality Scorecard | [`Project-17-Supplier-Quality-Scorecard`](https://github.com/bagusbernadi/Project-17-Supplier-Quality-Scorecard) | done |
| 18 | Rework Note Analysis with LLM: Defect Pareto & Trends | [`Project-18-Rework-Note-Pareto-Trends`](https://github.com/bagusbernadi/Project-18-Rework-Note-Pareto-Trends) | done |
| 19 | Data Quality Audit & Anti-Bypass Template | [`Project-19-Data-Quality-Audit`](https://github.com/bagusbernadi/Project-19-Data-Quality-Audit) | done |
| 20 | Push Test Data Pipeline + Dashboard | [`Project-20-Push-Test-Data-Pipeline`](https://github.com/bagusbernadi/Project-20-Push-Test-Data-Pipeline) | done |
| 21 | Natural Language to SQL Analytics Assistant | [`Project-21-NL-to-SQL-Analytics-Assistant`](https://github.com/bagusbernadi/Project-21-NL-to-SQL-Analytics-Assistant) | done |
| 22 | Cohort & RFM Segmentation | [`Project-22-Cohort-RFM-Segmentation`](https://github.com/bagusbernadi/Project-22-Cohort-RFM-Segmentation) | done |
| 23 | Telegram Bot Automated KPI Reporting | [`Project-23-Telegram-KPI-Reporting-Bot`](https://github.com/bagusbernadi/Project-23-Telegram-KPI-Reporting-Bot) | done |
| 24 | Privacy-Preserving Data Sharing Pipeline | [`Project-24-Privacy-Preserving-Data-Pipeline`](https://github.com/bagusbernadi/Project-24-Privacy-Preserving-Data-Pipeline) | done |
| 25 | Messy Excel Report Parser | [`Project-25-Messy-Excel-Report-Parser`](https://github.com/bagusbernadi/Project-25-Messy-Excel-Report-Parser) | done |
| 26 | Spec Compliance Extraction | [`Project-26-Spec-Compliance-Extraction`](https://github.com/bagusbernadi/Project-26-Spec-Compliance-Extraction) | design |
| 27 | Analytics Engineering Mini-Warehouse | [`Project-27-Analytics-Engineering-Mini-Warehouse`](https://github.com/bagusbernadi/Project-27-Analytics-Engineering-Mini-Warehouse) | design |
| 28 | Predictive Maintenance Failure Analysis | [`Project-28-Predictive-Maintenance-Analysis`](https://github.com/bagusbernadi/Project-28-Predictive-Maintenance-Analysis) | design |
| 29 | Root Cause Analysis Statistics | [`Project-29-Root-Cause-Analysis-Statistics`](https://github.com/bagusbernadi/Project-29-Root-Cause-Analysis-Statistics) | design |
| 30 | Production Data Entry App + Dashboard | [`Project-30-Production-Data-Entry-App`](https://github.com/bagusbernadi/Project-30-Production-Data-Entry-App) | design |
| 31 | Job Market Scraping & Skill Demand Analysis | [`Project-31-Job-Market-Skill-Demand-Analysis`](https://github.com/bagusbernadi/Project-31-Job-Market-Skill-Demand-Analysis) | design |
| 32 | AD Applicability Checker | [`Project-32-AD-Applicability-Checker`](https://github.com/bagusbernadi/Project-32-AD-Applicability-Checker) | design |
| 33 | Automated ETL: Excel Log → SQL Database | [`Project-33-Automated-Excel-to-SQL-ETL`](https://github.com/bagusbernadi/Project-33-Automated-Excel-to-SQL-ETL) | design |
| 34 | Customer Behavioral Segmentation | [`Project-34-Customer-Behavioral-Segmentation`](https://github.com/bagusbernadi/Project-34-Customer-Behavioral-Segmentation) | design |


### Aktifkan GitHub Pages
Settings → Pages → Source: *Deploy from a branch* → `main` / `(root)` → Save.

### Sumber data
Field `data` di `data/projects.js`: `type` (`public` / `sim` / `own` / `tbd`), deskripsi `en` dan `id`, serta `url` untuk dataset publik. Tampil di setiap kartu project.
