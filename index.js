//psudocode
STORE 'countTono' with 1
STORE 'countAnton' with 1
STORE 'countBudi' with 1
STORE 'kalender' with 31
STORE 'containNama' with ['tono', 'Anton', 'Budi']

FOR a = 0 to equal kalender
  STORE 'containResult' with 'tanggal ' + a + ': '
  STORE 'nama' with []
  countTono + 1
  countAnton + 1
  countBudi + 1
  IF a EQUAL 7 THEN
    push value 'containNama' to "nama"
    join 'nama' to string
    SET 'countTono' with 0
    SET 'countAnton' with 0
    SET 'countBudi' with 0
  ELSE
    IF 'countTono' MOD 2 EQUAL 0 AND a MOD 5 NOT EQUAL 0 THEN
      push value 'containNama'[0] to 'nama'
      join 'nama'
    END IF

    IF 'countAnton' MOD 4 EQUAL 0 AND a MOD 5 NOT EQUAL 0 THEN
      push value 'containNama'[1] to 'nama'
      join 'nama'
    END IF

    IF 'countBudi' MOD 5 EQUAL 0 AND a MOD 5 NOT EQUAL 0 THEN
      push value 'containNama'[2] to 'nama'
      join 'nama'
    END IF

    IF a MOD 5 EQUAL 0 THEN
      'containResult' = 'containResult' + Tempat Fitness Tutup
    END IF
  
  END IF
  a++
END FOR

//javascript
var countTono = 1
var countAnton = 1
var countBudi = 1
var kalender = 31
var containNama = ['Tono', ' Anton', ' Budi']

for (var a = 7; a <= kalender; a++) {
  var containResult = 'tanggal ' + a + ': '
  var nama = []
  countTono += 1
  countAnton += 1
  countBudi += 1
  if (a === 7) {
    nama.push(containNama)
    nama.join()
    countTono = 0
    countAnton = 0
    countBudi = 0
    // console.log(containResult + nama)
  } else {
    // console.log(countTono)
    if (countTono % 2 === 0 && a % 5 !== 0) {
      nama.push(containNama[0])
      nama.join()
      // console.log(containResult + nama)
    }
    // console.log(countAnton)
    if (countAnton % 4 === 0 && a % 5 !== 0) {
      nama.push(containNama[1])
      nama.join()
      // console.log(containResult + nama)
    }
    if (countBudi % 5 === 0 && a % 5 !== 0) {
      nama.push(containNama[2])
      nama.join()
      // console.log(containResult + nama)
    }
    if (a % 5 === 0) {
      containResult += ' Tempat Fitness Tutup'
    }
  }
  console.log(containResult + nama)
}