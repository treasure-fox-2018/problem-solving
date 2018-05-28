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
