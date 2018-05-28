var date = 7;
var arrDates = [7, 7, 7];
var nextClose = 10;

for (var i = 0; i <= 24; i++) {
  if (date === nextClose) {
    console.log("Tanggal " + date + ": Tempat Fitness Tutup");
    for (var k = 0; k < arrDates.length; k++) {
      if (arrDates[k] === nextClose && k === 0) {
        arrDates[0] += 2;
      } else if (arrDates[k] === nextClose && k === 1) {
        arrDates[1] += 4;
      } else if (arrDates[k] === nextClose && k === 2) {
        arrDates[2] += 5;
      }
    }
    nextClose += 5;
  } else {
    var arrOutcomes = [];

    for (var j = 0; j < arrDates.length; j++) {
      var inspector = arrDates[j];

      if (inspector === date && j === 0) {
        arrOutcomes.push("Tono");
        arrDates[0] += 2;
      } else if (inspector === date && j === 1) {
        arrOutcomes.push("Anton");
        arrDates[1] += 4;
      } else if (inspector === date && j === 2) {
        arrOutcomes.push("Budi");
        arrDates[2] += 5;
      }
    }
    console.log("Tanggal " + date + ": " + arrOutcomes.join(", "));
  }
  date ++;
}

/*
PSEUDOCODE

date = 7
arrDates = [7, 7, 7]
nextClose = 10

FOR i = 0, i <= 24
  IF date === nextClose THEN
    DISPLAY "Tanggal " + date + ": Tempat Fitness Tutup"
    FOR k = 0, k < arrDates.length
      IF arrDates[k] === nextClose && k === 0 THEN
        arrDates[0] += 2
      ELSE IF arrDates[k] === nextClose && k === 1 THEN
        arrDates[1] += 4
      ELSEIF arrDates[k] === nextClose && k === 2 THEN
        arrDates[2] += 5
      ENDIF
      k++
    ENDFOR
    nextClose += 5
  ELSE
    arrOutcomes = []

    FOR j = 0, j < arrDates.length
      inspector = arrDates[j]

      IF inspector === date && j === 0 THEN
        arrOutcomes.push("Tono")
        arrDates[0] += 2
      ELSEIF inspector === date && j === 1 THEN
        arrOutcomes.push("Anton")
        arrDates[1] += 4
      ELSEIF inspector === date && j === 2 THEN
        arrOutcomes.push("Budi")
        arrDates[2] += 5
      ENDIF
    j++
    ENDFOR
    DISPLAY "Tanggal " + date + ": " + arrOutcomes.join(", ")
  ENDIF
  date ++
  i ++
ENDFOR
*/
