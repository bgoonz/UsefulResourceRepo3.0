// Reverse a string
// input is an array of characters
// cannot allocate space for a new array, must modify in place

var reverseString = function (s) {
  console.log(s.length);
  
  let max = Math.floor(s.length / 2);
  let i = s.length - 1
  for (let j = 0; j < max; j++) {
    [s[j], s[i]] = [s[i], s[j]]
    i--
  }
  return s
};

console.log(reverseString(["A", " ", "m", "a", "n", ",", " ", "a", " ", "p", "l", "a", "n", ",", " ", "a", " ", "c", "a", "n", "a", "l", ":", " ", "P", "a", "n", "a", "m", "a"]))