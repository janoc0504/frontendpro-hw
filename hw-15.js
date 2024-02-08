function averSum(array) {
  let sum = 0;
  let amountNumbers = 0;

  array.forEach(function (element) {
  if (typeof (element) === "number") {
    sum += element;
    amountNumbers++;
    }
  })
  if (amountNumbers === 0) {
    return console.log("Your array dosn't have any numbers.");
  } else {
    return sum / amountNumbers;
  }
}

const array = ['jhg', 'jjhjh', 6, 8, 0, 0, 45, 6.98];
console.log(averSum(array));