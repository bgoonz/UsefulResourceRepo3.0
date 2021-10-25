// Given two arrays, find their intersection
// intersection is basically which numbers they have in common

// naive approach is to iterate through one array, and if the element:
//    is included in arr2
//    is not already in the results array
// push to results array
// but this is O(n * m) time, where n and m are the array lengths.

// instead, we want to create two sets
// find the common elements in each set
// return those
var intersection = function (nums1, nums2) {
  let set1 = new Set(nums1);
  let set2 = new Set(nums2);

  let res = [];
  if (set1.size < set2.size) {
    set1.forEach(s => {
      if (set2.has(s)) res.push(s)
    })
  } else {
    set2.forEach(s => {
      if (set1.has(s)) res.push(s)
    })
  }

  return res;
};;

console.log(intersection([1, 2, 3, 4], [2, 3, 6, 5]))
