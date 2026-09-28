# QA — template-logistik-1

Tanggal pemeriksaan: 28 September 2026

## Hasil

| Pemeriksaan | Hasil | Catatan |
|---|---|---|
| Struktur HTML | LULUS | Satu `h1`, elemen semantik, dan formulir tersedia |
| JavaScript | LULUS | `node --check js/site.js` tidak menghasilkan kesalahan |
| Pratinjau HTTP | LULUS | Halaman utama dan `assets/og-cover.svg` mengembalikan HTTP 200 melalui server lokal port 8017 |
| Tautan internal | LULUS | 27 tautan diperiksa, tidak ada tujuan internal yang hilang |
| SEO dasar | LULUS | Judul, deskripsi, kanonik, Open Graph, ikon, robots, dan sitemap tersedia |
| Aset lokal | LULUS | Favicon dan gambar sosial tersedia |
| Aksesibilitas dasar | LULUS | Tautan lewati konten, fokus terlihat, label formulir, dan status formulir tersedia |
| Konsol | LULUS | Tidak ada `console.log` yang tertinggal |
| Git | LULUS | Komit awal berhasil dibuat |
| Pemeriksaan visual peramban | TERTUNDA | Peramban otomatis tidak dapat dimulai karena pustaka sistem seperti `libatk-1.0.so.0` belum tersedia |

## Perangkat uji

- Server: `python3 -m http.server 8017`
- Pemeriksaan JavaScript: Node.js `--check`
- Pemeriksaan tautan dan metadata: Python standard library

## Catatan sebelum produksi

- Ganti identitas demonstrasi NusaRoute Logistics.
- Ganti domain contoh pada kanonik, Open Graph, robots, dan sitemap.
- Sambungkan formulir ke layanan penerima pesan.
- Tambahkan nomor WhatsApp bisnis resmi jika digunakan.
- Periksa tampilan akhir pada 375px, 768px, 1024px, dan 1280px setelah pustaka peramban tersedia.
