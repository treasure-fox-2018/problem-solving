//PSEUDOCODE


/*
STORE "names" AS "Tono, Anton, Budi"
STORE "schedule" AS "2,4,5"
STORE "startDate" AS "7"
    FOR EACH number after "startdate" until 31
        IF number is startDate 
            DISPLAY Tanggal number: names
        IF number is startDate incremented by an iteration of 2
            DISPLAY Tanggal number: Tono
        IF number is startDate incremented by an iteration of 4
            DISPLAY Tanggal number: Anton
        IF number is startDate incremented by  and iteration of 5
            DISPLAY Tanggal number: Budi
        IF number % 5 is 0
            DISPLAY Tanggal number:
        END IF
    END FOR
*/

let names = ['Tono','Anton','Budi']
let schedule = [2,4,5]
let startdate = [7,7,7];
for(let z = 7; z <= 31;  z++){
    if(z === 7){
        console.log(`Tanggal 7: Tono, Anton, Budi`)
        startdate[0] += schedule[0];
        startdate[1] += schedule[1];
        startdate[2] += schedule[2];
    }
    else if(z % 5 === 0){
        console.log(`Tanggal ${z}: Tempat fitness tutup`)
        for(let j = 0; j < startdate.length; j++){
            if(startdate[j]  === z){
                startdate[j] += schedule[j]
            }
        }
    }
    else{
        // console.log(startdate)
        var attendees = [];
            for(let k = 0; k < startdate.length; k++){
                if(z === startdate[k]){
                    attendees.push(names[k])
                    startdate[k] += schedule[k]
                }
            }
        console.log(`Tanggal ${z}: ${attendees.join(', ')}`)
        
    }
}
// console.log(startdate)


    

