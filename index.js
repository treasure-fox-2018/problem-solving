//PSEUDOCODE
// SET IndexTono with 0
// SET IndexAnton with 0
// SET IndexBudi with 0
// SET i with 7
//
// FOR i to 31 DO
//   SET 'output' with string
//
//   IF i equal 7 DO
//     DISPLAY 'tanggal' ADD i ADD ': ' ADD 'Tono,Anton,Budi'
//   ELSE
//     IndexTono ADD 1
//     IndexAnton ADD 1
//     IndexBudi ADD 1
//
//     IF i MOD 5 equal 0 DO
//       output ADD 'Tempat fitnes libur'
//     END IF
//
//     IF IndexTono equal 2 DO
//       output ADD 'Tono,'
//       RESET IndexTono
//     END IF
//
//     IF IndexAnton equal 4 DO
//       output ADD 'Anton,'
//       RESET IndexAnton
//     END IF
//
//     IF IndexBudi equal 5 DO
//       output ADD 'Budi,'
//       RESET IndexBudi
//     END IF
//     DISPLAY 'tanggal' ADD i ADD ': ' ADD output
//   END IF
// END FOR
var indexTono = 0;
var indexAnton = 0;
var indexBudi = 0;

for (var i = 7; i <= 31; i++) {
  var output = '';

  if (i === 7) {
    console.log('tanggal ' + i + ': '+ 'Tono,Anton,Budi');
  }else{
    indexTono += 1;
    indexAnton += 1;
    indexBudi += 1;

    if (i % 5 === 0) {
      output += 'Tempat fitnes libur';
    }

    if (indexTono === 2) {
      output += 'Tono,';
      indexTono = 0;
    }

    if (indexAnton === 4) {
      output += 'Anton,'
      indexAnton = 0;
    }

    if (indexBudi === 5) {
      output += 'Budi,'
      indexBudi = 0;
    }
    console.log('tanggal ' + i + ': '+ output);
  }
}
