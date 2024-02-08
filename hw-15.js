//1.Дано масив з елементами різних типів. Створити функцію яка вираховує середнє арифметичне лише числових елементів даного масиву.
// function averSum(array) {
//   let sum = 0;
//   let amountNumbers = 0;

//   array.forEach(function (element) {
//   if (typeof (element) === "number") {
//     sum += element;
//     amountNumbers++;
//     }
//   })
//   if (amountNumbers === 0) {
//     return console.log("Your array dosn't have any numbers.");
//   } else {
//     return sum / amountNumbers;
//   }
// }

// const array = ['jhg', 'jjhjh', 6, 8, 0, 0, 45, 6.98];
// console.log(averSum(array));

//2.Написати функцію doMath(x, znak, y), яка отримує 3 аргументи: числа x і y, рядок znak. У змінній znak може бути: +, -, *, /, %, ^ (ступінь ).Вивести результат математичної дії, вказаної в змінній znak.Обидва числа і знак виходять від користувача.
// function doMath(x, znack, y) {
//   if (!isNaN(x) && !isNaN(y)) {
//     if (y === 0 && znack === '/') {
//       console.log("You can't do division by 0!");
//     } else {
//       switch(znack) {
//       case '+':
//       sum = x + y;
//       return sum;
//       case '-':
//       diff = x - y;
//       return diff;
//       case '/':
//       div = x / y;
//       return div;
//       case '*':
//       mult = x * y;
//       return mult;
//       case '^':
//       degree = x ** y;
//       return degree;
//       case '%':
//       divWithoutRem = x % y;
//       return divWithoutRem;
//       default:
//         console.log('You did not enter one of the simbols [+, -, *, /, %, ^] in field ZNACK');
//     }
//   }
// } else { console.log('One of the symbols (or both) is not a number.'); }
// }

// let x = +prompt('x');
// let znack = prompt('znack');
// let y = +prompt('y');
// let res = doMath(x, znack, y);
// console.log(res);

//4.Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом. 'func(" hello world", ['l', 'd'])' поверне нам "heo wor". Вихідний рядок та символи для видалення задає користувач.
function func(ourString, firstLetter, secondLetter) {
  let arr = ourString.split('');
  arr.forEach((item, index) => {
    if (item === firstLetter) {
      delete arr[index];
    }
    if (item === secondLetter) {
      delete arr[index];
    }
  })
  return console.log(str2 = arr.join(''));
}
let ourString = prompt('String');
let firstLetter = prompt('firstLetter');
let secondLetter = prompt('secondLetter');
func(ourString, firstLetter, secondLetter);