function longestStringRecur(arr, i) {
  var longest = ''
  return (function iterateList(value, index) {
    while (index < arr.length) {
      longest = (longest > value || longest === value) ? longest : value
      iterateList(arr[index++], arr.indexOf(index++)) 
    }
    return longest
  })(arr[i], 0)
}