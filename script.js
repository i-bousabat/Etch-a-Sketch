let gridSize = 10; //default 10
const container = document.querySelector('.container');
createGrid(); //create defult grid
const button = document.querySelector('button');
const input = document.querySelector('input');
const selectSize = document.querySelector('.select-size');
const clearButton = document.querySelector('#clear');

//clear the grid
clearButton.addEventListener('click', (e) => {
    container.innerHTML = '';
    createGrid();

});

//allow user to change dimentions of grid
button.addEventListener('click', (e) => {
    let inputValue = Number(input.value);
    alert(inputValue);
    if (!Number.isInteger(inputValue) || 
    inputValue > 100 ||
    inputValue < 1) {
        alert("Input must be a positive iteger less than or equal to 100");
        return;
    };

    container.innerHTML = '';
    gridSize = (Number(inputValue));
    createGrid();
    input.value = '';
    input.focus();
});

function createGrid(){
    for (let i = 0; i < gridSize; i++) {
        const row = document.createElement('div');
        row.classList.add('row');

        for (let j = 0; j < gridSize; j++) {
            const square = document.createElement('div');
            square.classList.add('square');
            sqaureSize = Math.floor(500 / gridSize);
            square.style.width = `${sqaureSize}px`;
            square.style.height = `${sqaureSize}px`;
            row.appendChild(square);
        }

        container.appendChild(row);
    }
}

container.addEventListener('mouseover', (e) => {
    if (e.target.classList.contains('square')) {
        e.target.style.backgroundColor = randomColor();
    }
});


function randomColor() {
    let x = Math.floor(Math.random() * 256);
    let y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256); 
    return `rgb(${x}, ${y}, ${z})`;
}

