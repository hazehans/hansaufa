# Website Portofolio — Hans Adiyatma Putra Aufa

Website portofolio statis ultra-minimalis, responsif (*mobile-first*), dan siap produksi yang dirancang khusus untuk di-hosting gratis di **GitHub Pages**.

Menggabungkan estetika *architectural viewport frame* & kanvas interaktif bergaya **Keita Yamada (`p5aholic.me`)** dengan tipografi fluid kinetik dan *micro-interactions* bergaya **Lando Norris (`landonorris.com`)**.

---

## Fitur Utama

- **Architectural Viewport Frame**: Bingkai *viewport* presisi `1px` yang adaptif dari layar ponsel kecil (`320px`) hingga monitor *ultrawide* tanpa *horizontal overflow*.
- **Interactive `<canvas>` Background**: Animasi latar belakang ringan berbasis HTML5 `<canvas>` (`dot-matrix`, `wave-grid`, atau `particles`) yang merespons gerakan kursor dan otomatis menyesuaikan warna tema.
- **Dark / Light Mode Switcher**: Pilihan tema *Deep Obsidian* (`#0B0B0B` + aksen *Electric Lime* `#D2FF00`) dan *Warm Editorial Paper* (`#F5F5F3` + aksen *Deep Emerald* `#0D765E`) yang tersimpan di `localStorage` dan mendeteksi preferensi sistem operasi pengguna.
- **Multi-Bahasa Instan (`EN` | `ID` | `FR`)**: Pergantian bahasa *client-side* tanpa *reload* halaman untuk Bahasa Inggris, Bahasa Indonesia, dan Bahasa Prancis.
- **Smart Asset Fallbacks (Zero Broken Images)**: Jika foto profil, *screenshot* proyek, logo, atau background statis belum diisi (kosong `""`) atau gagal dimuat, website otomatis merender monogram geometris `"HA"` dan kartu skema *blueprint* SVG minimalis.
- **Filter Kategori Proyek**: Filter interaktif (*All Works*, *Full-Stack & Systems*, *Data, AI & QA*) lengkap dengan penghitung jumlah proyek otomatis.

---

## 1. Struktur Proyek

```text
hansaufa/
├── index.html                  # Struktur utama HTML5 semantik, meta SEO, OpenGraph, dan atribut data-i18n
├── css/
│   └── style.css               # Variabel CSS tema Dark/Light, Swiss grid layout, tipografi fluid clamp(), & responsivitas
├── js/
│   ├── data.js                 # PUSAT DATA UTAMA: profil, link kontak, path gambar/CV, dan terjemahan EN/ID/FR
│   ├── main.js                 # Logika render DOM, pengatur bahasa (i18n), pengatur tema, filter proyek, & animasi
│   └── canvas.js               # Mesin animasi interaktif <canvas> & fallback gambar background statis
├── assets/
│   ├── icons/
│   │   └── favicon.svg         # Ikon tab browser (favicon) & tempat menyimpan file logo kustom
│   ├── images/
│   │   ├── profile/            # Folder untuk menyimpan foto profil Anda
│   │   ├── projects/           # Folder untuk menyimpan screenshot preview proyek
│   │   └── bg/                 # Folder opsional untuk menyimpan gambar background statis
│   └── docs/                   # Folder untuk menyimpan file PDF CV (CV-Hans-Aufa.pdf)
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
  logoImage: ''                       // Isi misal: 'assets/icons/logo.svg' atau 'assets/icons/logo.png'
}
```

### Mengganti Favicon (Ikon Tab Browser)
1. Siapkan file ikon berformat `.svg` (direkomendasikan), `.png`, atau `.ico` dengan rasio **1:1** (ukuran ideal: **`64x64 px`** atau **`512x512 px`**).
2. Simpan file tersebut ke dalam folder `assets/icons/` (misalnya `assets/icons/favicon-baru.svg`).
3. Perbarui nilai `faviconPath` di `js/data.js` menjadi `'assets/icons/favicon-baru.svg'`.
4. Apabila file tidak ditemukan, sistem otomatis membuat favicon cadangan bertuliskan monogram `HA`.

### Mengganti Logo Header / Teks Monogram Fallback `"HA"`
- **Menggunakan Gambar Logo Sendiri**: Simpan file logo Anda (ukuran ideal persegi **`64x64 px`** atau **`128x128 px`**, format `.svg` atau `.png` transparan) ke folder `assets/icons/`, lalu isi `logoImage: 'assets/icons/nama-logo.svg'`.
- **Menggunakan Monogram Teks Minimalis**: Biarkan `logoImage: ''` (kosong), lalu ubah nilai `monogram: 'HA'` sesuai inisial yang Anda inginkan.

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

