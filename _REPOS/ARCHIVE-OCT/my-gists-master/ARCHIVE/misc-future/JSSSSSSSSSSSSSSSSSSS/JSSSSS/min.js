/*! (c) 2018, Andrea Giammarchi, (ISC) */
var Flatted = (function (a, l) {
  return {
    parse: function (n, t) {
      var e = JSON.parse(n, i).map(f),
        r = e[0],
        u = t || s,
        c =
          "object" == typeof r && r
            ? (function u(c, f, n, i) {
                return Object.keys(n).reduce(function (n, t) {
                  var e = n[t];
                  if (e instanceof a) {
                    var r = c[e];
                    "object" != typeof r || f.has(r)
                      ? (n[t] = i.call(n, t, r))
                      : (f.add(r), (n[t] = i.call(n, t, u(c, f, r, i))));
                  } else n[t] = i.call(n, t, e);
                  return n;
                }, n);
              })(e, new Set(), r, u)
            : r;
      return u.call({ "": c }, "", c);
    },
    stringify: function (n, e, t) {
      for (
        var r,
          u = new Map(),
          c = [],
          f = [],
          i =
            e && typeof e == typeof c
              ? function (n, t) {
                  if ("" === n || -1 < e.indexOf(n)) return t;
                }
              : e || s,
          a = +p(u, c, i.call({ "": n }, "", n)),
          o = function (n, t) {
            if (r) return (r = !r), t;
            var e = i.call(this, n, t);
            switch (typeof e) {
              case "object":
                if (null === e) return e;
              case l:
                return u.get(e) || p(u, c, e);
            }
            return e;
          };
        a < c.length;
        a++
      )
        (r = !0), (f[a] = JSON.stringify(c[a], o, t));
      return "[" + f.join(",") + "]";
    },
  };
  function s(n, t) {
    return t;
  }
  function p(n, t, e) {
    var r = a(t.push(e) - 1);
    return n.set(e, r), r;
  }
  function f(n) {
    return n instanceof a ? a(n) : n;
  }
  function i(n, t) {
    return typeof t === l ? new a(t) : t;
  }
})(String, "string");
