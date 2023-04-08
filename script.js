const boxContainer = document.querySelector('.box-container');
const numBoxesInput = document.querySelector('#num-boxes');
const numRowsInput = document.querySelector('#num-rows');
const numColsInput = document.querySelector('#num-cols');
const createBoxesBtn = document.querySelector('#create-boxes-btn');

let numBoxes = 0;
let numRows = 0;
let numCols = 0;

createBoxesBtn.addEventListener('click', () => {
  numBoxes = parseInt(numBoxesInput.value);
  numRows = parseInt(numRowsInput.value);
  numCols = parseInt(numColsInput.value);

  if (isNaN(numBoxes) || isNaN(numRows) || isNaN(numCols)) {
    alert('Please enter valid input values.');
    return;
  }

  boxContainer.innerHTML = '';

  const boxWidth = (100 / numCols) - 20;
  const boxHeight = (100 / numRows) - 20;

  for (let i = 0; i < numRows; i++) {
    const row = document.createElement('div');
    row.classList.add('box-row');

    for (let j = 0; j < numCols; j++) {
      const box = document.createElement('div');
      box.classList.add('box');
      box.style.width = `${boxWidth}%`;
      box.style.height = `${boxHeight}%`;
      box.innerText = String.fromCharCode(65 + i) + (j + 1);
      box.addEventListener('click', () => {
        box.classList.toggle('selected');
      });
      row.appendChild(box);
    }

    boxContainer.appendChild(row);
  }
});
