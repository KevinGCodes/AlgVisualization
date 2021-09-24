function mergesort(array){
    if(array.length == 1) return array;
    let mid = array.length % 2 == 0? array.length/2 -1 : Math.floor(array.length/2);

    let left = array.slice(0, mid + 1);
    let right = array.slice(mid + 1, array.length);
    left = mergesort(left);
    right = mergesort(right);
    return merge(left, right);
}


function merge(left, right){
    let pLeft = 0;
    let pRight = 0;
    let result = [];

    while(pLeft < left.length && pRight < right.length){
        if(left[pLeft] < right[pRight]){
            result.push(left[pLeft]);
            pLeft++;
        }else{
            result.push(right[pRight]);
            pRight++;
        }
    }

    while(pLeft < left.length){
        result.push(left[pLeft]);
        pLeft++;
    }

    while(pRight < right.length){
        result.push(right[pRight]);
        pRight++;
    }

    return result;
}
