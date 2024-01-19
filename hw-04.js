let firstNumber = +prompt("Input first number");
let secondNumber = +prompt("Input second number");

alert(secondNumber === 0 ? "You input second number 0! You can't do division by 0!!!" : `${firstNumber}+${secondNumber}=${firstNumber + secondNumber}
${firstNumber}-${secondNumber}=${firstNumber - secondNumber}
${firstNumber}*${secondNumber}=${firstNumber * secondNumber}
${firstNumber}/${secondNumber}=${firstNumber / secondNumber}`);