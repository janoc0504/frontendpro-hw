let c = 1;
document.querySelector('#myTable').style.border = '1px solid black';

for (let i = 1; i <= 10; i++) {
  let tr = document.createElement('tr');
  for (let j = 1; j <= 10; j++) {
    let td = document.createElement('td');
    td.style.border = '1px solid black';
    td.textContent = c;
    c++;
    tr.appendChild(td);
  }
  document.querySelector('#myTable').appendChild(tr);
}

