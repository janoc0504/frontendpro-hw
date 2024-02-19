const imagesArr = ['./images/1.jpg', './images/2.jpg', './images/3.jpg', './images/4.jpg'];
const imgs = document.querySelector('.imgs');
const leftArrow = document.querySelector('.leftArrow');
const rihgtArrow = document.querySelector('.rihgtArrow');
let i = 0;

rihgtArrow.addEventListener('click', () => {
  imgs.style.paddingLeft = '0';
  leftArrow.style.display = 'block';
  imgs.src = imagesArr[i];
  i++;

  if (i === imagesArr.length) {
    rihgtArrow.style.display = 'none';
  }
});

leftArrow.addEventListener('click', () => {
  if (i === 0) {
    imgs.style.paddingLeft = '100px';
    return leftArrow.style.display = 'none';
  }

  rihgtArrow.style.display = 'block';
  --i;
  imgs.src = imagesArr[i];
});
