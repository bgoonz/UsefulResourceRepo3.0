/*
Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

Example 1:

Input: "babad"
Output: "bab"
Note: "aba" is also a valid answer.
Example 2:

Input: "cbbd"
Output: "bb"
*/

var longestPalindrome = function (s) {
  var longest = '';
  var current = '';
  var start = 0;
  var end = 1;

  var checkPalindrome = function(start, end) {
    while (s[start] === s[end] && start >= 0 && end < s.length) {
      current = s.slice(start, end + 1);
      start--;
      end++;
    }
    if (current.length > longest.length) {
      longest = current;
    }
    return;
  }
  
  while (end < s.length) {
    if (s[start] === s[end + 1]) {
      checkPalindrome(start, end + 1);
    } else if (s[start] === s[end]) {
      checkPalindrome(start, end);
    }
    start++;
    end++;
  }
  return longest;
};




console.log(longestPalindrome("babad"))
// console.log(checkPalindrome("babad", 0, 1))