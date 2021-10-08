you're not supposed to, but...
==========================

it's all gonna be fine.

```javascript
npm install dirtyjs
```
```javascript
require("dirty")
[1,2,2,3].uniq()
//[1,2,3]
```

or in the browser:
````javascript
<script src="https://rawgit.com/spencermountain/Dirty.js/master/build/dirty.min.js"></script>
<script>
  [1,2,3].sum()
  // 6
</script>
````

### Salacious Methods of questionable value
```javascript
  var arr=[1,2,2,3]
  arr.topk()
  //[{"value":"2","count":2},{"value":"1","count":1},{"value":"3","count":1}]
  arr.topkp()
  //[{"value":"2","count":2,"percentage":0.5},{"value":"1","count":1,"percentage":0.25},{"value":"3","count":1,"percentage":0.25}]
  arr.spigot(function(s){return s==2})
  //{"true":[2,2]
  //"false":[1,3]}
  arr.dupes()
  //[2]
  arr.uniq()
  //[1,2,3]
  arr.includes(2)
  //true
  arr.includes(20)
  //false
  arr.shuffle().length
  //arr.length
  arr.sum()
  //8
  arr.average()
  //2

  [1,[2],3].flatten()
  //[1,2,3]
  [1,2,null,3].compact()
  //[1,2,3]
  [1,1,1].random()
  //1

  var arr=[{id:1},{id:2},{id:2},{id:3}]
  arr.uniq('id')
  //[{"id":1},{"id":2},{"id":3}]
  arr.pluck('id')
  //[1,2,2,3]
  arr.average('id')
  //2

```