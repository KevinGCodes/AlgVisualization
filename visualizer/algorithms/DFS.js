function DFS(grid, start, target) {
  grid.reset();
  DFShelper(grid, start, target);

  return grid.found;
}

function DFShelper(grid, start, target) {
  if (start == target) {
    grid.found = true;
    return;
  }
  grid.path.push(start);
  start.visited = true;
  let neighbors = grid.getNeighbors(start);
  for (let cell of neighbors) {
    if (!grid.found && !cell.visited && !cell.wall) {
      cell.previous = start;
      DFShelper(grid, cell, target);
    }
  }
}

function animateDFS(grid) {
  let path = grid.path;
  console.log(path.length);
  let index = 1;
  let elem;
  let id = setInterval(() => {
    if (index < path.length) {
      elem = path[index];
      elem.canvas.classList.add('animation');
      elem.canvas.style.backgroundColor = "rgb(92, 224, 213)";
      index++;
    } else {
        if (grid.found) {
            let path = grid.path;
            path.shift();
            animateShortestPath(grid, path);
            clearInterval(id);
        }else{
            grid.running = false;
            clearInterval(id);
        }
    }
  }, 20);
  
}
