// Input: nums = [2, 5, 1, 3, 4, 7], n = 3
// Output: [2, 3, 5, 4, 1, 7] 

var shuffle = function (nums, n) {
    let shalf = nums.slice(n);
    let res = [];
    for (let i = 0; i < (nums.length)/2; i++) {
        res.push(nums[i]);
        res.push(shalf[i]);
    }
    return res;
};
let nums = [2, 5, 1, 3, 4, 7];
let n = 3;
console.log(shuffle(nums, n));