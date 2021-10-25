import { MinHeap } from "./heap";

/**
 * Extends the MinHeap with the only difference that
 * the heap operations are performed based on the priority of the element
 * and not on the element itself
 */
class PriorityQueue extends MinHeap {
  constructor(initialItems) {
    super((a, b) => (this.priority(a) < this.priority(b) ? -1 : 1));

    this._priority = {};

    initialItems = initialItems || {};
    Object.keys(initialItems).forEach((item) => {
      this.insert(item, initialItems[item]);
    });
  }

  insert(item, priority) {
    if (this._priority[item] !== undefined) {
      return this.changePriority(item, priority);
    }
    this._priority[item] = priority;
    super.insert(item);
  }

  extract(withPriority) {
    const min = MinHeap.prototype.extract.call(this);
    return withPriority
      ? min && { item: min, priority: this._priority[min] }
      : min;
  }

  priority(item) {
    return this._priority[item];
  }

  changePriority(item, priority) {
    this._priority[item] = priority;
    this.heapify();
  }
}

export default PriorityQueue;
