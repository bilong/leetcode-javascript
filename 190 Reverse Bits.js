// Leetcode #190
// Language: Javascript
// Problem: https://leetcode.com/problems/reverse-bits/
// Author: Bilong HUANG
/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    var s = n.toString(2).split(""), c="";
    
    for(i=0; i<32; i++){
        if ((s[s.length-1-i] == "0") || (s[s.length-1-i] == "1"))
            c = c + s[s.length-1-i];
        else c = c + "0";
    }
    
    return parseInt(c, 2);
};
