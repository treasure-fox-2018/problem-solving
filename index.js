// PSEUDOCODE & Algoritma

/*

// Logika

1. buat variabel openingDate dengan nilai 7
2. buat variabel i dengan nilai 0 untuk looping
3. buat variabel closeDate dengan nilai 0 untuk menampung hasil mod dari i dengan 5 (tanggal 5 : libur)
4. buat variabel output dengan tipe data string untuk menampung hasil yang akan di console log
5. buat variabel endDate dengan nilai 31 sebagai batas akhir looping
6. buat variabel check dengan nilai 0 sebagai hasil tampung dari i dikurangi dengan openingDate (sebagai input mod)

6. looping i dengan nilai awal setara openingDate dan i kurang dari sama dengan nilai endDate dan increment-kan i
    6a. buat nilai check menjadi i dikurangi dengan openingDate
    6b. tambahkan string 'Tanggal ' dan nilai i ke dalam output
    6c. jika i mod 5 sama dengan 0
        tambahkan string 'Tempat Fitness Libur'
    6d. jika i mod 5 tidak sama dengan 0
        6da. jika check di mod 2 sama dengan 0 tambahkan output dengan 'Tono'
        6db. jika check di mod 4 sama dengan 0 tambahkan output dengan 'Anton'
        6dc. jika check di mod 5 sama dengan 0 tambahkan output dengan 'Budi'

    6e. tampilkan output

// PSEUDOCODE

/*

SET 'openingDate' with 7
SET 'i' with 0
SET 'closeDate' with 0
SET 'output' with ''
SET 'endDate' with 31
SET 'check' with 0

FOR 'i' equals 0 AND 'i' less or equal to 'endDate' THEN increment 'i'
    CALCULATE 'i' REDUCED by 'openingDate'
    STORE 'check' with CALCULATION RESULT
    STORE 'output' with string 'Tanggal ' added with value of 'i' added with sting ':'
    CALCULATE 'i' mod with 5
    STORE 'freeDay' with CALCULATION RESULT

    IF 'i' equals to 7 THEN
        ADD 'output' with string ' Tono, Anton, Budi'
        PRINT 'output'
        END IF
    ELSE IF CALCULATION result equals to 0 THEN
        ADD 'output' with string ' Tempat Fitness Tutup'
        PRINT 'output'
        END IF
    ELSE
        CALCULATE check mod 2
        IF RESULT calculation equals to 0
            IF check mod 4 equals 0 OR check mod 5 equals 0
                ADD 'output' with string 'Tono,'
            ELSE IF 'check' mod 4 is not equals to 0 AND 'check' mod 5 is not equals 0
                ADD 'output' with string'Tono'
        END IF
        CALCULATE 'check' mod 4
        IF RESULT calculation equals to 0
            IF 'check' mod 4 equals to 0 AND 'check' mod 5 equals to 0
                ADD 'output' with string ' Anton,'
            ELSE IF 'check' mod 4 equals 0 AND 'check' mod 5 is not equals to 0
                ADD 'output' with string ' Anton'
        END IF
        CALCULATE check mod 5
        IF result equals to 0
            ADD 'output' with string ' Budi'
        END IF
    END IF

    PRINT 'output'


*/


var openingDate = 7;
var i = 0;
var closeDate = 0;
var output = '';
var endDate = 31;
var check = 0;

for (i = openingDate; i <= endDate; i++) {
    check = i - 7;
    output = 'Tanggal '+ i +':';

    if (i === 7) {
        output += ' Tono, Anton, Budi';
    } else if (i % 5 === 0) {
        output += ' Tempat Fitness Tutup';
    } else {
        if (check % 2 === 0) {
            if (check % 4 === 0 || check % 5 === 0) {
                output += ' Tono,';
            } else if (check % 4 !== 0 && check % 5 !== 0) {
                output += ' Tono';
            }
        }

        if (check % 4 === 0) {
            if (check % 4 === 0 && check % 5 === 0) {
                output += ' Anton,';
            } else if (check % 4 === 0 && check % 5 !== 0) {
                output += ' Anton';
            }
        }

         if (check % 5 === 0) {
            output += ' Budi';
        }
    }

    console.log(output);
}












//