- **Mode Animasi Interaktif (Default)**: Pastikan `mode: 'canvas'`. Anda bebas mengganti `canvasStyle` antara `'dot-matrix'` (titik matriks arsitektural), `'wave-grid'` (garis gelombang halus), atau `'particles'` (partikel terhubung).
- **Mode Gambar Statis**:
  1. Masukkan gambar beresolusi minimal `1920x1080 px` (disarankan format `.webp` atau `.jpg` terkompresi di bawah `500 KB`) ke folder `assets/images/bg/`.
  2. Ubah `mode: 'image'` dan isi `imagePath: 'assets/images/bg/nama-gambar.jpg'`.
  3. Atur `imageOpacity` (misal `0.15` agar teks tetap terbaca jelas). Jika file gambar belum ada atau salah ketik, sistem otomatis kembali ke animasi `<canvas>` agar tampilan tidak rusak.

### B. Mengubah Warna Tema Dark Mode & Light Mode
Buka file `css/style.css` pada bagian paling atas (`:root, [data-theme="dark"]` dan `[data-theme="light"]`):

```css
/* Warna Dark Mode */
:root,
[data-theme="dark"] {
  --bg-primary: #0B0B0B;      /* Warna latar utama */
  --text-primary: #F4F4F0;    /* Warna teks utama */
  --text-secondary: #8E8E8E;  /* Warna teks sekunder */
  --accent: #D2FF00;          /* Warna aksen utama (Electric Lime) */
}

/* Warna Light Mode */
[data-theme="light"] {
  --bg-primary: #F5F5F3;      /* Warna latar kertas editorial hangat */
  --text-primary: #111111;    /* Warna teks arang gelap */
  --text-secondary: #5A5A5A;  /* Warna teks abu-abu slate */
  --accent: #0D765E;          /* Warna aksen utama (Deep Emerald) */
}
```

---

## 4. Cara Mengelola Foto Profil & Gambar Proyek

### A. Menambahkan / Mengganti Foto Profil
1. Simpan foto terbaik Anda (rasio ideal **4:4.5** atau potret persegi, format `.webp` / `.jpg`) ke folder `assets/images/profile/`, contoh: `assets/images/profile/hans.jpg`.
2. Buka `js/data.js` bagian `config.assets`, lalu isi:
   ```javascript
   assets: {
     profileImage: 'assets/images/profile/hans.jpg',
     cvPdf: 'assets/docs/CV-Hans-Aufa.pdf'
   }
   ```
3. **Fitur Smart Fallback**: Jika `profileImage` dibiarkan kosong `""`, website secara otomatis menampilkan kartu profil *blueprint* arsitektural berlogo `"HA"` lengkap dengan informasi gelar, IPK, dan koordinat Malang.

### B. Menambahkan Screenshot Preview Proyek
1. Simpan gambar *screenshot* aplikasi/proyek Anda (rasio ideal **16:10** atau **16:9**, misal `1280x800 px`) ke dalam folder `assets/images/projects/`.
2. Buka `js/data.js`, cari objek proyek pada array `projects`, lalu isi properti `image`:
   ```javascript
   {
     id: 'hris-attendance',
     visible: true,
     category: 'fullstack',
     image: 'assets/images/projects/hris-dashboard.webp', // Kosongkan "" untuk desain skema SVG otomatis
     liveUrl: 'https://hris.omahvisual.com',
     ...
   }
   ```
3. Jika `image` dikosongkan `""`, sistem otomatis merender ilustrasi skema arsitektur SVG minimalis tanpa memunculkan ikon gambar pecah (*broken image*).

---

## 5. Cara Mengedit Teks Multi-Bahasa (`EN` / `ID` / `FR`) & Mengelola Proyek

Semua teks antarmuka, ringkasan diri, pengalaman kerja, proyek, pendidikan, organisasi, dan keahlian tersimpan terpusat di **`js/data.js`**:

1. **Teks Navigasi, Hero, Ringkasan, & Kontak**:
   - Edit pada objek `i18n.en` (Bahasa Inggris), `i18n.id` (Bahasa Indonesia), dan `i18n.fr` (Bahasa Prancis).
2. **Menyembunyikan atau Menampilkan Item Opsional (`visible`)**:
   - Setiap item di `experience`, `projects`, `education`, dan `organizations` memiliki properti `visible: true` atau `visible: false`.
   - Contoh: Proyek **Spotify Application Song Analysis** saat ini bernilai `visible: true` (ubah ke `false` jika ingin disembunyikan).
   - Contoh: Riwayat SMA **MAN 2 Kudus** pada `education` secara bawaan disetel `visible: false` agar tata letak tetap ringkas (ubah ke `true` jika ingin ditampilkan).
