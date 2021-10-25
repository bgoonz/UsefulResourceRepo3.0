class SetOfStacks {
  constructor(capacity) {
    this.capacity = capacity;
    this.stacks = [[]];
    this.stackIndex = 0;
  }

  length() {
    return this.stacks.length;
  }

  push(item) {
    if (this.stacks[this.stackIndex].length < this.capacity ){
      this.stacks[this.stackIndex].push(item);
    } else {
      this.stacks.push([]);
      this.stackIndex += 1;
      this.stacks[this.stackIndex].push(item)
    }
  }

  pop(){
    const poppedItem = this.stacks[this.stackIndex].pop();
    if (!this.stacks[this.stackIndex].length) {
      this.stacks.pop();
      this.stackIndex -= 1;
    }
    return poppedItem;
  }
}
