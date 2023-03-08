// console.log(1);
// console.log(2);
// console.log(3);

const { rejects } = require("assert");
const { Console } = require("console");
const { resolve } = require("path");

// setTimeout(() => {
//   console.log(4);
// }, 1000);

// console.log(5);

// (function () {
//   console.log(1);

//   setTimeout(function () {
//     console.log(2);
//   }, 0);

//   setTimeout(function () {
//     console.log(3);
//   }, 0);

//   console.log(4);
// })();

// for (var i = 0; i < 10; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 1000);
// }

// setTimeout(() => {
//   console.log(1);
// }, 5000);

// setTimeout(() => {
//   console.log(5);
// }, 2000);

// console.log(1);
// console.log(3);

// setTImeout(() => {
//   console.log(2);
// }, 1000);

// setTimeout(() => {
//   console.log(6);
// }, 0);

const nesto = {
  ime: "Lejla",
  prezime: "Mujezinovi",
};

// GET
// POST
// PUT
// DELETE

// JSON.stringify;
// JSON.parse;
let str = JSON.stringify(nesto);
console.log(str);
console.log(typeof str);

// JSON.parse(string) - ova metoda pretvara JSON string u JavaScript objek
const json = '{"ime":"Ivan","prezime":"Horvat","godine":30}';
const objekt = JSON.parse(json);
console.log(objekt); // { ime: 'Ivan', prezime: 'Horvat', godine: 30 }

// const promis = new Promise(() => {
//   console.log("Ispisi nesto");
// });

// promis.then(data);

let p = new Promise((resolve, reject) => {
  let a = 2;

  if (a == 2) {
    resolve("success");
  } else {
    reject("Failed");
  }
});

p.then((message) => {
  console.log("This is in the then " + message);
}).catch((message) => {
  console.log("This is in the catch " + message);
});

function ispis(vrednost) {
  console.log(vrednost);
}

const punol = new Promise((resolve, rejects) => {
  let godine = 15;

  if (godine < 18) {
    rejects("Maloletan ");
  } else {
    resolve(godine);
  }
});

punol
  .then((value) => ispis(value))
  .catch((err) => {
    console.log(err);
  });

function wait() {
  return new Promise((resolve, rejects) => {
    setTimeout(() => {
      resolve("Proslo je dve sekunde");
    }, 2000);
  });
}

wait().then((value) => {
  console.log("Koliko je proslo? ", value);
});

function isPositive(broj) {
  return new Promise((resolve, rejects) => {
    if (broj > 0) {
      resolve(`Broj je pozitivan ${broj}`);
    } else {
      rejects("Broj je negativan ");
    }
  });
}

isPositive(5)
  .then((value) => {
    console.log(value);
  })
  .catch((err) => {
    console.log(err);
  });

isPositive(-5)
  .then((value) => {
    console.log(value);
  })
  .catch((err) => {
    console.log(err);
  });
