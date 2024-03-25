'use strict';

const arrList = [1, 2, 3, [1.1, 1.2, 1.3, 1.4], 4, 5, 6];
const arrListSubList = [1, 2, 3, 4, 5, 6];
const $wrapper = document.getElementById('wrapper');

function generateList(arr) {
    const $ul = document.createElement('ul');
    $wrapper.append($ul);

    arr.forEach(item => {
        const $li = document.createElement('li');
        if (Array.isArray(item)) {
            $li.appendChild(generateList(item));
        } else {
            $li.textContent = item;
        }
        $ul.appendChild($li);
    });
    return $ul;
}

generateList(arrList);
generateList(arrListSubList);