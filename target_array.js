var createTargetArray = function (nums, index) {
    let target = [];
    for (let i = 0; i < index.length; i++) {
        const ind = index[i];
        target.splice(ind,0,nums[i]);
    }
    return target;
};
let nums = [0, 1, 2, 3, 4];
let index = [0, 1, 2, 2, 1];
createTargetArray(nums,index);