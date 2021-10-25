/**
Segment Tree

Segment Tree helps to perform various function over a range efficiently
in O(log n) time.

In addition to functions that can be implemented by Fenwick Tree,
Segment Tree can even perform functions such as minimum or maximum
over a range, which cannot be answered by Fenwick Tree.

More complicated functions can be done in logarithmic time by doing
lazy modification, however the implementation depends on type of function
and hence is not implemented here.

Segment Tree is similiar to binary tree. The element value is stored in
leaf nodes and value of function from range[l,r] is stored in internal nodes.

The root node i.e. index 1 stores the value by performing function over
entire range. Similarly other index stores value by performing function
in range of its subtree.
*/

class SegmentTree {
  constructor(length) {
    this._size = length;
    this._elementsSum = new Array(length * 2);
    this._elementsMin = new Array(length * 2);
    this._elementsMax = new Array(length * 2);

    for (let i = 0; i < this._size; i++) {
      this._elementsSum[i] = 0;
      this._elementsMin[i] = 0;
      this._elementsMax[i] = 0;
    }
  }

  /**
  Updates the value at index with the given value
  */
  modify(position, value) {
    let index = position + this._size;

    this._elementsSum[index] = value;
    this._elementsMin[index] = value;
    this._elementsMax[index] = value;

    for (let i = index; i > 1; i >>= 1) {
      this._elementsSum[i >> 1] =
        this._elementsSum[i] + this._elementsSum[i ^ 1];

      this._elementsMin[i >> 1] = Math.min(
        this._elementsMin[i],
        this._elementsMin[i ^ 1]
      );

      this._elementsMax[i >> 1] = Math.max(
        this._elementsMax[i],
        this._elementsMax[i ^ 1]
      );
    }
  }

  /*
  code is taken from suggestion by @juanplopes.

  calculate performs the binary operation (addition, maximum, minimum) over
  the index containing the query range [from,to] and stores the value in ans
  */
  calculate(from, to, where, initialValue, binaryFunction) {
    let ans = initialValue;
    let startIdx = from + this._size;
    let endIdx = to + this._size + 1;
    for (; startIdx < endIdx; startIdx >>= 1, endIdx >>= 1) {
      if (startIdx & 1) ans = binaryFunction(ans, where[startIdx++]);
      if (endIdx & 1) ans = binaryFunction(ans, where[--endIdx]);
    }
    return ans;
  }

  /**
  Return the sum of all elements in the range [from, to]
  */
  getSum(from, to) {
    return this.calculate(from, to, this._elementsSum, 0, (a, b) => a + b);
  }

  /**
  Return the minimum of all elements in the range [from, to]
  */
  getMin(from, to) {
    return this.calculate(
      from,
      to,
      this._elementsMin,
      Number.MAX_SAFE_INTEGER,
      Math.min
    );
  }

  /**
  Return the maximum of all elements in the range [from, to]
  */
  getMax(from, to) {
    return this.calculate(
      from,
      to,
      this._elementsMax,
      Number.MIN_SAFE_INTEGER,
      Math.max
    );
  }
}

export default SegmentTree;
