# Website Portofolio — Hans Adiyatma Putra Aufa

Website portofolio statis ultra-minimalis, responsif (*mobile-first* dengan arsitektur **Flexbox** adaptif), dan siap produksi yang dirancang khusus untuk di-hosting gratis di **GitHub Pages**.

Menggabungkan estetika *architectural viewport frame* & kanvas interaktif bergaya **Keita Yamada (`p5aholic.me`)** dengan tipografi fluid kinetik, *Lenis smooth inertia scroll*, *magnetic dual cursor*, *cyber text scramble*, *3D specular tilt*, dan *interactive Before/After slider* bergaya **Lando Norris (`landonorris.com`)**.

---

## Fitur Utama

- **Architectural Viewport Frame & Responsive Flexbox**: Bingkai *viewport* presisi `1px` dengan tata letak **Flexbox** fleksibel (`column` / `column-reverse` / `flex-wrap`) yang adaptif dari layar ponsel kecil (`320px`) hingga monitor *ultrawide* tanpa *horizontal overflow*.
- **Lenis Smooth Inertia Scroll**: Scroll sehalus sutra di perangkat desktop dengan fallback *native 120Hz touch scroll* di smartphone.
- **Interactive `<canvas>` Background**: Animasi latar belakang ringan berbasis HTML5 `<canvas>` (`dot-matrix`, `wave-grid`, atau `particles`) yang merespons gerakan kursor dan otomatis menyesuaikan warna tema.
- **Magnetic Dual Cursor & 3D Specular Tilt**: Kursor magnetik ganda khusus desktop serta efek pantulan cahaya 3D pada kartu profil & proyek.
- **Interactive Before / After Split Slider (Project 04)**: Komparator geser (*draggable split-screen*) + tab *Before QC* / *After QC* untuk memperlihatkan proses pembersihan dan validasi sampel database.
- **Architectural Lightbox Zoom**: Klik foto profil atau *screenshot* proyek mana pun untuk membuka tampilan layar penuh beresolusi tinggi (mendukung tombol `ESC` dan *toggle* Before/After).
- **Dark / Light Mode Switcher**: Pilihan tema *Deep Obsidian* (`#0B0B0B` + aksen *Electric Lime* `#D2FF00`) dan *Warm Editorial Paper* (`#F5F5F3` + aksen *Deep Emerald* `#0D765E`) yang tersimpan di `localStorage` dan mendeteksi preferensi sistem operasi.
- **Multi-Bahasa Instan (`EN` | `ID` | `FR`) + Cyber Text Scramble**: Pergantian bahasa *client-side* tanpa *reload* halaman disertai animasi *decoder* teks untuk Bahasa Inggris, Bahasa Indonesia, dan Bahasa Prancis.
- **Smart Asset Fallbacks (Zero Broken Images)**: Proyek tanpa foto (seperti Project 08) otomatis merender ilustrasi skema *blueprint* SVG presisi.

---

## 1. Struktur Proyek

```text
hansaufa/
├── index.html                  # Struktur utama HTML5 semantik, Flexbox layout, Lightbox modal, & Lenis CDN
├── css/
│   └── style.css               # Variabel CSS Dark/Light, tipografi fluid diperbesar, Flexbox mobile, & Before/After slider
├── js/
│   ├── data.js                 # PUSAT DATA UTAMA: profil, link GitHub/DOI, path gambar, dan terjemahan EN/ID/FR
│   ├── main.js                 # Logika DOM, i18n + text scramble, Lenis, kursor magnetik, 3D tilt, slider QC, & Lightbox
│   └── canvas.js               # Mesin animasi interaktif <canvas> & fallback gambar background statis
├── assets/
│   ├── icons/
│   │   ├── logo.webp           # Logo siluet emas (otomatis dipotong presisi untuk header & favicon tab browser)
│   │   └── favicon.svg         # Ikon tab browser cadangan (monogram HA)
│   ├── images/
│   │   ├── profile/
│   │   │   └── hans-profile.jpg # Foto profil utama yang telah dioptimasi untuk web
│   │   ├── projects/           # Screenshot proyek 01–07 yang telah terhubung & dioptimasi
│   │   └── bg/                 # Folder opsional untuk menyimpan gambar background statis
│   └── docs/                   # Tempat menyimpan file PDF CV (CV-Hans-Aufa.pdf)
├── .gitignore                  # Mengecualikan *.docx & folder new_necessary_files/ agar tidak ikut ter-push ke GitHub
└── README.md                   # Dokumentasi panduan pengelolaan & deployment website
```

