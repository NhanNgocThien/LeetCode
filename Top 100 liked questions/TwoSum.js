var twoSum = function(nums, target) {
    let pool = {};
    for(var i = 0; i < nums.length; ++i) {
        if(target - nums[i] in pool) {
            return [i, pool[target - nums[i]]]
        }
        else pool[nums[i]] = i; 
    }
    return [];
};