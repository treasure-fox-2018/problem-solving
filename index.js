/*
CREATE function fitnessSchedule with parameter input
THEN looping start from input until 31
SET an empty array
    IF (i%5 === 0)
            THEN DISPLAY Tanggal:  i + Tempat Fitnes Tutup 
    ELSE {
        IF i === input
        THEN DISPLAY Tanggal i: Tono, Anton, Budi
    } ELSE {
        IF (i-input) % 2 === 0
            THEN DISPLAY Tanggal i: Tono
        IF (i-input) % 4 === 0
            THEN DISPLAY Tanggal i: Anton
        IF (i-input) % 5 === 0
            THEN DISPLAY Tanggal i: Budi
        DISPLAY Tanggal i + array yang sudah di join
        }  
*/

function fitnessSchedule(input){
    for (var i=input; i<=31; i++){
        var array = []
        if (i%5 === 0){
            console.log("Tanggal: " + i + " " + "Tempat Fitness Tutup")
        }
        else {
            if (i === input){
                console.log("Tanggal: " + i + " " + "Tono, Anton, Budi")
            } else {
                if ((i-input) % 2 === 0){
                    array.push("Tono")
                }
                if ((i-input) % 4 === 0){
                    array.push("Anton")
                }
                if ((i-input) % 5=== 0){
                    array.push("Budi")
                }
                console.log("Tanggal: " + i + " "+ array.join(", "))
            }
        }
    }
}
fitnessSchedule(7)