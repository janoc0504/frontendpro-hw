let goodsCategory = document.querySelector('#goodsCategory');
let listGoods = [{name: 'phone', price: '$100'}, {name: 'phone2', price: '$102'}, {name: 'phone3', price: '$103'}];

let categoryList = document.createElement('div');
goodsCategory.appendChild(categoryList);

let elementCategory = document.createElement('div');
elementCategory.className = 'category';
elementCategory.innerHTML = 'FIRST CATEGORY';
categoryList.appendChild(elementCategory);

let element2Category = document.createElement('div');
element2Category.className = 'category';
element2Category.innerHTML = 'SECOND CATEGORY';
categoryList.appendChild(element2Category);

let goodsList = document.createElement('div');
goodsCategory.appendChild(goodsList);

let goodsInfo = document.createElement('div');

function showInfo(good) {
    goodsInfo.innerHTML = `<p>Name: ${good.name}\nPrice: ${good.price}</p><button type="button">BUY</button>`;
    goodsCategory.appendChild(goodsInfo);
}

function oneClick() {
    listGoods.forEach(good => {
        let listItem = document.createElement('div');
        listItem.innerHTML = `<p>Name: ${good.name}</p><p>Price: ${good.price}</p>`;
        goodsList.appendChild(listItem);
        listItem.className = 'list';

        listItem.addEventListener('click', ()=> {
            showInfo(good);
        })
    })

    elementCategory.removeEventListener('click', oneClick);
}

elementCategory.addEventListener('click', oneClick);
