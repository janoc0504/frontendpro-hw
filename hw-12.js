function exp(number, exponent) {
  return (exponent === 1) ? number : (number * exp(number, exponent - 1));
}

let res = exp(2, 7);
console.log(res);