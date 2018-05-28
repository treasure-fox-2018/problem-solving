// Jadwal Fitness:
// Tono 2 hari sekali
// Anton 4 hari sekali
// Budi 5 hari sekali
//
// Mulai buka tgl 7, semua member dateng tgl 7
// Libur tiap tgl kelipatan 5
// Kalender 31 hari

// output:
// Tanggal 7: Tono, Anton, Budi
// Tanggal 8:
// Tanggal 9: Tono
// Tanggal 10: Tempat fitness tutup
// Tanggal 11: Tono, Anton
// Tanggal 12: Budi
// Tanggal 13: Tono
//
// Tanggal 31: Tono, Anton


// Pseudocode/Algortima
//  1. Buat function yang mempunyai parameter num (number).
//  2. Di dalam function buat looping dimulai dari index 0 sampai index kurang dari atau sama dengan num dikurangi 7
//   2a. Buat variabel arrayNama (array) di dalam looping
//   2b. Buat variabel tgl (number) yang isinya index di tambah 7
//   2c. Jika index sama dengan 0, maka variabel arrNama di kosongkan, kemudian variabel arrNama dimasukkan nilai string "Tono, Anton, Budi"
//   2d. Jika index mod 2 sama dengan 0, maka variabel arrNama dimasukkan nilai string "Tono"
//   2e. Jika index mod 5 sama dengan 0 dan index tidak sama dengan 0, maka variabel arrNama dimasukkan nilai string "Budi"
//   2f. Jika index mod 4 sama dengan 0 dan index tidak sama dengan 0, maka variabel arrNama dimasukkan nilai string "Anton"
//   2g. Jika variabel tgl mod 5 sama dengan 0, maka variabel arrNama dikosongkan, kemudian variabel arrNama dimasukkan nilai string "Tempat fitness tutup"
//   2f. Kemudian tampilkan string "Tanggal " ditambah variabel tgl ditambah string ": " ditambah variabel arrNama



function jadwalFitness(num){
  for(var i = 0; i<=num-7 ; i++){
    var arrNama=[];
    var tgl=i+7
    if(i === 0){
      arrNama=[]
      arrNama.push("Tono, Anton, Budi")
    }
    if(i%2 === 0){
      arrNama.push("Tono")
    }
    if(i%5 === 0 && i !== 0){
      arrNama.push("Budi")
    }
    if(i%4 === 0 && i !== 0){
      arrNama.push("Anton")
    }
    if(tgl%5 === 0){
      arrNama=[]
      arrNama.push("Tempat fitness tutup")
    }
    console.log("Tanggal " +tgl+ ": "+ arrNama)
  }
}

console.log(jadwalFitness(31))
