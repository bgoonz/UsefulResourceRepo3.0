!(function (r) {
  function e(n) {
    if (t[n]) return t[n].exports;
    var o = (t[n] = { i: n, l: !1, exports: {} });
    return r[n].call(o.exports, o, o.exports, e), (o.l = !0), o.exports;
  }
  var t = {};
  (e.m = r),
    (e.c = t),
    (e.d = function (r, t, n) {
      e.o(r, t) ||
        Object.defineProperty(r, t, {
          configurable: !1,
          enumerable: !0,
          get: n,
        });
    }),
    (e.n = function (r) {
      var t =
        r && r.__esModule
          ? function () {
              return r.default;
            }
          : function () {
              return r;
            };
      return e.d(t, "a", t), t;
    }),
    (e.o = function (r, e) {
      return Object.prototype.hasOwnProperty.call(r, e);
    }),
    (e.p = ""),
    e((e.s = 0));
})([
  function (r, e) {
    var t = "Hello";
    (t += " World"), document.write("<h1>" + t + "</h1>");
  },
]);
