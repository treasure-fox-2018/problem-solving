/*
-GET names
-FOR index = 7 until 31
  days = index - 7
  info = ''

  IF index is multiplication of 5
    info is gym is closed
  ELSE
    IF days is multiplication of 2
      info is Tono attends
    IF days is multiplication of 4
      info is Anton attends
    IF days is multiplication of 5
      info is Budi attends
    ELSE
      info is ''

  PRINT Tanggal index : info

*/


var arr = ['Tono', 'Anton', 'Budi'];

for (var i = 7; i <= 31; i++) {
  var arr2 = [];
  var hari = i - 7;

  if (i % 5 === 0) {
    arr2 = 'Tempat Fitness Tutup';
  }else {
    if (hari % 2 === 0) {
      arr2.push(arr[0]);
    }if (hari % 4 === 0) {
      arr2.push(arr[1]);
    }if (hari % 5 === 0) {
      arr2.push(arr[2]);
    }
  }
  console.log('Tanggal '+i+': '+arr2);
}
