/*let mouseDown = 0;

for(i = 0; i <= 20; i++){
    let div = document.createElement('div');
    div.id = 'cellDiv';
    for(j = 0; j < 30; j++){
        let cell = document.createElement('canvas');
        if(i == 0) cell.style.borderTopWidth = '4px';
        if(i == 20) cell.style.borderBottomWidth = '4px';
        if(j == 0) cell.style.borderLeftWidth = '4px';
        if(j == 30) cell.style.borderRightWidth = '4px';
        div.appendChild(cell);
    }
    document.getElementById('table').appendChild(div);
}

let cells = document.querySelectorAll('canvas');
cells.forEach(
    c => c.addEventListener('mouseover', e =>{ if(mouseDown == 1)  c.style.backgroundColor == 'rgb(25, 16, 41)'? c.style.backgroundColor = 'white' : c.style.backgroundColor = 'rgb(25, 16, 41)'})
);
cells.forEach(
    c => c.addEventListener('mousedown', e => c.style.backgroundColor == 'rgb(25, 16, 41)'? c.style.backgroundColor = 'white' : c.style.backgroundColor = 'rgb(25, 16, 41)')
);

document.getElementById('table').addEventListener('mousedown', e => mouseDown = 1);
document.getElementById('table').addEventListener('mouseup', e => mouseDown = 0);*/
