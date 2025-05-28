let gridDimention = 16;// for example = 16

const gridSize = 16; //example
const container = document.querySelector('.container');

for (let i = 0; i < gridSize; i++) {
    const row = document.createElement('div');
    row.classList.add('row');

    for (let j = 0; j < gridSize; j++) {
        const square = document.createElement('div');
        square.classList.add('square');
        row.appendChild(square);
    }

    container.appendChild(row);
}

container.addEventListener('mouseover', (e) => {
    if (e.target.classList.contains('square')) {
        e.target.style.backgroundColor = 'blue';
    }
    

})

