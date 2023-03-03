// function pozdrav(name) {
//   console.log("Hello", name);
// }

// function proccessUserInput(callback) {
//   const name = prompt("Please enter your name");
//   callback(name);
// }

// proccessUserInput(pozdrav);

// //csbin.io/callbacks

// function saberi(a) {
//   return a + 2;
// }

// function map(array, callback) {
//   const newArr = [];
//   for (let i = 0; i < array.length; i++) {
//     newArr.push(callback(array[i]));
//   }

//   console.log(newArr);
// }
// map([1, 2, 34, 5, 6], saberi);

let paran = (num) => num % 2 === 0;

function atLeastTwo(array, callback) {
  let newArr = [];

  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      newArr.push(array[i]);
    }
  }

  return newArr;
}

const resenje = atLeastTwo([1, 4, 6, 5, 2, 3], paran);
console.log(resenje);
