/* PSEUDOCODE
1. SET count with 0
2. FOR a = 7 to 31
    2a. SET member with ''
    2b. IF a modulus 5 not equal with 0 THEN
        2b.a. IF count modulus 2 equal with 0 THEN
            ADD member with 'Tono'
        2b.b. IF count modulus 4 equal with 0 THEN
            ADD member with 'Anton'
        2b.c. IF count modulus 5 equal with 0 THEN
            ADD member with 'Budi'
        2b.d. DISPLAY 'Tanggal' with value of a with ':' with member indeks 0 untill member indeks length of member -1
    2c. ELSE DISPLAY 'Tanggal' with value of a with ':' with 'Tempat Fitness Tutup'
    2d. INCREMENT count
*/
var count = 0
for(var a = 7; a <= 31; a++){
  var member = ''
  if (a % 5 !== 0){
    if (count % 2 === 0){
      member += 'Tono,'
    }
    if (count % 4 === 0){
      member += 'Anton,'
    }
    if ( count % 5 === 0){
      member += 'Budi,'
    }

    console.log('Tanggal ' + a + ':' , member.slice(0, member.length-1))
  } else {
    console.log('Tanggal ' + a + ':' , 'Tempat Fitness Tutup');
  }
  count++
}
