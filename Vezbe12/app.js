// Prebrojati koliko se puta u unetom stringu pojavljuje slovo "M"
//(i veliko i malo).
//  Npr. za string 'Mama ima momu', dobija se rezultat 5.

// nasString = "Mama";
// brojac = 0;
// for (i = 0; i < nasString.length; i++) {
//   if (nasString[i].toLowerCase() === "m") {
//     brojac++;
//   }
// }

// console.log(brojac);

// Prebrojati koliko ima malih slova u unetom stringu.
// str = "ProgRAMiranje";
// brojac = 0;

// for (i = 0; i < str.length; i++) {
//   if (str[i] === str[i].toLowerCase() && str[i] !== " ") {
//     brojac++;
//   }
// }
// console.log(brojac);

//Ispitati da li u unetom stringu ima više malih ili velikih slova.

// str = "ProGrAMIRANJE";
// brojacVelikihS = 0;
// brojacMalihS = 0;

// for (i = 0; i < str.length; i++) {
//   if (str[i] === str[i].toLowerCase() && str[i] !== " ") {
//     brojacMalihS++;
//   } else if (str[i] === str[i].toUpperCase() && str[i] !== " ") {
//     brojacVelikihS++;
//   }
// }

// if (brojacMalihS === brojacVelikihS) {
//   console.log("Isti je broj velikih i malih slova");
// } else if (brojacMalihS > brojacVelikihS) {
//   console.log("Vise je malih slova");
// } else {
//   console.log("Vise je velikih slova");
// }

//let
//var
//const

// for (var i = 0; i < 10; i++) {
//   console.log(i);
// }

// console.log(i);

// const broj = 10;
// console.log(broj);

//UNeti broj dana i ispisti  koji je to dan.
let num = 20;
// const arrayDays = [
//   "Ponedeljak",
//   "Utorak",
//   "Sreda",
//   "Cetvrtak",
//   "Petak",
//   "Subota",
//   "Nedelja",
// ];

// console.log(arrayDays[num - 1]);

// switch (num) {
//   case 1:
//     console.log("Ponedeljak");
//     break;
//   case 2:
//     console.log("Utorak");
//     break;
//   case 3:
//     console.log("Sreda");
//     break;
//   case 4:
//     console.log("Cetvrtak");
//     break;
//   case 5:
//     console.log("Petak");
//     break;
//   case 6:
//     console.log("Subota");
//     break;
//   case 7:
//     console.log("Nedelja");
//     break;

//   default:
//     console.log("Greska");
// }

//Izdvojiti elemente bez ponavljanja;
// const niz = [10, 15, 2, 3, 10, 13, 3, 45, 2];
// const noviNiz = [];

// let isInside = false;

// for (let i = 0; i < niz.length; i++) {
//   isInside = false;
//   for (let j = 0; j < noviNiz.length; j++) {
//     if (niz[i] === noviNiz[j]) {
//       isInside = true;
//       break;
//     }
//   }

//   if (isInside) {
//     continue;
//   } else {
//     noviNiz.push(niz[i]);
//   }
// }

// console.log(noviNiz);

//Domaci izdvojiti jedinstvene elemente nekog niza

niz = [10, 15, 2, 10, 5, 15];
isUnique = true;
newArray = [];
for (i = 0; i < niz.length; i++) {
  isUnique = true;
  for (let j = i + 1; j < niz.length; j++) {
    if (niz[i] === niz[j]) {
      niz[j] = "";
      isUnique = false;
      break;
    }
  }

  if (isUnique && niz[i] !== "") {
    newArray.push(niz[i]);
  } else {
    continue;
  }
}

console.log(newArray);
// Unose se dva stringa A i B. Kreirati novi string kao kombinaciju stringova A i B,
// tako što se kombinuju prvi sa prvim, drugi sa drugim, treći sa trećim znakom itd.
// Ako je jedan string duži od drugog, na kraju samo dodati znakove viška.
// Npr. za stringove "PERA" i "sladoled" dobija se string "PsElRaAdoled".

// let firstStr = "Pera";
// let secondStr = "sladoled";
// let newStr = "";
// let length = 0;

// if (firstStr.length > secondStr.length) {
//   length = firstStr.length;
// } else {
//   length = secondStr.length;
// }

// for (let i = 0; i < length; i++) {
//   if (firstStr[i] === undefined) {
//     newStr += secondStr[i];
//     continue;
//   }

//   if (secondStr[i] === undefined) {
//     newStr += firstStr[i];
//     continue;
//   }
//   newStr += firstStr[i] + secondStr[i];
// }
// console.log(newStr);
