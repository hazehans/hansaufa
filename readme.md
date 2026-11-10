# Website Portofolio — Hans Adiyatma Putra Aufa, S.Kom

Website portofolio interaktif bergaya **Editorial Brutalist-Minimal (v3 Edition)** yang dibangun menggunakan **Vite + Vanilla JS** untuk pengembangan lokal yang cepat (`npm run dev`) dan di-deploy otomatis ke **GitHub Pages** melalui **GitHub Actions**.

Menggabungkan presisi *architectural viewport frame*, grid 12 kolom bergaris *hairline* (`1px`), dan kanvas interaktif bergaya **Keita Yamada (`p5aholic.me`)** dengan tipografi *display* kontras tinggi (`Inter Tight` + aksen *serif italic* `Instrument Serif`), *Lenis smooth inertia scroll*, *velocity-reactive outline marquee*, dan *interactive Before/After QC split slider*.

---

## Fitur Utama

- **Editorial Brutalist-Minimal Design System (`src/css/editorial.css`)**:
  - Tipografi *display* raksasa (`Inter Tight` 800) dipadukan dengan aksen *serif italic* (`Instrument Serif`) dan indeks bagian ber-stroke (`01`–`06`).
  - Grid arsitektural 12 kolom dengan *hairline border* tegas, sudut `0px` (*zero border-radius*), tombol *ink-fill sweep*, serta *full-width footer wordmark* (`HANS Aufa`).
  - Palet ganda beraksen **Cyber Azure Blue**: *Carbon Dark Mode* (`#0A0A0A` + `#38BDF8`) dan *Warm Newsprint Light Mode* (`#F1F0EA` + `#0284C7`).
- **Cinematic Split-Shutter Intro (`#boot-curtain`)**: Layar pembuka sinematik dengan 4 *wallpaper* dan 4 kutipan filosofis yang selalu berganti tanpa pengulangan beruntun (*non-repeating session rotation*).
- **Interactive `<canvas>` Background + Live Mode Switcher (`DOTS` | `WAVES` | `NODES`)**: Animasi latar belakang HTML5 `<canvas>` yang diacak saat pemuatan halaman, bereaksi terhadap kecepatan *scroll* (*velocity warp*), dan dapat diganti secara *live* dari *status bar* bawah atau `Ctrl + K`.
- **Lenis Smooth Scroll & Velocity-Reactive Outline Marquee**: Scroll inersia mulus (`requestAnimationFrame` batched) dengan pita *marquee* kontras *outline/solid* yang bereaksi terhadap arah dan kecepatan *scroll*.
- **Developer Command Palette (`Ctrl + K` / `⌘K`) & Floating Toast**: Panel komando cepat untuk melompat ke bagian tertentu, mengunduh CV terbaru, membuka jurnal DOI/GitHub, memutar ulang intro, atau mengganti bahasa/tema/mode kanvas.
- **Interactive Before / After Split Slider & Lightbox Modal**: Komparator geser (*draggable split-screen*) untuk validasi sampel database serta pratinjau gambar layar penuh.
- **Default Landing Bahasa Inggris (`EN`) + Multi-Bahasa (`EN` | `ID` | `FR`)**: Halaman selalu mendarat dalam Bahasa Inggris (`EN`) dengan *switcher* instan ke Bahasa Indonesia (`ID`) dan Prancis (`FR`) disertai efek *cyber text scramble* pada judul bagian.

---

## 1. Struktur Proyek (Vite + Vanilla JS)

