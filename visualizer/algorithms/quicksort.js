function quicksort(array){
    let swaps = [];
    quicksortHelper(array, 0, array.length -1, swaps);
    return swaps;
}


function quicksortHelper(array, low, high, swaps){
    if(low >= high) return ;
 
    let pivot = array[high];
    let i = low;
    let j = high-1;
    while(i < j){
        while(array[i] < pivot && i < high) i++;
        while(array[j] >= pivot && j > low) j--;
        if(i < j ){
            swaps.push({
                a: i,
                b: j
            });
            let tmp = array[i];
            array[i] = array[j];
            array[j] = tmp;
        }
        
    }
    if(array[i] > pivot){
        swaps.push({
            a: i,
            b: high
        });
        let tmp = array[i];
        array[i] = array[high];
        array[high] = tmp;
    }
    quicksortHelper(array, low, i - 1, swaps);
    quicksortHelper(array, i + 1, high, swaps);
}

function animateQuicksort(barCanvas, swaps){   
    let index = 0;
    let canvasList = barCanvas.canvasList;
    
    let id = setInterval(() => {
        if(index < swaps.length){
            let a = swaps[index].a;
            let b = swaps[index].b;
            let tmp1 = canvasList[a].style.backgroundColor;
            let tmp2 = canvasList[a].style.height;
    
            canvasList[a].style.backgroundColor = canvasList[b].style.backgroundColor;
            canvasList[a].style.height = canvasList[b].style.height;
            canvasList[b].style.backgroundColor = tmp1;
            canvasList[b].style.height = tmp2;
            index++;
        }else{
            clearInterval(id);
        }
    },50);
}