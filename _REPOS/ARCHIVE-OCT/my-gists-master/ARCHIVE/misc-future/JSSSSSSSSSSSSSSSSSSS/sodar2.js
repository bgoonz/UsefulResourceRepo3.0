(function () {
  /*

     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
  "use strict";

  function aa(a) {
    var b = 0;
    return function () {
      return b < a.length
        ? {
            done: !1,
            value: a[b++],
          }
        : {
            done: !0,
          };
    };
  }
  var n =
    "function" == typeof Object.defineProperties
      ? Object.defineProperty
      : function (a, b, d) {
          if (a == Array.prototype || a == Object.prototype) return a;
          a[b] = d.value;
          return a;
        };

  function ba(a) {
    a = [
      "object" == typeof globalThis && globalThis,
      a,
      "object" == typeof window && window,
      "object" == typeof self && self,
      "object" == typeof global && global,
    ];
    for (var b = 0; b < a.length; ++b) {
      var d = a[b];
      if (d && d.Math == Math) return d;
    }
    throw Error("Cannot find global object");
  }
  var p = ba(this),
    q = "function" === typeof Symbol && "symbol" === typeof Symbol("x"),
    r = {},
    t = {};

  function v(a, b) {
    var d = t[b];
    if (null == d) return a[b];
    d = a[d];
    return void 0 !== d ? d : a[b];
  }

  function x(a, b, d) {
    if (b)
      a: {
        var c = a.split(".");
        a = 1 === c.length;
        var f = c[0],
          h;
        !a && f in r ? (h = r) : (h = p);
        for (f = 0; f < c.length - 1; f++) {
          var e = c[f];
          if (!(e in h)) break a;
          h = h[e];
        }
        c = c[c.length - 1];
        d = q && "es6" === d ? h[c] : null;
        b = b(d);
        null != b &&
          (a
            ? n(r, c, {
                configurable: !0,
                writable: !0,
                value: b,
              })
            : b !== d &&
              (void 0 === t[c] &&
                ((a = (1e9 * Math.random()) >>> 0),
                (t[c] = q ? p.Symbol(c) : "$jscp$" + a + "$" + c)),
              n(h, t[c], {
                configurable: !0,
                writable: !0,
                value: b,
              })));
      }
  }
  x(
    "Symbol",
    function (a) {
      function b(h) {
        if (this instanceof b)
          throw new TypeError("Symbol is not a constructor");
        return new d(c + (h || "") + "_" + f++, h);
      }

      function d(h, e) {
        this.g = h;
        n(this, "description", {
          configurable: !0,
          writable: !0,
          value: e,
        });
      }
      if (a) return a;
      d.prototype.toString = function () {
        return this.g;
      };
      var c = "jscomp_symbol_" + ((1e9 * Math.random()) >>> 0) + "_",
        f = 0;
      return b;
    },
    "es6"
  );
  x(
    "Symbol.iterator",
    function (a) {
      if (a) return a;
      a = (0, r.Symbol)("Symbol.iterator");
      for (
        var b =
            "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(
              " "
            ),
          d = 0;
        d < b.length;
        d++
      ) {
        var c = p[b[d]];
        "function" === typeof c &&
          "function" != typeof c.prototype[a] &&
          n(c.prototype, a, {
            configurable: !0,
            writable: !0,
            value: function () {
              return ca(aa(this));
            },
          });
      }
      return a;
    },
    "es6"
  );

  function ca(a) {
    a = {
      next: a,
    };
    a[v(r.Symbol, "iterator")] = function () {
      return this;
    };
    return a;
  }

  function da(a) {
    var b =
      "undefined" != typeof r.Symbol &&
      v(r.Symbol, "iterator") &&
      a[v(r.Symbol, "iterator")];
    return b
      ? b.call(a)
      : {
          next: aa(a),
        };
  }
  var ea =
      "function" == typeof Object.create
        ? Object.create
        : function (a) {
            function b() {}
            b.prototype = a;
            return new b();
          },
    y;
  if (q && "function" == typeof Object.setPrototypeOf)
    y = Object.setPrototypeOf;
  else {
    var z;
    a: {
      var fa = {
          a: !0,
        },
        ha = {};
      try {
        ha.__proto__ = fa;
        z = ha.a;
        break a;
      } catch (a) {}
      z = !1;
    }
    y = z
      ? function (a, b) {
          a.__proto__ = b;
          if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
          return a;
        }
      : null;
  }
  var A = y;

  function B(a, b) {
    a.prototype = ea(b.prototype);
    a.prototype.constructor = a;
    if (A) A(a, b);
    else
      for (var d in b)
        if ("prototype" != d)
          if (Object.defineProperties) {
            var c = Object.getOwnPropertyDescriptor(b, d);
            c && Object.defineProperty(a, d, c);
          } else a[d] = b[d];
    a.U = b.prototype;
  }

  function C() {
    this.l = !1;
    this.h = null;
    this.i = void 0;
    this.g = 1;
    this.A = this.s = 0;
    this.j = null;
  }

  function D(a) {
    if (a.l) throw new TypeError("Generator is already running");
    a.l = !0;
  }
  C.prototype.o = function (a) {
    this.i = a;
  };

  function E(a, b) {
    a.j = {
      O: b,
      P: !0,
    };
    a.g = a.s || a.A;
  }
  C.prototype.return = function (a) {
    this.j = {
      return: a,
    };
    this.g = this.A;
  };

  function F(a, b, d) {
    a.g = d;
    return {
      value: b,
    };
  }

  function ia(a) {
    this.g = new C();
    this.h = a;
  }

  function ja(a, b) {
    D(a.g);
    var d = a.g.h;
    if (d)
      return G(
        a,
        "return" in d
          ? d["return"]
          : function (c) {
              return {
                value: c,
                done: !0,
              };
            },
        b,
        a.g.return
      );
    a.g.return(b);
    return H(a);
  }

  function G(a, b, d, c) {
    try {
      var f = b.call(a.g.h, d);
      if (!(f instanceof Object))
        throw new TypeError("Iterator result " + f + " is not an object");
      if (!f.done) return (a.g.l = !1), f;
      var h = f.value;
    } catch (e) {
      return (a.g.h = null), E(a.g, e), H(a);
    }
    a.g.h = null;
    c.call(a.g, h);
    return H(a);
  }

  function H(a) {
    for (; a.g.g; )
      try {
        var b = a.h(a.g);
        if (b)
          return (
            (a.g.l = !1),
            {
              value: b.value,
              done: !1,
            }
          );
      } catch (d) {
        (a.g.i = void 0), E(a.g, d);
      }
    a.g.l = !1;
    if (a.g.j) {
      b = a.g.j;
      a.g.j = null;
      if (b.P) throw b.O;
      return {
        value: b.return,
        done: !0,
      };
    }
    return {
      value: void 0,
      done: !0,
    };
  }

  function ka(a) {
    this.next = function (b) {
      D(a.g);
      a.g.h ? (b = G(a, a.g.h.next, b, a.g.o)) : (a.g.o(b), (b = H(a)));
      return b;
    };
    this.throw = function (b) {
      D(a.g);
      a.g.h ? (b = G(a, a.g.h["throw"], b, a.g.o)) : (E(a.g, b), (b = H(a)));
      return b;
    };
    this.return = function (b) {
      return ja(a, b);
    };
    this[v(r.Symbol, "iterator")] = function () {
      return this;
    };
  }

  function I(a, b) {
    b = new ka(new ia(b));
    A && a.prototype && A(b, a.prototype);
    return b;
  }
  x(
    "Promise",
    function (a) {
      function b(e) {
        this.h = 0;
        this.i = void 0;
        this.g = [];
        this.s = !1;
        var g = this.j();
        try {
          e(g.resolve, g.reject);
        } catch (k) {
          g.reject(k);
        }
      }

      function d() {
        this.g = null;
      }

      function c(e) {
        return e instanceof b
          ? e
          : new b(function (g) {
              g(e);
            });
      }
      if (a) return a;
      d.prototype.h = function (e) {
        if (null == this.g) {
          this.g = [];
          var g = this;
          this.i(function () {
            g.l();
          });
        }
        this.g.push(e);
      };
      var f = p.setTimeout;
      d.prototype.i = function (e) {
        f(e, 0);
      };
      d.prototype.l = function () {
        for (; this.g && this.g.length; ) {
          var e = this.g;
          this.g = [];
          for (var g = 0; g < e.length; ++g) {
            var k = e[g];
            e[g] = null;
            try {
              k();
            } catch (l) {
              this.j(l);
            }
          }
        }
        this.g = null;
      };
      d.prototype.j = function (e) {
        this.i(function () {
          throw e;
        });
      };
      b.prototype.j = function () {
        function e(l) {
          return function (m) {
            k || ((k = !0), l.call(g, m));
          };
        }
        var g = this,
          k = !1;
        return {
          resolve: e(this.K),
          reject: e(this.l),
        };
      };
      b.prototype.K = function (e) {
        if (e === this)
          this.l(new TypeError("A Promise cannot resolve to itself"));
        else if (e instanceof b) this.M(e);
        else {
          a: switch (typeof e) {
            case "object":
              var g = null != e;
              break a;
            case "function":
              g = !0;
              break a;
            default:
              g = !1;
          }
          g ? this.J(e) : this.o(e);
        }
      };
      b.prototype.J = function (e) {
        var g = void 0;
        try {
          g = e.then;
        } catch (k) {
          this.l(k);
          return;
        }
        "function" == typeof g ? this.N(g, e) : this.o(e);
      };
      b.prototype.l = function (e) {
        this.A(2, e);
      };
      b.prototype.o = function (e) {
        this.A(1, e);
      };
      b.prototype.A = function (e, g) {
        if (0 != this.h)
          throw Error(
            "Cannot settle(" +
              e +
              ", " +
              g +
              "): Promise already settled in state" +
              this.h
          );
        this.h = e;
        this.i = g;
        2 === this.h && this.L();
        this.R();
      };
      b.prototype.L = function () {
        var e = this;
        f(function () {
          if (e.S()) {
            var g = p.console;
            "undefined" !== typeof g && g.error(e.i);
          }
        }, 1);
      };
      b.prototype.S = function () {
        if (this.s) return !1;
        var e = p.CustomEvent,
          g = p.Event,
          k = p.dispatchEvent;
        if ("undefined" === typeof k) return !0;
        "function" === typeof e
          ? (e = new e("unhandledrejection", {
              cancelable: !0,
            }))
          : "function" === typeof g
          ? (e = new g("unhandledrejection", {
              cancelable: !0,
            }))
          : ((e = p.document.createEvent("CustomEvent")),
            e.initCustomEvent("unhandledrejection", !1, !0, e));
        e.promise = this;
        e.reason = this.i;
        return k(e);
      };
      b.prototype.R = function () {
        if (null != this.g) {
          for (var e = 0; e < this.g.length; ++e) h.h(this.g[e]);
          this.g = null;
        }
      };
      var h = new d();
      b.prototype.M = function (e) {
        var g = this.j();
        e.B(g.resolve, g.reject);
      };
      b.prototype.N = function (e, g) {
        var k = this.j();
        try {
          e.call(g, k.resolve, k.reject);
        } catch (l) {
          k.reject(l);
        }
      };
      b.prototype.then = function (e, g) {
        function k(u, w) {
          return "function" == typeof u
            ? function (R) {
                try {
                  l(u(R));
                } catch (S) {
                  m(S);
                }
              }
            : w;
        }
        var l,
          m,
          T = new b(function (u, w) {
            l = u;
            m = w;
          });
        this.B(k(e, l), k(g, m));
        return T;
      };
      b.prototype.catch = function (e) {
        return this.then(void 0, e);
      };
      b.prototype.B = function (e, g) {
        function k() {
          switch (l.h) {
            case 1:
              e(l.i);
              break;
            case 2:
              g(l.i);
              break;
            default:
              throw Error("Unexpected state: " + l.h);
          }
        }
        var l = this;
        null == this.g ? h.h(k) : this.g.push(k);
        this.s = !0;
      };
      b.resolve = c;
      b.reject = function (e) {
        return new b(function (g, k) {
          k(e);
        });
      };
      b.race = function (e) {
        return new b(function (g, k) {
          for (var l = da(e), m = l.next(); !m.done; m = l.next())
            c(m.value).B(g, k);
        });
      };
      b.all = function (e) {
        var g = da(e),
          k = g.next();
        return k.done
          ? c([])
          : new b(function (l, m) {
              function T(R) {
                return function (S) {
                  u[R] = S;
                  w--;
                  0 == w && l(u);
                };
              }
              var u = [],
                w = 0;
              do
                u.push(void 0),
                  w++,
                  c(k.value).B(T(u.length - 1), m),
                  (k = g.next());
              while (!k.done);
            });
      };
      return b;
    },
    "es6"
  );
  x(
    "Array.from",
    function (a) {
      return a
        ? a
        : function (b, d, c) {
            d =
              null != d
                ? d
                : function (g) {
                    return g;
                  };
            var f = [],
              h =
                "undefined" != typeof r.Symbol &&
                v(r.Symbol, "iterator") &&
                b[v(r.Symbol, "iterator")];
            if ("function" == typeof h) {
              b = h.call(b);
              for (var e = 0; !(h = b.next()).done; )
                f.push(d.call(c, h.value, e++));
            } else
              for (h = b.length, e = 0; e < h; e++) f.push(d.call(c, b[e], e));
            return f;
          };
    },
    "es6"
  );
  x(
    "Promise.allSettled",
    function (a) {
      function b(c) {
        return {
          status: "fulfilled",
          value: c,
        };
      }

      function d(c) {
        return {
          status: "rejected",
          reason: c,
        };
      }
      return a
        ? a
        : function (c) {
            var f = this;
            c = v(Array, "from").call(Array, c, function (h) {
              return f.resolve(h).then(b, d);
            });
            return f.all(c);
          };
    },
    "es_2020"
  );
  var J = this || self;

  function K(a) {
    return a;
  }

  function L(a, b) {
    this.h = (a === M && b) || "";
    this.g = la;
  }

  function N(a) {
    return a instanceof L && a.constructor === L && a.g === la
      ? a.h
      : "type_error:Const";
  }
  var la = {},
    M = {};

  function O(a, b) {
    var d = void 0;
    return new (d || (d = r.Promise))(function (c, f) {
      function h(k) {
        try {
          g(b.next(k));
        } catch (l) {
          f(l);
        }
      }

      function e(k) {
        try {
          g(b["throw"](k));
        } catch (l) {
          f(l);
        }
      }

      function g(k) {
        k.done
          ? c(k.value)
          : new d(function (l) {
              l(k.value);
            }).then(h, e);
      }
      g((b = b.apply(a, void 0)).next());
    });
  }
  var P;

  function Q(a, b) {
    this.g = b === ma ? a : "";
  }
  Q.prototype.toString = function () {
    return this.g + "";
  };

  function na(a) {
    return a instanceof Q && a.constructor === Q
      ? a.g
      : "type_error:TrustedResourceUrl";
  }

  function oa(a, b) {
    var d = N(a);
    if (!pa.test(d)) throw Error("Invalid TrustedResourceUrl format: " + d);
    a = d.replace(qa, function (c, f) {
      if (!Object.prototype.hasOwnProperty.call(b, f))
        throw Error(
          'Found marker, "' +
            f +
            '", in format string, "' +
            d +
            '", but no valid label mapping found in args: ' +
            JSON.stringify(b)
        );
      c = b[f];
      return c instanceof L ? N(c) : encodeURIComponent(String(c));
    });
    return U(a);
  }
  var qa = /%{(\w+)}/g,
    pa =
      /^((https:)?\/\/[0-9a-z.:[\]-]+\/|\/[^/\\]|[^:/\\%]+\/|[^:/\\%]*[?#]|about:blank#)/i,
    ma = {};

  function U(a) {
    if (void 0 === P) {
      var b = null;
      var d = J.trustedTypes;
      if (d && d.createPolicy) {
        try {
          b = d.createPolicy("goog#html", {
            createHTML: K,
            createScript: K,
            createScriptURL: K,
          });
        } catch (c) {
          J.console && J.console.error(c.message);
        }
        P = b;
      } else P = b;
    }
    a = (b = P) ? b.createScriptURL(a) : a;
    return new Q(a, ma);
  }

  function ra(a) {
    var b,
      d = ((a.ownerDocument && a.ownerDocument.defaultView) || window).document;
    (b = (d =
      null === (b = d.querySelector) || void 0 === b
        ? void 0
        : b.call(d, "script[nonce]"))
      ? d.nonce || d.getAttribute("nonce") || ""
      : "") && a.setAttribute("nonce", b);
  }

  function V(a, b, d) {
    a.addEventListener && a.addEventListener(b, d, !1);
  }

  function sa(a, b) {
    var d = !1;
    d = void 0 === d ? !1 : d;
    return new r.Promise(function (c, f) {
      function h() {
        var g;
        e.onload = null;
        e.onerror = null;
        null === (g = e.parentElement) || void 0 === g
          ? void 0
          : g.removeChild(e);
      }
      var e = b.document.createElement("script");
      e.onload = function () {
        h();
        c();
      };
      e.onerror = function () {
        h();
        f(7);
      };
      e.type = "text/javascript";
      e.src = na(a);
      ra(e);
      d && "complete" !== b.document.readyState
        ? V(b, "load", function () {
            b.document.body.appendChild(e);
          })
        : b.document.body.appendChild(e);
    });
  }

  function ta(a, b) {
    var d = window;
    return new r.Promise(function (c) {
      void 0 === b && (b = d.document.createElement("iframe"));
      b.addEventListener("load", function () {
        c(b);
      });
      b.src = na(a).toString();
      b.width = "0";
      b.height = "0";
      b.style.display = "none";
      d.document.body.appendChild(b);
    });
  }

  function ua(a) {
    return new r.Promise(function (b) {
      setTimeout(function () {
        return void b(void 0);
      }, a);
    });
  }

  function W(a, b, d) {
    var c = window;
    c = void 0 === c ? window : c;
    this.I = b;
    this.h = c;
    this.m = void 0 === d ? 0 : d;
    this.i = oa(
      new L(M, "https://pagead2.googlesyndication.com/bg/%{basename}.js"),
      {
        basename: encodeURIComponent(a),
      }
    );
  }

  function va(a) {
    return O(a, function d() {
      var c = this;
      return I(d, function (f) {
        switch (f.g) {
          case 1:
            return F(f, wa(c), 2);
          case 2:
            return F(f, xa(c), 3);
          case 3:
            if (!(0 < c.m)) {
              f.g = 4;
              break;
            }
            return F(f, ua(c.m), 4);
          case 4:
            return f.return(ya(c));
        }
      });
    });
  }

  function wa(a) {
    return O(a, function d() {
      var c = this,
        f;
      return I(d, function (h) {
        f = document.createElement("iframe");
        f.style.display = "none";
        document.body.appendChild(f);
        if (!f.contentWindow) throw 3;
        c.h = f.contentWindow;
        return h.return(sa(c.i, c.h));
      });
    });
  }

  function xa(a) {
    return new r.Promise(function (b, d) {
      a.h.botguard && a.h.botguard.bg
        ? (a.g = new a.h.botguard.bg(a.I, b))
        : d(5);
    });
  }
  W.prototype.snapshotSync = function () {
    var a = void 0;
    if (
      this.g &&
      this.g.invoke &&
      (this.g.invoke(function (b) {
        a = b;
      }, !1),
      a)
    )
      return a;
    throw 6;
  };

  function ya(a) {
    return new r.Promise(function (b, d) {
      a.g && a.g.invoke
        ? a.g.invoke(function (c) {
            b(c);
          }, !0)
        : d(6);
    });
  }

  function za(a) {
    switch (a) {
      case "pt":
      case "cr":
        return a;
      default:
        return "";
    }
  }

  function Aa(a) {
    switch (a) {
      case "env":
      case "int":
        return a;
      default:
        return "env";
    }
  }

  function Ba() {
    var a = window.GoogleGcLKhOms;
    if (a && 0 < a.length && (a = a.shift()))
      return void 0 === a._rc_
        ? {
            context: za(a._ctx_),
            v: a._bgv_,
            u: a._bgp_,
            F: a._li_,
            D: a._jk_,
            G: Aa(a._st_),
            m: a._dl_,
            C: a._g2_,
          }
        : {
            context: za(a._ctx_),
            v: a._bgv_,
            u: a._bgp_,
            F: a._li_,
            D: a._jk_,
            G: Aa(a._st_),
            H: a._rc_,
            m: a._dl_,
            C: a._g2_,
          };
  }

  function Ca() {
    var a = window;
    if (a.GoogleDX5YKUSk) return a.GoogleDX5YKUSk[0];
    var b = new r.Promise(function (d) {
      a.GoogleDX5YKUSk = [b, d];
    });
    return b;
  }

  function Da() {
    return void 0 === window.GoogleGcLKhOms ? 13 : 1;
  }

  function X(a) {
    this.g = a;
  }

  function Ea(a) {
    this.g = a;
    var b = this;
    this.h = !1;
    var d = new MessageChannel();
    this.port = d.port1;
    this.i = new r.Promise(function (c) {
      b.port.onmessage = function () {
        c();
      };
      b.g.postMessage(
        "GoogleBasRYoCJlVEB",
        "https://tpc.googlesyndication.com",
        [d.port2]
      );
    });
  }
  B(Ea, X);

  function Fa(a, b) {
    return O(a, function c() {
      var f = this,
        h;
      return I(c, function (e) {
        return 1 == e.g
          ? ((h = f), F(e, f.i, 2))
          : e.return(
              new r.Promise(function (g, k) {
                var l = new MessageChannel();
                l.port1.onmessage = function (m) {
                  l.port1.close();
                  Array.isArray(m.data) ? g(m.data) : k(9);
                };
                h.port.postMessage(b, [l.port2]);
              })
            );
      });
    });
  }

  function Ga(a, b) {
    return O(a, function c() {
      var f = this,
        h;
      return I(c, function (e) {
        if (1 == e.g) return (e.s = 2), F(e, Fa(f, [1, b.T, b.I, b.m]), 4);
        if (2 != e.g)
          return (
            (h = e.i),
            e.return({
              response: h[0],
              error: h[1],
            })
          );
        e.s = 0;
        e.j = null;
        return e.return({
          error: 9,
        });
      });
    });
  }

  function Ha() {
    X.apply(this, arguments);
    this.h = !0;
  }
  B(Ha, X);

  function Ia(a, b) {
    Ja(a, void 0 === b ? null : b);
  }

  function Ja(a, b) {
    var d = window;
    d.google_image_requests || (d.google_image_requests = []);
    var c = d.document.createElement("img");
    if (b) {
      var f = function (h) {
        b && b(h);
        c.removeEventListener && c.removeEventListener("load", f, !1);
        c.removeEventListener && c.removeEventListener("error", f, !1);
      };
      V(c, "load", f);
      V(c, "error", f);
    }
    c.src = a;
    d.google_image_requests.push(c);
  }

  function Ka() {
    this.url =
      "https://pagead2.googlesyndication.com/pagead/gen_204?id=sodar2&v=224";
  }

  function Y(a, b, d) {
    a.url += "&" + b + "=" + encodeURIComponent(d.toString());
  }

  function La(a, b, d) {
    var c = new Ka(),
      f = void 0 === b || "0" !== b.C;
    (!1 !== d && f) ||
      (c.url =
        "https://pagead2.googlesyndication.com/pagead/sodar?id=sodar2&v=224");
    Y(c, "t", a);
    b && (Y(c, "li", b.F), Y(c, "cr" === b.context ? "bgai" : "jk", b.D));
    return c;
  }

  function Ma(a) {
    return new r.Promise(function (b) {
      Ia(a, function () {
        b();
      });
    });
  }

  function Na(a, b) {
    b = La(1, b);
    Y(b, "e", a);
    return Ma(b.url);
  }

  function Oa() {
    var a = this;
    this.promise = new r.Promise(function (b, d) {
      a.resolve = b;
      a.reject = d;
    });
  }

  function Z(a) {
    this.g = a;
    this.m = 0;
    this.m = Number(this.g.m) || 0;
  }

  function Pa(a) {
    return O(a, function d() {
      var c = this;
      return I(d, function (f) {
        if (1 == f.g) {
          if (Qa(c)) throw 7;
          c.h = new W(c.g.v, c.g.u, c.m);
          return F(f, wa(c.h), 2);
        }
        return F(f, xa(c.h), 0);
      });
    });
  }
  Z.prototype.snapshotSync = function () {
    if (this.h) return this.h.snapshotSync();
  };

  function Ra(a) {
    return O(a, function d() {
      var c = this;
      return I(d, function (f) {
        if (1 == f.g) {
          if (Qa(c)) var h = Sa(c);
          else (c.h = new W(c.g.v, c.g.u, c.m)), (h = va(c.h));
          return F(f, h, 2);
        }
        c.l = f.i;
        if (c.l) {
          h = c.g;
          var e = c.l,
            g = La(2, h, void 0 !== e);
          void 0 !== e && Y(g, "bg", e);
          h = 2e3 < g.url.length ? Na(4, h) : Ma(g.url);
          f = F(f, h, 0);
        } else (f.g = 0), (f = void 0);
        return f;
      });
    });
  }

  function Ta(a, b) {
    function d(h) {
      h &&
        null !== h.data &&
        "https://www.google.com" === h.origin &&
        null != h.source &&
        h.source === b.contentWindow &&
        ((a.i = "id=sodar2&v=224"),
        a.g &&
          ((a.i += "&li=" + encodeURIComponent(a.g.F.toString())),
          (a.i +=
            "&" +
            ("cr" === a.g.context ? "bgai" : "jk") +
            "=" +
            encodeURIComponent(a.g.D.toString())),
          h.source.postMessage(
            JSON.stringify({
              id: "sodar",
              params: a.i,
            }),
            "https://www.google.com"
          ),
          c.removeEventListener("message", d, !1)),
        f.resolve());
    }
    var c = window,
      f = new Oa();
    c.addEventListener("message", d, !1);
    return f.promise;
  }

  function Ua(a) {
    return O(a, function d() {
      var c = this,
        f,
        h,
        e,
        g,
        k;
      return I(d, function (l) {
        if (1 == l.g) {
          if ("y" !== c.g.H) return l.return();
          f = U(N(new L(M, "https://www.google.com/recaptcha/api2/aframe")));
          h = window.document.createElement("iframe");
          e = ta(f, h);
          g = Ta(c, h);
          return F(l, r.Promise.all([e, g]), 2);
        }
        k = l.i;
        if (null === k[0].contentWindow) throw 15;
        l.g = 0;
      });
    });
  }

  function Va(a) {
    return O(a, function d() {
      var c = this;
      return I(d, function (f) {
        return F(
          f,
          v(r.Promise, "allSettled").call(r.Promise, [Ra(c), Ua(c)]),
          0
        );
      });
    });
  }

  function Qa(a) {
    return "tpc.googlesyndication.com" === window.location.host ||
      "int" === a.g.G
      ? !1
      : !0;
  }

  function Sa(a) {
    return O(a, function d() {
      var c,
        f,
        h = this,
        e;
      return I(d, function (g) {
        if (1 == g.g)
          return (
            (c = U(
              N(
                new L(
                  M,
                  "https://tpc.googlesyndication.com/sodar/sodar2/224/runner.html"
                )
              )
            )),
            F(g, ta(c), 2)
          );
        if (4 != g.g) {
          f = g.i;
          if (!f.contentWindow) throw 3;
          var k = f.contentWindow;
          k = window.hasOwnProperty("MessageChannel") ? new Ea(k) : new Ha(k);
          h.j = k;
          if (h.j.h) {
            k = h.j.g;
            var l = k.postMessage;
            var m = h.g;
            m = JSON.stringify([
              m.context,
              m.v,
              m.u,
              m.F,
              m.D,
              m.G,
              void 0 === m.H ? "n" : m.H,
              void 0 === m.m ? "0" : m.m,
              void 0 === m.C ? "1" : m.C,
            ]);
            l.call(k, m, "https://tpc.googlesyndication.com");
            return g.return(void 0);
          }
          return F(
            g,
            Ga(h.j, {
              T: h.g.v,
              I: h.g.u,
              m: h.m,
            }),
            4
          );
        }
        e = g.i;
        f.parentNode && f.parentNode.removeChild(f);
        if (e.error) throw e.error;
        return g.return(e.response);
      });
    });
  }

  function Wa() {
    Z.apply(this, arguments);
  }
  B(Wa, Z);
  Wa.prototype.o = function () {
    return O(this, function b() {
      var d = this,
        c;
      return I(b, function (f) {
        if (1 == f.g) {
          if ("env" === d.g.G) return F(f, Va(d), 0);
          c = window;
          return c.GoogleA13IjpGc ? f.return() : F(f, Pa(d), 4);
        }
        c.GoogleA13IjpGc = d;
        f.g = 0;
      });
    });
  };

  function Xa() {
    Z.apply(this, arguments);
  }
  B(Xa, Z);
  Xa.prototype.o = function () {
    return O(this, function b() {
      var d = this;
      return I(b, function (c) {
        return F(c, Va(d), 0);
      });
    });
  };

  function Ya(a, b) {
    if ("number" === typeof a) b = Na(a, b);
    else {
      var d = La(3, b);
      Y(d, "c", "init");
      var c = a.toString();
      a.name && -1 == c.indexOf(a.name) && (c += ": " + a.name);
      a.message && -1 == c.indexOf(a.message) && (c += ": " + a.message);
      if (a.stack) {
        a = a.stack;
        try {
          -1 == a.indexOf(c) && (a = c + "\n" + a);
          for (var f; a != f; )
            (f = a),
              (a = a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/, "$1"));
          c = a.replace(/\n */g, "\n");
        } catch (h) {}
      }
      Y(d, "ex", c);
      b = 2e3 < d.url.length ? Na(11, b) : Ma(d.url);
    }
    return b;
  }

  function Za(a) {
    switch (a.context) {
      case "pt":
        a = new Xa(a);
        break;
      case "cr":
        a = new Wa(a);
        break;
      default:
        throw 2;
    }
    if (!window.postMessage && Qa(a)) throw 8;
    return a.o();
  }
  (function () {
    var a = Ba();
    try {
      return a
        ? Za(a)
        : r.Promise.race([
            Ca(),
            new r.Promise(function (b, d) {
              setTimeout(function () {
                d(Da());
              }, 5e3);
            }),
          ]).then(
            function () {
              a = Ba();
              if (!a) throw Da();
              return Za(a);
            },
            function (b) {
              return Ya(b, a);
            }
          );
    } catch (b) {
      return Ya(b, a);
    }
  })();
}.call(this));
