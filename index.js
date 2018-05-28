function fitnessCalendar(obj) {
  let startDate = obj.startDate;
  let endDate = 31;
  let tonoDate = obj.tono;
  let budiDate = obj.budi;
  let antonDate = obj.anton;

  let counter = { tono: 0, budi: 0, anton: 0 }

  for (let i = startDate; i <= endDate; i++) {
    let output = [];

    if (i === startDate) {
      output.push('Tono');
      output.push('Anton');
      output.push('Budi');
    }
    else if (i % 5 === 0) { output.push('Tempat Fitness Tutup') }
    else {
      if (counter.tono % tonoDate === 0) { output.push('Tono') }
      if (counter.budi % budiDate === 0) { output.push('Budi') }
      if (counter.anton % antonDate === 0) { output.push('Anton') }
    }
    counter.tono += 1;
    counter.budi += 1;
    counter.anton += 1;
    console.log(`Tanggal ${i}: ${output.join(', ')}`)
  }
}

fitnessCalendar({
  startDate: 7,
  tono: 2,
  anton: 4,
  budi: 5
})