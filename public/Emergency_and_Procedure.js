
//questions
const questionArrayFlight = [
    /*Warning light indications*/
    "BAT TEMP",
    "ENG 1/2 FAIL",
    "FIRE 1/2",
    "LOW FUEL 1/2",
    "ROTOR RPM",
    "XMSN OILL PRESS",
    /*MASTER caution light indication*/
    "MASTER",
    /*Caution indications*/
    "AVIO OVHT",
    "BAT DISCON",
    "BAT DISCH",
    "BLEED AIR",
    "BUSTIE OPN 1/2",
    "CAD FAN",
    "CAU DEGR",
    "CPDS OVHT",
    "DOORS",
    "ENG CHIP 1/2",
    "ENG O FILT 1/2",
    "ENG OIL P 1/2",
    "ENG PA DIS 1/2",
    "ENG SPLIT 1/2",
    "EPU DOOR",
    "EXT POWER",
    "FIRE E TST 1/2",
    "FIRE EXT 1/2",
    "FLI DEGR 1/2",
  
    "FLI FAIL 1/2",
    "F PUMP FWD/AFT",
    "F PUMP JET",
    "F QTY DEGR",
    "F QTY FAIL",
    "FUEL FILT 1/2",
    "FUEL PRESS 1/2",
    "FUEL VALVE 1/2",
    "F VALVE CL 1/2",
    "GEN DISCON 1 or 2",
    "GEN DISCON 1 and 2",
    "GEN OVHT 1/2",
    "HTG OVTEMP",
    "HOR BAT",
    "HYD PRESS 1/2",
    "INPUT FAIL",
    "INVERTER",
    "MM EXCEED",
    "OVSP FAIL 1/2",
    "PITOT HTR 1/2",
    "PRIME PUMP 1/2",
    "P0 DIS",
    "SHED EMER",
    "STARTER 1/2",
    "TWIST GRIP 1/2",
    "T0 DIS",
    "VEMD FAN",
    "VAR NR",
    "XMSN CHIP",
    "XMSN OIL T",
    /*CPDS external test caution indications*/
    "ENG CHP CT 1/2",
    "ENG OF CT 1/2",
    "F FLT CT 1/2",
    "XMSN CHP CT",
    "XMSN OT CT",
  ];
  
  const questionArrayMed = [
    "Barotrauma",
    "Pancreatitis",
    "advanced life support",
    "Kommandokette",
    "arterieller Zugang",
    "Intubation",
    "ossöser Zugang",
    "Thoraxdrainage",
    "Wärmeerhaltung",
    "Kardiopulmonale Reanimation",
  ];
  
  function randomQuestionFlight() {
    let y = Math.floor(Math.random() * questionArrayFlight.length);
    let z = y + 1;
    var x = document.getElementById("flightQues");
    x.innerHTML = "Frage " + z + ": " + '"' + questionArrayFlight[y] + '"';
  }
  
  function randomQuestionMed() {
    let y = Math.floor(Math.random() * questionArrayMed.length);
    let z = y + 1;
    var x = document.getElementById("medQues");
    x.innerHTML = "Frage " + z + ": " + '"' + questionArrayMed[y] + '"';
  }
  