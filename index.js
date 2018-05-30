// PSUDOCODE 



// FUNCTION with parameter 'tanggal'

// SET and STORE obj with {}

// FOR i LESS THAN parameter from i EQUAL to 7
//     IF 'obj[i]' STRICT EQUAL TO undefined
//         obj[i] EQUAL []
//     END IF
// END FOR    
   
//     SET and STORE 'keys' with Object.keys(obj)
//     SET and STORE 'hasil' with ''
//     SET and STORE 'openingDate' with 7

//     FOR j LESS THAN 'keys' LENGTH FROM i EQUAL TO 0
//         IF 'keys[j]' mod 5 STRICT EQUAL TO 0
//             'obj[keys[j]]' PUSH 'Tempat Fitnes Libur'
//         ELSE 
//             IF 'keys[j]' STRICT EQUAL TO 'openingDate'
//                 'obj[keys[j]]' PUSH 'Tono, Anton, Budi'
//             END IF
//             IF 'keys[j]' REDUCE 'openingDate' MOD 2 STRICT EQUAL TO 0 AND 'keys[j]' IS NOT EQUAL 'openingDate'
//             'obj[keys[j]]' PUSH 'Tono'
//             END IF
//             IF 'keys[j]' REDUCE 'openingDate' MOD 4 STRICT EQUAL TO 0 AND 'keys[j]' IS NOT EQUAL 'openingDate'
//             'obj[keys[j]]' PUSH 'Anton'
//             END IF
//             IF 'keys[j]' REDUCE 'openingDate' MOD 5 STRICT EQUAL TO 0 AND 'keys[j]' IS NOT EQUAL 'openingDate'
//             'obj[keys[j]]' PUSH 'BUDI'
//             END IF

//             'hasil' CALCULATE 'Tanggal' PLUS 'keys[j]' PLUS ' : ' PLUS 'obj[keys[j]]' PLUS '\n'
//     END FOR
//     RETURN 'hasil'

//     END FUNCTION


function fitnes(tanggal) {
    
        var obj = {}
    
        for (var i = 7 ; i <= tanggal ; i++){
            if (obj[i] === undefined) {
                obj[i] = []
            } 
        }
        var keys = Object.keys(obj)
        var hasil = '';
        var openingDate = 7
    
        
        for (var j = 0 ; j < keys.length ; j ++) {
        
            if (keys[j] % 5 === 0) {
                obj[keys[j]].push('Tempat Fitnes Libur')       
            } else {
            if (keys[j] === openingDate ) {
                obj[keys[j]].push('Tono, Anton, Budi');
            }  
            if ((keys[j] - openingDate) % 2 === 0 && keys[j] !== openingDate ) {
                obj[keys[j]].push('Tono')
            }  
            if ((keys[j] - openingDate) % 4 === 0 && keys[j] !== openingDate ) {
                obj[keys[j]].push('Anton')
            } 
            if ((keys[j] - openingDate) % 5 === 0 && keys[j] !== openingDate) {
            obj[keys[j]].push('Budi')
            }
            }
            hasil += 'tanggal ' + keys[j] + ' : ' + obj[keys[j]] + '\n';
    
        
        }
        return hasil
    
    }
    console.log(fitnes(31))