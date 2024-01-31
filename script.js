// =====================================================================================================
// // Higher Oreder Function ( Filter, Map, Reduce )
// // Filter
// // Menggunakan For
// const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];

// const newAngka = [];
// for (let i = 0; i < angka.length; i++) {
//   if (angka[i] >= 3) {
//     newAngka.push(angka[i]);
//   }
// }
// console.log(newAngka);

// // Menggunkan Filter
// const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];

// const newAngka = angka.filter((a) => a >= 3);
// console.log(newAngka);

// // Map
// const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];
// const newAngka = angka.map((a) => a * 2);
// console.log(newAngka);

// // Reduce
// // -1 + 8 + 9 + 1 + 4 + -5 + -4 + 3 + 2 + 9
// const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];
// const newAngka = angka.reduce((acumulator, curentValue) => {
//   return acumulator + curentValue;
// });
// console.log(newAngka);

// // Method Caining
// // Cari angka > 5
// // Kalikan 3
// // Jumlahkan
// const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];
// const hasil = angka
//   .filter((a) => a > 5) // 8, 9, 9
//   .map((a) => a * 3) // 24, 27, 27
//   .reduce((acumulator, curentValue) => acumulator + curentValue); // 78
// console.log(hasil);
// =====================================================================================================

// =====================================================================================================
// // LATIHAN
// // ================================================================
// Ambil semua element video
const videos = Array.from(document.querySelectorAll("[data-duration]"));
// Pilih hanya yang "JAVASCRIPT LANJUTAN"
let jsLanjutan = videos
  .filter((video) => video.textContent.includes("JAVASCRIPT LANJUTAN"))
  // Ambil durasi masing-masing video
  .map((item) => item.dataset.duration)
  // Ubah durasi menjadi int, ubah menit menjadi detik
  .map((waktu) => {
    const parts = waktu.split(":").map((part) => parseFloat(part));
    return parts[0] * 60 + parts[1];
  })
  // Jumlahkan semua detik
  .reduce((total, detik) => total + detik);
// Ubah formatnya menjadi jam, menit, dan detik
const jam = Math.floor(jsLanjutan / 3600);
jsLanjutan = jsLanjutan - jam * 3600;
const menit = Math.floor(jsLanjutan / 60);
const detik = jsLanjutan - menit * 60;
// Simpan di DOM
const pDurasi = document.querySelector(".total-durasi");
pDurasi.textContent = `${jam} Jam, ${menit} Menit, ${detik} Detik.`;
const jmlVideo = videos.filter((video) =>
  video.textContent.includes("JAVASCRIPT LANJUTAN")
).length;
const pJmlVideo = document.querySelector(".jumlah-video");
pJmlVideo.textContent = `${jmlVideo} Video.`;

console.log(jsLanjutan);
// =====================================================================================================
