/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
    let n = nums.length;
    let maxReach = 0; // maximum reachable index

    for (let i = 0; i < n; i++) {
        if (i > maxReach) {
            // If the current index is not reachable, return false
            return false;
        }
        maxReach = Math.max(maxReach, i + nums[i]);
    }

    return maxReach >= n - 1; // Check if the last index is reachable
};
