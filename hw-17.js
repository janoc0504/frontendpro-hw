//1.Вивести числа від 20 до 30 через пропуск, використовуючи крок 0,5 (20 20,5 21 21,5….).
// function step() {
//   let res = '';
//   for (let i = 20; i <= 30; i++) {
//       res += ' ' + `${i}` + ' ' + `${i + 0.5}`;
//   }
//   return res;
// }

// console.log(step());

//2.Один долар коштує 27 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів.
// function currency() {
//   let arr = [];
//   let res = 1;
//   for (let i = 10; i <= 100; i++) {
//     if (i % 10 === 0) {
//       res = 27 * i;
//       arr.push(res);
//     }
//   }
//   let j = 10;
//   let arr2 = [];
//   for (let i of arr) {
//     console.log('27' + 'x' + j + '=' + `${i}`);
//     res2 = '27' + 'x' + j + '=' + `${i}`;
//     j += 10;
//     arr2.push(res2);
//   }
//   return arr2;
// }

// console.log(currency());

//3.Дане ціле число. Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N.
// function square(N) {
//   for (let i = 1; i <= 100; i++) {
//     if (i ** 2 < N) {
//       console.log(i);
//     }
//   }
// }
// square(10001);

//4.Дане ціле число. З'ясувати, чи є воно простим (простим називається число, більше 1, які не мають інших дільників крім 1 і себе).
//I didn't delete this code, because I'd like to save it for myself for future)).

// function primeNum(sn) {
//   let res = 0;
//   for (let i = 2; i < sn; i++){
//     if (sn % i === 0) {
//       res = sn;
//     }
//   }
//   if (res === 0) {
//     console.log('The number is Prime.');
//   } else {
//     console.log('The number is not Prime.');
//   }
// }

// primeNum(prompt());

// function primeNum(sn) {
//   if (isNaN(sn)) {
//     console.log('not a number')
//   } else {
//     for (let i = 2; i < sn; i++) {
//       if (sn % i === 0) {
//         return console.log('The number is not Prime.');
//       }
//     }
//     console.log('The number is Prime.');
//   }
//   }

// primeNum(prompt());

//5.Дане деяке число. Визначити, чи можна одержати це число шляхом зведення числа 3 у деякий ступінь. (Наприклад, числа 9, 81 можна отримати, а 13 - не можна).
function degreeThree(ntd) {
  if (isNaN(ntd)) {
    console.log('not a number');
  } else {
  for (let i = 1; i <= ntd; i++) {
    if (ntd === 3 ** i) {
      return console.log('Yes!' + ' ' + `${ntd} = ${3} * ${i}`);;
    }
  }
  console.log('No.');
}
}

degreeThree(+prompt());