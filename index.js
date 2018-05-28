/*
PSEUDOCODE PROBLEM-SOLVING


STORE and SET `angka` to 0

FOR i = 7 to 31 THEN
  STORE and SET `hasil` to []
  STORE and SET `a` to 0

  IF i % 5 NOT EQUAL to 0 THEN
    IF `angka` % 2 EQUAL to 0 THEN
        `hasil` on `a` to 'Tono'
        `a`++
    END IF

    IF `angka` % 4 EQUAL to 0 THEN
      
      `hasil` on `a` to 'Anton'
      `a`++
    END IF

    IF `angka` % 5 EQUAL to 0 THEN
      `hasil` on `a` to 'Budi'
      `a`++
    END IF

  ELSE
    `hasil` on `a` to 'Tempat Fitness Tutup'
    a`++
  END IF

  STORE and SET `result` to ''

  FOR j = 0 to length of `hasil` THEN
    IF j EQUAL to length of `hasil` THEN
      `result` = `result` + `hasil` on j
    ELSE
      `result` = `result` + `hasil` on j + ', '
    END IF  
    j++
  END FOR  

  DISPLAY 'Tanggal ' + i + ': ' + `result`
  angka ++
  i++
END FOR

*/

var angka = 0;

for (var i = 7; i <= 31; i++) {
  var hasil = [];
  var a = 0;
  if (i % 5 !== 0) {
    if (angka % 2 === 0) {
      hasil[a] = 'Tono';
      a++;
    }
    if (angka % 4 === 0) {
      hasil[a] = 'Anton';
      a++;
    }
    if (angka % 5 === 0) {
      hasil[a] = 'Budi';
      a++;
    }
  }
  else {
    hasil[a] = 'Tempat Fitness Tutup';
    a++;
  }
  
  
  var result = '';
  for (var j = 0; j <= hasil.length - 1; j++) {
    if (j === hasil.length - 1) {
      result = result + hasil[j];
    }
    else {
      result = result + hasil[j] + ', ';
    }
  }
  console.log('Tanggal ' + i + ': ' + result);
  angka++;
}