function problemSolving (object) {
  var startDate = object.startDate;
  var endDate = object.endDate;
  var member = object.member;
  var libur = object.libur;

  var angka = 0;

  for (var i = startDate; i <= endDate; i++) {
    var hasil = [];
    if (i % libur[1] !== 0) {
      for (j = 0; j <= member.length - 1; j++) {
        if (angka % member[j][1] === 0) {
          hasil.push(member[j][0])
        }
      }
    }
    else {
      hasil.push(libur[0]);
    }
    
    
    var result = '';
    for (var k = 0; k <= hasil.length - 1; k++) {
      if (k === hasil.length - 1) {
        result = result + hasil[k];
      }
      else {
        result = result + hasil[k] + ', ';
      }
    }
  console.log('Tanggal ' + i + ': ' + result);
  angka++;
  }
}

var object = {
  startDate : 7,
  endDate : 31,
  member : [['Tono' , 2], ['Anton', 4], ['Budi', 5]],
  libur : ['Tempat Fitness Tutup', 5]
}

problemSolving(object);