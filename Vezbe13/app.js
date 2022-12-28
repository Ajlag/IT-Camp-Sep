// niz = [10, 15, 2, 3, 45, 10, 2, 3];
// const newArray = [];
// let isUnique = true;

// debugger;
// for (let i = 0; i < niz.length; i++) {
//   isUnique = true;
//   for (let j = i + 1; j < niz.length; j++) {
//     if (niz[i] === niz[j]) {
//       niz[j] = "";
//       isUnique = false;
//       break;
//     }
//   }

//   if (isUnique && niz[i] !== "") {
//     newArray.push(niz[i]);
//   } else {
//     continue;
//   }
// }

// console.log(newArray);

// n = 5;
// if (n % 2 === 0) {
//   console.log("Broj je paran");
// } else {
//   console.log("Broj je neparan");
// }

// uslov ? true : false;
// str = n % 2 === 0 ? "paran" : "neparan";
// console.log(str);

// n = 152;
// if (n % 10 < 5) {
//   console.log((n += 2));
// } else {
//   console.log((n -= 5));
// }

// n % 10 < 5 ? console.log((n += 2)) : console.log((n -= 5));

//Zadatak. Nadji prestupne godine
//Broj godine je deljiv sa 4, ali nije deljiv sa 100 ,
//broj godine je deljiv sa 100 i sa 400
// let start = 1000;
// let end = 2000;

// for (let i = start; i < end; i++) {
//   if (i % 4 === 0 && i % 100 !== 0) {
//     console.log("Godina je prestupna ", i);
//   } else if (i % 100 === 0 && i % 400 === 0) {
//     console.log("Godina je prestupna ", i);
//   } else {
//     continue;
//   }
// }
// //Sortirati niz

niz = [4, 2, 5, 6, 3, 10, 1];

for (let i = 0; i < niz.length; i++) {
  for (let j = i + 1; j < niz.length; j++) {
    if (niz[i] < niz[j]) {
      let pom = niz[i];
      niz[i] = niz[j];
      niz[j] = pom;
    }
  }
}
console.log(niz);

// 	Iz unetog stringa treba izdvojiti N znakova sa leve strane.
// Npr. za string 'Pera ima devojku' i N=6, dobija se 'Pera i'.
// Ako je N veće od dužine stringa, kao rezultat se dobija ceo string.

// const str = "Pera ima devojku";
// let n = 60;

// const m = 50;
// let newStr = "";
// for (let i = 0; i < n; i++) {
//   if (n > str.length) {
//     newStr = str;
//     break;
//   }
//   newStr += str[i];
// }
// console.log(newStr);

//Dati niz s koji se sastoji od riječi i razmaka,
//vratite dužinu posljednje riječi u nizu.
