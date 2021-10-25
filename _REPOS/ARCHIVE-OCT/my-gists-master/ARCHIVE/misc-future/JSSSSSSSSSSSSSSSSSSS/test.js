function expandedNums(num) {
  /*  turn the number in to a string then split it and reduce it via an array testing function
   **  c = current value, n = new value, i = index / itteration, arr = the array to form on
   **  and if the array at itteration of i is equal to zero the return current value + new value
   **  otherwise return the current value + '0' repeated by
   **  (the length of the array - the itteration) + ' + ' + the next value
   */
  return num
    .toString()
    .split("")
    .reduce((c, n, i, a) => {
      if (a[i] === "0") {
        return c + n;
      }
      return c + "0".repeat(a.length - i) + " + " + n;
    });
}

expandedNums(562); // ==> '500 + 60 + 2'

console.log(expandedNums(70802)); // ==> 70000 + 800 + 2
