/*
PSEUDOCODE

STORE AND SET 'counterHari' to (number) 0
STORE AND SET 'tanggalAwal' to (number) 7
STORE AND SET 'member' to EMPTY (string)

FOR 'i' = 'tanggalAwal' to 31
  IF 'i' MOD by 5 = 0 THEN
    SET 'member' value to "Tempat Fitness Tutup"
  ELSE IF 'i' VALUE = 'tanggalAwal'THEN
    SET 'member' value to "Tono, Anton, Budi"
  ELSE
    IF 'counterHari' MOD by 2 = 0 THEN
      IF 'member' value = EMPTY string THEN
        SET 'member' value append with (string) "Tono"
      ELSE
        SET 'member'  value append with (string) ", Tono"
      END IF
    END IF
    IF 'counterHari' MOD by 4 = 0 THEN
      IF 'member' value = EMPTY string THEN
        SET 'member' value append with (string) "Anton"
      ELSE
        SET 'member'  value append with (string) ", Anton"
      END IF
    END IF
    IF 'counterHari' MOD by 5 = 0 THEN
      IF 'member' value = EMPTY string THEN
        SET 'member' value append with (string) "Anton"
      ELSE
        SET 'member'  value append with (string) ", Anton"
      END IF
    END IF
  END IF
  DISPLAY (string) "Tanggal " APPEND WITH VALUE 'i' APPEND WITH (string)": " APPEND WITH VALUE 'member'
  SET 'member' value to EMPTY string
  SET 'counterHari' value TO 'counterHari' ADD by (number) 1
END FOR
*/

//code

var counterHari = 0;
var tanggalAwal = 7;
var member = "";

for (var i = tanggalAwal; i <= 31; i++) {
  if (i % 5 === 0) {
    member = "Tempat Fitness Tutup";
  } else if (i === tanggalAwal) {
    member = "Tono, Anton, Budi";
  } else {
    if (counterHari % 2 === 0) {
      if (member === "") {
        member += "Tono";
      } else member += ", Tono";
    }
    if (counterHari % 4 === 0) {
      if (member === "") {
        member += "Anton";
      } else member += ", Anton";
    }
    if (counterHari % 5 === 0) {
      if (member === "") {
        member += "Budi";
      } else member += ", Budi";
    }
  }
  console.log("Tanggal "+i+": "+member);
  member = "";
  counterHari++;
}
