'use strict';

let goodsCategory = document.querySelector('#goodsCategory');
let listGoods = {
    'PHONES': [{ name: 'iPhone', screen: 6.5, price: '$100' }, { name: 'Samsung Galaxy S24', screen: 7, price: '$102' }],
    'LAPTOPS': [{ name: 'MacBook Air', screen: 17, price: '$500' }, { name: 'Samsung Galaxy Book3 360', screen: 14, price: '$200' }],
    'HEADPHONES': [{ name: 'Samsung Galaxy Buds', power: '20Vt', price: '$50' }, { name: 'AirPods PRO', power: '16Vt', price: '$80' }]
};

let categories = ['PHONES', 'LAPTOPS', 'HEADPHONES'];

let categoryList = document.createElement('div');
goodsCategory.appendChild(categoryList);

let goodsList = document.createElement('div');
goodsCategory.appendChild(goodsList);

let goodsInfo = document.createElement('div');
goodsCategory.appendChild(goodsInfo);


function oneClick(event) {

    document.querySelectorAll('.category').forEach(item => {
        item.classList.remove('selected');
    });

    let categoryName = event.target.textContent.trim();
    event.target.classList.add('selected');

    goodsList.innerHTML = '';
    goodsInfo.innerHTML = '';

    listGoods[categoryName].forEach(good => {
        let listItem = document.createElement('div');
        listItem.innerHTML = `<p>${good.name}</p>`;
        goodsList.appendChild(listItem);
        listItem.className = 'list';

        listItem.addEventListener('click', () => {
            document.querySelectorAll('.list').forEach(item => {
                item.classList.remove('selected');
            });

            listItem.classList.add('selected');
            showInfo(good);
        });
    });
}

categories.forEach(paragraph => {
    const parElement = document.createElement('div');
    parElement.innerHTML = paragraph;
    categoryList.appendChild(parElement);
    parElement.className = 'category';
});

categoryList.addEventListener('click', oneClick);

function showInfo(good) {
    if(good.screen) {
        goodsInfo.innerHTML = `<div class="info"><p>${good.name}, Screen: ${good.screen}, Price: ${good.price}</p>
    <button type="button" class="buy" onclick="buy()">BUY</button></div>`;
    } else {
        goodsInfo.innerHTML = `<div class="info"><p>${good.name}, Power: ${good.power}, Price: ${good.price}</p>
    <button type="button" class="buy" onclick="buy()">BUY</button></div>`;
    }

}

function buy() {
    alert(`The item was successfully purchased!`);
    location.reload();
}
