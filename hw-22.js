let counter1 = document.querySelector('.counter1');
let counter2 = document.querySelector('.counter2');
let counter3 = document.querySelector('.counter3');
let counter4 = document.querySelector('.counter4');
let counter5 = document.querySelector('.counter5');
let smile1 = document.querySelector('.smile1');
let smile2 = document.querySelector('.smile2');
let smile3 = document.querySelector('.smile3');
let smile4 = document.querySelector('.smile4');
let smile5 = document.querySelector('.smile5');
let number1 = 0;
let number2 = 0;
let number3 = 0;
let number4 = 0;
let number5 = 0;

smile1.addEventListener('click', () => {
  number1++;
  counter1.innerHTML = number1;
  localStorage.setItem('counter1', number1);
  console.log(localStorage.getItem('counter1'));
});

smile2.addEventListener('click', () => {
  number2++;
  counter2.innerHTML = number2;
});