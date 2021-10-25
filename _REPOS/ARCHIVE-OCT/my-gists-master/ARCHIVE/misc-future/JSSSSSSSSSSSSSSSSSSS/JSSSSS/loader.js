!(function (t) {
  var e = {};

  function n(o) {
    if (e[o]) return e[o].exports;
    var r = (e[o] = {
      i: o,
      l: !1,
      exports: {},
    });
    return t[o].call(r.exports, r, r.exports, n), (r.l = !0), r.exports;
  }
  (n.m = t),
    (n.c = e),
    (n.d = function (t, e, o) {
      n.o(t, e) ||
        Object.defineProperty(t, e, {
          enumerable: !0,
          get: o,
        });
    }),
    (n.r = function (t) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, {
          value: "Module",
        }),
        Object.defineProperty(t, "__esModule", {
          value: !0,
        });
    }),
    (n.t = function (t, e) {
      if ((1 & e && (t = n(t)), 8 & e)) return t;
      if (4 & e && "object" == typeof t && t && t.__esModule) return t;
      var o = Object.create(null);
      if (
        (n.r(o),
        Object.defineProperty(o, "default", {
          enumerable: !0,
          value: t,
        }),
        2 & e && "string" != typeof t)
      )
        for (var r in t)
          n.d(
            o,
            r,
            function (e) {
              return t[e];
            }.bind(null, r)
          );
      return o;
    }),
    (n.n = function (t) {
      var e =
        t && t.__esModule
          ? function () {
              return t.default;
            }
          : function () {
              return t;
            };
      return n.d(e, "a", e), e;
    }),
    (n.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (n.p = ""),
    n((n.s = 5));
})([
  function (t, e, n) {
    "use strict";
    e.a = function (t) {
      var e = this.constructor;
      return this.then(
        function (n) {
          return e.resolve(t()).then(function () {
            return n;
          });
        },
        function (n) {
          return e.resolve(t()).then(function () {
            return e.reject(n);
          });
        }
      );
    };
  },
  function (t, e) {
    var n;
    n = (function () {
      return this;
    })();
    try {
      n = n || new Function("return this")();
    } catch (t) {
      "object" == typeof window && (n = window);
    }
    t.exports = n;
  },
  function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0,
    });
    var o = function (t) {
      return t && "object" == typeof t;
    };
    (e.mergeDeep = function () {
      for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
      var r = {};
      return (
        t.forEach(function (t) {
          Object.keys(t).forEach(function (n) {
            var i = r[n],
              s = t[n];
            void 0 !== s &&
              (Array.isArray(i) || Array.isArray(s)
                ? (r[n] = s)
                : o(i) && o(s)
                ? (r[n] = e.mergeDeep(i, s))
                : (r[n] = s));
          });
        }),
        r
      );
    }),
      (e.getFrameDocument = function (t) {
        return (
          (t.contentWindow && t.contentWindow.document) || t.contentDocument
        );
      }),
      (e.resolveTargetElement = function (t) {
        return t instanceof Element
          ? t
          : "string" == typeof t
          ? document.getElementById(t)
          : document.getElementsByTagName("body")[0];
      }),
      (e.createScript = function (t, e) {
        var n = t.createElement("script");
        return (
          (n.type = "text/javascript"),
          (n.charset = "utf-8"),
          e && (n.src = e),
          n
        );
      }),
      (e.request = function (t) {
        var e = new XMLHttpRequest();
        return new Promise(function (n, o) {
          (e.onreadystatechange = function () {
            4 === e.readyState &&
              (e.status >= 200 && e.status < 300
                ? n(e.response)
                : o(new Error("Request failed with status " + e.status)));
          }),
            e.open("GET", t, !0),
            e.setRequestHeader("Content-Type", "text/plain"),
            e.send();
        });
      }),
      (e.parseJSON = function (t) {
        if (JSON.parse) return JSON.parse(t);
        if (JSON.decode) return JSON.decode(t);
        throw new Error("Unable to parse json.");
      });
  },
  function (t, e, n) {
    "use strict";
    var o =
        (this && this.__awaiter) ||
        function (t, e, n, o) {
          return new (n || (n = Promise))(function (r, i) {
            function s(t) {
              try {
                u(o.next(t));
              } catch (t) {
                i(t);
              }
            }

            function a(t) {
              try {
                u(o.throw(t));
              } catch (t) {
                i(t);
              }
            }

            function u(t) {
              t.done
                ? r(t.value)
                : new n(function (e) {
                    e(t.value);
                  }).then(s, a);
            }
            u((o = o.apply(t, e || [])).next());
          });
        },
      r =
        (this && this.__generator) ||
        function (t, e) {
          var n,
            o,
            r,
            i,
            s = {
              label: 0,
              sent: function () {
                if (1 & r[0]) throw r[1];
                return r[1];
              },
              trys: [],
              ops: [],
            };
          return (
            (i = {
              next: a(0),
              throw: a(1),
              return: a(2),
            }),
            "function" == typeof Symbol &&
              (i[Symbol.iterator] = function () {
                return this;
              }),
            i
          );

          function a(i) {
            return function (a) {
              return (function (i) {
                if (n) throw new TypeError("Generator is already executing.");
                for (; s; )
                  try {
                    if (
                      ((n = 1),
                      o &&
                        (r =
                          2 & i[0]
                            ? o.return
                            : i[0]
                            ? o.throw || ((r = o.return) && r.call(o), 0)
                            : o.next) &&
                        !(r = r.call(o, i[1])).done)
                    )
                      return r;
                    switch (((o = 0), r && (i = [2 & i[0], r.value]), i[0])) {
                      case 0:
                      case 1:
                        r = i;
                        break;
                      case 4:
                        return (
                          s.label++,
                          {
                            value: i[1],
                            done: !1,
                          }
                        );
                      case 5:
                        s.label++, (o = i[1]), (i = [0]);
                        continue;
                      case 7:
                        (i = s.ops.pop()), s.trys.pop();
                        continue;
                      default:
                        if (
                          !(r = (r = s.trys).length > 0 && r[r.length - 1]) &&
                          (6 === i[0] || 2 === i[0])
                        ) {
                          s = 0;
                          continue;
                        }
                        if (
                          3 === i[0] &&
                          (!r || (i[1] > r[0] && i[1] < r[3]))
                        ) {
                          s.label = i[1];
                          break;
                        }
                        if (6 === i[0] && s.label < r[1]) {
                          (s.label = r[1]), (r = i);
                          break;
                        }
                        if (r && s.label < r[2]) {
                          (s.label = r[2]), s.ops.push(i);
                          break;
                        }
                        r[2] && s.ops.pop(), s.trys.pop();
                        continue;
                    }
                    i = e.call(t, s);
                  } catch (t) {
                    (i = [6, t]), (o = 0);
                  } finally {
                    n = r = 0;
                  }
                if (5 & i[0]) throw i[1];
                return {
                  value: i[0] ? i[1] : void 0,
                  done: !0,
                };
              })([i, a]);
            };
          }
        };
    Object.defineProperty(e, "__esModule", {
      value: !0,
    });
    var i = n(2),
      s = !1,
      a = ["html:apply"],
      u = ["www.smartsupp.com", "app.smartsupp.com"],
      c = ["key"];
    (e.trackOperation = function (t, e) {
      return o(this, void 0, void 0, function () {
        return r(this, function (n) {
          switch (n.label) {
            case 0:
              if (
                !s ||
                !t.widgetTrackerUrl ||
                a.indexOf(e) >= 0 ||
                u.indexOf(window.location.hostname) >= 0
              )
                return [2, !1];
              n.label = 1;
            case 1:
              return (
                n.trys.push([1, 3, , 4]),
                [
                  4,
                  i.request(
                    t.widgetTrackerUrl +
                      "/track/operation?key=" +
                      t.key +
                      "&operation=" +
                      e +
                      "&domain=" +
                      window.location.hostname
                  ),
                ]
              );
            case 2:
              return n.sent(), [2, !0];
            case 3:
              return n.sent(), [2, !1];
            case 4:
              return [2];
          }
        });
      });
    }),
      (e.trackOptions = function (t, e) {
        return o(this, void 0, void 0, function () {
          var n;
          return r(this, function (o) {
            switch (o.label) {
              case 0:
                if (
                  !s ||
                  !t.widgetTrackerUrl ||
                  u.indexOf(window.location.hostname) >= 0
                )
                  return [2, !1];
                if (
                  0 ===
                  (n = e.filter(function (t) {
                    return c.indexOf(t) < 0;
                  })).length
                )
                  return [2, !1];
                o.label = 1;
              case 1:
                return (
                  o.trys.push([1, 3, , 4]),
                  [
                    4,
                    i.request(
                      t.widgetTrackerUrl +
                        "/track/options?key=" +
                        t.key +
                        "&options=" +
                        n.join(",") +
                        "&domain=" +
                        window.location.hostname
                    ),
                  ]
                );
              case 2:
                return o.sent(), [2, !0];
              case 3:
                return o.sent(), [2, !1];
              case 4:
                return [2];
            }
          });
        });
      });
  },
  function (t, e, n) {
    "use strict";
    (function (t) {
      var o = n(0),
        r = setTimeout;

      function i(t) {
        return Boolean(t && void 0 !== t.length);
      }

      function s() {}

      function a(t) {
        if (!(this instanceof a))
          throw new TypeError("Promises must be constructed via new");
        if ("function" != typeof t) throw new TypeError("not a function");
        (this._state = 0),
          (this._handled = !1),
          (this._value = void 0),
          (this._deferreds = []),
          d(t, this);
      }

      function u(t, e) {
        for (; 3 === t._state; ) t = t._value;
        0 !== t._state
          ? ((t._handled = !0),
            a._immediateFn(function () {
              var n = 1 === t._state ? e.onFulfilled : e.onRejected;
              if (null !== n) {
                var o;
                try {
                  o = n(t._value);
                } catch (t) {
                  return void l(e.promise, t);
                }
                c(e.promise, o);
              } else (1 === t._state ? c : l)(e.promise, t._value);
            }))
          : t._deferreds.push(e);
      }

      function c(t, e) {
        try {
          if (e === t)
            throw new TypeError("A promise cannot be resolved with itself.");
          if (e && ("object" == typeof e || "function" == typeof e)) {
            var n = e.then;
            if (e instanceof a)
              return (t._state = 3), (t._value = e), void f(t);
            if ("function" == typeof n)
              return void d(
                ((o = n),
                (r = e),
                function () {
                  o.apply(r, arguments);
                }),
                t
              );
          }
          (t._state = 1), (t._value = e), f(t);
        } catch (e) {
          l(t, e);
        }
        var o, r;
      }

      function l(t, e) {
        (t._state = 2), (t._value = e), f(t);
      }

      function f(t) {
        2 === t._state &&
          0 === t._deferreds.length &&
          a._immediateFn(function () {
            t._handled || a._unhandledRejectionFn(t._value);
          });
        for (var e = 0, n = t._deferreds.length; e < n; e++)
          u(t, t._deferreds[e]);
        t._deferreds = null;
      }

      function p(t, e, n) {
        (this.onFulfilled = "function" == typeof t ? t : null),
          (this.onRejected = "function" == typeof e ? e : null),
          (this.promise = n);
      }

      function d(t, e) {
        var n = !1;
        try {
          t(
            function (t) {
              n || ((n = !0), c(e, t));
            },
            function (t) {
              n || ((n = !0), l(e, t));
            }
          );
        } catch (t) {
          if (n) return;
          (n = !0), l(e, t);
        }
      }
      (a.prototype.catch = function (t) {
        return this.then(null, t);
      }),
        (a.prototype.then = function (t, e) {
          var n = new this.constructor(s);
          return u(this, new p(t, e, n)), n;
        }),
        (a.prototype.finally = o.a),
        (a.all = function (t) {
          return new a(function (e, n) {
            if (!i(t)) return n(new TypeError("Promise.all accepts an array"));
            var o = Array.prototype.slice.call(t);
            if (0 === o.length) return e([]);
            var r = o.length;

            function s(t, i) {
              try {
                if (i && ("object" == typeof i || "function" == typeof i)) {
                  var a = i.then;
                  if ("function" == typeof a)
                    return void a.call(
                      i,
                      function (e) {
                        s(t, e);
                      },
                      n
                    );
                }
                (o[t] = i), 0 == --r && e(o);
              } catch (t) {
                n(t);
              }
            }
            for (var a = 0; a < o.length; a++) s(a, o[a]);
          });
        }),
        (a.resolve = function (t) {
          return t && "object" == typeof t && t.constructor === a
            ? t
            : new a(function (e) {
                e(t);
              });
        }),
        (a.reject = function (t) {
          return new a(function (e, n) {
            n(t);
          });
        }),
        (a.race = function (t) {
          return new a(function (e, n) {
            if (!i(t)) return n(new TypeError("Promise.race accepts an array"));
            for (var o = 0, r = t.length; o < r; o++)
              a.resolve(t[o]).then(e, n);
          });
        }),
        (a._immediateFn =
          ("function" == typeof t &&
            function (e) {
              t(e);
            }) ||
          function (t) {
            r(t, 0);
          }),
        (a._unhandledRejectionFn = function (t) {
          "undefined" != typeof console &&
            console &&
            console.warn("Possible Unhandled Promise Rejection:", t);
        }),
        (e.a = a);
    }.call(this, n(7).setImmediate));
  },
  function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0,
    }),
      n(6);
    var o = n(10),
      r = n(12);
    if (
      (window.smartsupp ||
        ((window.smartsupp = function () {
          window.smartsupp._.push(arguments);
        }),
        (window.smartsupp._ = [])),
      !window.SMARTSUPP_LOADED)
    ) {
      (window.SMARTSUPP_LOADED = !0),
        (window.$smartsupp = new o.SmartsuppLoader({
          widgetVersion: 1,
          bootstrapUrl: "https://bootstrap.smartsuppchat.com",
          filesUrl: "https://files.smartsuppcdn.com",
          widgetV2Url: "https://widget-v2.smartsuppcdn.com",
          zIndex: 1e7,
          position: "auto",
          orientation: "right",
          autoInlineMode: !0,
        })),
        (window.smartsupp.chats = window.$smartsupp.widgets);
      for (
        var i = 0,
          s = ["create", "createWidget", "getChat", "getWidget", "setDefaults"];
        i < s.length;
        i++
      ) {
        var a = s[i];
        window.smartsupp[a] = window.$smartsupp[a].bind(window.$smartsupp);
      }
      !1 !== window.SMARTSUPP_AUTOCREATE &&
        r(function () {
          window.smartsupp("html:apply", document),
            window.$smartsupp
              .createWidget("chat", window._smartsupp, window.smartsupp._)
              .then(function (t) {
                return t.initPlugins(), t.render();
              })
              .catch(function (t) {
                console.warn(t);
              });
        });
    }
  },
  function (t, e, n) {
    "use strict";
    n.r(e),
      function (t) {
        var e = n(4),
          o = n(0),
          r = (function () {
            if ("undefined" != typeof self) return self;
            if ("undefined" != typeof window) return window;
            if (void 0 !== t) return t;
            throw new Error("unable to locate global object");
          })();
        "Promise" in r
          ? r.Promise.prototype.finally || (r.Promise.prototype.finally = o.a)
          : (r.Promise = e.a);
      }.call(this, n(1));
  },
  function (t, e, n) {
    (function (t) {
      var o =
          (void 0 !== t && t) || ("undefined" != typeof self && self) || window,
        r = Function.prototype.apply;

      function i(t, e) {
        (this._id = t), (this._clearFn = e);
      }
      (e.setTimeout = function () {
        return new i(r.call(setTimeout, o, arguments), clearTimeout);
      }),
        (e.setInterval = function () {
          return new i(r.call(setInterval, o, arguments), clearInterval);
        }),
        (e.clearTimeout = e.clearInterval =
          function (t) {
            t && t.close();
          }),
        (i.prototype.unref = i.prototype.ref = function () {}),
        (i.prototype.close = function () {
          this._clearFn.call(o, this._id);
        }),
        (e.enroll = function (t, e) {
          clearTimeout(t._idleTimeoutId), (t._idleTimeout = e);
        }),
        (e.unenroll = function (t) {
          clearTimeout(t._idleTimeoutId), (t._idleTimeout = -1);
        }),
        (e._unrefActive = e.active =
          function (t) {
            clearTimeout(t._idleTimeoutId);
            var e = t._idleTimeout;
            e >= 0 &&
              (t._idleTimeoutId = setTimeout(function () {
                t._onTimeout && t._onTimeout();
              }, e));
          }),
        n(8),
        (e.setImmediate =
          ("undefined" != typeof self && self.setImmediate) ||
          (void 0 !== t && t.setImmediate) ||
          (this && this.setImmediate)),
        (e.clearImmediate =
          ("undefined" != typeof self && self.clearImmediate) ||
          (void 0 !== t && t.clearImmediate) ||
          (this && this.clearImmediate));
    }.call(this, n(1)));
  },
  function (t, e, n) {
    (function (t, e) {
      !(function (t, n) {
        "use strict";
        if (!t.setImmediate) {
          var o,
            r,
            i,
            s,
            a,
            u = 1,
            c = {},
            l = !1,
            f = t.document,
            p = Object.getPrototypeOf && Object.getPrototypeOf(t);
          (p = p && p.setTimeout ? p : t),
            "[object process]" === {}.toString.call(t.process)
              ? (o = function (t) {
                  e.nextTick(function () {
                    h(t);
                  });
                })
              : !(function () {
                  if (t.postMessage && !t.importScripts) {
                    var e = !0,
                      n = t.onmessage;
                    return (
                      (t.onmessage = function () {
                        e = !1;
                      }),
                      t.postMessage("", "*"),
                      (t.onmessage = n),
                      e
                    );
                  }
                })()
              ? t.MessageChannel
                ? (((i = new MessageChannel()).port1.onmessage = function (t) {
                    h(t.data);
                  }),
                  (o = function (t) {
                    i.port2.postMessage(t);
                  }))
                : f && "onreadystatechange" in f.createElement("script")
                ? ((r = f.documentElement),
                  (o = function (t) {
                    var e = f.createElement("script");
                    (e.onreadystatechange = function () {
                      h(t),
                        (e.onreadystatechange = null),
                        r.removeChild(e),
                        (e = null);
                    }),
                      r.appendChild(e);
                  }))
                : (o = function (t) {
                    setTimeout(h, 0, t);
                  })
              : ((s = "setImmediate$" + Math.random() + "$"),
                (a = function (e) {
                  e.source === t &&
                    "string" == typeof e.data &&
                    0 === e.data.indexOf(s) &&
                    h(+e.data.slice(s.length));
                }),
                t.addEventListener
                  ? t.addEventListener("message", a, !1)
                  : t.attachEvent("onmessage", a),
                (o = function (e) {
                  t.postMessage(s + e, "*");
                })),
            (p.setImmediate = function (t) {
              "function" != typeof t && (t = new Function("" + t));
              for (
                var e = new Array(arguments.length - 1), n = 0;
                n < e.length;
                n++
              )
                e[n] = arguments[n + 1];
              var r = {
                callback: t,
                args: e,
              };
              return (c[u] = r), o(u), u++;
            }),
            (p.clearImmediate = d);
        }

        function d(t) {
          delete c[t];
        }

        function h(t) {
          if (l) setTimeout(h, 0, t);
          else {
            var e = c[t];
            if (e) {
              l = !0;
              try {
                !(function (t) {
                  var e = t.callback,
                    o = t.args;
                  switch (o.length) {
                    case 0:
                      e();
                      break;
                    case 1:
                      e(o[0]);
                      break;
                    case 2:
                      e(o[0], o[1]);
                      break;
                    case 3:
                      e(o[0], o[1], o[2]);
                      break;
                    default:
                      e.apply(n, o);
                  }
                })(e);
              } finally {
                d(t), (l = !1);
              }
            }
          }
        }
      })("undefined" == typeof self ? (void 0 === t ? this : t) : self);
    }.call(this, n(1), n(9)));
  },
  function (t, e) {
    var n,
      o,
      r = (t.exports = {});

    function i() {
      throw new Error("setTimeout has not been defined");
    }

    function s() {
      throw new Error("clearTimeout has not been defined");
    }

    function a(t) {
      if (n === setTimeout) return setTimeout(t, 0);
      if ((n === i || !n) && setTimeout)
        return (n = setTimeout), setTimeout(t, 0);
      try {
        return n(t, 0);
      } catch (e) {
        try {
          return n.call(null, t, 0);
        } catch (e) {
          return n.call(this, t, 0);
        }
      }
    }
    !(function () {
      try {
        n = "function" == typeof setTimeout ? setTimeout : i;
      } catch (t) {
        n = i;
      }
      try {
        o = "function" == typeof clearTimeout ? clearTimeout : s;
      } catch (t) {
        o = s;
      }
    })();
    var u,
      c = [],
      l = !1,
      f = -1;

    function p() {
      l &&
        u &&
        ((l = !1), u.length ? (c = u.concat(c)) : (f = -1), c.length && d());
    }

    function d() {
      if (!l) {
        var t = a(p);
        l = !0;
        for (var e = c.length; e; ) {
          for (u = c, c = []; ++f < e; ) u && u[f].run();
          (f = -1), (e = c.length);
        }
        (u = null),
          (l = !1),
          (function (t) {
            if (o === clearTimeout) return clearTimeout(t);
            if ((o === s || !o) && clearTimeout)
              return (o = clearTimeout), clearTimeout(t);
            try {
              o(t);
            } catch (e) {
              try {
                return o.call(null, t);
              } catch (e) {
                return o.call(this, t);
              }
            }
          })(t);
      }
    }

    function h(t, e) {
      (this.fun = t), (this.array = e);
    }

    function m() {}
    (r.nextTick = function (t) {
      var e = new Array(arguments.length - 1);
      if (arguments.length > 1)
        for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
      c.push(new h(t, e)), 1 !== c.length || l || a(d);
    }),
      (h.prototype.run = function () {
        this.fun.apply(null, this.array);
      }),
      (r.title = "browser"),
      (r.browser = !0),
      (r.env = {}),
      (r.argv = []),
      (r.version = ""),
      (r.versions = {}),
      (r.on = m),
      (r.addListener = m),
      (r.once = m),
      (r.off = m),
      (r.removeListener = m),
      (r.removeAllListeners = m),
      (r.emit = m),
      (r.prependListener = m),
      (r.prependOnceListener = m),
      (r.listeners = function (t) {
        return [];
      }),
      (r.binding = function (t) {
        throw new Error("process.binding is not supported");
      }),
      (r.cwd = function () {
        return "/";
      }),
      (r.chdir = function (t) {
        throw new Error("process.chdir is not supported");
      }),
      (r.umask = function () {
        return 0;
      });
  },
  function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0,
    });
    var o = n(3),
      r = n(2),
      i = n(11),
      s = (function () {
        function t(t) {
          (this.options = t), (this.widgets = {});
        }
        return (
          (t.prototype.setDefaults = function (t) {
            return (this.options = r.mergeDeep(this.options, t)), this;
          }),
          (t.prototype.getChat = function (t) {
            return this.widgets[t];
          }),
          (t.prototype.getWidget = function (t) {
            return this.widgets[t];
          }),
          (t.prototype.create = function (t, e, n, s) {
            var u = r.mergeDeep(this.options, e);
            a(u);
            var c = (this.widgets[t] = new i.SmartsuppWidget(t, u, n));
            return (
              (c._initPromise = r
                .request(u.bootstrapUrl + "/widget/" + u.key + ".json")
                .then(function (t) {
                  var n = r.parseJSON(t);
                  delete e.features,
                    c.init(r.mergeDeep(n, n.config, e), n.features),
                    e && e.key && o.trackOptions(c.options, Object.keys(e)),
                    s && s(void 0, c),
                    c.options.renderTo && c.render(c.options.renderTo);
                })
                .catch(function (t) {
                  s && s(t);
                })),
              c
            );
          }),
          (t.prototype.createWidget = function (t, e, n) {
            var s = this,
              u = r.mergeDeep(this.options, e);
            return (
              a(u),
              r
                .request(u.bootstrapUrl + "/widget/" + u.key + ".json")
                .then(function (a) {
                  var c = r.parseJSON(a),
                    l = (s.widgets[t] = new i.SmartsuppWidget(t, u, n));
                  return (
                    delete e.features,
                    l.init(r.mergeDeep(c, c.config, e), c.features),
                    e && e.key && o.trackOptions(l.options, Object.keys(e)),
                    l
                  );
                })
            );
          }),
          t
        );
      })();
    e.SmartsuppLoader = s;
    var a = function (t) {
      if (!t.bootstrapUrl) throw new Error("Missing option bootstrapUrl");
      if (!t.key) throw new Error("Missing option key");
    };
  },
  function (t, e, n) {
    "use strict";
    var o =
        (this && this.__assign) ||
        function () {
          return (o =
            Object.assign ||
            function (t) {
              for (var e, n = 1, o = arguments.length; n < o; n++)
                for (var r in (e = arguments[n]))
                  Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
              return t;
            }).apply(this, arguments);
        },
      r =
        (this && this.__awaiter) ||
        function (t, e, n, o) {
          return new (n || (n = Promise))(function (r, i) {
            function s(t) {
              try {
                u(o.next(t));
              } catch (t) {
                i(t);
              }
            }

            function a(t) {
              try {
                u(o.throw(t));
              } catch (t) {
                i(t);
              }
            }

            function u(t) {
              t.done
                ? r(t.value)
                : new n(function (e) {
                    e(t.value);
                  }).then(s, a);
            }
            u((o = o.apply(t, e || [])).next());
          });
        },
      i =
        (this && this.__generator) ||
        function (t, e) {
          var n,
            o,
            r,
            i,
            s = {
              label: 0,
              sent: function () {
                if (1 & r[0]) throw r[1];
                return r[1];
              },
              trys: [],
              ops: [],
            };
          return (
            (i = {
              next: a(0),
              throw: a(1),
              return: a(2),
            }),
            "function" == typeof Symbol &&
              (i[Symbol.iterator] = function () {
                return this;
              }),
            i
          );

          function a(i) {
            return function (a) {
              return (function (i) {
                if (n) throw new TypeError("Generator is already executing.");
                for (; s; )
                  try {
                    if (
                      ((n = 1),
                      o &&
                        (r =
                          2 & i[0]
                            ? o.return
                            : i[0]
                            ? o.throw || ((r = o.return) && r.call(o), 0)
                            : o.next) &&
                        !(r = r.call(o, i[1])).done)
                    )
                      return r;
                    switch (((o = 0), r && (i = [2 & i[0], r.value]), i[0])) {
                      case 0:
                      case 1:
                        r = i;
                        break;
                      case 4:
                        return (
                          s.label++,
                          {
                            value: i[1],
                            done: !1,
                          }
                        );
                      case 5:
                        s.label++, (o = i[1]), (i = [0]);
                        continue;
                      case 7:
                        (i = s.ops.pop()), s.trys.pop();
                        continue;
                      default:
                        if (
                          !(r = (r = s.trys).length > 0 && r[r.length - 1]) &&
                          (6 === i[0] || 2 === i[0])
                        ) {
                          s = 0;
                          continue;
                        }
                        if (
                          3 === i[0] &&
                          (!r || (i[1] > r[0] && i[1] < r[3]))
                        ) {
                          s.label = i[1];
                          break;
                        }
                        if (6 === i[0] && s.label < r[1]) {
                          (s.label = r[1]), (r = i);
                          break;
                        }
                        if (r && s.label < r[2]) {
                          (s.label = r[2]), s.ops.push(i);
                          break;
                        }
                        r[2] && s.ops.pop(), s.trys.pop();
                        continue;
                    }
                    i = e.call(t, s);
                  } catch (t) {
                    (i = [6, t]), (o = 0);
                  } finally {
                    n = r = 0;
                  }
                if (5 & i[0]) throw i[1];
                return {
                  value: i[0] ? i[1] : void 0,
                  done: !0,
                };
              })([i, a]);
            };
          }
        };
    Object.defineProperty(e, "__esModule", {
      value: !0,
    });
    var s = n(3),
      a = n(2),
      u = window,
      c = (function () {
        function t(t, e, n) {
          if (
            ((this.id = t),
            (this.options = e),
            (this._pushApi = n),
            (this.rendered = !1),
            (this.api = null),
            (this.el = null),
            (this.frame = null),
            (this.version = 2),
            (this.initialized = !1),
            !e.bootstrapUrl)
          )
            throw new Error("Missing option bootstrapUrl");
          if (!e.key) throw new Error("Missing option key");
        }
        return (
          (t.prototype.setOptions = function (t) {
            return (
              (this.options = a.mergeDeep(this.options, t)),
              this.features &&
                (this.features.rating || (this.options.ratingEnabled = !1),
                this.features.groups || (this.options.groupSelectEnabled = !1),
                this.features.customize ||
                  ((this.options.hideWidget = !1),
                  (this.options.hideOfflineChat = !1),
                  (this.options.numberControl = !1),
                  (this.options.requireLogin = !1),
                  (this.options.privacyNoticeEnabled = !0))),
              this
            );
          }),
          (t.prototype.init = function (t, e) {
            var n = this;
            (this.features = e),
              this.setOptions(t),
              (this.initialized = !0),
              "auto" === this.options.position &&
                (this.options.position = this.options.renderTo
                  ? "relative"
                  : "fixed"),
              this._pushApi &&
                this._pushApi.forEach(function (t) {
                  "recording:disable" === t[0]
                    ? (n.options.recordingDisable = !0)
                    : "recording:off" === t[0] && (n.options.recordingOff = !0);
                });
          }),
          (t.prototype.createContainer = function () {
            var t = document.createElement("div");
            return (
              (t.id = this.id + "-application"),
              t.setAttribute("style", "display: none"),
              (t.style.zIndex = this.options.zIndex
                ? "" + (this.options.zIndex + 1)
                : null),
              (t.style.position = this.options.position),
              t
            );
          }),
          (t.prototype.createFrame = function () {
            var t = document.createElement("iframe");
            return (
              (t.id = this.id + "-application-iframe"),
              t.setAttribute("title", "Smartsupp"),
              t.setAttribute("aria-hidden", "true"),
              t.setAttribute(
                "style",
                "width: 100%; height: 100%; border: none"
              ),
              (t.style.zIndex = this.options.zIndex
                ? "" + (this.options.zIndex + 1)
                : null),
              t
            );
          }),
          (t.prototype.render = function (t) {
            return r(this, void 0, void 0, function () {
              var e;
              return i(this, function (n) {
                switch (n.label) {
                  case 0:
                    return document.getElementById(this.id + "-application")
                      ? [2]
                      : this._initPromise
                      ? [4, this._initPromise]
                      : [3, 2];
                  case 1:
                    n.sent(), (n.label = 2);
                  case 2:
                    if (!this.initialized)
                      throw new Error("failed to initialize widget");
                    if (
                      (!t &&
                        this.options.renderTo &&
                        (t = this.options.renderTo),
                      t && (this.options.zIndex = null),
                      !(e = a.resolveTargetElement(t)))
                    )
                      throw new Error("target element not found");
                    return (
                      (this.el = this.createContainer()),
                      [4, this.renderFrame(this.el, e)]
                    );
                  case 3:
                    return n.sent(), (this.rendered = !0), [2];
                }
              });
            });
          }),
          (t.prototype.renderFrame = function (t, e) {
            return r(this, void 0, void 0, function () {
              var n,
                o,
                r,
                s,
                u = this;
              return i(this, function (i) {
                switch (i.label) {
                  case 0:
                    return (
                      (n = this.frame = this.createFrame()),
                      t.appendChild(n),
                      e.childNodes.length > 0
                        ? e.insertBefore(t, e.childNodes[0])
                        : e.appendChild(t),
                      [
                        4,
                        a
                          .request(this.getBaseUrl() + "/asset-manifest.json")
                          .then(function (t) {
                            return a.parseJSON(t);
                          }),
                      ]
                    );
                  case 1:
                    return (
                      (o = i.sent()),
                      (r = a.getFrameDocument(n)).open(),
                      r.write(
                        '<!DOCTYPE html>\n\t\t<html lang="en">\n\t\t\t<head>\n\t\t\t\t<title>Smartsupp Chat</title>\n\t\t\t\t<meta charset="utf-8" />\n\t\t\t\t<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />\n\t\t\t</head>\n\t\t\t<body id="body" data-smartsupp-id="' +
                          this.id +
                          '">\n\t\t\t\t<div id="root" />\n\t\t\t</body>\n\t\t</html>'
                      ),
                      (s = r.getElementsByTagName("head")[0]),
                      o.entrypoints.forEach(function (t) {
                        var e = a.createScript(r, u.getBaseUrl() + "/" + t);
                        s.appendChild(e);
                      }),
                      r.close(),
                      [2]
                    );
                }
              });
            });
          }),
          (t.prototype.destroy = function () {
            this.el &&
              this.el.parentNode &&
              (this.el.parentNode.removeChild(this.el), delete this.el);
          }),
          (t.prototype.getOption = function (t, e) {
            return void 0 !== this.options[t] ? this.options[t] : e;
          }),
          (t.prototype.getBaseUrl = function () {
            return this.options.widgetV2Url;
          }),
          (t.prototype.getInternalApiUrl = function () {
            return (
              this.options.bootstrapUrl +
              "/widget/" +
              this.options.key +
              "/code.js"
            );
          }),
          (t.prototype.installApi = function (t) {
            var e = this;
            if (
              ((this.api = t),
              (u.smartsupp.api = t),
              this._pushApi &&
                (this._pushApi.forEach(function (n) {
                  var o = Array.prototype.slice.call(n, 0);
                  try {
                    e.options.widgetTrackerEnabled &&
                      s.trackOperation(e.options, o[0]),
                      t.execute(o);
                  } catch (t) {
                    console.log(t);
                  }
                }),
                (this._pushApi.push = function (n) {
                  var o = Array.prototype.slice.call(n, 0);
                  try {
                    e.options.widgetTrackerEnabled &&
                      s.trackOperation(e.options, o[0]),
                      t.execute(o);
                  } catch (t) {
                    console.log(t);
                  }
                })),
              this.options.onStartup)
            )
              try {
                this.options.onStartup(t);
              } catch (t) {
                console.log(t);
              }
          }),
          (t.prototype.initPlugins = function () {
            this.options.smartlook &&
              this.isAllowedSmartlook() &&
              this.initSmartlook(
                o({}, this.options.smartlook, {
                  cookieDomain: this.options.cookieDomain,
                  cookiePath: this.options.cookiePath,
                })
              );
          }),
          (t.prototype.isAllowedSmartlook = function () {
            return (
              !u.smartlook &&
              !(!this.options.smartlook || !this.options.smartlook.enabled) &&
              !this.options.recordingOff
            );
          }),
          (t.prototype.initSmartlook = function (t) {
            (this.smartlook = u.smartlook =
              function () {
                u.smartlook.api.push(arguments);
              }),
              (u.smartlook.api = []);
            var e = window.document.getElementsByTagName("head")[0],
              n = window.document.createElement("script");
            (n.async = !0),
              (n.type = "text/javascript"),
              (n.charset = "utf-8"),
              (n.crossOrigin = "anonymous"),
              (n.src = t.scriptUrl),
              e.appendChild(n),
              this.smartlook("init", t.key, {
                host: t.serverHost,
                cookieDomain: t.cookieDomain,
                cookiePath: t.cookiePath,
              }),
              this.smartlook("expertForms"),
              this.smartlook("expertAPI"),
              this.options.recordingDisable && this.smartlook("disable");
          }),
          t
        );
      })();
    e.SmartsuppWidget = c;
  },
  function (t, e, n) {
    /*!
     * domready (c) Dustin Diaz 2014 - License MIT
     * ie10 fix - Mikael Kristiansson 2019
     */
    t.exports = (function () {
      var t = !1;
      -1 !== navigator.appVersion.indexOf("MSIE 10") && (t = !0);
      var e,
        n = [],
        o = "object" == typeof document && document,
        r = t ? o.documentElement.doScroll("left") : o.documentElement.doScroll,
        i = o && (r ? /^loaded|^c/ : /^loaded|^i|^c/).test(o.readyState);
      return (
        !i &&
          o &&
          o.addEventListener(
            "DOMContentLoaded",
            (e = function () {
              for (
                o.removeEventListener("DOMContentLoaded", e), i = 1;
                (e = n.shift());

              )
                e();
            })
          ),
        function (t) {
          i ? setTimeout(t, 0) : n.push(t);
        }
      );
    })();
  },
]);
