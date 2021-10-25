getData()
  .then((a) => getMoreData(a))
  .then((b) => getMoreData(b))
  .then((c) => getMoreData(c))
  .then((d) => getMoreData(d))
  .then((e) => console.log(e));