---

## 2. Cara Mengganti Favicon & Logo Website

Seluruh pengaturan identitas visual berada di file `js/data.js` pada bagian `config.branding`:

```javascript
branding: {
  monogram: 'HA',                     // Teks monogram fallback jika logoImage dikosongkan
  shortName: 'HANS AUFA',             // Nama pendek di sebelah logo pada navigasi atas
  faviconPath: 'assets/icons/favicon.svg',
  logoImage: 'assets/icons/logo.webp', // Kosongkan "" jika ingin kembali ke monogram "HA"
  useLogoAsFavicon: true              // true = otomatis memotong logoImage menjadi favicon persegi tajam
}
```

### Mengganti Favicon (Ikon Tab Browser)
- **Mode Otomatis dari Logo (`useLogoAsFavicon: true`)**: Saat ini sistem otomatis memotong bagian utama `assets/icons/logo.webp` menggunakan `<canvas>` menjadi ikon persegi tajam di tab browser.
- **Menggunakan File Favicon Terpisah**: Jika suatu saat Anda ingin memakai file `.svg` / `.png` khusus untuk favicon:
  1. Simpan file ikon Anda (rasio **1:1**, misal `64x64 px` atau `512x512 px`) ke `assets/icons/favicon-baru.svg`.
  2. Ubah `useLogoAsFavicon: false` dan isi `faviconPath: 'assets/icons/favicon-baru.svg'` di `js/data.js`.

---

## 3. Cara Mengganti Background Website & Warna Tema

### A. Memilih Animasi `<canvas>` vs Gambar Background Statis
Buka `js/data.js` pada bagian `config.background`:

```javascript
background: {
  mode: 'canvas',              // Pilihan: 'canvas' atau 'image'
  canvasStyle: 'dot-matrix',   // Pilihan gaya canvas: 'dot-matrix' | 'wave-grid' | 'particles'
  imagePath: '',               // Contoh: 'assets/images/bg/tekstur-gelap.jpg'
  imageOpacity: 0.16,          // Tingkat ketebalan gambar background (0.05 s/d 0.50)
  interactive: true            // true = bereaksi terhadap kursor, false = gerakan gelombang tenang
}
```

### B. Mengubah Ukuran Font & Warna Tema Dark / Light Mode
Buka file `css/style.css` pada bagian paling atas:
- **Ukuran Font Keseluruhan**: Ubah variabel `--font-size-base` pada blok `html` (saat ini sudah diperbesar ke `clamp(16.5px, 0.28vw + 15.8px, 18.2px)` agar nyaman dibaca di laptop maupun HP).
- **Warna Tema**: Ubah variabel `--bg-primary`, `--text-primary`, dan `--accent` di `:root, [data-theme="dark"]` atau `[data-theme="light"]`.

---

## 4. Cara Mengelola Foto Profil, Proyek, Slider Before/After, & Link Jurnal DOI

Seluruh gambar dan tautan proyek sudah terhubung di `js/data.js`:

