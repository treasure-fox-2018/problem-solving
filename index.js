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
function jadwal(tanggal) {
var listAnggota = {}
  for (var a = 7; a <= tanggal; a++) {
    if (listAnggota[a] === undefined) {
      listAnggota[a] = []
    }
  }
  var open = 7
  var keys = Object.keys(listAnggota)
  var hasil = ''
  for (var b = 0; b < keys.length; b++) {
    if (keys[b] % 5 === 0) {
      listAnggota[keys[b]].push('Tempat Fitness Tutup')
    } else {
      if (keys[b] == open) {
        listAnggota[keys[b]].push('Tono', 'Anton', 'Budi')
      }
      if ((keys[b]-open) % 2 == 0 && keys[b] != open) {
        listAnggota[keys[b]].push('Tono')
      } 
      if ((keys[b]-open) % 4 == 0 && keys[b] != open) {
        listAnggota[keys[b]].push('Anton')
      } 
      if ((keys[b]-open) % 5 == 0 && keys[b] != open) {
        listAnggota[keys[b]].push('Budi')
      }
    }
    hasil += 'Tanggal ' + keys[b] + ': ' + listAnggota[keys[b]] + '\n'
  }
  return hasil
}
console.log(jadwal(31))
