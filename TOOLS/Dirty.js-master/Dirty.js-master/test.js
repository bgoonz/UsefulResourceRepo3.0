//load in methods if using node, otherwise assume
if (typeof module !== "undefined" && module.exports) {
  require("./dirty")
}

exports["array tests"] = function(test){
  var arr=[1,2,2,3]
  test.deepEqual(arr.topk(), [{"value":"2","count":2},{"value":"1","count":1},{"value":"3","count":1}])
  test.deepEqual(arr.topkp(), [{"value":"2","count":2,"percentage":0.5},{"value":"1","count":1,"percentage":0.25},{"value":"3","count":1,"percentage":0.25}])
  test.deepEqual(arr.spigot(function(s){return s==2}), {"true":[2,2], "false":[1,3]} )
  test.deepEqual(arr.dupes(), [2])
  test.deepEqual(arr.uniq(), [1,2,3])
  test.deepEqual(arr.includes(2), true)
  test.deepEqual(arr.includes(20), false)
  test.deepEqual(arr.shuffle().length, arr.length)
  test.deepEqual(arr.sum(), 8)
  test.deepEqual(arr.average(), 2)

  test.deepEqual([1, [2], 3].flatten(), [1,2,3])
  test.deepEqual([1, 2, null, 3].compact(), [1,2,3])
  test.deepEqual([1, 1, 1].random(), 1)

  var arr=[{id:1}, {id:2}, {id:2}, {id:3}]
  test.deepEqual(arr.uniq('id'), [{"id":1},{"id":2},{"id":3}])
  test.deepEqual(arr.pluck('id'), [1,2,2,3])
  test.deepEqual(arr.average('id'), 2)
  test.done()
}