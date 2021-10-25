import LinkedList from "./linked_list";

/**
 * Queue (FIFO) using a Linked List as basis
 */
class Queue {
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
   * Adds element to the end of the queue
   */
  push(e) {
    this._elements.add(e);
  }

  /**
   * Pops the element in the beginning of the queue
   */
  pop() {
    if (this.isEmpty()) {
      throw new Error("Empty queue");
    }
    const e = this._elements.head;
    this._elements.delNode(e);
    return e.value;
  }

  peek() {
    if (this.isEmpty()) {
      throw new Error("Empty queue");
    }

    return this._elements.get(0);
  }
}

export default Queue;
