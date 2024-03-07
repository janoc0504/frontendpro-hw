let goodsCategory = document.querySelector('#goodsCategory');
let listGoods = [{name: 'phone', price: '$100', }, {name: 'phone2', price: '$102'}, {name: 'phone3', price: '$103'}];

let elementCategory = document.createElement('div');
elementCategory.className = 'category';
elementCategory.innerHTML = 'FIRST CATEGORY';
goodsCategory.appendChild(elementCategory);

let goodsList = document.createElement('div');
goodsCategory.appendChild(goodsList);



function oneClick() {
    listGoods.forEach(good => {
        let listItem = document.createElement('div');
        listItem.innerHTML = `<p>Name: ${good.name}</p><p>Price: ${good.price}</p>`;
        goodsList.appendChild(listItem);
        listItem.className = 'list';
    })

    elementCategory.removeEventListener('click', oneClick);
}

elementCategory.addEventListener('click', oneClick);

