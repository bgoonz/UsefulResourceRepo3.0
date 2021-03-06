!(function (e) {
  var t = {};
  function n(o) {
    if (t[o]) return t[o].exports;
    var r = (t[o] = { i: o, l: !1, exports: {} });
    return e[o].call(r.exports, r, r.exports, n), (r.l = !0), r.exports;
  }
  (n.m = e),
    (n.c = t),
    (n.d = function (e, t, o) {
      n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: o });
    }),
    (n.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.t = function (e, t) {
      if ((1 & t && (e = n(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var o = Object.create(null);
      if (
        (n.r(o),
        Object.defineProperty(o, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var r in e)
          n.d(
            o,
            r,
            function (t) {
              return e[t];
            }.bind(null, r)
          );
      return o;
    }),
    (n.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return n.d(t, "a", t), t;
    }),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.p = "http://localhost:8116/"),
    n((n.s = 21));
})([
  function (e, t, n) {
    "use strict";
    n.r(t),
      n.d(t, "render", function () {
        return q;
      }),
      n.d(t, "hydrate", function () {
        return I;
      }),
      n.d(t, "createElement", function () {
        return v;
      }),
      n.d(t, "h", function () {
        return v;
      }),
      n.d(t, "Fragment", function () {
        return b;
      }),
      n.d(t, "createRef", function () {
        return g;
      }),
      n.d(t, "isValidElement", function () {
        return r;
      }),
      n.d(t, "Component", function () {
        return y;
      }),
      n.d(t, "cloneElement", function () {
        return L;
      }),
      n.d(t, "createContext", function () {
        return H;
      }),
      n.d(t, "toChildArray", function () {
        return C;
      }),
      n.d(t, "_unmount", function () {
        return E;
      }),
      n.d(t, "options", function () {
        return o;
      });
    var o,
      r,
      i,
      a,
      l,
      c,
      s,
      u,
      d = {},
      f = [],
      p = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord/i;
    function _(e, t) {
      for (var n in t) e[n] = t[n];
      return e;
    }
    function h(e) {
      var t = e.parentNode;
      t && t.removeChild(e);
    }
    function v(e, t, n) {
      var o,
        r = arguments,
        i = {};
      for (o in t) "key" !== o && "ref" !== o && (i[o] = t[o]);
      if (arguments.length > 3)
        for (n = [n], o = 3; o < arguments.length; o++) n.push(r[o]);
      if (
        (null != n && (i.children = n),
        "function" == typeof e && null != e.defaultProps)
      )
        for (o in e.defaultProps) void 0 === i[o] && (i[o] = e.defaultProps[o]);
      return m(e, i, t && t.key, t && t.ref);
    }
    function m(e, t, n, r) {
      var i = {
        type: e,
        props: t,
        key: n,
        ref: r,
        __k: null,
        __: null,
        __b: 0,
        __e: null,
        __d: void 0,
        __c: null,
        constructor: void 0,
      };
      return o.vnode && o.vnode(i), i;
    }
    function g() {
      return {};
    }
    function b(e) {
      return e.children;
    }
    function y(e, t) {
      (this.props = e), (this.context = t);
    }
    function x(e, t) {
      if (null == t) return e.__ ? x(e.__, e.__.__k.indexOf(e) + 1) : null;
      for (var n; t < e.__k.length; t++)
        if (null != (n = e.__k[t]) && null != n.__e) return n.__e;
      return "function" == typeof e.type ? x(e) : null;
    }
    function w(e) {
      var t, n;
      if (null != (e = e.__) && null != e.__c) {
        for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
          if (null != (n = e.__k[t]) && null != n.__e) {
            e.__e = e.__c.base = n.__e;
            break;
          }
        return w(e);
      }
    }
    function k(e) {
      ((!e.__d && (e.__d = !0) && i.push(e) && !a++) ||
        c !== o.debounceRendering) &&
        ((c = o.debounceRendering) || l)(O);
    }
    function O() {
      for (var e; (a = i.length); )
        (e = i.sort(function (e, t) {
          return e.__v.__b - t.__v.__b;
        })),
          (i = []),
          e.some(function (e) {
            var t, n, o, r, i, a;
            e.__d &&
              ((i = (r = (t = e).__v).__e),
              (a = t.__P) &&
                ((n = []),
                (o = T(
                  a,
                  r,
                  _({}, r),
                  t.__n,
                  void 0 !== a.ownerSVGElement,
                  null,
                  n,
                  null == i ? x(r) : i
                )),
                M(n, r),
                o != i && w(r)));
          });
    }
    function S(e, t, n, o, r, i, a, l, c) {
      var s,
        u,
        p,
        _,
        v,
        m,
        g,
        b = (n && n.__k) || f,
        y = b.length;
      if (
        (l == d && (l = null != i ? i[0] : y ? x(n, 0) : null),
        (s = 0),
        (t.__k = C(t.__k, function (n) {
          if (null != n) {
            if (
              ((n.__ = t),
              (n.__b = t.__b + 1),
              null === (p = b[s]) || (p && n.key == p.key && n.type === p.type))
            )
              b[s] = void 0;
            else
              for (u = 0; u < y; u++) {
                if ((p = b[u]) && n.key == p.key && n.type === p.type) {
                  b[u] = void 0;
                  break;
                }
                p = null;
              }
            if (
              ((_ = T(e, n, (p = p || d), o, r, i, a, l, c)),
              (u = n.ref) &&
                p.ref != u &&
                (g || (g = []),
                p.ref && g.push(p.ref, null, n),
                g.push(u, n.__c || _, n)),
              null != _)
            ) {
              var f;
              if ((null == m && (m = _), void 0 !== n.__d))
                (f = n.__d), (n.__d = void 0);
              else if (i == p || _ != l || null == _.parentNode) {
                e: if (null == l || l.parentNode !== e)
                  e.appendChild(_), (f = null);
                else {
                  for (v = l, u = 0; (v = v.nextSibling) && u < y; u += 2)
                    if (v == _) break e;
                  e.insertBefore(_, l), (f = l);
                }
                "option" == t.type && (e.value = "");
              }
              (l = void 0 !== f ? f : _.nextSibling),
                "function" == typeof t.type && (t.__d = l);
            } else l && p.__e == l && l.parentNode != e && (l = x(p));
          }
          return s++, n;
        })),
        (t.__e = m),
        null != i && "function" != typeof t.type)
      )
        for (s = i.length; s--; ) null != i[s] && h(i[s]);
      for (s = y; s--; ) null != b[s] && E(b[s], b[s]);
      if (g) for (s = 0; s < g.length; s++) z(g[s], g[++s], g[++s]);
    }
    function C(e, t, n) {
      if ((null == n && (n = []), null == e || "boolean" == typeof e))
        t && n.push(t(null));
      else if (Array.isArray(e))
        for (var o = 0; o < e.length; o++) C(e[o], t, n);
      else
        n.push(
          t
            ? t(
                "string" == typeof e || "number" == typeof e
                  ? m(null, e, null, null)
                  : null != e.__e || null != e.__c
                  ? m(e.type, e.props, e.key, null)
                  : e
              )
            : e
        );
      return n;
    }
    function j(e, t, n) {
      "-" === t[0]
        ? e.setProperty(t, n)
        : (e[t] =
            "number" == typeof n && !1 === p.test(t)
              ? n + "px"
              : null == n
              ? ""
              : n);
    }
    function F(e, t, n, o, r) {
      var i, a, l, c, s;
      if (
        (r
          ? "className" === t && (t = "class")
          : "class" === t && (t = "className"),
        "key" === t || "children" === t)
      );
      else if ("style" === t)
        if (((i = e.style), "string" == typeof n)) i.cssText = n;
        else {
          if (("string" == typeof o && ((i.cssText = ""), (o = null)), o))
            for (a in o) (n && a in n) || j(i, a, "");
          if (n) for (l in n) (o && n[l] === o[l]) || j(i, l, n[l]);
        }
      else
        "o" === t[0] && "n" === t[1]
          ? ((c = t !== (t = t.replace(/Capture$/, ""))),
            (s = t.toLowerCase()),
            (t = (s in e ? s : t).slice(2)),
            n
              ? (o || e.addEventListener(t, N, c), ((e.l || (e.l = {}))[t] = n))
              : e.removeEventListener(t, N, c))
          : "list" !== t &&
            "tagName" !== t &&
            "form" !== t &&
            "type" !== t &&
            "size" !== t &&
            !r &&
            t in e
          ? (e[t] = null == n ? "" : n)
          : "function" != typeof n &&
            "dangerouslySetInnerHTML" !== t &&
            (t !== (t = t.replace(/^xlink:?/, ""))
              ? null == n || !1 === n
                ? e.removeAttributeNS(
                    "http://www.w3.org/1999/xlink",
                    t.toLowerCase()
                  )
                : e.setAttributeNS(
                    "http://www.w3.org/1999/xlink",
                    t.toLowerCase(),
                    n
                  )
              : null == n || (!1 === n && !/^ar/.test(t))
              ? e.removeAttribute(t)
              : e.setAttribute(t, n));
    }
    function N(e) {
      this.l[e.type](o.event ? o.event(e) : e);
    }
    function T(e, t, n, r, i, a, l, c, s) {
      var u,
        d,
        f,
        p,
        h,
        v,
        m,
        g,
        x,
        w,
        k = t.type;
      if (void 0 !== t.constructor) return null;
      (u = o.__b) && u(t);
      try {
        e: if ("function" == typeof k) {
          if (
            ((g = t.props),
            (x = (u = k.contextType) && r[u.__c]),
            (w = u ? (x ? x.props.value : u.__) : r),
            n.__c
              ? (m = (d = t.__c = n.__c).__ = d.__E)
              : ("prototype" in k && k.prototype.render
                  ? (t.__c = d = new k(g, w))
                  : ((t.__c = d = new y(g, w)),
                    (d.constructor = k),
                    (d.render = U)),
                x && x.sub(d),
                (d.props = g),
                d.state || (d.state = {}),
                (d.context = w),
                (d.__n = r),
                (f = d.__d = !0),
                (d.__h = [])),
            null == d.__s && (d.__s = d.state),
            null != k.getDerivedStateFromProps &&
              (d.__s == d.state && (d.__s = _({}, d.__s)),
              _(d.__s, k.getDerivedStateFromProps(g, d.__s))),
            (p = d.props),
            (h = d.state),
            f)
          )
            null == k.getDerivedStateFromProps &&
              null != d.componentWillMount &&
              d.componentWillMount(),
              null != d.componentDidMount && d.__h.push(d.componentDidMount);
          else {
            if (
              (null == k.getDerivedStateFromProps &&
                g !== p &&
                null != d.componentWillReceiveProps &&
                d.componentWillReceiveProps(g, w),
              !d.__e &&
                null != d.shouldComponentUpdate &&
                !1 === d.shouldComponentUpdate(g, d.__s, w))
            ) {
              for (
                d.props = g,
                  d.state = d.__s,
                  d.__d = !1,
                  d.__v = t,
                  t.__e = n.__e,
                  t.__k = n.__k,
                  d.__h.length && l.push(d),
                  u = 0;
                u < t.__k.length;
                u++
              )
                t.__k[u] && (t.__k[u].__ = t);
              break e;
            }
            null != d.componentWillUpdate && d.componentWillUpdate(g, d.__s, w),
              null != d.componentDidUpdate &&
                d.__h.push(function () {
                  d.componentDidUpdate(p, h, v);
                });
          }
          (d.context = w),
            (d.props = g),
            (d.state = d.__s),
            (u = o.__r) && u(t),
            (d.__d = !1),
            (d.__v = t),
            (d.__P = e),
            (u = d.render(d.props, d.state, d.context)),
            (t.__k =
              null != u && u.type == b && null == u.key
                ? u.props.children
                : Array.isArray(u)
                ? u
                : [u]),
            null != d.getChildContext && (r = _(_({}, r), d.getChildContext())),
            f ||
              null == d.getSnapshotBeforeUpdate ||
              (v = d.getSnapshotBeforeUpdate(p, h)),
            S(e, t, n, r, i, a, l, c, s),
            (d.base = t.__e),
            d.__h.length && l.push(d),
            m && (d.__E = d.__ = null),
            (d.__e = !1);
        } else t.__e = P(n.__e, t, n, r, i, a, l, s);
        (u = o.diffed) && u(t);
      } catch (e) {
        o.__e(e, t, n);
      }
      return t.__e;
    }
    function M(e, t) {
      o.__c && o.__c(t, e),
        e.some(function (t) {
          try {
            (e = t.__h),
              (t.__h = []),
              e.some(function (e) {
                e.call(t);
              });
          } catch (e) {
            o.__e(e, t.__v);
          }
        });
    }
    function P(e, t, n, o, r, i, a, l) {
      var c,
        s,
        u,
        p,
        _,
        h = n.props,
        v = t.props;
      if (((r = "svg" === t.type || r), null != i))
        for (c = 0; c < i.length; c++)
          if (
            null != (s = i[c]) &&
            ((null === t.type ? 3 === s.nodeType : s.localName === t.type) ||
              e == s)
          ) {
            (e = s), (i[c] = null);
            break;
          }
      if (null == e) {
        if (null === t.type) return document.createTextNode(v);
        (e = r
          ? document.createElementNS("http://www.w3.org/2000/svg", t.type)
          : document.createElement(t.type, v.is && { is: v.is })),
          (i = null);
      }
      if (null === t.type) h !== v && e.data != v && (e.data = v);
      else if (t !== n) {
        if (
          (null != i && (i = f.slice.call(e.childNodes)),
          (u = (h = n.props || d).dangerouslySetInnerHTML),
          (p = v.dangerouslySetInnerHTML),
          !l)
        ) {
          if (h === d)
            for (h = {}, _ = 0; _ < e.attributes.length; _++)
              h[e.attributes[_].name] = e.attributes[_].value;
          (p || u) &&
            ((p && u && p.__html == u.__html) ||
              (e.innerHTML = (p && p.__html) || ""));
        }
        (function (e, t, n, o, r) {
          var i;
          for (i in n) i in t || F(e, i, null, n[i], o);
          for (i in t)
            (r && "function" != typeof t[i]) ||
              "value" === i ||
              "checked" === i ||
              n[i] === t[i] ||
              F(e, i, t[i], n[i], o);
        })(e, v, h, r, l),
          (t.__k = t.props.children),
          p || S(e, t, n, o, "foreignObject" !== t.type && r, i, a, d, l),
          l ||
            ("value" in v &&
              void 0 !== v.value &&
              v.value !== e.value &&
              (e.value = null == v.value ? "" : v.value),
            "checked" in v &&
              void 0 !== v.checked &&
              v.checked !== e.checked &&
              (e.checked = v.checked));
      }
      return e;
    }
    function z(e, t, n) {
      try {
        "function" == typeof e ? e(t) : (e.current = t);
      } catch (e) {
        o.__e(e, n);
      }
    }
    function E(e, t, n) {
      var r, i, a;
      if (
        (o.unmount && o.unmount(e),
        (r = e.ref) && ((r.current && r.current !== e.__e) || z(r, null, t)),
        n || "function" == typeof e.type || (n = null != (i = e.__e)),
        (e.__e = e.__d = void 0),
        null != (r = e.__c))
      ) {
        if (r.componentWillUnmount)
          try {
            r.componentWillUnmount();
          } catch (e) {
            o.__e(e, t);
          }
        r.base = r.__P = null;
      }
      if ((r = e.__k)) for (a = 0; a < r.length; a++) r[a] && E(r[a], t, n);
      null != i && h(i);
    }
    function U(e, t, n) {
      return this.constructor(e, n);
    }
    function q(e, t, n) {
      var r, i, a;
      o.__ && o.__(e, t),
        (i = (r = n === s) ? null : (n && n.__k) || t.__k),
        (e = v(b, null, [e])),
        (a = []),
        T(
          t,
          ((r ? t : n || t).__k = e),
          i || d,
          d,
          void 0 !== t.ownerSVGElement,
          n && !r ? [n] : i ? null : f.slice.call(t.childNodes),
          a,
          n || d,
          r
        ),
        M(a, e);
    }
    function I(e, t) {
      q(e, t, s);
    }
    function L(e, t) {
      return (
        (t = _(_({}, e.props), t)),
        arguments.length > 2 && (t.children = f.slice.call(arguments, 2)),
        m(e.type, t, t.key || e.key, t.ref || e.ref)
      );
    }
    function H(e) {
      var t = {},
        n = {
          __c: "__cC" + u++,
          __: e,
          Consumer: function (e, t) {
            return e.children(t);
          },
          Provider: function (e) {
            var o,
              r = this;
            return (
              this.getChildContext ||
                ((o = []),
                (this.getChildContext = function () {
                  return (t[n.__c] = r), t;
                }),
                (this.shouldComponentUpdate = function (t) {
                  e.value !== t.value &&
                    o.some(function (e) {
                      (e.context = t.value), k(e);
                    });
                }),
                (this.sub = function (e) {
                  o.push(e);
                  var t = e.componentWillUnmount;
                  e.componentWillUnmount = function () {
                    o.splice(o.indexOf(e), 1), t && t.call(e);
                  };
                })),
              e.children
            );
          },
        };
      return (n.Consumer.contextType = n), n;
    }
    (o = {
      __e: function (e, t) {
        for (var n, o; (t = t.__); )
          if ((n = t.__c) && !n.__)
            try {
              if (
                (n.constructor &&
                  null != n.constructor.getDerivedStateFromError &&
                  ((o = !0),
                  n.setState(n.constructor.getDerivedStateFromError(e))),
                null != n.componentDidCatch &&
                  ((o = !0), n.componentDidCatch(e)),
                o)
              )
                return k((n.__E = n));
            } catch (t) {
              e = t;
            }
        throw e;
      },
    }),
      (r = function (e) {
        return null != e && void 0 === e.constructor;
      }),
      (y.prototype.setState = function (e, t) {
        var n;
        (n =
          this.__s !== this.state ? this.__s : (this.__s = _({}, this.state))),
          "function" == typeof e && (e = e(n, this.props)),
          e && _(n, e),
          null != e && this.__v && (t && this.__h.push(t), k(this));
      }),
      (y.prototype.forceUpdate = function (e) {
        this.__v && ((this.__e = !0), e && this.__h.push(e), k(this));
      }),
      (y.prototype.render = b),
      (i = []),
      (a = 0),
      (l =
        "function" == typeof Promise
          ? Promise.prototype.then.bind(Promise.resolve())
          : setTimeout),
      (s = d),
      (u = 0);
  },
  function (e, t, n) {
    var o = n(2),
      r = n(16);
    "string" == typeof (r = r.__esModule ? r.default : r) &&
      (r = [[e.i, r, ""]]);
    var i = { insert: "head", singleton: !1 },
      a = (o(r, i), r.locals ? r.locals : {});
    e.exports = a;
  },
  function (e, t, n) {
    "use strict";
    var o,
      r = function () {
        return (
          void 0 === o &&
            (o = Boolean(window && document && document.all && !window.atob)),
          o
        );
      },
      i = (function () {
        var e = {};
        return function (t) {
          if (void 0 === e[t]) {
            var n = document.querySelector(t);
            if (
              window.HTMLIFrameElement &&
              n instanceof window.HTMLIFrameElement
            )
              try {
                n = n.contentDocument.head;
              } catch (e) {
                n = null;
              }
            e[t] = n;
          }
          return e[t];
        };
      })(),
      a = [];
    function l(e) {
      for (var t = -1, n = 0; n < a.length; n++)
        if (a[n].identifier === e) {
          t = n;
          break;
        }
      return t;
    }
    function c(e, t) {
      for (var n = {}, o = [], r = 0; r < e.length; r++) {
        var i = e[r],
          c = t.base ? i[0] + t.base : i[0],
          s = n[c] || 0,
          u = "".concat(c, " ").concat(s);
        n[c] = s + 1;
        var d = l(u),
          f = { css: i[1], media: i[2], sourceMap: i[3] };
        -1 !== d
          ? (a[d].references++, a[d].updater(f))
          : a.push({ identifier: u, updater: v(f, t), references: 1 }),
          o.push(u);
      }
      return o;
    }
    function s(e) {
      var t = document.createElement("style"),
        o = e.attributes || {};
      if (void 0 === o.nonce) {
        var r = n.nc;
        r && (o.nonce = r);
      }
      if (
        (Object.keys(o).forEach(function (e) {
          t.setAttribute(e, o[e]);
        }),
        "function" == typeof e.insert)
      )
        e.insert(t);
      else {
        var a = i(e.insert || "head");
        if (!a)
          throw new Error(
            "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
          );
        a.appendChild(t);
      }
      return t;
    }
    var u,
      d =
        ((u = []),
        function (e, t) {
          return (u[e] = t), u.filter(Boolean).join("\n");
        });
    function f(e, t, n, o) {
      var r = n
        ? ""
        : o.media
        ? "@media ".concat(o.media, " {").concat(o.css, "}")
        : o.css;
      if (e.styleSheet) e.styleSheet.cssText = d(t, r);
      else {
        var i = document.createTextNode(r),
          a = e.childNodes;
        a[t] && e.removeChild(a[t]),
          a.length ? e.insertBefore(i, a[t]) : e.appendChild(i);
      }
    }
    function p(e, t, n) {
      var o = n.css,
        r = n.media,
        i = n.sourceMap;
      if (
        (r ? e.setAttribute("media", r) : e.removeAttribute("media"),
        i &&
          btoa &&
          (o += "\n/*# sourceMappingURL=data:application/json;base64,".concat(
            btoa(unescape(encodeURIComponent(JSON.stringify(i)))),
            " */"
          )),
        e.styleSheet)
      )
        e.styleSheet.cssText = o;
      else {
        for (; e.firstChild; ) e.removeChild(e.firstChild);
        e.appendChild(document.createTextNode(o));
      }
    }
    var _ = null,
      h = 0;
    function v(e, t) {
      var n, o, r;
      if (t.singleton) {
        var i = h++;
        (n = _ || (_ = s(t))),
          (o = f.bind(null, n, i, !1)),
          (r = f.bind(null, n, i, !0));
      } else
        (n = s(t)),
          (o = p.bind(null, n, t)),
          (r = function () {
            !(function (e) {
              if (null === e.parentNode) return !1;
              e.parentNode.removeChild(e);
            })(n);
          });
      return (
        o(e),
        function (t) {
          if (t) {
            if (
              t.css === e.css &&
              t.media === e.media &&
              t.sourceMap === e.sourceMap
            )
              return;
            o((e = t));
          } else r();
        }
      );
    }
    e.exports = function (e, t) {
      (t = t || {}).singleton ||
        "boolean" == typeof t.singleton ||
        (t.singleton = r());
      var n = c((e = e || []), t);
      return function (e) {
        if (
          ((e = e || []),
          "[object Array]" === Object.prototype.toString.call(e))
        ) {
          for (var o = 0; o < n.length; o++) {
            var r = l(n[o]);
            a[r].references--;
          }
          for (var i = c(e, t), s = 0; s < n.length; s++) {
            var u = l(n[s]);
            0 === a[u].references && (a[u].updater(), a.splice(u, 1));
          }
          n = i;
        }
      };
    };
  },
  function (e, t, n) {
    "use strict";
    e.exports = function (e) {
      var t = [];
      return (
        (t.toString = function () {
          return this.map(function (t) {
            var n = (function (e, t) {
              var n = e[1] || "",
                o = e[3];
              if (!o) return n;
              if (t && "function" == typeof btoa) {
                var r =
                    ((a = o),
                    (l = btoa(unescape(encodeURIComponent(JSON.stringify(a))))),
                    (c =
                      "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(
                        l
                      )),
                    "/*# ".concat(c, " */")),
                  i = o.sources.map(function (e) {
                    return "/*# sourceURL="
                      .concat(o.sourceRoot || "")
                      .concat(e, " */");
                  });
                return [n].concat(i).concat([r]).join("\n");
              }
              var a, l, c;
              return [n].join("\n");
            })(t, e);
            return t[2] ? "@media ".concat(t[2], " {").concat(n, "}") : n;
          }).join("");
        }),
        (t.i = function (e, n, o) {
          "string" == typeof e && (e = [[null, e, ""]]);
          var r = {};
          if (o)
            for (var i = 0; i < this.length; i++) {
              var a = this[i][0];
              null != a && (r[a] = !0);
            }
          for (var l = 0; l < e.length; l++) {
            var c = [].concat(e[l]);
            (o && r[c[0]]) ||
              (n &&
                (c[2]
                  ? (c[2] = "".concat(n, " and ").concat(c[2]))
                  : (c[2] = n)),
              t.push(c));
          }
        }),
        t
      );
    };
  },
  function (e, t) {
    e.exports =
      '<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.976 10.072l4.357-4.357.62.618L8.284 11h-.618L3 6.333l.619-.618 4.357 4.357z"></path></svg>';
  },
  function (e, t, n) {
    var o = n(2),
      r = n(17);
    "string" == typeof (r = r.__esModule ? r.default : r) &&
      (r = [[e.i, r, ""]]);
    var i = { insert: "head", singleton: !1 },
      a = (o(r, i), r.locals ? r.locals : {});
    e.exports = a;
  },
  function (e, t, n) {
    var o = n(2),
      r = n(19);
    "string" == typeof (r = r.__esModule ? r.default : r) &&
      (r = [[e.i, r, ""]]);
    var i = { insert: "head", singleton: !1 },
      a = (o(r, i), r.locals ? r.locals : {});
    e.exports = a;
  },
  function (e, t) {
    e.exports =
      '<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M9.13 15l-.53-.77a1.85 1.85 0 0 0-.28-2.54 3.51 3.51 0 0 1-1.19-2c-1.56 2.23-.75 3.46 0 4.55l-.55.76A4.4 4.4 0 0 1 3 10.46S2.79 8.3 5.28 6.19c0 0 2.82-2.61 1.84-4.54L7.83 1a6.57 6.57 0 0 1 2.61 6.94 2.57 2.57 0 0 0 .56-.81l.87-.07c.07.12 1.84 2.93.89 5.3A4.72 4.72 0 0 1 9.13 15zm-2-6.95l.87.39a3 3 0 0 0 .92 2.48 2.64 2.64 0 0 1 1 2.8A3.241 3.241 0 0 0 11.8 12a4.87 4.87 0 0 0-.41-3.63 1.85 1.85 0 0 1-1.84.86l-.35-.68a5.31 5.31 0 0 0-.89-5.8C8.17 4.87 6 6.83 5.93 6.94 3.86 8.7 4 10.33 4 10.4a3.47 3.47 0 0 0 1.59 3.14C5 12.14 5 10.46 7.16 8.05h-.03z"></path></svg>';
  },
  function (e, t, n) {
    var o = n(2),
      r = n(15);
    "string" == typeof (r = r.__esModule ? r.default : r) &&
      (r = [[e.i, r, ""]]);
    var i = { insert: "head", singleton: !1 },
      a = (o(r, i), r.locals ? r.locals : {});
    e.exports = a;
  },
  function (e, t, n) {
    e.exports = (function (e) {
      "use strict";
      var t = {
        classCallCheck: function (e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        },
      };
      return (
        (t.extends =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var o in n)
                Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
            }
            return e;
          }),
        (t.inherits = function (e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function, not " +
                typeof t
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: {
              value: e,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          })),
            t &&
              (Object.setPrototypeOf
                ? Object.setPrototypeOf(e, t)
                : (e.__proto__ = t));
        }),
        (t.objectWithoutProperties = function (e, t) {
          var n = {};
          for (var o in e)
            t.indexOf(o) >= 0 ||
              (Object.prototype.hasOwnProperty.call(e, o) && (n[o] = e[o]));
          return n;
        }),
        (t.possibleConstructorReturn = function (e, t) {
          if (!e)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
        }),
        (function (n) {
          function o() {
            var e, r, i;
            t.classCallCheck(this, o);
            for (var a = arguments.length, l = Array(a), c = 0; a > c; c++)
              l[c] = arguments[c];
            return (
              (e = r =
                t.possibleConstructorReturn(
                  this,
                  n.call.apply(n, [this].concat(l))
                )),
              (r.resize = function () {
                r.state.height !== r.base.offsetHeight &&
                  r.setState({ height: r.base.offsetHeight });
              }),
              (r.handleScroll = function () {
                r.setState({ offset: r.base.scrollTop }),
                  r.props.sync && r.forceUpdate();
              }),
              (i = e),
              t.possibleConstructorReturn(r, i)
            );
          }
          return (
            t.inherits(o, n),
            (o.prototype.componentDidUpdate = function () {
              this.resize();
            }),
            (o.prototype.componentDidMount = function () {
              this.resize(), addEventListener("resize", this.resize);
            }),
            (o.prototype.componentWillUnmount = function () {
              removeEventListener("resize", this.resize);
            }),
            (o.prototype.render = function (n, o) {
              var r = n.data,
                i = n.rowHeight,
                a = n.renderRow,
                l = n.overscanCount,
                c = void 0 === l ? 10 : l,
                s =
                  (n.sync,
                  t.objectWithoutProperties(n, [
                    "data",
                    "rowHeight",
                    "renderRow",
                    "overscanCount",
                    "sync",
                  ])),
                u = o.offset,
                d = void 0 === u ? 0 : u,
                f = o.height,
                p = (d / i) | 0,
                _ = ((void 0 === f ? 0 : f) / i) | 0;
              c && ((p = Math.max(0, p - (p % c))), (_ += c));
              var h = p + 1 + _,
                v = r.slice(p, h);
              return e.h(
                "div",
                t.extends({ onScroll: this.handleScroll }, s),
                e.h(
                  "div",
                  {
                    style:
                      "position:relative; overflow:hidden; width:100%; min-height:100%; height:" +
                      r.length * i +
                      "px;",
                  },
                  e.h(
                    "div",
                    {
                      style:
                        "position:absolute; top:0; left:0; height:100%; width:100%; overflow:visible; top:" +
                        p * i +
                        "px;",
                    },
                    v.map(a)
                  )
                )
              );
            }),
            o
          );
        })(e.Component)
      );
    })(n(0));
  },
  function (e, t) {
    e.exports =
      '<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.072 8.024L5.715 3.667l.618-.62L11 7.716v.618L6.333 13l-.618-.619 4.357-4.357z"></path></svg>';
  },
  function (e, t) {
    e.exports =
      '<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.495 9.052l.891 2.35h1.091L6.237 3h-1.02L2 11.402h1.095l.838-2.35h3.562zM5.811 4.453l.044.135 1.318 3.574H4.255l1.307-3.574.044-.135.038-.156.032-.152.021-.126h.023l.024.126.029.152.038.156zm7.984 6.011v.936h.96V7.498c0-.719-.18-1.272-.539-1.661-.359-.389-.889-.583-1.588-.583-.199 0-.401.019-.606.056a4.875 4.875 0 0 0-1.078.326 2.081 2.081 0 0 0-.343.188v.984c.266-.23.566-.411.904-.54a2.927 2.927 0 0 1 1.052-.193c.188 0 .358.028.513.085a.98.98 0 0 1 .396.267c.109.121.193.279.252.472.059.193.088.427.088.7l-1.811.252c-.344.047-.64.126-.888.237a1.947 1.947 0 0 0-.615.419 1.6 1.6 0 0 0-.36.58 2.134 2.134 0 0 0-.117.721c0 .246.042.475.124.688.082.213.203.397.363.551.16.154.36.276.598.366.238.09.513.135.826.135.402 0 .76-.092 1.075-.278.315-.186.572-.454.771-.806h.023zm-2.128-1.743c.176-.064.401-.114.674-.149l1.465-.205v.609c0 .246-.041.475-.123.688a1.727 1.727 0 0 1-.343.557 1.573 1.573 0 0 1-.524.372 1.63 1.63 0 0 1-.668.135c-.187 0-.353-.025-.495-.076a1.03 1.03 0 0 1-.357-.211.896.896 0 0 1-.22-.316A1.005 1.005 0 0 1 11 9.732a1.6 1.6 0 0 1 .055-.44.739.739 0 0 1 .202-.334 1.16 1.16 0 0 1 .41-.237z"></path></svg>';
  },
  function (e, t) {
    e.exports =
      '<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.012 2h.976v3.113l2.56-1.557.486.885L11.47 6l2.564 1.559-.485.885-2.561-1.557V10h-.976V6.887l-2.56 1.557-.486-.885L9.53 6 6.966 4.441l.485-.885 2.561 1.557V2zM2 10h4v4H2v-4z"></path></svg>';
  },
  function (e, t, n) {
    var o = n(2),
      r = n(18);
    "string" == typeof (r = r.__esModule ? r.default : r) &&
      (r = [[e.i, r, ""]]);
    var i = { insert: "head", singleton: !1 },
      a = (o(r, i), r.locals ? r.locals : {});
    e.exports = a;
  },
  function (e, t, n) {
    var o = n(2),
      r = n(20);
    "string" == typeof (r = r.__esModule ? r.default : r) &&
      (r = [[e.i, r, ""]]);
    var i = { insert: "head", singleton: !1 },
      a = (o(r, i), r.locals ? r.locals : {});
    e.exports = a;
  },
  function (e, t, n) {
    (t = n(3)(!1)).push([
      e.i,
      "._3L64Ue82mKIde6X9grQqFc{background:none;display:flex;align-items:center;border:1px solid transparent;opacity:.7;outline:0!important;margin-left:3px;margin-right:3px;padding:3px;cursor:pointer;color:var(--vscode-icon-foreground)}._3L64Ue82mKIde6X9grQqFc+._3L64Ue82mKIde6X9grQqFc{margin-left:0}._3L64Ue82mKIde6X9grQqFc:hover{opacity:1}._3L64Ue82mKIde6X9grQqFc[aria-checked=true]{background:var(--vscode-inputOption-activeBackground);border:1px solid var(--vscode-inputOption-activeBorder);opacity:1}._3L64Ue82mKIde6X9grQqFc>svg{width:1em}",
      "",
    ]),
      (t.locals = { button: "_3L64Ue82mKIde6X9grQqFc" }),
      (e.exports = t);
  },
  function (e, t, n) {
    (t = n(3)(!1)).push([
      e.i,
      "._3x0rBe7z5_zF4ztcxwpJ-W{font-family:var(--vscode-editor-font-family);flex-grow:1;overflow:auto}._1b34dFibaSVtItSNAnNe2{display:flex;height:23px}._1b34dFibaSVtItSNAnNe2:focus{outline:0;background:var(--vscode-list-focusBackground);color:var(--vscode-list-focusForeground)}._1b34dFibaSVtItSNAnNe2>div{margin:2px 4px}._3Z0MvsSlhWTwJFSt8qeC0d,._3JOL2PPlxMX1IEUhhx7P_O._-7fegm38qy3bIilfkddzY{text-align:right;width:110px}._3JOL2PPlxMX1IEUhhx7P_O._-7fegm38qy3bIilfkddzY{cursor:pointer}._3JOL2PPlxMX1IEUhhx7P_O svg{display:inline-block;height:1em;margin-right:.25em}._3Z0MvsSlhWTwJFSt8qeC0d{color:var(--vscode-terminal-ansiYellow);flex-shrink:0;z-index:0}._3Z0MvsSlhWTwJFSt8qeC0d,._3Z0MvsSlhWTwJFSt8qeC0d>span{position:relative}._1CFiMyqcoHkshkQ-b_QEYO{color:var(--vscode-terminal-foreground);padding-left:10px;display:flex;align-items:center;flex-grow:1;overflow:hidden}._1CFiMyqcoHkshkQ-b_QEYO._1NREdarikJ43-fgV8AkQPg{opacity:.5}._1CFiMyqcoHkshkQ-b_QEYO a{color:var(--vscode-terminal-foreground);cursor:pointer;text-decoration:none}._1CFiMyqcoHkshkQ-b_QEYO a:focus,._1CFiMyqcoHkshkQ-b_QEYO a:hover{text-decoration:underline}._1CFiMyqcoHkshkQ-b_QEYO a:focus{outline:1px solid var(--vscode-focusBorder)}._2AwzU_QC6t-TsE_ffmGwKR,.obIN9uYFE5APnztgOPZs4{overflow:hidden;white-space:nowrap}._2AwzU_QC6t-TsE_ffmGwKR,.obIN9uYFE5APnztgOPZs4{text-overflow:ellipsis}.obIN9uYFE5APnztgOPZs4{max-width:80%}._2AwzU_QC6t-TsE_ffmGwKR{font-family:var(--vscode-font-family);direction:rtl;flex-grow:1;margin-left:2em;font-size:.8em;opacity:.8}._2_M_JMIz1q7RanhnYF462d{background:none;opacity:.7;cursor:pointer;outline:0;border:0}._2_M_JMIz1q7RanhnYF462d,._2_M_JMIz1q7RanhnYF462d svg{width:1em}._2_M_JMIz1q7RanhnYF462d:hover{opacity:1}._3bSb8R1ntf-xw_PZLu-Btn{position:absolute;top:0;bottom:0;right:0;left:0;background:hsla(0,0%,100%,.1);z-index:-1;transform-origin:100%;border-bottom:2px solid hsla(0,0%,100%,.2)}.vscode-light ._3bSb8R1ntf-xw_PZLu-Btn{background:rgba(0,0,0,.2)}.vscode-high-contrast ._3bSb8R1ntf-xw_PZLu-Btn{background:#fff}",
      "",
    ]),
      (t.locals = {
        rows: "_3x0rBe7z5_zF4ztcxwpJ-W",
        row: "_1b34dFibaSVtItSNAnNe2",
        duration: "_3Z0MvsSlhWTwJFSt8qeC0d",
        heading: "_3JOL2PPlxMX1IEUhhx7P_O",
        timing: "_-7fegm38qy3bIilfkddzY",
        location: "_1CFiMyqcoHkshkQ-b_QEYO",
        virtual: "_1NREdarikJ43-fgV8AkQPg",
        file: "_2AwzU_QC6t-TsE_ffmGwKR",
        fn: "obIN9uYFE5APnztgOPZs4",
        expander: "_2_M_JMIz1q7RanhnYF462d",
        impactBar: "_3bSb8R1ntf-xw_PZLu-Btn",
      }),
      (e.exports = t);
  },
  function (e, t, n) {
    (t = n(3)(!1)).push([
      e.i,
      ".eSE-ObhG3B4dt1xRHvmOS{display:flex;align-items:center}",
      "",
    ]),
      (t.locals = { f: "eSE-ObhG3B4dt1xRHvmOS" }),
      (e.exports = t);
  },
  function (e, t, n) {
    (t = n(3)(!1)).push([
      e.i,
      "._2U6YVQGqfkc0BeybCv4Gf1{background:var(--vscode-editor-background);flex-grow:1;display:flex;align-items:center;border:1px solid transparent;background:var(--vscode-input-background)}._2U6YVQGqfkc0BeybCv4Gf1:focus-within{border-color:var(--vscode-focusBorder)}._2U6YVQGqfkc0BeybCv4Gf1>input{font-family:var(--vscode-font-family);font-weight:var(--vscode-editor-font-weight);font-size:var(--vscode-editor-font-size);background:none;border:0;padding:3px 4px;color:var(--vscode-input-foreground);flex-grow:1}._2U6YVQGqfkc0BeybCv4Gf1>input::-webkit-input-placeholder{color:var(--vscode-input-placeholderForeground)}._2U6YVQGqfkc0BeybCv4Gf1>input::-moz-placeholder{color:var(--vscode-input-placeholderForeground)}._2U6YVQGqfkc0BeybCv4Gf1>input:-ms-input-placeholder{color:var(--vscode-input-placeholderForeground)}._2U6YVQGqfkc0BeybCv4Gf1>input::-ms-input-placeholder{color:var(--vscode-input-placeholderForeground)}._2U6YVQGqfkc0BeybCv4Gf1>input::placeholder{color:var(--vscode-input-placeholderForeground)}._2U6YVQGqfkc0BeybCv4Gf1>input:focus{outline:0}._2U6YVQGqfkc0BeybCv4Gf1>button{flex-shrink:0;margin-top:2px;margin-bottom:2px;padding-top:1px;padding-bottom:1px;align-self:stretch}",
      "",
    ]),
      (t.locals = { wrapper: "_2U6YVQGqfkc0BeybCv4Gf1" }),
      (e.exports = t);
  },
  function (e, t, n) {
    (t = n(3)(!1)).push([
      e.i,
      "*{margin:0;padding:0}.e5hltR3Zt3zPqGT20WYb9{height:100vh;display:flex;flex-direction:column}.G7-e0fvzjVCZS7SY_luVk{flex-shrink:0;padding-bottom:10px}._2Q1Cpnx-319d_L0h0KeV5F{flex-basis:0px;flex-grow:1;overflow:hidden;display:flex;flex-direction:column;position:relative}",
      "",
    ]),
      (t.locals = {
        wrapper: "e5hltR3Zt3zPqGT20WYb9",
        filter: "G7-e0fvzjVCZS7SY_luVk",
        rows: "_2Q1Cpnx-319d_L0h0KeV5F",
      }),
      (e.exports = t);
  },
  function (e, t, n) {
    (t = n(3)(!1)).push([
      e.i,
      "*{margin:0;padding:0}._2izCz-tF-0tXq6Bzv3edne{height:100vh;display:flex;flex-direction:column}._3syzBrSP7Z7BgrG9S4Bto_{flex-shrink:0;padding-bottom:10px}._1HuHSf9eVIf58XjU2c-TgR{flex-basis:0px;flex-grow:1;overflow:hidden;display:flex;flex-direction:column;position:relative}",
      "",
    ]),
      (t.locals = {
        wrapper: "_2izCz-tF-0tXq6Bzv3edne",
        filter: "_3syzBrSP7Z7BgrG9S4Bto_",
        rows: "_1HuHSf9eVIf58XjU2c-TgR",
      }),
      (e.exports = t);
  },
  function (e, t, n) {
    "use strict";
    n.r(t);
    var o,
      r,
      i,
      a = n(0),
      l = [],
      c = a.options.__r,
      s = a.options.diffed,
      u = a.options.__c,
      d = a.options.unmount;
    function f(e) {
      a.options.__h && a.options.__h(r);
      var t = r.__H || (r.__H = { __: [], __h: [] });
      return e >= t.__.length && t.__.push({}), t.__[e];
    }
    function p(e) {
      return (function (e, t, n) {
        var i = f(o++);
        return (
          i.__c ||
            ((i.__c = r),
            (i.__ = [
              n ? n(t) : O(void 0, t),
              function (t) {
                var n = e(i.__[0], t);
                i.__[0] !== n && ((i.__[0] = n), i.__c.setState({}));
              },
            ])),
          i.__
        );
      })(O, e);
    }
    function _(e, t) {
      var n = f(o++);
      k(n.__H, t) && ((n.__ = e), (n.__H = t), r.__H.__h.push(n));
    }
    function h(e, t) {
      var n = f(o++);
      k(n.__H, t) && ((n.__ = e), (n.__H = t), r.__h.push(n));
    }
    function v(e) {
      return m(function () {
        return { current: e };
      }, []);
    }
    function m(e, t) {
      var n = f(o++);
      return k(n.__H, t) ? ((n.__H = t), (n.__h = e), (n.__ = e())) : n.__;
    }
    function g(e, t) {
      return m(function () {
        return e;
      }, t);
    }
    function b(e) {
      var t = r.context[e.__c];
      if (!t) return e.__;
      var n = f(o++);
      return null == n.__ && ((n.__ = !0), t.sub(r)), t.props.value;
    }
    function y() {
      l.some(function (e) {
        if (e.__P)
          try {
            e.__H.__h.forEach(x), e.__H.__h.forEach(w), (e.__H.__h = []);
          } catch (t) {
            return a.options.__e(t, e.__v), !0;
          }
      }),
        (l = []);
    }
    function x(e) {
      e.t && e.t();
    }
    function w(e) {
      var t = e.__();
      "function" == typeof t && (e.t = t);
    }
    function k(e, t) {
      return (
        !e ||
        t.some(function (t, n) {
          return t !== e[n];
        })
      );
    }
    function O(e, t) {
      return "function" == typeof t ? t(e) : t;
    }
    (a.options.__r = function (e) {
      c && c(e),
        (o = 0),
        (r = e.__c).__H &&
          (r.__H.__h.forEach(x), r.__H.__h.forEach(w), (r.__H.__h = []));
    }),
      (a.options.diffed = function (e) {
        s && s(e);
        var t = e.__c;
        if (t) {
          var n = t.__H;
          n &&
            n.__h.length &&
            ((1 !== l.push(t) && i === a.options.requestAnimationFrame) ||
              (
                (i = a.options.requestAnimationFrame) ||
                function (e) {
                  var t,
                    n = function () {
                      clearTimeout(o), cancelAnimationFrame(t), setTimeout(e);
                    },
                    o = setTimeout(n, 100);
                  "undefined" != typeof window &&
                    (t = requestAnimationFrame(n));
                }
              )(y));
        }
      }),
      (a.options.__c = function (e, t) {
        t.some(function (e) {
          try {
            e.__h.forEach(x),
              (e.__h = e.__h.filter(function (e) {
                return !e.__ || w(e);
              }));
          } catch (n) {
            t.some(function (e) {
              e.__h && (e.__h = []);
            }),
              (t = []),
              a.options.__e(n, e.__v);
          }
        }),
          u && u(e, t);
      }),
      (a.options.unmount = function (e) {
        d && d(e);
        var t = e.__c;
        if (t) {
          var n = t.__H;
          if (n)
            try {
              n.__.forEach(function (e) {
                return e.t && e.t();
              });
            } catch (e) {
              a.options.__e(e, t.__v);
            }
        }
      });
    var S = n(7),
      C = n(8),
      j = n.n(C);
    const F = ({ icon: e, label: t, checked: n, onChange: o, onClick: r }) => {
        const i = g(() => {
          null == r || r(), null == o || o(!n);
        }, [n, r, o]);
        return Object(a.h)("button", {
          className: j.a.button,
          type: "button",
          role: "switch",
          alt: t,
          title: t,
          "aria-label": t,
          "aria-checked": n ? "true" : "false",
          dangerouslySetInnerHTML: { __html: e },
          onClick: i,
        });
      },
      N = Object(a.createContext)(acquireVsCodeApi());
    class T {
      constructor(e, t) {
        (this.location = e),
          (this.parent = t),
          (this.children = {}),
          (this.aggregateTime = 0),
          (this.selfTime = 0),
          (this.ticks = 0),
          (this.childrenSize = 0);
      }
      static root() {
        return new T({
          id: -1,
          category: 0,
          selfTime: 0,
          aggregateTime: 0,
          ticks: 0,
          callFrame: {
            functionName: "(root)",
            lineNumber: -1,
            columnNumber: -1,
            scriptId: "0",
            url: "",
          },
        });
      }
      get id() {
        return this.location.id;
      }
      get callFrame() {
        return this.location.callFrame;
      }
      get src() {
        return this.location.src;
      }
      get category() {
        return this.location.category;
      }
      addNode(e) {
        (this.selfTime += e.selfTime), (this.aggregateTime += e.aggregateTime);
      }
      toJSON() {
        return {
          children: this.children,
          childrenSize: this.childrenSize,
          aggregateTime: this.aggregateTime,
          selfTime: this.selfTime,
          ticks: this.ticks,
          id: this.id,
          category: this.category,
          callFrame: this.callFrame,
        };
      }
    }
    const M = (e, t, n, o = t) => {
      let r = e.children[t.locationId];
      r ||
        ((r = new T(n.locations[t.locationId], e)),
        e.childrenSize++,
        (e.children[t.locationId] = r)),
        r.addNode(o),
        t.parent && M(r, n.nodes[t.parent], n, o);
    };
    var P = n(11),
      z = n(12);
    const E = {
      1: {
        ":": (e) => (t) => t === Number(e),
        "=": (e) => (t) => t === Number(e),
        ">": (e) => (t) => t > Number(e),
        "<": (e) => (t) => t < Number(e),
        "<=": (e) => (t) => t <= Number(e),
        ">=": (e) => (t) => t >= Number(e),
        "<>": (e) => (t) => t !== Number(e),
        "!=": (e) => (t) => t !== Number(e),
      },
      0: {
        ":": (e) => (t) => t === e,
        "=": (e) => (t) => t === e,
        "!=": (e) => (t) => t !== e,
        "<>": (e) => (t) => t !== e,
        "~=": (e) => {
          const t = /^\/(.+)\/([a-z])*$/.exec(e),
            n = t ? new RegExp(t[1], t[2]) : new RegExp(e);
          return (e) => ((n.lastIndex = 0), n.test(e));
        },
      },
    };
    class U extends Error {
      constructor(e, t) {
        super(e), (this.index = t);
      }
    }
    const q = new Set(
        Object.values(E)
          .map((e) => Object.keys(e))
          .reduce((e, t) => [...e, ...t], [])
      ),
      I = (e) => e.replace(/[.*+\-?^${}()|[\]\\]/g, "\\$&"),
      L = (e) => {
        const t = ((e, t, n = E) => {
            const o = [],
              r = [];
            for (let i = 0; i < e.length; i++) {
              const a = e[i];
              switch (a.token) {
                case 1:
                  const l = t.datasource.properties[a.text];
                  if (!l) {
                    const e = Object.keys(t.datasource.properties).join(", ");
                    throw new U(
                      `Unknown column @${a.text}, have: ${e}`,
                      a.start
                    );
                  }
                  const c = e[++i];
                  if (2 !== (null == c ? void 0 : c.token))
                    throw new U(
                      `Missing operator for column @${a.text}`,
                      a.start
                    );
                  if (!n[l.type][c.text])
                    throw new U(
                      `Unknown operator for @${a.text}, have: ${Object.keys(
                        n[l.type]
                      ).join(", ")}`,
                      c.start
                    );
                  const s = e[++i];
                  if (3 !== (null == s ? void 0 : s.token))
                    throw new U(
                      `Missing operand for column @${s.text}`,
                      a.start
                    );
                  const u = n[l.type][c.text](s.text);
                  o.push((e) => u(l.accessor(e)));
                  break;
                case 0:
                  r.push(a.text.trim());
                  break;
                default:
                  throw new Error(`Illegal token ${a.token}`);
              }
            }
            const i = r.join(" ").trim();
            if (i) {
              const e =
                  `/${t.regex ? i : I(i)}/` + (t.caseSensitive ? "" : "i"),
                r = n[0]["~="](e);
              o.push((e) => r(t.datasource.genericMatchStr(e)));
            }
            return (e) => {
              for (const t of o) if (!t(e)) return !1;
              return !0;
            };
          })(
            ((e) => {
              const t = [];
              let n = 0;
              const o = (t, o) => {
                let r = "";
                const i = n;
                for (; n < e.length; ) {
                  const t = e[n];
                  if ("\\" !== t) {
                    if (!o(t, n)) break;
                    (r += t), n++;
                  } else (r += e[++n]), n++;
                }
                return { token: t, text: r, start: i, length: n - i };
              };
              let r = 0;
              for ("@" === e[0] && ((r = 1), n++); n < e.length; ) {
                const i = e[n];
                switch (r) {
                  case 0:
                    const a = e.indexOf(" @", n);
                    -1 === a
                      ? t.push(o(0, () => !0))
                      : (t.push(o(0, (e, t) => t <= a)), n++, (r = 1));
                    break;
                  case 1:
                    t.push(o(1, (e) => e >= "A" && e <= "z")), (r = 2);
                    break;
                  case 2:
                    t.push(o(2, (e) => q.has(e))), (r = 3);
                    break;
                  case 3:
                    const l = '"' !== i && "'" !== i;
                    l || n++,
                      t.push(o(3, (e) => (l ? " " !== e : e !== i))),
                      (r = 0),
                      l || n++;
                    break;
                  default:
                    throw new Error(`Illegal state ${r}`);
                }
              }
              return t;
            })(e.input),
            e
          ),
          n = { selected: new Set(), selectedAndParents: new Set() };
        for (const o of e.datasource.data) H(e.datasource, t, o, n);
        return n;
      },
      H = (e, t, n, o) => {
        let r = !1;
        t(n) && (o.selected.add(n), o.selectedAndParents.add(n), (r = !0));
        for (const i of e.getChildren(n))
          H(e, t, i, o) && (o.selectedAndParents.add(n), (r = !0));
        return r;
      };
    var A = n(13),
      B = n.n(A);
    const R = ({
      value: e,
      onChange: t,
      placeholder: n = "Filter for function",
      foot: o,
    }) => {
      const r = g(
        (e) => {
          t(e.target.value);
        },
        [t]
      );
      return Object(a.h)(
        "div",
        { className: B.a.wrapper },
        Object(a.h)("input", {
          value: e,
          placeholder: n,
          onPaste: r,
          onKeyUp: r,
        }),
        o
      );
    };
    var Q = n(5),
      G = n.n(Q);
    const Y = (e, t) => {
        var n, o;
        const r = b(N),
          [i, a] = p(
            null !==
              (o =
                null === (n = r.getState()) || void 0 === n ? void 0 : n[e]) &&
              void 0 !== o
              ? o
              : t
          );
        return (
          ((e, t) => {
            const n = v(!0);
            _(() => {
              if (!n.current) return e();
              n.current = !1;
            }, t);
          })(() => {
            r.setState(
              Object.assign(Object.assign({}, r.getState()), { [e]: i })
            );
          }, [i]),
          [i, a]
        );
      },
      V =
        () =>
        ({ placeholder: e, data: t, onChange: n, foot: o }) => {
          const [r, i] = p(!1),
            [l, c] = p(!1),
            [s, u] = Y("filterText", ""),
            [d, f] = p(void 0);
          return (
            _(() => {
              try {
                n(L({ input: s, regex: r, caseSensitive: l, datasource: t })),
                  f(void 0);
              } catch (e) {
                f(e.message);
              }
            }, [r, l, s, t]),
            Object(a.h)(
              "div",
              { className: G.a.f },
              Object(a.h)(R, {
                value: s,
                placeholder: e,
                onChange: u,
                foot: Object(a.h)(
                  a.Fragment,
                  null,
                  Object(a.h)(F, {
                    icon: P,
                    label: "Match Case",
                    checked: l,
                    onChange: c,
                  }),
                  Object(a.h)(F, {
                    icon: z,
                    label: "Use Regular Expression",
                    checked: r,
                    onChange: i,
                  })
                ),
              }),
              d && Object(a.h)("div", { className: G.a.error }, d),
              o
            )
          );
        };
    var D = n(6),
      W = n.n(D);
    var $ = n(14),
      J = n.n($),
      Z = n(9),
      K = n.n(Z),
      X = n(4),
      ee = n(10);
    const te = (e, t) => {
      const n = new Set([...e]);
      return n.has(t) ? n.delete(t) : n.add(t), n;
    };
    Symbol("unset");
    var ne = function (e, t) {
      var n = {};
      for (var o in e)
        Object.prototype.hasOwnProperty.call(e, o) &&
          t.indexOf(o) < 0 &&
          (n[o] = e[o]);
      if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
        var r = 0;
        for (o = Object.getOwnPropertySymbols(e); r < o.length; r++)
          t.indexOf(o[r]) < 0 &&
            Object.prototype.propertyIsEnumerable.call(e, o[r]) &&
            (n[o[r]] = e[o[r]]);
      }
      return n;
    };
    const oe = (e) => {
        var { i: t } = e,
          n = ne(e, ["i"]);
        return Object(a.h)(
          "span",
          Object.assign(
            {
              dangerouslySetInnerHTML: { __html: t },
              style: { color: "var(--vscode-icon-foreground)" },
            },
            n
          )
        );
      },
      re = (...e) => e.filter(Boolean).join(" "),
      ie = new Intl.NumberFormat(void 0, {
        maximumFractionDigits: 2,
        minimumFractionDigits: 2,
      });
    var ae = n(1),
      le = n.n(ae);
    const ce = (e) => e.selfTime,
      se = (e) => e.aggregateTime,
      ue = (e) => {
        const t = [e.id];
        for (let n = e.parent; n; n = n.parent) t.push(n.id);
        return t.join("-");
      },
      de = ({ data: e, query: t }) => {
        const n = v(),
          [o, r] = p(() => ce),
          [i, l] = p(void 0),
          [c, s] = p(new Set()),
          u = (e) => {
            const t = Object.values(e.children);
            return o && t.sort((e, t) => o(t) - o(e)), t;
          },
          d = m(() => (o ? e.slice().sort((e, t) => o(t) - o(e)) : e), [e, o]),
          f = m(() => {
            const e = d
              .filter((e) => t.selectedAndParents.has(e))
              .map((e) => ({ node: e, position: 1, depth: 0 }));
            for (let t = 0; t < e.length; t++) {
              const { node: n, depth: o } = e[t];
              if (c.has(n)) {
                const r = u(n).map((e, t) => ({
                  node: e,
                  position: t + 1,
                  depth: o + 1,
                }));
                e.splice(t + 1, 0, ...r);
              }
            }
            return e;
          }, [d, c, o, t]),
          b = g(
            (e, t) => {
              var o, r, a, u, d, p;
              let _;
              switch (e.key) {
                case "Enter":
                case "Space":
                  s(te(c, t)), e.preventDefault();
                  break;
                case "ArrowDown":
                  _ =
                    null === (o = f[f.findIndex((e) => e.node === t) + 1]) ||
                    void 0 === o
                      ? void 0
                      : o.node;
                  break;
                case "ArrowUp":
                  _ =
                    null === (r = f[f.findIndex((e) => e.node === t) - 1]) ||
                    void 0 === r
                      ? void 0
                      : r.node;
                  break;
                case "ArrowLeft":
                  c.has(t)
                    ? s(
                        ((e, t) => {
                          const n = new Set([...e]);
                          return n.delete(t), n;
                        })(c, t)
                      )
                    : (_ = t.parent);
                  break;
                case "ArrowRight":
                  t.childrenSize > 0 && !c.has(t)
                    ? s(
                        ((e, t) => {
                          const n = new Set([...e, t]);
                          return n.add(t), n;
                        })(c, t)
                      )
                    : (_ =
                        null === (a = f.find((e) => e.node.parent === t)) ||
                        void 0 === a
                          ? void 0
                          : a.node);
                  break;
                case "Home":
                  n.current && (n.current.base.scrollTop = 0),
                    (_ = null === (u = f[0]) || void 0 === u ? void 0 : u.node);
                  break;
                case "End":
                  n.current &&
                    (n.current.base.scrollTop = n.current.base.scrollHeight),
                    (_ =
                      null === (d = f[f.length - 1]) || void 0 === d
                        ? void 0
                        : d.node);
                  break;
                case "*":
                  const l = new Set(c);
                  for (const e of Object.values(
                    (null === (p = null == i ? void 0 : i.parent) ||
                    void 0 === p
                      ? void 0
                      : p.children) || {}
                  ))
                    l.add(e);
                  s(l);
              }
              _ && (l(_), e.preventDefault());
            },
            [f, c, u]
          );
        _(() => {
          var e;
          return null === (e = n.current) || void 0 === e
            ? void 0
            : e.base.setAttribute("role", "tree");
        }, [n.current]),
          h(() => {
            var e;
            const t =
              null === (e = n.current) || void 0 === e ? void 0 : e.base;
            t &&
              i &&
              setTimeout(() => {
                const e = t.querySelector(`[data-row-id="${ue(i)}"]`);
                null == e || e.focus();
              });
          }, [i]);
        const y = g(
          (e) =>
            Object(a.h)(pe, {
              onKeyDown: b,
              node: e.node,
              depth: e.depth,
              position: e.position,
              expanded: c,
              onExpandChange: s,
              onFocus: l,
            }),
          [c, s, b]
        );
        return Object(a.h)(
          a.Fragment,
          null,
          Object(a.h)(fe, { sortFn: o, onChangeSort: r }),
          Object(a.h)(K.a, {
            ref: n,
            className: le.a.rows,
            data: f,
            renderRow: y,
            rowHeight: 25,
            overscanCount: 100,
          })
        );
      },
      fe = ({ sortFn: e, onChangeSort: t }) =>
        Object(a.h)(
          "div",
          { className: le.a.row },
          Object(a.h)(
            "div",
            {
              id: "self-time-header",
              className: re(le.a.heading, le.a.timing),
              "aria-sort": e === ce ? "descending" : void 0,
              onClick: g(() => t(() => (e === ce ? void 0 : ce)), [e]),
            },
            e === ce && Object(a.h)(oe, { i: X }),
            "Self Time"
          ),
          Object(a.h)(
            "div",
            {
              id: "total-time-header",
              className: re(le.a.heading, le.a.timing),
              "aria-sort": e === se ? "descending" : void 0,
              onClick: g(() => t(() => (e === se ? void 0 : se)), [e]),
            },
            e === se && Object(a.h)(oe, { i: X }),
            "Total Time"
          ),
          Object(a.h)("div", { className: le.a.heading }, "File")
        ),
      pe = ({
        node: e,
        depth: t,
        position: n,
        expanded: o,
        onKeyDown: r,
        onFocus: i,
        onExpandChange: l,
      }) => {
        var c, s;
        const u = b(N),
          d = g(
            (t) =>
              u.postMessage({
                type: "openDocument",
                callFrame: e.callFrame,
                location: e.src,
                toSide: t.altKey,
              }),
            [u, e]
          ),
          f = g(() => {
            l(te(o, e));
          }, [o, l, e]),
          p = g(
            (t) => {
              null == r || r(t, e);
            },
            [r, e]
          ),
          _ = g(() => {
            null == i || i(e);
          }, [i, e]);
        let h = e;
        for (; h.parent; ) h = h.parent;
        const v = ((e) => {
            var t;
            if (e.callFrame.url) {
              if (
                !(null === (t = e.src) || void 0 === t ? void 0 : t.source.path)
              ) {
                let t = `${e.callFrame.url}`;
                return (
                  e.callFrame.lineNumber >= 0 &&
                    (t += `:${e.callFrame.lineNumber}`),
                  t
                );
              }
              return e.src.relativePath
                ? `${e.src.relativePath}:${e.src.lineNumber}`
                : `${e.src.source.path}:${e.src.lineNumber}`;
            }
          })(e),
          m = Object(a.h)(
            "span",
            { className: le.a.expander },
            e.childrenSize > 0
              ? Object(a.h)(oe, { i: o.has(e) ? X : ee })
              : null
          );
        return Object(a.h)(
          "div",
          {
            className: le.a.row,
            "data-row-id": ue(e),
            onKeyDown: p,
            onFocus: _,
            onClick: f,
            tabIndex: 0,
            role: "treeitem",
            "aria-posinset": n,
            "aria-setsize":
              null !==
                (s =
                  null === (c = e.parent) || void 0 === c
                    ? void 0
                    : c.childrenSize) && void 0 !== s
                ? s
                : 1,
            "aria-level": t + 1,
            "aria-expanded": o.has(e),
          },
          Object(a.h)(
            "div",
            { className: le.a.duration, "aria-labelledby": "self-time-header" },
            Object(a.h)(_e, { impact: e.selfTime / h.selfTime }),
            ie.format(e.selfTime / 1e3),
            "ms"
          ),
          Object(a.h)(
            "div",
            {
              className: le.a.duration,
              "aria-labelledby": "total-time-header",
            },
            Object(a.h)(_e, { impact: e.aggregateTime / h.aggregateTime }),
            ie.format(e.aggregateTime / 1e3),
            "ms"
          ),
          v
            ? Object(a.h)(
                "div",
                { className: le.a.location, style: { marginLeft: 15 * t } },
                m,
                " ",
                Object(a.h)(
                  "span",
                  { className: le.a.fn },
                  e.callFrame.functionName
                ),
                Object(a.h)(
                  "span",
                  { className: le.a.file },
                  Object(a.h)("a", { href: "#", onClick: d }, v)
                )
              )
            : Object(a.h)(
                "div",
                {
                  className: re(le.a.location, le.a.virtual),
                  style: { marginLeft: 15 * t },
                },
                m,
                " ",
                Object(a.h)(
                  "span",
                  { className: le.a.fn },
                  e.callFrame.functionName
                )
              )
        );
      },
      _e = ({ impact: e }) =>
        Object(a.h)("div", {
          className: le.a.impactBar,
          style: { transform: `scaleX(${e})` },
        }),
      he = ((e) => {
        const t = T.root();
        for (const n of e.nodes) M(t, n, e), t.addNode(n);
        return t;
      })(MODEL),
      ve = Object.values(he.children),
      me = ({ data: e, body: t, filterFooter: n }) => {
        const o = m(V, []),
          [r, i] = p(void 0),
          l = m(() => (n ? Object(a.h)(n, null) : void 0), [n]);
        return Object(a.h)(
          a.Fragment,
          null,
          Object(a.h)(
            "div",
            { className: W.a.filter },
            Object(a.h)(o, {
              data: e,
              onChange: i,
              placeholder: "Filter functions or files, or start a query()",
              foot: l,
            })
          ),
          Object(a.h)(
            "div",
            { className: W.a.rows },
            r && Object(a.h)(t, { data: r })
          )
        );
      },
      ge = document.createElement("div");
    ge.classList.add(J.a.wrapper),
      document.body.appendChild(ge),
      Object(a.render)(
        Object(a.h)(me, {
          data: {
            data: ve,
            getChildren: (e) => Object.values(e.children),
            genericMatchStr: (e) => {
              var t, n;
              return [
                e.callFrame.functionName,
                e.callFrame.url,
                null !==
                  (n =
                    null === (t = e.src) || void 0 === t
                      ? void 0
                      : t.source.path) && void 0 !== n
                  ? n
                  : "",
              ].join(" ");
            },
            properties: {
              function: { type: 0, accessor: (e) => e.callFrame.functionName },
              url: { type: 0, accessor: (e) => e.callFrame.url },
              path: {
                type: 0,
                accessor: (e) => {
                  var t, n;
                  return null !==
                    (n =
                      null === (t = e.src) || void 0 === t
                        ? void 0
                        : t.relativePath) && void 0 !== n
                    ? n
                    : e.callFrame.url;
                },
              },
              line: {
                type: 1,
                accessor: (e) =>
                  e.src ? e.src.lineNumber : e.callFrame.lineNumber,
              },
              selfTime: { type: 1, accessor: (e) => e.selfTime },
              totalTime: { type: 1, accessor: (e) => e.aggregateTime },
              id: { type: 1, accessor: (e) => e.id },
            },
          },
          body: ({ data: e }) => Object(a.h)(de, { query: e, data: ve }),
          filterFooter: () => {
            const e = b(N),
              t = g(
                () =>
                  e.postMessage({
                    type: "reopenWith",
                    viewType: "jsProfileVisualizer.cpuprofile.flame",
                    requireExtension: "ms-vscode.vscode-js-profile-flame",
                  }),
                [e]
              );
            return Object(a.h)(F, {
              icon: S,
              label: "Show flame graph",
              checked: !1,
              onClick: t,
            });
          },
        }),
        ge
      );
  },
]);
