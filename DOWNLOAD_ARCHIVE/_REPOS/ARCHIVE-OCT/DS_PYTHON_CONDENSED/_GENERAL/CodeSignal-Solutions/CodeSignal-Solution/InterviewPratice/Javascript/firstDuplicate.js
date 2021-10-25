// Takes an array of integers and returns the first value to appear twice in the array.

function firstDuplicate(a) {
  for (let i = 0; i < a.length; i++) {
    if (a[Math.abs(a[i]) - 1] < 0) return Math.abs(a[i]);
    a[Math.abs(a[i]) - 1] = -a[Math.abs(a[i]) - 1];
  }
  return -1;
}
console.log(firstDuplicate([2, 1, 3, 5, 3, 2]));
