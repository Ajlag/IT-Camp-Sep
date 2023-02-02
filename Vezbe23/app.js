// Napraviti funkciju grow koja kao argument prihava niz brojeva
// Pomnoziti sve brojeve i vratiti proizvod

// [1,2,3,5,6,10,15]
// 1*2*3*5*6*10*15

// let niz = [1, 2, 3, 4, 5, 6];

// function grow(arr) {
//   return arr.reduce((p, t) => p * t);
// }
// console.log(grow(niz));

// (a,b)=>a+b;
// function saberi(a,b){
// return a+b;
// }

// Napraviti funkciju addLength koja kao argument uzima string.
// Npr. "apple ban"
// potrebno je to pretvoriti u niz i pored svake reci dodati njenu duzinu
// npr.
// "apple ban" --> ["apple 5", "ban 3"]
// "you will win" -->["you 3", "will 4", "win 3"]
//split,map

// let nizB = [1, 23, 4, 5, 6, 7];
// nizB.map((el) => console.log(el + 2));

// function addLength(str) {
//   return str.split(" ").map((el) => el + " " + el.length);
// }

// console.log(addLength("Neki string"));

// Napisati funkciju pod nazivom setAlarm koja prima dva parametra.
//Prvi parametar zaposlen, true-kad god ste zaposleni
// a drugi parametar odmor je true kad god ste na odmoru.
// Funkcija bi trebala da vrati true, ako ste zaposleni, a niste na odmoru.
// U suprotnom bi trebalo da vrati false.

// setAlarm(true, true) -> false
// setAlarm(false, true) -> false
// setAlarm(false, false) -> false
// setAlarm(true, false) -> true

// function setAlarm(zaposlen, odmor) {
//   return zaposlen && !odmor;
// }

// console.log(false && true);
// console.log(true || true);
// console.log(true || false);
// console.log(false || false);

// console.log(setAlarm(true, false));
// console.log(Boolean("nesto"));

// kreirati funkciju spinSingleWord koja kao argument dobija recenicu.
// Ukoliko sadrzo vise od 4 karaktera potreno je tu
// recenicu okrenuti.
// npr: Ovo je neka recenica =>acinecer aken ej ovO
// u suprotnom vratiti tu rec.
// npr: word => word

// function spinSingleWord(str) {
//   return str.length > 4 ? str.split("").reverse().join("") : str;
// }

// if(5%2===0){
//     //
// } else{

// }

// uslov ? ako je ispun uslov : ako uslov niije ispunjen

// let a = 5;
// console.log(a);

// {
//   const a = 5;
//   console.log(a);
// }

// console.log(a);

// for (let i = 0; i < 10; i++) {}
let d = 15;

function Saberi(arr) {}

console.log(Saberi("abc"));

// Napisati funkciju koja uzima niz stringova kao argument i vraca
// filtriranu niz koja sadrzi iste elemente ali sa uklonjnim geese

// var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];

// npr. ako prosledimo niz
//  ["Mallard", "Hook Bill", "African", "Crested", "Pilgrim",
//"Toulouse", "Blue Swedish"]

//  funckija treba da nam vrati
//  ["Mallard", "Hook Bill", "Crested", "Blue Swedish"]
