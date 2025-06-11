# Portfolio Pribadi - Ichramsyah Abdurrachman

[![Dideploy](https://img.shields.io/badge/Dideploy-Ya-gree)](https://ichram-portofolio.vercel.app/)
[![Lisensi: MIT](https://img.shields.io/badge/Lisensi-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![i18next](https://img.shields.io/badge/i18next-26A69A?style=for-the-badge&logo=i18next&logoColor=white)

Selamat datang di repositori kode untuk website portofolio pribadi saya. Proyek ini dibangun sebagai **Single-Page Application (SPA)** menggunakan React untuk menampilkan keahlian, proyek-proyek yang pernah saya kerjakan, serta riwayat pendidikan dan pengalaman saya.

Desainnya dibuat agar modern, bersih, dan sepenuhnya responsif, dengan sentuhan animasi yang halus dan dukungan multi-bahasa untuk memberikan pengalaman pengguna yang lebih baik.

🌟 **Demo Langsung**: Kunjungi [https://ichram-portofolio.vercel.app/](https://ichram-portofolio.vercel.app/)

---

## ✨ Fitur Utama

- **Desain Responsif**: Tampilan yang dioptimalkan untuk semua ukuran perangkat, mulai dari desktop hingga mobile.
- **Animasi Halus**: Dibuat menggunakan **Framer Motion** untuk memberikan transisi dan animasi yang interaktif dan modern.
- **Dukungan Multi-Bahasa**: Terintegrasi dengan **`react-i18next`** dan `i18next-browser-languagedetector` untuk mendeteksi bahasa browser pengunjung secara otomatis (mendukung Bahasa Indonesia & Inggris) serta menyediakan opsi untuk beralih bahasa.
- **Arsitektur Berbasis Komponen**: Dibangun dengan komponen React yang dapat digunakan kembali untuk memastikan kode yang bersih dan mudah dikelola.
- **UI Modern**: Menggunakan **Tailwind CSS** untuk styling yang cepat dan konsisten, serta **React Icons** untuk ikonografi.
- **Scroll Progress Bar**: Indikator visual yang menunjukkan progres scroll pengguna di halaman.

---

## 🛠️ Teknologi yang Digunakan

Berikut adalah daftar teknologi dan library utama yang digunakan dalam proyek ini:

- **Framework**: [React.js](https://reactjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animasi**: [Framer Motion](https://www.framer.com/motion/)
- **Internasionalisasi (i18n)**: [react-i18next](https://react.i18next.com/), [i18next](https://www.i18next.com/)
- **Ikon**: [React Icons](https://react-icons.github.io/react-icons/)
- **UI Tambahan**: [Reactbits](http://reactbits.dev/)
- **Deployment**: [Vercel](https://vercel.com/)

---

## 📂 Struktur Proyek

Struktur proyek ini dirancang agar modular dan mudah dipahami.

```
src/
├── assets/
│   ├── components/
│   │   ├── sections/
│   │   │   ├── Hero/HeroSection.jsx
│   │   │   ├── About/AboutSection.jsx
│   │   │   ├── EducationExperience/EducationExperienceSection.jsx
│   │   │   ├── Tech/TechStackSection.jsx
│   │   │   └── Projects/ProjectsSection.jsx
│   │   └── ui/
│   │       ├── FloatingNavbar.jsx
│   │       ├── Background.jsx
│   │       └── ScrollProgressBar.jsx
│   └── ... (aset lain seperti gambar)
├── App.css
├── App.jsx         # File utama yang menyusun semua komponen
└── main.jsx        # Titik masuk aplikasi React
```

---

## ⚙️ Menjalankan Proyek Secara Lokal

Jika Anda ingin menjalankan proyek ini di lingkungan lokal Anda, ikuti langkah-langkah berikut:

**1. Clone Repositori**

```bash
git clone https://github.com/ichramsyah/portfolio-landingpage-style.git
```

**2. Masuk ke Direktori Proyek**

```bash
cd portfolio-landingpage-style
```

**3. Install Dependencies**
Gunakan `npm` atau `yarn` untuk menginstall semua library yang dibutuhkan.

```bash
npm install
```

atau

```bash
yarn install
```

**4. Jalankan Development Server**
Proyek ini akan berjalan di `http://localhost:5173` (atau port lain yang tersedia).

```bash
npm run dev
```

atau

```bash
yarn dev
```

---

## ✉️ Kontak

Jangan ragu untuk menghubungi saya jika ada pertanyaan atau ingin berdiskusi lebih lanjut!

- **LinkedIn**: [https://www.linkedin.com/in/ichramsyah-abdurrachman/](https://www.linkedin.com/in/ichramsyah-abdurrachman/)
- **Email**: [ichramsyahabdurrachman@gmail.com](mailto:ichramsyahabdurrachman@gmail.com)

Terima kasih telah berkunjung!
