function fitness(date, people){
    let startDate = date;
    let peoples = [...people];
    let announce = 'tempat fitness tutup';
    let schedule = [];
    
    for(let a = startDate; a <= 31; a++){
        let resetDate = a - startDate;
        let memberTakePractice = [];
        if(resetDate % 2 === 0){
            memberTakePractice.push(peoples[0])
        }
        
        if(resetDate % 4 === 0){
            memberTakePractice.push(peoples[1])
        }

        if(resetDate % 5 === 0){
            memberTakePractice.push(peoples[2])
        }

        if(a % 5 === 0 ){
            memberTakePractice = [];
            memberTakePractice.push(announce);
        }
        schedule.push(`tanggal ${a} : ${memberTakePractice}`)
        memberTakePractice = []
        

    }
    return schedule.join('\n')
}

console.log(fitness(7, ['tono', 'anton', 'budi']))
