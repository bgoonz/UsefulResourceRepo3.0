A JavaScript implementation of Binary Indexed Tree with fast initialization

Binary Indexed Tree also known as Fenwick tree is a data structure providing efficient methods for calculation and manipulation of the prefix sums of a table of values.

This JavaScript implementation is based on the Top Coder article by boba5551. Most of the terms respect to the author's definition except for

All indexes in the public API are 0 based
There's another implementation by berlysia. Comparing to that, this one is faster for creation. The constructor accepts a defaultFrequency option, which initializes all frequencies in O(1) time complexity.

Installation
$ npm install --save fast-binary-indexed-tree
Usage
Refer to the document for details.

var BinaryIndexedTree = require('fast-binary-indexed-tree');

var bit = new BinaryIndexedTree({ defaultFrequency: 10, maxVal: 10 });

// Read a single frequency
// Output: 10
console.log(bit.readSingle(3));

// Update the frequency by delta
// Output: 15
bit.update(2, 5);
console.log(bit.readSingle(2));

// Write a single frequency
// Output: 20
bit.writeSingle(3, 20);
console.log(bit.readSingle(3));

// Read the cumulated frequency
// Output: 55
console.log(bit.read(4));

// Find the lower bound
// Output: 3
console.log(bit.lowerBound(55));

// Find the upper bound
// Output: 4
console.log(bit.upperBound(55));
