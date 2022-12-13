//Proveriti da li je uneti broj prost
// n = 17;
// brojac = 0;

// for (i = 1; i <= n; i++) {
//   if (n % i === 0) {
//     brojac++;
//   }
// }
// if (brojac > 2) {
//   console.log("Nije prost broj");
// } else {
//   console.log("Broj je prost");
// }

//Proveriti da li je uneti broj savrsen

// n = 10;
// suma = 0;

// for (i = 1; i <= n / 2; i++) {
//   if (n % i === 0) {
//     suma += i;
//   }
// }

// if (n === suma) {
//   console.log("broj je savrsen");
// } else {
//   console.log("broj nije savrsen");
// }

text = "Hello World";
text.length == 11;

// H e l l   o W o r l d
// 0 1 2 3 4 5 6 7 8 9 10

console.log(text[4]);
console.log(text[7]);
console.log(text);

noviText = text + " Nejla";

// console.log(noviText);
// console.log(text.length);
// console.log(noviText.length);

// for (i = 0; i < text.length; i++) {
//   console.log(text[i]);
// }

// for (i = text.length - 1; i >= 0; i--) {
//   console.log(text[i]);
// }

// for (i = 0; i < text.length; i++) {
//   if (text[i] === " ") {
//     continue;
//   }

//   console.log(text[i]);
// }

// str = "";

// for (i = 0; i < text.length; i++) {
//   if (text[i] === " ") {
//     continue;
//   }

//   str += text[i];
// }

// console.log(str);

prviStr = "Hello";
console.log(prviStr[0]);

duzinaString = prviStr.length;

drugiStr = "World";

if (prviStr === drugiStr) {
  console.log("Stringovi su isti");
} else {
  console.log("Stringovi nisu isti");
}

console.log(prviStr.toUpperCase());
console.log(drugiStr.toLowerCase());

noviString = "                Tex t ";

console.log(noviString.trim());
