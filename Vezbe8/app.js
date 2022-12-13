// str = prompt("Unesite neki novi string");

// if (str.length === 0) {
//   console.log("Prazno");
// } else {
//   console.log("Duzina stringa je ", str.length);
// }

//Uneti neki string, mala slova pretvoriti u velika i obrtnuto, velika pretvoriti u mala

// rec = "ABcDEfg";
// noviString = "";
// for (i = 0; i < rec.length; i++) {
//   if (rec[i] === rec[i].toUpperCase()) {
//     noviString += rec[i].toLowerCase();
//   } else {
//     noviString += rec[i].toUpperCase();
//   }
// }
// console.log(noviString);

//Nizovi
// cars = ["BMW", "Audi", "Mercedes"];

// console.log(cars[0]);
// console.log(cars[2]);

// console.log(cars.length);
// cars.push("Golf");
// console.log(cars);

// cars.pop();
// console.log(cars);

// for (i = 0; i < cars.length; i++) {
//   console.log(cars[i]);
// }

cars = ["BMW", "Audi", "Mercedes"];

//Obrnuti niz
// newCars = [];
// for (i = cars.length - 1; i >= 0; i--) {
//   newCars.push(cars[i]);
// }

// console.log(newCars);

//Naci najveci i najmanji element niza

// brojevi = [10, 15, 9, 5, 6, 7, 17, 1];
// max = brojevi[0];
// min = brojevi[0];

// for (i = 0; i < brojevi.length; i++) {
//   if (brojevi[i] > max) {
//     max = brojevi[i];
//   }

//   if (brojevi[i] > min) {
//     min = brojevi[i];
//   }
// }

// console.log(max);
// console.log(min);

//Parni i neparni elementi niza

// brojevi = [10, 15, 9, 5, 6, 7, 17, 1];
// parni = [];
// neparni = [];
// for (i = 0; i < brojevi.length; i++) {
//   if (brojevi[i] % 2 === 0) {
//     parni.push(brojevi[i]);
//   } else {
//     neparni.push(brojevi[i]);
//   }
// }

// console.log(parni);
// console.log(neparni);
