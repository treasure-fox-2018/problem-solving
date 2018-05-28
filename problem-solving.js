function fitnessCalendar(obj) {
  let startDate = obj.startDate;
  let endDate = 31;
  let tonoDate = obj.tono;
  let budiDate = obj.budi;
  let antonDate = obj.anton;

  let counter = {
    tono: 0,
    budi: 0,
    anton: 0
  }

  for (let i = startDate; i <= endDate; i++) {
    let members = [];

    if (i === startDate) {
      members.push('Tono');
      members.push('Anton');
      members.push('Budi');
    }
    else if (i % 5 === 0) { members.push('Tempat Fitness Tutup') }
    else {
      if (counter.tono % tonoDate === 0) { members.push('Tono') }
      if (counter.budi % budiDate === 0) { members.push('Budi') }
      if (counter.anton % antonDate === 0) { members.push('Anton') }
    }
    counter.tono += 1;
    counter.budi += 1;
    counter.anton += 1;
    console.log(`Tanggal ${i}: ${members.join(', ')}`)
  }
}

fitnessCalendar({
  startDate: 7,
  tono: 2,
  anton: 4,
  budi: 5
})