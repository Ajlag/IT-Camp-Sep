//Domaci. Nadji najduzu rec u stringu

function NazivFunckije() {
  console.log("Ispisi nesto");
}

NazivFunckije();

function saberi(firstNum, secondNum) {
  console.log(firstNum + secondNum);
}

saberi(10, 15);

// function niz(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
//   }
// }
// const array = [10, 15, 5, 16];
// niz(array);

const saberiDvaBroja = (first, second) => first + second;
console.log(saberiDvaBroja(10, 15));

//Kvadrirati svaki element niza
const arrayNumber = [15, 45, 2, 3, 4, 5, 6, 8];
const kvadratNiza = arrayNumber.map((x) => x ** 2);
console.log(kvadratNiza);

//Izdvojiti elemente koji su veci od 10

const niz = [10, 15, 45, 10, 65, 78, 98, 45, 15];
let a = niz.includes(10);
console.log(a);

function UniqueArray(arr) {
  const unique = [];
  for (let i = 0; i < arr.length; i++) {
    if (unique.includes(arr[i])) {
      continue;
    }

    unique.push(arr[i]);
  }

  return unique;
}

console.log(UniqueArray(niz));

// Implementirajte funkciju koja uzima kao argument stringa i vraca niz stavki
// bez elemenata sa istom vrednoscu jedan pored drugog i sa ocuvanjem originalnog redosleda elemenata
// npr:
// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]

function uniqueInOrder(arr) {
  const uniqueArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      continue;
    }
    uniqueArr.push(arr[i]);
  }

  return uniqueArr;
}

const test = "AAAABBBCCDAABBB";
console.log(uniqueInOrder(test));

// Domaci
// Dat je niz brojeva. Proveriti da li je dati niz pivot.
// Pivot je niz gde je suma svih brojeva sa leve strane jednak zbiru brojeva sa desne.

// -----------------------------------------------------------------------------------

// https://www.codewars.com/kata/563fb342f47611dae800003c/train/javascript
