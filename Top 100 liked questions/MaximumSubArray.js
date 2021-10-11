var maxSubArray = function(nums) {
	if(nums.length == 1) return nums[0];
   let prev = 0;
   let max = -Infinity;
   for(var i = 0; i < nums.length; ++i) {
	   prev = Math.max(nums[i] + prev, nums[i]);
	   max = Math.max(max, prev);
   }
   return max;
};