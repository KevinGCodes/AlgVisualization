let grid = new Grid(15, 25);
let barCanvas = new BarCanvas(75, 250);
let mouseDown = 0;

//
//add EventListeners
//

// table listeners
document
  .getElementById("table")
  .addEventListener("mousedown", (e) => (mouseDown = 1));
document
  .getElementById("table")
  .addEventListener("mouseup", (e) => (mouseDown = 0));

//visualize
document
  .getElementById("visualize")
  .addEventListener("click", (e) => {
    if(!grid.running){
      visualizeAlgorithm();
      grid.running = true;
    }
  });

function visualizeAlgorithm() {
  grid.clearAnimatedPath();
  let select = document.querySelector("select");
  let option = select.value;
  

  switch (option) {
    case "Dijkstras":
      dijkstra(grid, grid.start, grid.target);
      animateDijkstra(grid);
      break;
    case "A*":
      break;

    case "DFS":
      DFS(grid, grid.start, grid.target);
      animateDFS(grid);
      break;
    case "BFS":
      BFS(grid, grid.start, grid.target);
      animateBFS(grid);
      break;
  }
  grid.running = false;
}




//visualize-sorting-alg
document
  .getElementById("visualize-sort-alg")
  .addEventListener("click", (e) => visualizeSortingAlgorithm());

function visualizeSortingAlgorithm() {
  let select = document.querySelector('#select-sort');
  let option = select.value;

  switch (option) {
    case "bubble-sort":
      let swaps = bubbleSort(barCanvas.elements);
      animate(barCanvas ,swaps);
      break;
    case "selection-sort":
      let swap = selectionSort(barCanvas.elements);
      animateSelectionSort(barCanvas ,swap);
      break;

    case "merge-sort":
      
      break;
    case "quick-sort":
      let arr = quicksort(barCanvas.elements);
      animateQuicksort(barCanvas, arr);
      break;
  }
}


//clear
document
  .getElementById("clear")
  .addEventListener("click", (e) => {if(!grid.running) grid.clearBoard()});


// generate maze

document
  .getElementById("maze")
  .addEventListener("click", (e) => {
    if(!grid.running){
      console.log(grid.running);
      grid.running = true;
      let maze = recursiveMazeGeneration(grid);
      animateRecursiveMaze(grid, maze);
    }
  });

//randomize
document
  .getElementById("randomize")
  .addEventListener("click", (e) => {
    barCanvas.randomize();
    initBarCanvas();
  });



//checkboxes
let checkboxes = document.querySelectorAll("input");
checkboxes.forEach((c) => c.addEventListener("change", (e) => selectBox(c)));

function selectBox(c) {
  let checkboxes = document.querySelectorAll("input");
  console.log(c.checked);
  checkboxes.forEach((box) => {
    if (!box.isEqualNode(c)) box.checked = false;
  });
}

function select(cell) {
  grid.clearAnimatedPath();
  let weights = document.getElementById("weights");
  let target = document.getElementById("target-node");
  let start = document.getElementById("start-node");
  if (weights.checked) {
    if (cell.weight != 1) {
      cell.removeWeight();
    } else {
      cell.makeWeight();
    }
  } else if (target.checked) {
    if (grid.target == cell) {
      cell.removeTarget();
      grid.target = null;
    } else {
      if (grid.target != null) grid.target.removeTarget();
      cell.makeTarget();
      grid.target = cell;
    }
  } else if (start.checked) {
    if (grid.start == cell) {
      cell.removeStart();
      grid.start = null;
    } else {
      if (grid.start != null) grid.start.removeStart();
      cell.makeStart();
      grid.start = cell;
    }
  } else {
    cell.wall ? cell.removeWall() : cell.makeWall();
  }
}

//headerListener

document.getElementById("pathfinding-algs")
    .addEventListener("click", (e) => {
    if(!grid.running){
      initGrid(grid);
      document.getElementById('option-div-path-algs').style.display = 'flex';
      document.getElementById('option-div-sort-algs').style.display = 'none';
    }
  });

  document.getElementById("sorting-algs")
  .addEventListener("click", (e) => {
  initBarCanvas(grid);
  document.getElementById('option-div-path-algs').style.display = 'none';
  document.getElementById('option-div-sort-algs').style.display = 'flex';

});

//
//Initialize table
//
function initGrid(grid) {
  let table = document.getElementById("table");
  table.innerHTML = "";
  grid.reset();
  grid.cells.forEach((row) =>
      row.forEach((cell) => {
        cell.wall = false;
        cell.weight = 1;
        cell.start = false;
        cell.target = false;
      })
    );
  for (let i = 0; i < 15; i++) {
    let div = document.createElement("div");
    div.id = "cellDiv";
    for (let j = 0; j < 25; j++) {
      let cell = document.createElement("canvas");
      cell.classList.add('cell');
      if (i == 0) cell.style.borderTopWidth = "4px";
      if (i == 14) cell.style.borderBottomWidth = "4px";
      if (j == 0) cell.style.borderLeftWidth = "4px";
      if (j == 24) cell.style.borderRightWidth = "4px";

      let field = grid.cells[i][j];
      field.canvas = cell;
      cell.addEventListener("mouseover", (e) => {
        if (mouseDown == 1) select(field);
      });

      cell.addEventListener("mousedown", (e) => select(field));

      grid.cells[i][j].canvas = cell;
      div.appendChild(cell);
    }
    table.appendChild(div);
  }
  grid.start = grid.cells[7][2];
  grid.cells[7][2].makeStart();
  grid.target = grid.cells[7][22];
  grid.cells[7][22].makeTarget();
}


///init Bar canvas

function initBarCanvas(){
  let table = document.getElementById('table');
  table.innerHTML = "";
  barCanvas.canvasList = [];
  let stepSize= 360/250;
  let outerDiv = document.createElement('div');
  outerDiv.classList.add('bar-canvas');
  for(let elem of barCanvas.elements){
    let color = elem * stepSize;
    let div = document.createElement('canvas');
    div.style.border = 'solid';
    div.style.borderWidth = '2px';
    div.style.margin = '2px';
    div.style.backgroundColor = 'hsl('+ color +',100%,50%)';
    color = color + stepSize;

    div.style.width ='6px';
    div.style.height = "" + elem;
    barCanvas.canvasList.push(div);
    outerDiv.appendChild(div);
  }
  table.appendChild(outerDiv);
}