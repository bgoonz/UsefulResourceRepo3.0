import mod from "../../src/data-structures/heap.js";
const Heap = mod.Heap;

describe("Heap", () => {
  "use strict";

  it("should be a constructor function", () => {
    expect(typeof Heap).toBe("function");
  });
  it("should have default comparison function", () => {
    const heap = new Heap();
    expect(typeof heap._cmp).toBe("function");
  });
  it("should add an object properly", () => {
    const heap = new Heap();
    heap.add(1);
    expect(heap._heap[0]).toBe(1);
  });
  it("should remove an object properly", () => {
    const heap = new Heap();
    heap.add(1);
    const res = heap.extract();
    expect(res).toBe(1);
    expect(heap._heap.length).toBe(0);
  });
  it("should add multiple nodes properly", () => {
    const heap = new Heap();
    heap.add(55);
    heap.add(11);
    heap.add(66);
    expect(heap._heap.indexOf(55)).toBeGreaterThan(-1);
    expect(heap._heap.indexOf(11)).toBeGreaterThan(-1);
    expect(heap._heap.indexOf(66)).toBeGreaterThan(-1);
  });
  it("should remove multiple nodes properly (max heap)", () => {
    const heap = new Heap();
    heap.add(55);
    heap.add(11);
    heap.add(66);
    let res = heap.extract();
    expect(res).toBe(66);
    res = heap.extract();
    expect(res).toBe(55);
    res = heap.extract();
    expect(res).toBe(11);
  });
  it("should remove multiple nodes properly (min heap)", () => {
    const heap = new Heap((a, b) => {
      return b - a;
    });
    heap.add(55);
    heap.add(11);
    heap.add(66);
    let res = heap.extract();
    expect(res).toBe(11);
    res = heap.extract();
    expect(res).toBe(55);
    res = heap.extract();
    expect(res).toBe(66);
  });
  it("should update top node properly", () => {
    const heap = new Heap(({ val }, { val }) => {
      return val - val;
    });
    const objectToUpdate = { val: 66 };
    heap.add(objectToUpdate);
    heap.add({ val: 11 });
    heap.add({ val: 55 });
    objectToUpdate.val = 0;
    heap.update(objectToUpdate);
    let res = heap.extract();
    expect(res.val).toBe(55);
    res = heap.extract();
    expect(res.val).toBe(11);
    res = heap.extract();
    expect(res.val).toBe(0);
  });
  it("should update bottom node properly", () => {
    const heap = new Heap(({ val }, { val }) => {
      return val - val;
    });
    const objectToUpdate = { val: 0 };
    heap.add(objectToUpdate);
    heap.add({ val: 11 });
    heap.add({ val: 55 });
    objectToUpdate.val = 66;
    heap.update(objectToUpdate);
    let res = heap.extract();
    expect(res.val).toBe(66);
    res = heap.extract();
    expect(res.val).toBe(55);
    res = heap.extract();
    expect(res.val).toBe(11);
  });
});
