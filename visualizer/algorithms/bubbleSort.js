function bubbleSort(array){
    let swaps = [];
    for(let i = 0; i < array.length; i++){
        for(let j = 0; j < array.length - 1 ; j++){
           if(array[j] > array[j + 1]){
               swaps.push(j);
               let tmp = array[j];
               array[j] = array[j + 1];
               array[j + 1] = tmp;
           }
        }
    }return swaps;
}

function animate(barCanvas, swaps){
    let index = 0;
    let canvasList = barCanvas.canvasList;

    let id = setInterval(() => {
        if(index < swaps.length){
            let n = swaps[index];
            let tmp1 = canvasList[n].style.backgroundColor;
            let tmp2 = canvasList[n].style.height;

            canvasList[n].style.backgroundColor = canvasList[n+1].style.backgroundColor;
            canvasList[n].style.height = canvasList[n+1].style.height;
            canvasList[n + 1].style.backgroundColor = tmp1;
            canvasList[n + 1].style.height = tmp2;
            index++;
        }else{
            clearInterval(id);
        }
    },3);

}

