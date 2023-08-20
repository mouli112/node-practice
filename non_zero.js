function zeroIndex(arr){
    let nonzero = 0;
    for(let i=0; i<arr.length; i++){
        if(arr[i] !== 0){
            arr[nonzero] = arr[i];
            nonzero++;
        }
    }
    console.log(nonzero);
    for(let i=nonzero;i<arr.length;i++){
        arr[i] = 0;
    }
    return arr;
}
let arr = [34,0,4,0,0,2,56,0,7];
console.log(zeroIndex(arr));