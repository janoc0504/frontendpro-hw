'use strict';

// Purchasing process
//Variables for the block porchases category

const goodsCategory = document.querySelector('#goodsCategory');
const listGoods = {
    'PHONES': [{ name: 'iPhone', info: 'screen: 6.5', price: '$100' }, { name: 'Samsung Galaxy S24', info: 'screen: 7', price: '$102' }],
    'LAPTOPS': [{ name: 'MacBook Air', info: 'screen: 17', price: '$500' }, { name: 'Samsung Galaxy Book3 360', info: 'screen: 14', price: '$200' }],
    'HEADPHONES': [{ name: 'Samsung Galaxy Buds', info: 'power: 20Vt', price: '$50' }, { name: 'AirPods PRO', info: 'power: 16Vt', price: '$80' }],
    'WIRES': [{name: 'HDMI', info: 'length: 2M', price: '$5' }, { name: 'TWISTED PAIR', info: 'length: 1,6M', price: '$8' }]
};
const categories = ['PHONES', 'LAPTOPS', 'HEADPHONES', 'WIRES'];
const checkoutWrap = document.querySelector('#checkoutWrapper');
const categoryList = document.createElement('div');
goodsCategory.appendChild(categoryList);
const goodsList = document.createElement('div');
goodsCategory.appendChild(goodsList);
const goodsInfo = document.createElement('div');
goodsCategory.appendChild(goodsInfo);

//The purchase selecting function
function oneClick(event) {

    document.querySelectorAll('.category').forEach(item => {
        item.classList.remove('selected');
    });

    let categoryName = event.target.textContent.trim();
    event.target.classList.add('selected');

    goodsList.innerHTML = '';
    goodsInfo.innerHTML = '';
    checkoutWrap.style.display = 'none';

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

//This function shows info about goods
function showInfo(good) {
    checkoutWrap.style.display = 'none';
    goodsInfo.innerHTML = `
    <div class="info">
    <p id="product">${good.name}, Info: ${good.info}, Price: ${good.price}</p>
    <button type="button" class="buy" onclick="checkout()">Proceed to Checkout</button></div>`;
}

//Variables for the block - info about the client
const cityCategory = document.querySelector('#cityDiv');
const cities = ['Kyiv', 'Dnipro', 'Zaporizhzhia', 'Odesa', 'Lviv', 'Kobilyaki'];
const error = document.createElement('div');
const citiesList = document.createElement('select');
cityCategory.appendChild(citiesList);

function checkout() {
    checkoutWrap.style.display = 'block';
    error.innerHTML = '';
    const inputs = document.getElementsByTagName('input');
    for (let i = 0; i < inputs.length; i++) {
           inputs[i].value = '';
    }
}

//Block - cities
cities.forEach(city => {
    const element = document.createElement('option');
    element.innerHTML = city;
    citiesList.appendChild(element);
});

//This function checks if the inputs are empty
function validateInputs() {
    const inputs = document.getElementsByTagName('input');
    for (let i = 0; i < inputs.length; i++) {
        if (!inputs[i].value.trim()) {
            console.log('ERROR');
            return false;
        }
    }
     return true;
}

//This function make the purchase or display an error about inputs
function buy() {
    if (validateInputs()) {
        const successSection =  document.querySelector('#success');
        let amountPurchase = document.getElementById('amount').value;
        let price = /Price: \$(\d+)/;
        let matchPrice = document.getElementById('product').textContent.match(price);
        let tempPrice = matchPrice[1];

        successSection.innerHTML = '';
        error.innerHTML = '';

        successSection.appendChild(document.createElement('div')).innerHTML = `
        <p>You bought: ${document.getElementById('product').textContent},
        ${document.querySelector('#amount').value} units for the amount $${amountPurchase * tempPrice}.</p>
        <p>Your purchase will delivery at the address: ${document.querySelector('#newpost-address').value}.</p>
        `;
    } else {
        error.innerHTML = `<h3>You have not completed all fields, please, enter all required information.</h3>`;
        checkoutWrap.appendChild(error);
    }
}


