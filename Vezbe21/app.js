// for (i = 0; i < 10; i++) {
//   console.log(i);
// }

// while(uslov){
//     kod
// }
// let n = 10;
// while (n > 0) {
//   console.log(n);
//   n--;
// }

// let n = 1;
// while (true) {
//   console.log(n);
//   n++;
// }

n = 10;
do {
  console.log(n);
  n++;
} while (n < 10);

//Kreirati funkciju koja kao argument dobija string. Ako je duzina stringa parna
//npr. 'abcd' kao rezultat vratiti 'ab|cd" potrebno je umetnuti | u sredini
//Ako je duzina stringa neparna npr. "abcde" , element u sredinu izbaciti i zameniti znakom |

(abcd) => ab | cd;
(abcde) => ab | de;

//slice

let str = "Hello World";
console.log(str.slice(0, 5));

function umetniCrtu(str) {
  if (str.length % 2 === 0) {
    return (
      str.slice(0, str.length / 2) + "|" + str.slice(str.length / 2, str.length)
    );
  } else {
    return (
      str.slice(0, str.length / 2) +
      "|" +
      str.slice(str.length / 2 + 1, str.length)
    );
  }
}

console.log(umetniCrtu("abcfe"));

//Implementirajte funkciju koja prihvata 2 argumenta: string i separator.
// npr: ako je uneti string "My name is ", a separator " " => "M y n a m e i s"
// My name is John", "-"  ==  "M-y n-a-m-e i-s J-o-h-n"
// Hello World!", "."     ==  "H.e.l.l.o W.o.r.l.d.!"

// 'Hello World'
// split
// join - niz =>str

// function razdvojSeparator(str, sep) {
//   return str.split("").join(sep);
// }

// console.log(razdvojSeparator("Hello World", "."));

// (faktorijel) => 1 * 2 * 3 * 4 * 5;

// function faktorijel(n) {
//   let proizvod = 1;
//   while (n > 0) {
//     proizvod *= n;
//     n--;
//   }

//   return proizvod;
// }

// console.log(faktorijel(5));

// n = 20;
// suma = 0;
// while (n > 0) {
//   if (n % 2 === 0) {
//     suma += n;
//   }
// }

// console.log(suma);

// Koristeci metodu reduce dati niz pretvoriti u string.
// npr [1,2,3,4,5,6] => 123456

// let niz = [1, 2, 3, 4, 5, 6];

// let spojiBrojeve = niz.reduce(
//   (prethodna, trenutna) => prethodna + trenutna,
//   ""
// );
// prethodna =0, trenutna = 1, 0+1=1
// prethodna=1, trenutna = 2, 1+2=3
// prethodna = 3, trenutna =3 , 3+3
// console.log(spojiBrojeve);

// Napraviti funkciju animal koja prihvata 1 argument obj.
// npr. {name: 'dog', legs: 4, color: 'white'}
// i kao rezultat vraca
// "This white dog has 4 legs"

function animal(obj) {
  return "This " + obj.color + obj.name + " has " + obj.legs + " legs";
}

const zivotinaj = {
  name: "Dog ",
  color: "white ",
  legs: 4,
};

console.log(animal(zivotinaj));
// auto = {
//   boja: "bela",
//   model: "Audi",
//   kubikaza: 200,
// };

// let kljucevi = Object.values(auto);
// console.log(kljucevi);
// console.log(auto["boja"]);
// auto.motor = "v8";
// delete auto.model;
// console.log(auto);

// Kreirati funkciju findMissingLetter koja kao argument dobija niz. Potrebnon je pronaci koje slovo je propusteno u nizu
// npr ["A","B","C","D","F"] => e
