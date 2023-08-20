const leftRightDifference = function(nums) {
    let totalSum = nums.reduce((sum, curr) => sum + curr, 0);
    let leftSum = 0;
    
    return nums.map(curr => {
        const difference = Math.abs(leftSum - (totalSum - leftSum - curr));
        leftSum += curr;
        return difference;
    });
};
let nums = [10, 4, 8, 3];
console.log(leftRightDifference(nums));