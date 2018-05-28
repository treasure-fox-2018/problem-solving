SET IndexTono with 0
SET IndexAnton with 0
SET IndexBudi with 0
SET i with 7

FOR i to 31 DO
  SET 'output' with string

  IF i equal 7 DO
    DISPLAY 'tanggal' ADD i ADD ': ' ADD 'Tono,Anton,Budi'
  ELSE
    IndexTono ADD 1
    IndexAnton ADD 1
    IndexBudi ADD 1

    IF i MOD 5 equal 0 DO
      output ADD 'Tempat fitnes libur'
    END IF

    IF IndexTono equal 2 DO
      output ADD 'Tono,'
      RESET IndexTono
    END IF

    IF IndexAnton equal 4 DO
      output ADD 'Anton,'
      RESET IndexAnton
    END IF

    IF IndexBudi equal 5 DO
      output ADD 'Budi,'
      RESET IndexBudi
    END IF
    DISPLAY 'tanggal' ADD i ADD ': ' ADD output
  END IF
END FOR
