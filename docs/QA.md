# QA — template-logistik-1

Tanggal pemeriksaan: 28 September 2026

## Hasil

| Pemeriksaan | Hasil | Catatan |
|---|---|---|
| Struktur HTML | LULUS | 30 halaman, masing-masing memiliki satu `h1` |
| JavaScript | LULUS | `node --check js/site.js` tidak menghasilkan kesalahan |
| Pratinjau HTTP | LULUS | 30 halaman dan aset utama mengembalikan HTTP 200 melalui server lokal port 8017 |
| Tautan dan aset | LULUS | 553 tautan diperiksa, tidak ada berkas tujuan yang hilang |
| SEO dasar | LULUS | Judul, deskripsi, kanonik, Open Graph, ikon, robots, dan sitemap tersedia |
| Aksesibilitas dasar | LULUS | Tautan lewati konten, fokus terlihat, label formulir, dan status formulir tersedia |
| Konsol | LULUS | Tidak ada `console.log` yang tertinggal |
| Git | LULUS | Komit build awal dan QA tersedia |
| Pemeriksaan visual peramban | TERTUNDA | Peramban otomatis tidak dapat dimulai karena pustaka sistem seperti `libatk-1.0.so.0` belum tersedia |

## Cakupan halaman

- Beranda
- Layanan, layanan khusus, solusi berkelanjutan, antarmoda, digital, visibilitas, armada, pangkalan, mitra, dan portal
- Wawasan, tentang, manajemen, laporan, karier, kontak, penawaran, dan kebijakan
- 11 halaman sektor

## Perangkat uji

- Server: `python3 -m http.server 8017`
- Pemeriksaan JavaScript: Node.js `--check`
- Pemeriksaan tautan, aset, metadata, dan HTTP: Python standard library

## Catatan sebelum produksi

- Ganti identitas demonstrasi NusaRoute Logistics.
- Ganti domain contoh pada kanonik, Open Graph, robots, dan sitemap.
- Sambungkan formulir ke layanan penerima pesan.
- Tambahkan nomor WhatsApp bisnis resmi jika digunakan.
- Periksa tampilan akhir pada 375px, 768px, 1024px, dan 1280px setelah pustaka peramban tersedia.
- Tinjau dan sahkan semua angka demonstrasi sebelum dipublikasikan.
