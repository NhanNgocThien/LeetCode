// Solution 1: Brute force + Map
var smallerNumbersThanCurrent = function(nums) {
    //      Brute force + Map to check for repetitive value
    let results = [];
    let checked = new Map();
    for (var i = 0; i < nums.length; ++i) {
        let count = 0;
        if (!checked.has(nums[i])) {
            for (var j = 0; j < nums.length; ++j) {
                if (nums[j] < nums[i]) count++;
            }
            results.push(count);
            checked.set(nums[i], count);
        } else {
            results.push(checked.get(nums[i]));
        }
    }
    return results;
};

//  Solution 2: Array Map + Reduce
var smallerNumbersThanCurrent = function(nums) {
    // For each element run the reduce function to loop through the array again
    return nums.map((numa, i) =>
        nums.reduce((total, numb, ii) => (numa > numb ? total + 1 : total), 0)
    );
};