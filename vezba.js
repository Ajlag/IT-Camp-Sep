// setTimeout(() => {
//   console.log("Nesto");
// }, 1000);

// console.log(2);

// setTimeout(() => {
//   console.log(3);
// }, 1000);

// const p = new Promise((resolve, reject) => {
//   let a = 2;

//   if (a === 2) {
//     resolve("Tacno");
//   } else {
//     reject("Netacno");
//   }
// });

// p.then((value) => {
//   console.log(value);
// }).catch((err) => {
//   console.log(err);
// });

// function isPositive(broj) {
//   return new Promise((resolve, reject) => {
//     if (broj > 0) {
//       resolve("Broj je pozitivan");
//     } else {
//       reject("Broj je negativan");
//     }
//   });
// }

// isPositive(5)
//   .then((value) => {
//     console.log(value);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// isPositive(-1)
//   .then((value) => {
//     console.log(value);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
console.log(1);

async function mojaF() {
  return "Hello";
}
mojaF().then((val) => {
  console.log(val);
});
function ispis() {
  console.log("Hello Hana");
}
ispis();
// function nesto() {
//   return new Promise((resolve, reject) => {
//     resolve("Hello");
//   });
// }

// setTimeout(() => {
//   console.log("Nesto");
// }, 2000);

// async function myDisplay() {
//   let myPromise = new Promise((resolve, reject) => {
//     resolve("Ispisi mi nesto");
//   });

//   await myPromise.then((v) => {
//     console.log(v);
//   });
// }

// myDisplay();
const fetch = require("node-fetch");
//FETCH GET

// fetch("https://jsonplaceholder.typicode.com/todos/5")
//   .then((response) => response.json())
//   .then((data) => console.log(data));

//FETCH POST

const data = {
  title: "Nova obaveza",
  completed: false,
};

fetch("https://jsonplaceholder.typicode.com/todos", {
  method: "POST",
  body: JSON.stringify(data),
  headers: {
    "Content-Type": "application/json",
  },
})
  .then((response) => response.json())
  .then((data) => console.log(data));

//FETCH PUT
const dataPUT = {
  id: 1,
  title: "Izmenjena obaveza",
  completed: true,
};

fetch("https://jsonplaceholder.typicode.com/todos/1", {
  method: "PUT",
  body: JSON.stringify(dataPUT),
  headers: {
    "Content-Type": "application/json",
  },
})
  .then((response) => response.json())
  .then((data) => console.log(data));

//FETCH DELETE
fetch("https://jsonplaceholder.typicode.com/todos/1", {
  method: "DELETE",
}).then((response) => console.log("Odgovor sa statusom:", response.status));

console.log("Ispisi", 10, a);

console.log(`Ispisi ${a} ${10}`)

async function fetchData(url) {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP greška! Status kod: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
    }
  }

  (async () => {
    const url = "https://jsonplaceholder.typicode.com/todos/1";
    const data = await fetchData(url);
    console.log(data);
  })();
  