'use strict';

// Create a smiles arrey and a container (wrapper) for div elements with smiles
const smilesArr = ['&#127936;', '&#9918;', '&#9917;', '&#127944;', '&#127952;', '&#129358;'];
const wrapper = document.querySelector('.wrapper');

// Проходимся по массиву смайлов
//Get smiles from the smiles arrey
smilesArr.forEach(smile => {
  // Создаем контейнеры для смайлов и счетчиков
  // Create containers for smiles and counters
  const smileElement = document.createElement('div');
  smileElement.innerHTML = smile;
  smileElement.className = 'smiles';

  const counterElement = document.createElement('p');
  counterElement.textContent = getStoredCount(smile) || 0;

  smileElement.appendChild(counterElement);
  wrapper.appendChild(smileElement);

  // Навешиваем кликер на смайлы и создаем счетик + записываем в LocalStorage текущее значение счетчика
  // Crate a click function for smiles and counter and write counter current values to the localStorage
  smileElement.addEventListener('click', () => {
        let count = parseInt(counterElement.textContent);
        count++;
        counterElement.textContent = count;

    localStorage.setItem(smile, count);
  });
});

// Создаем функцию для получения количества кликов из LocalStorage
// Create a function for geting counter values from the localStorage
    function getStoredCount(smile) {
      return localStorage.getItem(smile);
    }

// Навешиваем кликер нажатия на кнопку сброса
// Create a click function for a reset button
    document.querySelector('.resetBtn').addEventListener('click', () => {
      // Очищаем LocalStorage
      // Resetting the localStorage on the page
      localStorage.clear();

      // Обнуляем счетчики
      // Resetting the counters
     for (let smile of document.querySelectorAll('p')) {
    smile.textContent = '0';
  }
});