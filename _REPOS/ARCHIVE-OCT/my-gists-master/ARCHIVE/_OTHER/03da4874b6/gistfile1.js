// WeakerMap holds both keys and values weakly

class WeakerMap extends WeakMap {
  set(key, val) {
    super.set(key, new WeakSet().add(val));
    return this;
  }
  get(key) {
    var [val] = [...super.get(key)]; // this doesn't work since WeakMap isn't iterable :(
    return val;
  }
  // ...
}
