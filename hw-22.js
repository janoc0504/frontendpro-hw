'use strict';

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
let resetBtn = document.querySelector('.resetBtn');
let number1 = 0;
let number2 = 0;
let number3 = 0;
let number4 = 0;
let number5 = 0;


smile1.addEventListener('click', () => {
  number1 = localStorage.getItem('counter1');
  number1++;
  counter1.innerHTML = number1;
  localStorage.setItem('counter1', number1);
});
counter1.textContent = (localStorage.getItem('counter1'));

smile2.addEventListener('click', () => {
  number2 = localStorage.getItem('counter2');
  number2++;
  counter2.innerHTML = number2;
  localStorage.setItem('counter2', number2);
});
counter2.textContent = localStorage.getItem('counter2');

smile3.addEventListener('click', () => {
  number3 = localStorage.getItem('counter3');
  number3++;
  counter3.innerHTML = number3;
  localStorage.setItem('counter3', number3);
});
counter3.textContent = (localStorage.getItem('counter3'));

smile4.addEventListener('click', () => {
  number4 = localStorage.getItem('counter4');
  number4++;
  counter4.innerHTML = number4;
  localStorage.setItem('counter4', number4);
});
counter4.textContent = localStorage.getItem('counter4');

smile5.addEventListener('click', () => {
  number5 = localStorage.getItem('counter5');
  number5++;
  counter5.innerHTML = number5;
  localStorage.setItem('counter5', number5);
});
counter5.textContent = localStorage.getItem('counter5');

resetBtn.addEventListener('click', () => {
  localStorage.clear();
  for (let smile of document.querySelectorAll('.counters')) {
    smile.textContent = '';
  }
});