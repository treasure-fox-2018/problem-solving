/*
SET function problemSolving with parameter 'person'

set 'Masuk' to 7
set 'libur' to 5
set 'tglBulan' to 31

set i equals to 'Masuk'

FOR i is less than or equals to tglBulan
set 'Members' to empty array


IF i MOD 'libur' is equals to 0 THEN
 display 'Tanggal ' + i + ': Tempat Fitness Tutup'

ELSE
  if i is equals to 'Masuk'  THEN
   store person[0].name, person[1].name, person[2].name to 'Members'
   Display 'Tanggal ' + i + ': ' + Members.join(', ')

  ELSE

    IF (i - Masuk)  modulus by person[0].masuk  is equals to 0 THEN
     store person[0].name to Members

   IF (i - Masuk)  modulus by person[1].masuk  is equals to 0 THEN
      store person[1].name to Members

  IF (i - Masuk)  modulus by person[2].masuk  is equals to 0 THEN
       store person[2].name to Members

 DISPLAY  'Tanggal ' + i + ': ' + Members.join(', ')


 END FOR



 END FUNCTION



*/



function problemSolving(person) {

  const Masuk = 7;
  const libur = 5;
  const tglBulan = 31;


  for (var i = Masuk; i <= tglBulan; i++) {
    Members = [];
    if (i % libur === 0) {
      console.log('Tanggal ' + i + ': Tempat Fitness Tutup');
    } else {
      if (i === Masuk) {
        Members.push(person[0].name);
        Members.push(person[1].name);
        Members.push(person[2].name);
        console.log('Tanggal ' + i + ': ' + Members.join(', '));
      } else {
        if ((i - Masuk) % person[0].masuk === 0) {
          Members.push(person[0].name);
        }
        if ((i - Masuk) % person[1].masuk === 0) {
          Members.push(person[1].name);
        }
        if ((i - Masuk) % person[2].masuk === 0) {
          Members.push(person[2].name);
        }
        console.log('Tanggal ' + i + ': ' + Members.join(', '));
      }
    }
  }
}

problemSolving([{
  name: 'Tono',
  masuk: 2
}, {
  name: 'Anton',
  masuk: 4
}, {
  name: 'Budi',
  masuk: 5
}]);
