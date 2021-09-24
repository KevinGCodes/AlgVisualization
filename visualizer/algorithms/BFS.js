function BFS(grid, start, target) {
  grid.reset();
  let queue = [start];
  start.visited = true;

  while (queue.length > 0) {
    console.log(queue.length);
    let elem = queue.shift();
    if (elem == target) {
      grid.found = true;
      return;
    }
    grid.path.push(elem);
    let neighbors = grid.getNeighbors(elem);
    for (let cell of neighbors) {
      if (!cell.visited && !cell.wall) {
        queue.push(cell);
        cell.previous = elem;
        cell.visited = true;
      }
    }
  }
}

function animateBFS(grid) {
  let path = grid.path;
  let index = 1;
  let elem;
  let id = setInterval(() => {
    if (index < path.length) {
      elem = path[index];
      elem.canvas.getContext('2d').clearRect(0, 0,elem.canvas.width, elem.canvas.height);
      elem.canvas.classList.add('animation');
      elem.canvas.style.backgroundColor = "rgb(92, 224, 213)";
      index++;
    } else {
      clearInterval(id);
      animateShortestPath(grid, getShortestPath(grid.target.previous));
    }
  }, 20);
}

function getShortestPath(target) {
  let path = [];
  while (target != null && !target.start) {
    path.unshift(target);
    target = target.previous;
  }
  return path;
}

function animateShortestPath(grid, path) {
  let elem;
  var id = setInterval(() => {
    if (path.length > 0) {
        elem = path.shift();
        elem.canvas.classList.add('animation-path');
        elem.canvas.style.backgroundColor = 'rgb(230, 255, 4)';
    } else {
        grid.running = false;
        clearInterval(id);
    }
  }, 20);

}

