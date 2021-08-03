var getConcatenation = function(nums) {
    let ans = new Array(nums.length * 2);
    for (var i = 0; i < nums.length; ++i) {
        ans[i] = nums[i];
        ans[i + nums.length] = nums[i];
    }
    return ans;
};