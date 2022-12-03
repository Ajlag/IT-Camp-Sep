// Zadatak 1
// Uneti dva broja i od veceg oduzeti manji i prikazati rezultat

// a = Number(prompt("Unesite prvi broj"));
// b = Number(prompt("Unesite drugi broj"));
// razlika = 0;

// if (a > b) {
//   razlika = a - b;
// } else if (a < b) {
//   razlika = b - a;
// } else {
//   console.log("Greska niste uneli broj");
// }

// console.log(razlika);

// Zadatak 2
// Uneti tri broja i sortirati ih od najveceg do najmanjeg

// a = 5;
// b = 13;
// c = 10;
// if (a > b && a > c) {
//   prvi = a;
//   if (b > c) {
//     drugi = b;
//     treci = c;
//   } else {
//     drugi = c;
//     treci = b;
//   }
// } else if (b > a && b > c) {
//   prvi = b;

//   if (a > c) {
//     drugi = a;
//     treci = c;
//   } else {
//     drugi = c;
//     treci = b;
//   }
// } else {
//   prvi = c;
//   if (a > b) {
//     drugi = a;
//     treci = b;
//   } else {
//     drugi = b;
//     treci = a;
//   }
// }

// console.log(prvi, drugi, treci);

// Zadatak 3
// Uneti broj koji ce oznacavati temperaturu  i prikazati odgovarajucu poruku
// temperatura < 0 ispisati 'Smrzavanje'
// temperatura 0-10 ispisati 'Veoma hladno'
// temperatura 10-20 ispisati 'Hladno vreme'
// temperatura 20-30 ispisati 'Normalna temperatura'
// temperatura 30-40 ispisati 'Vruce'
// temperatura >=40 ispisati 'Veoma vruce'

// stepeni = Number(prompt("Unesite koliko ima stepeni"));

// if (stepeni < 0) {
//   console.log("Smrzavanje");
// } else if (stepeni < 10) {
//   console.log("Veoma hladno");
// } else if (stepeni < 20) {
//   console.log("Hladno vreme");
// } else if (stepeni < 30) {
//   console.log("Normalna temperatura");
// } else {
//   console.log("Veoma vruce");
// }

// Zadatak 4
// Uneti duzine stranica trougla i proveriti da li je trougao jednakostranican,
//jednakokraki  ili raznostranicni.

a = 5;
b = 10;
c = 5;

if (a === b && a === c) {
  console.log("jednakostranican");
} else if (a === b || b === c || a === c) {
  console.log("jednakokraki");
} else {
  console.log("raznostranicni");
}

// Zadatak 5
// Uneti broj od 1-12, procitati broj
//broj dana u tom mesecu.

a = 5;

if (
  a === 1 ||
  a === 3 ||
  a === 5 ||
  a === 7 ||
  a === 8 ||
  a === 10 ||
  a === 12
) {
  console.log("Mesec ima 31 dan");
} else if (a === 2) {
  console.log("Mesec ima 28 dana");
} else {
  console.log("Mesec ima 30 dana");
}
