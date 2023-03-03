// // console.log("Jedan");
// // console.log("Dva");
// // console.log("Tri");

// // //callback -

// // function pozdrav(name) {
// //   console.log("Hello", name);
// // }

// // function proccessUserInput(callback) {
// //   const ime = prompt("Please enter your name");
// //   callback(ime);
// // }

// // proccessUserInput(pozdrav);

// //promisa
// //async / await

// function pomnozi(b) {
//   return b(5);
// }

// function kvadrat(n) {
//   return n * n;
// }

// function saberi(n) {
//   return n + 2;
// }
// console.log(pomnozi(saberi));
// const rezultat = pomnozi(kvadrat);
// console.log(rezultat);

// function PomnoziDvaBroj(a, b) {
//   return a * b;
// }

// function pomnozi(callback) {
//   return callback(10, 10);
// }

// const rezultat1 = pomnozi(PomnoziDvaBroj);
// console.log(rezultat1);

// // Napisati funkciju koja proverava da li je dati broj paran,
// //  ako je paran vraca true, ako nije vraca false.

// function proveraParnosti(a) {
//   return a % 2 === 0 ? true : false;
// }
// function saberi(a) {
//   return a + 5;
// }

// function parniElementi(array, callback) {
//   let newArr = [];
//   for (let i = 0; i < array.length; i++) {
//     if (callback(array[i])) {
//       newArr.push(array[i]);
//     }
//   }

//   return newArr;
// }

// niz = [1, 5, 6, 2, 3, 4];

// parniElementi(niz, proveraParnosti);

// function glavniPosao(argument1) {
//   console.log("gavlni posao");
//   argument1();
// }

// pomocniPosao = function () {
//   console.log("pomocniPosao");
//   console.log("pomocniPosao");
//   console.log("pomocniPosao");
// };

// function drugiPomPosao() {
//   console.log("drugiPomPosao");
//   console.log("drugiPomPosao");
//   console.log("drugiPomPosao");
// }

// glavniPosao(pomocniPosao);
// glavniPosao(drugiPomPosao);
myarr = [45, 4, 46, 55, 63, 45, 6, 54];

function customForeach(arr, clb) {
  for (let i = 0; i < arr.length; i++) {
    clb(arr[i]);
  }
}

callBackFunc = function (el) {
  console.log(el * 10);
};

customForeach(myarr, callBackFunc);
