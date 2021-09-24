function DFSMazeGeneration(grid, start) {
  let path = [];
  let stack = [];
  grid.reset();
  grid.cells.forEach((row) =>
    row.forEach((cell) => {
      if (cell.start == false && cell.target == false) cell.makeWall();
    })
  );

  stack.push(start);

  while (stack.length > 0) {
    let elem = stack.pop();
    if (elem.start == false) path.push(elem);
    let neighbors = grid.getNeighbors(elem);

    neighbors = neighbors.filter(n => n.visited == false);

    while (neighbors.length > 0) {
      let random = Math.floor(Math.random() * neighbors.length);
      let neighbor = neighbors.splice(random, 1)[0];
      neighbor.visited = true;
      stack.push(neighbor);
    }
  }
  return path;
}

function animateMaze(path) {
  let index = 0;
  let elem;
  let id = setInterval(() => {
    if (!path[index].target) {
      elem = path[index];
      if(!elem.start && !elem.target)elem.removeWall();
      index++;
    } else {
      clearInterval(id);
    }
  }, 20);
}
