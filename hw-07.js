//1.Вивести на сторінку в один рядок через кому числа від 10 до 20.
let finish = 20;
let arr = [];

for (let i = 10; i <= finish; i++) {
        arr.push(i);
    }
console.log(`${arr}.`);

//2.Вивести квадрати чисел від 10 до 20.
// let finish = 20;
//
// for (let i = 10; i <= finish; i++) {
//     console.log(i*i);
// }

//3.Вивести таблицю множення на 7.
// let number = 7;
// let finish = 10;
//
// for (let i = 1; i <= finish; i++) {
//     console.log(`${i} * ${number} = ${i * number}`);
// }

//4.Знайти суму всіх цілих чисел від 1 до 15.
// let finish = 15;
// let sum = 0;
//
// for(let i = 1; i <= finish; i++) {
//     sum = sum + i;
// }
// console.log(sum);

//5.Знайти добуток усіх цілих чисел від 15 до 35.
// let start = 15;
// let finish = 35;
// let sum = start;
//
// for (let i = start + 1; i <= finish; sum *= i++) { }
//
// console.log(sum);

//6.Знайти середнє арифметичне всіх цілих чисел від 1 до 500.
// let start = 1;
// let finish = 500;
// let sum = 0;
//
// for (let i = start; i <= finish; i++) {
//   sum += i;
// }
//
// console.log(sum / finish);

//7.Вивести суму лише парних чисел в діапазоні від 30 до 80.
// let start = 30;
// let finish = 80;
// let sum = 0;
//
// for (let i = start; i <= finish; i++) {
//   if (i % 2 === 0) {
//     sum += i;
//   }
// }
//
// console.log(sum);

//8.Вивести всі числа в діапазоні від 100 до 200 кратні 3.
// let start = 100;
// let finish = 200;
// let numbers = 0;
//
// for (let i = start; i <= finish; i++) {
//   if (i % 3 === 0) {
//     console.log(i);
//   }
// }

//9.Дано натуральне число. Знайти та вивести на сторінку всі його дільники.
// let number = +prompt('Input natural number');
// let counter = 0;
//
// if (isNaN(number)) {
//   console.log('Not a Number!');
// } else for (let i = 1; i <= number; i++) {
//   if (number % i === 0) {
//     console.log(i);
//     counter++;
//     }
//   }

//10.Визначити кількість його парних дільників.
// let number = prompt('Input natural number');
// let counter = 0;
//
// switch (number) {
//   case '':
//     console.log('Empty string.');
//     break;
//   case null:
//     console.log('Canceled.');
//     break;
//   default:
//     if (isNaN(number)) {
//       console.log('Not a Number!');
//     } else for (let i = 1; i <= number; i++) {
//       if (number % i === 0) {
//         if (i % 2 === 0) {
//           counter++;
//         }
//       }
//     }
// }
//
// console.log(`The number ${number} has a ${counter} even divisors.`);

//11.Знайти суму його парних дільників.
// let number = prompt('Input natural number');
// let counter = 0;
// let sum = 0;
//
// for (let i = 1; i <= number; i++) {
//   if (number % i === 0) {
//     if (i % 2 === 0) {
//       counter++;
//       sum += i;
//     }
//   }
// }
// console.log(sum);

//12.Надрукувати повну таблицю множення від 1 до 10.

// for (let x = 1; x <= 10; x++) {
//     for (let y = 1; y <= 10; y++)
//         console.log(`${x} * ${y} = ${ x * y }`);
// }