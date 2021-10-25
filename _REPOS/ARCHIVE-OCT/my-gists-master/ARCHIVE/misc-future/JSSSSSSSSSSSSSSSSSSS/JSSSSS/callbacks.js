// https://i.imgur.com/3vrblsw.png

getData((a) => {
  getMoreData(a, (b) => {
    getMoreData(b, (c) => {
      getMoreData(c, (d) => {
        getMoreData(d, (e) => {
          console.log(e);
        });
      });
    });
  });
});
