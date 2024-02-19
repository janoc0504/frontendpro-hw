const imagesArr = ['./images/1.jpg', './images/2.jpg', './images/3.jpg', './images/4.jpg'];
const imgs = document.querySelector('.imgs');
const leftArrow = document.querySelector('.leftArrow');
const rihgtArrow = document.querySelector('.rihgtArrow');
let i = 0;

rihgtArrow.addEventListener('click', () => {
  i++;
  imgs.src = imagesArr[i];
  imgs.style.paddingLeft = '0';
  leftArrow.style.display = 'block';
  
  if (i === imagesArr.length - 1) {
    imgs.style.paddingRight = '100px';
    rihgtArrow.style.display = 'none';
  }
});


leftArrow.addEventListener('click', () => {
  --i;
  imgs.src = imagesArr[i];
  imgs.style.paddingRight = '0';
  rihgtArrow.style.display = 'block';
  
  if (i === 0) {
    imgs.style.paddingLeft = '100px';
    return leftArrow.style.display = 'none';
  }
});