1. **Foto Profil**: Mengarah ke `assets/images/profile/hans-profile.jpg` (bisa diganti kapan saja di `config.assets.profileImage`, atau kosongkan `""` untuk kembali ke kartu monogram `"HA"`).
2. **Proyek Standar (`image`, `liveUrl`, `repoUrl`, `paperUrl`)**:
   - `image`: Path *screenshot* proyek (kosongkan `""` seperti pada Project 08 untuk menampilkan ilustrasi *blueprint* SVG otomatis).
   - `imageSurface`: Isi `'light'` untuk gambar tabel/grafik berlatar putih (seperti AppSheet ER Diagram, tabel XAI, & grafik Matplotlib Spotify) agar dibingkai *studio mat* terang yang kontras di Dark Mode, atau `'dark'` untuk tangkapan layar aplikasi web penuh.
   - `liveUrl`: Tautan aplikasi live (misal `https://hris.omahvisual.com`).
   - `repoUrl`: Tautan repository GitHub proyek.
   - `paperUrl`: Tautan publikasi jurnal/DOI (misal `https://doi.org/10.33364/algoritma/v.22-2.2925` pada Project 06). Tombol otomatis muncul hanya jika URL diisi.
3. **Proyek Komparasi Before / After (`beforeImage` & `afterImage`)**:
   - Pada Project 04 (*Database Migration & Data QA*), properti `beforeImage` dan `afterImage` mengaktifkan fitur **Interactive Split Slider** beserta tombol tab *Before QC* / *After QC* secara otomatis.

---

## 5. Cara Mengganti File PDF CV

1. Ekspor CV terbaru Anda ke dalam format **PDF**.
2. Beri nama file **`CV-Hans-Aufa.pdf`**.
3. Letakkan file tersebut di dalam folder:
   ```text
   assets/docs/CV-Hans-Aufa.pdf
   ```
4. Seluruh tombol **Download CV / Unduh CV / Télécharger le CV** di bagian Hero, Menu Mobile, dan Kontak akan langsung mengunduh/membuka file tersebut.

---

## 6. Panduan Lengkap Deploy ke GitHub Pages

Website ini berjalan murni dengan HTML/CSS/JS statis (tanpa PHP/Node server), sehingga dapat dibuka langsung maupun di-deploy gratis ke GitHub Pages.

> **Keamanan Privasi Otomatis (`.gitignore`)**: File `.gitignore` sudah dikonfigurasi untuk mengecualikan `*.docx` dan folder `new_necessary_files/`, sehingga dokumen mentah dan foto asli berukuran besar tidak ikut terunggah ke repository publik saat Anda menjalankan `git add .`.

### Pilihan Nama Repository di GitHub
1. **Domain Utama (`https://hazehans.github.io`) — Sangat Direkomendasikan**:
   - Buat repository publik baru di akun GitHub `hazehans` dengan nama persis **`hazehans.github.io`**.
2. **Sub-path Proyek (`https://hazehans.github.io/hansaufa`)**:
   - Jika Anda memberi nama repository **`hansaufa`**, website tetap berjalan 100% normal di `https://hazehans.github.io/hansaufa/`.

### Langkah Perintah Git di Terminal VSCode

Buka terminal di VSCode (`Ctrl + ~`), pastikan berada di folder `d:\Projects\hansaufa`, lalu jalankan:

```bash
# 1. Inisialisasi Git (lewati jika folder sudah memiliki .git)
git init

# 2. Tambahkan seluruh file proyek ke staging area
git add .

# 3. Simpan perubahan dengan pesan commit
git commit -m "Initial release: interactive responsive portfolio website"

# 4. Pastikan branch utama bernama main
git branch -M main

# 5. Hubungkan ke repository GitHub Anda
git remote add origin https://github.com/hazehans/hazehans.github.io.git

# 6. Unggah kode ke GitHub
git push -u origin main
```

### Mengaktifkan GitHub Pages di Browser
1. Buka halaman repository Anda di GitHub -> klik tab **Settings** -> menu kiri **Pages**.
2. Pada **Build and deployment** > **Source**, pilih **Deploy from a branch**.
3. Pilih branch **`main`** dan folder **`/ (root)`**, lalu klik **Save**.
4. Tunggu **1–2 menit**, dan website Anda siap diakses publik!
