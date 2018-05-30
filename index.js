// PSEUDOCODE
// SET and STORE 'tanggal' with 31
// SET and STORE 'listAnggota' with empty object
// FOR 'a' LESS THAN AND EQUAL to 'tanggal' from 'a' EQUAL to 7
//     IF listAnggota[a] STRICT EQUAL to undefined
//         DETERMINE listAnggota[a] EQUAL to empty string
//     ENDIF
// ADD 'a' by 1
// ENDFOR
// SET and STORE 'keys' EQUAL to Object.keys(listAnggota)
// SET and STORE 'hasil' with empty string
// FOR 'b' LESS THAN 'keys' length from 'b' EQUAL to 0
//     IF keys[b] MOD 5 STRICT EQUAL 0
//         DO listAnggota[keys[b]] EQUAL to 'Tempat Fitness Tutup'
//     ELSE
//         IF keys[b] EQUAL to 7
//             DO listAnggota[keys[b]] EQUAL to 'Tono', 'Anton', 'Budi'
//         ENDIF
//             IF keys[b] REDUCE by 7 then MOD 2 STRICT EQUAL 0
//                DO listAnggota[keys[b]] EQUAL to 'Tono'
//         ENDIF
//             IF keys[b] REDUCE by 7 then MOD 4 STRICT EQUAL 0
//                DO listAnggota[keys[b]] EQUAL to 'Anton'
//         ENDIF
//             IF keys[b] REDUCE by 7 then MOD 5 STRICT EQUAL 0
//                DO listAnggota[keys[b]] EQUAL to 'Budi'
//         ENDIF
//     ENDIF
//     CALCULATE 'hasil' with 'Tanggal ' ADD by keys[b] ADD by ': ' ADD by listAnggota[keys[b]] ADD by '\n'
// ADD 'b' by 1
// ENDFOR
// DISPLAY 'hasil'

// var tanggal = 31
function jadwal(tanggalBuka, hariLibur, jumlahTanggal, listAnggota) {
  var jadwalObj = {}
  for (var a = tanggalBuka; a <= jumlahTanggal; a++) {
    if (jadwalObj[jumlahTanggal[a]] === undefined) {
      jadwalObj[a] = []
    }
  }
  var keys = Object.keys(jadwalObj)
  var hasil = ''
  for (var b = 0; b < keys.length; b++) {
    for (var c = 0; c < listAnggota.length; c++) {
      if (keys[b] % hariLibur === 0 && jadwalObj[keys[b]].length < 1) {
        jadwalObj[keys[b]].push('Tempat Fitness Tutup')
      } else {
        if (keys[b] == tanggalBuka) {
          jadwalObj[keys[b]].push(listAnggota[c][0])
        } else if ((keys[b]-tanggalBuka) % listAnggota[c][1] === 0 && keys[b] != tanggalBuka && keys[b] % hariLibur != 0) {
          jadwalObj[keys[b]].push(listAnggota[c][0])
        }
      }
    }
    hasil += 'Tanggal ' + keys[b] + ' : ' + jadwalObj[keys[b]] + '\n'
  }
  return hasil
}

console.log(jadwal(7, 5, 31, [['Tono', 2], ['Anton', 4], ['Budi', 5]]))
