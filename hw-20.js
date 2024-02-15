const arrImgs = ['./image/1.jpg', './image/2.jpg', './image/3.jpg', './image/4.jpg', './image/5.jpg', './image/6.jpg', './image/7.jpg', './image/8.jpg', './image/9.jpg'];
const imgs = document.querySelector('#imagess');
const btn = document.querySelector('#btn');

function shuffle() {
  for (let i of arrImgs) {
    res = Math.floor(Math.random() * arrImgs.length);
    document.querySelector('#imagess').src = arrImgs[res];
  }
  
  return imgs.src = arrImgs[res];
}

btn.addEventListener('click', shuffle);
