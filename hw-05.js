let result = prompt("Choose operation: add +, subtract -, multiplication *, division /");
let firstNumber = +prompt("Input first number");
let secondNumber = +prompt("Input second number");

if (result === '/' && secondNumber === 0) {
    alert("You can't do division by 0!");
} else {
    switch (result) {
        case '+':
            console.log(firstNumber + secondNumber);
            break;
        case '-':
            console.log(firstNumber - secondNumber);
            break;
        case '*':
            console.log(firstNumber * secondNumber);
            break;
        case '/':
            console.log(firstNumber / secondNumber);
            break;
    }
}
