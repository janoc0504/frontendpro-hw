function makeSum() {
  let number = 0;

  function add(x) {
    number += x;
    console.log(number);
  }
  return add;
}

let sum = makeSum();
sum(3);
sum(5);
sum(20);
sum(50);
sum(345);
