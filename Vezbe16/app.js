// Traziti od korisnika unos nekog realnog broja.
// Nakon toga ispisati u konzoli kvadrat tog broja
// (pozeljno je obuhvatiti slucaj kada korisnik ne unese odgovarajucu
// vrednost).

// var broj = "a";

// if (isNaN(broj)) {
//   console.log("Ovo nije broj");
// } else {
//   console.log(broj ** 2);
// }

// if (typeof broj === "string") {
//   console.log("Ovo je neki string");
// } else {
//   console.log(broj ** 2);
// }

// let recenica;
// recenica = “Nakon danasnjeg testa cemo znati ko ce nastaviti sa drugim ciklusom it campa”
// Na osnovu date recenice napraviti i ispisati novu recenicu tako da:
//     (i) se svi samoglasnici pretvore u velika slova;
//     (ii) na kraju se doda ‘.’
//     (iii) ostali karakteri se ne menjaju.
// Dakle, treba se ispisati:
// “NAkOn dAnAsnjEg tEstA cEmO znAtI kO cE nAstAvItI sA drUgIm cIklUsOm It cAmpA.”

// let recenica = "Nakon danasnjeg casa itd";
// let novaRecenica = "";
// for (let i = 0; i < recenica.length; i++) {
//   if (
//     recenica[i] === "a" ||
//     recenica[i] === "i" ||
//     recenica[i] === "e" ||
//     recenica[i] === "o" ||
//     recenica[i] === "u"
//   ) {
//     novaRecenica += recenica[i].toUpperCase();
//   } else {
//     novaRecenica += recenica[i];
//   }
// }

// console.log(novaRecenica + ".");

// Da li se secate vremena kada bi devojcice uzimale cvet i kidale njegove latice,
// izgovarajuci svaku od sledecih fraza, svaki put kada bi kidale latucy govorile bi:

// I love you
// a little
// a lot
// passionately
// madly
// not at all

// Napraviti program preko kojeg cete uneti broj latica i vratiti koja se fraza dobija.

// const niz = [
//   "I love you",
//   "a little",
//   "a lot",
//   "passionately",
//   "madly",
//   "not at all",
// ];
// let brojLatica = 15;

// console.log(niz[(brojLatica % niz.length) - 1]);

// const dani = [
//   "Ponedeljak",
//   "Utorak",
//   "Sreda",
//   "Cetvrtak",
//   "Petak",
//   "Subota",
//   "Nedelja",
// ];

// let brojDana = 5;

// console.log(dani[brojDana - 1]);

// Napisite program kvadratnog zbira tako da kvadrira svaki broj, a zatim sabere
// rezultat zajedno.

// npr. [1,2,2] trebalo bi da vrati 9 jer je 1^2+2^2+2^2=9.

// npr. [1,2,2,4,5,6] trebalo bi da vrati 9 jer je 1^2+2^2+2^2=9.
// 1**2+2**2+2**2+4**2+5**2+6**2

let rezultat = 0;
const nizBrojeva = [1, 2, 2, 4, 5, 6];

// debugger;
for (let i = 0; i < nizBrojeva.length; i++) {
  rezultat += nizBrojeva[i] ** 2;
}
console.log(rezultat);

// Verovatno znate sistem 'like' sa Facebook i drugih stranica.
//  Ljudi mogu da lajkuju
// postove na blogu, slike ili druge stvari.
// Zelimo da kreiramo tekst koji treba da bude prikazan
// pored takve stavke.

// Imamo niz koji sadrzi imena ljudi kojima se neka stavka svidja.
// Treba da vrati sledece:

// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max",'Amil','Anes']  -->  "Alex, Jacob and 4  others like this"

const nizImena = ["Alex", "Jacob", "Mark", "Max", "Amil", "Anes"];

switch (nizImena.length) {
  case 0:
    console.log("no one likes this");
    break;

  case 1:
    console.log(nizImena[0] + " likes this");
    break;

  case 2:
    console.log(nizImena[0] + " and " + nizImena[1] + "likes this");
    break;

  case 3:
    console.log(
      nizImena[0] + " ," + nizImena[1] + " and " + nizImena[2] + " likes this"
    );
    break;

  default:
    console.log(
      nizImena[0],
      nizImena[1] + " and " + (nizImena.length - 2),
      " likes this"
    );
}
