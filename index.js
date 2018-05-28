// SET member to ["Tono", "Anton", "Budi"];
// SET dateOpen to 7;
// SET countTono to 0;
// SET countBudi to 0;
// SET countAnton to 0;
//
// FOR i until <= month
//   SET arr to []
//   IF i >= dateOpen
//     IF i = dateOpen
//       DISPLAY "Tanggal " + i + ": " + member JOIN with ", "
//     ELSE IF i % 5 = 0
//       DISPLAY "Tanggal " + i + ": " + ": Tempat Fitness Tutup"
//     ELSE
//       IF countTono % 2 = 0
//         PUSH arr with member index 0
//       IF countAnton % 4 = 0
//         PUSH arr with member index 1
//       IF countBudi % 5 = 0
//         PUSH arr with member index 2
//       END IF
//
//       DISPLAY "Tanggal " + i + ": " + arr JOIN with ", "
//
//       countTono++
//       countAnton++
//       countBudi++
//     END IF
//   END IF
// END FOR

var member = ["Tono", "Anton", "Budi"];
var dateOpen = 7;
var countTono = 0;
var countBudi = 0;
var countAnton = 0;
var month = 31;

for(var i = 0; i <= month; i++){
  var arr = [];
  if(i >= dateOpen){
    if(i === dateOpen){
      console.log("Tanggal " + i + ": " + member.join(", "))
    }
    else if(i % 5 === 0){
      console.log("Tanggal " + i + ": Tempat Fitness Tutup")
    }
    else{
      if(countTono % 2 === 0){
        arr.push(member[0])
      }
      if(countAnton % 4 === 0){
        arr.push(member[1])
      }
      if(countTono % 5 === 0){
        arr.push(member[2])
      }
      console.log("Tanggal " + i + ": " + arr.join(", "))
    }
    countBudi++
    countTono++
    countAnton++
  }
}
