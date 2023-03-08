// // JSON - JavaScript Object Notation

// // JSON je format za skladistenje i prenos podataka.JSON
// // Najcesce se koristi kada se podaci salju sa servera ka WEB stranici.

// // JSON podaci su vrlo slicni JavaScript objektu i oni se zapisuju:

// // const person = {
// //     "firstName":"Lejla",
// //     "lastName": "Mujezinovic",
// //     "age":20
// // }

// const person = {
//   firstName: "Lejla",
//   lastName: "Mujezinovic",
//   age: 20,
// };

// // Metode za konverziju JSON-a
// // JSON.stringify()  - pretvara nas objekat u JSON format pa JSON u string.
// // Koristi se za slanje podataka

// const strObj = JSON.stringify(person);
// console.log(strObj);
// console.log(typeof strObj);

// // JSON.parse()
// // Analizira se neki string i u slucaju mogucnosti pretvara u objekat

// const obj = JSON.parse(strObj);
// console.log(obj);

// //SetTimeout metod postavlja tajmer koji izvrsava funkciju ili odredjeni deo koda kada tajmer istekne.
// //setTimeout je asinhrona funkcija, sto znaci da funkcija tajmea nece pauzirati izvrsavanje
// //drugih funkcija u steku.

// setTimeout(() => {
//   console.log("Ovo je prva poruka");
// }, 5000);

// setTimeout(() => {
//   console.log("Ovo je druga poruka");
// }, 3000);

// setTimeout(() => {
//   console.log("Ovo je treca poruka");
// }, 1000);

// //Promise predstavlja eventualni zavrsetak ili neuspeh asinhrone operacije i njenu vracenu vrednost.

// // Promise je u jednom od ovih stanja:
// //na cekanju: pocetno stanje, ni ispunjeno ni odbijeno.
// //ispunjeno: znaci da je operacija uspesno zavrsena
// //odbijeno: znaci da operacija nije uspela
// //Dok je objekat Promise na cekanju, rezultat je nedefinisan
// //Kada je Promise ispunjen rezultat je vrednost
// //Kada je Promise odbijen rezultat je greska

// let p = new Promise((resolve, reject) => {
//   let a = 1 + 2;

//   if (a == 2) {
//     resolve("success");
//   } else {
//     reject("Failed");
//   }
// });

// p.then((message) => {
//   console.log("This is in the then " + message);
// }).catch((message) => {
//   console.log("This is in the catch " + message);
// });

// function display(some) {
//   console.log(some);
// }

// let myPromise = new Promise(function (myResolve, myReject) {
//   let x = 15;

//   if (x > 18) {
//     myResolve("Punoletan");
//   } else {
//     myReject("Error");
//   }
// });

// myPromise.then(
//   function (value) {
//     display(value);
//   },
//   function (error) {
//     display(error);
//   }
// );

// function getData() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Ovo su podaci");
//     }, 2000);
//   });
// }

// // Primjer upotrebe Promisea
// getData().then((data) => {
//   console.log(data);
// });

// function waitTwoSeconds() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Prošlo je 2 sekunde!");
//     }, 2000);
//   });
// }

// waitTwoSeconds().then((result) => {
//   console.log(result);
// });

// function isPositive(number) {
//   return new Promise((resolve, reject) => {
//     if (number >= 0) {
//       resolve("Broj je pozitivan!");
//     } else {
//       reject("Broj je negativan!");
//     }
//   });
// }

// isPositive(5)
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.error(error);
//   });

// isPositive(-2)
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.error(error);
//   });

// function getRandomNumbers(count) {
//   const numbers = [];
//   for (let i = 0; i < count; i++) {
//     numbers.push(Math.random());
//   }
//   return Promise.resolve(numbers);
// }

// getRandomNumbers(5).then((result) => {
//   console.log(result);
// });

const fetch = require("node-fetch");
// import fetch from "node-fetch";
function fetchText() {
  fetch("https://run.mocky.io/v3/434eb273-435b-4391-a30c-89e0904e10fb")
    .then((response) => response.json())
    .then((data) => {
      // ovdje možete koristiti dobivene podatke u obliku objekta
      console.log(data);
    })
    .catch((error) => {
      console.error("Došlo je do pogreške:", error);
    });
}

fetchText();
