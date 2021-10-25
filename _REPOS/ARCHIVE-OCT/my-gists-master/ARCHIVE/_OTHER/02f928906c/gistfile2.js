function* foo() {
  yield 1;
  yield 2;
  yield 3;
  return 4;
}

for (var v of foo()) {
  console.log(v);
}
// 1 2 3

console.log(v); // still `3`, not `4` :(
