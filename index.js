/* 

  PSEUDOCODE :

  STORE `tanggal` with value 31
  STORE `nama` with value ['Tono', 'Anton', 'Budi']

  FOR  `a` = 0 to Length `nama`
    STORE `day` with value `a` subtract 7
    STORE `a` with value empty array
    
    IF `a` % 5 = 0 THEN
      arr = 'Tempat fitnes tutup' 
    ELSE 

      IF `day` MOD 2 = 0 THEN
        `arr` <- `nama[0]`
      ENDIF

      IF `day` MOD 4 = 0 THEN
        `arr` <- `nama[1]`
      ENDIF

      IF `day` MOD 5 = 0 THEN
        `arr` <- `nama[2]` 
      ENDIF

    ENDIF
    
    DISPLAY 'Tanggal: ' + a + ' '  + arr
  ENDFOR  
*/

function calenderFitnes(n) {
  var tanggal = 31
  var nama = ['Tono', 'Anton', 'Budi']

  for (var a = 7; a <= tanggal; a++) {
    var day = a - 7
    var arr = []
    
    if (a % 5 === 0){
      arr = 'Tempat fitnes tutup'
    } else {

      if (day % 2 === 0) {
        arr.push(nama[0])
      }
      
      if (day % 4 === 0) {
        arr.push(nama[1])
      }
      
      if (day % 5 === 0) {
        arr.push(nama[2])
      }

    }

    console.log(`Tanggal ${a}: ${arr}`)
  }

}
calenderFitnes();
