// x = 20;

// for (i = 1; i <= x; i++) {
//   if (x % i === 0) {
//     console.log(i);
//   }
// }

// word = "abe";
// isIsogram = true;

// if (word.length === 0) {
//   console.log("Nas string je izogram");
//   return;
// }

// for (i = 0; i < word.length; i++) {
//   for (j = i + 1; j < word.length; j++) {
//     if (word[i] === word[j]) {
//       isIsogram = false;
//       break;
//     }
//   }
// }

// if (isIsogram) {
//   console.log("String jeste izogram");
// } else {
//   console.log("String nije nizogram");
// }

//Dat je niz i granicna vrednost. Proverite da li su
//sve vrednosti u nizu ispod ili jednake granicnoj vrednosti.
//Ako jesu vratite true. U suprotnom vratite false.

// niz = [10, 15, 15, 20, 45];
// granicnaVrednost = 100;
// ispodGranice = true;

// for (i = 0; i < niz.length; i++) {
//   if (niz[i] > granicnaVrednost) {
//     ispodGranice = false;
//     break;
//   }
// }

// console.log(ispodGranice);

// Ponekad su neke riječi kao što su "lokalizacija" ili "internacionalizacija"
// toliko dugačke da je njihovo pisanje više puta u jednom tekstu prilično
// zamorno. Smatrajmo riječ predugom, ako je njena dužina striktno veća od 10
// znakova. Preduge riječi treba zamijeniti posebnom skraćenicom.
// Ova skraćenica je napravljena ovako: zapisujemo prvo i posljednje slovo
// riječi i između njih upisujemo broj slova između prvog i posljednjeg slova
// Taj broj je u decimalnom sistemu i ne sadrži vodeće nule.

// Dakle, "lokalizacija" će se pisati kao "l10n", a "internacionalizacija" će se
// pisati kao "i18n". Predlažemo vam da automatizujete proces promjene riječi
// pomoću skraćenica. Pritom sve preduge riječi treba zamijeniti skraćenicom,
// a riječi koje nisu predugačke ne treba mijenjati.
// Input
// Prvi red sadrži cijeli broj n (1 ≤ n ≤ 100). Svaki od sljedećih n redova
// sadrži jednu riječ. Sve riječi se sastoje od malih latiničnih slova i imaju
// dužinu od 1 do 100 znakova.

// Izlaz
// Štampajte n redova. I-ti red treba da sadrži rezultat zamjene i-te riječi iz
// ulaznih podataka.

// nasaRec = "localization";

// if (nasaRec.length < 10) {
//   console.log(nasaRec);
// } else {
//   console.log(nasaRec[0], nasaRec.length - 2, nasaRec[nasaRec.length - 1]);
// }

// Dat je niz celih brojeca. Vrati niz , gde je prvi element broj pozitivnih brojeva,
// a drugi element je zbir negativnih brojeva. 0 nije ni pozitivan ni negativan.
// Ako je ulaz prazan, vratiti prazan niz.

niz = [10, 15, -5, -6, -4, 10, 45, 30, -20];
rezultat = [];
if (niz.length === 0) {
  return [];
}
sumaNegativnih = 0;
brojPozitivnih = 0;

for (i = 0; i < niz.length; i++) {
  if (niz[i] > 0) {
    brojPozitivnih++;
  } else {
    sumaNegativnih += niz[i];
  }
}
rezultat.push(brojPozitivnih);
rezultat.push(sumaNegativnih);
console.log(rezultat);

// Unesite dva stringa , a i b, vratite niz u obliku kraci+dugi+kratki.
// Stringovi nisu iste duzine ali mogu biti prazni.

a = "nesto";
b = "programiranje ";
