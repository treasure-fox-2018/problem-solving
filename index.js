// PSEUDOCODE

// 1. Buat data 'Tanggal' 7 sampai 'Tanggal' 31
//     1a. Buat String kosong 'output' 
       
//     1b. IF 'Tanggal' di bagi 2 menghasilkan sisa 1 
//             IF 'output' adalah string kosong
//                 THEN ADD 'output' with "Tono"
//             ELSE 
//                 ADD 'output' with ", Tono"
//     1c. IF 'Tanggal' di bagi 4 menghasilkan sisa 3
//             IF 'output' adalah string kosong
//                 THEN ADD 'output' with "Anton"
//             ELSE 
//                 ADD 'output' with ", Anton"
//     1d. IF 'Tanggal' di bagi 5 menghasilkan sisa 2
//             IF 'output' adalah string kosong
//                 THEN ADD 'output' with "Budi"
//             ELSE 
//                 ADD 'output' with ", Budi"
//     1e. IF 'Tanggal' habis di bagi dengan 5
//             THEN 'output' = Tempat Fitness Tutup

for (let i = 7; i <= 31; i++) {
    
    var output = ''
    
    if (i % 2 == 1) {
        if (output == '') {
            output += 'Tono'
        } else {
            output += ', Tono'
        }
    }
    if (i % 4 == 3) {
        if (output == '') {
            output += 'Anton'
        } else {
            output += ', Anton'
        }
    }
    if (i % 5 == 2) {
        if (output === '') {
            output += 'Budi'
        } else {
            output += ', Budi'
        }
    }
    if (i % 5 == 0) {
        output = 'Tempat Fitness Tutup'       
    }        

    console.log('Tanggal ' + i + ' : ' + output);
    
}