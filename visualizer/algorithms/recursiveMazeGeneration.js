function recursiveMazeGeneration(grid){
    let maze;
    grid.clearAnimatedPath();
    do{
        maze = [];
        grid.cells.forEach(row => row.forEach(cell =>{
            if(cell.wall) cell.removeWall();
        }));
        recursiveMazeGenerationHelper(grid, 0, grid.cells[0].length - 1, 0, grid.cells.length - 1, true, maze)
    }while(DFS(grid, grid.start, grid.target) == false);
    return maze;
}

function recursiveMazeGenerationHelper(grid, xLow, xHigh, yLow, yHigh, axis, maze){
    if(xHigh - xLow <=  2 && axis == true){
        if(yHigh - yLow <= 2){
            return;
        }
        else {
            axis = !axis;
        }
    }
    if(yHigh - yLow <=  2 && axis == false){
        if(xHigh - xLow <= 2){
            return;
        }
        else{
            axis = !axis;
        }
    }
    
    let random = axis? Math.floor(Math.random() * (xHigh - xLow - 1) + (xLow + 1)) : Math.floor(Math.random() * (yHigh - yLow - 1) + (yLow + 1));

    if(axis){
        let newRandom = Math.floor(Math.random() * (yHigh - yLow + 1) + yLow);
        for(let i = yLow; i <= yHigh; i++){
            if(i != newRandom && !grid.cells[i][random].start && !grid.cells[i][random].target ){
                maze.push(grid.cells[i][random]);
                grid.cells[i][random].wall = true;
            }
        }
        recursiveMazeGenerationHelper(grid, xLow, random - 1, yLow, yHigh, !axis, maze);
        recursiveMazeGenerationHelper(grid, random + 1, xHigh, yLow, yHigh, !axis, maze);
    }else{
        let newRandom = Math.floor(Math.random() * (xHigh - xLow + 1) + xLow);
        for(let i = xLow; i <= xHigh; i++){
            if(i != newRandom && !grid.cells[random][i].start && !grid.cells[random][i].target){
                maze.push(grid.cells[random][i]);
                grid.cells[random][i].wall = true;
            }
        }
        for(let i = Math.floor(Math.random() * 2); i >= 0; i--) axis = !axis;
        recursiveMazeGenerationHelper(grid, xLow, xHigh, yLow, random - 1, axis, maze);
        recursiveMazeGenerationHelper(grid, xLow, xHigh, random + 1, yHigh, axis, maze);
    }
}

function animateRecursiveMaze(grid, path){

    let index = 0;
    let elem;
    let id = setInterval(() => {
        if (index < path.length) {
            elem = path[index];
            elem.makeWall();
            index++;
        } else {
            grid.running = false;
            clearInterval(id);
        }
    }, 20);
}