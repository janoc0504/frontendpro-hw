let number = 0;
let amount = 0;
if (amount < 3) {
    number = number + +prompt("Input first number");
    amount++;
    number = number + +prompt("Input second number");
    amount++;
    number = number + +prompt("Input third number");
    amount++;
}

alert(`Arithmetic mean of three numbers is ${number / amount}.`);