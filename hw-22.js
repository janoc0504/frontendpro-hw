// This id the bad code, but it works.

// 'use strict';

// let counter1 = document.querySelector('.counter1');
// let counter2 = document.querySelector('.counter2');
// let counter3 = document.querySelector('.counter3');
// let counter4 = document.querySelector('.counter4');
// let counter5 = document.querySelector('.counter5');
// let smile1 = document.querySelector('.smile1');
// let smile2 = document.querySelector('.smile2');
// let smile3 = document.querySelector('.smile3');
// let smile4 = document.querySelector('.smile4');
// let smile5 = document.querySelector('.smile5');
// let resetBtn = document.querySelector('.resetBtn');
// let number1 = 0;
// let number2 = 0;
// let number3 = 0;
// let number4 = 0;
// let number5 = 0;


// smile1.addEventListener('click', () => {
//   number1 = localStorage.getItem('counter1');
//   number1++;
//   counter1.innerHTML = number1;
//   localStorage.setItem('counter1', number1);
// });
// counter1.textContent = (localStorage.getItem('counter1'));

// smile2.addEventListener('click', () => {
//   number2 = localStorage.getItem('counter2');
//   number2++;
//   counter2.innerHTML = number2;
//   localStorage.setItem('counter2', number2);
// });
// counter2.textContent = localStorage.getItem('counter2');

// smile3.addEventListener('click', () => {
//   number3 = localStorage.getItem('counter3');
//   number3++;
//   counter3.innerHTML = number3;
//   localStorage.setItem('counter3', number3);
// });
// counter3.textContent = (localStorage.getItem('counter3'));

// smile4.addEventListener('click', () => {
//   number4 = localStorage.getItem('counter4');
//   number4++;
//   counter4.innerHTML = number4;
//   localStorage.setItem('counter4', number4);
// });
// counter4.textContent = localStorage.getItem('counter4');

// smile5.addEventListener('click', () => {
//   number5 = localStorage.getItem('counter5');
//   number5++;
//   counter5.innerHTML = number5;
//   localStorage.setItem('counter5', number5);
// });
// counter5.textContent = localStorage.getItem('counter5');

// resetBtn.addEventListener('click', () => {
//   localStorage.clear();
//   for (let smile of document.querySelectorAll('.counters')) {
//     smile.textContent = '';
//   }
// });

//This's the good code and it works too.

'use strict';

function createCounter(containerSelector, smileSelector, localStorageKey) {
  let container = document.querySelector(containerSelector);
  let smile = document.querySelector(smileSelector);

  function increment() {
    let number = localStorage.getItem(localStorageKey);
    number++;
    container.innerHTML = number;
    localStorage.setItem(localStorageKey, number);
  }

    container.textContent = localStorage.getItem(localStorageKey);
    smile.addEventListener('click', increment);

  return smile;
}

const counters = [
  createCounter('.counter1', '.smile1', 'counter1'),
  createCounter('.counter2', '.smile2', 'counter2'),
  createCounter('.counter3', '.smile3', 'counter3'),
  createCounter('.counter4', '.smile4', 'counter4'),
  createCounter('.counter5', '.smile5', 'counter5'),
  createCounter('.counter6', '.smile6', 'counter6'),
];

const resetBtn = document.querySelector('.resetBtn');
resetBtn.addEventListener('click', () => {
  localStorage.clear();
    for (let smile of document.querySelectorAll('.reset')) {
    smile.textContent = ' ';
  }
});
