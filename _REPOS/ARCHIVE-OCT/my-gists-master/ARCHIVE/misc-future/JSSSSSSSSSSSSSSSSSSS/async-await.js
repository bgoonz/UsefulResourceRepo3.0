//IIFE

(async () => {
  const a = await getData();
  const b = await getMoreData(a);
  const c = await getMoreData(b);
  const d = await getMoreData(c);
  const e = await getMoreData(d);
  console.log(e);
})();
