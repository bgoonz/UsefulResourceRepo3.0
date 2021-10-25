// Given an array of strings, group anagrams together
// all inputs will be lower case
// order of output doesn't matter

/*
Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
Output:
[
  ["ate","eat","tea"],
  ["nat","tan"],
  ["bat"]
]
*/

var groupAnagrams = function (strs) {
  let wordMap = {};

  for (let i = 0; i < strs.length; i++) {
    let key = strs[i].split("").sort().join("");
    if (!wordMap[key]) {
      wordMap[key] = [];
    }

    wordMap[key].push(strs[i])
  }

  return Object.values(wordMap)
};