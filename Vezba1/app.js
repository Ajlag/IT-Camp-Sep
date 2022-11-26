//Primitivni i  tipovi podatak referentni

// Primitivni:
// string
// number
// boolean //true ili false
// undefined
// null
// symbol

// Referentni:
// Array
// Object
// Function

ime;

ime = null;
//String
tekst = "Hello World";
console.log(tekst);

//Number
broj = 25;
console.log(broj);

//Boolean - true ili false
polozenHTML = true;
console.log(polozenHTML);

//Undefined
let age;
console.log(age);

let nekiTekst = null;
console.log(nekiTekst);

ime = "Ajla";
prezime = "Gudzevic";

imePrezime = ime + " " + prezime;

noviTekst = ime + 5;

//Logicki operatori
//  &&  i
//  || ili
//  ! negacija

console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

console.log("------ILI-----");

console.log(true || true);
console.log(true || false);
console.log(false || false);

console.log("--------Negacija----");
console.log(!true);
console.log(!false);

console.log("-----POREDJENJE----");
//Poredjenje
prviBroj = 10;
drugiBroj = "10";

console.log(10 == 10);
console.log(10 === "10");

console.log(10 != "10");
console.log(10 !== "10");

console.log(prviBroj == drugiBroj);

//===
console.log(prviBroj === drugiBroj);

// !=
console.log(prviBroj != drugiBroj);

// !==

console.log(prviBroj !== drugiBroj);
