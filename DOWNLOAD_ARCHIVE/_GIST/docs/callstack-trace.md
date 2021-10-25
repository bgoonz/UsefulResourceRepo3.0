```
// Tracing the call stack:
flatten([1, "a", ["hello", ["world", "1"]]])
// create newArray = []
// iterate through each element:
// current element: 1
// element is not array, push into newArray
// newArray is now [1]
// current element: "a"
// element is not array, push into newArray
// newArray is now [1, "a"]
// current element: ["hello", ["world", "1"]]
// element is an array, call flatten on it:
flatten(["hello", ["world", "1"]])
// create newArray = []
// iterate through each element:
// current element: "hello"
// element is not array, push into newArray
// newArray is now ["hello"]
// current element: ["world", "1"]
// element is an array, call flatten on it:
flatten(["world", "1"])
// create newArray = []
// iterate through each element:
// current element: "world"
// element is not an array, push into newArray
// newArray is now ["world"]
// current element: "1"
// element is not an array, push into newArray
// newArray is now ["world", "1"]
// Finished iterating, return newArray
// spread elements of returned flatten into newArray
// newArray is now ["hello", "world", "1"]
// Finished iterating, return newArray
// spread elements of returned flatten into newArray
// newArray is now [1, "a", "hello", "world", "1"]
// Finished iterating, return newArray
```
