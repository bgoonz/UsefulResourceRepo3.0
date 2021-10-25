import HashTable from "./hash_table";

/**
 * Typical representation of a mathematical set
 * No restriction on element types
 *   i.e. set.add(1,'a', "b", { "foo" : "bar" })
 */
class HashSet {
  constructor(...args) {
    this._elements = new HashTable(args.length);
    this.add(...args);

    Object.defineProperty(this, "size", {
      get() {
        return this._elements.size;
      },
    });
  }

  add(...args) {
    for (let i = 0; i < args.length; i++) {
      this._elements.put(args[i], true);
    }
    return this;
  }

  remove(...args) {
    for (let i = 0; i < args.length; i++) {
      this._elements.del(args[i]);
    }
    return this;
  }

  contains(e) {
    return typeof this._elements.get(e) !== "undefined";
  }

  forEach(fn) {
    this._elements.forEach(fn);
  }
}

export default HashSet;
