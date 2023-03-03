// function myFunction() {
//   a = 4;
//   return a * a;
// }

// let counter =0;

// function add(){
//     counter+=1;
// }

// add();
// add();
// add();

// function pomnozi(){
//     counter*=2;
// }

// let counter = 0;

// function add() {
//   let counter = 0;
//   counter += 1;
// }

// add();
// add();
// add();

// function add() {
//   let counter = 0;
//   return function () {
//     counter += 1;
//   };
// }

// let brojac = add();

// brojac();
// brojac();
// brojac();

// let noviBrojac = add();
// noviBrojac();

// (function () {
//   let counter = 0;
//   return function () {
//     counter += 1;
//     return counter;
//   };
// })();

// function izracunaj(x) {
//   function pomnozi(y) {
//     return x * y;
//   }

//   return pomnozi;
// }

// let rezultat = izracunaj(10);
// rezultat(10);

// function createLogger(name) {
//   return function (message) {
//     console.log(`[${name}] ${message}`);
//   };
// }

// const logger1 = createLogger("Logger 1");
// logger1("Hello!"); // Output: [Logger 1] Hello!

// const logger2 = createLogger("Logger 2");
// logger2("Hi!"); // Output: [Logger 2] Hi!
// logger1("How are you?"); // Output: [Logger 1] How are you?

function add() {
  let counter = 0;
  function plus(y) {
    counter += y;
  }
  return plus;
}
let broj = add();
broj(10);
broj(15);

let noviBroj = add();
noviBroj(2);
noviBroj(7);

setTimeout(() => {
  console.log("Stampaj");
}, 5000);
