/*
Given a string, find the length of the longest substring without repeating characters.

Example 1:
Input: "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.

Example 2:
Input: "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.

Example 3:
Input: "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
*/

// Iterate over the string, finding substrings which are unique. 
// Brute force:
// push each char into an array, only push if it doesn't exist.
//  (that way you know they're unique)
// using indexOf instead of .includes is faster as you don't have to scan the whole array.
// do the length check when you push a new number into the array, so the else case 
//  (if the value already exists in seen) just takes care of resetting the seen array ->
//  (reset the array to emtpy, then push the current value to start over)



var lengthOfLongestSubstring = function (s) {
  var seen = [];
  var maxLength = 0;

  for (var i = 0; i < s.length; i++) {
    if (seen.indexOf(s[i]) === -1) {
      seen.push(s[i]);
      if (seen.length > maxLength) maxLength = seen.length;
    } else {
      seen = seen.slice(seen.indexOf(s[i]) + 1, seen.length)
      seen.push(s[i]);
    }
  }
  return maxLength;
};

// console.log(lengthOfLongestSubstring("abcabcbb"))
// console.log(lengthOfLongestSubstring("bbbbbbb"))
// console.log(lengthOfLongestSubstring("pwwkew"))
console.log(lengthOfLongestSubstring("dvdf"))


var lengthWithTwoPointers = function (s) {
  let maxLength = 0;
  let left;
  let right;
  let chars = []

  if (s.length < 2) return s.length;

  for (left = 0, right = 1; right < s.length; right++) {
    let i = s.lastIndexOf(s[right], right - 1);
    if (i >= 0) {
      maxLength = Math.max(maxLength, right - left);
      left = Math.max(left, i + 1);
    }
  }
  return Math.max(maxLength, right - left);
}

// console.log(lengthWithTwoPointers("abcabcbb"))

