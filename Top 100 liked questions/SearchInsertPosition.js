/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var searchInsert = function(nums, target) {
    if(target <= nums[0]) return 0;
    if(target > nums[nums.length - 1]) return nums.length;
    if(target == nums[nums.length - 1]) return nums.length - 1;
    let left = 0;
    let right = nums.length - 1;
    let mid = Math.ceil((right + left)/2 );
    while(right > left + 1) {
        if(target > nums[mid]) {
            left = mid;
            mid = Math.ceil((right + left)/2);
        }
        else if(target < nums[mid]) {
            right = mid;
            mid = Math.ceil((right + left)/2);
        }
        else if(target = nums[mid]) return mid;
    }
    return left + 1;
};