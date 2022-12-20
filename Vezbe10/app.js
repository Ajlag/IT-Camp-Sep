//Trocifreni broj

// n = Number(prompt("Unesite neki trocifreni broj"));

// if (n < 100 || n > 999) {
//   console.log("NIste uneli trocifren broj");
// } else if (n % 10 > 5) {
//   n -= 5;
// } else {
//   n += 2;
// }

// console.log(n);

// niz = [10, 15, 20, 30, 3];
// console.log(niz[0]);
// console.log(niz[3]);

// niz.push(35);
// uklonjeniElement = niz.pop();
// duzinaNIz = niz.length;
// console.log(duzinaNIz);
// console.log(uklonjeniElement);

// humanYears = Number(prompt("Unesite godine "));

// if (humanYears === 1) {
//   console.log([1, 15, 15]);
// } else if (humanYears === 2) {
//   console.log([2, 15 + 9, 15 + 9]);
// } else {
//   catYears = 15 + 9 + (humanYears - 2) * 4;
//   console.log([humanYears, catYears, 15 + 9 + (humanYears - 2) * 5]);
// }

//Palindrom

str = "Ana";
isPalindrom = true;

for (i = 0; i <= str.length / 2; i++) {
  if (str[i].toLowerCase() !== str[str.length - 1 - i].toLowerCase()) {
    isPalindrom = false;
    break;
  }
}

if (isPalindrom) {
  console.log("String je palindrom");
} else {
  console.log("String nije palindrom");
}

// Amstrongov broj

broj = 377;
trecaCifra = broj % 10; //371/10 = 37, ostatak 1
drugiCifra = Math.floor(broj / 10) % 10; //371/10=37  37%10=7
prviCifra = Math.floor(broj / 100); // 371 / 100  = 3

amstrongNumber = prviCifra ** 3 + drugiCifra ** 3 + trecaCifra ** 3;

if (broj === amstrongNumber) {
  console.log("Ovo je Amstrongov broj");
} else {
  console.log("Nije Amstrongov broj");
}

// Ispisati sve trocifrene brojeve čija je suma prve dve cifre veća od treće cifre trocifrenog broja.

// Ispisati sve trocifrene brojeve čija je suma cifara jednaka učitanom broju X.
