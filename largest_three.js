function largestelements(arr){
    let first = second = third = 0;
    let res = arr.sort((a,b) => b-a);
    return [first = res[0],
    second = res[1],
    third = res[2]];
}
let data = [10,20,56,43,98,63];
console.log(largestelements(data));