//Napisati funkciju koja vraca string u kojem je ime zamenjeno prezimenom.
let imeIprezime = "Nejla Fijuljanin";
// Fijuljanin Nejla
function reverseName(str) {
  return str.split(" ").reverse().join(" ");
}
console.log(reverseName(imeIprezime));
// [1,2,3,4,5,6]
// [6,5,4,3,2,1]

// if (uslov) {
// }

// uslov ? true : false;

function findMissingLetter(array) {
  let abeceda = "abcdefghijklmnoprstuvwxyz";
  let abec =
    array[0] === array[0].toUpperCase()
      ? abeceda.toUpperCase()
      : abeceda.toLowerCase();

  let findFirst = abec.indexOf(array[0]);

  for (let i = 0; i < array.length; i++) {
    if (abec[findFirst + i] !== array[i]) {
      return abec[findFirst + i];
    }
  }
}

console.log(findMissingLetter(["C", "E"]));

// "E3y d7r l3s to mix k8s and j8t";
// Koristi split,map, join
// Za svaku rec uzeti prvi i poslednje slovo i prebrojati broj slova izmedju.
// Reci koje imaju manje od 4 slova se ne skracuju. Unos je recenica i treba da skracujete svaku rec
// koja ima 4 slova ili vise.

const recenica = "Every developer likes to mix kubernetes and javascript";
const niz = recenica.split(" ");
const izmeni = niz
  .map((el) =>
    el.length > 4 ? el[0] + (el.length - 2) + el[el.length - 1] : el
  )
  .join(" ");
console.log(izmeni);

//Vratiti godine najmladje osobe, godine najstarije osobe i razliku medju godinama

const input = [
  {
    name: "John",
    age: 13,
  },
  {
    name: "Mark",
    age: 56,
  },
  {
    name: "Rachel",
    age: 45,
  },
  {
    name: "Nate",
    age: 67,
  },
  {
    name: "Jennifer",
    age: 65,
  },
];
let najvece = input[0].age;
let najmanje = input[0].age;
for (let i = 0; i < input.length; i++) {
  if (input[0].age < najmanje) {
    najmanje = input[i].age;
  }

  if (input[i].age > najvece) {
    najvece = input[i].age;
  }
}

console.log(najvece, najmanje);

// Napisati funkciju koja prihvata niz od 10 brojeva (izmedju 0 i 9).
// Potrebno je da vrati niz tih brojeva u obliku telefonskog broja.

// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"

function createPhoneNumber(niz) {
  let format = "(xxx) xxx-xxxx";
  for (let i = 0; i < niz.length; i++) {
    format = format.replace("x", niz[i]);
  }

  return format;
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
