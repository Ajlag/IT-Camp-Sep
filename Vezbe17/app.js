let arrayNumber = [10, 15, 12, 15];

//pop() - uklanja poslednji element iz niza
let izbrisana = arrayNumber.pop();
console.log(izbrisana);

//push() - dodaje novi elemnt na kraju niza
arrayNumber.push(20);
console.log(arrayNumber);

let str = "Danas je drugi cas drugog ciklusa";

//toLowerCase() - da sve prebaci u mala slova
console.log(str.toLowerCase());

//toUpperCase() - da sve prebaci u velika slova
console.log(str.toUpperCase());

//concat() - omogucava nam da sastavima dva niza/string
let str1 = "Hello ";
let str2 = " Lejla";
let newStr = str1.concat(str2);

let arr1 = ["a", "b", "c", "d"];
let arr2 = ["e", "f", "g", "h"];
let abeceda = arr1.concat(arr2);
console.log(newStr);
console.log(abeceda);

//trim() - da uklonimo space sa pocetka i kraja string
const exampleTrim = "                     CENTAR NIT                        ";
console.log(exampleTrim.trim());

//slice(start,end) - da uzmemo deo nekog niza, -start uzima i prikazuje, end ne prikazuje
const exampleSlice = "Hello World";
console.log(exampleSlice.slice(2, exampleSlice.length));

//substring - izdvaja karaktere i vraca kao novi string
const exampleSubstring = "neki tekst";
console.log(exampleSubstring.substring(2, 5));

//unshift() - dodaje novi element na pocetku niza
const exampleUnshift = [10, 15, 16, 70];
exampleUnshift.unshift(50);
console.log(exampleUnshift);

//shift() - uklanja element sa pocetka niza
const exampleShift = [15, 40, 56];
exampleShift.shift();
console.log(exampleShift);

//includes() - proveravamo dal se neki element nalazi u nizu/stringu
const exampleIncludes = [15, 45, 65, 7, 9, 8];
const exampleINcludesString = "nesto";
console.log(exampleIncludes.includes(17));
console.log(exampleINcludesString.includes("o"));

//split() - string prebacuje u niz
const exampleSplit = "Danas je drugi cas";
console.log(exampleSplit.split("a"));

//join() - niz da prebaci u string
const exampleJoin = ["a", "b", "c", "b"];
console.log(exampleJoin.join(" "));

//replace(  ,  ) - da zamani neki element (prvi na koji naidje)
const exampleReplace = "uciiiiiiiiiiiiiiiiiimo u centru nit";
console.log(exampleReplace.replace("i", "u"));
console.log(exampleReplace.replaceAll("u", "N"));

//map() - vraca nam ceo niz, ali izmenjen

const exampleMap = [10, 15, 45, 65, 7, 8, 9];
const newExample = exampleMap.map((x) => x * 2);
console.log(newExample);

//sort() - da sortira
let newA = [45, 65, 20, 10, 1];
newA.sort();
console.log(newA);

const exampleSortString = ["Jabuke", "Banana", "Kruska", "Kivi"];
exampleSortString.sort();
console.log(exampleSortString);

//reverse()
let exampleReverse = [1, 5, 6, 9, 8, 7, 10];
exampleReverse.reverse();
console.log(exampleReverse);

//charAt() - da prikaze karakter na nekoj poziciji
let exampleCharAt = "Nestooooooooo";
console.log(exampleCharAt.charAt(2));

//filter() - vraca samo elemente niza koji prodju test
let exampleFilter = [10, 5, 6, 7, 8, 4, 11, 20];
console.log(exampleFilter.filter((x) => x % 2 === 0));

//indexOf('') - vraca nam index trazenog elementa
console.log(exampleFilter.indexOf(7));

//substr - od koje pozicije, koliko zelim karaktera
//splice(1,2) - od indexa 1 iseci dva elementa , uklonice iz niza te elemente . Moze da se dodaju argumenti
//koji ce se dodat na poziciju koje su izbrisane
//match metoda proverava da li se niz podudara
//toString - da prebacimo u string
//every vraca true ako su svi elementi niza ispunili neku vrednost-tj.test koji smo postavili
//filter - vraca samo elemente koji su ispunili vrednost;
//some - proverava da li su svi elementi prosli test
//valueOf - vraca vrednost niza
//fill -ispunjava odredjene elemente u nizu
