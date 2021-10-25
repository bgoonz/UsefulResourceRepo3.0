"use strict";
/**
 * Doubly-linked list
 */
class LinkedList {
  constructor() {
    this._length = 0;
    this.head = null;
    this.tail = null;
    Object.defineProperty(this, "length", {
      get: () => {
        return this._length;
      },
    });
  }
  /**
   * Whether the list is empty
   *
   * @return Boolean
   */
  isEmpty() {
    return this.length === 0;
  }
  /**
   * Adds the element to the end of the list or to the desired index
   *
   * @param { Object } n
   * @param { Number } index
   */
  add(n, index) {
    if (index > this.length || index < 0) {
      throw new Error("Index out of bounds");
    }
    const node = new Node(n);
    if (index !== undefined && index < this.length) {
      let prevNode;
      let nextNode;
      if (index === 0) {
        nextNode = this.head;
        this.head = node;
      } else {
        nextNode = this.getNode(index);
        prevNode = nextNode.prev;
        prevNode.next = node;
        node.prev = prevNode;
      }
      nextNode.prev = node;
      node.next = nextNode;
    } else {
      if (!this.head) this.head = node;
      if (this.tail) {
        this.tail.next = node;
        node.prev = this.tail;
      }
      this.tail = node;
    }
    this._length++;
  }
  /**
   * Return the value associated to the Node on the given index
   *
   * @param { Number } index
   * @return misc
   */
  get(index) {
    return this.getNode(index).value;
  }
  /**
   * O(n) get
   *
   * @param { Number } index
   * @return Node
   */
  getNode(index) {
    if (index >= this.length || index < 0) {
      throw new Error("Index out of bounds");
    }
    let node = this.head;
    for (let i = 1; i <= index; i++) {
      node = node.next;
    }
    return node;
  }
  /**
   * Delete the element in the indexth position
   *
   * @param { Number } index
   */
  del(index) {
    if (index >= this.length || index < 0) {
      throw new Error("Index out of bounds");
    }
    this.delNode(this.getNode(index));
  }
  delNode(node) {
    if (node === this.tail) {
      this.tail = node.prev;
    } else {
      node.next.prev = node.prev;
    }
    if (node === this.head) {
      this.head = node.next;
    } else {
      node.prev.next = node.next;
    }
    this._length--;
  }
  /**
   * Performs the fn function with each element in the list
   */
  forEach(fn) {
    let node = this.head;
    while (node) {
      fn(node.value);
      node = node.next;
    }
  }
}
/**
 * A linked list node
 */
function Node(value) {
  this.value = value;
  this.prev = null;
  this.next = null;
}
class HashTable {
  constructor(initialCapacity) {
    this._table = new Array(initialCapacity || 64);
    this._items = 0;
    Object.defineProperty(this, "capacity", {
      get() {
        return this._table.length;
      },
    });
    Object.defineProperty(this, "size", {
      get() {
        return this._items;
      },
    });
  }
  /**
   * (Same algorithm as Java's String.hashCode)
   * Returns a hash code for this string. The hash code for a String object is
   * computed as: s[0]*31^(n-1) + s[1]*31^(n-2) + ... + s[n-1]
   * using int arithmetic, where s[i] is the ith character of the string,
   * n is the length of the string, and ^ indicates exponentiation.
   * (The hash value of the empty string is zero.)
   */
  hash(s) {
    if (typeof s !== "string") s = JSON.stringify(s);
    let hash = 0;
    for (let i = 0; i < s.length; i++) {
      hash = (hash << 5) - hash + s.charCodeAt(i);
      hash &= hash;
    }
    return hash;
  }
  get(key) {
    const i = this._position(key);
    let node;
    if ((node = this._findInList(this._table[i], key))) {
      return node.value.v;
    }
  }
  put(key, value) {
    const i = this._position(key);
    if (!this._table[i]) {
      this._table[i] = new LinkedList();
    }
    const item = { k: key, v: value };
    const node = this._findInList(this._table[i], key);
    if (node) {
      node.value = item;
    } else {
      this._table[i].add(item);
      this._items++;
      if (this._items === this.capacity) this._increaseCapacity();
    }
  }
  del(key) {
    const i = this._position(key);
    let node;
    if ((node = this._findInList(this._table[i], key))) {
      this._table[i].delNode(node);
      this._items--;
    }
  }
  _position(key) {
    return Math.abs(this.hash(key)) % this.capacity;
  }
  _findInList(list, key) {
    let node = list && list.head;
    while (node) {
      if (node.value.k === key) return node;
      node = node.next;
    }
  }
  _increaseCapacity() {
    const oldTable = this._table;
    this._table = new Array(2 * this.capacity);
    this._items = 0;
    for (let i = 0; i < oldTable.length; i++) {
      let node = oldTable[i] && oldTable[i].head;
      while (node) {
        this.put(node.value.k, node.value.v);
        node = node.next;
      }
    }
  }
  forEach(fn) {
    const applyFunction = (linkedList) => {
      linkedList.forEach(({ k, v }) => {
        fn(k, v);
      });
    };
    for (let i = 0; i < this._table.length; i++) {
      if (this._table[i]) {
        applyFunction(this._table[i]);
      }
    }
  }
}
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
    return this._elements.get(e) !== undefined;
  }
  forEach(fn) {
    this._elements.forEach(fn);
  }
}
class Graph {
  constructor(directed) {
    this.directed = directed === undefined ? true : !!directed;
    this.adjList = Object.create(null);
    this.vertices = new HashSet();
  }
  addVertex(v) {
    v = _(v);
    if (this.vertices.contains(v)) {
      throw new Error(`Vertex "${v}" has already been added`);
    }
    this.vertices.add(v);
    this.adjList[v] = Object.create(null);
  }
  addEdge(a, b, w) {
    a = _(a);
    b = _(b);
    w = w === undefined ? 1 : w;
    if (!this.adjList[a]) this.addVertex(a);
    if (!this.adjList[b]) this.addVertex(b);
    this.adjList[a][b] = (this.adjList[a][b] || 0) + w;
    if (!this.directed) {
      this.adjList[b][a] = (this.adjList[b][a] || 0) + w;
    }
  }
  neighbors(v) {
    return Object.keys(this.adjList[_(v)]);
  }
  edge(a, b) {
    return this.adjList[_(a)][_(b)];
  }
}
let _ = (v) => {
  return `${v}`;
};
export default Graph;
