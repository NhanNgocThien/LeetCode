var createTargetArray = function(nums, index) {
    let target = [];
    for (var i = 0; i < nums.length; ++i) {
        target.splice(index[i], 0, nums[i]);
    }
    return target;
};