function* a() {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  return 5;
}

for (var v of a()) {
  console.log(v);
}

// Gets:
//   1
//   2
//   3
//   4

// 5 gets discarded due to semantics of `for..of` loop
