// 1. menyediakan var untuk output jadwal member
// 2. membuat looping untuk libur tempat fitness - setiap tgl kelipatan 5 di mulai dari tanggal 7 (if a month has 31 days, that means 10, 15, 20, 25 and 30)
// 3. melakukan looping bedasarkan keseringan setiap member datang - starting from tanggal 7
//     3.a Tono, setiap 2 hari (if month is up to 31, that means 9, 11, 13, 17, 19, 21, 23, 27, 29, 31)
//         3.a.1 jika kedatangan di hari tutup maka tidak di tampilkan (15, 25)
//     3.b Anton, setiap 4 hari (if month is up to 31, that means 11, 19, 23, 27, 31)
//         3.b.1 jika kedatangan di hari tutup maka tidak di tampilkan (15)
//     3.c Budi, setiap 5 hari (if month is up to 31, that means 12, 17, 22, 27)


// SET var `output` with empty string

// FOR i = 7
//     i <= 31
//     i++
//     SET var `checkDate` with i - 7
//     `output` = 'Tanggal' + index
//     IF i EQUALS TO 7 THEN
//      DISPLAY output + 'Tono,' + 'Anton' + 'Budi'
//      ELSE IF i % 5 EQUALS TO 0 THEN 
//         DISPLAY 'Tempat Fitness Tutup'
    
//     ELSE
//      IF `checkDate` % 2 EQUALS TO 0
//          IF `checkDate` % 4 EQUALS TO 0 OR `checkDate` % 5 EQUALS TO 0
//              DISPLAY 'Tono, '
//          ELSE IF `checkDate` % 4 DOES NOT EQUAL TO 0 AND `checkDate` % 5 DOES NOT EQUAL TO 0
//              DISPLAY 'Tono'

//      IF `checkDate` % 4 EQUALS TO 0
//          IF `checkDate` % 4 EQUALS TO 0 AND `checkDate` % 5 EQUALS TO 0
//              DISPLAY 'Anton, '
//          ELSE IF `checkDate` % 4 EQUALS TO 0 AND `checkDate` % 5 DOES NOT EQUAL TO 0
//              DISPLAY 'Anton'

//      IF `checkDate` % 5 EQUALS TO 0
//         DISPLAY 'Budi'
//     END IF
// END FOR
//DISPLAY `output`
    
var output = '';


for (var i = 7; i <= 31; i++) {
    var checkDate = i - 7;
    output = 'Tanggal ' + i + ':';
    if (i === 7) {
        output += ' Tono, ' + 'Anton, ' + ' Budi';
    } else if (i % 5 === 0) {
            output += ' Tempat Fitness Tutup';
    } else {
        if (checkDate % 2 === 0) {
            if (checkDate % 4 === 0 || checkDate % 5 === 0) {
                output += ' Tono, ';
            } else if (checkDate % 4 !== 0 && checkDate % 5 !== 0) {
                output += ' Tono';
            }
        } 
        if (checkDate % 4 === 0) {
            if (checkDate % 4 === 0 && checkDate % 5 === 0) {
                output += ' Anton, ';
            } else if (checkDate % 4 === 0 && checkDate % 5 !== 0) {
                output += ' Anton';
            }
        } 
        if (checkDate % 5 === 0) {
            output += ' Budi';
        }
    }
    console.log(output);
}
