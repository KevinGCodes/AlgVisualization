function selectionSort(array){
    let swaps = [];
     let low = 0;
     let high = array.length - 1;
     while(low < high){
         let smallest = findSmallest(array, low, high);
         if(smallest == low){
             low++;
             continue;
         }
         swaps.push({
            a: low,
            b: smallest
         });
         let tmp = array[smallest];
         array[smallest] = array[low];
         array[low] = tmp;
         console.log(array[smallest]);
         low++;
    }return swaps;
}

function findSmallest(array, low, high){
     let indexOfLowest = 0;
     let smallest = Infinity;

     for(let i = low; i <= high; i++){
         if(array[i] < smallest){
             smallest = array[i];
             indexOfLowest = i;
         }
     }
     return indexOfLowest;
}

function animateSelectionSort(barCanvas, swaps){   
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
    },100);
}