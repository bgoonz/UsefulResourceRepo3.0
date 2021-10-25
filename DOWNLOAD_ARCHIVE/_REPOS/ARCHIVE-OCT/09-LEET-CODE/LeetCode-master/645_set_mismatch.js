// a set originally contains numbers 1 to n, but this one accidentally has a duplicate/missing number
// given an array, find:
//    the number that is a duplicate
//    the number that is missing

var findErrorNums = function(nums) {
  let set = new Set();
  let result = [];

  for (let i = 0; i < nums.length; i++) {
    const currNum = nums[i];
    if (set.has(currNum)) {
      dups.push(currNum)
    } else {
      set.add(currNum)
    }
  }

  let numsSet = new Set(nums)
  let i = 1;
  while (i <= nums.length) {
    if (!numsSet.has(i)) {
      result.push(i)
      return result
    }
    i++
  }
}