3. **Menambahkan Proyek Baru**:
   - Salin salah satu blok objek `{ ... }` di dalam array `projects` pada `js/data.js`.
   - Tentukan `category: 'fullstack'` (untuk tab *Full-Stack & Systems*) atau `category: 'data'` (untuk tab *Data, AI & QA*).
   - Isi `liveUrl` (untuk tombol *Live System*) dan/atau `repoUrl` (untuk tombol *GitHub Repo*). Jika salah satu dikosongkan `""`, tombol terkait otomatis disembunyikan.
   - Lengkapi teks `title`, `date`, `role`, `categoryLabel`, `statusBadge`, dan `highlights` pada blok `i18n.en`, `i18n.id`, serta `i18n.fr`.

---

## 6. Cara Mengganti File PDF CV

1. Ekspor CV terbaru Anda ke dalam format **PDF**.
2. Beri nama file **`CV-Hans-Aufa.pdf`** (hindari penggunaan spasi agar URL bersih di semua browser).
3. Letakkan file tersebut di dalam folder:
   ```text
   assets/docs/CV-Hans-Aufa.pdf
   ```
4. Seluruh tombol **Download CV / Unduh CV / Télécharger le CV** di bagian Hero, Menu Mobile, dan Kontak akan langsung mengarah ke file tersebut. (Jika Anda ingin memakai nama file lain, cukup sesuaikan path `config.assets.cvPdf` di `js/data.js`).

---

## 7. Panduan Lengkap Deploy ke GitHub Pages

Website ini dibangun tanpa ketergantungan *build tool* rumit sehingga dapat langsung online di GitHub Pages hanya dalam beberapa menit.

### Pilihan Nama Repository di GitHub
1. **Domain Utama (`https://hazehans.github.io`) — Sangat Direkomendasikan**:
   - Buat repository publik baru di akun GitHub `hazehans` dengan nama persis **`hazehans.github.io`**.
2. **Sub-path Proyek (`https://hazehans.github.io/hansaufa`)**:
   - Jika Anda memberi nama repository **`hansaufa`**, website tetap berjalan 100% normal di alamat `https://hazehans.github.io/hansaufa/` karena seluruh path aset sudah menggunakan path relatif.

> **Tips Privasi Sebelum Upload**: Apabila Anda tidak ingin file dokumen mentah `.docx` (`CV ATS EN NEW.docx` dan file prompt `.docx`) ikut terpublikasi di repository GitHub publik, pindahkan kedua file `.docx` tersebut ke folder lain di komputer Anda terlebih dahulu atau tambahkan baris `*.docx` ke dalam file `.gitignore`.

### Langkah Perintah Git di Terminal VSCode

Buka terminal di VSCode (`Ctrl + ~`), pastikan berada di folder `d:\Projects\hansaufa`, lalu jalankan perintah berikut secara berurutan:

```bash
# 1. Inisialisasi Git (lewati jika folder sudah memiliki .git)
git init

# 2. Tambahkan seluruh file proyek ke staging area
git add .

# 3. Simpan perubahan dengan pesan commit
git commit -m "Initial release: minimalist responsive portfolio website"

# 4. Pastikan branch utama bernama main
git branch -M main

# 5. Hubungkan ke repository GitHub Anda
# (Ganti URL di bawah sesuai nama repo yang Anda buat: hazehans.github.io atau hansaufa)
git remote add origin https://github.com/hazehans/hazehans.github.io.git

# 6. Unggah kode ke GitHub
git push -u origin main
```

*(Catatan: Jika muncul pesan `remote origin already exists`, jalankan `git remote set-url origin https://github.com/hazehans/hazehans.github.io.git` terlebih dahulu sebelum `git push`).*

### Mengaktifkan GitHub Pages di Browser

1. Buka halaman repository Anda di GitHub.
2. Klik tab **Settings** di bagian atas.
3. Pada menu bilah kiri, klik **Pages**.
4. Di bagian **Build and deployment** > **Source**, pilih **Deploy from a branch**.
5. Pada bagian **Branch**, pilih **`main`** dan folder **`/ (root)`**, lalu klik **Save**.
6. Tunggu sekitar **1–2 menit**, lalu muat ulang halaman *Settings > Pages*. Tautan aktif website Anda akan muncul dan siap diakses publik di **`https://hazehans.github.io`**!

### Cara Update Konten di Kemudian Hari
Setiap kali Anda selesai memperbarui isi `js/data.js`, foto, atau file CV, cukup jalankan 3 perintah berikut di terminal VSCode:

```bash
git add .
git commit -m "Update konten portofolio"
git push
```
Perubahan akan otomatis tayang di GitHub Pages dalam hitungan detik.
