import LinkedList from "./linked_list";

/**
 * Stack (LIFO) using a Linked List as basis
 */
class Stack {
  constructor() {
    this._elements = new LinkedList();

    Object.defineProperty(this, "length", {
      get: () => this._elements.length,
    });
  }

  isEmpty() {
    return this._elements.isEmpty();
  }

  /**
   * Adds element to the top of the stack
   */
  push(e) {
    this._elements.add(e);
  }

  /**
   * Pops the element from the top of the stack
   */
  pop() {
    if (this.isEmpty()) {
      throw new Error("Empty queue");
    }

    const e = this._elements.tail;
    this._elements.delNode(e);
    return e.value;
  }

  peek() {
    if (this.isEmpty()) {
      throw new Error("Empty queue");
    }

    return this._elements.tail.value;
  }
}

export default Stack;
