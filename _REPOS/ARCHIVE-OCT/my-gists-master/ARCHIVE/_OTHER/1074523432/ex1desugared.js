// ex1 desugared to:

var i = 2,
  j = 3;
{
  let $i = i + 1,
    $j = $i + j + 1;
  for (; $i <= $j; $i++) {
    let i = $i,
      j = $j;
    console.log(i);
  }
}
// 3
// 4
// 5
// 6
// 7
