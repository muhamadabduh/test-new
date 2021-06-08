// Control Flow / Percabangan / Kondisional
// Review : Boolean, Operator Perbandingan, Operator Kondisional

var stokTelur = 3
var warungBuka = "buka"
var hujan = false

//jika telur ada
// if (stokTelur > 0) {
//   console.log("telur ada, beli 2 kg")
// } else {
//   console.log("telur habis, pulang lagi")
// }


// if (warungBuka == "buka") {
//   console.log("warung buka, bilang mau beli telur")
//   if (stokTelur > 0) {
//     console.log("telur ada, mau beli 2 kg")
//   } else {
//     console.log("telur habis, pulang lagi")
//   }
// } else {
//   console.log("warung tutup, balik lagi")
// }


// switch (key) {
//   case value:

//     break;

//   default:
//     break;
// }
var role = "guru"
var bulan = 2
var tanggal = 31

switch (bulan) {
  case 1:
    // console.log("Halo Siswa, selamat datang di web sekolah")
    var namaBulan = "Januari";
    console.log(namaBulan)
    break;
  case 2:
    // console.log("Halo Siswa, selamat datang di web sekolah")
    var namaBulan = "Januari";
    if (tanggal >= 30) {
      console.log("Bulan februari hanya bisa maksimal 29 hari")
    }
    console.log(namaBulan)
    break;
  case 3:
    // console.log("Halo Siswa, selamat datang di web sekolah")
    var namaBulan = "Januari";
    console.log(namaBulan)
    break;
  case 4:
    // console.log("Halo Siswa, selamat datang di web sekolah")
    var namaBulan = "Januari";
    console.log(namaBulan)
    break;
  default:
    console.log("Nomer Bulan tidak sesuai!")
    break;
}

