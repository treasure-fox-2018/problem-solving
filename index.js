// problem solving fitness

class Calendar {

    constructor () {
        
        this.startDate 
        this.endDate
        this.holidayCycle 
        this.member 
        
    }

    print () {
        
        for(let x=this.startDate; x<=this.endDate; x++) {

            let daily = []

            if(x%5 === 0) {

                daily.push('Tempat Fitness Tutup')

            } else if (x%5 !== 0) {

                for(let y=0; y<this.member.length; y++) {

                    if((x-this.startDate) % this.member[y].cycle === 0) {

                        daily.push(this.member[y].name)
                    }
                }
               
            }
            console.log(`Tanggal ${x}: ${daily}`)
        }
    }
}

let calendar = new Calendar
calendar.startDate = 7
calendar.endDate = 31
calendar.holidayCycle = 5
calendar.member = [
                    {
                        name: 'Tono',
                        cycle: 2
                    }, {
                        name: 'Anton',
                        cycle: 4
                    }, {
                        name: 'Budi',
                        cycle: 5
                    }
                  ]

calendar.print ()

                