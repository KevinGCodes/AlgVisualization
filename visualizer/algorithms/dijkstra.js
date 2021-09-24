function dijkstra(grid, start, target) {
  grid.reset();
  let elem = start;
  start.distance = 0;
  while (elem != null) {
    if (elem == target) {
      grid.found = true;
      return;
    }
    elem.visited = true;
    grid.path.push(elem);
    let neighbors = grid.getNeighbors(elem);
    for (let cell of neighbors) {
      if (cell.visited || cell.wall) continue;
      if (elem.distance + cell.weight < cell.distance) {
        cell.distance = cell.weight + elem.distance;
        cell.previous = elem;
      }
    }
    elem = closestUnvisited(grid);
  }
}

function closestUnvisited(grid) {
  let shortestDistance = Infinity;
  let closestCell = null;

  grid.cells.forEach((row) =>
    row.forEach((cell) => {
      if (!cell.visited && !cell.wall && cell.distance < shortestDistance) {
        closestCell = cell;
        shortestDistance = cell.distance;
      }
    })
  );

  return closestCell;
}

function animateDijkstra(grid) {
  let path = grid.path;
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
            let path = getShortestPath(grid.target.previous);
            animateShortestPath(grid, path);
        }else{
            grid.running = false;
        }
        clearInterval(id);
    }
  }, 20);
}
