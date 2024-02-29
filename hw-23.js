
'use strict';

function sortArray() {
  let arrayLength = parseInt(prompt('Input length of array'));
  let array = [];
  for (let i = 0; i < arrayLength; i++) {
    let el = parseInt(prompt('Input element of array'));
    array.push(el);

    //Check for number
    if (isNaN(array[i])) {
      return console.log('Error! You inputed not a number as an element.');
    }
  }
  console.log(array);

  //Two sorting cicles
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - 1 - i; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
        console.log(array);
      }
    }
  }
  array.splice(1, 3);
  console.log(array);
  return array;
}

sortArray();
