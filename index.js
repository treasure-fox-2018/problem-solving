/*
  Gym Calender Function

  Algorithm:

  //Calender Basics
  set total days  = 31
  set start date = 7
  set holiday = 5


  //Loop
  FOR i from start date to total days DO
    set default message as "Tanggal {i}: "
    set comparer = i - start date
    set message as an empty array
    set closed condition as i % holiday === 0

    //Members
      for each member set:
        member name = [recurrence, ' Name']
    // eg: tono = [2,'Tono']

    //Closed message
    IF closed THEN
      conosle.log('Tempat Fitness Tutup')
    ENDIF

    //Member Comparisons
    for each member:
      IF comparer % member [0] === 0 & !closed THEN
        message.push (member[1])
      ENDIF

    //Output
    IF !closed THEN
      console.log (defaultMessage + message)
    ENDIF
  ENDFOR

*/

function calender () {
  //Calender Basics
  const totalDays = 31;
  const startDate = 7;
  const holiday = 5;

  //Loop for console.log message
  for (let i = startDate; i <= totalDays; i+=1) {
    const defaultMessage = `Tanggal ${i}: `;
    const comparer = i-startDate;
    let message = [];
    let closed = i%holiday === 0;

    //Members Here (could have made object)
      const member1 = [2, 'Tono'];
      const member2 = [4, 'Anton'];
      const member3 = [5, 'Budi'];

    //Closed Message
    if (closed) {
      console.log(defaultMessage + 'Tempat Fitness Tutup')
    }

    //Member Comparisons
    if (comparer % member1[0] === 0 && !closed) {
      message.push (member1[1]);
    }
    if (comparer % member2[0] === 0 && !closed) {
      message.push (member2[1]);
    }
    if (comparer % member3[0] === 0 && !closed) {
      message.push (member3[1]);
    }

    //Output
    if(!closed) {
      console.log(`${defaultMessage}${message}`);
    }
  }
}

calender ()
