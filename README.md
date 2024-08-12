# Tabel Data

## Deskripsi
Proyek ini menampilkan tabel data dari file JSON menggunakan HTML, Native JS dan Tailwind CSS. Data ditampilkan dalam tabel dan dimuat otomatis dari file `data.json` yang disimpan di `local storage`.

## Cara Menjalankan Proyek

1. **Buka File `index.html`**
   
   - Setelah membuka file `index.html` di browser, tabel data akan otomatis dimuat dari file `data.json`.

2. **Mengubah Data yang Ditampilkan**
   
   - Jika Anda ingin mengubah data yang ditampilkan di tabel, hapus data yang sudah tersimpan di `local storage` dengan mengikuti langkah-langkah berikut:
     - Buka `Developer Tools` di browser Anda (biasanya dengan menekan `F12` atau `Ctrl+Shift+I`).
     - Navigasikan ke tab `Application` (atau `Storage` di beberapa browser).
     - Di bagian `Local Storage`, pilih situs web Anda.
     - Temukan item `data` dan hapus item tersebut.
   - Setelah menghapus item dari `local storage`, data baru dari `data.json` akan dimuat secara otomatis saat Anda memuat ulang halaman.

## File-File yang Tersedia

- **`index.html`**: File utama HTML yang menampilkan tabel data.
- **`loadStorage.js`**: Script untuk memuat data dari `data.json` ke `local storage`.
- **`generateTable.js`**: Script untuk menghasilkan baris tabel berdasarkan data.
- **`isiTable.js`**: Script untuk mengisi tabel dengan data dari `local storage`.
- **`data.json`**: File JSON yang berisi data yang ditampilkan dalam tabel.

## Dependencies

- **Tailwind CSS**: Untuk styling tabel dan layout. Versi yang digunakan adalah 2.2.19 dan diimpor dari CDN.

## Troubleshooting

- Jika tabel tidak ditampilkan, pastikan file `data.json` ada di lokasi yang sama dengan file HTML dan berisi data yang valid.
- Jika Anda mengalami kesalahan saat memuat data, periksa konsol browser untuk pesan kesalahan yang dapat membantu Anda dalam pemecahan masalah.

