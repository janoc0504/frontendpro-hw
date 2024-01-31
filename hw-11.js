const characters = 'abcdefghijklmnopqrstuvwxyz0123456789-QWERTYUIOPLKJHGFDSAZXCVBNM';

function generateKey(quantity, characters) {
  let pass = '';
  for (let i = 0; i < quantity; i++) {
    let result = Math.floor(Math.random() * characters.length);
    pass += characters[result];
  }
  return pass;
}

const key = generateKey(16, characters);
console.log(key);