var socket = io.connect("http://xx.yy.zz.ww");
socket.on("news", function (data, success) {
  console.log("DATA!");
  success("yes");
});
//socket.emit('my other event', { my: 'data' });
