class Grid {
  rows;
  cols;
  cells = [];
  found;
  path = [];
  start = null;
  target = null;
  running = false;

  constructor(rows, cols) {
    this.rows = rows;
    this.cols = cols;

    for (let i = 0; i < this.rows; i++) {
      this.cells.push([]);
      for (let j = 0; j < this.cols; j++) {
        this.cells[i].push(new Cell(j, i));
      }
    }
  }

  getNeighbors(cell) {
    let neighbors = [];
    let x = cell.x;
    let y = cell.y;
    for (let i = x - 1; i <= x + 1; i++) {
      for (let j = y - 1; j <= y + 1; j++) {
        if (j != y && i != x) continue;
        if (i == x && j == y) continue;
        if (i >= 0 && i < this.cols && j >= 0 && j < this.rows)
          neighbors.push(this.cells[j][i]);
      }
    }
    return neighbors;
  }

  clearBoard() {
    this.cells.forEach((row) =>
      row.forEach((cell) => {
        if (cell.wall) cell.removeWall();
        else if (cell.target) cell.removeTarget();
        else if (cell.weight) cell.removeWeight();
        cell.canvas.style.backgroundColor = 'rgb(255, 255, 255)';
      })
    );
    this.start = this.cells[7][2];
    this.cells[7][2].makeStart();
    this.target = this.cells[7][22];
    this.cells[7][22].makeTarget();
  }

  clearAnimatedPath() {
    this.cells.forEach((row) =>
      row.forEach((cell) => {
        cell.canvas.classList.remove('animation');
        cell.canvas.classList.remove('animation-path');
        if (!cell.wall && !cell.start && !cell.target){
           cell.canvas.style.backgroundColor = 'rgb(255, 255, 255)';
        }
      })
    );
  }

  reset() {
    this.cells.forEach((row) =>
      row.forEach((cell) => {
        cell.visited = false;
        cell.previous = null;
        cell.distance = Infinity;
      })
    );
    this.found = 0;
    this.path = [];
  }
}

