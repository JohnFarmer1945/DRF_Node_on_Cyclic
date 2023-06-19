
// timer and date in nav and header/frontpage

/*
function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  } // add zero in front of numbers < 10
  return i;
}


function startTime() {
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  
  m = checkTime(m);
  s = checkTime(s);

  var date =
    today.getDate() + "-" + (today.getMonth() + 1) + "-" + today.getFullYear();
  document.getElementById("time").innerHTML =
    date + " | " + h + ":" + m + ":" + s;

  document.getElementById("time_1").innerHTML =
    date + " | " + h + ":" + m + ":" + s;
  setTimeout(startTime, 1000);
  console.log(date);
}

*/
function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  } // add zero in front of numbers < 10
  return i;
}

function startTime() {
  var dt_obj = new Date();
  let h =  dt_obj.getHours();
  let m = dt_obj.getMinutes();
  let s = dt_obj.getSeconds();

  m = checkTime(m);
  s = checkTime(s);

  var date =
  dt_obj.getDate() + "-" + (dt_obj.getMonth() + 1) + "-" + dt_obj.getFullYear();
  document.getElementById("time").innerHTML =
  date + " | " + h + ":" + m + ":" + s;

  setTimeout(startTime, 1000);
  }


startTime();





// Sonnenaufgang Sonnenuntergang
// Many thanks and best regards for the sunrise and sunset API.
// https://sunrise-sunset.org/api

var request = new XMLHttpRequest();
var d = new Date();
d = d.toString();
d = d.slice(30, 31);
d = parseFloat(d);



request.open(
  "GET",
  "https://api.sunrise-sunset.org/json?lat=54.216737&lng=9.599856&date=today"
);

request.onload = function () {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response);

  if (request.status >= 200 && request.status < 400) {
    let sunrise = data["results"]["sunrise"];
    let sunset = data["results"]["sunset"];
    console.log(sunrise);
    console.log(sunset);
    sunrise = parseFloat(sunrise) + d + ":" + sunrise.slice(2, 4);
    
    document.getElementById("sunrise").innerHTML = sunrise;

    sunset = parseFloat(sunset) + (12 + d) + ":" + sunset.slice(2, 4);
    
    document.getElementById("sunset").innerHTML = sunset;
  } else {
    console.log("error requesting JSON data from sunrise-api");
  }
};

request.send();


AufgabeTagFlug = [
  "Briefkasten",
  "Post abschicken",
  "Halle aufräumen",
  "Halle fegen, Desinfektions- und Dreiecksräume wischen, Kabine checken",
  "TIK Wochencheck",
  "Schwimmwesten checken",
  "Maschine waschen, Centerkabinet und O2-Tasche",
];

AufgabeTagMed = [
  "Kontrolle O2 und BCV",
  "Ampullarium",
  "Zargesbox",
  "Halle fegen, Desinfektions- und Dreiecksräume wischen, Kabine checken",
  "Kindertasche",
  "Rucksack",
  "Maschine waschen, Centerkabinet und O2-Tasche",
];

AufgabeNachtFlug = [
  "Kaffeemaschine und Scheiben putzen und Tatort schauen",
  "Kaffeemaschine und Scheiben putzen",
  "Kaffeemaschine und Scheiben putzen",
  "Kaffeemaschine und Scheiben putzen",
  "Kaffeemaschine und Scheiben putzen",
  "Kaffeemaschine und Scheiben putzen und Hubschrauber desinfizieren",
  "Kaffeemaschine und Scheiben putzen",
];

AufgabeNachtMed = [
  "Kaffeemaschine und Scheiben putzen und Tatort schauen",
  "Laden Videolaryngoskop",
  "Laden Laryngoskop",
  "Laden Ultraschallgerät",
  "Laden Batterie Heizdecke",
  "Kaffeemaschine und Scheiben putzen und Hubschrauber desinfizieren",
  "BZ Gerät",
];

Wochentag = [
  "Sonntag",
  "Montag",
  "Dienstag",
  "Mittwoch",
  "Donnerstag",
  "Freitag",
  "Samstag",
];

Schichtart = ["Tagschicht", "Nachtschicht"];

function tagesaufgabeMedizin() {
  const now = new Date();
  let day = now.getDay();

  let tag = Wochentag[day];
  let aufgabe = AufgabeTagMed[day];

  var x = document.getElementById("dailyroutine_med_day");
  x.innerHTML = tag + " Tagschicht: " + aufgabe;

  aufgabe = AufgabeNachtMed[day];
  x = document.getElementById("dailyroutine_med_night");
  x.innerHTML = tag + " Nachtschicht: " + aufgabe;
}

function tagesaufgabeFlug() {
  const now = new Date();
  let day = now.getDay();

  let tag = Wochentag[day];
  let aufgabe = AufgabeTagFlug[day];

  var x = document.getElementById("dailyroutine_flight_day");
  x.innerHTML = tag + " Tagschicht: " + aufgabe;

  aufgabe = AufgabeNachtFlug[day];
  x = document.getElementById("dailyroutine_flight_night");
  x.innerHTML = tag + " Nachtschicht: " + aufgabe;
}

tagesaufgabeMedizin();
tagesaufgabeFlug();
