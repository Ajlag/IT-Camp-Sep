//FizzBuzz 1--100
// ako je broj deljiv sa 3 ispisati Fizz
// ako je broj deljiv sa 5 ispisati BUzz
// ako je deljiv i sa 3 i sa 5 ispisati FizzBuzz

// for (i = 1; i < 100; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("FizzBuzz");
//   } else if (i % 3 === 0) {
//     console.log("Fizz");
//   } else if (i % 5 === 0) {
//     console.log("Buzz");
//   } else {
//     console.log(i);
//   }
// }

//Ispisati brojeve od 1 do 10, ali izuzeti 5
// for (i = 1; i < 10; i++) {
//   if (i === 5) {
//     break;
//   }
//   console.log(i);
// }

// console.log("---------------------------------");

// for (i = 1; i < 10; i++) {
//   if (i === 5) {
//     continue;
//   }
//   console.log(i);
// }

// continue;
// break

// suma = 0;
// for (i = 0; i <= 100; i += 2) {
//   suma += i;
// }

// console.log(suma);

// suma = 0;

// for (i = 1; i <= 100; i++) {
//   if (i % 2 === 1) {
//     continue;
//   }
//   suma += i;
// }
//Faktorijel broja n
// n = Number(prompt("Unesite n"));
// proizvod = 1;

// for (i = 1; i <= n; i++) {
//   proizvod *= i;
// }

// console.log(proizvod);

// str = "AbcDEfg";
// noviString = "";
// for (i = 0; i < str.length; i++) {
//   if (str[i] === str[i].toUpperCase()) {
//     noviString += str[i].toLowerCase();
//   } else {
//     noviString += str[i].toUpperCase();
//   }
// }

// console.log(noviString);
console.log("bes");
fruits = ["Banana", "Apple"];
fruits.push("Kiwi");

// console.log(fruits);

// novoVoce = [];
// for (i = fruits.length - 1; i >= 0; i--) {
//   novoVoce.push(fruits[i]);
// }

// console.log(novoVoce);

niz = [10, 15, 20];
// suma = 0;
// for (i = 0; i < niz.length; i++) {
//   suma += niz[i];
// }

// console.log(suma);

// max = niz[0];
// min = niz[0];
// for (i = 0; i < niz.length; i++) {
//   if (niz[i] > max) {
//     max = niz[i];
//   }

//   if (niz[i] < min) {
//     min = niz[i];
//   }
// }

// console.log("Max je ", max, "min je", min);

parni = [];
neparni = [];
for (i = 0; i < niz.length; i++) {
  if (niz[i] % 2 === 0) {
    parni.push(niz[i]);
  } else {
    neparni.push(niz[i]);
  }
}

console.log(parni, neparni);
