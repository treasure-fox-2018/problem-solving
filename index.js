
function jadwal(start,end,person,libur){
    var tampung =[]
    for(let i=start;i<=end;i++){
        tampung.push(i)
    }

    var hasil =[]
    for(let i=0;i<tampung.length;i++){
        var tempt =[]
        tempt.push(tampung[i])
        for(let j=0;j<person.length;j++){
            if(i % person[j][1] == 0){
                tempt.push(person[j][0])
            } 
        }
      
        hasil.push(tempt)
    }

    for(let i =0;i<hasil.length-1;i++){
        var nama = hasil[i].splice(1).join(', ')
        if(hasil[i][0] % libur == 0){
            console.log(`tanggal ${hasil[i][0]} : tempat fitness tutup`)
        }else{
            console.log(`tanggal ${hasil[i][0]} : ${nama}`)
        }
    }
}
jadwal(7,31,[["tono",2],["anton",4],["budi",5]],5)