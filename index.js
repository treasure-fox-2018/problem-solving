// set enddate to 31
// set member to {tono:2,anton:4,budi:5}
// set day to 0
// membuat peulangan dengan i dimulai dari 7 hingga enddate, dengan i ditambah dengan 1
//   jika i mod 5 = 0,
//     maka tampilkan "Tanggal `i`: Tempat fitnes tutup"
//   jika tidak
//    set arr to array kosong
//    membuat perulangan dari ker dalam object member
//     jika, day mod member[key] sama dengan 0
//       maka, masukan key ke arr
//   setelah perulangan member selesai,
//   tampilkan `Tanggal `i` : arr`
//   lalu tambahkan day dengan 1

var enddate = 31
var member = {Tono:2,Anton:4,Budi:5}
var day = 0

for (var i = 7; i <= enddate; i++) {
  if (i%5==0) {
    console.log(`Tanggal ${i}: Tempat Fitnes Tutup`);
  }
  else {
    var arr = []
    for (var key in member) {
      if (day%member[key]==0) {
        arr.push(key)
      }
    }
    console.log(`Tanggal ${i}: ${arr}`);
  }
  day++;
}
