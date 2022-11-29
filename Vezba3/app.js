// Zadatak 1
// Uneti broj i proveriti da li je pozitivan ili negativan.

// a = 10;

// if (a > 0) {
//   console.log("Broj je pozitivan");
// } else if (a === 0) {
//   console.log("Broj je jednak nuli");
// } else {
//   console.log("Broj je negativan");
// }

// Zadatak 2
// Uneti dva broja i proveriti da li su jednaka. Ispisati rezultat u konzoli.
// a = prompt("Unesite prvi broj");
// b = prompt("Unesite drugi broj");

// if (a === b) {
//   console.log("Brojevi su jednaki");
// } else {
//   console.log("Brojevi nisu jednaki");
// }

// Zadatk 3
// Uneti broj od 1 do 7 i ispisati koji je dan taj uneti broj

// dan = Number(prompt("Unesite dan u nedelji"));

// console.log(typeof dan);

// if (dan === 1) {
//   console.log("Ponedeljak");
// } else if (dan === 2) {
//   console.log("Utorak");
// } else if (dan === 3) {
//   console.log("Sreda");
// } else if (dan === 4) {
//   console.log("Cetvrtak");
// } else if (dan === 5) {
//   console.log("Petak");
// } else if (dan === 6) {
//   console.log("Subota");
// } else if (dan === 7) {
//   console.log("Nedelja");
// } else {
//   console.log("Nije dobro unet broj");
// }

// Zadatak 4
// Uneti broj i proveriti da li je paran ili neparan.

// broj = Number(prompt("Unesite neki broj"));

// if (broj % 2 === 0) {
//   console.log("Broj je paran");
// } else if (broj % 2 === 1) {
//   console.log("Broj je neparan");
// } else {
//   console.log("Greska");
// }
// Zadatak 5
// Uneti broj m i procitati vrednost.Prikazite vrednost n je 1
// kada je m vece od 0, n je 0 kada je m=0 i -1 kada je m manje od 0

// m = Number(prompt("Unesite vrednost m"));

// if (m > 0) {
//   n = 1;
// } else if (m === 0) {
//   n = 0;
// } else if (m < 0) {
//   n = -1;
// }

// console.log("Vrednost n je ", n);

// Zadatak 6
// Uneti tri broj i ispisati najveci broj
a = Number(prompt("Unesite prvi broj"));
b = Number(prompt("Unesite drugi broj"));
c = Number(prompt("Unesite treci broj"));

if (a > b && a > c) {
  console.log("Najveci broj je ", a);
} else if (b > a && b > c) {
  console.log("Najveci broj je ", b);
} else if (c > a && c > b) {
  console.log("Najveci broj je ", c);
} else {
  console.log("Greska");
}
