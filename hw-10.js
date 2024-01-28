//1.Дан масив [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47] Знайти суму та кількість позитивних елементів.
let array = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];

//2.Знайти мінімальний елемент масиву та його порядковий номер.
// let minEl = array[0];

// array.forEach(function (element, index) {
//   console.log(`element ${element}`);
//   console.log(`index ${index}`);
//   if (index > 0) {
//     console.log(`minEl was ${minEl}`);
//     if (minEl > element) {
//       console.log(`cheking IF minEl${minEl} > element${element}, minEl = element`)
//       minEl = element;
//       console.log(`minEl next ${minEl}`);
//     }
//   }
// })

// console.log(minEl);
// console.log(array.indexOf(minEl));

//3.Знайти максимальний елемент масиву та його порядковий номер.
// let maxEl = array[0];

// array.forEach(function (element, index) {
//   if (index > 0) {
//     if (maxEl < element) {
//       maxEl = element;
//     }
//   }
// })

// console.log(maxEl);
// console.log(array.indexOf(maxEl));

//4.Визначити кількість негативних елементів.
// let arrayNegEl = [];
// array.forEach(function (item) {
//   if (item < 0) {
//     arrayNegEl.push(item);
//   }
// })
// console.log(arrayNegEl.length);

//5.Знайти кількість непарних позитивних елементів.
// let arrayPosEl = [];
// array.forEach(function (item) {
//   if (item > 0) {
//     if (item % 2 !== 0) {
//       arrayPosEl.push(item);
//     }
//   }
// })
// console.log(arrayPosEl);
// console.log(arrayPosEl.length);

//6.Знайти кількість парних позитивних елементів.
// let arrayPosEl = [];
// array.forEach(function (item) {
//   if (item > 0) {
//     if (item % 2 === 0) {
//       arrayPosEl.push(item);
//     }
//   }
// })
// console.log(arrayPosEl.length);

//7.Знайти суму парних позитивних елементів.
// let arrayPosEl = [];
// array.forEach(function (item) {
//   if (item > 0) {
//     if (item % 2 === 0) {
//       arrayPosEl.push(item);
//     }
//   }
// })
// let sumPos = arrayPosEl.reduce(function (accum, currentV) {
//   return accum + currentV;
// })
// console.log(sumPos);

//8.Знайти суму непарних позитивних елементів.
// let arrayNegEl = [];
// array.forEach(element => {
//   if (element < 0) {
//     if (element % 2 !== 0) {
//       arrayNegEl.push(element);
//     }
//   }
// });

// let sumNeg = arrayNegEl.reduce(function (accum, currentV) {
//         return accum + currentV;
//       }, 0);

// console.log(sumNeg);

//9.Знайти добуток позитивних елементів.
// let arrayPosEl = [];
// array.forEach(element => {
//   if (element > 0) {
//     arrayPosEl.push(element);
//   }
// });
// let multi = arrayPosEl.reduce(function (accum, currentV) {
//   return accum * currentV;
// }, 1);
// console.log(arrayPosEl);
// console.log(multi);

//10.Знайти найбільший серед елементів масиву, остальні обнулити.
let maxEl = array[0];
console.log(maxEl);

array.forEach(function (element, index) {
  if (index > 0) {
    if (element > maxEl) {
      maxEl = element;
    }
  }
})
console.log(array.indexOf(maxEl));
console.log(maxEl);