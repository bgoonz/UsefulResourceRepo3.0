/*
Given an array of characters, compress it in-place.

The length after compression must always be smaller than or equal to the original array.

Every element of the array should be a character (not int) of length 1.

After you are done modifying the input array in-place, return the new length of the array.


Follow up:
Could you solve it using only O(1) extra space?


Example 1:

Input:
["a","a","b","b","c","c","c"]

Output:
Return 6, and the first 6 characters of the input array should be: ["a","2","b","2","c","3"]

Explanation:
"aa" is replaced by "a2". "bb" is replaced by "b2". "ccc" is replaced by "c3".


Example 2:

Input:
["a"]

Output:
Return 1, and the first 1 characters of the input array should be: ["a"]

Explanation:
Nothing is replaced.


Example 3:

Input:
["a","b","b","b","b","b","b","b","b","b","b","b","b"]

Output:
Return 4, and the first 4 characters of the input array should be: ["a","b","1","2"].

Explanation:
Since the character "a" does not repeat, it is not compressed. "bbbbbbbbbbbb" is replaced by "b12".
Notice each digit has it's own entry in the array.
*/

// needs to be done in place, so as you iterate you will need to keep track of how many of that char you've seen.
// if no repeat, leave char as is
// if it does repeat, leave first char as is, then follow it with the number of occurences.
// note that if the number is 10 or greater, it is treated as two different digits in the array.
// return the length of the final array.

var compress = function(chars) {
  let count = 1;
  for (let i = chars.length - 2; i >= 0; i--) {
    if (chars[i] === chars[i + 1]) {
      count++;
    } else if (count > 1) {
      chars.splice(i + 2, count - 1, ...count.toString().split(''));  
      count = 1;
    }
  }

  if (count > 10) {
    chars.splice(1, count - 1, ...count.toString().split(''));   
  }
  return chars;
};

console.log(compress(["a", "a", "b", "b", "c", "c", "c"]))
// console.log(compress(["a"])), 
// console.log(compress(["a", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b"]))