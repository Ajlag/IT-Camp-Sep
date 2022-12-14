//Prosecna vrednost, bez min i max elementa

niz = [10, 5, 17, 2, 6, 9, 14];
min = niz[0];
max = niz[0];
suma = 0;
for (i = 0; i < niz.length; i++) {
  if (niz[i] > max) {
    max = niz[i];
  }

  if (niz[i] < min) {
    min = niz[i];
  }

  suma += niz[i];
}

prosek = (suma - min - max) / (niz.length - 2);

// console.log("prosek je ", prosek);

//Ukloniti element sa n pozicije

niz = [10, 15, 4, 3, 6, 7, 10, 12, 13, 12];
n = 5;

noviNiz = [];

for (i = 0; i < niz.length; i++) {
  if (i === n) {
    continue;
  }

  noviNiz.push(niz[i]);
}

// console.log(noviNiz);

//Novi zadatk
niz = [10, 15, 4, 3, 6, 7, 10, 12, 13, 12];
n = 3;
noviNiz = [];

for (i = n; i < niz.length; i++) {
  noviNiz.push(niz[i]);
}

for (i = 0; i < n; i++) {
  noviNiz.push(niz[i]);
}

//Dat je mesec kao ceo broj od 1 do 12, vratiti kom kvartalu godine
//pripada kao ceo broj;
// n = 10;

// if (n <= 3) {
//   console.log("Prvi kvartal");
// } else if (n <= 6) {
//   console.log("Drugi kvartal");
// } else if (n <= 9) {
//   console.log("Treci kvartal");
// } else if (n <= 12) {
//   console.log("cetvrti kvartal");
// } else {
//   console.log("Greska");
// }

// niz = [10, 4, 2, 3, 10, 5, 6, 7, 15, 6];
// suma = 15;

// for (i = 0; i < niz.length; i++) {
//   for (j = i + 1; j < niz.length; j++) {
//     if (niz[i] === niz[j]) {
//       console.log("isti su", i, j);
//       return;
//     }
//   }
// }

//Naci par sa datom sumom u nizu

niz = [10, 11, 13, 14, 15];
for (i = 0; i < niz.length; i++) {
  if (niz[i + 1] - niz[i] === 1) {
    continue;
  } else {
    console.log("Broj koji nedostaje je ", niz[i] + 1);
  }
}
