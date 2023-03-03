//Napisati program koji ce izlistati samo propertie iz objekata
// var student = {
//   name: "David Rayy",
//   sclass: "VI",
//   rollno: 12,
// };

// Rezultat: name, sclass, rollno;

// let strKeys = Object.keys(student).join();
// console.log(strKeys);

//Napisati JavaScript funkciju da nam vrati duzinu objekta

// function lengthObj(obj) {
//   let arrKeys = Object.keys(obj);
//   return arrKeys.length;
// }

// console.log(lengthObj(student));

//Naci sumu svih pozitivnih brojeva u nizu
// let arrNum = [1, 5, -10, -9, 4, 5, 6, -2, -4];

// function sumaPozitivnihBrojeva(arr) {
//   let arrPoz = arr.filter((el) => el > 0);
//   return arrPoz.reduce((pre, curr) => pre + curr, 0);
// }

// console.log(sumaPozitivnihBrojeva(arrNum));

//uneti string kao puno ime i prezime. Uzeti inicijale i prikazati
// let imeiprezime = "Amil Kahrovic";

// function inicijali(str) {
//   debugger;
//   return str
//     .split(" ")
//     .map((el) => el[0])
//     .join("");
// }

//Objasnjenje
// ['Amil','Kahrovic']
// ['A','K']
// AK
// console.log(inicijali(imeiprezime));

//Svako pocetno ime niza napisite velikimm slovom
// let nizImena = ["lejla", "ahmed", "aMIN", "amar"];

// function CapitalizeName(arr) {
//   return arr.map(
//     (el) => el[0].toUpperCase() + el.slice(1, el.length).toLowerCase()
//   );
// }

// ["Lejla", "Ahmed", "Amin", "Amar"];
// console.log(CapitalizeName(nizImena));

// var library = [
//   {
//     author: "Bill Gates",
//     title: "The Road Ahead",
//     readingStatus: true,
//   },
//   {
//     author: "Steve Jobs",
//     title: "Walter Isaacson",
//     readingStatus: true,
//   },
//   {
//     author: "Suzanne Collins",
//     title: "Mockingjay: The Final Book of The Hunger Games",
//     readingStatus: false,
//   },
// ];

// console.log(library[0].author);
//  Ako je status citanja true, prikazati tekst 'Vec procitano'+ naziv knjige i autor,
//  u suprotnom 'Morate citati"

// function readBook(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].readingStatus) {
//       console.log("Vec procitano", arr[i].author, arr[i].title);
//     } else {
//       console.log("Morate citati", arr[i].author, arr[i].title);
//     }
//   }
// }
// readBook(library);

// for (let i = 0; i < 10; i++) {}

// let nizB = [10, 15, 45, 65];

// for (let element in nizB) {
//   console.log(element);
// }

// for (let element of nizB) {
//   console.log(element);
// }

let nizB = [10, 15, 45, 65];

let noviN = nizB.map((el) => {
  return el * 2;
});

function pomnozi(el) {
  return el * 2;
}

console.log(noviN);

// arr.forEach((el) => console.log(el * 2));

console.log("Nesto");
console.log("Nesto drugo");

function saberi(a, b, c) {
  return a + 5;
}

function ispis(callback) {
  console.log(callback(7, 10, 100));
}

ispis(saberi);

function pozdrav(ime) {
  console.log("Pozdrav ", ime);
}

function IspisiPOzdrav(callback) {
  console.log("Nesto");
  console.log("Treba da mi pozdravi nekog.", callback("Ajla"));
}

IspisiPOzdrav(pozdrav);
