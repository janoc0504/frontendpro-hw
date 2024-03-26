'use strict';

const listGoods = {
    'PHONES': [{ name: 'iPhone', info: 'screen: 6.5', price: '$100' }, { name: 'Samsung Galaxy S24', info: 'screen: 7', price: '$102' }],
    'LAPTOPS': [{ name: 'MacBook Air', info: 'screen: 17', price: '$500' }, { name: 'Samsung Galaxy Book3 360', info: 'screen: 14', price: '$200' }],
    'HEADPHONES': [{ name: 'Samsung Galaxy Buds', info: 'power: 20Vt', price: '$50' }, { name: 'AirPods PRO', info: 'power: 16Vt', price: '$80' }],
    'WIRES': [{ name: 'HDMI', info: 'length: 2M', price: '$5' }, { name: 'TWISTED PAIR', info: 'length: 1,6M', price: '$8' }]
};
const categorySection = document.getElementById('category');
const productsSection = document.getElementById('products');
const infoSection = document.getElementById('info');
const checkoutWrap = document.querySelector('.checkoutWrapper');
const myOrdersBtn = document.getElementById('my-orders');

function createModal() {
    // Get the modal
    const modal = document.getElementById("myModal");
    // Get the button that opens the modal
    const btn = document.getElementById("bt-proceed");
    // Get the <span> element that closes the modal
    const span = document.getElementsByClassName("close")[0];
    // When the user clicks the button, open the modal
    btn.onclick = function() {
        modal.style.display = "block";
    }
    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}

function clicker() {
    for (const category in listGoods) {
        const catList = document.createElement('div');
        catList.textContent = category;
        catList.className = 'categories';

        catList.addEventListener('click', () => {
            const allCategories = document.querySelectorAll('.categories');
            allCategories.forEach(category => {
                category.classList.remove('active');
            });
        })

        catList.addEventListener('click', () => {
            catList.classList.add('active');
            productsSection.innerHTML = '';
            infoSection.innerHTML = '';

            listGoods[category].forEach(item => {
                const listItem = document.createElement('div');
                listItem.innerHTML = item.name;
                listItem.className = 'list-products';
                productsSection.append(listItem);

                listItem.addEventListener('click', () => {
                    const allProducts = document.querySelectorAll('.list-products');

                    allProducts.forEach(category => {
                        category.classList.remove('active');
                    });
                })

                listItem.addEventListener('click', () => {
                    listItem.classList.add('active');
                    infoSection.innerHTML = '';
                    const info = document.createElement('div');
                    info.innerHTML = `<div class="info">
                              <p id="product">${item.name}, Info: ${item.info}, Price: ${item.price}</p>`;
                    infoSection.append(info);
                    info.id = 'product';
                    const butProceed = document.createElement('button');
                    infoSection.append(butProceed);
                    butProceed.textContent = 'Proceed to Checkout';
                    butProceed.id = 'bt-proceed';
                    createModal();
                })
            });
        })
        categorySection.append(catList);
    }
}

clicker();


//Variables for the block - info about the client
const cityCategory = document.getElementById('cityDiv');
const cities = ['Kyiv', 'Dnipro', 'Zaporizhzhia', 'Odesa', 'Lviv', 'Kobilyaki'];
const error = document.createElement('div');
const citiesList = document.createElement('select');
cityCategory.appendChild(citiesList);

//Block - cities
cities.forEach(city => {
    const element = document.createElement('option');
    element.classList.add('cities')
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

function clearInputs() {
    const inputs = document.querySelectorAll('input[type="text"], input[type="number"], textarea');
    inputs.forEach(input => {
        input.value = '';
    });
}

//This function make the purchase or display an error about inputs
function buy() {
    if (validateInputs()) {
        const successSection =  document.getElementById('success');
        let amountPurchase = document.getElementById('amount').value;
        let price = /Price: \$(\d+)/;
        let matchPrice = document.getElementById('product').textContent.match(price);
        let tempPrice = matchPrice[1];
        successSection.innerHTML = '';
        error.innerHTML = '';

        successSection.appendChild(document.createElement('div')).innerHTML = `
        <p>You bought: ${document.getElementById('product').textContent},
        ${document.getElementById('amount').value} units for the amount $${amountPurchase * tempPrice}.</p>
        <p>Your purchase will delivery at the address: ${document.querySelector('.cities').value} ${document.getElementById('newpost-address').value}.</p>
        <p>Comments: ${document.getElementById('yourWishes').value}</p>
        <p>Type of payment: ${document.getElementById('paymentType').value}</p>
        `;
        const order = {
            product: document.getElementById('product').textContent,
            amount: document.getElementById('amount').value,
            address: document.querySelector('.cities').value + ', ' + document.getElementById('newpost-address').value,
            comments: document.getElementById('yourWishes').value,
            totalPrice: amountPurchase * tempPrice,
            date: new Date().toLocaleString()
        };

        // save to localStorage
        saveOrder(order);
        clearInputs();
    } else {
        error.innerHTML = `<h3 class="error">You have not completed all fields, please, enter all required information.</h3>`;
        checkoutWrap.appendChild(error);
    }
}


// function to save in localStorage
function saveOrder(order) {
    let orders = JSON.parse(localStorage.getItem('orders')) ||Добавляем новый заказ в массив []; // from localStorage or new array
    orders.push(order); // add new order
    localStorage.setItem('orders', JSON.stringify(orders)); // save to localStorage
}

//displey all orders function
function displayOrders() {
    const ordersSection = document.getElementById('orders');
    categorySection.innerHTML = '';
    ordersSection.innerHTML = '';
    productsSection.innerHTML = '';
    infoSection.innerHTML = '';

    // getting orders from localStorage
    const orders = JSON.parse(localStorage.getItem('orders')) || [];

    //create orders list
    const ordersList = document.createElement('ul');
    ordersList.classList.add('orders-list');

    //creating elements of orders list
    orders.forEach((order, index) => {
        const orderItem = document.createElement('li');
        orderItem.classList.add('item-list');
        orderItem.innerHTML = `
      <div class="order-item">
        <p>Date: ${order.date}</p>
        <p>Total Price: $${order.totalPrice}</p>
        <button class="expand-btn" onclick="expandOrder(${index})">Expand</button>
        <button class="delete-btn" onclick="deleteOrder(${index})">Delete</button>
      </div>
      <div class="expanded-info" id="expanded-info-${index}" style="display: none;">
        <p>Product: ${order.product}</p>
        <p>Amount: ${order.amount}</p>
        <p>Address: ${order.address}</p>
        <p>Comments: ${order.comments}</p>
      </div>
    `;
        ordersList.appendChild(orderItem);
    });
    ordersSection.appendChild(ordersList);
}

//expand orders function
function expandOrder(index) {
    const expandedInfo = document.getElementById(`expanded-info-${index}`);
    expandedInfo.style.display = expandedInfo.style.display === 'none' ? 'block' : 'none';
}

//delete orders function
function deleteOrder(index) {
    let orders = JSON.parse(localStorage.getItem('orders')) || [];
    orders.splice(index, 1); 
    localStorage.setItem('orders', JSON.stringify(orders));
    displayOrders();
}

//list output orders function
myOrdersBtn.addEventListener('click', displayOrders);

//reload a page function
const reloadBtn = document.getElementById('reload-page');
reloadBtn.addEventListener('click', reloadPage);
function reloadPage() {
    location.reload();
}