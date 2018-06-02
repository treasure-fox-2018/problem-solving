// tono datang 2 hari sekali
// anton 4 hari sekali
// budi 5 hari sekali

// tanngal fitnes buka tanggal 7 => anton, tono, budi datang
// tempat fitness tutup => setiap kelipatan tanggal 5
// tiap bulan 31 hari

// Psedudocode

// 1. buat tanggal 7 sampe 31  isi dengan array kosong
// 2. setiap kelipatan 7+2  tono masuk, setiap 7+4 si anton datang, setiap 7+5 si budi datang
// 3. setiap tanggal 10, 15, 20, 25, 30 tempat fitness tutup

// SET 'i' equals to 0
// FOR 'i' equals to 0 AND 'i' lees than 32 THEN increment 'i' by 1
//     SET 'tanggalArr' with empty Array
//     IF i mod 5 equals to 0
//         THEN PUSH 'tanggalArr' with 'Tempat Fitness Tutup'
//     ELSE IF i equals to 7
//         THEN PUSH 'tanggalArr' with 'Tono','Anton','Budi'
//     ELSE 
//         IF (i-7) mod 2 equals to 0
//             PUSH 'tanggalArr' with 'Tono'
//         END IF   
//         IF (i-7) mod 4 equals to 0
//             PUSH 'tanggalArr' with 'Anton'
//         END IF    
//         IF (i-7) mod 5 equals to 0
//             PUSH 'tanggalArr' with 'Budi'
//         END IF    
//     END IF   
//     PRINT "Tanggal " + i + " : " + tanggalArr
// END FOR

for (let i = 7; i < 32; i++) {
    let tanggalArr = []
    if (i % 5 === 0) {
        tanggalArr.push("Tempat Fitness Tutup")
    } else if (i === 7) {
        tanggalArr.push('Tono','Anton','Budi')
    } else {
        if ((i-7) % 2 === 0) { // (8-7 = 1) % 2 !== 0, (9-7 = 2) % 2 === 0 and so on jadi ketika hasil i-7 nya genap si tono di push ke i yg ngasilin pertambahan 2 
        tanggalArr.push("Tono")
        } if ((i-7) % 4 === 0) {
        tanggalArr.push("Anton")
        } if ((i-7) % 5 === 0) {
        tanggalArr.push("Budi")
        }
    }
    console.log("Tanggal " + i + " : " + tanggalArr.join(", "))
}

