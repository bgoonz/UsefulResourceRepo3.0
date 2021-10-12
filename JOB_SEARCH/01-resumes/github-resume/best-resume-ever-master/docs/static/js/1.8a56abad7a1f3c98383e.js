(window.webpackJsonp = window.webpackJsonp || []).push([
  [1],
  [
    function (t, e, n) {
      "use strict";
      (function (t, n) {
        /*!
         * Vue.js v2.5.17
         * (c) 2014-2018 Evan You
         * Released under the MIT License.
         */
        var r = Object.freeze({});
        function i(t) {
          return void 0 === t || null === t;
        }
        function s(t) {
          return void 0 !== t && null !== t;
        }
        function a(t) {
          return !0 === t;
        }
        function o(t) {
          return (
            "string" == typeof t ||
            "number" == typeof t ||
            "symbol" == typeof t ||
            "boolean" == typeof t
          );
        }
        function u(t) {
          return null !== t && "object" == typeof t;
        }
        var c = Object.prototype.toString;
        function l(t) {
          return "[object Object]" === c.call(t);
        }
        function h(t) {
          return "[object RegExp]" === c.call(t);
        }
        function p(t) {
          var e = parseFloat(String(t));
          return e >= 0 && Math.floor(e) === e && isFinite(t);
        }
        function f(t) {
          return null == t
            ? ""
            : "object" == typeof t
            ? JSON.stringify(t, null, 2)
            : String(t);
        }
        function d(t) {
          var e = parseFloat(t);
          return isNaN(e) ? t : e;
        }
        function m(t, e) {
          for (
            var n = Object.create(null), r = t.split(","), i = 0;
            i < r.length;
            i++
          )
            n[r[i]] = !0;
          return e
            ? function (t) {
                return n[t.toLowerCase()];
              }
            : function (t) {
                return n[t];
              };
        }
        var v = m("slot,component", !0),
          y = m("key,ref,slot,slot-scope,is");
        function g(t, e) {
          if (t.length) {
            var n = t.indexOf(e);
            if (n > -1) return t.splice(n, 1);
          }
        }
        var x = Object.prototype.hasOwnProperty;
        function D(t, e) {
          return x.call(t, e);
        }
        function E(t) {
          var e = Object.create(null);
          return function (n) {
            return e[n] || (e[n] = t(n));
          };
        }
        var C = /-(\w)/g,
          A = E(function (t) {
            return t.replace(C, function (t, e) {
              return e ? e.toUpperCase() : "";
            });
          }),
          w = E(function (t) {
            return t.charAt(0).toUpperCase() + t.slice(1);
          }),
          b = /\B([A-Z])/g,
          S = E(function (t) {
            return t.replace(b, "-$1").toLowerCase();
          });
        var k = Function.prototype.bind
          ? function (t, e) {
              return t.bind(e);
            }
          : function (t, e) {
              function n(n) {
                var r = arguments.length;
                return r
                  ? r > 1
                    ? t.apply(e, arguments)
                    : t.call(e, n)
                  : t.call(e);
              }
              return (n._length = t.length), n;
            };
        function F(t, e) {
          e = e || 0;
          for (var n = t.length - e, r = new Array(n); n--; ) r[n] = t[n + e];
          return r;
        }
        function T(t, e) {
          for (var n in e) t[n] = e[n];
          return t;
        }
        function _(t) {
          for (var e = {}, n = 0; n < t.length; n++) t[n] && T(e, t[n]);
          return e;
        }
        function B(t, e, n) {}
        var I = function (t, e, n) {
            return !1;
          },
          N = function (t) {
            return t;
          };
        function O(t, e) {
          if (t === e) return !0;
          var n = u(t),
            r = u(e);
          if (!n || !r) return !n && !r && String(t) === String(e);
          try {
            var i = Array.isArray(t),
              s = Array.isArray(e);
            if (i && s)
              return (
                t.length === e.length &&
                t.every(function (t, n) {
                  return O(t, e[n]);
                })
              );
            if (i || s) return !1;
            var a = Object.keys(t),
              o = Object.keys(e);
            return (
              a.length === o.length &&
              a.every(function (n) {
                return O(t[n], e[n]);
              })
            );
          } catch (t) {
            return !1;
          }
        }
        function M(t, e) {
          for (var n = 0; n < t.length; n++) if (O(t[n], e)) return n;
          return -1;
        }
        function P(t) {
          var e = !1;
          return function () {
            e || ((e = !0), t.apply(this, arguments));
          };
        }
        var L = "data-server-rendered",
          R = ["component", "directive", "filter"],
          $ = [
            "beforeCreate",
            "created",
            "beforeMount",
            "mounted",
            "beforeUpdate",
            "updated",
            "beforeDestroy",
            "destroyed",
            "activated",
            "deactivated",
            "errorCaptured",
          ],
          U = {
            optionMergeStrategies: Object.create(null),
            silent: !1,
            productionTip: !1,
            devtools: !1,
            performance: !1,
            errorHandler: null,
            warnHandler: null,
            ignoredElements: [],
            keyCodes: Object.create(null),
            isReservedTag: I,
            isReservedAttr: I,
            isUnknownElement: I,
            getTagNamespace: B,
            parsePlatformTagName: N,
            mustUseProp: I,
            _lifecycleHooks: $,
          };
        function j(t) {
          var e = (t + "").charCodeAt(0);
          return 36 === e || 95 === e;
        }
        function J(t, e, n, r) {
          Object.defineProperty(t, e, {
            value: n,
            enumerable: !!r,
            writable: !0,
            configurable: !0,
          });
        }
        var X = /[^\w.$]/;
        var z,
          K = "__proto__" in {},
          H = "undefined" != typeof window,
          Y = "undefined" != typeof WXEnvironment && !!WXEnvironment.platform,
          V = Y && WXEnvironment.platform.toLowerCase(),
          q = H && window.navigator.userAgent.toLowerCase(),
          W = q && /msie|trident/.test(q),
          G = q && q.indexOf("msie 9.0") > 0,
          Z = q && q.indexOf("edge/") > 0,
          Q =
            (q && q.indexOf("android"),
            (q && /iphone|ipad|ipod|ios/.test(q)) || "ios" === V),
          tt = (q && /chrome\/\d+/.test(q), {}.watch),
          et = !1;
        if (H)
          try {
            var nt = {};
            Object.defineProperty(nt, "passive", {
              get: function () {
                et = !0;
              },
            }),
              window.addEventListener("test-passive", null, nt);
          } catch (t) {}
        var rt = function () {
            return (
              void 0 === z &&
                (z =
                  !H &&
                  !Y &&
                  void 0 !== t &&
                  "server" === t.process.env.VUE_ENV),
              z
            );
          },
          it = H && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;
        function st(t) {
          return "function" == typeof t && /native code/.test(t.toString());
        }
        var at,
          ot =
            "undefined" != typeof Symbol &&
            st(Symbol) &&
            "undefined" != typeof Reflect &&
            st(Reflect.ownKeys);
        at =
          "undefined" != typeof Set && st(Set)
            ? Set
            : (function () {
                function t() {
                  this.set = Object.create(null);
                }
                return (
                  (t.prototype.has = function (t) {
                    return !0 === this.set[t];
                  }),
                  (t.prototype.add = function (t) {
                    this.set[t] = !0;
                  }),
                  (t.prototype.clear = function () {
                    this.set = Object.create(null);
                  }),
                  t
                );
              })();
        var ut = B,
          ct = 0,
          lt = function () {
            (this.id = ct++), (this.subs = []);
          };
        (lt.prototype.addSub = function (t) {
          this.subs.push(t);
        }),
          (lt.prototype.removeSub = function (t) {
            g(this.subs, t);
          }),
          (lt.prototype.depend = function () {
            lt.target && lt.target.addDep(this);
          }),
          (lt.prototype.notify = function () {
            for (var t = this.subs.slice(), e = 0, n = t.length; e < n; e++)
              t[e].update();
          }),
          (lt.target = null);
        var ht = [];
        function pt(t) {
          lt.target && ht.push(lt.target), (lt.target = t);
        }
        function ft() {
          lt.target = ht.pop();
        }
        var dt = function (t, e, n, r, i, s, a, o) {
            (this.tag = t),
              (this.data = e),
              (this.children = n),
              (this.text = r),
              (this.elm = i),
              (this.ns = void 0),
              (this.context = s),
              (this.fnContext = void 0),
              (this.fnOptions = void 0),
              (this.fnScopeId = void 0),
              (this.key = e && e.key),
              (this.componentOptions = a),
              (this.componentInstance = void 0),
              (this.parent = void 0),
              (this.raw = !1),
              (this.isStatic = !1),
              (this.isRootInsert = !0),
              (this.isComment = !1),
              (this.isCloned = !1),
              (this.isOnce = !1),
              (this.asyncFactory = o),
              (this.asyncMeta = void 0),
              (this.isAsyncPlaceholder = !1);
          },
          mt = { child: { configurable: !0 } };
        (mt.child.get = function () {
          return this.componentInstance;
        }),
          Object.defineProperties(dt.prototype, mt);
        var vt = function (t) {
          void 0 === t && (t = "");
          var e = new dt();
          return (e.text = t), (e.isComment = !0), e;
        };
        function yt(t) {
          return new dt(void 0, void 0, void 0, String(t));
        }
        function gt(t) {
          var e = new dt(
            t.tag,
            t.data,
            t.children,
            t.text,
            t.elm,
            t.context,
            t.componentOptions,
            t.asyncFactory
          );
          return (
            (e.ns = t.ns),
            (e.isStatic = t.isStatic),
            (e.key = t.key),
            (e.isComment = t.isComment),
            (e.fnContext = t.fnContext),
            (e.fnOptions = t.fnOptions),
            (e.fnScopeId = t.fnScopeId),
            (e.isCloned = !0),
            e
          );
        }
        var xt = Array.prototype,
          Dt = Object.create(xt);
        [
          "push",
          "pop",
          "shift",
          "unshift",
          "splice",
          "sort",
          "reverse",
        ].forEach(function (t) {
          var e = xt[t];
          J(Dt, t, function () {
            for (var n = [], r = arguments.length; r--; ) n[r] = arguments[r];
            var i,
              s = e.apply(this, n),
              a = this.__ob__;
            switch (t) {
              case "push":
              case "unshift":
                i = n;
                break;
              case "splice":
                i = n.slice(2);
            }
            return i && a.observeArray(i), a.dep.notify(), s;
          });
        });
        var Et = Object.getOwnPropertyNames(Dt),
          Ct = !0;
        function At(t) {
          Ct = t;
        }
        var wt = function (t) {
          ((this.value = t),
          (this.dep = new lt()),
          (this.vmCount = 0),
          J(t, "__ob__", this),
          Array.isArray(t))
            ? ((K ? bt : St)(t, Dt, Et), this.observeArray(t))
            : this.walk(t);
        };
        function bt(t, e, n) {
          t.__proto__ = e;
        }
        function St(t, e, n) {
          for (var r = 0, i = n.length; r < i; r++) {
            var s = n[r];
            J(t, s, e[s]);
          }
        }
        function kt(t, e) {
          var n;
          if (u(t) && !(t instanceof dt))
            return (
              D(t, "__ob__") && t.__ob__ instanceof wt
                ? (n = t.__ob__)
                : Ct &&
                  !rt() &&
                  (Array.isArray(t) || l(t)) &&
                  Object.isExtensible(t) &&
                  !t._isVue &&
                  (n = new wt(t)),
              e && n && n.vmCount++,
              n
            );
        }
        function Ft(t, e, n, r, i) {
          var s = new lt(),
            a = Object.getOwnPropertyDescriptor(t, e);
          if (!a || !1 !== a.configurable) {
            var o = a && a.get;
            o || 2 !== arguments.length || (n = t[e]);
            var u = a && a.set,
              c = !i && kt(n);
            Object.defineProperty(t, e, {
              enumerable: !0,
              configurable: !0,
              get: function () {
                var e = o ? o.call(t) : n;
                return (
                  lt.target &&
                    (s.depend(),
                    c &&
                      (c.dep.depend(),
                      Array.isArray(e) &&
                        (function t(e) {
                          for (var n = void 0, r = 0, i = e.length; r < i; r++)
                            (n = e[r]) && n.__ob__ && n.__ob__.dep.depend(),
                              Array.isArray(n) && t(n);
                        })(e))),
                  e
                );
              },
              set: function (e) {
                var r = o ? o.call(t) : n;
                e === r ||
                  (e != e && r != r) ||
                  (u ? u.call(t, e) : (n = e), (c = !i && kt(e)), s.notify());
              },
            });
          }
        }
        function Tt(t, e, n) {
          if (Array.isArray(t) && p(e))
            return (t.length = Math.max(t.length, e)), t.splice(e, 1, n), n;
          if (e in t && !(e in Object.prototype)) return (t[e] = n), n;
          var r = t.__ob__;
          return t._isVue || (r && r.vmCount)
            ? n
            : r
            ? (Ft(r.value, e, n), r.dep.notify(), n)
            : ((t[e] = n), n);
        }
        function _t(t, e) {
          if (Array.isArray(t) && p(e)) t.splice(e, 1);
          else {
            var n = t.__ob__;
            t._isVue ||
              (n && n.vmCount) ||
              (D(t, e) && (delete t[e], n && n.dep.notify()));
          }
        }
        (wt.prototype.walk = function (t) {
          for (var e = Object.keys(t), n = 0; n < e.length; n++) Ft(t, e[n]);
        }),
          (wt.prototype.observeArray = function (t) {
            for (var e = 0, n = t.length; e < n; e++) kt(t[e]);
          });
        var Bt = U.optionMergeStrategies;
        function It(t, e) {
          if (!e) return t;
          for (var n, r, i, s = Object.keys(e), a = 0; a < s.length; a++)
            (r = t[(n = s[a])]),
              (i = e[n]),
              D(t, n) ? l(r) && l(i) && It(r, i) : Tt(t, n, i);
          return t;
        }
        function Nt(t, e, n) {
          return n
            ? function () {
                var r = "function" == typeof e ? e.call(n, n) : e,
                  i = "function" == typeof t ? t.call(n, n) : t;
                return r ? It(r, i) : i;
              }
            : e
            ? t
              ? function () {
                  return It(
                    "function" == typeof e ? e.call(this, this) : e,
                    "function" == typeof t ? t.call(this, this) : t
                  );
                }
              : e
            : t;
        }
        function Ot(t, e) {
          return e ? (t ? t.concat(e) : Array.isArray(e) ? e : [e]) : t;
        }
        function Mt(t, e, n, r) {
          var i = Object.create(t || null);
          return e ? T(i, e) : i;
        }
        (Bt.data = function (t, e, n) {
          return n ? Nt(t, e, n) : e && "function" != typeof e ? t : Nt(t, e);
        }),
          $.forEach(function (t) {
            Bt[t] = Ot;
          }),
          R.forEach(function (t) {
            Bt[t + "s"] = Mt;
          }),
          (Bt.watch = function (t, e, n, r) {
            if ((t === tt && (t = void 0), e === tt && (e = void 0), !e))
              return Object.create(t || null);
            if (!t) return e;
            var i = {};
            for (var s in (T(i, t), e)) {
              var a = i[s],
                o = e[s];
              a && !Array.isArray(a) && (a = [a]),
                (i[s] = a ? a.concat(o) : Array.isArray(o) ? o : [o]);
            }
            return i;
          }),
          (Bt.props =
            Bt.methods =
            Bt.inject =
            Bt.computed =
              function (t, e, n, r) {
                if (!t) return e;
                var i = Object.create(null);
                return T(i, t), e && T(i, e), i;
              }),
          (Bt.provide = Nt);
        var Pt = function (t, e) {
          return void 0 === e ? t : e;
        };
        function Lt(t, e, n) {
          "function" == typeof e && (e = e.options),
            (function (t, e) {
              var n = t.props;
              if (n) {
                var r,
                  i,
                  s = {};
                if (Array.isArray(n))
                  for (r = n.length; r--; )
                    "string" == typeof (i = n[r]) && (s[A(i)] = { type: null });
                else if (l(n))
                  for (var a in n)
                    (i = n[a]), (s[A(a)] = l(i) ? i : { type: i });
                t.props = s;
              }
            })(e),
            (function (t, e) {
              var n = t.inject;
              if (n) {
                var r = (t.inject = {});
                if (Array.isArray(n))
                  for (var i = 0; i < n.length; i++) r[n[i]] = { from: n[i] };
                else if (l(n))
                  for (var s in n) {
                    var a = n[s];
                    r[s] = l(a) ? T({ from: s }, a) : { from: a };
                  }
              }
            })(e),
            (function (t) {
              var e = t.directives;
              if (e)
                for (var n in e) {
                  var r = e[n];
                  "function" == typeof r && (e[n] = { bind: r, update: r });
                }
            })(e);
          var r = e.extends;
          if ((r && (t = Lt(t, r, n)), e.mixins))
            for (var i = 0, s = e.mixins.length; i < s; i++)
              t = Lt(t, e.mixins[i], n);
          var a,
            o = {};
          for (a in t) u(a);
          for (a in e) D(t, a) || u(a);
          function u(r) {
            var i = Bt[r] || Pt;
            o[r] = i(t[r], e[r], n, r);
          }
          return o;
        }
        function Rt(t, e, n, r) {
          if ("string" == typeof n) {
            var i = t[e];
            if (D(i, n)) return i[n];
            var s = A(n);
            if (D(i, s)) return i[s];
            var a = w(s);
            return D(i, a) ? i[a] : i[n] || i[s] || i[a];
          }
        }
        function $t(t, e, n, r) {
          var i = e[t],
            s = !D(n, t),
            a = n[t],
            o = Jt(Boolean, i.type);
          if (o > -1)
            if (s && !D(i, "default")) a = !1;
            else if ("" === a || a === S(t)) {
              var u = Jt(String, i.type);
              (u < 0 || o < u) && (a = !0);
            }
          if (void 0 === a) {
            a = (function (t, e, n) {
              if (!D(e, "default")) return;
              var r = e.default;
              0;
              if (
                t &&
                t.$options.propsData &&
                void 0 === t.$options.propsData[n] &&
                void 0 !== t._props[n]
              )
                return t._props[n];
              return "function" == typeof r && "Function" !== Ut(e.type)
                ? r.call(t)
                : r;
            })(r, i, t);
            var c = Ct;
            At(!0), kt(a), At(c);
          }
          return a;
        }
        function Ut(t) {
          var e = t && t.toString().match(/^\s*function (\w+)/);
          return e ? e[1] : "";
        }
        function jt(t, e) {
          return Ut(t) === Ut(e);
        }
        function Jt(t, e) {
          if (!Array.isArray(e)) return jt(e, t) ? 0 : -1;
          for (var n = 0, r = e.length; n < r; n++) if (jt(e[n], t)) return n;
          return -1;
        }
        function Xt(t, e, n) {
          if (e)
            for (var r = e; (r = r.$parent); ) {
              var i = r.$options.errorCaptured;
              if (i)
                for (var s = 0; s < i.length; s++)
                  try {
                    if (!1 === i[s].call(r, t, e, n)) return;
                  } catch (t) {
                    zt(t, r, "errorCaptured hook");
                  }
            }
          zt(t, e, n);
        }
        function zt(t, e, n) {
          if (U.errorHandler)
            try {
              return U.errorHandler.call(null, t, e, n);
            } catch (t) {
              Kt(t, null, "config.errorHandler");
            }
          Kt(t, e, n);
        }
        function Kt(t, e, n) {
          if ((!H && !Y) || "undefined" == typeof console) throw t;
          console.error(t);
        }
        var Ht,
          Yt,
          Vt = [],
          qt = !1;
        function Wt() {
          qt = !1;
          var t = Vt.slice(0);
          Vt.length = 0;
          for (var e = 0; e < t.length; e++) t[e]();
        }
        var Gt = !1;
        if (void 0 !== n && st(n))
          Yt = function () {
            n(Wt);
          };
        else if (
          "undefined" == typeof MessageChannel ||
          (!st(MessageChannel) &&
            "[object MessageChannelConstructor]" !== MessageChannel.toString())
        )
          Yt = function () {
            setTimeout(Wt, 0);
          };
        else {
          var Zt = new MessageChannel(),
            Qt = Zt.port2;
          (Zt.port1.onmessage = Wt),
            (Yt = function () {
              Qt.postMessage(1);
            });
        }
        if ("undefined" != typeof Promise && st(Promise)) {
          var te = Promise.resolve();
          Ht = function () {
            te.then(Wt), Q && setTimeout(B);
          };
        } else Ht = Yt;
        function ee(t, e) {
          var n;
          if (
            (Vt.push(function () {
              if (t)
                try {
                  t.call(e);
                } catch (t) {
                  Xt(t, e, "nextTick");
                }
              else n && n(e);
            }),
            qt || ((qt = !0), Gt ? Yt() : Ht()),
            !t && "undefined" != typeof Promise)
          )
            return new Promise(function (t) {
              n = t;
            });
        }
        var ne = new at();
        function re(t) {
          !(function t(e, n) {
            var r, i;
            var s = Array.isArray(e);
            if ((!s && !u(e)) || Object.isFrozen(e) || e instanceof dt) return;
            if (e.__ob__) {
              var a = e.__ob__.dep.id;
              if (n.has(a)) return;
              n.add(a);
            }
            if (s) for (r = e.length; r--; ) t(e[r], n);
            else for (i = Object.keys(e), r = i.length; r--; ) t(e[i[r]], n);
          })(t, ne),
            ne.clear();
        }
        var ie,
          se = E(function (t) {
            var e = "&" === t.charAt(0),
              n = "~" === (t = e ? t.slice(1) : t).charAt(0),
              r = "!" === (t = n ? t.slice(1) : t).charAt(0);
            return {
              name: (t = r ? t.slice(1) : t),
              once: n,
              capture: r,
              passive: e,
            };
          });
        function ae(t) {
          function e() {
            var t = arguments,
              n = e.fns;
            if (!Array.isArray(n)) return n.apply(null, arguments);
            for (var r = n.slice(), i = 0; i < r.length; i++)
              r[i].apply(null, t);
          }
          return (e.fns = t), e;
        }
        function oe(t, e, n, r, s) {
          var a, o, u, c;
          for (a in t)
            (o = t[a]),
              (u = e[a]),
              (c = se(a)),
              i(o) ||
                (i(u)
                  ? (i(o.fns) && (o = t[a] = ae(o)),
                    n(c.name, o, c.once, c.capture, c.passive, c.params))
                  : o !== u && ((u.fns = o), (t[a] = u)));
          for (a in e) i(t[a]) && r((c = se(a)).name, e[a], c.capture);
        }
        function ue(t, e, n) {
          var r;
          t instanceof dt && (t = t.data.hook || (t.data.hook = {}));
          var o = t[e];
          function u() {
            n.apply(this, arguments), g(r.fns, u);
          }
          i(o)
            ? (r = ae([u]))
            : s(o.fns) && a(o.merged)
            ? (r = o).fns.push(u)
            : (r = ae([o, u])),
            (r.merged = !0),
            (t[e] = r);
        }
        function ce(t, e, n, r, i) {
          if (s(e)) {
            if (D(e, n)) return (t[n] = e[n]), i || delete e[n], !0;
            if (D(e, r)) return (t[n] = e[r]), i || delete e[r], !0;
          }
          return !1;
        }
        function le(t) {
          return o(t)
            ? [yt(t)]
            : Array.isArray(t)
            ? (function t(e, n) {
                var r = [];
                var u, c, l, h;
                for (u = 0; u < e.length; u++)
                  i((c = e[u])) ||
                    "boolean" == typeof c ||
                    ((l = r.length - 1),
                    (h = r[l]),
                    Array.isArray(c)
                      ? c.length > 0 &&
                        (he((c = t(c, (n || "") + "_" + u))[0]) &&
                          he(h) &&
                          ((r[l] = yt(h.text + c[0].text)), c.shift()),
                        r.push.apply(r, c))
                      : o(c)
                      ? he(h)
                        ? (r[l] = yt(h.text + c))
                        : "" !== c && r.push(yt(c))
                      : he(c) && he(h)
                      ? (r[l] = yt(h.text + c.text))
                      : (a(e._isVList) &&
                          s(c.tag) &&
                          i(c.key) &&
                          s(n) &&
                          (c.key = "__vlist" + n + "_" + u + "__"),
                        r.push(c)));
                return r;
              })(t)
            : void 0;
        }
        function he(t) {
          return (
            s(t) &&
            s(t.text) &&
            (function (t) {
              return !1 === t;
            })(t.isComment)
          );
        }
        function pe(t, e) {
          return (
            (t.__esModule || (ot && "Module" === t[Symbol.toStringTag])) &&
              (t = t.default),
            u(t) ? e.extend(t) : t
          );
        }
        function fe(t) {
          return t.isComment && t.asyncFactory;
        }
        function de(t) {
          if (Array.isArray(t))
            for (var e = 0; e < t.length; e++) {
              var n = t[e];
              if (s(n) && (s(n.componentOptions) || fe(n))) return n;
            }
        }
        function me(t, e, n) {
          n ? ie.$once(t, e) : ie.$on(t, e);
        }
        function ve(t, e) {
          ie.$off(t, e);
        }
        function ye(t, e, n) {
          (ie = t), oe(e, n || {}, me, ve), (ie = void 0);
        }
        function ge(t, e) {
          var n = {};
          if (!t) return n;
          for (var r = 0, i = t.length; r < i; r++) {
            var s = t[r],
              a = s.data;
            if (
              (a && a.attrs && a.attrs.slot && delete a.attrs.slot,
              (s.context !== e && s.fnContext !== e) || !a || null == a.slot)
            )
              (n.default || (n.default = [])).push(s);
            else {
              var o = a.slot,
                u = n[o] || (n[o] = []);
              "template" === s.tag
                ? u.push.apply(u, s.children || [])
                : u.push(s);
            }
          }
          for (var c in n) n[c].every(xe) && delete n[c];
          return n;
        }
        function xe(t) {
          return (t.isComment && !t.asyncFactory) || " " === t.text;
        }
        function De(t, e) {
          e = e || {};
          for (var n = 0; n < t.length; n++)
            Array.isArray(t[n]) ? De(t[n], e) : (e[t[n].key] = t[n].fn);
          return e;
        }
        var Ee = null;
        function Ce(t) {
          for (; t && (t = t.$parent); ) if (t._inactive) return !0;
          return !1;
        }
        function Ae(t, e) {
          if (e) {
            if (((t._directInactive = !1), Ce(t))) return;
          } else if (t._directInactive) return;
          if (t._inactive || null === t._inactive) {
            t._inactive = !1;
            for (var n = 0; n < t.$children.length; n++) Ae(t.$children[n]);
            we(t, "activated");
          }
        }
        function we(t, e) {
          pt();
          var n = t.$options[e];
          if (n)
            for (var r = 0, i = n.length; r < i; r++)
              try {
                n[r].call(t);
              } catch (n) {
                Xt(n, t, e + " hook");
              }
          t._hasHookEvent && t.$emit("hook:" + e), ft();
        }
        var be = [],
          Se = [],
          ke = {},
          Fe = !1,
          Te = !1,
          _e = 0;
        function Be() {
          var t, e;
          for (
            Te = !0,
              be.sort(function (t, e) {
                return t.id - e.id;
              }),
              _e = 0;
            _e < be.length;
            _e++
          )
            (e = (t = be[_e]).id), (ke[e] = null), t.run();
          var n = Se.slice(),
            r = be.slice();
          (_e = be.length = Se.length = 0),
            (ke = {}),
            (Fe = Te = !1),
            (function (t) {
              for (var e = 0; e < t.length; e++)
                (t[e]._inactive = !0), Ae(t[e], !0);
            })(n),
            (function (t) {
              var e = t.length;
              for (; e--; ) {
                var n = t[e],
                  r = n.vm;
                r._watcher === n && r._isMounted && we(r, "updated");
              }
            })(r),
            it && U.devtools && it.emit("flush");
        }
        var Ie = 0,
          Ne = function (t, e, n, r, i) {
            (this.vm = t),
              i && (t._watcher = this),
              t._watchers.push(this),
              r
                ? ((this.deep = !!r.deep),
                  (this.user = !!r.user),
                  (this.lazy = !!r.lazy),
                  (this.sync = !!r.sync))
                : (this.deep = this.user = this.lazy = this.sync = !1),
              (this.cb = n),
              (this.id = ++Ie),
              (this.active = !0),
              (this.dirty = this.lazy),
              (this.deps = []),
              (this.newDeps = []),
              (this.depIds = new at()),
              (this.newDepIds = new at()),
              (this.expression = ""),
              "function" == typeof e
                ? (this.getter = e)
                : ((this.getter = (function (t) {
                    if (!X.test(t)) {
                      var e = t.split(".");
                      return function (t) {
                        for (var n = 0; n < e.length; n++) {
                          if (!t) return;
                          t = t[e[n]];
                        }
                        return t;
                      };
                    }
                  })(e)),
                  this.getter || (this.getter = function () {})),
              (this.value = this.lazy ? void 0 : this.get());
          };
        (Ne.prototype.get = function () {
          var t;
          pt(this);
          var e = this.vm;
          try {
            t = this.getter.call(e, e);
          } catch (t) {
            if (!this.user) throw t;
            Xt(t, e, 'getter for watcher "' + this.expression + '"');
          } finally {
            this.deep && re(t), ft(), this.cleanupDeps();
          }
          return t;
        }),
          (Ne.prototype.addDep = function (t) {
            var e = t.id;
            this.newDepIds.has(e) ||
              (this.newDepIds.add(e),
              this.newDeps.push(t),
              this.depIds.has(e) || t.addSub(this));
          }),
          (Ne.prototype.cleanupDeps = function () {
            for (var t = this.deps.length; t--; ) {
              var e = this.deps[t];
              this.newDepIds.has(e.id) || e.removeSub(this);
            }
            var n = this.depIds;
            (this.depIds = this.newDepIds),
              (this.newDepIds = n),
              this.newDepIds.clear(),
              (n = this.deps),
              (this.deps = this.newDeps),
              (this.newDeps = n),
              (this.newDeps.length = 0);
          }),
          (Ne.prototype.update = function () {
            this.lazy
              ? (this.dirty = !0)
              : this.sync
              ? this.run()
              : (function (t) {
                  var e = t.id;
                  if (null == ke[e]) {
                    if (((ke[e] = !0), Te)) {
                      for (var n = be.length - 1; n > _e && be[n].id > t.id; )
                        n--;
                      be.splice(n + 1, 0, t);
                    } else be.push(t);
                    Fe || ((Fe = !0), ee(Be));
                  }
                })(this);
          }),
          (Ne.prototype.run = function () {
            if (this.active) {
              var t = this.get();
              if (t !== this.value || u(t) || this.deep) {
                var e = this.value;
                if (((this.value = t), this.user))
                  try {
                    this.cb.call(this.vm, t, e);
                  } catch (t) {
                    Xt(
                      t,
                      this.vm,
                      'callback for watcher "' + this.expression + '"'
                    );
                  }
                else this.cb.call(this.vm, t, e);
              }
            }
          }),
          (Ne.prototype.evaluate = function () {
            (this.value = this.get()), (this.dirty = !1);
          }),
          (Ne.prototype.depend = function () {
            for (var t = this.deps.length; t--; ) this.deps[t].depend();
          }),
          (Ne.prototype.teardown = function () {
            if (this.active) {
              this.vm._isBeingDestroyed || g(this.vm._watchers, this);
              for (var t = this.deps.length; t--; )
                this.deps[t].removeSub(this);
              this.active = !1;
            }
          });
        var Oe = { enumerable: !0, configurable: !0, get: B, set: B };
        function Me(t, e, n) {
          (Oe.get = function () {
            return this[e][n];
          }),
            (Oe.set = function (t) {
              this[e][n] = t;
            }),
            Object.defineProperty(t, n, Oe);
        }
        function Pe(t) {
          t._watchers = [];
          var e = t.$options;
          e.props &&
            (function (t, e) {
              var n = t.$options.propsData || {},
                r = (t._props = {}),
                i = (t.$options._propKeys = []);
              t.$parent && At(!1);
              var s = function (s) {
                i.push(s);
                var a = $t(s, e, n, t);
                Ft(r, s, a), s in t || Me(t, "_props", s);
              };
              for (var a in e) s(a);
              At(!0);
            })(t, e.props),
            e.methods &&
              (function (t, e) {
                t.$options.props;
                for (var n in e) t[n] = null == e[n] ? B : k(e[n], t);
              })(t, e.methods),
            e.data
              ? (function (t) {
                  var e = t.$options.data;
                  l(
                    (e = t._data =
                      "function" == typeof e
                        ? (function (t, e) {
                            pt();
                            try {
                              return t.call(e, e);
                            } catch (t) {
                              return Xt(t, e, "data()"), {};
                            } finally {
                              ft();
                            }
                          })(e, t)
                        : e || {})
                  ) || (e = {});
                  var n = Object.keys(e),
                    r = t.$options.props,
                    i = (t.$options.methods, n.length);
                  for (; i--; ) {
                    var s = n[i];
                    0, (r && D(r, s)) || j(s) || Me(t, "_data", s);
                  }
                  kt(e, !0);
                })(t)
              : kt((t._data = {}), !0),
            e.computed &&
              (function (t, e) {
                var n = (t._computedWatchers = Object.create(null)),
                  r = rt();
                for (var i in e) {
                  var s = e[i],
                    a = "function" == typeof s ? s : s.get;
                  0,
                    r || (n[i] = new Ne(t, a || B, B, Le)),
                    i in t || Re(t, i, s);
                }
              })(t, e.computed),
            e.watch &&
              e.watch !== tt &&
              (function (t, e) {
                for (var n in e) {
                  var r = e[n];
                  if (Array.isArray(r))
                    for (var i = 0; i < r.length; i++) Ue(t, n, r[i]);
                  else Ue(t, n, r);
                }
              })(t, e.watch);
        }
        var Le = { lazy: !0 };
        function Re(t, e, n) {
          var r = !rt();
          "function" == typeof n
            ? ((Oe.get = r ? $e(e) : n), (Oe.set = B))
            : ((Oe.get = n.get ? (r && !1 !== n.cache ? $e(e) : n.get) : B),
              (Oe.set = n.set ? n.set : B)),
            Object.defineProperty(t, e, Oe);
        }
        function $e(t) {
          return function () {
            var e = this._computedWatchers && this._computedWatchers[t];
            if (e)
              return e.dirty && e.evaluate(), lt.target && e.depend(), e.value;
          };
        }
        function Ue(t, e, n, r) {
          return (
            l(n) && ((r = n), (n = n.handler)),
            "string" == typeof n && (n = t[n]),
            t.$watch(e, n, r)
          );
        }
        function je(t, e) {
          if (t) {
            for (
              var n = Object.create(null),
                r = ot
                  ? Reflect.ownKeys(t).filter(function (e) {
                      return Object.getOwnPropertyDescriptor(t, e).enumerable;
                    })
                  : Object.keys(t),
                i = 0;
              i < r.length;
              i++
            ) {
              for (var s = r[i], a = t[s].from, o = e; o; ) {
                if (o._provided && D(o._provided, a)) {
                  n[s] = o._provided[a];
                  break;
                }
                o = o.$parent;
              }
              if (!o)
                if ("default" in t[s]) {
                  var u = t[s].default;
                  n[s] = "function" == typeof u ? u.call(e) : u;
                } else 0;
            }
            return n;
          }
        }
        function Je(t, e) {
          var n, r, i, a, o;
          if (Array.isArray(t) || "string" == typeof t)
            for (n = new Array(t.length), r = 0, i = t.length; r < i; r++)
              n[r] = e(t[r], r);
          else if ("number" == typeof t)
            for (n = new Array(t), r = 0; r < t; r++) n[r] = e(r + 1, r);
          else if (u(t))
            for (
              a = Object.keys(t), n = new Array(a.length), r = 0, i = a.length;
              r < i;
              r++
            )
              (o = a[r]), (n[r] = e(t[o], o, r));
          return s(n) && (n._isVList = !0), n;
        }
        function Xe(t, e, n, r) {
          var i,
            s = this.$scopedSlots[t];
          if (s) (n = n || {}), r && (n = T(T({}, r), n)), (i = s(n) || e);
          else {
            var a = this.$slots[t];
            a && (a._rendered = !0), (i = a || e);
          }
          var o = n && n.slot;
          return o ? this.$createElement("template", { slot: o }, i) : i;
        }
        function ze(t) {
          return Rt(this.$options, "filters", t) || N;
        }
        function Ke(t, e) {
          return Array.isArray(t) ? -1 === t.indexOf(e) : t !== e;
        }
        function He(t, e, n, r, i) {
          var s = U.keyCodes[e] || n;
          return i && r && !U.keyCodes[e]
            ? Ke(i, r)
            : s
            ? Ke(s, t)
            : r
            ? S(r) !== e
            : void 0;
        }
        function Ye(t, e, n, r, i) {
          if (n)
            if (u(n)) {
              var s;
              Array.isArray(n) && (n = _(n));
              var a = function (a) {
                if ("class" === a || "style" === a || y(a)) s = t;
                else {
                  var o = t.attrs && t.attrs.type;
                  s =
                    r || U.mustUseProp(e, o, a)
                      ? t.domProps || (t.domProps = {})
                      : t.attrs || (t.attrs = {});
                }
                a in s ||
                  ((s[a] = n[a]),
                  i &&
                    ((t.on || (t.on = {}))["update:" + a] = function (t) {
                      n[a] = t;
                    }));
              };
              for (var o in n) a(o);
            } else;
          return t;
        }
        function Ve(t, e) {
          var n = this._staticTrees || (this._staticTrees = []),
            r = n[t];
          return r && !e
            ? r
            : (We(
                (r = n[t] =
                  this.$options.staticRenderFns[t].call(
                    this._renderProxy,
                    null,
                    this
                  )),
                "__static__" + t,
                !1
              ),
              r);
        }
        function qe(t, e, n) {
          return We(t, "__once__" + e + (n ? "_" + n : ""), !0), t;
        }
        function We(t, e, n) {
          if (Array.isArray(t))
            for (var r = 0; r < t.length; r++)
              t[r] && "string" != typeof t[r] && Ge(t[r], e + "_" + r, n);
          else Ge(t, e, n);
        }
        function Ge(t, e, n) {
          (t.isStatic = !0), (t.key = e), (t.isOnce = n);
        }
        function Ze(t, e) {
          if (e)
            if (l(e)) {
              var n = (t.on = t.on ? T({}, t.on) : {});
              for (var r in e) {
                var i = n[r],
                  s = e[r];
                n[r] = i ? [].concat(i, s) : s;
              }
            } else;
          return t;
        }
        function Qe(t) {
          (t._o = qe),
            (t._n = d),
            (t._s = f),
            (t._l = Je),
            (t._t = Xe),
            (t._q = O),
            (t._i = M),
            (t._m = Ve),
            (t._f = ze),
            (t._k = He),
            (t._b = Ye),
            (t._v = yt),
            (t._e = vt),
            (t._u = De),
            (t._g = Ze);
        }
        function tn(t, e, n, i, s) {
          var o,
            u = s.options;
          D(i, "_uid")
            ? ((o = Object.create(i))._original = i)
            : ((o = i), (i = i._original));
          var c = a(u._compiled),
            l = !c;
          (this.data = t),
            (this.props = e),
            (this.children = n),
            (this.parent = i),
            (this.listeners = t.on || r),
            (this.injections = je(u.inject, i)),
            (this.slots = function () {
              return ge(n, i);
            }),
            c &&
              ((this.$options = u),
              (this.$slots = this.slots()),
              (this.$scopedSlots = t.scopedSlots || r)),
            u._scopeId
              ? (this._c = function (t, e, n, r) {
                  var s = cn(o, t, e, n, r, l);
                  return (
                    s &&
                      !Array.isArray(s) &&
                      ((s.fnScopeId = u._scopeId), (s.fnContext = i)),
                    s
                  );
                })
              : (this._c = function (t, e, n, r) {
                  return cn(o, t, e, n, r, l);
                });
        }
        function en(t, e, n, r) {
          var i = gt(t);
          return (
            (i.fnContext = n),
            (i.fnOptions = r),
            e.slot && ((i.data || (i.data = {})).slot = e.slot),
            i
          );
        }
        function nn(t, e) {
          for (var n in e) t[A(n)] = e[n];
        }
        Qe(tn.prototype);
        var rn = {
            init: function (t, e, n, r) {
              if (
                t.componentInstance &&
                !t.componentInstance._isDestroyed &&
                t.data.keepAlive
              ) {
                var i = t;
                rn.prepatch(i, i);
              } else {
                (t.componentInstance = (function (t, e, n, r) {
                  var i = {
                      _isComponent: !0,
                      parent: e,
                      _parentVnode: t,
                      _parentElm: n || null,
                      _refElm: r || null,
                    },
                    a = t.data.inlineTemplate;
                  s(a) &&
                    ((i.render = a.render),
                    (i.staticRenderFns = a.staticRenderFns));
                  return new t.componentOptions.Ctor(i);
                })(t, Ee, n, r)).$mount(e ? t.elm : void 0, e);
              }
            },
            prepatch: function (t, e) {
              var n = e.componentOptions;
              !(function (t, e, n, i, s) {
                var a = !!(
                  s ||
                  t.$options._renderChildren ||
                  i.data.scopedSlots ||
                  t.$scopedSlots !== r
                );
                if (
                  ((t.$options._parentVnode = i),
                  (t.$vnode = i),
                  t._vnode && (t._vnode.parent = i),
                  (t.$options._renderChildren = s),
                  (t.$attrs = i.data.attrs || r),
                  (t.$listeners = n || r),
                  e && t.$options.props)
                ) {
                  At(!1);
                  for (
                    var o = t._props, u = t.$options._propKeys || [], c = 0;
                    c < u.length;
                    c++
                  ) {
                    var l = u[c],
                      h = t.$options.props;
                    o[l] = $t(l, h, e, t);
                  }
                  At(!0), (t.$options.propsData = e);
                }
                n = n || r;
                var p = t.$options._parentListeners;
                (t.$options._parentListeners = n),
                  ye(t, n, p),
                  a && ((t.$slots = ge(s, i.context)), t.$forceUpdate());
              })(
                (e.componentInstance = t.componentInstance),
                n.propsData,
                n.listeners,
                e,
                n.children
              );
            },
            insert: function (t) {
              var e = t.context,
                n = t.componentInstance;
              n._isMounted || ((n._isMounted = !0), we(n, "mounted")),
                t.data.keepAlive &&
                  (e._isMounted
                    ? (function (t) {
                        (t._inactive = !1), Se.push(t);
                      })(n)
                    : Ae(n, !0));
            },
            destroy: function (t) {
              var e = t.componentInstance;
              e._isDestroyed ||
                (t.data.keepAlive
                  ? (function t(e, n) {
                      if (
                        !(
                          (n && ((e._directInactive = !0), Ce(e))) ||
                          e._inactive
                        )
                      ) {
                        e._inactive = !0;
                        for (var r = 0; r < e.$children.length; r++)
                          t(e.$children[r]);
                        we(e, "deactivated");
                      }
                    })(e, !0)
                  : e.$destroy());
            },
          },
          sn = Object.keys(rn);
        function an(t, e, n, o, c) {
          if (!i(t)) {
            var l = n.$options._base;
            if ((u(t) && (t = l.extend(t)), "function" == typeof t)) {
              var h;
              if (
                i(t.cid) &&
                void 0 ===
                  (t = (function (t, e, n) {
                    if (a(t.error) && s(t.errorComp)) return t.errorComp;
                    if (s(t.resolved)) return t.resolved;
                    if (a(t.loading) && s(t.loadingComp)) return t.loadingComp;
                    if (!s(t.contexts)) {
                      var r = (t.contexts = [n]),
                        o = !0,
                        c = function () {
                          for (var t = 0, e = r.length; t < e; t++)
                            r[t].$forceUpdate();
                        },
                        l = P(function (n) {
                          (t.resolved = pe(n, e)), o || c();
                        }),
                        h = P(function (e) {
                          s(t.errorComp) && ((t.error = !0), c());
                        }),
                        p = t(l, h);
                      return (
                        u(p) &&
                          ("function" == typeof p.then
                            ? i(t.resolved) && p.then(l, h)
                            : s(p.component) &&
                              "function" == typeof p.component.then &&
                              (p.component.then(l, h),
                              s(p.error) && (t.errorComp = pe(p.error, e)),
                              s(p.loading) &&
                                ((t.loadingComp = pe(p.loading, e)),
                                0 === p.delay
                                  ? (t.loading = !0)
                                  : setTimeout(function () {
                                      i(t.resolved) &&
                                        i(t.error) &&
                                        ((t.loading = !0), c());
                                    }, p.delay || 200)),
                              s(p.timeout) &&
                                setTimeout(function () {
                                  i(t.resolved) && h(null);
                                }, p.timeout))),
                        (o = !1),
                        t.loading ? t.loadingComp : t.resolved
                      );
                    }
                    t.contexts.push(n);
                  })((h = t), l, n))
              )
                return (function (t, e, n, r, i) {
                  var s = vt();
                  return (
                    (s.asyncFactory = t),
                    (s.asyncMeta = {
                      data: e,
                      context: n,
                      children: r,
                      tag: i,
                    }),
                    s
                  );
                })(h, e, n, o, c);
              (e = e || {}),
                hn(t),
                s(e.model) &&
                  (function (t, e) {
                    var n = (t.model && t.model.prop) || "value",
                      r = (t.model && t.model.event) || "input";
                    (e.props || (e.props = {}))[n] = e.model.value;
                    var i = e.on || (e.on = {});
                    s(i[r])
                      ? (i[r] = [e.model.callback].concat(i[r]))
                      : (i[r] = e.model.callback);
                  })(t.options, e);
              var p = (function (t, e, n) {
                var r = e.options.props;
                if (!i(r)) {
                  var a = {},
                    o = t.attrs,
                    u = t.props;
                  if (s(o) || s(u))
                    for (var c in r) {
                      var l = S(c);
                      ce(a, u, c, l, !0) || ce(a, o, c, l, !1);
                    }
                  return a;
                }
              })(e, t);
              if (a(t.options.functional))
                return (function (t, e, n, i, a) {
                  var o = t.options,
                    u = {},
                    c = o.props;
                  if (s(c)) for (var l in c) u[l] = $t(l, c, e || r);
                  else
                    s(n.attrs) && nn(u, n.attrs), s(n.props) && nn(u, n.props);
                  var h = new tn(n, u, a, i, t),
                    p = o.render.call(null, h._c, h);
                  if (p instanceof dt) return en(p, n, h.parent, o);
                  if (Array.isArray(p)) {
                    for (
                      var f = le(p) || [], d = new Array(f.length), m = 0;
                      m < f.length;
                      m++
                    )
                      d[m] = en(f[m], n, h.parent, o);
                    return d;
                  }
                })(t, p, e, n, o);
              var f = e.on;
              if (((e.on = e.nativeOn), a(t.options.abstract))) {
                var d = e.slot;
                (e = {}), d && (e.slot = d);
              }
              !(function (t) {
                for (
                  var e = t.hook || (t.hook = {}), n = 0;
                  n < sn.length;
                  n++
                ) {
                  var r = sn[n];
                  e[r] = rn[r];
                }
              })(e);
              var m = t.options.name || c;
              return new dt(
                "vue-component-" + t.cid + (m ? "-" + m : ""),
                e,
                void 0,
                void 0,
                void 0,
                n,
                { Ctor: t, propsData: p, listeners: f, tag: c, children: o },
                h
              );
            }
          }
        }
        var on = 1,
          un = 2;
        function cn(t, e, n, r, c, l) {
          return (
            (Array.isArray(n) || o(n)) && ((c = r), (r = n), (n = void 0)),
            a(l) && (c = un),
            (function (t, e, n, r, o) {
              if (s(n) && s(n.__ob__)) return vt();
              s(n) && s(n.is) && (e = n.is);
              if (!e) return vt();
              0;
              Array.isArray(r) &&
                "function" == typeof r[0] &&
                (((n = n || {}).scopedSlots = { default: r[0] }),
                (r.length = 0));
              o === un
                ? (r = le(r))
                : o === on &&
                  (r = (function (t) {
                    for (var e = 0; e < t.length; e++)
                      if (Array.isArray(t[e]))
                        return Array.prototype.concat.apply([], t);
                    return t;
                  })(r));
              var c, l;
              if ("string" == typeof e) {
                var h;
                (l = (t.$vnode && t.$vnode.ns) || U.getTagNamespace(e)),
                  (c = U.isReservedTag(e)
                    ? new dt(U.parsePlatformTagName(e), n, r, void 0, void 0, t)
                    : s((h = Rt(t.$options, "components", e)))
                    ? an(h, n, t, r, e)
                    : new dt(e, n, r, void 0, void 0, t));
              } else c = an(e, n, t, r);
              return Array.isArray(c)
                ? c
                : s(c)
                ? (s(l) &&
                    (function t(e, n, r) {
                      e.ns = n;
                      "foreignObject" === e.tag && ((n = void 0), (r = !0));
                      if (s(e.children))
                        for (var o = 0, u = e.children.length; o < u; o++) {
                          var c = e.children[o];
                          s(c.tag) &&
                            (i(c.ns) || (a(r) && "svg" !== c.tag)) &&
                            t(c, n, r);
                        }
                    })(c, l),
                  s(n) &&
                    (function (t) {
                      u(t.style) && re(t.style);
                      u(t.class) && re(t.class);
                    })(n),
                  c)
                : vt();
            })(t, e, n, r, c)
          );
        }
        var ln = 0;
        function hn(t) {
          var e = t.options;
          if (t.super) {
            var n = hn(t.super);
            if (n !== t.superOptions) {
              t.superOptions = n;
              var r = (function (t) {
                var e,
                  n = t.options,
                  r = t.extendOptions,
                  i = t.sealedOptions;
                for (var s in n)
                  n[s] !== i[s] &&
                    (e || (e = {}), (e[s] = pn(n[s], r[s], i[s])));
                return e;
              })(t);
              r && T(t.extendOptions, r),
                (e = t.options = Lt(n, t.extendOptions)).name &&
                  (e.components[e.name] = t);
            }
          }
          return e;
        }
        function pn(t, e, n) {
          if (Array.isArray(t)) {
            var r = [];
            (n = Array.isArray(n) ? n : [n]), (e = Array.isArray(e) ? e : [e]);
            for (var i = 0; i < t.length; i++)
              (e.indexOf(t[i]) >= 0 || n.indexOf(t[i]) < 0) && r.push(t[i]);
            return r;
          }
          return t;
        }
        function fn(t) {
          this._init(t);
        }
        function dn(t) {
          t.cid = 0;
          var e = 1;
          t.extend = function (t) {
            t = t || {};
            var n = this,
              r = n.cid,
              i = t._Ctor || (t._Ctor = {});
            if (i[r]) return i[r];
            var s = t.name || n.options.name;
            var a = function (t) {
              this._init(t);
            };
            return (
              ((a.prototype = Object.create(n.prototype)).constructor = a),
              (a.cid = e++),
              (a.options = Lt(n.options, t)),
              (a.super = n),
              a.options.props &&
                (function (t) {
                  var e = t.options.props;
                  for (var n in e) Me(t.prototype, "_props", n);
                })(a),
              a.options.computed &&
                (function (t) {
                  var e = t.options.computed;
                  for (var n in e) Re(t.prototype, n, e[n]);
                })(a),
              (a.extend = n.extend),
              (a.mixin = n.mixin),
              (a.use = n.use),
              R.forEach(function (t) {
                a[t] = n[t];
              }),
              s && (a.options.components[s] = a),
              (a.superOptions = n.options),
              (a.extendOptions = t),
              (a.sealedOptions = T({}, a.options)),
              (i[r] = a),
              a
            );
          };
        }
        function mn(t) {
          return t && (t.Ctor.options.name || t.tag);
        }
        function vn(t, e) {
          return Array.isArray(t)
            ? t.indexOf(e) > -1
            : "string" == typeof t
            ? t.split(",").indexOf(e) > -1
            : !!h(t) && t.test(e);
        }
        function yn(t, e) {
          var n = t.cache,
            r = t.keys,
            i = t._vnode;
          for (var s in n) {
            var a = n[s];
            if (a) {
              var o = mn(a.componentOptions);
              o && !e(o) && gn(n, s, r, i);
            }
          }
        }
        function gn(t, e, n, r) {
          var i = t[e];
          !i || (r && i.tag === r.tag) || i.componentInstance.$destroy(),
            (t[e] = null),
            g(n, e);
        }
        !(function (t) {
          t.prototype._init = function (t) {
            var e = this;
            (e._uid = ln++),
              (e._isVue = !0),
              t && t._isComponent
                ? (function (t, e) {
                    var n = (t.$options = Object.create(t.constructor.options)),
                      r = e._parentVnode;
                    (n.parent = e.parent),
                      (n._parentVnode = r),
                      (n._parentElm = e._parentElm),
                      (n._refElm = e._refElm);
                    var i = r.componentOptions;
                    (n.propsData = i.propsData),
                      (n._parentListeners = i.listeners),
                      (n._renderChildren = i.children),
                      (n._componentTag = i.tag),
                      e.render &&
                        ((n.render = e.render),
                        (n.staticRenderFns = e.staticRenderFns));
                  })(e, t)
                : (e.$options = Lt(hn(e.constructor), t || {}, e)),
              (e._renderProxy = e),
              (e._self = e),
              (function (t) {
                var e = t.$options,
                  n = e.parent;
                if (n && !e.abstract) {
                  for (; n.$options.abstract && n.$parent; ) n = n.$parent;
                  n.$children.push(t);
                }
                (t.$parent = n),
                  (t.$root = n ? n.$root : t),
                  (t.$children = []),
                  (t.$refs = {}),
                  (t._watcher = null),
                  (t._inactive = null),
                  (t._directInactive = !1),
                  (t._isMounted = !1),
                  (t._isDestroyed = !1),
                  (t._isBeingDestroyed = !1);
              })(e),
              (function (t) {
                (t._events = Object.create(null)), (t._hasHookEvent = !1);
                var e = t.$options._parentListeners;
                e && ye(t, e);
              })(e),
              (function (t) {
                (t._vnode = null), (t._staticTrees = null);
                var e = t.$options,
                  n = (t.$vnode = e._parentVnode),
                  i = n && n.context;
                (t.$slots = ge(e._renderChildren, i)),
                  (t.$scopedSlots = r),
                  (t._c = function (e, n, r, i) {
                    return cn(t, e, n, r, i, !1);
                  }),
                  (t.$createElement = function (e, n, r, i) {
                    return cn(t, e, n, r, i, !0);
                  });
                var s = n && n.data;
                Ft(t, "$attrs", (s && s.attrs) || r, null, !0),
                  Ft(t, "$listeners", e._parentListeners || r, null, !0);
              })(e),
              we(e, "beforeCreate"),
              (function (t) {
                var e = je(t.$options.inject, t);
                e &&
                  (At(!1),
                  Object.keys(e).forEach(function (n) {
                    Ft(t, n, e[n]);
                  }),
                  At(!0));
              })(e),
              Pe(e),
              (function (t) {
                var e = t.$options.provide;
                e && (t._provided = "function" == typeof e ? e.call(t) : e);
              })(e),
              we(e, "created"),
              e.$options.el && e.$mount(e.$options.el);
          };
        })(fn),
          (function (t) {
            var e = {
                get: function () {
                  return this._data;
                },
              },
              n = {
                get: function () {
                  return this._props;
                },
              };
            Object.defineProperty(t.prototype, "$data", e),
              Object.defineProperty(t.prototype, "$props", n),
              (t.prototype.$set = Tt),
              (t.prototype.$delete = _t),
              (t.prototype.$watch = function (t, e, n) {
                if (l(e)) return Ue(this, t, e, n);
                (n = n || {}).user = !0;
                var r = new Ne(this, t, e, n);
                return (
                  n.immediate && e.call(this, r.value),
                  function () {
                    r.teardown();
                  }
                );
              });
          })(fn),
          (function (t) {
            var e = /^hook:/;
            (t.prototype.$on = function (t, n) {
              if (Array.isArray(t))
                for (var r = 0, i = t.length; r < i; r++) this.$on(t[r], n);
              else
                (this._events[t] || (this._events[t] = [])).push(n),
                  e.test(t) && (this._hasHookEvent = !0);
              return this;
            }),
              (t.prototype.$once = function (t, e) {
                var n = this;
                function r() {
                  n.$off(t, r), e.apply(n, arguments);
                }
                return (r.fn = e), n.$on(t, r), n;
              }),
              (t.prototype.$off = function (t, e) {
                var n = this;
                if (!arguments.length)
                  return (n._events = Object.create(null)), n;
                if (Array.isArray(t)) {
                  for (var r = 0, i = t.length; r < i; r++) this.$off(t[r], e);
                  return n;
                }
                var s = n._events[t];
                if (!s) return n;
                if (!e) return (n._events[t] = null), n;
                if (e)
                  for (var a, o = s.length; o--; )
                    if ((a = s[o]) === e || a.fn === e) {
                      s.splice(o, 1);
                      break;
                    }
                return n;
              }),
              (t.prototype.$emit = function (t) {
                var e = this._events[t];
                if (e) {
                  e = e.length > 1 ? F(e) : e;
                  for (var n = F(arguments, 1), r = 0, i = e.length; r < i; r++)
                    try {
                      e[r].apply(this, n);
                    } catch (e) {
                      Xt(e, this, 'event handler for "' + t + '"');
                    }
                }
                return this;
              });
          })(fn),
          (function (t) {
            (t.prototype._update = function (t, e) {
              var n = this;
              n._isMounted && we(n, "beforeUpdate");
              var r = n.$el,
                i = n._vnode,
                s = Ee;
              (Ee = n),
                (n._vnode = t),
                i
                  ? (n.$el = n.__patch__(i, t))
                  : ((n.$el = n.__patch__(
                      n.$el,
                      t,
                      e,
                      !1,
                      n.$options._parentElm,
                      n.$options._refElm
                    )),
                    (n.$options._parentElm = n.$options._refElm = null)),
                (Ee = s),
                r && (r.__vue__ = null),
                n.$el && (n.$el.__vue__ = n),
                n.$vnode &&
                  n.$parent &&
                  n.$vnode === n.$parent._vnode &&
                  (n.$parent.$el = n.$el);
            }),
              (t.prototype.$forceUpdate = function () {
                this._watcher && this._watcher.update();
              }),
              (t.prototype.$destroy = function () {
                var t = this;
                if (!t._isBeingDestroyed) {
                  we(t, "beforeDestroy"), (t._isBeingDestroyed = !0);
                  var e = t.$parent;
                  !e ||
                    e._isBeingDestroyed ||
                    t.$options.abstract ||
                    g(e.$children, t),
                    t._watcher && t._watcher.teardown();
                  for (var n = t._watchers.length; n--; )
                    t._watchers[n].teardown();
                  t._data.__ob__ && t._data.__ob__.vmCount--,
                    (t._isDestroyed = !0),
                    t.__patch__(t._vnode, null),
                    we(t, "destroyed"),
                    t.$off(),
                    t.$el && (t.$el.__vue__ = null),
                    t.$vnode && (t.$vnode.parent = null);
                }
              });
          })(fn),
          (function (t) {
            Qe(t.prototype),
              (t.prototype.$nextTick = function (t) {
                return ee(t, this);
              }),
              (t.prototype._render = function () {
                var t,
                  e = this,
                  n = e.$options,
                  i = n.render,
                  s = n._parentVnode;
                s && (e.$scopedSlots = s.data.scopedSlots || r), (e.$vnode = s);
                try {
                  t = i.call(e._renderProxy, e.$createElement);
                } catch (n) {
                  Xt(n, e, "render"), (t = e._vnode);
                }
                return t instanceof dt || (t = vt()), (t.parent = s), t;
              });
          })(fn);
        var xn = [String, RegExp, Array],
          Dn = {
            KeepAlive: {
              name: "keep-alive",
              abstract: !0,
              props: { include: xn, exclude: xn, max: [String, Number] },
              created: function () {
                (this.cache = Object.create(null)), (this.keys = []);
              },
              destroyed: function () {
                for (var t in this.cache) gn(this.cache, t, this.keys);
              },
              mounted: function () {
                var t = this;
                this.$watch("include", function (e) {
                  yn(t, function (t) {
                    return vn(e, t);
                  });
                }),
                  this.$watch("exclude", function (e) {
                    yn(t, function (t) {
                      return !vn(e, t);
                    });
                  });
              },
              render: function () {
                var t = this.$slots.default,
                  e = de(t),
                  n = e && e.componentOptions;
                if (n) {
                  var r = mn(n),
                    i = this.include,
                    s = this.exclude;
                  if ((i && (!r || !vn(i, r))) || (s && r && vn(s, r)))
                    return e;
                  var a = this.cache,
                    o = this.keys,
                    u =
                      null == e.key
                        ? n.Ctor.cid + (n.tag ? "::" + n.tag : "")
                        : e.key;
                  a[u]
                    ? ((e.componentInstance = a[u].componentInstance),
                      g(o, u),
                      o.push(u))
                    : ((a[u] = e),
                      o.push(u),
                      this.max &&
                        o.length > parseInt(this.max) &&
                        gn(a, o[0], o, this._vnode)),
                    (e.data.keepAlive = !0);
                }
                return e || (t && t[0]);
              },
            },
          };
        !(function (t) {
          var e = {
            get: function () {
              return U;
            },
          };
          Object.defineProperty(t, "config", e),
            (t.util = {
              warn: ut,
              extend: T,
              mergeOptions: Lt,
              defineReactive: Ft,
            }),
            (t.set = Tt),
            (t.delete = _t),
            (t.nextTick = ee),
            (t.options = Object.create(null)),
            R.forEach(function (e) {
              t.options[e + "s"] = Object.create(null);
            }),
            (t.options._base = t),
            T(t.options.components, Dn),
            (function (t) {
              t.use = function (t) {
                var e = this._installedPlugins || (this._installedPlugins = []);
                if (e.indexOf(t) > -1) return this;
                var n = F(arguments, 1);
                return (
                  n.unshift(this),
                  "function" == typeof t.install
                    ? t.install.apply(t, n)
                    : "function" == typeof t && t.apply(null, n),
                  e.push(t),
                  this
                );
              };
            })(t),
            (function (t) {
              t.mixin = function (t) {
                return (this.options = Lt(this.options, t)), this;
              };
            })(t),
            dn(t),
            (function (t) {
              R.forEach(function (e) {
                t[e] = function (t, n) {
                  return n
                    ? ("component" === e &&
                        l(n) &&
                        ((n.name = n.name || t),
                        (n = this.options._base.extend(n))),
                      "directive" === e &&
                        "function" == typeof n &&
                        (n = { bind: n, update: n }),
                      (this.options[e + "s"][t] = n),
                      n)
                    : this.options[e + "s"][t];
                };
              });
            })(t);
        })(fn),
          Object.defineProperty(fn.prototype, "$isServer", { get: rt }),
          Object.defineProperty(fn.prototype, "$ssrContext", {
            get: function () {
              return this.$vnode && this.$vnode.ssrContext;
            },
          }),
          Object.defineProperty(fn, "FunctionalRenderContext", { value: tn }),
          (fn.version = "2.5.17");
        var En = m("style,class"),
          Cn = m("input,textarea,option,select,progress"),
          An = function (t, e, n) {
            return (
              ("value" === n && Cn(t) && "button" !== e) ||
              ("selected" === n && "option" === t) ||
              ("checked" === n && "input" === t) ||
              ("muted" === n && "video" === t)
            );
          },
          wn = m("contenteditable,draggable,spellcheck"),
          bn = m(
            "allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,translate,truespeed,typemustmatch,visible"
          ),
          Sn = "http://www.w3.org/1999/xlink",
          kn = function (t) {
            return ":" === t.charAt(5) && "xlink" === t.slice(0, 5);
          },
          Fn = function (t) {
            return kn(t) ? t.slice(6, t.length) : "";
          },
          Tn = function (t) {
            return null == t || !1 === t;
          };
        function _n(t) {
          for (var e = t.data, n = t, r = t; s(r.componentInstance); )
            (r = r.componentInstance._vnode) && r.data && (e = Bn(r.data, e));
          for (; s((n = n.parent)); ) n && n.data && (e = Bn(e, n.data));
          return (function (t, e) {
            if (s(t) || s(e)) return In(t, Nn(e));
            return "";
          })(e.staticClass, e.class);
        }
        function Bn(t, e) {
          return {
            staticClass: In(t.staticClass, e.staticClass),
            class: s(t.class) ? [t.class, e.class] : e.class,
          };
        }
        function In(t, e) {
          return t ? (e ? t + " " + e : t) : e || "";
        }
        function Nn(t) {
          return Array.isArray(t)
            ? (function (t) {
                for (var e, n = "", r = 0, i = t.length; r < i; r++)
                  s((e = Nn(t[r]))) && "" !== e && (n && (n += " "), (n += e));
                return n;
              })(t)
            : u(t)
            ? (function (t) {
                var e = "";
                for (var n in t) t[n] && (e && (e += " "), (e += n));
                return e;
              })(t)
            : "string" == typeof t
            ? t
            : "";
        }
        var On = {
            svg: "http://www.w3.org/2000/svg",
            math: "http://www.w3.org/1998/Math/MathML",
          },
          Mn = m(
            "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot"
          ),
          Pn = m(
            "svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view",
            !0
          ),
          Ln = function (t) {
            return Mn(t) || Pn(t);
          };
        function Rn(t) {
          return Pn(t) ? "svg" : "math" === t ? "math" : void 0;
        }
        var $n = Object.create(null);
        var Un = m("text,number,password,search,email,tel,url");
        function jn(t) {
          if ("string" == typeof t) {
            var e = document.querySelector(t);
            return e || document.createElement("div");
          }
          return t;
        }
        var Jn = Object.freeze({
            createElement: function (t, e) {
              var n = document.createElement(t);
              return "select" !== t
                ? n
                : (e.data &&
                    e.data.attrs &&
                    void 0 !== e.data.attrs.multiple &&
                    n.setAttribute("multiple", "multiple"),
                  n);
            },
            createElementNS: function (t, e) {
              return document.createElementNS(On[t], e);
            },
            createTextNode: function (t) {
              return document.createTextNode(t);
            },
            createComment: function (t) {
              return document.createComment(t);
            },
            insertBefore: function (t, e, n) {
              t.insertBefore(e, n);
            },
            removeChild: function (t, e) {
              t.removeChild(e);
            },
            appendChild: function (t, e) {
              t.appendChild(e);
            },
            parentNode: function (t) {
              return t.parentNode;
            },
            nextSibling: function (t) {
              return t.nextSibling;
            },
            tagName: function (t) {
              return t.tagName;
            },
            setTextContent: function (t, e) {
              t.textContent = e;
            },
            setStyleScope: function (t, e) {
              t.setAttribute(e, "");
            },
          }),
          Xn = {
            create: function (t, e) {
              zn(e);
            },
            update: function (t, e) {
              t.data.ref !== e.data.ref && (zn(t, !0), zn(e));
            },
            destroy: function (t) {
              zn(t, !0);
            },
          };
        function zn(t, e) {
          var n = t.data.ref;
          if (s(n)) {
            var r = t.context,
              i = t.componentInstance || t.elm,
              a = r.$refs;
            e
              ? Array.isArray(a[n])
                ? g(a[n], i)
                : a[n] === i && (a[n] = void 0)
              : t.data.refInFor
              ? Array.isArray(a[n])
                ? a[n].indexOf(i) < 0 && a[n].push(i)
                : (a[n] = [i])
              : (a[n] = i);
          }
        }
        var Kn = new dt("", {}, []),
          Hn = ["create", "activate", "update", "remove", "destroy"];
        function Yn(t, e) {
          return (
            t.key === e.key &&
            ((t.tag === e.tag &&
              t.isComment === e.isComment &&
              s(t.data) === s(e.data) &&
              (function (t, e) {
                if ("input" !== t.tag) return !0;
                var n,
                  r = s((n = t.data)) && s((n = n.attrs)) && n.type,
                  i = s((n = e.data)) && s((n = n.attrs)) && n.type;
                return r === i || (Un(r) && Un(i));
              })(t, e)) ||
              (a(t.isAsyncPlaceholder) &&
                t.asyncFactory === e.asyncFactory &&
                i(e.asyncFactory.error)))
          );
        }
        function Vn(t, e, n) {
          var r,
            i,
            a = {};
          for (r = e; r <= n; ++r) s((i = t[r].key)) && (a[i] = r);
          return a;
        }
        var qn = {
          create: Wn,
          update: Wn,
          destroy: function (t) {
            Wn(t, Kn);
          },
        };
        function Wn(t, e) {
          (t.data.directives || e.data.directives) &&
            (function (t, e) {
              var n,
                r,
                i,
                s = t === Kn,
                a = e === Kn,
                o = Zn(t.data.directives, t.context),
                u = Zn(e.data.directives, e.context),
                c = [],
                l = [];
              for (n in u)
                (r = o[n]),
                  (i = u[n]),
                  r
                    ? ((i.oldValue = r.value),
                      tr(i, "update", e, t),
                      i.def && i.def.componentUpdated && l.push(i))
                    : (tr(i, "bind", e, t),
                      i.def && i.def.inserted && c.push(i));
              if (c.length) {
                var h = function () {
                  for (var n = 0; n < c.length; n++) tr(c[n], "inserted", e, t);
                };
                s ? ue(e, "insert", h) : h();
              }
              l.length &&
                ue(e, "postpatch", function () {
                  for (var n = 0; n < l.length; n++)
                    tr(l[n], "componentUpdated", e, t);
                });
              if (!s) for (n in o) u[n] || tr(o[n], "unbind", t, t, a);
            })(t, e);
        }
        var Gn = Object.create(null);
        function Zn(t, e) {
          var n,
            r,
            i = Object.create(null);
          if (!t) return i;
          for (n = 0; n < t.length; n++)
            (r = t[n]).modifiers || (r.modifiers = Gn),
              (i[Qn(r)] = r),
              (r.def = Rt(e.$options, "directives", r.name));
          return i;
        }
        function Qn(t) {
          return (
            t.rawName || t.name + "." + Object.keys(t.modifiers || {}).join(".")
          );
        }
        function tr(t, e, n, r, i) {
          var s = t.def && t.def[e];
          if (s)
            try {
              s(n.elm, t, n, r, i);
            } catch (r) {
              Xt(r, n.context, "directive " + t.name + " " + e + " hook");
            }
        }
        var er = [Xn, qn];
        function nr(t, e) {
          var n = e.componentOptions;
          if (
            !(
              (s(n) && !1 === n.Ctor.options.inheritAttrs) ||
              (i(t.data.attrs) && i(e.data.attrs))
            )
          ) {
            var r,
              a,
              o = e.elm,
              u = t.data.attrs || {},
              c = e.data.attrs || {};
            for (r in (s(c.__ob__) && (c = e.data.attrs = T({}, c)), c))
              (a = c[r]), u[r] !== a && rr(o, r, a);
            for (r in ((W || Z) &&
              c.value !== u.value &&
              rr(o, "value", c.value),
            u))
              i(c[r]) &&
                (kn(r)
                  ? o.removeAttributeNS(Sn, Fn(r))
                  : wn(r) || o.removeAttribute(r));
          }
        }
        function rr(t, e, n) {
          t.tagName.indexOf("-") > -1
            ? ir(t, e, n)
            : bn(e)
            ? Tn(n)
              ? t.removeAttribute(e)
              : ((n =
                  "allowfullscreen" === e && "EMBED" === t.tagName
                    ? "true"
                    : e),
                t.setAttribute(e, n))
            : wn(e)
            ? t.setAttribute(e, Tn(n) || "false" === n ? "false" : "true")
            : kn(e)
            ? Tn(n)
              ? t.removeAttributeNS(Sn, Fn(e))
              : t.setAttributeNS(Sn, e, n)
            : ir(t, e, n);
        }
        function ir(t, e, n) {
          if (Tn(n)) t.removeAttribute(e);
          else {
            if (
              W &&
              !G &&
              "TEXTAREA" === t.tagName &&
              "placeholder" === e &&
              !t.__ieph
            ) {
              var r = function (e) {
                e.stopImmediatePropagation(), t.removeEventListener("input", r);
              };
              t.addEventListener("input", r), (t.__ieph = !0);
            }
            t.setAttribute(e, n);
          }
        }
        var sr = { create: nr, update: nr };
        function ar(t, e) {
          var n = e.elm,
            r = e.data,
            a = t.data;
          if (
            !(
              i(r.staticClass) &&
              i(r.class) &&
              (i(a) || (i(a.staticClass) && i(a.class)))
            )
          ) {
            var o = _n(e),
              u = n._transitionClasses;
            s(u) && (o = In(o, Nn(u))),
              o !== n._prevClass &&
                (n.setAttribute("class", o), (n._prevClass = o));
          }
        }
        var or,
          ur,
          cr,
          lr,
          hr,
          pr,
          fr = { create: ar, update: ar },
          dr = /[\w).+\-_$\]]/;
        function mr(t) {
          var e,
            n,
            r,
            i,
            s,
            a = !1,
            o = !1,
            u = !1,
            c = !1,
            l = 0,
            h = 0,
            p = 0,
            f = 0;
          for (r = 0; r < t.length; r++)
            if (((n = e), (e = t.charCodeAt(r)), a))
              39 === e && 92 !== n && (a = !1);
            else if (o) 34 === e && 92 !== n && (o = !1);
            else if (u) 96 === e && 92 !== n && (u = !1);
            else if (c) 47 === e && 92 !== n && (c = !1);
            else if (
              124 !== e ||
              124 === t.charCodeAt(r + 1) ||
              124 === t.charCodeAt(r - 1) ||
              l ||
              h ||
              p
            ) {
              switch (e) {
                case 34:
                  o = !0;
                  break;
                case 39:
                  a = !0;
                  break;
                case 96:
                  u = !0;
                  break;
                case 40:
                  p++;
                  break;
                case 41:
                  p--;
                  break;
                case 91:
                  h++;
                  break;
                case 93:
                  h--;
                  break;
                case 123:
                  l++;
                  break;
                case 125:
                  l--;
              }
              if (47 === e) {
                for (
                  var d = r - 1, m = void 0;
                  d >= 0 && " " === (m = t.charAt(d));
                  d--
                );
                (m && dr.test(m)) || (c = !0);
              }
            } else
              void 0 === i ? ((f = r + 1), (i = t.slice(0, r).trim())) : v();
          function v() {
            (s || (s = [])).push(t.slice(f, r).trim()), (f = r + 1);
          }
          if ((void 0 === i ? (i = t.slice(0, r).trim()) : 0 !== f && v(), s))
            for (r = 0; r < s.length; r++) i = vr(i, s[r]);
          return i;
        }
        function vr(t, e) {
          var n = e.indexOf("(");
          if (n < 0) return '_f("' + e + '")(' + t + ")";
          var r = e.slice(0, n),
            i = e.slice(n + 1);
          return '_f("' + r + '")(' + t + (")" !== i ? "," + i : i);
        }
        function yr(t) {
          console.error("[Vue compiler]: " + t);
        }
        function gr(t, e) {
          return t
            ? t
                .map(function (t) {
                  return t[e];
                })
                .filter(function (t) {
                  return t;
                })
            : [];
        }
        function xr(t, e, n) {
          (t.props || (t.props = [])).push({ name: e, value: n }),
            (t.plain = !1);
        }
        function Dr(t, e, n) {
          (t.attrs || (t.attrs = [])).push({ name: e, value: n }),
            (t.plain = !1);
        }
        function Er(t, e, n) {
          (t.attrsMap[e] = n), t.attrsList.push({ name: e, value: n });
        }
        function Cr(t, e, n, r, i, s) {
          (t.directives || (t.directives = [])).push({
            name: e,
            rawName: n,
            value: r,
            arg: i,
            modifiers: s,
          }),
            (t.plain = !1);
        }
        function Ar(t, e, n, i, s, a) {
          var o;
          (i = i || r).capture && (delete i.capture, (e = "!" + e)),
            i.once && (delete i.once, (e = "~" + e)),
            i.passive && (delete i.passive, (e = "&" + e)),
            "click" === e &&
              (i.right
                ? ((e = "contextmenu"), delete i.right)
                : i.middle && (e = "mouseup")),
            i.native
              ? (delete i.native, (o = t.nativeEvents || (t.nativeEvents = {})))
              : (o = t.events || (t.events = {}));
          var u = { value: n.trim() };
          i !== r && (u.modifiers = i);
          var c = o[e];
          Array.isArray(c)
            ? s
              ? c.unshift(u)
              : c.push(u)
            : (o[e] = c ? (s ? [u, c] : [c, u]) : u),
            (t.plain = !1);
        }
        function wr(t, e, n) {
          var r = br(t, ":" + e) || br(t, "v-bind:" + e);
          if (null != r) return mr(r);
          if (!1 !== n) {
            var i = br(t, e);
            if (null != i) return JSON.stringify(i);
          }
        }
        function br(t, e, n) {
          var r;
          if (null != (r = t.attrsMap[e]))
            for (var i = t.attrsList, s = 0, a = i.length; s < a; s++)
              if (i[s].name === e) {
                i.splice(s, 1);
                break;
              }
          return n && delete t.attrsMap[e], r;
        }
        function Sr(t, e, n) {
          var r = n || {},
            i = r.number,
            s = "$$v";
          r.trim && (s = "(typeof $$v === 'string'? $$v.trim(): $$v)"),
            i && (s = "_n(" + s + ")");
          var a = kr(e, s);
          t.model = {
            value: "(" + e + ")",
            expression: '"' + e + '"',
            callback: "function ($$v) {" + a + "}",
          };
        }
        function kr(t, e) {
          var n = (function (t) {
            if (
              ((t = t.trim()),
              (or = t.length),
              t.indexOf("[") < 0 || t.lastIndexOf("]") < or - 1)
            )
              return (lr = t.lastIndexOf(".")) > -1
                ? { exp: t.slice(0, lr), key: '"' + t.slice(lr + 1) + '"' }
                : { exp: t, key: null };
            (ur = t), (lr = hr = pr = 0);
            for (; !Tr(); ) _r((cr = Fr())) ? Ir(cr) : 91 === cr && Br(cr);
            return { exp: t.slice(0, hr), key: t.slice(hr + 1, pr) };
          })(t);
          return null === n.key
            ? t + "=" + e
            : "$set(" + n.exp + ", " + n.key + ", " + e + ")";
        }
        function Fr() {
          return ur.charCodeAt(++lr);
        }
        function Tr() {
          return lr >= or;
        }
        function _r(t) {
          return 34 === t || 39 === t;
        }
        function Br(t) {
          var e = 1;
          for (hr = lr; !Tr(); )
            if (_r((t = Fr()))) Ir(t);
            else if ((91 === t && e++, 93 === t && e--, 0 === e)) {
              pr = lr;
              break;
            }
        }
        function Ir(t) {
          for (var e = t; !Tr() && (t = Fr()) !== e; );
        }
        var Nr,
          Or = "__r",
          Mr = "__c";
        function Pr(t, e, n, r, i) {
          (e = (function (t) {
            return (
              t._withTask ||
              (t._withTask = function () {
                Gt = !0;
                var e = t.apply(null, arguments);
                return (Gt = !1), e;
              })
            );
          })(e)),
            n &&
              (e = (function (t, e, n) {
                var r = Nr;
                return function i() {
                  null !== t.apply(null, arguments) && Lr(e, i, n, r);
                };
              })(e, t, r)),
            Nr.addEventListener(t, e, et ? { capture: r, passive: i } : r);
        }
        function Lr(t, e, n, r) {
          (r || Nr).removeEventListener(t, e._withTask || e, n);
        }
        function Rr(t, e) {
          if (!i(t.data.on) || !i(e.data.on)) {
            var n = e.data.on || {},
              r = t.data.on || {};
            (Nr = e.elm),
              (function (t) {
                if (s(t[Or])) {
                  var e = W ? "change" : "input";
                  (t[e] = [].concat(t[Or], t[e] || [])), delete t[Or];
                }
                s(t[Mr]) &&
                  ((t.change = [].concat(t[Mr], t.change || [])), delete t[Mr]);
              })(n),
              oe(n, r, Pr, Lr, e.context),
              (Nr = void 0);
          }
        }
        var $r = { create: Rr, update: Rr };
        function Ur(t, e) {
          if (!i(t.data.domProps) || !i(e.data.domProps)) {
            var n,
              r,
              a = e.elm,
              o = t.data.domProps || {},
              u = e.data.domProps || {};
            for (n in (s(u.__ob__) && (u = e.data.domProps = T({}, u)), o))
              i(u[n]) && (a[n] = "");
            for (n in u) {
              if (((r = u[n]), "textContent" === n || "innerHTML" === n)) {
                if ((e.children && (e.children.length = 0), r === o[n]))
                  continue;
                1 === a.childNodes.length && a.removeChild(a.childNodes[0]);
              }
              if ("value" === n) {
                a._value = r;
                var c = i(r) ? "" : String(r);
                jr(a, c) && (a.value = c);
              } else a[n] = r;
            }
          }
        }
        function jr(t, e) {
          return (
            !t.composing &&
            ("OPTION" === t.tagName ||
              (function (t, e) {
                var n = !0;
                try {
                  n = document.activeElement !== t;
                } catch (t) {}
                return n && t.value !== e;
              })(t, e) ||
              (function (t, e) {
                var n = t.value,
                  r = t._vModifiers;
                if (s(r)) {
                  if (r.lazy) return !1;
                  if (r.number) return d(n) !== d(e);
                  if (r.trim) return n.trim() !== e.trim();
                }
                return n !== e;
              })(t, e))
          );
        }
        var Jr = { create: Ur, update: Ur },
          Xr = E(function (t) {
            var e = {},
              n = /:(.+)/;
            return (
              t.split(/;(?![^(]*\))/g).forEach(function (t) {
                if (t) {
                  var r = t.split(n);
                  r.length > 1 && (e[r[0].trim()] = r[1].trim());
                }
              }),
              e
            );
          });
        function zr(t) {
          var e = Kr(t.style);
          return t.staticStyle ? T(t.staticStyle, e) : e;
        }
        function Kr(t) {
          return Array.isArray(t) ? _(t) : "string" == typeof t ? Xr(t) : t;
        }
        var Hr,
          Yr = /^--/,
          Vr = /\s*!important$/,
          qr = function (t, e, n) {
            if (Yr.test(e)) t.style.setProperty(e, n);
            else if (Vr.test(n))
              t.style.setProperty(e, n.replace(Vr, ""), "important");
            else {
              var r = Gr(e);
              if (Array.isArray(n))
                for (var i = 0, s = n.length; i < s; i++) t.style[r] = n[i];
              else t.style[r] = n;
            }
          },
          Wr = ["Webkit", "Moz", "ms"],
          Gr = E(function (t) {
            if (
              ((Hr = Hr || document.createElement("div").style),
              "filter" !== (t = A(t)) && t in Hr)
            )
              return t;
            for (
              var e = t.charAt(0).toUpperCase() + t.slice(1), n = 0;
              n < Wr.length;
              n++
            ) {
              var r = Wr[n] + e;
              if (r in Hr) return r;
            }
          });
        function Zr(t, e) {
          var n = e.data,
            r = t.data;
          if (
            !(i(n.staticStyle) && i(n.style) && i(r.staticStyle) && i(r.style))
          ) {
            var a,
              o,
              u = e.elm,
              c = r.staticStyle,
              l = r.normalizedStyle || r.style || {},
              h = c || l,
              p = Kr(e.data.style) || {};
            e.data.normalizedStyle = s(p.__ob__) ? T({}, p) : p;
            var f = (function (t, e) {
              var n,
                r = {};
              if (e)
                for (var i = t; i.componentInstance; )
                  (i = i.componentInstance._vnode) &&
                    i.data &&
                    (n = zr(i.data)) &&
                    T(r, n);
              (n = zr(t.data)) && T(r, n);
              for (var s = t; (s = s.parent); )
                s.data && (n = zr(s.data)) && T(r, n);
              return r;
            })(e, !0);
            for (o in h) i(f[o]) && qr(u, o, "");
            for (o in f) (a = f[o]) !== h[o] && qr(u, o, null == a ? "" : a);
          }
        }
        var Qr = { create: Zr, update: Zr };
        function ti(t, e) {
          if (e && (e = e.trim()))
            if (t.classList)
              e.indexOf(" ") > -1
                ? e.split(/\s+/).forEach(function (e) {
                    return t.classList.add(e);
                  })
                : t.classList.add(e);
            else {
              var n = " " + (t.getAttribute("class") || "") + " ";
              n.indexOf(" " + e + " ") < 0 &&
                t.setAttribute("class", (n + e).trim());
            }
        }
        function ei(t, e) {
          if (e && (e = e.trim()))
            if (t.classList)
              e.indexOf(" ") > -1
                ? e.split(/\s+/).forEach(function (e) {
                    return t.classList.remove(e);
                  })
                : t.classList.remove(e),
                t.classList.length || t.removeAttribute("class");
            else {
              for (
                var n = " " + (t.getAttribute("class") || "") + " ",
                  r = " " + e + " ";
                n.indexOf(r) >= 0;

              )
                n = n.replace(r, " ");
              (n = n.trim())
                ? t.setAttribute("class", n)
                : t.removeAttribute("class");
            }
        }
        function ni(t) {
          if (t) {
            if ("object" == typeof t) {
              var e = {};
              return !1 !== t.css && T(e, ri(t.name || "v")), T(e, t), e;
            }
            return "string" == typeof t ? ri(t) : void 0;
          }
        }
        var ri = E(function (t) {
            return {
              enterClass: t + "-enter",
              enterToClass: t + "-enter-to",
              enterActiveClass: t + "-enter-active",
              leaveClass: t + "-leave",
              leaveToClass: t + "-leave-to",
              leaveActiveClass: t + "-leave-active",
            };
          }),
          ii = H && !G,
          si = "transition",
          ai = "animation",
          oi = "transition",
          ui = "transitionend",
          ci = "animation",
          li = "animationend";
        ii &&
          (void 0 === window.ontransitionend &&
            void 0 !== window.onwebkittransitionend &&
            ((oi = "WebkitTransition"), (ui = "webkitTransitionEnd")),
          void 0 === window.onanimationend &&
            void 0 !== window.onwebkitanimationend &&
            ((ci = "WebkitAnimation"), (li = "webkitAnimationEnd")));
        var hi = H
          ? window.requestAnimationFrame
            ? window.requestAnimationFrame.bind(window)
            : setTimeout
          : function (t) {
              return t();
            };
        function pi(t) {
          hi(function () {
            hi(t);
          });
        }
        function fi(t, e) {
          var n = t._transitionClasses || (t._transitionClasses = []);
          n.indexOf(e) < 0 && (n.push(e), ti(t, e));
        }
        function di(t, e) {
          t._transitionClasses && g(t._transitionClasses, e), ei(t, e);
        }
        function mi(t, e, n) {
          var r = yi(t, e),
            i = r.type,
            s = r.timeout,
            a = r.propCount;
          if (!i) return n();
          var o = i === si ? ui : li,
            u = 0,
            c = function () {
              t.removeEventListener(o, l), n();
            },
            l = function (e) {
              e.target === t && ++u >= a && c();
            };
          setTimeout(function () {
            u < a && c();
          }, s + 1),
            t.addEventListener(o, l);
        }
        var vi = /\b(transform|all)(,|$)/;
        function yi(t, e) {
          var n,
            r = window.getComputedStyle(t),
            i = r[oi + "Delay"].split(", "),
            s = r[oi + "Duration"].split(", "),
            a = gi(i, s),
            o = r[ci + "Delay"].split(", "),
            u = r[ci + "Duration"].split(", "),
            c = gi(o, u),
            l = 0,
            h = 0;
          return (
            e === si
              ? a > 0 && ((n = si), (l = a), (h = s.length))
              : e === ai
              ? c > 0 && ((n = ai), (l = c), (h = u.length))
              : (h = (n = (l = Math.max(a, c)) > 0 ? (a > c ? si : ai) : null)
                  ? n === si
                    ? s.length
                    : u.length
                  : 0),
            {
              type: n,
              timeout: l,
              propCount: h,
              hasTransform: n === si && vi.test(r[oi + "Property"]),
            }
          );
        }
        function gi(t, e) {
          for (; t.length < e.length; ) t = t.concat(t);
          return Math.max.apply(
            null,
            e.map(function (e, n) {
              return xi(e) + xi(t[n]);
            })
          );
        }
        function xi(t) {
          return 1e3 * Number(t.slice(0, -1));
        }
        function Di(t, e) {
          var n = t.elm;
          s(n._leaveCb) && ((n._leaveCb.cancelled = !0), n._leaveCb());
          var r = ni(t.data.transition);
          if (!i(r) && !s(n._enterCb) && 1 === n.nodeType) {
            for (
              var a = r.css,
                o = r.type,
                c = r.enterClass,
                l = r.enterToClass,
                h = r.enterActiveClass,
                p = r.appearClass,
                f = r.appearToClass,
                m = r.appearActiveClass,
                v = r.beforeEnter,
                y = r.enter,
                g = r.afterEnter,
                x = r.enterCancelled,
                D = r.beforeAppear,
                E = r.appear,
                C = r.afterAppear,
                A = r.appearCancelled,
                w = r.duration,
                b = Ee,
                S = Ee.$vnode;
              S && S.parent;

            )
              b = (S = S.parent).context;
            var k = !b._isMounted || !t.isRootInsert;
            if (!k || E || "" === E) {
              var F = k && p ? p : c,
                T = k && m ? m : h,
                _ = k && f ? f : l,
                B = (k && D) || v,
                I = k && "function" == typeof E ? E : y,
                N = (k && C) || g,
                O = (k && A) || x,
                M = d(u(w) ? w.enter : w);
              0;
              var L = !1 !== a && !G,
                R = Ai(I),
                $ = (n._enterCb = P(function () {
                  L && (di(n, _), di(n, T)),
                    $.cancelled ? (L && di(n, F), O && O(n)) : N && N(n),
                    (n._enterCb = null);
                }));
              t.data.show ||
                ue(t, "insert", function () {
                  var e = n.parentNode,
                    r = e && e._pending && e._pending[t.key];
                  r && r.tag === t.tag && r.elm._leaveCb && r.elm._leaveCb(),
                    I && I(n, $);
                }),
                B && B(n),
                L &&
                  (fi(n, F),
                  fi(n, T),
                  pi(function () {
                    di(n, F),
                      $.cancelled ||
                        (fi(n, _),
                        R || (Ci(M) ? setTimeout($, M) : mi(n, o, $)));
                  })),
                t.data.show && (e && e(), I && I(n, $)),
                L || R || $();
            }
          }
        }
        function Ei(t, e) {
          var n = t.elm;
          s(n._enterCb) && ((n._enterCb.cancelled = !0), n._enterCb());
          var r = ni(t.data.transition);
          if (i(r) || 1 !== n.nodeType) return e();
          if (!s(n._leaveCb)) {
            var a = r.css,
              o = r.type,
              c = r.leaveClass,
              l = r.leaveToClass,
              h = r.leaveActiveClass,
              p = r.beforeLeave,
              f = r.leave,
              m = r.afterLeave,
              v = r.leaveCancelled,
              y = r.delayLeave,
              g = r.duration,
              x = !1 !== a && !G,
              D = Ai(f),
              E = d(u(g) ? g.leave : g);
            0;
            var C = (n._leaveCb = P(function () {
              n.parentNode &&
                n.parentNode._pending &&
                (n.parentNode._pending[t.key] = null),
                x && (di(n, l), di(n, h)),
                C.cancelled ? (x && di(n, c), v && v(n)) : (e(), m && m(n)),
                (n._leaveCb = null);
            }));
            y ? y(A) : A();
          }
          function A() {
            C.cancelled ||
              (t.data.show ||
                ((n.parentNode._pending || (n.parentNode._pending = {}))[
                  t.key
                ] = t),
              p && p(n),
              x &&
                (fi(n, c),
                fi(n, h),
                pi(function () {
                  di(n, c),
                    C.cancelled ||
                      (fi(n, l), D || (Ci(E) ? setTimeout(C, E) : mi(n, o, C)));
                })),
              f && f(n, C),
              x || D || C());
          }
        }
        function Ci(t) {
          return "number" == typeof t && !isNaN(t);
        }
        function Ai(t) {
          if (i(t)) return !1;
          var e = t.fns;
          return s(e)
            ? Ai(Array.isArray(e) ? e[0] : e)
            : (t._length || t.length) > 1;
        }
        function wi(t, e) {
          !0 !== e.data.show && Di(e);
        }
        var bi = (function (t) {
          var e,
            n,
            r = {},
            u = t.modules,
            c = t.nodeOps;
          for (e = 0; e < Hn.length; ++e)
            for (r[Hn[e]] = [], n = 0; n < u.length; ++n)
              s(u[n][Hn[e]]) && r[Hn[e]].push(u[n][Hn[e]]);
          function l(t) {
            var e = c.parentNode(t);
            s(e) && c.removeChild(e, t);
          }
          function h(t, e, n, i, o, u, l) {
            if (
              (s(t.elm) && s(u) && (t = u[l] = gt(t)),
              (t.isRootInsert = !o),
              !(function (t, e, n, i) {
                var o = t.data;
                if (s(o)) {
                  var u = s(t.componentInstance) && o.keepAlive;
                  if (
                    (s((o = o.hook)) && s((o = o.init)) && o(t, !1, n, i),
                    s(t.componentInstance))
                  )
                    return (
                      p(t, e),
                      a(u) &&
                        (function (t, e, n, i) {
                          for (var a, o = t; o.componentInstance; )
                            if (
                              ((o = o.componentInstance._vnode),
                              s((a = o.data)) && s((a = a.transition)))
                            ) {
                              for (a = 0; a < r.activate.length; ++a)
                                r.activate[a](Kn, o);
                              e.push(o);
                              break;
                            }
                          f(n, t.elm, i);
                        })(t, e, n, i),
                      !0
                    );
                }
              })(t, e, n, i))
            ) {
              var h = t.data,
                m = t.children,
                v = t.tag;
              s(v)
                ? ((t.elm = t.ns
                    ? c.createElementNS(t.ns, v)
                    : c.createElement(v, t)),
                  g(t),
                  d(t, m, e),
                  s(h) && y(t, e),
                  f(n, t.elm, i))
                : a(t.isComment)
                ? ((t.elm = c.createComment(t.text)), f(n, t.elm, i))
                : ((t.elm = c.createTextNode(t.text)), f(n, t.elm, i));
            }
          }
          function p(t, e) {
            s(t.data.pendingInsert) &&
              (e.push.apply(e, t.data.pendingInsert),
              (t.data.pendingInsert = null)),
              (t.elm = t.componentInstance.$el),
              v(t) ? (y(t, e), g(t)) : (zn(t), e.push(t));
          }
          function f(t, e, n) {
            s(t) &&
              (s(n)
                ? n.parentNode === t && c.insertBefore(t, e, n)
                : c.appendChild(t, e));
          }
          function d(t, e, n) {
            if (Array.isArray(e))
              for (var r = 0; r < e.length; ++r)
                h(e[r], n, t.elm, null, !0, e, r);
            else
              o(t.text) &&
                c.appendChild(t.elm, c.createTextNode(String(t.text)));
          }
          function v(t) {
            for (; t.componentInstance; ) t = t.componentInstance._vnode;
            return s(t.tag);
          }
          function y(t, n) {
            for (var i = 0; i < r.create.length; ++i) r.create[i](Kn, t);
            s((e = t.data.hook)) &&
              (s(e.create) && e.create(Kn, t), s(e.insert) && n.push(t));
          }
          function g(t) {
            var e;
            if (s((e = t.fnScopeId))) c.setStyleScope(t.elm, e);
            else
              for (var n = t; n; )
                s((e = n.context)) &&
                  s((e = e.$options._scopeId)) &&
                  c.setStyleScope(t.elm, e),
                  (n = n.parent);
            s((e = Ee)) &&
              e !== t.context &&
              e !== t.fnContext &&
              s((e = e.$options._scopeId)) &&
              c.setStyleScope(t.elm, e);
          }
          function x(t, e, n, r, i, s) {
            for (; r <= i; ++r) h(n[r], s, t, e, !1, n, r);
          }
          function D(t) {
            var e,
              n,
              i = t.data;
            if (s(i))
              for (
                s((e = i.hook)) && s((e = e.destroy)) && e(t), e = 0;
                e < r.destroy.length;
                ++e
              )
                r.destroy[e](t);
            if (s((e = t.children)))
              for (n = 0; n < t.children.length; ++n) D(t.children[n]);
          }
          function E(t, e, n, r) {
            for (; n <= r; ++n) {
              var i = e[n];
              s(i) && (s(i.tag) ? (C(i), D(i)) : l(i.elm));
            }
          }
          function C(t, e) {
            if (s(e) || s(t.data)) {
              var n,
                i = r.remove.length + 1;
              for (
                s(e)
                  ? (e.listeners += i)
                  : (e = (function (t, e) {
                      function n() {
                        0 == --n.listeners && l(t);
                      }
                      return (n.listeners = e), n;
                    })(t.elm, i)),
                  s((n = t.componentInstance)) &&
                    s((n = n._vnode)) &&
                    s(n.data) &&
                    C(n, e),
                  n = 0;
                n < r.remove.length;
                ++n
              )
                r.remove[n](t, e);
              s((n = t.data.hook)) && s((n = n.remove)) ? n(t, e) : e();
            } else l(t.elm);
          }
          function A(t, e, n, r) {
            for (var i = n; i < r; i++) {
              var a = e[i];
              if (s(a) && Yn(t, a)) return i;
            }
          }
          function w(t, e, n, o) {
            if (t !== e) {
              var u = (e.elm = t.elm);
              if (a(t.isAsyncPlaceholder))
                s(e.asyncFactory.resolved)
                  ? k(t.elm, e, n)
                  : (e.isAsyncPlaceholder = !0);
              else if (
                a(e.isStatic) &&
                a(t.isStatic) &&
                e.key === t.key &&
                (a(e.isCloned) || a(e.isOnce))
              )
                e.componentInstance = t.componentInstance;
              else {
                var l,
                  p = e.data;
                s(p) && s((l = p.hook)) && s((l = l.prepatch)) && l(t, e);
                var f = t.children,
                  d = e.children;
                if (s(p) && v(e)) {
                  for (l = 0; l < r.update.length; ++l) r.update[l](t, e);
                  s((l = p.hook)) && s((l = l.update)) && l(t, e);
                }
                i(e.text)
                  ? s(f) && s(d)
                    ? f !== d &&
                      (function (t, e, n, r, a) {
                        for (
                          var o,
                            u,
                            l,
                            p = 0,
                            f = 0,
                            d = e.length - 1,
                            m = e[0],
                            v = e[d],
                            y = n.length - 1,
                            g = n[0],
                            D = n[y],
                            C = !a;
                          p <= d && f <= y;

                        )
                          i(m)
                            ? (m = e[++p])
                            : i(v)
                            ? (v = e[--d])
                            : Yn(m, g)
                            ? (w(m, g, r), (m = e[++p]), (g = n[++f]))
                            : Yn(v, D)
                            ? (w(v, D, r), (v = e[--d]), (D = n[--y]))
                            : Yn(m, D)
                            ? (w(m, D, r),
                              C &&
                                c.insertBefore(t, m.elm, c.nextSibling(v.elm)),
                              (m = e[++p]),
                              (D = n[--y]))
                            : Yn(v, g)
                            ? (w(v, g, r),
                              C && c.insertBefore(t, v.elm, m.elm),
                              (v = e[--d]),
                              (g = n[++f]))
                            : (i(o) && (o = Vn(e, p, d)),
                              i((u = s(g.key) ? o[g.key] : A(g, e, p, d)))
                                ? h(g, r, t, m.elm, !1, n, f)
                                : Yn((l = e[u]), g)
                                ? (w(l, g, r),
                                  (e[u] = void 0),
                                  C && c.insertBefore(t, l.elm, m.elm))
                                : h(g, r, t, m.elm, !1, n, f),
                              (g = n[++f]));
                        p > d
                          ? x(t, i(n[y + 1]) ? null : n[y + 1].elm, n, f, y, r)
                          : f > y && E(0, e, p, d);
                      })(u, f, d, n, o)
                    : s(d)
                    ? (s(t.text) && c.setTextContent(u, ""),
                      x(u, null, d, 0, d.length - 1, n))
                    : s(f)
                    ? E(0, f, 0, f.length - 1)
                    : s(t.text) && c.setTextContent(u, "")
                  : t.text !== e.text && c.setTextContent(u, e.text),
                  s(p) && s((l = p.hook)) && s((l = l.postpatch)) && l(t, e);
              }
            }
          }
          function b(t, e, n) {
            if (a(n) && s(t.parent)) t.parent.data.pendingInsert = e;
            else for (var r = 0; r < e.length; ++r) e[r].data.hook.insert(e[r]);
          }
          var S = m("attrs,class,staticClass,staticStyle,key");
          function k(t, e, n, r) {
            var i,
              o = e.tag,
              u = e.data,
              c = e.children;
            if (
              ((r = r || (u && u.pre)),
              (e.elm = t),
              a(e.isComment) && s(e.asyncFactory))
            )
              return (e.isAsyncPlaceholder = !0), !0;
            if (
              s(u) &&
              (s((i = u.hook)) && s((i = i.init)) && i(e, !0),
              s((i = e.componentInstance)))
            )
              return p(e, n), !0;
            if (s(o)) {
              if (s(c))
                if (t.hasChildNodes())
                  if (
                    s((i = u)) &&
                    s((i = i.domProps)) &&
                    s((i = i.innerHTML))
                  ) {
                    if (i !== t.innerHTML) return !1;
                  } else {
                    for (
                      var l = !0, h = t.firstChild, f = 0;
                      f < c.length;
                      f++
                    ) {
                      if (!h || !k(h, c[f], n, r)) {
                        l = !1;
                        break;
                      }
                      h = h.nextSibling;
                    }
                    if (!l || h) return !1;
                  }
                else d(e, c, n);
              if (s(u)) {
                var m = !1;
                for (var v in u)
                  if (!S(v)) {
                    (m = !0), y(e, n);
                    break;
                  }
                !m && u.class && re(u.class);
              }
            } else t.data !== e.text && (t.data = e.text);
            return !0;
          }
          return function (t, e, n, o, u, l) {
            if (!i(e)) {
              var p = !1,
                f = [];
              if (i(t)) (p = !0), h(e, f, u, l);
              else {
                var d = s(t.nodeType);
                if (!d && Yn(t, e)) w(t, e, f, o);
                else {
                  if (d) {
                    if (
                      (1 === t.nodeType &&
                        t.hasAttribute(L) &&
                        (t.removeAttribute(L), (n = !0)),
                      a(n) && k(t, e, f))
                    )
                      return b(e, f, !0), t;
                    t = (function (t) {
                      return new dt(
                        c.tagName(t).toLowerCase(),
                        {},
                        [],
                        void 0,
                        t
                      );
                    })(t);
                  }
                  var m = t.elm,
                    y = c.parentNode(m);
                  if (
                    (h(e, f, m._leaveCb ? null : y, c.nextSibling(m)),
                    s(e.parent))
                  )
                    for (var g = e.parent, x = v(e); g; ) {
                      for (var C = 0; C < r.destroy.length; ++C)
                        r.destroy[C](g);
                      if (((g.elm = e.elm), x)) {
                        for (var A = 0; A < r.create.length; ++A)
                          r.create[A](Kn, g);
                        var S = g.data.hook.insert;
                        if (S.merged)
                          for (var F = 1; F < S.fns.length; F++) S.fns[F]();
                      } else zn(g);
                      g = g.parent;
                    }
                  s(y) ? E(0, [t], 0, 0) : s(t.tag) && D(t);
                }
              }
              return b(e, f, p), e.elm;
            }
            s(t) && D(t);
          };
        })({
          nodeOps: Jn,
          modules: [
            sr,
            fr,
            $r,
            Jr,
            Qr,
            H
              ? {
                  create: wi,
                  activate: wi,
                  remove: function (t, e) {
                    !0 !== t.data.show ? Ei(t, e) : e();
                  },
                }
              : {},
          ].concat(er),
        });
        G &&
          document.addEventListener("selectionchange", function () {
            var t = document.activeElement;
            t && t.vmodel && Ni(t, "input");
          });
        var Si = {
          inserted: function (t, e, n, r) {
            "select" === n.tag
              ? (r.elm && !r.elm._vOptions
                  ? ue(n, "postpatch", function () {
                      Si.componentUpdated(t, e, n);
                    })
                  : ki(t, e, n.context),
                (t._vOptions = [].map.call(t.options, _i)))
              : ("textarea" === n.tag || Un(t.type)) &&
                ((t._vModifiers = e.modifiers),
                e.modifiers.lazy ||
                  (t.addEventListener("compositionstart", Bi),
                  t.addEventListener("compositionend", Ii),
                  t.addEventListener("change", Ii),
                  G && (t.vmodel = !0)));
          },
          componentUpdated: function (t, e, n) {
            if ("select" === n.tag) {
              ki(t, e, n.context);
              var r = t._vOptions,
                i = (t._vOptions = [].map.call(t.options, _i));
              if (
                i.some(function (t, e) {
                  return !O(t, r[e]);
                })
              )
                (t.multiple
                  ? e.value.some(function (t) {
                      return Ti(t, i);
                    })
                  : e.value !== e.oldValue && Ti(e.value, i)) &&
                  Ni(t, "change");
            }
          },
        };
        function ki(t, e, n) {
          Fi(t, e, n),
            (W || Z) &&
              setTimeout(function () {
                Fi(t, e, n);
              }, 0);
        }
        function Fi(t, e, n) {
          var r = e.value,
            i = t.multiple;
          if (!i || Array.isArray(r)) {
            for (var s, a, o = 0, u = t.options.length; o < u; o++)
              if (((a = t.options[o]), i))
                (s = M(r, _i(a)) > -1), a.selected !== s && (a.selected = s);
              else if (O(_i(a), r))
                return void (t.selectedIndex !== o && (t.selectedIndex = o));
            i || (t.selectedIndex = -1);
          }
        }
        function Ti(t, e) {
          return e.every(function (e) {
            return !O(e, t);
          });
        }
        function _i(t) {
          return "_value" in t ? t._value : t.value;
        }
        function Bi(t) {
          t.target.composing = !0;
        }
        function Ii(t) {
          t.target.composing &&
            ((t.target.composing = !1), Ni(t.target, "input"));
        }
        function Ni(t, e) {
          var n = document.createEvent("HTMLEvents");
          n.initEvent(e, !0, !0), t.dispatchEvent(n);
        }
        function Oi(t) {
          return !t.componentInstance || (t.data && t.data.transition)
            ? t
            : Oi(t.componentInstance._vnode);
        }
        var Mi = {
            model: Si,
            show: {
              bind: function (t, e, n) {
                var r = e.value,
                  i = (n = Oi(n)).data && n.data.transition,
                  s = (t.__vOriginalDisplay =
                    "none" === t.style.display ? "" : t.style.display);
                r && i
                  ? ((n.data.show = !0),
                    Di(n, function () {
                      t.style.display = s;
                    }))
                  : (t.style.display = r ? s : "none");
              },
              update: function (t, e, n) {
                var r = e.value;
                !r != !e.oldValue &&
                  ((n = Oi(n)).data && n.data.transition
                    ? ((n.data.show = !0),
                      r
                        ? Di(n, function () {
                            t.style.display = t.__vOriginalDisplay;
                          })
                        : Ei(n, function () {
                            t.style.display = "none";
                          }))
                    : (t.style.display = r ? t.__vOriginalDisplay : "none"));
              },
              unbind: function (t, e, n, r, i) {
                i || (t.style.display = t.__vOriginalDisplay);
              },
            },
          },
          Pi = {
            name: String,
            appear: Boolean,
            css: Boolean,
            mode: String,
            type: String,
            enterClass: String,
            leaveClass: String,
            enterToClass: String,
            leaveToClass: String,
            enterActiveClass: String,
            leaveActiveClass: String,
            appearClass: String,
            appearActiveClass: String,
            appearToClass: String,
            duration: [Number, String, Object],
          };
        function Li(t) {
          var e = t && t.componentOptions;
          return e && e.Ctor.options.abstract ? Li(de(e.children)) : t;
        }
        function Ri(t) {
          var e = {},
            n = t.$options;
          for (var r in n.propsData) e[r] = t[r];
          var i = n._parentListeners;
          for (var s in i) e[A(s)] = i[s];
          return e;
        }
        function $i(t, e) {
          if (/\d-keep-alive$/.test(e.tag))
            return t("keep-alive", { props: e.componentOptions.propsData });
        }
        var Ui = {
            name: "transition",
            props: Pi,
            abstract: !0,
            render: function (t) {
              var e = this,
                n = this.$slots.default;
              if (
                n &&
                (n = n.filter(function (t) {
                  return t.tag || fe(t);
                })).length
              ) {
                0;
                var r = this.mode;
                0;
                var i = n[0];
                if (
                  (function (t) {
                    for (; (t = t.parent); ) if (t.data.transition) return !0;
                  })(this.$vnode)
                )
                  return i;
                var s = Li(i);
                if (!s) return i;
                if (this._leaving) return $i(t, i);
                var a = "__transition-" + this._uid + "-";
                s.key =
                  null == s.key
                    ? s.isComment
                      ? a + "comment"
                      : a + s.tag
                    : o(s.key)
                    ? 0 === String(s.key).indexOf(a)
                      ? s.key
                      : a + s.key
                    : s.key;
                var u = ((s.data || (s.data = {})).transition = Ri(this)),
                  c = this._vnode,
                  l = Li(c);
                if (
                  (s.data.directives &&
                    s.data.directives.some(function (t) {
                      return "show" === t.name;
                    }) &&
                    (s.data.show = !0),
                  l &&
                    l.data &&
                    !(function (t, e) {
                      return e.key === t.key && e.tag === t.tag;
                    })(s, l) &&
                    !fe(l) &&
                    (!l.componentInstance ||
                      !l.componentInstance._vnode.isComment))
                ) {
                  var h = (l.data.transition = T({}, u));
                  if ("out-in" === r)
                    return (
                      (this._leaving = !0),
                      ue(h, "afterLeave", function () {
                        (e._leaving = !1), e.$forceUpdate();
                      }),
                      $i(t, i)
                    );
                  if ("in-out" === r) {
                    if (fe(s)) return c;
                    var p,
                      f = function () {
                        p();
                      };
                    ue(u, "afterEnter", f),
                      ue(u, "enterCancelled", f),
                      ue(h, "delayLeave", function (t) {
                        p = t;
                      });
                  }
                }
                return i;
              }
            },
          },
          ji = T({ tag: String, moveClass: String }, Pi);
        function Ji(t) {
          t.elm._moveCb && t.elm._moveCb(), t.elm._enterCb && t.elm._enterCb();
        }
        function Xi(t) {
          t.data.newPos = t.elm.getBoundingClientRect();
        }
        function zi(t) {
          var e = t.data.pos,
            n = t.data.newPos,
            r = e.left - n.left,
            i = e.top - n.top;
          if (r || i) {
            t.data.moved = !0;
            var s = t.elm.style;
            (s.transform = s.WebkitTransform =
              "translate(" + r + "px," + i + "px)"),
              (s.transitionDuration = "0s");
          }
        }
        delete ji.mode;
        var Ki = {
          Transition: Ui,
          TransitionGroup: {
            props: ji,
            render: function (t) {
              for (
                var e = this.tag || this.$vnode.data.tag || "span",
                  n = Object.create(null),
                  r = (this.prevChildren = this.children),
                  i = this.$slots.default || [],
                  s = (this.children = []),
                  a = Ri(this),
                  o = 0;
                o < i.length;
                o++
              ) {
                var u = i[o];
                if (u.tag)
                  if (null != u.key && 0 !== String(u.key).indexOf("__vlist"))
                    s.push(u),
                      (n[u.key] = u),
                      ((u.data || (u.data = {})).transition = a);
                  else;
              }
              if (r) {
                for (var c = [], l = [], h = 0; h < r.length; h++) {
                  var p = r[h];
                  (p.data.transition = a),
                    (p.data.pos = p.elm.getBoundingClientRect()),
                    n[p.key] ? c.push(p) : l.push(p);
                }
                (this.kept = t(e, null, c)), (this.removed = l);
              }
              return t(e, null, s);
            },
            beforeUpdate: function () {
              this.__patch__(this._vnode, this.kept, !1, !0),
                (this._vnode = this.kept);
            },
            updated: function () {
              var t = this.prevChildren,
                e = this.moveClass || (this.name || "v") + "-move";
              t.length &&
                this.hasMove(t[0].elm, e) &&
                (t.forEach(Ji),
                t.forEach(Xi),
                t.forEach(zi),
                (this._reflow = document.body.offsetHeight),
                t.forEach(function (t) {
                  if (t.data.moved) {
                    var n = t.elm,
                      r = n.style;
                    fi(n, e),
                      (r.transform =
                        r.WebkitTransform =
                        r.transitionDuration =
                          ""),
                      n.addEventListener(
                        ui,
                        (n._moveCb = function t(r) {
                          (r && !/transform$/.test(r.propertyName)) ||
                            (n.removeEventListener(ui, t),
                            (n._moveCb = null),
                            di(n, e));
                        })
                      );
                  }
                }));
            },
            methods: {
              hasMove: function (t, e) {
                if (!ii) return !1;
                if (this._hasMove) return this._hasMove;
                var n = t.cloneNode();
                t._transitionClasses &&
                  t._transitionClasses.forEach(function (t) {
                    ei(n, t);
                  }),
                  ti(n, e),
                  (n.style.display = "none"),
                  this.$el.appendChild(n);
                var r = yi(n);
                return (
                  this.$el.removeChild(n), (this._hasMove = r.hasTransform)
                );
              },
            },
          },
        };
        (fn.config.mustUseProp = An),
          (fn.config.isReservedTag = Ln),
          (fn.config.isReservedAttr = En),
          (fn.config.getTagNamespace = Rn),
          (fn.config.isUnknownElement = function (t) {
            if (!H) return !0;
            if (Ln(t)) return !1;
            if (((t = t.toLowerCase()), null != $n[t])) return $n[t];
            var e = document.createElement(t);
            return t.indexOf("-") > -1
              ? ($n[t] =
                  e.constructor === window.HTMLUnknownElement ||
                  e.constructor === window.HTMLElement)
              : ($n[t] = /HTMLUnknownElement/.test(e.toString()));
          }),
          T(fn.options.directives, Mi),
          T(fn.options.components, Ki),
          (fn.prototype.__patch__ = H ? bi : B),
          (fn.prototype.$mount = function (t, e) {
            return (function (t, e, n) {
              return (
                (t.$el = e),
                t.$options.render || (t.$options.render = vt),
                we(t, "beforeMount"),
                new Ne(
                  t,
                  function () {
                    t._update(t._render(), n);
                  },
                  B,
                  null,
                  !0
                ),
                (n = !1),
                null == t.$vnode && ((t._isMounted = !0), we(t, "mounted")),
                t
              );
            })(this, (t = t && H ? jn(t) : void 0), e);
          }),
          H &&
            setTimeout(function () {
              U.devtools && it && it.emit("init", fn);
            }, 0);
        var Hi = /\{\{((?:.|\n)+?)\}\}/g,
          Yi = /[-.*+?^${}()|[\]\/\\]/g,
          Vi = E(function (t) {
            var e = t[0].replace(Yi, "\\$&"),
              n = t[1].replace(Yi, "\\$&");
            return new RegExp(e + "((?:.|\\n)+?)" + n, "g");
          });
        var qi = {
          staticKeys: ["staticClass"],
          transformNode: function (t, e) {
            e.warn;
            var n = br(t, "class");
            n && (t.staticClass = JSON.stringify(n));
            var r = wr(t, "class", !1);
            r && (t.classBinding = r);
          },
          genData: function (t) {
            var e = "";
            return (
              t.staticClass && (e += "staticClass:" + t.staticClass + ","),
              t.classBinding && (e += "class:" + t.classBinding + ","),
              e
            );
          },
        };
        var Wi,
          Gi = {
            staticKeys: ["staticStyle"],
            transformNode: function (t, e) {
              e.warn;
              var n = br(t, "style");
              n && (t.staticStyle = JSON.stringify(Xr(n)));
              var r = wr(t, "style", !1);
              r && (t.styleBinding = r);
            },
            genData: function (t) {
              var e = "";
              return (
                t.staticStyle && (e += "staticStyle:" + t.staticStyle + ","),
                t.styleBinding && (e += "style:(" + t.styleBinding + "),"),
                e
              );
            },
          },
          Zi = function (t) {
            return (
              ((Wi = Wi || document.createElement("div")).innerHTML = t),
              Wi.textContent
            );
          },
          Qi = m(
            "area,base,br,col,embed,frame,hr,img,input,isindex,keygen,link,meta,param,source,track,wbr"
          ),
          ts = m("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source"),
          es = m(
            "address,article,aside,base,blockquote,body,caption,col,colgroup,dd,details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,title,tr,track"
          ),
          ns =
            /^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/,
          rs = "[a-zA-Z_][\\w\\-\\.]*",
          is = "((?:" + rs + "\\:)?" + rs + ")",
          ss = new RegExp("^<" + is),
          as = /^\s*(\/?)>/,
          os = new RegExp("^<\\/" + is + "[^>]*>"),
          us = /^<!DOCTYPE [^>]+>/i,
          cs = /^<!\--/,
          ls = /^<!\[/,
          hs = !1;
        "x".replace(/x(.)?/g, function (t, e) {
          hs = "" === e;
        });
        var ps = m("script,style,textarea", !0),
          fs = {},
          ds = {
            "&lt;": "<",
            "&gt;": ">",
            "&quot;": '"',
            "&amp;": "&",
            "&#10;": "\n",
            "&#9;": "\t",
          },
          ms = /&(?:lt|gt|quot|amp);/g,
          vs = /&(?:lt|gt|quot|amp|#10|#9);/g,
          ys = m("pre,textarea", !0),
          gs = function (t, e) {
            return t && ys(t) && "\n" === e[0];
          };
        function xs(t, e) {
          var n = e ? vs : ms;
          return t.replace(n, function (t) {
            return ds[t];
          });
        }
        var Ds,
          Es,
          Cs,
          As,
          ws,
          bs,
          Ss,
          ks,
          Fs = /^@|^v-on:/,
          Ts = /^v-|^@|^:/,
          _s = /([^]*?)\s+(?:in|of)\s+([^]*)/,
          Bs = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/,
          Is = /^\(|\)$/g,
          Ns = /:(.*)$/,
          Os = /^:|^v-bind:/,
          Ms = /\.[^.]+/g,
          Ps = E(Zi);
        function Ls(t, e, n) {
          return {
            type: 1,
            tag: t,
            attrsList: e,
            attrsMap: (function (t) {
              for (var e = {}, n = 0, r = t.length; n < r; n++)
                e[t[n].name] = t[n].value;
              return e;
            })(e),
            parent: n,
            children: [],
          };
        }
        function Rs(t, e) {
          (Ds = e.warn || yr),
            (bs = e.isPreTag || I),
            (Ss = e.mustUseProp || I),
            (ks = e.getTagNamespace || I),
            (Cs = gr(e.modules, "transformNode")),
            (As = gr(e.modules, "preTransformNode")),
            (ws = gr(e.modules, "postTransformNode")),
            (Es = e.delimiters);
          var n,
            r,
            i = [],
            s = !1 !== e.preserveWhitespace,
            a = !1,
            o = !1;
          function u(t) {
            t.pre && (a = !1), bs(t.tag) && (o = !1);
            for (var n = 0; n < ws.length; n++) ws[n](t, e);
          }
          return (
            (function (t, e) {
              for (
                var n,
                  r,
                  i = [],
                  s = e.expectHTML,
                  a = e.isUnaryTag || I,
                  o = e.canBeLeftOpenTag || I,
                  u = 0;
                t;

              ) {
                if (((n = t), r && ps(r))) {
                  var c = 0,
                    l = r.toLowerCase(),
                    h =
                      fs[l] ||
                      (fs[l] = new RegExp(
                        "([\\s\\S]*?)(</" + l + "[^>]*>)",
                        "i"
                      )),
                    p = t.replace(h, function (t, n, r) {
                      return (
                        (c = r.length),
                        ps(l) ||
                          "noscript" === l ||
                          (n = n
                            .replace(/<!\--([\s\S]*?)-->/g, "$1")
                            .replace(/<!\[CDATA\[([\s\S]*?)]]>/g, "$1")),
                        gs(l, n) && (n = n.slice(1)),
                        e.chars && e.chars(n),
                        ""
                      );
                    });
                  (u += t.length - p.length), (t = p), S(l, u - c, u);
                } else {
                  var f = t.indexOf("<");
                  if (0 === f) {
                    if (cs.test(t)) {
                      var d = t.indexOf("--\x3e");
                      if (d >= 0) {
                        e.shouldKeepComment && e.comment(t.substring(4, d)),
                          A(d + 3);
                        continue;
                      }
                    }
                    if (ls.test(t)) {
                      var m = t.indexOf("]>");
                      if (m >= 0) {
                        A(m + 2);
                        continue;
                      }
                    }
                    var v = t.match(us);
                    if (v) {
                      A(v[0].length);
                      continue;
                    }
                    var y = t.match(os);
                    if (y) {
                      var g = u;
                      A(y[0].length), S(y[1], g, u);
                      continue;
                    }
                    var x = w();
                    if (x) {
                      b(x), gs(r, t) && A(1);
                      continue;
                    }
                  }
                  var D = void 0,
                    E = void 0,
                    C = void 0;
                  if (f >= 0) {
                    for (
                      E = t.slice(f);
                      !(
                        os.test(E) ||
                        ss.test(E) ||
                        cs.test(E) ||
                        ls.test(E) ||
                        (C = E.indexOf("<", 1)) < 0
                      );

                    )
                      (f += C), (E = t.slice(f));
                    (D = t.substring(0, f)), A(f);
                  }
                  f < 0 && ((D = t), (t = "")), e.chars && D && e.chars(D);
                }
                if (t === n) {
                  e.chars && e.chars(t);
                  break;
                }
              }
              function A(e) {
                (u += e), (t = t.substring(e));
              }
              function w() {
                var e = t.match(ss);
                if (e) {
                  var n,
                    r,
                    i = { tagName: e[1], attrs: [], start: u };
                  for (
                    A(e[0].length);
                    !(n = t.match(as)) && (r = t.match(ns));

                  )
                    A(r[0].length), i.attrs.push(r);
                  if (n)
                    return (
                      (i.unarySlash = n[1]), A(n[0].length), (i.end = u), i
                    );
                }
              }
              function b(t) {
                var n = t.tagName,
                  u = t.unarySlash;
                s && ("p" === r && es(n) && S(r), o(n) && r === n && S(n));
                for (
                  var c = a(n) || !!u,
                    l = t.attrs.length,
                    h = new Array(l),
                    p = 0;
                  p < l;
                  p++
                ) {
                  var f = t.attrs[p];
                  hs &&
                    -1 === f[0].indexOf('""') &&
                    ("" === f[3] && delete f[3],
                    "" === f[4] && delete f[4],
                    "" === f[5] && delete f[5]);
                  var d = f[3] || f[4] || f[5] || "",
                    m =
                      "a" === n && "href" === f[1]
                        ? e.shouldDecodeNewlinesForHref
                        : e.shouldDecodeNewlines;
                  h[p] = { name: f[1], value: xs(d, m) };
                }
                c ||
                  (i.push({ tag: n, lowerCasedTag: n.toLowerCase(), attrs: h }),
                  (r = n)),
                  e.start && e.start(n, h, c, t.start, t.end);
              }
              function S(t, n, s) {
                var a, o;
                if (
                  (null == n && (n = u),
                  null == s && (s = u),
                  t && (o = t.toLowerCase()),
                  t)
                )
                  for (
                    a = i.length - 1;
                    a >= 0 && i[a].lowerCasedTag !== o;
                    a--
                  );
                else a = 0;
                if (a >= 0) {
                  for (var c = i.length - 1; c >= a; c--)
                    e.end && e.end(i[c].tag, n, s);
                  (i.length = a), (r = a && i[a - 1].tag);
                } else
                  "br" === o
                    ? e.start && e.start(t, [], !0, n, s)
                    : "p" === o &&
                      (e.start && e.start(t, [], !1, n, s),
                      e.end && e.end(t, n, s));
              }
              S();
            })(t, {
              warn: Ds,
              expectHTML: e.expectHTML,
              isUnaryTag: e.isUnaryTag,
              canBeLeftOpenTag: e.canBeLeftOpenTag,
              shouldDecodeNewlines: e.shouldDecodeNewlines,
              shouldDecodeNewlinesForHref: e.shouldDecodeNewlinesForHref,
              shouldKeepComment: e.comments,
              start: function (t, s, c) {
                var l = (r && r.ns) || ks(t);
                W &&
                  "svg" === l &&
                  (s = (function (t) {
                    for (var e = [], n = 0; n < t.length; n++) {
                      var r = t[n];
                      Xs.test(r.name) ||
                        ((r.name = r.name.replace(zs, "")), e.push(r));
                    }
                    return e;
                  })(s));
                var h = Ls(t, s, r);
                l && (h.ns = l),
                  (function (t) {
                    return (
                      "style" === t.tag ||
                      ("script" === t.tag &&
                        (!t.attrsMap.type ||
                          "text/javascript" === t.attrsMap.type))
                    );
                  })(h) &&
                    !rt() &&
                    (h.forbidden = !0);
                for (var p = 0; p < As.length; p++) h = As[p](h, e) || h;
                function f(t) {
                  0;
                }
                if (
                  (a ||
                    (!(function (t) {
                      null != br(t, "v-pre") && (t.pre = !0);
                    })(h),
                    h.pre && (a = !0)),
                  bs(h.tag) && (o = !0),
                  a
                    ? (function (t) {
                        var e = t.attrsList.length;
                        if (e)
                          for (
                            var n = (t.attrs = new Array(e)), r = 0;
                            r < e;
                            r++
                          )
                            n[r] = {
                              name: t.attrsList[r].name,
                              value: JSON.stringify(t.attrsList[r].value),
                            };
                        else t.pre || (t.plain = !0);
                      })(h)
                    : h.processed ||
                      (Us(h),
                      (function (t) {
                        var e = br(t, "v-if");
                        if (e) (t.if = e), js(t, { exp: e, block: t });
                        else {
                          null != br(t, "v-else") && (t.else = !0);
                          var n = br(t, "v-else-if");
                          n && (t.elseif = n);
                        }
                      })(h),
                      (function (t) {
                        null != br(t, "v-once") && (t.once = !0);
                      })(h),
                      $s(h, e)),
                  n
                    ? i.length ||
                      (n.if &&
                        (h.elseif || h.else) &&
                        (f(), js(n, { exp: h.elseif, block: h })))
                    : ((n = h), f()),
                  r && !h.forbidden)
                )
                  if (h.elseif || h.else)
                    !(function (t, e) {
                      var n = (function (t) {
                        var e = t.length;
                        for (; e--; ) {
                          if (1 === t[e].type) return t[e];
                          t.pop();
                        }
                      })(e.children);
                      n && n.if && js(n, { exp: t.elseif, block: t });
                    })(h, r);
                  else if (h.slotScope) {
                    r.plain = !1;
                    var d = h.slotTarget || '"default"';
                    (r.scopedSlots || (r.scopedSlots = {}))[d] = h;
                  } else r.children.push(h), (h.parent = r);
                c ? u(h) : ((r = h), i.push(h));
              },
              end: function () {
                var t = i[i.length - 1],
                  e = t.children[t.children.length - 1];
                e && 3 === e.type && " " === e.text && !o && t.children.pop(),
                  (i.length -= 1),
                  (r = i[i.length - 1]),
                  u(t);
              },
              chars: function (t) {
                if (
                  r &&
                  (!W || "textarea" !== r.tag || r.attrsMap.placeholder !== t)
                ) {
                  var e,
                    n = r.children;
                  if (
                    (t =
                      o || t.trim()
                        ? (function (t) {
                            return "script" === t.tag || "style" === t.tag;
                          })(r)
                          ? t
                          : Ps(t)
                        : s && n.length
                        ? " "
                        : "")
                  )
                    !a &&
                    " " !== t &&
                    (e = (function (t, e) {
                      var n = e ? Vi(e) : Hi;
                      if (n.test(t)) {
                        for (
                          var r, i, s, a = [], o = [], u = (n.lastIndex = 0);
                          (r = n.exec(t));

                        ) {
                          (i = r.index) > u &&
                            (o.push((s = t.slice(u, i))),
                            a.push(JSON.stringify(s)));
                          var c = mr(r[1].trim());
                          a.push("_s(" + c + ")"),
                            o.push({ "@binding": c }),
                            (u = i + r[0].length);
                        }
                        return (
                          u < t.length &&
                            (o.push((s = t.slice(u))),
                            a.push(JSON.stringify(s))),
                          { expression: a.join("+"), tokens: o }
                        );
                      }
                    })(t, Es))
                      ? n.push({
                          type: 2,
                          expression: e.expression,
                          tokens: e.tokens,
                          text: t,
                        })
                      : (" " === t &&
                          n.length &&
                          " " === n[n.length - 1].text) ||
                        n.push({ type: 3, text: t });
                }
              },
              comment: function (t) {
                r.children.push({ type: 3, text: t, isComment: !0 });
              },
            }),
            n
          );
        }
        function $s(t, e) {
          !(function (t) {
            var e = wr(t, "key");
            e && (t.key = e);
          })(t),
            (t.plain = !t.key && !t.attrsList.length),
            (function (t) {
              var e = wr(t, "ref");
              e &&
                ((t.ref = e),
                (t.refInFor = (function (t) {
                  var e = t;
                  for (; e; ) {
                    if (void 0 !== e.for) return !0;
                    e = e.parent;
                  }
                  return !1;
                })(t)));
            })(t),
            (function (t) {
              if ("slot" === t.tag) t.slotName = wr(t, "name");
              else {
                var e;
                "template" === t.tag
                  ? ((e = br(t, "scope")),
                    (t.slotScope = e || br(t, "slot-scope")))
                  : (e = br(t, "slot-scope")) && (t.slotScope = e);
                var n = wr(t, "slot");
                n &&
                  ((t.slotTarget = '""' === n ? '"default"' : n),
                  "template" === t.tag || t.slotScope || Dr(t, "slot", n));
              }
            })(t),
            (function (t) {
              var e;
              (e = wr(t, "is")) && (t.component = e);
              null != br(t, "inline-template") && (t.inlineTemplate = !0);
            })(t);
          for (var n = 0; n < Cs.length; n++) t = Cs[n](t, e) || t;
          !(function (t) {
            var e,
              n,
              r,
              i,
              s,
              a,
              o,
              u = t.attrsList;
            for (e = 0, n = u.length; e < n; e++) {
              if (((r = i = u[e].name), (s = u[e].value), Ts.test(r)))
                if (
                  ((t.hasBindings = !0),
                  (a = Js(r)) && (r = r.replace(Ms, "")),
                  Os.test(r))
                )
                  (r = r.replace(Os, "")),
                    (s = mr(s)),
                    (o = !1),
                    a &&
                      (a.prop &&
                        ((o = !0),
                        "innerHtml" === (r = A(r)) && (r = "innerHTML")),
                      a.camel && (r = A(r)),
                      a.sync && Ar(t, "update:" + A(r), kr(s, "$event"))),
                    o || (!t.component && Ss(t.tag, t.attrsMap.type, r))
                      ? xr(t, r, s)
                      : Dr(t, r, s);
                else if (Fs.test(r))
                  (r = r.replace(Fs, "")), Ar(t, r, s, a, !1);
                else {
                  var c = (r = r.replace(Ts, "")).match(Ns),
                    l = c && c[1];
                  l && (r = r.slice(0, -(l.length + 1))), Cr(t, r, i, s, l, a);
                }
              else
                Dr(t, r, JSON.stringify(s)),
                  !t.component &&
                    "muted" === r &&
                    Ss(t.tag, t.attrsMap.type, r) &&
                    xr(t, r, "true");
            }
          })(t);
        }
        function Us(t) {
          var e;
          if ((e = br(t, "v-for"))) {
            var n = (function (t) {
              var e = t.match(_s);
              if (!e) return;
              var n = {};
              n.for = e[2].trim();
              var r = e[1].trim().replace(Is, ""),
                i = r.match(Bs);
              i
                ? ((n.alias = r.replace(Bs, "")),
                  (n.iterator1 = i[1].trim()),
                  i[2] && (n.iterator2 = i[2].trim()))
                : (n.alias = r);
              return n;
            })(e);
            n && T(t, n);
          }
        }
        function js(t, e) {
          t.ifConditions || (t.ifConditions = []), t.ifConditions.push(e);
        }
        function Js(t) {
          var e = t.match(Ms);
          if (e) {
            var n = {};
            return (
              e.forEach(function (t) {
                n[t.slice(1)] = !0;
              }),
              n
            );
          }
        }
        var Xs = /^xmlns:NS\d+/,
          zs = /^NS\d+:/;
        function Ks(t) {
          return Ls(t.tag, t.attrsList.slice(), t.parent);
        }
        var Hs = [
          qi,
          Gi,
          {
            preTransformNode: function (t, e) {
              if ("input" === t.tag) {
                var n,
                  r = t.attrsMap;
                if (!r["v-model"]) return;
                if (
                  ((r[":type"] || r["v-bind:type"]) && (n = wr(t, "type")),
                  r.type ||
                    n ||
                    !r["v-bind"] ||
                    (n = "(" + r["v-bind"] + ").type"),
                  n)
                ) {
                  var i = br(t, "v-if", !0),
                    s = i ? "&&(" + i + ")" : "",
                    a = null != br(t, "v-else", !0),
                    o = br(t, "v-else-if", !0),
                    u = Ks(t);
                  Us(u),
                    Er(u, "type", "checkbox"),
                    $s(u, e),
                    (u.processed = !0),
                    (u.if = "(" + n + ")==='checkbox'" + s),
                    js(u, { exp: u.if, block: u });
                  var c = Ks(t);
                  br(c, "v-for", !0),
                    Er(c, "type", "radio"),
                    $s(c, e),
                    js(u, { exp: "(" + n + ")==='radio'" + s, block: c });
                  var l = Ks(t);
                  return (
                    br(l, "v-for", !0),
                    Er(l, ":type", n),
                    $s(l, e),
                    js(u, { exp: i, block: l }),
                    a ? (u.else = !0) : o && (u.elseif = o),
                    u
                  );
                }
              }
            },
          },
        ];
        var Ys,
          Vs,
          qs = {
            expectHTML: !0,
            modules: Hs,
            directives: {
              model: function (t, e, n) {
                n;
                var r = e.value,
                  i = e.modifiers,
                  s = t.tag,
                  a = t.attrsMap.type;
                if (t.component) return Sr(t, r, i), !1;
                if ("select" === s)
                  !(function (t, e, n) {
                    var r =
                      'var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return ' +
                      (n && n.number ? "_n(val)" : "val") +
                      "});";
                    (r =
                      r +
                      " " +
                      kr(
                        e,
                        "$event.target.multiple ? $$selectedVal : $$selectedVal[0]"
                      )),
                      Ar(t, "change", r, null, !0);
                  })(t, r, i);
                else if ("input" === s && "checkbox" === a)
                  !(function (t, e, n) {
                    var r = n && n.number,
                      i = wr(t, "value") || "null",
                      s = wr(t, "true-value") || "true",
                      a = wr(t, "false-value") || "false";
                    xr(
                      t,
                      "checked",
                      "Array.isArray(" +
                        e +
                        ")?_i(" +
                        e +
                        "," +
                        i +
                        ")>-1" +
                        ("true" === s
                          ? ":(" + e + ")"
                          : ":_q(" + e + "," + s + ")")
                    ),
                      Ar(
                        t,
                        "change",
                        "var $$a=" +
                          e +
                          ",$$el=$event.target,$$c=$$el.checked?(" +
                          s +
                          "):(" +
                          a +
                          ");if(Array.isArray($$a)){var $$v=" +
                          (r ? "_n(" + i + ")" : i) +
                          ",$$i=_i($$a,$$v);if($$el.checked){$$i<0&&(" +
                          kr(e, "$$a.concat([$$v])") +
                          ")}else{$$i>-1&&(" +
                          kr(e, "$$a.slice(0,$$i).concat($$a.slice($$i+1))") +
                          ")}}else{" +
                          kr(e, "$$c") +
                          "}",
                        null,
                        !0
                      );
                  })(t, r, i);
                else if ("input" === s && "radio" === a)
                  !(function (t, e, n) {
                    var r = n && n.number,
                      i = wr(t, "value") || "null";
                    xr(
                      t,
                      "checked",
                      "_q(" + e + "," + (i = r ? "_n(" + i + ")" : i) + ")"
                    ),
                      Ar(t, "change", kr(e, i), null, !0);
                  })(t, r, i);
                else if ("input" === s || "textarea" === s)
                  !(function (t, e, n) {
                    var r = t.attrsMap.type,
                      i = n || {},
                      s = i.lazy,
                      a = i.number,
                      o = i.trim,
                      u = !s && "range" !== r,
                      c = s ? "change" : "range" === r ? Or : "input",
                      l = "$event.target.value";
                    o && (l = "$event.target.value.trim()"),
                      a && (l = "_n(" + l + ")");
                    var h = kr(e, l);
                    u && (h = "if($event.target.composing)return;" + h),
                      xr(t, "value", "(" + e + ")"),
                      Ar(t, c, h, null, !0),
                      (o || a) && Ar(t, "blur", "$forceUpdate()");
                  })(t, r, i);
                else if (!U.isReservedTag(s)) return Sr(t, r, i), !1;
                return !0;
              },
              text: function (t, e) {
                e.value && xr(t, "textContent", "_s(" + e.value + ")");
              },
              html: function (t, e) {
                e.value && xr(t, "innerHTML", "_s(" + e.value + ")");
              },
            },
            isPreTag: function (t) {
              return "pre" === t;
            },
            isUnaryTag: Qi,
            mustUseProp: An,
            canBeLeftOpenTag: ts,
            isReservedTag: Ln,
            getTagNamespace: Rn,
            staticKeys: (function (t) {
              return t
                .reduce(function (t, e) {
                  return t.concat(e.staticKeys || []);
                }, [])
                .join(",");
            })(Hs),
          },
          Ws = E(function (t) {
            return m(
              "type,tag,attrsList,attrsMap,plain,parent,children,attrs" +
                (t ? "," + t : "")
            );
          });
        function Gs(t, e) {
          t &&
            ((Ys = Ws(e.staticKeys || "")),
            (Vs = e.isReservedTag || I),
            (function t(e) {
              e.static = (function (t) {
                if (2 === t.type) return !1;
                if (3 === t.type) return !0;
                return !(
                  !t.pre &&
                  (t.hasBindings ||
                    t.if ||
                    t.for ||
                    v(t.tag) ||
                    !Vs(t.tag) ||
                    (function (t) {
                      for (; t.parent; ) {
                        if ("template" !== (t = t.parent).tag) return !1;
                        if (t.for) return !0;
                      }
                      return !1;
                    })(t) ||
                    !Object.keys(t).every(Ys))
                );
              })(e);
              if (1 === e.type) {
                if (
                  !Vs(e.tag) &&
                  "slot" !== e.tag &&
                  null == e.attrsMap["inline-template"]
                )
                  return;
                for (var n = 0, r = e.children.length; n < r; n++) {
                  var i = e.children[n];
                  t(i), i.static || (e.static = !1);
                }
                if (e.ifConditions)
                  for (var s = 1, a = e.ifConditions.length; s < a; s++) {
                    var o = e.ifConditions[s].block;
                    t(o), o.static || (e.static = !1);
                  }
              }
            })(t),
            (function t(e, n) {
              if (1 === e.type) {
                if (
                  ((e.static || e.once) && (e.staticInFor = n),
                  e.static &&
                    e.children.length &&
                    (1 !== e.children.length || 3 !== e.children[0].type))
                )
                  return void (e.staticRoot = !0);
                if (((e.staticRoot = !1), e.children))
                  for (var r = 0, i = e.children.length; r < i; r++)
                    t(e.children[r], n || !!e.for);
                if (e.ifConditions)
                  for (var s = 1, a = e.ifConditions.length; s < a; s++)
                    t(e.ifConditions[s].block, n);
              }
            })(t, !1));
        }
        var Zs = /^([\w$_]+|\([^)]*?\))\s*=>|^function\s*\(/,
          Qs =
            /^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['[^']*?']|\["[^"]*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*$/,
          ta = {
            esc: 27,
            tab: 9,
            enter: 13,
            space: 32,
            up: 38,
            left: 37,
            right: 39,
            down: 40,
            delete: [8, 46],
          },
          ea = {
            esc: "Escape",
            tab: "Tab",
            enter: "Enter",
            space: " ",
            up: ["Up", "ArrowUp"],
            left: ["Left", "ArrowLeft"],
            right: ["Right", "ArrowRight"],
            down: ["Down", "ArrowDown"],
            delete: ["Backspace", "Delete"],
          },
          na = function (t) {
            return "if(" + t + ")return null;";
          },
          ra = {
            stop: "$event.stopPropagation();",
            prevent: "$event.preventDefault();",
            self: na("$event.target !== $event.currentTarget"),
            ctrl: na("!$event.ctrlKey"),
            shift: na("!$event.shiftKey"),
            alt: na("!$event.altKey"),
            meta: na("!$event.metaKey"),
            left: na("'button' in $event && $event.button !== 0"),
            middle: na("'button' in $event && $event.button !== 1"),
            right: na("'button' in $event && $event.button !== 2"),
          };
        function ia(t, e, n) {
          var r = e ? "nativeOn:{" : "on:{";
          for (var i in t) r += '"' + i + '":' + sa(i, t[i]) + ",";
          return r.slice(0, -1) + "}";
        }
        function sa(t, e) {
          if (!e) return "function(){}";
          if (Array.isArray(e))
            return (
              "[" +
              e
                .map(function (e) {
                  return sa(t, e);
                })
                .join(",") +
              "]"
            );
          var n = Qs.test(e.value),
            r = Zs.test(e.value);
          if (e.modifiers) {
            var i = "",
              s = "",
              a = [];
            for (var o in e.modifiers)
              if (ra[o]) (s += ra[o]), ta[o] && a.push(o);
              else if ("exact" === o) {
                var u = e.modifiers;
                s += na(
                  ["ctrl", "shift", "alt", "meta"]
                    .filter(function (t) {
                      return !u[t];
                    })
                    .map(function (t) {
                      return "$event." + t + "Key";
                    })
                    .join("||")
                );
              } else a.push(o);
            return (
              a.length &&
                (i += (function (t) {
                  return (
                    "if(!('button' in $event)&&" +
                    t.map(aa).join("&&") +
                    ")return null;"
                  );
                })(a)),
              s && (i += s),
              "function($event){" +
                i +
                (n
                  ? "return " + e.value + "($event)"
                  : r
                  ? "return (" + e.value + ")($event)"
                  : e.value) +
                "}"
            );
          }
          return n || r ? e.value : "function($event){" + e.value + "}";
        }
        function aa(t) {
          var e = parseInt(t, 10);
          if (e) return "$event.keyCode!==" + e;
          var n = ta[t],
            r = ea[t];
          return (
            "_k($event.keyCode," +
            JSON.stringify(t) +
            "," +
            JSON.stringify(n) +
            ",$event.key," +
            JSON.stringify(r) +
            ")"
          );
        }
        var oa = {
            on: function (t, e) {
              t.wrapListeners = function (t) {
                return "_g(" + t + "," + e.value + ")";
              };
            },
            bind: function (t, e) {
              t.wrapData = function (n) {
                return (
                  "_b(" +
                  n +
                  ",'" +
                  t.tag +
                  "'," +
                  e.value +
                  "," +
                  (e.modifiers && e.modifiers.prop ? "true" : "false") +
                  (e.modifiers && e.modifiers.sync ? ",true" : "") +
                  ")"
                );
              };
            },
            cloak: B,
          },
          ua = function (t) {
            (this.options = t),
              (this.warn = t.warn || yr),
              (this.transforms = gr(t.modules, "transformCode")),
              (this.dataGenFns = gr(t.modules, "genData")),
              (this.directives = T(T({}, oa), t.directives));
            var e = t.isReservedTag || I;
            (this.maybeComponent = function (t) {
              return !e(t.tag);
            }),
              (this.onceId = 0),
              (this.staticRenderFns = []);
          };
        function ca(t, e) {
          var n = new ua(e);
          return {
            render: "with(this){return " + (t ? la(t, n) : '_c("div")') + "}",
            staticRenderFns: n.staticRenderFns,
          };
        }
        function la(t, e) {
          if (t.staticRoot && !t.staticProcessed) return ha(t, e);
          if (t.once && !t.onceProcessed) return pa(t, e);
          if (t.for && !t.forProcessed)
            return (function (t, e, n, r) {
              var i = t.for,
                s = t.alias,
                a = t.iterator1 ? "," + t.iterator1 : "",
                o = t.iterator2 ? "," + t.iterator2 : "";
              0;
              return (
                (t.forProcessed = !0),
                (r || "_l") +
                  "((" +
                  i +
                  "),function(" +
                  s +
                  a +
                  o +
                  "){return " +
                  (n || la)(t, e) +
                  "})"
              );
            })(t, e);
          if (t.if && !t.ifProcessed) return fa(t, e);
          if ("template" !== t.tag || t.slotTarget) {
            if ("slot" === t.tag)
              return (function (t, e) {
                var n = t.slotName || '"default"',
                  r = va(t, e),
                  i = "_t(" + n + (r ? "," + r : ""),
                  s =
                    t.attrs &&
                    "{" +
                      t.attrs
                        .map(function (t) {
                          return A(t.name) + ":" + t.value;
                        })
                        .join(",") +
                      "}",
                  a = t.attrsMap["v-bind"];
                (!s && !a) || r || (i += ",null");
                s && (i += "," + s);
                a && (i += (s ? "" : ",null") + "," + a);
                return i + ")";
              })(t, e);
            var n;
            if (t.component)
              n = (function (t, e, n) {
                var r = e.inlineTemplate ? null : va(e, n, !0);
                return "_c(" + t + "," + da(e, n) + (r ? "," + r : "") + ")";
              })(t.component, t, e);
            else {
              var r = t.plain ? void 0 : da(t, e),
                i = t.inlineTemplate ? null : va(t, e, !0);
              n =
                "_c('" +
                t.tag +
                "'" +
                (r ? "," + r : "") +
                (i ? "," + i : "") +
                ")";
            }
            for (var s = 0; s < e.transforms.length; s++)
              n = e.transforms[s](t, n);
            return n;
          }
          return va(t, e) || "void 0";
        }
        function ha(t, e) {
          return (
            (t.staticProcessed = !0),
            e.staticRenderFns.push("with(this){return " + la(t, e) + "}"),
            "_m(" +
              (e.staticRenderFns.length - 1) +
              (t.staticInFor ? ",true" : "") +
              ")"
          );
        }
        function pa(t, e) {
          if (((t.onceProcessed = !0), t.if && !t.ifProcessed)) return fa(t, e);
          if (t.staticInFor) {
            for (var n = "", r = t.parent; r; ) {
              if (r.for) {
                n = r.key;
                break;
              }
              r = r.parent;
            }
            return n
              ? "_o(" + la(t, e) + "," + e.onceId++ + "," + n + ")"
              : la(t, e);
          }
          return ha(t, e);
        }
        function fa(t, e, n, r) {
          return (
            (t.ifProcessed = !0),
            (function t(e, n, r, i) {
              if (!e.length) return i || "_e()";
              var s = e.shift();
              return s.exp
                ? "(" + s.exp + ")?" + a(s.block) + ":" + t(e, n, r, i)
                : "" + a(s.block);
              function a(t) {
                return r ? r(t, n) : t.once ? pa(t, n) : la(t, n);
              }
            })(t.ifConditions.slice(), e, n, r)
          );
        }
        function da(t, e) {
          var n = "{",
            r = (function (t, e) {
              var n = t.directives;
              if (!n) return;
              var r,
                i,
                s,
                a,
                o = "directives:[",
                u = !1;
              for (r = 0, i = n.length; r < i; r++) {
                (s = n[r]), (a = !0);
                var c = e.directives[s.name];
                c && (a = !!c(t, s, e.warn)),
                  a &&
                    ((u = !0),
                    (o +=
                      '{name:"' +
                      s.name +
                      '",rawName:"' +
                      s.rawName +
                      '"' +
                      (s.value
                        ? ",value:(" +
                          s.value +
                          "),expression:" +
                          JSON.stringify(s.value)
                        : "") +
                      (s.arg ? ',arg:"' + s.arg + '"' : "") +
                      (s.modifiers
                        ? ",modifiers:" + JSON.stringify(s.modifiers)
                        : "") +
                      "},"));
              }
              if (u) return o.slice(0, -1) + "]";
            })(t, e);
          r && (n += r + ","),
            t.key && (n += "key:" + t.key + ","),
            t.ref && (n += "ref:" + t.ref + ","),
            t.refInFor && (n += "refInFor:true,"),
            t.pre && (n += "pre:true,"),
            t.component && (n += 'tag:"' + t.tag + '",');
          for (var i = 0; i < e.dataGenFns.length; i++) n += e.dataGenFns[i](t);
          if (
            (t.attrs && (n += "attrs:{" + xa(t.attrs) + "},"),
            t.props && (n += "domProps:{" + xa(t.props) + "},"),
            t.events && (n += ia(t.events, !1, e.warn) + ","),
            t.nativeEvents && (n += ia(t.nativeEvents, !0, e.warn) + ","),
            t.slotTarget && !t.slotScope && (n += "slot:" + t.slotTarget + ","),
            t.scopedSlots &&
              (n +=
                (function (t, e) {
                  return (
                    "scopedSlots:_u([" +
                    Object.keys(t)
                      .map(function (n) {
                        return ma(n, t[n], e);
                      })
                      .join(",") +
                    "])"
                  );
                })(t.scopedSlots, e) + ","),
            t.model &&
              (n +=
                "model:{value:" +
                t.model.value +
                ",callback:" +
                t.model.callback +
                ",expression:" +
                t.model.expression +
                "},"),
            t.inlineTemplate)
          ) {
            var s = (function (t, e) {
              var n = t.children[0];
              0;
              if (1 === n.type) {
                var r = ca(n, e.options);
                return (
                  "inlineTemplate:{render:function(){" +
                  r.render +
                  "},staticRenderFns:[" +
                  r.staticRenderFns
                    .map(function (t) {
                      return "function(){" + t + "}";
                    })
                    .join(",") +
                  "]}"
                );
              }
            })(t, e);
            s && (n += s + ",");
          }
          return (
            (n = n.replace(/,$/, "") + "}"),
            t.wrapData && (n = t.wrapData(n)),
            t.wrapListeners && (n = t.wrapListeners(n)),
            n
          );
        }
        function ma(t, e, n) {
          return e.for && !e.forProcessed
            ? (function (t, e, n) {
                var r = e.for,
                  i = e.alias,
                  s = e.iterator1 ? "," + e.iterator1 : "",
                  a = e.iterator2 ? "," + e.iterator2 : "";
                return (
                  (e.forProcessed = !0),
                  "_l((" +
                    r +
                    "),function(" +
                    i +
                    s +
                    a +
                    "){return " +
                    ma(t, e, n) +
                    "})"
                );
              })(t, e, n)
            : "{key:" +
                t +
                ",fn:" +
                ("function(" +
                  String(e.slotScope) +
                  "){return " +
                  ("template" === e.tag
                    ? e.if
                      ? e.if + "?" + (va(e, n) || "undefined") + ":undefined"
                      : va(e, n) || "undefined"
                    : la(e, n)) +
                  "}") +
                "}";
        }
        function va(t, e, n, r, i) {
          var s = t.children;
          if (s.length) {
            var a = s[0];
            if (
              1 === s.length &&
              a.for &&
              "template" !== a.tag &&
              "slot" !== a.tag
            )
              return (r || la)(a, e);
            var o = n
                ? (function (t, e) {
                    for (var n = 0, r = 0; r < t.length; r++) {
                      var i = t[r];
                      if (1 === i.type) {
                        if (
                          ya(i) ||
                          (i.ifConditions &&
                            i.ifConditions.some(function (t) {
                              return ya(t.block);
                            }))
                        ) {
                          n = 2;
                          break;
                        }
                        (e(i) ||
                          (i.ifConditions &&
                            i.ifConditions.some(function (t) {
                              return e(t.block);
                            }))) &&
                          (n = 1);
                      }
                    }
                    return n;
                  })(s, e.maybeComponent)
                : 0,
              u = i || ga;
            return (
              "[" +
              s
                .map(function (t) {
                  return u(t, e);
                })
                .join(",") +
              "]" +
              (o ? "," + o : "")
            );
          }
        }
        function ya(t) {
          return void 0 !== t.for || "template" === t.tag || "slot" === t.tag;
        }
        function ga(t, e) {
          return 1 === t.type
            ? la(t, e)
            : 3 === t.type && t.isComment
            ? (function (t) {
                return "_e(" + JSON.stringify(t.text) + ")";
              })(t)
            : (function (t) {
                return (
                  "_v(" +
                  (2 === t.type ? t.expression : Da(JSON.stringify(t.text))) +
                  ")"
                );
              })(t);
        }
        function xa(t) {
          for (var e = "", n = 0; n < t.length; n++) {
            var r = t[n];
            e += '"' + r.name + '":' + Da(r.value) + ",";
          }
          return e.slice(0, -1);
        }
        function Da(t) {
          return t.replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029");
        }
        new RegExp(
          "\\b" +
            "do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,super,throw,while,yield,delete,export,import,return,switch,default,extends,finally,continue,debugger,function,arguments"
              .split(",")
              .join("\\b|\\b") +
            "\\b"
        ),
          new RegExp(
            "\\b" +
              "delete,typeof,void".split(",").join("\\s*\\([^\\)]*\\)|\\b") +
              "\\s*\\([^\\)]*\\)"
          );
        function Ea(t, e) {
          try {
            return new Function(t);
          } catch (n) {
            return e.push({ err: n, code: t }), B;
          }
        }
        var Ca,
          Aa = (function (t) {
            return function (e) {
              function n(n, r) {
                var i = Object.create(e),
                  s = [],
                  a = [];
                if (
                  ((i.warn = function (t, e) {
                    (e ? a : s).push(t);
                  }),
                  r)
                )
                  for (var o in (r.modules &&
                    (i.modules = (e.modules || []).concat(r.modules)),
                  r.directives &&
                    (i.directives = T(
                      Object.create(e.directives || null),
                      r.directives
                    )),
                  r))
                    "modules" !== o && "directives" !== o && (i[o] = r[o]);
                var u = t(n, i);
                return (u.errors = s), (u.tips = a), u;
              }
              return {
                compile: n,
                compileToFunctions: (function (t) {
                  var e = Object.create(null);
                  return function (n, r, i) {
                    (r = T({}, r)).warn, delete r.warn;
                    var s = r.delimiters ? String(r.delimiters) + n : n;
                    if (e[s]) return e[s];
                    var a = t(n, r),
                      o = {},
                      u = [];
                    return (
                      (o.render = Ea(a.render, u)),
                      (o.staticRenderFns = a.staticRenderFns.map(function (t) {
                        return Ea(t, u);
                      })),
                      (e[s] = o)
                    );
                  };
                })(n),
              };
            };
          })(function (t, e) {
            var n = Rs(t.trim(), e);
            !1 !== e.optimize && Gs(n, e);
            var r = ca(n, e);
            return {
              ast: n,
              render: r.render,
              staticRenderFns: r.staticRenderFns,
            };
          })(qs).compileToFunctions;
        function wa(t) {
          return (
            ((Ca = Ca || document.createElement("div")).innerHTML = t
              ? '<a href="\n"/>'
              : '<div a="\n"/>'),
            Ca.innerHTML.indexOf("&#10;") > 0
          );
        }
        var ba = !!H && wa(!1),
          Sa = !!H && wa(!0),
          ka = E(function (t) {
            var e = jn(t);
            return e && e.innerHTML;
          }),
          Fa = fn.prototype.$mount;
        (fn.prototype.$mount = function (t, e) {
          if (
            (t = t && jn(t)) === document.body ||
            t === document.documentElement
          )
            return this;
          var n = this.$options;
          if (!n.render) {
            var r = n.template;
            if (r)
              if ("string" == typeof r) "#" === r.charAt(0) && (r = ka(r));
              else {
                if (!r.nodeType) return this;
                r = r.innerHTML;
              }
            else
              t &&
                (r = (function (t) {
                  if (t.outerHTML) return t.outerHTML;
                  var e = document.createElement("div");
                  return e.appendChild(t.cloneNode(!0)), e.innerHTML;
                })(t));
            if (r) {
              0;
              var i = Aa(
                  r,
                  {
                    shouldDecodeNewlines: ba,
                    shouldDecodeNewlinesForHref: Sa,
                    delimiters: n.delimiters,
                    comments: n.comments,
                  },
                  this
                ),
                s = i.render,
                a = i.staticRenderFns;
              (n.render = s), (n.staticRenderFns = a);
            }
          }
          return Fa.call(this, t, e);
        }),
          (fn.compile = Aa),
          (e.a = fn);
      }.call(this, n(7), n(14).setImmediate));
    },
    function (t, e, n) {
      "use strict";
      function r(t, e, n, r, i, s, a, o) {
        var u,
          c = "function" == typeof t ? t.options : t;
        if (
          (e && ((c.render = e), (c.staticRenderFns = n), (c._compiled = !0)),
          r && (c.functional = !0),
          s && (c._scopeId = "data-v-" + s),
          a
            ? ((u = function (t) {
                (t =
                  t ||
                  (this.$vnode && this.$vnode.ssrContext) ||
                  (this.parent &&
                    this.parent.$vnode &&
                    this.parent.$vnode.ssrContext)) ||
                  "undefined" == typeof __VUE_SSR_CONTEXT__ ||
                  (t = __VUE_SSR_CONTEXT__),
                  i && i.call(this, t),
                  t &&
                    t._registeredComponents &&
                    t._registeredComponents.add(a);
              }),
              (c._ssrRegister = u))
            : i &&
              (u = o
                ? function () {
                    i.call(this, this.$root.$options.shadowRoot);
                  }
                : i),
          u)
        )
          if (c.functional) {
            c._injectStyles = u;
            var l = c.render;
            c.render = function (t, e) {
              return u.call(e), l(t, e);
            };
          } else {
            var h = c.beforeCreate;
            c.beforeCreate = h ? [].concat(h, u) : [u];
          }
        return { exports: t, options: c };
      }
      n.d(e, "a", function () {
        return r;
      });
    },
    function (t, e, n) {
      "use strict";
      var r = n(5),
        i = [
          "kind",
          "resolve",
          "construct",
          "instanceOf",
          "predicate",
          "represent",
          "defaultStyle",
          "styleAliases",
        ],
        s = ["scalar", "sequence", "mapping"];
      t.exports = function (t, e) {
        if (
          ((e = e || {}),
          Object.keys(e).forEach(function (e) {
            if (-1 === i.indexOf(e))
              throw new r(
                'Unknown option "' +
                  e +
                  '" is met in definition of "' +
                  t +
                  '" YAML type.'
              );
          }),
          (this.tag = t),
          (this.kind = e.kind || null),
          (this.resolve =
            e.resolve ||
            function () {
              return !0;
            }),
          (this.construct =
            e.construct ||
            function (t) {
              return t;
            }),
          (this.instanceOf = e.instanceOf || null),
          (this.predicate = e.predicate || null),
          (this.represent = e.represent || null),
          (this.defaultStyle = e.defaultStyle || null),
          (this.styleAliases = (function (t) {
            var e = {};
            return (
              null !== t &&
                Object.keys(t).forEach(function (n) {
                  t[n].forEach(function (t) {
                    e[String(t)] = n;
                  });
                }),
              e
            );
          })(e.styleAliases || null)),
          -1 === s.indexOf(this.kind))
        )
          throw new r(
            'Unknown kind "' +
              this.kind +
              '" is specified for "' +
              t +
              '" YAML type.'
          );
      };
    },
    function (t, e, n) {
      "use strict";
      function r(t) {
        return void 0 === t || null === t;
      }
      (t.exports.isNothing = r),
        (t.exports.isObject = function (t) {
          return "object" == typeof t && null !== t;
        }),
        (t.exports.toArray = function (t) {
          return Array.isArray(t) ? t : r(t) ? [] : [t];
        }),
        (t.exports.repeat = function (t, e) {
          var n,
            r = "";
          for (n = 0; n < e; n += 1) r += t;
          return r;
        }),
        (t.exports.isNegativeZero = function (t) {
          return 0 === t && Number.NEGATIVE_INFINITY === 1 / t;
        }),
        (t.exports.extend = function (t, e) {
          var n, r, i, s;
          if (e)
            for (n = 0, r = (s = Object.keys(e)).length; n < r; n += 1)
              t[(i = s[n])] = e[i];
          return t;
        });
    },
    function (t, e, n) {
      "use strict";
      var r = n(3),
        i = n(5),
        s = n(2);
      function a(t, e, n) {
        var r = [];
        return (
          t.include.forEach(function (t) {
            n = a(t, e, n);
          }),
          t[e].forEach(function (t) {
            n.forEach(function (e, n) {
              e.tag === t.tag && e.kind === t.kind && r.push(n);
            }),
              n.push(t);
          }),
          n.filter(function (t, e) {
            return -1 === r.indexOf(e);
          })
        );
      }
      function o(t) {
        (this.include = t.include || []),
          (this.implicit = t.implicit || []),
          (this.explicit = t.explicit || []),
          this.implicit.forEach(function (t) {
            if (t.loadKind && "scalar" !== t.loadKind)
              throw new i(
                "There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported."
              );
          }),
          (this.compiledImplicit = a(this, "implicit", [])),
          (this.compiledExplicit = a(this, "explicit", [])),
          (this.compiledTypeMap = (function () {
            var t,
              e,
              n = { scalar: {}, sequence: {}, mapping: {}, fallback: {} };
            function r(t) {
              n[t.kind][t.tag] = n.fallback[t.tag] = t;
            }
            for (t = 0, e = arguments.length; t < e; t += 1)
              arguments[t].forEach(r);
            return n;
          })(this.compiledImplicit, this.compiledExplicit));
      }
      (o.DEFAULT = null),
        (o.create = function () {
          var t, e;
          switch (arguments.length) {
            case 1:
              (t = o.DEFAULT), (e = arguments[0]);
              break;
            case 2:
              (t = arguments[0]), (e = arguments[1]);
              break;
            default:
              throw new i(
                "Wrong number of arguments for Schema.create function"
              );
          }
          if (
            ((t = r.toArray(t)),
            (e = r.toArray(e)),
            !t.every(function (t) {
              return t instanceof o;
            }))
          )
            throw new i(
              "Specified list of super schemas (or a single Schema object) contains a non-Schema object."
            );
          if (
            !e.every(function (t) {
              return t instanceof s;
            })
          )
            throw new i(
              "Specified list of YAML types (or a single Type object) contains a non-Type object."
            );
          return new o({ include: t, explicit: e });
        }),
        (t.exports = o);
    },
    function (t, e, n) {
      "use strict";
      function r(t, e) {
        Error.call(this),
          (this.name = "YAMLException"),
          (this.reason = t),
          (this.mark = e),
          (this.message =
            (this.reason || "(unknown reason)") +
            (this.mark ? " " + this.mark.toString() : "")),
          Error.captureStackTrace
            ? Error.captureStackTrace(this, this.constructor)
            : (this.stack = new Error().stack || "");
      }
      (r.prototype = Object.create(Error.prototype)),
        (r.prototype.constructor = r),
        (r.prototype.toString = function (t) {
          var e = this.name + ": ";
          return (
            (e += this.reason || "(unknown reason)"),
            !t && this.mark && (e += " " + this.mark.toString()),
            e
          );
        }),
        (t.exports = r);
    },
    function (t, e, n) {
      "use strict";
      var r = n(4);
      t.exports = new r({
        include: [n(11)],
        implicit: [n(28), n(29)],
        explicit: [n(30), n(35), n(36), n(37)],
      });
    },
    function (t, e) {
      var n;
      n = (function () {
        return this;
      })();
      try {
        n = n || Function("return this")() || (0, eval)("this");
      } catch (t) {
        "object" == typeof window && (n = window);
      }
      t.exports = n;
    },
    function (t, e, n) {
      "use strict";
      var r = n(4);
      t.exports = r.DEFAULT = new r({
        include: [n(6)],
        explicit: [n(38), n(39), n(40)],
      });
    },
    function (t, e, n) {
      "use strict";
      var r = n(4);
      t.exports = new r({ explicit: [n(21), n(22), n(23)] });
    },
    function (t, e, n) {
      "use strict";
      /**
       * vue-router v3.0.1
       * (c) 2017 Evan You
       * @license MIT
       */ function r(t, e) {
        0;
      }
      function i(t) {
        return Object.prototype.toString.call(t).indexOf("Error") > -1;
      }
      var s = {
        name: "router-view",
        functional: !0,
        props: { name: { type: String, default: "default" } },
        render: function (t, e) {
          var n = e.props,
            r = e.children,
            i = e.parent,
            s = e.data;
          s.routerView = !0;
          for (
            var a = i.$createElement,
              o = n.name,
              u = i.$route,
              c = i._routerViewCache || (i._routerViewCache = {}),
              l = 0,
              h = !1;
            i && i._routerRoot !== i;

          )
            i.$vnode && i.$vnode.data.routerView && l++,
              i._inactive && (h = !0),
              (i = i.$parent);
          if (((s.routerViewDepth = l), h)) return a(c[o], s, r);
          var p = u.matched[l];
          if (!p) return (c[o] = null), a();
          var f = (c[o] = p.components[o]);
          (s.registerRouteInstance = function (t, e) {
            var n = p.instances[o];
            ((e && n !== t) || (!e && n === t)) && (p.instances[o] = e);
          }),
            ((s.hook || (s.hook = {})).prepatch = function (t, e) {
              p.instances[o] = e.componentInstance;
            });
          var d = (s.props = (function (t, e) {
            switch (typeof e) {
              case "undefined":
                return;
              case "object":
                return e;
              case "function":
                return e(t);
              case "boolean":
                return e ? t.params : void 0;
              default:
                0;
            }
          })(u, p.props && p.props[o]));
          if (d) {
            d = s.props = (function (t, e) {
              for (var n in e) t[n] = e[n];
              return t;
            })({}, d);
            var m = (s.attrs = s.attrs || {});
            for (var v in d)
              (f.props && v in f.props) || ((m[v] = d[v]), delete d[v]);
          }
          return a(f, s, r);
        },
      };
      var a = /[!'()*]/g,
        o = function (t) {
          return "%" + t.charCodeAt(0).toString(16);
        },
        u = /%2C/g,
        c = function (t) {
          return encodeURIComponent(t).replace(a, o).replace(u, ",");
        },
        l = decodeURIComponent;
      function h(t) {
        var e = {};
        return (t = t.trim().replace(/^(\?|#|&)/, ""))
          ? (t.split("&").forEach(function (t) {
              var n = t.replace(/\+/g, " ").split("="),
                r = l(n.shift()),
                i = n.length > 0 ? l(n.join("=")) : null;
              void 0 === e[r]
                ? (e[r] = i)
                : Array.isArray(e[r])
                ? e[r].push(i)
                : (e[r] = [e[r], i]);
            }),
            e)
          : e;
      }
      function p(t) {
        var e = t
          ? Object.keys(t)
              .map(function (e) {
                var n = t[e];
                if (void 0 === n) return "";
                if (null === n) return c(e);
                if (Array.isArray(n)) {
                  var r = [];
                  return (
                    n.forEach(function (t) {
                      void 0 !== t &&
                        (null === t ? r.push(c(e)) : r.push(c(e) + "=" + c(t)));
                    }),
                    r.join("&")
                  );
                }
                return c(e) + "=" + c(n);
              })
              .filter(function (t) {
                return t.length > 0;
              })
              .join("&")
          : null;
        return e ? "?" + e : "";
      }
      var f = /\/?$/;
      function d(t, e, n, r) {
        var i = r && r.options.stringifyQuery,
          s = e.query || {};
        try {
          s = m(s);
        } catch (t) {}
        var a = {
          name: e.name || (t && t.name),
          meta: (t && t.meta) || {},
          path: e.path || "/",
          hash: e.hash || "",
          query: s,
          params: e.params || {},
          fullPath: y(e, i),
          matched: t
            ? (function (t) {
                var e = [];
                for (; t; ) e.unshift(t), (t = t.parent);
                return e;
              })(t)
            : [],
        };
        return n && (a.redirectedFrom = y(n, i)), Object.freeze(a);
      }
      function m(t) {
        if (Array.isArray(t)) return t.map(m);
        if (t && "object" == typeof t) {
          var e = {};
          for (var n in t) e[n] = m(t[n]);
          return e;
        }
        return t;
      }
      var v = d(null, { path: "/" });
      function y(t, e) {
        var n = t.path,
          r = t.query;
        void 0 === r && (r = {});
        var i = t.hash;
        return void 0 === i && (i = ""), (n || "/") + (e || p)(r) + i;
      }
      function g(t, e) {
        return e === v
          ? t === e
          : !!e &&
              (t.path && e.path
                ? t.path.replace(f, "") === e.path.replace(f, "") &&
                  t.hash === e.hash &&
                  x(t.query, e.query)
                : !(!t.name || !e.name) &&
                  t.name === e.name &&
                  t.hash === e.hash &&
                  x(t.query, e.query) &&
                  x(t.params, e.params));
      }
      function x(t, e) {
        if ((void 0 === t && (t = {}), void 0 === e && (e = {}), !t || !e))
          return t === e;
        var n = Object.keys(t),
          r = Object.keys(e);
        return (
          n.length === r.length &&
          n.every(function (n) {
            var r = t[n],
              i = e[n];
            return "object" == typeof r && "object" == typeof i
              ? x(r, i)
              : String(r) === String(i);
          })
        );
      }
      var D,
        E = [String, Object],
        C = [String, Array],
        A = {
          name: "router-link",
          props: {
            to: { type: E, required: !0 },
            tag: { type: String, default: "a" },
            exact: Boolean,
            append: Boolean,
            replace: Boolean,
            activeClass: String,
            exactActiveClass: String,
            event: { type: C, default: "click" },
          },
          render: function (t) {
            var e = this,
              n = this.$router,
              r = this.$route,
              i = n.resolve(this.to, r, this.append),
              s = i.location,
              a = i.route,
              o = i.href,
              u = {},
              c = n.options.linkActiveClass,
              l = n.options.linkExactActiveClass,
              h = null == c ? "router-link-active" : c,
              p = null == l ? "router-link-exact-active" : l,
              m = null == this.activeClass ? h : this.activeClass,
              v = null == this.exactActiveClass ? p : this.exactActiveClass,
              y = s.path ? d(null, s, null, n) : a;
            (u[v] = g(r, y)),
              (u[m] = this.exact
                ? u[v]
                : (function (t, e) {
                    return (
                      0 ===
                        t.path
                          .replace(f, "/")
                          .indexOf(e.path.replace(f, "/")) &&
                      (!e.hash || t.hash === e.hash) &&
                      (function (t, e) {
                        for (var n in e) if (!(n in t)) return !1;
                        return !0;
                      })(t.query, e.query)
                    );
                  })(r, y));
            var x = function (t) {
                w(t) && (e.replace ? n.replace(s) : n.push(s));
              },
              E = { click: w };
            Array.isArray(this.event)
              ? this.event.forEach(function (t) {
                  E[t] = x;
                })
              : (E[this.event] = x);
            var C = { class: u };
            if ("a" === this.tag) (C.on = E), (C.attrs = { href: o });
            else {
              var A = (function t(e) {
                if (e)
                  for (var n, r = 0; r < e.length; r++) {
                    if ("a" === (n = e[r]).tag) return n;
                    if (n.children && (n = t(n.children))) return n;
                  }
              })(this.$slots.default);
              if (A) {
                A.isStatic = !1;
                var b = D.util.extend;
                ((A.data = b({}, A.data)).on = E),
                  ((A.data.attrs = b({}, A.data.attrs)).href = o);
              } else C.on = E;
            }
            return t(this.tag, C, this.$slots.default);
          },
        };
      function w(t) {
        if (
          !(
            t.metaKey ||
            t.altKey ||
            t.ctrlKey ||
            t.shiftKey ||
            t.defaultPrevented ||
            (void 0 !== t.button && 0 !== t.button)
          )
        ) {
          if (t.currentTarget && t.currentTarget.getAttribute) {
            var e = t.currentTarget.getAttribute("target");
            if (/\b_blank\b/i.test(e)) return;
          }
          return t.preventDefault && t.preventDefault(), !0;
        }
      }
      function b(t) {
        if (!b.installed || D !== t) {
          (b.installed = !0), (D = t);
          var e = function (t) {
              return void 0 !== t;
            },
            n = function (t, n) {
              var r = t.$options._parentVnode;
              e(r) &&
                e((r = r.data)) &&
                e((r = r.registerRouteInstance)) &&
                r(t, n);
            };
          t.mixin({
            beforeCreate: function () {
              e(this.$options.router)
                ? ((this._routerRoot = this),
                  (this._router = this.$options.router),
                  this._router.init(this),
                  t.util.defineReactive(
                    this,
                    "_route",
                    this._router.history.current
                  ))
                : (this._routerRoot =
                    (this.$parent && this.$parent._routerRoot) || this),
                n(this, this);
            },
            destroyed: function () {
              n(this);
            },
          }),
            Object.defineProperty(t.prototype, "$router", {
              get: function () {
                return this._routerRoot._router;
              },
            }),
            Object.defineProperty(t.prototype, "$route", {
              get: function () {
                return this._routerRoot._route;
              },
            }),
            t.component("router-view", s),
            t.component("router-link", A);
          var r = t.config.optionMergeStrategies;
          r.beforeRouteEnter =
            r.beforeRouteLeave =
            r.beforeRouteUpdate =
              r.created;
        }
      }
      var S = "undefined" != typeof window;
      function k(t, e, n) {
        var r = t.charAt(0);
        if ("/" === r) return t;
        if ("?" === r || "#" === r) return e + t;
        var i = e.split("/");
        (n && i[i.length - 1]) || i.pop();
        for (
          var s = t.replace(/^\//, "").split("/"), a = 0;
          a < s.length;
          a++
        ) {
          var o = s[a];
          ".." === o ? i.pop() : "." !== o && i.push(o);
        }
        return "" !== i[0] && i.unshift(""), i.join("/");
      }
      function F(t) {
        return t.replace(/\/\//g, "/");
      }
      var T =
          Array.isArray ||
          function (t) {
            return "[object Array]" == Object.prototype.toString.call(t);
          },
        _ = K,
        B = P,
        I = function (t, e) {
          return $(P(t, e));
        },
        N = $,
        O = z,
        M = new RegExp(
          [
            "(\\\\.)",
            "([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))",
          ].join("|"),
          "g"
        );
      function P(t, e) {
        for (
          var n, r = [], i = 0, s = 0, a = "", o = (e && e.delimiter) || "/";
          null != (n = M.exec(t));

        ) {
          var u = n[0],
            c = n[1],
            l = n.index;
          if (((a += t.slice(s, l)), (s = l + u.length), c)) a += c[1];
          else {
            var h = t[s],
              p = n[2],
              f = n[3],
              d = n[4],
              m = n[5],
              v = n[6],
              y = n[7];
            a && (r.push(a), (a = ""));
            var g = null != p && null != h && h !== p,
              x = "+" === v || "*" === v,
              D = "?" === v || "*" === v,
              E = n[2] || o,
              C = d || m;
            r.push({
              name: f || i++,
              prefix: p || "",
              delimiter: E,
              optional: D,
              repeat: x,
              partial: g,
              asterisk: !!y,
              pattern: C ? j(C) : y ? ".*" : "[^" + U(E) + "]+?",
            });
          }
        }
        return s < t.length && (a += t.substr(s)), a && r.push(a), r;
      }
      function L(t) {
        return encodeURI(t).replace(/[\/?#]/g, function (t) {
          return "%" + t.charCodeAt(0).toString(16).toUpperCase();
        });
      }
      function R(t) {
        return encodeURI(t).replace(/[?#]/g, function (t) {
          return "%" + t.charCodeAt(0).toString(16).toUpperCase();
        });
      }
      function $(t) {
        for (var e = new Array(t.length), n = 0; n < t.length; n++)
          "object" == typeof t[n] &&
            (e[n] = new RegExp("^(?:" + t[n].pattern + ")$"));
        return function (n, r) {
          for (
            var i = "",
              s = n || {},
              a = (r || {}).pretty ? L : encodeURIComponent,
              o = 0;
            o < t.length;
            o++
          ) {
            var u = t[o];
            if ("string" != typeof u) {
              var c,
                l = s[u.name];
              if (null == l) {
                if (u.optional) {
                  u.partial && (i += u.prefix);
                  continue;
                }
                throw new TypeError('Expected "' + u.name + '" to be defined');
              }
              if (T(l)) {
                if (!u.repeat)
                  throw new TypeError(
                    'Expected "' +
                      u.name +
                      '" to not repeat, but received `' +
                      JSON.stringify(l) +
                      "`"
                  );
                if (0 === l.length) {
                  if (u.optional) continue;
                  throw new TypeError(
                    'Expected "' + u.name + '" to not be empty'
                  );
                }
                for (var h = 0; h < l.length; h++) {
                  if (((c = a(l[h])), !e[o].test(c)))
                    throw new TypeError(
                      'Expected all "' +
                        u.name +
                        '" to match "' +
                        u.pattern +
                        '", but received `' +
                        JSON.stringify(c) +
                        "`"
                    );
                  i += (0 === h ? u.prefix : u.delimiter) + c;
                }
              } else {
                if (((c = u.asterisk ? R(l) : a(l)), !e[o].test(c)))
                  throw new TypeError(
                    'Expected "' +
                      u.name +
                      '" to match "' +
                      u.pattern +
                      '", but received "' +
                      c +
                      '"'
                  );
                i += u.prefix + c;
              }
            } else i += u;
          }
          return i;
        };
      }
      function U(t) {
        return t.replace(/([.+*?=^!:${}()[\]|\/\\])/g, "\\$1");
      }
      function j(t) {
        return t.replace(/([=!:$\/()])/g, "\\$1");
      }
      function J(t, e) {
        return (t.keys = e), t;
      }
      function X(t) {
        return t.sensitive ? "" : "i";
      }
      function z(t, e, n) {
        T(e) || ((n = e || n), (e = []));
        for (
          var r = (n = n || {}).strict, i = !1 !== n.end, s = "", a = 0;
          a < t.length;
          a++
        ) {
          var o = t[a];
          if ("string" == typeof o) s += U(o);
          else {
            var u = U(o.prefix),
              c = "(?:" + o.pattern + ")";
            e.push(o),
              o.repeat && (c += "(?:" + u + c + ")*"),
              (s += c =
                o.optional
                  ? o.partial
                    ? u + "(" + c + ")?"
                    : "(?:" + u + "(" + c + "))?"
                  : u + "(" + c + ")");
          }
        }
        var l = U(n.delimiter || "/"),
          h = s.slice(-l.length) === l;
        return (
          r || (s = (h ? s.slice(0, -l.length) : s) + "(?:" + l + "(?=$))?"),
          (s += i ? "$" : r && h ? "" : "(?=" + l + "|$)"),
          J(new RegExp("^" + s, X(n)), e)
        );
      }
      function K(t, e, n) {
        return (
          T(e) || ((n = e || n), (e = [])),
          (n = n || {}),
          t instanceof RegExp
            ? (function (t, e) {
                var n = t.source.match(/\((?!\?)/g);
                if (n)
                  for (var r = 0; r < n.length; r++)
                    e.push({
                      name: r,
                      prefix: null,
                      delimiter: null,
                      optional: !1,
                      repeat: !1,
                      partial: !1,
                      asterisk: !1,
                      pattern: null,
                    });
                return J(t, e);
              })(t, e)
            : T(t)
            ? (function (t, e, n) {
                for (var r = [], i = 0; i < t.length; i++)
                  r.push(K(t[i], e, n).source);
                return J(new RegExp("(?:" + r.join("|") + ")", X(n)), e);
              })(t, e, n)
            : (function (t, e, n) {
                return z(P(t, n), e, n);
              })(t, e, n)
        );
      }
      (_.parse = B),
        (_.compile = I),
        (_.tokensToFunction = N),
        (_.tokensToRegExp = O);
      var H = Object.create(null);
      function Y(t, e, n) {
        try {
          return (H[t] || (H[t] = _.compile(t)))(e || {}, { pretty: !0 });
        } catch (t) {
          return "";
        }
      }
      function V(t, e, n, r) {
        var i = e || [],
          s = n || Object.create(null),
          a = r || Object.create(null);
        t.forEach(function (t) {
          !(function t(e, n, r, i, s, a) {
            var o = i.path;
            var u = i.name;
            0;
            var c = i.pathToRegexpOptions || {};
            var l = (function (t, e, n) {
              n || (t = t.replace(/\/$/, ""));
              if ("/" === t[0]) return t;
              if (null == e) return t;
              return F(e.path + "/" + t);
            })(o, s, c.strict);
            "boolean" == typeof i.caseSensitive &&
              (c.sensitive = i.caseSensitive);
            var h = {
              path: l,
              regex: (function (t, e) {
                var n = _(t, [], e);
                0;
                return n;
              })(l, c),
              components: i.components || { default: i.component },
              instances: {},
              name: u,
              parent: s,
              matchAs: a,
              redirect: i.redirect,
              beforeEnter: i.beforeEnter,
              meta: i.meta || {},
              props:
                null == i.props
                  ? {}
                  : i.components
                  ? i.props
                  : { default: i.props },
            };
            i.children &&
              i.children.forEach(function (i) {
                var s = a ? F(a + "/" + i.path) : void 0;
                t(e, n, r, i, h, s);
              });
            if (void 0 !== i.alias) {
              var p = Array.isArray(i.alias) ? i.alias : [i.alias];
              p.forEach(function (a) {
                var o = { path: a, children: i.children };
                t(e, n, r, o, s, h.path || "/");
              });
            }
            n[h.path] || (e.push(h.path), (n[h.path] = h));
            u && (r[u] || (r[u] = h));
          })(i, s, a, t);
        });
        for (var o = 0, u = i.length; o < u; o++)
          "*" === i[o] && (i.push(i.splice(o, 1)[0]), u--, o--);
        return { pathList: i, pathMap: s, nameMap: a };
      }
      function q(t, e, n, r) {
        var i = "string" == typeof t ? { path: t } : t;
        if (i.name || i._normalized) return i;
        if (!i.path && i.params && e) {
          (i = W({}, i))._normalized = !0;
          var s = W(W({}, e.params), i.params);
          if (e.name) (i.name = e.name), (i.params = s);
          else if (e.matched.length) {
            var a = e.matched[e.matched.length - 1].path;
            i.path = Y(a, s, e.path);
          } else 0;
          return i;
        }
        var o = (function (t) {
            var e = "",
              n = "",
              r = t.indexOf("#");
            r >= 0 && ((e = t.slice(r)), (t = t.slice(0, r)));
            var i = t.indexOf("?");
            return (
              i >= 0 && ((n = t.slice(i + 1)), (t = t.slice(0, i))),
              { path: t, query: n, hash: e }
            );
          })(i.path || ""),
          u = (e && e.path) || "/",
          c = o.path ? k(o.path, u, n || i.append) : u,
          l = (function (t, e, n) {
            void 0 === e && (e = {});
            var r,
              i = n || h;
            try {
              r = i(t || "");
            } catch (t) {
              r = {};
            }
            for (var s in e) r[s] = e[s];
            return r;
          })(o.query, i.query, r && r.options.parseQuery),
          p = i.hash || o.hash;
        return (
          p && "#" !== p.charAt(0) && (p = "#" + p),
          { _normalized: !0, path: c, query: l, hash: p }
        );
      }
      function W(t, e) {
        for (var n in e) t[n] = e[n];
        return t;
      }
      function G(t, e) {
        var n = V(t),
          r = n.pathList,
          i = n.pathMap,
          s = n.nameMap;
        function a(t, n, a) {
          var o = q(t, n, !1, e),
            c = o.name;
          if (c) {
            var l = s[c];
            if (!l) return u(null, o);
            var h = l.regex.keys
              .filter(function (t) {
                return !t.optional;
              })
              .map(function (t) {
                return t.name;
              });
            if (
              ("object" != typeof o.params && (o.params = {}),
              n && "object" == typeof n.params)
            )
              for (var p in n.params)
                !(p in o.params) &&
                  h.indexOf(p) > -1 &&
                  (o.params[p] = n.params[p]);
            if (l) return (o.path = Y(l.path, o.params)), u(l, o, a);
          } else if (o.path) {
            o.params = {};
            for (var f = 0; f < r.length; f++) {
              var d = r[f],
                m = i[d];
              if (Z(m.regex, o.path, o.params)) return u(m, o, a);
            }
          }
          return u(null, o);
        }
        function o(t, n) {
          var r = t.redirect,
            i = "function" == typeof r ? r(d(t, n, null, e)) : r;
          if (
            ("string" == typeof i && (i = { path: i }),
            !i || "object" != typeof i)
          )
            return u(null, n);
          var o = i,
            c = o.name,
            l = o.path,
            h = n.query,
            p = n.hash,
            f = n.params;
          if (
            ((h = o.hasOwnProperty("query") ? o.query : h),
            (p = o.hasOwnProperty("hash") ? o.hash : p),
            (f = o.hasOwnProperty("params") ? o.params : f),
            c)
          ) {
            s[c];
            return a(
              { _normalized: !0, name: c, query: h, hash: p, params: f },
              void 0,
              n
            );
          }
          if (l) {
            var m = (function (t, e) {
              return k(t, e.parent ? e.parent.path : "/", !0);
            })(l, t);
            return a(
              { _normalized: !0, path: Y(m, f), query: h, hash: p },
              void 0,
              n
            );
          }
          return u(null, n);
        }
        function u(t, n, r) {
          return t && t.redirect
            ? o(t, r || n)
            : t && t.matchAs
            ? (function (t, e, n) {
                var r = a({ _normalized: !0, path: Y(n, e.params) });
                if (r) {
                  var i = r.matched,
                    s = i[i.length - 1];
                  return (e.params = r.params), u(s, e);
                }
                return u(null, e);
              })(0, n, t.matchAs)
            : d(t, n, r, e);
        }
        return {
          match: a,
          addRoutes: function (t) {
            V(t, r, i, s);
          },
        };
      }
      function Z(t, e, n) {
        var r = e.match(t);
        if (!r) return !1;
        if (!n) return !0;
        for (var i = 1, s = r.length; i < s; ++i) {
          var a = t.keys[i - 1],
            o = "string" == typeof r[i] ? decodeURIComponent(r[i]) : r[i];
          a && (n[a.name] = o);
        }
        return !0;
      }
      var Q = Object.create(null);
      function tt() {
        window.history.replaceState({ key: ht() }, ""),
          window.addEventListener("popstate", function (t) {
            nt(),
              t.state &&
                t.state.key &&
                (function (t) {
                  ct = t;
                })(t.state.key);
          });
      }
      function et(t, e, n, r) {
        if (t.app) {
          var i = t.options.scrollBehavior;
          i &&
            t.app.$nextTick(function () {
              var t = (function () {
                  var t = ht();
                  if (t) return Q[t];
                })(),
                s = i(e, n, r ? t : null);
              s &&
                ("function" == typeof s.then
                  ? s
                      .then(function (e) {
                        at(e, t);
                      })
                      .catch(function (t) {
                        0;
                      })
                  : at(s, t));
            });
        }
      }
      function nt() {
        var t = ht();
        t && (Q[t] = { x: window.pageXOffset, y: window.pageYOffset });
      }
      function rt(t) {
        return st(t.x) || st(t.y);
      }
      function it(t) {
        return {
          x: st(t.x) ? t.x : window.pageXOffset,
          y: st(t.y) ? t.y : window.pageYOffset,
        };
      }
      function st(t) {
        return "number" == typeof t;
      }
      function at(t, e) {
        var n = "object" == typeof t;
        if (n && "string" == typeof t.selector) {
          var r = document.querySelector(t.selector);
          if (r) {
            var i = t.offset && "object" == typeof t.offset ? t.offset : {};
            e = (function (t, e) {
              var n = document.documentElement.getBoundingClientRect(),
                r = t.getBoundingClientRect();
              return { x: r.left - n.left - e.x, y: r.top - n.top - e.y };
            })(
              r,
              (i = (function (t) {
                return { x: st(t.x) ? t.x : 0, y: st(t.y) ? t.y : 0 };
              })(i))
            );
          } else rt(t) && (e = it(t));
        } else n && rt(t) && (e = it(t));
        e && window.scrollTo(e.x, e.y);
      }
      var ot =
          S &&
          (function () {
            var t = window.navigator.userAgent;
            return (
              ((-1 === t.indexOf("Android 2.") &&
                -1 === t.indexOf("Android 4.0")) ||
                -1 === t.indexOf("Mobile Safari") ||
                -1 !== t.indexOf("Chrome") ||
                -1 !== t.indexOf("Windows Phone")) &&
              window.history &&
              "pushState" in window.history
            );
          })(),
        ut =
          S && window.performance && window.performance.now
            ? window.performance
            : Date,
        ct = lt();
      function lt() {
        return ut.now().toFixed(3);
      }
      function ht() {
        return ct;
      }
      function pt(t, e) {
        nt();
        var n = window.history;
        try {
          e
            ? n.replaceState({ key: ct }, "", t)
            : ((ct = lt()), n.pushState({ key: ct }, "", t));
        } catch (n) {
          window.location[e ? "replace" : "assign"](t);
        }
      }
      function ft(t) {
        pt(t, !0);
      }
      function dt(t, e, n) {
        var r = function (i) {
          i >= t.length
            ? n()
            : t[i]
            ? e(t[i], function () {
                r(i + 1);
              })
            : r(i + 1);
        };
        r(0);
      }
      function mt(t) {
        return function (e, n, r) {
          var s = !1,
            a = 0,
            o = null;
          vt(t, function (t, e, n, u) {
            if ("function" == typeof t && void 0 === t.cid) {
              (s = !0), a++;
              var c,
                l = xt(function (e) {
                  (function (t) {
                    return (
                      t.__esModule || (gt && "Module" === t[Symbol.toStringTag])
                    );
                  })(e) && (e = e.default),
                    (t.resolved = "function" == typeof e ? e : D.extend(e)),
                    (n.components[u] = e),
                    --a <= 0 && r();
                }),
                h = xt(function (t) {
                  var e = "Failed to resolve async component " + u + ": " + t;
                  o || ((o = i(t) ? t : new Error(e)), r(o));
                });
              try {
                c = t(l, h);
              } catch (t) {
                h(t);
              }
              if (c)
                if ("function" == typeof c.then) c.then(l, h);
                else {
                  var p = c.component;
                  p && "function" == typeof p.then && p.then(l, h);
                }
            }
          }),
            s || r();
        };
      }
      function vt(t, e) {
        return yt(
          t.map(function (t) {
            return Object.keys(t.components).map(function (n) {
              return e(t.components[n], t.instances[n], t, n);
            });
          })
        );
      }
      function yt(t) {
        return Array.prototype.concat.apply([], t);
      }
      var gt =
        "function" == typeof Symbol && "symbol" == typeof Symbol.toStringTag;
      function xt(t) {
        var e = !1;
        return function () {
          for (var n = [], r = arguments.length; r--; ) n[r] = arguments[r];
          if (!e) return (e = !0), t.apply(this, n);
        };
      }
      var Dt = function (t, e) {
        (this.router = t),
          (this.base = (function (t) {
            if (!t)
              if (S) {
                var e = document.querySelector("base");
                t = (t = (e && e.getAttribute("href")) || "/").replace(
                  /^https?:\/\/[^\/]+/,
                  ""
                );
              } else t = "/";
            "/" !== t.charAt(0) && (t = "/" + t);
            return t.replace(/\/$/, "");
          })(e)),
          (this.current = v),
          (this.pending = null),
          (this.ready = !1),
          (this.readyCbs = []),
          (this.readyErrorCbs = []),
          (this.errorCbs = []);
      };
      function Et(t, e, n, r) {
        var i = vt(t, function (t, r, i, s) {
          var a = (function (t, e) {
            "function" != typeof t && (t = D.extend(t));
            return t.options[e];
          })(t, e);
          if (a)
            return Array.isArray(a)
              ? a.map(function (t) {
                  return n(t, r, i, s);
                })
              : n(a, r, i, s);
        });
        return yt(r ? i.reverse() : i);
      }
      function Ct(t, e) {
        if (e)
          return function () {
            return t.apply(e, arguments);
          };
      }
      (Dt.prototype.listen = function (t) {
        this.cb = t;
      }),
        (Dt.prototype.onReady = function (t, e) {
          this.ready
            ? t()
            : (this.readyCbs.push(t), e && this.readyErrorCbs.push(e));
        }),
        (Dt.prototype.onError = function (t) {
          this.errorCbs.push(t);
        }),
        (Dt.prototype.transitionTo = function (t, e, n) {
          var r = this,
            i = this.router.match(t, this.current);
          this.confirmTransition(
            i,
            function () {
              r.updateRoute(i),
                e && e(i),
                r.ensureURL(),
                r.ready ||
                  ((r.ready = !0),
                  r.readyCbs.forEach(function (t) {
                    t(i);
                  }));
            },
            function (t) {
              n && n(t),
                t &&
                  !r.ready &&
                  ((r.ready = !0),
                  r.readyErrorCbs.forEach(function (e) {
                    e(t);
                  }));
            }
          );
        }),
        (Dt.prototype.confirmTransition = function (t, e, n) {
          var s = this,
            a = this.current,
            o = function (t) {
              i(t) &&
                (s.errorCbs.length
                  ? s.errorCbs.forEach(function (e) {
                      e(t);
                    })
                  : (r(), console.error(t))),
                n && n(t);
            };
          if (g(t, a) && t.matched.length === a.matched.length)
            return this.ensureURL(), o();
          var u = (function (t, e) {
              var n,
                r = Math.max(t.length, e.length);
              for (n = 0; n < r && t[n] === e[n]; n++);
              return {
                updated: e.slice(0, n),
                activated: e.slice(n),
                deactivated: t.slice(n),
              };
            })(this.current.matched, t.matched),
            c = u.updated,
            l = u.deactivated,
            h = u.activated,
            p = [].concat(
              (function (t) {
                return Et(t, "beforeRouteLeave", Ct, !0);
              })(l),
              this.router.beforeHooks,
              (function (t) {
                return Et(t, "beforeRouteUpdate", Ct);
              })(c),
              h.map(function (t) {
                return t.beforeEnter;
              }),
              mt(h)
            );
          this.pending = t;
          var f = function (e, n) {
            if (s.pending !== t) return o();
            try {
              e(t, a, function (t) {
                !1 === t || i(t)
                  ? (s.ensureURL(!0), o(t))
                  : "string" == typeof t ||
                    ("object" == typeof t &&
                      ("string" == typeof t.path || "string" == typeof t.name))
                  ? (o(),
                    "object" == typeof t && t.replace
                      ? s.replace(t)
                      : s.push(t))
                  : n(t);
              });
            } catch (t) {
              o(t);
            }
          };
          dt(p, f, function () {
            var n = [];
            dt(
              (function (t, e, n) {
                return Et(t, "beforeRouteEnter", function (t, r, i, s) {
                  return (function (t, e, n, r, i) {
                    return function (s, a, o) {
                      return t(s, a, function (t) {
                        o(t),
                          "function" == typeof t &&
                            r.push(function () {
                              !(function t(e, n, r, i) {
                                n[r]
                                  ? e(n[r])
                                  : i() &&
                                    setTimeout(function () {
                                      t(e, n, r, i);
                                    }, 16);
                              })(t, e.instances, n, i);
                            });
                      });
                    };
                  })(t, i, s, e, n);
                });
              })(h, n, function () {
                return s.current === t;
              }).concat(s.router.resolveHooks),
              f,
              function () {
                if (s.pending !== t) return o();
                (s.pending = null),
                  e(t),
                  s.router.app &&
                    s.router.app.$nextTick(function () {
                      n.forEach(function (t) {
                        t();
                      });
                    });
              }
            );
          });
        }),
        (Dt.prototype.updateRoute = function (t) {
          var e = this.current;
          (this.current = t),
            this.cb && this.cb(t),
            this.router.afterHooks.forEach(function (n) {
              n && n(t, e);
            });
        });
      var At = (function (t) {
        function e(e, n) {
          var r = this;
          t.call(this, e, n);
          var i = e.options.scrollBehavior;
          i && tt();
          var s = wt(this.base);
          window.addEventListener("popstate", function (t) {
            var n = r.current,
              a = wt(r.base);
            (r.current === v && a === s) ||
              r.transitionTo(a, function (t) {
                i && et(e, t, n, !0);
              });
          });
        }
        return (
          t && (e.__proto__ = t),
          (e.prototype = Object.create(t && t.prototype)),
          (e.prototype.constructor = e),
          (e.prototype.go = function (t) {
            window.history.go(t);
          }),
          (e.prototype.push = function (t, e, n) {
            var r = this,
              i = this.current;
            this.transitionTo(
              t,
              function (t) {
                pt(F(r.base + t.fullPath)), et(r.router, t, i, !1), e && e(t);
              },
              n
            );
          }),
          (e.prototype.replace = function (t, e, n) {
            var r = this,
              i = this.current;
            this.transitionTo(
              t,
              function (t) {
                ft(F(r.base + t.fullPath)), et(r.router, t, i, !1), e && e(t);
              },
              n
            );
          }),
          (e.prototype.ensureURL = function (t) {
            if (wt(this.base) !== this.current.fullPath) {
              var e = F(this.base + this.current.fullPath);
              t ? pt(e) : ft(e);
            }
          }),
          (e.prototype.getCurrentLocation = function () {
            return wt(this.base);
          }),
          e
        );
      })(Dt);
      function wt(t) {
        var e = window.location.pathname;
        return (
          t && 0 === e.indexOf(t) && (e = e.slice(t.length)),
          (e || "/") + window.location.search + window.location.hash
        );
      }
      var bt = (function (t) {
        function e(e, n, r) {
          t.call(this, e, n),
            (r &&
              (function (t) {
                var e = wt(t);
                if (!/^\/#/.test(e))
                  return window.location.replace(F(t + "/#" + e)), !0;
              })(this.base)) ||
              St();
        }
        return (
          t && (e.__proto__ = t),
          (e.prototype = Object.create(t && t.prototype)),
          (e.prototype.constructor = e),
          (e.prototype.setupListeners = function () {
            var t = this,
              e = this.router.options.scrollBehavior,
              n = ot && e;
            n && tt(),
              window.addEventListener(
                ot ? "popstate" : "hashchange",
                function () {
                  var e = t.current;
                  St() &&
                    t.transitionTo(kt(), function (r) {
                      n && et(t.router, r, e, !0), ot || _t(r.fullPath);
                    });
                }
              );
          }),
          (e.prototype.push = function (t, e, n) {
            var r = this,
              i = this.current;
            this.transitionTo(
              t,
              function (t) {
                Tt(t.fullPath), et(r.router, t, i, !1), e && e(t);
              },
              n
            );
          }),
          (e.prototype.replace = function (t, e, n) {
            var r = this,
              i = this.current;
            this.transitionTo(
              t,
              function (t) {
                _t(t.fullPath), et(r.router, t, i, !1), e && e(t);
              },
              n
            );
          }),
          (e.prototype.go = function (t) {
            window.history.go(t);
          }),
          (e.prototype.ensureURL = function (t) {
            var e = this.current.fullPath;
            kt() !== e && (t ? Tt(e) : _t(e));
          }),
          (e.prototype.getCurrentLocation = function () {
            return kt();
          }),
          e
        );
      })(Dt);
      function St() {
        var t = kt();
        return "/" === t.charAt(0) || (_t("/" + t), !1);
      }
      function kt() {
        var t = window.location.href,
          e = t.indexOf("#");
        return -1 === e ? "" : t.slice(e + 1);
      }
      function Ft(t) {
        var e = window.location.href,
          n = e.indexOf("#");
        return (n >= 0 ? e.slice(0, n) : e) + "#" + t;
      }
      function Tt(t) {
        ot ? pt(Ft(t)) : (window.location.hash = t);
      }
      function _t(t) {
        ot ? ft(Ft(t)) : window.location.replace(Ft(t));
      }
      var Bt = (function (t) {
          function e(e, n) {
            t.call(this, e, n), (this.stack = []), (this.index = -1);
          }
          return (
            t && (e.__proto__ = t),
            (e.prototype = Object.create(t && t.prototype)),
            (e.prototype.constructor = e),
            (e.prototype.push = function (t, e, n) {
              var r = this;
              this.transitionTo(
                t,
                function (t) {
                  (r.stack = r.stack.slice(0, r.index + 1).concat(t)),
                    r.index++,
                    e && e(t);
                },
                n
              );
            }),
            (e.prototype.replace = function (t, e, n) {
              var r = this;
              this.transitionTo(
                t,
                function (t) {
                  (r.stack = r.stack.slice(0, r.index).concat(t)), e && e(t);
                },
                n
              );
            }),
            (e.prototype.go = function (t) {
              var e = this,
                n = this.index + t;
              if (!(n < 0 || n >= this.stack.length)) {
                var r = this.stack[n];
                this.confirmTransition(r, function () {
                  (e.index = n), e.updateRoute(r);
                });
              }
            }),
            (e.prototype.getCurrentLocation = function () {
              var t = this.stack[this.stack.length - 1];
              return t ? t.fullPath : "/";
            }),
            (e.prototype.ensureURL = function () {}),
            e
          );
        })(Dt),
        It = function (t) {
          void 0 === t && (t = {}),
            (this.app = null),
            (this.apps = []),
            (this.options = t),
            (this.beforeHooks = []),
            (this.resolveHooks = []),
            (this.afterHooks = []),
            (this.matcher = G(t.routes || [], this));
          var e = t.mode || "hash";
          switch (
            ((this.fallback = "history" === e && !ot && !1 !== t.fallback),
            this.fallback && (e = "hash"),
            S || (e = "abstract"),
            (this.mode = e),
            e)
          ) {
            case "history":
              this.history = new At(this, t.base);
              break;
            case "hash":
              this.history = new bt(this, t.base, this.fallback);
              break;
            case "abstract":
              this.history = new Bt(this, t.base);
              break;
            default:
              0;
          }
        },
        Nt = { currentRoute: { configurable: !0 } };
      function Ot(t, e) {
        return (
          t.push(e),
          function () {
            var n = t.indexOf(e);
            n > -1 && t.splice(n, 1);
          }
        );
      }
      (It.prototype.match = function (t, e, n) {
        return this.matcher.match(t, e, n);
      }),
        (Nt.currentRoute.get = function () {
          return this.history && this.history.current;
        }),
        (It.prototype.init = function (t) {
          var e = this;
          if ((this.apps.push(t), !this.app)) {
            this.app = t;
            var n = this.history;
            if (n instanceof At) n.transitionTo(n.getCurrentLocation());
            else if (n instanceof bt) {
              var r = function () {
                n.setupListeners();
              };
              n.transitionTo(n.getCurrentLocation(), r, r);
            }
            n.listen(function (t) {
              e.apps.forEach(function (e) {
                e._route = t;
              });
            });
          }
        }),
        (It.prototype.beforeEach = function (t) {
          return Ot(this.beforeHooks, t);
        }),
        (It.prototype.beforeResolve = function (t) {
          return Ot(this.resolveHooks, t);
        }),
        (It.prototype.afterEach = function (t) {
          return Ot(this.afterHooks, t);
        }),
        (It.prototype.onReady = function (t, e) {
          this.history.onReady(t, e);
        }),
        (It.prototype.onError = function (t) {
          this.history.onError(t);
        }),
        (It.prototype.push = function (t, e, n) {
          this.history.push(t, e, n);
        }),
        (It.prototype.replace = function (t, e, n) {
          this.history.replace(t, e, n);
        }),
        (It.prototype.go = function (t) {
          this.history.go(t);
        }),
        (It.prototype.back = function () {
          this.go(-1);
        }),
        (It.prototype.forward = function () {
          this.go(1);
        }),
        (It.prototype.getMatchedComponents = function (t) {
          var e = t
            ? t.matched
              ? t
              : this.resolve(t).route
            : this.currentRoute;
          return e
            ? [].concat.apply(
                [],
                e.matched.map(function (t) {
                  return Object.keys(t.components).map(function (e) {
                    return t.components[e];
                  });
                })
              )
            : [];
        }),
        (It.prototype.resolve = function (t, e, n) {
          var r = q(t, e || this.history.current, n, this),
            i = this.match(r, e),
            s = i.redirectedFrom || i.fullPath;
          return {
            location: r,
            route: i,
            href: (function (t, e, n) {
              var r = "hash" === n ? "#" + e : e;
              return t ? F(t + "/" + r) : r;
            })(this.history.base, s, this.mode),
            normalizedTo: r,
            resolved: i,
          };
        }),
        (It.prototype.addRoutes = function (t) {
          this.matcher.addRoutes(t),
            this.history.current !== v &&
              this.history.transitionTo(this.history.getCurrentLocation());
        }),
        Object.defineProperties(It.prototype, Nt),
        (It.install = b),
        (It.version = "3.0.1"),
        S && window.Vue && window.Vue.use(It),
        (e.a = It);
    },
    function (t, e, n) {
      "use strict";
      var r = n(4);
      t.exports = new r({ include: [n(12)] });
    },
    function (t, e, n) {
      "use strict";
      var r = n(4);
      t.exports = new r({
        include: [n(9)],
        implicit: [n(24), n(25), n(26), n(27)],
      });
    },
    function (t, e, n) {
      "use strict";
      var r = n(18);
      t.exports = r;
    },
    function (t, e, n) {
      (function (t) {
        var r =
            (void 0 !== t && t) ||
            ("undefined" != typeof self && self) ||
            window,
          i = Function.prototype.apply;
        function s(t, e) {
          (this._id = t), (this._clearFn = e);
        }
        (e.setTimeout = function () {
          return new s(i.call(setTimeout, r, arguments), clearTimeout);
        }),
          (e.setInterval = function () {
            return new s(i.call(setInterval, r, arguments), clearInterval);
          }),
          (e.clearTimeout = e.clearInterval =
            function (t) {
              t && t.close();
            }),
          (s.prototype.unref = s.prototype.ref = function () {}),
          (s.prototype.close = function () {
            this._clearFn.call(r, this._id);
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
          n(15),
          (e.setImmediate =
            ("undefined" != typeof self && self.setImmediate) ||
            (void 0 !== t && t.setImmediate) ||
            (this && this.setImmediate)),
          (e.clearImmediate =
            ("undefined" != typeof self && self.clearImmediate) ||
            (void 0 !== t && t.clearImmediate) ||
            (this && this.clearImmediate));
      }.call(this, n(7)));
    },
    function (t, e, n) {
      (function (t, e) {
        !(function (t, n) {
          "use strict";
          if (!t.setImmediate) {
            var r,
              i = 1,
              s = {},
              a = !1,
              o = t.document,
              u = Object.getPrototypeOf && Object.getPrototypeOf(t);
            (u = u && u.setTimeout ? u : t),
              "[object process]" === {}.toString.call(t.process)
                ? (r = function (t) {
                    e.nextTick(function () {
                      l(t);
                    });
                  })
                : (function () {
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
                ? (function () {
                    var e = "setImmediate$" + Math.random() + "$",
                      n = function (n) {
                        n.source === t &&
                          "string" == typeof n.data &&
                          0 === n.data.indexOf(e) &&
                          l(+n.data.slice(e.length));
                      };
                    t.addEventListener
                      ? t.addEventListener("message", n, !1)
                      : t.attachEvent("onmessage", n),
                      (r = function (n) {
                        t.postMessage(e + n, "*");
                      });
                  })()
                : t.MessageChannel
                ? (function () {
                    var t = new MessageChannel();
                    (t.port1.onmessage = function (t) {
                      l(t.data);
                    }),
                      (r = function (e) {
                        t.port2.postMessage(e);
                      });
                  })()
                : o && "onreadystatechange" in o.createElement("script")
                ? (function () {
                    var t = o.documentElement;
                    r = function (e) {
                      var n = o.createElement("script");
                      (n.onreadystatechange = function () {
                        l(e),
                          (n.onreadystatechange = null),
                          t.removeChild(n),
                          (n = null);
                      }),
                        t.appendChild(n);
                    };
                  })()
                : (r = function (t) {
                    setTimeout(l, 0, t);
                  }),
              (u.setImmediate = function (t) {
                "function" != typeof t && (t = new Function("" + t));
                for (
                  var e = new Array(arguments.length - 1), n = 0;
                  n < e.length;
                  n++
                )
                  e[n] = arguments[n + 1];
                var a = { callback: t, args: e };
                return (s[i] = a), r(i), i++;
              }),
              (u.clearImmediate = c);
          }
          function c(t) {
            delete s[t];
          }
          function l(t) {
            if (a) setTimeout(l, 0, t);
            else {
              var e = s[t];
              if (e) {
                a = !0;
                try {
                  !(function (t) {
                    var e = t.callback,
                      r = t.args;
                    switch (r.length) {
                      case 0:
                        e();
                        break;
                      case 1:
                        e(r[0]);
                        break;
                      case 2:
                        e(r[0], r[1]);
                        break;
                      case 3:
                        e(r[0], r[1], r[2]);
                        break;
                      default:
                        e.apply(n, r);
                    }
                  })(e);
                } finally {
                  c(t), (a = !1);
                }
              }
            }
          }
        })("undefined" == typeof self ? (void 0 === t ? this : t) : self);
      }.call(this, n(7), n(16)));
    },
    function (t, e) {
      var n,
        r,
        i = (t.exports = {});
      function s() {
        throw new Error("setTimeout has not been defined");
      }
      function a() {
        throw new Error("clearTimeout has not been defined");
      }
      function o(t) {
        if (n === setTimeout) return setTimeout(t, 0);
        if ((n === s || !n) && setTimeout)
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
          n = "function" == typeof setTimeout ? setTimeout : s;
        } catch (t) {
          n = s;
        }
        try {
          r = "function" == typeof clearTimeout ? clearTimeout : a;
        } catch (t) {
          r = a;
        }
      })();
      var u,
        c = [],
        l = !1,
        h = -1;
      function p() {
        l &&
          u &&
          ((l = !1), u.length ? (c = u.concat(c)) : (h = -1), c.length && f());
      }
      function f() {
        if (!l) {
          var t = o(p);
          l = !0;
          for (var e = c.length; e; ) {
            for (u = c, c = []; ++h < e; ) u && u[h].run();
            (h = -1), (e = c.length);
          }
          (u = null),
            (l = !1),
            (function (t) {
              if (r === clearTimeout) return clearTimeout(t);
              if ((r === a || !r) && clearTimeout)
                return (r = clearTimeout), clearTimeout(t);
              try {
                r(t);
              } catch (e) {
                try {
                  return r.call(null, t);
                } catch (e) {
                  return r.call(this, t);
                }
              }
            })(t);
        }
      }
      function d(t, e) {
        (this.fun = t), (this.array = e);
      }
      function m() {}
      (i.nextTick = function (t) {
        var e = new Array(arguments.length - 1);
        if (arguments.length > 1)
          for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
        c.push(new d(t, e)), 1 !== c.length || l || o(f);
      }),
        (d.prototype.run = function () {
          this.fun.apply(null, this.array);
        }),
        (i.title = "browser"),
        (i.browser = !0),
        (i.env = {}),
        (i.argv = []),
        (i.version = ""),
        (i.versions = {}),
        (i.on = m),
        (i.addListener = m),
        (i.once = m),
        (i.off = m),
        (i.removeListener = m),
        (i.removeAllListeners = m),
        (i.emit = m),
        (i.prependListener = m),
        (i.prependOnceListener = m),
        (i.listeners = function (t) {
          return [];
        }),
        (i.binding = function (t) {
          throw new Error("process.binding is not supported");
        }),
        (i.cwd = function () {
          return "/";
        }),
        (i.chdir = function (t) {
          throw new Error("process.chdir is not supported");
        }),
        (i.umask = function () {
          return 0;
        });
    },
    ,
    function (t, e, n) {
      "use strict";
      var r = n(19),
        i = n(42);
      function s(t) {
        return function () {
          throw new Error(
            "Function " + t + " is deprecated and cannot be used."
          );
        };
      }
      (t.exports.Type = n(2)),
        (t.exports.Schema = n(4)),
        (t.exports.FAILSAFE_SCHEMA = n(9)),
        (t.exports.JSON_SCHEMA = n(12)),
        (t.exports.CORE_SCHEMA = n(11)),
        (t.exports.DEFAULT_SAFE_SCHEMA = n(6)),
        (t.exports.DEFAULT_FULL_SCHEMA = n(8)),
        (t.exports.load = r.load),
        (t.exports.loadAll = r.loadAll),
        (t.exports.safeLoad = r.safeLoad),
        (t.exports.safeLoadAll = r.safeLoadAll),
        (t.exports.dump = i.dump),
        (t.exports.safeDump = i.safeDump),
        (t.exports.YAMLException = n(5)),
        (t.exports.MINIMAL_SCHEMA = n(9)),
        (t.exports.SAFE_SCHEMA = n(6)),
        (t.exports.DEFAULT_SCHEMA = n(8)),
        (t.exports.scan = s("scan")),
        (t.exports.parse = s("parse")),
        (t.exports.compose = s("compose")),
        (t.exports.addConstructor = s("addConstructor"));
    },
    function (t, e, n) {
      "use strict";
      var r = n(3),
        i = n(5),
        s = n(20),
        a = n(6),
        o = n(8),
        u = Object.prototype.hasOwnProperty,
        c = 1,
        l = 2,
        h = 3,
        p = 4,
        f = 1,
        d = 2,
        m = 3,
        v =
          /[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,
        y = /[\x85\u2028\u2029]/,
        g = /[,\[\]\{\}]/,
        x = /^(?:!|!!|![a-z\-]+!)$/i,
        D =
          /^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;
      function E(t) {
        return Object.prototype.toString.call(t);
      }
      function C(t) {
        return 10 === t || 13 === t;
      }
      function A(t) {
        return 9 === t || 32 === t;
      }
      function w(t) {
        return 9 === t || 32 === t || 10 === t || 13 === t;
      }
      function b(t) {
        return 44 === t || 91 === t || 93 === t || 123 === t || 125 === t;
      }
      function S(t) {
        var e;
        return 48 <= t && t <= 57
          ? t - 48
          : 97 <= (e = 32 | t) && e <= 102
          ? e - 97 + 10
          : -1;
      }
      function k(t) {
        return 120 === t ? 2 : 117 === t ? 4 : 85 === t ? 8 : 0;
      }
      function F(t) {
        return 48 <= t && t <= 57 ? t - 48 : -1;
      }
      function T(t) {
        return 48 === t
          ? "\0"
          : 97 === t
          ? ""
          : 98 === t
          ? "\b"
          : 116 === t
          ? "\t"
          : 9 === t
          ? "\t"
          : 110 === t
          ? "\n"
          : 118 === t
          ? "\v"
          : 102 === t
          ? "\f"
          : 114 === t
          ? "\r"
          : 101 === t
          ? ""
          : 32 === t
          ? " "
          : 34 === t
          ? '"'
          : 47 === t
          ? "/"
          : 92 === t
          ? "\\"
          : 78 === t
          ? ""
          : 95 === t
          ? " "
          : 76 === t
          ? "\u2028"
          : 80 === t
          ? "\u2029"
          : "";
      }
      function _(t) {
        return t <= 65535
          ? String.fromCharCode(t)
          : String.fromCharCode(
              55296 + ((t - 65536) >> 10),
              56320 + ((t - 65536) & 1023)
            );
      }
      for (var B = new Array(256), I = new Array(256), N = 0; N < 256; N++)
        (B[N] = T(N) ? 1 : 0), (I[N] = T(N));
      function O(t, e) {
        return new i(
          e,
          new s(
            t.filename,
            t.input,
            t.position,
            t.line,
            t.position - t.lineStart
          )
        );
      }
      function M(t, e) {
        throw O(t, e);
      }
      function P(t, e) {
        t.onWarning && t.onWarning.call(null, O(t, e));
      }
      var L = {
        YAML: function (t, e, n) {
          var r, i, s;
          null !== t.version && M(t, "duplication of %YAML directive"),
            1 !== n.length &&
              M(t, "YAML directive accepts exactly one argument"),
            null === (r = /^([0-9]+)\.([0-9]+)$/.exec(n[0])) &&
              M(t, "ill-formed argument of the YAML directive"),
            (i = parseInt(r[1], 10)),
            (s = parseInt(r[2], 10)),
            1 !== i && M(t, "unacceptable YAML version of the document"),
            (t.version = n[0]),
            (t.checkLineBreaks = s < 2),
            1 !== s &&
              2 !== s &&
              P(t, "unsupported YAML version of the document");
        },
        TAG: function (t, e, n) {
          var r, i;
          2 !== n.length && M(t, "TAG directive accepts exactly two arguments"),
            (r = n[0]),
            (i = n[1]),
            x.test(r) ||
              M(
                t,
                "ill-formed tag handle (first argument) of the TAG directive"
              ),
            u.call(t.tagMap, r) &&
              M(
                t,
                'there is a previously declared suffix for "' +
                  r +
                  '" tag handle'
              ),
            D.test(i) ||
              M(
                t,
                "ill-formed tag prefix (second argument) of the TAG directive"
              ),
            (t.tagMap[r] = i);
        },
      };
      function R(t, e, n, r) {
        var i, s, a, o;
        if (e < n) {
          if (((o = t.input.slice(e, n)), r))
            for (i = 0, s = o.length; i < s; i += 1)
              9 === (a = o.charCodeAt(i)) ||
                (32 <= a && a <= 1114111) ||
                M(t, "expected valid JSON character");
          else
            v.test(o) && M(t, "the stream contains non-printable characters");
          t.result += o;
        }
      }
      function $(t, e, n, i) {
        var s, a, o, c;
        for (
          r.isObject(n) ||
            M(
              t,
              "cannot merge mappings; the provided source object is unacceptable"
            ),
            o = 0,
            c = (s = Object.keys(n)).length;
          o < c;
          o += 1
        )
          (a = s[o]), u.call(e, a) || ((e[a] = n[a]), (i[a] = !0));
      }
      function U(t, e, n, r, i, s, a, o) {
        var c, l;
        if (Array.isArray(i))
          for (
            c = 0, l = (i = Array.prototype.slice.call(i)).length;
            c < l;
            c += 1
          )
            Array.isArray(i[c]) &&
              M(t, "nested arrays are not supported inside keys"),
              "object" == typeof i &&
                "[object Object]" === E(i[c]) &&
                (i[c] = "[object Object]");
        if (
          ("object" == typeof i &&
            "[object Object]" === E(i) &&
            (i = "[object Object]"),
          (i = String(i)),
          null === e && (e = {}),
          "tag:yaml.org,2002:merge" === r)
        )
          if (Array.isArray(s))
            for (c = 0, l = s.length; c < l; c += 1) $(t, e, s[c], n);
          else $(t, e, s, n);
        else
          t.json ||
            u.call(n, i) ||
            !u.call(e, i) ||
            ((t.line = a || t.line),
            (t.position = o || t.position),
            M(t, "duplicated mapping key")),
            (e[i] = s),
            delete n[i];
        return e;
      }
      function j(t) {
        var e;
        10 === (e = t.input.charCodeAt(t.position))
          ? t.position++
          : 13 === e
          ? (t.position++,
            10 === t.input.charCodeAt(t.position) && t.position++)
          : M(t, "a line break is expected"),
          (t.line += 1),
          (t.lineStart = t.position);
      }
      function J(t, e, n) {
        for (var r = 0, i = t.input.charCodeAt(t.position); 0 !== i; ) {
          for (; A(i); ) i = t.input.charCodeAt(++t.position);
          if (e && 35 === i)
            do {
              i = t.input.charCodeAt(++t.position);
            } while (10 !== i && 13 !== i && 0 !== i);
          if (!C(i)) break;
          for (
            j(t), i = t.input.charCodeAt(t.position), r++, t.lineIndent = 0;
            32 === i;

          )
            t.lineIndent++, (i = t.input.charCodeAt(++t.position));
        }
        return (
          -1 !== n &&
            0 !== r &&
            t.lineIndent < n &&
            P(t, "deficient indentation"),
          r
        );
      }
      function X(t) {
        var e,
          n = t.position;
        return !(
          (45 !== (e = t.input.charCodeAt(n)) && 46 !== e) ||
          e !== t.input.charCodeAt(n + 1) ||
          e !== t.input.charCodeAt(n + 2) ||
          ((n += 3), 0 !== (e = t.input.charCodeAt(n)) && !w(e))
        );
      }
      function z(t, e) {
        1 === e
          ? (t.result += " ")
          : e > 1 && (t.result += r.repeat("\n", e - 1));
      }
      function K(t, e) {
        var n,
          r,
          i = t.tag,
          s = t.anchor,
          a = [],
          o = !1;
        for (
          null !== t.anchor && (t.anchorMap[t.anchor] = a),
            r = t.input.charCodeAt(t.position);
          0 !== r && 45 === r && w(t.input.charCodeAt(t.position + 1));

        )
          if (((o = !0), t.position++, J(t, !0, -1) && t.lineIndent <= e))
            a.push(null), (r = t.input.charCodeAt(t.position));
          else if (
            ((n = t.line),
            V(t, e, h, !1, !0),
            a.push(t.result),
            J(t, !0, -1),
            (r = t.input.charCodeAt(t.position)),
            (t.line === n || t.lineIndent > e) && 0 !== r)
          )
            M(t, "bad indentation of a sequence entry");
          else if (t.lineIndent < e) break;
        return (
          !!o &&
          ((t.tag = i),
          (t.anchor = s),
          (t.kind = "sequence"),
          (t.result = a),
          !0)
        );
      }
      function H(t) {
        var e,
          n,
          r,
          i,
          s = !1,
          a = !1;
        if (33 !== (i = t.input.charCodeAt(t.position))) return !1;
        if (
          (null !== t.tag && M(t, "duplication of a tag property"),
          60 === (i = t.input.charCodeAt(++t.position))
            ? ((s = !0), (i = t.input.charCodeAt(++t.position)))
            : 33 === i
            ? ((a = !0), (n = "!!"), (i = t.input.charCodeAt(++t.position)))
            : (n = "!"),
          (e = t.position),
          s)
        ) {
          do {
            i = t.input.charCodeAt(++t.position);
          } while (0 !== i && 62 !== i);
          t.position < t.length
            ? ((r = t.input.slice(e, t.position)),
              (i = t.input.charCodeAt(++t.position)))
            : M(t, "unexpected end of the stream within a verbatim tag");
        } else {
          for (; 0 !== i && !w(i); )
            33 === i &&
              (a
                ? M(t, "tag suffix cannot contain exclamation marks")
                : ((n = t.input.slice(e - 1, t.position + 1)),
                  x.test(n) ||
                    M(t, "named tag handle cannot contain such characters"),
                  (a = !0),
                  (e = t.position + 1))),
              (i = t.input.charCodeAt(++t.position));
          (r = t.input.slice(e, t.position)),
            g.test(r) &&
              M(t, "tag suffix cannot contain flow indicator characters");
        }
        return (
          r &&
            !D.test(r) &&
            M(t, "tag name cannot contain such characters: " + r),
          s
            ? (t.tag = r)
            : u.call(t.tagMap, n)
            ? (t.tag = t.tagMap[n] + r)
            : "!" === n
            ? (t.tag = "!" + r)
            : "!!" === n
            ? (t.tag = "tag:yaml.org,2002:" + r)
            : M(t, 'undeclared tag handle "' + n + '"'),
          !0
        );
      }
      function Y(t) {
        var e, n;
        if (38 !== (n = t.input.charCodeAt(t.position))) return !1;
        for (
          null !== t.anchor && M(t, "duplication of an anchor property"),
            n = t.input.charCodeAt(++t.position),
            e = t.position;
          0 !== n && !w(n) && !b(n);

        )
          n = t.input.charCodeAt(++t.position);
        return (
          t.position === e &&
            M(t, "name of an anchor node must contain at least one character"),
          (t.anchor = t.input.slice(e, t.position)),
          !0
        );
      }
      function V(t, e, n, i, s) {
        var a,
          o,
          v,
          y,
          g,
          x,
          D,
          E,
          T = 1,
          N = !1,
          O = !1;
        if (
          (null !== t.listener && t.listener("open", t),
          (t.tag = null),
          (t.anchor = null),
          (t.kind = null),
          (t.result = null),
          (a = o = v = p === n || h === n),
          i &&
            J(t, !0, -1) &&
            ((N = !0),
            t.lineIndent > e
              ? (T = 1)
              : t.lineIndent === e
              ? (T = 0)
              : t.lineIndent < e && (T = -1)),
          1 === T)
        )
          for (; H(t) || Y(t); )
            J(t, !0, -1)
              ? ((N = !0),
                (v = a),
                t.lineIndent > e
                  ? (T = 1)
                  : t.lineIndent === e
                  ? (T = 0)
                  : t.lineIndent < e && (T = -1))
              : (v = !1);
        if (
          (v && (v = N || s),
          (1 !== T && p !== n) ||
            ((D = c === n || l === n ? e : e + 1),
            (E = t.position - t.lineStart),
            1 === T
              ? (v &&
                  (K(t, E) ||
                    (function (t, e, n) {
                      var r,
                        i,
                        s,
                        a,
                        o,
                        u = t.tag,
                        c = t.anchor,
                        h = {},
                        f = {},
                        d = null,
                        m = null,
                        v = null,
                        y = !1,
                        g = !1;
                      for (
                        null !== t.anchor && (t.anchorMap[t.anchor] = h),
                          o = t.input.charCodeAt(t.position);
                        0 !== o;

                      ) {
                        if (
                          ((r = t.input.charCodeAt(t.position + 1)),
                          (s = t.line),
                          (a = t.position),
                          (63 !== o && 58 !== o) || !w(r))
                        ) {
                          if (!V(t, n, l, !1, !0)) break;
                          if (t.line === s) {
                            for (o = t.input.charCodeAt(t.position); A(o); )
                              o = t.input.charCodeAt(++t.position);
                            if (58 === o)
                              w((o = t.input.charCodeAt(++t.position))) ||
                                M(
                                  t,
                                  "a whitespace character is expected after the key-value separator within a block mapping"
                                ),
                                y &&
                                  (U(t, h, f, d, m, null), (d = m = v = null)),
                                (g = !0),
                                (y = !1),
                                (i = !1),
                                (d = t.tag),
                                (m = t.result);
                            else {
                              if (!g) return (t.tag = u), (t.anchor = c), !0;
                              M(
                                t,
                                "can not read an implicit mapping pair; a colon is missed"
                              );
                            }
                          } else {
                            if (!g) return (t.tag = u), (t.anchor = c), !0;
                            M(
                              t,
                              "can not read a block mapping entry; a multiline key may not be an implicit key"
                            );
                          }
                        } else
                          63 === o
                            ? (y &&
                                (U(t, h, f, d, m, null), (d = m = v = null)),
                              (g = !0),
                              (y = !0),
                              (i = !0))
                            : y
                            ? ((y = !1), (i = !0))
                            : M(
                                t,
                                "incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line"
                              ),
                            (t.position += 1),
                            (o = r);
                        if (
                          ((t.line === s || t.lineIndent > e) &&
                            (V(t, e, p, !0, i) &&
                              (y ? (m = t.result) : (v = t.result)),
                            y ||
                              (U(t, h, f, d, m, v, s, a), (d = m = v = null)),
                            J(t, !0, -1),
                            (o = t.input.charCodeAt(t.position))),
                          t.lineIndent > e && 0 !== o)
                        )
                          M(t, "bad indentation of a mapping entry");
                        else if (t.lineIndent < e) break;
                      }
                      return (
                        y && U(t, h, f, d, m, null),
                        g &&
                          ((t.tag = u),
                          (t.anchor = c),
                          (t.kind = "mapping"),
                          (t.result = h)),
                        g
                      );
                    })(t, E, D))) ||
                (function (t, e) {
                  var n,
                    r,
                    i,
                    s,
                    a,
                    o,
                    u,
                    l,
                    h,
                    p,
                    f = !0,
                    d = t.tag,
                    m = t.anchor,
                    v = {};
                  if (91 === (p = t.input.charCodeAt(t.position)))
                    (i = 93), (o = !1), (r = []);
                  else {
                    if (123 !== p) return !1;
                    (i = 125), (o = !0), (r = {});
                  }
                  for (
                    null !== t.anchor && (t.anchorMap[t.anchor] = r),
                      p = t.input.charCodeAt(++t.position);
                    0 !== p;

                  ) {
                    if (
                      (J(t, !0, e), (p = t.input.charCodeAt(t.position)) === i)
                    )
                      return (
                        t.position++,
                        (t.tag = d),
                        (t.anchor = m),
                        (t.kind = o ? "mapping" : "sequence"),
                        (t.result = r),
                        !0
                      );
                    f || M(t, "missed comma between flow collection entries"),
                      (l = u = h = null),
                      (s = a = !1),
                      63 === p &&
                        w(t.input.charCodeAt(t.position + 1)) &&
                        ((s = a = !0), t.position++, J(t, !0, e)),
                      (n = t.line),
                      V(t, e, c, !1, !0),
                      (l = t.tag),
                      (u = t.result),
                      J(t, !0, e),
                      (p = t.input.charCodeAt(t.position)),
                      (!a && t.line !== n) ||
                        58 !== p ||
                        ((s = !0),
                        (p = t.input.charCodeAt(++t.position)),
                        J(t, !0, e),
                        V(t, e, c, !1, !0),
                        (h = t.result)),
                      o
                        ? U(t, r, v, l, u, h)
                        : s
                        ? r.push(U(t, null, v, l, u, h))
                        : r.push(u),
                      J(t, !0, e),
                      44 === (p = t.input.charCodeAt(t.position))
                        ? ((f = !0), (p = t.input.charCodeAt(++t.position)))
                        : (f = !1);
                  }
                  M(t, "unexpected end of the stream within a flow collection");
                })(t, D)
                ? (O = !0)
                : ((o &&
                    (function (t, e) {
                      var n,
                        i,
                        s,
                        a,
                        o = f,
                        u = !1,
                        c = !1,
                        l = e,
                        h = 0,
                        p = !1;
                      if (124 === (a = t.input.charCodeAt(t.position))) i = !1;
                      else {
                        if (62 !== a) return !1;
                        i = !0;
                      }
                      for (t.kind = "scalar", t.result = ""; 0 !== a; )
                        if (
                          43 === (a = t.input.charCodeAt(++t.position)) ||
                          45 === a
                        )
                          f === o
                            ? (o = 43 === a ? m : d)
                            : M(t, "repeat of a chomping mode identifier");
                        else {
                          if (!((s = F(a)) >= 0)) break;
                          0 === s
                            ? M(
                                t,
                                "bad explicit indentation width of a block scalar; it cannot be less than one"
                              )
                            : c
                            ? M(t, "repeat of an indentation width identifier")
                            : ((l = e + s - 1), (c = !0));
                        }
                      if (A(a)) {
                        do {
                          a = t.input.charCodeAt(++t.position);
                        } while (A(a));
                        if (35 === a)
                          do {
                            a = t.input.charCodeAt(++t.position);
                          } while (!C(a) && 0 !== a);
                      }
                      for (; 0 !== a; ) {
                        for (
                          j(t),
                            t.lineIndent = 0,
                            a = t.input.charCodeAt(t.position);
                          (!c || t.lineIndent < l) && 32 === a;

                        )
                          t.lineIndent++,
                            (a = t.input.charCodeAt(++t.position));
                        if (
                          (!c && t.lineIndent > l && (l = t.lineIndent), C(a))
                        )
                          h++;
                        else {
                          if (t.lineIndent < l) {
                            o === m
                              ? (t.result += r.repeat("\n", u ? 1 + h : h))
                              : o === f && u && (t.result += "\n");
                            break;
                          }
                          for (
                            i
                              ? A(a)
                                ? ((p = !0),
                                  (t.result += r.repeat("\n", u ? 1 + h : h)))
                                : p
                                ? ((p = !1),
                                  (t.result += r.repeat("\n", h + 1)))
                                : 0 === h
                                ? u && (t.result += " ")
                                : (t.result += r.repeat("\n", h))
                              : (t.result += r.repeat("\n", u ? 1 + h : h)),
                              u = !0,
                              c = !0,
                              h = 0,
                              n = t.position;
                            !C(a) && 0 !== a;

                          )
                            a = t.input.charCodeAt(++t.position);
                          R(t, n, t.position, !1);
                        }
                      }
                      return !0;
                    })(t, D)) ||
                  (function (t, e) {
                    var n, r, i;
                    if (39 !== (n = t.input.charCodeAt(t.position))) return !1;
                    for (
                      t.kind = "scalar",
                        t.result = "",
                        t.position++,
                        r = i = t.position;
                      0 !== (n = t.input.charCodeAt(t.position));

                    )
                      if (39 === n) {
                        if (
                          (R(t, r, t.position, !0),
                          39 !== (n = t.input.charCodeAt(++t.position)))
                        )
                          return !0;
                        (r = t.position), t.position++, (i = t.position);
                      } else
                        C(n)
                          ? (R(t, r, i, !0),
                            z(t, J(t, !1, e)),
                            (r = i = t.position))
                          : t.position === t.lineStart && X(t)
                          ? M(
                              t,
                              "unexpected end of the document within a single quoted scalar"
                            )
                          : (t.position++, (i = t.position));
                    M(
                      t,
                      "unexpected end of the stream within a single quoted scalar"
                    );
                  })(t, D) ||
                  (function (t, e) {
                    var n, r, i, s, a, o;
                    if (34 !== (o = t.input.charCodeAt(t.position))) return !1;
                    for (
                      t.kind = "scalar",
                        t.result = "",
                        t.position++,
                        n = r = t.position;
                      0 !== (o = t.input.charCodeAt(t.position));

                    ) {
                      if (34 === o)
                        return R(t, n, t.position, !0), t.position++, !0;
                      if (92 === o) {
                        if (
                          (R(t, n, t.position, !0),
                          C((o = t.input.charCodeAt(++t.position))))
                        )
                          J(t, !1, e);
                        else if (o < 256 && B[o])
                          (t.result += I[o]), t.position++;
                        else if ((a = k(o)) > 0) {
                          for (i = a, s = 0; i > 0; i--)
                            (a = S((o = t.input.charCodeAt(++t.position)))) >= 0
                              ? (s = (s << 4) + a)
                              : M(t, "expected hexadecimal character");
                          (t.result += _(s)), t.position++;
                        } else M(t, "unknown escape sequence");
                        n = r = t.position;
                      } else
                        C(o)
                          ? (R(t, n, r, !0),
                            z(t, J(t, !1, e)),
                            (n = r = t.position))
                          : t.position === t.lineStart && X(t)
                          ? M(
                              t,
                              "unexpected end of the document within a double quoted scalar"
                            )
                          : (t.position++, (r = t.position));
                    }
                    M(
                      t,
                      "unexpected end of the stream within a double quoted scalar"
                    );
                  })(t, D)
                    ? (O = !0)
                    : !(function (t) {
                        var e, n, r;
                        if (42 !== (r = t.input.charCodeAt(t.position)))
                          return !1;
                        for (
                          r = t.input.charCodeAt(++t.position), e = t.position;
                          0 !== r && !w(r) && !b(r);

                        )
                          r = t.input.charCodeAt(++t.position);
                        return (
                          t.position === e &&
                            M(
                              t,
                              "name of an alias node must contain at least one character"
                            ),
                          (n = t.input.slice(e, t.position)),
                          t.anchorMap.hasOwnProperty(n) ||
                            M(t, 'unidentified alias "' + n + '"'),
                          (t.result = t.anchorMap[n]),
                          J(t, !0, -1),
                          !0
                        );
                      })(t)
                    ? (function (t, e, n) {
                        var r,
                          i,
                          s,
                          a,
                          o,
                          u,
                          c,
                          l,
                          h = t.kind,
                          p = t.result;
                        if (
                          w((l = t.input.charCodeAt(t.position))) ||
                          b(l) ||
                          35 === l ||
                          38 === l ||
                          42 === l ||
                          33 === l ||
                          124 === l ||
                          62 === l ||
                          39 === l ||
                          34 === l ||
                          37 === l ||
                          64 === l ||
                          96 === l
                        )
                          return !1;
                        if (
                          (63 === l || 45 === l) &&
                          (w((r = t.input.charCodeAt(t.position + 1))) ||
                            (n && b(r)))
                        )
                          return !1;
                        for (
                          t.kind = "scalar",
                            t.result = "",
                            i = s = t.position,
                            a = !1;
                          0 !== l;

                        ) {
                          if (58 === l) {
                            if (
                              w((r = t.input.charCodeAt(t.position + 1))) ||
                              (n && b(r))
                            )
                              break;
                          } else if (35 === l) {
                            if (w(t.input.charCodeAt(t.position - 1))) break;
                          } else {
                            if (
                              (t.position === t.lineStart && X(t)) ||
                              (n && b(l))
                            )
                              break;
                            if (C(l)) {
                              if (
                                ((o = t.line),
                                (u = t.lineStart),
                                (c = t.lineIndent),
                                J(t, !1, -1),
                                t.lineIndent >= e)
                              ) {
                                (a = !0), (l = t.input.charCodeAt(t.position));
                                continue;
                              }
                              (t.position = s),
                                (t.line = o),
                                (t.lineStart = u),
                                (t.lineIndent = c);
                              break;
                            }
                          }
                          a &&
                            (R(t, i, s, !1),
                            z(t, t.line - o),
                            (i = s = t.position),
                            (a = !1)),
                            A(l) || (s = t.position + 1),
                            (l = t.input.charCodeAt(++t.position));
                        }
                        return (
                          R(t, i, s, !1),
                          !!t.result || ((t.kind = h), (t.result = p), !1)
                        );
                      })(t, D, c === n) &&
                      ((O = !0), null === t.tag && (t.tag = "?"))
                    : ((O = !0),
                      (null === t.tag && null === t.anchor) ||
                        M(t, "alias node should not have any properties")),
                  null !== t.anchor && (t.anchorMap[t.anchor] = t.result))
              : 0 === T && (O = v && K(t, E))),
          null !== t.tag && "!" !== t.tag)
        )
          if ("?" === t.tag) {
            for (y = 0, g = t.implicitTypes.length; y < g; y += 1)
              if ((x = t.implicitTypes[y]).resolve(t.result)) {
                (t.result = x.construct(t.result)),
                  (t.tag = x.tag),
                  null !== t.anchor && (t.anchorMap[t.anchor] = t.result);
                break;
              }
          } else
            u.call(t.typeMap[t.kind || "fallback"], t.tag)
              ? ((x = t.typeMap[t.kind || "fallback"][t.tag]),
                null !== t.result &&
                  x.kind !== t.kind &&
                  M(
                    t,
                    "unacceptable node kind for !<" +
                      t.tag +
                      '> tag; it should be "' +
                      x.kind +
                      '", not "' +
                      t.kind +
                      '"'
                  ),
                x.resolve(t.result)
                  ? ((t.result = x.construct(t.result)),
                    null !== t.anchor && (t.anchorMap[t.anchor] = t.result))
                  : M(
                      t,
                      "cannot resolve a node with !<" + t.tag + "> explicit tag"
                    ))
              : M(t, "unknown tag !<" + t.tag + ">");
        return (
          null !== t.listener && t.listener("close", t),
          null !== t.tag || null !== t.anchor || O
        );
      }
      function q(t) {
        var e,
          n,
          r,
          i,
          s = t.position,
          a = !1;
        for (
          t.version = null,
            t.checkLineBreaks = t.legacy,
            t.tagMap = {},
            t.anchorMap = {};
          0 !== (i = t.input.charCodeAt(t.position)) &&
          (J(t, !0, -1),
          (i = t.input.charCodeAt(t.position)),
          !(t.lineIndent > 0 || 37 !== i));

        ) {
          for (
            a = !0, i = t.input.charCodeAt(++t.position), e = t.position;
            0 !== i && !w(i);

          )
            i = t.input.charCodeAt(++t.position);
          for (
            r = [],
              (n = t.input.slice(e, t.position)).length < 1 &&
                M(
                  t,
                  "directive name must not be less than one character in length"
                );
            0 !== i;

          ) {
            for (; A(i); ) i = t.input.charCodeAt(++t.position);
            if (35 === i) {
              do {
                i = t.input.charCodeAt(++t.position);
              } while (0 !== i && !C(i));
              break;
            }
            if (C(i)) break;
            for (e = t.position; 0 !== i && !w(i); )
              i = t.input.charCodeAt(++t.position);
            r.push(t.input.slice(e, t.position));
          }
          0 !== i && j(t),
            u.call(L, n)
              ? L[n](t, n, r)
              : P(t, 'unknown document directive "' + n + '"');
        }
        J(t, !0, -1),
          0 === t.lineIndent &&
          45 === t.input.charCodeAt(t.position) &&
          45 === t.input.charCodeAt(t.position + 1) &&
          45 === t.input.charCodeAt(t.position + 2)
            ? ((t.position += 3), J(t, !0, -1))
            : a && M(t, "directives end mark is expected"),
          V(t, t.lineIndent - 1, p, !1, !0),
          J(t, !0, -1),
          t.checkLineBreaks &&
            y.test(t.input.slice(s, t.position)) &&
            P(t, "non-ASCII line breaks are interpreted as content"),
          t.documents.push(t.result),
          t.position === t.lineStart && X(t)
            ? 46 === t.input.charCodeAt(t.position) &&
              ((t.position += 3), J(t, !0, -1))
            : t.position < t.length - 1 &&
              M(t, "end of the stream or a document separator is expected");
      }
      function W(t, e) {
        (t = String(t)),
          (e = e || {}),
          0 !== t.length &&
            (10 !== t.charCodeAt(t.length - 1) &&
              13 !== t.charCodeAt(t.length - 1) &&
              (t += "\n"),
            65279 === t.charCodeAt(0) && (t = t.slice(1)));
        var n = new (function (t, e) {
          (this.input = t),
            (this.filename = e.filename || null),
            (this.schema = e.schema || o),
            (this.onWarning = e.onWarning || null),
            (this.legacy = e.legacy || !1),
            (this.json = e.json || !1),
            (this.listener = e.listener || null),
            (this.implicitTypes = this.schema.compiledImplicit),
            (this.typeMap = this.schema.compiledTypeMap),
            (this.length = t.length),
            (this.position = 0),
            (this.line = 0),
            (this.lineStart = 0),
            (this.lineIndent = 0),
            (this.documents = []);
        })(t, e);
        for (n.input += "\0"; 32 === n.input.charCodeAt(n.position); )
          (n.lineIndent += 1), (n.position += 1);
        for (; n.position < n.length - 1; ) q(n);
        return n.documents;
      }
      function G(t, e, n) {
        var r,
          i,
          s = W(t, n);
        if ("function" != typeof e) return s;
        for (r = 0, i = s.length; r < i; r += 1) e(s[r]);
      }
      function Z(t, e) {
        var n = W(t, e);
        if (0 !== n.length) {
          if (1 === n.length) return n[0];
          throw new i(
            "expected a single document in the stream, but found more"
          );
        }
      }
      (t.exports.loadAll = G),
        (t.exports.load = Z),
        (t.exports.safeLoadAll = function (t, e, n) {
          if ("function" != typeof e) return G(t, r.extend({ schema: a }, n));
          G(t, e, r.extend({ schema: a }, n));
        }),
        (t.exports.safeLoad = function (t, e) {
          return Z(t, r.extend({ schema: a }, e));
        });
    },
    function (t, e, n) {
      "use strict";
      var r = n(3);
      function i(t, e, n, r, i) {
        (this.name = t),
          (this.buffer = e),
          (this.position = n),
          (this.line = r),
          (this.column = i);
      }
      (i.prototype.getSnippet = function (t, e) {
        var n, i, s, a, o;
        if (!this.buffer) return null;
        for (
          t = t || 4, e = e || 75, n = "", i = this.position;
          i > 0 &&
          -1 === "\0\r\n\u2028\u2029".indexOf(this.buffer.charAt(i - 1));

        )
          if (((i -= 1), this.position - i > e / 2 - 1)) {
            (n = " ... "), (i += 5);
            break;
          }
        for (
          s = "", a = this.position;
          a < this.buffer.length &&
          -1 === "\0\r\n\u2028\u2029".indexOf(this.buffer.charAt(a));

        )
          if ((a += 1) - this.position > e / 2 - 1) {
            (s = " ... "), (a -= 5);
            break;
          }
        return (
          (o = this.buffer.slice(i, a)),
          r.repeat(" ", t) +
            n +
            o +
            s +
            "\n" +
            r.repeat(" ", t + this.position - i + n.length) +
            "^"
        );
      }),
        (i.prototype.toString = function (t) {
          var e,
            n = "";
          return (
            this.name && (n += 'in "' + this.name + '" '),
            (n +=
              "at line " + (this.line + 1) + ", column " + (this.column + 1)),
            t || ((e = this.getSnippet()) && (n += ":\n" + e)),
            n
          );
        }),
        (t.exports = i);
    },
    function (t, e, n) {
      "use strict";
      var r = n(2);
      t.exports = new r("tag:yaml.org,2002:str", {
        kind: "scalar",
        construct: function (t) {
          return null !== t ? t : "";
        },
      });
    },
    function (t, e, n) {
      "use strict";
      var r = n(2);
      t.exports = new r("tag:yaml.org,2002:seq", {
        kind: "sequence",
        construct: function (t) {
          return null !== t ? t : [];
        },
      });
    },
    function (t, e, n) {
      "use strict";
      var r = n(2);
      t.exports = new r("tag:yaml.org,2002:map", {
        kind: "mapping",
        construct: function (t) {
          return null !== t ? t : {};
        },
      });
    },
    function (t, e, n) {
      "use strict";
      var r = n(2);
      t.exports = new r("tag:yaml.org,2002:null", {
        kind: "scalar",
        resolve: function (t) {
          if (null === t) return !0;
          var e = t.length;
          return (
            (1 === e && "~" === t) ||
            (4 === e && ("null" === t || "Null" === t || "NULL" === t))
          );
        },
        construct: function () {
          return null;
        },
        predicate: function (t) {
          return null === t;
        },
        represent: {
          canonical: function () {
            return "~";
          },
          lowercase: function () {
            return "null";
          },
          uppercase: function () {
            return "NULL";
          },
          camelcase: function () {
            return "Null";
          },
        },
        defaultStyle: "lowercase",
      });
    },
    function (t, e, n) {
      "use strict";
      var r = n(2);
      t.exports = new r("tag:yaml.org,2002:bool", {
        kind: "scalar",
        resolve: function (t) {
          if (null === t) return !1;
          var e = t.length;
          return (
            (4 === e && ("true" === t || "True" === t || "TRUE" === t)) ||
            (5 === e && ("false" === t || "False" === t || "FALSE" === t))
          );
        },
        construct: function (t) {
          return "true" === t || "True" === t || "TRUE" === t;
        },
        predicate: function (t) {
          return "[object Boolean]" === Object.prototype.toString.call(t);
        },
        represent: {
          lowercase: function (t) {
            return t ? "true" : "false";
          },
          uppercase: function (t) {
            return t ? "TRUE" : "FALSE";
          },
          camelcase: function (t) {
            return t ? "True" : "False";
          },
        },
        defaultStyle: "lowercase",
      });
    },
    function (t, e, n) {
      "use strict";
      var r = n(3),
        i = n(2);
      function s(t) {
        return (
          (48 <= t && t <= 57) || (65 <= t && t <= 70) || (97 <= t && t <= 102)
        );
      }
      function a(t) {
        return 48 <= t && t <= 55;
      }
      function o(t) {
        return 48 <= t && t <= 57;
      }
      t.exports = new i("tag:yaml.org,2002:int", {
        kind: "scalar",
        resolve: function (t) {
          if (null === t) return !1;
          var e,
            n = t.length,
            r = 0,
            i = !1;
          if (!n) return !1;
          if ((("-" !== (e = t[r]) && "+" !== e) || (e = t[++r]), "0" === e)) {
            if (r + 1 === n) return !0;
            if ("b" === (e = t[++r])) {
              for (r++; r < n; r++)
                if ("_" !== (e = t[r])) {
                  if ("0" !== e && "1" !== e) return !1;
                  i = !0;
                }
              return i && "_" !== e;
            }
            if ("x" === e) {
              for (r++; r < n; r++)
                if ("_" !== (e = t[r])) {
                  if (!s(t.charCodeAt(r))) return !1;
                  i = !0;
                }
              return i && "_" !== e;
            }
            for (; r < n; r++)
              if ("_" !== (e = t[r])) {
                if (!a(t.charCodeAt(r))) return !1;
                i = !0;
              }
            return i && "_" !== e;
          }
          if ("_" === e) return !1;
          for (; r < n; r++)
            if ("_" !== (e = t[r])) {
              if (":" === e) break;
              if (!o(t.charCodeAt(r))) return !1;
              i = !0;
            }
          return (
            !(!i || "_" === e) &&
            (":" !== e || /^(:[0-5]?[0-9])+$/.test(t.slice(r)))
          );
        },
        construct: function (t) {
          var e,
            n,
            r = t,
            i = 1,
            s = [];
          return (
            -1 !== r.indexOf("_") && (r = r.replace(/_/g, "")),
            ("-" !== (e = r[0]) && "+" !== e) ||
              ("-" === e && (i = -1), (e = (r = r.slice(1))[0])),
            "0" === r
              ? 0
              : "0" === e
              ? "b" === r[1]
                ? i * parseInt(r.slice(2), 2)
                : "x" === r[1]
                ? i * parseInt(r, 16)
                : i * parseInt(r, 8)
              : -1 !== r.indexOf(":")
              ? (r.split(":").forEach(function (t) {
                  s.unshift(parseInt(t, 10));
                }),
                (r = 0),
                (n = 1),
                s.forEach(function (t) {
                  (r += t * n), (n *= 60);
                }),
                i * r)
              : i * parseInt(r, 10)
          );
        },
        predicate: function (t) {
          return (
            "[object Number]" === Object.prototype.toString.call(t) &&
            t % 1 == 0 &&
            !r.isNegativeZero(t)
          );
        },
        represent: {
          binary: function (t) {
            return t >= 0
              ? "0b" + t.toString(2)
              : "-0b" + t.toString(2).slice(1);
          },
          octal: function (t) {
            return t >= 0 ? "0" + t.toString(8) : "-0" + t.toString(8).slice(1);
          },
          decimal: function (t) {
            return t.toString(10);
          },
          hexadecimal: function (t) {
            return t >= 0
              ? "0x" + t.toString(16).toUpperCase()
              : "-0x" + t.toString(16).toUpperCase().slice(1);
          },
        },
        defaultStyle: "decimal",
        styleAliases: {
          binary: [2, "bin"],
          octal: [8, "oct"],
          decimal: [10, "dec"],
          hexadecimal: [16, "hex"],
        },
      });
    },
    function (t, e, n) {
      "use strict";
      var r = n(3),
        i = n(2),
        s = new RegExp(
          "^(?:[-+]?(?:0|[1-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+\\.[0-9_]*|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$"
        );
      var a = /^[-+]?[0-9]+e/;
      t.exports = new i("tag:yaml.org,2002:float", {
        kind: "scalar",
        resolve: function (t) {
          return null !== t && !(!s.test(t) || "_" === t[t.length - 1]);
        },
        construct: function (t) {
          var e, n, r, i;
          return (
            (n = "-" === (e = t.replace(/_/g, "").toLowerCase())[0] ? -1 : 1),
            (i = []),
            "+-".indexOf(e[0]) >= 0 && (e = e.slice(1)),
            ".inf" === e
              ? 1 === n
                ? Number.POSITIVE_INFINITY
                : Number.NEGATIVE_INFINITY
              : ".nan" === e
              ? NaN
              : e.indexOf(":") >= 0
              ? (e.split(":").forEach(function (t) {
                  i.unshift(parseFloat(t, 10));
                }),
                (e = 0),
                (r = 1),
                i.forEach(function (t) {
                  (e += t * r), (r *= 60);
                }),
                n * e)
              : n * parseFloat(e, 10)
          );
        },
        predicate: function (t) {
          return (
            "[object Number]" === Object.prototype.toString.call(t) &&
            (t % 1 != 0 || r.isNegativeZero(t))
          );
        },
        represent: function (t, e) {
          var n;
          if (isNaN(t))
            switch (e) {
              case "lowercase":
                return ".nan";
              case "uppercase":
                return ".NAN";
              case "camelcase":
                return ".NaN";
            }
          else if (Number.POSITIVE_INFINITY === t)
            switch (e) {
              case "lowercase":
                return ".inf";
              case "uppercase":
                return ".INF";
              case "camelcase":
                return ".Inf";
            }
          else if (Number.NEGATIVE_INFINITY === t)
            switch (e) {
              case "lowercase":
                return "-.inf";
              case "uppercase":
                return "-.INF";
              case "camelcase":
                return "-.Inf";
            }
          else if (r.isNegativeZero(t)) return "-0.0";
          return (n = t.toString(10)), a.test(n) ? n.replace("e", ".e") : n;
        },
        defaultStyle: "lowercase",
      });
    },
    function (t, e, n) {
      "use strict";
      var r = n(2),
        i = new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),
        s = new RegExp(
          "^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$"
        );
      t.exports = new r("tag:yaml.org,2002:timestamp", {
        kind: "scalar",
        resolve: function (t) {
          return null !== t && (null !== i.exec(t) || null !== s.exec(t));
        },
        construct: function (t) {
          var e,
            n,
            r,
            a,
            o,
            u,
            c,
            l,
            h = 0,
            p = null;
          if ((null === (e = i.exec(t)) && (e = s.exec(t)), null === e))
            throw new Error("Date resolve error");
          if (((n = +e[1]), (r = +e[2] - 1), (a = +e[3]), !e[4]))
            return new Date(Date.UTC(n, r, a));
          if (((o = +e[4]), (u = +e[5]), (c = +e[6]), e[7])) {
            for (h = e[7].slice(0, 3); h.length < 3; ) h += "0";
            h = +h;
          }
          return (
            e[9] &&
              ((p = 6e4 * (60 * +e[10] + +(e[11] || 0))),
              "-" === e[9] && (p = -p)),
            (l = new Date(Date.UTC(n, r, a, o, u, c, h))),
            p && l.setTime(l.getTime() - p),
            l
          );
        },
        instanceOf: Date,
        represent: function (t) {
          return t.toISOString();
        },
      });
    },
    function (t, e, n) {
      "use strict";
      var r = n(2);
      t.exports = new r("tag:yaml.org,2002:merge", {
        kind: "scalar",
        resolve: function (t) {
          return "<<" === t || null === t;
        },
      });
    },
    function (t, e, n) {
      "use strict";
      var r;
      try {
        r = n(31).Buffer;
      } catch (t) {}
      var i = n(2),
        s =
          "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=\n\r";
      t.exports = new i("tag:yaml.org,2002:binary", {
        kind: "scalar",
        resolve: function (t) {
          if (null === t) return !1;
          var e,
            n,
            r = 0,
            i = t.length,
            a = s;
          for (n = 0; n < i; n++)
            if (!((e = a.indexOf(t.charAt(n))) > 64)) {
              if (e < 0) return !1;
              r += 6;
            }
          return r % 8 == 0;
        },
        construct: function (t) {
          var e,
            n,
            i = t.replace(/[\r\n=]/g, ""),
            a = i.length,
            o = s,
            u = 0,
            c = [];
          for (e = 0; e < a; e++)
            e % 4 == 0 &&
              e &&
              (c.push((u >> 16) & 255),
              c.push((u >> 8) & 255),
              c.push(255 & u)),
              (u = (u << 6) | o.indexOf(i.charAt(e)));
          return (
            0 == (n = (a % 4) * 6)
              ? (c.push((u >> 16) & 255),
                c.push((u >> 8) & 255),
                c.push(255 & u))
              : 18 === n
              ? (c.push((u >> 10) & 255), c.push((u >> 2) & 255))
              : 12 === n && c.push((u >> 4) & 255),
            r ? (r.from ? r.from(c) : new r(c)) : c
          );
        },
        predicate: function (t) {
          return r && r.isBuffer(t);
        },
        represent: function (t) {
          var e,
            n,
            r = "",
            i = 0,
            a = t.length,
            o = s;
          for (e = 0; e < a; e++)
            e % 3 == 0 &&
              e &&
              ((r += o[(i >> 18) & 63]),
              (r += o[(i >> 12) & 63]),
              (r += o[(i >> 6) & 63]),
              (r += o[63 & i])),
              (i = (i << 8) + t[e]);
          return (
            0 == (n = a % 3)
              ? ((r += o[(i >> 18) & 63]),
                (r += o[(i >> 12) & 63]),
                (r += o[(i >> 6) & 63]),
                (r += o[63 & i]))
              : 2 === n
              ? ((r += o[(i >> 10) & 63]),
                (r += o[(i >> 4) & 63]),
                (r += o[(i << 2) & 63]),
                (r += o[64]))
              : 1 === n &&
                ((r += o[(i >> 2) & 63]),
                (r += o[(i << 4) & 63]),
                (r += o[64]),
                (r += o[64])),
            r
          );
        },
      });
    },
    function (t, e, n) {
      "use strict";
      (function (t) {
        /*!
         * The buffer module from node.js, for the browser.
         *
         * @author   Feross Aboukhadijeh <http://feross.org>
         * @license  MIT
         */
        var r = n(32),
          i = n(33),
          s = n(34);
        function a() {
          return u.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
        }
        function o(t, e) {
          if (a() < e) throw new RangeError("Invalid typed array length");
          return (
            u.TYPED_ARRAY_SUPPORT
              ? ((t = new Uint8Array(e)).__proto__ = u.prototype)
              : (null === t && (t = new u(e)), (t.length = e)),
            t
          );
        }
        function u(t, e, n) {
          if (!(u.TYPED_ARRAY_SUPPORT || this instanceof u))
            return new u(t, e, n);
          if ("number" == typeof t) {
            if ("string" == typeof e)
              throw new Error(
                "If encoding is specified then the first argument must be a string"
              );
            return h(this, t);
          }
          return c(this, t, e, n);
        }
        function c(t, e, n, r) {
          if ("number" == typeof e)
            throw new TypeError('"value" argument must not be a number');
          return "undefined" != typeof ArrayBuffer && e instanceof ArrayBuffer
            ? (function (t, e, n, r) {
                if ((e.byteLength, n < 0 || e.byteLength < n))
                  throw new RangeError("'offset' is out of bounds");
                if (e.byteLength < n + (r || 0))
                  throw new RangeError("'length' is out of bounds");
                e =
                  void 0 === n && void 0 === r
                    ? new Uint8Array(e)
                    : void 0 === r
                    ? new Uint8Array(e, n)
                    : new Uint8Array(e, n, r);
                u.TYPED_ARRAY_SUPPORT
                  ? ((t = e).__proto__ = u.prototype)
                  : (t = p(t, e));
                return t;
              })(t, e, n, r)
            : "string" == typeof e
            ? (function (t, e, n) {
                ("string" == typeof n && "" !== n) || (n = "utf8");
                if (!u.isEncoding(n))
                  throw new TypeError(
                    '"encoding" must be a valid string encoding'
                  );
                var r = 0 | d(e, n),
                  i = (t = o(t, r)).write(e, n);
                i !== r && (t = t.slice(0, i));
                return t;
              })(t, e, n)
            : (function (t, e) {
                if (u.isBuffer(e)) {
                  var n = 0 | f(e.length);
                  return 0 === (t = o(t, n)).length
                    ? t
                    : (e.copy(t, 0, 0, n), t);
                }
                if (e) {
                  if (
                    ("undefined" != typeof ArrayBuffer &&
                      e.buffer instanceof ArrayBuffer) ||
                    "length" in e
                  )
                    return "number" != typeof e.length ||
                      (function (t) {
                        return t != t;
                      })(e.length)
                      ? o(t, 0)
                      : p(t, e);
                  if ("Buffer" === e.type && s(e.data)) return p(t, e.data);
                }
                throw new TypeError(
                  "First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object."
                );
              })(t, e);
        }
        function l(t) {
          if ("number" != typeof t)
            throw new TypeError('"size" argument must be a number');
          if (t < 0)
            throw new RangeError('"size" argument must not be negative');
        }
        function h(t, e) {
          if ((l(e), (t = o(t, e < 0 ? 0 : 0 | f(e))), !u.TYPED_ARRAY_SUPPORT))
            for (var n = 0; n < e; ++n) t[n] = 0;
          return t;
        }
        function p(t, e) {
          var n = e.length < 0 ? 0 : 0 | f(e.length);
          t = o(t, n);
          for (var r = 0; r < n; r += 1) t[r] = 255 & e[r];
          return t;
        }
        function f(t) {
          if (t >= a())
            throw new RangeError(
              "Attempt to allocate Buffer larger than maximum size: 0x" +
                a().toString(16) +
                " bytes"
            );
          return 0 | t;
        }
        function d(t, e) {
          if (u.isBuffer(t)) return t.length;
          if (
            "undefined" != typeof ArrayBuffer &&
            "function" == typeof ArrayBuffer.isView &&
            (ArrayBuffer.isView(t) || t instanceof ArrayBuffer)
          )
            return t.byteLength;
          "string" != typeof t && (t = "" + t);
          var n = t.length;
          if (0 === n) return 0;
          for (var r = !1; ; )
            switch (e) {
              case "ascii":
              case "latin1":
              case "binary":
                return n;
              case "utf8":
              case "utf-8":
              case void 0:
                return U(t).length;
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                return 2 * n;
              case "hex":
                return n >>> 1;
              case "base64":
                return j(t).length;
              default:
                if (r) return U(t).length;
                (e = ("" + e).toLowerCase()), (r = !0);
            }
        }
        function m(t, e, n) {
          var r = t[e];
          (t[e] = t[n]), (t[n] = r);
        }
        function v(t, e, n, r, i) {
          if (0 === t.length) return -1;
          if (
            ("string" == typeof n
              ? ((r = n), (n = 0))
              : n > 2147483647
              ? (n = 2147483647)
              : n < -2147483648 && (n = -2147483648),
            (n = +n),
            isNaN(n) && (n = i ? 0 : t.length - 1),
            n < 0 && (n = t.length + n),
            n >= t.length)
          ) {
            if (i) return -1;
            n = t.length - 1;
          } else if (n < 0) {
            if (!i) return -1;
            n = 0;
          }
          if (("string" == typeof e && (e = u.from(e, r)), u.isBuffer(e)))
            return 0 === e.length ? -1 : y(t, e, n, r, i);
          if ("number" == typeof e)
            return (
              (e &= 255),
              u.TYPED_ARRAY_SUPPORT &&
              "function" == typeof Uint8Array.prototype.indexOf
                ? i
                  ? Uint8Array.prototype.indexOf.call(t, e, n)
                  : Uint8Array.prototype.lastIndexOf.call(t, e, n)
                : y(t, [e], n, r, i)
            );
          throw new TypeError("val must be string, number or Buffer");
        }
        function y(t, e, n, r, i) {
          var s,
            a = 1,
            o = t.length,
            u = e.length;
          if (
            void 0 !== r &&
            ("ucs2" === (r = String(r).toLowerCase()) ||
              "ucs-2" === r ||
              "utf16le" === r ||
              "utf-16le" === r)
          ) {
            if (t.length < 2 || e.length < 2) return -1;
            (a = 2), (o /= 2), (u /= 2), (n /= 2);
          }
          function c(t, e) {
            return 1 === a ? t[e] : t.readUInt16BE(e * a);
          }
          if (i) {
            var l = -1;
            for (s = n; s < o; s++)
              if (c(t, s) === c(e, -1 === l ? 0 : s - l)) {
                if ((-1 === l && (l = s), s - l + 1 === u)) return l * a;
              } else -1 !== l && (s -= s - l), (l = -1);
          } else
            for (n + u > o && (n = o - u), s = n; s >= 0; s--) {
              for (var h = !0, p = 0; p < u; p++)
                if (c(t, s + p) !== c(e, p)) {
                  h = !1;
                  break;
                }
              if (h) return s;
            }
          return -1;
        }
        function g(t, e, n, r) {
          n = Number(n) || 0;
          var i = t.length - n;
          r ? (r = Number(r)) > i && (r = i) : (r = i);
          var s = e.length;
          if (s % 2 != 0) throw new TypeError("Invalid hex string");
          r > s / 2 && (r = s / 2);
          for (var a = 0; a < r; ++a) {
            var o = parseInt(e.substr(2 * a, 2), 16);
            if (isNaN(o)) return a;
            t[n + a] = o;
          }
          return a;
        }
        function x(t, e, n, r) {
          return J(U(e, t.length - n), t, n, r);
        }
        function D(t, e, n, r) {
          return J(
            (function (t) {
              for (var e = [], n = 0; n < t.length; ++n)
                e.push(255 & t.charCodeAt(n));
              return e;
            })(e),
            t,
            n,
            r
          );
        }
        function E(t, e, n, r) {
          return D(t, e, n, r);
        }
        function C(t, e, n, r) {
          return J(j(e), t, n, r);
        }
        function A(t, e, n, r) {
          return J(
            (function (t, e) {
              for (
                var n, r, i, s = [], a = 0;
                a < t.length && !((e -= 2) < 0);
                ++a
              )
                (n = t.charCodeAt(a)),
                  (r = n >> 8),
                  (i = n % 256),
                  s.push(i),
                  s.push(r);
              return s;
            })(e, t.length - n),
            t,
            n,
            r
          );
        }
        function w(t, e, n) {
          return 0 === e && n === t.length
            ? r.fromByteArray(t)
            : r.fromByteArray(t.slice(e, n));
        }
        function b(t, e, n) {
          n = Math.min(t.length, n);
          for (var r = [], i = e; i < n; ) {
            var s,
              a,
              o,
              u,
              c = t[i],
              l = null,
              h = c > 239 ? 4 : c > 223 ? 3 : c > 191 ? 2 : 1;
            if (i + h <= n)
              switch (h) {
                case 1:
                  c < 128 && (l = c);
                  break;
                case 2:
                  128 == (192 & (s = t[i + 1])) &&
                    (u = ((31 & c) << 6) | (63 & s)) > 127 &&
                    (l = u);
                  break;
                case 3:
                  (s = t[i + 1]),
                    (a = t[i + 2]),
                    128 == (192 & s) &&
                      128 == (192 & a) &&
                      (u = ((15 & c) << 12) | ((63 & s) << 6) | (63 & a)) >
                        2047 &&
                      (u < 55296 || u > 57343) &&
                      (l = u);
                  break;
                case 4:
                  (s = t[i + 1]),
                    (a = t[i + 2]),
                    (o = t[i + 3]),
                    128 == (192 & s) &&
                      128 == (192 & a) &&
                      128 == (192 & o) &&
                      (u =
                        ((15 & c) << 18) |
                        ((63 & s) << 12) |
                        ((63 & a) << 6) |
                        (63 & o)) > 65535 &&
                      u < 1114112 &&
                      (l = u);
              }
            null === l
              ? ((l = 65533), (h = 1))
              : l > 65535 &&
                ((l -= 65536),
                r.push(((l >>> 10) & 1023) | 55296),
                (l = 56320 | (1023 & l))),
              r.push(l),
              (i += h);
          }
          return (function (t) {
            var e = t.length;
            if (e <= S) return String.fromCharCode.apply(String, t);
            var n = "",
              r = 0;
            for (; r < e; )
              n += String.fromCharCode.apply(String, t.slice(r, (r += S)));
            return n;
          })(r);
        }
        (e.Buffer = u),
          (e.SlowBuffer = function (t) {
            +t != t && (t = 0);
            return u.alloc(+t);
          }),
          (e.INSPECT_MAX_BYTES = 50),
          (u.TYPED_ARRAY_SUPPORT =
            void 0 !== t.TYPED_ARRAY_SUPPORT
              ? t.TYPED_ARRAY_SUPPORT
              : (function () {
                  try {
                    var t = new Uint8Array(1);
                    return (
                      (t.__proto__ = {
                        __proto__: Uint8Array.prototype,
                        foo: function () {
                          return 42;
                        },
                      }),
                      42 === t.foo() &&
                        "function" == typeof t.subarray &&
                        0 === t.subarray(1, 1).byteLength
                    );
                  } catch (t) {
                    return !1;
                  }
                })()),
          (e.kMaxLength = a()),
          (u.poolSize = 8192),
          (u._augment = function (t) {
            return (t.__proto__ = u.prototype), t;
          }),
          (u.from = function (t, e, n) {
            return c(null, t, e, n);
          }),
          u.TYPED_ARRAY_SUPPORT &&
            ((u.prototype.__proto__ = Uint8Array.prototype),
            (u.__proto__ = Uint8Array),
            "undefined" != typeof Symbol &&
              Symbol.species &&
              u[Symbol.species] === u &&
              Object.defineProperty(u, Symbol.species, {
                value: null,
                configurable: !0,
              })),
          (u.alloc = function (t, e, n) {
            return (function (t, e, n, r) {
              return (
                l(e),
                e <= 0
                  ? o(t, e)
                  : void 0 !== n
                  ? "string" == typeof r
                    ? o(t, e).fill(n, r)
                    : o(t, e).fill(n)
                  : o(t, e)
              );
            })(null, t, e, n);
          }),
          (u.allocUnsafe = function (t) {
            return h(null, t);
          }),
          (u.allocUnsafeSlow = function (t) {
            return h(null, t);
          }),
          (u.isBuffer = function (t) {
            return !(null == t || !t._isBuffer);
          }),
          (u.compare = function (t, e) {
            if (!u.isBuffer(t) || !u.isBuffer(e))
              throw new TypeError("Arguments must be Buffers");
            if (t === e) return 0;
            for (
              var n = t.length, r = e.length, i = 0, s = Math.min(n, r);
              i < s;
              ++i
            )
              if (t[i] !== e[i]) {
                (n = t[i]), (r = e[i]);
                break;
              }
            return n < r ? -1 : r < n ? 1 : 0;
          }),
          (u.isEncoding = function (t) {
            switch (String(t).toLowerCase()) {
              case "hex":
              case "utf8":
              case "utf-8":
              case "ascii":
              case "latin1":
              case "binary":
              case "base64":
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                return !0;
              default:
                return !1;
            }
          }),
          (u.concat = function (t, e) {
            if (!s(t))
              throw new TypeError(
                '"list" argument must be an Array of Buffers'
              );
            if (0 === t.length) return u.alloc(0);
            var n;
            if (void 0 === e)
              for (e = 0, n = 0; n < t.length; ++n) e += t[n].length;
            var r = u.allocUnsafe(e),
              i = 0;
            for (n = 0; n < t.length; ++n) {
              var a = t[n];
              if (!u.isBuffer(a))
                throw new TypeError(
                  '"list" argument must be an Array of Buffers'
                );
              a.copy(r, i), (i += a.length);
            }
            return r;
          }),
          (u.byteLength = d),
          (u.prototype._isBuffer = !0),
          (u.prototype.swap16 = function () {
            var t = this.length;
            if (t % 2 != 0)
              throw new RangeError("Buffer size must be a multiple of 16-bits");
            for (var e = 0; e < t; e += 2) m(this, e, e + 1);
            return this;
          }),
          (u.prototype.swap32 = function () {
            var t = this.length;
            if (t % 4 != 0)
              throw new RangeError("Buffer size must be a multiple of 32-bits");
            for (var e = 0; e < t; e += 4)
              m(this, e, e + 3), m(this, e + 1, e + 2);
            return this;
          }),
          (u.prototype.swap64 = function () {
            var t = this.length;
            if (t % 8 != 0)
              throw new RangeError("Buffer size must be a multiple of 64-bits");
            for (var e = 0; e < t; e += 8)
              m(this, e, e + 7),
                m(this, e + 1, e + 6),
                m(this, e + 2, e + 5),
                m(this, e + 3, e + 4);
            return this;
          }),
          (u.prototype.toString = function () {
            var t = 0 | this.length;
            return 0 === t
              ? ""
              : 0 === arguments.length
              ? b(this, 0, t)
              : function (t, e, n) {
                  var r = !1;
                  if (((void 0 === e || e < 0) && (e = 0), e > this.length))
                    return "";
                  if (
                    ((void 0 === n || n > this.length) && (n = this.length),
                    n <= 0)
                  )
                    return "";
                  if ((n >>>= 0) <= (e >>>= 0)) return "";
                  for (t || (t = "utf8"); ; )
                    switch (t) {
                      case "hex":
                        return T(this, e, n);
                      case "utf8":
                      case "utf-8":
                        return b(this, e, n);
                      case "ascii":
                        return k(this, e, n);
                      case "latin1":
                      case "binary":
                        return F(this, e, n);
                      case "base64":
                        return w(this, e, n);
                      case "ucs2":
                      case "ucs-2":
                      case "utf16le":
                      case "utf-16le":
                        return _(this, e, n);
                      default:
                        if (r) throw new TypeError("Unknown encoding: " + t);
                        (t = (t + "").toLowerCase()), (r = !0);
                    }
                }.apply(this, arguments);
          }),
          (u.prototype.equals = function (t) {
            if (!u.isBuffer(t))
              throw new TypeError("Argument must be a Buffer");
            return this === t || 0 === u.compare(this, t);
          }),
          (u.prototype.inspect = function () {
            var t = "",
              n = e.INSPECT_MAX_BYTES;
            return (
              this.length > 0 &&
                ((t = this.toString("hex", 0, n).match(/.{2}/g).join(" ")),
                this.length > n && (t += " ... ")),
              "<Buffer " + t + ">"
            );
          }),
          (u.prototype.compare = function (t, e, n, r, i) {
            if (!u.isBuffer(t))
              throw new TypeError("Argument must be a Buffer");
            if (
              (void 0 === e && (e = 0),
              void 0 === n && (n = t ? t.length : 0),
              void 0 === r && (r = 0),
              void 0 === i && (i = this.length),
              e < 0 || n > t.length || r < 0 || i > this.length)
            )
              throw new RangeError("out of range index");
            if (r >= i && e >= n) return 0;
            if (r >= i) return -1;
            if (e >= n) return 1;
            if (((e >>>= 0), (n >>>= 0), (r >>>= 0), (i >>>= 0), this === t))
              return 0;
            for (
              var s = i - r,
                a = n - e,
                o = Math.min(s, a),
                c = this.slice(r, i),
                l = t.slice(e, n),
                h = 0;
              h < o;
              ++h
            )
              if (c[h] !== l[h]) {
                (s = c[h]), (a = l[h]);
                break;
              }
            return s < a ? -1 : a < s ? 1 : 0;
          }),
          (u.prototype.includes = function (t, e, n) {
            return -1 !== this.indexOf(t, e, n);
          }),
          (u.prototype.indexOf = function (t, e, n) {
            return v(this, t, e, n, !0);
          }),
          (u.prototype.lastIndexOf = function (t, e, n) {
            return v(this, t, e, n, !1);
          }),
          (u.prototype.write = function (t, e, n, r) {
            if (void 0 === e) (r = "utf8"), (n = this.length), (e = 0);
            else if (void 0 === n && "string" == typeof e)
              (r = e), (n = this.length), (e = 0);
            else {
              if (!isFinite(e))
                throw new Error(
                  "Buffer.write(string, encoding, offset[, length]) is no longer supported"
                );
              (e |= 0),
                isFinite(n)
                  ? ((n |= 0), void 0 === r && (r = "utf8"))
                  : ((r = n), (n = void 0));
            }
            var i = this.length - e;
            if (
              ((void 0 === n || n > i) && (n = i),
              (t.length > 0 && (n < 0 || e < 0)) || e > this.length)
            )
              throw new RangeError("Attempt to write outside buffer bounds");
            r || (r = "utf8");
            for (var s = !1; ; )
              switch (r) {
                case "hex":
                  return g(this, t, e, n);
                case "utf8":
                case "utf-8":
                  return x(this, t, e, n);
                case "ascii":
                  return D(this, t, e, n);
                case "latin1":
                case "binary":
                  return E(this, t, e, n);
                case "base64":
                  return C(this, t, e, n);
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                  return A(this, t, e, n);
                default:
                  if (s) throw new TypeError("Unknown encoding: " + r);
                  (r = ("" + r).toLowerCase()), (s = !0);
              }
          }),
          (u.prototype.toJSON = function () {
            return {
              type: "Buffer",
              data: Array.prototype.slice.call(this._arr || this, 0),
            };
          });
        var S = 4096;
        function k(t, e, n) {
          var r = "";
          n = Math.min(t.length, n);
          for (var i = e; i < n; ++i) r += String.fromCharCode(127 & t[i]);
          return r;
        }
        function F(t, e, n) {
          var r = "";
          n = Math.min(t.length, n);
          for (var i = e; i < n; ++i) r += String.fromCharCode(t[i]);
          return r;
        }
        function T(t, e, n) {
          var r = t.length;
          (!e || e < 0) && (e = 0), (!n || n < 0 || n > r) && (n = r);
          for (var i = "", s = e; s < n; ++s) i += $(t[s]);
          return i;
        }
        function _(t, e, n) {
          for (var r = t.slice(e, n), i = "", s = 0; s < r.length; s += 2)
            i += String.fromCharCode(r[s] + 256 * r[s + 1]);
          return i;
        }
        function B(t, e, n) {
          if (t % 1 != 0 || t < 0) throw new RangeError("offset is not uint");
          if (t + e > n)
            throw new RangeError("Trying to access beyond buffer length");
        }
        function I(t, e, n, r, i, s) {
          if (!u.isBuffer(t))
            throw new TypeError('"buffer" argument must be a Buffer instance');
          if (e > i || e < s)
            throw new RangeError('"value" argument is out of bounds');
          if (n + r > t.length) throw new RangeError("Index out of range");
        }
        function N(t, e, n, r) {
          e < 0 && (e = 65535 + e + 1);
          for (var i = 0, s = Math.min(t.length - n, 2); i < s; ++i)
            t[n + i] =
              (e & (255 << (8 * (r ? i : 1 - i)))) >>> (8 * (r ? i : 1 - i));
        }
        function O(t, e, n, r) {
          e < 0 && (e = 4294967295 + e + 1);
          for (var i = 0, s = Math.min(t.length - n, 4); i < s; ++i)
            t[n + i] = (e >>> (8 * (r ? i : 3 - i))) & 255;
        }
        function M(t, e, n, r, i, s) {
          if (n + r > t.length) throw new RangeError("Index out of range");
          if (n < 0) throw new RangeError("Index out of range");
        }
        function P(t, e, n, r, s) {
          return s || M(t, 0, n, 4), i.write(t, e, n, r, 23, 4), n + 4;
        }
        function L(t, e, n, r, s) {
          return s || M(t, 0, n, 8), i.write(t, e, n, r, 52, 8), n + 8;
        }
        (u.prototype.slice = function (t, e) {
          var n,
            r = this.length;
          if (
            ((t = ~~t),
            (e = void 0 === e ? r : ~~e),
            t < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r),
            e < 0 ? (e += r) < 0 && (e = 0) : e > r && (e = r),
            e < t && (e = t),
            u.TYPED_ARRAY_SUPPORT)
          )
            (n = this.subarray(t, e)).__proto__ = u.prototype;
          else {
            var i = e - t;
            n = new u(i, void 0);
            for (var s = 0; s < i; ++s) n[s] = this[s + t];
          }
          return n;
        }),
          (u.prototype.readUIntLE = function (t, e, n) {
            (t |= 0), (e |= 0), n || B(t, e, this.length);
            for (var r = this[t], i = 1, s = 0; ++s < e && (i *= 256); )
              r += this[t + s] * i;
            return r;
          }),
          (u.prototype.readUIntBE = function (t, e, n) {
            (t |= 0), (e |= 0), n || B(t, e, this.length);
            for (var r = this[t + --e], i = 1; e > 0 && (i *= 256); )
              r += this[t + --e] * i;
            return r;
          }),
          (u.prototype.readUInt8 = function (t, e) {
            return e || B(t, 1, this.length), this[t];
          }),
          (u.prototype.readUInt16LE = function (t, e) {
            return e || B(t, 2, this.length), this[t] | (this[t + 1] << 8);
          }),
          (u.prototype.readUInt16BE = function (t, e) {
            return e || B(t, 2, this.length), (this[t] << 8) | this[t + 1];
          }),
          (u.prototype.readUInt32LE = function (t, e) {
            return (
              e || B(t, 4, this.length),
              (this[t] | (this[t + 1] << 8) | (this[t + 2] << 16)) +
                16777216 * this[t + 3]
            );
          }),
          (u.prototype.readUInt32BE = function (t, e) {
            return (
              e || B(t, 4, this.length),
              16777216 * this[t] +
                ((this[t + 1] << 16) | (this[t + 2] << 8) | this[t + 3])
            );
          }),
          (u.prototype.readIntLE = function (t, e, n) {
            (t |= 0), (e |= 0), n || B(t, e, this.length);
            for (var r = this[t], i = 1, s = 0; ++s < e && (i *= 256); )
              r += this[t + s] * i;
            return r >= (i *= 128) && (r -= Math.pow(2, 8 * e)), r;
          }),
          (u.prototype.readIntBE = function (t, e, n) {
            (t |= 0), (e |= 0), n || B(t, e, this.length);
            for (var r = e, i = 1, s = this[t + --r]; r > 0 && (i *= 256); )
              s += this[t + --r] * i;
            return s >= (i *= 128) && (s -= Math.pow(2, 8 * e)), s;
          }),
          (u.prototype.readInt8 = function (t, e) {
            return (
              e || B(t, 1, this.length),
              128 & this[t] ? -1 * (255 - this[t] + 1) : this[t]
            );
          }),
          (u.prototype.readInt16LE = function (t, e) {
            e || B(t, 2, this.length);
            var n = this[t] | (this[t + 1] << 8);
            return 32768 & n ? 4294901760 | n : n;
          }),
          (u.prototype.readInt16BE = function (t, e) {
            e || B(t, 2, this.length);
            var n = this[t + 1] | (this[t] << 8);
            return 32768 & n ? 4294901760 | n : n;
          }),
          (u.prototype.readInt32LE = function (t, e) {
            return (
              e || B(t, 4, this.length),
              this[t] |
                (this[t + 1] << 8) |
                (this[t + 2] << 16) |
                (this[t + 3] << 24)
            );
          }),
          (u.prototype.readInt32BE = function (t, e) {
            return (
              e || B(t, 4, this.length),
              (this[t] << 24) |
                (this[t + 1] << 16) |
                (this[t + 2] << 8) |
                this[t + 3]
            );
          }),
          (u.prototype.readFloatLE = function (t, e) {
            return e || B(t, 4, this.length), i.read(this, t, !0, 23, 4);
          }),
          (u.prototype.readFloatBE = function (t, e) {
            return e || B(t, 4, this.length), i.read(this, t, !1, 23, 4);
          }),
          (u.prototype.readDoubleLE = function (t, e) {
            return e || B(t, 8, this.length), i.read(this, t, !0, 52, 8);
          }),
          (u.prototype.readDoubleBE = function (t, e) {
            return e || B(t, 8, this.length), i.read(this, t, !1, 52, 8);
          }),
          (u.prototype.writeUIntLE = function (t, e, n, r) {
            ((t = +t), (e |= 0), (n |= 0), r) ||
              I(this, t, e, n, Math.pow(2, 8 * n) - 1, 0);
            var i = 1,
              s = 0;
            for (this[e] = 255 & t; ++s < n && (i *= 256); )
              this[e + s] = (t / i) & 255;
            return e + n;
          }),
          (u.prototype.writeUIntBE = function (t, e, n, r) {
            ((t = +t), (e |= 0), (n |= 0), r) ||
              I(this, t, e, n, Math.pow(2, 8 * n) - 1, 0);
            var i = n - 1,
              s = 1;
            for (this[e + i] = 255 & t; --i >= 0 && (s *= 256); )
              this[e + i] = (t / s) & 255;
            return e + n;
          }),
          (u.prototype.writeUInt8 = function (t, e, n) {
            return (
              (t = +t),
              (e |= 0),
              n || I(this, t, e, 1, 255, 0),
              u.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)),
              (this[e] = 255 & t),
              e + 1
            );
          }),
          (u.prototype.writeUInt16LE = function (t, e, n) {
            return (
              (t = +t),
              (e |= 0),
              n || I(this, t, e, 2, 65535, 0),
              u.TYPED_ARRAY_SUPPORT
                ? ((this[e] = 255 & t), (this[e + 1] = t >>> 8))
                : N(this, t, e, !0),
              e + 2
            );
          }),
          (u.prototype.writeUInt16BE = function (t, e, n) {
            return (
              (t = +t),
              (e |= 0),
              n || I(this, t, e, 2, 65535, 0),
              u.TYPED_ARRAY_SUPPORT
                ? ((this[e] = t >>> 8), (this[e + 1] = 255 & t))
                : N(this, t, e, !1),
              e + 2
            );
          }),
          (u.prototype.writeUInt32LE = function (t, e, n) {
            return (
              (t = +t),
              (e |= 0),
              n || I(this, t, e, 4, 4294967295, 0),
              u.TYPED_ARRAY_SUPPORT
                ? ((this[e + 3] = t >>> 24),
                  (this[e + 2] = t >>> 16),
                  (this[e + 1] = t >>> 8),
                  (this[e] = 255 & t))
                : O(this, t, e, !0),
              e + 4
            );
          }),
          (u.prototype.writeUInt32BE = function (t, e, n) {
            return (
              (t = +t),
              (e |= 0),
              n || I(this, t, e, 4, 4294967295, 0),
              u.TYPED_ARRAY_SUPPORT
                ? ((this[e] = t >>> 24),
                  (this[e + 1] = t >>> 16),
                  (this[e + 2] = t >>> 8),
                  (this[e + 3] = 255 & t))
                : O(this, t, e, !1),
              e + 4
            );
          }),
          (u.prototype.writeIntLE = function (t, e, n, r) {
            if (((t = +t), (e |= 0), !r)) {
              var i = Math.pow(2, 8 * n - 1);
              I(this, t, e, n, i - 1, -i);
            }
            var s = 0,
              a = 1,
              o = 0;
            for (this[e] = 255 & t; ++s < n && (a *= 256); )
              t < 0 && 0 === o && 0 !== this[e + s - 1] && (o = 1),
                (this[e + s] = (((t / a) >> 0) - o) & 255);
            return e + n;
          }),
          (u.prototype.writeIntBE = function (t, e, n, r) {
            if (((t = +t), (e |= 0), !r)) {
              var i = Math.pow(2, 8 * n - 1);
              I(this, t, e, n, i - 1, -i);
            }
            var s = n - 1,
              a = 1,
              o = 0;
            for (this[e + s] = 255 & t; --s >= 0 && (a *= 256); )
              t < 0 && 0 === o && 0 !== this[e + s + 1] && (o = 1),
                (this[e + s] = (((t / a) >> 0) - o) & 255);
            return e + n;
          }),
          (u.prototype.writeInt8 = function (t, e, n) {
            return (
              (t = +t),
              (e |= 0),
              n || I(this, t, e, 1, 127, -128),
              u.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)),
              t < 0 && (t = 255 + t + 1),
              (this[e] = 255 & t),
              e + 1
            );
          }),
          (u.prototype.writeInt16LE = function (t, e, n) {
            return (
              (t = +t),
              (e |= 0),
              n || I(this, t, e, 2, 32767, -32768),
              u.TYPED_ARRAY_SUPPORT
                ? ((this[e] = 255 & t), (this[e + 1] = t >>> 8))
                : N(this, t, e, !0),
              e + 2
            );
          }),
          (u.prototype.writeInt16BE = function (t, e, n) {
            return (
              (t = +t),
              (e |= 0),
              n || I(this, t, e, 2, 32767, -32768),
              u.TYPED_ARRAY_SUPPORT
                ? ((this[e] = t >>> 8), (this[e + 1] = 255 & t))
                : N(this, t, e, !1),
              e + 2
            );
          }),
          (u.prototype.writeInt32LE = function (t, e, n) {
            return (
              (t = +t),
              (e |= 0),
              n || I(this, t, e, 4, 2147483647, -2147483648),
              u.TYPED_ARRAY_SUPPORT
                ? ((this[e] = 255 & t),
                  (this[e + 1] = t >>> 8),
                  (this[e + 2] = t >>> 16),
                  (this[e + 3] = t >>> 24))
                : O(this, t, e, !0),
              e + 4
            );
          }),
          (u.prototype.writeInt32BE = function (t, e, n) {
            return (
              (t = +t),
              (e |= 0),
              n || I(this, t, e, 4, 2147483647, -2147483648),
              t < 0 && (t = 4294967295 + t + 1),
              u.TYPED_ARRAY_SUPPORT
                ? ((this[e] = t >>> 24),
                  (this[e + 1] = t >>> 16),
                  (this[e + 2] = t >>> 8),
                  (this[e + 3] = 255 & t))
                : O(this, t, e, !1),
              e + 4
            );
          }),
          (u.prototype.writeFloatLE = function (t, e, n) {
            return P(this, t, e, !0, n);
          }),
          (u.prototype.writeFloatBE = function (t, e, n) {
            return P(this, t, e, !1, n);
          }),
          (u.prototype.writeDoubleLE = function (t, e, n) {
            return L(this, t, e, !0, n);
          }),
          (u.prototype.writeDoubleBE = function (t, e, n) {
            return L(this, t, e, !1, n);
          }),
          (u.prototype.copy = function (t, e, n, r) {
            if (
              (n || (n = 0),
              r || 0 === r || (r = this.length),
              e >= t.length && (e = t.length),
              e || (e = 0),
              r > 0 && r < n && (r = n),
              r === n)
            )
              return 0;
            if (0 === t.length || 0 === this.length) return 0;
            if (e < 0) throw new RangeError("targetStart out of bounds");
            if (n < 0 || n >= this.length)
              throw new RangeError("sourceStart out of bounds");
            if (r < 0) throw new RangeError("sourceEnd out of bounds");
            r > this.length && (r = this.length),
              t.length - e < r - n && (r = t.length - e + n);
            var i,
              s = r - n;
            if (this === t && n < e && e < r)
              for (i = s - 1; i >= 0; --i) t[i + e] = this[i + n];
            else if (s < 1e3 || !u.TYPED_ARRAY_SUPPORT)
              for (i = 0; i < s; ++i) t[i + e] = this[i + n];
            else Uint8Array.prototype.set.call(t, this.subarray(n, n + s), e);
            return s;
          }),
          (u.prototype.fill = function (t, e, n, r) {
            if ("string" == typeof t) {
              if (
                ("string" == typeof e
                  ? ((r = e), (e = 0), (n = this.length))
                  : "string" == typeof n && ((r = n), (n = this.length)),
                1 === t.length)
              ) {
                var i = t.charCodeAt(0);
                i < 256 && (t = i);
              }
              if (void 0 !== r && "string" != typeof r)
                throw new TypeError("encoding must be a string");
              if ("string" == typeof r && !u.isEncoding(r))
                throw new TypeError("Unknown encoding: " + r);
            } else "number" == typeof t && (t &= 255);
            if (e < 0 || this.length < e || this.length < n)
              throw new RangeError("Out of range index");
            if (n <= e) return this;
            var s;
            if (
              ((e >>>= 0),
              (n = void 0 === n ? this.length : n >>> 0),
              t || (t = 0),
              "number" == typeof t)
            )
              for (s = e; s < n; ++s) this[s] = t;
            else {
              var a = u.isBuffer(t) ? t : U(new u(t, r).toString()),
                o = a.length;
              for (s = 0; s < n - e; ++s) this[s + e] = a[s % o];
            }
            return this;
          });
        var R = /[^+\/0-9A-Za-z-_]/g;
        function $(t) {
          return t < 16 ? "0" + t.toString(16) : t.toString(16);
        }
        function U(t, e) {
          var n;
          e = e || 1 / 0;
          for (var r = t.length, i = null, s = [], a = 0; a < r; ++a) {
            if ((n = t.charCodeAt(a)) > 55295 && n < 57344) {
              if (!i) {
                if (n > 56319) {
                  (e -= 3) > -1 && s.push(239, 191, 189);
                  continue;
                }
                if (a + 1 === r) {
                  (e -= 3) > -1 && s.push(239, 191, 189);
                  continue;
                }
                i = n;
                continue;
              }
              if (n < 56320) {
                (e -= 3) > -1 && s.push(239, 191, 189), (i = n);
                continue;
              }
              n = 65536 + (((i - 55296) << 10) | (n - 56320));
            } else i && (e -= 3) > -1 && s.push(239, 191, 189);
            if (((i = null), n < 128)) {
              if ((e -= 1) < 0) break;
              s.push(n);
            } else if (n < 2048) {
              if ((e -= 2) < 0) break;
              s.push((n >> 6) | 192, (63 & n) | 128);
            } else if (n < 65536) {
              if ((e -= 3) < 0) break;
              s.push((n >> 12) | 224, ((n >> 6) & 63) | 128, (63 & n) | 128);
            } else {
              if (!(n < 1114112)) throw new Error("Invalid code point");
              if ((e -= 4) < 0) break;
              s.push(
                (n >> 18) | 240,
                ((n >> 12) & 63) | 128,
                ((n >> 6) & 63) | 128,
                (63 & n) | 128
              );
            }
          }
          return s;
        }
        function j(t) {
          return r.toByteArray(
            (function (t) {
              if (
                (t = (function (t) {
                  return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "");
                })(t).replace(R, "")).length < 2
              )
                return "";
              for (; t.length % 4 != 0; ) t += "=";
              return t;
            })(t)
          );
        }
        function J(t, e, n, r) {
          for (var i = 0; i < r && !(i + n >= e.length || i >= t.length); ++i)
            e[i + n] = t[i];
          return i;
        }
      }.call(this, n(7)));
    },
    function (t, e, n) {
      "use strict";
      (e.byteLength = function (t) {
        var e = c(t),
          n = e[0],
          r = e[1];
        return (3 * (n + r)) / 4 - r;
      }),
        (e.toByteArray = function (t) {
          var e,
            n,
            r = c(t),
            a = r[0],
            o = r[1],
            u = new s(
              (function (t, e, n) {
                return (3 * (e + n)) / 4 - n;
              })(0, a, o)
            ),
            l = 0,
            h = o > 0 ? a - 4 : a;
          for (n = 0; n < h; n += 4)
            (e =
              (i[t.charCodeAt(n)] << 18) |
              (i[t.charCodeAt(n + 1)] << 12) |
              (i[t.charCodeAt(n + 2)] << 6) |
              i[t.charCodeAt(n + 3)]),
              (u[l++] = (e >> 16) & 255),
              (u[l++] = (e >> 8) & 255),
              (u[l++] = 255 & e);
          2 === o &&
            ((e = (i[t.charCodeAt(n)] << 2) | (i[t.charCodeAt(n + 1)] >> 4)),
            (u[l++] = 255 & e));
          1 === o &&
            ((e =
              (i[t.charCodeAt(n)] << 10) |
              (i[t.charCodeAt(n + 1)] << 4) |
              (i[t.charCodeAt(n + 2)] >> 2)),
            (u[l++] = (e >> 8) & 255),
            (u[l++] = 255 & e));
          return u;
        }),
        (e.fromByteArray = function (t) {
          for (
            var e, n = t.length, i = n % 3, s = [], a = 0, o = n - i;
            a < o;
            a += 16383
          )
            s.push(h(t, a, a + 16383 > o ? o : a + 16383));
          1 === i
            ? ((e = t[n - 1]), s.push(r[e >> 2] + r[(e << 4) & 63] + "=="))
            : 2 === i &&
              ((e = (t[n - 2] << 8) + t[n - 1]),
              s.push(r[e >> 10] + r[(e >> 4) & 63] + r[(e << 2) & 63] + "="));
          return s.join("");
        });
      for (
        var r = [],
          i = [],
          s = "undefined" != typeof Uint8Array ? Uint8Array : Array,
          a =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
          o = 0,
          u = a.length;
        o < u;
        ++o
      )
        (r[o] = a[o]), (i[a.charCodeAt(o)] = o);
      function c(t) {
        var e = t.length;
        if (e % 4 > 0)
          throw new Error("Invalid string. Length must be a multiple of 4");
        var n = t.indexOf("=");
        return -1 === n && (n = e), [n, n === e ? 0 : 4 - (n % 4)];
      }
      function l(t) {
        return (
          r[(t >> 18) & 63] + r[(t >> 12) & 63] + r[(t >> 6) & 63] + r[63 & t]
        );
      }
      function h(t, e, n) {
        for (var r, i = [], s = e; s < n; s += 3)
          (r =
            ((t[s] << 16) & 16711680) +
            ((t[s + 1] << 8) & 65280) +
            (255 & t[s + 2])),
            i.push(l(r));
        return i.join("");
      }
      (i["-".charCodeAt(0)] = 62), (i["_".charCodeAt(0)] = 63);
    },
    function (t, e) {
      (e.read = function (t, e, n, r, i) {
        var s,
          a,
          o = 8 * i - r - 1,
          u = (1 << o) - 1,
          c = u >> 1,
          l = -7,
          h = n ? i - 1 : 0,
          p = n ? -1 : 1,
          f = t[e + h];
        for (
          h += p, s = f & ((1 << -l) - 1), f >>= -l, l += o;
          l > 0;
          s = 256 * s + t[e + h], h += p, l -= 8
        );
        for (
          a = s & ((1 << -l) - 1), s >>= -l, l += r;
          l > 0;
          a = 256 * a + t[e + h], h += p, l -= 8
        );
        if (0 === s) s = 1 - c;
        else {
          if (s === u) return a ? NaN : (1 / 0) * (f ? -1 : 1);
          (a += Math.pow(2, r)), (s -= c);
        }
        return (f ? -1 : 1) * a * Math.pow(2, s - r);
      }),
        (e.write = function (t, e, n, r, i, s) {
          var a,
            o,
            u,
            c = 8 * s - i - 1,
            l = (1 << c) - 1,
            h = l >> 1,
            p = 23 === i ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
            f = r ? 0 : s - 1,
            d = r ? 1 : -1,
            m = e < 0 || (0 === e && 1 / e < 0) ? 1 : 0;
          for (
            e = Math.abs(e),
              isNaN(e) || e === 1 / 0
                ? ((o = isNaN(e) ? 1 : 0), (a = l))
                : ((a = Math.floor(Math.log(e) / Math.LN2)),
                  e * (u = Math.pow(2, -a)) < 1 && (a--, (u *= 2)),
                  (e += a + h >= 1 ? p / u : p * Math.pow(2, 1 - h)) * u >= 2 &&
                    (a++, (u /= 2)),
                  a + h >= l
                    ? ((o = 0), (a = l))
                    : a + h >= 1
                    ? ((o = (e * u - 1) * Math.pow(2, i)), (a += h))
                    : ((o = e * Math.pow(2, h - 1) * Math.pow(2, i)), (a = 0)));
            i >= 8;
            t[n + f] = 255 & o, f += d, o /= 256, i -= 8
          );
          for (
            a = (a << i) | o, c += i;
            c > 0;
            t[n + f] = 255 & a, f += d, a /= 256, c -= 8
          );
          t[n + f - d] |= 128 * m;
        });
    },
    function (t, e) {
      var n = {}.toString;
      t.exports =
        Array.isArray ||
        function (t) {
          return "[object Array]" == n.call(t);
        };
    },
    function (t, e, n) {
      "use strict";
      var r = n(2),
        i = Object.prototype.hasOwnProperty,
        s = Object.prototype.toString;
      t.exports = new r("tag:yaml.org,2002:omap", {
        kind: "sequence",
        resolve: function (t) {
          if (null === t) return !0;
          var e,
            n,
            r,
            a,
            o,
            u = [],
            c = t;
          for (e = 0, n = c.length; e < n; e += 1) {
            if (((r = c[e]), (o = !1), "[object Object]" !== s.call(r)))
              return !1;
            for (a in r)
              if (i.call(r, a)) {
                if (o) return !1;
                o = !0;
              }
            if (!o) return !1;
            if (-1 !== u.indexOf(a)) return !1;
            u.push(a);
          }
          return !0;
        },
        construct: function (t) {
          return null !== t ? t : [];
        },
      });
    },
    function (t, e, n) {
      "use strict";
      var r = n(2),
        i = Object.prototype.toString;
      t.exports = new r("tag:yaml.org,2002:pairs", {
        kind: "sequence",
        resolve: function (t) {
          if (null === t) return !0;
          var e,
            n,
            r,
            s,
            a,
            o = t;
          for (a = new Array(o.length), e = 0, n = o.length; e < n; e += 1) {
            if (((r = o[e]), "[object Object]" !== i.call(r))) return !1;
            if (1 !== (s = Object.keys(r)).length) return !1;
            a[e] = [s[0], r[s[0]]];
          }
          return !0;
        },
        construct: function (t) {
          if (null === t) return [];
          var e,
            n,
            r,
            i,
            s,
            a = t;
          for (s = new Array(a.length), e = 0, n = a.length; e < n; e += 1)
            (r = a[e]), (i = Object.keys(r)), (s[e] = [i[0], r[i[0]]]);
          return s;
        },
      });
    },
    function (t, e, n) {
      "use strict";
      var r = n(2),
        i = Object.prototype.hasOwnProperty;
      t.exports = new r("tag:yaml.org,2002:set", {
        kind: "mapping",
        resolve: function (t) {
          if (null === t) return !0;
          var e,
            n = t;
          for (e in n) if (i.call(n, e) && null !== n[e]) return !1;
          return !0;
        },
        construct: function (t) {
          return null !== t ? t : {};
        },
      });
    },
    function (t, e, n) {
      "use strict";
      var r = n(2);
      t.exports = new r("tag:yaml.org,2002:js/undefined", {
        kind: "scalar",
        resolve: function () {
          return !0;
        },
        construct: function () {},
        predicate: function (t) {
          return void 0 === t;
        },
        represent: function () {
          return "";
        },
      });
    },
    function (t, e, n) {
      "use strict";
      var r = n(2);
      t.exports = new r("tag:yaml.org,2002:js/regexp", {
        kind: "scalar",
        resolve: function (t) {
          if (null === t) return !1;
          if (0 === t.length) return !1;
          var e = t,
            n = /\/([gim]*)$/.exec(t),
            r = "";
          if ("/" === e[0]) {
            if ((n && (r = n[1]), r.length > 3)) return !1;
            if ("/" !== e[e.length - r.length - 1]) return !1;
          }
          return !0;
        },
        construct: function (t) {
          var e = t,
            n = /\/([gim]*)$/.exec(t),
            r = "";
          return (
            "/" === e[0] &&
              (n && (r = n[1]), (e = e.slice(1, e.length - r.length - 1))),
            new RegExp(e, r)
          );
        },
        predicate: function (t) {
          return "[object RegExp]" === Object.prototype.toString.call(t);
        },
        represent: function (t) {
          var e = "/" + t.source + "/";
          return (
            t.global && (e += "g"),
            t.multiline && (e += "m"),
            t.ignoreCase && (e += "i"),
            e
          );
        },
      });
    },
    function (t, e, n) {
      "use strict";
      var r;
      try {
        r = n(41);
      } catch (t) {
        "undefined" != typeof window && (r = window.esprima);
      }
      var i = n(2);
      t.exports = new i("tag:yaml.org,2002:js/function", {
        kind: "scalar",
        resolve: function (t) {
          if (null === t) return !1;
          try {
            var e = "(" + t + ")",
              n = r.parse(e, { range: !0 });
            return (
              "Program" === n.type &&
              1 === n.body.length &&
              "ExpressionStatement" === n.body[0].type &&
              ("ArrowFunctionExpression" === n.body[0].expression.type ||
                "FunctionExpression" === n.body[0].expression.type)
            );
          } catch (t) {
            return !1;
          }
        },
        construct: function (t) {
          var e,
            n = "(" + t + ")",
            i = r.parse(n, { range: !0 }),
            s = [];
          if (
            "Program" !== i.type ||
            1 !== i.body.length ||
            "ExpressionStatement" !== i.body[0].type ||
            ("ArrowFunctionExpression" !== i.body[0].expression.type &&
              "FunctionExpression" !== i.body[0].expression.type)
          )
            throw new Error("Failed to resolve function");
          return (
            i.body[0].expression.params.forEach(function (t) {
              s.push(t.name);
            }),
            (e = i.body[0].expression.body.range),
            "BlockStatement" === i.body[0].expression.body.type
              ? new Function(s, n.slice(e[0] + 1, e[1] - 1))
              : new Function(s, "return " + n.slice(e[0], e[1]))
          );
        },
        predicate: function (t) {
          return "[object Function]" === Object.prototype.toString.call(t);
        },
        represent: function (t) {
          return t.toString();
        },
      });
    },
    function (t, e, n) {
      !(function (e, n) {
        t.exports = n();
      })(0, function () {
        return (function (t) {
          var e = {};
          function n(r) {
            if (e[r]) return e[r].exports;
            var i = (e[r] = { exports: {}, id: r, loaded: !1 });
            return (
              t[r].call(i.exports, i, i.exports, n), (i.loaded = !0), i.exports
            );
          }
          return (n.m = t), (n.c = e), (n.p = ""), n(0);
        })([
          function (t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 });
            var r = n(1),
              i = n(3),
              s = n(8),
              a = n(15);
            function o(t, e, n) {
              var a = null,
                o = function (t, e) {
                  n && n(t, e), a && a.visit(t, e);
                },
                u = "function" == typeof n ? o : null,
                c = !1;
              if (e) {
                c = "boolean" == typeof e.comment && e.comment;
                var l = "boolean" == typeof e.attachComment && e.attachComment;
                (c || l) &&
                  (((a = new r.CommentHandler()).attach = l),
                  (e.comment = !0),
                  (u = o));
              }
              var h,
                p = !1;
              e &&
                "string" == typeof e.sourceType &&
                (p = "module" === e.sourceType),
                (h =
                  e && "boolean" == typeof e.jsx && e.jsx
                    ? new i.JSXParser(t, e, u)
                    : new s.Parser(t, e, u));
              var f = p ? h.parseModule() : h.parseScript();
              return (
                c && a && (f.comments = a.comments),
                h.config.tokens && (f.tokens = h.tokens),
                h.config.tolerant && (f.errors = h.errorHandler.errors),
                f
              );
            }
            (e.parse = o),
              (e.parseModule = function (t, e, n) {
                var r = e || {};
                return (r.sourceType = "module"), o(t, r, n);
              }),
              (e.parseScript = function (t, e, n) {
                var r = e || {};
                return (r.sourceType = "script"), o(t, r, n);
              }),
              (e.tokenize = function (t, e, n) {
                var r,
                  i = new a.Tokenizer(t, e);
                r = [];
                try {
                  for (;;) {
                    var s = i.getNextToken();
                    if (!s) break;
                    n && (s = n(s)), r.push(s);
                  }
                } catch (t) {
                  i.errorHandler.tolerate(t);
                }
                return i.errorHandler.tolerant && (r.errors = i.errors()), r;
              });
            var u = n(2);
            (e.Syntax = u.Syntax), (e.version = "4.0.1");
          },
          function (t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 });
            var r = n(2),
              i = (function () {
                function t() {
                  (this.attach = !1),
                    (this.comments = []),
                    (this.stack = []),
                    (this.leading = []),
                    (this.trailing = []);
                }
                return (
                  (t.prototype.insertInnerComments = function (t, e) {
                    if (
                      t.type === r.Syntax.BlockStatement &&
                      0 === t.body.length
                    ) {
                      for (
                        var n = [], i = this.leading.length - 1;
                        i >= 0;
                        --i
                      ) {
                        var s = this.leading[i];
                        e.end.offset >= s.start &&
                          (n.unshift(s.comment),
                          this.leading.splice(i, 1),
                          this.trailing.splice(i, 1));
                      }
                      n.length && (t.innerComments = n);
                    }
                  }),
                  (t.prototype.findTrailingComments = function (t) {
                    var e = [];
                    if (this.trailing.length > 0) {
                      for (var n = this.trailing.length - 1; n >= 0; --n) {
                        var r = this.trailing[n];
                        r.start >= t.end.offset && e.unshift(r.comment);
                      }
                      return (this.trailing.length = 0), e;
                    }
                    var i = this.stack[this.stack.length - 1];
                    if (i && i.node.trailingComments) {
                      var s = i.node.trailingComments[0];
                      s &&
                        s.range[0] >= t.end.offset &&
                        ((e = i.node.trailingComments),
                        delete i.node.trailingComments);
                    }
                    return e;
                  }),
                  (t.prototype.findLeadingComments = function (t) {
                    for (var e, n = []; this.stack.length > 0; ) {
                      if (
                        !(
                          (s = this.stack[this.stack.length - 1]) &&
                          s.start >= t.start.offset
                        )
                      )
                        break;
                      (e = s.node), this.stack.pop();
                    }
                    if (e) {
                      for (
                        var r =
                          (e.leadingComments ? e.leadingComments.length : 0) -
                          1;
                        r >= 0;
                        --r
                      ) {
                        var i = e.leadingComments[r];
                        i.range[1] <= t.start.offset &&
                          (n.unshift(i), e.leadingComments.splice(r, 1));
                      }
                      return (
                        e.leadingComments &&
                          0 === e.leadingComments.length &&
                          delete e.leadingComments,
                        n
                      );
                    }
                    for (r = this.leading.length - 1; r >= 0; --r) {
                      var s;
                      (s = this.leading[r]).start <= t.start.offset &&
                        (n.unshift(s.comment), this.leading.splice(r, 1));
                    }
                    return n;
                  }),
                  (t.prototype.visitNode = function (t, e) {
                    if (!(t.type === r.Syntax.Program && t.body.length > 0)) {
                      this.insertInnerComments(t, e);
                      var n = this.findTrailingComments(e),
                        i = this.findLeadingComments(e);
                      i.length > 0 && (t.leadingComments = i),
                        n.length > 0 && (t.trailingComments = n),
                        this.stack.push({ node: t, start: e.start.offset });
                    }
                  }),
                  (t.prototype.visitComment = function (t, e) {
                    var n = "L" === t.type[0] ? "Line" : "Block",
                      r = { type: n, value: t.value };
                    if (
                      (t.range && (r.range = t.range),
                      t.loc && (r.loc = t.loc),
                      this.comments.push(r),
                      this.attach)
                    ) {
                      var i = {
                        comment: {
                          type: n,
                          value: t.value,
                          range: [e.start.offset, e.end.offset],
                        },
                        start: e.start.offset,
                      };
                      t.loc && (i.comment.loc = t.loc),
                        (t.type = n),
                        this.leading.push(i),
                        this.trailing.push(i);
                    }
                  }),
                  (t.prototype.visit = function (t, e) {
                    "LineComment" === t.type
                      ? this.visitComment(t, e)
                      : "BlockComment" === t.type
                      ? this.visitComment(t, e)
                      : this.attach && this.visitNode(t, e);
                  }),
                  t
                );
              })();
            e.CommentHandler = i;
          },
          function (t, e) {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 }),
              (e.Syntax = {
                AssignmentExpression: "AssignmentExpression",
                AssignmentPattern: "AssignmentPattern",
                ArrayExpression: "ArrayExpression",
                ArrayPattern: "ArrayPattern",
                ArrowFunctionExpression: "ArrowFunctionExpression",
                AwaitExpression: "AwaitExpression",
                BlockStatement: "BlockStatement",
                BinaryExpression: "BinaryExpression",
                BreakStatement: "BreakStatement",
                CallExpression: "CallExpression",
                CatchClause: "CatchClause",
                ClassBody: "ClassBody",
                ClassDeclaration: "ClassDeclaration",
                ClassExpression: "ClassExpression",
                ConditionalExpression: "ConditionalExpression",
                ContinueStatement: "ContinueStatement",
                DoWhileStatement: "DoWhileStatement",
                DebuggerStatement: "DebuggerStatement",
                EmptyStatement: "EmptyStatement",
                ExportAllDeclaration: "ExportAllDeclaration",
                ExportDefaultDeclaration: "ExportDefaultDeclaration",
                ExportNamedDeclaration: "ExportNamedDeclaration",
                ExportSpecifier: "ExportSpecifier",
                ExpressionStatement: "ExpressionStatement",
                ForStatement: "ForStatement",
                ForOfStatement: "ForOfStatement",
                ForInStatement: "ForInStatement",
                FunctionDeclaration: "FunctionDeclaration",
                FunctionExpression: "FunctionExpression",
                Identifier: "Identifier",
                IfStatement: "IfStatement",
                ImportDeclaration: "ImportDeclaration",
                ImportDefaultSpecifier: "ImportDefaultSpecifier",
                ImportNamespaceSpecifier: "ImportNamespaceSpecifier",
                ImportSpecifier: "ImportSpecifier",
                Literal: "Literal",
                LabeledStatement: "LabeledStatement",
                LogicalExpression: "LogicalExpression",
                MemberExpression: "MemberExpression",
                MetaProperty: "MetaProperty",
                MethodDefinition: "MethodDefinition",
                NewExpression: "NewExpression",
                ObjectExpression: "ObjectExpression",
                ObjectPattern: "ObjectPattern",
                Program: "Program",
                Property: "Property",
                RestElement: "RestElement",
                ReturnStatement: "ReturnStatement",
                SequenceExpression: "SequenceExpression",
                SpreadElement: "SpreadElement",
                Super: "Super",
                SwitchCase: "SwitchCase",
                SwitchStatement: "SwitchStatement",
                TaggedTemplateExpression: "TaggedTemplateExpression",
                TemplateElement: "TemplateElement",
                TemplateLiteral: "TemplateLiteral",
                ThisExpression: "ThisExpression",
                ThrowStatement: "ThrowStatement",
                TryStatement: "TryStatement",
                UnaryExpression: "UnaryExpression",
                UpdateExpression: "UpdateExpression",
                VariableDeclaration: "VariableDeclaration",
                VariableDeclarator: "VariableDeclarator",
                WhileStatement: "WhileStatement",
                WithStatement: "WithStatement",
                YieldExpression: "YieldExpression",
              });
          },
          function (t, e, n) {
            "use strict";
            var r =
              (this && this.__extends) ||
              (function () {
                var t =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (t, e) {
                      t.__proto__ = e;
                    }) ||
                  function (t, e) {
                    for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
                  };
                return function (e, n) {
                  function r() {
                    this.constructor = e;
                  }
                  t(e, n),
                    (e.prototype =
                      null === n
                        ? Object.create(n)
                        : ((r.prototype = n.prototype), new r()));
                };
              })();
            Object.defineProperty(e, "__esModule", { value: !0 });
            var i = n(4),
              s = n(5),
              a = n(6),
              o = n(7),
              u = n(8),
              c = n(13),
              l = n(14);
            function h(t) {
              var e;
              switch (t.type) {
                case a.JSXSyntax.JSXIdentifier:
                  e = t.name;
                  break;
                case a.JSXSyntax.JSXNamespacedName:
                  var n = t;
                  e = h(n.namespace) + ":" + h(n.name);
                  break;
                case a.JSXSyntax.JSXMemberExpression:
                  var r = t;
                  e = h(r.object) + "." + h(r.property);
              }
              return e;
            }
            (c.TokenName[100] = "JSXIdentifier"),
              (c.TokenName[101] = "JSXText");
            var p = (function (t) {
              function e(e, n, r) {
                return t.call(this, e, n, r) || this;
              }
              return (
                r(e, t),
                (e.prototype.parsePrimaryExpression = function () {
                  return this.match("<")
                    ? this.parseJSXRoot()
                    : t.prototype.parsePrimaryExpression.call(this);
                }),
                (e.prototype.startJSX = function () {
                  (this.scanner.index = this.startMarker.index),
                    (this.scanner.lineNumber = this.startMarker.line),
                    (this.scanner.lineStart =
                      this.startMarker.index - this.startMarker.column);
                }),
                (e.prototype.finishJSX = function () {
                  this.nextToken();
                }),
                (e.prototype.reenterJSX = function () {
                  this.startJSX(),
                    this.expectJSX("}"),
                    this.config.tokens && this.tokens.pop();
                }),
                (e.prototype.createJSXNode = function () {
                  return (
                    this.collectComments(),
                    {
                      index: this.scanner.index,
                      line: this.scanner.lineNumber,
                      column: this.scanner.index - this.scanner.lineStart,
                    }
                  );
                }),
                (e.prototype.createJSXChildNode = function () {
                  return {
                    index: this.scanner.index,
                    line: this.scanner.lineNumber,
                    column: this.scanner.index - this.scanner.lineStart,
                  };
                }),
                (e.prototype.scanXHTMLEntity = function (t) {
                  for (
                    var e = "&", n = !0, r = !1, s = !1, a = !1;
                    !this.scanner.eof() && n && !r;

                  ) {
                    var o = this.scanner.source[this.scanner.index];
                    if (o === t) break;
                    if (((r = ";" === o), (e += o), ++this.scanner.index, !r))
                      switch (e.length) {
                        case 2:
                          s = "#" === o;
                          break;
                        case 3:
                          s &&
                            ((n =
                              (a = "x" === o) ||
                              i.Character.isDecimalDigit(o.charCodeAt(0))),
                            (s = s && !a));
                          break;
                        default:
                          n =
                            (n =
                              n &&
                              !(
                                s &&
                                !i.Character.isDecimalDigit(o.charCodeAt(0))
                              )) &&
                            !(a && !i.Character.isHexDigit(o.charCodeAt(0)));
                      }
                  }
                  if (n && r && e.length > 2) {
                    var u = e.substr(1, e.length - 2);
                    s && u.length > 1
                      ? (e = String.fromCharCode(parseInt(u.substr(1), 10)))
                      : a && u.length > 2
                      ? (e = String.fromCharCode(
                          parseInt("0" + u.substr(1), 16)
                        ))
                      : s ||
                        a ||
                        !l.XHTMLEntities[u] ||
                        (e = l.XHTMLEntities[u]);
                  }
                  return e;
                }),
                (e.prototype.lexJSX = function () {
                  var t = this.scanner.source.charCodeAt(this.scanner.index);
                  if (
                    60 === t ||
                    62 === t ||
                    47 === t ||
                    58 === t ||
                    61 === t ||
                    123 === t ||
                    125 === t
                  )
                    return {
                      type: 7,
                      value: (o = this.scanner.source[this.scanner.index++]),
                      lineNumber: this.scanner.lineNumber,
                      lineStart: this.scanner.lineStart,
                      start: this.scanner.index - 1,
                      end: this.scanner.index,
                    };
                  if (34 === t || 39 === t) {
                    for (
                      var e = this.scanner.index,
                        n = this.scanner.source[this.scanner.index++],
                        r = "";
                      !this.scanner.eof();

                    ) {
                      if ((u = this.scanner.source[this.scanner.index++]) === n)
                        break;
                      r += "&" === u ? this.scanXHTMLEntity(n) : u;
                    }
                    return {
                      type: 8,
                      value: r,
                      lineNumber: this.scanner.lineNumber,
                      lineStart: this.scanner.lineStart,
                      start: e,
                      end: this.scanner.index,
                    };
                  }
                  if (46 === t) {
                    var s = this.scanner.source.charCodeAt(
                        this.scanner.index + 1
                      ),
                      a = this.scanner.source.charCodeAt(
                        this.scanner.index + 2
                      ),
                      o = 46 === s && 46 === a ? "..." : ".";
                    e = this.scanner.index;
                    return (
                      (this.scanner.index += o.length),
                      {
                        type: 7,
                        value: o,
                        lineNumber: this.scanner.lineNumber,
                        lineStart: this.scanner.lineStart,
                        start: e,
                        end: this.scanner.index,
                      }
                    );
                  }
                  if (96 === t)
                    return {
                      type: 10,
                      value: "",
                      lineNumber: this.scanner.lineNumber,
                      lineStart: this.scanner.lineStart,
                      start: this.scanner.index,
                      end: this.scanner.index,
                    };
                  if (i.Character.isIdentifierStart(t) && 92 !== t) {
                    e = this.scanner.index;
                    for (++this.scanner.index; !this.scanner.eof(); ) {
                      var u = this.scanner.source.charCodeAt(
                        this.scanner.index
                      );
                      if (i.Character.isIdentifierPart(u) && 92 !== u)
                        ++this.scanner.index;
                      else {
                        if (45 !== u) break;
                        ++this.scanner.index;
                      }
                    }
                    return {
                      type: 100,
                      value: this.scanner.source.slice(e, this.scanner.index),
                      lineNumber: this.scanner.lineNumber,
                      lineStart: this.scanner.lineStart,
                      start: e,
                      end: this.scanner.index,
                    };
                  }
                  return this.scanner.lex();
                }),
                (e.prototype.nextJSXToken = function () {
                  this.collectComments(),
                    (this.startMarker.index = this.scanner.index),
                    (this.startMarker.line = this.scanner.lineNumber),
                    (this.startMarker.column =
                      this.scanner.index - this.scanner.lineStart);
                  var t = this.lexJSX();
                  return (
                    (this.lastMarker.index = this.scanner.index),
                    (this.lastMarker.line = this.scanner.lineNumber),
                    (this.lastMarker.column =
                      this.scanner.index - this.scanner.lineStart),
                    this.config.tokens &&
                      this.tokens.push(this.convertToken(t)),
                    t
                  );
                }),
                (e.prototype.nextJSXText = function () {
                  (this.startMarker.index = this.scanner.index),
                    (this.startMarker.line = this.scanner.lineNumber),
                    (this.startMarker.column =
                      this.scanner.index - this.scanner.lineStart);
                  for (
                    var t = this.scanner.index, e = "";
                    !this.scanner.eof();

                  ) {
                    var n = this.scanner.source[this.scanner.index];
                    if ("{" === n || "<" === n) break;
                    ++this.scanner.index,
                      (e += n),
                      i.Character.isLineTerminator(n.charCodeAt(0)) &&
                        (++this.scanner.lineNumber,
                        "\r" === n &&
                          "\n" === this.scanner.source[this.scanner.index] &&
                          ++this.scanner.index,
                        (this.scanner.lineStart = this.scanner.index));
                  }
                  (this.lastMarker.index = this.scanner.index),
                    (this.lastMarker.line = this.scanner.lineNumber),
                    (this.lastMarker.column =
                      this.scanner.index - this.scanner.lineStart);
                  var r = {
                    type: 101,
                    value: e,
                    lineNumber: this.scanner.lineNumber,
                    lineStart: this.scanner.lineStart,
                    start: t,
                    end: this.scanner.index,
                  };
                  return (
                    e.length > 0 &&
                      this.config.tokens &&
                      this.tokens.push(this.convertToken(r)),
                    r
                  );
                }),
                (e.prototype.peekJSXToken = function () {
                  var t = this.scanner.saveState();
                  this.scanner.scanComments();
                  var e = this.lexJSX();
                  return this.scanner.restoreState(t), e;
                }),
                (e.prototype.expectJSX = function (t) {
                  var e = this.nextJSXToken();
                  (7 === e.type && e.value === t) ||
                    this.throwUnexpectedToken(e);
                }),
                (e.prototype.matchJSX = function (t) {
                  var e = this.peekJSXToken();
                  return 7 === e.type && e.value === t;
                }),
                (e.prototype.parseJSXIdentifier = function () {
                  var t = this.createJSXNode(),
                    e = this.nextJSXToken();
                  return (
                    100 !== e.type && this.throwUnexpectedToken(e),
                    this.finalize(t, new s.JSXIdentifier(e.value))
                  );
                }),
                (e.prototype.parseJSXElementName = function () {
                  var t = this.createJSXNode(),
                    e = this.parseJSXIdentifier();
                  if (this.matchJSX(":")) {
                    var n = e;
                    this.expectJSX(":");
                    var r = this.parseJSXIdentifier();
                    e = this.finalize(t, new s.JSXNamespacedName(n, r));
                  } else if (this.matchJSX("."))
                    for (; this.matchJSX("."); ) {
                      var i = e;
                      this.expectJSX(".");
                      var a = this.parseJSXIdentifier();
                      e = this.finalize(t, new s.JSXMemberExpression(i, a));
                    }
                  return e;
                }),
                (e.prototype.parseJSXAttributeName = function () {
                  var t,
                    e = this.createJSXNode(),
                    n = this.parseJSXIdentifier();
                  if (this.matchJSX(":")) {
                    var r = n;
                    this.expectJSX(":");
                    var i = this.parseJSXIdentifier();
                    t = this.finalize(e, new s.JSXNamespacedName(r, i));
                  } else t = n;
                  return t;
                }),
                (e.prototype.parseJSXStringLiteralAttribute = function () {
                  var t = this.createJSXNode(),
                    e = this.nextJSXToken();
                  8 !== e.type && this.throwUnexpectedToken(e);
                  var n = this.getTokenRaw(e);
                  return this.finalize(t, new o.Literal(e.value, n));
                }),
                (e.prototype.parseJSXExpressionAttribute = function () {
                  var t = this.createJSXNode();
                  this.expectJSX("{"),
                    this.finishJSX(),
                    this.match("}") &&
                      this.tolerateError(
                        "JSX attributes must only be assigned a non-empty expression"
                      );
                  var e = this.parseAssignmentExpression();
                  return (
                    this.reenterJSX(),
                    this.finalize(t, new s.JSXExpressionContainer(e))
                  );
                }),
                (e.prototype.parseJSXAttributeValue = function () {
                  return this.matchJSX("{")
                    ? this.parseJSXExpressionAttribute()
                    : this.matchJSX("<")
                    ? this.parseJSXElement()
                    : this.parseJSXStringLiteralAttribute();
                }),
                (e.prototype.parseJSXNameValueAttribute = function () {
                  var t = this.createJSXNode(),
                    e = this.parseJSXAttributeName(),
                    n = null;
                  return (
                    this.matchJSX("=") &&
                      (this.expectJSX("="),
                      (n = this.parseJSXAttributeValue())),
                    this.finalize(t, new s.JSXAttribute(e, n))
                  );
                }),
                (e.prototype.parseJSXSpreadAttribute = function () {
                  var t = this.createJSXNode();
                  this.expectJSX("{"), this.expectJSX("..."), this.finishJSX();
                  var e = this.parseAssignmentExpression();
                  return (
                    this.reenterJSX(),
                    this.finalize(t, new s.JSXSpreadAttribute(e))
                  );
                }),
                (e.prototype.parseJSXAttributes = function () {
                  for (
                    var t = [];
                    !this.matchJSX("/") && !this.matchJSX(">");

                  ) {
                    var e = this.matchJSX("{")
                      ? this.parseJSXSpreadAttribute()
                      : this.parseJSXNameValueAttribute();
                    t.push(e);
                  }
                  return t;
                }),
                (e.prototype.parseJSXOpeningElement = function () {
                  var t = this.createJSXNode();
                  this.expectJSX("<");
                  var e = this.parseJSXElementName(),
                    n = this.parseJSXAttributes(),
                    r = this.matchJSX("/");
                  return (
                    r && this.expectJSX("/"),
                    this.expectJSX(">"),
                    this.finalize(t, new s.JSXOpeningElement(e, r, n))
                  );
                }),
                (e.prototype.parseJSXBoundaryElement = function () {
                  var t = this.createJSXNode();
                  if ((this.expectJSX("<"), this.matchJSX("/"))) {
                    this.expectJSX("/");
                    var e = this.parseJSXElementName();
                    return (
                      this.expectJSX(">"),
                      this.finalize(t, new s.JSXClosingElement(e))
                    );
                  }
                  var n = this.parseJSXElementName(),
                    r = this.parseJSXAttributes(),
                    i = this.matchJSX("/");
                  return (
                    i && this.expectJSX("/"),
                    this.expectJSX(">"),
                    this.finalize(t, new s.JSXOpeningElement(n, i, r))
                  );
                }),
                (e.prototype.parseJSXEmptyExpression = function () {
                  var t = this.createJSXChildNode();
                  return (
                    this.collectComments(),
                    (this.lastMarker.index = this.scanner.index),
                    (this.lastMarker.line = this.scanner.lineNumber),
                    (this.lastMarker.column =
                      this.scanner.index - this.scanner.lineStart),
                    this.finalize(t, new s.JSXEmptyExpression())
                  );
                }),
                (e.prototype.parseJSXExpressionContainer = function () {
                  var t,
                    e = this.createJSXNode();
                  return (
                    this.expectJSX("{"),
                    this.matchJSX("}")
                      ? ((t = this.parseJSXEmptyExpression()),
                        this.expectJSX("}"))
                      : (this.finishJSX(),
                        (t = this.parseAssignmentExpression()),
                        this.reenterJSX()),
                    this.finalize(e, new s.JSXExpressionContainer(t))
                  );
                }),
                (e.prototype.parseJSXChildren = function () {
                  for (var t = []; !this.scanner.eof(); ) {
                    var e = this.createJSXChildNode(),
                      n = this.nextJSXText();
                    if (n.start < n.end) {
                      var r = this.getTokenRaw(n),
                        i = this.finalize(e, new s.JSXText(n.value, r));
                      t.push(i);
                    }
                    if ("{" !== this.scanner.source[this.scanner.index]) break;
                    var a = this.parseJSXExpressionContainer();
                    t.push(a);
                  }
                  return t;
                }),
                (e.prototype.parseComplexJSXElement = function (t) {
                  for (var e = []; !this.scanner.eof(); ) {
                    t.children = t.children.concat(this.parseJSXChildren());
                    var n = this.createJSXChildNode(),
                      r = this.parseJSXBoundaryElement();
                    if (r.type === a.JSXSyntax.JSXOpeningElement) {
                      var i = r;
                      if (i.selfClosing) {
                        var o = this.finalize(n, new s.JSXElement(i, [], null));
                        t.children.push(o);
                      } else
                        e.push(t),
                          (t = {
                            node: n,
                            opening: i,
                            closing: null,
                            children: [],
                          });
                    }
                    if (r.type === a.JSXSyntax.JSXClosingElement) {
                      t.closing = r;
                      var u = h(t.opening.name);
                      if (
                        (u !== h(t.closing.name) &&
                          this.tolerateError(
                            "Expected corresponding JSX closing tag for %0",
                            u
                          ),
                        !(e.length > 0))
                      )
                        break;
                      o = this.finalize(
                        t.node,
                        new s.JSXElement(t.opening, t.children, t.closing)
                      );
                      (t = e[e.length - 1]).children.push(o), e.pop();
                    }
                  }
                  return t;
                }),
                (e.prototype.parseJSXElement = function () {
                  var t = this.createJSXNode(),
                    e = this.parseJSXOpeningElement(),
                    n = [],
                    r = null;
                  if (!e.selfClosing) {
                    var i = this.parseComplexJSXElement({
                      node: t,
                      opening: e,
                      closing: r,
                      children: n,
                    });
                    (n = i.children), (r = i.closing);
                  }
                  return this.finalize(t, new s.JSXElement(e, n, r));
                }),
                (e.prototype.parseJSXRoot = function () {
                  this.config.tokens && this.tokens.pop(), this.startJSX();
                  var t = this.parseJSXElement();
                  return this.finishJSX(), t;
                }),
                (e.prototype.isStartOfExpression = function () {
                  return (
                    t.prototype.isStartOfExpression.call(this) ||
                    this.match("<")
                  );
                }),
                e
              );
            })(u.Parser);
            e.JSXParser = p;
          },
          function (t, e) {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 });
            var n = {
              NonAsciiIdentifierStart:
                /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B4\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309B-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AD\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDF00-\uDF19]|\uD806[\uDCA0-\uDCDF\uDCFF\uDEC0-\uDEF8]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]/,
              NonAsciiIdentifierPart:
                /[\xAA\xB5\xB7\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u08A0-\u08B4\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C81-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D01-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1369-\u1371\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1CD0-\u1CD2\u1CD4-\u1CF6\u1CF8\u1CF9\u1D00-\u1DF5\u1DFC-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AD\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C4\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDCA-\uDDCC\uDDD0-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB7\uDEC0-\uDEC9\uDF00-\uDF19\uDF1D-\uDF2B\uDF30-\uDF39]|\uD806[\uDCA0-\uDCE9\uDCFF\uDEC0-\uDEF8]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF8F-\uDF9F]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/,
            };
            e.Character = {
              fromCodePoint: function (t) {
                return t < 65536
                  ? String.fromCharCode(t)
                  : String.fromCharCode(55296 + ((t - 65536) >> 10)) +
                      String.fromCharCode(56320 + ((t - 65536) & 1023));
              },
              isWhiteSpace: function (t) {
                return (
                  32 === t ||
                  9 === t ||
                  11 === t ||
                  12 === t ||
                  160 === t ||
                  (t >= 5760 &&
                    [
                      5760, 8192, 8193, 8194, 8195, 8196, 8197, 8198, 8199,
                      8200, 8201, 8202, 8239, 8287, 12288, 65279,
                    ].indexOf(t) >= 0)
                );
              },
              isLineTerminator: function (t) {
                return 10 === t || 13 === t || 8232 === t || 8233 === t;
              },
              isIdentifierStart: function (t) {
                return (
                  36 === t ||
                  95 === t ||
                  (t >= 65 && t <= 90) ||
                  (t >= 97 && t <= 122) ||
                  92 === t ||
                  (t >= 128 &&
                    n.NonAsciiIdentifierStart.test(
                      e.Character.fromCodePoint(t)
                    ))
                );
              },
              isIdentifierPart: function (t) {
                return (
                  36 === t ||
                  95 === t ||
                  (t >= 65 && t <= 90) ||
                  (t >= 97 && t <= 122) ||
                  (t >= 48 && t <= 57) ||
                  92 === t ||
                  (t >= 128 &&
                    n.NonAsciiIdentifierPart.test(e.Character.fromCodePoint(t)))
                );
              },
              isDecimalDigit: function (t) {
                return t >= 48 && t <= 57;
              },
              isHexDigit: function (t) {
                return (
                  (t >= 48 && t <= 57) ||
                  (t >= 65 && t <= 70) ||
                  (t >= 97 && t <= 102)
                );
              },
              isOctalDigit: function (t) {
                return t >= 48 && t <= 55;
              },
            };
          },
          function (t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 });
            var r = n(6),
              i = (function () {
                return function (t) {
                  (this.type = r.JSXSyntax.JSXClosingElement), (this.name = t);
                };
              })();
            e.JSXClosingElement = i;
            var s = (function () {
              return function (t, e, n) {
                (this.type = r.JSXSyntax.JSXElement),
                  (this.openingElement = t),
                  (this.children = e),
                  (this.closingElement = n);
              };
            })();
            e.JSXElement = s;
            var a = (function () {
              return function () {
                this.type = r.JSXSyntax.JSXEmptyExpression;
              };
            })();
            e.JSXEmptyExpression = a;
            var o = (function () {
              return function (t) {
                (this.type = r.JSXSyntax.JSXExpressionContainer),
                  (this.expression = t);
              };
            })();
            e.JSXExpressionContainer = o;
            var u = (function () {
              return function (t) {
                (this.type = r.JSXSyntax.JSXIdentifier), (this.name = t);
              };
            })();
            e.JSXIdentifier = u;
            var c = (function () {
              return function (t, e) {
                (this.type = r.JSXSyntax.JSXMemberExpression),
                  (this.object = t),
                  (this.property = e);
              };
            })();
            e.JSXMemberExpression = c;
            var l = (function () {
              return function (t, e) {
                (this.type = r.JSXSyntax.JSXAttribute),
                  (this.name = t),
                  (this.value = e);
              };
            })();
            e.JSXAttribute = l;
            var h = (function () {
              return function (t, e) {
                (this.type = r.JSXSyntax.JSXNamespacedName),
                  (this.namespace = t),
                  (this.name = e);
              };
            })();
            e.JSXNamespacedName = h;
            var p = (function () {
              return function (t, e, n) {
                (this.type = r.JSXSyntax.JSXOpeningElement),
                  (this.name = t),
                  (this.selfClosing = e),
                  (this.attributes = n);
              };
            })();
            e.JSXOpeningElement = p;
            var f = (function () {
              return function (t) {
                (this.type = r.JSXSyntax.JSXSpreadAttribute),
                  (this.argument = t);
              };
            })();
            e.JSXSpreadAttribute = f;
            var d = (function () {
              return function (t, e) {
                (this.type = r.JSXSyntax.JSXText),
                  (this.value = t),
                  (this.raw = e);
              };
            })();
            e.JSXText = d;
          },
          function (t, e) {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 }),
              (e.JSXSyntax = {
                JSXAttribute: "JSXAttribute",
                JSXClosingElement: "JSXClosingElement",
                JSXElement: "JSXElement",
                JSXEmptyExpression: "JSXEmptyExpression",
                JSXExpressionContainer: "JSXExpressionContainer",
                JSXIdentifier: "JSXIdentifier",
                JSXMemberExpression: "JSXMemberExpression",
                JSXNamespacedName: "JSXNamespacedName",
                JSXOpeningElement: "JSXOpeningElement",
                JSXSpreadAttribute: "JSXSpreadAttribute",
                JSXText: "JSXText",
              });
          },
          function (t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 });
            var r = n(2),
              i = (function () {
                return function (t) {
                  (this.type = r.Syntax.ArrayExpression), (this.elements = t);
                };
              })();
            e.ArrayExpression = i;
            var s = (function () {
              return function (t) {
                (this.type = r.Syntax.ArrayPattern), (this.elements = t);
              };
            })();
            e.ArrayPattern = s;
            var a = (function () {
              return function (t, e, n) {
                (this.type = r.Syntax.ArrowFunctionExpression),
                  (this.id = null),
                  (this.params = t),
                  (this.body = e),
                  (this.generator = !1),
                  (this.expression = n),
                  (this.async = !1);
              };
            })();
            e.ArrowFunctionExpression = a;
            var o = (function () {
              return function (t, e, n) {
                (this.type = r.Syntax.AssignmentExpression),
                  (this.operator = t),
                  (this.left = e),
                  (this.right = n);
              };
            })();
            e.AssignmentExpression = o;
            var u = (function () {
              return function (t, e) {
                (this.type = r.Syntax.AssignmentPattern),
                  (this.left = t),
                  (this.right = e);
              };
            })();
            e.AssignmentPattern = u;
            var c = (function () {
              return function (t, e, n) {
                (this.type = r.Syntax.ArrowFunctionExpression),
                  (this.id = null),
                  (this.params = t),
                  (this.body = e),
                  (this.generator = !1),
                  (this.expression = n),
                  (this.async = !0);
              };
            })();
            e.AsyncArrowFunctionExpression = c;
            var l = (function () {
              return function (t, e, n) {
                (this.type = r.Syntax.FunctionDeclaration),
                  (this.id = t),
                  (this.params = e),
                  (this.body = n),
                  (this.generator = !1),
                  (this.expression = !1),
                  (this.async = !0);
              };
            })();
            e.AsyncFunctionDeclaration = l;
            var h = (function () {
              return function (t, e, n) {
                (this.type = r.Syntax.FunctionExpression),
                  (this.id = t),
                  (this.params = e),
                  (this.body = n),
                  (this.generator = !1),
                  (this.expression = !1),
                  (this.async = !0);
              };
            })();
            e.AsyncFunctionExpression = h;
            var p = (function () {
              return function (t) {
                (this.type = r.Syntax.AwaitExpression), (this.argument = t);
              };
            })();
            e.AwaitExpression = p;
            var f = (function () {
              return function (t, e, n) {
                var i = "||" === t || "&&" === t;
                (this.type = i
                  ? r.Syntax.LogicalExpression
                  : r.Syntax.BinaryExpression),
                  (this.operator = t),
                  (this.left = e),
                  (this.right = n);
              };
            })();
            e.BinaryExpression = f;
            var d = (function () {
              return function (t) {
                (this.type = r.Syntax.BlockStatement), (this.body = t);
              };
            })();
            e.BlockStatement = d;
            var m = (function () {
              return function (t) {
                (this.type = r.Syntax.BreakStatement), (this.label = t);
              };
            })();
            e.BreakStatement = m;
            var v = (function () {
              return function (t, e) {
                (this.type = r.Syntax.CallExpression),
                  (this.callee = t),
                  (this.arguments = e);
              };
            })();
            e.CallExpression = v;
            var y = (function () {
              return function (t, e) {
                (this.type = r.Syntax.CatchClause),
                  (this.param = t),
                  (this.body = e);
              };
            })();
            e.CatchClause = y;
            var g = (function () {
              return function (t) {
                (this.type = r.Syntax.ClassBody), (this.body = t);
              };
            })();
            e.ClassBody = g;
            var x = (function () {
              return function (t, e, n) {
                (this.type = r.Syntax.ClassDeclaration),
                  (this.id = t),
                  (this.superClass = e),
                  (this.body = n);
              };
            })();
            e.ClassDeclaration = x;
            var D = (function () {
              return function (t, e, n) {
                (this.type = r.Syntax.ClassExpression),
                  (this.id = t),
                  (this.superClass = e),
                  (this.body = n);
              };
            })();
            e.ClassExpression = D;
            var E = (function () {
              return function (t, e) {
                (this.type = r.Syntax.MemberExpression),
                  (this.computed = !0),
                  (this.object = t),
                  (this.property = e);
              };
            })();
            e.ComputedMemberExpression = E;
            var C = (function () {
              return function (t, e, n) {
                (this.type = r.Syntax.ConditionalExpression),
                  (this.test = t),
                  (this.consequent = e),
                  (this.alternate = n);
              };
            })();
            e.ConditionalExpression = C;
            var A = (function () {
              return function (t) {
                (this.type = r.Syntax.ContinueStatement), (this.label = t);
              };
            })();
            e.ContinueStatement = A;
            var w = (function () {
              return function () {
                this.type = r.Syntax.DebuggerStatement;
              };
            })();
            e.DebuggerStatement = w;
            var b = (function () {
              return function (t, e) {
                (this.type = r.Syntax.ExpressionStatement),
                  (this.expression = t),
                  (this.directive = e);
              };
            })();
            e.Directive = b;
            var S = (function () {
              return function (t, e) {
                (this.type = r.Syntax.DoWhileStatement),
                  (this.body = t),
                  (this.test = e);
              };
            })();
            e.DoWhileStatement = S;
            var k = (function () {
              return function () {
                this.type = r.Syntax.EmptyStatement;
              };
            })();
            e.EmptyStatement = k;
            var F = (function () {
              return function (t) {
                (this.type = r.Syntax.ExportAllDeclaration), (this.source = t);
              };
            })();
            e.ExportAllDeclaration = F;
            var T = (function () {
              return function (t) {
                (this.type = r.Syntax.ExportDefaultDeclaration),
                  (this.declaration = t);
              };
            })();
            e.ExportDefaultDeclaration = T;
            var _ = (function () {
              return function (t, e, n) {
                (this.type = r.Syntax.ExportNamedDeclaration),
                  (this.declaration = t),
                  (this.specifiers = e),
                  (this.source = n);
              };
            })();
            e.ExportNamedDeclaration = _;
            var B = (function () {
              return function (t, e) {
                (this.type = r.Syntax.ExportSpecifier),
                  (this.exported = e),
                  (this.local = t);
              };
            })();
            e.ExportSpecifier = B;
            var I = (function () {
              return function (t) {
                (this.type = r.Syntax.ExpressionStatement),
                  (this.expression = t);
              };
            })();
            e.ExpressionStatement = I;
            var N = (function () {
              return function (t, e, n) {
                (this.type = r.Syntax.ForInStatement),
                  (this.left = t),
                  (this.right = e),
                  (this.body = n),
                  (this.each = !1);
              };
            })();
            e.ForInStatement = N;
            var O = (function () {
              return function (t, e, n) {
                (this.type = r.Syntax.ForOfStatement),
                  (this.left = t),
                  (this.right = e),
                  (this.body = n);
              };
            })();
            e.ForOfStatement = O;
            var M = (function () {
              return function (t, e, n, i) {
                (this.type = r.Syntax.ForStatement),
                  (this.init = t),
                  (this.test = e),
                  (this.update = n),
                  (this.body = i);
              };
            })();
            e.ForStatement = M;
            var P = (function () {
              return function (t, e, n, i) {
                (this.type = r.Syntax.FunctionDeclaration),
                  (this.id = t),
                  (this.params = e),
                  (this.body = n),
                  (this.generator = i),
                  (this.expression = !1),
                  (this.async = !1);
              };
            })();
            e.FunctionDeclaration = P;
            var L = (function () {
              return function (t, e, n, i) {
                (this.type = r.Syntax.FunctionExpression),
                  (this.id = t),
                  (this.params = e),
                  (this.body = n),
                  (this.generator = i),
                  (this.expression = !1),
                  (this.async = !1);
              };
            })();
            e.FunctionExpression = L;
            var R = (function () {
              return function (t) {
                (this.type = r.Syntax.Identifier), (this.name = t);
              };
            })();
            e.Identifier = R;
            var $ = (function () {
              return function (t, e, n) {
                (this.type = r.Syntax.IfStatement),
                  (this.test = t),
                  (this.consequent = e),
                  (this.alternate = n);
              };
            })();
            e.IfStatement = $;
            var U = (function () {
              return function (t, e) {
                (this.type = r.Syntax.ImportDeclaration),
                  (this.specifiers = t),
                  (this.source = e);
              };
            })();
            e.ImportDeclaration = U;
            var j = (function () {
              return function (t) {
                (this.type = r.Syntax.ImportDefaultSpecifier), (this.local = t);
              };
            })();
            e.ImportDefaultSpecifier = j;
            var J = (function () {
              return function (t) {
                (this.type = r.Syntax.ImportNamespaceSpecifier),
                  (this.local = t);
              };
            })();
            e.ImportNamespaceSpecifier = J;
            var X = (function () {
              return function (t, e) {
                (this.type = r.Syntax.ImportSpecifier),
                  (this.local = t),
                  (this.imported = e);
              };
            })();
            e.ImportSpecifier = X;
            var z = (function () {
              return function (t, e) {
                (this.type = r.Syntax.LabeledStatement),
                  (this.label = t),
                  (this.body = e);
              };
            })();
            e.LabeledStatement = z;
            var K = (function () {
              return function (t, e) {
                (this.type = r.Syntax.Literal),
                  (this.value = t),
                  (this.raw = e);
              };
            })();
            e.Literal = K;
            var H = (function () {
              return function (t, e) {
                (this.type = r.Syntax.MetaProperty),
                  (this.meta = t),
                  (this.property = e);
              };
            })();
            e.MetaProperty = H;
            var Y = (function () {
              return function (t, e, n, i, s) {
                (this.type = r.Syntax.MethodDefinition),
                  (this.key = t),
                  (this.computed = e),
                  (this.value = n),
                  (this.kind = i),
                  (this.static = s);
              };
            })();
            e.MethodDefinition = Y;
            var V = (function () {
              return function (t) {
                (this.type = r.Syntax.Program),
                  (this.body = t),
                  (this.sourceType = "module");
              };
            })();
            e.Module = V;
            var q = (function () {
              return function (t, e) {
                (this.type = r.Syntax.NewExpression),
                  (this.callee = t),
                  (this.arguments = e);
              };
            })();
            e.NewExpression = q;
            var W = (function () {
              return function (t) {
                (this.type = r.Syntax.ObjectExpression), (this.properties = t);
              };
            })();
            e.ObjectExpression = W;
            var G = (function () {
              return function (t) {
                (this.type = r.Syntax.ObjectPattern), (this.properties = t);
              };
            })();
            e.ObjectPattern = G;
            var Z = (function () {
              return function (t, e, n, i, s, a) {
                (this.type = r.Syntax.Property),
                  (this.key = e),
                  (this.computed = n),
                  (this.value = i),
                  (this.kind = t),
                  (this.method = s),
                  (this.shorthand = a);
              };
            })();
            e.Property = Z;
            var Q = (function () {
              return function (t, e, n, i) {
                (this.type = r.Syntax.Literal),
                  (this.value = t),
                  (this.raw = e),
                  (this.regex = { pattern: n, flags: i });
              };
            })();
            e.RegexLiteral = Q;
            var tt = (function () {
              return function (t) {
                (this.type = r.Syntax.RestElement), (this.argument = t);
              };
            })();
            e.RestElement = tt;
            var et = (function () {
              return function (t) {
                (this.type = r.Syntax.ReturnStatement), (this.argument = t);
              };
            })();
            e.ReturnStatement = et;
            var nt = (function () {
              return function (t) {
                (this.type = r.Syntax.Program),
                  (this.body = t),
                  (this.sourceType = "script");
              };
            })();
            e.Script = nt;
            var rt = (function () {
              return function (t) {
                (this.type = r.Syntax.SequenceExpression),
                  (this.expressions = t);
              };
            })();
            e.SequenceExpression = rt;
            var it = (function () {
              return function (t) {
                (this.type = r.Syntax.SpreadElement), (this.argument = t);
              };
            })();
            e.SpreadElement = it;
            var st = (function () {
              return function (t, e) {
                (this.type = r.Syntax.MemberExpression),
                  (this.computed = !1),
                  (this.object = t),
                  (this.property = e);
              };
            })();
            e.StaticMemberExpression = st;
            var at = (function () {
              return function () {
                this.type = r.Syntax.Super;
              };
            })();
            e.Super = at;
            var ot = (function () {
              return function (t, e) {
                (this.type = r.Syntax.SwitchCase),
                  (this.test = t),
                  (this.consequent = e);
              };
            })();
            e.SwitchCase = ot;
            var ut = (function () {
              return function (t, e) {
                (this.type = r.Syntax.SwitchStatement),
                  (this.discriminant = t),
                  (this.cases = e);
              };
            })();
            e.SwitchStatement = ut;
            var ct = (function () {
              return function (t, e) {
                (this.type = r.Syntax.TaggedTemplateExpression),
                  (this.tag = t),
                  (this.quasi = e);
              };
            })();
            e.TaggedTemplateExpression = ct;
            var lt = (function () {
              return function (t, e) {
                (this.type = r.Syntax.TemplateElement),
                  (this.value = t),
                  (this.tail = e);
              };
            })();
            e.TemplateElement = lt;
            var ht = (function () {
              return function (t, e) {
                (this.type = r.Syntax.TemplateLiteral),
                  (this.quasis = t),
                  (this.expressions = e);
              };
            })();
            e.TemplateLiteral = ht;
            var pt = (function () {
              return function () {
                this.type = r.Syntax.ThisExpression;
              };
            })();
            e.ThisExpression = pt;
            var ft = (function () {
              return function (t) {
                (this.type = r.Syntax.ThrowStatement), (this.argument = t);
              };
            })();
            e.ThrowStatement = ft;
            var dt = (function () {
              return function (t, e, n) {
                (this.type = r.Syntax.TryStatement),
                  (this.block = t),
                  (this.handler = e),
                  (this.finalizer = n);
              };
            })();
            e.TryStatement = dt;
            var mt = (function () {
              return function (t, e) {
                (this.type = r.Syntax.UnaryExpression),
                  (this.operator = t),
                  (this.argument = e),
                  (this.prefix = !0);
              };
            })();
            e.UnaryExpression = mt;
            var vt = (function () {
              return function (t, e, n) {
                (this.type = r.Syntax.UpdateExpression),
                  (this.operator = t),
                  (this.argument = e),
                  (this.prefix = n);
              };
            })();
            e.UpdateExpression = vt;
            var yt = (function () {
              return function (t, e) {
                (this.type = r.Syntax.VariableDeclaration),
                  (this.declarations = t),
                  (this.kind = e);
              };
            })();
            e.VariableDeclaration = yt;
            var gt = (function () {
              return function (t, e) {
                (this.type = r.Syntax.VariableDeclarator),
                  (this.id = t),
                  (this.init = e);
              };
            })();
            e.VariableDeclarator = gt;
            var xt = (function () {
              return function (t, e) {
                (this.type = r.Syntax.WhileStatement),
                  (this.test = t),
                  (this.body = e);
              };
            })();
            e.WhileStatement = xt;
            var Dt = (function () {
              return function (t, e) {
                (this.type = r.Syntax.WithStatement),
                  (this.object = t),
                  (this.body = e);
              };
            })();
            e.WithStatement = Dt;
            var Et = (function () {
              return function (t, e) {
                (this.type = r.Syntax.YieldExpression),
                  (this.argument = t),
                  (this.delegate = e);
              };
            })();
            e.YieldExpression = Et;
          },
          function (t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 });
            var r = n(9),
              i = n(10),
              s = n(11),
              a = n(7),
              o = n(12),
              u = n(2),
              c = n(13),
              l = (function () {
                function t(t, e, n) {
                  void 0 === e && (e = {}),
                    (this.config = {
                      range: "boolean" == typeof e.range && e.range,
                      loc: "boolean" == typeof e.loc && e.loc,
                      source: null,
                      tokens: "boolean" == typeof e.tokens && e.tokens,
                      comment: "boolean" == typeof e.comment && e.comment,
                      tolerant: "boolean" == typeof e.tolerant && e.tolerant,
                    }),
                    this.config.loc &&
                      e.source &&
                      null !== e.source &&
                      (this.config.source = String(e.source)),
                    (this.delegate = n),
                    (this.errorHandler = new i.ErrorHandler()),
                    (this.errorHandler.tolerant = this.config.tolerant),
                    (this.scanner = new o.Scanner(t, this.errorHandler)),
                    (this.scanner.trackComment = this.config.comment),
                    (this.operatorPrecedence = {
                      ")": 0,
                      ";": 0,
                      ",": 0,
                      "=": 0,
                      "]": 0,
                      "||": 1,
                      "&&": 2,
                      "|": 3,
                      "^": 4,
                      "&": 5,
                      "==": 6,
                      "!=": 6,
                      "===": 6,
                      "!==": 6,
                      "<": 7,
                      ">": 7,
                      "<=": 7,
                      ">=": 7,
                      "<<": 8,
                      ">>": 8,
                      ">>>": 8,
                      "+": 9,
                      "-": 9,
                      "*": 11,
                      "/": 11,
                      "%": 11,
                    }),
                    (this.lookahead = {
                      type: 2,
                      value: "",
                      lineNumber: this.scanner.lineNumber,
                      lineStart: 0,
                      start: 0,
                      end: 0,
                    }),
                    (this.hasLineTerminator = !1),
                    (this.context = {
                      isModule: !1,
                      await: !1,
                      allowIn: !0,
                      allowStrictDirective: !0,
                      allowYield: !0,
                      firstCoverInitializedNameError: null,
                      isAssignmentTarget: !1,
                      isBindingElement: !1,
                      inFunctionBody: !1,
                      inIteration: !1,
                      inSwitch: !1,
                      labelSet: {},
                      strict: !1,
                    }),
                    (this.tokens = []),
                    (this.startMarker = {
                      index: 0,
                      line: this.scanner.lineNumber,
                      column: 0,
                    }),
                    (this.lastMarker = {
                      index: 0,
                      line: this.scanner.lineNumber,
                      column: 0,
                    }),
                    this.nextToken(),
                    (this.lastMarker = {
                      index: this.scanner.index,
                      line: this.scanner.lineNumber,
                      column: this.scanner.index - this.scanner.lineStart,
                    });
                }
                return (
                  (t.prototype.throwError = function (t) {
                    for (var e = [], n = 1; n < arguments.length; n++)
                      e[n - 1] = arguments[n];
                    var i = Array.prototype.slice.call(arguments, 1),
                      s = t.replace(/%(\d)/g, function (t, e) {
                        return (
                          r.assert(
                            e < i.length,
                            "Message reference must be in range"
                          ),
                          i[e]
                        );
                      }),
                      a = this.lastMarker.index,
                      o = this.lastMarker.line,
                      u = this.lastMarker.column + 1;
                    throw this.errorHandler.createError(a, o, u, s);
                  }),
                  (t.prototype.tolerateError = function (t) {
                    for (var e = [], n = 1; n < arguments.length; n++)
                      e[n - 1] = arguments[n];
                    var i = Array.prototype.slice.call(arguments, 1),
                      s = t.replace(/%(\d)/g, function (t, e) {
                        return (
                          r.assert(
                            e < i.length,
                            "Message reference must be in range"
                          ),
                          i[e]
                        );
                      }),
                      a = this.lastMarker.index,
                      o = this.scanner.lineNumber,
                      u = this.lastMarker.column + 1;
                    this.errorHandler.tolerateError(a, o, u, s);
                  }),
                  (t.prototype.unexpectedTokenError = function (t, e) {
                    var n,
                      r = e || s.Messages.UnexpectedToken;
                    if (
                      (t
                        ? (e ||
                            ((r =
                              2 === t.type
                                ? s.Messages.UnexpectedEOS
                                : 3 === t.type
                                ? s.Messages.UnexpectedIdentifier
                                : 6 === t.type
                                ? s.Messages.UnexpectedNumber
                                : 8 === t.type
                                ? s.Messages.UnexpectedString
                                : 10 === t.type
                                ? s.Messages.UnexpectedTemplate
                                : s.Messages.UnexpectedToken),
                            4 === t.type &&
                              (this.scanner.isFutureReservedWord(t.value)
                                ? (r = s.Messages.UnexpectedReserved)
                                : this.context.strict &&
                                  this.scanner.isStrictModeReservedWord(
                                    t.value
                                  ) &&
                                  (r = s.Messages.StrictReservedWord))),
                          (n = t.value))
                        : (n = "ILLEGAL"),
                      (r = r.replace("%0", n)),
                      t && "number" == typeof t.lineNumber)
                    ) {
                      var i = t.start,
                        a = t.lineNumber,
                        o = this.lastMarker.index - this.lastMarker.column,
                        u = t.start - o + 1;
                      return this.errorHandler.createError(i, a, u, r);
                    }
                    (i = this.lastMarker.index),
                      (a = this.lastMarker.line),
                      (u = this.lastMarker.column + 1);
                    return this.errorHandler.createError(i, a, u, r);
                  }),
                  (t.prototype.throwUnexpectedToken = function (t, e) {
                    throw this.unexpectedTokenError(t, e);
                  }),
                  (t.prototype.tolerateUnexpectedToken = function (t, e) {
                    this.errorHandler.tolerate(this.unexpectedTokenError(t, e));
                  }),
                  (t.prototype.collectComments = function () {
                    if (this.config.comment) {
                      var t = this.scanner.scanComments();
                      if (t.length > 0 && this.delegate)
                        for (var e = 0; e < t.length; ++e) {
                          var n = t[e],
                            r = void 0;
                          (r = {
                            type: n.multiLine ? "BlockComment" : "LineComment",
                            value: this.scanner.source.slice(
                              n.slice[0],
                              n.slice[1]
                            ),
                          }),
                            this.config.range && (r.range = n.range),
                            this.config.loc && (r.loc = n.loc);
                          var i = {
                            start: {
                              line: n.loc.start.line,
                              column: n.loc.start.column,
                              offset: n.range[0],
                            },
                            end: {
                              line: n.loc.end.line,
                              column: n.loc.end.column,
                              offset: n.range[1],
                            },
                          };
                          this.delegate(r, i);
                        }
                    } else this.scanner.scanComments();
                  }),
                  (t.prototype.getTokenRaw = function (t) {
                    return this.scanner.source.slice(t.start, t.end);
                  }),
                  (t.prototype.convertToken = function (t) {
                    var e = {
                      type: c.TokenName[t.type],
                      value: this.getTokenRaw(t),
                    };
                    if (
                      (this.config.range && (e.range = [t.start, t.end]),
                      this.config.loc &&
                        (e.loc = {
                          start: {
                            line: this.startMarker.line,
                            column: this.startMarker.column,
                          },
                          end: {
                            line: this.scanner.lineNumber,
                            column: this.scanner.index - this.scanner.lineStart,
                          },
                        }),
                      9 === t.type)
                    ) {
                      var n = t.pattern,
                        r = t.flags;
                      e.regex = { pattern: n, flags: r };
                    }
                    return e;
                  }),
                  (t.prototype.nextToken = function () {
                    var t = this.lookahead;
                    (this.lastMarker.index = this.scanner.index),
                      (this.lastMarker.line = this.scanner.lineNumber),
                      (this.lastMarker.column =
                        this.scanner.index - this.scanner.lineStart),
                      this.collectComments(),
                      this.scanner.index !== this.startMarker.index &&
                        ((this.startMarker.index = this.scanner.index),
                        (this.startMarker.line = this.scanner.lineNumber),
                        (this.startMarker.column =
                          this.scanner.index - this.scanner.lineStart));
                    var e = this.scanner.lex();
                    return (
                      (this.hasLineTerminator = t.lineNumber !== e.lineNumber),
                      e &&
                        this.context.strict &&
                        3 === e.type &&
                        this.scanner.isStrictModeReservedWord(e.value) &&
                        (e.type = 4),
                      (this.lookahead = e),
                      this.config.tokens &&
                        2 !== e.type &&
                        this.tokens.push(this.convertToken(e)),
                      t
                    );
                  }),
                  (t.prototype.nextRegexToken = function () {
                    this.collectComments();
                    var t = this.scanner.scanRegExp();
                    return (
                      this.config.tokens &&
                        (this.tokens.pop(),
                        this.tokens.push(this.convertToken(t))),
                      (this.lookahead = t),
                      this.nextToken(),
                      t
                    );
                  }),
                  (t.prototype.createNode = function () {
                    return {
                      index: this.startMarker.index,
                      line: this.startMarker.line,
                      column: this.startMarker.column,
                    };
                  }),
                  (t.prototype.startNode = function (t, e) {
                    void 0 === e && (e = 0);
                    var n = t.start - t.lineStart,
                      r = t.lineNumber;
                    return (
                      n < 0 && ((n += e), r--),
                      { index: t.start, line: r, column: n }
                    );
                  }),
                  (t.prototype.finalize = function (t, e) {
                    if (
                      (this.config.range &&
                        (e.range = [t.index, this.lastMarker.index]),
                      this.config.loc &&
                        ((e.loc = {
                          start: { line: t.line, column: t.column },
                          end: {
                            line: this.lastMarker.line,
                            column: this.lastMarker.column,
                          },
                        }),
                        this.config.source &&
                          (e.loc.source = this.config.source)),
                      this.delegate)
                    ) {
                      var n = {
                        start: {
                          line: t.line,
                          column: t.column,
                          offset: t.index,
                        },
                        end: {
                          line: this.lastMarker.line,
                          column: this.lastMarker.column,
                          offset: this.lastMarker.index,
                        },
                      };
                      this.delegate(e, n);
                    }
                    return e;
                  }),
                  (t.prototype.expect = function (t) {
                    var e = this.nextToken();
                    (7 === e.type && e.value === t) ||
                      this.throwUnexpectedToken(e);
                  }),
                  (t.prototype.expectCommaSeparator = function () {
                    if (this.config.tolerant) {
                      var t = this.lookahead;
                      7 === t.type && "," === t.value
                        ? this.nextToken()
                        : 7 === t.type && ";" === t.value
                        ? (this.nextToken(), this.tolerateUnexpectedToken(t))
                        : this.tolerateUnexpectedToken(
                            t,
                            s.Messages.UnexpectedToken
                          );
                    } else this.expect(",");
                  }),
                  (t.prototype.expectKeyword = function (t) {
                    var e = this.nextToken();
                    (4 === e.type && e.value === t) ||
                      this.throwUnexpectedToken(e);
                  }),
                  (t.prototype.match = function (t) {
                    return (
                      7 === this.lookahead.type && this.lookahead.value === t
                    );
                  }),
                  (t.prototype.matchKeyword = function (t) {
                    return (
                      4 === this.lookahead.type && this.lookahead.value === t
                    );
                  }),
                  (t.prototype.matchContextualKeyword = function (t) {
                    return (
                      3 === this.lookahead.type && this.lookahead.value === t
                    );
                  }),
                  (t.prototype.matchAssign = function () {
                    if (7 !== this.lookahead.type) return !1;
                    var t = this.lookahead.value;
                    return (
                      "=" === t ||
                      "*=" === t ||
                      "**=" === t ||
                      "/=" === t ||
                      "%=" === t ||
                      "+=" === t ||
                      "-=" === t ||
                      "<<=" === t ||
                      ">>=" === t ||
                      ">>>=" === t ||
                      "&=" === t ||
                      "^=" === t ||
                      "|=" === t
                    );
                  }),
                  (t.prototype.isolateCoverGrammar = function (t) {
                    var e = this.context.isBindingElement,
                      n = this.context.isAssignmentTarget,
                      r = this.context.firstCoverInitializedNameError;
                    (this.context.isBindingElement = !0),
                      (this.context.isAssignmentTarget = !0),
                      (this.context.firstCoverInitializedNameError = null);
                    var i = t.call(this);
                    return (
                      null !== this.context.firstCoverInitializedNameError &&
                        this.throwUnexpectedToken(
                          this.context.firstCoverInitializedNameError
                        ),
                      (this.context.isBindingElement = e),
                      (this.context.isAssignmentTarget = n),
                      (this.context.firstCoverInitializedNameError = r),
                      i
                    );
                  }),
                  (t.prototype.inheritCoverGrammar = function (t) {
                    var e = this.context.isBindingElement,
                      n = this.context.isAssignmentTarget,
                      r = this.context.firstCoverInitializedNameError;
                    (this.context.isBindingElement = !0),
                      (this.context.isAssignmentTarget = !0),
                      (this.context.firstCoverInitializedNameError = null);
                    var i = t.call(this);
                    return (
                      (this.context.isBindingElement =
                        this.context.isBindingElement && e),
                      (this.context.isAssignmentTarget =
                        this.context.isAssignmentTarget && n),
                      (this.context.firstCoverInitializedNameError =
                        r || this.context.firstCoverInitializedNameError),
                      i
                    );
                  }),
                  (t.prototype.consumeSemicolon = function () {
                    this.match(";")
                      ? this.nextToken()
                      : this.hasLineTerminator ||
                        (2 === this.lookahead.type ||
                          this.match("}") ||
                          this.throwUnexpectedToken(this.lookahead),
                        (this.lastMarker.index = this.startMarker.index),
                        (this.lastMarker.line = this.startMarker.line),
                        (this.lastMarker.column = this.startMarker.column));
                  }),
                  (t.prototype.parsePrimaryExpression = function () {
                    var t,
                      e,
                      n,
                      r = this.createNode();
                    switch (this.lookahead.type) {
                      case 3:
                        (this.context.isModule || this.context.await) &&
                          "await" === this.lookahead.value &&
                          this.tolerateUnexpectedToken(this.lookahead),
                          (t = this.matchAsyncFunction()
                            ? this.parseFunctionExpression()
                            : this.finalize(
                                r,
                                new a.Identifier(this.nextToken().value)
                              ));
                        break;
                      case 6:
                      case 8:
                        this.context.strict &&
                          this.lookahead.octal &&
                          this.tolerateUnexpectedToken(
                            this.lookahead,
                            s.Messages.StrictOctalLiteral
                          ),
                          (this.context.isAssignmentTarget = !1),
                          (this.context.isBindingElement = !1),
                          (e = this.nextToken()),
                          (n = this.getTokenRaw(e)),
                          (t = this.finalize(r, new a.Literal(e.value, n)));
                        break;
                      case 1:
                        (this.context.isAssignmentTarget = !1),
                          (this.context.isBindingElement = !1),
                          (e = this.nextToken()),
                          (n = this.getTokenRaw(e)),
                          (t = this.finalize(
                            r,
                            new a.Literal("true" === e.value, n)
                          ));
                        break;
                      case 5:
                        (this.context.isAssignmentTarget = !1),
                          (this.context.isBindingElement = !1),
                          (e = this.nextToken()),
                          (n = this.getTokenRaw(e)),
                          (t = this.finalize(r, new a.Literal(null, n)));
                        break;
                      case 10:
                        t = this.parseTemplateLiteral();
                        break;
                      case 7:
                        switch (this.lookahead.value) {
                          case "(":
                            (this.context.isBindingElement = !1),
                              (t = this.inheritCoverGrammar(
                                this.parseGroupExpression
                              ));
                            break;
                          case "[":
                            t = this.inheritCoverGrammar(
                              this.parseArrayInitializer
                            );
                            break;
                          case "{":
                            t = this.inheritCoverGrammar(
                              this.parseObjectInitializer
                            );
                            break;
                          case "/":
                          case "/=":
                            (this.context.isAssignmentTarget = !1),
                              (this.context.isBindingElement = !1),
                              (this.scanner.index = this.startMarker.index),
                              (e = this.nextRegexToken()),
                              (n = this.getTokenRaw(e)),
                              (t = this.finalize(
                                r,
                                new a.RegexLiteral(
                                  e.regex,
                                  n,
                                  e.pattern,
                                  e.flags
                                )
                              ));
                            break;
                          default:
                            t = this.throwUnexpectedToken(this.nextToken());
                        }
                        break;
                      case 4:
                        !this.context.strict &&
                        this.context.allowYield &&
                        this.matchKeyword("yield")
                          ? (t = this.parseIdentifierName())
                          : !this.context.strict && this.matchKeyword("let")
                          ? (t = this.finalize(
                              r,
                              new a.Identifier(this.nextToken().value)
                            ))
                          : ((this.context.isAssignmentTarget = !1),
                            (this.context.isBindingElement = !1),
                            this.matchKeyword("function")
                              ? (t = this.parseFunctionExpression())
                              : this.matchKeyword("this")
                              ? (this.nextToken(),
                                (t = this.finalize(r, new a.ThisExpression())))
                              : (t = this.matchKeyword("class")
                                  ? this.parseClassExpression()
                                  : this.throwUnexpectedToken(
                                      this.nextToken()
                                    )));
                        break;
                      default:
                        t = this.throwUnexpectedToken(this.nextToken());
                    }
                    return t;
                  }),
                  (t.prototype.parseSpreadElement = function () {
                    var t = this.createNode();
                    this.expect("...");
                    var e = this.inheritCoverGrammar(
                      this.parseAssignmentExpression
                    );
                    return this.finalize(t, new a.SpreadElement(e));
                  }),
                  (t.prototype.parseArrayInitializer = function () {
                    var t = this.createNode(),
                      e = [];
                    for (this.expect("["); !this.match("]"); )
                      if (this.match(",")) this.nextToken(), e.push(null);
                      else if (this.match("...")) {
                        var n = this.parseSpreadElement();
                        this.match("]") ||
                          ((this.context.isAssignmentTarget = !1),
                          (this.context.isBindingElement = !1),
                          this.expect(",")),
                          e.push(n);
                      } else
                        e.push(
                          this.inheritCoverGrammar(
                            this.parseAssignmentExpression
                          )
                        ),
                          this.match("]") || this.expect(",");
                    return (
                      this.expect("]"),
                      this.finalize(t, new a.ArrayExpression(e))
                    );
                  }),
                  (t.prototype.parsePropertyMethod = function (t) {
                    (this.context.isAssignmentTarget = !1),
                      (this.context.isBindingElement = !1);
                    var e = this.context.strict,
                      n = this.context.allowStrictDirective;
                    this.context.allowStrictDirective = t.simple;
                    var r = this.isolateCoverGrammar(
                      this.parseFunctionSourceElements
                    );
                    return (
                      this.context.strict &&
                        t.firstRestricted &&
                        this.tolerateUnexpectedToken(
                          t.firstRestricted,
                          t.message
                        ),
                      this.context.strict &&
                        t.stricted &&
                        this.tolerateUnexpectedToken(t.stricted, t.message),
                      (this.context.strict = e),
                      (this.context.allowStrictDirective = n),
                      r
                    );
                  }),
                  (t.prototype.parsePropertyMethodFunction = function () {
                    var t = this.createNode(),
                      e = this.context.allowYield;
                    this.context.allowYield = !0;
                    var n = this.parseFormalParameters(),
                      r = this.parsePropertyMethod(n);
                    return (
                      (this.context.allowYield = e),
                      this.finalize(
                        t,
                        new a.FunctionExpression(null, n.params, r, !1)
                      )
                    );
                  }),
                  (t.prototype.parsePropertyMethodAsyncFunction = function () {
                    var t = this.createNode(),
                      e = this.context.allowYield,
                      n = this.context.await;
                    (this.context.allowYield = !1), (this.context.await = !0);
                    var r = this.parseFormalParameters(),
                      i = this.parsePropertyMethod(r);
                    return (
                      (this.context.allowYield = e),
                      (this.context.await = n),
                      this.finalize(
                        t,
                        new a.AsyncFunctionExpression(null, r.params, i)
                      )
                    );
                  }),
                  (t.prototype.parseObjectPropertyKey = function () {
                    var t,
                      e = this.createNode(),
                      n = this.nextToken();
                    switch (n.type) {
                      case 8:
                      case 6:
                        this.context.strict &&
                          n.octal &&
                          this.tolerateUnexpectedToken(
                            n,
                            s.Messages.StrictOctalLiteral
                          );
                        var r = this.getTokenRaw(n);
                        t = this.finalize(e, new a.Literal(n.value, r));
                        break;
                      case 3:
                      case 1:
                      case 5:
                      case 4:
                        t = this.finalize(e, new a.Identifier(n.value));
                        break;
                      case 7:
                        "[" === n.value
                          ? ((t = this.isolateCoverGrammar(
                              this.parseAssignmentExpression
                            )),
                            this.expect("]"))
                          : (t = this.throwUnexpectedToken(n));
                        break;
                      default:
                        t = this.throwUnexpectedToken(n);
                    }
                    return t;
                  }),
                  (t.prototype.isPropertyKey = function (t, e) {
                    return (
                      (t.type === u.Syntax.Identifier && t.name === e) ||
                      (t.type === u.Syntax.Literal && t.value === e)
                    );
                  }),
                  (t.prototype.parseObjectProperty = function (t) {
                    var e,
                      n = this.createNode(),
                      r = this.lookahead,
                      i = null,
                      o = null,
                      u = !1,
                      c = !1,
                      l = !1,
                      h = !1;
                    if (3 === r.type) {
                      var p = r.value;
                      this.nextToken(),
                        (u = this.match("[")),
                        (i = (h = !(
                          this.hasLineTerminator ||
                          "async" !== p ||
                          this.match(":") ||
                          this.match("(") ||
                          this.match("*") ||
                          this.match(",")
                        ))
                          ? this.parseObjectPropertyKey()
                          : this.finalize(n, new a.Identifier(p)));
                    } else
                      this.match("*")
                        ? this.nextToken()
                        : ((u = this.match("[")),
                          (i = this.parseObjectPropertyKey()));
                    var f = this.qualifiedPropertyName(this.lookahead);
                    if (3 === r.type && !h && "get" === r.value && f)
                      (e = "get"),
                        (u = this.match("[")),
                        (i = this.parseObjectPropertyKey()),
                        (this.context.allowYield = !1),
                        (o = this.parseGetterMethod());
                    else if (3 === r.type && !h && "set" === r.value && f)
                      (e = "set"),
                        (u = this.match("[")),
                        (i = this.parseObjectPropertyKey()),
                        (o = this.parseSetterMethod());
                    else if (7 === r.type && "*" === r.value && f)
                      (e = "init"),
                        (u = this.match("[")),
                        (i = this.parseObjectPropertyKey()),
                        (o = this.parseGeneratorMethod()),
                        (c = !0);
                    else if (
                      (i || this.throwUnexpectedToken(this.lookahead),
                      (e = "init"),
                      this.match(":") && !h)
                    )
                      !u &&
                        this.isPropertyKey(i, "__proto__") &&
                        (t.value &&
                          this.tolerateError(s.Messages.DuplicateProtoProperty),
                        (t.value = !0)),
                        this.nextToken(),
                        (o = this.inheritCoverGrammar(
                          this.parseAssignmentExpression
                        ));
                    else if (this.match("("))
                      (o = h
                        ? this.parsePropertyMethodAsyncFunction()
                        : this.parsePropertyMethodFunction()),
                        (c = !0);
                    else if (3 === r.type) {
                      p = this.finalize(n, new a.Identifier(r.value));
                      if (this.match("=")) {
                        (this.context.firstCoverInitializedNameError =
                          this.lookahead),
                          this.nextToken(),
                          (l = !0);
                        var d = this.isolateCoverGrammar(
                          this.parseAssignmentExpression
                        );
                        o = this.finalize(n, new a.AssignmentPattern(p, d));
                      } else (l = !0), (o = p);
                    } else this.throwUnexpectedToken(this.nextToken());
                    return this.finalize(n, new a.Property(e, i, u, o, c, l));
                  }),
                  (t.prototype.parseObjectInitializer = function () {
                    var t = this.createNode();
                    this.expect("{");
                    for (var e = [], n = { value: !1 }; !this.match("}"); )
                      e.push(this.parseObjectProperty(n)),
                        this.match("}") || this.expectCommaSeparator();
                    return (
                      this.expect("}"),
                      this.finalize(t, new a.ObjectExpression(e))
                    );
                  }),
                  (t.prototype.parseTemplateHead = function () {
                    r.assert(
                      this.lookahead.head,
                      "Template literal must start with a template head"
                    );
                    var t = this.createNode(),
                      e = this.nextToken(),
                      n = e.value,
                      i = e.cooked;
                    return this.finalize(
                      t,
                      new a.TemplateElement({ raw: n, cooked: i }, e.tail)
                    );
                  }),
                  (t.prototype.parseTemplateElement = function () {
                    10 !== this.lookahead.type && this.throwUnexpectedToken();
                    var t = this.createNode(),
                      e = this.nextToken(),
                      n = e.value,
                      r = e.cooked;
                    return this.finalize(
                      t,
                      new a.TemplateElement({ raw: n, cooked: r }, e.tail)
                    );
                  }),
                  (t.prototype.parseTemplateLiteral = function () {
                    var t = this.createNode(),
                      e = [],
                      n = [],
                      r = this.parseTemplateHead();
                    for (n.push(r); !r.tail; )
                      e.push(this.parseExpression()),
                        (r = this.parseTemplateElement()),
                        n.push(r);
                    return this.finalize(t, new a.TemplateLiteral(n, e));
                  }),
                  (t.prototype.reinterpretExpressionAsPattern = function (t) {
                    switch (t.type) {
                      case u.Syntax.Identifier:
                      case u.Syntax.MemberExpression:
                      case u.Syntax.RestElement:
                      case u.Syntax.AssignmentPattern:
                        break;
                      case u.Syntax.SpreadElement:
                        (t.type = u.Syntax.RestElement),
                          this.reinterpretExpressionAsPattern(t.argument);
                        break;
                      case u.Syntax.ArrayExpression:
                        t.type = u.Syntax.ArrayPattern;
                        for (var e = 0; e < t.elements.length; e++)
                          null !== t.elements[e] &&
                            this.reinterpretExpressionAsPattern(t.elements[e]);
                        break;
                      case u.Syntax.ObjectExpression:
                        t.type = u.Syntax.ObjectPattern;
                        for (e = 0; e < t.properties.length; e++)
                          this.reinterpretExpressionAsPattern(
                            t.properties[e].value
                          );
                        break;
                      case u.Syntax.AssignmentExpression:
                        (t.type = u.Syntax.AssignmentPattern),
                          delete t.operator,
                          this.reinterpretExpressionAsPattern(t.left);
                    }
                  }),
                  (t.prototype.parseGroupExpression = function () {
                    var t;
                    if ((this.expect("("), this.match(")")))
                      this.nextToken(),
                        this.match("=>") || this.expect("=>"),
                        (t = {
                          type: "ArrowParameterPlaceHolder",
                          params: [],
                          async: !1,
                        });
                    else {
                      var e = this.lookahead,
                        n = [];
                      if (this.match("..."))
                        (t = this.parseRestElement(n)),
                          this.expect(")"),
                          this.match("=>") || this.expect("=>"),
                          (t = {
                            type: "ArrowParameterPlaceHolder",
                            params: [t],
                            async: !1,
                          });
                      else {
                        var r = !1;
                        if (
                          ((this.context.isBindingElement = !0),
                          (t = this.inheritCoverGrammar(
                            this.parseAssignmentExpression
                          )),
                          this.match(","))
                        ) {
                          var i = [];
                          for (
                            this.context.isAssignmentTarget = !1, i.push(t);
                            2 !== this.lookahead.type && this.match(",");

                          ) {
                            if ((this.nextToken(), this.match(")"))) {
                              this.nextToken();
                              for (var s = 0; s < i.length; s++)
                                this.reinterpretExpressionAsPattern(i[s]);
                              (r = !0),
                                (t = {
                                  type: "ArrowParameterPlaceHolder",
                                  params: i,
                                  async: !1,
                                });
                            } else if (this.match("...")) {
                              this.context.isBindingElement ||
                                this.throwUnexpectedToken(this.lookahead),
                                i.push(this.parseRestElement(n)),
                                this.expect(")"),
                                this.match("=>") || this.expect("=>"),
                                (this.context.isBindingElement = !1);
                              for (s = 0; s < i.length; s++)
                                this.reinterpretExpressionAsPattern(i[s]);
                              (r = !0),
                                (t = {
                                  type: "ArrowParameterPlaceHolder",
                                  params: i,
                                  async: !1,
                                });
                            } else
                              i.push(
                                this.inheritCoverGrammar(
                                  this.parseAssignmentExpression
                                )
                              );
                            if (r) break;
                          }
                          r ||
                            (t = this.finalize(
                              this.startNode(e),
                              new a.SequenceExpression(i)
                            ));
                        }
                        if (!r) {
                          if (
                            (this.expect(")"),
                            this.match("=>") &&
                              (t.type === u.Syntax.Identifier &&
                                "yield" === t.name &&
                                ((r = !0),
                                (t = {
                                  type: "ArrowParameterPlaceHolder",
                                  params: [t],
                                  async: !1,
                                })),
                              !r))
                          ) {
                            if (
                              (this.context.isBindingElement ||
                                this.throwUnexpectedToken(this.lookahead),
                              t.type === u.Syntax.SequenceExpression)
                            )
                              for (s = 0; s < t.expressions.length; s++)
                                this.reinterpretExpressionAsPattern(
                                  t.expressions[s]
                                );
                            else this.reinterpretExpressionAsPattern(t);
                            t = {
                              type: "ArrowParameterPlaceHolder",
                              params:
                                t.type === u.Syntax.SequenceExpression
                                  ? t.expressions
                                  : [t],
                              async: !1,
                            };
                          }
                          this.context.isBindingElement = !1;
                        }
                      }
                    }
                    return t;
                  }),
                  (t.prototype.parseArguments = function () {
                    this.expect("(");
                    var t = [];
                    if (!this.match(")"))
                      for (;;) {
                        var e = this.match("...")
                          ? this.parseSpreadElement()
                          : this.isolateCoverGrammar(
                              this.parseAssignmentExpression
                            );
                        if ((t.push(e), this.match(")"))) break;
                        if ((this.expectCommaSeparator(), this.match(")")))
                          break;
                      }
                    return this.expect(")"), t;
                  }),
                  (t.prototype.isIdentifierName = function (t) {
                    return (
                      3 === t.type ||
                      4 === t.type ||
                      1 === t.type ||
                      5 === t.type
                    );
                  }),
                  (t.prototype.parseIdentifierName = function () {
                    var t = this.createNode(),
                      e = this.nextToken();
                    return (
                      this.isIdentifierName(e) || this.throwUnexpectedToken(e),
                      this.finalize(t, new a.Identifier(e.value))
                    );
                  }),
                  (t.prototype.parseNewExpression = function () {
                    var t,
                      e = this.createNode(),
                      n = this.parseIdentifierName();
                    if (
                      (r.assert(
                        "new" === n.name,
                        "New expression must start with `new`"
                      ),
                      this.match("."))
                    )
                      if (
                        (this.nextToken(),
                        3 === this.lookahead.type &&
                          this.context.inFunctionBody &&
                          "target" === this.lookahead.value)
                      ) {
                        var i = this.parseIdentifierName();
                        t = new a.MetaProperty(n, i);
                      } else this.throwUnexpectedToken(this.lookahead);
                    else {
                      var s = this.isolateCoverGrammar(
                          this.parseLeftHandSideExpression
                        ),
                        o = this.match("(") ? this.parseArguments() : [];
                      (t = new a.NewExpression(s, o)),
                        (this.context.isAssignmentTarget = !1),
                        (this.context.isBindingElement = !1);
                    }
                    return this.finalize(e, t);
                  }),
                  (t.prototype.parseAsyncArgument = function () {
                    var t = this.parseAssignmentExpression();
                    return (
                      (this.context.firstCoverInitializedNameError = null), t
                    );
                  }),
                  (t.prototype.parseAsyncArguments = function () {
                    this.expect("(");
                    var t = [];
                    if (!this.match(")"))
                      for (;;) {
                        var e = this.match("...")
                          ? this.parseSpreadElement()
                          : this.isolateCoverGrammar(this.parseAsyncArgument);
                        if ((t.push(e), this.match(")"))) break;
                        if ((this.expectCommaSeparator(), this.match(")")))
                          break;
                      }
                    return this.expect(")"), t;
                  }),
                  (t.prototype.parseLeftHandSideExpressionAllowCall =
                    function () {
                      var t,
                        e = this.lookahead,
                        n = this.matchContextualKeyword("async"),
                        r = this.context.allowIn;
                      for (
                        this.context.allowIn = !0,
                          this.matchKeyword("super") &&
                          this.context.inFunctionBody
                            ? ((t = this.createNode()),
                              this.nextToken(),
                              (t = this.finalize(t, new a.Super())),
                              this.match("(") ||
                                this.match(".") ||
                                this.match("[") ||
                                this.throwUnexpectedToken(this.lookahead))
                            : (t = this.inheritCoverGrammar(
                                this.matchKeyword("new")
                                  ? this.parseNewExpression
                                  : this.parsePrimaryExpression
                              ));
                        ;

                      )
                        if (this.match(".")) {
                          (this.context.isBindingElement = !1),
                            (this.context.isAssignmentTarget = !0),
                            this.expect(".");
                          var i = this.parseIdentifierName();
                          t = this.finalize(
                            this.startNode(e),
                            new a.StaticMemberExpression(t, i)
                          );
                        } else if (this.match("(")) {
                          var s =
                            n && e.lineNumber === this.lookahead.lineNumber;
                          (this.context.isBindingElement = !1),
                            (this.context.isAssignmentTarget = !1);
                          var o = s
                            ? this.parseAsyncArguments()
                            : this.parseArguments();
                          if (
                            ((t = this.finalize(
                              this.startNode(e),
                              new a.CallExpression(t, o)
                            )),
                            s && this.match("=>"))
                          ) {
                            for (var u = 0; u < o.length; ++u)
                              this.reinterpretExpressionAsPattern(o[u]);
                            t = {
                              type: "ArrowParameterPlaceHolder",
                              params: o,
                              async: !0,
                            };
                          }
                        } else if (this.match("[")) {
                          (this.context.isBindingElement = !1),
                            (this.context.isAssignmentTarget = !0),
                            this.expect("[");
                          i = this.isolateCoverGrammar(this.parseExpression);
                          this.expect("]"),
                            (t = this.finalize(
                              this.startNode(e),
                              new a.ComputedMemberExpression(t, i)
                            ));
                        } else {
                          if (
                            10 !== this.lookahead.type ||
                            !this.lookahead.head
                          )
                            break;
                          var c = this.parseTemplateLiteral();
                          t = this.finalize(
                            this.startNode(e),
                            new a.TaggedTemplateExpression(t, c)
                          );
                        }
                      return (this.context.allowIn = r), t;
                    }),
                  (t.prototype.parseSuper = function () {
                    var t = this.createNode();
                    return (
                      this.expectKeyword("super"),
                      this.match("[") ||
                        this.match(".") ||
                        this.throwUnexpectedToken(this.lookahead),
                      this.finalize(t, new a.Super())
                    );
                  }),
                  (t.prototype.parseLeftHandSideExpression = function () {
                    r.assert(
                      this.context.allowIn,
                      "callee of new expression always allow in keyword."
                    );
                    for (
                      var t = this.startNode(this.lookahead),
                        e =
                          this.matchKeyword("super") &&
                          this.context.inFunctionBody
                            ? this.parseSuper()
                            : this.inheritCoverGrammar(
                                this.matchKeyword("new")
                                  ? this.parseNewExpression
                                  : this.parsePrimaryExpression
                              );
                      ;

                    )
                      if (this.match("[")) {
                        (this.context.isBindingElement = !1),
                          (this.context.isAssignmentTarget = !0),
                          this.expect("[");
                        var n = this.isolateCoverGrammar(this.parseExpression);
                        this.expect("]"),
                          (e = this.finalize(
                            t,
                            new a.ComputedMemberExpression(e, n)
                          ));
                      } else if (this.match(".")) {
                        (this.context.isBindingElement = !1),
                          (this.context.isAssignmentTarget = !0),
                          this.expect(".");
                        n = this.parseIdentifierName();
                        e = this.finalize(
                          t,
                          new a.StaticMemberExpression(e, n)
                        );
                      } else {
                        if (10 !== this.lookahead.type || !this.lookahead.head)
                          break;
                        var i = this.parseTemplateLiteral();
                        e = this.finalize(
                          t,
                          new a.TaggedTemplateExpression(e, i)
                        );
                      }
                    return e;
                  }),
                  (t.prototype.parseUpdateExpression = function () {
                    var t,
                      e = this.lookahead;
                    if (this.match("++") || this.match("--")) {
                      var n = this.startNode(e),
                        r = this.nextToken();
                      (t = this.inheritCoverGrammar(this.parseUnaryExpression)),
                        this.context.strict &&
                          t.type === u.Syntax.Identifier &&
                          this.scanner.isRestrictedWord(t.name) &&
                          this.tolerateError(s.Messages.StrictLHSPrefix),
                        this.context.isAssignmentTarget ||
                          this.tolerateError(s.Messages.InvalidLHSInAssignment);
                      var i = !0;
                      (t = this.finalize(
                        n,
                        new a.UpdateExpression(r.value, t, i)
                      )),
                        (this.context.isAssignmentTarget = !1),
                        (this.context.isBindingElement = !1);
                    } else if (
                      ((t = this.inheritCoverGrammar(
                        this.parseLeftHandSideExpressionAllowCall
                      )),
                      !this.hasLineTerminator &&
                        7 === this.lookahead.type &&
                        (this.match("++") || this.match("--")))
                    ) {
                      this.context.strict &&
                        t.type === u.Syntax.Identifier &&
                        this.scanner.isRestrictedWord(t.name) &&
                        this.tolerateError(s.Messages.StrictLHSPostfix),
                        this.context.isAssignmentTarget ||
                          this.tolerateError(s.Messages.InvalidLHSInAssignment),
                        (this.context.isAssignmentTarget = !1),
                        (this.context.isBindingElement = !1);
                      var o = this.nextToken().value;
                      i = !1;
                      t = this.finalize(
                        this.startNode(e),
                        new a.UpdateExpression(o, t, i)
                      );
                    }
                    return t;
                  }),
                  (t.prototype.parseAwaitExpression = function () {
                    var t = this.createNode();
                    this.nextToken();
                    var e = this.parseUnaryExpression();
                    return this.finalize(t, new a.AwaitExpression(e));
                  }),
                  (t.prototype.parseUnaryExpression = function () {
                    var t;
                    if (
                      this.match("+") ||
                      this.match("-") ||
                      this.match("~") ||
                      this.match("!") ||
                      this.matchKeyword("delete") ||
                      this.matchKeyword("void") ||
                      this.matchKeyword("typeof")
                    ) {
                      var e = this.startNode(this.lookahead),
                        n = this.nextToken();
                      (t = this.inheritCoverGrammar(this.parseUnaryExpression)),
                        (t = this.finalize(
                          e,
                          new a.UnaryExpression(n.value, t)
                        )),
                        this.context.strict &&
                          "delete" === t.operator &&
                          t.argument.type === u.Syntax.Identifier &&
                          this.tolerateError(s.Messages.StrictDelete),
                        (this.context.isAssignmentTarget = !1),
                        (this.context.isBindingElement = !1);
                    } else
                      t =
                        this.context.await &&
                        this.matchContextualKeyword("await")
                          ? this.parseAwaitExpression()
                          : this.parseUpdateExpression();
                    return t;
                  }),
                  (t.prototype.parseExponentiationExpression = function () {
                    var t = this.lookahead,
                      e = this.inheritCoverGrammar(this.parseUnaryExpression);
                    if (
                      e.type !== u.Syntax.UnaryExpression &&
                      this.match("**")
                    ) {
                      this.nextToken(),
                        (this.context.isAssignmentTarget = !1),
                        (this.context.isBindingElement = !1);
                      var n = e,
                        r = this.isolateCoverGrammar(
                          this.parseExponentiationExpression
                        );
                      e = this.finalize(
                        this.startNode(t),
                        new a.BinaryExpression("**", n, r)
                      );
                    }
                    return e;
                  }),
                  (t.prototype.binaryPrecedence = function (t) {
                    var e = t.value;
                    return 7 === t.type
                      ? this.operatorPrecedence[e] || 0
                      : 4 === t.type &&
                        ("instanceof" === e ||
                          (this.context.allowIn && "in" === e))
                      ? 7
                      : 0;
                  }),
                  (t.prototype.parseBinaryExpression = function () {
                    var t = this.lookahead,
                      e = this.inheritCoverGrammar(
                        this.parseExponentiationExpression
                      ),
                      n = this.lookahead,
                      r = this.binaryPrecedence(n);
                    if (r > 0) {
                      this.nextToken(),
                        (this.context.isAssignmentTarget = !1),
                        (this.context.isBindingElement = !1);
                      for (
                        var i = [t, this.lookahead],
                          s = e,
                          o = this.isolateCoverGrammar(
                            this.parseExponentiationExpression
                          ),
                          u = [s, n.value, o],
                          c = [r];
                        !((r = this.binaryPrecedence(this.lookahead)) <= 0);

                      ) {
                        for (; u.length > 2 && r <= c[c.length - 1]; ) {
                          o = u.pop();
                          var l = u.pop();
                          c.pop(), (s = u.pop()), i.pop();
                          var h = this.startNode(i[i.length - 1]);
                          u.push(
                            this.finalize(h, new a.BinaryExpression(l, s, o))
                          );
                        }
                        u.push(this.nextToken().value),
                          c.push(r),
                          i.push(this.lookahead),
                          u.push(
                            this.isolateCoverGrammar(
                              this.parseExponentiationExpression
                            )
                          );
                      }
                      var p = u.length - 1;
                      e = u[p];
                      for (var f = i.pop(); p > 1; ) {
                        var d = i.pop(),
                          m = f && f.lineStart;
                        (h = this.startNode(d, m)), (l = u[p - 1]);
                        (e = this.finalize(
                          h,
                          new a.BinaryExpression(l, u[p - 2], e)
                        )),
                          (p -= 2),
                          (f = d);
                      }
                    }
                    return e;
                  }),
                  (t.prototype.parseConditionalExpression = function () {
                    var t = this.lookahead,
                      e = this.inheritCoverGrammar(this.parseBinaryExpression);
                    if (this.match("?")) {
                      this.nextToken();
                      var n = this.context.allowIn;
                      this.context.allowIn = !0;
                      var r = this.isolateCoverGrammar(
                        this.parseAssignmentExpression
                      );
                      (this.context.allowIn = n), this.expect(":");
                      var i = this.isolateCoverGrammar(
                        this.parseAssignmentExpression
                      );
                      (e = this.finalize(
                        this.startNode(t),
                        new a.ConditionalExpression(e, r, i)
                      )),
                        (this.context.isAssignmentTarget = !1),
                        (this.context.isBindingElement = !1);
                    }
                    return e;
                  }),
                  (t.prototype.checkPatternParam = function (t, e) {
                    switch (e.type) {
                      case u.Syntax.Identifier:
                        this.validateParam(t, e, e.name);
                        break;
                      case u.Syntax.RestElement:
                        this.checkPatternParam(t, e.argument);
                        break;
                      case u.Syntax.AssignmentPattern:
                        this.checkPatternParam(t, e.left);
                        break;
                      case u.Syntax.ArrayPattern:
                        for (var n = 0; n < e.elements.length; n++)
                          null !== e.elements[n] &&
                            this.checkPatternParam(t, e.elements[n]);
                        break;
                      case u.Syntax.ObjectPattern:
                        for (n = 0; n < e.properties.length; n++)
                          this.checkPatternParam(t, e.properties[n].value);
                    }
                    t.simple = t.simple && e instanceof a.Identifier;
                  }),
                  (t.prototype.reinterpretAsCoverFormalsList = function (t) {
                    var e,
                      n = [t],
                      r = !1;
                    switch (t.type) {
                      case u.Syntax.Identifier:
                        break;
                      case "ArrowParameterPlaceHolder":
                        (n = t.params), (r = t.async);
                        break;
                      default:
                        return null;
                    }
                    e = { simple: !0, paramSet: {} };
                    for (var i = 0; i < n.length; ++i) {
                      (a = n[i]).type === u.Syntax.AssignmentPattern
                        ? a.right.type === u.Syntax.YieldExpression &&
                          (a.right.argument &&
                            this.throwUnexpectedToken(this.lookahead),
                          (a.right.type = u.Syntax.Identifier),
                          (a.right.name = "yield"),
                          delete a.right.argument,
                          delete a.right.delegate)
                        : r &&
                          a.type === u.Syntax.Identifier &&
                          "await" === a.name &&
                          this.throwUnexpectedToken(this.lookahead),
                        this.checkPatternParam(e, a),
                        (n[i] = a);
                    }
                    if (this.context.strict || !this.context.allowYield)
                      for (i = 0; i < n.length; ++i) {
                        var a;
                        (a = n[i]).type === u.Syntax.YieldExpression &&
                          this.throwUnexpectedToken(this.lookahead);
                      }
                    if (e.message === s.Messages.StrictParamDupe) {
                      var o = this.context.strict
                        ? e.stricted
                        : e.firstRestricted;
                      this.throwUnexpectedToken(o, e.message);
                    }
                    return {
                      simple: e.simple,
                      params: n,
                      stricted: e.stricted,
                      firstRestricted: e.firstRestricted,
                      message: e.message,
                    };
                  }),
                  (t.prototype.parseAssignmentExpression = function () {
                    var t;
                    if (!this.context.allowYield && this.matchKeyword("yield"))
                      t = this.parseYieldExpression();
                    else {
                      var e = this.lookahead,
                        n = e;
                      if (
                        ((t = this.parseConditionalExpression()),
                        3 === n.type &&
                          n.lineNumber === this.lookahead.lineNumber &&
                          "async" === n.value &&
                          (3 === this.lookahead.type ||
                            this.matchKeyword("yield")))
                      ) {
                        var r = this.parsePrimaryExpression();
                        this.reinterpretExpressionAsPattern(r),
                          (t = {
                            type: "ArrowParameterPlaceHolder",
                            params: [r],
                            async: !0,
                          });
                      }
                      if (
                        "ArrowParameterPlaceHolder" === t.type ||
                        this.match("=>")
                      ) {
                        (this.context.isAssignmentTarget = !1),
                          (this.context.isBindingElement = !1);
                        var i = t.async,
                          o = this.reinterpretAsCoverFormalsList(t);
                        if (o) {
                          this.hasLineTerminator &&
                            this.tolerateUnexpectedToken(this.lookahead),
                            (this.context.firstCoverInitializedNameError =
                              null);
                          var c = this.context.strict,
                            l = this.context.allowStrictDirective;
                          this.context.allowStrictDirective = o.simple;
                          var h = this.context.allowYield,
                            p = this.context.await;
                          (this.context.allowYield = !0),
                            (this.context.await = i);
                          var f = this.startNode(e);
                          this.expect("=>");
                          var d = void 0;
                          if (this.match("{")) {
                            var m = this.context.allowIn;
                            (this.context.allowIn = !0),
                              (d = this.parseFunctionSourceElements()),
                              (this.context.allowIn = m);
                          } else
                            d = this.isolateCoverGrammar(
                              this.parseAssignmentExpression
                            );
                          var v = d.type !== u.Syntax.BlockStatement;
                          this.context.strict &&
                            o.firstRestricted &&
                            this.throwUnexpectedToken(
                              o.firstRestricted,
                              o.message
                            ),
                            this.context.strict &&
                              o.stricted &&
                              this.tolerateUnexpectedToken(
                                o.stricted,
                                o.message
                              ),
                            (t = i
                              ? this.finalize(
                                  f,
                                  new a.AsyncArrowFunctionExpression(
                                    o.params,
                                    d,
                                    v
                                  )
                                )
                              : this.finalize(
                                  f,
                                  new a.ArrowFunctionExpression(o.params, d, v)
                                )),
                            (this.context.strict = c),
                            (this.context.allowStrictDirective = l),
                            (this.context.allowYield = h),
                            (this.context.await = p);
                        }
                      } else if (this.matchAssign()) {
                        if (
                          (this.context.isAssignmentTarget ||
                            this.tolerateError(
                              s.Messages.InvalidLHSInAssignment
                            ),
                          this.context.strict && t.type === u.Syntax.Identifier)
                        ) {
                          var y = t;
                          this.scanner.isRestrictedWord(y.name) &&
                            this.tolerateUnexpectedToken(
                              n,
                              s.Messages.StrictLHSAssignment
                            ),
                            this.scanner.isStrictModeReservedWord(y.name) &&
                              this.tolerateUnexpectedToken(
                                n,
                                s.Messages.StrictReservedWord
                              );
                        }
                        this.match("=")
                          ? this.reinterpretExpressionAsPattern(t)
                          : ((this.context.isAssignmentTarget = !1),
                            (this.context.isBindingElement = !1));
                        var g = (n = this.nextToken()).value,
                          x = this.isolateCoverGrammar(
                            this.parseAssignmentExpression
                          );
                        (t = this.finalize(
                          this.startNode(e),
                          new a.AssignmentExpression(g, t, x)
                        )),
                          (this.context.firstCoverInitializedNameError = null);
                      }
                    }
                    return t;
                  }),
                  (t.prototype.parseExpression = function () {
                    var t = this.lookahead,
                      e = this.isolateCoverGrammar(
                        this.parseAssignmentExpression
                      );
                    if (this.match(",")) {
                      var n = [];
                      for (
                        n.push(e);
                        2 !== this.lookahead.type && this.match(",");

                      )
                        this.nextToken(),
                          n.push(
                            this.isolateCoverGrammar(
                              this.parseAssignmentExpression
                            )
                          );
                      e = this.finalize(
                        this.startNode(t),
                        new a.SequenceExpression(n)
                      );
                    }
                    return e;
                  }),
                  (t.prototype.parseStatementListItem = function () {
                    var t;
                    if (
                      ((this.context.isAssignmentTarget = !0),
                      (this.context.isBindingElement = !0),
                      4 === this.lookahead.type)
                    )
                      switch (this.lookahead.value) {
                        case "export":
                          this.context.isModule ||
                            this.tolerateUnexpectedToken(
                              this.lookahead,
                              s.Messages.IllegalExportDeclaration
                            ),
                            (t = this.parseExportDeclaration());
                          break;
                        case "import":
                          this.context.isModule ||
                            this.tolerateUnexpectedToken(
                              this.lookahead,
                              s.Messages.IllegalImportDeclaration
                            ),
                            (t = this.parseImportDeclaration());
                          break;
                        case "const":
                          t = this.parseLexicalDeclaration({ inFor: !1 });
                          break;
                        case "function":
                          t = this.parseFunctionDeclaration();
                          break;
                        case "class":
                          t = this.parseClassDeclaration();
                          break;
                        case "let":
                          t = this.isLexicalDeclaration()
                            ? this.parseLexicalDeclaration({ inFor: !1 })
                            : this.parseStatement();
                          break;
                        default:
                          t = this.parseStatement();
                      }
                    else t = this.parseStatement();
                    return t;
                  }),
                  (t.prototype.parseBlock = function () {
                    var t = this.createNode();
                    this.expect("{");
                    for (var e = []; !this.match("}"); )
                      e.push(this.parseStatementListItem());
                    return (
                      this.expect("}"),
                      this.finalize(t, new a.BlockStatement(e))
                    );
                  }),
                  (t.prototype.parseLexicalBinding = function (t, e) {
                    var n = this.createNode(),
                      r = this.parsePattern([], t);
                    this.context.strict &&
                      r.type === u.Syntax.Identifier &&
                      this.scanner.isRestrictedWord(r.name) &&
                      this.tolerateError(s.Messages.StrictVarName);
                    var i = null;
                    return (
                      "const" === t
                        ? this.matchKeyword("in") ||
                          this.matchContextualKeyword("of") ||
                          (this.match("=")
                            ? (this.nextToken(),
                              (i = this.isolateCoverGrammar(
                                this.parseAssignmentExpression
                              )))
                            : this.throwError(
                                s.Messages.DeclarationMissingInitializer,
                                "const"
                              ))
                        : ((!e.inFor && r.type !== u.Syntax.Identifier) ||
                            this.match("=")) &&
                          (this.expect("="),
                          (i = this.isolateCoverGrammar(
                            this.parseAssignmentExpression
                          ))),
                      this.finalize(n, new a.VariableDeclarator(r, i))
                    );
                  }),
                  (t.prototype.parseBindingList = function (t, e) {
                    for (
                      var n = [this.parseLexicalBinding(t, e)];
                      this.match(",");

                    )
                      this.nextToken(), n.push(this.parseLexicalBinding(t, e));
                    return n;
                  }),
                  (t.prototype.isLexicalDeclaration = function () {
                    var t = this.scanner.saveState();
                    this.scanner.scanComments();
                    var e = this.scanner.lex();
                    return (
                      this.scanner.restoreState(t),
                      3 === e.type ||
                        (7 === e.type && "[" === e.value) ||
                        (7 === e.type && "{" === e.value) ||
                        (4 === e.type && "let" === e.value) ||
                        (4 === e.type && "yield" === e.value)
                    );
                  }),
                  (t.prototype.parseLexicalDeclaration = function (t) {
                    var e = this.createNode(),
                      n = this.nextToken().value;
                    r.assert(
                      "let" === n || "const" === n,
                      "Lexical declaration must be either let or const"
                    );
                    var i = this.parseBindingList(n, t);
                    return (
                      this.consumeSemicolon(),
                      this.finalize(e, new a.VariableDeclaration(i, n))
                    );
                  }),
                  (t.prototype.parseBindingRestElement = function (t, e) {
                    var n = this.createNode();
                    this.expect("...");
                    var r = this.parsePattern(t, e);
                    return this.finalize(n, new a.RestElement(r));
                  }),
                  (t.prototype.parseArrayPattern = function (t, e) {
                    var n = this.createNode();
                    this.expect("[");
                    for (var r = []; !this.match("]"); )
                      if (this.match(",")) this.nextToken(), r.push(null);
                      else {
                        if (this.match("...")) {
                          r.push(this.parseBindingRestElement(t, e));
                          break;
                        }
                        r.push(this.parsePatternWithDefault(t, e)),
                          this.match("]") || this.expect(",");
                      }
                    return (
                      this.expect("]"), this.finalize(n, new a.ArrayPattern(r))
                    );
                  }),
                  (t.prototype.parsePropertyPattern = function (t, e) {
                    var n,
                      r,
                      i = this.createNode(),
                      s = !1,
                      o = !1;
                    if (3 === this.lookahead.type) {
                      var u = this.lookahead;
                      n = this.parseVariableIdentifier();
                      var c = this.finalize(i, new a.Identifier(u.value));
                      if (this.match("=")) {
                        t.push(u), (o = !0), this.nextToken();
                        var l = this.parseAssignmentExpression();
                        r = this.finalize(
                          this.startNode(u),
                          new a.AssignmentPattern(c, l)
                        );
                      } else
                        this.match(":")
                          ? (this.expect(":"),
                            (r = this.parsePatternWithDefault(t, e)))
                          : (t.push(u), (o = !0), (r = c));
                    } else
                      (s = this.match("[")),
                        (n = this.parseObjectPropertyKey()),
                        this.expect(":"),
                        (r = this.parsePatternWithDefault(t, e));
                    return this.finalize(
                      i,
                      new a.Property("init", n, s, r, !1, o)
                    );
                  }),
                  (t.prototype.parseObjectPattern = function (t, e) {
                    var n = this.createNode(),
                      r = [];
                    for (this.expect("{"); !this.match("}"); )
                      r.push(this.parsePropertyPattern(t, e)),
                        this.match("}") || this.expect(",");
                    return (
                      this.expect("}"), this.finalize(n, new a.ObjectPattern(r))
                    );
                  }),
                  (t.prototype.parsePattern = function (t, e) {
                    var n;
                    return (
                      this.match("[")
                        ? (n = this.parseArrayPattern(t, e))
                        : this.match("{")
                        ? (n = this.parseObjectPattern(t, e))
                        : (!this.matchKeyword("let") ||
                            ("const" !== e && "let" !== e) ||
                            this.tolerateUnexpectedToken(
                              this.lookahead,
                              s.Messages.LetInLexicalBinding
                            ),
                          t.push(this.lookahead),
                          (n = this.parseVariableIdentifier(e))),
                      n
                    );
                  }),
                  (t.prototype.parsePatternWithDefault = function (t, e) {
                    var n = this.lookahead,
                      r = this.parsePattern(t, e);
                    if (this.match("=")) {
                      this.nextToken();
                      var i = this.context.allowYield;
                      this.context.allowYield = !0;
                      var s = this.isolateCoverGrammar(
                        this.parseAssignmentExpression
                      );
                      (this.context.allowYield = i),
                        (r = this.finalize(
                          this.startNode(n),
                          new a.AssignmentPattern(r, s)
                        ));
                    }
                    return r;
                  }),
                  (t.prototype.parseVariableIdentifier = function (t) {
                    var e = this.createNode(),
                      n = this.nextToken();
                    return (
                      4 === n.type && "yield" === n.value
                        ? this.context.strict
                          ? this.tolerateUnexpectedToken(
                              n,
                              s.Messages.StrictReservedWord
                            )
                          : this.context.allowYield ||
                            this.throwUnexpectedToken(n)
                        : 3 !== n.type
                        ? this.context.strict &&
                          4 === n.type &&
                          this.scanner.isStrictModeReservedWord(n.value)
                          ? this.tolerateUnexpectedToken(
                              n,
                              s.Messages.StrictReservedWord
                            )
                          : (this.context.strict ||
                              "let" !== n.value ||
                              "var" !== t) &&
                            this.throwUnexpectedToken(n)
                        : (this.context.isModule || this.context.await) &&
                          3 === n.type &&
                          "await" === n.value &&
                          this.tolerateUnexpectedToken(n),
                      this.finalize(e, new a.Identifier(n.value))
                    );
                  }),
                  (t.prototype.parseVariableDeclaration = function (t) {
                    var e = this.createNode(),
                      n = this.parsePattern([], "var");
                    this.context.strict &&
                      n.type === u.Syntax.Identifier &&
                      this.scanner.isRestrictedWord(n.name) &&
                      this.tolerateError(s.Messages.StrictVarName);
                    var r = null;
                    return (
                      this.match("=")
                        ? (this.nextToken(),
                          (r = this.isolateCoverGrammar(
                            this.parseAssignmentExpression
                          )))
                        : n.type === u.Syntax.Identifier ||
                          t.inFor ||
                          this.expect("="),
                      this.finalize(e, new a.VariableDeclarator(n, r))
                    );
                  }),
                  (t.prototype.parseVariableDeclarationList = function (t) {
                    var e = { inFor: t.inFor },
                      n = [];
                    for (
                      n.push(this.parseVariableDeclaration(e));
                      this.match(",");

                    )
                      this.nextToken(),
                        n.push(this.parseVariableDeclaration(e));
                    return n;
                  }),
                  (t.prototype.parseVariableStatement = function () {
                    var t = this.createNode();
                    this.expectKeyword("var");
                    var e = this.parseVariableDeclarationList({ inFor: !1 });
                    return (
                      this.consumeSemicolon(),
                      this.finalize(t, new a.VariableDeclaration(e, "var"))
                    );
                  }),
                  (t.prototype.parseEmptyStatement = function () {
                    var t = this.createNode();
                    return (
                      this.expect(";"), this.finalize(t, new a.EmptyStatement())
                    );
                  }),
                  (t.prototype.parseExpressionStatement = function () {
                    var t = this.createNode(),
                      e = this.parseExpression();
                    return (
                      this.consumeSemicolon(),
                      this.finalize(t, new a.ExpressionStatement(e))
                    );
                  }),
                  (t.prototype.parseIfClause = function () {
                    return (
                      this.context.strict &&
                        this.matchKeyword("function") &&
                        this.tolerateError(s.Messages.StrictFunction),
                      this.parseStatement()
                    );
                  }),
                  (t.prototype.parseIfStatement = function () {
                    var t,
                      e = this.createNode(),
                      n = null;
                    this.expectKeyword("if"), this.expect("(");
                    var r = this.parseExpression();
                    return (
                      !this.match(")") && this.config.tolerant
                        ? (this.tolerateUnexpectedToken(this.nextToken()),
                          (t = this.finalize(
                            this.createNode(),
                            new a.EmptyStatement()
                          )))
                        : (this.expect(")"),
                          (t = this.parseIfClause()),
                          this.matchKeyword("else") &&
                            (this.nextToken(), (n = this.parseIfClause()))),
                      this.finalize(e, new a.IfStatement(r, t, n))
                    );
                  }),
                  (t.prototype.parseDoWhileStatement = function () {
                    var t = this.createNode();
                    this.expectKeyword("do");
                    var e = this.context.inIteration;
                    this.context.inIteration = !0;
                    var n = this.parseStatement();
                    (this.context.inIteration = e),
                      this.expectKeyword("while"),
                      this.expect("(");
                    var r = this.parseExpression();
                    return (
                      !this.match(")") && this.config.tolerant
                        ? this.tolerateUnexpectedToken(this.nextToken())
                        : (this.expect(")"),
                          this.match(";") && this.nextToken()),
                      this.finalize(t, new a.DoWhileStatement(n, r))
                    );
                  }),
                  (t.prototype.parseWhileStatement = function () {
                    var t,
                      e = this.createNode();
                    this.expectKeyword("while"), this.expect("(");
                    var n = this.parseExpression();
                    if (!this.match(")") && this.config.tolerant)
                      this.tolerateUnexpectedToken(this.nextToken()),
                        (t = this.finalize(
                          this.createNode(),
                          new a.EmptyStatement()
                        ));
                    else {
                      this.expect(")");
                      var r = this.context.inIteration;
                      (this.context.inIteration = !0),
                        (t = this.parseStatement()),
                        (this.context.inIteration = r);
                    }
                    return this.finalize(e, new a.WhileStatement(n, t));
                  }),
                  (t.prototype.parseForStatement = function () {
                    var t,
                      e,
                      n,
                      r = null,
                      i = null,
                      o = null,
                      c = !0,
                      l = this.createNode();
                    if (
                      (this.expectKeyword("for"),
                      this.expect("("),
                      this.match(";"))
                    )
                      this.nextToken();
                    else if (this.matchKeyword("var")) {
                      (r = this.createNode()), this.nextToken();
                      var h = this.context.allowIn;
                      this.context.allowIn = !1;
                      var p = this.parseVariableDeclarationList({ inFor: !0 });
                      if (
                        ((this.context.allowIn = h),
                        1 === p.length && this.matchKeyword("in"))
                      ) {
                        var f = p[0];
                        f.init &&
                          (f.id.type === u.Syntax.ArrayPattern ||
                            f.id.type === u.Syntax.ObjectPattern ||
                            this.context.strict) &&
                          this.tolerateError(
                            s.Messages.ForInOfLoopInitializer,
                            "for-in"
                          ),
                          (r = this.finalize(
                            r,
                            new a.VariableDeclaration(p, "var")
                          )),
                          this.nextToken(),
                          (t = r),
                          (e = this.parseExpression()),
                          (r = null);
                      } else
                        1 === p.length &&
                        null === p[0].init &&
                        this.matchContextualKeyword("of")
                          ? ((r = this.finalize(
                              r,
                              new a.VariableDeclaration(p, "var")
                            )),
                            this.nextToken(),
                            (t = r),
                            (e = this.parseAssignmentExpression()),
                            (r = null),
                            (c = !1))
                          : ((r = this.finalize(
                              r,
                              new a.VariableDeclaration(p, "var")
                            )),
                            this.expect(";"));
                    } else if (
                      this.matchKeyword("const") ||
                      this.matchKeyword("let")
                    ) {
                      r = this.createNode();
                      var d = this.nextToken().value;
                      if (
                        this.context.strict ||
                        "in" !== this.lookahead.value
                      ) {
                        h = this.context.allowIn;
                        this.context.allowIn = !1;
                        p = this.parseBindingList(d, { inFor: !0 });
                        (this.context.allowIn = h),
                          1 === p.length &&
                          null === p[0].init &&
                          this.matchKeyword("in")
                            ? ((r = this.finalize(
                                r,
                                new a.VariableDeclaration(p, d)
                              )),
                              this.nextToken(),
                              (t = r),
                              (e = this.parseExpression()),
                              (r = null))
                            : 1 === p.length &&
                              null === p[0].init &&
                              this.matchContextualKeyword("of")
                            ? ((r = this.finalize(
                                r,
                                new a.VariableDeclaration(p, d)
                              )),
                              this.nextToken(),
                              (t = r),
                              (e = this.parseAssignmentExpression()),
                              (r = null),
                              (c = !1))
                            : (this.consumeSemicolon(),
                              (r = this.finalize(
                                r,
                                new a.VariableDeclaration(p, d)
                              )));
                      } else
                        (r = this.finalize(r, new a.Identifier(d))),
                          this.nextToken(),
                          (t = r),
                          (e = this.parseExpression()),
                          (r = null);
                    } else {
                      var m = this.lookahead;
                      h = this.context.allowIn;
                      if (
                        ((this.context.allowIn = !1),
                        (r = this.inheritCoverGrammar(
                          this.parseAssignmentExpression
                        )),
                        (this.context.allowIn = h),
                        this.matchKeyword("in"))
                      )
                        (this.context.isAssignmentTarget &&
                          r.type !== u.Syntax.AssignmentExpression) ||
                          this.tolerateError(s.Messages.InvalidLHSInForIn),
                          this.nextToken(),
                          this.reinterpretExpressionAsPattern(r),
                          (t = r),
                          (e = this.parseExpression()),
                          (r = null);
                      else if (this.matchContextualKeyword("of"))
                        (this.context.isAssignmentTarget &&
                          r.type !== u.Syntax.AssignmentExpression) ||
                          this.tolerateError(s.Messages.InvalidLHSInForLoop),
                          this.nextToken(),
                          this.reinterpretExpressionAsPattern(r),
                          (t = r),
                          (e = this.parseAssignmentExpression()),
                          (r = null),
                          (c = !1);
                      else {
                        if (this.match(",")) {
                          for (var v = [r]; this.match(","); )
                            this.nextToken(),
                              v.push(
                                this.isolateCoverGrammar(
                                  this.parseAssignmentExpression
                                )
                              );
                          r = this.finalize(
                            this.startNode(m),
                            new a.SequenceExpression(v)
                          );
                        }
                        this.expect(";");
                      }
                    }
                    if (
                      (void 0 === t &&
                        (this.match(";") || (i = this.parseExpression()),
                        this.expect(";"),
                        this.match(")") || (o = this.parseExpression())),
                      !this.match(")") && this.config.tolerant)
                    )
                      this.tolerateUnexpectedToken(this.nextToken()),
                        (n = this.finalize(
                          this.createNode(),
                          new a.EmptyStatement()
                        ));
                    else {
                      this.expect(")");
                      var y = this.context.inIteration;
                      (this.context.inIteration = !0),
                        (n = this.isolateCoverGrammar(this.parseStatement)),
                        (this.context.inIteration = y);
                    }
                    return void 0 === t
                      ? this.finalize(l, new a.ForStatement(r, i, o, n))
                      : c
                      ? this.finalize(l, new a.ForInStatement(t, e, n))
                      : this.finalize(l, new a.ForOfStatement(t, e, n));
                  }),
                  (t.prototype.parseContinueStatement = function () {
                    var t = this.createNode();
                    this.expectKeyword("continue");
                    var e = null;
                    if (3 === this.lookahead.type && !this.hasLineTerminator) {
                      var n = this.parseVariableIdentifier();
                      e = n;
                      var r = "$" + n.name;
                      Object.prototype.hasOwnProperty.call(
                        this.context.labelSet,
                        r
                      ) || this.throwError(s.Messages.UnknownLabel, n.name);
                    }
                    return (
                      this.consumeSemicolon(),
                      null !== e ||
                        this.context.inIteration ||
                        this.throwError(s.Messages.IllegalContinue),
                      this.finalize(t, new a.ContinueStatement(e))
                    );
                  }),
                  (t.prototype.parseBreakStatement = function () {
                    var t = this.createNode();
                    this.expectKeyword("break");
                    var e = null;
                    if (3 === this.lookahead.type && !this.hasLineTerminator) {
                      var n = this.parseVariableIdentifier(),
                        r = "$" + n.name;
                      Object.prototype.hasOwnProperty.call(
                        this.context.labelSet,
                        r
                      ) || this.throwError(s.Messages.UnknownLabel, n.name),
                        (e = n);
                    }
                    return (
                      this.consumeSemicolon(),
                      null !== e ||
                        this.context.inIteration ||
                        this.context.inSwitch ||
                        this.throwError(s.Messages.IllegalBreak),
                      this.finalize(t, new a.BreakStatement(e))
                    );
                  }),
                  (t.prototype.parseReturnStatement = function () {
                    this.context.inFunctionBody ||
                      this.tolerateError(s.Messages.IllegalReturn);
                    var t = this.createNode();
                    this.expectKeyword("return");
                    var e =
                      (!this.match(";") &&
                        !this.match("}") &&
                        !this.hasLineTerminator &&
                        2 !== this.lookahead.type) ||
                      8 === this.lookahead.type ||
                      10 === this.lookahead.type
                        ? this.parseExpression()
                        : null;
                    return (
                      this.consumeSemicolon(),
                      this.finalize(t, new a.ReturnStatement(e))
                    );
                  }),
                  (t.prototype.parseWithStatement = function () {
                    this.context.strict &&
                      this.tolerateError(s.Messages.StrictModeWith);
                    var t,
                      e = this.createNode();
                    this.expectKeyword("with"), this.expect("(");
                    var n = this.parseExpression();
                    return (
                      !this.match(")") && this.config.tolerant
                        ? (this.tolerateUnexpectedToken(this.nextToken()),
                          (t = this.finalize(
                            this.createNode(),
                            new a.EmptyStatement()
                          )))
                        : (this.expect(")"), (t = this.parseStatement())),
                      this.finalize(e, new a.WithStatement(n, t))
                    );
                  }),
                  (t.prototype.parseSwitchCase = function () {
                    var t,
                      e = this.createNode();
                    this.matchKeyword("default")
                      ? (this.nextToken(), (t = null))
                      : (this.expectKeyword("case"),
                        (t = this.parseExpression())),
                      this.expect(":");
                    for (
                      var n = [];
                      !(
                        this.match("}") ||
                        this.matchKeyword("default") ||
                        this.matchKeyword("case")
                      );

                    )
                      n.push(this.parseStatementListItem());
                    return this.finalize(e, new a.SwitchCase(t, n));
                  }),
                  (t.prototype.parseSwitchStatement = function () {
                    var t = this.createNode();
                    this.expectKeyword("switch"), this.expect("(");
                    var e = this.parseExpression();
                    this.expect(")");
                    var n = this.context.inSwitch;
                    this.context.inSwitch = !0;
                    var r = [],
                      i = !1;
                    for (this.expect("{"); !this.match("}"); ) {
                      var o = this.parseSwitchCase();
                      null === o.test &&
                        (i &&
                          this.throwError(s.Messages.MultipleDefaultsInSwitch),
                        (i = !0)),
                        r.push(o);
                    }
                    return (
                      this.expect("}"),
                      (this.context.inSwitch = n),
                      this.finalize(t, new a.SwitchStatement(e, r))
                    );
                  }),
                  (t.prototype.parseLabelledStatement = function () {
                    var t,
                      e = this.createNode(),
                      n = this.parseExpression();
                    if (n.type === u.Syntax.Identifier && this.match(":")) {
                      this.nextToken();
                      var r = n,
                        i = "$" + r.name;
                      Object.prototype.hasOwnProperty.call(
                        this.context.labelSet,
                        i
                      ) &&
                        this.throwError(
                          s.Messages.Redeclaration,
                          "Label",
                          r.name
                        ),
                        (this.context.labelSet[i] = !0);
                      var o = void 0;
                      if (this.matchKeyword("class"))
                        this.tolerateUnexpectedToken(this.lookahead),
                          (o = this.parseClassDeclaration());
                      else if (this.matchKeyword("function")) {
                        var c = this.lookahead,
                          l = this.parseFunctionDeclaration();
                        this.context.strict
                          ? this.tolerateUnexpectedToken(
                              c,
                              s.Messages.StrictFunction
                            )
                          : l.generator &&
                            this.tolerateUnexpectedToken(
                              c,
                              s.Messages.GeneratorInLegacyContext
                            ),
                          (o = l);
                      } else o = this.parseStatement();
                      delete this.context.labelSet[i],
                        (t = new a.LabeledStatement(r, o));
                    } else
                      this.consumeSemicolon(),
                        (t = new a.ExpressionStatement(n));
                    return this.finalize(e, t);
                  }),
                  (t.prototype.parseThrowStatement = function () {
                    var t = this.createNode();
                    this.expectKeyword("throw"),
                      this.hasLineTerminator &&
                        this.throwError(s.Messages.NewlineAfterThrow);
                    var e = this.parseExpression();
                    return (
                      this.consumeSemicolon(),
                      this.finalize(t, new a.ThrowStatement(e))
                    );
                  }),
                  (t.prototype.parseCatchClause = function () {
                    var t = this.createNode();
                    this.expectKeyword("catch"),
                      this.expect("("),
                      this.match(")") &&
                        this.throwUnexpectedToken(this.lookahead);
                    for (
                      var e = [], n = this.parsePattern(e), r = {}, i = 0;
                      i < e.length;
                      i++
                    ) {
                      var o = "$" + e[i].value;
                      Object.prototype.hasOwnProperty.call(r, o) &&
                        this.tolerateError(
                          s.Messages.DuplicateBinding,
                          e[i].value
                        ),
                        (r[o] = !0);
                    }
                    this.context.strict &&
                      n.type === u.Syntax.Identifier &&
                      this.scanner.isRestrictedWord(n.name) &&
                      this.tolerateError(s.Messages.StrictCatchVariable),
                      this.expect(")");
                    var c = this.parseBlock();
                    return this.finalize(t, new a.CatchClause(n, c));
                  }),
                  (t.prototype.parseFinallyClause = function () {
                    return this.expectKeyword("finally"), this.parseBlock();
                  }),
                  (t.prototype.parseTryStatement = function () {
                    var t = this.createNode();
                    this.expectKeyword("try");
                    var e = this.parseBlock(),
                      n = this.matchKeyword("catch")
                        ? this.parseCatchClause()
                        : null,
                      r = this.matchKeyword("finally")
                        ? this.parseFinallyClause()
                        : null;
                    return (
                      n || r || this.throwError(s.Messages.NoCatchOrFinally),
                      this.finalize(t, new a.TryStatement(e, n, r))
                    );
                  }),
                  (t.prototype.parseDebuggerStatement = function () {
                    var t = this.createNode();
                    return (
                      this.expectKeyword("debugger"),
                      this.consumeSemicolon(),
                      this.finalize(t, new a.DebuggerStatement())
                    );
                  }),
                  (t.prototype.parseStatement = function () {
                    var t;
                    switch (this.lookahead.type) {
                      case 1:
                      case 5:
                      case 6:
                      case 8:
                      case 10:
                      case 9:
                        t = this.parseExpressionStatement();
                        break;
                      case 7:
                        var e = this.lookahead.value;
                        t =
                          "{" === e
                            ? this.parseBlock()
                            : "(" === e
                            ? this.parseExpressionStatement()
                            : ";" === e
                            ? this.parseEmptyStatement()
                            : this.parseExpressionStatement();
                        break;
                      case 3:
                        t = this.matchAsyncFunction()
                          ? this.parseFunctionDeclaration()
                          : this.parseLabelledStatement();
                        break;
                      case 4:
                        switch (this.lookahead.value) {
                          case "break":
                            t = this.parseBreakStatement();
                            break;
                          case "continue":
                            t = this.parseContinueStatement();
                            break;
                          case "debugger":
                            t = this.parseDebuggerStatement();
                            break;
                          case "do":
                            t = this.parseDoWhileStatement();
                            break;
                          case "for":
                            t = this.parseForStatement();
                            break;
                          case "function":
                            t = this.parseFunctionDeclaration();
                            break;
                          case "if":
                            t = this.parseIfStatement();
                            break;
                          case "return":
                            t = this.parseReturnStatement();
                            break;
                          case "switch":
                            t = this.parseSwitchStatement();
                            break;
                          case "throw":
                            t = this.parseThrowStatement();
                            break;
                          case "try":
                            t = this.parseTryStatement();
                            break;
                          case "var":
                            t = this.parseVariableStatement();
                            break;
                          case "while":
                            t = this.parseWhileStatement();
                            break;
                          case "with":
                            t = this.parseWithStatement();
                            break;
                          default:
                            t = this.parseExpressionStatement();
                        }
                        break;
                      default:
                        t = this.throwUnexpectedToken(this.lookahead);
                    }
                    return t;
                  }),
                  (t.prototype.parseFunctionSourceElements = function () {
                    var t = this.createNode();
                    this.expect("{");
                    var e = this.parseDirectivePrologues(),
                      n = this.context.labelSet,
                      r = this.context.inIteration,
                      i = this.context.inSwitch,
                      s = this.context.inFunctionBody;
                    for (
                      this.context.labelSet = {},
                        this.context.inIteration = !1,
                        this.context.inSwitch = !1,
                        this.context.inFunctionBody = !0;
                      2 !== this.lookahead.type && !this.match("}");

                    )
                      e.push(this.parseStatementListItem());
                    return (
                      this.expect("}"),
                      (this.context.labelSet = n),
                      (this.context.inIteration = r),
                      (this.context.inSwitch = i),
                      (this.context.inFunctionBody = s),
                      this.finalize(t, new a.BlockStatement(e))
                    );
                  }),
                  (t.prototype.validateParam = function (t, e, n) {
                    var r = "$" + n;
                    this.context.strict
                      ? (this.scanner.isRestrictedWord(n) &&
                          ((t.stricted = e),
                          (t.message = s.Messages.StrictParamName)),
                        Object.prototype.hasOwnProperty.call(t.paramSet, r) &&
                          ((t.stricted = e),
                          (t.message = s.Messages.StrictParamDupe)))
                      : t.firstRestricted ||
                        (this.scanner.isRestrictedWord(n)
                          ? ((t.firstRestricted = e),
                            (t.message = s.Messages.StrictParamName))
                          : this.scanner.isStrictModeReservedWord(n)
                          ? ((t.firstRestricted = e),
                            (t.message = s.Messages.StrictReservedWord))
                          : Object.prototype.hasOwnProperty.call(
                              t.paramSet,
                              r
                            ) &&
                            ((t.stricted = e),
                            (t.message = s.Messages.StrictParamDupe))),
                      "function" == typeof Object.defineProperty
                        ? Object.defineProperty(t.paramSet, r, {
                            value: !0,
                            enumerable: !0,
                            writable: !0,
                            configurable: !0,
                          })
                        : (t.paramSet[r] = !0);
                  }),
                  (t.prototype.parseRestElement = function (t) {
                    var e = this.createNode();
                    this.expect("...");
                    var n = this.parsePattern(t);
                    return (
                      this.match("=") &&
                        this.throwError(s.Messages.DefaultRestParameter),
                      this.match(")") ||
                        this.throwError(s.Messages.ParameterAfterRestParameter),
                      this.finalize(e, new a.RestElement(n))
                    );
                  }),
                  (t.prototype.parseFormalParameter = function (t) {
                    for (
                      var e = [],
                        n = this.match("...")
                          ? this.parseRestElement(e)
                          : this.parsePatternWithDefault(e),
                        r = 0;
                      r < e.length;
                      r++
                    )
                      this.validateParam(t, e[r], e[r].value);
                    (t.simple = t.simple && n instanceof a.Identifier),
                      t.params.push(n);
                  }),
                  (t.prototype.parseFormalParameters = function (t) {
                    var e;
                    if (
                      ((e = { simple: !0, params: [], firstRestricted: t }),
                      this.expect("("),
                      !this.match(")"))
                    )
                      for (
                        e.paramSet = {};
                        2 !== this.lookahead.type &&
                        (this.parseFormalParameter(e), !this.match(")")) &&
                        (this.expect(","), !this.match(")"));

                      );
                    return (
                      this.expect(")"),
                      {
                        simple: e.simple,
                        params: e.params,
                        stricted: e.stricted,
                        firstRestricted: e.firstRestricted,
                        message: e.message,
                      }
                    );
                  }),
                  (t.prototype.matchAsyncFunction = function () {
                    var t = this.matchContextualKeyword("async");
                    if (t) {
                      var e = this.scanner.saveState();
                      this.scanner.scanComments();
                      var n = this.scanner.lex();
                      this.scanner.restoreState(e),
                        (t =
                          e.lineNumber === n.lineNumber &&
                          4 === n.type &&
                          "function" === n.value);
                    }
                    return t;
                  }),
                  (t.prototype.parseFunctionDeclaration = function (t) {
                    var e = this.createNode(),
                      n = this.matchContextualKeyword("async");
                    n && this.nextToken(), this.expectKeyword("function");
                    var r,
                      i = !n && this.match("*");
                    i && this.nextToken();
                    var o = null,
                      u = null;
                    if (!t || !this.match("(")) {
                      var c = this.lookahead;
                      (o = this.parseVariableIdentifier()),
                        this.context.strict
                          ? this.scanner.isRestrictedWord(c.value) &&
                            this.tolerateUnexpectedToken(
                              c,
                              s.Messages.StrictFunctionName
                            )
                          : this.scanner.isRestrictedWord(c.value)
                          ? ((u = c), (r = s.Messages.StrictFunctionName))
                          : this.scanner.isStrictModeReservedWord(c.value) &&
                            ((u = c), (r = s.Messages.StrictReservedWord));
                    }
                    var l = this.context.await,
                      h = this.context.allowYield;
                    (this.context.await = n), (this.context.allowYield = !i);
                    var p = this.parseFormalParameters(u),
                      f = p.params,
                      d = p.stricted;
                    (u = p.firstRestricted), p.message && (r = p.message);
                    var m = this.context.strict,
                      v = this.context.allowStrictDirective;
                    this.context.allowStrictDirective = p.simple;
                    var y = this.parseFunctionSourceElements();
                    return (
                      this.context.strict &&
                        u &&
                        this.throwUnexpectedToken(u, r),
                      this.context.strict &&
                        d &&
                        this.tolerateUnexpectedToken(d, r),
                      (this.context.strict = m),
                      (this.context.allowStrictDirective = v),
                      (this.context.await = l),
                      (this.context.allowYield = h),
                      n
                        ? this.finalize(
                            e,
                            new a.AsyncFunctionDeclaration(o, f, y)
                          )
                        : this.finalize(
                            e,
                            new a.FunctionDeclaration(o, f, y, i)
                          )
                    );
                  }),
                  (t.prototype.parseFunctionExpression = function () {
                    var t = this.createNode(),
                      e = this.matchContextualKeyword("async");
                    e && this.nextToken(), this.expectKeyword("function");
                    var n,
                      r = !e && this.match("*");
                    r && this.nextToken();
                    var i,
                      o = null,
                      u = this.context.await,
                      c = this.context.allowYield;
                    if (
                      ((this.context.await = e),
                      (this.context.allowYield = !r),
                      !this.match("("))
                    ) {
                      var l = this.lookahead;
                      (o =
                        this.context.strict || r || !this.matchKeyword("yield")
                          ? this.parseVariableIdentifier()
                          : this.parseIdentifierName()),
                        this.context.strict
                          ? this.scanner.isRestrictedWord(l.value) &&
                            this.tolerateUnexpectedToken(
                              l,
                              s.Messages.StrictFunctionName
                            )
                          : this.scanner.isRestrictedWord(l.value)
                          ? ((i = l), (n = s.Messages.StrictFunctionName))
                          : this.scanner.isStrictModeReservedWord(l.value) &&
                            ((i = l), (n = s.Messages.StrictReservedWord));
                    }
                    var h = this.parseFormalParameters(i),
                      p = h.params,
                      f = h.stricted;
                    (i = h.firstRestricted), h.message && (n = h.message);
                    var d = this.context.strict,
                      m = this.context.allowStrictDirective;
                    this.context.allowStrictDirective = h.simple;
                    var v = this.parseFunctionSourceElements();
                    return (
                      this.context.strict &&
                        i &&
                        this.throwUnexpectedToken(i, n),
                      this.context.strict &&
                        f &&
                        this.tolerateUnexpectedToken(f, n),
                      (this.context.strict = d),
                      (this.context.allowStrictDirective = m),
                      (this.context.await = u),
                      (this.context.allowYield = c),
                      e
                        ? this.finalize(
                            t,
                            new a.AsyncFunctionExpression(o, p, v)
                          )
                        : this.finalize(t, new a.FunctionExpression(o, p, v, r))
                    );
                  }),
                  (t.prototype.parseDirective = function () {
                    var t = this.lookahead,
                      e = this.createNode(),
                      n = this.parseExpression(),
                      r =
                        n.type === u.Syntax.Literal
                          ? this.getTokenRaw(t).slice(1, -1)
                          : null;
                    return (
                      this.consumeSemicolon(),
                      this.finalize(
                        e,
                        r ? new a.Directive(n, r) : new a.ExpressionStatement(n)
                      )
                    );
                  }),
                  (t.prototype.parseDirectivePrologues = function () {
                    for (var t = null, e = []; ; ) {
                      var n = this.lookahead;
                      if (8 !== n.type) break;
                      var r = this.parseDirective();
                      e.push(r);
                      var i = r.directive;
                      if ("string" != typeof i) break;
                      "use strict" === i
                        ? ((this.context.strict = !0),
                          t &&
                            this.tolerateUnexpectedToken(
                              t,
                              s.Messages.StrictOctalLiteral
                            ),
                          this.context.allowStrictDirective ||
                            this.tolerateUnexpectedToken(
                              n,
                              s.Messages.IllegalLanguageModeDirective
                            ))
                        : !t && n.octal && (t = n);
                    }
                    return e;
                  }),
                  (t.prototype.qualifiedPropertyName = function (t) {
                    switch (t.type) {
                      case 3:
                      case 8:
                      case 1:
                      case 5:
                      case 6:
                      case 4:
                        return !0;
                      case 7:
                        return "[" === t.value;
                    }
                    return !1;
                  }),
                  (t.prototype.parseGetterMethod = function () {
                    var t = this.createNode(),
                      e = this.context.allowYield;
                    this.context.allowYield = !0;
                    var n = this.parseFormalParameters();
                    n.params.length > 0 &&
                      this.tolerateError(s.Messages.BadGetterArity);
                    var r = this.parsePropertyMethod(n);
                    return (
                      (this.context.allowYield = e),
                      this.finalize(
                        t,
                        new a.FunctionExpression(null, n.params, r, !1)
                      )
                    );
                  }),
                  (t.prototype.parseSetterMethod = function () {
                    var t = this.createNode(),
                      e = this.context.allowYield;
                    this.context.allowYield = !0;
                    var n = this.parseFormalParameters();
                    1 !== n.params.length
                      ? this.tolerateError(s.Messages.BadSetterArity)
                      : n.params[0] instanceof a.RestElement &&
                        this.tolerateError(s.Messages.BadSetterRestParameter);
                    var r = this.parsePropertyMethod(n);
                    return (
                      (this.context.allowYield = e),
                      this.finalize(
                        t,
                        new a.FunctionExpression(null, n.params, r, !1)
                      )
                    );
                  }),
                  (t.prototype.parseGeneratorMethod = function () {
                    var t = this.createNode(),
                      e = this.context.allowYield;
                    this.context.allowYield = !0;
                    var n = this.parseFormalParameters();
                    this.context.allowYield = !1;
                    var r = this.parsePropertyMethod(n);
                    return (
                      (this.context.allowYield = e),
                      this.finalize(
                        t,
                        new a.FunctionExpression(null, n.params, r, !0)
                      )
                    );
                  }),
                  (t.prototype.isStartOfExpression = function () {
                    var t = !0,
                      e = this.lookahead.value;
                    switch (this.lookahead.type) {
                      case 7:
                        t =
                          "[" === e ||
                          "(" === e ||
                          "{" === e ||
                          "+" === e ||
                          "-" === e ||
                          "!" === e ||
                          "~" === e ||
                          "++" === e ||
                          "--" === e ||
                          "/" === e ||
                          "/=" === e;
                        break;
                      case 4:
                        t =
                          "class" === e ||
                          "delete" === e ||
                          "function" === e ||
                          "let" === e ||
                          "new" === e ||
                          "super" === e ||
                          "this" === e ||
                          "typeof" === e ||
                          "void" === e ||
                          "yield" === e;
                    }
                    return t;
                  }),
                  (t.prototype.parseYieldExpression = function () {
                    var t = this.createNode();
                    this.expectKeyword("yield");
                    var e = null,
                      n = !1;
                    if (!this.hasLineTerminator) {
                      var r = this.context.allowYield;
                      (this.context.allowYield = !1),
                        (n = this.match("*"))
                          ? (this.nextToken(),
                            (e = this.parseAssignmentExpression()))
                          : this.isStartOfExpression() &&
                            (e = this.parseAssignmentExpression()),
                        (this.context.allowYield = r);
                    }
                    return this.finalize(t, new a.YieldExpression(e, n));
                  }),
                  (t.prototype.parseClassElement = function (t) {
                    var e = this.lookahead,
                      n = this.createNode(),
                      r = "",
                      i = null,
                      o = null,
                      u = !1,
                      c = !1,
                      l = !1,
                      h = !1;
                    if (this.match("*")) this.nextToken();
                    else if (
                      ((u = this.match("[")),
                      "static" === (i = this.parseObjectPropertyKey()).name &&
                        (this.qualifiedPropertyName(this.lookahead) ||
                          this.match("*")) &&
                        ((e = this.lookahead),
                        (l = !0),
                        (u = this.match("[")),
                        this.match("*")
                          ? this.nextToken()
                          : (i = this.parseObjectPropertyKey())),
                      3 === e.type &&
                        !this.hasLineTerminator &&
                        "async" === e.value)
                    ) {
                      var p = this.lookahead.value;
                      ":" !== p &&
                        "(" !== p &&
                        "*" !== p &&
                        ((h = !0),
                        (e = this.lookahead),
                        (i = this.parseObjectPropertyKey()),
                        3 === e.type &&
                          "constructor" === e.value &&
                          this.tolerateUnexpectedToken(
                            e,
                            s.Messages.ConstructorIsAsync
                          ));
                    }
                    var f = this.qualifiedPropertyName(this.lookahead);
                    return (
                      3 === e.type
                        ? "get" === e.value && f
                          ? ((r = "get"),
                            (u = this.match("[")),
                            (i = this.parseObjectPropertyKey()),
                            (this.context.allowYield = !1),
                            (o = this.parseGetterMethod()))
                          : "set" === e.value &&
                            f &&
                            ((r = "set"),
                            (u = this.match("[")),
                            (i = this.parseObjectPropertyKey()),
                            (o = this.parseSetterMethod()))
                        : 7 === e.type &&
                          "*" === e.value &&
                          f &&
                          ((r = "init"),
                          (u = this.match("[")),
                          (i = this.parseObjectPropertyKey()),
                          (o = this.parseGeneratorMethod()),
                          (c = !0)),
                      !r &&
                        i &&
                        this.match("(") &&
                        ((r = "init"),
                        (o = h
                          ? this.parsePropertyMethodAsyncFunction()
                          : this.parsePropertyMethodFunction()),
                        (c = !0)),
                      r || this.throwUnexpectedToken(this.lookahead),
                      "init" === r && (r = "method"),
                      u ||
                        (l &&
                          this.isPropertyKey(i, "prototype") &&
                          this.throwUnexpectedToken(
                            e,
                            s.Messages.StaticPrototype
                          ),
                        !l &&
                          this.isPropertyKey(i, "constructor") &&
                          (("method" !== r || !c || (o && o.generator)) &&
                            this.throwUnexpectedToken(
                              e,
                              s.Messages.ConstructorSpecialMethod
                            ),
                          t.value
                            ? this.throwUnexpectedToken(
                                e,
                                s.Messages.DuplicateConstructor
                              )
                            : (t.value = !0),
                          (r = "constructor"))),
                      this.finalize(n, new a.MethodDefinition(i, u, o, r, l))
                    );
                  }),
                  (t.prototype.parseClassElementList = function () {
                    var t = [],
                      e = { value: !1 };
                    for (this.expect("{"); !this.match("}"); )
                      this.match(";")
                        ? this.nextToken()
                        : t.push(this.parseClassElement(e));
                    return this.expect("}"), t;
                  }),
                  (t.prototype.parseClassBody = function () {
                    var t = this.createNode(),
                      e = this.parseClassElementList();
                    return this.finalize(t, new a.ClassBody(e));
                  }),
                  (t.prototype.parseClassDeclaration = function (t) {
                    var e = this.createNode(),
                      n = this.context.strict;
                    (this.context.strict = !0), this.expectKeyword("class");
                    var r =
                        t && 3 !== this.lookahead.type
                          ? null
                          : this.parseVariableIdentifier(),
                      i = null;
                    this.matchKeyword("extends") &&
                      (this.nextToken(),
                      (i = this.isolateCoverGrammar(
                        this.parseLeftHandSideExpressionAllowCall
                      )));
                    var s = this.parseClassBody();
                    return (
                      (this.context.strict = n),
                      this.finalize(e, new a.ClassDeclaration(r, i, s))
                    );
                  }),
                  (t.prototype.parseClassExpression = function () {
                    var t = this.createNode(),
                      e = this.context.strict;
                    (this.context.strict = !0), this.expectKeyword("class");
                    var n =
                        3 === this.lookahead.type
                          ? this.parseVariableIdentifier()
                          : null,
                      r = null;
                    this.matchKeyword("extends") &&
                      (this.nextToken(),
                      (r = this.isolateCoverGrammar(
                        this.parseLeftHandSideExpressionAllowCall
                      )));
                    var i = this.parseClassBody();
                    return (
                      (this.context.strict = e),
                      this.finalize(t, new a.ClassExpression(n, r, i))
                    );
                  }),
                  (t.prototype.parseModule = function () {
                    (this.context.strict = !0),
                      (this.context.isModule = !0),
                      (this.scanner.isModule = !0);
                    for (
                      var t = this.createNode(),
                        e = this.parseDirectivePrologues();
                      2 !== this.lookahead.type;

                    )
                      e.push(this.parseStatementListItem());
                    return this.finalize(t, new a.Module(e));
                  }),
                  (t.prototype.parseScript = function () {
                    for (
                      var t = this.createNode(),
                        e = this.parseDirectivePrologues();
                      2 !== this.lookahead.type;

                    )
                      e.push(this.parseStatementListItem());
                    return this.finalize(t, new a.Script(e));
                  }),
                  (t.prototype.parseModuleSpecifier = function () {
                    var t = this.createNode();
                    8 !== this.lookahead.type &&
                      this.throwError(s.Messages.InvalidModuleSpecifier);
                    var e = this.nextToken(),
                      n = this.getTokenRaw(e);
                    return this.finalize(t, new a.Literal(e.value, n));
                  }),
                  (t.prototype.parseImportSpecifier = function () {
                    var t,
                      e,
                      n = this.createNode();
                    return (
                      3 === this.lookahead.type
                        ? ((e = t = this.parseVariableIdentifier()),
                          this.matchContextualKeyword("as") &&
                            (this.nextToken(),
                            (e = this.parseVariableIdentifier())))
                        : ((e = t = this.parseIdentifierName()),
                          this.matchContextualKeyword("as")
                            ? (this.nextToken(),
                              (e = this.parseVariableIdentifier()))
                            : this.throwUnexpectedToken(this.nextToken())),
                      this.finalize(n, new a.ImportSpecifier(e, t))
                    );
                  }),
                  (t.prototype.parseNamedImports = function () {
                    this.expect("{");
                    for (var t = []; !this.match("}"); )
                      t.push(this.parseImportSpecifier()),
                        this.match("}") || this.expect(",");
                    return this.expect("}"), t;
                  }),
                  (t.prototype.parseImportDefaultSpecifier = function () {
                    var t = this.createNode(),
                      e = this.parseIdentifierName();
                    return this.finalize(t, new a.ImportDefaultSpecifier(e));
                  }),
                  (t.prototype.parseImportNamespaceSpecifier = function () {
                    var t = this.createNode();
                    this.expect("*"),
                      this.matchContextualKeyword("as") ||
                        this.throwError(s.Messages.NoAsAfterImportNamespace),
                      this.nextToken();
                    var e = this.parseIdentifierName();
                    return this.finalize(t, new a.ImportNamespaceSpecifier(e));
                  }),
                  (t.prototype.parseImportDeclaration = function () {
                    this.context.inFunctionBody &&
                      this.throwError(s.Messages.IllegalImportDeclaration);
                    var t,
                      e = this.createNode();
                    this.expectKeyword("import");
                    var n = [];
                    if (8 === this.lookahead.type)
                      t = this.parseModuleSpecifier();
                    else {
                      if (
                        (this.match("{")
                          ? (n = n.concat(this.parseNamedImports()))
                          : this.match("*")
                          ? n.push(this.parseImportNamespaceSpecifier())
                          : this.isIdentifierName(this.lookahead) &&
                            !this.matchKeyword("default")
                          ? (n.push(this.parseImportDefaultSpecifier()),
                            this.match(",") &&
                              (this.nextToken(),
                              this.match("*")
                                ? n.push(this.parseImportNamespaceSpecifier())
                                : this.match("{")
                                ? (n = n.concat(this.parseNamedImports()))
                                : this.throwUnexpectedToken(this.lookahead)))
                          : this.throwUnexpectedToken(this.nextToken()),
                        !this.matchContextualKeyword("from"))
                      ) {
                        var r = this.lookahead.value
                          ? s.Messages.UnexpectedToken
                          : s.Messages.MissingFromClause;
                        this.throwError(r, this.lookahead.value);
                      }
                      this.nextToken(), (t = this.parseModuleSpecifier());
                    }
                    return (
                      this.consumeSemicolon(),
                      this.finalize(e, new a.ImportDeclaration(n, t))
                    );
                  }),
                  (t.prototype.parseExportSpecifier = function () {
                    var t = this.createNode(),
                      e = this.parseIdentifierName(),
                      n = e;
                    return (
                      this.matchContextualKeyword("as") &&
                        (this.nextToken(), (n = this.parseIdentifierName())),
                      this.finalize(t, new a.ExportSpecifier(e, n))
                    );
                  }),
                  (t.prototype.parseExportDeclaration = function () {
                    this.context.inFunctionBody &&
                      this.throwError(s.Messages.IllegalExportDeclaration);
                    var t,
                      e = this.createNode();
                    if (
                      (this.expectKeyword("export"),
                      this.matchKeyword("default"))
                    )
                      if ((this.nextToken(), this.matchKeyword("function"))) {
                        var n = this.parseFunctionDeclaration(!0);
                        t = this.finalize(e, new a.ExportDefaultDeclaration(n));
                      } else if (this.matchKeyword("class")) {
                        n = this.parseClassDeclaration(!0);
                        t = this.finalize(e, new a.ExportDefaultDeclaration(n));
                      } else if (this.matchContextualKeyword("async")) {
                        n = this.matchAsyncFunction()
                          ? this.parseFunctionDeclaration(!0)
                          : this.parseAssignmentExpression();
                        t = this.finalize(e, new a.ExportDefaultDeclaration(n));
                      } else {
                        this.matchContextualKeyword("from") &&
                          this.throwError(
                            s.Messages.UnexpectedToken,
                            this.lookahead.value
                          );
                        n = this.match("{")
                          ? this.parseObjectInitializer()
                          : this.match("[")
                          ? this.parseArrayInitializer()
                          : this.parseAssignmentExpression();
                        this.consumeSemicolon(),
                          (t = this.finalize(
                            e,
                            new a.ExportDefaultDeclaration(n)
                          ));
                      }
                    else if (this.match("*")) {
                      if (
                        (this.nextToken(), !this.matchContextualKeyword("from"))
                      ) {
                        var r = this.lookahead.value
                          ? s.Messages.UnexpectedToken
                          : s.Messages.MissingFromClause;
                        this.throwError(r, this.lookahead.value);
                      }
                      this.nextToken();
                      var i = this.parseModuleSpecifier();
                      this.consumeSemicolon(),
                        (t = this.finalize(e, new a.ExportAllDeclaration(i)));
                    } else if (4 === this.lookahead.type) {
                      n = void 0;
                      switch (this.lookahead.value) {
                        case "let":
                        case "const":
                          n = this.parseLexicalDeclaration({ inFor: !1 });
                          break;
                        case "var":
                        case "class":
                        case "function":
                          n = this.parseStatementListItem();
                          break;
                        default:
                          this.throwUnexpectedToken(this.lookahead);
                      }
                      t = this.finalize(
                        e,
                        new a.ExportNamedDeclaration(n, [], null)
                      );
                    } else if (this.matchAsyncFunction()) {
                      n = this.parseFunctionDeclaration();
                      t = this.finalize(
                        e,
                        new a.ExportNamedDeclaration(n, [], null)
                      );
                    } else {
                      var o = [],
                        u = null,
                        c = !1;
                      for (this.expect("{"); !this.match("}"); )
                        (c = c || this.matchKeyword("default")),
                          o.push(this.parseExportSpecifier()),
                          this.match("}") || this.expect(",");
                      if (
                        (this.expect("}"), this.matchContextualKeyword("from"))
                      )
                        this.nextToken(),
                          (u = this.parseModuleSpecifier()),
                          this.consumeSemicolon();
                      else if (c) {
                        r = this.lookahead.value
                          ? s.Messages.UnexpectedToken
                          : s.Messages.MissingFromClause;
                        this.throwError(r, this.lookahead.value);
                      } else this.consumeSemicolon();
                      t = this.finalize(
                        e,
                        new a.ExportNamedDeclaration(null, o, u)
                      );
                    }
                    return t;
                  }),
                  t
                );
              })();
            e.Parser = l;
          },
          function (t, e) {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 }),
              (e.assert = function (t, e) {
                if (!t) throw new Error("ASSERT: " + e);
              });
          },
          function (t, e) {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 });
            var n = (function () {
              function t() {
                (this.errors = []), (this.tolerant = !1);
              }
              return (
                (t.prototype.recordError = function (t) {
                  this.errors.push(t);
                }),
                (t.prototype.tolerate = function (t) {
                  if (!this.tolerant) throw t;
                  this.recordError(t);
                }),
                (t.prototype.constructError = function (t, e) {
                  var n = new Error(t);
                  try {
                    throw n;
                  } catch (t) {
                    Object.create &&
                      Object.defineProperty &&
                      ((n = Object.create(t)),
                      Object.defineProperty(n, "column", { value: e }));
                  }
                  return n;
                }),
                (t.prototype.createError = function (t, e, n, r) {
                  var i = "Line " + e + ": " + r,
                    s = this.constructError(i, n);
                  return (
                    (s.index = t), (s.lineNumber = e), (s.description = r), s
                  );
                }),
                (t.prototype.throwError = function (t, e, n, r) {
                  throw this.createError(t, e, n, r);
                }),
                (t.prototype.tolerateError = function (t, e, n, r) {
                  var i = this.createError(t, e, n, r);
                  if (!this.tolerant) throw i;
                  this.recordError(i);
                }),
                t
              );
            })();
            e.ErrorHandler = n;
          },
          function (t, e) {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 }),
              (e.Messages = {
                BadGetterArity: "Getter must not have any formal parameters",
                BadSetterArity: "Setter must have exactly one formal parameter",
                BadSetterRestParameter:
                  "Setter function argument must not be a rest parameter",
                ConstructorIsAsync:
                  "Class constructor may not be an async method",
                ConstructorSpecialMethod:
                  "Class constructor may not be an accessor",
                DeclarationMissingInitializer:
                  "Missing initializer in %0 declaration",
                DefaultRestParameter: "Unexpected token =",
                DuplicateBinding: "Duplicate binding %0",
                DuplicateConstructor: "A class may only have one constructor",
                DuplicateProtoProperty:
                  "Duplicate __proto__ fields are not allowed in object literals",
                ForInOfLoopInitializer:
                  "%0 loop variable declaration may not have an initializer",
                GeneratorInLegacyContext:
                  "Generator declarations are not allowed in legacy contexts",
                IllegalBreak: "Illegal break statement",
                IllegalContinue: "Illegal continue statement",
                IllegalExportDeclaration: "Unexpected token",
                IllegalImportDeclaration: "Unexpected token",
                IllegalLanguageModeDirective:
                  "Illegal 'use strict' directive in function with non-simple parameter list",
                IllegalReturn: "Illegal return statement",
                InvalidEscapedReservedWord:
                  "Keyword must not contain escaped characters",
                InvalidHexEscapeSequence: "Invalid hexadecimal escape sequence",
                InvalidLHSInAssignment: "Invalid left-hand side in assignment",
                InvalidLHSInForIn: "Invalid left-hand side in for-in",
                InvalidLHSInForLoop: "Invalid left-hand side in for-loop",
                InvalidModuleSpecifier: "Unexpected token",
                InvalidRegExp: "Invalid regular expression",
                LetInLexicalBinding:
                  "let is disallowed as a lexically bound name",
                MissingFromClause: "Unexpected token",
                MultipleDefaultsInSwitch:
                  "More than one default clause in switch statement",
                NewlineAfterThrow: "Illegal newline after throw",
                NoAsAfterImportNamespace: "Unexpected token",
                NoCatchOrFinally: "Missing catch or finally after try",
                ParameterAfterRestParameter:
                  "Rest parameter must be last formal parameter",
                Redeclaration: "%0 '%1' has already been declared",
                StaticPrototype:
                  "Classes may not have static property named prototype",
                StrictCatchVariable:
                  "Catch variable may not be eval or arguments in strict mode",
                StrictDelete:
                  "Delete of an unqualified identifier in strict mode.",
                StrictFunction:
                  "In strict mode code, functions can only be declared at top level or inside a block",
                StrictFunctionName:
                  "Function name may not be eval or arguments in strict mode",
                StrictLHSAssignment:
                  "Assignment to eval or arguments is not allowed in strict mode",
                StrictLHSPostfix:
                  "Postfix increment/decrement may not have eval or arguments operand in strict mode",
                StrictLHSPrefix:
                  "Prefix increment/decrement may not have eval or arguments operand in strict mode",
                StrictModeWith:
                  "Strict mode code may not include a with statement",
                StrictOctalLiteral:
                  "Octal literals are not allowed in strict mode.",
                StrictParamDupe:
                  "Strict mode function may not have duplicate parameter names",
                StrictParamName:
                  "Parameter name eval or arguments is not allowed in strict mode",
                StrictReservedWord:
                  "Use of future reserved word in strict mode",
                StrictVarName:
                  "Variable name may not be eval or arguments in strict mode",
                TemplateOctalLiteral:
                  "Octal literals are not allowed in template strings.",
                UnexpectedEOS: "Unexpected end of input",
                UnexpectedIdentifier: "Unexpected identifier",
                UnexpectedNumber: "Unexpected number",
                UnexpectedReserved: "Unexpected reserved word",
                UnexpectedString: "Unexpected string",
                UnexpectedTemplate: "Unexpected quasi %0",
                UnexpectedToken: "Unexpected token %0",
                UnexpectedTokenIllegal: "Unexpected token ILLEGAL",
                UnknownLabel: "Undefined label '%0'",
                UnterminatedRegExp: "Invalid regular expression: missing /",
              });
          },
          function (t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 });
            var r = n(9),
              i = n(4),
              s = n(11);
            function a(t) {
              return "0123456789abcdef".indexOf(t.toLowerCase());
            }
            function o(t) {
              return "01234567".indexOf(t);
            }
            var u = (function () {
              function t(t, e) {
                (this.source = t),
                  (this.errorHandler = e),
                  (this.trackComment = !1),
                  (this.isModule = !1),
                  (this.length = t.length),
                  (this.index = 0),
                  (this.lineNumber = t.length > 0 ? 1 : 0),
                  (this.lineStart = 0),
                  (this.curlyStack = []);
              }
              return (
                (t.prototype.saveState = function () {
                  return {
                    index: this.index,
                    lineNumber: this.lineNumber,
                    lineStart: this.lineStart,
                  };
                }),
                (t.prototype.restoreState = function (t) {
                  (this.index = t.index),
                    (this.lineNumber = t.lineNumber),
                    (this.lineStart = t.lineStart);
                }),
                (t.prototype.eof = function () {
                  return this.index >= this.length;
                }),
                (t.prototype.throwUnexpectedToken = function (t) {
                  return (
                    void 0 === t && (t = s.Messages.UnexpectedTokenIllegal),
                    this.errorHandler.throwError(
                      this.index,
                      this.lineNumber,
                      this.index - this.lineStart + 1,
                      t
                    )
                  );
                }),
                (t.prototype.tolerateUnexpectedToken = function (t) {
                  void 0 === t && (t = s.Messages.UnexpectedTokenIllegal),
                    this.errorHandler.tolerateError(
                      this.index,
                      this.lineNumber,
                      this.index - this.lineStart + 1,
                      t
                    );
                }),
                (t.prototype.skipSingleLineComment = function (t) {
                  var e,
                    n,
                    r = [];
                  for (
                    this.trackComment &&
                    ((r = []),
                    (e = this.index - t),
                    (n = {
                      start: {
                        line: this.lineNumber,
                        column: this.index - this.lineStart - t,
                      },
                      end: {},
                    }));
                    !this.eof();

                  ) {
                    var s = this.source.charCodeAt(this.index);
                    if ((++this.index, i.Character.isLineTerminator(s))) {
                      if (this.trackComment) {
                        n.end = {
                          line: this.lineNumber,
                          column: this.index - this.lineStart - 1,
                        };
                        var a = {
                          multiLine: !1,
                          slice: [e + t, this.index - 1],
                          range: [e, this.index - 1],
                          loc: n,
                        };
                        r.push(a);
                      }
                      return (
                        13 === s &&
                          10 === this.source.charCodeAt(this.index) &&
                          ++this.index,
                        ++this.lineNumber,
                        (this.lineStart = this.index),
                        r
                      );
                    }
                  }
                  if (this.trackComment) {
                    n.end = {
                      line: this.lineNumber,
                      column: this.index - this.lineStart,
                    };
                    a = {
                      multiLine: !1,
                      slice: [e + t, this.index],
                      range: [e, this.index],
                      loc: n,
                    };
                    r.push(a);
                  }
                  return r;
                }),
                (t.prototype.skipMultiLineComment = function () {
                  var t,
                    e,
                    n = [];
                  for (
                    this.trackComment &&
                    ((n = []),
                    (t = this.index - 2),
                    (e = {
                      start: {
                        line: this.lineNumber,
                        column: this.index - this.lineStart - 2,
                      },
                      end: {},
                    }));
                    !this.eof();

                  ) {
                    var r = this.source.charCodeAt(this.index);
                    if (i.Character.isLineTerminator(r))
                      13 === r &&
                        10 === this.source.charCodeAt(this.index + 1) &&
                        ++this.index,
                        ++this.lineNumber,
                        ++this.index,
                        (this.lineStart = this.index);
                    else if (42 === r) {
                      if (47 === this.source.charCodeAt(this.index + 1)) {
                        if (((this.index += 2), this.trackComment)) {
                          e.end = {
                            line: this.lineNumber,
                            column: this.index - this.lineStart,
                          };
                          var s = {
                            multiLine: !0,
                            slice: [t + 2, this.index - 2],
                            range: [t, this.index],
                            loc: e,
                          };
                          n.push(s);
                        }
                        return n;
                      }
                      ++this.index;
                    } else ++this.index;
                  }
                  if (this.trackComment) {
                    e.end = {
                      line: this.lineNumber,
                      column: this.index - this.lineStart,
                    };
                    s = {
                      multiLine: !0,
                      slice: [t + 2, this.index],
                      range: [t, this.index],
                      loc: e,
                    };
                    n.push(s);
                  }
                  return this.tolerateUnexpectedToken(), n;
                }),
                (t.prototype.scanComments = function () {
                  var t;
                  this.trackComment && (t = []);
                  for (var e = 0 === this.index; !this.eof(); ) {
                    var n = this.source.charCodeAt(this.index);
                    if (i.Character.isWhiteSpace(n)) ++this.index;
                    else if (i.Character.isLineTerminator(n))
                      ++this.index,
                        13 === n &&
                          10 === this.source.charCodeAt(this.index) &&
                          ++this.index,
                        ++this.lineNumber,
                        (this.lineStart = this.index),
                        (e = !0);
                    else if (47 === n)
                      if (47 === (n = this.source.charCodeAt(this.index + 1))) {
                        this.index += 2;
                        var r = this.skipSingleLineComment(2);
                        this.trackComment && (t = t.concat(r)), (e = !0);
                      } else {
                        if (42 !== n) break;
                        this.index += 2;
                        r = this.skipMultiLineComment();
                        this.trackComment && (t = t.concat(r));
                      }
                    else if (e && 45 === n) {
                      if (
                        45 !== this.source.charCodeAt(this.index + 1) ||
                        62 !== this.source.charCodeAt(this.index + 2)
                      )
                        break;
                      this.index += 3;
                      r = this.skipSingleLineComment(3);
                      this.trackComment && (t = t.concat(r));
                    } else {
                      if (60 !== n || this.isModule) break;
                      if (
                        "!--" !==
                        this.source.slice(this.index + 1, this.index + 4)
                      )
                        break;
                      this.index += 4;
                      r = this.skipSingleLineComment(4);
                      this.trackComment && (t = t.concat(r));
                    }
                  }
                  return t;
                }),
                (t.prototype.isFutureReservedWord = function (t) {
                  switch (t) {
                    case "enum":
                    case "export":
                    case "import":
                    case "super":
                      return !0;
                    default:
                      return !1;
                  }
                }),
                (t.prototype.isStrictModeReservedWord = function (t) {
                  switch (t) {
                    case "implements":
                    case "interface":
                    case "package":
                    case "private":
                    case "protected":
                    case "public":
                    case "static":
                    case "yield":
                    case "let":
                      return !0;
                    default:
                      return !1;
                  }
                }),
                (t.prototype.isRestrictedWord = function (t) {
                  return "eval" === t || "arguments" === t;
                }),
                (t.prototype.isKeyword = function (t) {
                  switch (t.length) {
                    case 2:
                      return "if" === t || "in" === t || "do" === t;
                    case 3:
                      return (
                        "var" === t ||
                        "for" === t ||
                        "new" === t ||
                        "try" === t ||
                        "let" === t
                      );
                    case 4:
                      return (
                        "this" === t ||
                        "else" === t ||
                        "case" === t ||
                        "void" === t ||
                        "with" === t ||
                        "enum" === t
                      );
                    case 5:
                      return (
                        "while" === t ||
                        "break" === t ||
                        "catch" === t ||
                        "throw" === t ||
                        "const" === t ||
                        "yield" === t ||
                        "class" === t ||
                        "super" === t
                      );
                    case 6:
                      return (
                        "return" === t ||
                        "typeof" === t ||
                        "delete" === t ||
                        "switch" === t ||
                        "export" === t ||
                        "import" === t
                      );
                    case 7:
                      return (
                        "default" === t || "finally" === t || "extends" === t
                      );
                    case 8:
                      return (
                        "function" === t || "continue" === t || "debugger" === t
                      );
                    case 10:
                      return "instanceof" === t;
                    default:
                      return !1;
                  }
                }),
                (t.prototype.codePointAt = function (t) {
                  var e = this.source.charCodeAt(t);
                  if (e >= 55296 && e <= 56319) {
                    var n = this.source.charCodeAt(t + 1);
                    if (n >= 56320 && n <= 57343)
                      e = 1024 * (e - 55296) + n - 56320 + 65536;
                  }
                  return e;
                }),
                (t.prototype.scanHexEscape = function (t) {
                  for (var e = "u" === t ? 4 : 2, n = 0, r = 0; r < e; ++r) {
                    if (
                      this.eof() ||
                      !i.Character.isHexDigit(
                        this.source.charCodeAt(this.index)
                      )
                    )
                      return null;
                    n = 16 * n + a(this.source[this.index++]);
                  }
                  return String.fromCharCode(n);
                }),
                (t.prototype.scanUnicodeCodePointEscape = function () {
                  var t = this.source[this.index],
                    e = 0;
                  for (
                    "}" === t && this.throwUnexpectedToken();
                    !this.eof() &&
                    ((t = this.source[this.index++]),
                    i.Character.isHexDigit(t.charCodeAt(0)));

                  )
                    e = 16 * e + a(t);
                  return (
                    (e > 1114111 || "}" !== t) && this.throwUnexpectedToken(),
                    i.Character.fromCodePoint(e)
                  );
                }),
                (t.prototype.getIdentifier = function () {
                  for (var t = this.index++; !this.eof(); ) {
                    var e = this.source.charCodeAt(this.index);
                    if (92 === e)
                      return (this.index = t), this.getComplexIdentifier();
                    if (e >= 55296 && e < 57343)
                      return (this.index = t), this.getComplexIdentifier();
                    if (!i.Character.isIdentifierPart(e)) break;
                    ++this.index;
                  }
                  return this.source.slice(t, this.index);
                }),
                (t.prototype.getComplexIdentifier = function () {
                  var t,
                    e = this.codePointAt(this.index),
                    n = i.Character.fromCodePoint(e);
                  for (
                    this.index += n.length,
                      92 === e &&
                        (117 !== this.source.charCodeAt(this.index) &&
                          this.throwUnexpectedToken(),
                        ++this.index,
                        "{" === this.source[this.index]
                          ? (++this.index,
                            (t = this.scanUnicodeCodePointEscape()))
                          : (null !== (t = this.scanHexEscape("u")) &&
                              "\\" !== t &&
                              i.Character.isIdentifierStart(t.charCodeAt(0))) ||
                            this.throwUnexpectedToken(),
                        (n = t));
                    !this.eof() &&
                    ((e = this.codePointAt(this.index)),
                    i.Character.isIdentifierPart(e));

                  )
                    (n += t = i.Character.fromCodePoint(e)),
                      (this.index += t.length),
                      92 === e &&
                        ((n = n.substr(0, n.length - 1)),
                        117 !== this.source.charCodeAt(this.index) &&
                          this.throwUnexpectedToken(),
                        ++this.index,
                        "{" === this.source[this.index]
                          ? (++this.index,
                            (t = this.scanUnicodeCodePointEscape()))
                          : (null !== (t = this.scanHexEscape("u")) &&
                              "\\" !== t &&
                              i.Character.isIdentifierPart(t.charCodeAt(0))) ||
                            this.throwUnexpectedToken(),
                        (n += t));
                  return n;
                }),
                (t.prototype.octalToDecimal = function (t) {
                  var e = "0" !== t,
                    n = o(t);
                  return (
                    !this.eof() &&
                      i.Character.isOctalDigit(
                        this.source.charCodeAt(this.index)
                      ) &&
                      ((e = !0),
                      (n = 8 * n + o(this.source[this.index++])),
                      "0123".indexOf(t) >= 0 &&
                        !this.eof() &&
                        i.Character.isOctalDigit(
                          this.source.charCodeAt(this.index)
                        ) &&
                        (n = 8 * n + o(this.source[this.index++]))),
                    { code: n, octal: e }
                  );
                }),
                (t.prototype.scanIdentifier = function () {
                  var t,
                    e = this.index,
                    n =
                      92 === this.source.charCodeAt(e)
                        ? this.getComplexIdentifier()
                        : this.getIdentifier();
                  if (
                    3 !==
                      (t =
                        1 === n.length
                          ? 3
                          : this.isKeyword(n)
                          ? 4
                          : "null" === n
                          ? 5
                          : "true" === n || "false" === n
                          ? 1
                          : 3) &&
                    e + n.length !== this.index
                  ) {
                    var r = this.index;
                    (this.index = e),
                      this.tolerateUnexpectedToken(
                        s.Messages.InvalidEscapedReservedWord
                      ),
                      (this.index = r);
                  }
                  return {
                    type: t,
                    value: n,
                    lineNumber: this.lineNumber,
                    lineStart: this.lineStart,
                    start: e,
                    end: this.index,
                  };
                }),
                (t.prototype.scanPunctuator = function () {
                  var t = this.index,
                    e = this.source[this.index];
                  switch (e) {
                    case "(":
                    case "{":
                      "{" === e && this.curlyStack.push("{"), ++this.index;
                      break;
                    case ".":
                      ++this.index,
                        "." === this.source[this.index] &&
                          "." === this.source[this.index + 1] &&
                          ((this.index += 2), (e = "..."));
                      break;
                    case "}":
                      ++this.index, this.curlyStack.pop();
                      break;
                    case ")":
                    case ";":
                    case ",":
                    case "[":
                    case "]":
                    case ":":
                    case "?":
                    case "~":
                      ++this.index;
                      break;
                    default:
                      ">>>=" === (e = this.source.substr(this.index, 4))
                        ? (this.index += 4)
                        : "===" === (e = e.substr(0, 3)) ||
                          "!==" === e ||
                          ">>>" === e ||
                          "<<=" === e ||
                          ">>=" === e ||
                          "**=" === e
                        ? (this.index += 3)
                        : "&&" === (e = e.substr(0, 2)) ||
                          "||" === e ||
                          "==" === e ||
                          "!=" === e ||
                          "+=" === e ||
                          "-=" === e ||
                          "*=" === e ||
                          "/=" === e ||
                          "++" === e ||
                          "--" === e ||
                          "<<" === e ||
                          ">>" === e ||
                          "&=" === e ||
                          "|=" === e ||
                          "^=" === e ||
                          "%=" === e ||
                          "<=" === e ||
                          ">=" === e ||
                          "=>" === e ||
                          "**" === e
                        ? (this.index += 2)
                        : ((e = this.source[this.index]),
                          "<>=!+-*%&|^/".indexOf(e) >= 0 && ++this.index);
                  }
                  return (
                    this.index === t && this.throwUnexpectedToken(),
                    {
                      type: 7,
                      value: e,
                      lineNumber: this.lineNumber,
                      lineStart: this.lineStart,
                      start: t,
                      end: this.index,
                    }
                  );
                }),
                (t.prototype.scanHexLiteral = function (t) {
                  for (
                    var e = "";
                    !this.eof() &&
                    i.Character.isHexDigit(this.source.charCodeAt(this.index));

                  )
                    e += this.source[this.index++];
                  return (
                    0 === e.length && this.throwUnexpectedToken(),
                    i.Character.isIdentifierStart(
                      this.source.charCodeAt(this.index)
                    ) && this.throwUnexpectedToken(),
                    {
                      type: 6,
                      value: parseInt("0x" + e, 16),
                      lineNumber: this.lineNumber,
                      lineStart: this.lineStart,
                      start: t,
                      end: this.index,
                    }
                  );
                }),
                (t.prototype.scanBinaryLiteral = function (t) {
                  for (
                    var e, n = "";
                    !this.eof() &&
                    ("0" === (e = this.source[this.index]) || "1" === e);

                  )
                    n += this.source[this.index++];
                  return (
                    0 === n.length && this.throwUnexpectedToken(),
                    this.eof() ||
                      ((e = this.source.charCodeAt(this.index)),
                      (i.Character.isIdentifierStart(e) ||
                        i.Character.isDecimalDigit(e)) &&
                        this.throwUnexpectedToken()),
                    {
                      type: 6,
                      value: parseInt(n, 2),
                      lineNumber: this.lineNumber,
                      lineStart: this.lineStart,
                      start: t,
                      end: this.index,
                    }
                  );
                }),
                (t.prototype.scanOctalLiteral = function (t, e) {
                  var n = "",
                    r = !1;
                  for (
                    i.Character.isOctalDigit(t.charCodeAt(0))
                      ? ((r = !0), (n = "0" + this.source[this.index++]))
                      : ++this.index;
                    !this.eof() &&
                    i.Character.isOctalDigit(
                      this.source.charCodeAt(this.index)
                    );

                  )
                    n += this.source[this.index++];
                  return (
                    r || 0 !== n.length || this.throwUnexpectedToken(),
                    (i.Character.isIdentifierStart(
                      this.source.charCodeAt(this.index)
                    ) ||
                      i.Character.isDecimalDigit(
                        this.source.charCodeAt(this.index)
                      )) &&
                      this.throwUnexpectedToken(),
                    {
                      type: 6,
                      value: parseInt(n, 8),
                      octal: r,
                      lineNumber: this.lineNumber,
                      lineStart: this.lineStart,
                      start: e,
                      end: this.index,
                    }
                  );
                }),
                (t.prototype.isImplicitOctalLiteral = function () {
                  for (var t = this.index + 1; t < this.length; ++t) {
                    var e = this.source[t];
                    if ("8" === e || "9" === e) return !1;
                    if (!i.Character.isOctalDigit(e.charCodeAt(0))) return !0;
                  }
                  return !0;
                }),
                (t.prototype.scanNumericLiteral = function () {
                  var t = this.index,
                    e = this.source[t];
                  r.assert(
                    i.Character.isDecimalDigit(e.charCodeAt(0)) || "." === e,
                    "Numeric literal must start with a decimal digit or a decimal point"
                  );
                  var n = "";
                  if ("." !== e) {
                    if (
                      ((n = this.source[this.index++]),
                      (e = this.source[this.index]),
                      "0" === n)
                    ) {
                      if ("x" === e || "X" === e)
                        return ++this.index, this.scanHexLiteral(t);
                      if ("b" === e || "B" === e)
                        return ++this.index, this.scanBinaryLiteral(t);
                      if ("o" === e || "O" === e)
                        return this.scanOctalLiteral(e, t);
                      if (
                        e &&
                        i.Character.isOctalDigit(e.charCodeAt(0)) &&
                        this.isImplicitOctalLiteral()
                      )
                        return this.scanOctalLiteral(e, t);
                    }
                    for (
                      ;
                      i.Character.isDecimalDigit(
                        this.source.charCodeAt(this.index)
                      );

                    )
                      n += this.source[this.index++];
                    e = this.source[this.index];
                  }
                  if ("." === e) {
                    for (
                      n += this.source[this.index++];
                      i.Character.isDecimalDigit(
                        this.source.charCodeAt(this.index)
                      );

                    )
                      n += this.source[this.index++];
                    e = this.source[this.index];
                  }
                  if ("e" === e || "E" === e)
                    if (
                      ((n += this.source[this.index++]),
                      ("+" !== (e = this.source[this.index]) && "-" !== e) ||
                        (n += this.source[this.index++]),
                      i.Character.isDecimalDigit(
                        this.source.charCodeAt(this.index)
                      ))
                    )
                      for (
                        ;
                        i.Character.isDecimalDigit(
                          this.source.charCodeAt(this.index)
                        );

                      )
                        n += this.source[this.index++];
                    else this.throwUnexpectedToken();
                  return (
                    i.Character.isIdentifierStart(
                      this.source.charCodeAt(this.index)
                    ) && this.throwUnexpectedToken(),
                    {
                      type: 6,
                      value: parseFloat(n),
                      lineNumber: this.lineNumber,
                      lineStart: this.lineStart,
                      start: t,
                      end: this.index,
                    }
                  );
                }),
                (t.prototype.scanStringLiteral = function () {
                  var t = this.index,
                    e = this.source[t];
                  r.assert(
                    "'" === e || '"' === e,
                    "String literal must starts with a quote"
                  ),
                    ++this.index;
                  for (var n = !1, a = ""; !this.eof(); ) {
                    var o = this.source[this.index++];
                    if (o === e) {
                      e = "";
                      break;
                    }
                    if ("\\" === o)
                      if (
                        (o = this.source[this.index++]) &&
                        i.Character.isLineTerminator(o.charCodeAt(0))
                      )
                        ++this.lineNumber,
                          "\r" === o &&
                            "\n" === this.source[this.index] &&
                            ++this.index,
                          (this.lineStart = this.index);
                      else
                        switch (o) {
                          case "u":
                            if ("{" === this.source[this.index])
                              ++this.index,
                                (a += this.scanUnicodeCodePointEscape());
                            else {
                              var u = this.scanHexEscape(o);
                              null === u && this.throwUnexpectedToken(),
                                (a += u);
                            }
                            break;
                          case "x":
                            var c = this.scanHexEscape(o);
                            null === c &&
                              this.throwUnexpectedToken(
                                s.Messages.InvalidHexEscapeSequence
                              ),
                              (a += c);
                            break;
                          case "n":
                            a += "\n";
                            break;
                          case "r":
                            a += "\r";
                            break;
                          case "t":
                            a += "\t";
                            break;
                          case "b":
                            a += "\b";
                            break;
                          case "f":
                            a += "\f";
                            break;
                          case "v":
                            a += "\v";
                            break;
                          case "8":
                          case "9":
                            (a += o), this.tolerateUnexpectedToken();
                            break;
                          default:
                            if (
                              o &&
                              i.Character.isOctalDigit(o.charCodeAt(0))
                            ) {
                              var l = this.octalToDecimal(o);
                              (n = l.octal || n),
                                (a += String.fromCharCode(l.code));
                            } else a += o;
                        }
                    else {
                      if (i.Character.isLineTerminator(o.charCodeAt(0))) break;
                      a += o;
                    }
                  }
                  return (
                    "" !== e && ((this.index = t), this.throwUnexpectedToken()),
                    {
                      type: 8,
                      value: a,
                      octal: n,
                      lineNumber: this.lineNumber,
                      lineStart: this.lineStart,
                      start: t,
                      end: this.index,
                    }
                  );
                }),
                (t.prototype.scanTemplate = function () {
                  var t = "",
                    e = !1,
                    n = this.index,
                    r = "`" === this.source[n],
                    a = !1,
                    o = 2;
                  for (++this.index; !this.eof(); ) {
                    var u = this.source[this.index++];
                    if ("`" === u) {
                      (o = 1), (a = !0), (e = !0);
                      break;
                    }
                    if ("$" === u) {
                      if ("{" === this.source[this.index]) {
                        this.curlyStack.push("${"), ++this.index, (e = !0);
                        break;
                      }
                      t += u;
                    } else if ("\\" === u)
                      if (
                        ((u = this.source[this.index++]),
                        i.Character.isLineTerminator(u.charCodeAt(0)))
                      )
                        ++this.lineNumber,
                          "\r" === u &&
                            "\n" === this.source[this.index] &&
                            ++this.index,
                          (this.lineStart = this.index);
                      else
                        switch (u) {
                          case "n":
                            t += "\n";
                            break;
                          case "r":
                            t += "\r";
                            break;
                          case "t":
                            t += "\t";
                            break;
                          case "u":
                            if ("{" === this.source[this.index])
                              ++this.index,
                                (t += this.scanUnicodeCodePointEscape());
                            else {
                              var c = this.index,
                                l = this.scanHexEscape(u);
                              null !== l
                                ? (t += l)
                                : ((this.index = c), (t += u));
                            }
                            break;
                          case "x":
                            var h = this.scanHexEscape(u);
                            null === h &&
                              this.throwUnexpectedToken(
                                s.Messages.InvalidHexEscapeSequence
                              ),
                              (t += h);
                            break;
                          case "b":
                            t += "\b";
                            break;
                          case "f":
                            t += "\f";
                            break;
                          case "v":
                            t += "\v";
                            break;
                          default:
                            "0" === u
                              ? (i.Character.isDecimalDigit(
                                  this.source.charCodeAt(this.index)
                                ) &&
                                  this.throwUnexpectedToken(
                                    s.Messages.TemplateOctalLiteral
                                  ),
                                (t += "\0"))
                              : i.Character.isOctalDigit(u.charCodeAt(0))
                              ? this.throwUnexpectedToken(
                                  s.Messages.TemplateOctalLiteral
                                )
                              : (t += u);
                        }
                    else
                      i.Character.isLineTerminator(u.charCodeAt(0))
                        ? (++this.lineNumber,
                          "\r" === u &&
                            "\n" === this.source[this.index] &&
                            ++this.index,
                          (this.lineStart = this.index),
                          (t += "\n"))
                        : (t += u);
                  }
                  return (
                    e || this.throwUnexpectedToken(),
                    r || this.curlyStack.pop(),
                    {
                      type: 10,
                      value: this.source.slice(n + 1, this.index - o),
                      cooked: t,
                      head: r,
                      tail: a,
                      lineNumber: this.lineNumber,
                      lineStart: this.lineStart,
                      start: n,
                      end: this.index,
                    }
                  );
                }),
                (t.prototype.testRegExp = function (t, e) {
                  var n = t,
                    r = this;
                  e.indexOf("u") >= 0 &&
                    (n = n
                      .replace(
                        /\\u\{([0-9a-fA-F]+)\}|\\u([a-fA-F0-9]{4})/g,
                        function (t, e, n) {
                          var i = parseInt(e || n, 16);
                          return (
                            i > 1114111 &&
                              r.throwUnexpectedToken(s.Messages.InvalidRegExp),
                            i <= 65535 ? String.fromCharCode(i) : "￿"
                          );
                        }
                      )
                      .replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g, "￿"));
                  try {
                    RegExp(n);
                  } catch (t) {
                    this.throwUnexpectedToken(s.Messages.InvalidRegExp);
                  }
                  try {
                    return new RegExp(t, e);
                  } catch (t) {
                    return null;
                  }
                }),
                (t.prototype.scanRegExpBody = function () {
                  var t = this.source[this.index];
                  r.assert(
                    "/" === t,
                    "Regular expression literal must start with a slash"
                  );
                  for (
                    var e = this.source[this.index++], n = !1, a = !1;
                    !this.eof();

                  )
                    if (((e += t = this.source[this.index++]), "\\" === t))
                      (t = this.source[this.index++]),
                        i.Character.isLineTerminator(t.charCodeAt(0)) &&
                          this.throwUnexpectedToken(
                            s.Messages.UnterminatedRegExp
                          ),
                        (e += t);
                    else if (i.Character.isLineTerminator(t.charCodeAt(0)))
                      this.throwUnexpectedToken(s.Messages.UnterminatedRegExp);
                    else if (n) "]" === t && (n = !1);
                    else {
                      if ("/" === t) {
                        a = !0;
                        break;
                      }
                      "[" === t && (n = !0);
                    }
                  return (
                    a ||
                      this.throwUnexpectedToken(s.Messages.UnterminatedRegExp),
                    e.substr(1, e.length - 2)
                  );
                }),
                (t.prototype.scanRegExpFlags = function () {
                  for (var t = ""; !this.eof(); ) {
                    var e = this.source[this.index];
                    if (!i.Character.isIdentifierPart(e.charCodeAt(0))) break;
                    if ((++this.index, "\\" !== e || this.eof())) (t += e), e;
                    else if ("u" === (e = this.source[this.index])) {
                      ++this.index;
                      var n = this.index,
                        r = this.scanHexEscape("u");
                      if (null !== r)
                        for (t += r, "\\u"; n < this.index; ++n) this.source[n];
                      else (this.index = n), (t += "u"), "\\u";
                      this.tolerateUnexpectedToken();
                    } else "\\", this.tolerateUnexpectedToken();
                  }
                  return t;
                }),
                (t.prototype.scanRegExp = function () {
                  var t = this.index,
                    e = this.scanRegExpBody(),
                    n = this.scanRegExpFlags();
                  return {
                    type: 9,
                    value: "",
                    pattern: e,
                    flags: n,
                    regex: this.testRegExp(e, n),
                    lineNumber: this.lineNumber,
                    lineStart: this.lineStart,
                    start: t,
                    end: this.index,
                  };
                }),
                (t.prototype.lex = function () {
                  if (this.eof())
                    return {
                      type: 2,
                      value: "",
                      lineNumber: this.lineNumber,
                      lineStart: this.lineStart,
                      start: this.index,
                      end: this.index,
                    };
                  var t = this.source.charCodeAt(this.index);
                  return i.Character.isIdentifierStart(t)
                    ? this.scanIdentifier()
                    : 40 === t || 41 === t || 59 === t
                    ? this.scanPunctuator()
                    : 39 === t || 34 === t
                    ? this.scanStringLiteral()
                    : 46 === t
                    ? i.Character.isDecimalDigit(
                        this.source.charCodeAt(this.index + 1)
                      )
                      ? this.scanNumericLiteral()
                      : this.scanPunctuator()
                    : i.Character.isDecimalDigit(t)
                    ? this.scanNumericLiteral()
                    : 96 === t ||
                      (125 === t &&
                        "${" === this.curlyStack[this.curlyStack.length - 1])
                    ? this.scanTemplate()
                    : t >= 55296 &&
                      t < 57343 &&
                      i.Character.isIdentifierStart(
                        this.codePointAt(this.index)
                      )
                    ? this.scanIdentifier()
                    : this.scanPunctuator();
                }),
                t
              );
            })();
            e.Scanner = u;
          },
          function (t, e) {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 }),
              (e.TokenName = {}),
              (e.TokenName[1] = "Boolean"),
              (e.TokenName[2] = "<end>"),
              (e.TokenName[3] = "Identifier"),
              (e.TokenName[4] = "Keyword"),
              (e.TokenName[5] = "Null"),
              (e.TokenName[6] = "Numeric"),
              (e.TokenName[7] = "Punctuator"),
              (e.TokenName[8] = "String"),
              (e.TokenName[9] = "RegularExpression"),
              (e.TokenName[10] = "Template");
          },
          function (t, e) {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 }),
              (e.XHTMLEntities = {
                quot: '"',
                amp: "&",
                apos: "'",
                gt: ">",
                nbsp: " ",
                iexcl: "¡",
                cent: "¢",
                pound: "£",
                curren: "¤",
                yen: "¥",
                brvbar: "¦",
                sect: "§",
                uml: "¨",
                copy: "©",
                ordf: "ª",
                laquo: "«",
                not: "¬",
                shy: "­",
                reg: "®",
                macr: "¯",
                deg: "°",
                plusmn: "±",
                sup2: "²",
                sup3: "³",
                acute: "´",
                micro: "µ",
                para: "¶",
                middot: "·",
                cedil: "¸",
                sup1: "¹",
                ordm: "º",
                raquo: "»",
                frac14: "¼",
                frac12: "½",
                frac34: "¾",
                iquest: "¿",
                Agrave: "À",
                Aacute: "Á",
                Acirc: "Â",
                Atilde: "Ã",
                Auml: "Ä",
                Aring: "Å",
                AElig: "Æ",
                Ccedil: "Ç",
                Egrave: "È",
                Eacute: "É",
                Ecirc: "Ê",
                Euml: "Ë",
                Igrave: "Ì",
                Iacute: "Í",
                Icirc: "Î",
                Iuml: "Ï",
                ETH: "Ð",
                Ntilde: "Ñ",
                Ograve: "Ò",
                Oacute: "Ó",
                Ocirc: "Ô",
                Otilde: "Õ",
                Ouml: "Ö",
                times: "×",
                Oslash: "Ø",
                Ugrave: "Ù",
                Uacute: "Ú",
                Ucirc: "Û",
                Uuml: "Ü",
                Yacute: "Ý",
                THORN: "Þ",
                szlig: "ß",
                agrave: "à",
                aacute: "á",
                acirc: "â",
                atilde: "ã",
                auml: "ä",
                aring: "å",
                aelig: "æ",
                ccedil: "ç",
                egrave: "è",
                eacute: "é",
                ecirc: "ê",
                euml: "ë",
                igrave: "ì",
                iacute: "í",
                icirc: "î",
                iuml: "ï",
                eth: "ð",
                ntilde: "ñ",
                ograve: "ò",
                oacute: "ó",
                ocirc: "ô",
                otilde: "õ",
                ouml: "ö",
                divide: "÷",
                oslash: "ø",
                ugrave: "ù",
                uacute: "ú",
                ucirc: "û",
                uuml: "ü",
                yacute: "ý",
                thorn: "þ",
                yuml: "ÿ",
                OElig: "Œ",
                oelig: "œ",
                Scaron: "Š",
                scaron: "š",
                Yuml: "Ÿ",
                fnof: "ƒ",
                circ: "ˆ",
                tilde: "˜",
                Alpha: "Α",
                Beta: "Β",
                Gamma: "Γ",
                Delta: "Δ",
                Epsilon: "Ε",
                Zeta: "Ζ",
                Eta: "Η",
                Theta: "Θ",
                Iota: "Ι",
                Kappa: "Κ",
                Lambda: "Λ",
                Mu: "Μ",
                Nu: "Ν",
                Xi: "Ξ",
                Omicron: "Ο",
                Pi: "Π",
                Rho: "Ρ",
                Sigma: "Σ",
                Tau: "Τ",
                Upsilon: "Υ",
                Phi: "Φ",
                Chi: "Χ",
                Psi: "Ψ",
                Omega: "Ω",
                alpha: "α",
                beta: "β",
                gamma: "γ",
                delta: "δ",
                epsilon: "ε",
                zeta: "ζ",
                eta: "η",
                theta: "θ",
                iota: "ι",
                kappa: "κ",
                lambda: "λ",
                mu: "μ",
                nu: "ν",
                xi: "ξ",
                omicron: "ο",
                pi: "π",
                rho: "ρ",
                sigmaf: "ς",
                sigma: "σ",
                tau: "τ",
                upsilon: "υ",
                phi: "φ",
                chi: "χ",
                psi: "ψ",
                omega: "ω",
                thetasym: "ϑ",
                upsih: "ϒ",
                piv: "ϖ",
                ensp: " ",
                emsp: " ",
                thinsp: " ",
                zwnj: "‌",
                zwj: "‍",
                lrm: "‎",
                rlm: "‏",
                ndash: "–",
                mdash: "—",
                lsquo: "‘",
                rsquo: "’",
                sbquo: "‚",
                ldquo: "“",
                rdquo: "”",
                bdquo: "„",
                dagger: "†",
                Dagger: "‡",
                bull: "•",
                hellip: "…",
                permil: "‰",
                prime: "′",
                Prime: "″",
                lsaquo: "‹",
                rsaquo: "›",
                oline: "‾",
                frasl: "⁄",
                euro: "€",
                image: "ℑ",
                weierp: "℘",
                real: "ℜ",
                trade: "™",
                alefsym: "ℵ",
                larr: "←",
                uarr: "↑",
                rarr: "→",
                darr: "↓",
                harr: "↔",
                crarr: "↵",
                lArr: "⇐",
                uArr: "⇑",
                rArr: "⇒",
                dArr: "⇓",
                hArr: "⇔",
                forall: "∀",
                part: "∂",
                exist: "∃",
                empty: "∅",
                nabla: "∇",
                isin: "∈",
                notin: "∉",
                ni: "∋",
                prod: "∏",
                sum: "∑",
                minus: "−",
                lowast: "∗",
                radic: "√",
                prop: "∝",
                infin: "∞",
                ang: "∠",
                and: "∧",
                or: "∨",
                cap: "∩",
                cup: "∪",
                int: "∫",
                there4: "∴",
                sim: "∼",
                cong: "≅",
                asymp: "≈",
                ne: "≠",
                equiv: "≡",
                le: "≤",
                ge: "≥",
                sub: "⊂",
                sup: "⊃",
                nsub: "⊄",
                sube: "⊆",
                supe: "⊇",
                oplus: "⊕",
                otimes: "⊗",
                perp: "⊥",
                sdot: "⋅",
                lceil: "⌈",
                rceil: "⌉",
                lfloor: "⌊",
                rfloor: "⌋",
                loz: "◊",
                spades: "♠",
                clubs: "♣",
                hearts: "♥",
                diams: "♦",
                lang: "⟨",
                rang: "⟩",
              });
          },
          function (t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 });
            var r = n(10),
              i = n(12),
              s = n(13),
              a = (function () {
                function t() {
                  (this.values = []), (this.curly = this.paren = -1);
                }
                return (
                  (t.prototype.beforeFunctionExpression = function (t) {
                    return (
                      [
                        "(",
                        "{",
                        "[",
                        "in",
                        "typeof",
                        "instanceof",
                        "new",
                        "return",
                        "case",
                        "delete",
                        "throw",
                        "void",
                        "=",
                        "+=",
                        "-=",
                        "*=",
                        "**=",
                        "/=",
                        "%=",
                        "<<=",
                        ">>=",
                        ">>>=",
                        "&=",
                        "|=",
                        "^=",
                        ",",
                        "+",
                        "-",
                        "*",
                        "**",
                        "/",
                        "%",
                        "++",
                        "--",
                        "<<",
                        ">>",
                        ">>>",
                        "&",
                        "|",
                        "^",
                        "!",
                        "~",
                        "&&",
                        "||",
                        "?",
                        ":",
                        "===",
                        "==",
                        ">=",
                        "<=",
                        "<",
                        ">",
                        "!=",
                        "!==",
                      ].indexOf(t) >= 0
                    );
                  }),
                  (t.prototype.isRegexStart = function () {
                    var t = this.values[this.values.length - 1],
                      e = null !== t;
                    switch (t) {
                      case "this":
                      case "]":
                        e = !1;
                        break;
                      case ")":
                        var n = this.values[this.paren - 1];
                        e =
                          "if" === n ||
                          "while" === n ||
                          "for" === n ||
                          "with" === n;
                        break;
                      case "}":
                        if (
                          ((e = !1), "function" === this.values[this.curly - 3])
                        )
                          e =
                            !!(r = this.values[this.curly - 4]) &&
                            !this.beforeFunctionExpression(r);
                        else if ("function" === this.values[this.curly - 4]) {
                          var r;
                          e =
                            !(r = this.values[this.curly - 5]) ||
                            !this.beforeFunctionExpression(r);
                        }
                    }
                    return e;
                  }),
                  (t.prototype.push = function (t) {
                    7 === t.type || 4 === t.type
                      ? ("{" === t.value
                          ? (this.curly = this.values.length)
                          : "(" === t.value &&
                            (this.paren = this.values.length),
                        this.values.push(t.value))
                      : this.values.push(null);
                  }),
                  t
                );
              })(),
              o = (function () {
                function t(t, e) {
                  (this.errorHandler = new r.ErrorHandler()),
                    (this.errorHandler.tolerant =
                      !!e && "boolean" == typeof e.tolerant && e.tolerant),
                    (this.scanner = new i.Scanner(t, this.errorHandler)),
                    (this.scanner.trackComment =
                      !!e && "boolean" == typeof e.comment && e.comment),
                    (this.trackRange =
                      !!e && "boolean" == typeof e.range && e.range),
                    (this.trackLoc = !!e && "boolean" == typeof e.loc && e.loc),
                    (this.buffer = []),
                    (this.reader = new a());
                }
                return (
                  (t.prototype.errors = function () {
                    return this.errorHandler.errors;
                  }),
                  (t.prototype.getNextToken = function () {
                    if (0 === this.buffer.length) {
                      var t = this.scanner.scanComments();
                      if (this.scanner.trackComment)
                        for (var e = 0; e < t.length; ++e) {
                          var n = t[e],
                            r = this.scanner.source.slice(
                              n.slice[0],
                              n.slice[1]
                            ),
                            i = {
                              type: n.multiLine
                                ? "BlockComment"
                                : "LineComment",
                              value: r,
                            };
                          this.trackRange && (i.range = n.range),
                            this.trackLoc && (i.loc = n.loc),
                            this.buffer.push(i);
                        }
                      if (!this.scanner.eof()) {
                        var a = void 0;
                        this.trackLoc &&
                          (a = {
                            start: {
                              line: this.scanner.lineNumber,
                              column:
                                this.scanner.index - this.scanner.lineStart,
                            },
                            end: {},
                          });
                        var o =
                          "/" === this.scanner.source[this.scanner.index] &&
                          this.reader.isRegexStart()
                            ? this.scanner.scanRegExp()
                            : this.scanner.lex();
                        this.reader.push(o);
                        var u = {
                          type: s.TokenName[o.type],
                          value: this.scanner.source.slice(o.start, o.end),
                        };
                        if (
                          (this.trackRange && (u.range = [o.start, o.end]),
                          this.trackLoc &&
                            ((a.end = {
                              line: this.scanner.lineNumber,
                              column:
                                this.scanner.index - this.scanner.lineStart,
                            }),
                            (u.loc = a)),
                          9 === o.type)
                        ) {
                          var c = o.pattern,
                            l = o.flags;
                          u.regex = { pattern: c, flags: l };
                        }
                        this.buffer.push(u);
                      }
                    }
                    return this.buffer.shift();
                  }),
                  t
                );
              })();
            e.Tokenizer = o;
          },
        ]);
      });
    },
    function (t, e, n) {
      "use strict";
      var r = n(3),
        i = n(5),
        s = n(8),
        a = n(6),
        o = Object.prototype.toString,
        u = Object.prototype.hasOwnProperty,
        c = 9,
        l = 10,
        h = 32,
        p = 33,
        f = 34,
        d = 35,
        m = 37,
        v = 38,
        y = 39,
        g = 42,
        x = 44,
        D = 45,
        E = 58,
        C = 62,
        A = 63,
        w = 64,
        b = 91,
        S = 93,
        k = 96,
        F = 123,
        T = 124,
        _ = 125,
        B = {
          0: "\\0",
          7: "\\a",
          8: "\\b",
          9: "\\t",
          10: "\\n",
          11: "\\v",
          12: "\\f",
          13: "\\r",
          27: "\\e",
          34: '\\"',
          92: "\\\\",
          133: "\\N",
          160: "\\_",
          8232: "\\L",
          8233: "\\P",
        },
        I = [
          "y",
          "Y",
          "yes",
          "Yes",
          "YES",
          "on",
          "On",
          "ON",
          "n",
          "N",
          "no",
          "No",
          "NO",
          "off",
          "Off",
          "OFF",
        ];
      function N(t) {
        var e, n, s;
        if (((e = t.toString(16).toUpperCase()), t <= 255)) (n = "x"), (s = 2);
        else if (t <= 65535) (n = "u"), (s = 4);
        else {
          if (!(t <= 4294967295))
            throw new i(
              "code point within a string may not be greater than 0xFFFFFFFF"
            );
          (n = "U"), (s = 8);
        }
        return "\\" + n + r.repeat("0", s - e.length) + e;
      }
      function O(t) {
        (this.schema = t.schema || s),
          (this.indent = Math.max(1, t.indent || 2)),
          (this.noArrayIndent = t.noArrayIndent || !1),
          (this.skipInvalid = t.skipInvalid || !1),
          (this.flowLevel = r.isNothing(t.flowLevel) ? -1 : t.flowLevel),
          (this.styleMap = (function (t, e) {
            var n, r, i, s, a, o, c;
            if (null === e) return {};
            for (n = {}, i = 0, s = (r = Object.keys(e)).length; i < s; i += 1)
              (a = r[i]),
                (o = String(e[a])),
                "!!" === a.slice(0, 2) &&
                  (a = "tag:yaml.org,2002:" + a.slice(2)),
                (c = t.compiledTypeMap.fallback[a]) &&
                  u.call(c.styleAliases, o) &&
                  (o = c.styleAliases[o]),
                (n[a] = o);
            return n;
          })(this.schema, t.styles || null)),
          (this.sortKeys = t.sortKeys || !1),
          (this.lineWidth = t.lineWidth || 80),
          (this.noRefs = t.noRefs || !1),
          (this.noCompatMode = t.noCompatMode || !1),
          (this.condenseFlow = t.condenseFlow || !1),
          (this.implicitTypes = this.schema.compiledImplicit),
          (this.explicitTypes = this.schema.compiledExplicit),
          (this.tag = null),
          (this.result = ""),
          (this.duplicates = []),
          (this.usedDuplicates = null);
      }
      function M(t, e) {
        for (
          var n, i = r.repeat(" ", e), s = 0, a = -1, o = "", u = t.length;
          s < u;

        )
          -1 === (a = t.indexOf("\n", s))
            ? ((n = t.slice(s)), (s = u))
            : ((n = t.slice(s, a + 1)), (s = a + 1)),
            n.length && "\n" !== n && (o += i),
            (o += n);
        return o;
      }
      function P(t, e) {
        return "\n" + r.repeat(" ", t.indent * e);
      }
      function L(t) {
        return t === h || t === c;
      }
      function R(t) {
        return (
          (32 <= t && t <= 126) ||
          (161 <= t && t <= 55295 && 8232 !== t && 8233 !== t) ||
          (57344 <= t && t <= 65533 && 65279 !== t) ||
          (65536 <= t && t <= 1114111)
        );
      }
      function $(t) {
        return (
          R(t) &&
          65279 !== t &&
          t !== x &&
          t !== b &&
          t !== S &&
          t !== F &&
          t !== _ &&
          t !== E &&
          t !== d
        );
      }
      function U(t) {
        return /^\n* /.test(t);
      }
      var j = 1,
        J = 2,
        X = 3,
        z = 4,
        K = 5;
      function H(t, e, n, r, i) {
        var s,
          a,
          o = !1,
          u = !1,
          c = -1 !== r,
          h = -1,
          B =
            (function (t) {
              return (
                R(t) &&
                65279 !== t &&
                !L(t) &&
                t !== D &&
                t !== A &&
                t !== E &&
                t !== x &&
                t !== b &&
                t !== S &&
                t !== F &&
                t !== _ &&
                t !== d &&
                t !== v &&
                t !== g &&
                t !== p &&
                t !== T &&
                t !== C &&
                t !== y &&
                t !== f &&
                t !== m &&
                t !== w &&
                t !== k
              );
            })(t.charCodeAt(0)) && !L(t.charCodeAt(t.length - 1));
        if (e)
          for (s = 0; s < t.length; s++) {
            if (!R((a = t.charCodeAt(s)))) return K;
            B = B && $(a);
          }
        else {
          for (s = 0; s < t.length; s++) {
            if ((a = t.charCodeAt(s)) === l)
              (o = !0),
                c && ((u = u || (s - h - 1 > r && " " !== t[h + 1])), (h = s));
            else if (!R(a)) return K;
            B = B && $(a);
          }
          u = u || (c && s - h - 1 > r && " " !== t[h + 1]);
        }
        return o || u ? (n > 9 && U(t) ? K : u ? z : X) : B && !i(t) ? j : J;
      }
      function Y(t, e, n, r) {
        t.dump = (function () {
          if (0 === e.length) return "''";
          if (!t.noCompatMode && -1 !== I.indexOf(e)) return "'" + e + "'";
          var s = t.indent * Math.max(1, n),
            a =
              -1 === t.lineWidth
                ? -1
                : Math.max(Math.min(t.lineWidth, 40), t.lineWidth - s),
            o = r || (t.flowLevel > -1 && n >= t.flowLevel);
          switch (
            H(e, o, t.indent, a, function (e) {
              return (function (t, e) {
                var n, r;
                for (n = 0, r = t.implicitTypes.length; n < r; n += 1)
                  if (t.implicitTypes[n].resolve(e)) return !0;
                return !1;
              })(t, e);
            })
          ) {
            case j:
              return e;
            case J:
              return "'" + e.replace(/'/g, "''") + "'";
            case X:
              return "|" + V(e, t.indent) + q(M(e, s));
            case z:
              return (
                ">" +
                V(e, t.indent) +
                q(
                  M(
                    (function (t, e) {
                      var n,
                        r,
                        i = /(\n+)([^\n]*)/g,
                        s = (function () {
                          var n = t.indexOf("\n");
                          return (
                            (n = -1 !== n ? n : t.length),
                            (i.lastIndex = n),
                            W(t.slice(0, n), e)
                          );
                        })(),
                        a = "\n" === t[0] || " " === t[0];
                      for (; (r = i.exec(t)); ) {
                        var o = r[1],
                          u = r[2];
                        (n = " " === u[0]),
                          (s += o + (a || n || "" === u ? "" : "\n") + W(u, e)),
                          (a = n);
                      }
                      return s;
                    })(e, a),
                    s
                  )
                )
              );
            case K:
              return (
                '"' +
                (function (t) {
                  for (var e, n, r, i = "", s = 0; s < t.length; s++)
                    (e = t.charCodeAt(s)) >= 55296 &&
                    e <= 56319 &&
                    (n = t.charCodeAt(s + 1)) >= 56320 &&
                    n <= 57343
                      ? ((i += N(1024 * (e - 55296) + n - 56320 + 65536)), s++)
                      : ((r = B[e]), (i += !r && R(e) ? t[s] : r || N(e)));
                  return i;
                })(e) +
                '"'
              );
            default:
              throw new i("impossible error: invalid scalar style");
          }
        })();
      }
      function V(t, e) {
        var n = U(t) ? String(e) : "",
          r = "\n" === t[t.length - 1];
        return (
          n +
          (r && ("\n" === t[t.length - 2] || "\n" === t) ? "+" : r ? "" : "-") +
          "\n"
        );
      }
      function q(t) {
        return "\n" === t[t.length - 1] ? t.slice(0, -1) : t;
      }
      function W(t, e) {
        if ("" === t || " " === t[0]) return t;
        for (
          var n, r, i = / [^ ]/g, s = 0, a = 0, o = 0, u = "";
          (n = i.exec(t));

        )
          (o = n.index) - s > e &&
            ((r = a > s ? a : o), (u += "\n" + t.slice(s, r)), (s = r + 1)),
            (a = o);
        return (
          (u += "\n"),
          t.length - s > e && a > s
            ? (u += t.slice(s, a) + "\n" + t.slice(a + 1))
            : (u += t.slice(s)),
          u.slice(1)
        );
      }
      function G(t, e, n) {
        var r, s, a, c, l, h;
        for (
          a = 0, c = (s = n ? t.explicitTypes : t.implicitTypes).length;
          a < c;
          a += 1
        )
          if (
            ((l = s[a]).instanceOf || l.predicate) &&
            (!l.instanceOf ||
              ("object" == typeof e && e instanceof l.instanceOf)) &&
            (!l.predicate || l.predicate(e))
          ) {
            if (((t.tag = n ? l.tag : "?"), l.represent)) {
              if (
                ((h = t.styleMap[l.tag] || l.defaultStyle),
                "[object Function]" === o.call(l.represent))
              )
                r = l.represent(e, h);
              else {
                if (!u.call(l.represent, h))
                  throw new i(
                    "!<" +
                      l.tag +
                      '> tag resolver accepts not "' +
                      h +
                      '" style'
                  );
                r = l.represent[h](e, h);
              }
              t.dump = r;
            }
            return !0;
          }
        return !1;
      }
      function Z(t, e, n, r, s, a) {
        (t.tag = null), (t.dump = n), G(t, n, !1) || G(t, n, !0);
        var u = o.call(t.dump);
        r && (r = t.flowLevel < 0 || t.flowLevel > e);
        var c,
          h,
          p = "[object Object]" === u || "[object Array]" === u;
        if (
          (p && (h = -1 !== (c = t.duplicates.indexOf(n))),
          ((null !== t.tag && "?" !== t.tag) ||
            h ||
            (2 !== t.indent && e > 0)) &&
            (s = !1),
          h && t.usedDuplicates[c])
        )
          t.dump = "*ref_" + c;
        else {
          if (
            (p && h && !t.usedDuplicates[c] && (t.usedDuplicates[c] = !0),
            "[object Object]" === u)
          )
            r && 0 !== Object.keys(t.dump).length
              ? (!(function (t, e, n, r) {
                  var s,
                    a,
                    o,
                    u,
                    c,
                    h,
                    p = "",
                    f = t.tag,
                    d = Object.keys(n);
                  if (!0 === t.sortKeys) d.sort();
                  else if ("function" == typeof t.sortKeys) d.sort(t.sortKeys);
                  else if (t.sortKeys)
                    throw new i("sortKeys must be a boolean or a function");
                  for (s = 0, a = d.length; s < a; s += 1)
                    (h = ""),
                      (r && 0 === s) || (h += P(t, e)),
                      (u = n[(o = d[s])]),
                      Z(t, e + 1, o, !0, !0, !0) &&
                        ((c =
                          (null !== t.tag && "?" !== t.tag) ||
                          (t.dump && t.dump.length > 1024)) &&
                          (t.dump && l === t.dump.charCodeAt(0)
                            ? (h += "?")
                            : (h += "? ")),
                        (h += t.dump),
                        c && (h += P(t, e)),
                        Z(t, e + 1, u, !0, c) &&
                          (t.dump && l === t.dump.charCodeAt(0)
                            ? (h += ":")
                            : (h += ": "),
                          (p += h += t.dump)));
                  (t.tag = f), (t.dump = p || "{}");
                })(t, e, t.dump, s),
                h && (t.dump = "&ref_" + c + t.dump))
              : (!(function (t, e, n) {
                  var r,
                    i,
                    s,
                    a,
                    o,
                    u = "",
                    c = t.tag,
                    l = Object.keys(n);
                  for (r = 0, i = l.length; r < i; r += 1)
                    (o = t.condenseFlow ? '"' : ""),
                      0 !== r && (o += ", "),
                      (a = n[(s = l[r])]),
                      Z(t, e, s, !1, !1) &&
                        (t.dump.length > 1024 && (o += "? "),
                        (o +=
                          t.dump +
                          (t.condenseFlow ? '"' : "") +
                          ":" +
                          (t.condenseFlow ? "" : " ")),
                        Z(t, e, a, !1, !1) && (u += o += t.dump));
                  (t.tag = c), (t.dump = "{" + u + "}");
                })(t, e, t.dump),
                h && (t.dump = "&ref_" + c + " " + t.dump));
          else if ("[object Array]" === u) {
            var f = t.noArrayIndent && e > 0 ? e - 1 : e;
            r && 0 !== t.dump.length
              ? (!(function (t, e, n, r) {
                  var i,
                    s,
                    a = "",
                    o = t.tag;
                  for (i = 0, s = n.length; i < s; i += 1)
                    Z(t, e + 1, n[i], !0, !0) &&
                      ((r && 0 === i) || (a += P(t, e)),
                      t.dump && l === t.dump.charCodeAt(0)
                        ? (a += "-")
                        : (a += "- "),
                      (a += t.dump));
                  (t.tag = o), (t.dump = a || "[]");
                })(t, f, t.dump, s),
                h && (t.dump = "&ref_" + c + t.dump))
              : (!(function (t, e, n) {
                  var r,
                    i,
                    s = "",
                    a = t.tag;
                  for (r = 0, i = n.length; r < i; r += 1)
                    Z(t, e, n[r], !1, !1) &&
                      (0 !== r && (s += "," + (t.condenseFlow ? "" : " ")),
                      (s += t.dump));
                  (t.tag = a), (t.dump = "[" + s + "]");
                })(t, f, t.dump),
                h && (t.dump = "&ref_" + c + " " + t.dump));
          } else {
            if ("[object String]" !== u) {
              if (t.skipInvalid) return !1;
              throw new i("unacceptable kind of an object to dump " + u);
            }
            "?" !== t.tag && Y(t, t.dump, e, a);
          }
          null !== t.tag &&
            "?" !== t.tag &&
            (t.dump = "!<" + t.tag + "> " + t.dump);
        }
        return !0;
      }
      function Q(t, e) {
        var n,
          r,
          i = [],
          s = [];
        for (
          (function t(e, n, r) {
            var i, s, a;
            if (null !== e && "object" == typeof e)
              if (-1 !== (s = n.indexOf(e))) -1 === r.indexOf(s) && r.push(s);
              else if ((n.push(e), Array.isArray(e)))
                for (s = 0, a = e.length; s < a; s += 1) t(e[s], n, r);
              else
                for (i = Object.keys(e), s = 0, a = i.length; s < a; s += 1)
                  t(e[i[s]], n, r);
          })(t, i, s),
            n = 0,
            r = s.length;
          n < r;
          n += 1
        )
          e.duplicates.push(i[s[n]]);
        e.usedDuplicates = new Array(r);
      }
      function tt(t, e) {
        var n = new O((e = e || {}));
        return n.noRefs || Q(t, n), Z(n, 0, t, !0, !0) ? n.dump + "\n" : "";
      }
      (t.exports.dump = tt),
        (t.exports.safeDump = function (t, e) {
          return tt(t, r.extend({ schema: a }, e));
        });
    },
  ],
]);
//# sourceMappingURL=1.8a56abad7a1f3c98383e.js.map
