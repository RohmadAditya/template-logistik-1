# QA — template-logistik-1

Tanggal pemeriksaan: 2 Oktober 2026

## Hasil

| Pemeriksaan | Hasil | Catatan |
|---|---|---|
| Struktur HTML | LULUS | 5 halaman, masing-masing memiliki satu `h1` |
| JavaScript | LULUS | `node --check js/site.js` tidak menghasilkan kesalahan |
| Pratinjau HTTP | LULUS | 5 halaman dan aset utama mengembalikan HTTP 200 melalui server lokal port 8017 |
| Tautan dan aset | LULUS | Tautan internal pada lima halaman mengarah ke berkas yang tersedia |
| SEO dasar | LULUS | Judul, deskripsi, ikon, robots, dan sitemap tersedia |
| Aksesibilitas dasar | LULUS | Tautan lewati konten, fokus terlihat, label formulir, dan status formulir tersedia |
| Konsol | LULUS | Tidak ada `console.log` yang tertinggal |
| Pemeriksaan visual peramban | LULUS | Lima halaman diuji pada desktop 1440×900, tablet 768×1024, dan ponsel 390×844; tidak ada luapan horizontal atau gambar gagal |

## Cakupan halaman

- Beranda
- Tentang Kami
- Layanan
- Armada
- Kontak

## Perangkat uji

- Server: `python3 -m http.server 8017`
- Pemeriksaan JavaScript: Node.js `--check`
- Pemeriksaan tautan, aset, metadata, dan HTTP: Python standard library
- Pemeriksaan visual: Chromium pada tiga ukuran viewport

## Catatan sebelum produksi

- Ganti identitas demonstrasi NusaRoute Logistics.
- Ganti domain contoh pada kanonik, Open Graph, robots, dan sitemap.
- Sambungkan formulir ke layanan penerima pesan.
- Ganti nomor WhatsApp contoh dengan nomor bisnis resmi.
- Tinjau dan sahkan semua angka demonstrasi sebelum dipublikasikan.
