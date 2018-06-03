function catatanHarianMember(open, arr){
	var count = 0
	for(var a = open; a <= 31; a++){
		var member = ''
		if (a % 5 !== 0){
			for(var b = 0; b < arr.length; b++){

				
				    if (count % arr[b].jadwal === 0){
				    	member += arr[b].name + ','
			    	}	
			}

			console.log('Tanggal ' + a + ':' , member.slice(0, member.length-1))
		} else {
		    console.log('Tanggal ' + a + ':' , 'Tempat Fitness Tutup');
		}

		count++
			
	}

}

catatanHarianMember(7, [{name: 'Tono', jadwal: 2}, {name: 'Anton', jadwal: 4}, {name: 'Budi', jadwal: 5}]);

