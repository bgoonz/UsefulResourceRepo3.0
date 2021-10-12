define("defineutilities", [], function () {
  !(function () {
    function e(e, t, n) {
      if (e[t]) {
        var i = (e.__appendedFunctions = e.__appendedFunctions || {});
        if (i[t]) i[t].push(n);
        else {
          i[t] = [];
          i[t].push(e[t]),
            i[t].push(n),
            (e[t] = function () {
              for (
                var e = this.__appendedFunctions[t], n = 0;
                n < e.length;
                n++
              )
                e[n].apply(this, arguments);
            });
        }
      } else e[t] = n;
    }
    function t(n, i, r) {
      for (var a in i)
        i.hasOwnProperty(a) &&
          (("initialize" !== a && "dispose" !== a) || r
            ? r && n[a]
              ? t(n[a], i[a], r)
              : (n[a] = i[a])
            : e(n, a, i[a]));
      return n;
    }
    function n(e) {
      var t = {};
      for (var n in e)
        if (e.hasOwnProperty(n)) {
          var i = e[n];
          i && "[object Array]" === Object.prototype.toString.call(i)
            ? (t[n] = i.slice(0))
            : (t[n] = i);
        }
      return t;
    }
    var i = 1;
    t(window, {
      getId: function (e) {
        var t;
        return (
          e
            ? (e.__id || (e.__id = String(i++)), (t = e.__id))
            : (t = String(i++)),
          t
        );
      },
      getKey: function (e) {
        var t;
        return e && (e.key || (e.key = getId(e)), (t = e.key)), t;
      },
      defineNamespace: function (e, n, i, r) {
        for (
          var a = e.split("."), s = i || window, o = 0;
          o < a.length - 1;
          o++
        )
          s = s[a[o]] = s[a[o]] || {};
        var l = a[a.length - 1];
        return s[l] ? t(s[l], n, r) : (s[l] = n), l;
      },
      defineClass: function (e, n, i, r) {
        var a = n.prototype,
          s = defineNamespace(e, n);
        if (
          ((a.__fullName = e),
          (a.__className = s),
          i && t(a, i),
          r && t(n, r),
          arguments.length > 4)
        )
          for (var o = 4; o < arguments.length; o++) t(a, arguments[o]);
      },
      defineSubClass: function (e, i, r, a, s) {
        var o = r || function () {};
        r = function () {
          i.apply(this, arguments), o.apply(this, arguments);
        };
        var l = r.prototype;
        if (
          (t(l, i.prototype),
          (l._base = i.prototype),
          l.__appendedFunctions &&
            (l.__appendedFunctions = n(l.__appendedFunctions)),
          defineClass(e, r, a, s),
          arguments.length > 5)
        )
          for (var d = 5; d < arguments.length; d++) t(l, arguments[d]);
      },
      appendFunction: e,
      mix: t,
      bind: function (e, t) {
        return function () {
          return t.apply(e, arguments);
        };
      },
    });
  })();
}),
  define("trace", ["defineutilities"], function () {
    !(function () {
      function e(e) {
        window.change && window.change(e);
      }
      function t(t) {
        t.length > r && t.splice(i, t.length - i), e(t);
      }
      var n,
        i = 80,
        r = 200,
        a = 50,
        s = "",
        o = "default",
        l = 0,
        d = {},
        u = [],
        c = [],
        f = [],
        h = 0,
        _ = [],
        m = 0;
      c.push({ children: f }), (_.__isObservable = !0);
      var p = -1;
      defineNamespace("Trace", {
        events: f,
        frames: _,
        averageFrameTime: 0,
        categories: u,
        register: function (t, n) {
          if (!d[t]) {
            var i = {
              name: t,
              isEnabled: !0,
              isVisible: !0,
              __isObservable: !0,
            };
            n && mix(i, n), (d[t] = i), u.push(i), e(u);
          }
        },
        startFrame: function () {
          n = new Date().getTime();
        },
        endFrame: function () {
          if (n) {
            var t = { key: h++, time: new Date().getTime() - n };
            _.push(t),
              (m += t.time),
              _.length > a && ((m -= _[0].time), _.splice(0, 1)),
              (Trace.averageFrameTime = m / _.length),
              e(_);
          }
        },
        log: function (e, t, n) {
          return Trace.logTo(c[0], e, t, n);
        },
        logTo: function (n, i, r, a) {
          var u = { children: [] };
          (r = r || o), Trace.register(r);
          var c = d[r].isEnabled;
          if (c) {
            var f = new Date();
            -1 == p && (p = f),
              n && (n.duration = f - n.startTime),
              (u = {
                key: l++,
                category: r,
                message: i || s,
                timeStamp: f - p,
                startTime: f,
                children: [],
                __isObservable: !0,
              }),
              (u.children.__isObservable = !0);
            var h = a && a.dataBundle;
            h &&
              (u.dataBundle = a.shouldSynchronizeSerialization
                ? Object.toJSON(h, void 0, 2, !0, !0)
                : h),
              n && (n.children.unshift(u), e(n), t(n.children));
          }
          return u;
        },
        startContext: function (e, t) {
          var n = Trace.log(e, t);
          return c.unshift(n), n;
        },
        endContext: function () {
          var t = new Date().getTime(),
            n = c.shift();
          (n.duration = t - n.startTime), e(n);
        },
        clearEvents: function () {
          (this.events.length = 0), e(this.events), (p = -1);
        },
      });
    })();
  }),
  define(
    "jbasedebug",
    ["debug", "defineutilities", "trace", "validateconfig", "lightobject"],
    function () {
      !(function () {
        function e(e) {
          var t = (e || "") + "\n\n";
          return (
            !window.confirm ||
            !confirm(
              "Debug assert failed!\n\n" + t + '\n\nPress "Cancel" to debug.'
            )
          );
        }
        defineNamespace("Debug", {
          throwOnAssert: !1,
          log: Trace.log,
          assert: function (t, n) {
            if (!t) {
              if (Debug.throwOnAssert) throw new Debug.AssertError(n);
              e(n);
            }
          },
          fail: function (e) {},
        });
      })();
    }
  ),
  define("jbase", ["jbasedebug"], function () {
    !(function () {
      defineNamespace("JBase", {
        disposables: [],
        dispose: function () {
          for (var e = JBase.disposables.length, t = 0; e > t; t++)
            this.disposables[t].dispose();
          this.disposables = [];
        },
      });
    })();
  }),
  define("qos", ["debug", "utilityextensions"], function () {
    !(function () {
      function e(e, t, n) {
        e = e || {};
        var l = t ? s : null,
          d = t ? o : null,
          u = null,
          f = new Date().getTime();
        if (
          ((e.startTime = e.startTime || f),
          (e.endTime = e.endTime || f),
          n && n.stack)
        ) {
          l = n.code || (e.isLogged ? a : r);
          var h =
            n.message || n.description || (n.toString ? n.toString() : "");
          -1 == h.indexOf(i)
            ? (Qos.displayErrorCallback && Qos.displayErrorCallback(n),
              (e.id = e.id || c),
              (e.asyncOperations = 0),
              (n.message = n.description = i + h),
              (u = n.stack))
            : (n = null);
        }
        e.id &&
          ((e.isLogged && !n) ||
            ((e.isLogged = !0),
            e.errorCodeSuffix &&
              (l = (l || "success") + "-" + e.errorCodeSuffix),
            Qos.log(e.id, null, e.startTime, l, d, u, e.endTime)));
      }
      var t = window,
        n = t.$Utility,
        i = "QOS issue: ",
        r = "UnhandledException",
        a = "UnhandledAsyncException",
        s = "UnhandledChildException",
        o = "c",
        l = "f",
        d = 1,
        u = {},
        c = "",
        f = "",
        h = [],
        _ = !1,
        m = 0,
        p = 10,
        g = !(!window.$Config || !$Config.isQosEnabled);
      (window.Qos = {
        responseType: { success: "s", expected: "c", unexpected: "f" },
        isEnabled: g,
        instrument: function (e, t) {
          return t && t.apply
            ? function () {
                var n;
                if ((e && h.push(e), _)) t && (n = t.apply(this, arguments));
                else
                  try {
                    t && ((_ = !0), (n = t.apply(this, arguments)));
                  } catch (i) {
                    Qos.instrumentException(i);
                  } finally {
                    _ = !1;
                  }
                return e && Qos.end(), n;
              }
            : t;
        },
        onUnhandledError: function (e, t, n) {
          if (((n = n || ""), e && t)) {
            var i = " (" + t + ")",
              r = n.indexOf("\n");
            -1 !== r ? (n = n.substring(0, r) + i + n.substring(r)) : (n += i),
              (n = e + "\nat " + n),
              Qos.instrumentException({
                message: e,
                stack: n,
                isUnhandled: !0,
              });
          }
        },
        clearLogs: function () {
          var e = u;
          return (d = 1), (u = {}), e;
        },
        createContext: function (e, t) {
          var i = null,
            r = Qos.getContext();
          return (
            e &&
              ((i = {
                id: e,
                startTime: new Date().getTime(),
                actionId: n.generateGuid(),
                errorCodeSuffix: t,
              }),
              r && (i.parentActionId = r.actionId)),
            i
          );
        },
        start: function (e) {
          h.push(Qos.createContext(e));
        },
        end: function () {
          e(h.pop());
        },
        getContext: function () {
          var e = h.length ? h[h.length - 1] : null;
          return e;
        },
        instrumentException: function (t) {
          if (t) {
            if (
              (window.JSCaughtError && window.JSCaughtError.logData(t),
              window.appInsights && appInsights._onerror)
            )
              if (p > m)
                m++, appInsights._onerror(t.message, null, null, null, t);
              else if (m === p) {
                m++;
                var n = new Error(
                  "Exception logging limit of {0} reached".format(p)
                );
                appInsights._onerror(n.message, null, null, null, n);
              }
            if (t.stack) for (e(h.pop(), !1, t); h.length; ) e(h.pop(), !0);
            if (!t.isUnhandled) {
              throw t;
            }
          }
        },
        log: function (e, t, n, i, r, a, s) {
          if (e && Qos.isEnabled) {
            a &&
              r === l &&
              Qos.displayErrorCallback &&
              Qos.displayErrorCallback({ stack: a }),
              (s = s || new Date().getTime()),
              n > s && (n = s);
            var o = {
                id: e,
                partnerId: t,
                startTime: n || s,
                errorCode: i,
                errorType: r,
                stack: a,
                endTime: s,
              },
              c = Qos.getContext();
            c &&
              ((o.actionId = c.actionId),
              (o.parentActionId = c.parentActionId)),
              (u[d++] = o);
          }
        },
        logData: function (e, t, n, i, r, a, s) {
          var o = a ? JSON.stringify(a) : "";
          Qos.log(e, t, n, i, r, o, s);
        },
        displayErrorCallback: function (e) {},
        registerDefaultErrorId: function (e) {
          c = e;
        },
        registerQosOnLogErrorId: function (e) {
          f = e;
        },
      }),
        Qos.clearLogs();
    })();
  }),
  define("qosoverrides", ["qos"], function () {
    !(function () {
      function e(e) {
        return e.__qosId || (e.__qosId = String(a++)), e.__qosId;
      }
      function t() {
        return (
          arguments[0] &&
            "function" == typeof arguments[0] &&
            (arguments[0] = Qos.instrument(Qos.getContext(), arguments[0])),
          o.apply(this, arguments)
        );
      }
      function n() {
        return (
          arguments[0] &&
            "function" == typeof arguments[0] &&
            (arguments[0] = Qos.instrument(Qos.getContext(), arguments[0])),
          l.apply(this, arguments)
        );
      }
      function i(t) {
        return function (n, i) {
          if (arguments.length >= 2 && i) {
            var r = n + e(i),
              a = (s[r] = Qos.instrument(null, i));
            arguments[1] = a;
          }
          return t.apply(this, arguments);
        };
      }
      function r(t) {
        return function (n, i) {
          if (arguments.length >= 2 && i) {
            var r = n + e(i),
              a = s[r];
            a && ((arguments[1] = a), delete s[r]);
          }
          return t.apply(this, arguments);
        };
      }
      var a = 1,
        s = {},
        o = setTimeout,
        l = setInterval;
      if (Qos.isEnabled) {
        try {
          (setTimeout = t), (setInterval = n);
        } catch (d) {}
        if (
          window.Node &&
          window.Node.prototype &&
          window.Node.prototype.addEventListener &&
          window.Window
        ) {
          var u = window.Node.prototype,
            c = Window.prototype;
          (u.addEventListener = i(u.addEventListener)),
            (u.removeEventListener = r(u.removeEventListener)),
            (c.addEventListener = i(c.addEventListener)),
            (c.removeEventListener = r(c.removeEventListener));
        }
      }
    })();
  }),
  define("addremovelisteners", [], function () {
    !(function () {
      (window.addListener = function (e, t, n, i) {
        e.addEventListener
          ? e.addEventListener(t, n, !!i)
          : e.attachEvent("on" + t, n);
      }),
        (window.removeListener = function (e, t, n, i) {
          e.removeEventListener
            ? e.removeEventListener(t, n, !!i)
            : e.detachEvent("on" + t, n);
        });
    })();
  }),
  define("registerstyle", ["addremovelisteners"], function () {
    !(function () {
      function e() {
        if (void 0 === i) {
          var e = document.createElement("style");
          (e.type = "text/css"), (i = !!e.styleSheet);
        }
        return i;
      }
      function t(e) {
        if ((r = r || document.getElementsByTagName("head")[0])) {
          var t = document.createElement("style");
          (t.type = "text/css"),
            t.appendChild(document.createTextNode(e)),
            r.appendChild(t);
        } else l += e;
      }
      function n(e) {
        (r = r || document.getElementsByTagName("head")[0]),
          r
            ? ((!a || o.length + e.length > s) &&
                ((o = ""),
                (a = document.createElement("style")),
                (a.type = "text/css"),
                r.appendChild(a)),
              (o += e),
              (a.styleSheet.cssText = o))
            : (l += e);
      }
      var i,
        r,
        a,
        s = 4e3,
        o = "",
        l = "";
      (window.registerStyle = e() ? n : t),
        addListener(window, "load", function () {
          if (l && document.body) {
            var e = l;
            (l = ""), registerStyle(e);
          }
        });
    })();
  }),
  define(
    "renderutilities",
    [
      "defineutilities",
      "registerstyle",
      "addremovelisteners",
      "trace",
      "qosoverrides",
    ],
    function () {
      !(function () {
        function e(e) {
          (e = new Date().getTime() - o), (l = !1);
          var t = c,
            n = f;
          (u = 0), (d = 0), (c = {}), (f = {}), (h = !1);
          for (var i in t) t[i](e);
          for (i in n) n[i](e);
        }
        function t(e) {
          c[e] && delete c[e];
        }
        function n(e, t, n) {
          var i = c[e];
          i || d++, u++, (h = h || !n), (c[e] = t), a();
        }
        function i(e) {
          f[e] && delete f[e];
        }
        function r(e, t, n) {
          var i = f[e];
          i || d++, u++, (h = h || !n), (f[e] = t), a();
        }
        function a() {
          l ||
            ((l = !0),
            (o = new Date().getTime()),
            safeRequestAnimationFrame(e));
        }
        function s(e, t, i, r) {
          function a(s) {
            (m[e] += s),
              _[e] % i === 0 ? ((_[e] = 0), t(m[e])) : n(e, a, r),
              _[e]++;
          }
          void 0 === _[e] && ((_[e] = 0), (m[e] = 0)), n(e, a, r);
        }
        var o,
          l = !1,
          d = 0,
          u = 0,
          c = {},
          f = {},
          h = !1,
          _ = {},
          m = {},
          p = "OnRenderFrame",
          g = !1;
        Trace.register(p, { isEnabled: !1 });
        var v = window.$B && $B.SF_Mac,
          C =
            window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.oRequestAnimationFrame ||
            window.msRequestAnimationFrame;
        C && !v
          ? (g = !0)
          : (C = function (e) {
              setTimeout(e, 0);
            }),
          (window.safeRequestAnimationFrame = function (e) {
            return C.call(this, Qos.instrument(Qos.getContext(), e));
          }),
          mix(window, {
            doOnRenderFrame: n,
            doOnRenderFrameEveryXFrames: s,
            stopDoOnRenderFrame: t,
            doOnEndOfRenderFrame: r,
            stopDoOnEndOfRenderFrame: i,
            c_doOnRenderFrameTraceCategory: p,
            c_nativeRequestAnimationFrameSupport: g,
          });
      })();
    }
  ),
  define("domutilities", ["renderutilities"], function () {
    !(function () {
      function e(e, t) {
        for (; e && e != window && e.tagName !== t; ) e = e.parentNode;
        return e;
      }
      function t(e, t) {
        for (; e && e != window && !i(e, t); ) e = e.parentNode;
        return e;
      }
      function n(e) {
        if (!e._classNames) {
          e._classNames = {};
          for (
            var t = (e.className && e.className.split(" ")) || [], n = 0;
            n < t.length;
            n++
          )
            e._classNames[t[n]] = !0;
        }
      }
      function i(e, t) {
        var i = !1;
        return e && (n(e), (i = void 0 != e._classNames[t])), i;
      }
      function r(e, t, i, r) {
        if (e) {
          n(e);
          var a = e._classNames;
          (isEnabled = a[t]), void 0 === i && (i = !isEnabled);
          var s = !1;
          if (
            (!isEnabled && i
              ? ((a[t] = !0), (s = !0))
              : isEnabled && !i && (delete a[t], (s = !0)),
            s)
          ) {
            var o = [];
            for (var l in a) o.push(l);
            (e._newClassName = o.join(" ")),
              r
                ? (e.className = e._newClassName)
                : doOnRenderFrame(
                    "_renderFrameToggleClass_" + getId(e),
                    function () {
                      e.className = e._newClassName;
                    }
                  );
          }
        }
      }
      function a(e, t) {
        e.textContent = t;
      }
      function s(e, t) {
        e.innerText = t;
      }
      function o(e) {
        return e.textContent;
      }
      function l(e) {
        return e.innerText;
      }
      function d(e) {
        return e ? String(e).encodeHtmlAttribute() : "";
      }
      function u(e) {
        return e ? String(e).encodeHtml() : "";
      }
      function c(e, t) {
        return (t = t || document), t.querySelector("." + e);
      }
      function f(e, t) {
        t = t || document.body;
        var n,
          i,
          r = new RegExp("(^|\\s)" + e + "(\\s|$)"),
          a = null,
          s = t.childNodes;
        for (i = 0; i < s.length; i++)
          if (((n = s[i]), r.test(n.className))) {
            a = n;
            break;
          }
        for (i = 0; i < s.length; i++) {
          var o = f(s[i], e);
          if (o) {
            a = o;
            break;
          }
        }
        return a;
      }
      var h = !!document.querySelector,
        _ = "undefined" == typeof document.textContent;
      mix(window, {
        setText: _ ? s : a,
        getText: _ ? l : o,
        setHtml: function (e, t) {
          e.innerHTML = t;
        },
        getHtml: function (e) {
          return e.innerHTML;
        },
        getRect: function (e) {
          var t = null;
          if (e) {
            try {
              t = e.getBoundingClientRect();
            } catch (n) {
              t = { left: 0, top: 0, width: 0, height: 0 };
            }
            void 0 === t.width &&
              (t = {
                left: t.left,
                top: t.top,
                width: t.right - t.left,
                height: t.bottom - t.top,
              });
          }
          return t;
        },
        byClass: h ? c : f,
        byId: function (e, t) {
          return (
            (t = t && t.getElementById ? t : document), t.getElementById(e)
          );
        },
        ce: function (e, t) {
          var n = document.createElement(e);
          return t && setHtml(n, t), n;
        },
        isInputElement: function (e) {
          var t = e.tagName && e.tagName.toLowerCase(),
            n = e.getAttribute("type");
          return (
            "textarea" === t ||
            "select" === t ||
            ("input" === t && "text" == n) ||
            "password" == n
          );
        },
        generateAttributesString: function () {
          for (var e = arguments.length, t = "", n = 1; e > n; n += 2) {
            var i = arguments[n - 1],
              r = arguments[n];
            switch (i) {
              case "aria-expanded":
              case "aria-selected":
              case "aria-checked":
              case "aria-pressed":
                r = "string" == typeof r ? r : String(!!r);
                break;
              case "checked":
              case "disabled":
                r ? (r = i) : (i = null);
            }
            i && (t += i + '="' + htmlAttributeEncode(r) + '" ');
          }
          return t ? " " + t : "";
        },
        generateClassAttribute: function () {
          for (var e = "", t = arguments.length, n = 1; t > n; n += 2) {
            var i = arguments[n - 1],
              r = arguments[n];
            r && (e += " " + i);
          }
          return e;
        },
        generateStyleAttribute: function () {
          for (var e = arguments.length, t = "", n = 1; e > n; n += 2) {
            var i = processStyleAttribute(arguments[n - 1], arguments[n]);
            i && (t += i);
          }
          return t;
        },
        processStyleAttribute: function (e, t) {
          var n = "";
          switch (e) {
            case "display":
              t = t && "false" != t ? "block" : "none";
              break;
            case "display.inline":
              (t = t && "false" != t ? "inline" : "none"),
                (e = null),
                (n = "display:" + t + ";");
              break;
            case "display.inlineblock":
              (t = t && "false" != t ? "inline-block" : "none"),
                (e = null),
                (n = "display:" + t + ";");
              break;
            case "visibility":
              t === !0 ? (t = "visible") : t === !1 && (t = "hidden");
              break;
            case "opacity":
              n = "filter:alpha(opacity=" + Math.round(100 * t) + ");";
              break;
            case "width":
            case "height":
            case "left":
            case "right":
            case "top":
            case "bottom":
              void 0 === t && (e = null);
              break;
            case "width.px":
            case "height.px":
            case "left.px":
            case "right.px":
            case "top.px":
            case "bottom.px":
              (e = e.replace(".px", "")),
                void 0 === t && (e = null),
                (t += "px");
          }
          return e && (n += e + ":" + t + ";"), n;
        },
        closest: e,
        closestWithClass: t,
        hasClass: i,
        toggleClass: r,
        htmlEncode: u,
        htmlAttributeEncode: d,
      });
    })();
  }),
  define("objecteventing", ["defineutilities"], function () {
    !(function () {
      var e = "change";
      defineNamespace("Shared.ObjectEventing", {
        addObjectListener: function (e, t, n, i) {
          var r,
            a,
            s = this,
            o = { object: e, eventName: t, parent: s, callback: n, apiId: i };
          (r = getId(e)),
            (s.__objectListeners = s.__objectListeners || {}),
            (s.__objectListeners[t] = s.__objectListeners[t] || {}),
            (a = s.__objectListeners[t][r] = s.__objectListeners[t][r] || []),
            a.push(o),
            (r = getId(s)),
            (e.__eventCallbacks = e.__eventCallbacks || {}),
            (e.__eventCallbacks[t] = e.__eventCallbacks[t] || {}),
            (a = e.__eventCallbacks[t][r] = e.__eventCallbacks[t][r] || []),
            a.push(o);
        },
        removeObjectListener: function (e, t) {
          var n = this,
            i = n.__objectListeners,
            r = e.__eventCallbacks;
          if (i) {
            var a = i[t];
            a && delete a[getId(e)];
          }
          if (r) {
            var s = r[t];
            s && delete s[getId(n)];
          }
        },
        addChangeListener: function (t, n, i) {
          this.addObjectListener(t, e, n, i);
        },
        removeChangeListener: function (t) {
          this.removeObjectListener(t, e);
        },
        clearObjectListeners: function () {
          var e = this.__objectListeners,
            t = getId(this);
          if (e)
            for (var n in e) {
              var i = e[n];
              for (var r in i)
                for (var a = i[r], s = 0; s < a.length; s++)
                  delete a[s].object.__eventCallbacks[n][t];
            }
          delete this.__objectListeners;
        },
        dispose: function () {
          this.clearObjectListeners();
        },
      }),
        mix(window, {
          raiseEvent: function (e, t, n, i) {
            var r =
                e.__eventCallbacks && e.__eventCallbacks[t]
                  ? e.__eventCallbacks[t]
                  : null,
              a = window.Qos;
            if (r)
              for (var s in r)
                for (var o = r[s], l = 0; l < o.length; l++) {
                  var d = o[l],
                    u = d.callback;
                  if (
                    (a &&
                      d.apiId &&
                      (u = a.instrument(a.createContext(d.apiId), u)),
                    u.call(d.parent || window, n) === !1)
                  )
                    return !1;
                }
            return i && e.parent && raiseEvent(e.parent, t, n, i), !0;
          },
          hasObservers: function (e, t) {
            var n = e && e.__eventCallbacks ? e.__eventCallbacks[t] : null,
              i = !1;
            for (var r in n) {
              i = !0;
              break;
            }
            return i;
          },
          raiseEventWithProcessing: function (e, t, n, i, r) {
            var a =
              e.__eventCallbacks && e.__eventCallbacks[t]
                ? e.__eventCallbacks[t]
                : null;
            if (a)
              for (var s in a)
                for (var o = a[s], l = 0; l < o.length; l++) {
                  var d = o[l],
                    u = d.callback.call(d.parent || window, i);
                  if (n(u, i) === !1) return;
                }
            r && e.parent && raiseEventWithProcessing(e.parent, t, n, i, r);
          },
          change: function (t, n, i) {
            raiseEvent(t, e, n, i);
          },
        });
    })();
  }),
  define("promise", ["defineutilities", "debug"], function () {
    !(function () {
      function e() {
        var e = this;
        e._state === i.executing &&
          ((e._state = i.complete),
          (e._completeArguments = arguments),
          e._callPromiseCallbacks());
      }
      function t() {
        var e = this;
        e._state === i.executing &&
          ((e._state = i.error),
          (e._completeArguments = arguments),
          e._callPromiseCallbacks());
      }
      function n() {
        var e = this;
        e._state === i.executing &&
          ((e._progressArguments = arguments), e._callPromiseCallbacks());
      }
      var i = { executing: 1, complete: 2, error: 3, cancelled: 4 },
        r = 0;
      defineClass(
        "Shared.Promise",
        function (i, a) {
          var s = this;
          (s.id = r++),
            (s._thenHandlers = []),
            (s._onExecute = i),
            (s._onCancel = a),
            (s._complete = bind(s, e)),
            (s._error = bind(s, t)),
            (s._progress = bind(s, n)),
            (s._completeArguments = []),
            (s._progressArguments = []),
            (s._done = null),
            s._executePromise();
        },
        {
          isPromise: !0,
          _state: i.executing,
          then: function (e, t, n) {
            var i,
              r,
              a,
              s,
              o = this,
              l = new Shared.Promise(
                function (e, t, n) {
                  (i = e), (r = t), (a = n);
                },
                function () {
                  o.cancel(), s && s.cancel();
                }
              );
            return (
              o._thenHandlers.push({
                onComplete: function () {
                  var t = e ? e.apply(this, arguments) : null;
                  t ? (s = t.then(i, r, a)) : i();
                },
                onError: function () {
                  t && t.apply(this, arguments), r.apply(this, arguments);
                },
                onProgress: function () {
                  n && n.apply(this, arguments), a.apply(this, arguments);
                },
              }),
              o._callPromiseCallbacks(),
              l
            );
          },
          cancel: function () {
            var e = this;
            e._state !== i.complete &&
              ((e._state = i.cancelled),
              e._onCancel &&
                (e._onCancel(),
                (e._onCancel = null),
                (e._completeArguments = [new Error("Canceled")]))),
              e._callPromiseCallbacks();
          },
          done: function (e, t, n) {
            var i = this;
            return (
              (i._done = { onComplete: e, onError: t, onProgress: n }),
              i._callPromiseCallbacks(),
              i
            );
          },
          _callPromiseCallbacks: function () {
            var e,
              t,
              n,
              r = this;
            if (r._state == i.executing) {
              if (r._progressArguments) {
                for (var a = 0; a < r._thenHandlers.length; a++)
                  (n = r._thenHandlers[a]),
                    n.onProgress && n.onProgress.apply(r, r._progressArguments);
                r._progressArguments = null;
              }
            } else {
              for (; r._thenHandlers.length; ) {
                switch (((n = r._thenHandlers.shift()), r._state)) {
                  case i.complete:
                    t = n.onComplete;
                    break;
                  case i.cancelled:
                  case i.error:
                    t = n.onError;
                }
                t && (e = t.apply(r, r._completeArguments));
              }
              if (r._done) {
                if (
                  (t =
                    r._state === i.complete || r._state === i.cancelled
                      ? r._done.onComplete
                      : r._done.onError)
                )
                  t.apply(r, r._completeArguments);
                else if (r._state === i.error)
                  throw {
                    message:
                      "Promise failed, but done.onError was not implemented.",
                    promise: r,
                  };
                r._done = null;
              }
            }
            return e;
          },
          _executePromise: function () {
            var e = this;
            try {
              e._onExecute &&
                e._onExecute.call(e, e._complete, e._error, e._progress);
            } catch (t) {
              (e._lastException = t), (e._state = i.error);
            }
            e._callPromiseCallbacks();
          },
        },
        {
          timeout: function (e) {
            var t,
              n =
                !e && window.setImmediate
                  ? window.setImmediate
                  : window.setTimeout,
              i =
                !e && window.clearImmediate
                  ? window.clearImmediate
                  : window.clearTimeout;
            return new Shared.Promise(
              function (i, r) {
                t = !!n(i, e);
              },
              function () {
                i(t);
              }
            );
          },
          retry: function (e, t, n, i) {
            var r = null;
            return new Shared.RetriablePromise(
              function (t, n, i) {
                (r = e()), r.then(t, n, i);
              },
              function () {
                r && r.cancel();
              },
              t,
              n,
              i
            );
          },
          wrap: function (e) {
            var t = new Shared.Promise();
            return t._complete(e), t;
          },
        }
      );
    })();
  }),
  define("retriablepromise", ["promise"], function () {
    !(function () {
      defineSubClass(
        "Shared.RetriablePromise",
        Shared.Promise,
        function (e, t, n, i, r) {
          (this._maxRetries = n),
            (this._retryIndex = 0),
            (this._retryDurations = i),
            (this._onIsRetriable = r),
            this._executePromiseWithRetry();
        },
        {
          _executePromise: function () {},
          _executePromiseWithRetry: function () {
            var e = this,
              t = new Shared.Promise(e._onExecute, e._onCancel);
            t.then(e._complete, function () {
              var t = e._onIsRetriable
                ? e._onIsRetriable.apply(e, arguments)
                : !0;
              if (t && e._retryIndex < e._maxRetries) {
                if (e._retryDurations) {
                  var n =
                    e._retryDurations[e._retryIndex % e._retryDurations.length];
                  Shared.Promise.timeout(n).then(
                    bind(e, e._executePromiseWithRetry),
                    e._onCancel
                  );
                } else e._executePromiseWithRetry();
                e._retryIndex++;
              } else e._error.apply(e, arguments);
            });
          },
        }
      );
    })();
  }),
  define(
    "async",
    ["defineutilities", "qosoverrides", "retriablepromise"],
    function () {
      !(function () {
        function e(e, t, i, r) {
          var a = { id: e, caller: t, callback: i };
          (r ? d : u).push(a), (l[e] = a), n();
        }
        function t(e) {
          delete l[e];
        }
        function n() {
          r || (!d.length && !u.length) || (r = setTimeout(i, o));
        }
        function i() {
          var e,
            t = 0,
            i = 0;
          for (
            r = 0, _executionStartTime = new Date().getTime();
            d.length && s > i && a > t;

          )
            (e = d[0]),
              l[e.id]
                ? (e.callback.apply(e.caller) ||
                    ((e = d.shift()), delete l[e.id]),
                  i++)
                : d.shift(),
              (t = new Date().getTime() - _executionStartTime);
          for (; u.length && s > i && a > t; )
            (e = u.shift()),
              l[e.id] &&
                (e.callback.apply(e.caller) ? u.push(e) : delete l[e.id], i++),
              (t = new Date().getTime() - _executionStartTime);
          n();
        }
        var r,
          a = 10,
          s = 999999,
          o = 5,
          l = {},
          d = [],
          u = [];
        defineNamespace("Shared.Async", {
          _timeoutIds: null,
          _throttledFunctions: null,
          _isDisposed: !1,
          dispose: function () {
            var e,
              t = this;
            if (((t._isDisposed = !0), t._timeoutIds)) {
              for (e in t._timeoutIds) t.clearTimeout(e);
              t._timeoutIds = null;
            }
            t._throttledFunctions = null;
          },
          setTimeout: function (e, t) {
            var n = this,
              i = 0;
            return (
              n._isDisposed ||
                (n._timeoutIds || (n._timeoutIds = {}),
                (i = setTimeout(function () {
                  delete n._timeoutIds[i], e.apply(n);
                }, t)),
                (n._timeoutIds[i] = !0)),
              i
            );
          },
          clearTimeout: function (e) {
            var n = this;
            n._timeoutIds &&
              n._timeoutIds[e] &&
              (clearTimeout(e), delete n._timeoutIds[e], t(e));
          },
          asyncRepeat: function (n, i) {
            var r = Qos.getContext();
            i = Qos.instrument(r, i);
            var a = this,
              s = 0,
              o = getId();
            return new Shared.Promise(
              function (t, r) {
                function l() {
                  var e;
                  try {
                    e = i.call(a, s++);
                  } catch (o) {
                    (iterations = 0), r(o);
                  }
                  return (e !== !1 && s != n) || ((s = n), t()), n > s;
                }
                n > 0 ? e(o, a, l, !1) : t();
              },
              function () {
                t(o);
              }
            );
          },
          throttle: function (e, t, n, i, r) {
            var a = this;
            if (!a._isDisposed) {
              a._throttledFunctions || (a._throttledFunctions = {});
              var s = a._throttledFunctions[e],
                o = new Date().getTime();
              s
                ? ((s.lastExecuteTime = o),
                  (s.waitTime = t > s.waitTime ? t : s.waitTime),
                  (s.maxWaitTime = n > s.maxWaitTime ? n : s.maxWaitTime),
                  (s.callback = i),
                  (s.calledCallback = !1))
                : ((s = a._throttledFunctions[e] =
                    {
                      lastExecuteTime: o,
                      startTime: o,
                      callback: i,
                      waitTime: t,
                      maxWaitTime: n,
                      calledCallback: r,
                    }),
                  a.setTimeout(function () {
                    a._callThrottledCallback(e);
                  }, t),
                  r && i());
            }
          },
          _callThrottledCallback: function (e) {
            var t = this;
            if (t._throttledFunctions) {
              var n = t._throttledFunctions[e],
                i = new Date().getTime(),
                r = i - n.startTime,
                a = i - n.lastExecuteTime;
              if (a >= n.waitTime || (n.maxWaitTime && r >= n.maxWaitTime))
                delete this._throttledFunctions[e],
                  n.calledCallback || n.callback.apply(t);
              else {
                var s = n.waitTime - a;
                n.maxWaitTime &&
                  (s = Math.max(0, Math.min(s, n.maxWaitTime - r))),
                  t.setTimeout(function () {
                    t._callThrottledCallback(e);
                  }, s);
              }
            }
          },
        });
      })();
    }
  ),
  define(
    "workmonitor",
    [
      "defineutilities",
      "validateconfig",
      "retriablepromise",
      "async",
      "lightarray",
    ],
    function () {
      !(function () {
        function e(e, n) {
          c.throttle(a + e, s, s, function () {
            t(e, n);
          });
        }
        function t(e, n) {
          if (0 == n.pendingCount) {
            var r = u[e];
            if (r) {
              for (var s = -1, o = 0; o < r.length; o++) {
                var l = r[o];
                i(l)
                  ? o--
                  : (s = -1 == s ? l.duration : Math.min(s, l.duration));
              }
              -1 != s &&
                c.throttle(a + e, s, s, function () {
                  t(e, n);
                });
            }
          }
        }
        function n(e) {
          var t = d[e];
          return t || (t = d[e] = { pendingCount: 0, completedCount: 0 }), t;
        }
        function i(e) {
          for (
            var t = !1,
              n = new Date().getTime(),
              i = e.tags,
              a = e.duration,
              s = 0;
            s < i.length;
            s++
          ) {
            var o = i[s],
              l = d[o];
            if (0 != l.pendingCount || n - l.lastCompleted < a) break;
          }
          return s == i.length && ((t = r(e)), e.completeCallback()), t;
        }
        function r(e) {
          for (var t = !1, n = e.tags, i = 0; i < n.length; i++) {
            var r = n[i],
              a = u[r];
            a && (t = a.remove(e));
          }
          return t;
        }
        var a = "Shared.WorkMonitor.Throttle.",
          s = 20,
          o = 1,
          l = {},
          d = {},
          u = {},
          c = {};
        mix(c, Shared.Async),
          defineNamespace("Shared.WorkMonitor", {
            _taggedWork: d,
            StandardTags: {
              Network: "Network",
              Network_Image: "Network_Image",
              Network_Data: "Network_Data",
              Network_Preload: "Network_Preload",
              Network_Video: "Network_Video",
              UserInput: "UserInput",
            },
            startWork: function (e) {
              var t = { id: o++, tags: e };
              l[t.id] = t;
              for (var i = 0; i < e.length; i++) {
                var r = e[i],
                  a = n(r);
                a.pendingCount++;
              }
              return t.id;
            },
            completeWork: function (t) {
              var n = l[t];
              if (n) {
                delete l[t];
                for (
                  var i = new Date().getTime(), r = n.tags, a = 0;
                  a < r.length;
                  a++
                ) {
                  var s = r[a],
                    o = d[s];
                  (o.lastCompleted = i),
                    o.pendingCount--,
                    o.completedCount++,
                    e(s, o);
                }
              }
            },
            waitUntilWorkIdle: function (t, i) {
              var a = { tags: t, duration: i },
                s = new Shared.Promise(
                  function (i, r) {
                    a.completeCallback = i;
                    for (var s = 0; s < t.length; s++) {
                      var o = t[s],
                        l = u[o];
                      l || (l = u[o] = []), l.push(a), e(o, n(o));
                    }
                  },
                  function () {
                    r(a);
                  }
                );
              return s;
            },
            monitorPromise: function (e, t) {
              var n = Shared.WorkMonitor.startWork(e);
              t.then(
                function () {
                  Shared.WorkMonitor.completeWork(n);
                },
                function () {
                  Shared.WorkMonitor.completeWork(n);
                }
              );
            },
          });
      })();
    }
  ),
  define(
    "elementeventing",
    ["jquery-1.7.2", "defineutilities", "debug", "qosoverrides", "workmonitor"],
    function () {
      !(function (e) {
        function t(t) {
          t && e(t.element).bind(t.eventName, t.callback);
        }
        function n(t) {
          t && e(t.element).unbind(t.eventName, t.callback);
        }
        var i = Shared.WorkMonitor;
        defineNamespace("Shared.ElementEventing", {
          addElementListener: function (e, t, n, i) {
            this.addTargetedListener(e, t, null, n, i);
          },
          addTargetedListener: function (e, n, r, a, s) {
            var o = a,
              l = this,
              d = null;
            a = function (t) {
              return this.isDisposed
                ? void 0
                : (i.completeWork(
                    i.startWork([
                      i.StandardTags.UserInput,
                      i.StandardTags.UserInput + "_" + n.toLowerCase(),
                    ])
                  ),
                  Qos.instrument(s ? Qos.createContext(s) : null, function () {
                    var n,
                      i = e;
                    if (r)
                      for (i = t.target; i; ) {
                        if (
                          i.control &&
                          i.control.__fullName === r.prototype.__fullName
                        ) {
                          d = i.control;
                          break;
                        }
                        (i = i.parentNode), "BODY" === i.tagName && (i = null);
                      }
                    return (
                      i &&
                        ((t.currentTarget = i),
                        (t.targetControl = d),
                        (n = o.apply(l, arguments)),
                        n === !1 &&
                          t.preventDefault &&
                          (t.preventDefault(), (t.returnValue = !1))),
                      n
                    );
                  }).apply(this, arguments));
            };
            var u = {
              element: e,
              eventName: n,
              originalCallback: o,
              callback: a,
              callbackInstance: l,
            };
            t(u),
              (l.__elementListeners = l.__elementListeners || []),
              l.__elementListeners.push(u);
          },
          removeElementListener: function (e, t, i) {
            for (
              var r = this, a = r.__elementListeners || [], s = -1, o = 0;
              o < a.length && -1 == s;
              o++
            ) {
              var l = a[o];
              s =
                l.element === e &&
                l.eventName === t &&
                l.originalCallback === i &&
                l.callbackInstance === r
                  ? o
                  : -1;
            }
            -1 !== s && (n(a[s]), a.splice(s, 1));
          },
          clearElementListeners: function () {
            var e = this.__elementListeners;
            if (e && e.length) for (var t = 0; t < e.length; t++) n(e[t]);
            delete this.__elementListeners;
          },
          dispose: function () {
            this.clearElementListeners();
          },
          raise: function (e, t, n, i) {
            var r;
            if (e && (e instanceof HTMLElement || e.addEventListener)) {
              if (document.createEvent) {
                var a = document.createEvent("HTMLEvents");
                a.initEvent(t, i, !0), (a.args = n), (r = e.dispatchEvent(a));
              } else if (document.createEventObject) {
                var s = document.createEventObject(n);
                e.fireEvent("on" + t, s);
              }
            } else
              for (; e && r !== !1; ) {
                var o = e.__events__ ? e.__events__[t] : null;
                for (var l in o)
                  for (var d = o[l], u = 0; r !== !1 && u < d.length; u++) {
                    var c = d[u];
                    r = c.callback.call(c.parent, n);
                  }
                e = i ? e.parent : null;
              }
            return r;
          },
        });
      })(window.originaljQuery || jQuery);
    }
  ),
  define(
    "itemset",
    ["defineutilities", "debug", "objecteventing", "async"],
    function () {
      !(function () {
        function e(e) {
          return !e || void 0 === e.isVisible || e.isVisible;
        }
        var t = 1,
          n = 2e3;
        defineClass(
          "Shared.ItemSet",
          function () {
            (this._filters = { hiddenItems: e }), this.clear();
          },
          {
            defaultGroupName: "Default",
            groupings: null,
            invalidateOnItemChanges: !0,
            _childCount: 0,
            _materializedCount: 0,
            _isDisposed: !1,
            dispose: function () {
              this._isDisposed ||
                (this.clear(), (this._filters = {}), (this._isDisposed = !0));
            },
            hasPendingRequests: function () {
              return !1;
            },
            load: function (e, t, n) {
              var i = this;
              (t = t || 0), (n = n || e.length), i.setCount(n);
              for (var r = 0; r < e.length; r++) i.set(r + t, e[r]);
            },
            clear: function () {
              var e = this;
              if (
                ((e._filteredCount = 0),
                (e._filteredIndexToActualIndex = {}),
                (e._keyToFilteredIndex = {}),
                (e._childCount = 0),
                e._indexToItem)
              )
                for (var t in e._indexToItem) e.set(t, null);
              (e._indexToItem = {}),
                (e._keyToIndex = {}),
                (e._requiresFilter = !1);
            },
            peek: function (e, t) {
              return this.get(e, t);
            },
            get: function (e, t) {
              var n = this;
              return (
                n._updateFilteredSet(t),
                !t && (e = n._filteredIndexToActualIndex[e]),
                this._indexToItem[e]
              );
            },
            getByKey: function (e, t) {
              var n = this;
              n._updateFilteredSet(t);
              var i = t
                ? n._keyToIndex[e]
                : n._filteredIndexToActualIndex[n._keyToFilteredIndex[e]];
              return this._indexToItem[i];
            },
            set: function (e, t) {
              var n = this,
                i = !1,
                r = n._indexToItem[e];
              return (
                r != t &&
                  (n._removeItemEvents(r),
                  (i = !0),
                  (n._indexToItem[e] = t),
                  t &&
                    (t.key && (n._keyToIndex[t.key] = e),
                    (n._childCount = Math.max(n._childCount, e + 1)),
                    n._addItemEvents(t)),
                  !r && t
                    ? n._materializedCount++
                    : r && !t && n._materializedCount--,
                  (n._requiresFilter = !0)),
                i
              );
            },
            insert: function (e, t, n) {
              this.insertWithGroupHint(e, t, !0, n);
            },
            insertWithGroupHint: function (e, t, n, i) {
              var r = this;
              r._updateFilteredSet(i),
                !i &&
                  (e =
                    e < r._filteredCount
                      ? r._filteredIndexToActualIndex[e]
                      : r._childCount),
                (e = Math.max(0, Math.min(e, r._childCount)));
              var a = r._indexToItem[e];
              if (((r._indexToItem[e] = null), r.groupings))
                for (var s = r.groupings, o = 0; o < s.length; o++)
                  for (var l = s[o].itemGroups, d = 0; d < l.length; d++) {
                    var u = l[d],
                      c = u.startIndex + u.count - 1;
                    n
                      ? c >= e
                        ? (u.startIndex > e && u.startIndex++,
                          u.startIndex <= e && u.count++)
                        : e == r._childCount &&
                          c + 1 == r._childCount &&
                          u.count++
                      : c + 1 >= e &&
                        (((u.startIndex == e && 0 != u.startIndex) ||
                          u.startIndex > e) &&
                          u.startIndex++,
                        u.startIndex <= e && u.count++);
                  }
              for (r.set(e, t); a; ) {
                var f = r._indexToItem[++e];
                (r._indexToItem[e] = a),
                  (r._keyToIndex[a.key] = e),
                  (a = f),
                  e == r._childCount && r._childCount++;
              }
              r._requiresFilter = !0;
            },
            add: function (e) {
              var t = this;
              t.insert(t._childCount, e, !0);
            },
            peekIndexOf: function (e, t) {
              return this.indexOf(e, t, !0);
            },
            indexOf: function (e, t, n) {
              var i,
                r = this;
              return (
                r._updateFilteredSet(t),
                (i = t ? r._keyToIndex[e.key] : r._keyToFilteredIndex[e.key]),
                void 0 === i && (i = -1),
                i
              );
            },
            removeAt: function (e, t) {
              var n = this;
              n._updateFilteredSet(t),
                !t && (e = n._filteredIndexToActualIndex[e]);
              var i = n._indexToItem[e];
              if (
                (i &&
                  (n._removeItemEvents(i),
                  delete n._keyToIndex[i.key],
                  n._materializedCount--),
                n.groupings)
              )
                for (var r = n.groupings, a = 0; a < r.length; a++)
                  for (var s = r[a].itemGroups, o = 0; o < s.length; o++) {
                    var l = s[o],
                      d = l.startIndex + l.count - 1;
                    d >= e &&
                      (l.startIndex <= e
                        ? (l.count--, 0 == l.count && (s.splice(o, 1), o--))
                        : l.startIndex--);
                  }
              for (var u = n._childCount - 1; u > e; )
                (i = n._indexToItem[e + 1]),
                  i && (n._keyToIndex[i.key] = e),
                  (n._indexToItem[e] = i),
                  e++;
              delete n._indexToItem[n._childCount - 1],
                n._childCount--,
                (n._requiresFilter = !0);
            },
            remove: function (e) {
              var t = this,
                n = t.indexOf(e, !0);
              -1 != n && t.removeAt(n, !0);
            },
            move: function (e, t, n) {
              var i = this,
                r = i.indexOf(e, !0);
              return (
                -1 != r &&
                  r != t &&
                  (i.removeAt(r, !0),
                  (t -= t - 1 > r ? 1 : 0),
                  i.insertWithGroupHint(t, e, n)),
                r
              );
            },
            invalidate: function () {
              var e = this;
              (e._requiresFilter = !0),
                e.throttle(
                  getId(e) + "-invalidate",
                  t,
                  n,
                  function () {
                    e._isDisposed || change(e);
                  },
                  !0
                );
            },
            getCount: function (e) {
              var t = this;
              return (
                t._updateFilteredSet(e), e ? t._childCount : t._filteredCount
              );
            },
            getMaterializedCount: function () {
              return this._materializedCount;
            },
            getGroupings: function (e) {
              var t,
                n = this,
                i = n.groupings;
              if (i && this._materializedCount)
                if ((n._updateFilteredSet(e), e)) {
                  for (var r = 0; r < i.length; r++)
                    for (var a = i[r].itemGroups, s = 0; s < a.length; s++) {
                      var o = i[s];
                      o.endIndex = o.startIndex + o.count - 1;
                    }
                  t = i;
                } else t = n._filteredGroups;
              else {
                var l = n.getCount(e);
                t =
                  l > 0 || e
                    ? [
                        {
                          name: n.defaultGroupName,
                          itemGroups: [
                            {
                              groupingId: "other",
                              startIndex: 0,
                              endIndex: l - 1,
                              count: l,
                            },
                          ],
                        },
                      ]
                    : n._filteredGroups;
              }
              return t;
            },
            setCount: function (e) {
              var t = this;
              t._childCount != e &&
                (t.clear(),
                (t._childCount = t._filteredCount = e),
                (t._requiresFilter = !0));
            },
            setFilter: function (e, t) {
              var n = this;
              t ? (n._filters[e] = t) : delete n._filters[e],
                (n._requiresFilter = !0);
            },
            toArray: function () {
              for (var e = [], t = this.getCount(), n = 0; t > n; n++)
                e.push(this.get(n));
              return e;
            },
            _updateFilteredSet: function (e) {
              var t = this;
              if (t._requiresFilter && !e) {
                (t._filteredGroups = []),
                  (t._filteredIndexToActualIndex = {}),
                  (t._keyToFilteredIndex = {});
                var n,
                  i,
                  r,
                  a,
                  s = 0,
                  o = t._childCount,
                  l = t._filters;
                if (t.groupings && t.groupings.length)
                  for (
                    i = [], r = [], a = [], n = 0;
                    n < t.groupings.length;
                    n++
                  ) {
                    var d = t.groupings[n];
                    if (d.itemGroups.length) {
                      var u = d.itemGroups[0],
                        c = [];
                      0 === u.count && d.itemGroups.length > 1
                        ? ((c = [u]), (u = d.itemGroups[1]), r.push(1))
                        : r.push(0),
                        i.push(u),
                        (u.endIndex = u.startIndex + u.count - 1),
                        a.push({
                          groupingId: u.groupingId,
                          name: u.name,
                          data: u.data,
                          startIndex: 0,
                          endIndex: 0,
                          count: 0,
                        }),
                        t._filteredGroups.push({ name: d.name, itemGroups: c });
                    }
                  }
                for (t._filteredCount = 0; o > s || (0 === o && 0 === s); s++) {
                  var f = t._indexToItem[s],
                    h = o > 0;
                  if (h) for (var _ in l) if (((h = l[_](f, t)), !h)) break;
                  if (h) {
                    if (
                      ((t._filteredIndexToActualIndex[t._filteredCount] = s),
                      f &&
                        f.key &&
                        (t._keyToFilteredIndex[f.key] = t._filteredCount),
                      i)
                    )
                      for (n = 0; n < t.groupings.length && n < a.length; n++)
                        a[n].count++;
                    t._filteredCount++;
                  }
                  if (i)
                    for (n = 0; n < t.groupings.length && n < i.length; n++) {
                      var m = i[n];
                      if ((m && s == m.endIndex) || 0 == o) {
                        var p = a[n];
                        (p.count > 0 || 0 == o) &&
                          ((p.endIndex = p.startIndex + p.count - 1),
                          t._filteredGroups[n].itemGroups.push(p)),
                          (m = i[n] = t.groupings[n].itemGroups[++r[n]]),
                          m && (m.endIndex = m.startIndex + m.count - 1);
                        var g = t._filteredCount;
                        a[n] = {
                          groupingId: m ? m.groupingId : "other",
                          mergeUp: m ? m.mergeUp : null,
                          mergeDown: m ? m.mergeDown : null,
                          name: m ? m.name : null,
                          data: m ? m.data : null,
                          startIndex: g,
                          count: 0,
                        };
                      }
                    }
                }
                t._requiresFilter = !1;
              }
            },
            _addItemEvents: function (e) {
              var t = this;
              e &&
                t.invalidateOnItemChanges &&
                (e.addRef && e.addRef(),
                t.addObjectListener(e, "change", t._onChildChanged),
                t.addObjectListener(e, "removeItem", t._onChildRemoved),
                t.addObjectListener(e, "dispose", t._onChildDisposed));
            },
            _removeItemEvents: function (e) {
              var t = this;
              e &&
                t.invalidateOnItemChanges &&
                (e.removeRef && e.removeRef(),
                t.removeObjectListener(e, "change"),
                t.removeObjectListener(e, "removeItem"),
                t.removeObjectListener(e, "dispose"));
            },
            _onChildChanged: function () {
              this.invalidate();
            },
            _onChildRemoved: function (e) {
              this.remove(e);
            },
            _onChildDisposed: function (e) {
              var t = e && e.key ? this._keyToIndex[e.key] : -1;
              t >= 0 && this.set(t, null);
            },
            __isObservable: !0,
          },
          {},
          Shared.ObjectEventing,
          Shared.Async
        );
      })();
    }
  ),
  define("joineditemset", ["itemset"], function () {
    !(function () {
      defineSubClass(
        "Shared.JoinedItemSet",
        Shared.ItemSet,
        function (e, t) {
          (this._childSets = []), (this._groupNames = []);
          for (var n = 0; e && n < e.length; n++)
            this.addChildSet(e[n], t && t[n]);
          this.clear();
        },
        {
          addChildSet: function (e, t) {
            this._groupNames.push(t),
              this._childSets.push(e),
              this.addChangeListener(e, this._onChildChanged),
              this.invalidate();
          },
          removeChildSet: function (e) {
            var t = this._childSets.splice(e, 1);
            this._groupNames.splice(e, 1),
              t && this.removeChangeListener(t),
              this.invalidate();
          },
          getChildSet: function (e) {
            return this._childSets[e];
          },
          getSetCount: function () {
            return this._childSets.length;
          },
          peek: function (e, t) {
            for (var n = 0, i = 0; i < this._childSets.length; i++) {
              var r = this._childSets[i],
                a = n + r.getCount();
              if (a > e) return r.peek(e - n, t);
              n = a;
            }
            return null;
          },
          get: function (e, t) {
            for (var n = 0, i = 0; i < this._childSets.length; i++) {
              var r = this._childSets[i],
                a = n + r.getCount();
              if (a > e) return r.get(e - n, t);
              n = a;
            }
            return null;
          },
          getByKey: function (e, t) {
            for (var n = 0; n < this._childSets.length; n++) {
              var i = this._childSets[n],
                r = i.getByKey(e, t);
              if (r) return r;
            }
            return null;
          },
          set: function (e, t) {
            for (var n = 0, i = 0; i < this._childSets.length; i++) {
              var r = this._childSets[i],
                a = n + r.getCount();
              if (a > e) return r.set(e - n, t);
              n = a;
            }
            return !1;
          },
          removeAt: function (e, t) {
            for (var n = 0, i = 0; i < this._childSets.length; i++) {
              var r = this._childSets[i],
                a = n + r.getCount();
              if (a > e) {
                r.removeAt(e - n, t);
                break;
              }
              n = a;
            }
          },
          getGroupings: function (e) {
            for (
              var t = this, n = [], i = 0, r = 0;
              r < t._childSets.length;
              r++
            ) {
              var a = t._childSets[r],
                s = a.getCount(),
                o = i + s;
              n.push({
                groupingId: r,
                startIndex: i,
                endIndex: o - 1,
                count: s,
                name: t._groupNames[r],
              }),
                (i = o);
            }
            return [{ name: t.defaultGroupName, itemGroups: n }];
          },
          peekIndexOf: function (e, t) {
            return this.indexOf(e, t, !0);
          },
          indexOf: function (e, t, n) {
            for (var i = 0, r = 0; r < this._childSets.length; r++) {
              var a = this._childSets[r],
                s = a.indexOf(e, t, n);
              if (s > -1) return i + s;
              i += a.getCount();
            }
            return -1;
          },
          getCount: function (e) {
            return this._getCount(e);
          },
          getMaterializedCount: function () {
            return this._getCount(!1, !0);
          },
          _getCount: function (e, t) {
            for (var n = 0, i = 0; i < this._childSets.length; i++) {
              var r = this._childSets[i];
              n += t ? r.getMaterializedCount() : r.getCount(e);
            }
            return n;
          },
          setFilter: function (e, t) {
            for (var n = 0; n < this._childSets.length; n++)
              this._childSets[n].setFilter(e, t);
          },
          dispose: function () {
            for (var e = 0; e < this._childSets.length; e++)
              this._childSets[e].dispose();
          },
          setCount: function (e) {
            throw new Error("You cannot set the count of a JoinedItemSet");
          },
          insertWithGroupHint: function (e, t, n, i) {
            throw new Error("You cannot insert directly into a JoinedItemSet");
          },
        }
      );
    })();
  }),
  define(
    "number",
    [
      "jbase",
      "trace",
      "qosoverrides",
      "domutilities",
      "objecteventing",
      "elementeventing",
      "async",
      "retriablepromise",
      "joineditemset",
      "lightstring",
    ],
    function () {
      !(function () {
        mix(Number.prototype, {
          zeroPad: function (e) {
            for (var t = this + ""; t.length < e; ) t = "0" + t;
            return t;
          },
          toDurationString: function () {
            var e = this,
              t = Math.floor(e / 36e5),
              n = Math.floor(e / 6e4) % 60,
              i = (e / 1e3) % 60,
              r = (10 > i && n ? "0" : "") + i.toFixed(3);
            return (
              (n || t) && (r = (t ? n.zeroPad(2) : n) + ":" + r),
              t && (r = t + ":" + r),
              r
            );
          },
        });
      })();
    }
  ),
  define("refcountable", ["number"], function () {
    !(function () {
      function e() {
        var t = n.length,
          a = 0;
        i = 0;
        for (
          var s = new Date().getTime() + 10;
          n.length && new Date().getTime() < s;

        ) {
          var o = n.pop();
          (o.getRefCount && o.getRefCount()) || (o.dispose(), a++);
        }
        Trace.log(
          "Cleaned up disposables (total: " + t + ", disposed: " + a + ")",
          r
        ),
          n.length && setTimeout(e, 0);
      }
      function t() {
        i || (i = setTimeout(e, 1e3));
      }
      var n = [],
        i = 0,
        r = "RefCountable";
      Trace.register(r, { isEnabled: !1 }),
        defineNamespace("JBase.RefCountable", {
          _refCount: 0,
          dispose: function () {},
          addRef: function () {
            this._refCount++;
          },
          removeRef: function () {
            this._refCount--,
              this.onRefCountCleared && this.onRefCountCleared(),
              !this._refCount &&
                this.__isAutoDisposable &&
                JBase.autoDispose(this);
          },
          getRefCount: function () {
            return this._refCount;
          },
        }),
        (JBase.autoDispose = function (e) {
          n.unshift(e), t();
        });
    })();
  }),
  define("sutrautilities", ["refcountable"], function () {
    !(function () {
      function e(e) {
        var t = window.$Sutra;
        if (t) {
          var n,
            i = e.split("."),
            r = i.length;
          for (n = 0; r > n; n++) t && (t = t[i[n]]);
        }
        return t || "";
      }
      mix(window, {
        sutraAttribute: function (t) {
          var n = "";
          return window.$Sutra && (n = ' sutra="' + e(t) + '"'), n;
        },
        getSutraValue: e,
      });
    })();
  }),
  define("resourcable", ["sutrautilities"], function () {
    !(function () {
      function e(t, n) {
        t.__resources = t.__resources || {};
        var i = t.__resources[n];
        return !i && t.parent && (i = t.__resources[n] = e(t.parent, n)), i;
      }
      defineNamespace("Shared.Resourcable", {
        parent: null,
        __resources: null,
        exposeResources: function (e) {
          (this.__resources = this.__resources || {}), mix(this.__resources, e);
        },
        getResource: function (t) {
          var n = e(this, t);
          return n;
        },
      });
    })();
  }),
  define("datacontext", ["resourcable"], function () {
    !(function () {
      var e = 0;
      defineClass(
        "JBase.DataContext",
        function (t) {
          (this.__dataContextId = e++),
            (this.isDisposed = !1),
            (this.changeListeners = {}),
            this.reset(),
            this.setData(t);
        },
        {
          __isDataContext: !0,
          __isObservable: !0,
          __isAutoDisposable: !0,
          onDispose: null,
          initialize: function () {},
          dispose: function () {
            if (!this.isDisposed) {
              this.isDisposed = !0;
              for (var e in this)
                if (this.hasOwnProperty(e)) {
                  var t = this[e];
                  t && t.removeRef && t.removeRef();
                }
              this.onDispose && this.onDispose();
            }
          },
          reset: function () {},
          setData: function (e, t) {
            var n = !1;
            for (var i in e)
              if (e.hasOwnProperty(i)) {
                var r = this[i],
                  a = e[i];
                if (
                  r != a &&
                  (r &&
                    (r.__isObservable && this.removeChangeListener(r),
                    r.removeRef && r.removeRef()),
                  (this[i] = a),
                  (n = !0),
                  a)
                ) {
                  var s = this.changeListeners[i] || this.change;
                  a.__isObservable && this.addChangeListener(a, s),
                    a.addRef && a.addRef();
                }
              }
            return ((t !== !1 && n) || t) && this.change(), n;
          },
          change: function (e) {
            change(this, e);
          },
        },
        null,
        Shared.ObjectEventing,
        JBase.RefCountable,
        Shared.Resourcable
      );
    })();
  }),
  define("basecontrol", ["datacontext"], function () {
    !(function () {
      var e = 0,
        t = 0;
      defineClass(
        "JBase.UI.BaseControl",
        function () {
          mix(this, {
            automationType: this.__fullName,
            children: [],
            _dataContextChangeCount: 0,
            parent: null,
            __instanceId: e++,
            __lastValues: [],
            __subElementsByIndex: null,
            __dataContextHasChanged: !1,
            __isProcessingChange: !1,
            __renderFrameUpdates: {},
            __onRenderFrameUpdateCallback: bind(
              this,
              this._onRenderFrameUpdate
            ),
          });
        },
        {
          automationType: null,
          automationId: null,
          apiIdBase: null,
          isInitialized: !1,
          isActive: !1,
          isDisposed: !1,
          baseTag: "div",
          baseDataContextType: JBase.DataContext,
          baseClass: "",
          baseStyle: "",
          element: null,
          dataContext: null,
          id: null,
          controlName: null,
          sutraLabel: null,
          onInitialize: null,
          onDataContextChanged: null,
          onActivate: null,
          onDeactivate: null,
          onDispose: null,
          onResize: null,
          __annotations: null,
          __bindings: null,
          __state: null,
          __subControls: null,
          _hasDisposed: !1,
          setDataContext: function (e, t) {
            e
              ? e.__isDataContext
                ? this.dataContext && e === this.dataContext
                  ? t && this.change()
                  : (this.dataContext &&
                      (this.onDataContextChanged &&
                        this.removeChangeListener(this.dataContext),
                      this.dataContext.removeRef(),
                      this.dataContext.parent === this &&
                        (this.dataContext.parent = null)),
                    (this.dataContext = e),
                    this.dataContext.addRef(),
                    this.dataContext.parent || (this.dataContext.parent = this),
                    this.onDataContextChanged &&
                      this.dataContext &&
                      this.addChangeListener(this.dataContext, this.change),
                    this.change())
                : (this._createDataContextIfNull(),
                  this.dataContext.setData(e, t))
              : (this._createDataContextIfNull(),
                this.dataContext.reset(),
                this.dataContext.change());
          },
          renderHtml: function () {
            var e = this;
            this.apiIdBase && Qos.start(this.apiIdBase + "_RenderHtml"),
              !e.isInitialized && e.initialize(),
              (e.controlName = e.controlName || e.__className),
              (e.id = e.id || e.controlName + "-" + t++),
              e.__dataContextHasChanged && e.change(!0),
              e._clearElementReferences();
            var n = e.baseTag ? e.onRenderHtml() : "";
            return this.apiIdBase && Qos.end(), n;
          },
          onRenderHtml: function () {
            return this.defaultRenderHtml("");
          },
          defaultRenderHtml: function (e) {
            return (
              "<" +
              this.baseTag +
              ' id="' +
              this.id +
              '_0" class="c-' +
              this.controlName +
              (this.baseClass ? " " + this.baseClass : "") +
              '"' +
              (this.baseStyle ? ' style="' + this.baseStyle + '"' : "") +
              (this.sutraLabel ? sutraAttribute(this.sutraLabel) : "") +
              ">" +
              (e ? e : "") +
              "</" +
              this.baseTag +
              ">"
            );
          },
          initialize: function () {
            if (!this.isInitialized) {
              this.isInitialized = !0;
              var e = this.__subControls;
              if (e) for (var t in e) this[t] = this.createChild(e[t]);
              this.onInitialize && this.onInitialize();
            }
          },
          activate: function () {
            var e = this;
            if (!e.isDisposed) {
              var t,
                n = e.children ? e.children.length : 0;
              for (!this.isInitialized && e.initialize(), t = 0; n > t; t++) {
                var i = e.children[t];
                i.activate && i.activate();
              }
              e.isActive ||
                (e._findSubElementsAndAddUserActions(),
                !e.element &&
                  e.baseTag &&
                  (e.element = e.__subElementsByIndex[0] || byId(e.id + "_0")),
                e.element && (e.element.control = e.element.control || e),
                (e.isActive = !0),
                e.onActivate && e.onActivate(e.dataContext, e.subElements),
                e.__dataContextHasChanged && e.change());
            }
          },
          resize: function () {
            var e,
              t,
              n = this;
            if (n.isActive) {
              for (t = n.children.length, e = 0; t > e; e++) {
                var i = n.children[e];
                i.resize && i.resize();
              }
              n.onResize &&
                n.doOnEndOfRenderFrame("BaseControl.onResize", function () {
                  n.isActive && n.onResize();
                });
            }
          },
          deactivate: function () {
            var e,
              t = this,
              n = t.children ? this.children.length : 0;
            for (e = 0; n > e; e++) {
              var i = t.children[e];
              i.deactivate && i.deactivate();
            }
            if (t.isActive) {
              (t.isActive = !1),
                t.clearElementListeners(),
                t.onDeactivate && t.onDeactivate();
              for (var r in t.__renderFrameUpdates) {
                t.__dataContextHasChanged = !0;
                break;
              }
              t.__renderFrameUpdates = {};
            }
          },
          dispose: function () {
            for (
              var e = this, t = e.children ? e.children.length : 0, n = 0;
              t > n;
              n++
            ) {
              var i = e.children[n];
              i.dispose && i.dispose();
            }
            e._hasDisposed ||
              ((e._hasDisposed = !0),
              (e.isDisposed = !0),
              e.isActive && e.deactivate(),
              e.onDispose && e.onDispose(),
              e._clearElementReferences(),
              e.dataContext &&
                (e.removeChangeListener(e.dataContext),
                e.dataContext.removeRef(),
                (e.dataContext = null)),
              (e.parent = null),
              (e.children = []));
          },
          asyncDispose: function () {
            var e,
              t,
              n = this;
            if (!n.isDisposed) {
              for (
                n.isDisposed = !0, t = n.children.length, e = 0;
                t > e;
                e++
              ) {
                var i = n.children[e];
                i.asyncDispose && i.asyncDispose();
              }
              JBase.autoDispose(n), (n.parent = null), (n.children = []);
            }
          },
          createChild: function (e, t, n) {
            var i = new e();
            return (
              t && mix(i, t), n && i.setDataContext(n), this.addChild(i), i
            );
          },
          addChild: function (e) {
            return this.children.push(e), (e.parent = this), e;
          },
          removeChild: function (e, t) {
            return (
              (t = void 0 === t ? this.children.indexOf(e) : t),
              -1 !== t && (this.children.splice(t, 1), (e.parent = null)),
              e
            );
          },
          clearChildren: function () {
            for (
              var e = this.children ? this.children.length : 0, t = 0;
              e > t;
              t++
            ) {
              var n = this.children[t];
              n.dispose && n.dispose(), (n.parent = null);
            }
            this.children.length = 0;
          },
          change: function (e) {
            var t = this;
            if (!t.isDisposed)
              if (t.isActive || e) {
                if (
                  ((t.__dataContextHasChanged = !0), !t.__isProcessingChange)
                ) {
                  var n = 5;
                  t.__isProcessingChange = !0;
                  try {
                    for (; n > 0 && t.__dataContextHasChanged; )
                      n--,
                        (t.__dataContextHasChanged = !1),
                        t.onDataContextChanged &&
                          t.onDataContextChanged(t.dataContext),
                        t._updateBindings();
                  } finally {
                    t.__isProcessingChange = !1;
                  }
                }
              } else t.__dataContextHasChanged = !0;
          },
          getControlInstanceId: function (e) {
            return (
              this.__fullName + this.id + "_" + e + "_" + this.__instanceId
            );
          },
          doOnRenderFrame: function (e, t, n) {
            var i = this;
            doOnRenderFrame(
              this.getControlInstanceId(e),
              function () {
                i.isActive && t.apply(i, arguments);
              },
              n
            );
          },
          doOnRenderFrameEveryXFrames: function (e, t, n, i) {
            var r = this;
            doOnRenderFrameEveryXFrames(
              this.getControlInstanceId(e),
              function () {
                r.isActive && t.apply(r, arguments);
              },
              n,
              i
            );
          },
          stopDoOnRenderFrame: function (e) {
            stopDoOnRenderFrame(this.getControlInstanceId(e));
          },
          doOnEndOfRenderFrame: function (e, t, n) {
            var i = this;
            doOnEndOfRenderFrame(
              this.getControlInstanceId(e),
              function () {
                i.isActive && t.apply(i, arguments);
              },
              n
            );
          },
          stopDoOnEndOfRenderFrame: function (e) {
            stopDoOnEndOfRenderFrame(this.getControlInstanceId(e));
          },
          _createDataContextIfNull: function () {
            this.dataContext ||
              ((this.dataContext = new this.baseDataContextType()),
              (this.dataContext.parent = this),
              this.dataContext.addRef(),
              this.dataContext.initialize(),
              this.onDataContextChanged &&
                this.dataContext &&
                this.addChangeListener(this.dataContext, this.change),
              (this.__dataContextHasChanged = !0));
          },
          _clearElementReferences: function () {
            var e = this;
            e.element &&
              ((e.element.control = null),
              (e.element = null),
              (e.subElements = {}),
              (e.__subElementsByIndex = null));
          },
          _findSubElementsAndAddUserActions: function () {
            var e = this;
            if (!e.__subElementsByIndex && e.baseTag) {
              var t =
                (e.id + "_", e.__annotations ? e.__annotations.length : 0);
              (e.__subElementsByIndex = []),
                (e.__userActions = []),
                (e.subElements = {});
              for (var n = 0; t > n; n++) {
                var i = e.__annotations[n],
                  r = this.id + "_" + i.id,
                  a = byId(r);
                (e.__subElementsByIndex[i.id] = a),
                  i.childId && (e.subElements[i.childId] = a);
                var s = i.userActions;
                if (s)
                  for (var o in s) {
                    var l = this[s[o]];
                    this.addElementListener(a, o, l),
                      this.__userActions.push({
                        element: a,
                        userAction: o,
                        func: l,
                      });
                  }
              }
            } else if (this.__userActions)
              for (var d = this.__userActions, u = 0; u < d.length; u++) {
                var c = d[u];
                this.addElementListener(c.element, c.userAction, c.func);
              }
          },
          _getControlState: function () {
            var e = {};
            if (this.__bindings)
              for (
                var t = this.__bindings.length, n = this.__bindings, i = 0;
                t > i;
                i++
              ) {
                var r = n[i].sourceProperty;
                e[r] = this[r];
              }
            if (this.__state)
              for (
                var a = this.__state.length, s = this.__state, o = 0;
                a > o;
                o++
              ) {
                var l = s[o];
                e[l] = this[l];
              }
            return e;
          },
          _updateBindings: function () {
            var e = this;
            if (e.__bindings)
              if (e.isActive) {
                var t = e.__bindings.length,
                  n = e.__bindings,
                  i = e.__subElementsByIndex,
                  r = !1;
                e.__renderFrameUpdates = {};
                for (var a = 0; t > a; a++) {
                  var s = n[a],
                    o = i[s.id];
                  if (o) {
                    var l = (e.__lastValues[a] =
                        void 0 === e.__lastValues[a]
                          ? s.handler.get(o, s.destinationProperty)
                          : e.__lastValues[a]),
                      d = e[s.sourceProperty];
                    switch (typeof l) {
                      case "string":
                        d = d || "";
                        break;
                      case "boolean":
                        d = !!d;
                        break;
                      case "number":
                        d = Number(d || 0);
                    }
                    d != l &&
                      ((e.__renderFrameUpdates[a] = {
                        element: o,
                        newValue: d,
                      }),
                      (r = !0));
                  }
                }
                r &&
                  e.doOnRenderFrame(
                    "_renderFrameUpdates",
                    e.__onRenderFrameUpdateCallback,
                    e.suppressBaseControlTracing
                  ),
                  (e.__shouldUpdateBindings = !1);
              } else e.__shouldUpdateBindings = !0;
          },
          _onRenderFrameUpdate: function () {
            for (var e in this.__renderFrameUpdates) {
              var t = this.__bindings[e],
                n = this.__renderFrameUpdates[e];
              t.handler.set(n.element, t.destinationProperty, n.newValue),
                (this.__lastValues[e] = n.newValue);
            }
            this.__renderFrameUpdates = {};
          },
        },
        null,
        Shared.ElementEventing,
        Shared.ObjectEventing,
        Shared.Async,
        Shared.Resourcable
      );
      var n = ["attr", "className", "css"],
        i = {
          get: function (e, t) {
            return "true" === e.getAttribute(t);
          },
          set: function (e, t, n) {
            e.setAttribute(t, "string" == typeof n ? n : String(!!n));
          },
        },
        r = {
          attr: {
            get: function (e, t) {
              return e.getAttribute(t);
            },
            set: function (e, t, n) {
              null !== n && void 0 !== n && n !== !1
                ? e.setAttribute(t, String(n))
                : e.removeAttribute(t);
            },
          },
          "attr.style": {
            get: function (e, t) {
              return e.style.cssText;
            },
            set: function (e, t, n) {
              e.style.cssText = n;
            },
          },
          "attr.class": {
            get: function (e, t) {
              return e.className;
            },
            set: function (e, t, n) {
              e.className = n;
            },
          },
          "attr.checked": {
            get: function (e, t) {
              return "checked" === e.getAttribute(t);
            },
            set: function (e, t, n) {
              e.checked = !!n;
            },
          },
          "attr.aria-expanded": i,
          "attr.aria-selected": i,
          "attr.aria-checked": i,
          "attr.aria-pressed": i,
          "attr.disabled": {
            get: function (e, t) {
              return "disabled" === e.getAttribute(t);
            },
            set: function (e, t, n) {
              e.disabled = !!n;
            },
          },
          "attr.html": {
            get: function (e) {
              return getHtml(e);
            },
            set: function (e, t, n) {
              setHtml(e, n);
            },
          },
          "attr.text": {
            get: function (e) {
              return getText(e);
            },
            set: function (e, t, n) {
              setText(e, n);
            },
          },
          className: {
            get: function (e, t) {
              return hasClass(e, t);
            },
            set: function (e, t, n) {
              toggleClass(e, t, n);
            },
          },
          css: {
            get: function (e, t) {
              return e.style[t];
            },
            set: function (e, t, n) {
              e.style[t] = n;
            },
          },
          "css.display": {
            get: function (e, t) {
              return "none" !== e.style[t];
            },
            set: function (e, t, n) {
              e.style[t] = n ? "block" : "none";
            },
          },
          "css.display.inline": {
            get: function (e, t) {
              return "none" !== e.style.display;
            },
            set: function (e, t, n) {
              e.style.display = n ? "inline" : "none";
            },
          },
          "css.display.inlineBlock": {
            get: function (e, t) {
              return "none" !== e.style.display;
            },
            set: function (e, t, n) {
              e.style.display = n ? "inline-block" : "none";
            },
          },
          "css.visibility": {
            get: function (e, t) {
              return "visible" === e.style[t];
            },
            set: function (e, t, n) {
              e.style[t] = n ? "visible" : "hidden";
            },
          },
          "css.width.px": {
            get: function (e, t) {
              return parseInt(e.style.width);
            },
            set: function (e, t, n) {
              e.style.width = n + "px";
            },
          },
          "css.height.px": {
            get: function (e, t) {
              return parseInt(e.style.height);
            },
            set: function (e, t, n) {
              e.style.height = n + "px";
            },
          },
          "css.left.px": {
            get: function (e, t) {
              return parseInt(e.style.left);
            },
            set: function (e, t, n) {
              e.style.left = n + "px";
            },
          },
          "css.right.px": {
            get: function (e, t) {
              return parseInt(e.style.right);
            },
            set: function (e, t, n) {
              e.style.right = n + "px";
            },
          },
          "css.top.px": {
            get: function (e, t) {
              return parseInt(e.style.top);
            },
            set: function (e, t, n) {
              e.style.top = n + "px";
            },
          },
          "css.bottom.px": {
            get: function (e, t) {
              return parseInt(e.style.bottom);
            },
            set: function (e, t, n) {
              e.style.bottom = n + "px";
            },
          },
        };
      window.processAnnotations = function (e, t, i, a) {
        var s,
          o = t.length,
          l = (e.prototype.__bindings = []);
        (e.prototype.__state = i),
          (e.prototype.__subControls = a),
          (e.prototype.__annotations = t);
        for (var d = 0; o > d; d++)
          for (var u = t[d], c = n.length, f = 0; c > f; f++) {
            var h = n[f],
              _ = u[h];
            s = _ ? _.length : 0;
            for (var m = 1; s > m; m += 2) {
              var p = _[m],
                g = _[m - 1];
              l.push({
                id: u.id,
                handler: r[h + "." + g] || r[h],
                sourceProperty: p,
                destinationProperty: g,
              });
            }
          }
      };
    })();
  }),
  define("Embed1", function () {});