```text
hansaufa/
├── index.html                        # Entry HTML5 Vite (Google Fonts, struktur semantik, modal Lightbox & Command Palette)
├── package.json                      # Konfigurasi skrip npm (dev, build, preview) & dependensi (vite, lenis)
├── vite.config.js                    # Konfigurasi build Vite (base: './' agar aman di root domain maupun sub-path GitHub Pages)
├── .github/
│   └── workflows/
│       └── deploy.yml                # Workflow GitHub Actions untuk build & deploy otomatis ke GitHub Pages
├── public/
│   └── assets/                       # Aset statis publik (disalin otomatis ke dist/assets/ saat build)
│       ├── icons/
│       │   ├── logo.webp             # Logo utama (otomatis dipotong untuk header & favicon tab browser)
│       │   └── favicon.svg           # Ikon tab browser cadangan (monogram HA)
│       ├── images/
│       │   ├── profile/
│       │   │   └── hans-profile.jpg  # Foto profil utama (efek editorial grayscale-to-color saat hover)
│       │   ├── loading/              # 4 wallpaper layar intro (loading-1.jpg s/d loading-4.jpg)
│       │   └── projects/             # Visual & diagram arsitektur proyek 01–08
│       └── docs/
│           └── CV-Hans-Aufa.pdf      # File PDF CV ATS terbaru
├── src/
│   ├── main.js                       # Entry module Vite (mengimpor CSS, Lenis npm, data.js, canvas.js, main.js)
│   ├── css/
│   │   ├── style.css                 # Stylesheet fondasi tata letak, animasi shutter, QC slider, & responsivitas
│   │   └── editorial.css             # Stylesheet utama Editorial Brutalist-Minimal (v3 Redesign)
│   └── js/
│       ├── data.js                   # PUSAT DATA UTAMA: profil, pengalaman, proyek, dan terjemahan EN/ID/FR
│       ├── canvas.js                 # Mesin animasi interaktif <canvas> (DOTS, WAVES, NODES)
│       └── main.js                   # Controller aplikasi, i18n, Lenis, Command Palette, & Lightbox
├── .gitignore                        # Mengecualikan node_modules/, dist/, PROGRESS-REVISI.md, *.docx, & new_necessary_files/
└── README.md                         # Dokumentasi pengelolaan & deployment
```

---

## 2. Menjalankan Website Secara Lokal (`npm run dev`)

Pastikan **Node.js** sudah terinstal di komputer Anda, lalu jalankan perintah berikut di terminal pada folder proyek:

```bash
# 1. Instal dependensi (cukup dijalankan sekali)
npm install

# 2. Jalankan server pengembangan lokal dengan Hot Module Replacement (HMR)
npm run dev
```

Setelah menjalankan `npm run dev`, buka URL lokal yang muncul di terminal (biasanya `http://localhost:5173`).

Untuk menguji hasil *build* produksi secara lokal:

```bash
# Build ke folder dist/
npm run build

# Pratinjau hasil build produksi
npm run preview
```

---

## 3. Cara Mengelola Data, Proyek, & File PDF CV

1. **Mengubah Konten Profil, Pengalaman Kerja, atau Proyek**:
   - Edit file `src/js/data.js`. Seluruh teks multi-bahasa (`en`, `id`, `fr`), daftar pengalaman kerja (`experience`), dan proyek (`projects`) terpusat di file ini.
2. **Mengganti File PDF CV**:
   - Simpan file PDF CV terbaru Anda dengan nama **`CV-Hans-Aufa.pdf`** ke dalam folder:
     ```text
     public/assets/docs/CV-Hans-Aufa.pdf
     ```
   - Perbarui angka versi *cache-buster* `?v=YYYYMMDD` pada `config.assets.cvPdf` di `src/js/data.js` (serta atribut `href` di `index.html`) agar browser HP/laptop pengunjung langsung mengunduh file PDF terbaru tanpa tertahan *cache* lama.

---

## 4. Panduan Deploy ke GitHub Pages (Otomatis via GitHub Actions)

Proyek ini telah dilengkapi workflow `.github/workflows/deploy.yml` yang secara otomatis menjalankan `npm ci` dan `npm run build` di server GitHub setiap kali Anda melakukan `git push` ke branch `main`.

### Pengaturan Satu Kali di Repository GitHub
1. Buka repository GitHub Anda di browser → klik tab **Settings** → pilih menu **Pages** di sebelah kiri.
2. Pada bagian **Build and deployment** → **Source**, ubah pilihan dari *Deploy from a branch* menjadi **GitHub Actions**.

### Push Perubahan ke GitHub
```bash
git add .
git commit -m "Redesign portfolio to Editorial Brutalist-Minimal v3 with Vite"
git push origin main
```
Tunggu sekitar **1 menit** hingga Action **Deploy Vite site to GitHub Pages** selesai berjalan, dan tampilan baru website Anda langsung aktif!
