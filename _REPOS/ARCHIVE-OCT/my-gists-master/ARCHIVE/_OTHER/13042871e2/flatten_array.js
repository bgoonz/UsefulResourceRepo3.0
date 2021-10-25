function flatten_array(arr) {
  var i;

  for (i = 0; i < arr.length; ) {
    if (Object.prototype.toString.call(arr[i]) == "[object Array]") {
      // prepend `splice()` arguments to `tmp` array, to enable `apply()` call
      arr.splice.apply(arr, [i, 1].concat(arr[i]));
      continue;
    }
    i++;
  }

  return arr;
}

flatten_array([1, 2, [3, [4, 5], [], 6, [[[7]]]]]); // [1,2,3,4,5,6,7]
