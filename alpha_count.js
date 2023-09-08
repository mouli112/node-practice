//arr = ['a','b','a','c','c','d','b','a'];
//output = {a:3,b:2,c:2,d:1}
function alpCount(arr) {
   let map = {};
   for(let i=0;i<arr.length;i++){
    if(map[arr[i]]){
        map[arr[i]] = map[arr[i]]+1;
    }else{
        map[arr[i]] = 1
    }
   } 
   return map;
}
let arr = ['a', 'b', 'a', 'c', 'c', 'd', 'b', 'a'];
console.log(alpCount(arr));
