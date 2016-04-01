// Leetcode 136
// Language: Javascript
// Problem: https://leetcode.com/problems/single-number/
// Author: Bilong HUANG
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    for (i=1; i<nums.length; i++) {
        nums[0] ^= nums[i];
    }
    return nums[0];
};
