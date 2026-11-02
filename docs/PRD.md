# PRD — Visi Klinik Mata (v2, redesign)

> Dokumen ini menggantikan PRD internal lama, yang tidak ada di repo (`/private/` dan `/PRODUCT.md` di-gitignore).
> Isinya disusun ulang dari konten situs yang sudah ada. Ubah di sini kalau ada fakta klinik yang berbeda.

## 1. Produk

Situs landing satu halaman untuk klinik mata spesialis dengan lima cabang (Jakarta Selatan, Jakarta Pusat, BSD, Bekasi, Surabaya).
Tujuan tunggal halaman: **membuat calon pasien booking pemeriksaan**, atau konsultasi Lasik gratis.

Pengunjung:

| Segmen | Mau tahu | Aksi yang diharapkan |
| --- | --- | --- |
| Dewasa 20–40, pemakai kacamata | Lasik: aman, berapa, syaratnya | Konsultasi Lasik |
| Orang tua anak 3–12 | Mata juling, myopia control, dokter anak | Book pemeriksaan anak |
| Usia 40+ dan anak mereka | Katarak, glaukoma, BPJS | Cek BPJS lalu book |
| Penderita diabetes | Skrining retinopati | Book skrining |

## 2. Arah desain

- **Karakter:** tenang, presisi, hangat.
- **Dunia:** optik klinis: kaca lensa, bagan Snellen, cahaya jendela di ruang periksa.
- **Moment:**
  1. Hero: foto ruang periksa, ditambah kartu jadwal dokter yang bisa langsung dipilih slotnya.
  2. Lasik: penggaris dioptri yang menunjukkan rentang koreksi.
- **Signature:** penggaris dioptri (garis skala dengan tick). Muncul di hero, Lasik, dan harga, tidak di tempat lain.
- **Bukan:** gradien ungu, glow, bingkai foto bentuk-bentuk (arch, leaf, circle), seal berputar, ikon emoji.

### Token

| Peran | Nilai |
| --- | --- |
| Latar | `#f7f4ee` |
| Kartu | `#fdfbf7` |
| Permukaan terangkat | `#efe9df` |
| Teks utama / kedua / redup | `#1f1b16` / `#5e554a` / `#7b7266` |
| Aksen (teal optik) | `#0d6b66`, di latar gelap `#6fd0c4` |
| Latar gelap | `#161513`, kartu `#1c1a18`, terangkat `#262421` |
| Display | Newsreader 400, hanya h1 dan h2 |
| Antarmuka | Instrument Sans 400, 500, 600 |
| Grid | 4px, radius 8 / 12 / 16 |
| Motion | satu easing `cubic-bezier(0.22, 1, 0.36, 1)`, hanya warna dan opacity |

## 3. Struktur halaman (urutan tetap)

1. Navigasi: logo, lima tautan, tombol Book pemeriksaan
2. Hero: judul, dua aksi, empat fakta, foto, kartu jadwal terdekat
3. Partner asuransi
4. Kondisi mata yang ditangani (8 kondisi)
5. Layanan lengkap (8 layanan dengan harga)
6. Lasik: PRK, Femto-LASIK, SMILE, penggaris dioptri, syarat, CTA
7. Tim dokter
8. Teknologi diagnostik dan bedah
9. Optical shop in-clinic
10. Referensi harga + BPJS
11. Kapan sebaiknya periksa mata (5 kelompok + tanda darurat)
12. Suasana klinik (galeri)
13. Testimoni
14. FAQ
15. Booking (form + WhatsApp)
16. Footer: cabang, tautan, jam buka

## 4. Gambar

- Sumber: Pexels (lisensi bebas pakai, atribusi tidak wajib). Foto dimuat dari CDN Pexels dengan `srcset` 1x dan 2x.
- Setiap bagian punya foto: target 40+ foto, semuanya persegi panjang dengan radius 12 sampai 16.
- Foto dokter di situs ini adalah **foto ilustrasi stok**. Ganti dengan foto dokter asli sebelum rilis.
- Aturan: alt text menjelaskan isi foto, `eager` hanya untuk hero.

## 5. Klaim yang harus diverifikasi sebelum rilis

Angka ini ada di situs lama dan dipertahankan, tetapi belum terbukti:

- 15+ dokter Sp.M, 50.000+ pasien, berdiri sejak 2009
- Akreditasi JCI, keanggotaan PERDAMI, izin Kemenkes
- Daftar partner asuransi
- Harga indikatif di tabel dan kartu layanan
- Tiga testimoni pasien (nama dan cerita)

## 6. Di luar cakupan sekarang

Backend booking (form masih `action="#"`), halaman per layanan, blog, multi-bahasa.
Usulan berikutnya: kirim form ke WhatsApp Business API atau Cloudflare Worker, dan halaman `/lasik` terpisah untuk SEO.
