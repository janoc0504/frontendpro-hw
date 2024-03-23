'use strict';

const arrList = [1, 2, 3];
const arrListSubList = [1.1, 1.2, 1.3];
const $wrapper = document.getElementById('wrapper');

function generateList1(arr1) {
    const $ul = document.createElement('ul');
    $wrapper.append($ul);
    for(let item of arr1) {
        const $li = document.createElement('li');
        $ul.append($li);
        $li.textContent = item;
        console.log(item);
    }
}
function generateList2(arr1, arr2) {
    const $ul = document.createElement('ul');
    $wrapper.append($ul);
    for(let item of arr1) {
        const $li = document.createElement('li');
        $ul.append($li);
        $li.textContent = item;
        console.log(item);
        if(item === 2) {
            for(let item of arr2) {
                const $li = document.createElement('li');
                $ul.append($li);
                $li.textContent = item;
            }
        }
    }
}

generateList1(arrList);
generateList2(arrList, arrListSubList);