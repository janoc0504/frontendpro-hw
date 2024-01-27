//Реалізуйте функцію removeElement(array, item), щоб видалити елемент item з масиву array.
const array = [1, 2, 3, 4, 5, 6, 7];
array.forEach(function (item) {
  if (item === 5) {
    array.splice(array.indexOf(item), 1);
  }
});
console.log(array);
