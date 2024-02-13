//Отримати від користувача 3 рядки та вивести їх у довільному порядку однією командою (конкатенація);
//алгоритм Фишера-Йетса

function output() {
  let ar = [];
  for (let i = 0; i < 3; i++) {
    ar.push(prompt(''));
  }
  function shuffle(arr){
    let j, temp;
	  for(let i = arr.length - 1; i > 0; i--){
		  j = Math.floor(Math.random()*(i + 1));
		  temp = arr[j];
		  arr[j] = arr[i];
      arr[i] = temp;
	  }
	return arr;
}
  shuffle(ar);
  return ar.join('');
}

let res = output();
console.log(res);