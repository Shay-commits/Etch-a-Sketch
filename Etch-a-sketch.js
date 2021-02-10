
let gameContainer = document.getElementById("container");



const grid = (v) => {
  for(var i = 0; i < v; i++) {
    var column = document.createElement('div')
    column.className = 'column';

    for (var j = 0; j < v; j++) {
      var row = document.createElement('div')
      row.className = "row";
      column.appendChild(row);
    }

    gameContainer.appendChild(column)
  }
}

window.onload = grid(6);


const paintSquares = (size) =>  {
  let element = document.getElementsByClassName('row')
  for (let i = 0; i <= size*size ;i++) {
    element[i].addEventListener("mouseenter", function(e){
      e.target.style.backgroundColor = '#25344a';
    })
  }
}

window.setTimeout(() => {
  paintSquares(6);

},2000)

const resetIt = () => {
  console.log(gameContainer.firstChild)
  while (gameContainer.firstChild) {
    gameContainer.removeChild(gameContainer.firstChild)
  }
  let gridSize = prompt("please enter grid size?");
  grid(gridSize);
  gameContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
  paintSquares(gridSize);
}


let resetButton = document.getElementById('button');
resetButton.addEventListener('click', resetIt);
