define("registernamespace", [], function () {
  !(function () {
    function e(e) {
      for (var n = 0, i = arguments.length; i > n; n++)
        for (
          var r = this, o = arguments[n].split("."), a = 0, s = o.length;
          s > a;
          a++
        ) {
          var c = o[a],
            l = r[c];
          l || (l = r[c] = {}),
            l.__namespace ||
              (0 === a &&
                "Sys" !== arguments[n] &&
                (t.Sys.__rootNamespaces[Sys.__rootNamespaces.length] = l),
              (l.__namespace = !0),
              (l.__typeName = o.slice(0, a + 1).join(".")),
              (l.getName = function () {
                return this.__typeName;
              })),
            (r = l);
        }
      return r;
    }
    var t = window;
    (t.registerNamespace = e),
      e("Sys"),
      t.Sys.__rootNamespaces || (t.Sys.__rootNamespaces = [t.Sys]);
  })();
}),
  define(
    "dependancies",
    ["jquery-1.7.2", "debug", "validateconfig"],
    function () {
      !(function (e) {
        var t,
          n = window;
        n.Debug;
        (t = n.wLive ? n.wLive : (n.wLive = {})),
          (t.Core = {}),
          (t.Controls = {});
        var i = n.$Config;
        if (((i.handlerBaseUrl = i.handlerBaseUrl || ""), !i.sd)) {
          var r = document.domain,
            o = r.split(".");
          i.sd = 1 === o.length ? "" : "." + o[o.length - 2] + ".com";
        }
        (i.mkt = i.mkt || "na"),
          (i.prop = i.prop || "X"),
          "undefined" != typeof window.SymRealWinOpen &&
            (window.open = window.SymRealWinOpen);
      })(window.originaljQuery || jQuery);
    }
  ),
  define("truncateellipsis", ["dependancies", "lightstring"], function () {
    !(function () {
      var e = window,
        t = e.wLive;
      t.truncateEllipsis = function (e, t) {
        return (
          (t = Math.max(parseInt(t, 10) || 1e5, 4)),
          e ? (e.length > t ? e.substring(0, t - 3) + "..." : e) : ""
        );
      };
    })();
  }),
  define("bsi", ["validateconfig", "jquery-1.7.2", "cookie"], function () {
    !(function (e) {
      function t() {
        var t = e(document),
          i = e(T);
        t.bind("click", o),
          t.bind("mousedown", r),
          t.bind("mouseup", s),
          t.bind("keydown", c),
          t.bind("keyup", l),
          t.bind("touchstart", u),
          t.bind("touchend", d),
          le && le.suppressBrowserRightClickMenu && t.bind("contextmenu", a),
          (ge = 1),
          ce.ignoreWindowOnload ||
            (ce.useJQueryReady
              ? i.ready(function () {
                  setTimeout(b, 0);
                })
              : i.bind("load", b)),
          i.bind("unload", S),
          le && le.capture && (te = n());
      }
      function n() {
        var e = { sw: screen.width, sh: screen.height, c: screen.colorDepth };
        return (
          document.documentElement.clientWidth &&
            ((e.bw = document.documentElement.clientWidth),
            (e.bh = document.documentElement.clientHeight)),
          e
        );
      }
      function i() {
        O && O.href != j && ((O.href = j), e(O).unbind("mouseout", i), (O = 0));
      }
      function r(e) {
        i(), f(e);
      }
      function o(e) {
        2 == e.which ||
          N ||
          W ||
          (g(e),
          (ae = !N && !E && !B),
          (x = 1),
          p(e.target, null, e),
          (ae = 1));
      }
      function a(t) {
        if (t.shiftKey) return !0;
        if (t.target) {
          var n = e(t.target),
            i = n.closest("a");
          if (i.length > 0) {
            var r = i.attr("href");
            if (r && "#" !== r) return !0;
          }
          var o = n.closest("input");
          if (o.length > 0) {
            var a = o.attr("type");
            if (a && "text" == a.toLowerCase()) return !0;
          }
          var s = n.closest("textarea");
          if (s.length > 0) return !0;
        }
        return !1;
      }
      function s(e) {
        f(e), (1 != x || N) && ((ae = 0), p(e.target, 3 == x, e), (ae = 1));
      }
      function c(e) {
        93 == e.keyCode && ((x = 3), p(e.target, 1, e));
      }
      function l(e) {
        var t = e.keyCode;
        (27 != t && 18 != t && 13 != t) || i();
      }
      function u(e) {
        i(), (R = I());
      }
      function d(e) {
        I() - R > 1e3 && ((ae = 0), (x = 3), p(e.target, null, e), (ae = 1));
      }
      function f(e) {
        (x = e.which), g(e);
      }
      function g(e) {
        (E = e.shiftKey), (N = e.ctrlKey), (B = e.altKey), (W = e.metaKey);
      }
      function p(e, t, n) {
        for (i(); e; ) {
          if ("A" == e.tagName) {
            var r;
            try {
              r = e.href;
            } catch (o) {}
            if (r) {
              if (
                se.AjaxHistory &&
                se.AjaxHistory.fullAjax &&
                -1 == r.indexOf("#")
              ) {
                var a;
                T.$PF && (a = T.$PF.getAppFrameDocument());
                var s = a ? a.location.href : document.location.href,
                  c = s.indexOf("#");
                c > -1 && (s = s.substr(0, c));
                var l = s.indexOf("?");
                l > -1 && (s = s.substr(0, l)),
                  (s += "?"),
                  0 == r.toLowerCase().indexOf(s) &&
                    (r = e.href = "#" + r.substr(s.length));
              }
              var u = !1;
              if ($U.isLinkABookmark(r)) {
                var d = $U.getUrlFragment(r);
                d.indexOf("=") > -1 && (u = !0);
              } else u = !0;
              u && A.informNav(r, 0, e, t, null, n);
            }
            break;
          }
          e = e.parentNode;
        }
      }
      function h(e) {
        for (var t = K; e && e.getAttribute; ) {
          var n = e.getAttribute("lid");
          if (n) {
            t = n;
            break;
          }
          e = e.parentNode;
        }
        return t;
      }
      function v(e) {
        var t = K;
        if (e)
          for (var n in e) {
            var i = e[n];
            (i = i.encodeUrl ? i.encodeUrl() : i), (t += V + n + J + i);
          }
        return t;
      }
      function m() {
        ge && !ce.ignoreWindowOnload && A.informLoaded(1, 1);
      }
      function _() {
        var e = "U";
        return (
          3 == x ? (e = "R") : 1 == x ? (e = "L") : 2 == x && (e = "M"),
          N && (e += "C"),
          B && (e += "A"),
          E && (e += "S"),
          e
        );
      }
      function y(e, t) {
        for (var n in t) e[n] = t[n];
      }
      function b(e) {
        (fe = 1), w();
      }
      function w() {
        fe && 0 == de.length && A.informLoaded();
      }
      function S() {
        C(), i();
        var t = e(document);
        t.unbind("click", o),
          t.unbind("mousedown", r),
          t.unbind("mouseup", s),
          t.unbind("keydown", c),
          t.unbind("keyup", l),
          t.unbind("touchstart", u),
          t.unbind("touchend", d);
        var n = e(T);
        ce.ignoreWindowOnload || n.unbind("load", b), n.unbind("unload", S);
      }
      function C() {
        m(), H || k("U");
      }
      function I() {
        return new Date().getTime();
      }
      function $(e) {
        return (e ? e : I()) - A.headTime;
      }
      function k(e, t, n, i) {
        if (le && le.enableLD) {
          var r = e + $(n) + (t ? t : K),
            o = P.getCookie(X, 1);
          if (!o && !i) {
            var a = P.getCookie(q, 1);
            if (a) {
              var s = parseInt(a);
              if (!isNaN(s)) {
                re - 1 > s && (s = re - 1),
                  s > oe && (s = oe),
                  s >= re && (ie.splice(0, s + 1 - re), (re = s + 1));
                var c = oe - s;
                if (c > 0) {
                  for (oe = s; c-- > 0; ) {
                    var l = oe + 1 - re;
                    if (l < ie.length) {
                      var u = ie[l];
                      if (!k(u.logKey, u.logValue, u.logTime, !0)) {
                        A.flush();
                        k(u.logKey, u.logValue, u.logTime, !0);
                      }
                    }
                    oe++;
                  }
                  o = P.getCookie(X, 1);
                }
              }
            }
          }
          var d = D.deserialize(o, z, 0, 1),
            f = [ce.xid, ce.rid, se.di, A.headTime].join("_"),
            g = d[f];
          if (
            (g ? (g += "|" + r) : (g = r),
            (d[f] = g),
            (o = D.serialize(d, z, 1)),
            o.length > 512)
          )
            return 0;
          i ||
            (ie.push({ logKey: e, logValue: t, logTime: n ? n : I() }),
            oe++,
            P.setCookie(q, oe, $Config.sd, 0, new Date(2020, 1, 1), 1)),
            P.setCookie(X, o, $Config.sd, 0, new Date(2020, 1, 1), 1);
        }
        return 1;
      }
      function L(e, t) {
        var n = 0,
          i = e.clone(),
          r = i.length,
          o = !1,
          a = T.$WebWatson;
        if (a)
          for (; r > n; n++)
            o =
              a.wrapCallback(
                i[n],
                0,
                Array.prototype.slice.call(arguments, 1)
              )() || o;
        return o;
      }
      var T = window,
        M = (T.Debug, T.$Beacon),
        P = T.$Cookie,
        D = T.$Utility,
        A = window.$BSI;
      A.headTime || (A.headTime = new Date().getTime());
      var x,
        N,
        E,
        B,
        W,
        R,
        F,
        H,
        O,
        j,
        U = [],
        Q = [],
        X = "LD",
        q = "LDH",
        z = "&",
        G = "?",
        V = "~",
        J = ":",
        K = "",
        Y = ".com",
        Z = "-int.com",
        ee = {},
        te = {},
        ne = !0,
        ie = [],
        re = -1,
        oe = -1,
        ae = 1,
        se = T.$Config,
        ce = se.BSI,
        le = ce.BICI,
        ue = se.sd.endsWith(Z) ? Z : Y,
        de = [],
        fe = ce.ignoreWindowOnload,
        ge = 0;
      (A.informLoaded = function (e, t) {
        if (
          ((se = T.$Config),
          (ce = se.BSI),
          (le = ce.BICI),
          (document.body.id = ce.pn ? ce.pn.encodeHtmlAttribute() : K),
          A.headTime != F)
        ) {
          var n = I();
          (F = A.headTime),
            (ge = 0),
            (de = []),
            t && A.addLogParams({ x: "1" }),
            L(U, t),
            k("L", v(te), n),
            (te = {}),
            le && le.beaconUrl && ne && M.fire(le.beaconUrl, ee),
            (ee = {});
        }
      }),
        (A.sendToIdss = function (e) {
          return "undefined" != typeof e && (ne = e), ne;
        }),
        (A.informPVHead = function () {
          C(), (A.headTime = I()), (ge = 1);
        }),
        (A.addBeaconParams = function (e) {
          y(ee, e);
        }),
        (A.addLogParams = function (e) {
          y(te, e);
        }),
        (A.addLoadedCallback = function (e) {
          U.push(e);
        }),
        (A.removeLoadedCallback = function (e) {
          setTimeout(function () {
            for (var t = 0, n = U.length; n > t; t++)
              if (U[t] == e) return void U.splice(t, 1);
          }, 0);
        }),
        (A.isLoading = function () {
          return ge;
        }),
        (A.addNavCallback = function (e) {
          Q.push(e);
        }),
        (A.navigateTo = function (e, t, n) {
          if (
            (n && (A.currentScenarioObject = n),
            !A.informNav(e, 0, 0, 0, 0, 0, 0, t))
          )
            try {
              t ? window.open(e, t) : (window.location.href = e);
            } catch (i) {}
        }),
        (A.addLoadEvent = function (e) {
          ge && de.push(e);
        }),
        (A.eventLoaded = function (e) {
          for (var t = 0, n = de.length; n > t; t++)
            if (de[t] == e) {
              de.splice(t, 1), w();
              break;
            }
        }),
        (A.addHandlerDPs = function (e) {
          return (e.biciPrevious = ce.biciPrevious), (e.mmn = se.mmn), e;
        }),
        (A.addLDToHash = function (e) {
          return (
            (e.bicild = P.getCookie(X, 1)), P.deleteCookie(X, $Config.sd), e
          );
        }),
        (A.informNav = function (t, n, r, o, a, s, c, l) {
          ae = ae && !a && (!r || "_blank" != r.getAttribute("target"));
          var u = I(),
            d = r ? r.href : 0;
          i(), m(), (n = n || h(r)), (t = t || K);
          var f = $U.doesMatchHost(t, "live" + ue),
            g = $U.isAbsoluteUrl(t) && $U.doesMatchHost(t, "g.live" + ue);
          if (
            (k("N", V + V + n.encodeUrl() + V + _(), u),
            (H = H || ae),
            le && le.urlHash)
          ) {
            var p = le.urlHash + u;
            le.fid &&
              (p += z + le.fid + z + (ae ? "1" : "0") + (o ? "0" : "1")),
              P.setCookie("LN", p, $Config.sd);
          }
          var v = L(Q, t, r, o, ae, f, s, c, l);
          !v &&
            $B.IE &&
            $B.V < 8 &&
            "function" == typeof ieImgAnchorFix &&
            r &&
            ieImgAnchorFix(r);
          var y = [
            "WLXID=",
            ce.xid,
            "&RID=",
            ce.rid,
            "&TID=",
            A.headTime,
            "&lid=",
            n,
          ].join(K);
          if (g) {
            if (r && le && le.enableGlinkExtra) {
              var b;
              (b =
                d.indexOf(G) < 0
                  ? G + G
                  : d.indexOf(G + G) < 0 && d.indexOf(z + z) < 0
                  ? z + z
                  : z),
                (r.href = d + b + y);
            }
          } else
            f ||
              (le &&
                le.enableGlinkCall &&
                M.fireAndHold(
                  "//g.live" +
                    Y +
                    "/_9uxp9en-us/mike?" +
                    t.encodeUrl() +
                    z +
                    z +
                    y
                ));
          return (
            r &&
              d != r.href &&
              ((O = r),
              (j = d),
              3 == x
                ? $B.Safari || $B.Firefox || e(r).bind("mouseout", i)
                : setTimeout(i, 100)),
            v
          );
        }),
        (A.reportEvent = function (e, t) {
          var n = V + e + v(t);
          if (!k("E", n)) {
            A.flush();
            k("E", n);
          }
        }),
        (A.flush = function () {
          ie.splice(0, oe - re + 1),
            (re = oe),
            P.setCookie(q, oe, $Config.sd, 0, new Date(2020, 1, 1), 1),
            M.fire(se.handlerBaseUrl + "/Handlers/NoOp.mvc", A.addLDToHash({}));
        }),
        t(),
        $Do.register("$BSI.addNavCallback", A.addNavCallback),
        $Do.register("$BSI");
    })(window.originaljQuery || jQuery);
  }),
  define("css", ["validateconfig", "jquery-1.7.2"], function () {
    !(function (e) {
      function t(e) {
        var t = i[e];
        return t || (i[e] = t = new RegExp("\\b" + e + "\\b", "ig")), t;
      }
      var n = window,
        i = {},
        r = (n.$css = {
          has: function (e, n) {
            var i = !1;
            if (e && e.className) {
              var r = t(n);
              r.lastIndex = 0;
              try {
                i = r.test(e.className);
              } catch (o) {}
            }
            return i;
          },
          remove: function (e, t) {
            r.swap(e, t);
          },
          swap: function (e, n, i) {
            (i = i || ""),
              r.has(e, n) &&
                (e.className = e.className
                  .replace(t(n), i)
                  .replace(/^\s|\s\s|\s$/g, function (e) {
                    return e.substr(1);
                  }));
          },
          add: function (e, t) {
            e &&
              (e.className
                ? r.has(e, t) || (e.className += " " + t)
                : (e.className = t));
          },
        });
    })(window.originaljQuery || jQuery);
  }),
  define("sutra", ["validateconfig", "jquery-1.7.2", "debug"], function () {
    !(function (e) {
      function t(e) {
        for (var t = e.split("."), i = n, r = 0, o = t.length; o > r; r++)
          i = i[t[r]];
        return i;
      }
      var n = window;
      (n.sutra = function (i, r, o) {
        if (n.$Sutra) {
          var a = e(i);
          (a.attr("sutra") && o) || a.attr("sutra", t(r));
        }
      }),
        (n.sutra.load = function (t, i) {
          n.$Sutra &&
            (e(document.body).attr(t, i),
            e(document.body).removeAttr("sutravisited"));
        }),
        (n.unsutra = function (t) {
          n.$Sutra && e(t).removeAttr("sutra");
        });
    })(window.originaljQuery || jQuery);
  }),
  define(
    "setup",
    [
      "jquery-1.7.2",
      "lightobject",
      "lightstring",
      "debug",
      "validateconfig",
      "dependancies",
      "truncateellipsis",
      "utilityextensions",
      "beacon",
      "lightfunction",
      "lightarray",
      "watson",
      "do",
      "cookie",
      "bsi",
      "css",
      "sutra",
    ],
    function () {
      !(function (e) {
        function t() {
          var e = document.title,
            t = document.location.hash;
          e != o &&
            t &&
            e.indexOf(t) == e.length - t.length &&
            (document.title = o),
            (o = document.title);
        }
        var n = window,
          i = n.wLive;
        (n.$Version = "9.090519.0"),
          (n.CompatVersion = "9.100709.0"),
          n.$Debug || (n.$Debug = { enabled: !1, trace: function (e) {} });
        var r = n.document;
        (n._d = r),
          (n._ce = function (e) {
            return r.createElement(e);
          }),
          (n._ge = function (e) {
            return r.getElementById(e);
          }),
          (n._$ge = function (t) {
            return e(n._ge(t));
          }),
          (n._get = function (e) {
            return r.getElementsByTagName(e);
          }),
          (n._dh = r.head = r.head || n._get("head")[0]),
          (i.dh = e("#head")[0] || n._dh);
        var o;
        e(document).bind("propertychange", t);
      })(window.originaljQuery || jQuery);
    }
  ),
  define("lightenums", ["setup"], function () {
    !(function () {
      function e(e) {
        return function () {
          for (var t = arguments.length, n = 0; t > n; n += e)
            this[arguments[n]] = arguments[n + e - 1];
        };
      }
      var t = window;
      t.jQuery;
      (t.$Flags = e(2)), (t.$Enum = e(1));
    })();
  }),
  define("settimeout", ["lightenums"], function () {
    !(function (e) {
      function t() {
        var e = r.length;
        if (e > 0) {
          try {
            r.pop()();
          } catch (o) {
            var a = n.$WebWatson;
            a && a.submitFromException(o);
          }
          e > 1 && i(t, 0);
        }
      }
      var n = window,
        i = window.setTimeout,
        r = [];
      window.smartSetTimeout = function o(e, n, a) {
        function s() {
          o(e, 0, a);
        }
        n
          ? i(s, n)
          : (a ? r.splice(0, 0, e) : r.push(e), 1 == r.length && i(t, 0));
      };
    })(window.originaljQuery || jQuery);
  }),
  define("helpcontext", ["settimeout"], function () {
    !(function (e) {
      var t = window,
        n = (t.$HelpContext = {}),
        i = t.$Config;
      (n.attachContextTo = function (e, t, n) {
        t &&
          e.length > 0 &&
          (e[0].href =
            i.hc.url +
            "&errorCode=" +
            (t + "").encodeUrl() +
            (n ? "&errorMessage=" + n.encodeUrl() : ""));
      }),
        $Do.register("$HelpContext");
    })(window.originaljQuery || jQuery);
  }),
  define("lightnetwork", ["helpcontext"], function () {
    !(function (e) {
      function t() {
        function t(e) {
          if (e.indexOf("window.") < 0) return !1;
          for (var t = e.split("."), n = window, i = 1; i < t.length; i++)
            if (((n = n[t[i]]), void 0 === n)) return !1;
          return !0;
        }
        function l(e, t) {
          function n() {
            var e = !1;
            try {
              var t = o.contentWindow || o.contentDocument.parentWindow;
              t && t.fetchXML && (p.Proxy._registerProxy(t), (e = !0));
            } catch (n) {}
            return e;
          }
          function i() {
            var i,
              r = m[e];
            if (
              ((r.attempts = (r.attempts || 0) + 1),
              r.attempts > 2 && !r.fail && !r.ready)
            ) {
              if (!n())
                for (r.fail = !0; (i = r.pop()); )
                  i.cb && i.cb({ status: 5e3 }, i.c);
            } else r.ready || n() || l(e, t);
          }
          function r() {
            m[e].ready || m[e].fail || i();
          }
          u();
          var o = document.createElement("iframe");
          if (
            ((o.style.display = "none"),
            e.endsWith(f) ||
              (e.indexOf(":") > 0 &&
                e.substring(0, e.indexOf(":")).endsWith(f)))
          ) {
            document.body.insertBefore(o, document.body.firstChild);
            var s = c.xmlProxyTimeout || 3e4;
            setTimeout(r, s),
              (_[e] = o),
              (o.src =
                location.protocol +
                "//" +
                e +
                "/xmlProxy.htm?vn=" +
                a +
                "&domain=" +
                f);
          } else t.cb && t.cb({ status: 5e3 }, t.c);
        }
        function u() {
          if (!y) return void (f = document.domain);
          if (
            ((f = C),
            f.indexOf(":") > 0 && (f = f.substring(0, f.indexOf(":"))),
            $Config.domain && !$Config.domain.endsWith("."))
          )
            document.domain = $Config.domain;
          else {
            if (!f.endsWith(".com")) throw new Error("Invalid $Config.domain");
            var e = f.indexOf(".");
            if (e > 0) {
              document.domain = f;
              try {
                for (; e >= 0; )
                  (f = f.substring(e + 1)),
                    "com" != f
                      ? ((document.domain = f), (e = f.indexOf(".")))
                      : (e = -1);
              } catch (t) {}
            }
          }
          (f = document.domain), (u = function () {});
        }
        function d(e, t) {
          return (
            (e = p.resolveUrl(e).toLowerCase()),
            String(e).search(t ? w : b) < 0 ? "" : RegExp.$1
          );
        }
        var f,
          g,
          p = this,
          h = $B.IE,
          v = [],
          m = {},
          _ = {},
          y = !0;
        (p.requiresDomainLowering = function (e) {
          y = e;
        }),
          (p.getCookie = function (e) {
            return r.getCookie(e, 1);
          }),
          (p.fetchXML = function (t, n, i, r, o, a, s) {
            function c(e) {
              if (o) for (var t in o) e.setRequestHeader(t, o[t]);
            }
            function u(e, t) {
              n && n(e, a);
            }
            var f,
              g,
              p = d(t);
            if (((i = i || "GET"), (n = n || function () {}), p === C))
              f = e.ajax({
                url: t,
                type: i,
                data: r,
                beforeSend: c,
                complete: u,
              });
            else {
              var h = (m[p] = m[p] || []),
                v = {
                  url: t,
                  cb: n,
                  v: i,
                  verb: i,
                  postString: r,
                  headers: o,
                  c: a,
                  cbp: s,
                };
              if ((g = _[p])) {
                if (h.ready)
                  return g.contentWindow.fetchXML(v, null, null, n, s), f;
                if (h.fail) return n && n({ status: 5e3 }, a), f;
                h.push(v);
              } else h.push(v), l(p, v);
            }
            return f;
          }),
          (p.fetchCSS = function (e, t, r, o, a) {
            function c() {
              var i;
              clearTimeout(u);
              var c = !h || ($B.IE && $B.V >= 10);
              if (
                (c && (l.readyState = "complete"),
                (l.onreadystatechange = function () {
                  l &&
                    l.onreadystatechange &&
                    ("loaded" === l.readyState ||
                      "complete" === l.readyState) &&
                    (t && t(l), (l.onreadystatechange = null));
                }),
                o &&
                  n.Css_Start &&
                  ((i = Css_Start(o, a)),
                  (l.onload = function () {
                    Css_Load(this, i);
                  }),
                  (l.onerror = function () {
                    Css_Error(this, i);
                  })),
                (l.href = e),
                !r)
              ) {
                var d = s.dh;
                d.appendChild(l);
              }
              c && l.onreadystatechange();
            }
            var l = r || document.createElement("link"),
              u = setTimeout(c, 9e3);
            return (
              r || ((l.rel = "stylesheet"), (l.type = "text/css")),
              i.fire(e, 0, c, c, 1),
              l
            );
          }),
          (p.fetchScript = function (i, r, a, c, l) {
            function u() {
              if (
                !m.handled &&
                ("complete" === m.readyState || "loaded" === m.readyState)
              )
                try {
                  (m.handled = !0),
                    e(m).unbind(".fetch"),
                    !a || v[a] || t(a)
                      ? r && r(m)
                      : (f && (f.errorCode = f.errorCode || "ParseFailure"),
                        g.removeChild(m),
                        p.fetchScript(i, r, void 0, c, l));
                } catch (o) {
                  throw o;
                } finally {
                  f && n.$Static && n.$Static.logQos(f);
                }
            }
            function d(e) {
              f && (f.errorCode = "DownloadFailure"),
                u(),
                a && e.stopPropagation();
            }
            var f,
              g = s.dh,
              m = document.createElement("script");
            return (
              c &&
                (f = {
                  apiId: c,
                  propertyId: l,
                  startTime: new Date().getTime(),
                }),
              (!h || ($B.IE && $B.V >= 10)) && (m.readyState = "loaded"),
              (m.async = !0),
              (m.type = "text/javascript"),
              e(m)
                .bind("readystatechange.fetch", u)
                .bind("load.fetch", u)
                .bind("error.fetch", d),
              o(function () {
                (m.src = i), g.appendChild(m);
              }),
              m
            );
          }),
          (p.registerScript = function (e) {
            v[e] = !0;
          }),
          (p.Proxy = {
            _registerProxy: function (e) {
              window.NextNetworkRegisterProxy &&
                window.NextNetworkRegisterProxy(e);
              var t,
                n = d(e.location.href, !1),
                i = _[n],
                r = m[n],
                o = e.frameElement;
              if (r)
                for (
                  r.ready ||
                  (i != o && (i = _[n] = o), (r.fail = !1), (r.ready = !0));
                  (t = r.pop());

                )
                  i.contentWindow.fetchXML(t, null, null, t.cb, t.cbp);
            },
          }),
          $Config.applyAppDomain && u();
        var b = /^(?:http|https|ftp):\/\/([-.a-z0-9]+(?::[0-9]+)?)(?:\/|$)/i,
          w = /^((?:http|https|ftp):\/\/[-.a-z0-9]+(?::[0-9]+)?)(?:\/|$)/i,
          S = /\/[^\/]*\/\.\./;
        (p.extractHost = d),
          (p.resolveUrl = function (e, t) {
            function i(e) {
              for (; S.test(e); ) e = e.replace(S, "");
              return e;
            }
            if (((e = e ? e.toString() : ""), t))
              t = t.substring(0, t.toString().lastIndexOf("/") + 1);
            else if (g) t = g;
            else {
              var r = n._ge("base");
              if (r && "" != r.href) t = g = r.href;
              else {
                var o =
                  location.protocol + "//" + location.host + location.pathname;
                t = g = o.substring(
                  0,
                  o.lastIndexOf("file:" === location.protocol ? "\\" : "/") + 1
                );
              }
            }
            return (
              e.startsWith("/") &&
                (e = location.protocol + "//" + location.host + e),
              -1 === e.indexOf("//") && (e = t + e),
              i(e)
            );
          });
        var C = d(document.location.href);
        p.currentDomain = C;
      }
      var n = window,
        i = n.$Beacon,
        r = n.$Cookie,
        o = (n.Debug, n.smartSetTimeout),
        a = n.$Version,
        s = n.wLive,
        c = (n.$Network = new t());
      n.$LightNetwork = c;
    })(window.originaljQuery || jQuery);
  }),
  define("scenarioqos", ["lightnetwork"], function () {
    !(function (e) {
      function t(e, t) {
        p.deferPosting
          ? ((p.deferredPosts = p.deferredPosts || []),
            p.deferredPosts.push({ url: e, postString: t }))
          : u.fetchXML(e, null, "POST", t);
      }
      function n() {
        if (p.enabled)
          if (p.ids && p.guids && p.startTimes && p.propertyIds) {
            for (
              var e = p.ids.split(m),
                t = p.guids.split(m),
                n = p.startTimes.split(m),
                r = p.propertyIds.split(m),
                a = e.length,
                s = g.xid,
                c = [],
                d = [],
                v = [],
                _ = [],
                y = a - 1;
              y >= 0;
              y--
            ) {
              var b = e[y],
                S = n[y],
                C = r[y],
                I = t[y];
              y >= a - w && (c.push(b), d.push(I), v.push(S), _.push(C));
              var $ = o(b, I);
              if (0 != $.apiArray.length) {
                var k = {
                    sc: b,
                    ppd: C,
                    api: $.apiArray.join(m),
                    dur: $.durationArray.join(m),
                    err: $.errArray.join(m),
                    errtp: $.errTypeArray.join(m),
                    st: $.stackTraceArray.join(m),
                    dep: $.dependentArray.join(m),
                    stt: $.startTimeArray.join(m),
                    ac: $.actionIdArray.join(m),
                    pac: $.parentActionIdArray.join(m),
                    xp: s,
                  },
                  L = $Utility.serialize(k);
                u.fetchXML(f.handlerBaseUrl + p.handlerPath, null, "POST", L);
              }
            }
            var T =
              c.join(m) + "&" + v.join(m) + "&" + _.join(m) + "&" + d.join(m);
            $BSI.currentScenarioObject &&
              (T =
                $BSI.currentScenarioObject.id +
                "&" +
                $BSI.currentScenarioObject.startTime +
                "&" +
                $BSI.currentScenarioObject.propertyId +
                "&" +
                $BSI.currentScenarioObject.guid);
            var M = new Date();
            M.setSeconds(M.getSeconds() + 5),
              l.setCookie(h, T.encodeUrl(), f.sd, null, M, 1),
              setTimeout(i, 500);
          } else l.deleteCookie(h, f.sd);
      }
      function i() {
        l && l.deleteCookie(h, f.sd);
      }
      function r(e, t) {
        for (var n = S.d, i = n.length, r = 0; i > r; r++) {
          var o = n[r];
          o.scenarioId === e &&
            o.transactionGuid === t &&
            (n.splice(r, 1), r--, i--);
        }
      }
      function o(e, t) {
        for (
          var n = [],
            i = [],
            r = [],
            o = [],
            a = [],
            s = [],
            c = [],
            l = [],
            u = [],
            d = S.d,
            f = d.length,
            g = 0;
          f > g;
          g++
        ) {
          var p = d[g];
          if (p.scenarioId === e && p.transactionGuid === t) {
            var h = p.api || v,
              m = p.clientStart,
              w = p.error || _,
              C = p.errorType || (p.error ? y : b),
              I = p.stackTrace || v,
              $ = p.actionId || 0,
              k = p.parentActionId || 0;
            n.push(h),
              i.push(p.clientLength),
              r.push(w),
              o.push(C),
              a.push(I),
              s.push(p.dependent || v),
              c.push(m),
              l.push($),
              u.push(k);
          }
        }
        return {
          apiArray: n,
          durationArray: i,
          errArray: r,
          errTypeArray: o,
          stackTraceArray: a,
          dependentArray: s,
          startTimeArray: c,
          actionIdArray: l,
          parentActionIdArray: u,
        };
      }
      function a(e, t) {
        return (e = e ? e + m + t.toString() : t.toString());
      }
      function s(e, t, n, i) {
        var r = { id: e, propertyId: n, guid: t, startTime: i };
        return r;
      }
      var c = window,
        l = (c.$Beacon, c.$Cookie),
        u = c.$Network,
        d = (c.$ScenarioQoS = {}),
        f = $Config,
        g = f.BSI || {},
        p = g.Scenario || {},
        h = "Sce",
        v = "na",
        m = "#",
        _ = "ok",
        y = "f",
        b = "s",
        w = 3;
      c.wLive.ScenarioQoSStats = {
        d: [],
        add: function (e, t, n, i) {
          if (e && t && n && p.ids && p.guids) {
            var r = p.ids.split(m),
              o = p.guids.split(m),
              a = r.length;
            (e.scenarioId = n.id), (e.transactionGuid = n.guid);
            for (var s = 0; a > s; s++)
              if (r[s] === e.scenarioId && o[s] === e.transactionGuid) {
                var l = c.wLive.ScenarioQoSStats;
                void 0 === i && (i = new Date().valueOf() - t),
                  (e.clientStart = t),
                  (e.clientLength = i),
                  l.d.push(e);
                break;
              }
          }
        },
      };
      var S = c.wLive.ScenarioQoSStats;
      (d.addScenarioToHttpHeader = function (e, t) {
        t &&
          ((e.scenarioid = t.id || v),
          (e.transactionguid = t.guid || v),
          (e.scenariopropertyid = t.propertyId || v));
      }),
        (d.getScenarioObject = function (e) {
          if (p.enabled && p.ids && p.guids && p.startTimes && p.propertyIds)
            for (
              var t = p.ids.split(m),
                n = p.guids.split(m),
                i = p.startTimes.split(m),
                r = p.propertyIds.split(m),
                o = t.length,
                a = 0;
              o > a;
              a++
            )
              if (n[a] === e) return s(t[a], n[a], r[a], i[a]);
          return null;
        }),
        (d.startScenario = function (e, t) {
          var n = new Date().valueOf(),
            i = $Utility.generateGuid();
          return (
            (p.ids = a(p.ids, e)),
            (p.propertyIds = a(p.propertyIds, t)),
            (p.startTimes = a(p.startTimes, n)),
            (p.guids = a(p.guids, i)),
            s(e, i, t, n)
          );
        }),
        (d.stopScenario = function (e, n, i, a, s) {
          if (p.enabled && p.ids && p.guids && p.startTimes && p.propertyIds)
            for (
              var c = n !== !1,
                l = e.id,
                u = g.xid,
                d = e.guid,
                h = p.ids.split(m),
                w = p.guids.split(m),
                S = p.startTimes.split(m),
                C = p.propertyIds.split(m),
                I = h.length,
                $ = 0;
              I > $;
              $++
            )
              if (h[$] === l && w[$] === d) {
                var k = o(l, d),
                  L = new Date().valueOf() - S[$],
                  T = c ? _ : i || v,
                  M = c ? b : a || y;
                k.apiArray.push(l),
                  k.durationArray.push(L),
                  k.errArray.push(T),
                  k.errTypeArray.push(M),
                  k.stackTraceArray.push(s || v),
                  k.dependentArray.push(v),
                  k.startTimeArray.push(S[$]),
                  k.actionIdArray.push(0),
                  k.parentActionIdArray.push(0);
                var P = {
                    sc: l,
                    ppd: C[$],
                    api: k.apiArray.join(m),
                    dur: k.durationArray.join(m),
                    err: k.errArray.join(m),
                    errtp: k.errTypeArray.join(m),
                    st: k.stackTraceArray.join(m),
                    dep: k.dependentArray.join(m),
                    stt: k.startTimeArray.join(m),
                    ac: k.actionIdArray.join(m),
                    pac: k.parentActionIdArray.join(m),
                    ctx: d,
                    xp: u,
                  },
                  D = $Utility.serialize(P);
                t(f.handlerBaseUrl + p.handlerPath, D),
                  h.splice($, 1),
                  w.splice($, 1),
                  S.splice($, 1),
                  C.splice($, 1),
                  (p.ids = h.join(m)),
                  (p.guids = w.join(m)),
                  (p.startTimes = S.join(m)),
                  (p.propertyIds = C.join(m)),
                  r(l, d);
                break;
              }
        }),
        (d.stopAllScenarios = function (e, t, n, i) {
          if (p.enabled && p.ids && p.guids)
            for (
              var r = p.ids.split(m),
                o = p.guids.split(m),
                a = r.length,
                s = t !== !1,
                c = 0;
              a > c;
              c++
            )
              (e !== v && e !== r[c]) ||
                d.stopScenario({ id: r[c], guid: o[c] }, s, n, null, i);
        }),
        (d.postDeferredScenarios = function () {
          if (((p.deferPosting = !1), p.deferredPosts)) {
            for (var e = 0; e < p.deferredPosts.length; e++) {
              var n = p.deferredPosts[e];
              t(n.url, n.postString);
            }
            delete p.deferredPosts;
          }
        }),
        $BSI.addNavCallback(n);
    })(window.originaljQuery || jQuery);
  }),
  define("pagestats", ["scenarioqos"], function () {
    !(function (e) {
      var t = window;
      t.wLive.PageStats = {
        d: [],
        o: $BSI.headTime,
        add: function (n, i) {
          var r = t.wLive.PageStats;
          (i = i || r.o),
            (n = n || {
              url: "Missing page stats.",
              tasks: [],
              executionTimeMs: 0,
              schedulerTimeMs: 0,
            });
          var o = new Date();
          (n.clientStart = i),
            (n.clientLength = o.getTime() - i),
            (n.clientTime = o),
            r.d.push(n),
            e(r).trigger("go");
        },
      };
    })(window.originaljQuery || jQuery);
  }),
  define(
    "baseutil",
    ["validateconfig", "jquery-1.7.2", "do", "lightstring"],
    function () {
      !(function (e) {
        var t = window;
        (t.$f = {
          cancelEvent: function (e) {
            return (
              (e = e || t.event),
              e.stopPropagation
                ? (e.preventDefault(), e.stopPropagation())
                : (e.returnValue = !1),
              !1
            );
          },
          getSelectedText: function () {
            if (document.selection) return document.selection.createRange();
            var e;
            try {
              e =
                t.getSelection().rangeCount > 0
                  ? t.getSelection().getRangeAt(0)
                  : t.document.createRange();
            } catch (n) {
              e = t.document.createRange();
            }
            return e;
          },
          createIframe: function () {
            var e = document.createElement("IFRAME");
            return (
              (e.frameBorder = "no"),
              (e.src = "javascript:''"),
              (e.scrolling = "no"),
              e
            );
          },
          px: function (e) {
            return e + "px";
          },
          updateTitle: function (e) {
            try {
              top.document.title = top.document.title.replace(
                /.*?( PLT: [0-9]+ms)?$/i,
                e + "$1"
              );
            } catch (t) {}
          },
          replaceQs: function (e, t, n) {
            var i = "([?|&])" + t + "=([^&]+)",
              r = new RegExp(i, "i"),
              o = e,
              a = "",
              s = e.indexOf("#");
            return (
              s > -1 && ((o = e.substr(0, s)), (a = e.substr(s))),
              o.replace(r, "$1" + t + "=" + n) + a
            );
          },
          doc: document,
          docEl: document.documentElement,
          getDocType: function () {
            var e,
              t = $f.doc,
              n = t.doctype,
              i = t.all;
            return (
              n ? (e = n.publicId) : i && i.length && (e = i[0].nodeValue),
              e || ""
            );
          },
          createLoading: function (t, n, i, r, o, a, s) {
            var c,
              l = t;
            "object" == typeof t &&
              ((l = t.returnMarkup),
              (n = t.type),
              (i = t.width),
              (r = t.height),
              (o = t.size),
              (a = t.color),
              (s = t.text),
              (c = t.useTransparentFallback)),
              (n = n || $f.loadingType.spinning),
              (i = i || "20px"),
              (r = r || i),
              (o = o || "3px"),
              (a = (a && a.toLowerCase()) || "#666");
            var u,
              d = "c_spinningDots",
              f = $Config.imgsBase + "common/";
            n == $f.loadingType.flying
              ? ((d = "c_flyingDots"), (u = "flyingdots.gif"))
              : ((u = "spinner_"),
                (u += "#fff" == a ? "white_" : "grey_"),
                "60px" == i
                  ? (u += "120")
                  : "30px" == i
                  ? (u += "60")
                  : ((u += "40"), c && "#fff" != a && (u += "_transparent")),
                (u += ".gif"));
            var g = f + u,
              p = document.createElement("div");
            e(p).css({ width: i, height: r, "font-size": o }),
              (p.className = d + " c_loadingDots c_dotsPlaying");
            var h =
              '<div class="c_loadingFallback"><img src="' +
              g +
              '" alt="" width="' +
              i +
              '" height="' +
              r +
              '" /></div>';
            h += '<div class="c_loadingTracks">';
            for (var v = 5; v > 0; v--)
              h +=
                '<div class="c_loadingTrack c_loadingTrack' +
                v +
                '"><div class="c_loadingDot" style="background-color:' +
                a +
                ";width:" +
                o +
                ";height:" +
                o +
                '"></div></div>';
            (h += "</div>"), (p.innerHTML = h);
            var m = e("<div></div>").append(p);
            if (
              (n == $f.loadingType.flying && m.css({ width: i }),
              s &&
                m.append(
                  '<span class="c_loadingText">' + s.encodeHtml() + "</span>"
                ),
              l)
            ) {
              var _ = e("<span></span>").append(m),
                y = _.html();
              return _.remove(), y;
            }
            return m[0];
          },
          loadingType: { spinning: 0, flying: 1 },
          hideLoading: function (e) {
            e && (e.hide(), e.removeClass("c_dotsPlaying"));
          },
          showLoading: function (e) {
            e && (e.show(), e.addClass("c_dotsPlaying"));
          },
        }),
          $Do.register("$f");
      })(window.originaljQuery || jQuery);
    }
  ),
  define(
    "domutils",
    ["validateconfig", "jquery-1.7.2", "lightstring", "baseutil", "css"],
    function () {
      !(function (e) {
        function t() {
          l.bind(d, i), l.bind(f, n);
        }
        function n() {
          clearTimeout(s), l.unbind(f, n), l.unbind(d, i);
        }
        function i() {
          clearTimeout(s), (s = setTimeout(r, 100));
        }
        function r() {
          o = a = null;
        }
        var o,
          a,
          s,
          c = window,
          l = e(c),
          u = c.$f,
          d = "resize",
          f = "unload";
        (u.dockIt = function (e, t, n, i, r, o, a, s, c, l) {
          var d = 0;
          (r = r || !1),
            (n = "undefined" == typeof n ? 0 : n),
            (i = i || { x: 0, y: 0 }),
            (s = s || {}),
            "object" != typeof i && ((d = i), (i = { x: 0, y: 0 })),
            (s.top = s.top || 0),
            (s.bottom = s.bottom || 0),
            (s.left = s.left || 0),
            (s.right = s.right || 0);
          var f = e.offsetParent,
            g = f == document.body || f == u.docEl || c,
            p = u.getLocation(e, r);
          l = l || u.getLocation(t, r, g);
          var h,
            v,
            m = i.x * ($B.rtl ? -1 : 1),
            _ = {
              x: p.bodyX + m,
              y: p.bodyY + i.y,
              width: p.width,
              height: p.height,
              targetLoc: l,
              spaceY: 0,
            };
          if (!a) {
            var y = u.clientHeight(),
              b = u.clientWidth(),
              w = -1 != l.addScrollTop ? u.scrollTop() : 0,
              S = u.scrollLeft(),
              C = p.width + m,
              I = p.height + i.y,
              $ = y + w - l.bottom - s.bottom,
              k = l.top - w - s.top,
              L = b + S - l.right - s.right,
              T = l.left - S - s.left,
              M = $ > I,
              P = k > I,
              D = L > C,
              A = T > C;
            !M && P
              ? (2 > n
                  ? ((n += 2), (v = 1))
                  : (4 != n && 6 != n) || ((n += 1), (v = 1)),
                (_.spaceY = k))
              : !P && M
              ? (n >= 2 && 4 > n
                  ? ((n -= 2), (v = 1))
                  : (5 != n && 7 != n) || ((n -= 1), (v = 1)),
                (_.spaceY = $))
              : 2 > n || 4 == n || 6 == n
              ? (_.spaceY = $)
              : (_.spaceY = k),
              !D && A
                ? $B.rtl
                  ? n >= 4 && 6 > n
                    ? ((n += 2), (h = 1))
                    : (1 != n && 3 != n) || ((n -= 1), (h = 1))
                  : n > 5
                  ? ((n -= 2), (h = 1))
                  : (0 != n && 2 != n) || ((n += 1), (h = 1))
                : !A &&
                  D &&
                  ($B.rtl
                    ? n > 5
                      ? ((n -= 2), (h = 1))
                      : (0 != n && 2 != n) || ((n += 1), (h = 1))
                    : n >= 4 && 6 > n
                    ? ((n += 2), (h = 1))
                    : (1 != n && 3 != n) || ((n -= 1), (h = 1)));
          }
          var x = n % 2;
          return (
            o
              ? ((_.x = i.x), (_.y = i.y + l.bottom))
              : n >= 0 &&
                (4 > n
                  ? ((_.x += x
                      ? $B.rtl
                        ? l.left
                        : l.right - p.width
                      : $B.rtl
                      ? l.right - p.width
                      : l.left),
                    (_.y += 2 > n ? l.bottom + d : l.top - p.height - d))
                  : ($B.rtl && (6 > n ? (n += 2) : (n -= 2)),
                    (_.x += 6 > n ? l.left - p.width - d : l.right + d),
                    (_.y += x ? l.bottom - p.height : l.top))),
            !$B.Mobile || P || M || (_.y = u.scrollTop()),
            h && (_.x += -2 * i.x),
            v && (_.y += -2 * i.y),
            (e.style.left = _.x + "px"),
            (e.style.top = _.y + "px"),
            _
          );
        }),
          (u.getLocation = function (e, t, n) {
            for (
              var i = !1,
                r = u.getStyle,
                o = "offsetTop",
                a = "offsetLeft",
                s = "position",
                c = {
                  x: e[a],
                  y: e[o],
                  top: 0,
                  right: 0,
                  bottom: 0,
                  left: 0,
                  bodyX: 0,
                  bodyY: 0,
                  width: e.offsetWidth,
                  height: e.offsetHeight,
                },
                l = e;
              (l = l.offsetParent);

            ) {
              if (
                ((i = "relative" == r(l, s)),
                2 != t && ((c.bodyX -= l[a]), (c.bodyY -= l[o])),
                i)
              ) {
                var d = u.toInt(r(l, "padding-left")),
                  f = u.toInt(r(l, "padding-top"));
                (c.x = 1 == t ? c.x : d), (c.y = 1 == t ? c.y : f);
              }
              (c.x += l[a]), (c.y += l[o]);
            }
            e = e.parentNode;
            for (var g = 0, p = 0; e && e != document.body; ) {
              var h = r(e, s);
              "relative" != h
                ? ("fixed" == h && n && (g = 1),
                  n || (!p && "absolute" != h)
                    ? (c.y -= u.toInt(e.scrollTop))
                    : "fixed" == h && (g = -1),
                  (e = e.parentNode))
                : ((p = 1), (e = e.parentNode));
            }
            return (
              1 == g && (c.y += u.toInt(u.scrollTop())),
              (c.left = c.x),
              (c.top = c.y),
              (c.right = c.x + c.width),
              (c.bottom = c.y + c.height),
              (c.addScrollTop = g),
              c
            );
          }),
          (u.toInt = function (e) {
            return (e = parseInt(e)), isNaN(e) ? 0 : e;
          }),
          (u.locCompare = function (e, t) {
            return e.bodyX != t.bodyX ||
              e.bodyY != t.bodyY ||
              e.top != t.top ||
              e.left != t.left ||
              e.bottom != t.bottom ||
              e.right != t.right
              ? 1
              : 0;
          }),
          (u.getStyle = function (e, t) {
            var n = "";
            if (
              u.doc.defaultView &&
              u.doc.defaultView.getComputedStyle &&
              e.nodeType
            ) {
              var i = u.doc.defaultView.getComputedStyle(e, "");
              n = i ? i.getPropertyValue(t) : "";
            } else if (e.currentStyle) {
              if (t.indexOf("-") >= 0) {
                var r = t.split("-");
                (r[1] = r[1].substr(0, 1).toUpperCase() + r[1].substr(1)),
                  (t = r.join(""));
              }
              n = e.currentStyle[t];
            }
            return n;
          }),
          (u.isChildOf = function (e, t, n) {
            try {
              for (n || (n = window.document); t && t !== e && t != n; )
                t = t.parentNode;
              return t === e;
            } catch (i) {
              return !1;
            }
          }),
          (u.pn = function (e, t) {
            for (
              var n = $css.has(e, t), i = n ? e : null;
              !i && (e = e.parentNode) && "undefined" != typeof e;

            )
              $css.has(e, t) && (i = e);
            return i;
          }),
          (u.docHeight = function (e) {
            if (e || !o) {
              var t = u.doc.documentElement.clientHeight,
                n = u.doc.body.clientHeight,
                i = void 0 != n ? n : window.innerHeight + window.scrollMaxY;
              o = Math.max(i, t);
            }
            return o;
          }),
          (u.docWidth = function () {
            if (!a) {
              var e = u.doc.body.clientWidth;
              a = void 0 != e ? e : document.width;
            }
            return a;
          }),
          (u.scrollTop = function () {
            var e = u.toInt(u.docEl.scrollTop),
              t = u.toInt(window.scrollY);
            return Math.max(e, t);
          }),
          (u.scrollLeft = function () {
            var e = u.toInt(u.docEl.scrollLeft),
              t = u.toInt(window.scrollX);
            return Math.max(e, t);
          }),
          (u.clientHeight = function () {
            return u.docEl.clientHeight - ($B.IE ? 16 : 0);
          }),
          (u.clientWidth = function () {
            return u.docEl.clientWidth - ($B.IE ? 16 : 0);
          }),
          t();
      })(window.originaljQuery || jQuery);
    }
  ),
  define(
    "wlivecss",
    ["validateconfig", "jquery-1.7.2", "css", "debug"],
    function () {
      !(function (e) {
        var t = window,
          n = (t.Debug, t.$css);
        (n.getCN = function (e, t, i) {
          var r = [];
          if (i && i.getElementsByTagName)
            for (var o = i.getElementsByTagName(t), a = 0; a < o.length; a++)
              n.has(o[a], e) && (r[r.length] = o[a]);
          return r;
        }),
          (n.addHideBorder = function (t, n) {
            (n = n || this), e(n).addClass("c_nobdr");
          }),
          (n.removeHideBorder = function (t, n) {
            (n = n || this), e(n).removeClass("c_nobdr");
          }),
          (n.addPressedState = function (t, n) {
            (n = n || this), e(n).addClass("t_prs");
          }),
          (n.removePressedState = function (t, n) {
            (n = n || this), e(n).removeClass("t_prs");
          });
        t.$edh = {
          e: function (e, t) {
            var n = t || "inline";
            if (
              "span" == e.nodeName.toLowerCase() &&
              -1 != e.className.indexOf("c_ld")
            ) {
              var i = e.lastChild;
              i &&
                (e.parentNode.insertBefore(i, e),
                (i.style.display = n),
                e.parentNode.removeChild(e));
            }
          },
          d: function (e) {
            if (
              "a" == e.nodeName.toLowerCase() &&
              ("span" != e.parentNode.nodeName.toLowerCase() ||
                -1 == e.parentNode.className.indexOf("c_ld"))
            ) {
              var t = document.createElement("span");
              (t.innerHTML = e.innerHTML),
                (t.className = e.className ? e.className + " c_ld" : "c_ld");
              var n = e.getAttribute("title");
              n && t.setAttribute("title", n),
                (e.style.display = "none"),
                e.parentNode.insertBefore(t, e),
                t.appendChild(e);
            }
          },
        };
        $B &&
          $B.SF_iPhone &&
          e(function () {
            e(".sc").length > 0 &&
              e(t.document).bind("touchmove", function (t) {
                0 === e(t.target).closest(".sc").length && t.preventDefault();
              });
          });
      })(window.originaljQuery || jQuery);
    }
  ),
  define(
    "wliveimagestrip",
    [
      "validateconfig",
      "jquery-1.7.2",
      "lightstring",
      "do",
      "wlivecss",
      "utilityextensions",
    ],
    function () {
      !(function (e) {
        function t(e, t, n, i, r, o) {
          o
            ? ((e[S][h] = n + y),
              (e[S][v] = t + y),
              c() || ((e[S][m] = p(n) + i + y), (e[S][_] = p(t) + r + y)))
            : (e[S][b] = t + y + " " + n + y);
        }
        function n(e, t, n, i, r, o, a, s, c) {
          s = s || "" == s ? s : a;
          var l =
              '<span class="{0}"><img class="{1}" src="{2}" onload="this.onload=null;$Do.when(\'$IS.Init\',0,this);" style="width:{3};height:{4};background-position:{5};background-image:{6};" alt="{7}" title="{8}"/></span>',
            u = l.format(
              k,
              "is_img",
              r + "is/invis.gif",
              n + y,
              i + y,
              "-" + e + y + " -" + t + y,
              "url('" + o + "')",
              a ? a.encodeHtmlAttribute() : "",
              s ? s.encodeHtmlAttribute() : ""
            );
          if (c) return u;
          var d = document.createElement("span");
          return (d.innerHTML = u), d.firstChild;
        }
        function i(e, t, n, i) {
          (e = r(e.split(","))), (t = r(t.split(","))), (n = n ? n.trim() : n);
          var o = $B.rtl && e[1] ? e[1] : e[0];
          return f.Create(t[0], t[1], t[2], t[3], n, n + o, t[4], null, i);
        }
        function r(e) {
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            n && (e[t] = n.trim());
          }
          return e;
        }
        function o(e) {
          if (e && e.getElementsByTagName)
            for (
              var t, n = e.getElementsByTagName("span"), i = n.length, r = -1;
              i > r && !t;
              r++
            ) {
              var o = -1 == r ? e : n[r],
                a = g(o, k),
                s = g(o, L);
              if (a || s) return o;
            }
          return null;
        }
        function a(e) {
          var t = o(e);
          if (
            (e.tagName != $ &&
              t &&
              t.getElementsByTagName &&
              (e = t.getElementsByTagName($)[0]),
            e && g(e, "is_img"))
          ) {
            var n = e[S],
              i = e[C];
            if (i) {
              i.dir = $B.ltr ? "ltr" : "rtl";
              var r = c();
              if (T || !r) {
                var a = '"style="width:{2}px;height:{3}px;"',
                  s = '<span class="',
                  d = '<img src="{6}"',
                  f = "</span>",
                  h = [
                    s,
                    "is_o",
                    a,
                    ">",
                    s,
                    "is_i",
                    a,
                    ">",
                    d,
                    'class="is_hcimg {11}"alt="{1}"{10}style="left:-{4}px;top:-{5}px;width:{7};height:{8};{9}"/>',
                    f,
                    f,
                    d,
                    'class="is_p',
                    a,
                    "/>",
                  ].join(""),
                  v = i[C];
                if (v)
                  for (
                    var m = v.getElementsByTagName("span"), _ = 0;
                    _ < m.length;
                    _++
                  )
                    m[_][S].zoom = 1;
                var y = n[w],
                  b = y.indexOf("http");
                -1 === b && (b = y.indexOf('url("') + 5),
                  (y = y.substr(b, y.length - b - (y.endsWith('")') ? 2 : 1)));
                var M,
                  P,
                  D = u(e),
                  A = l(e),
                  x = p(A.x),
                  N = p(A.y);
                r || ((M = x + D.w), (P = N + D.h));
                var E = e.title,
                  B = h.format(
                    e.src.encodeHtmlAttribute(),
                    e.alt.encodeHtmlAttribute(),
                    D.w,
                    D.h,
                    x,
                    N,
                    (r ? y : e.src).encodeHtmlAttribute(),
                    r ? I : M + "px",
                    r ? I : P + "px",
                    r
                      ? ""
                      : "filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src='" +
                          y.encodeHtmlAttribute() +
                          "',sizingMethod='crop');",
                    E || "" == E
                      ? 'title="' + E.encodeHtmlAttribute() + '"'
                      : "",
                    e.className.replace("is_img", "")
                  );
                $css.swap(i, k, L), (i.innerHTML = B);
              }
            }
          }
        }
        function s(e) {
          for (
            var t = e.getElementsByTagName($), n = 0, i = t.length;
            i > n;
            n++
          ) {
            var r = t[n],
              o = r.className;
            ("is_img" != o && "is_hcimg" != o && "is_p" != o) ||
              ((r.onload = null), (r[S][w] = ""));
          }
        }
        function c() {
          return !$B.IE_M6 || $B.IEM_M8;
        }
        function l(t) {
          var n = e(t),
            i = t[S],
            r = (i[b] || n.css(b) || "").split(" "),
            o = parseInt(i[b + "X"] || n.css(b + "X") || r[0]),
            a = parseInt(i[b + "Y"] || n.css(b + "Y") || r[1]);
          return { x: o, y: a };
        }
        function u(t) {
          var n = e(t),
            i = t[S],
            r =
              t.currentStyle ||
              (window.getComputedStyle && window.getComputedStyle(t, 0)) ||
              {},
            o = parseInt(i[_] || r[_] || n.css(_)),
            a = parseInt(i[m] || r[m]) || n.css(m);
          return { w: o, h: a };
        }
        var d = window;
        d.Debug;
        d.$IS = {};
        var f = d.$IS,
          g = $css.has,
          p = Math.abs,
          h = "top",
          v = "left",
          m = "height",
          _ = "width",
          y = "px",
          b = "backgroundPosition",
          w = "backgroundImage",
          S = "style",
          C = "parentNode",
          I = "auto",
          $ = "IMG",
          k = "is_c",
          L = "is_hc",
          T = d.$Utility.isHighContrast();
        (f.setClass = function (n, i) {
          if (n) {
            var r = o(n);
            if (r) {
              var a = r.getElementsByTagName($)[0],
                s = g(r, L);
              if (((a.className = (s ? "is_hcimg " : "is_img ") + i), s)) {
                var d = a[C],
                  f = (e(a), l(a));
                c() || ((a[S][_] = ""), (a[S][m] = ""));
                var p = u(d);
                t(a, f.x, f.y, p.h, p.w, s);
              }
            }
          }
        }),
          (f.toggle = function (n, i, r) {
            if (n && 0 != i) {
              var a = o(n);
              if (a) {
                var s = a.getElementsByTagName($)[0],
                  c = g(a, k),
                  d = s;
                c || (d = s[C]),
                  r && ((s.alt = r), null != s.title && (s.title = r));
                var f = e(s),
                  p = f.css(v) || s[S][v],
                  m = f.css(h) || s[S][h];
                if (c) {
                  var _ = l(s);
                  (p = _.x), (m = _.y);
                }
                (p = parseInt(p)), (m = parseInt(m));
                var y = u(d),
                  b = m - y.h * i;
                t(s, p, b, y.h, y.w, !c);
              }
            }
          }),
          (f.Create = n),
          (f.CreateFromConfig = i),
          (f.Init = a),
          (f.disposeAll = s),
          $Do.register("$IS.Init", a),
          $Do.register("$IS.disposeAll", s);
      })(window.originaljQuery || jQuery);
    }
  ),
  define(
    "wlivemenu",
    [
      "validateconfig",
      "jquery-1.7.2",
      "css",
      "debug",
      "baseutil",
      "domutils",
      "sutra",
    ],
    function () {
      !(function (e) {
        function t(
          n,
          p,
          w,
          C,
          I,
          $,
          k,
          L,
          T,
          M,
          P,
          D,
          A,
          x,
          N,
          E,
          B,
          W,
          R,
          F,
          H,
          O,
          j,
          U,
          Q
        ) {
          function X() {
            ($e = !0),
              (n.binding = nn),
              i(o, l, nn.dispose),
              i(n, st, _e),
              i(p, st, _e),
              i(p, lt, we),
              i(p, at, fe),
              i(S, pt, pe),
              i(S, at, pe),
              i(S, "touchend", ge),
              i(S, ct, he),
              i(S, mt, pe),
              $B.Firefox && i(S, _t, pe),
              (We = p.tagName == g),
              (nn.isHoverMenu =
                ("mouseover" === k || "mousemove" === k || "focus" === k) &&
                !We),
              M || ((M = 250), (je = 1e3)),
              (P = P || 200),
              nn.isHoverMenu
                ? (i(p, gt, nn.menuOnmouseout),
                  i(p, c, nn.menuOnmouseover),
                  i(n, gt, nn.menuOnmouseout),
                  i(n, c, nn.menuOnmouseover),
                  i(p, ut, nn.menuOnmouseover))
                : k &&
                  !B &&
                  (!Q || ("keyup" !== k && "mousedown" !== k && "click" !== k)
                    ? o.setTimeout(function () {
                        i(p, k, nn.toggleState);
                      }, 0)
                    : o.setTimeout(function () {
                        e(p)
                          .bind("keyup" + h, function (e) {
                            13 === e.which && nn.toggleState(e);
                          })
                          .bind("mousedown" + h, function (e) {
                            nn.toggleState(e);
                          });
                      }, 0)),
              !b ||
                ($B.IE && $B.V < 7) ||
                ((Ae = S.createElement("div")),
                (Ae[Ve] = "c_m_sbox"),
                Ce(Ae, 50),
                (tn || $B.S60_Symbian) &&
                  o.$Config &&
                  $Config.ImagesBaseUrl &&
                  (Ae[u].background =
                    "url(" + $Config.ImagesBaseUrl + "/imgs/black_50.png)"),
                S.body.insertBefore(Ae, S.body.firstChild),
                $B.SF_iPhone && i(Ae, at, pe)),
              (Pt[Je] = Ye),
              q(),
              V(),
              i(o, ht, G);
          }
          function q() {
            var t,
              a = n.getElementsByTagName("*");
            (Oe = 0), (Ue = null), (Pe = []);
            for (var s = null, c = 0, l = a.length; l > c; c++) {
              var d = a[c],
                p = e(d),
                h = "SPAN" == d.tagName && $css.has(d, "c-NavLinkDisabled"),
                v = "SPAN" == d.tagName && $css.has(d, "c-InformationRow");
              if (
                ("UL" === d.tagName &&
                  $css.has(d, "c_m") &&
                  "absolute" === p.css("position") &&
                  ((s && $f.isChildOf(s, d, n)) || (s = d)),
                ("A" == d.tagName || d.tagName == g || h || v) &&
                  (!s || !$f.isChildOf(s, d, n)))
              ) {
                var m = Ie(d);
                if (m == n || (m && m.binding && m.binding.isOpen())) {
                  v || Pe.push(d);
                  var _,
                    y = d[f];
                  try {
                    _ = "LI" == y.tagName || "DIV" == y.tagName;
                  } catch (w) {}
                  _ &&
                    (b ||
                      (r(d, dt, z),
                      r(d, ft, z),
                      r(d, vt, $f.cancelEvent),
                      i(d, dt, z),
                      i(d, ft, z),
                      i(d, vt, $f.cancelEvent),
                      !$B.RE_WebKit ||
                        d.getAttribute("tabindex") ||
                        h ||
                        v ||
                        d.setAttribute("tabindex", 1),
                      (d[u].zoom = "0"),
                      ($css.has(d, "uxfa_ml") || $css.has(d, "c_ml")) &&
                        (Oe = 1),
                      d.setAttribute("role", "menuitem"),
                      h && d.setAttribute("aria-disabled", "true"),
                      o.$Sutra &&
                        $Sutra.Shared &&
                        $Sutra.Shared.MenuItemLink &&
                        !y.getAttribute("sutra") &&
                        sutra(y, "$Sutra.Shared.MenuItemLink")),
                    "none" === y.style.display ||
                      $css.has(y, "NoDisplay") ||
                      ((Ue = Ue || y), (Qe = y)),
                    !Ne && $css.has(d, bt) && (Fe = d),
                    Be && Be.id && Be.id == d.id && ((t = 1), be(Pe.length)));
                }
              }
            }
            (Nt = Pe.length),
              Nt > 0
                ? (Mt && Ee && ae(),
                  (Mt = 0),
                  (Te = Pe[0]),
                  (Me = Pe[Nt - 1]),
                  i(Te, lt, we),
                  i(Me, lt, we),
                  Ue
                    ? (kt.removeClass(It),
                      e(Ue).addClass("c_m_firstchild"),
                      e(Qe).addClass("c_m_lastchild"))
                    : kt.addClass(It))
                : (Y(), (Mt = 1)),
              !t && Fe && be(-1);
          }
          function z(e) {
            if (!We) {
              e = e || event;
              var t = e.target || e.srcElement;
              "A" == t.nodeName &&
                ("focusin" == e.type
                  ? setTimeout(function () {
                      $css.add(t, yt);
                    }, 0)
                  : setTimeout(function () {
                      $css.remove(t, yt);
                    }, 0));
            }
          }
          function G(e) {
            if (((Tt = 1), !$css.has(n, "noresize"))) {
              var t = $f.docWidth();
              Ft != t && ((Ft = t), se(e, 1));
            }
          }
          function V() {
            if (!Mt) {
              Pt[Ke] = Ze;
              var t = Ie(p);
              t && t != p ? (He = t.binding) : void 0 != T && (w = T),
                x &&
                  (Ne && ((n[u][d] = "auto"), $css.remove(n, "c_m_maxw")),
                  n.offsetWidth > x &&
                    ((n[u][d] = x + s), $css.add(n, "c_m_maxw")));
              var r = 3,
                a = r,
                c = $B.rtl,
                l = 1;
              if (
                (!De && b && J(),
                xe ||
                  b ||
                  ((xe = $f.createIframe()),
                  (At = xe[u]),
                  (At[nt] = $f.getStyle(n, nt)),
                  n[f].insertBefore(xe, n),
                  i(xe, ut, Se)),
                (Qt = N || p),
                $css.has(p, "c_m_usep") && (Qt = p[f]),
                tn ||
                  (o.$WLXIM && o.$WLXIM.isSidebarOpened() && (qt.right = _),
                  !C &&
                    e(n).parents(".c_m").length > 0 &&
                    (C = { y: -y, x: 0 }),
                  (Ut = $f.dockIt(n, Qt, w, C, I, L, D, qt, zt, Gt)),
                  (Ht = Ut.targetLoc)),
                b)
              ) {
                var g = $f.docWidth(),
                  h = $f.docHeight(),
                  v = Et,
                  m = o.screen[d],
                  S = 0;
                if (
                  (Ae &&
                    ((Ae[u][it] = h ? h + s : "100%"),
                    (Ae[u][d] = g ? g + s : "100%")),
                  (!g || (g > m && !$B.SF_iPhone)) && (g = m),
                  (c = 0),
                  g > Et && !tn)
                ) {
                  var $ = $f.getLocation(p, I, jt),
                    k = $B.rtl ? $.right : $.left;
                  k > g / 2 && ((S = g - Et), (c = 1)), (l = 0);
                } else (v = g), (a = 0);
                (Ut.x = S),
                  (n[u][rt] = Ut.x + s),
                  (Pt[d] = Dt[d] = v - 2 + s),
                  tn && (n[u][ot] = Rt + s),
                  K();
              }
              var M = function () {
                (Ut.height += b && l ? 2 * r : 0),
                  (Dt[Je] = Ye),
                  b || (Dt[d] = Ut.width + s),
                  (Dt[it] = Ut.height + s),
                  (Dt[rt] = Ut.x + (c ? -a : a) + s),
                  (Dt[ot] = Ut.y + (b && l ? -r : r) + s),
                  (Dt[Je] = et);
              };
              !b || tn || $B.S60_Symbian || setTimeout(M, 0),
                xe &&
                  ((At[Je] = Ye),
                  (At[d] = Ut.width + s),
                  (At[it] = Ut.height + s),
                  (At[rt] = Ut.x + s),
                  (At[ot] = Ut.y + s)),
                (Tt = 0),
                Ee ? Ne && nn.show(0, 1) : Y();
            }
          }
          function J() {
            for (De = n; De[Ve] != wt && De[Ge]; ) De = De[Ge];
            (De && De[Ve] == wt) ||
              ((De = S.createElement("div")),
              (Dt = De[u]),
              (Dt[nt] = $f.getStyle(n, nt)),
              (Dt[ot] = 0),
              (Dt[rt] = 0),
              (De[Ve] = wt),
              n[f].appendChild(De)),
              (Dt = De[u]),
              (Dt[Ke] = tt),
              (Dt.backgroundColor = "#000"),
              Ce(De, 20);
          }
          function K() {
            for (
              var e, t = 0, i = [], r = n.getElementsByTagName("UL"), o = 0;
              o < r.length;
              o++
            )
              (e = r[o]),
                $css.has(e, "c_gll") &&
                  (i.push(e),
                  de(e),
                  e.offsetTop > e.previousSibling.offsetTop && (t = 1));
            if (t) for (var a = 0; a < i.length; a++) ue(i[a]);
          }
          function Y() {
            $e &&
              (Zt && !Kt
                ? ($t.stop(),
                  (Yt = !1),
                  (Kt = !0),
                  clearTimeout(Jt),
                  (Jt = setTimeout(function () {
                    ee(), oe(), $t.animate({ height: 0 }, en, "linear", ne);
                  }, 10)))
                : (Z(), b || oe()),
              Ae && (Ae[u][Ke] = tt),
              be(-1),
              setTimeout(function () {
                e(Pe).removeClass(yt);
              }, 100),
              kt.attr("aria-expanded", "false"),
              kt.removeAttr("aria-owns"));
          }
          function Z() {
            Ee ||
              (te(),
              (At[Je] = Dt[Je] = Pt[Je] = Ye),
              (At[Ke] = Dt[Ke] = Pt[Ke] = tt),
              Tt && ((Pt[ot] = Dt[ot] = 0), (Pt[rt] = Dt[rt] = 0))),
              e(wLive.Controls).trigger("aftermenudismiss", {
                menu: nn,
                parent: He,
              });
          }
          function ee() {
            $t.css({ overflow: "hidden" }), $t.removeClass("pause");
          }
          function te() {
            $t.css({ overflow: "", height: "auto" }), $t.addClass("pause");
          }
          function ne() {
            (Kt = !1), Z();
          }
          function ie() {
            (Yt = !1), te();
          }
          function re(e) {
            e = e || $t.height();
            var t = Ut.spaceY;
            if (
              t > 0 &&
              e >= t &&
              !Oe &&
              ($t.css("max-height", t + s),
              $t.addClass(Ct),
              !$t.hasClass("c_mfw") && (!$B.IE || $B.V <= 8))
            ) {
              var n = $t.width() + 16;
              $t.css("min-width", n + s);
            }
          }
          function oe() {
            $t.hasClass(Ct) &&
              ($t.css({ "max-height": "", "min-width": "" }),
              $t.removeClass(Ct));
          }
          function ae() {
            if (
              (e(wLive.Controls).trigger("beforemenushow", {
                menu: nn,
                parent: He,
              }),
              Ae && (Ae[u][Ke] = Ze),
              (At[Ke] = Dt[Ke] = Pt[Ke] = Ze),
              Zt && !Yt)
            ) {
              clearTimeout(Jt), $t.stop(), (Yt = !0), (Kt = !1), te();
              var t = $t.height();
              ee(),
                $t.css({ height: 0 }),
                $t.animate({ height: t }, en, "linear", ie),
                re(t);
            } else b || re();
            (At[Je] = Dt[Je] = Pt[Je] = et),
              Fe == Te && be(0),
              $B.IE_M7 &&
                ($t.find(".c_ms").each(function () {
                  var t = e(this);
                  t.css("width", t.parents("ul").width() - v + s);
                }),
                $t.find(".c_ml").each(function () {
                  var t = e(this);
                  t.css("width", t.parents("ul").width() - m + s);
                })),
              kt.attr("aria-expanded", "true"),
              n.id && kt.attr("aria-owns", n.id);
          }
          function se(n, i) {
            (i || (ce() && Ee)) &&
              ((rn = new Date().getTime()),
              (Ee = 0),
              nn.closeEventSource(n && n.srcElement),
              Mt || Y(),
              (t.current = He),
              He &&
                (He.isHoverMenu && (He.tempHoverCloseDelay = Wt),
                $B.IE && ke && p.focus(),
                setTimeout(function () {
                  He.update(1);
                }, 0)),
              Xt.removeClass(St),
              le(),
              $B.IE &&
                $B.V <= 8 &&
                ($t.find(".c_ms").each(function () {
                  e(this).css("width", "");
                }),
                $t.find(".c_ml").each(function () {
                  e(this).css("width", "");
                })));
          }
          function ce() {
            var e = 500;
            return new Date().getTime() - rn > e;
          }
          function le() {
            for (var e = 0, t = Bt.length; t > e; e++)
              try {
                Bt[e]();
              } catch (n) {
                a.submitFromException(n, ze, 99);
              }
          }
          function ue(e) {
            (e[u][Ke] = tt), (e.previousSibling[Ve] = "");
          }
          function de(e) {
            (e[u][Ke] = Ze), (e.previousSibling[Ve] = "c_gl");
          }
          function fe(e) {
            if (!We && nn.isHoverMenu) {
              var t = p.getAttribute("href");
              if ((!t || t.endsWith("#")) && Ee && !$)
                try {
                  Te.focus();
                } catch (n) {}
            }
          }
          function ge(e) {
            qe ? (pe(e), Ee || (qe = !1)) : (qe = !0);
          }
          function pe(e) {
            e = e || event;
            var t = e.target || e.srcElement;
            Ee &&
              t &&
              !$f.isChildOf(n, t) &&
              p != t &&
              !$f.isChildOf(p, t) &&
              nn.hide(e);
          }
          function he(e) {
            e = e || event;
            var t = 27,
              i = e.target || e.srcElement,
              r = e.keyCode || e.which;
            9 == r && (Le = !1),
              Ee &&
                (r == t
                  ? ((Re = i.value), nn.hide(e))
                  : ke ||
                    (Lt != p && (9 != r || $f.isChildOf(n, Lt))) ||
                    !Te ||
                    $ ||
                    -1 !== xt ||
                    ye(1)),
              We &&
                i == p &&
                (Ee || i.value == Re || ve()
                  ? Ee && ve() && nn.hide(e)
                  : nn.show());
          }
          function ve() {
            return !(E || !We || "" != p.value);
          }
          function me() {
            return !We || !e(p).is(":focus");
          }
          function _e(n) {
            n = n || event;
            var i = n.target || n.srcElement,
              r = n.keyCode || n.which,
              o = 0;
            if (((Le = 9 == r), (ke = n.shiftKey), (Lt = i), Ee && (We || U))) {
              if (i == p || U)
                if (40 == r) ye(1), (o = 1);
                else if (38 == r) ye(-1), (o = 1);
                else if (13 == r) {
                  if ("" != i.value || R)
                    if (Be) {
                      try {
                        Be.focus();
                      } catch (a) {}
                      e(nn).trigger("EnterEvent", Be);
                    } else if (Fe) {
                      try {
                        Fe.focus();
                      } catch (a) {}
                      e(Fe).click(), e(nn).trigger("EnterEvent", Fe);
                    }
                } else
                  Le && !ke
                    ? (e(nn).trigger("TabEvent", n),
                      be(-1),
                      t.closeCurrent(n),
                      We || (o = 1))
                    : 27 == r && Ee
                    ? (o = 1)
                    : Le && ke && (be(-1), t.closeCurrent(n), We || (o = 1));
              else Le && (ke ? ke && be(xt - 1) : be(Lt != Me ? xt + 1 : -1));
              if (o) return $f.cancelEvent(n);
            }
            return !0;
          }
          function ye(t) {
            if (Nt) {
              for (
                var n = xt + t;
                Nt > n && n >= 0 && !e(Pe[n]).is(":visible");

              )
                n += t;
              n >= Nt ? (n = Nt - 1) : 0 > n && (n = 0), be(n);
            }
          }
          function be(e) {
            Nt &&
              (Be && $css.remove(Be, yt),
              (xt = e),
              xt > -1
                ? ((Be = Pe[xt]),
                  $css.remove(Fe, bt),
                  Be &&
                    ($css.add(Be, yt),
                    setTimeout(function () {
                      try {
                        Be.focus();
                      } catch (e) {}
                    }, 0)))
                : ((Be = ze), $css.add(Fe, bt)));
          }
          function we(e) {
            Le && ke && Lt == p
              ? (nn.hide(e), nn.menuOnmouseout())
              : !Mt && ((!ke && Le && Lt == Me) || (ke && Le && Lt == Te))
              ? (nn.hide(e), nn.menuOnmouseout())
              : Ee || Lt != p || nn.menuOnmouseout();
          }
          function Se(e) {
            var t = Le && !ke ? Te : p;
            try {
              t.focus();
            } catch (n) {}
          }
          function Ce(e, t) {
            var n = "opacity";
            $B.IE && $B.V <= 9 && (n = "filter"),
              (e[u][n] = "filter" == n ? "alpha(opacity=" + t + ")" : 0.01 * t);
          }
          function Ie(e) {
            for (
              var t = e.binding && e.binding.toggleState ? e : null;
              !t && (e = e.parentNode) && "undefined" != typeof e;

            )
              e.binding && e.binding.toggleState && (t = e);
            return t;
          }
          var $e,
            ke,
            Le,
            Te,
            Me,
            Pe,
            De,
            Ae,
            xe,
            Ne,
            Ee,
            Be,
            We,
            Re,
            Fe,
            He,
            Oe,
            je,
            Ue,
            Qe,
            Xe,
            qe,
            ze = null,
            Ge = "nextSibling",
            Ve = "className",
            Je = "visibility",
            Ke = "display",
            Ye = "hidden",
            Ze = "block",
            et = "visible",
            tt = "none",
            nt = "position",
            it = "height",
            rt = "left",
            ot = "top",
            at = "click",
            st = "keydown",
            ct = "keyup",
            lt = "blur",
            ut = "focus",
            dt = "focusin",
            ft = "focusout",
            gt = "mouseout",
            pt = "mousedown",
            ht = "resize",
            vt = "dragstart",
            mt = "mousewheel",
            _t = "DOMMouseScroll",
            yt = "t_seli",
            bt = "t_hov",
            wt = "c_shad",
            St = "c_mf",
            Ct = "c_m_scroll",
            It = "c_emptymenu",
            $t = e(n),
            kt = e(p),
            Lt = ze,
            Tt = 1,
            Mt = 1,
            Pt = n[u],
            Dt = { display: 0, visibility: 0 },
            At = Dt,
            xt = 0,
            Nt = 0,
            Et = 320,
            Bt = [],
            Wt = 1e3,
            Rt = ($f.docEl, 0),
            Ft = $f.docWidth(),
            Ht = {},
            Ot = n.offsetParent,
            jt = Ot == document.body || Ot == $f.docEl,
            Ut = {},
            Qt = p,
            Xt = W ? e(W) : kt.parent(),
            qt = F || {},
            zt = H,
            Gt = j,
            Vt = "";
          "undefined" == typeof U && (U = !0);
          var Jt,
            Kt,
            Yt,
            Zt = !(b || ($B.IE && $B.V <= 9) || $B.SF_iPhone || O),
            en = 150,
            tn = $B.BlackBerry,
            nn = this;
          void 0 === w && (w = ze),
            (nn.isHoverMenu = 0),
            (nn.tempHoverCloseDelay = 0),
            (nn.parentEl = ze),
            (nn.keepHoverMenuOpen = 0),
            (nn.dispose = function () {
              if (
                (r(n, st, _e),
                r(p, st, _e),
                r(p, lt, we),
                r(S, pt, pe),
                r(S, at, pe),
                r(S, ct, he),
                r(o, ht, G),
                r(S, mt, pe),
                $B.Firefox && r(S, _t, pe),
                nn.isHoverMenu
                  ? (r(p, gt, nn.menuOnmouseout),
                    r(p, c, nn.menuOnmouseover),
                    r(n, gt, nn.menuOnmouseout),
                    r(n, c, nn.menuOnmouseover),
                    r(p, ut, nn.menuOnmouseover))
                  : k &&
                    (!Q || ("keyup" !== k && "mousedown" !== k && "click" !== k)
                      ? r(p, k, nn.toggleState)
                      : (e(p).unbind("keyup" + h),
                        e(p).unbind("mousedown" + h))),
                Ae && (r(Ae, at, pe), e(Ae).remove()),
                xe && (r(xe, ut, Se), e(xe).remove()),
                !b)
              )
                for (var i = 0; i < Pe.length; i++)
                  r(Pe[i], dt, z), r(Pe[i], ft, z);
              r(Te, lt, we),
                r(Me, lt, we),
                (n.binding = p.menu = ze),
                t.current == nn && (t.current = null),
                Zt && te(),
                r(o, l, nn.dispose),
                (Bt = []);
            }),
            (nn.update = function (t) {
              (Ne = !0), r(Te, lt, we), r(Me, lt, we);
              for (var n = 0; n < Pe.length; n++) {
                var i = Pe[n];
                r(i, dt, z),
                  r(i, ft, z),
                  r(i, vt, $f.cancelEvent),
                  $css.remove(i, yt),
                  e(i).parent().removeClass("c_m_firstchild"),
                  e(i).parent().removeClass("c_m_lastchild");
              }
              if ((q(), !t)) {
                var o = Zt;
                (Zt = !1), V(), (Zt = o);
              }
              (Ne = !1),
                He &&
                  setTimeout(function () {
                    He.update(t);
                  }, 0);
            }),
            (nn.deactivate = function () {
              clearTimeout(Jt), te(), ($e = !1);
            }),
            (nn.activate = function () {
              $e = !0;
            }),
            (nn.convertToSubMenu = function (e) {
              nn.setLoc(e);
            }),
            (nn.convertFromSubMenu = function (e) {
              nn.setLoc(e);
            }),
            (nn.updateBinding = function (e) {
              (e = e || {}), (qt = e.edgeOffsets || qt);
            }),
            (nn.hide = se),
            (nn.show = function (e, n) {
              var i;
              if (Ue || $t.hasClass("c_msem")) {
                if (!n) {
                  var r = $f.scrollTop();
                  (Rt == r &&
                    Ht &&
                    !$f.locCompare(Ht, $f.getLocation(Qt, I, jt))) ||
                    ((Rt = r), (Tt = 1)),
                    Ee || (!Tt && !A) || (V(), (i = 1));
                }
                if (
                  (He || t.current == nn || t.closeAll(),
                  (Ee = 1),
                  Mt || ae(),
                  He && He.update(1),
                  !Ne && !e && !nn.isHoverMenu)
                )
                  try {
                    p.focus();
                  } catch (o) {}
                Xt.addClass(St), le(), (t.current = nn);
              }
            });
          var rn = 0;
          (nn.toggleState = function (e) {
            e && e.originalEvent && nn.triggerEventType(e.originalEvent.type),
              ce() &&
                ((rn = new Date().getTime()),
                Ee || ve() ? me() && se(e, 1) : nn.show());
          }),
            (nn.isOpen = function () {
              return Ee;
            }),
            (nn.addStateListener = function (e) {
              Bt.push(e);
            }),
            (nn.removeStateListener = function (e) {
              for (var t = 0, n = Bt.length; n > t; t++)
                if (Bt[t] == e) return void Bt.splice(t, 1);
            }),
            (nn.setOffset = function (e) {
              (C = e), (Tt = 1);
            }),
            (nn.invalidatePosition = function () {
              Tt = 1;
            }),
            (nn.setLoc = function (e) {
              (w = e), (Tt = 1);
            }),
            (nn.menuOnmouseover = function () {
              if (
                (p.unhover && (clearTimeout(p.unhover), (p.unhover = ze)),
                !Ee && !p.hover)
              ) {
                var e = M;
                t.tempOpenDelayTimer && je && (e = 1),
                  (p.hover = setTimeout(function () {
                    Ee || nn.show();
                  }, e));
              }
            }),
            (t.tempOpenDelayTimer = 0),
            (nn.menuOnmouseout = function () {
              p.hover && (clearTimeout(p.hover), (p.hover = ze)),
                !Ee ||
                  p.unhover ||
                  nn.keepHoverMenuOpen ||
                  ((nn.tempHoverCloseDelay = nn.tempHoverCloseDelay || P),
                  (p.unhover = setTimeout(function () {
                    se();
                  }, nn.tempHoverCloseDelay)),
                  (nn.tempHoverCloseDelay = 0),
                  je &&
                    (clearTimeout(t.tempOpenDelayTimer),
                    (t.tempOpenDelayTimer = setTimeout(function () {
                      t.tempOpenDelayTimer = null;
                    }, je))));
            }),
            (nn.getSelectedEl = function () {
              return Be ? Be : Fe;
            }),
            (nn.triggerEventType = function (e) {
              return "undefined" != typeof e && (Vt = e), Vt;
            }),
            (nn.closeEventSource = function (e) {
              return "undefined" != typeof e && (Xe = e), Xe;
            }),
            X();
        }
        function n() {
          ($B.Chrome || $B.Safari) && (r(S, c, t.emptyFunction), r(o, l, n));
        }
        function i(t, n, i) {
          t && e(t).bind(n, i);
        }
        function r(t, n, i) {
          t && e(t).unbind(n, i);
        }
        var o = window,
          a = o.$WebWatson,
          s = "px",
          c = "mouseover",
          l = "unload",
          u = "style",
          d = "width",
          f = "parentNode",
          g = "INPUT",
          p = "h/c7.png,h/c7_rtl.png,",
          h = ".wliveMenu",
          v = 30,
          m = 35,
          _ = 300,
          y = 10,
          b = $B.Mobile,
          w = $B.IE_M6,
          S = $f.doc,
          C = '<ul class="uxfa_m c_m t_hovl"></ul>',
          I = '<li class="c_mcp"></li>',
          $ = '<a class="uxfa_ml c_ml"><span class="c_mlu"></span></a>',
          k = '<span class="c_chev"></span>',
          L = "click";
        (t.closeCurrent = function (e) {
          t.current && t.current.hide(e, 1);
        }),
          (t.current = null),
          (t.closeAll = function () {
            for (; t.current; ) t.closeCurrent();
          }),
          (t.chevronTypes = {
            SmallLeftDark: ["154,17,6,8", "&#9668;"],
            SmallLeftLight: ["154,33,6,8", "&#9668;"],
            SmallRightDark: ["192,17,6,8", "&#9658;"],
            SmallRightLight: ["192,33,6,8", "&#9658;"],
            SmallUpDark: ["67,17,8,8", "&#9650;"],
            SmallUpLight: ["67,33,8,8", "&#9650;"],
            SmallDownDark: ["114,17,8,8", "&#9660;"],
            SmallDownLight: ["114,33,8,8", "&#9660;"],
            SmallPlusLeftDark: ["145,17,8,9", "&#9668;"],
            SmallPlusLeftLight: ["145,33,8,9", "&#9668;"],
            SmallPlusRightDark: ["184,17,8,9", "&#9658;"],
            SmallPlusRightLight: ["184,33,8,9", "&#9658;"],
            SmallPlusUpDark: ["57,17,9,8", "&#9650;"],
            SmallPlusUpLight: ["57,33,9,8", "&#9650;"],
            SmallPlusDownDark: ["104,17,9,8", "&#9660;"],
            SmallPlusDownLight: ["104,33,9,8", "&#9660;"],
            MediumLeftDark: ["135,17,9,11", "&#9668;"],
            MediumLeftLight: ["135,33,9,11", "&#9668;"],
            MediumRightDark: ["175,17,9,11", "&#9658;"],
            MediumRightLight: ["175,33,9,11", "&#9658;"],
            MediumUpDark: ["45,17,11,9", "&#9650;"],
            MediumUpLight: ["45,33,11,9", "&#9650;"],
            MediumDownDark: ["92,17,11,9", "&#9660;"],
            MediumDownLight: ["92,33,11,9", "&#9660;"],
            LargeLeftDark: ["123,17,11,15", "&#9668;"],
            LargeLeftLight: ["123,33,11,15", "&#9668;"],
            LargeRightDark: ["162,17,11,15", "&#9658;"],
            LargeRightLight: ["162,33,11,15", "&#9658;"],
            LargeUpDark: ["29,17,15,11", "&#9650;"],
            LargeUpLight: ["29,33,15,11", "&#9650;"],
            LargeDownDark: ["76,17,15,11", "&#9660;"],
            LargeDownLight: ["76,33,15,11", "&#9660;"],
            EllipsisDark: ["232,1,16,4", ""],
            EllipsisLight: ["232,17,16,4", ""],
            SmallCheckDark: ["1,1,12,12", ""],
            SmallCheckMedium: ["1,17,12,11", ""],
            SmallCheckDisabled: ["1,33,12,11", ""],
            SmallCheckLight: ["1,49,12,11", ""],
            LargeCheckDark: ["14,1,14,12", ""],
            LargeCheckMedium: ["14,17,14,12", ""],
            LargeCheckDisabled: ["14,33,14,12", ""],
            LargeCheckLight: ["14,49,14,12", ""],
            LargeDotDark: ["249,1,8,8", ""],
            LargeDotLight: ["249,17,8,8", ""],
            SquareDark: ["276,1,8,8", ""],
            SquareLight: ["276,17,8,8", ""],
          }),
          (t.createChevron = function (e, t) {
            if (w || b) return e[1];
            var n = e[0] + ",",
              i = $IS.CreateFromConfig(p, n, $Config.imgsBase, t);
            return i;
          }),
          (t.emptyFunction = function () {}),
          (function () {
            ($B.Chrome || $B.Safari) && (i(o, l, n), i(S, c, t.emptyFunction));
          })(),
          (t.bind = function (e, n, i, r, o, a, s, c, l, u, d, f, g, p) {
            var h = {
              offset: i,
              alt: void 0 == r ? 0 : r,
              nofocus: o,
              posabs: a,
              defaultLoc: s,
              hoverDelay: c,
              hoverCloseDelay: l,
              forceDispose: u,
              parentEl: d,
              menuEl: f,
              eventType: g,
              sourceEl: p,
            };
            return t.create(e, n, h);
          }),
          (t.create = function (e, n, i) {
            function r() {
              var i = !1,
                r = 0,
                o = 1,
                a = 2,
                s = r;
              return (
                C.binding
                  ? ((s = o), C.binding.updateBinding({ edgeOffsets: x }))
                  : C &&
                    $ &&
                    ((I = I || e.type),
                    (C.binding = new t(
                      C,
                      $,
                      n,
                      l,
                      p,
                      h,
                      I,
                      v,
                      m,
                      _,
                      y,
                      k,
                      L,
                      T,
                      M,
                      P,
                      b,
                      D,
                      A,
                      x,
                      N,
                      E,
                      B,
                      W,
                      R
                    )),
                    (s = o),
                    ("mouseover" != I && "focus" != I) ||
                      $.tagName == g ||
                      (s = a),
                    ($.menu = C.binding),
                    (i = !0)),
                C.binding.triggerEventType(e.type),
                s == o
                  ? C.binding.toggleState()
                  : s == a && C.binding.menuOnmouseover(),
                i
              );
            }
            (e = e || event), (i = i || {});
            var o = e.target || e.srcElement,
              a = ["c_ml", "c_mcp", "c_m"],
              c = o,
              l = i.offset,
              p = void 0 == i.alt ? 1 : i.alt,
              h = i.nofocus,
              v = i.posabs,
              m = i.defaultLoc,
              _ = i.hoverDelay,
              y = i.hoverCloseDelay,
              b = i.forceDispose,
              S = i.parentEl,
              C = i.menuEl,
              I = i.eventType,
              $ = i.sourceEl,
              k = i.skipEdgeDetection,
              L = i.noDockCache,
              T = i.maxWidth,
              M = i.dockEl,
              P = i.showOnEmptyInput,
              D = i.pressedStateEl,
              A = i.allowClickOnEmptyInput,
              x = i.edgeOffsets || {},
              N = i.sourceRelativeToBody,
              E = i.disableAnimations,
              B = i.targetLoc,
              W = i.arrowKeysNavigate,
              R = i.bindEnterKey;
            if (
              (($ = $ || $f.pn(c, a[0])),
              $ &&
                ("undefined" == typeof $.menu ||
                  null === $.menu ||
                  b ||
                  i.edgeOffsets) &&
                (S = S || $f.pn(c, a[1]) || $[f]))
            ) {
              w &&
                "LI" == S.tagName &&
                $css.has(S[f], "c_m") &&
                (S[u][d] = S.offsetWidth + s);
              for (var F = S.childNodes, H = F.length; H-- && !C; )
                C = $css.has(F[H], a[2]) ? F[H] : null;
              return b && C && C.binding && C.binding.dispose(), r();
            }
            return !1;
          }),
          (t.createSubmenuContainer = function () {
            return e(C);
          }),
          (t.createSubmenuA = function (t, n) {
            var i = e($);
            return e("span", i).append(t), n && n.length > 0 && i.append(n), i;
          }),
          (t.createSubmenuChevron = function (n) {
            var i = n || t.chevronTypes.SmallRightDark,
              r = e(k);
            return r.append(t.createChevron(i)), r;
          }),
          (t.createSubmenuItem = function (t, n, i) {
            var r = e(I);
            return (
              t && t.length > 0 && r.append(t),
              n && n.length > 0 && r.append(n),
              i && r.bind(L, i),
              r
            );
          }),
          (o.$menu = t);
      })(window.originaljQuery || jQuery);
    }
  ),
  define(
    "csiperf",
    ["validateconfig", "jquery-1.7.2", "cookie", "dependancies", "bsi"],
    function () {
      !(function (e) {
        function t(e, t, s) {
          var c = t[G] || "NA*NA*",
            l = o(t),
            u = i(l.time),
            d = me(pe("ANON", 1)).A || K,
            f = H.$WebWatson,
            g = f && f.foundException() ? 1 : 0,
            p = a(_e.latency),
            h = a(ye.thr),
            v = c + ":" + n(ae.prop, 20) + "*" + n(e) + "." + we,
            m = {
              ANON: d,
              NL: p,
              TP: h,
              CL: ae.mmn || K,
              MA: ae.mkt,
              B: ae.build,
              TR: v,
              PLT: l.time,
              IR: !be || l.nostart || s ? 0 : 1,
              EX: g,
            };
          return r(m, l.lapseReport, u), C(m), W(m, re), m;
        }
        function n(e, t) {
          t = t || X;
          var n = e.length;
          return (e = n > t ? e.substr(n - t) : e), e.encodeUrl();
        }
        function i(e) {
          return ne > 0 && !s(e) && e > 0
            ? {
                tprs: Math.round(((ne / 1024) * 8) / (e / 1e3)),
                size: Math.round((ne / 1024) * 10) / 10,
              }
            : J;
        }
        function r(e, t, n) {
          if (
            (ye.plt && (e.PLM = ye.plt),
            ye.com && (e.PCT = ye.com),
            ye.req && (e.PCD = ye.req),
            n && ((e.SZ = n.size), (e.TPRS = n.tprs)),
            t)
          )
            for (var i = 0; i < t.length; i++) {
              var r = t[i];
              e[r.key] = r.val;
            }
        }
        function o(e) {
          Z._ttg && Z.lapse.push({ s: "ttg", t: Z._ttg });
          var t = fe.timeStamp;
          (s(t) || 0 == t) && (t = $());
          var n = e.ST || 0;
          0 == n &&
            window.performance &&
            window.performance.timing &&
            ((n = window.performance.timing.navigationStart), (be = 1)),
            Z.ttxDeferred.resolve(n),
            Z.TTxDeferred.resolve(n),
            Z.addCsd("st", n);
          var i = t - n,
            r = d(n, t, Z.lapse);
          return { nostart: 0 == n, time: i > 0 ? i : 0, lapseReport: r };
        }
        function a(e) {
          var t = parseInt(e);
          return isNaN(t) ? 0 : t;
        }
        function s(e) {
          return "undefined" == typeof e || !e || K == e;
        }
        function c() {
          var e = { latency: _e.latency, throughput: _e.throughput };
          P(e), (_e = e);
        }
        function l() {
          p(), c(), j.deleteCookie(Q, ae.sd);
        }
        function u() {
          try {
            var e = window.location;
            return e.hostname + e.pathname;
          } catch (t) {
            return document.domain;
          }
        }
        function d(e, t, n) {
          var i = [];
          if (n && n.length > 1 && t - e > 0) {
            n[0] = { s: "Start", t: e };
            for (var r = 0; r < n.length - 1; r++) {
              var o = (n[r], n[r + 1]);
              if (!s(o)) {
                var a = o.t - e;
                if (a > 0) {
                  i[i.length] = { key: "L." + o.s, val: a };
                }
              }
            }
          }
          return i;
        }
        function f(e, n, i, r) {
          (e = e || u()),
            (ne = a(i.p)),
            (s(ne) || 0 >= ne) && (ne = s(n) ? 0 : a(n));
          var o = _e[V],
            l = _e[G];
          l && o && ((i[G] = "0*" + l + "*"), (i[V] = o), (be = 1), c()),
            (Z.GT1Param = t(e, i, r)),
            (Z.payloadHash = F(Z.GT1Param));
        }
        function g(e) {
          (e[G] = K), (e[V] = K), T(e);
        }
        function p() {
          (ne = 0),
            (fe.timeStamp = 0),
            (ie = {}),
            (re = {}),
            (Z.csd = {}),
            (Z.lapse = [{}]),
            (Z._ttg = 0),
            (Z.payloadLength = 0),
            (ce.rt = 0);
        }
        function h(e, t) {
          if (!le.enabled) return void l();
          !$BSI.sendToIdss() && Z.payloadHash.ANON && Z.fireCsiPerfBeacon(),
            s(e) && (e = u());
          var n = L();
          (n[G] = e + "." + we), (n[V] = $()), (n.p = s(t) ? 0 : a(t)), T(n);
        }
        function v() {
          var e = window.performance;
          if (e) {
            var t = e.timing;
            if (t) {
              var n = t.navigationStart;
              m("jsPlt", n, t.loadEventEnd),
                m("1Pnt", n, t.msFirstPaint),
                m("domIn", n, t.domInteractive),
                m("rdir", t.redirectStart, t.redirectEnd),
                m("dns", t.domainLookupStart, t.domainLookupEnd),
                m("tcp", t.connectStart, t.connectEnd),
                m("req", t.requestStart, t.responseEnd),
                m("resp", t.responseStart, t.responseEnd);
            }
            var i = e.navigation;
            i &&
              ($CSIPerf.addNtd("navType", i.type),
              $CSIPerf.addNtd("redirectCount", i.redirectCount));
          }
        }
        function m(e, t, n) {
          t && n && n > t && $CSIPerf.addNtd(e, n - t);
        }
        function _(e) {
          if (!le.enabled) return void l();
          var t = L();
          v(), f(se.pn, Z.payloadLength, t, e);
        }
        function y() {
          if (le.enabled) {
            var e = Z.GT1Param,
              t = I(e) || !e.IR ? "nostart" : ve(e);
            ue.enabled && $BSI.addBeaconParams({ csiperf: t });
          }
        }
        function b() {
          if (le.enabled) {
            var e = Z.GT1Param;
            ge.enabled &&
              ce.enabled &&
              e &&
              Z.fireOnLoad &&
              (delete e.ANON,
              delete e.MA,
              delete e.CL,
              (e.RT = ce.rt),
              (e.bicild = ""),
              O.fire(
                ae.handlerBaseUrl + "/Handlers/PerfMonitor.mvc",
                $BSI.addHandlerDPs(e),
                ce.render ? S : 0,
                0,
                1
              ));
          }
          Z.GT1Param = null;
        }
        function w(e, t) {
          if (e) {
            var n = e.indexOf(" PLT: ");
            n > -1 && (e = e.substr(0, n)), (e += t);
          } else e = t;
          return e;
        }
        function S() {
          var e = pe("SBSPLT");
          if (e) {
            var t = " PLT: " + parseInt(e) + "ms";
            try {
              window.top.document.title = w(window.top.document.title, t);
            } catch (n) {
              document.title = w(document.title, t);
            }
          }
        }
        function C(e) {
          I(Z.csd) || B(e, Z.csd), I(ie) || B(e, ie);
        }
        function I(e) {
          if (e) for (var t in e) return !1;
          return !0;
        }
        function $() {
          return new Date().getTime();
        }
        function k(e) {
          if (
            ((ae = $Config),
            (se = ae.BSI || {}),
            (ce = se.SBSPLT || {}),
            (le = se.CSIPerf || {}),
            (ue = le.IDSS || {}),
            (de = le.Trace || {}),
            (fe = le.page || {}),
            (ge = le.WLXFD || {}),
            (_csiPerfConfigOmniture = le.Omniture || {}),
            !le.disableTimers)
          ) {
            if (
              !le.skipStopTimer &&
              (_(e), y(), b(), le.enabled && !le.pltDetectionDisabled)
            ) {
              var t = L(),
                n = ae.prop;
              t.l != n && ((t.l = n), T(t), setTimeout(M, Y));
            }
            g(L()), $BSI.sendToIdss() && p(), (ee = new Date().getTime());
          }
        }
        function L() {
          var e = pe(Q, 1);
          return e == te ? oe : ((te = e), (oe = me(e)));
        }
        function T(e) {
          (oe = e), (te = ve(e)), he(Q, te, ae.sd, J, J, 1);
        }
        function M() {
          function e() {
            var e = new Date().getTime() - t;
            "1" == pe("pltmode", 1) &&
              ((_e.latency = e), P(_e), j.deleteCookie("pltmode", ae.sd, "/"));
          }
          var t = new Date().getTime(),
            n = { bicild: "", v: ae.build };
          O.fire(ae.handlerBaseUrl + "/Handlers/Plt.mvc", n, e, e, 1);
        }
        function P(e) {
          var t = new Date();
          he(
            q,
            ve(e),
            ae.sd,
            J,
            new Date(t.getUTCFullYear() + 1, t.getUTCMonth(), t.getUTCDay()),
            1
          );
        }
        function D(e, t, i, r, o) {
          if (!i && o && !le.disableTimers) {
            var a = s(se.pn) ? u() : se.pn;
            Z.setPerformanceId(we || A(t));
            var c = n(ae.prop, 20) + "*" + n(a);
            h(c, Z.payloadLength), (be = 1);
          }
        }
        function A(e) {
          for (var t = K; e && e.getAttribute; ) {
            var n = e.getAttribute("pid");
            if (n) {
              t = n;
              break;
            }
            e = e.parentNode;
          }
          return t;
        }
        function x(e) {
          le.enabled &&
            de.enabled &&
            ce.enabled &&
            O.fire(
              ae.handlerBaseUrl + "/Handlers/Bandwidth.mvc",
              $BSI.addLDToHash($BSI.addHandlerDPs(e))
            );
        }
        function N(e, t, n) {
          var i,
            r = this,
            o = new Date().getTime(),
            a = {};
          (r.lapse = []),
            (r.addCsd = function (e, t) {
              E(a, e, t);
            }),
            (r.addLapse = function (e) {
              r.lapse.push({ s: e, t: new Date().getTime() });
            }),
            (r.endTrace = function () {
              if (!i && ((i = 1), le.enabled && de.enabled && ce.enabled)) {
                var s = new Date().getTime(),
                  c = {
                    tc: e,
                    tcs: t,
                    ti: s - o,
                    th: o - $BSI.headTime,
                    to: ee ? o - ee : -1,
                  };
                R(c, r.lapse, o, s), B(c, a);
                var l = ae.handlerBaseUrl + "/Handlers/Trace.mvc";
                n && ((c.wli = "csi"), (l = se.BICI.beaconUrl)),
                  O.fire(l, $BSI.addLDToHash($BSI.addHandlerDPs(c)));
              }
            });
        }
        function E(e, t, n) {
          e[t] = n;
        }
        function B(e, t) {
          for (var n in t) e["C." + n] = t[n];
        }
        function W(e, t) {
          for (var n in t) e["N." + n] = t[n];
        }
        function R(e, t, n, i) {
          for (var r = t.length, o = 0; r > o; o++) {
            var a = t[o];
            e["L." + a.s] = a.t - n;
          }
        }
        function F(e) {
          var t = {};
          for (var n in e)
            (0 !== n.indexOf("C.") &&
              0 !== n.indexOf("N.") &&
              "ANON" !== n &&
              "CL" !== n &&
              "B" !== n &&
              "TR" !== n &&
              "IR" !== n &&
              "PLT" !== n) ||
              (t[n] = e[n]);
          if (t["C.TR"] && 0 == t["C.TR"].indexOf("0-") && t.TR) {
            var i = t.TR.substring(0, t.TR.indexOf(":"));
            t["C.TR"] = t["C.TR"].replace("0-", i + ".");
          }
          return e["L.ttg"] && (t[Z.timingPrefix + "g"] = e["L.ttg"]), t;
        }
        var H = window,
          O = H.$Beacon,
          j = H.$Cookie,
          U = H.$Utility,
          Q = (H.Debug, "BP"),
          X = 40,
          q = "wlidperf",
          z = "wl_preperf",
          G = "FR",
          V = "ST",
          J = null,
          K = "",
          Y = 5e3,
          Z = $CSIPerf;
        (Z.GT1Param = null),
          (Z.payloadLength = 0),
          (Z.TTxDeferred = e.Deferred()),
          (Z.ttxDeferred = e.Deferred()),
          (Z.payloadHash = {}),
          (Z.fireOnLoad = !0),
          (Z.timingPrefix = "T.");
        var ee,
          te,
          ne = 0,
          ie = {},
          re = {},
          oe = {},
          ae = H.$Config,
          se = ae.BSI || {},
          ce = se.SBSPLT || {},
          le = se.CSIPerf || {},
          ue = le.IDSS || {},
          de = le.Trace || {},
          fe = le.page || {},
          ge = le.WLXFD || {},
          pe = j.getCookie,
          he = j.setCookie,
          ve = U.serialize,
          me = U.deserialize,
          _e = me(pe(q, 1)),
          ye = me(pe(z, 1)),
          be = se.ir,
          we = K;
        (Z.lapseTimer = function (e, t) {
          var n;
          (n = t && t > 0 ? t : a($())), Z.lapse.push({ s: e, t: n });
        }),
          (Z.setUploadTP = function (e, t, n, i) {
            var r = { dir: "up", sz: e, ti: t, d: i, pn: se.pn, ext: n };
            x(r);
          }),
          (Z.setDownloadTP = function (e) {
            var t = { dir: "down", pn: se.pn, rate: e };
            x(t);
          }),
          (Z.startTrace = function (e, t, n) {
            return new N(e, t, n);
          }),
          (Z.endTrace = function (e, t) {}),
          (Z.setPerformanceId = function (e) {
            we = n(e, 20);
          }),
          (Z.addCsd = function (e, t) {
            E(ie, e, t);
          }),
          (Z.csdContains = function (e) {
            return ie[e];
          }),
          (Z.addNtd = function (e, t) {
            E(re, e, t);
          }),
          (Z.clearTTxDeferred = function () {
            Z.TTxDeferred = null;
          }),
          (Z.fireCsiPerfBeacon = function () {
            O.fire(se.BICI.beaconUrl, Z.payloadHash),
              p(),
              (Z.ttxDeferred = e.Deferred()),
              (Z.payloadHash = {});
          }),
          (Z.addTTxEvent = function (e, t) {
            Z.ttxDeferred &&
              Z.ttxDeferred.done(function (n) {
                Z.payloadHash[Z.timingPrefix + e] = t - n;
              });
          }),
          (Z.dontFireOnLoad = function () {
            (Z.fireOnLoad = !1), $BSI.sendToIdss(!1);
          }),
          $BSI.addLoadedCallback(k),
          $BSI.addNavCallback(D);
      })(window.originaljQuery || jQuery);
    }
  ),
  define("date", [], function () {
    !(function () {
      Date.now ||
        (Date.now = function () {
          return new Date().getTime();
        });
    })();
  }),
  define("reporter", ["jquery-1.7.2", "pagestats"], function () {
    !(function () {
      function e(e) {
        var t = e.error;
        t &&
          ((e.errorCode = e.errorCode || m.getErrorCode(t)),
          (e.stackTrace = e.stackTrace || t.stack),
          (e.resultDetails = e.resultDetails || {}),
          t.name && (e.resultDetails.name = t.name),
          t.message && (e.resultDetails.message = t.message));
      }
      function t() {
        r && (o.clearTimeout(r), (r = null));
        var e = o.$Config,
          t = e.ContactCache;
        if (t && t.logEnabled) {
          var n = JSON.stringify({ actions: m.actionHistory });
          (m.actionHistory = []),
            $Network.fetchXML(
              e.handlerBaseUrl +
                "/Handlers/PeopleApi/log.mvc?canary=" +
                t.canary.encodeURIComponent(),
              function () {},
              "POST",
              n
            );
        }
      }
      function n(e) {
        var n = window.$Config.ContactCache;
        if (n) {
          var a = n.logVerbose;
          a && i(e),
            m.actionHistory.length >= n.actionHistoryMaxLength
              ? (n && n.logVerbose && t(), m.actionHistory.shift())
              : n.logVerbose &&
                n.logEnabled &&
                !r &&
                (r = o.setTimeout(t, 5e3)),
            m.actionHistory.push(e);
        }
      }
      function i(e) {
        if (o[d] && o[d][p]) {
          var t = [e.eventType];
          if (
            (e.message && t.push(e.message),
            e.resultCode && t.push(e.resultCode),
            e.stackTrace && t.push(e.stackTrace),
            e.resultDetails)
          )
            for (var n in e.resultDetails) t.push(n + ":" + e.resultDetails[n]);
          o[d][p]("People: " + t.join(" - "));
        }
      }
      var r,
        o = window,
        a = o.wLive,
        s = (a.People = {}),
        c = o.$ScenarioQoS,
        l = a.ScenarioQoSStats,
        u = "WL_People_Cache",
        d = "console",
        f = "error",
        g = "errorType",
        p = "log",
        h = "undefined",
        v = {
          MissingTicket: { type: "c" },
          PassportAuthFail: { type: "c" },
          InvalidPassportUser: { type: "c" },
          401: { type: "c" },
          5000: { type: "f", name: "ProxyLoadFailure" },
          CantAccessIframeStorage: { type: "c" },
          15: { type: "c" },
          18: { type: "c" },
          22: { type: "c", name: "StorageExceededOrDisabled" },
          NoStorage: { type: "c" },
        },
        m = (s.Reporter = {
          isQosEnabled: !1,
          lastError: null,
          actionHistory: [],
          logAction: function (e) {
            m.log({ eventType: e });
          },
          logError: function (e, t, n) {
            m.log({ eventType: e, error: t }, n);
          },
          logDetails: function (e, t, n) {
            m.log({ eventType: e, resultDetails: t }, n);
          },
          log: function (i, r) {
            i && i.eventType && (e(i), n(i), r && t());
          },
          verbose: function () {
            for (var e = 0; e < m.actionHistory.length; e++)
              i(m.actionHistory[e]);
            var t = window.$Config.ContactCache;
            t && (t.logVerbose = !0);
          },
          handleError: function (e, t, n, i, r, o, a, s, c, l) {
            m.log(
              {
                eventType: "PageError",
                resultCode: i,
                stackTrace: a,
                resultDetails: {
                  message: e,
                  jsUrl: t,
                  jsLine: n,
                  data: c,
                  hostname: r,
                  action: s,
                  isHidden: l,
                },
              },
              !0
            );
          },
          startScenario: function (e) {
            var t = u + "_" + e;
            return m.isQosEnabled ? c.startScenario(t, u) : null;
          },
          stopScenario: function (e, t, n) {
            if ((n && !m.lastError && (m.lastError = n), m.isQosEnabled)) {
              var i = void 0,
                r = !1;
              if (!t && n) {
                var o = v[n];
                o && o.type && ((i = o.type), (r = "f" === i));
              }
              if (e.id) {
                var a = !t,
                  s = t ? null : n;
                m.log(
                  {
                    eventType: e.id,
                    resultCode: s,
                    success: t,
                    isQosImpacting: r,
                  },
                  a
                );
              }
              c.stopScenario(e, t, n, i);
            }
          },
          addStats: function (e, t, n, i) {
            var r = u + "_" + e,
              o = n ? v[n] : null,
              a = o && o.name ? o.name : n;
            a && (this.lastError = a);
            var s = o ? "f" == o.type : !1,
              c = i ? i.id : null;
            if (
              (m.log({
                eventType: r,
                resultCode: a,
                success: !!n,
                isQosImpacting: s,
                resultDetails: { api: r, property: u, scenario: c },
              }),
              m.isQosEnabled && i)
            ) {
              var d = { api: r, dependent: u };
              o && (d[g] = o.type), a && (d[f] = a), l.add(d, t, i);
            }
          },
          getErrorCode: function (e, t) {
            return (
              (t = t || "Unknown"),
              e.errorCode ? e.errorCode : e.code ? e.code : t
            );
          },
          isNullOrUndefined: function (e) {
            return typeof e === h || null == e;
          },
        });
    })();
  }),
  define("idletimer", ["reporter"], function () {
    !(function (e) {
      function t(t, c) {
        function l() {
          s.clearTimeout(g), (g = s.setTimeout(f, n));
        }
        function d() {
          _ && (c && c(), (_ = !1)), l();
        }
        function f() {
          _ || (t && t(), (_ = !0));
        }
        var g,
          p = this,
          h = u.IE ? "MSPointerDown" : "touchstart",
          v = u.IE ? "MSPointerMove" : "touchmove",
          m = u.IE ? "MSPointerUp" : "touchend",
          _ = !1,
          y = e(s.document);
        y.bind(a, d),
          y.bind(r, d),
          y.bind(o, d),
          y.bind(h, d),
          y.bind(v, d),
          y.bind(m, d),
          d(),
          (p.dispose = function () {
            s.clearTimeout(g), e(s).unbind(i, p.dispose);
            try {
              y.unbind(a, d),
                y.unbind(r, d),
                y.unbind(o, d),
                y.unbind(h, d),
                y.unbind(v, d),
                y.unbind(m, d);
            } catch (n) {}
            (t = null), (c = null);
          }),
          e(s).bind(i, p.dispose);
      }
      var n = 3e5,
        i = "unload",
        r = "mousedown",
        o = "mousewheel",
        a = "keydown",
        s = window,
        c = s.wLive,
        l = c.People,
        u = (l.Reporter, s.$B);
      l.IdleTimer = t;
    })(window.originaljQuery || jQuery);
  }),
  define("names", ["idletimer"], function () {
    !(function () {
      function e(e, t, n, o, a) {
        function c(e) {
          return u(e, ["personal", "work", "other"]);
        }
        function l(e) {
          return u(e, [
            "mobile",
            "home",
            "home2",
            "work",
            "work2",
            "pager",
            "homeFax",
            "workFax",
            "mobile2",
            "companyPhone",
            "other",
          ]);
        }
        function u(e, t, n) {
          var i = {};
          if (e)
            for (var r = 0; r < t.length; r++)
              s.Reporter.isNullOrUndefined(e[r]) ||
                (n ? (i[t[r]] = u(e[r], n)) : (i[t[r]] = e[r]));
          return i;
        }
        function d() {
          return t || "0";
        }
        function f(e) {
          var t = m[e];
          return t || ((t = g(e)), (m[e] = t)), t;
        }
        function g(e) {
          for (
            var t = e.split("|"),
              n = [
                "if (!firstName && !lastName) { return null }; var n = [], s = '';",
              ],
              i = 0,
              o = t.length;
            o > i;
            i += 2
          ) {
            var a = r[t[i]];
            n.push("if (" + a + ") {"),
              n.push(" if (n.length) { n.push(s); } "),
              n.push(" n.push(" + a + "); "),
              n.push("s = '" + t[i + 1] + "';"),
              n.push("} else {s = s || '" + t[i + 1] + "';}");
          }
          return (
            n.push("return n.join('').trim();"),
            new Function(
              "title",
              "firstName",
              "middleName",
              "lastName",
              "suffix",
              n.join("")
            )
          );
        }
        function p(e, t, n, i, r) {
          return h(e, t, null, i, r);
        }
        function h(e, t, n, i, r) {
          var o = [];
          return t || i
            ? (i && o.push(i),
              r && i && (o.push(" "), o.push(r)),
              t &&
                (i && o.push(", "), e && (o.push(e), o.push(" ")), o.push(t)),
              n && (!t && i ? o.push(", ") : o.push(" "), o.push(n)),
              o.join("").trim())
            : null;
        }
        for (var v = this, m = [], _ = 0; 11 >= _; _++) {
          var y = i[_ + ""];
          (y.fullName = f(y.fn)),
            (y.fullNameReverse = y.lnf ? y.fullName : h),
            (y.displayName = f(y.dn)),
            (y.displayNameReverse = y.lnf ? y.displayName : p),
            (y.sortName = f(y.sn)),
            (y.sortNameReverse = y.snr ? f(y.snr) : y.sortName);
        }
        (v.noNameString = n || ""),
          (v.profileUrl = o || ""),
          (v.photosUrl = a || ""),
          (v.isLastNameFirst = function () {
            return e;
          }),
          (v.formatName = function (e, t, n, r, o, a, s) {
            var c = e || d(),
              l = i[c][t];
            return l(n, r, o, a, s);
          }),
          (v.getDefaultNameType = d),
          (v._isLastNameFirstForNameType = function (e) {
            e = e || d();
            var t = i[e];
            return t && t.lnf;
          }),
          (v._buildDate = function (e) {
            var t = null;
            return (
              e &&
                ((t = u(e, ["year", "month", "day"])),
                (1900 != t.year && 1904 != t.year) || (t.year = null)),
              t
            );
          }),
          (v._buildEmails = c),
          (v._buildEmailFlags = function (e) {
            return c(e);
          }),
          (v._buildEmailCapabilities = function (e) {
            return c(e);
          }),
          (v._buildPhones = l),
          (v._buildPhoneFlags = function (e) {
            return l(e);
          }),
          (v._buildAddresses = function (e) {
            return u(
              e,
              ["home", "work", "other"],
              ["street", "city", "state", "zipCode", "country"]
            );
          });
      }
      var t = "F| |L",
        n = "L| |F",
        i = {
          0: {
            fn: "T| |F| |M| |L| |S",
            dn: "T| |F| |L| |S",
            sn: t,
            snr: n,
            lnf: !1,
          },
          1: {
            fn: "F| |L| |M| |T| |S",
            dn: "F| |L| |T| |S",
            sn: t,
            snr: n,
            lnf: !1,
          },
          2: {
            fn: "F| |L| |M| |T| |S",
            dn: "F| |L| |T| |S",
            sn: t,
            snr: n,
            lnf: !1,
          },
          3: {
            fn: "F| |M| |L| |T| |S",
            dn: "F| |L| |T| |S",
            sn: t,
            snr: n,
            lnf: !1,
          },
          4: {
            fn: "F| |M| |L| |T| |S",
            dn: "F| |L| |T| |S",
            sn: t,
            snr: n,
            lnf: !1,
          },
          5: {
            fn: "L| |F| |M| |T| |S",
            dn: "L| |F| |T| |S",
            sn: "L| |F",
            lnf: !0,
          },
          6: {
            fn: "T| |F| |M| |L| |S",
            dn: "T| |F| |L| |S",
            sn: t,
            snr: n,
            lnf: !1,
          },
          7: {
            fn: "T| |F| |L| |M| |S",
            dn: "T| |F| |L| |S",
            sn: t,
            snr: n,
            lnf: !1,
          },
          8: {
            fn: "T| |L||F| |M| |S",
            dn: "T| |L||F| |S",
            sn: "L||F",
            lnf: !0,
          },
          9: {
            fn: "T| |L| |F| |M| |S",
            dn: "T| |L| |F| |S",
            sn: "L| |F",
            lnf: !0,
          },
          10: {
            fn: "T| |L| |F| |M| |S",
            dn: "T| |L| |F| |S",
            sn: "L| |F",
            lnf: !0,
          },
          11: {
            fn: "T| |L| |M| |F| |S",
            dn: "T| |L| |F| |S",
            sn: "L| |F",
            lnf: !0,
          },
        },
        r = {
          T: "title",
          F: "firstName",
          M: "middleName",
          L: "lastName",
          S: "suffix",
        },
        o = window,
        a = o.wLive,
        s = a.People;
      s.Names = e;
    })();
  }),
  define("messagingaddress", ["names"], function () {
    !(function (e) {
      function t(e, t) {
        var n = this;
        (n._c = e),
          (n._mri = t),
          (n._aa = !1),
          (n._p = 0),
          (n._ccl = !1),
          (n._cch = !1),
          (n._cgch = !1);
      }
      var n = "changed";
      window.wLive.People.MessagingAddress = t;
      var i = t.prototype;
      (i.isActiveAddress = function () {
        return this._aa;
      }),
        (i.getPresence = function () {
          return this._p;
        }),
        (i.canCall = function () {
          return this._ccl;
        }),
        (i.canChat = function () {
          return this._cch;
        }),
        (i.canGroupChat = function () {
          return this._cgch;
        }),
        (i.getDifferentiator = function () {
          var e = this,
            t = e._c,
            n = t.getSourceId();
          return "GOOG" == n
            ? e._getMri()
            : "SCD" == n || "SKYPE" == n
            ? t.getNickname()
            : t.getDisplayNameWithFallback();
        }),
        (i._getContact = function () {
          return this._c;
        }),
        (i._getMri = function () {
          return this._mri;
        }),
        (i._setProperty = function (t, i, r, o, a) {
          (this._aa == t &&
            this._p == i &&
            this._ccl == r &&
            this._cch == o &&
            this._cgch == a) ||
            ((this._aa = t),
            (this._p = i),
            (this._ccl = r),
            (this._cch = o),
            (this._cgch = a),
            e(this._getContact().getPerson()).triggerHandler(n));
        });
    })(window.originaljQuery || jQuery);
  }),
  define("peoplecontactdetails", ["messagingaddress"], function () {
    !(function () {
      function e(e, t, n) {
        var i = this;
        (i._d = e),
          (i._pd = t),
          (i._n = n),
          (i._b = e[2]),
          (i._a = null),
          (i._an = null);
      }
      var t = window.wLive.People;
      t.ContactDetails = e;
      var n = e.prototype;
      (n.getAddresses = function () {
        var e = this;
        if (!e._a) {
          var t = e._b,
            n = e._pd[24] || [],
            i = e._d[25] || [],
            r = [
              65536 & t ? n[0] : i[0],
              t & (1 << 17) ? n[1] : i[1],
              t & (1 << 18) ? n[2] : i[2],
            ];
          e._a = e._n._buildAddresses(r);
        }
        return e._a;
      }),
        (n.getSignificantOther = function () {
          var e = this;
          return e._b & (1 << 20) ? e._pd[25] : e._d[26];
        }),
        (n.getAnniversary = function () {
          var e = this;
          if (!e._an) {
            var t = e._b & (1 << 20) ? e._pd[26] : e._d[27];
            e._an = e._n._buildDate(t);
          }
          return e._an;
        }),
        (n.getWebsite = function () {
          var e = this;
          return e._b & (1 << 21) ? e._pd[27] : e._d[28];
        }),
        (n.getJobTitle = function () {
          var e = this;
          return 16 & e._b ? e._pd[28] : e._d[29];
        }),
        (n.getNotes = function () {
          var e = this;
          return e._b & (1 << 22) ? e._pd[29] : e._d[30];
        });
    })();
  }),
  define("peoplecontact", ["peoplecontactdetails"], function () {
    !(function () {
      function e(e, t, n, i) {
        var r = this;
        (r._d = e),
          (r._p = t),
          (r._pd = n),
          (r._n = i),
          (r._b = e[2]),
          (r._cd = null),
          (r._bd = null),
          (r._e = null),
          (r._eie = null),
          (r._ec = null),
          (r._ph = null),
          (r._m = null),
          (r._pie = null);
      }
      var t = 8,
        n = window.wLive.People;
      (n.ContactState = {
        deleted: -1,
        shell: 0,
        meContact: 1,
        pending: 2,
        follower: 3,
        twoWay: 4,
        rolodex: 5,
        nonFriend: 6,
        declined: 7,
        implicitContact: 8,
        shellContactFanPage: 9,
        enhancedShellContact: 10,
        implicitShellContact: 11,
        invitationShellContact: 12,
      }),
        (n.Contact = e);
      var i = e.prototype;
      (i.getPerson = function () {
        return this._p;
      }),
        (i.getId = function () {
          var e = this;
          return 1 & e._b ? e._pd[0] : e._d[0];
        }),
        (i.getPassportMemberName = function () {
          var e = this;
          return "WL" === e._d[4] ? e._p.getPassportMemberName() : null;
        }),
        (i.getMessagingAddresses = function () {
          var e = this;
          if (!e._m) {
            e._m = [];
            for (var t = e.getMris(), i = 0; i < t.length; i++)
              t[i] && e._m.push(new n.MessagingAddress(e, t[i]));
          }
          return e._m;
        }),
        (i.getDisplayName = function () {
          var e = this;
          return e._n.formatName(
            e.getNameType(),
            "displayName",
            e.getTitle(),
            e.getFirstName(),
            e.getMiddleName(),
            e.getLastName(),
            e.getSuffix()
          );
        }),
        (i.getFullName = function () {
          var e = this;
          return (
            e.getOrderedName() ||
            e._n.formatName(
              e.getNameType(),
              "fullName",
              e.getTitle(),
              e.getFirstName(),
              e.getMiddleName(),
              e.getLastName(),
              e.getSuffix()
            )
          );
        }),
        (i.getDisplayNameWithFallback = function () {
          var e = this,
            t = e.getDisplayName();
          if (
            ((t = t || e.getNickname()),
            (t = t || e.getCompanyName()),
            (t = t || e.getPassportMemberName()),
            !t)
          ) {
            var n = e.getEmails();
            (t = t || n.personal), (t = t || n.work), (t = t || n.other);
          }
          if (!t) {
            var i = e.getPhones();
            (t = t || i.mobile),
              (t = t || i.home),
              (t = t || i.home2),
              (t = t || i.work),
              (t = t || i.work2),
              (t = t || i.other);
          }
          return t || e._n.noNameString;
        }),
        (i.getContactState = function () {
          return this._d[1];
        }),
        (i.getPromotionBitmap = function () {
          return this._b;
        }),
        (i.getMris = function () {
          return this.getPerson().isMe()
            ? ["1:" + this.getPerson().getPassportMemberName()]
            : this._props()[0] || [];
        }),
        (i.getIsHidden = function () {
          return this._props()[1];
        }),
        (i.getOfflineImEnabled = function () {
          return this._props()[2];
        }),
        (i.getSourceId = function () {
          return this._d[4];
        }),
        (i.getObjectId = function () {
          return this._d[5];
        }),
        (i.getDomainTag = function () {
          return this._d[6];
        }),
        (i.getFirstName = function () {
          var e = this;
          return e._b & t ? e._pd[2] : e._d[7];
        }),
        (i.getMiddleName = function () {
          var e = this;
          return e._b & t ? e._pd[18] : e._d[18];
        }),
        (i.getLastName = function () {
          var e = this;
          return e._b & t ? e._pd[3] : e._d[8];
        }),
        (i.getTitle = function () {
          var e = this;
          return e._b & t ? e._pd[19] : e._d[20];
        }),
        (i.getSuffix = function () {
          var e = this;
          return e._b & t ? e._pd[20] : e._d[21];
        }),
        (i.getEmails = function () {
          var e = this;
          if (!e._e) {
            var t = e._b,
              n = e._pd[4],
              i = e._d[9] || [],
              r = [
                32 & t ? n[0] : i[0],
                64 & t ? n[1] : i[1],
                128 & t ? n[2] : i[2],
              ];
            e._e = e._n._buildEmails(r);
          }
          return e._e;
        }),
        (i.getPrimaryEmail = function () {
          var e = this,
            t = e.getEmails(),
            n = t.personal || t.work || t.other || e.getPassportMemberName();
          return n;
        }),
        (i.getPhones = function () {
          var e = this;
          if (!e._ph) {
            var t = e._b,
              n = e._pd[5],
              i = e._d[10] || [],
              r = [
                256 & t ? n[0] : i[0],
                512 & t ? n[1] : i[1],
                1024 & t ? n[2] : i[2],
                2048 & t ? n[3] : i[3],
                4096 & t ? n[4] : i[4],
                8192 & t ? n[5] : i[5],
                16384 & t ? n[6] : i[6],
                32768 & t ? n[7] : i[7],
                t & (1 << 23) ? n[8] : i[8],
                t & (1 << 24) ? n[9] : i[9],
                t & (1 << 25) ? n[10] : i[10],
              ];
            e._ph = e._n._buildPhones(r);
          }
          return e._ph;
        }),
        (i.getCompanyName = function () {
          var e = this;
          return 16 & e._b ? e._pd[10] : e._d[11];
        }),
        (i.getUserTile = function () {
          var e = this;
          return 4 & e._b ? e._pd[11] : e._d[12];
        }),
        (i.getEmailImEnabled = function () {
          var e = this;
          return e._eie || (e._eie = e._n._buildEmailFlags(e._d[13])), e._eie;
        }),
        (i.getEmailCapabilities = function () {
          var e = this;
          return (
            e._ec || (e._ec = e._n._buildEmailCapabilities(e._d[14])), e._ec
          );
        }),
        (i.getPhoneImEnabled = function () {
          var e = this;
          return e._pie || (e._pie = e._n._buildPhoneFlags(e._d[15])), e._pie;
        }),
        (i.getFavoriteOrder = function () {
          return this._d[16];
        }),
        (i.getBirthday = function () {
          var e = this;
          if (!e._bd) {
            var t = e._bd & (1 << 19) ? e._pd[16] : e._d[17];
            e._bd = e._n._buildDate(t);
          }
          return e._bd;
        }),
        (i.getNickname = function () {
          var e = this,
            n = e._b & t ? e._pd[17] : e._d[19],
            i = e.getSourceId();
          return (
            i &&
              "TWITR" === i.toUpperCase() &&
              n &&
              !n.startsWith("@") &&
              (n = "@" + n),
            n
          );
        }),
        (i.getYomiFirstName = function () {
          var e = this;
          return e._b & t ? e._pd[21] : e._d[22];
        }),
        (i.getYomiLastName = function () {
          var e = this;
          return e._b & t ? e._pd[22] : e._d[23];
        }),
        (i.getYomiCompanyName = function () {
          var e = this;
          return e._b & t ? e._pd[23] : e._d[24];
        }),
        (i.getOrderedName = function () {
          var e = this;
          return e._b & t ? e._pd[30] : e._d[31];
        }),
        (i.getNameType = function () {
          var e = this;
          return e._b & t ? e._pd[31] : e._d[32];
        }),
        (i.getSkypeId = function () {
          return this._d[34];
        }),
        (i.getIsAnonymous = function () {
          return this._d[35];
        }),
        (i.getLinkedMsa = function () {
          return this._d[36];
        }),
        (i.getLinkedFacebookId = function () {
          return this._d[37];
        }),
        (i.getIsBidirectional = function () {
          return this._d[38];
        }),
        (i.getSkypePendingOutbound = function () {
          return this._d[39];
        }),
        (i.getIsBlocked = function () {
          return this._d[40];
        }),
        (i.getDetails = function () {
          var e = this;
          return (
            e._cd || (e._cd = new n.ContactDetails(e._d, e._pd, e._n)), e._cd
          );
        }),
        (i._props = function () {
          return this._d[3] || [];
        });
    })();
  }),
  define("persondetails", ["peoplecontact"], function () {
    !(function () {
      function e(e, t) {
        var n = this;
        (n._d = e), (n._n = t), (n._a = null), (n._an = null);
      }
      var t = window.wLive.People;
      t.PersonDetails = e;
      var n = e.prototype;
      (n.getAddresses = function () {
        var e = this;
        return e._a || (e._a = e._n._buildAddresses(e._d[24])), e._a;
      }),
        (n.getSignificantOther = function () {
          return this._d[25];
        }),
        (n.getAnniversary = function () {
          var e = this;
          return e._an || (e._an = e._n._buildDate(e._d[26])), e._an;
        }),
        (n.getWebsite = function () {
          return this._d[27];
        }),
        (n.getJobTitle = function () {
          return this._d[28];
        }),
        (n.getNotes = function () {
          return this._d[29];
        }),
        (n.getAntilinks = function () {
          return this._d[32];
        });
    })();
  }),
  define("person", ["persondetails"], function () {
    !(function (e) {
      function t(t, n) {
        var i = this;
        (i._d = t),
          (i._n = n),
          (i.$changes = e(this)),
          (i._c = null),
          (i._e = null),
          (i._p = null),
          (i._b = null),
          (i._ce = null),
          (i._pd = null),
          (i._m = null);
      }
      var n = window,
        i = n.wLive.People;
      i.Person = t;
      var r = t.prototype;
      (r.getId = function () {
        return this._d[0];
      }),
        (r.getContacts = function () {
          var e = this;
          if (!e._c) {
            e._c = [];
            var t = this._d[1];
            if (t)
              for (var n = 0; n < t.length; n++)
                e._c.push(new i.Contact(t[n], e, e._d, e._n));
          }
          return e._c;
        }),
        (r.getMessagingRelevance = function () {
          var e = parseInt(this._d[33]);
          return isNaN(e) && (e = 0), e;
        }),
        (r.getPeopleRelevance = function () {
          var e = parseInt(this._d[34]);
          return isNaN(e) && (e = 0), e;
        }),
        (r.getMessagingAddresses = function () {
          var e = this;
          if (!e._m) {
            for (var t = e.getContacts(), n = [], i = 0; i < t.length; i++)
              "SKYPE" == t[i].getSourceId() &&
                n.addRange(t[i].getMessagingAddresses());
            for (i = 0; i < t.length; i++)
              "WL" == t[i].getSourceId() &&
                n.addRange(t[i].getMessagingAddresses());
            for (i = 0; i < t.length; i++)
              "SKYPE" != t[i].getSourceId() &&
                "WL" != t[i].getSourceId() &&
                n.addRange(t[i].getMessagingAddresses());
            e._m = n;
          }
          return e._m;
        }),
        (r.isOnline = function (e) {
          for (
            var t = this, n = t.getMessagingAddresses(), i = 0;
            i < n.length;
            i++
          )
            if ((!e || n[i].isActiveAddress()) && 1 == n[i].getPresence())
              return !0;
          return !1;
        }),
        (r.canCall = function (e) {
          for (
            var t = this, n = t.getMessagingAddresses(), i = 0;
            i < n.length;
            i++
          )
            if ((!e || n[i].isActiveAddress()) && n[i].canCall()) return !0;
          return !1;
        }),
        (r.canChat = function (e) {
          for (
            var t = this, n = t.getMessagingAddresses(), i = 0;
            i < n.length;
            i++
          )
            if ((!e || n[i].isActiveAddress()) && n[i].canChat()) return !0;
          return !1;
        }),
        (r.canGroupChat = function (e) {
          for (
            var t = this, n = t.getMessagingAddresses(), i = 0;
            i < n.length;
            i++
          )
            if ((!e || n[i].isActiveAddress()) && n[i].canGroupChat())
              return !0;
          return !1;
        }),
        (r.getDisplayName = function () {
          var e = this;
          return e._n.formatName(
            e.getNameType(),
            "displayName",
            e.getTitle(),
            e.getFirstName(),
            e.getMiddleName(),
            e.getLastName(),
            e.getSuffix()
          );
        }),
        (r.getFullName = function () {
          var e = this;
          return (
            e.getOrderedName() ||
            e._n.formatName(
              e.getNameType(),
              "fullName",
              e.getTitle(),
              e.getFirstName(),
              e.getMiddleName(),
              e.getLastName(),
              e.getSuffix()
            )
          );
        }),
        (r.getDisplayNameWithFallback = function () {
          var e = this,
            t = e.getDisplayName();
          if (
            ((t = t || e.getNickname()),
            (t = t || e.getCompanyName()),
            (t = t || e.getPassportMemberName()),
            !t)
          ) {
            var n = e.getEmails();
            (t = t || n.personal), (t = t || n.work), (t = t || n.other);
          }
          if (!t) {
            var i = e.getPhones();
            (t = t || i.mobile),
              (t = t || i.home),
              (t = t || i.home2),
              (t = t || i.work),
              (t = t || i.work2),
              (t = t || i.other);
          }
          return t || e._n.noNameString;
        }),
        (r.isLastNameFirst = function () {
          var e = this,
            t = e.getNameType();
          return e._n._isLastNameFirstForNameType(t);
        }),
        (r.getProfileUrl = function () {
          var e = this,
            t = e._d[7];
          return t ? e._n.profileUrl.replace("{cid}", e._d[7]) : "";
        }),
        (r.getPhotosUrl = function () {
          var e = this,
            t = e._d[7];
          return t ? e._n.photosUrl.replace("{cid}", e._d[7]) : "";
        }),
        (r.isMe = function () {
          var e = this._d[1][0];
          return e && 1 === e[1];
        }),
        (r.isPendingInbound = function () {
          for (
            var e = this._d[1], t = !1, n = Math.min(e.length, 3), i = 0;
            n > i;
            i++
          ) {
            var r = e[i];
            if (r && 2 === r[1]) {
              t = !0;
              break;
            }
          }
          return t;
        }),
        (r.isHidden = function () {
          for (
            var e = this._d[1], t = !1, n = Math.min(e.length, 3), i = 0;
            n > i;
            i++
          ) {
            var r = e[i];
            if (r && ((6 === r[1] && r[3] && 1 === r[3][1]) || 2 === r[1])) {
              t = !0;
              break;
            }
          }
          return t;
        }),
        (r.isFanPage = function () {
          var e = this._d[1][0];
          return e && 9 === e[1];
        }),
        (r.getFirstName = function () {
          return this._d[2];
        }),
        (r.getLastName = function () {
          return this._d[3];
        }),
        (r.getEmails = function () {
          var e = this;
          return e._e || (e._e = e._n._buildEmails(e._d[4])), e._e;
        }),
        (r.getPhones = function () {
          var e = this;
          return e._p || (e._p = e._n._buildPhones(e._d[5])), e._p;
        }),
        (r.getCid = function () {
          return this._d[6];
        }),
        (r.getHexCid = function () {
          return this._d[7];
        }),
        (r.getOnHideList = function () {
          return this._d[8];
        }),
        (r.getTrustLevel = function () {
          return this._d[9];
        }),
        (r.getCompanyName = function () {
          return this._d[10];
        }),
        (r.getUserTile = function () {
          return this._d[11];
        }),
        (r.getCategoryIds = function () {
          return this._d[12] ? this._d[12] : [];
        }),
        (r.getIsFavorite = function () {
          return this._d[13];
        }),
        (r.getFavoriteOrder = function () {
          return this._d[14];
        }),
        (r.getPassportMemberName = function () {
          return this._d[15];
        }),
        (r.getBirthday = function () {
          var e = this;
          return e._b || (e._b = e._n._buildDate(e._d[16])), e._b;
        }),
        (r.getNickname = function () {
          return this._d[17];
        }),
        (r.getMiddleName = function () {
          return this._d[18];
        }),
        (r.getTitle = function () {
          return this._d[19];
        }),
        (r.getSuffix = function () {
          return this._d[20];
        }),
        (r.getYomiFirstName = function () {
          return this._d[21];
        }),
        (r.getYomiLastName = function () {
          return this._d[22];
        }),
        (r.getYomiCompanyName = function () {
          return this._d[23];
        }),
        (r.getOrderedName = function () {
          return this._d[30];
        }),
        (r.getNameType = function () {
          return this._d[31] || this._n.getDefaultNameType();
        }),
        (r.getVersion = function () {
          return this._d[35];
        }),
        (r.getContactEmails = function () {
          function e(e, t, n) {
            if (n) {
              var i = n.toLowerCase();
              t[i] || ((t[i] = 1), e.push(n));
            }
          }
          var t = this;
          if (!t._ce) {
            for (
              var n = [], i = {}, r = t.getContacts(), o = 0;
              o < r.length;
              o++
            ) {
              var a = r[o].getEmails();
              e(n, i, a.personal), e(n, i, a.work), e(n, i, a.other);
            }
            e(n, i, t.getPassportMemberName()), (t._ce = n);
          }
          return t._ce;
        }),
        (r.getDetails = function () {
          var e = this;
          return e._pd || (e._pd = new i.PersonDetails(e._d, e._n)), e._pd;
        }),
        (r._update = function (e) {
          var t = this;
          (t._d = e),
            (t._c = null),
            (t._e = null),
            (t._p = null),
            (t._b = null),
            (t._ce = null),
            (t._pd = null),
            (t._m = null);
        }),
        (r._getHashKeys = function () {
          for (
            var e = this,
              t = e._d,
              n = [t[0], t[6], t[7]],
              i = t[1] || [],
              r = 0;
            r < i.length;
            r++
          )
            n.push(i[r][0]);
          return n;
        });
    })(window.originaljQuery || jQuery);
  }),
  define("group", ["person"], function () {
    !(function (e) {
      function t(t) {
        (this._d = t), (this.$changes = e(this));
      }
      window.wLive.People.Group = t;
      var n = t.prototype;
      (n.getId = function () {
        return this._d[0];
      }),
        (n.getName = function () {
          return this._d[1];
        }),
        (n.getCid = function () {
          return this._d[2];
        }),
        (n.getHexCid = function () {
          return this._d[3];
        }),
        (n.getEmail = function () {
          return this._d[4];
        }),
        (n._update = function (e) {
          return (this._d = e);
        }),
        (n._getHashKeys = function () {
          return [this._d[0]];
        });
    })(window.originaljQuery || jQuery);
  }),
  define("category", ["group"], function () {
    !(function (e) {
      function t(t) {
        (this._d = t), (this.$changes = e(this));
      }
      window.wLive.People.Category = t;
      var n = t.prototype;
      (n.getId = function () {
        return this._d[0];
      }),
        (n.getName = function () {
          return this._d[1];
        }),
        (n.getIsFavorite = function () {
          return this._d[2];
        }),
        (n._update = function (e) {
          return (this._d = e);
        }),
        (n._getHashKeys = function () {
          return [this._d[0]];
        });
    })(window.originaljQuery || jQuery);
  }),
  define("service", ["category"], function () {
    !(function (e) {
      function t(t) {
        (this._d = t), (this.$changes = e(this));
      }
      window.wLive.People.Service = t;
      var n = t.prototype;
      (n.getId = function () {
        return this._d[0];
      }),
        (n.getName = function () {
          return this._d[1];
        }),
        (n.getTokenState = function () {
          return this._d[2];
        }),
        (n.getSupportsIm = function () {
          return this._d[3];
        }),
        (n.getSupportsContactAgg = function () {
          return this._d[4];
        }),
        (n.getIconUrlThumbnail = function () {
          return this._d[5];
        }),
        (n.getIconUrlMiniPhoto = function () {
          return this._d[6];
        }),
        (n.getIconUrlLargePhoto = function () {
          return this._d[7];
        }),
        (n.getProfileUrl = function () {
          return this._d[8];
        }),
        (n.getPhotosUrl = function () {
          return this._d[9];
        }),
        (n.getSendMessageUrl = function () {
          return this._d[10];
        }),
        (n.getReportAbuseUrl = function () {
          return this._d[11];
        }),
        (n.getRank = function () {
          return this._d[12];
        }),
        (n.getOnHideList = function () {
          return this._d[13];
        }),
        (n._getHashKeys = function () {
          return [this._d[0]];
        }),
        (n._update = function (e) {
          this._d = e;
        });
    })(window.originaljQuery || jQuery);
  }),
  define("settings", ["service"], function () {
    !(function (e) {
      function t(t) {
        (this._d = t), (this.$changes = e(this));
      }
      var n = t.prototype;
      (n.getMessengerTrustLevel = function () {
        return this._d[0];
      }),
        (n.getImHistoryEnabled = function () {
          return 1 == this._d[1];
        }),
        (n.getAbSettings = function () {
          return this._d[2];
        }),
        (n.getWebIMSettings = function () {
          return this._d[3];
        }),
        (n.getSkypePendingInboundCount = function () {
          return this._d[4];
        }),
        (window.wLive.People.Settings = t);
    })(window.originaljQuery || jQuery);
  }),
  define("lazyhash", ["settings"], function () {
    !(function () {
      function e(e) {
        function t(e, t) {
          t = t || !1;
          for (var i = e.length, o = 0; i > o; o++)
            for (
              var a = e[o], s = a._getHashKeys(), c = s.length, l = 0;
              c > l;
              l++
            )
              t ? n(s[l]) : r(s[l], e[o]);
        }
        function n(e) {
          e && s[e] && delete s[e];
        }
        function r(e, t) {
          i.Reporter.isNullOrUndefined(e) || (s[e] = t);
        }
        var o = this,
          a = !1,
          s = [];
        (o.get = function (t) {
          return a || ((a = !0), o.update(e)), s[t] || null;
        }),
          (o.clear = function () {
            (a = !1), (s = []);
          }),
          (o.update = function (n, i) {
            !a && i && ((a = !0), o.update(e)), a && t(n, !1);
          }),
          (o.removeItemByKey = function (e) {
            a && n(e);
          }),
          (o.remove = function (e) {
            a && t(e, !0);
          });
      }
      var t = window,
        n = t.wLive,
        i = n.People;
      i.LazyHash = e;
    })();
  }),
  define("crossdomainproxy", ["lazyhash"], function () {
    !(function () {
      function e(e, o, a) {
        function c(e) {
          s.logAction("Pwc_XmlProxyCallback");
          var t = e.status,
            r = null;
          200 == t
            ? ((p.window = l()),
              p.window ||
                (s.logAction("Pwc_XmlProxyIframeNotFound"),
                (r =
                  i.document.domain != v.domain
                    ? "HostDomainInvalid"
                    : g
                    ? g
                    : "UnknownProxyFailure")))
            : (r = t),
            s.addStats(n, h, r, o),
            a && a();
        }
        function l() {
          for (
            var e = null,
              t = i.document.getElementsByTagName("iframe"),
              n = 0,
              r = t.length;
            r > n;
            n++
          )
            try {
              var o = t[n],
                a = o.contentDocument
                  ? o.contentDocument
                  : o.contentWindow.document;
              if (a && a.location.href == d) {
                e = o.contentWindow || o.contentDocument.parentWindow;
                break;
              }
            } catch (c) {
              s.logError("Pwc_FindProxyIframeFailure", c);
            }
          return e;
        }
        function u(t) {
          t.origin == i.location.protocol + "//" + e &&
            t.data &&
            t.data.startsWith &&
            t.data.startsWith("pwc:") &&
            (g = t.data.substring(4));
        }
        var d,
          f,
          g,
          p = this,
          h = new Date().getTime(),
          v = i.$Config;
        if (((p.window = null), i.addEventListener))
          try {
            i.addEventListener(t, u, 0), (f = !0);
          } catch (m) {}
        (d =
          i.location.protocol +
          "//" +
          e +
          "/xmlProxy.htm?vn=" +
          i.$Version.encodeURIComponent() +
          "&domain=" +
          (v.d || v.domain).encodeURIComponent()),
          ((window.FilesConfig && window.FilesConfig.lightweightEmbedPage) ||
            (window.Flight &&
              window.Flight.Ramps &&
              window.Flight.Ramps.lightweightEmbedPage)) &&
            r.requiresDomainLowering(!1),
          r.fetchXML(d, c, "GET", null, null),
          (p.dispose = function () {
            f && i.removeEventListener && i.removeEventListener(t, u, 0);
          });
      }
      var t = "message",
        n = "LoadXmlProxy",
        i = window,
        r = i.$Network,
        o = i.wLive,
        a = o.People,
        s = a.Reporter;
      o.People.CrossDomainProxy = e;
    })();
  }),
  define("storageproxy", ["crossdomainproxy"], function () {
    !(function () {
      function e() {
        var e = this,
          n = [],
          i = null;
        (e.errorCode = null),
          (e.setProxyWindow = function (n, a) {
            try {
              var s = a ? a : t,
                c = n ? s.localStorage : s.sessionStorage;
              if (c) {
                var l = "st_" + Math.round(1e5 * Math.random());
                c.setItem(l, l),
                  c.getItem(l) == l
                    ? (c.removeItem(l), (i = c))
                    : (e.errorCode = "GetTestValueFailed");
              } else e.errorCode = a ? "CantAccessIframeStorage" : "NoStorage";
            } catch (u) {
              r.logError("Pwc_RestoreAbError", u), (e.errorCode = o(u));
            }
            a && e.errorCode && e.setProxyWindow(!1);
          }),
          (e.remove = function (t) {
            if (i)
              try {
                i.removeItem(t);
              } catch (a) {
                r.logError("Pwc_StorageRemove", a), (e.errorCode = o(a));
              }
            else delete n[t];
          }),
          (e.get = function (t, a) {
            var s;
            if (i)
              try {
                s = i.getItem(t);
              } catch (c) {
                r.logError("Pwc_StorageGet", c), (e.errorCode = o(c));
              }
            else s = n[t];
            return r.isNullOrUndefined(s) && (s = a), s;
          }),
          (e.getDate = function (t) {
            var n = e.get(t);
            if (n)
              try {
                var i = parseInt(n);
                return new Date(i);
              } catch (a) {
                r.logError("Pwc_StorageGetDate", a), (e.errorCode = o(a));
              }
            return new Date(1);
          }),
          (e.getInt = function (t, n) {
            var i = e.get(t);
            if (i)
              try {
                return parseInt(i);
              } catch (a) {
                r.logError("Pwc_StorageGetInt", a), (e.errorCode = o(a));
              }
            return n || 0;
          }),
          (e.set = function (t, a) {
            if (i)
              try {
                i.setItem(t, a);
              } catch (s) {
                r.logError("Pwc_StorageSet", s), (e.errorCode = o(s));
              }
            else n[t] = a;
          }),
          (e.setDate = function (t, n) {
            n && e.set(t, n.getTime());
          }),
          (e.dispose = function () {
            (n = null), (i = null);
          });
      }
      var t = window,
        n = t.wLive,
        i = n.People,
        r = i.Reporter,
        o = r.getErrorCode;
      i.StorageProxy = e;
    })();
  }),
  define("store", ["storageproxy"], function () {
    !(function () {
      function e(e, v, b, w, S) {
        function C(e, t, n) {
          for (
            var i = e.getInt(t + f, -1), r = n.length, o = [], a = 0;
            i >= a;
            a++
          ) {
            for (var s = {}, c = 0; r > c; c++) {
              var l = e.get(t + n[c] + a, null);
              if (null == l)
                return y.logAction("Pwc_GetIncrementalResponsesMissingKey"), [];
              s[n[c]] = l;
            }
            o[a] = s;
          }
          return o;
        }
        function I() {
          y.logAction("Pwc_ClearAb"),
            M.remove(r),
            M.remove(i),
            M.remove(n),
            M.remove(o),
            M.remove(a),
            M.remove(s),
            M.remove(l),
            M.remove(c),
            k(M, u, [g, p]);
        }
        function $(e, t, n) {
          var i = e.getInt(t + f, -1) + 1;
          e.set(t + f, i);
          for (var r in n) "string" == typeof r && e.set(t + r + i, n[r]);
        }
        function k(e, t, n) {
          if (e) {
            for (var i = e.getInt(t + f, -1), r = n.length, o = 0; i >= o; o++)
              for (var a = 0; r > a; a++) e.remove(t + n[a] + o);
            e.remove(t + f);
          }
        }
        var L = this,
          T = null,
          M = new _(),
          P = new _();
        (L.init = function (t) {
          function n() {
            var e = T && T.window ? T.window : h;
            e &&
              (M.setProxyWindow(v, e),
              P.setProxyWindow(!0, e),
              (M.get(r) === b && M.get(i) === w) || I()),
              S && S();
          }
          T = new m.CrossDomainProxy(e, t, n);
        }),
          (L.setFullSyncRequired = function (e) {
            M.set(l, e);
          }),
          (L.getFullSyncRequired = function () {
            return M.get(l);
          }),
          (L.setFullAb = function (e, d, f) {
            var h,
              v = new Date().getTime();
            try {
              (M.errorCode = null),
                k(M, u, [g, p]),
                M.remove(c),
                M.set(r, b),
                M.set(n, e),
                M.set(i, w),
                M.setDate(o, f),
                M.setDate(a, f),
                M.remove(s),
                M.remove(l),
                (h = M.errorCode);
            } catch (m) {
              y.logError("Pwc_SetFullAb", m), (h = y.getErrorCode(m));
            }
            y.addStats(t, v, h, d);
          }),
          (L.clearAbErrorCode = function () {
            var e = M.errorCode;
            return (M.errorCode = null), e;
          }),
          (L.getFullAb = function () {
            return M.get(n, null);
          }),
          (L.setLastFullSync = function (e) {
            M.setDate(o, e);
          }),
          (L.getLastFullSync = function () {
            return M.getDate(o);
          }),
          (L.setDeltaSyncRequired = function (e) {
            M.set(s, e);
          }),
          (L.getDeltaSyncRequired = function () {
            return M.get(s);
          }),
          (L.removeDeltaSyncRequired = function () {
            M.remove(s);
          }),
          (L.setAbDelta = function (e, t) {
            $(M, u, { json: e, syncKey: t });
          }),
          (L.getAbDeltas = function () {
            return C(M, u, [g, p]);
          }),
          (L.setLastDeltaSync = function (e) {
            M.setDate(a, e);
          }),
          (L.getLastDeltaSync = function () {
            return M.getDate(a);
          }),
          (L.setDeltaSyncCount = function (e) {
            M.set(c, e);
          }),
          (L.getDeltaSyncCount = function () {
            return M.getInt(c);
          }),
          (L.setHost = function (e) {
            P.set(d, e);
          }),
          (L.getHost = function (e) {
            return P.get(d, e);
          }),
          (L.clearHost = function () {
            P.remove(d);
          }),
          (L.clearAb = I),
          (L.dispose = function () {
            T && (T.dispose(), (T = null)),
              M && (M.dispose(), (M = null)),
              P && (P.dispose(), (P = null));
          });
      }
      var t = "PersistAB",
        n = "fullSyncResponse",
        i = "mkt",
        r = "abCid",
        o = "lastFullSync",
        a = "lastDeltaSync",
        s = "deltaSyncRequired",
        c = "deltaSyncCount",
        l = "fullSyncRequired",
        u = "deltaSyncResponse",
        d = "preferredHostName",
        f = "_e",
        g = "json",
        p = "syncKey",
        h = window,
        v = h.wLive,
        m = v.People,
        _ = m.StorageProxy,
        y = m.Reporter;
      m.Store = e;
    })();
  }),
  define("serviceproxy", ["store"], function () {
    !(function () {
      function ServiceProxy(
        store,
        market,
        peopleApiHostName,
        peopleApiAppId,
        handlersBaseUrl,
        canary
      ) {
        function PwcError(e, t) {
          (this.errorCode = t), (this.message = e);
        }
        function buildDefaultHeaders(e) {
          var t = {};
          return (
            (t.Pragma = "no-cache"),
            (t["Cache-Control"] = "no-cache"),
            (t.Expires = "-1"),
            Reporter.isQosEnabled &&
              e &&
              w.$ScenarioQoS.addScenarioToHttpHeader(t, e),
            t
          );
        }
        function buildPeopleApiUrl(e, t) {
          var n = store.getHost(peopleApiHostName),
            i = "&cbus=" + Math.random();
          if (!Reporter.isNullOrUndefined(t))
            for (var r in t) i += "&" + r + "=" + t[r].encodeURIComponent();
          return (
            w.location.protocol +
            "//" +
            n +
            "/people/" +
            e +
            "?SerializeAs=compact" +
            c_marketParam +
            market.encodeURIComponent() +
            "&appid=" +
            peopleApiAppId.encodeURIComponent() +
            "&version=" +
            c_schemaVersion.encodeURIComponent() +
            i
          );
        }
        function buildHandlerUrl(e) {
          return handlersBaseUrl + "/Handlers/PeopleApi/" + e + ".mvc";
        }
        function parseGetProfilesResponse(e) {
          var t = parseJson(e);
          if (t && t.length > 0 && t[0] == c_schemaVersion) {
            var n = t[1];
            return n;
          }
          return [];
        }
        function processPeopleResponse(e, t, n, i, r, o, a) {
          var s = null,
            c = null,
            l = [];
          hasRequestSucceeded(e) || (s = getResponseStatusCode(e));
          try {
            (c = stripJsonPrefix(e.responseText)),
              (l = parsePeopleResponse(c, a));
          } catch (u) {
            Reporter.logError("Pwc_PeopleParseError", u, !0);
            var d = s;
            (s = Reporter.getErrorCode(u, s ? s : c_parseError)),
              "MissingTicket" == s ||
                "PassportAuthFail" == s ||
                s == c_errorInvalidPassportUser ||
                Reporter.isNullOrUndefined(d) ||
                "200" == d ||
                (s = d + "_" + s);
          }
          Reporter.addStats(t, r, getQosErrorCode(e, s), o),
            null == s
              ? (updatePreferredHostName(e), n(e, c, l))
              : (store.clearHost(), i(e, s));
        }
        function parsePeopleResponse(e, t) {
          var n,
            i = null,
            r = parseJson(e);
          if (r && r.length) {
            var o = r[1];
            if (o)
              o.length >= 2
                ? ((i = o[0] || "EmptyEvalOrAbError"),
                  (n = o[1] || "Unspecified error returned"),
                  (i != c_errorInvalidPassportUser &&
                    ("BadArgument" != i ||
                      (-1 == n.toLowerCase().indexOf("resolve the caller") &&
                        -1 == n.toLowerCase().indexOf("ticket")))) ||
                    ((n = "Invalid passport user"),
                    (i = c_errorInvalidPassportUser)))
                : ((n = "Invalid error response"),
                  (i = "InvalidErrorResponse"));
            else {
              var a = r[0];
              a
                ? t ||
                  a[2] == c_schemaVersion ||
                  ((n = "Schema mismatch (expected: {0}, returned: {1})".format(
                    c_schemaVersion,
                    a[2] || ""
                  )),
                  (i = "SchemaMismatch"))
                : ((n = "Data is missing in the response"),
                  (i = "EmptyResponseArray"));
            }
          } else (n = "Invalid response format"), (i = "InvalidResponse");
          if (n) throw new PwcError(n, i);
          return r;
        }
        function parseJson(rawResponse) {
          var result;
          try {
            result = eval(rawResponse);
          } catch (ex) {
            Reporter.logError("Pwc_ParseJsonFailure", ex),
              (result = [, [ex.name, "Syntax error: " + ex.message]]);
          }
          return result;
        }
        function stripJsonPrefix(e) {
          if (!e) throw new PwcError("Empty PWC response", "EmptyResponse");
          if (e.indexOf("<json>") < 0)
            throw new PwcError(
              "JSON prefix not found on PWC response",
              "JsonPrefixNotFound"
            );
          return e.substring(6, e.length);
        }
        function getResponseStatusCode(e) {
          var t = e ? e.status : null;
          return null !== t && "undefined" !== t ? t : c_hostUnreachableError;
        }
        function hasRequestSucceeded(e) {
          return 200 == getResponseStatusCode(e);
        }
        function getQosErrorCode(e, t) {
          return hasRequestSucceeded(e) ? t : t ? t : getResponseStatusCode(e);
        }
        function updatePreferredHostName(e) {
          try {
            var t =
              Boolean(e) && Boolean(e.getResponseHeader)
                ? e.getResponseHeader("PreferredHostName")
                : null;
            t && store.setHost(t);
          } catch (n) {
            Reporter.logError("Pwc_UpdatePreferredHost", n);
          }
        }
        (PwcError.prototype = new Error()),
          (PwcError.prototype.constructor = PwcError);
        var _this = this;
        (_this.fullSync = function (e, t, n) {
          function i(i) {
            processPeopleResponse(
              i,
              c_WL_People_Cache_Rest_FullSync_ApiId,
              e,
              t,
              r,
              n
            );
          }
          var r = new Date().getTime(),
            o = buildPeopleApiUrl(c_abCore),
            a = buildDefaultHeaders(n);
          $Network.fetchXML(o, i, c_get, null, a);
        }),
          (_this.deltaSync = function (e, t, n, i) {
            function r(e) {
              processPeopleResponse(
                e,
                c_WL_People_Cache_Rest_DeltaSync_ApiId,
                t,
                n,
                o,
                i
              );
            }
            var o = new Date().getTime(),
              a = buildPeopleApiUrl(c_abCore, { syncKey: e }),
              s = buildDefaultHeaders(i);
            $Network.fetchXML(a, r, c_get, null, s);
          }),
          (_this.loadPersonDetails = function (e, t, n, i) {
            function r(e) {
              processPeopleResponse(
                e,
                c_WL_People_Cache_Rest_PersonDetails_ApiId,
                t,
                n,
                o,
                i,
                !0
              );
            }
            var o = new Date().getTime(),
              a = buildPeopleApiUrl(c_personDetails, { contactId: e }),
              s = buildDefaultHeaders(i);
            $Network.fetchXML(a, r, c_get, null, s);
          }),
          (_this.loadAllPersonDetails = function (e, t, n, i) {
            function r(e) {
              processPeopleResponse(
                e,
                c_WL_People_Cache_Rest_AllPersonDetails_ApiId,
                t,
                n,
                o,
                i,
                !0
              );
            }
            var o = new Date().getTime(),
              a = null;
            e && (a = { filter: e });
            var s = buildPeopleApiUrl(c_allPersonDetails, a),
              c = buildDefaultHeaders(i);
            $Network.fetchXML(s, r, c_get, null, c);
          }),
          (_this.loadProfiles = function (e, t, n, i) {
            function r(e) {
              var r = null,
                a = [];
              if (hasRequestSucceeded(e))
                try {
                  a = parseGetProfilesResponse(e.responseText);
                } catch (s) {
                  Reporter.logError("Pwc_ProfilesParseError", s, !0),
                    (r = Reporter.getErrorCode(s, c_parseError));
                }
              else r = getResponseStatusCode(e);
              Reporter.addStats(
                c_WL_People_Cache_Rest_GetProfiles,
                o,
                getQosErrorCode(e, r),
                i
              ),
                r ? n(e, r) : t(e, a);
            }
            var o = new Date().getTime(),
              a = e.join(","),
              s = buildHandlerUrl(c_getProfilesHandler),
              c =
                "canary=" +
                canary.encodeURIComponent() +
                "&cids=" +
                a.encodeURIComponent() +
                c_marketParam +
                market.encodeURIComponent(),
              l = buildDefaultHeaders(i);
            $Network.fetchXML(s, r, c_post, c, l);
          }),
          (_this.parseProfiles = parseGetProfilesResponse),
          (_this.parseAb = parsePeopleResponse),
          (_this.blockOrUnblockMessenger = function (e, t, n, i) {
            var r = e.getCid();
            if (r) {
              var o = (t ? "Hide" : "Unhide") + "Contact";
              $Network.fetchXML(
                buildHandlerUrl(o),
                function (e) {
                  var t = e && "200" === e.responseText,
                    r = t ? n : i;
                  r && r(e.responseText);
                },
                "POST",
                "canary=" +
                  canary.encodeURIComponent() +
                  "&cid=" +
                  encodeURIComponent(r)
              );
            }
          });
      }
      var c_WL_People_Cache_Rest_GetProfiles = "Rest_GetProfiles",
        c_WL_People_Cache_Rest_FullSync_ApiId = "Rest_FullSync",
        c_WL_People_Cache_Rest_DeltaSync_ApiId = "Rest_DeltaSync",
        c_WL_People_Cache_Rest_PersonDetails_ApiId = "Rest_PersonDetails",
        c_WL_People_Cache_Rest_AllPersonDetails_ApiId = "Rest_AllPersonDetails",
        c_errorInvalidPassportUser = "InvalidPassportUser",
        c_hostUnreachableError = "HostUnreachable",
        c_parseError = "ParseError",
        c_schemaVersion = "W5.M2",
        c_get = "GET",
        c_post = "POST",
        c_getProfilesHandler = "GetProfiles",
        c_abCore = "abcore",
        c_personDetails = "PersonDetails",
        c_allPersonDetails = "allPersonDetails",
        c_marketParam = "&market=",
        w = window,
        $Network = w.$Network,
        wLive = w.wLive,
        People = wLive.People,
        Reporter = People.Reporter;
      People.ServiceProxy = ServiceProxy;
    })();
  }),
  define("deltasync", ["serviceproxy"], function () {
    !(function () {
      function e(e, n, i) {
        function s(e, t) {
          var i = !1;
          if (e && e.length > 0) {
            for (var r = n.settings, o = 0; o < e.length; o++)
              e[o] && e[o] != r._d[o] && ((r._d[o] = e[o]), (i = !0));
            i && t && r.$changes.triggerHandler(n.changedEventName);
          }
          return i;
        }
        function c(e, n, i, a, s, c) {
          if (!e) return null;
          if (typeof e !== r) {
            for (var l = [], u = [], d = [], f = 0, g = e.length; g > f; f++) {
              for (var p = e[f], h = -1, v = 0, m = n.length; m > v; v++)
                if (n[v].getId() === p[o]) {
                  h = v;
                  break;
                }
              if (-1 !== h) {
                var _ = n[h];
                1 === p[s]
                  ? (u.push(_), a.remove([_]), n.splice(h, 1))
                  : (l.push(_), n[h]._update(p));
              } else if (1 !== p[s]) {
                var y = c(p);
                d.push(y), a.update([y]), n.push(y);
              }
            }
            if (d.length > 0 || l.length > 0 || u.length > 0)
              return new t(i, d, l, u);
          }
          return null;
        }
        function d(e) {
          if (!e) return null;
          var i = {},
            r = [],
            o = [],
            s = [],
            c = [];
          h(e, i), v(e, i, r);
          for (var l in i) {
            var u = n._personHash.get(l),
              d = u._d;
            if (u) {
              var f = d[a].length,
                g = n.getPersonDetails(l);
              g && n._personDetailsHash.remove([g]),
                0 === f
                  ? (n.persons.remove(u), n._personHash.remove([u]), s.push(u))
                  : (x(d), u._update(d), n._personHash.update([u]), o.push(u));
            }
          }
          for (var p = 0, m = r.length; m > p; p++) {
            var _ = r[p];
            x(_);
            var y = new T.Person(_, n.names);
            n.persons.push(y), n._personHash.update([y]), c.push(y);
          }
          return c.length > 0 || o.length > 0 || s.length > 0
            ? new t(n.$persons, c, o, s)
            : null;
        }
        function h(e, t) {
          for (var i = 0, r = e.length; r > i; i++)
            for (var s = e[i], c = s[a], l = 0; l < c.length; ) {
              var u = c[l],
                d = u[g],
                f = n._personHash.get(d);
              if (f && (u[1] === M.deleted || s[o] !== f.getId())) {
                var p = f._d,
                  h = p[a],
                  v = k(p, d);
                -1 != v &&
                  (n._personHash.removeItemByKey(d),
                  (t[f.getId()] = 1),
                  "WL" === h[v][4] &&
                    (n._personHash.removeItemByKey(f.getCid()),
                    n._personHash.removeItemByKey(f.getHexCid()),
                    w(p)),
                  h.splice(v, 1));
              }
              u[1] === M.deleted ? c.splice(l, 1) : l++;
            }
        }
        function v(e, t, i) {
          for (var r = 0, s = e.length; s > r; r++) {
            var c = e[r];
            if (c[a].length) {
              var d = n._personHash.get(c[o]);
              if (d && d.getId() === c[o]) {
                for (
                  var f = d._d, p = c[a], h = f[a], v = 0, _ = p.length;
                  _ > v;
                  v++
                ) {
                  var y = p[v],
                    b = k(f, y[g]);
                  (t[d.getId()] = 1),
                    -1 != b ? (h[b] = y) : h.push(y),
                    "WL" === y[4] && S(f, c);
                }
                m(h), (f[l] = c[l]), (f[u] = c[u]);
              } else i.push(c);
            }
          }
        }
        function m(e) {
          e.sort(function (e, t) {
            var n = I(e[4]),
              i = I(t[4]);
            if (n > i) return 1;
            if (i > n) return -1;
            var r = e[g],
              o = t[g];
            return r > o ? -1 : o > r ? 1 : 0;
          });
        }
        function w(e) {
          for (var t = 0, n = _.length; n > t; t++) delete e[_[t]];
        }
        function S(e, t) {
          for (var n, i = 0, r = _.length; r > i; i++)
            (n = _[i]), (e[n] = t[n]);
        }
        function C(e, t) {
          return e[a][t][g] || e[o];
        }
        function I(e) {
          var t;
          if ("ABCH" === e) t = -2;
          else {
            var i = n.getService(e);
            t = i ? i.getRank() : 9999;
          }
          return t;
        }
        function $(e) {
          var t,
            i,
            r = 0;
          if (e[l]) {
            for (t = 0, i = e[l].length; i > t; t++) {
              var o = n._categoryHash.get(e[l][t]);
              if (o && o._d[2]) {
                r = 1;
                break;
              }
            }
            e[u] = r;
          }
          var s = e[a],
            c = s[0][16] || e[14] || 0;
          for (t = 1, i = s.length; i > t; t++) {
            var d = s[t][16] || e[14] || 0;
            c > d && (c = d);
          }
          e[14] = c;
        }
        function k(e, t) {
          for (var n = -1, i = e[a], r = 0, o = i.length; o > r; r++)
            if (C(e, r) === t) {
              n = r;
              break;
            }
          return n;
        }
        function L(e) {
          for (var t = e[a], n = e[o], i = 0, r = y.length; r > i; i++) {
            for (
              var s = y[i],
                c = s.mask,
                l = s.personFields,
                u = s.contactFields,
                d = s.arrayIndex,
                f = s.isArray,
                g = !1,
                h = 0,
                v = t.length;
              v > h;
              h++
            ) {
              var m = t[h];
              if (m[p] & c) {
                if (((g = !0), f))
                  for (var _ = 0, b = l.length; b > _; _++) {
                    var w = e[l[_]];
                    w && (m[u[_]] || (m[u[_]] = []), (m[u[_]][d] = w[d]));
                  }
                else
                  for (var S = 0, C = l.length; C > S; S++) m[u[S]] = e[l[S]];
                m[p] = m[p] & ~c;
              }
            }
            if (g)
              for (var I = 0, $ = s.personFields.length; $ > I; I++)
                f ? e[l[I]] && (e[l[I]][d] = null) : (e[l[I]] = null);
          }
          e[o] = n;
        }
        function P(e, t, n, i, r) {
          for (var o = !0, a = 0, s = n.length; s > a; a++) {
            var c = e[n[a]];
            i && c && (c = c[r]), c && ((t[a] = c), (o = !1));
          }
          return o;
        }
        function D(e, t, n, i) {
          for (var r = 0, o = t.length; o > r; r++) {
            var a = t[r];
            e[a] && (n ? i < e[a].length && (e[a][i] = null) : (e[a] = null));
          }
        }
        function A(e, t, n, i, o, a) {
          for (var s = !0, c = 0, l = n.length; l > c; c++) {
            var u = e[n[c]];
            i && u && (u = u[o]);
            var d = t[c];
            if (a) {
              if (!a(u, d)) {
                s = !1;
                break;
              }
            } else if ((typeof u !== r || typeof d !== r) && u !== d) {
              s = !1;
              break;
            }
          }
          return s;
        }
        function x(e) {
          L(e), N(e), $(e);
        }
        function N(e) {
          for (var t = e[o], n = 0, i = f; i > n; n++) b[n] && delete e[n];
          (e[o] = t), (e[35] = (e[35] || 0) + 1);
          for (var r = 0, s = y.length; s > r; r++) {
            for (
              var c = y[r],
                l = c.mask,
                u = e[a],
                d = [],
                g = c.contactFields,
                h = c.personFields,
                v = c.isArray,
                m = c.arrayIndex,
                _ = c.comparer,
                w = P(e, d, h, v, m),
                S = 0,
                C = u.length;
              C > S;
              S++
            ) {
              var I = u[S];
              w && (w = P(I, d, g, v, m)),
                !w &&
                  A(I, d, g, v, m, _) &&
                  ((I[p] = (I[p] || 0) | l), D(I, g, v, m));
            }
            if ((c.isArray && !e[h[0]] && (e[h[0]] = []), !w))
              for (var $ = 0, k = Math.min(h.length, d.length); k > $; $++)
                c.isArray ? (e[h[$]][c.arrayIndex] = d[$]) : (e[h[$]] = d[$]);
          }
        }
        function E(e) {
          for (var t = e.clone(), n = 0, i = t.length; i > n; n++) {
            var r = t[n];
            "object" == typeof r && r instanceof Array && (t[n] = E(r));
          }
          return t;
        }
        var B = this;
        (B.apply = function (e) {
          var t = [],
            r = i[0],
            o = r[3],
            a = r[4],
            l = r[5],
            u = r[6],
            f = r[7],
            g = s(u, e);
          t.push(
            c(f, n.services, n.$services, n._serviceHash, 20, function (e) {
              return new T.Service(e);
            })
          ),
            t.push(
              c(
                a,
                n.categories,
                n.$categories,
                n._categoryHash,
                3,
                function (e) {
                  return new T.Category(e);
                }
              )
            ),
            t.push(
              c(l, n.groups, n.$groups, n._groupHash, 5, function (e) {
                return new T.Group(e);
              })
            ),
            t.push(d(o));
          for (var p = 0, h = t.length; h > p; p++)
            if (null !== t[p]) {
              if (e) {
                var v = t[p];
                if (
                  (v.$event.triggerHandler(n.changedEventName, v),
                  null != v.changed)
                )
                  for (var m = 0; m < v.changed.length; m++)
                    v.changed[m].$changes.triggerHandler(n.changedEventName);
              }
              g = !0;
            }
          return g;
        }),
          (B.flatten = function (e) {
            var t = E(e._d);
            return L(t), new T.Person(t, n.names);
          }),
          (B.clone = function (e) {
            var t = E(e._d);
            return new T.Person(t, n.names);
          }),
          (B.dedupe = function (e) {
            var t = E(e._d);
            return N(t), new T.Person(t, n.names);
          }),
          (B.sortContactsByRank = function (e) {
            m(e._d[1]), e._update(e._d);
          });
      }
      function t(e, t, n, i) {
        var r = this;
        (r.$event = e), (r.added = t), (r.changed = n), (r.removed = i);
      }
      function n(e, t, n, i, r, o) {
        var a = this;
        (a.mask = e),
          (a.personFields = t),
          (a.contactFields = n),
          (a.isArray = i),
          (a.arrayIndex = r),
          (a.comparer = o);
      }
      function i(e, t) {
        var n = !1;
        return (
          e &&
            t &&
            e.length === t.length &&
            ((n = !0),
            e.forEach(function (e, i) {
              t[i] != e && (n = !1);
            })),
          n
        );
      }
      for (
        var r = "undefined",
          o = 0,
          a = 1,
          s = 4,
          c = 5,
          l = 12,
          u = 13,
          d = 24,
          f = 35,
          g = 0,
          p = 2,
          h = 9,
          v = 10,
          m = 25,
          _ = [6, 7, 9, 8, 15],
          y = [
            new n(1, [o], [g]),
            new n(4, [11], [12]),
            new n(
              8,
              [2, 3, 19, 20, 17, 18, 21, 22, 30, 31],
              [7, 8, 20, 21, 19, 18, 22, 23, 31, 32]
            ),
            new n(16, [10, 23, 28], [11, 24, 29]),
            new n(32, [s], [h], 1, 0),
            new n(64, [s], [h], 1, 1),
            new n(128, [s], [h], 1, 2),
            new n(256, [c], [v], 1, 0),
            new n(1 << 23, [c], [v], 1, 8),
            new n(512, [c], [v], 1, 1),
            new n(1024, [c], [v], 1, 2),
            new n(2048, [c], [v], 1, 3),
            new n(4096, [c], [v], 1, 4),
            new n(16384, [c], [v], 1, 6),
            new n(8192, [c], [v], 1, 5),
            new n(32768, [c], [v], 1, 7),
            new n(1 << 24, [c], [v], 1, 9),
            new n(1 << 25, [c], [v], 1, 10),
            new n(65536, [d], [m], 1, 0, i),
            new n(1 << 17, [d], [m], 1, 1, i),
            new n(1 << 18, [d], [m], 1, 2, i),
            new n(1 << 20, [25, 26], [26, 27]),
            new n(1 << 21, [27], [28]),
            new n(1 << 22, [29], [30]),
            new n(1 << 19, [16], [17], 0, 0, i),
          ],
          b = [],
          w = 0,
          S = y.length;
        S > w;
        w++
      )
        for (var C = y[w].personFields, I = 0, $ = C.length; $ > I; I++)
          b[C[I]] || (b[C[I]] = 1);
      var k = window,
        L = k.wLive,
        T = L.People,
        M = T.ContactState;
      (T.DeltaSync = e), (L.People.DeltaSyncEvent = t);
    })();
  }),
  define("syncclient", ["deltasync"], function () {
    !(function () {
      function e(e, b, C, I, $) {
        function k(e, t, n, i) {
          for (var r, o = !0, a = null, s = 0, c = B.length; c > s; s++) {
            r = B[s];
            var f = r[h],
              m = r[d];
            if (f === e) {
              m || ((o = !1), (a = r));
              break;
            }
            if (e === u && f === l && !m) {
              (o = !1), (a = r);
              break;
            }
          }
          o
            ? ((r = {}),
              (r[h] = e),
              (r[g] = [t]),
              (r[p] = [n]),
              (r[v] = i),
              (r[d] = !1),
              B.push(r))
            : a &&
              (t || n) &&
              (t && a[g].push(t), n && a[p].push(n), i && (a[v] = i)),
            L();
        }
        function L() {
          function t(e, t, n) {
            (C.lastFullSync = C.lastDeltaSync = new Date()),
              E.resetTimers(!1),
              T(t),
              M(n),
              C._personDetailsHash.clear(),
              (E.fullSyncRequired = !1),
              (E.deltaSyncRequired = !1),
              b.setFullAb(t, I[v], C.lastFullSync),
              B.shift(),
              P(I[g], "fsSuccess"),
              L();
          }
          function n(e, t) {
            S(t, !1);
          }
          function m(n, r, o) {
            (C.lastDeltaSync = new Date()),
              b.setLastDeltaSync(C.lastDeltaSync),
              E.resetTimers(!1);
            var a = o[0];
            if (a[8]) t(n, r, o);
            else {
              b.removeDeltaSyncRequired(), y.setSessionCookie(i, null);
              var s = new w.DeltaSync(e, C, o),
                l = s.apply(!0);
              if (l) {
                var u = a[0];
                (C.syncKey = u), b.setAbDelta(r, u);
                var d = b.getDeltaSyncCount() + 1;
                b.setDeltaSyncCount(d),
                  d >= c &&
                    ((E.fullSyncRequired = !0), b.setFullSyncRequired(!0));
              }
              (E.deltaSyncRequired = !1), B.shift(), P(I[g], "dsSuccess"), L();
            }
          }
          function _(e, t) {
            S(t, !0);
          }
          function S(e, t) {
            if (
              ((I[f] = (I[f] || 0) + 1),
              I[f] >= s || e === r || e === o || e === a)
            ) {
              var n = t ? "dsFailure" : "fsFailure";
              B.shift(),
                t
                  ? (C.lastDeltaSync = new Date())
                  : ((C.lastFullSync = new Date()),
                    b.setLastFullSync(C.lastFullSync)),
                E.resetTimers(t, !0),
                P(I[p], n, [e]);
            } else I[d] = !1;
            L();
          }
          if (0 !== B.length) {
            var I = B[0];
            I[d] ||
              (I[h] === u && R) ||
              (I[h] === l
                ? e.fullSync(t, n, I[v])
                : I[h] === u && e.deltaSync(C.syncKey, m, _, I[v]));
          }
        }
        function T(e) {
          for (var t = 0, n = 0, i = C.persons.length; i > n; n++) {
            var r = C.persons[n]._d[1];
            r && r.length && (t += r.length);
          }
          var o = { contactCount: t, responseLength: e.length };
          S.logDetails("Pwc_FullSync", o),
            _.reportEvent("View.WLPeopleCache.FullSync", o);
        }
        function M(e) {
          for (
            var t = e[0] || [], n = t[3] || [], i = [], r = 0;
            r < n.length;
            r++
          )
            i[r] = new w.Person(n[r], C.names);
          for (var o = t[4] || [], a = [], s = 0; s < o.length; s++)
            a[s] = new w.Category(o[s]);
          for (var c = t[5] || [], l = [], u = 0; u < c.length; u++)
            l[u] = new w.Group(c[u]);
          for (var d = t[7] || [], f = [], g = 0; g < d.length; g++)
            f[g] = new w.Service(d[g]);
          var p = new w.Settings(t[6] || []);
          C._applyFull(i, a, l, f, p), (C.syncKey = t[0]);
        }
        function P(e, t, n) {
          n = n || [];
          for (var i = 0; i < e.length; ) D(e[i], t + "[" + i + "]", n), i++;
          e.splice(0, e.length);
        }
        function D(e, t, n) {
          if (e)
            try {
              n && n.length > 0 ? e.apply(null, n) : e();
            } catch (i) {
              S.logError("Pwc_Callback" + t + "Error", i);
            }
        }
        function A() {
          N = !0;
        }
        function x() {
          (N = !1), E.deltaSyncRequired && E.queueDelta();
        }
        var N,
          E = this,
          B = [],
          W = new w.IdleTimer(A, x),
          R = !1,
          F = 0,
          H = null,
          O = null;
        (E.deltaSyncRequired = !1),
          (E.fullSyncRequired = !1),
          (E.applyFull = function (t) {
            var n = e.parseAb(t);
            M(n);
          }),
          (E.applyDelta = function (t) {
            var n = e.parseAb(t),
              i = new w.DeltaSync(e, C, n);
            i.apply();
          }),
          (E.queueFull = function (e, n, i) {
            function r() {
              a && S.stopScenario(i, !0), e && e();
            }
            function o(e) {
              a && S.stopScenario(i, !1, e), n && n();
            }
            S.logAction("Pwc_FullSyncQueued");
            var a = !i;
            (i = i || S.startScenario(t)), k(l, r, o, i);
          }),
          (E.queueDelta = function (e, t, i) {
            function r() {
              a && S.stopScenario(i, !0), e && e();
            }
            function o(e) {
              a && S.stopScenario(i, !1, e), t && t();
            }
            if (
              (S.logAction("Pwc_DeltaSyncQueued"),
              b.setDeltaSyncRequired(!0),
              C.isReady && !N)
            ) {
              if (E.fullSyncRequired) E.queueFull(e, t, i);
              else {
                var a = !i;
                (i = i || S.startScenario(n)), k(u, r, o, i);
              }
              E.deltaSyncRequired = !1;
            } else E.deltaSyncRequired = !0;
          }),
          (E.pause = function () {
            R = !0;
          }),
          (E.resume = function () {
            (R = !1), L();
          }),
          (E.resetTimers = function (e, t) {
            if (t) {
              if (++F >= 3) return;
            } else F = 0;
            var n = new Date(),
              i = I,
              r = C.lastFullSync || n,
              o = C.lastDeltaSync || r;
            (e = e || !1),
              e ||
                (null !== H && m.clearTimeout(H),
                (i = Math.max(i - (n.getTime() - r.getTime()), 0)),
                (H = m.setTimeout(function () {
                  E.queueFull();
                }, i))),
              null !== O && m.clearTimeout(O);
            var a = Math.max($ - (n.getTime() - o.getTime()), 0);
            i > $ &&
              (O = m.setTimeout(function () {
                E.queueDelta();
              }, a));
          }),
          (E.dispose = function () {
            W && W.dispose(), (W = null), (B = []);
          });
      }
      var t = "FullSync",
        n = "DeltaSync",
        i = "wpd",
        r = "InvalidPassportUser",
        o = "PassportAuthFail",
        a = "MissingTicket",
        s = 3,
        c = 20,
        l = "full",
        u = "delta",
        d = "inProgress",
        f = "attempts",
        g = "successCallbacks",
        p = "failureCallbacks",
        h = "requestType",
        v = "qosScenario",
        m = window,
        _ = m.$BSI,
        y = m.$Cookie,
        b = m.wLive,
        w = b.People,
        S = w.Reporter;
      w.SyncClient = e;
    })();
  }),
  define("client", ["syncclient"], function () {
    !(function (e) {
      function t(t, a, s) {
        var u = this;
        (u.fullSync = function (e, t, n) {
          a.queueFull(e, t, n);
        }),
          (u.deltaSync = function (e, t, n) {
            a.queueDelta(e, t, n);
          }),
          (u.pauseDeltaSync = function () {
            a.pause();
          }),
          (u.resumeDeltaSync = function () {
            a.resume();
          }),
          (u.processABChangedEvent = function (t) {
            l.logAction("Pwc_ProcessABChangedEvent");
            var n = !0;
            if (t)
              try {
                var i = e(e.parseXML(t)),
                  r = i.find("LastModifiedDate");
                (n = Date.parse(s.syncKey) != Date.parse(r.text())),
                  n || l.logAction("Pwc_ProcessABChangedNoDeltaSyncRequired");
              } catch (o) {
                l.logError("Pwc_ProcessABChangedFailedEvent", o);
              }
            n && a.queueDelta();
          });
        var d = {};
        (u.loadPersonDetails = function (e, n, i, o) {
          function a(t, n, i) {
            if (i.length < 1) return void u(t, "InvalidResponseArray");
            var r = new c.Person(i[0], s.names);
            s._personDetailsHash.update([r], !0), f && l.stopScenario(o, !0);
            for (var a = 0; a < p.successCallbacks.length; a++)
              p.successCallbacks[a](r);
            d[e] = null;
          }
          function u(t, n) {
            l.logDetails("Pwc_DetailsData", { contactId: e, errorCode: n }),
              f && l.stopScenario(o, !1, n);
            for (var i = 0; i < p.failureCallbacks.length; i++)
              p.failureCallbacks[i](t, n);
            d[e] = null;
          }
          var f = !o,
            g = !1;
          d[e] ||
            ((d[e] = { successCallbacks: [], failureCallbacks: [] }), (g = !0));
          var p = d[e];
          n && p.successCallbacks.push(n),
            i && p.failureCallbacks.push(i),
            g &&
              ((o = o || l.startScenario(r)), t.loadPersonDetails(e, a, u, o));
        }),
          (u.loadAllPersonDetails = function (e, n, i, r) {
            function a(e, t, i) {
              if (i.length < 1) return void u(e, "InvalidResponseArray");
              for (var o = i[0], a = [], f = 0; f < o.length; f++)
                a[f] = new c.Person(o[f], s.names);
              s._personDetailsHash.update(a, !0),
                d && l.stopScenario(r, !0),
                n && n();
            }
            function u(e, t) {
              d && l.stopScenario(r, !1, t), i && i();
            }
            var d = !r;
            (r = r || l.startScenario(o)), t.loadAllPersonDetails(e, a, u, r);
          }),
          (u.loadProfiles = function (e, r, o, a) {
            function c(e, t, n) {
              v++;
              var i = [],
                o = [];
              s._addProfiles(t);
              for (var c = 0; c < n.length; c++)
                s.getPerson(n[c]) ? i.push(n[c]) : o.push(n[c]);
              v >= h && m && l.stopScenario(a, !y, _), r && r(i, o);
            }
            function u(e, t, n) {
              v++,
                (y = !0),
                (_ = t),
                v >= h && m && l.stopScenario(a, !y, _),
                o && o(n);
            }
            for (var d = [], f = [], g = 0, p = e.length; p > g; g++)
              s.getPerson(e[g]) ? f.push(e[g]) : d.push(e[g]);
            var h = 0,
              v = 0,
              m = !1,
              _ = null,
              y = !1;
            if (d.length > 0)
              for (m = !a, a = a || l.startScenario(i); d.length > 0; ) {
                var b = d.length > n ? n : d.length,
                  w = d.splice(0, b);
                t.loadProfiles(
                  w,
                  function (e, t) {
                    c(e, t, w);
                  },
                  function (e, t) {
                    u(e, t, w);
                  },
                  a
                );
              }
            (0 == d.length || f.length > 0) && r && r(f, []);
          }),
          (u.blockOrUnblockMessenger = function (e, n, i, r) {
            t.blockOrUnblockMessenger(e, n, i, r);
          }),
          (u.dispose = function () {
            (t = null), (a = null), (s = null);
          });
      }
      var n = 122,
        i = "GetProfiles",
        r = "PersonDetails",
        o = "AllPersonDetails",
        a = window,
        s = a.wLive,
        c = s.People,
        l = c.Reporter;
      c.Client = t;
    })(window.originaljQuery || jQuery);
  }),
  define("networkid", ["client"], function () {
    !(function () {
      var e = (window.wLive.People.NetworkID = function () {});
      (e.skype = "SKYPE"),
        (e.windowsLive = "WL"),
        (e.shortCircuit = "SCD"),
        (e.facebook = "FB"),
        (e.google = "GOOG");
    })();
  }),
  define("sortorder", ["networkid"], function () {
    !(function () {
      var e = (window.wLive.People.SortOrder = function () {});
      (e.none = 0),
        (e.displayName = 1),
        (e.messagingRelevance = 2),
        (e.peopleRelevance = 3);
    })();
  }),
  define("cache", ["sortorder"], function () {
    !(function (e) {
      function t(t, l, g) {
        function p(e, t) {
          e.splice(0, e.length), e.addRange(t || []);
        }
        function h(e, t, i) {
          if (e)
            for (var r = 0, o = e.length; o > r; r++) {
              var a = e[r][t];
              if (typeof a !== n && a === i) return e[r];
            }
          return null;
        }
        function v(e, t) {
          var n = [];
          if (e.filter) n = e.filter(t);
          else for (var i = 0; i < e.length; i++) t(e[i]) && n.push(e[i]);
          return n;
        }
        function m() {
          _.profiles.splice(0, _.profiles.length),
            _.persons.splice(0, _.persons.length),
            _.categories.splice(0, _.categories.length),
            _.groups.splice(0, _.groups.length),
            _.services.splice(0, _.services.length),
            I.clear(),
            y.clear(),
            w.clear(),
            S.clear(),
            C.clear();
        }
        var _ = this;
        (_.readyEventName = r),
          (_.failureEventName = i),
          (_.disposeEventName = o),
          (_.changedEventName = a),
          (_.fullSyncEventName = s),
          (_.persons = []),
          (_.categories = []),
          (_.groups = []),
          (_.services = []),
          (_.profiles = []),
          (_.settings = new u.Settings([]));
        var y = new d(_.persons),
          b = new d([]),
          w = new d(_.categories),
          S = new d(_.groups),
          C = new d(_.services),
          I = new d(_.profiles),
          $ = [],
          k = [],
          L = !1;
        (_.$persons = e({})),
          (_.$categories = e({})),
          (_.$groups = e({})),
          (_.$services = e({})),
          (_.$events = e(_)),
          (_.client = null),
          (_.names = new u.Names(
            t.isLastNameFirst,
            t.nameType,
            t.nns,
            t.profileUrl,
            t.photosUrl
          )),
          (_.isReady = !1),
          (_.isFailed = !1),
          (_.lastFullSync = null),
          (_.lastDeltaSync = null),
          (_.syncKey = null),
          (_._personHash = y),
          (_._personDetailsHash = b),
          (_._categoryHash = w),
          (_._groupHash = S),
          (_._serviceHash = C),
          (_.getMe = function () {
            return _.getPerson(c.$Config.cid);
          }),
          (_.getPerson = function (e) {
            var t = y.get(e);
            return null === t && (t = I.get(e)), t;
          }),
          (_.getPersons = function (e, t) {
            var i = _.persons.slice(0);
            if (e) {
              var r;
              typeof e.isOnline !== n &&
                ((r = e.isOnline
                  ? function (e) {
                      return e.isOnline();
                    }
                  : function (e) {
                      return !e.isOnline();
                    }),
                (i = v(i, r))),
                typeof e.isIMCapable !== n &&
                  ((r = e.isIMCapable
                    ? function (e) {
                        return e.getMessagingAddresses().length > 0;
                      }
                    : function (e) {
                        return 0 == e.getMessagingAddresses().length;
                      }),
                  (i = v(i, r))),
                typeof e.hasPicture !== n &&
                  ((r = e.hasPicture
                    ? function (e) {
                        return e.getUserTile() && !0;
                      }
                    : function (e) {
                        return !e.getUserTile() && !0;
                      }),
                  (i = v(i, r))),
                !t ||
                  (t != f.messagingRelevance && t != f.peopleRelevance) ||
                  ((r =
                    t == f.messagingRelevance
                      ? function (e) {
                          return e.getMessagingRelevance() >= 0;
                        }
                      : function (e) {
                          return e.getPeopleRelevance() >= 0;
                        }),
                  (i = v(i, r))),
                e.networks &&
                  e.networks instanceof Array &&
                  e.networks.length > 0 &&
                  ((r = function (t) {
                    for (var n = t.getContacts(), i = 0; i < n.length; i++)
                      if (e.networks.contains(n[i].getSourceId())) return !0;
                    return !1;
                  }),
                  (i = v(i, r)));
            }
            var o = t ? t : f.none;
            switch (o) {
              case f.displayName:
                i.sort(function (e, t) {
                  return e
                    .getDisplayNameWithFallback()
                    .localeCompare(t.getDisplayNameWithFallback());
                });
                break;
              case f.messagingRelevance:
                i.sort(function (e, t) {
                  return t.getMessagingRelevance() - e.getMessagingRelevance();
                });
                break;
              case f.peopleRelevance:
                i.sort(function (e, t) {
                  return t.getPeopleRelevance() - e.getPeopleRelevance();
                });
                break;
              case f.none:
            }
            return i;
          }),
          (_.getFavorites = function () {
            for (var e = [], t = 0, n = _.categories.length; n > t; t++)
              if (_.categories[t].getIsFavorite()) {
                e = _.getPersonsByCategory(_.categories[t].getId());
                break;
              }
            return e;
          }),
          (_.getPersonsByEmail = function (e) {
            var t = [];
            if (e) {
              e = e.toLowerCase();
              for (var n = 0, i = _.persons.length; i > n; n++)
                for (
                  var r = _.persons[n].getContactEmails(), o = 0, a = r.length;
                  a > o;
                  o++
                )
                  if (r[o] && r[o].toLowerCase() === e) {
                    t.push(_.persons[n]);
                    break;
                  }
            }
            return t;
          }),
          (_.getPersonsByCategory = function (e) {
            for (var t = [], n = 0, i = _.persons.length; i > n; n++) {
              var r = _.persons[n]._d[12];
              r && r.contains(e) && t.push(_.persons[n]);
            }
            return t;
          }),
          (_.getPersonsByService = function (e) {
            for (var t = [], n = 0, i = _.persons.length; i > n; n++) {
              var r = _.persons[n],
                o = h(r._d[1], 4, e);
              o && t.push(r);
            }
            return t;
          }),
          (_.getPersonDetails = function (e) {
            var t = b.get(e);
            return t;
          }),
          (_.removePersonDetails = function (e) {
            var t = b.get(e);
            t && b.remove(t);
          }),
          (_.getContactIdsForMri = function (e) {
            var t = [];
            if (e) {
              e = e.toLowerCase();
              for (var n = 0, i = _.persons.length; i > n; n++)
                for (
                  var r = _.persons[n]._d[1], o = 0, a = r.length;
                  a > o;
                  o++
                ) {
                  var s = r[o];
                  if (s[3]) {
                    var c = s[3][0];
                    if (c)
                      for (var l = 0, u = c.length; u > l; l++)
                        if (c[l].toLowerCase() == e) {
                          t.push(s[0]);
                          break;
                        }
                  }
                }
            }
            return t;
          }),
          (_.getCategory = function (e) {
            var t = w.get(e);
            return t;
          }),
          (_.getService = function (e) {
            var t = C.get(e);
            return t;
          }),
          (_.reset = function () {
            m(), l.clearAb(), l.clearHost();
          }),
          (_.callWhenReady = function (e, t) {
            function n() {
              _.$events.unbind(i, n);
              for (var e = 0; e < k.length; e++) k[e]();
              k = [];
            }
            function o() {
              _.$events.unbind(r, o);
              for (var e = 0; e < $.length; e++) $[e]();
              $ = [];
            }
            _.isReady && e
              ? e()
              : (0 === $.length && _.$events.bind(r, o),
                $.push(e),
                t &&
                  (_.isFailed
                    ? t()
                    : (0 === k.length && _.$events.bind(i, n), k.push(t))));
          }),
          (_.removeWhenReadyCallback = function (e, t) {
            if ($) {
              var n = $.indexOf(e);
              -1 != n && $.splice(n, 1),
                t && ((n = k.indexOf(t)), -1 != n && k.splice(n, 1));
            }
          }),
          (_.dispose = function () {
            (L = !0), _.$events.triggerHandler(o), _._disposeCache();
          }),
          (_.processABChangedEvent = function (e) {
            _.client.processABChangedEvent(e);
          }),
          (_._flatten = function (e) {
            var t = new u.DeltaSync(g, this, null);
            return t.flatten(e);
          }),
          (_._clone = function (e) {
            var t = new u.DeltaSync(g, this, null);
            return t.clone(e);
          }),
          (_._sortContactsByRank = function (e) {
            var t = new u.DeltaSync(g, this, null);
            t.sortContactsByRank(e);
          }),
          (_._dedupeContacts = function (e) {
            var t = new u.DeltaSync(g, this, null);
            return t.dedupe(e);
          }),
          (_._addProfiles = function (e) {
            for (var t = [], n = 0; n < e.length; n++) {
              var i = new u.Person(e[n], _.names);
              if (I.get(i.getId())) {
                for (var r = 0; r < _.profiles.length; r++)
                  if (_.profiles[r].getId() == i.getId()) {
                    _.profiles[r] = i;
                    break;
                  }
              } else _.profiles.push(i), t.push(i);
            }
            I.update(t);
          }),
          (_._applyFull = function (e, t, n, i, r) {
            p(_.persons, e),
              p(_.categories, t),
              p(_.groups, n),
              p(_.services, i),
              (_.settings = r),
              y.clear(),
              w.clear(),
              S.clear(),
              _.isReady && _.$events.triggerHandler(s);
          }),
          (_._getProfile = function (e) {
            var t = I.get(e);
            return t;
          }),
          (_._find = function (e) {
            function t(e, t) {
              for (var n = 0; n < e.length; n++) {
                var i = e[n].getDisplayName();
                if (i && t && i.toLowerCase().indexOf(t.toLowerCase()) >= 0)
                  return e[n];
              }
              return null;
            }
            var n = t(_.persons, e);
            return n || t(_.profiles, e);
          }),
          (_._snapshot = function () {
            function e(t) {
              if (t)
                if (t instanceof Array)
                  for (var n = 0; n < t.length; n++) e(t[n]);
                else {
                  var i = [];
                  for (var r in t)
                    r.startsWith("get") &&
                      "getPerson" != r &&
                      "function" == typeof t[r] &&
                      i.push(r);
                  for (var o = 0; o < i.length; o++) {
                    var a = t[i[o]]();
                    (t[i[o].substr(3)] = a),
                      a &&
                        ("function" == typeof a || a instanceof Array) &&
                        e(a);
                  }
                }
            }
            e(_.persons),
              e(_.profiles),
              e(_.categories),
              e(_.groups),
              e(_.services),
              e(_.settings);
          }),
          (_._disposeCache = function () {
            L ||
              (_.$events.unbind(r),
              _.$events.unbind(i),
              _.$events.unbind(s),
              _.$persons.unbind(a),
              _.$categories.unbind(a),
              _.$groups.unbind(a),
              _.$services.unbind(a),
              (_.profiles = null),
              (_.services = null),
              (_.categories = null),
              (_.groups = null),
              (_.persons = null),
              (_.settings = null));
          });
      }
      var n = "undefined",
        i = "failure",
        r = "ready",
        o = "dispose",
        a = "changed",
        s = "fullSync",
        c = window,
        l = c.wLive,
        u = l.People,
        d = u.LazyHash,
        f = u.SortOrder;
      u.Cache = t;
    })(window.originaljQuery || jQuery);
  }),
  define("pwcinitializer", ["cache"], function () {
    !(function (e) {
      function t() {
        function t() {
          if (!w)
            if (T.isReady) g($, !0);
            else {
              var e = k.getFullSyncRequired();
              if ((f.logAction("Pwc_InitCacheFullSyncRequired"), !e && s())) {
                var t = C.deltaSyncInterval
                  ? parseInt(C.deltaSyncInterval)
                  : 3e5;
                M.deltaSyncRequired &&
                  ((T.lastDeltaSync = new Date(new Date().getTime() - t)),
                  (M.deltaSyncRequired = !1),
                  f.logAction("Pwc_InitCacheDeltaSyncRequired")),
                  M.resetTimers(),
                  v();
              } else l();
            }
        }
        function s() {
          var e = !1,
            t = new Date().getTime(),
            n = k.clearAbErrorCode(),
            r = k.getFullAb();
          if (((n = k.clearAbErrorCode() || n), r)) {
            try {
              M.applyFull(r),
                (T.lastFullSync = k.getLastFullSync()),
                (T.lastDeltaSync = k.getLastDeltaSync());
              for (var a = k.getAbDeltas(), s = 0; s < a.length; s++)
                M.applyDelta(a[s].json);
              (e = !0),
                (M.deltaSyncRequired =
                  k.getDeltaSyncRequired() || "1" === h.getSessionCookie(o));
            } catch (c) {
              f.logError("Pwc_RestoreAbError", c), (n = f.getErrorCode(c));
            }
            e || k.clearAb();
          }
          return f.addStats(i, t, n, $), e;
        }
        function l() {
          if (C.initOnPageLoad)
            if (p.isLoading()) {
              var e,
                t = !1;
              (e = function () {
                t || (e && (p.removeLoadedCallback(e), (t = !0)), u());
              }),
                p.addLoadedCallback(e);
            } else u();
          else g($, !0);
        }
        function u() {
          T.isReady
            ? M.resetTimers()
            : C.fullSyncDelay
            ? c.setTimeout(function () {
                P.fullSync(v, m, $);
              }, C.fullSyncDelay)
            : P.fullSync(v, m, $);
        }
        function v() {
          (T.isReady = !0),
            (T.isFailed = !1),
            h.setSessionCookie(a, "1"),
            g($, !0),
            T.$events.triggerHandler(T.readyEventName);
        }
        function m() {
          (T.isReady = !1),
            (T.isFailed = !0),
            h.setSessionCookie(a, null),
            g($, !1, "fullSyncFailure"),
            T.$events.triggerHandler(T.failureEventName);
        }
        function _() {
          T.reset();
        }
        function y() {
          (w = !0),
            c.$Logout &&
              C.enabled &&
              !C.fullyDisabled &&
              S.hcid &&
              c.$Logout.remove(_),
            e(c).unbind(r, y),
            k && (k.dispose(), (k = null)),
            T &&
              (T.$events.unbind(T.disposeEventName, y),
              T._disposeCache(),
              (T = null)),
            M && (M.dispose(), (M = null));
        }
        var b = this,
          w = !1,
          S = c.$Config || {},
          C = S.ContactCache || {},
          I = S.mkt ? S.mkt.toLowerCase() : "";
        f.isQosEnabled = C.qos;
        var $,
          k = new d.Store(C.peopleApiBaseUrl, C.localStorage, S.hcid, I, t),
          L = new d.ServiceProxy(
            k,
            I,
            C.peopleApiBaseUrl,
            C.peopleApiAppId,
            S.handlerBaseUrl,
            C.canary
          ),
          T = new d.Cache(C, k, L),
          M = new d.SyncClient(
            L,
            k,
            T,
            C.fullSyncInterval,
            C.deltaSyncInterval
          ),
          P = new d.Client(L, M, T);
        (T.client = P),
          T.$events.bind(T.disposeEventName, y),
          (b.cache = T),
          C.enabled &&
            !C.fullyDisabled &&
            S.hcid &&
            (($ = f.startScenario(n)),
            c.$Logout && c.$Logout.add(_),
            k.init($));
      }
      var n = "Init",
        i = "RestoreAB",
        r = "unload",
        o = "wpd",
        a = "wpc",
        s = "$pwc",
        c = window,
        l = c.$Do,
        u = c.wLive,
        d = u.People,
        f = d.Reporter,
        g = f.stopScenario,
        p = c.$BSI,
        h = c.$Cookie,
        v = new t();
      (c[s] = v.cache), l.register(s, 0, !0);
    })(window.originaljQuery || jQuery);
  }),
  define(
    "iccommondata",
    ["jquery-1.7.2", "pagestats", "pwcinitializer"],
    function () {
      !(function () {
        function e() {
          function e() {
            return i || (i = t.ic_common_data), i || {};
          }
          function n() {
            return r || (r = t.ic_menu_data), r || {};
          }
          var i,
            r,
            o = this;
          (o.getActionData = function (e) {
            return n()[e];
          }),
            (o.getReturnUrl = function () {
              return e().ru || location.href;
            }),
            (o.getActionDescription = function (e) {
              return n()[e][0] || "";
            });
        }
        var t = window,
          n = t.wLive || {};
        n.IC = n.IC || {};
        var i = n.IC;
        i.ICCommonData = new e();
      })();
    }
  ),
  define("ictemplate", ["iccommondata"], function () {
    !(function (e) {
      function t(t, n, i) {
        function r(e) {
          return l > e ? n[e] : null;
        }
        function o() {
          return c++;
        }
        var a,
          s = this,
          c = 0,
          l = n.length;
        (s.id = t),
          (s.html = i.html()),
          (s.getNewId = function () {
            return t + o();
          }),
          (s.getCid = function () {
            return r(0);
          }),
          (s.getShowCard = function () {
            return "1" == r(1);
          }),
          (s.getMenuActions = function () {
            return r(2);
          }),
          (s.getName = function () {
            return r(3);
          }),
          (s.getEmail = function () {
            return r(6);
          }),
          (s.getUserTileUrl = function () {
            return r(17);
          }),
          (s.getTileSize = function () {
            if (!a) {
              var n = e("#{0}_{1}".format(t, "usertilecontainer"), i);
              if (n.length > 0) {
                var r = n.attr("class").split(" ");
                if (r && r[1]) return r[1].replace("c_ic_img_", "");
              } else a = "none";
            }
            return a;
          }),
          (s.dispose = function () {
            (i = null), (n = null);
          });
      }
      var n = window,
        i = n.wLive;
      i.IC = i.IC || {};
      var r = i.IC;
      r.ICTemplate = t;
    })(window.originaljQuery || jQuery);
  }),
  define("ictemplates", ["ictemplate"], function () {
    !(function (e) {
      function t() {
        function t(e) {
          if (e.startsWith("icTm")) {
            var t = e.indexOf("_template"),
              n = t >= 0 ? t : e.length;
            return e.substring(4, n);
          }
          return e;
        }
        var i = this,
          o = {};
        (i.init = function () {
          n.icPwcData && i.addTemplates(n.icPwcData);
        }),
          (i.addTemplates = function (n) {
            if (n)
              for (var i in n) {
                var a = t(i);
                o[a] && o[a].dispose(),
                  (o[a] = new r.ICTemplate(
                    i,
                    n[i],
                    e("#{0}_template".format(i))
                  ));
              }
          }),
          (i.getTemplate = function (e) {
            return (e = t(e)), o[e] ? o[e] : null;
          }),
          (i.dispose = function () {
            for (var e in o) o[e].dispose(), delete o[e];
            o = null;
          }),
          i.init();
      }
      var n = window,
        i = n.wLive;
      i.IC = i.IC || {};
      var r = i.IC;
      r.ICTemplates = t;
    })(window.originaljQuery || jQuery);
  }),
  define("icaction", ["ictemplates"], function () {
    !(function (e) {
      function t(e, n) {
        var i = this;
        (i.id = t.id),
          (i.isEnabled = function () {
            return (e && e.getContactEmails().length > 0) || n;
          }),
          (i.getAvailableOptions = function () {
            var t = [],
              i = e ? e.getContactEmails() : [];
            n && t.push({ id: n, displayName: n });
            for (var r = 0; r < i.length; r++)
              (n && i[r] == n) || t.push({ id: i[r], displayName: i[r] });
            return t;
          }),
          (i.performAction = function (e) {
            if (p.getActionData(i.id)) {
              var t = i.getAvailableOptions(),
                n = e || (t.length > 0 && t[0].id);
              if (n) {
                var r = p
                    .getActionData(i.id)[1]
                    .replace("$address$", n)
                    .replace("$ru$", encodeURIComponent(p.getReturnUrl())),
                  o = l.wLive && l.wLive.Hotmail ? null : "_blank";
                $BSI.navigateTo(r, o);
              }
            }
          }),
          (i.dispose = function () {});
      }
      function n(e) {
        var t = this;
        (t.id = n.id),
          (t.isEnabled = function () {
            return e && !e.isMe() && e.getId();
          }),
          (t.getAvailableOptions = function () {
            return [];
          }),
          (t.performAction = function (n) {
            if (e && p.getActionData(t.id)) {
              var i = p
                .getActionData(t.id)[1]
                .replace("$contactid$", e.getId());
              l.open(i, "_blank");
            }
          }),
          (t.dispose = function () {});
      }
      function i(e) {
        var t = this;
        (t.id = i.id),
          (t.isEnabled = function () {
            return e && e.isMe();
          }),
          (t.getAvailableOptions = function () {
            return [];
          }),
          (t.performAction = function (e) {
            if (p.getActionData(t.id)) {
              var n = p.getActionData(t.id)[1];
              l.open(n, "_blank");
            }
          }),
          (t.dispose = function () {});
      }
      function r(e, t, n) {
        var i,
          o = this;
        (o.id = r.id),
          (o.setWebImContact = function (e) {
            i = e;
          }),
          (o.isEnabled = function () {
            return i && e && !e.isMe() && e.canChat(t);
          }),
          (o.getAvailableOptions = function () {
            var t = [];
            if (e && i)
              for (var n = e.getMessagingAddresses(), r = 0; r < n.length; r++)
                n[r].canChat() &&
                  t.push({
                    id: n[r].get_id(),
                    displayName: n[r].get_network().get_name(),
                  });
            return t;
          }),
          (o.performAction = function (t, r) {
            var o = s(e.getMessagingAddresses(), t);
            $WLXIM.startConversation(
              i,
              o ? o.get_type() : 0,
              a(n),
              o ? o.get_network() : null,
              r
            );
          }),
          (o.dispose = function () {});
      }
      function o(e, t, n, i) {
        var r,
          l = this;
        (l.id = t ? o.audioId : o.videoId),
          (l.setWebImContact = function (e) {
            r = e;
          }),
          (l.isEnabled = function () {
            return r && e && !e.isMe() && e.canCall(n);
          }),
          (l.getAvailableOptions = function () {
            var t = [];
            if (e && r)
              for (var n = e.getMessagingAddresses(), i = 0; i < n.length; i++)
                n[i].canCall() &&
                  t.push({
                    id: n[i].get_id(),
                    displayName: n[i].get_network().get_name(),
                  });
            return t;
          }),
          (l.performAction = function (n, o) {
            var l = s(e.getMessagingAddresses());
            t
              ? $WLXIM.startVideoCall(r, a(i), l, o)
              : $WLXIM.startAudioCall(r, a(i), l, o),
              c();
          }),
          (l.dispose = function () {});
      }
      function a(e) {
        return (e = e || f), g[e] || e;
      }
      function s(e, t) {
        var n = null;
        if (t)
          for (var i = 0; !n && i < e.length; i++)
            e[i].get_id() == t && (n = e[i]);
      }
      function c() {
        function t() {
          e(n).unbind("pluginLoaded", t),
            e(n).unbind("callFinished", t),
            $header.hideLoading();
        }
        var n = window.Microsoft.Live.Messenger.Services.SkyJSHelper;
        n.skypeEnabled &&
          $header &&
          ($header.showLoading(),
          e(n).bind("pluginLoaded", t),
          e(n).bind("callFinished", t));
      }
      var l = window,
        u = l.wLive,
        d = u.IC,
        f = "identityControl",
        g = { PeoplePane: "peoplePane" },
        p = d.ICCommonData;
      (d.ICActionEmail = t),
        (t.id = "se"),
        (d.ICActionContactDetails = n),
        (n.id = "cd"),
        (d.ICActionEditProfile = i),
        (i.id = "ep"),
        (d.ICActionSendIm = r),
        (r.id = "si"),
        (d.ICActionCall = o),
        (o.videoId = "vc"),
        (o.audioId = "ac");
    })(window.originaljQuery || jQuery);
  }),
  define("icpresence", ["icaction"], function () {
    !(function (e) {
      function t(t, i) {
        function s() {
          (d = n.$WLXIM),
            d &&
              f &&
              !h &&
              !y &&
              (e(f).bind(o, l),
              (v[r.ICActionEmail.id] = new r.ICActionEmail(f, g)),
              (v[r.ICActionEditProfile.id] = new r.ICActionEditProfile(f)),
              (v[r.ICActionContactDetails.id] = new r.ICActionContactDetails(
                f
              )),
              (v[r.ICActionSendIm.id] = new r.ICActionSendIm(f, t, i)),
              (v[r.ICActionCall.videoId] = new r.ICActionCall(f, !1, t, i)),
              (v[r.ICActionCall.audioId] = new r.ICActionCall(f, !0, t, i)),
              (h = !0),
              c(),
              $Do.when("$WLXIM.UserSignedIn", 0, function () {
                !y &&
                  f.getId() &&
                  ((u = f.isMe()
                    ? d.user.get_contact()
                    : d.user.findContactById(f.getContacts()[0].getId())),
                  u &&
                    (v[r.ICActionSendIm.id].setWebImContact(u),
                    v[r.ICActionCall.videoId].setWebImContact(u),
                    v[r.ICActionCall.audioId].setWebImContact(u),
                    c()));
              }));
        }
        function c() {
          var t = p.isOnline(),
            n = m != t;
          m = t;
          for (var i in v) {
            var r = v[i].isEnabled();
            (n = n || r != _[i]), (_[i] = r);
          }
          n && e(p).trigger(a);
        }
        function l(e) {
          c();
        }
        var u,
          d,
          f,
          g,
          p = this,
          h = !1,
          v = {},
          m = !1,
          _ = {},
          y = !1;
        (_[r.ICActionEmail.id] = !1),
          (_[r.ICActionContactDetails.id] = !1),
          (_[r.ICActionEditProfile.id] = !1),
          (_[r.ICActionSendIm.id] = !1),
          (_[r.ICActionCall.videoId] = !1),
          (_[r.ICActionCall.audioId] = !1),
          (p.actions = v),
          (p.setPerson = function (e, t) {
            (f = e), (g = t), s();
          }),
          (p.isOnline = function () {
            return f && f.isOnline(t);
          }),
          (p.dispose = function () {
            for (var t in v) v[t].dispose(), delete v[t];
            (v = null), e(f).unbind(o, l), (u = null), (y = !0);
          }),
          $Do.when("wlxim", 0, s);
      }
      var n = window,
        i = n.wLive,
        r = i.IC,
        o = "changed",
        a = "presenceChanged";
      r.ICPresence = t;
    })(window.originaljQuery || jQuery);
  }),
  define("iccard", ["icpresence"], function () {
    !(function (e) {
      function t() {
        if (!i) {
          var t = e("#" + s);
          0 == t.length
            ? ((i = e("<div>").prop("id", s)),
              e("body").prepend(i),
              r.$Sutra && sutra(i, d + "ICMenuList"))
            : (i = t);
        }
        return i;
      }
      function n(n, i) {
        function o() {
          i && e(i).bind(u, P);
        }
        function s(i) {
          (D = e("<ul>")),
            D.addClass(c),
            D.prop("id", n.id + "_menu_ul"),
            D.html(b()),
            w(),
            P(),
            t().append(D);
          var r = {
            offset: { x: 0, y: 5 },
            nofocus: 1,
            hoverDelay: l,
            menuEl: D[0],
          };
          if (
            ($menu.create(i, 0, r), (A = D[0].binding), C(), x && !x.isMe())
          ) {
            var o = M();
            (o.Template = n.template.id),
              (o.hasContactDetails = y(a.ICActionContactDetails.id)),
              (o.hasEmail = y(a.ICActionEmail.id)),
              (o.hasIM = y(a.ICActionSendIm.id)),
              (o.hasVideoVoiceCall =
                y(a.ICActionCall.videoId) || y(a.ICActionCall.audioId)),
              $BSI.reportEvent("View.IC.Nav", o);
          }
        }
        function y(e) {
          return i && i.actions[e] && i.actions[e].isEnabled() ? 1 : 0;
        }
        function b() {
          var e = "",
            t = y(a.ICActionContactDetails.id) ? p : g,
            r = t.format(
              n.getName().encodeHtml(),
              n.getEmail().encodeHtml(),
              a.ICActionContactDetails.id
            );
          if (i) {
            x &&
              x.isMe() &&
              (r = p.format(
                n.getName().encodeHtml(),
                _.getActionDescription(a.ICActionEditProfile.id).encodeHtml(),
                a.ICActionEditProfile.id
              ));
            for (var o = 0; o < v.length; o++) {
              var s = v[o],
                c = _.getActionDescription(s).encodeHtml();
              e += f.format(s, c, S(s));
            }
          }
          return r + e;
        }
        function w() {
          r.$Sutra &&
            D &&
            D.length > 0 &&
            (sutra(D, d + "ICMenu"),
            sutra(
              e("#" + a.ICActionEditProfile.id, D),
              d + "ICMenuEditProfile"
            ),
            sutra(
              e("#" + a.ICActionContactDetails.id, D),
              d + "ICMenuContactDetails"
            ),
            sutra(e("#" + a.ICActionEmail.id, D), d + "ICMenuSendEmail"),
            sutra(e("#" + a.ICActionSendIm.id, D), d + "ICMenuStartIM"),
            sutra(e("#" + a.ICActionCall.videoId, D), d + "ICMenuVideoCall"),
            sutra(e("#" + a.ICActionCall.audioId, D), d + "ICMenuAudioCall"),
            sutra(e(".c_ic_menu_name", D), d + "ICMenuName"),
            sutra(e(".c_ic_menu_sub", D), d + "ICMenuSub"));
        }
        function S(t) {
          var n;
          switch (t) {
            case "si":
              n = h.IM;
              break;
            case "se":
              n = h.Mail;
              break;
            case "vc":
              n = h.Video;
              break;
            case "ac":
              n = h.Audio;
          }
          return n
            ? e(
                $IS.CreateFromConfig(
                  "ic/icmenu2_gray.png,ic/icmenu2_gray.png,",
                  n,
                  $Config.imgsBase
                )
              ).html()
            : "";
        }
        function C() {
          for (var t = 0; t < v.length; t++) L(v[t]);
          e("#ep a", D).bind("click", function () {
            i.actions[a.ICActionEditProfile.id].performAction();
          }),
            e("#cd a", D).bind("click", function () {
              i.actions[a.ICActionContactDetails.id].performAction();
            });
        }
        function I() {
          for (var t = 0; t < v.length; t++) k(v[t]);
          e("#ep a", D).unbind(), e("#cd a", D).unbind();
        }
        function $() {
          A && (A.dispose(), (A = null)), D && (I(), D.remove(), (D = null));
        }
        function k(t) {
          e("#" + t, D).unbind();
        }
        function L(t) {
          function r(e) {
            $IS.toggle(o[0], e - a), (a = e);
          }
          var o = e("#" + t, D),
            a = 1;
          o.hover(
            function () {
              r(2);
            },
            function () {
              r(1);
            }
          ),
            o.bind("mousedown", function () {
              r(3);
            }),
            o.bind("mouseup", function () {
              r(1);
            }),
            o.bind("mouseup", function () {
              r(1);
            }),
            i.actions[t] &&
              o.bind("click", function (e) {
                e && e.preventDefault(),
                  i.actions[t].performAction(null, o[0]),
                  N.hide();
                var r = M();
                (r.IdentityControlNav = T(t)),
                  (r.Template = n.template.id),
                  $BSI.reportEvent("SelectClick.IC.Nav", r);
              });
        }
        function T(e) {
          switch (e) {
            case a.ICActionEditProfile.id:
              return "Profile";
            case a.ICActionContactDetails.id:
              return "CDMenu";
            case a.ICActionEmail.id:
              return "Email";
            case a.ICActionSendIm.id:
              return "IM";
            case a.ICActionCall.videoId:
              return "Video";
            case a.ICActionCall.audioId:
              return "Voice";
          }
          return "UnknownAction";
        }
        function M() {
          var e = {},
            t = {};
          if (x)
            for (var n = x.getContacts(), i = 0; i < n.length; i++)
              t[n[i].getSourceId()] = !0;
          for (var r = 0; r < m.length; r++) e[m[r]] = t[m[r]] || !1;
          return e;
        }
        function P() {
          if (D && i) {
            for (var t = 0; t < v.length; t++) {
              var n = v[t],
                r = e("#" + n, D);
              i.actions[n] && i.actions[n].isEnabled()
                ? r.css("display", "")
                : r.hide();
            }
            A && A.update();
          }
        }
        var D,
          A,
          x,
          N = this;
        (N.setPerson = function (e) {
          x = e;
        }),
          (N.show = function (e) {
            D || s(e), A && !A.isOpen() && A.show();
          }),
          (N.hide = function () {
            A && A.isOpen() && A.hide();
          }),
          (N.toggleVisibility = function () {
            A && A.toggleState();
          }),
          (N.dispose = function () {
            i && (e(i).unbind(u, P), (i = null)), $();
          }),
          o();
      }
      var i,
        r = window,
        o = r.wLive,
        a = o.IC,
        s = "c_ic_menus",
        c = "c_ic_menu c_m t_hovl",
        l = 625,
        u = "presenceChanged",
        d = "$Sutra.Shared.",
        f =
          '<li id="{0}" class="c_ic_menu_glyph"><a href="#" alt="{1}" tabindex="1" role="menuitem"><span class="is_c">{2}</span></a></li>',
        g =
          '<li id="{2}"><span><div class="c_ic_menu_name">{0}</div><div class="c_ic_menu_sub">{1}</div></span></li>',
        p =
          '<li id="{2}"><a href"#" tabIndex="1" role="menuitem"><div class="c_ic_menu_name">{0}</div><div class="c_ic_menu_sub">{1}</div></a></li>',
        h = {
          Mail: "1,0,30,31,",
          IM: "32,0,30,31,",
          Audio: "63,0,30,31,",
          Video: "94,0,30,31,",
        },
        v = [
          a.ICActionEmail.id,
          a.ICActionSendIm.id,
          a.ICActionCall.videoId,
          a.ICActionCall.audioId,
        ],
        m = [
          "ABCH",
          "FB",
          "GOOG",
          "LI",
          "MYSP",
          "SINWE",
          "SKYPE",
          "SCD",
          "TWITR",
          "WL",
        ],
        _ = a.ICCommonData;
      a.ICCard = n;
    })(window.originaljQuery || jQuery);
  }),
  define("ic", ["iccard"], function () {
    !(function (e) {
      function t(t, u, d) {
        function f() {
          var e = t.getTileSize();
          if (!M.isMe() && ("mxl" == e || "mxxl" == e)) {
            var n = M.getContacts(),
              i = n.length > 0 ? n[0].getId() : null;
            i &&
              ($pwc.getPersonDetails(i)
                ? ((P = $pwc.getPersonDetails(i)), p(!0))
                : $pwc.client.loadPersonDetails(i, function () {
                    (P = $pwc.getPersonDetails(i)), p(!0);
                  }));
          }
        }
        function g() {
          if (A) {
            var e = H;
            (F = !1),
              R.deactivate(),
              R.render(),
              B.replaceWith(A),
              (O = !0),
              e && R.activate();
          }
        }
        function p(e) {
          var t = C();
          $B.IE && t && t.indexOf("fbcdn") > 0 && (t = void 0),
            !W ||
              (F && !e) ||
              ((F = !0),
              W.prop("src") == t
                ? h()
                : (W.bind("load", h),
                  W.bind("error", v),
                  t
                    ? W.prop("src", n.$ssl.ensureSSLImageUrl(t))
                    : W.prop("src", W.prop("errsrc") || $icerrsrc)));
        }
        function h() {
          try {
            (l[W.prop("src")] = 1), W.attr("class", "c_ic_tile");
            var e,
              t,
              n = 0;
            (t = W[0].naturalWidth), (e = W[0].naturalHeight);
            var i = W.css("width"),
              r = W.css("height");
            if ((1 == t && 1 == e) || ("1px" == i && "1px" == r))
              return void v();
            var o = Math.round;
            if (t && e && t != e)
              if (t > e) {
                var a = parseInt(r),
                  s = parseInt(i),
                  c = o(t * (a / e));
                (n = -o((c - s) / 2)),
                  W.css({ width: "auto", "max-width": "none", left: n + "px" });
              } else W.css({ height: "auto", "max-height": "none" });
            W.css("visibility", "");
          } catch (u) {
            E && E.logError("IC_OnUserTileLoad_Error", u);
          }
        }
        function v() {
          var e;
          try {
            (e = W.parent()), W.remove();
            var t = W.attr("errsrc") || $icerrsrc;
            W.attr("src") != t &&
              (W.attr("class", "c_ic_tile")
                .css("top", "")
                .css("left", "")
                .css("height", "")
                .css("width", ""),
              setTimeout(function () {
                W.attr("src", t).css("visibility", "");
              }, 0));
          } catch (n) {
            E && E.logError("IC_OnUserTileError_Error", n);
          } finally {
            null != e && e.append(W);
          }
        }
        function m() {
          var t = e(k("frame"), B),
            n = e(k("bar"), B),
            i = !d.hidePresence && x.isOnline();
          t.length > 0
            ? $IS.setClass(t[0], i ? c : s)
            : (n.removeClass(i ? s : c), n.addClass(i ? c : s));
        }
        function _() {
          var t = e(k("bar"), B);
          t.css("visibility", "inherit");
        }
        function y() {
          var t = $(),
            n = I();
          R.getShowICCard() && M && (t = ""),
            e(k("frame_clip"), B).attr("title", t),
            e(k("usertile"), B).attr("alt", t);
          var i = e(k("name"), B);
          i.attr("title") && i.attr("title", n);
        }
        function b() {
          return M && M.getIsFavorite();
        }
        function w() {
          return d.showICCard && t.getShowCard();
        }
        function S() {
          var e = d.name || (M && M.getDisplayNameWithFallback()),
            n = t.getName();
          return (n = "{0}" == n ? null : n), e || n || "";
        }
        function C() {
          var e = t.getUserTileUrl(),
            n = M && M.isMe() && !T(e) ? e : null;
          return (
            n ||
            d.userTileUrl ||
            (P && P.getUserTile()) ||
            (M && M.getUserTile()) ||
            t.getUserTileUrl()
          );
        }
        function I() {
          var e = d.email;
          if (!e && M) {
            var n = M.getContactEmails();
            n.length >= 0 && (e = n[0]);
          }
          return e || t.getEmail();
        }
        function $() {
          if ("none" == d.toolTipType) return "";
          var e;
          return (
            (e = d.toolTipType && "email" != d.toolTipType && S() ? S() : I()),
            e || ""
          );
        }
        function k(e) {
          return "#{0}_{1}".format(D, e);
        }
        function L(e) {
          return !o || (null != e && "" != e) ? e : '""';
        }
        function T(e) {
          return e.indexOf("blueman") >= 0;
        }
        d = d || {};
        var M,
          P,
          D,
          A,
          x,
          N,
          E,
          B,
          W,
          R = this,
          F = !1,
          H = !1,
          O = !0,
          j = !1;
        (R.person = null),
          (R.pwcId = u),
          (R.template = t),
          (R.init = function () {
            (R.id = D = t.getNewId()),
              (R.namespace = d.namespace),
              (x = new r.ICPresence(d.useActiveMessagingAddress)),
              (N = new r.ICCard(R, x)),
              u &&
                $Do.when("$pwc", 0, function () {
                  $pwc.callWhenReady(function () {
                    j ||
                      ((E = i.People.Reporter),
                      (R.person = M = $pwc.getPerson(u)),
                      M && (x.setPerson(M, I()), N.setPerson(M), y(), f()),
                      A && g());
                  });
                });
          }),
          (R.render = function () {
            var n = S().encodeHtmlAttribute(),
              i = $().encodeHtmlAttribute();
            A = t.html
              .replace(new RegExp(t.id, "g"), D)
              .format(n, "", "", L(i));
            var r = C();
            if (l[r]) {
              var o = e("<div></div>").html(A),
                a = e(k("usertile"), o);
              a.prop("src", r),
                a.addClass("c_ic_tile"),
                a.css("visibility", ""),
                (A = o.html());
            }
            return A;
          }),
          (R.activate = function (n) {
            if (!H && !j) {
              if (O) {
                if (
                  ((O = !1),
                  (B = n || e("#" + D)),
                  B.addClass("icpwc"),
                  (W = e(k("usertile"), B)),
                  y(),
                  b())
                ) {
                  var i = e(k("fstarp"), B);
                  if (i.length > 0) {
                    i.removeClass("c_ic_fstarp_hide");
                    var r = e(k("name"), B);
                    r.length > 0 &&
                      r.parent().addClass("c_ic_name_fstar_" + t.getTileSize());
                  }
                }
                R.getShowICCard() ||
                  e(k("usertilecontainer"), B).addClass("c_emptymenu"),
                  _();
              }
              e(x).bind(a, m), m(), setTimeout(p, 0), (H = !0);
            }
          }),
          (R.deactivate = function () {
            H &&
              !j &&
              (e(x).unbind(a, m),
              B &&
                (e(k("frame_clip"), B).unbind(".ic"), e(k("name"), B).unbind()),
              W && W.unbind(),
              N.dispose(),
              (N = new r.ICCard(R, x)),
              (H = !1));
          }),
          (R.isActive = function () {
            return H;
          }),
          (R.getUserTileContainerElement = function () {
            return e(k("usertilecontainer"), B);
          }),
          (R.getPresence = function () {
            return x;
          }),
          (R.dispose = function () {
            R.deactivate(),
              x && (x.dispose(), (x = null)),
              B && B.html(""),
              (B = W = null),
              (R.person = M = P = null),
              (j = !0);
          }),
          (R.getShowICCard = w),
          (R.getName = S),
          (R.getUserTileUrl = C),
          (R.getEmail = I),
          (R.getTooltip = $),
          R.init();
      }
      var n = window,
        i = n.wLive,
        r = i.IC,
        o = $B.IE,
        a = "presenceChanged",
        s = "c_ic_blueframe",
        c = "c_ic_greenframe",
        l = {};
      r.IC = t;
    })(window.originaljQuery || jQuery);
  }),
  define("icmanager", ["ic"], function () {
    !(function (e) {
      function t() {
        function t(e, t, n) {
          var i = new r.IC(e, t, n);
          return (
            (a[i.id] = i),
            t && ((s[t] = s[t] || []), s[t].push(i)),
            n.namespace &&
              ((c[n.namespace] = c[n.namespace] || []), c[n.namespace].push(i)),
            i
          );
        }
        var i,
          o = this,
          a = {},
          s = {},
          c = {},
          l = !1;
        (o.init = function () {
          l ||
            ((l = !0), (i = new r.ICTemplates()), $Do.register("$icm", 0, !0));
        }),
          (o.addTemplates = function (e) {
            l && i.addTemplates(e);
          }),
          (o.createICForPerson = function (e, n, r) {
            if (!i) return null;
            r = r || {};
            var o = i.getTemplate(e);
            return n && o ? t(o, n, r) : null;
          }),
          (o.createNonContactIC = function (e, n, r) {
            if (!i) return null;
            var o = i.getTemplate(e);
            return o ? ((r = r || {}), (r.email = n), t(o, null, r)) : null;
          }),
          (o.createICsFromCids = function (e, t, i, r) {
            function a(t, n) {
              var a = o.createICForPerson(e, n.getId() || t, r);
              i(l[t], a);
            }
            function s(e, t) {
              for (var n = 0; n < e.length; n++) a(e[n], c.getPerson(e[n]));
              for (n = 0; n < t.length; n++) i(t[n], null);
            }
            var c,
              l = {};
            $Do.when("$pwc", 0, function () {
              (c = n.$pwc),
                c.callWhenReady(function () {
                  for (var e = [], n = 0, i = t.length; i > n; n++) {
                    var r = t[n][0];
                    if (((l[r] = t[n][1]), "0" != r && 0 != r)) {
                      var o = c.getPerson(r);
                      o ? a(r, o) : e.push(r);
                    }
                  }
                  e.length > 0 && c.client.loadProfiles(e, s);
                });
            });
          }),
          (o.getICById = function (e) {
            return a[e] || null;
          }),
          (o.getICsForPerson = function (e) {
            return s[e];
          }),
          (o.getICsForNamespace = function (e) {
            return c[e] || [];
          }),
          (o.removeIC = function (e) {
            if ((delete a[e.id], e.pwcId)) {
              var t = e.pwcId;
              s[t] && (s[t].remove(e), 0 == s[t].length && delete s[t]);
            }
            if (e.namespace) {
              var n = e.namespace;
              c[n] && (c[n].remove(e), 0 == c[n].length && delete c[n]);
            }
            e.dispose();
          }),
          (o.removeAllICsByNamespace = function (e) {
            var t = c[e];
            if (t) {
              t = t.clone();
              for (var n = 0; n < t.length; n++) o.removeIC(t[n]);
            }
          }),
          (o.removeAllICs = function () {
            for (var e in a) o.removeIC(a[e]);
          }),
          (o.dispose = function () {
            e(n).unbind("unload", o.dispose),
              o.removeAllICs(),
              (a = null),
              (c = null),
              (s = null),
              i && i.dispose(),
              (i = o.templates = null),
              (n.$icm = null);
          }),
          e(n).bind("unload", o.dispose);
      }
      var n = window,
        i = n.wLive,
        r = i.IC;
      (r.ICManager = t), (n.$icm = new t()), $Do.register("$icmCreated", 0, !0);
    })(window.originaljQuery || jQuery);
  }),
  define("safelinks", ["validateconfig", "jquery-1.7.2", "bsi"], function () {
    !(function (e) {
      function t(e, t) {
        var i = t && t.getAttribute("wrap");
        if (i) {
          var c = n.$Config,
            l = c.WS || {},
            u = l.SL || {},
            d = u.url;
          if (d) {
            var f,
              g = i.split(o),
              p = g.slice(s).join(o),
              h = { l: p, p: c.di, mkt: c.mkt };
            for (f = 0; s > f; f++) g[f] && (h[a[f]] = g[f]);
            t.href = d + "?" + r.serialize(h);
          }
        }
      }
      var n = window,
        i = n.$BSI,
        r = n.$Utility,
        o = "|",
        a = ["h", "o", "u", "q1", "q2", "q3", "q4", "q5"],
        s = a.length;
      i.addNavCallback(t);
    })(window.originaljQuery || jQuery);
  }),
  define("ssl", ["validateconfig", "jquery-1.7.2", "bsi"], function () {
    !(function (e) {
      function t() {
        (n = a.$Config), (i = n.Ssl || {}), (r = i.imu), (o = i.d);
      }
      var n,
        i,
        r,
        o,
        a = window,
        s = (a.$Utility, a.Debug, "http://"),
        c = "https://";
      t(),
        (a.$ssl = {
          ensureSSLImageUrl: function (e) {
            return (
              o ||
                (document.location.href.toLowerCase().startsWith(c) &&
                  e.toLowerCase().startsWith(s) &&
                  r &&
                  (e = r + e.encodeUrl())),
              e
            );
          },
          copyOutConfig: function (t) {
            (t.$Config.Ssl = {}),
              e.extend(t.$Config.Ssl, $Config.Ssl, !0),
              t.$ssl.resetCachedValues();
          },
          resetCachedValues: t,
        });
    })(window.originaljQuery || jQuery);
  }),
  define(
    "wlivenavlink",
    [
      "registernamespace",
      "pagestats",
      "validateconfig",
      "jquery-1.7.2",
      "bsi",
      "wlivecss",
      "wlivemenu",
    ],
    function () {
      !(function (e) {
        function t() {}
        function n(n, i) {
          var o = this;
          (o._id = t._getItemId()),
            (o.$obj = e(n).first()),
            (o._isDisposed = !1),
            i
              ? ((o._$a = o.$obj.children("a").first()),
                0 == o._$a.length ? (o._$a = null) : (o.id = o._$a.attr("id")),
                sutra(o._$a, "$Sutra.Shared.NavLink", !0),
                (o._$span = o.$obj.children("span:not(.is_c)").first()),
                0 == o._$span.length && (o._$span = null),
                (o._$imageStrip = o.$obj.children("span.is_c").first()),
                0 == o._$imageStrip.length && (o._$imageStrip = null),
                (o._$sep = o.$obj.children("span.c_ms").first()),
                0 == o._$sep.length && (o._$sep = null),
                (o._$rchev = o.$obj.children("span.c_rchev").first()),
                0 == o._$rchev.length && (o._$rchev = null))
              : r(o, !1);
        }
        function i(t) {
          (t._$a && 0 != t._$a.length) ||
            ((t._$a = e("<a></a>")),
            sutra(t._$a, "$Sutra.Shared.NavLink", !0),
            t.$obj.append(t._$a),
            (t._isDisposed = !1));
        }
        function r(e, t) {
          t && (e.$obj = null),
            (e._$a = null),
            (e._$span = null),
            (e._$sep = null),
            (e._$rchev = null),
            (e._$imageStrip = null);
        }
        var o = window,
          a = o.wLive.Controls,
          s = o.$edh,
          c = 0;
        (a.NavItem = t),
          (t._getItemId = function () {
            return "c_ci" + c++;
          }),
          (a.NavLink = n);
        var l = n.prototype;
        (l.setHtml = function (e) {
          var t = this;
          return (
            i(t),
            t._$a.html(e),
            sutra(t._$a, "$Sutra.Shared.NavLink", !0),
            t._$span &&
              (t._$a.detach(), t._$span.html(e), t._$span.append(t._$a)),
            t
          );
        }),
          (l.setUrl = function (e) {
            return this.setProperty("href", e);
          }),
          (l.setId = function (e) {
            var t = this;
            return (t.id = e), t.setProperty("id", e);
          }),
          (l.setProperty = function (e, t) {
            var n = this;
            return i(n), n._$a.attr(e, t), n;
          }),
          (l.enable = function () {
            var e = this;
            return (
              e._$span &&
                (s.e(e._$span[0]),
                (e._$a = e.$obj.find("a").first()),
                sutra(e._$a, "$Sutra.Shared.NavLink", !0),
                (e._$span = null)),
              e
            );
          }),
          (l.disable = function () {
            var e = this;
            return (
              e._$a &&
                (s.d(e._$a[0]), (e._$span = e.$obj.find("span").first())),
              e
            );
          }),
          (l.removeClick = function () {
            var e = this;
            return (
              e._aclickHandler &&
                e._$a &&
                e._$a.unbind("click", e._aclickHandler),
              e
            );
          }),
          (l.addClick = function (e, t) {
            var n = this;
            return (
              i(n),
              n.removeClick(),
              t || n.setUrl("#"),
              (n._aclickHandler = function (t) {
                var n;
                try {
                  n = e(t);
                } catch (i) {
                  return $WebWatson.submitFromException(i), !1;
                }
                return n;
              }),
              n._$a.click(n._aclickHandler),
              n
            );
          }),
          (l.addMousedown = function (e) {
            var t = this;
            return i(t), t._$a.mousedown(e), t;
          }),
          (l.addSeparator = function () {
            var t = this;
            return (
              t._$sep ||
                ((t._$sep = e(
                  '<span class="c_ms" role="presentation"></span>'
                )),
                t.$obj.append(t._$sep)),
              t._$sep.css("display", ""),
              t
            );
          }),
          (l.removeSeparator = function () {
            var e = this;
            return e._$sep && e._$sep.hide(), e;
          }),
          (l.addRChev = function () {
            var t = this;
            return (
              t._$rchev ||
                ((t._$rchev = e('<span class="c_rchev"></span>')),
                t.$obj.append(t._$rchev),
                t._$rchev.html(
                  $menu.createChevron($menu.chevronTypes.SmallRightDark, !0)
                )),
              t._$rchev.show(),
              t
            );
          }),
          (l.removeRChev = function () {
            var e = this;
            return e._$rchev && e._$rchev.hide(), e;
          }),
          (l.addImageStrip = function (t, n) {
            var i = this;
            return (
              i._$imageStrip ||
                ((i._$imageStrip = e(t)),
                n
                  ? i._$a.append(i._$imageStrip)
                  : (i._$imageStrip.append(" "),
                    i._$a.prepend(i._$imageStrip))),
              i
            );
          }),
          (l.dispose = function () {
            var e = this;
            e._isDisposed || (e.removeClick(), r(e, !0), (e._isDisposed = !0));
          }),
          (n.defaultOptions = {
            html: "",
            separator: !1,
            url: "#",
            id: "",
            click: null,
            mousedown: null,
            container: "<li></li>",
            imageStrip: null,
          }),
          (n.create = function (t) {
            var i = e.extend({}, n.defaultOptions, t),
              r = new n(i.container);
            return (
              r.setHtml(i.html),
              r.setUrl(i.url),
              r.setId(i.id),
              i.separator && r.addSeparator(),
              i.click && r.addClick(i.click, i.url),
              i.mousedown && r.addMousedown(i.mousedown),
              i.imageStrip && r.addImageStrip(i.imageStrip),
              r
            );
          });
      })(window.originaljQuery || jQuery);
    }
  ),
  define("navigationcollections", ["wlivenavlink"], function () {
    !(function (e) {
      function t() {
        var e = this;
        (e._isItemsHashDirty = !0),
          (e._itemsHashTable = {}),
          (e._list = []),
          (e.list = []);
      }
      function n(t, n, i, r, o) {
        function a(e) {
          s._menu ||
            (n
              ? (s._menu = s._$ul[0].binding)
              : ((r.defaultLoc = M),
                $menu.create(e, P, r) && (s._menu = s._$ul[0].binding)));
        }
        var s = this;
        s._id = C.NavItem._getItemId();
        var c = new C.MenuDataModel();
        if (((s._items = []), (s.$obj = e(t).first()), (r = r || {}), !n)) {
          var l,
            d,
            f = $Config.isLightTheme
              ? $menu.chevronTypes.SmallDownDark
              : $menu.chevronTypes.SmallDownLight,
            g = $menu.createChevron(f, !0);
          o
            ? ((l = '<span class="c_mlu">' + g + "  &nbsp;</span>"), (d = ""))
            : ((l = '<span class="c_mlu"></span>'),
              (d = '<span class="c_chev"> ' + g + "</span>"));
          var h =
            '<a href="#" class="uxfa_ml c_ml" onclick="return false">' +
            l +
            d +
            '</a><ul class="uxfa_m ' +
            $ +
            ' t_hovl"></ul>';
          i ? s.$obj.append(h) : s.$obj.html(h);
        }
        (s._$a = s.$obj.children("a.c_ml").first()),
          (s._navLink = new I(s.$obj, !0)),
          (s._$mspan = s._$a.children("span.c_mlu").first()),
          (s._$chev = s._$a.children("span.c_chev").first()),
          (s._$ul = s.$obj.children("ul")),
          0 == s._$ul.length &&
            ((s._$ul = e('<ul class="uxfa_m ' + $ + ' t_hovl"></ul>')),
            s.$obj.append(s._$ul)),
          (s.id = s._$ul.attr("id")),
          (s._menu = s._$ul[0].binding),
          p(s),
          (c._list = s._items),
          s._$a.bind("click.menu", function (e) {
            e.preventDefault(), a(e);
          }),
          s._$a.bind("mousedown.menu", a),
          sutra(s._$a, "$Sutra.Shared.MenuLink", !0),
          sutra(s._$ul, "$Sutra.Shared.MenuList", !0),
          (s._dataModel = c),
          u(s, c._list),
          (c.list = new ObservableArray(c._list));
      }
      function i() {
        var e = this;
        e.menu = {};
      }
      function r(t, i, r) {
        var o = this;
        (o._id = C.NavItem._getItemId()),
          (o._dataModel = new C.SplitMenuDataModel()),
          (o.$obj = e(t).first()),
          (o._$a = new I(o.$obj, i)),
          i
            ? (o._$sep = o.$obj.children(".c_ms"))
            : (o._$a.setHtml("&nbsp;"),
              (o._$sep = e('<span class="c_ms"> </span>')),
              o.$obj.append(o._$sep),
              o.$obj.addClass(k + " " + T)),
          (o._$menu = new n(o.$obj, i, !0, { dockEl: o.$obj.get()[0] }, r)),
          (o._dataModel.menu = o._$menu);
      }
      function o(t) {
        var n = this;
        (n._isItemsHashDirty = !0),
          (n._itemsHashTable = {}),
          (n._logo = (t && t.logo) || {
            containerWidth: "220px",
            imageStrip: "",
            text: "",
            title: "",
            url: "",
            hasPropertyText: !1,
          }),
          (n._list = []),
          (n.isLightTheme = t && t.isLightTheme),
          (n.getIndexById = function (e) {
            if (n._isItemsHashDirty)
              for (var t = 0; t < n._list.length; t++) {
                var i = n._list[t]._id,
                  r = n._list[t].id;
                (n._itemsHashTable[i] = t), (n._itemsHashTable[r] = t);
              }
            return n._itemsHashTable[e];
          }),
          (n.getItemById = function (e) {
            var t = n.getIndexById(e);
            return n._list[t];
          }),
          (n.getItemByIndex = function (e) {
            return this._list[e];
          }),
          (n._dispose = function () {
            e(n.logo).unbind(), e([n.list]).unbind(), e(n.list).unbind();
          });
      }
      function a(t, n, i) {
        var r = this;
        (r._id = C.NavItem._getItemId()),
          (r._needsToRender = !1),
          (r.$obj = e(t));
        var o = new C.CommandBarDataModel(i);
        sutra(r.$obj, "$Sutra.Shared.CommandBarControl", !0),
          (r._items = []),
          n ||
            r.$obj.html(
              '<div class="c_clogo"><a href="#"><h1><span class="c_clogoimg"></span><span class="c_clogot"></span></h1></a></div><ul class="c_cc"></ul><div class="c_cme">></div>'
            ),
          (r._$logo = r.$obj.children(".c_clogo")),
          (r._$logoImage = r._$logo.find(".c_clogoimg")),
          (r._$logoText = r._$logo.find("span.c_clogot")),
          (r._$logoLink = r._$logo.find("a")),
          (r._$ul = r.$obj.children("ul")),
          sutra(r._$ul, "$Sutra.Shared.CommandBar", !0),
          0 == r._$logoImage.length &&
            ((r._$logoImage = e('<span class="c_clogoimg"></span>')),
            r._$logoText.parent().prepend(r._$logoImage)),
          p(r, "$Sutra.Shared.CommandItem"),
          (o._list = r._items),
          (o._logo.imageStrip = r._$logoImage.html()),
          (r._dataModel = o),
          l(r._$logoText, o._logo, "text", "innerHTML"),
          l(r._$logoText, o._logo, "hasPropertyText", s, "function"),
          l(r._$logoLink, o._logo, "url", "href"),
          l(r._$logoLink, o._logo, "title", "title"),
          l(r._$logoImage, o._logo, "imageStrip", c, "function"),
          l(
            r._$logo,
            o._logo,
            "containerWidth",
            $B.IE_M6 ? "width" : "min-width",
            "style"
          ),
          u(r, o._list),
          (o.logo = new Observable(o._logo)),
          (o.list = new ObservableArray(o._list));
      }
      function s(e, t) {
        t ? e.hide() : e.show();
      }
      function c(e, t) {
        e.empty(), e.append(t);
      }
      function l(t, n, i, r, o) {
        e(n).bind("propertyChanged", function (e, n, a, s) {
          i == n &&
            ("style" == o
              ? t.css(r, a)
              : "function" == o
              ? r(t, a)
              : t.attr(r, a));
        });
      }
      function u(t, n) {
        e([n]).bind("arrayChange", function (n, i, r, o) {
          t._needsToRender || e(t).trigger("beforeRender"),
            clearTimeout(t._renderTimeout),
            (t._needsToRender = !0),
            (t._renderTimeout = setTimeout(function () {
              t._needsToRender && t.render && t.render();
            }, 500)),
            "insert" == i ? t.add(o, r) : "remove" == i && t.remove(r, !0, o);
        });
      }
      function d() {
        E || (E = setTimeout(f, 0));
      }
      function f() {
        E = 0;
        for (var e = B.length, t = 0; e > t; t++) B[t]();
        B.splice(0, e);
      }
      function g(e) {
        B.push(e);
      }
      function p(t, i) {
        var o = t._$ul.children("li");
        o.each(function () {
          var o = e(this);
          o.hasClass(k)
            ? t._items.push(new r(o, !0))
            : o.hasClass(T)
            ? o.hasClass(L) || t._items.push(new n(o, !0))
            : t._items.push(new I(o, !0)),
            i && sutra(this, i, !0);
        });
      }
      function h(e) {
        for (var t = e._items, n = 0; n < t.length; n++)
          e._$ul.append(t[n].$obj);
      }
      function v(t, n, i) {
        i || 0 == i || (i = t._items.length),
          g(function () {
            if (n.$obj) {
              var r = t._$ul.children(),
                o = r[i];
              0 != r.length && o ? e(o).before(n.$obj) : t._$ul.append(n.$obj);
              var a = n._$a;
              a.attr("role") || a.attr("role", "button");
              var s = n._$ul;
              s &&
                (a.attr("aria-expanded", "false"),
                a.attr("aria-haspopup", "true"));
              var c = n.$obj.css("display");
              ("list-item" == c || ("block" == c && $B.IE_M7)) &&
                n.$obj.css("display", ""),
                n.$obj.hasClass(T) && !n.$obj.hasClass(k) && h(n);
            }
          }),
          t._items.splice(i, 0, n),
          t._dataModel && (t._dataModel._isItemsHashDirty = !0),
          d();
      }
      function m(e, t, n) {
        t &&
          !t._isDisposed &&
          (t.$obj &&
            (t.$obj.remove(),
            e._dataModel && (e._dataModel.isItemsHashDirty = !0),
            (e._$ul = e.$obj.children("ul"))),
          n && t.dispose());
      }
      function _(e, t, n, i) {
        var r = e._items.splice(t, 1)[0];
        return (
          r._isDisposed ||
            (g(function () {
              m(e, r, n);
            }),
            d()),
          r
        );
      }
      function y(e) {
        var t = e._items;
        if (t) for (var n = 0; n < t.length; n++) t[n].dispose();
        return (e._items = []), e._$ul && e._$ul.html(""), e;
      }
      window.ObservableArray = function (e) {
        this.array = e;
      };
      var b = ObservableArray.prototype;
      (b.insert = function (t, n) {
        var i = this;
        t >= 0 &&
          t <= i.array.length &&
          e([i.array]).triggerHandler("arrayChange", ["insert", t, n]);
      }),
        (b.push = function (e) {
          var t = this;
          t.insert(t.array.length, e);
        }),
        (b.remove = function (t) {
          var n = this;
          if (t >= 0 && t < n.array.length) {
            var i = n.array[t];
            e([n.array]).triggerHandler("arrayChange", ["remove", t, i]);
          }
        }),
        (b.clear = function () {
          for (var e = this; e.array.length; ) e.remove(e.array.length - 1);
        }),
        (b.length = function () {
          return this.array.length;
        }),
        (window.Observable = function (e) {
          this.obj = e;
        });
      var w = Observable.prototype;
      w.setProperty = function (t, n) {
        var i = this,
          r = i.obj[t];
        n != r &&
          ((i.obj[t] = n), e(i.obj).trigger("propertyChanged", [t, n, r]));
      };
      var S = window,
        C = S.wLive.Controls,
        I = C.NavLink,
        $ = "c_m",
        k = "c_sm",
        L = "c_cmore",
        T = "c_mcp",
        M = 0,
        P = 6;
      (C.MenuDataModel = t), (C.Menu = n);
      var D = n.prototype;
      (D.makeSubMenu = function () {
        var e = this,
          t = $menu.chevronTypes.SmallRightDark;
        return (
          $B.rtl && (t = $menu.chevronTypes.SmallLeftDark),
          e._$chev.html(" " + $menu.createChevron(t, !0)),
          e
        );
      }),
        (D.setHtml = function (e) {
          var t = this;
          return t._$mspan.html(e), t;
        }),
        (D.setId = function (e) {
          var t = this;
          return t._$ul.attr("id", e), (t.id = e), t;
        }),
        (D.getDataModel = function () {
          return this._dataModel;
        }),
        (D.getMenu = function () {
          return this._menu;
        }),
        (D.getLink = function () {
          return this._navLink;
        }),
        (D.add = D.push =
          function (t, n, i) {
            var r = this;
            return (
              v(r, t, n),
              i ||
                t._$a.hasClass("c_ml") ||
                e(t._$a).bind("click", $menu.closeAll),
              r._menu && r._menu.update(),
              r
            );
          }),
        (D.remove = function (t, n, i) {
          var r = this,
            o = _(r, t, n, i);
          return (
            e(o._$a).unbind("onclick", $menu.closeAll),
            r._menu && r._menu.update(),
            o
          );
        }),
        (D.clear = function () {
          var e = this;
          return y(e), e._menu && e._menu.update(), e;
        }),
        (D.dispose = function () {
          var e = this;
          e._$a.unbind(".menu"), e.clear(), e._menu && e._menu.dispose();
        }),
        (n.defaultOptions = {
          html: "",
          id: "",
          subMenu: !1,
          container: '<li class="' + T + '"></li>',
          menuParams: null,
          linkId: "",
        }),
        (n.create = function (t) {
          var i = e.extend({}, n.defaultOptions, t),
            r = new n(i.container);
          return (
            r.setHtml(i.html),
            r.setId(i.id),
            r._$a.attr("id", i.linkId),
            i.subMenu && r.makeSubMenu(),
            r
          );
        }),
        (C.SplitMenuDataModel = i),
        (C.SplitMenu = r);
      var A = r.prototype;
      (A.getDataModel = function () {
        return this._dataModel;
      }),
        (A.dispose = function () {
          var e = this;
          e._$menu && e._$menu.dispose();
        }),
        (A.setProperty = function (e, t) {
          var n = this;
          return n.$obj.attr(e, t), n;
        }),
        (A.getMenu = function () {
          return this._$menu;
        }),
        (A.getLink = function () {
          return this._$a;
        }),
        (r.defaultOptions = {
          id: "",
          linkId: "",
          container: "<li></li>",
          useChevronAsText: !0,
        }),
        (r.create = function (t) {
          var n = e.extend({}, r.defaultOptions, t),
            i = new r(n.container, !1, n.useChevronAsText);
          return i.setProperty("id", n.id), i._$a.setId(n.linkId), i;
        }),
        (C.CommandBarDataModel = o);
      o.prototype;
      C.CommandBar = a;
      var x = a.prototype;
      (x.add = x.push =
        function (e, t) {
          var n = this;
          return sutra(e.$obj, "$Sutra.Shared.CommandItem", !0), v(n, e, t), n;
        }),
        (x.remove = function (e, t, n) {
          return _(this, e, t, n);
        });
      var N;
      (x.addLightHover = function () {
        this.$obj.addClass("c_clih");
        var e = this.$obj.parent();
        e.hasClass("c_hcnlto") && (e.removeClass("c_hcnlto"), (N = !0));
      }),
        (x.removeLightHover = function () {
          N
            ? (this.$obj.parent().addClass("c_hcnlto"), (N = !1))
            : this.$obj.removeClass("c_clih");
        }),
        (a.defaultOptions = {
          container: '<div class="c_c c_cbb c_ccptc"></div>',
        }),
        (a.create = function (t) {
          var n = e.extend({}, a.defaultOptions, t),
            i = new a(n.container);
          return i;
        }),
        (x.render = function () {
          var t = this;
          clearTimeout(t._renderTimeout),
            e(t).trigger("afterRender"),
            (t._needsToRender = !1);
        }),
        (x.getDataModel = function () {
          var e = this;
          return e._dataModel;
        }),
        (x.dispose = function () {
          for (var e = this, t = 0, n = e._items.length; n > t; t++)
            m(e, e._items[t], !0);
          e._dataModel._dispose();
        }),
        (x.get = D.get =
          function (e) {
            return this._items[e];
          }),
        (x.count = D.count =
          function () {
            return this._items.length;
          }),
        (x.clear = function () {
          var e = this;
          return y(e), e;
        });
      var E,
        B = [];
    })(window.originaljQuery || jQuery);
  }),
  define("sharedlapsetimer", ["csiperf"], function () {
    !(function () {
      window.$CSIPerf.lapse.push({ s: "sjs", t: new Date().getTime() });
    })();
  }),
  define(
    "headerhelper",
    [
      "jquery-1.7.2",
      "registernamespace",
      "pagestats",
      "baseutil",
      "domutils",
      "wliveimagestrip",
      "wlivecss",
      "wlivemenu",
      "csiperf",
      "date",
      "pwcinitializer",
      "icmanager",
      "safelinks",
      "ssl",
      "navigationcollections",
      "sharedlapsetimer",
    ],
    function () {
      !(function (e) {
        function t(e) {
          return (
            (e = e || _ge("c_h_ttl")),
            '<div><ul class="c_h_ttl">' +
              e.innerHTML +
              '</ul><div class="c_clr"></div></div>'
          );
        }
        function n() {
          var n = wLive.Controls.Notifications;
          if (n) {
            var r = t(),
              o = n.createFlyout({
                title: "",
                content: r,
                anchor: _ge("c_clogoc"),
                options: {
                  moreCss: "c_headerBar",
                  bubble: 6,
                  maxWidth: g,
                  animation: {
                    entranceType: "slidefadein2",
                    entranceArguments: [{ left: 0, top: -20, override: !0 }],
                    exitType: "slidefadeout2",
                    exitArguments: [{ left: 0, top: -20 }],
                  },
                },
              });
            n.getQueue().start(),
              o.show(),
              e(o).bind("aftershow", function () {
                var t = e(".c_headerBar .UserContent div")[0];
                i(e(t).find("a"), o),
                  l.$Sutra &&
                    $Sutra.Shared &&
                    $Sutra.Shared.HeaderTiles &&
                    sutra(t, "$Sutra.Shared.HeaderTiles");
              });
          }
        }
        function i(t, n) {
          e(document)
            .on("mousedown", ".c_headerBar", function (t) {
              return e(t.srcElement).parents("a").addClass("pressed"), !1;
            })
            .on("mouseup", "html", function (t) {
              e(".c_headerBar a").removeClass("pressed");
            }),
            t.each(function () {
              var t = e(this);
              ae(t, t.attr("id")),
                t.click(function () {
                  n && n.dismiss();
                });
            }),
            l.$Sutra &&
              $Sutra.Shared &&
              $Sutra.Shared.HeaderTile &&
              t.each(function () {
                sutra(this, "$Sutra.Shared.HeaderTile");
              });
        }
        function r(e) {
          13 == e.which && (c = "keydown" == e.type);
        }
        function o() {
          var e = window.location.host.split("."),
            t = "." + e[e.length - 2] + ".com",
            n = new Date(),
            i = $HIC,
            r = f.getCookie(we, 1) || "",
            o = r.split("|");
          n.setDate(n.getDate() + i.e),
            o[0] != i.c && (o = []),
            (o[0] = i.c || o[0] || ""),
            (o[1] = i.m || 0 === i.m ? i.m : o[1] || ""),
            (o[2] = i.l || 0 === i.l ? i.l : o[2] || ""),
            (o[3] = i.cl || o[3] || ""),
            (o[4] = i.dg || 0 === i.dg ? i.dg : o[4] || ""),
            (o[5] = i.scl || o[5] || ""),
            o[0]
              ? f.setCookie(we, o.join("|"), t, 0, n, 1)
              : f.deleteCookie(we, t);
        }
        var a,
          s,
          c,
          l = window,
          u = l.$Config,
          d = l.$Do,
          f = l.$Cookie,
          g = (e(l), 642),
          p = [],
          h = "SelectClick.MetroHeader.Nav",
          v = "c_h_mail",
          m = "c_h_ppl",
          _ = "c_h_cal",
          y = "c_h_sd",
          b = "c_h_dfe",
          w = "c_h_dfi",
          S = "c_h_wd",
          C = "c_h_xl",
          I = "c_h_ppt",
          $ = "c_h_on",
          k = "c_h_oo",
          L = "c_h_sw",
          T = "c_clogot",
          M = "c_clogoc",
          P = "c_hiconm",
          D = "c_hiconu",
          A = "c_hiconc",
          x = "c_coh",
          N = "c_cof",
          E = "c_memenu",
          B = "c_melink",
          W = "c_himla",
          R = "c_himld",
          F = "c_memenuic",
          H = "c_profile",
          O = "c_hli",
          j = "c_wimnetsub",
          U = "c_signout",
          Q = "c_wimneton_FB",
          X = "c_wimnetoff_FB",
          q = {};
        (q[v] = "Mail"),
          (q[m] = "People"),
          (q[_] = "Calendar"),
          (q[y] = "SkyDrive"),
          (q[b] = "DogExt"),
          (q[w] = "DogInt"),
          (q[S] = "Word"),
          (q[C] = "Excel"),
          (q[I] = "PowerPoint"),
          (q[$] = "OneNote"),
          (q[k] = "Office"),
          (q[L] = "Sway"),
          (q[T] = "Home"),
          (q[M] = "Switcher"),
          (q[P] = "webIM"),
          (q[D] = "undo"),
          (q[A] = "gear"),
          (q[x] = "help"),
          (q[N] = "feedb"),
          (q[B] = "me"),
          (q[W] = "presence"),
          (q[R] = "presence"),
          (q[F] = "c_memenuic"),
          (q[H] = "profile"),
          (q[O] = "account"),
          (q[j] = "3pchatm"),
          (q[U] = "signout"),
          (q[Q] = "fbchat"),
          (q[X] = "fbchat");
        var z = e("#c_signin"),
          G = function () {
            for (var t = 0; t < p.length; t++) p[t].unbind("click");
            z.unbind(), e(".c_clogo").unbind(), e(l).unbind("unload", G);
          };
        e(".c_clogo a").attr("onclick", ""), (l.$header = {});
        var V = 0;
        e("#c_clogoc").bind("click", function () {
          return (
            window.require ? window.require(["flyout", "doregister"], n) : n(),
            l.top.$HeaderWebIM &&
              l.top.$HeaderWebIM.setUnreadCountEl(_ge("#c_murc")),
            !1
          );
        }),
          e("#c_cof").bind("click", function () {
            l.require &&
              require([
                "feedbackdialoghelper",
                "feedbackdialog",
                "feedbackdialog.html",
              ], function () {});
          }),
          e("#c_clogoc").bind({ keydown: r, keyup: r }),
          (l.$header.showLoading = function () {
            if (!a) {
              var t = _ge("c_header"),
                n = t && t.firstChild;
              n &&
                ((a = e(
                  $f.createLoading(
                    0,
                    $f.loadingType.flying,
                    "100%",
                    "4px",
                    0,
                    "#fff"
                  )
                )),
                a.addClass("c_h_flyingDots"),
                n.appendChild(a.get(0)));
            }
            V++, $f.showLoading(a);
          }),
          (l.$header.hideLoading = function () {
            V--, (V = 0 > V ? 0 : V), a && !V && $f.hideLoading(a);
          }),
          (l.$header.getDummyHeader = function () {
            if (!s) {
              (s = document.createElement("ul")),
                (s.className = "c_mcp t_hdbg c_c");
              var e = document.createElement("li");
              (e.style.listStyle = "none"),
                s.appendChild(e),
                document.body.appendChild(s);
            }
            return s;
          });
        var J = function (e) {
          if (l.$PF) {
            var t = encodeURIComponent($PF.getCurrentUrl()),
              n = $f.replaceQs(z.attr("href"), "wreply", t);
            return $BSI.navigateTo(n, "_top"), $f.cancelEvent(e);
          }
          return !0;
        };
        z.bind("click", J), e(l).bind("unload", G);
        var K,
          Y,
          Z,
          ee,
          te,
          ne = [],
          ie = function (e, t, n) {
            this.execute = function (i) {
              i.href.indexOf("?rru=home") > -1
                ? (i.href = i.href.replace(t, n))
                : (i.href = i.href.replace(e, n));
            };
          },
          re = function (e, t, n) {
            this.execute = function (i) {
              var r = i.href;
              if (
                r.indexOf(t) > -1 &&
                r.indexOf("#") < 0 &&
                !r.match(/[\?|&|\/]cid/)
              )
                if (n) {
                  var o = "." + u.d,
                    a = o + "/" + e;
                  "profile" == t.toLowerCase() &&
                    r.indexOf("/home") > 0 &&
                    (o += "/home"),
                    (i.href = r.replace(o, a));
                } else {
                  var s = "cid=" + e,
                    c = "?";
                  r.indexOf(c) > -1 && (c = "&"), (i.href = r + c + s);
                }
            };
          },
          oe = function (e, t) {
            this.execute = function (n) {
              e && n.href.indexOf("?rru=inbox") > -1
                ? (n.href = e)
                : t && n.href.indexOf("?rru=contacts") > -1 && (n.href = t);
            };
          },
          ae = function (e, t, n) {
            e &&
              Boolean(q[t]) &&
              (e.bind("click", function () {
                var e = q[t];
                Boolean(n) && (e += n),
                  $BSI.reportEvent(h, { MetroHeaderNav: e });
              }),
              p.push(e));
          };
        l.$header.reportBSIMenu = ae;
        var se = function (t) {
          var n = t.getAttribute("hid");
          Boolean(q[n]) && ae(e(t), n, "A");
        };
        d.register("$Header.MenuBind", se);
        var ce = function () {
          ae(e("#c_h_theme_m_ul"), E);
        };
        d.register("$Header.ThemesMenuBind", ce),
          u.Header &&
            ((K = u.Header.MailLink),
            (Y = u.Header.ContactsLink),
            (Z = u.Header.HotmailDomain),
            (te = u.Header.OldHomeDomain),
            (ee = u.Header.OldHotmailDomain));
        var le = Z;
        K || Y
          ? (ne[ne.length] = new oe(K, Y))
          : le && (ne[ne.length] = new ie(ee, te, Z));
        var ue = l.$HIC && $HIC.c;
        ue &&
          ue.length > 0 &&
          ((ne[ne.length] = new re("cid-" + ue, "profile", !0)),
          (ne[ne.length] = new re(ue, "skydrive.")));
        var de = [],
          fe = [],
          ge = l._ge("c_header");
        if (ge) {
          var pe = $css.getCN("c_hleft", "div", ge)[0];
          pe && (fe = pe.getElementsByTagName("a"));
        }
        for (var he = fe.length - 1; he >= 0; he--) {
          var ve = fe[he];
          de.push(ve),
            ae(e(ve), ve.id),
            l.$Sutra &&
              $Sutra.Shared &&
              $Sutra.Shared.HeaderLink &&
              sutra(ve, "$Sutra.Shared.HeaderLink");
        }
        ae(e("#c_clogot"), "c_clogot"),
          ae(e("#c_clogoc"), "c_clogoc"),
          ae(e("#c_hiconu"), "c_hiconu"),
          ae(e("#c_hiconm"), "c_hiconm"),
          ae(e("#c_hiconc"), "c_hiconc");
        for (
          var me,
            _e,
            ye =
              (e("#c_hmc")
                .find("a")
                .each(function () {
                  de.insert(0, this);
                }),
              de.length - 1);
          ye >= 0;
          ye--
        ) {
          (me = de[ye]),
            !me.target &&
              (me.href.indexOf("//g.live") > -1 || me.href.indexOf(u.sd) < 0) &&
              (me.target = "_top");
          for (var be = ne.length - 1; be >= 0; be--)
            (_e = ne[be]), _e && _e.execute(me);
        }
        if (l.$HIC) {
          var we = "HIC";
          d.register("$Header.UpdateCookie", o);
        }
      })(window.originaljQuery || jQuery);
    }
  ),
  define("mecontrol", ["headerhelper"], function () {
    !(function (e) {
      function t() {
        function t() {
          e(n).unbind(".me"), d && e(d).unbind("click", r);
        }
        function r(e) {
          $menu.closeCurrent();
          var t = n.$Logout;
          t && t.doLogout && t.doLogout(e);
        }
        var o,
          a,
          s,
          c,
          l,
          u,
          d,
          f = this,
          g = !1,
          p = !1,
          h = "c_memenu",
          v = "c_meic",
          m = "c_melinkspan",
          _ = "c_melink";
        e(n).bind("unload.me", t),
          (d = _ge("c_signout")),
          d && e(d).bind("click", r),
          (f.copyAndInitializeMenu = function (t) {
            t = t || (n.$PF && n.$PF.getAppFrameWindow()) || window;
            var i = _ge(h),
              r = t._ge(h);
            u = t._ge(m);
            var o = !(n == t || (i && i.initialized && r.isCopied));
            if ((o && (g = !1), !g && t.$f)) {
              var a = _ge(m);
              if (((l = i || r), o)) {
                i && (e(i).remove(), (l = r));
                var s = _ge(_);
                s && e(s).remove();
                var d = $header.getDummyHeader().firstChild,
                  p = t.$f.getLocation(t._ge(m), 1, 1),
                  v = document.createElement("ul"),
                  y = document.createElement("a");
                (v.innerHTML = l.innerHTML),
                  (v.className = l.className),
                  (v.id = l.id),
                  (v.initialized = 1),
                  (r.isCopied = 1),
                  (y.style.position = "absolute"),
                  (y.style.top = p.bottom + "px"),
                  (y.style.left = ($B.rtl ? p.left : p.right) + "px"),
                  (y.style.height = 0),
                  (y.style.padding = 0),
                  (y.id = _),
                  (l = v),
                  (c = y),
                  d.appendChild(y),
                  d.appendChild(v),
                  e(n).bind("resize.me", function () {
                    v.initialized = 0;
                  });
              } else
                i &&
                  a &&
                  i.parentNode != a.parentNode &&
                  ($css.add(i, "uxfa_m c_m t_hovl"),
                  a.parentNode.insertBefore(i, a.nextSibling),
                  (c = _ge(_)));
              f.init(), $Do.when("$HeaderWebIM.Initialize");
            }
          }),
          (f.openMenu = function (e) {
            f.copyAndInitializeMenu(),
              g &&
                (l.binding
                  ? l.binding.toggleState()
                  : $menu.create(e, 0, {
                      sourceEl: c,
                      menuEl: l,
                      pressedStateEl: u,
                    }));
          }),
          (f.createMeICs = function () {
            if (!p) {
              p = !0;
              var t = n.$icm,
                r = i.cid,
                o = _ge(v);
              if (o) {
                var a = t.createICForPerson("MeControlMedium", r);
                if (a) {
                  var s = e(o);
                  s.html(a.render()), a.activate();
                  var c = s.find("img");
                  c.attr("title", s.attr("title"));
                }
              }
              var l = _ge("c_memenuic");
              if (l) {
                var u = t.createICForPerson("MeControlXXL", r);
                if (u) {
                  var d = e(l);
                  d.html(u.render()), u.activate();
                  var f = d.find("img");
                  f.attr("title", d.attr("title"));
                }
              }
            }
          }),
          (f.init = function () {
            g ||
              ((o = e("#c_memenu")),
              (a = e("#c_memenu_right")),
              (s = e("#c_memenu_left")),
              $Do.when("$ic", 0, f.createMeICs),
              n.$header &&
                (n.$header.reportBSIMenu(e("#c_himla"), "c_himla"),
                n.$header.reportBSIMenu(e("#c_himld"), "c_himld"),
                n.$header.reportBSIMenu(e("#c_memenuic"), "c_memenuic"),
                n.$header.reportBSIMenu(e("#c_profile"), "c_profile"),
                n.$header.reportBSIMenu(e("#c_hli"), "c_hli"),
                n.$header.reportBSIMenu(e("#c_wimnetsub"), "c_wimnetsub"),
                n.$header.reportBSIMenu(e("#c_signout"), "c_signout")),
              sutra(_ge(h), "$Sutra.Shared.MeControlMenu"),
              sutra(_ge("c_profile"), "$Sutra.Shared.Profile"),
              sutra(_ge("c_hli"), "$Sutra.Shared.Account"),
              sutra(_ge("c_signout"), "$Sutra.Shared.SignOut"),
              (g = !0));
          }),
          $Do.when("$icm", 0, f.createMeICs);
      }
      var n = window,
        i = n.$Config,
        r = _ge("c_melink");
      r &&
        ((_$meLink = e(r)),
        _$meLink.mouseover(function () {
          window.top.$MeControl.copyAndInitializeMenu(n);
        }),
        _$meLink.focus(function () {
          window.top.$MeControl.copyAndInitializeMenu(n);
        }),
        n.$header.reportBSIMenu(_$meLink, "c_melink"),
        sutra(r, "$Sutra.Shared.MenuLink")),
        (n.$MeControl = new t());
    })(window.originaljQuery || jQuery);
  }),
  define("footer", ["mecontrol"], function () {
    !(function (e) {
      function t() {
        var e = null;
        if (w.XMLHttpRequest) e = new XMLHttpRequest();
        else if (w.ActiveXObject)
          try {
            e = new w.ActiveXObject("Microsoft.XMLHTTP");
          } catch (t) {}
        return e;
      }
      function n() {
        var n = t(),
          i = r("LanguagePicker.Client.Title"),
          o =
            '<div class="loadingArea"><table class="loadingTable"><tr><td class="loadingSpinner" id="lpSpinner"></td><td class="lpLoading">' +
            r("LanguagePicker.Client.Loading") +
            "</td></tr></table></div>",
          c = wLive.Controls.Notifications,
          l = c.createFlyout({
            title: i,
            content: o,
            anchor: _ge("uxp_ftr_link_language"),
            buttons: { action: r("LanguagePicker.Client.Save") },
            options: {
              dismissOnButtonClick: !1,
              moreCss: "languagePickerFlyout",
            },
          });
        if (
          ((_ = l),
          e(l).bind({
            "buttonclick.flyout": function (n, i, o) {
              if ("action" === o) {
                var s = e(l.content()).find("form"),
                  c = s[0].elements,
                  u = c.language.value,
                  d = c.canary.value;
                e(l.content())
                  .find(".UserContent")
                  .html(
                    '<div class="loadingArea"><table class="loadingTable"><tr><td class="loadingSpinner" id="lpSpinner"></td><td class="lpLoading">' +
                      r("LanguagePicker.Client.Saving") +
                      "</td></tr></table></div>"
                  );
                if ((e(".languagePickerFlyout button.default").hide(), w.$f)) {
                  var f = e(
                    $f.createLoading(0, $f.loadingType.spinning, "25px", "25px")
                  );
                  e("#lpSpinner").append(f), $f.showLoading(f);
                }
                var g = t();
                g &&
                  ((g.onreadystatechange = function () {
                    if (4 == g.readyState && 200 == g.status)
                      if ((l.dismiss(), w.$PF))
                        try {
                          w.top.location = w.$PF.getCurrentUrl();
                        } catch (e) {}
                      else {
                        var t = g.responseText,
                          n = w.top.location.href.toString(),
                          i = $f.replaceQs(n, "mkt", t);
                        try {
                          (w.top.location.href = i),
                            -1 != n.indexOf("#") && w.top.location.reload();
                        } catch (e) {}
                      }
                    else
                      4 == g.readyState &&
                        200 != g.status &&
                        (l.dismiss(), a(B.saving));
                  }),
                  g.open(
                    "POST",
                    "/handlers/languagesave.mvc?canary=" +
                      encodeURIComponent(d) +
                      "&lang=" +
                      u,
                    !0
                  ),
                  g.send("canary=" + encodeURIComponent(d) + "&lang=" + u));
              }
            },
            "beforedismiss.flyout": function (t, n, i) {
              e(document.body).toggleClass(M, !1);
            },
          }),
          e(document.body).toggleClass(M, !0),
          l.show().then(function (e) {}),
          c.getQueue().start(),
          w.$f)
        ) {
          var u = e(
            $f.createLoading(0, $f.loadingType.spinning, "25px", "25px")
          );
          e("#lpSpinner").append(u), $f.showLoading(u);
        }
        return (
          n &&
            ((n.onreadystatechange = function () {
              4 == n.readyState && 200 == n.status
                ? s(n.responseText)
                : 4 == n.readyState &&
                  200 != n.status &&
                  (l.dismiss(), a(B.loading));
            }),
            n.open("GET", "/handlers/languagepicker.mvc", !0),
            n.send()),
          !1
        );
      }
      function i() {
        return (
          window.require ? window.require(["flyout", "doregister"], n) : n(), !1
        );
      }
      function r(e) {
        var t = "";
        return w.GetString && (t = w.GetString("live.shared.strings." + e)), t;
      }
      function o() {
        var e = "";
        e = r(
          W === B.loading
            ? "LanguagePicker.Client.Error.Loading"
            : "LanguagePicker.Client.Error.Saving"
        );
        var t = wLive.Controls.Notifications,
          n = t.createTopBar({
            content: e,
            dismissalMode: "Explicit",
            buttons: { action: r("LanguagePicker.Client.Close") },
          });
        n.show(), t.getQueue().start();
      }
      function a(e) {
        return (
          (W = e),
          window.require
            ? window.require(["notificationbar", "doregister"], o)
            : o(),
          !1
        );
      }
      function s(t) {
        e(_.content())
          .find(".UserContent")
          .html(
            '<div><form name="langPicker" action="/handlers/languagesave.mvc" method="POST">' +
              t +
              "</form></div>"
          );
        e(".languagePickerFlyout button.default").show();
        var n = e(".Flyout.languagePickerFlyout");
        n.attr("aria-labelledby", "uxp_ftr_link_language"),
          n.attr("aria-label", r("LanguagePicker.Client.Title"));
      }
      function c(e, t, n) {
        return (N.style.display = t), n ? ((e.returnValue = !1), !1) : !0;
      }
      function l(e) {
        return c(e, "none", !0);
      }
      function u(e) {
        return c(e, "", !0);
      }
      function d(t, n) {
        return t && (t.id === n || d(e(t).parent(), n));
      }
      function f(e) {
        return "" !== N.style.display || d(e.target, A.id)
          ? !0
          : c(e, "none", !1);
      }
      function g() {
        clearTimeout(v), (v = setTimeout(C.adjustFooter, 50));
      }
      function p() {
        var t = D[e(this).attr("id")];
        t && $BSI.reportEvent(P, { FooterNav: t });
      }
      function h(e) {
        w.$Sutra &&
          $Sutra.Shared &&
          $Sutra.Shared.FooterLink &&
          sutra(e, "$Sutra.Shared.FooterLink");
      }
      var v,
        m,
        _,
        y,
        b,
        w = window,
        S = $Config,
        C = (w.$footer = {}),
        I = _ge("uxp_ftr_control"),
        $ = e("#m_wf"),
        k = e("#m_wh"),
        L = "uxp_ftr_ff",
        T = k.height(),
        M = "langPickerVisible";
      S.wla &&
        $Network.fetchScript(
          $Config.wla,
          function () {},
          "window.live.shared.strings.languagepicker",
          "Gfx_JS_WLiveStr_Download",
          "Gfx"
        ),
        $.length || ($ = e(I).parent());
      var P = "SelectClick.Footer.Nav",
        D = {};
      (D.uxp_ftr_link_legal = "Terms"),
        (D.uxp_ftr_link_privacy = "Privacy"),
        (D.uxp_ftr_link_developers = "Dev"),
        (D.uxp_ftr_link_intl1 = "Intl"),
        (D.uxp_ftr_link_custom3 = "CoB1"),
        (D.uxp_ftr_link_custom4 = "CoB2"),
        (D.uxp_ftr_link_abuse = "Abuse"),
        (D.uxp_ftr_link_language = "Lang");
      var A = w._ge("uxp_ftr_control_mini"),
        x = w._ge("uxp_ftr_hidechevron"),
        N = w._ge("uxp_ftr_control_cc"),
        E = w._ge("uxp_ftr_link_language"),
        B = { loading: 0, saving: 1 },
        W = -1;
      (C.dispose = function () {
        A && (e(document).unbind("click", f), e(A).unbind(), e(x).unbind()),
          e(E).unbind(),
          e("#uxp_ftr_control a").unbind(".ftr"),
          e(w).unbind("unload", C.dispose),
          e(w).unbind("resize", g),
          e(document).unbind(".footerResize");
      }),
        (C.pageContentDiv = _ge("c_content") || _ge("BelowHeader")),
        C.pageContentDiv ||
          (C.pageContentDiv = $.prev(".MainLayoutIndented")[0]),
        (C.adjustFooter = function () {
          var t = C.pageContentDiv;
          if (I && t) {
            var n = $f.clientHeight(),
              i = t.scrollHeight;
            if (!y || y != n || b != i) {
              (y = n),
                (b = i),
                (m = $.outerHeight()),
                e(C).trigger("beforeResize"),
                (i = t.scrollHeight);
              var r = i + T;
              $.hasClass(L) && (r += m),
                r < $f.docHeight(!0) ? $.addClass(L) : $.removeClass(L),
                e(C).trigger("afterResize");
            }
          }
        }),
        A &&
          (e(document).bind("click", f),
          e(A).bind("click", u),
          e(x).bind("click", l)),
        e("#uxp_ftr_control a").each(function () {
          var t = this;
          e(t).bind("click.ftr", p), h(t);
        });
      var R = _ge("uxp_ftr_link_mobile");
      if (
        (R &&
          e(R).bind("click", function () {
            try {
              $Cookie.setCookie($Config.bpcc, "false", $Config.sd),
                window.open($Config.fml, "_top");
            } catch (e) {}
          }),
        h(_ge("uxp_ftr_link_trademark")),
        S.ff &&
          ($.css("padding-top", 0),
          e(w).bind("resize", g),
          e(document).bind({
            "keydown.footerResize": g,
            "mousedown.footerResize": g,
            "mousewheel.footerResize": g,
            "DOMMouseScroll.footerResize": g,
          }),
          C.adjustFooter()),
        (!$Config.LP || !$Config.LP.bypassLanguageFlyout) && E)
      ) {
        var F = e(E);
        F.attr("aria-haspopup", "true"),
          F.attr(
            "aria-label",
            r("LanguagePicker.Client.LanguageLinkAriaLabel")
          ),
          F.attr("tabindex", "0"),
          F.attr("role", "button"),
          (E.href = ""),
          F.bind("click", i);
      }
      e(w).bind("unload", C.dispose);
    })(window.originaljQuery || jQuery);
  }),
  define("leftnav", ["footer"], function () {
    !(function (e) {
      function t() {
        if (v.length) {
          if (
            ((c = e(f.$footer)),
            (l = e("#uxp_ftr_control")),
            (s = _ge("c_base")),
            e(f).bind("unload.leftNav", n),
            e(".c_n .c_gl").bind("click", i),
            h)
          )
            d = e("#" + h);
          else {
            var t = e(".c_n .active > a");
            d = t.length ? t : e(".c_n .active > .link");
          }
          d &&
            ((u = d.hasClass("c_gl")
              ? d.siblings("ul")
              : e(d.parents("ul")[0])),
            p.AutoExpand && u.show(),
            d.parent().addClass("active"),
            d.parents("ul").show()),
            p.FullHeight &&
              (c.bind("beforeResize.leftNav", r),
              c.bind("afterResize.leftNav", o),
              g.adjustHeight()),
            v.find("a").bind("dragstart.ln", $f.cancelEvent);
        }
      }
      function n() {
        e(f).unbind(".leftNav"),
          e(c).unbind(".leftNav"),
          e(".c_n .c_gl").unbind(),
          v.find("a").unbind(".ln");
      }
      function i() {
        var t = e(this);
        if (!t.attr("href")) {
          var n = t.siblings("ul");
          u || (u = n),
            u[0] == n[0] ? u.toggle() : (u.hide(), n.show(), (u = n));
        }
      }
      function r() {
        v.css("height", "auto");
      }
      function o() {
        clearTimeout(a), (a = setTimeout(g.adjustHeight, 100));
      }
      var a,
        s,
        c,
        l,
        u,
        d,
        f = window,
        g = (f.$leftNav = {}),
        p = $Config.LeftNav || {},
        h = p.ActiveLinkId,
        v = e("#c_ln"),
        m = parseInt(v.css("padding-top"));
      (g.adjustHeight = function () {
        if (s && v.length) {
          var e = s.scrollHeight - l.height() - m;
          v.css("height", e + "px");
        }
      }),
        t();
    })(window.originaljQuery || jQuery);
  }),
  define("collapsing", ["leftnav"], function () {
    !(function (e) {
      var t = window,
        n = 0,
        i = 6;
      t.CollapsingMenu = function (t, r, o, a, s, c, l, u) {
        function d() {
          var e;
          if (l) e = l();
          else {
            var t,
              n = C ? c.previousSibling : c;
            n &&
              ((t = $B.ltr
                ? o.parentNode.offsetWidth + f(o.parentNode) <
                  n.offsetWidth + f(n) + s + 20
                : f(o.parentNode) > f(n) - (s + 20)),
              (e =
                (o.childNodes.length > m && t) ||
                S.offsetTop < n.offsetTop - n.offsetHeight));
          }
          return e;
        }
        function f(e) {
          for (
            var t = e.offsetLeft;
            "body" != e.nodeName.toLowerCase() &&
            "html" != e.nodeName.toLowerCase() &&
            (e = e.offsetParent);

          )
            t += e.offsetLeft;
          return t;
        }
        function g() {
          var e = !1,
            t = o.lastChild.previousSibling;
          return t && (p(t, !0), w.insertBefore(t, w.firstChild), (e = !0)), e;
        }
        function p(t, r) {
          var o = e(t),
            a = o.find("a.c_ml")[0],
            s = a && a.menu;
          if (o.hasClass("c_sm"))
            r
              ? (s && s.deactivate(),
                o.children("a").hide(),
                o.children("ul").css("visibility", ""),
                o
                  .find("ul li:last-child")
                  .append('<span class="c_ms"> </span>'))
              : (s && s.activate(),
                o.children("a").css("display", ""),
                o.find("ul li:last-child .c_ms").remove());
          else if (o.children(".c_m").length > 0) {
            var c = o.find("span.c_chev");
            if (c.length) {
              var l = r ? b : y;
              c[0].innerHTML = " " + l;
            }
            s && (r ? s.convertToSubMenu(i) : s.convertFromSubMenu(n));
          }
        }
        var h = this,
          v = t,
          m = r,
          _ = u
            ? $menu.chevronTypes.SmallDownLight
            : $menu.chevronTypes.SmallDownDark,
          y = $menu.createChevron(_, !0),
          b =
            $B.rtl && $B.IE_M6
              ? $menu.createChevron($menu.chevronTypes.SmallLeftDark, !0)
              : $menu.createChevron($menu.chevronTypes.SmallRightDark, !0),
          w = o.lastChild.childNodes[1],
          S = o.firstChild,
          C = !1;
        c || ((c = w.parentNode), (C = !0)),
          (h.updateMaxItems = function (e) {
            v = e;
          }),
          (h.updateMinItems = function (e) {
            m = e;
          }),
          (h.redraw = function (t, n) {
            var i = $css.getCN("c_collRem", "a", w)[0];
            if (i) {
              var r = i.parentNode;
              r.parentNode.removeChild(r);
            }
            for (
              var s = o.childNodes.length - 1;
              v > s && 0 != w.childNodes.length;

            )
              p(w.firstChild, !1),
                o.insertBefore(w.firstChild, o.lastChild),
                s++;
            for (; s > v; ) g(), s--;
            for (w.parentNode.style.display = a; !n && d() && g(); );
            var l = e(w);
            l.show();
            var u = l.children();
            if (0 === u.filter(":visible").length)
              w.parentNode.style.display = "none";
            else {
              var f = C;
              (w.parentNode.style.display = a),
                (c = w.parentNode),
                (C = !1),
                d() && g(),
                (C = f);
            }
            w.binding && w.binding.update();
          });
      };
    })(window.originaljQuery || jQuery);
  }),
  define("wlivecommandbar", ["collapsing"], function () {
    !(function (e) {
      function t() {
        clearTimeout(A), (A = setTimeout(n, 100));
      }
      function n() {
        (h = 0), e(m).trigger(S);
      }
      function i() {
        var t = L - e("#c_cb0 .c_cme").outerWidth();
        e("#c_cb0 .c_cc").css("padding-" + M, t + "px"), e(m).trigger("resize");
      }
      function r() {
        e("#c_cb0 .c_cc").css("padding-" + M, 0), e(m).trigger("resize");
      }
      function o() {
        $Do.when("$WLXIM.SidebarCreated", 0, function () {
          $WLXIM.isSidebarOpened() && i(),
            e($WLXIM.sidebar).bind("onSidebarOpenedEvent", i),
            e($WLXIM.sidebar).bind("onSidebarClosedEvent", r);
        });
        for (
          var n = $css.getCN("c_c", "div", document), o = 0;
          o < n.length;
          o++
        ) {
          var c = n[o],
            l = e(c),
            d = l.children(".c_cc")[0],
            h = D.getInstanceById(c.id);
          if (!l.hasClass("c_ncolapse")) {
            var v = h && !h.getDataModel().isLightTheme,
              b = $B.IE_M6 ? "block" : $B.IE_M7 ? "inline" : "inline-block";
            (c.collapse = new CollapsingMenu(
              c.m,
              c.i,
              d,
              b,
              14,
              0,
              u(c.id),
              v
            )),
              c.r && c.collapse.redraw(),
              (c.DisableCommand = function (e) {
                var t = c.getElementsByTagName("a")[e];
                _.d(t);
              }),
              (c.EnableCommand = function (e) {
                var t = c.getElementsByTagName("a")[e].parentNode;
                _.e(t);
              }),
              (c.dispose = function () {
                y.unbind("unload", c.dispose);
              }),
              (c.updateMaxItems = function (e) {
                c.collapse.updateMaxItems(e);
              }),
              (c.updateMinItems = function (e) {
                c.collapse.updateMinItems(e);
              });
            var C = window.$Config;
            if (C && C.CommandBar && C.CommandBar.resize) {
              if ((y.bind(S, c.collapse.redraw), h)) {
                (f = e("#c_cb0 h1")),
                  (g = e("#c_clogoc")),
                  (p = g.siblings(".c_ms")),
                  (_$emptyLogoLink = e("#c_cb0.c_cle a.c_clogot")),
                  a(l),
                  _$emptyLogoLink.length &&
                    (_$emptyLogoLink.unbind(),
                    _$emptyLogoLink.bind("click", function () {
                      return !1;
                    })),
                  e(h).bind("beforeRender", function (e) {
                    (d.style.overflow = $), c.collapse.redraw(e, !0);
                  }),
                  e(h).bind("afterRender", function (e) {
                    c.collapse.redraw(),
                      (c.style.overflow = k),
                      (d.style.overflow = k);
                  }),
                  (h.updateMaxItems = c.updateMaxItems),
                  (h.updateMinItems = c.updateMinItems);
                e("#c_cb0 h1 .c_clogot");
                f.bind("keydown", s);
              }
              y.bind(w, t),
                (c.dispose = function () {
                  if (
                    (y.unbind(w, t),
                    y.unbind(S, c.collapse.redraw),
                    h &&
                      (e("a", l).unbind(),
                      e(h).unbind(),
                      e("#c_clogoc").unbind(),
                      h.dispose(),
                      m.$WLXIM && $WLXIM.sidebar))
                  )
                    try {
                      e($WLXIM.sidebar).unbind();
                    } catch (n) {}
                  y.unbind("resize.cb"), y.unbind("unload", c.dispose);
                }),
                h && h.render();
            }
            y.bind("unload", c.dispose);
          }
          d.style.overflow = k;
        }
        $Do.register("WLXCommandBar");
      }
      function a(e) {
        e.delegate("a", {
          "mousedown.cb": c,
          "focus.cb": c,
          "blur.cb": l,
          "mouseup.cb": l,
          "mouseleave.cb": l,
          "dragstart.cb": $f.cancelEvent,
        });
      }
      function s(e) {
        d = e.shiftKey;
      }
      function c() {
        $B.IE && $B.V <= 8 && (this.hideFocus = !0), e(this).addClass(I);
      }
      function l() {
        e(this).removeClass(I);
      }
      function u(t) {
        return function () {
          var n,
            i = "#" + t,
            r = e(i);
          if (r.length) {
            var o = h;
            if (!o) {
              var a = e(i + " .c_cme"),
                s = a.outerWidth(),
                c = e(i + " .c_clogo").outerWidth();
              c > T && (o = e(i).outerWidth() - c - s);
            }
            o > 0 && ((h = o), (n = e(i + " .c_cc").outerWidth() > o));
          }
          return n;
        };
      }
      var d,
        f,
        g,
        p,
        h,
        v,
        m = window,
        _ = m.$edh,
        y = e(m),
        b = {},
        w = "resize",
        S = "wlResize",
        C = "c_cb0",
        I = "c_cf",
        $ = "hidden",
        k = "visible",
        L = 300,
        T = 50,
        M = $B.rtl ? "left" : "right",
        P = _ge(C),
        D = {};
      P
        ? (D =
            m.$CommandBar =
            b[C] =
              new wLive.Controls.CommandBar("#" + C, !0, P.dataModel))
        : (m.$CommandBar = D),
        (D.showOptionsMenu = function (t, n) {
          var i,
            r,
            o = _ge("c_copt"),
            a = n._ge("c_copt"),
            s = o || a,
            c = n._ge("c_hiconc");
          if (!(m == n || (o && a.isCopied && v))) {
            o && (e(o).remove(), (s = a));
            var l = $header.getDummyHeader().firstChild,
              u = n.$f.getLocation(c, 1, 1),
              d = document.createElement("ul"),
              f = document.createElement("a");
            (d.innerHTML = s.innerHTML.replace(
              /window\./g,
              "_ge($PF.fid).contentWindow."
            )),
              (d.className = s.className),
              (d.id = s.id),
              (a.isCopied = 1),
              (v = 1),
              (f.style.position = "absolute"),
              (f.style.top = u.bottom + "px"),
              (f.style.left = ($B.rtl ? u.left : u.right) + "px"),
              (f.style.height = 0),
              (f.style.padding = 0),
              (s = d),
              (i = f),
              l.appendChild(f),
              l.appendChild(d),
              (m.$Config.Themes = n.$Config.Themes),
              (r = 1),
              y.bind("resize.cb", function () {
                v = 0;
              }),
              m.$header.reportBSIMenu(e("#c_cof"), "c_cof"),
              m.$header.reportBSIMenu(e("#c_coh"), "c_coh");
          }
          if (s.binding) s.binding.toggleState();
          else {
            var g = c.parentNode;
            $menu.create(t, 1, {
              sourceEl: i,
              menuEl: s,
              pressedStateEl: g,
              bindEnterKey: !0,
            });
          }
          ($Config.Themes.ThemeService || m.$themewritecallback) &&
            $Do.when("$ThemeMenuInit", 0, r);
        }),
        (D.getInstanceById = function (e) {
          if (!b[e]) {
            var t = _ge("#" + e);
            t &&
              (b[e] = new wLive.Controls.CommandBar("#" + e, !0, t.dataModel));
          }
          return b[e];
        }),
        (D.invalidateOptionsMenu = function (e) {
          var t = e._ge("c_copt");
          t.isCopied = !1;
        });
      var A;
      (D.init = o),
        $Do.when("$CommandBarDomReady", 0, function () {
          $Do.when("$WLiveLoaded", 0, function () {
            setTimeout(o, 0);
          });
        });
    })(window.originaljQuery || jQuery);
  }),
  define("trie", ["wlivecommandbar"], function () {
    !(function () {
      function e(e) {
        function t(e) {
          for (var t = 0, n = i.length - 1, r = null, o = null; n >= t; )
            if (
              ((r = Math.floor((t + n) / 2)),
              (o = i[r].key.substring(0, e.length)),
              e > o)
            )
              t = r + 1;
            else {
              if (!(o > e)) return r;
              n = r - 1;
            }
          return null;
        }
        var n = this,
          i = [],
          r = e,
          o = !1;
        (n.remove = function (e) {
          i.remove(e);
        }),
          (n.insert = function (e, t) {
            var n = { key: e, datum: t };
            return i.push(n), (o = !1), n;
          }),
          (n.sort = function () {
            o ||
              i.sort(function (e, t) {
                var n = e.key,
                  i = t.key;
                return n > i ? 1 : i > n ? -1 : 0;
              }),
              (o = !0);
          }),
          (n.matchPrefix = function (e, o) {
            var a = null,
              s = null,
              c = null,
              l = null,
              u = null,
              d = null;
            if ((n.sort(), (a = t(e)), null == a)) return [];
            for (s = a; s > 0 && i[s - 1].key.startsWith(e); s--);
            for (c = a + 1; c < i.length && i[c].key.startsWith(e); c++);
            l = new Array(c - s);
            for (var f = 0; f < l.length; f++) {
              var g,
                p = i[s + f];
              (g = o ? { key: p.key, datum: p.datum } : p.datum), (l[f] = g);
            }
            if (r) {
              l.sort(r), (u = [(d = l[0])]);
              for (var h = 0; h < l.length; h++)
                r(d, l[h]) && u.push((d = l[h]));
              return u;
            }
            return l;
          });
      }
      var t = window;
      t.$Trie = e;
    })();
  }),
  define("icusertilescript.inline", ["trie"], function () {}),
  define("logout", ["icusertilescript.inline"], function () {
    !(function () {
      function e() {
        function e(e, t) {
          i || ((i = 1), $BSI.navigateTo(e, t));
        }
        function t(t, n) {
          var i = this,
            r = [];
          (i.pause = function (e) {
            r.push(e);
          }),
            (i.resume = function (i) {
              r.remove(i), 0 == r.length && e(t, n);
            });
        }
        var i,
          r = this,
          o = [];
        (r.add = function (e) {
          o.push(e);
        }),
          (r.remove = function (e) {
            o.remove(e);
          }),
          (r.doLogout = function (r) {
            var a,
              s = 0,
              c = o.length;
            if (((i = 0), !r.shiftKey && !r.ctrlKey && !r.altKey))
              for (var l = r.target; l; ) {
                if ("A" == l.tagName) {
                  var u = l.href;
                  if (u) {
                    var d = l.target;
                    $f.cancelEvent(r),
                      (a = new t(u, d)),
                      setTimeout(function () {
                        e(u, d);
                      }, 1e3);
                  }
                  break;
                }
                l = l.parentNode;
              }
            var f = "$logout";
            for (a.pause(f); c > s; s++)
              try {
                o[s](a);
              } catch (g) {
                n.submitFromException(g);
              }
            a.resume(f);
          });
      }
      var t = window,
        n = t.$WebWatson;
      t.$Logout = new e();
    })();
  }),
  define("preload", ["logout"], function () {
    !(function (e) {
      function t() {
        $Config.WebIM
          ? $Do.when("wlxim", 0, n)
          : $BSI.isLoading()
          ? ($BSI.addLoadedCallback(o), (v = 1))
          : o(),
          e(l).bind("beforeunload", u.dispose);
      }
      function n() {
        (s = window.$WLXIM), e(s).bind("stateChange", r), r(), (h = 1);
      }
      function i() {
        e(s).unbind("stateChange", r), (h = 0);
      }
      function r() {
        s.hasContacts() && o();
      }
      function o() {
        var e = g.DelayMs || 0;
        setTimeout(a, e), h && i();
      }
      function a() {
        if (!p) {
          var e = g.View;
          (p = 1),
            e &&
              ((c = document.createElement("iframe")),
              (c.id = d),
              (c.width = c.height = 0),
              (c.style.display = "none"),
              (c.src = "/handlers/resourcespreload.mvc?bicild=&view=" + e),
              document.body.appendChild(c));
        }
      }
      var s,
        c,
        l = window,
        u = (l.$Preload = {}),
        d = "preload_frame",
        f = l.$Config,
        g = f.Preload || {},
        p = 0,
        h = 0,
        v = 0;
      (u.dispose = function () {
        if (
          (u.pause(),
          h ? i() : v && ($BSI.removeLoadedCallback(o), (v = 0)),
          e(l).unbind("beforeunload", u.dispose),
          c)
        ) {
          try {
            var t = c.contentWindow;
            t.onunload && (t.onunload(), (t.onunload = null));
          } catch (n) {}
          c.parentNode.removeChild(c), (c = 0);
        }
      }),
        (u.resume = function (e) {
          if (c)
            try {
              c.contentWindow.$Preload.resume(e);
            } catch (t) {}
        }),
        (u.pause = function () {
          if (c)
            try {
              c.contentWindow.$Preload.pause();
            } catch (e) {}
        }),
        t();
    })(window.originaljQuery || jQuery);
  }),
  define("basemaster", ["preload"], function () {
    !(function (e) {
      function t() {
        $Do.when("$PF.attach", 0, l.dispose),
          u.fs && $BSI.addLoadedCallback(r),
          e(document).bind("mousedown", n),
          $f.getDocType().indexOf("Strict") > 0 &&
            e(document.body).addClass("strict");
      }
      function n(t) {
        var n = t.target;
        for (s && i(t, s); n; ) {
          if (v.contains(n.tagName)) {
            (s = n),
              $css.addHideBorder(t, n),
              "A" == n.tagName && $css.addPressedState(t, n),
              e(n).bind("blur", i);
            break;
          }
          n = n.parentNode;
        }
      }
      function i(t, n) {
        (n = n || this),
          $css.removeHideBorder(t, n),
          $css.removePressedState(t, n),
          e(n).unbind("blur", i),
          (s = null);
      }
      function r() {
        $Network.fetchCSS(u.fs, o, void 0, "Gfx_Css_WlxFonts_Download", "Gfx");
      }
      function o() {
        var e = new Date();
        e.setDate(new Date().getDate() + 1),
          $Cookie.setCookie("wlfonts", "1", u.sd, "/", e);
      }
      var a,
        s,
        c = window,
        l = (c.$baseMaster = {}),
        u = $Config,
        d = e("#m_wh"),
        f = e("#c_header"),
        g = e("#c_base"),
        p = !0,
        h = 50,
        v = ["A", "INPUT", "LABEL", "BUTTON", "TEXTAREA"];
      (l.getHeaderHeight = function () {
        return h;
      }),
        (l.toggleFixedHeader = function (t, n) {
          (p = !!t),
            d.show(),
            t
              ? ($B.IE && $B.V <= 8 && d.show(),
                d.css({ top: "0" }),
                f.removeClass("c_h_hidden"),
                g.css({ top: Math.max(n || 0, h) + "px" }),
                c.$WLXIM && $WLXIM.setSidebarToFullScreen(!1),
                e("a", d).attr("tabindex", ""))
              : ($B.IE && $B.V <= 8 && d.hide(),
                g.css({ top: "0" }),
                d.css({ top: "-" + h + "px" }),
                f.addClass("c_h_hidden"),
                c.$WLXIM && $WLXIM.setSidebarToFullScreen(!0),
                e("a", d).attr("tabindex", "-1"));
        }),
        (l.dispose = function () {
          if (!a) {
            var t = c.$Static,
              n = c.$Preload,
              i = c.$WLXIM,
              r = c.$WLXIMCL,
              o = c.$footer,
              s = c.$HeaderWebIM;
            t && t.pause(1),
              n && n.dispose(),
              i && i.pause(),
              r && r.dispose(),
              o && o.dispose(),
              s && s.dispose(),
              e(document.body).parent().removeClass("fh"),
              (a = 1);
          }
        }),
        t();
    })(window.originaljQuery || jQuery);
  }),
  define("persistenceframework", ["basemaster"], function () {
    !(function (e) {
      function t(e) {
        try {
          _ge(p.fid).contentWindow.document.domain;
        } catch (t) {
          return;
        }
        var n = "",
          i = e.pfState;
        n = i ? (0 == i.indexOf("#") ? [p.afu, i].join("") : i) : p.afu;
        var r = p.getNormalizedUrl(n, null);
        setTimeout(function () {
          p.navigateTo(r);
        }, 1);
        var o;
        return r != n && (o = p.getRelativeUrl(r)), o;
      }
      function n(t) {
        p.i || (e(p).bind(g, t), h++);
      }
      function i(t) {
        var n = this;
        p.i ||
          e(p).bind(f, function () {
            t.call(n);
          });
      }
      function r(t) {
        p.i || e(p).unbind(f, t);
      }
      function o() {
        s ||
          ((s = e("#" + p.lid)),
          s.html(
            '<div style="top:45%;width:100%;position:absolute;text-align:center">' +
              $f.createLoading(1, 0, "60px") +
              "</div>"
          ),
          (c = s.find(".c_loadingDots"))),
          s.show(),
          $f.showLoading(c),
          e("#" + p.did).hide();
      }
      function a(e) {
        var t = e.document.getElementsByTagName("link");
        if (t)
          for (var n = 0; n < t.length; n++)
            if (t[n].getAttribute("rel").indexOf("icon") > -1) return t[n];
      }
      var s,
        c,
        l,
        u,
        d = window,
        f = "Merge",
        g = "PreMerge",
        p = d.$PF,
        h = 0,
        v = 0,
        m = 2e3;
      p &&
        p.f &&
        (p.i ||
          ($Do.when("$History.attachPF", 0, t, !0),
          p.m &&
            e("form").submit(function () {
              var t = e(this);
              return (
                t.attr("target") ||
                  (t.attr("target", p.fid), $Do.when("$PF.merge")),
                !0
              );
            })),
        (p.preMerge = function (t) {
          return p.merged
            ? void p.navigateTo(t)
            : void (h > 0 ? ((u = t), e(p).trigger(g)) : p.mergeAndNavigate(t));
        }),
        (p.allowMerge = function () {
          v++, v >= h && p.mergeAndNavigate(u);
        }),
        (p.merge = function () {
          p.merged ||
            ((p.merged = !0),
            e(p).trigger(f),
            e(p).unbind(f),
            e(p).unbind(g),
            e("body").css("cssText", p.hbs),
            e("html").css("cssText", p.hhs),
            e("#" + p.did)
              .show()
              .add("[persist]")
              .parentsUntil("body")
              .andSelf()
              .attr("persist", 1)
              .siblings()
              .filter(":not([persist])")
              .hide());
        }),
        (p.showLoading = function () {
          p.lid && (l = setTimeout(o, m));
        }),
        (p.hideLoading = function () {
          p.lid &&
            (clearTimeout(l),
            e("#" + p.did).show(),
            s && (s.hide(), $f.hideLoading(c)));
        }),
        (p.updateFavicon = function (e, t) {
          var n = a(e),
            i = a(d);
          if (n && i) {
            var r = i.cloneNode(!0);
            (r.href = n.getAttribute("href")),
              t.document.head.appendChild(r),
              i.parentNode.removeChild(i);
          }
        }),
        $Do.register("$PF"),
        $Do.register("$PF.merge", p.merge),
        $Do.register("$PF.attach", i),
        $Do.register("$PF.detach", r),
        $Do.register("$PF.attachPreMerge", n));
    })(window.originaljQuery || jQuery);
  }),
  define("flextag", ["persistenceframework"], function () {
    !(function () {
      var e = window;
      e.$Flextag = new (function () {
        var t = this;
        t.load = function () {
          e.$Config &&
            $Config.flextag &&
            $Config.flextag.url &&
            setTimeout(function () {
              var e = "flextagFrame",
                t = document.getElementById(e),
                n = $Config.flextag.url + "?v=" + new Date().getTime();
              if (t) t.src = n;
              else {
                var i = document.createElement("IFRAME");
                (i.id = i.name = e),
                  (i.width = i.height = 0),
                  (i.style.display = "none"),
                  (i.scrolling = "no"),
                  (i.frameBorder = "0"),
                  (i.allowTransparency = !0),
                  (i.src = n),
                  document.body.appendChild(i);
              }
            }, 2e3);
        };
      })();
    })();
  }),
  define("animationsstub", ["flextag"], function () {
    !(function (e) {
      function t(t, n, i, r) {
        return r || (e(t).removeClass("NoDisplay"), e(t).toggle(!0)), s;
      }
      function n(t) {
        return function (n) {
          return (
            t
              ? (e(n).removeClass("NoDisplay"), e(n).toggle(t))
              : e(n).addClass("NoDisplay"),
            s
          );
        };
      }
      function i() {
        return function (t, n) {
          return (
            e(t).addClass("NoDisplay"),
            e(n).removeClass("NoDisplay"),
            e(n).toggle(!0),
            s
          );
        };
      }
      var r = window,
        o = r.wLive;
      o.Animations = {};
      var a = o.Animations,
        s = null;
      e.Deferred && (s = e.Deferred().resolve()),
        e.extend(a, {
          Direction: { Horizontal: 0, Vertical: 0 },
          Enabled: !1,
          expand: n(!0),
          collapse: n(!1),
          fadeIn: n(!0),
          fadeOut: n(!1),
          addToList: n(!0),
          deleteFromList: n(!1),
          addToSearchList: n(!0),
          deleteFromSearchList: n(!1),
          deleteFromListFast: n(!1),
          addAndDeleteInListFast: i(),
          showEdgeUI: n(!0),
          showPanel: n(!0),
          hideEdgeUI: n(!1),
          hidePanel: n(!1),
          showPopup: n(!0),
          hidePopup: n(!1),
          enterContent: t,
          exitContent: n(!1),
          enterContent2: t,
          exitContent2: n(!1),
          flyAway: function () {
            return s;
          },
          reveal: n(!0),
          hide: n(!1),
        });
    })(window.originaljQuery || jQuery);
  }),
  define("webim", ["animationsstub"], function () {
    !(function (e) {
      function t() {
        function t() {
          return jt && jt.get_status() == Xt.UserStatus.signedIn;
        }
        function n(t, n) {
          if ($.$Sutra) {
            var i = t.content(),
              r = "$Sutra.WebIM.Flyouts.{0}".format(n.sutra.flyoutName);
            sutra(i, r);
            var o = t.getButton({ buttonName: "action" });
            o && sutra(e(o), r + "ActionButton");
            var a = e(".UserTitle", i);
            a.length > 0 && sutra(a, r + "Title");
            var s = e(".UserContent", i);
            s.length > 0 && sutra(s, r + "Message"),
              n.sutra.applyCustomTags && n.sutra.applyCustomTags(r, i);
          }
        }
        function r(e, t, n, i, r, o) {
          function a(t) {
            0 == u &&
              (l && c
                ? $.$pwc.client.blockOrUnblockMessenger(
                    e,
                    n,
                    function () {
                      o ||
                        (cn.addScenarioQoSStats(n ? le : ue, null, p, f, !1),
                        b(f, !0)),
                        m(i);
                    },
                    function (t) {
                      s(n, e),
                        o ||
                          (cn.addScenarioQoSStats(n ? le : ue, t, p, f, !1),
                          b(f, !1, t)),
                        m(r);
                    }
                  )
                : (l || s(n, e), o || b(f, l, l ? null : g(t)), m(l ? i : r)));
          }
          var c,
            l = !0,
            u = 0,
            d = e.getContacts(),
            f = o || M.startScenario(n ? Z : ee, V),
            p = new Date().getTime();
          if (!cn.user) return o || b(f, !1, "userNotInitialized"), void m(r);
          for (
            var v = cn.user.get_skypeAddress()
                ? cn.user.get_skypeAddress().get_address()
                : null,
              _ = 0;
            _ < d.length;
            _++
          ) {
            var y = d[_];
            if (y.getSourceId() === Q) c = y;
            else if (
              cn.isSkypeBlockEnabled() &&
              v &&
              (y.getSourceId() === q || y.getSourceId() === X) &&
              n != y.getIsBlocked() &&
              $.SkyJS &&
              $.SkyJS.Outlook.isUserLinkStatusActive()
            ) {
              u++;
              var w = n
                ? $.SkyJS.Outlook.blockContact
                : $.SkyJS.Outlook.unblockContact;
              w({
                data: {
                  userId: v,
                  contactId: h(y),
                  reporterIp: D.ip,
                  reportAbuse: t ? 1 : 0,
                },
                success: function (e) {
                  u--,
                    cn.addScenarioQoSStats(n ? se : ce, null, p, f, !1),
                    a(e);
                },
                error: function (e) {
                  (l = !1),
                    u--,
                    cn.addScenarioQoSStats(n ? se : ce, g(e), p, f, !1),
                    a(e);
                },
              });
            }
          }
          a(null);
        }
        function s(t, i) {
          var r = $.MsgrUI,
            o = t
              ? r._getLocString("flyoutsBlockErrorMessage")
              : r._getLocString("flyoutsUnblockErrorMessage");
          o = o.format(i.getDisplayName().encodeHtml());
          var a = { action: r._getLocString("flyoutsBlockErrorMessageButton") },
            s = k.Controls.Notifications.createTopBar({
              content: o,
              dismissalMode: k.Controls.Notifications.BarDismissalMode.Explicit,
              buttons: a,
            });
          e(s).bind("aftershow.topBar", function () {
            n(s, { sutra: { flyoutName: "BlockUnblockErrorNotification" } }),
              e(s).unbind("aftershow.topBar");
          }),
            s.show().then(function () {
              s = null;
            });
        }
        function d(e, t, n, i, r, o) {
          function a(e) {
            (!n || (n && u)) && (b(s, l, l ? null : g(e)), m(l ? r : o));
          }
          var s = M.startScenario(Y, V),
            c = new Date().getTime();
          if ($.SkyJS && $.SkyJS.Outlook.isUserLinkStatusActive()) {
            var l = !0,
              u = !1,
              d = cn.user.get_skypeAddress().get_address();
            $.SkyJS.Outlook.declineRequest({
              data: { userId: d, contactId: e },
              success: function (r) {
                if (
                  (cn.addScenarioQoSStats(ae, null, c, s, !1),
                  n &&
                    cn.blockPerson(
                      t,
                      i,
                      function () {
                        (u = !0), a(r);
                      },
                      function () {
                        (u = !0), (l = !1), a(r);
                      },
                      s
                    ),
                  i)
                ) {
                  var o = $.$pwc.getPerson(t);
                  cn.reportAbuse(o, e);
                }
                a(r);
              },
              error: function (e) {
                cn.addScenarioQoSStats(ae, g(e), c, s, !1), (l = !1), a(e);
              },
            });
          } else b(s, !1, "userLinkNotActive"), m(o);
        }
        function g(e) {
          return e
            ? "{0}-{1}".format(e.code || "NoCode", e.text || "NoDescription")
            : "NoErrorData";
        }
        function h(e) {
          return e.getSourceId() == q ? e.getSkypeId() : e.getObjectId();
        }
        function m(e, t) {
          e && e.apply(null, t || []);
        }
        function y() {
          Ee = !0;
        }
        function B() {
          et(),
            (Ee = !1),
            null != Me &&
              ($.clearInterval(Me),
              $.setTimeout(function () {
                N.title = Le;
              }, 200),
              (We = 0),
              (Fe = {}),
              (Me = null));
        }
        function R(t, n, i) {
          var r = e("<div class='imToastHeader' />").text(t),
            o = e("<div class='imToastBody' />").append(
              $.Microsoft.Live.Messenger.MessengerUtility.replaceEmoticons(n)
            ),
            a = v(F),
            s = $.wLive.Controls.Notifications.createToast({
              title: r,
              content: o,
              sourceIcon: a,
              options: { moreCss: "t_cbr" },
            });
          H(i),
            (Oe[i] = s),
            s.show().then(function (e) {
              e.clicked && $WLXIM.onToastClicked(i);
            });
        }
        function H(e) {
          if (Oe[e])
            try {
              Oe[e].dismiss();
              var t = $.wLive.Controls.Notifications.getQueue();
              t && t.removeNotification(Oe[e]);
            } catch (n) {
              x.logError("removeToastFromQueueError", n);
            }
        }
        function U(t, n) {
          0 != e("#rec_conv").length &&
            ((Se = t),
            (Qe = !0),
            Ae && p(),
            (Ie = jt.get_contacts().findByIdWithoutRoleCheck(t)),
            S(t, n || "other", "chat"));
        }
        function _e(e) {
          qe(e, He) && (Re -= 1);
        }
        function ye(e) {
          Ze(e, He) && Re++;
        }
        function xe(e) {
          Ze(e, Fe) && We++;
        }
        function qe(e, t) {
          return 1 == t[e] ? ((He[e] = 0), !0) : !1;
        }
        function Ze(e, t) {
          return 1 != t[e] ? ((t[e] = 1), !0) : !1;
        }
        function et() {
          Be > 0 &&
            k.Animations.enterContent(e("#c_ofm"), {
              top: 100,
              left: 0,
            }).then();
        }
        function tt() {
          return Ue ? "open" : "close";
        }
        function nt(t, n, i, r) {
          if (
            ((n = n || t.get_currentAddress()),
            n && n.get_network().get_isSkype())
          ) {
            if ($.SkyJS) {
              r = r || e("#sidebar")[0];
              var o =
                n.get_linkedContact().get_skypePendingOutbound &&
                n.get_linkedContact().get_skypePendingOutbound();
              return $.SkyJS.Outlook.isUserLinkStatusActive()
                ? 20 == n.get_type()
                  ? (n.get_linkedContact().get_isBlocked() ||
                      cn.showSkypeInviteFlyout(r, t.get_id(), i),
                    !1)
                  : 8 == n.get_type() && o
                  ? (cn.showResendSkypeInviteFlyout(r, t.get_id(), i), !1)
                  : !0
                : (cn.showConnectToSkypeFlyout(
                    r,
                    $.MsgrUI._getLocString(
                      "flyoutsConnectToSkypeSendMessageText"
                    )
                  ),
                  !1);
            }
            return !1;
          }
          return !0;
        }
        function it(t, n, i) {
          return (
            (n = n || t.get_currentAddress()),
            n && n.get_network().get_isSkype()
              ? $.SkyJS
                ? $.Microsoft.Live.Messenger.Services.SkyJSHelper
                    .isCallInProgress
                  ? !1
                  : ((i = i || e("#sidebar")[0]),
                    $.SkyJS.Outlook.isUserLinkStatusActive()
                      ? !0
                      : (cn.showConnectToSkypeFlyout(
                          i,
                          $.MsgrUI._getLocString(
                            "flyoutsConnectToSkypeCallText"
                          )
                        ),
                        !1))
                : !1
              : !0
          );
        }
        function rt(e, t, n) {
          var i;
          (i = t
            ? t.get_network().get_id()
            : e.get_currentAddress().get_network().get_id()),
            $.SkyJS.Outlook.startCall(
              e.get_skypeName(),
              e.get_cid(),
              n,
              jt.createSkypeInitializationInfo(e),
              i
            );
        }
        function ot() {
          var t = 50;
          return (
            e("#m_wh").length > 0
              ? (t = e("#m_wh").height() || t)
              : e("#HeaderContainer").length > 0 &&
                (t = e("#HeaderContainer").height()),
            t
          );
        }
        function at() {
          Ue = !1;
          var t = E("c_hiconm");
          null != t && t.setAttribute("aria-pressed", "false");
          var n = e("#sidebar");
          n.is(":hidden") ||
            (pt("onSidebarClosedEvent", null),
            L.rtl
              ? k.Animations.hideEdgeUI(n, { left: ve, top: 0 }).then(
                  function () {
                    n.hide(),
                      gt(),
                      ft(),
                      pt("onSidebarCloseCompletedEvent", null),
                      e(t).css("background-color", "");
                  }
                )
              : k.Animations.hideEdgeUI(n, { left: ve, top: 0 }).then(
                  function () {
                    e(n).css("left", ""),
                      n.hide(),
                      gt(),
                      ft(),
                      pt("onSidebarCloseCompletedEvent", null),
                      e(t).css("background-color", "");
                  }
                ),
            ze && Ne && Ne.sendWebimPaneStateChanged(tt())),
            ht(j);
        }
        function st(e) {
          Qe && Se ? lt(e) : ct();
        }
        function ct() {
          var t = e("#chat_view");
          t.is(":hidden")
            ? dt()
            : k.Animations.fadeOut(t).then(function () {
                t.hide(), dt();
              });
        }
        function lt(t) {
          var n = e("#rec_conv");
          n.is(":hidden")
            ? ut(t)
            : k.Animations.fadeOut(n).then(function () {
                n.hide(), ut(t);
              });
        }
        function ut(t) {
          var n = e("#chat_view");
          n.is(":hidden") &&
            (n.show(),
            k.Animations.fadeIn(n).then(function () {
              var n = e(".ModernConversationHistoryControl").get(0);
              n && (n.scrollTop = n.scrollHeight);
              var i = e(".ModernConversationInputControl_TextBox").get(0);
              null != i && 1 == t && i.focus(),
                we && we.set_isVisible(!0),
                pt("landingPageControlVisible", !1);
            })),
            (Qe = !0),
            Se && (_e(Se), H(Se), ht(Se)),
            (Ke = e("#chat_view").find("a").first());
        }
        function dt() {
          var t = e("#rec_conv");
          t.is(":hidden") &&
            (t.show(),
            k.Animations.fadeIn(t).then(function () {
              be &&
                (e(be.get_element()).show(),
                pt("landingPageControlVisible", !0));
            })),
            ht(O),
            (Ke = e("#rec_conv")
              .find("[resourceid='ContactSearchInput']")
              .first());
        }
        function ft() {
          e("#rec_conv").css("display", "none");
        }
        function gt() {
          e("#chat_view").css("display", "none");
        }
        function pt(t, n) {
          e("#sidebar").trigger(t, n);
        }
        function ht(e) {
          var t = "cid=" + D.cid + ":state=" + e;
          P.setCookie("Webim_Sidebar_Open", t, D.sd, 0, null, 1);
        }
        function vt() {
          Tt(0), jt && jt.set_services(Xt.SessionServices.notifications);
        }
        function mt() {
          jt && (jt.set_services(Xt.SessionServices.full), Lt("Full"));
        }
        function _t(e) {
          if (cn.hasPresence()) {
            e && ((en = e), en.pause("wim"));
            try {
              jt.signOut();
            } catch (t) {
              x.logError("Signout Error", t);
            }
          }
        }
        function yt() {
          (zt = 1),
            (Ut = D.WebIM),
            Mt(),
            x.logAction("WebIM_DownloadingResources"),
            Ot(),
            bt();
        }
        function bt() {
          (Pe = new Date()),
            ($e = M.startScenario(J, V)),
            (ke = new Date().getTime()),
            T.fetchCSS(Ut.c, Ct, void 0, "Gfx_Css_WlxWebIMUI_Download", "Gfx"),
            T.fetchCSS(Ut.cc, Ct, void 0, "Gfx_Css_WebIMCore_Download", "Gfx"),
            T.fetchScript(
              Ut.a,
              Ct,
              "window.live.shared.globalsettings.webim",
              "Gfx_JS_WebIMStr_Download",
              "Gfx"
            ),
            require([z], function () {
              Ct(null, z);
            }, function () {}),
            1 == window.$Config.WebIM.si
              ? T.fetchScript(
                  Ut.slu + "?r=" + Math.random(),
                  wt,
                  void 0,
                  "Gfx_JS_Skype_LocJs",
                  "Gfx"
                )
              : (x.logAction("WebIM_Skype_DisabledByConfig"), St()),
            Ut.pj &&
              T.fetchScript(
                Ut.pj,
                null,
                void 0,
                "Gfx_JS_Popover_Download",
                "Gfx"
              ),
            null == $.wLive.Search &&
              require([G], function () {}, function () {});
        }
        function wt(e) {
          $.SkyJS && $.SkyJS.Live && $.SkyJS.Live.Rollout
            ? $.SkyJS.Live.Rollout.isEnabled(D.cid, D.mkt.toLowerCase())
              ? (cn.addScenarioQoSStats(te, null, ke, $e, !1),
                (pn = $.SkyJS.Live.Rollout.getPackageUrl(
                  D.cid,
                  D.mkt.toLowerCase()
                )),
                Ut.eso &&
                  $.location.search.indexOf("skyjsurl=") > -1 &&
                  /^https:\/\/(az351254|az299139|az340659|az359216|az415007)\.vo\.msecnd\.net\/\d+-\d+-\d+\/assets\/javascript\/outlook-package\.min\.js$/.test(
                    $.location.search.split("skyjsurl=")[1]
                  ) &&
                  (pn = $.location.search.split("skyjsurl=")[1]),
                T.fetchScript(pn, Ct, void 0, "Gfx_JS_Skype_Skyjs", "Gfx"))
              : (x.logAction("WebIM_Skype_Rollout_Disabled"), St())
            : ((on = !0),
              cn.addScenarioQoSStats(te, de + "LocJs", ke, $e, !1),
              St());
        }
        function St() {
          var e = N.createElement("script");
          (pn = e.src = ""), Ct(e);
        }
        function Ct(t, n) {
          gn++,
            It(t, n),
            gn == fn &&
              (on ? b($e, !1, de) : b($e, !0),
              A.register("wlximuiouter", 0, !0),
              Jt ? $t() : I(!1, de, null),
              0 == e("#sidebar").length &&
                Jt &&
                (o(),
                e("#c_cme #c_hiconm").removeClass("c_md"),
                e(".c-Header .meArea .c_hiconm").removeClass("c_md"),
                a(),
                A.when("$pwc", 0, f)));
        }
        function It(e, t) {
          var n = e
            ? "script" == e.nodeName.toLowerCase()
              ? e.src
              : e.href
            : t;
          switch (n) {
            case location.protocol + "//" + location.hostname + Ut.a:
              void 0 != $.GetString &&
              "" != $.GetString("live.webim.strings.connectedto")
                ? cn.addScenarioQoSStats(ie, null, ke, $e, !1)
                : ((on = !0),
                  cn.addScenarioQoSStats(ie, de + "Strings", ke, $e, !1));
              break;
            case z:
            case Ut.cs:
              (cn.ML = Qt = $.Microsoft && $.Microsoft.Live),
                (cn.MLM = Xt = Qt && Qt.Messenger),
                Xt
                  ? ((Jt = !0), cn.addScenarioQoSStats(ne, null, ke, $e, !1))
                  : ((on = !0),
                    cn.addScenarioQoSStats(ne, de + "Core", ke, $e, !1));
              break;
            case pn:
              $.SkyJS && $.SkyJS.Outlook
                ? cn.addScenarioQoSStats(re, null, ke, $e, !1)
                : ((on = !0),
                  cn.addScenarioQoSStats(re, de + "SkyJS", ke, $e, !1));
          }
        }
        function $t() {
          var t = new Xt.RpsAuthIdentity(D.email, D.cid, null, null);
          null != D.BSI && null != D.BSI.xid && t.set_experienceId(D.BSI.xid),
            e(t).bind("authenticationCompleted", kt);
        }
        function kt(t, n, i) {
          var r = ($.Microsoft.Live.Messenger, i.get_resultCode());
          if (r == Xt.AuthenticationResultCode.failure)
            i.get_isUnsupportedBrowser()
              ? ((Yt = 1), Ht(-1, "Authentication Failed: unsuported browser"))
              : Ht(
                  91,
                  "Authentication Failed with status code: " + i.get_status()
                );
          else if (
            (x.logAction("WebIM_SigningIn"),
            (cn.user = jt = new Xt.User(n, new Xt.Services.PeopleCache())),
            jt.get_localEndpoint().set_name(Ut.n),
            jt.get_services() != Xt.SessionServices.normal
              ? (Tt(jt.get_status()), (Zt = 1))
              : i.get_multipleEndpointsNotSupported()
              ? (Tt(0), vt())
              : (Tt(1), jt.set_services(Xt.SessionServices.full), Lt("Full")),
            Pt(),
            jt.signIn(),
            !an &&
              sn &&
              sn.messagingModule &&
              sn.messagingModule.containerClassName)
          ) {
            var o = e("." + sn.messagingModule.containerClassName);
            if (o) {
              (an = new $.MsgrUI.MessagingModuleControl(jt, {
                containerWidth: o.width(),
                tabIndex: sn.messagingModule.tabIndex,
              })),
                o.empty().append(an.render()),
                an.activate();
              var a = e(an.get_element());
              o.bind("resize", function () {
                a.triggerHandler("resize");
              });
            }
          }
        }
        function Lt(e) {
          if (!Zt) {
            Zt = 1;
            var t = { IMMode: e };
            $.$BSI.reportEvent("ClickedSelected.Messaging.IMStart", t),
              x.logDetails("WebIM_StartIM", t);
          }
        }
        function Tt(e) {
          P.setCookie(ln, D.hcid + un + e, D.sd, 0, 0, 1);
        }
        function Mt() {
          var e = P.getCookie(ln, 1);
          if (e) {
            var t = e.indexOf(un);
            if (
              -1 != t &&
              e.substr(0, t) == D.hcid &&
              ((e = parseInt(e.substr(t + 1))), !isNaN(e))
            )
              return e;
          }
          return 1;
        }
        function Pt() {
          e(jt).bind("signInCompleted", Et),
            e(jt).bind("signedOut", Rt),
            e(jt).bind("propertyChanged", Bt),
            e(jt.get_contact().get_presence()).bind("propertyChanged", Wt),
            e(jt.get_conversations()).bind("collectionChanged", At),
            e(window).bind("unload", Nt),
            e(window).bind("resize", Dt),
            e(window).bind("blur", y),
            e(window).bind("focus", B);
        }
        function Dt() {
          if (
            De &&
            De.length > 0 &&
            cn.isSidebarOpened() &&
            !cn.isSidebarOverlay()
          ) {
            var t = e(window).width() - ve + "px";
            try {
              De.width(t);
            } catch (n) {}
          }
        }
        function At(t, n, i) {
          var r = i.get_newItems();
          if (r && r.length > 0) {
            var o = r[0];
            e(o).bind("messageReceived", xt);
          }
        }
        function xt(e, t, n) {
          if (
            null != jt.get_contacts() &&
            jt.get_contacts().get_count() > 0 &&
            (!t.get_userInitiated || !t.get_userInitiated())
          ) {
            var i = t.get_buddyContact();
            i &&
              cn.onConversationUpdated(
                i,
                n.get_message(),
                t instanceof $.Microsoft.Live.Messenger.GroupConversation
              );
          }
        }
        function Nt() {
          e(window).unbind("unload", Nt),
            e(window).bind("resize", Dt),
            e(jt).unbind("signInCompleted", Et),
            e(jt).unbind("signedOut", Rt),
            e(jt).unbind("propertyChanged", Bt),
            e(jt.get_contact().get_presence()).unbind("propertyChanged", Wt);
          var t = jt.get_conversations();
          e(t).unbind("collectionChanged", At);
          for (var n = 0; n < t.get_count(); n++)
            e(t).unbind("messageReceived", xt);
          if (null != Ne) {
            var i = e(Ne);
            i.unbind("StartGroupChat"),
              i.unbind("ToggleMessagingPane"),
              i.unbind("WebImTakeFocus"),
              i.unbind("RegisterThreadId");
          }
        }
        function Et(e, t, n) {
          n.get_resultCode() == Xt.SignInResultCode.success
            ? ((tn = 1), cn.isFull() || mt(), u(), I(!0, null, null))
            : I(!1, null, n.get_error()),
            qt || P.setSessionCookie("WebIM", "1"),
            Ft(),
            Ot(),
            A.register("$WLXIM.UserSignedIn"),
            x.logAction("WebIM_SignedIn");
        }
        function Bt(e, t, n) {
          var i = n.get_propertyName();
          ("Services" != i && "Status" != i) ||
            (rn &&
              jt &&
              jt.get_status() == Xt.UserStatus.signedIn &&
              ((rn = 0), vt()),
            !tn && jt && jt.get_status() == Xt.UserStatus.signedIn && (tn = 1),
            nn &&
              jt &&
              jt.get_status() == Xt.UserStatus.signedIn &&
              ((nn = 0), mt()),
            jt && jt.get_status() != Xt.UserStatus.signedIn && c(),
            Ot());
        }
        function Wt(e, t) {
          var n = t.get_status();
          n != Xt.PresenceStatus.offline && Tt(n),
            jt && jt.get_presence().get_status() == Xt.PresenceStatus.offline
              ? jt.get_status() == Xt.UserStatus.signedIn && l()
              : u();
        }
        function Rt(e, t, n) {
          n.get_reason() || (en && en.resume("wim")), c();
        }
        function Ft() {
          qt || (qt = 1);
        }
        function Ht(e, t) {
          (Kt = 1),
            Ot(),
            Ft(),
            x.log({
              eventType: "WebIM_InitializationFailure",
              resultCode: e,
              resultDetails: { message: t },
            });
        }
        function Ot() {
          for (var t = 0, n = dn.clone(), i = n.length; i > t; t++)
            try {
              n[t]();
            } catch (r) {
              x.logError("WebIM_InformStateChagne", r);
            }
          e(cn).trigger("stateChange");
        }
        var jt,
          Ut,
          Qt,
          Xt,
          qt,
          zt,
          Gt,
          Vt,
          Jt,
          Kt,
          Yt,
          Zt,
          en,
          tn,
          nn,
          rn,
          on,
          an,
          sn,
          cn = this,
          ln = "pres",
          un = "=",
          dn = [],
          fn = 5,
          gn = 0,
          pn = "";
        (cn.isWac = void 0),
          (cn.wacThreadId = void 0),
          (cn.wacReady = function () {
            return !(!cn.isWac || !cn.wacThreadId);
          }),
          (cn.isOff = function () {
            return !(nn || (zt && 0 != Mt()));
          }),
          (cn.isUnsupported = function () {
            return Yt;
          }),
          (cn.isError = function () {
            return (
              !cn.isOff() &&
              (Kt || (jt && jt.get_status() == Xt.UserStatus.signedOut))
            );
          }),
          (cn.isLoading = function () {
            return !(
              cn.isOff() ||
              cn.isError() ||
              (jt &&
                jt.get_status() != Xt.UserStatus.signingIn &&
                jt.get_status() != Xt.UserStatus.signingOut)
            );
          }),
          (cn.isWaitingToReconnect = function () {
            return (
              !cn.isOff() &&
              jt &&
              jt.get_status() == Xt.UserStatus.autoReconnectWaiting
            );
          }),
          (cn.hasContacts = function () {
            return tn;
          }),
          (cn.hasNotify = function () {
            return t();
          }),
          (cn.hasPresence = function () {
            return t() && jt.get_services() > Xt.SessionServices.notifications;
          }),
          (cn.isFull = function () {
            return t() && jt.get_services() == Xt.SessionServices.full;
          }),
          (cn.addScenarioQoSStats = function (e, t, n, i, r) {
            if (i) {
              var o = { api: e, dependent: V };
              "undefined" != typeof t && null != t && (o.error = t),
                r && (o.errorType = "c"),
                k.ScenarioQoSStats.add(o, n, i),
                x.log({ eventType: e, resultCode: t });
            }
          }),
          (cn.addStateListener = function (e) {
            dn.push(e);
          }),
          (cn.removeStateListener = function (e) {
            dn.remove(e);
          }),
          (cn.showFlyout = function (t) {
            var i = k.Controls.Notifications.createFlyout(t);
            e(i).bind("aftershow.flyout", function () {
              n(i, t),
                t.onAfterShow && t.onAfterShow(i),
                e(i).unbind("aftershow.flyout");
            });
            var r;
            e(i).bind("beforedismiss.flyout", function () {
              (r = i.content()), e(i).unbind("beforedismiss.flyout");
            }),
              t.onButtonClick &&
                e(i).bind("buttonclick.flyout", function () {
                  t.onButtonClick(i);
                }),
              i.show().then(function (e) {
                "action" === e.buttonClicked
                  ? t.performAction && t.performAction(r)
                  : t.onDismiss && t.onDismiss(r);
              }),
              (r = null);
          }),
          (cn.showFirstShortCircuitFlyout = function (e, t) {
            var n = $.MsgrUI,
              i = $.$pwc.getPerson(e);
            if (i) {
              var r = {
                content: n
                  ._getLocString("firstShortCircuitFlyoutMessage")
                  .format(i.getOrderedName()),
                anchor: t,
                sutra: { flyoutName: "firstscmessageflyout" },
              };
              cn.showFlyout(r);
            }
          }),
          (cn.isSkypeInvitesEnabled = function () {
            return (
              !!window.$Config.WebIM.sv &&
              Jt &&
              cn.MLM.Services.SkyJSHelper.skypeEnabled
            );
          }),
          (cn.isSkypeBlockEnabled = function () {
            return (
              !!window.$Config.WebIM.sb &&
              Jt &&
              cn.MLM.Services.SkyJSHelper.skypeEnabled
            );
          }),
          (cn.showBlockFlyout = function (t, n, i, r, o) {
            var a = $.MsgrUI,
              s = $.$pwc.getPerson(n);
            if (s) {
              var c =
                  o ||
                  a
                    ._getLocString("flyoutsBlockMessage")
                    .format(s.getOrderedName()),
                l = {
                  content: ge.format(
                    c.encodeHtml(),
                    a._getLocString("flyoutsReportAbuse").encodeHtml()
                  ),
                  anchor: t,
                  buttons: { action: a._getLocString("flyoutsBlockButton") },
                  sutra: {
                    flyoutName: "BlockFlyout",
                    applyCustomTags: function (t, n) {
                      var i = e("input", n);
                      sutra(i, t + "ReportAbuse");
                    },
                  },
                  performAction: function (t) {
                    var o = e("input", t)[0].checked;
                    cn.blockPerson(
                      n,
                      o,
                      function () {
                        o && cn.reportAbuse(s, null), m(i, [!0]);
                      },
                      r,
                      null
                    );
                  },
                  onAfterShow: function (t) {
                    var n = e(t.content()),
                      i = e(".wim_block_repabuse", n),
                      r = e(t.getButton({ buttonName: "action" }));
                    i.find("label").bind("click", function () {
                      var e = i.find(":checkbox");
                      e.prop("checked", !e.is(":checked"));
                    }),
                      e(".ButtonArea", n).css(
                        "min-width",
                        i.width() + r.width() + 30
                      );
                  },
                  onDismiss: function (t) {
                    e(".wim_block_repabuse", t).find("label").unbind(),
                      m(i, [!1]);
                  },
                };
              cn.showFlyout(l);
            }
          }),
          (cn.showDeclineInviteFlyout = function (t, n, i, r, o) {
            var a = $.MsgrUI,
              s = {
                title: a
                  ._getLocString("flyoutsDeclineInviteTitle")
                  .encodeHtml(),
                content: fe.format(
                  a._getLocString("flyoutsBlockCheckbox").encodeHtml(),
                  a._getLocString("flyoutsReportAbuse").encodeHtml()
                ),
                anchor: t,
                buttons: { action: a._getLocString("flyoutsDeclineButton") },
                sutra: {
                  flyoutName: "DeclineInviteFlyout",
                  applyCustomTags: function (t, n) {
                    var i = e("input", n);
                    sutra(i[0], t + "Block"), sutra(i[1], t + "ReportAbuse");
                  },
                },
                performAction: function (t) {
                  var a = e("input", t),
                    s = a[0].checked,
                    c = a[1].checked;
                  d(
                    i,
                    n,
                    s,
                    c,
                    function () {
                      m(r, [!0]);
                    },
                    o
                  );
                },
                onAfterShow: function (t) {
                  var n = e(t.content());
                  n.find("label").bind("click", function (t) {
                    var n = e(t.target).parent().find(":checkbox");
                    n.prop("checked", !n.is(":checked"));
                  });
                },
                onDismiss: function (t) {
                  e(t).find("label").unbind(), m(r, [!1]);
                },
              };
            cn.showFlyout(s);
          }),
          (cn.showConnectToSkypeFlyout = function (t, n) {
            var i = $.MsgrUI;
            n = n || i._getLocString("flyoutsConnectToSkypeAddContactText");
            var r = {
              content: n.encodeHtml(),
              anchor: t,
              buttons: {
                action: i._getLocString("flyoutsConnectToSkypeButton"),
              },
              sutra: { flyoutName: "ConnectToSkypeFlyout" },
              onButtonClick: function (t) {
                e(t).unbind("buttonclick.flyout");
                var n = D.WebIM.sau,
                  i = $.open(
                    n,
                    "_blank",
                    "scrollbars=0,resizable=1,location=0, width=720,height=520"
                  ),
                  r = $.setInterval(function () {
                    i.closed && ($.clearInterval(r), $.location.reload());
                  }, 500);
              },
              performAction: function () {},
            };
            cn.showFlyout(r);
          }),
          (cn.showSkypeInviteFlyout = function (e, t, n, i, r) {
            var o = $.MsgrUI,
              a = {
                content: o._getLocString("flyoutsAddToSkypeText").encodeHtml(),
                anchor: e,
                buttons: { action: o._getLocString("flyoutsAddToSkypeButton") },
                sutra: { flyoutName: "AddToSkypeContactsFlyout" },
                performAction: function () {
                  cn.sendSkypeInvite(
                    t,
                    n,
                    function () {
                      m(i, [!0]);
                    },
                    r
                  );
                },
                onDismiss: function () {
                  m(i, [!1]);
                },
              };
            cn.showFlyout(a);
          }),
          (cn.showResendSkypeInviteFlyout = function (e, t, n, i, r) {
            var o = $.MsgrUI,
              a = $.$pwc.getPerson(t);
            if (a) {
              var s = {
                content: o
                  ._getLocString("flyoutsResendSkypeRequestText")
                  .format(a.getDisplayName())
                  .encodeHtml(),
                anchor: e,
                buttons: {
                  action: o._getLocString("flyoutsResendSkypeRequestButton"),
                },
                sutra: { flyoutName: "ResendSkypeRequestFlyout" },
                performAction: function () {
                  cn.sendSkypeInvite(t, n, i, r);
                },
                onDismiss: function () {
                  i && i();
                },
              };
              cn.showFlyout(s);
            }
          }),
          (cn.reportAbuse = function (e, t) {
            if (null != e) {
              var n = e.getContacts();
              if (n.length > 0) {
                var i = jt
                  .get_contacts()
                  .findByIdWithoutRoleCheck(n[0].getId());
                if (null != i)
                  for (var r = 0; r < i.get_addresses().get_count(); r++) {
                    var o = i.get_addresses().get_item(r);
                    o.get_supportsReportAbuse() && jt.reportAbuse(o, null);
                  }
              }
            } else jt.reportAbuse(null, t);
          }),
          (cn.sendSkypeInvite = function (e, t, n, i) {
            function r(e) {
              0 == o &&
                (cn.addScenarioQoSStats(oe, a ? null : g(e), c, s, !1),
                b(s, a, a ? null : g(e)),
                m(a ? n : i));
            }
            var o = 0,
              a = !0,
              s = M.startScenario(K, V),
              c = new Date().getTime(),
              l = { skypeinvitesource: t };
            if (
              ($BSI.reportEvent("WebIM.SkypeInviteSent", l),
              x.logDetails("WebIM_SkypeInviteSent", l),
              $.SkyJS)
            ) {
              var u = $.$pwc.getPerson(e);
              if (u)
                for (
                  var d = u.getContacts(),
                    f = cn.user.get_skypeAddress().get_address(),
                    p = 0;
                  p < d.length;
                  p++
                ) {
                  var v = d[p],
                    _ = v.getOrderedName();
                  (v.getSourceId() === q ||
                    (v.getSourceId() === X && v.getSkypePendingOutbound())) &&
                    (o++,
                    $.SkyJS.Outlook.sendRequest({
                      data: {
                        userId: f,
                        contactId: h(v),
                        greeting: _
                          ? $.MsgrUI._getLocString(
                              "flyoutsSendInviteGreeting"
                            ).format(_)
                          : "",
                      },
                      success: function (e) {
                        o--, r(e);
                      },
                      error: function (e) {
                        (a = !1), o--, r(e);
                      },
                    }));
                }
            }
            r(null);
          }),
          (cn.blockPerson = function (e, t, n, i, o) {
            var a = $.$pwc.getPerson(e);
            a && r(a, t, !0, n, i, o);
          }),
          (cn.unblockPerson = function (e, t, n) {
            var i = $.$pwc.getPerson(e);
            i && r(i, !1, !1, t, n, null);
          }),
          (cn.signIn = function () {
            jt && jt.get_status() == Xt.UserStatus.signedIn
              ? (Tt(1), mt())
              : ((nn = 1), (rn = 0), Ot());
          }),
          (cn.signOut = function () {
            jt && jt.get_status() == Xt.UserStatus.signedIn
              ? vt()
              : ((nn = 0), (rn = 1), Ot());
          }),
          (cn.reconnect = function () {
            cn.isWaitingToReconnect() && jt.signIn();
          }),
          (cn.toggleSidebar = function (t) {
            var n = !t || "mousedown" == t.type || 13 == t.which;
            if (n) {
              var i = e("#sidebar"),
                r = e("div.Files-belowHeader"),
                o = e("div.od-Photos-belowHeader");
              if (
                (r.length > 0
                  ? $WLXIM.setPaneToResize(r)
                  : o.length > 0 && $WLXIM.setPaneToResize(o),
                i.length > 0)
              )
                if (i.is(":hidden")) {
                  if ($WLXIM.isWac && $WLXIM.wacThreadId) {
                    var a = jt.findContactByThreadId($WLXIM.wacThreadId);
                    if (!a) return;
                    U(a.get_id(), "wac"), cn.showSidebar(!1);
                  } else cn.showSidebar(!0);
                  if (t && 13 == t.which) {
                    var s = i.find("a");
                    s.length > 0 && s[0].focus();
                  }
                } else C("header"), at(), pt("landingPageControlVisible", !1);
            }
          }),
          (cn.dismissSidebar = function () {
            C("closeButton"), at();
          }),
          (cn.getChatViewOpenedContactId = function () {
            return Se;
          }),
          (cn.onChatViewBack = function () {
            ct(), (Qe = !1), (Se = null);
          }),
          (cn.onConversationSelected = function (e, t, n) {
            U(n.buddyId, "recentConversations"), lt(!0);
          }),
          (cn.onConversationUpdated = function (e, t, n) {
            var i = t.get_conversationId().split(":")[1].toLowerCase();
            if (!$WLXIM.isWac || $WLXIM.wacThreadId === i) {
              var r = $.MsgrUI,
                o = $.Microsoft.Live.Messenger;
              if (
                1 == Ee &&
                !t.get_reloaded() &&
                t.get_type() == o.MessageType.textMessage &&
                !t.get_sender().get_isUser() &&
                (xe(e.get_id()), !ze)
              ) {
                var a =
                  null != e.get_firstName()
                    ? e.get_firstName()
                    : e.get_displayName();
                hn(
                  1 == We && n
                    ? r._getLocString("newGroupMessageNotification")
                    : 1 == We && null != a
                    ? r._getLocString("newMessageNotification").format(a).trim()
                    : r
                        ._getLocString("newMultipleMessageNotification")
                        .format(We)
                        .trim()
                );
              }
              if (
                !(
                  t.get_reloaded() ||
                  (t.get_type() != o.MessageType.textMessage &&
                    t.get_type() != o.MessageType.threadActivityMessage) ||
                  (Ue && Qe && Se && Se == e.get_id()) ||
                  null == e.get_id() ||
                  "" == e.get_id()
                )
              ) {
                if (t.get_sender().get_isUser()) return void _e(e.get_id());
                if ((ye(e.get_id()), !t.get_isOfflineMessage())) {
                  var s;
                  if (t.get_type() == o.MessageType.textMessage)
                    s = t.get_text();
                  else {
                    if (!r || !r.Utility) return;
                    s = r.Utility.getActivityMessageString(t);
                  }
                  if (s) {
                    var c = e.get_displayName();
                    R(c, s, e.get_id());
                  }
                }
              }
            }
          }),
          (cn.removeAllToasts = function () {
            for (var e in Oe) H(e);
          });
        var hn = (function () {
          var e = !1,
            t = function () {
              e
                ? ((N.title = Te), (e = !1))
                : N.title == Te
                ? (N.title = Le)
                : ((Le = N.title), (N.title = Te));
            };
          return function (n) {
            (e = !0),
              (Te = n),
              null == Me && ((Le = N.title), (Me = $.setInterval(t, 1e3)));
          };
        })();
        (cn.updateMessagingCount = function (t) {
          var n;
          if (t !== Be) {
            (Be = t), (n = t > 99 ? "99+" : t > 0 ? t : "");
            var i = e("#c_ofm"),
              r = i.parent();
            i.html(n),
              r.parent().width(i.width() + me + "px"),
              et(),
              ze &&
                $WLXIM.wacThreadId &&
                Ne &&
                Ne.sendWebimUnreadCountChanged(t, tt());
          }
        }),
          (cn.isSidebarOpened = function () {
            return Ue;
          }),
          (cn.isSidebarOverlay = function () {
            return je && e(window).width() < he;
          }),
          (cn.setPaneToResize = function (e) {
            (De = e),
              $WLXIM.isSidebarOpened() && i(null, cn.isSidebarOverlay());
          }),
          (cn.resetSidebarOverlaySettings = function () {
            (je = !1), (he = pe);
          }),
          (cn.setSidebarOverlay = function (e) {
            je = e;
          }),
          (cn.setSidebarOverlayWindowWidth = function (e) {
            (je = !0), (he = e);
          }),
          (cn.setSidebarToFullScreen = function (t) {
            (Xe = 1 == t ? "0px" : ot() + "px"), e("#sidebar").css("top", Xe);
          }),
          (cn.bindToCustomPostMessage = function (t, n) {
            e(Ne).bind(t, function (e, t) {
              Ge || (Ne.sendWebImFirstIncomingMessage(), (Ge = !0)), n(e, t);
            });
          }),
          (cn.sendCustomPostMessage = function (e, t) {
            Ve || (Ne.sendWebImFirstOutgoingMessage(), (Ve = !0)),
              e.apply(cn, t);
          }),
          (cn.registerWacChat = function (t) {
            function n(e, t) {
              i(t.groupId);
            }
            function i(e) {
              ($WLXIM.wacThreadId = e.toLowerCase()),
                A.register("WACChatThreadIdChanged");
            }
            function r(e, t) {
              var n = t.groupId.toLowerCase(),
                r = jt.findContactByThreadId(n);
              null != r
                ? cn.startConversationWithContactId(r.get_id(), "wac", !0)
                : jt.addToStartGroupChatPendingList(n),
                i(n);
            }
            function o(e, t) {
              var n = t.htmlEvent;
              cn.toggleSidebar(n);
            }
            function a() {
              if (cn.isSidebarOpened())
                if (e("#rec_conv").is(":visible")) {
                  var t = e("#rec_conv")
                    .find("[resourceid='ContactSearchInput']")
                    .first();
                  t.blur(), t.focus();
                } else {
                  var n = e("#chat_view")
                    .find("[resourceid='TextBox']")
                    .first();
                  if (n.attr("disabled")) {
                    var i = e("#chat_view").find("a").first();
                    i.blur(), i.focus();
                  } else n.blur(), n.focus(), n.val(n.val());
                }
            }
            function s(t) {
              9 == t.which && null !== Ke
                ? (_(),
                  t.shiftKey && e(":focus")[0] === Ke[0]
                    ? (Ye.focus(), t.preventDefault())
                    : t.shiftKey ||
                      e(":focus")[0] !== Ye[0] ||
                      (Ke.focus(), t.preventDefault()))
                : 117 == t.which &&
                  t.ctrlKey &&
                  (t.preventDefault(),
                  Ne.sendWebimGiveFocus(
                    t.shiftKey ? "backward" : "forward",
                    tt()
                  ));
            }
            if (
              jt &&
              MC.GroupChatFeatures.phase !== MC.GroupChatPhase.disabled
            ) {
              var c = jt.get_status(),
                l = c === Xt.UserStatus.signedIn,
                u = c === Xt.UserStatus.autoReconnectWaiting;
              (l || u) &&
                ((Ne = t),
                Ne.sendWebimReady(Be, tt()),
                0 == ze &&
                  (e(Ne).bind("StartGroupChat", r),
                  e(Ne).bind("ToggleMessagingPane", o),
                  e(Ne).bind("WebImTakeFocus", a),
                  e(Ne).bind("RegisterThreadId", n),
                  e(N).keydown(s)),
                e("#sidebar").addClass("is_wac_registered"),
                (ze = !0));
            }
          }),
          (cn.startConversationWithContactId = function (e, t, n) {
            var i = jt.get_contacts().findByIdWithoutRoleCheck(e),
              r = jt
                .get_aggregatedConversations()
                .getAggregatedConversationByContact(i);
            (Ce =
              null != r && null != r.get_currentConversation()
                ? r.get_currentConversation().get_buddyAddress()
                : i.get_currentAddress()),
              null != Ce && (U(e, t), cn.showSidebar(n));
          }),
          (cn.startConversationWithContact = function (e, t, n, i, r) {
            var o = $WLXIM.getConversationAddress(e, t, n);
            nt(e, o, r, i) && ((Ce = o), U(e.get_id(), r), cn.showSidebar(!0));
          }),
          (cn.startConversationWithIMAddress = function (e, t, n, i) {
            nt(e, t, n, i) &&
              ((Ce = t), (n = n || ""), U(e.get_id(), n), cn.showSidebar(!0));
          }),
          (cn.startAudioCall = function (e, t, n, i) {
            return it(e, n, i)
              ? (rt(e, n, !1), S(e.get_id(), t, "voice"), !0)
              : !1;
          }),
          (cn.startVideoCall = function (e, t, n, i) {
            return it(e, n, i)
              ? (rt(e, n, !0), S(e.get_id(), t, "video"), !0)
              : !1;
          }),
          (cn.onToastClicked = function (e) {
            U(e, "toast"), cn.showSidebar(!0);
          }),
          (cn.switchPresence = function (e) {
            jt &&
              (jt.get_presence().set_status(e),
              jt.get_settings().set_userPresencePreference(e));
          }),
          (cn.isVVWindow = function () {
            return Ut.vv;
          }),
          (cn.showSidebar = function (t) {
            if (0 != e("#rec_conv").length) {
              var n = E("c_hiconm");
              null != n && n.setAttribute("aria-pressed", "true");
              var i = e("#sidebar");
              i.is(":hidden")
                ? (i.show(),
                  pt("onSidebarOpenedEvent", cn.isSidebarOverlay()),
                  be && w(),
                  L.rtl ? i.css("left", "0") : i.css("right", "0"),
                  k.Animations.showEdgeUI(i, {
                    left: e(window).width(),
                    top: 0,
                  }).then(function () {
                    if (
                      (st(t),
                      pt("onSidebarOpenCompletedEvent", cn.isSidebarOverlay()),
                      L.IE_M7 && De && De.length > 0)
                    ) {
                      var i = De.get(0),
                        r = i.style.display;
                      (i.style.display = "none"), (i.style.display = r);
                    }
                    e(n).css("background-color", W);
                  }))
                : st(t),
                (Ue = !0),
                ze && Ne && Ne.sendWebimPaneStateChanged(tt());
            }
          }),
          (cn.getSidebarOpenCookieState = function () {
            var e = P.getCookie("Webim_Sidebar_Open");
            if (e) {
              var t = e.split(":state=");
              if (t && 2 == t.length && t[0].endsWith(D.cid) && t[1].length > 0)
                return t[1];
            }
            return null;
          }),
          (cn.init = function (e, t) {
            (sn = t),
              gn >= fn
                ? x.logAction("WebIM_AlreadyLoaded")
                : zt
                ? x.logAction("WebIM_Alreadyoading")
                : Gt
                ? (x.logAction("WebIM_DownloadPaused"), (Vt = 1))
                : yt(),
              $.$Logout.add(_t);
          }),
          (cn.pause = function () {
            zt || (Gt = 1);
          }),
          (cn.resume = function () {
            (Gt = 0), Vt && yt();
          }),
          (cn.setTestFlags = function (e) {
            Ut.eso && (Je = e);
          }),
          (cn.getTestFlags = function () {
            if (
              0 == Je &&
              Ut.eso &&
              $.location.search.indexOf("testflags=") > -1
            )
              for (
                var e = $.location.search.substring(1).split("&"),
                  t = 0,
                  n = e.length;
                n > t;
                t++
              )
                if (e[t].startsWith("testflags=")) {
                  (Je = parseInt(e[t].split("=")[1])), isNaN(Je) && (Je = 0);
                  break;
                }
            return Je;
          }),
          (cn._pres = Mt),
          (cn._inform = Ot);
      }
      function n() {
        if (D.WebIM && D.WebIM.cs) {
          $.$WLXIM = new t();
          var n = e("body").attr("id");
          ($.$WLXIM.isWac = n && n.indexOf("Wac") > -1),
            setTimeout(function () {
              A.when("$BSI", 0, y);
            }, D.WebIM.delay || 0);
        }
      }
      function i(t, n) {
        if (De && De.length > 0 && !n) {
          if (L.rtl && L.Firefox) {
            var i = ve + De.width() - e(window).width();
            De.css("left", i + "px");
          }
          var r = e(window).width() - ve + "px";
          De.width(r),
            window.Shared && Shared.ElementEventing.raise(window, "resize");
        }
        e("body").addClass("webim-opened");
      }
      function r(t) {
        De &&
          De.length > 0 &&
          (De.width(""),
          L.rtl && L.Firefox && De.css("left", "0"),
          Shared.ElementEventing.raise(window, "resize")),
          e("body").removeClass("webim-opened");
      }
      function o() {
        var t = m(B, N.body, "sidebar", null);
        t.setAttribute("persist", "1"),
          ($WLXIM.sidebar = t),
          A.register("$WLXIM.SidebarCreated"),
          e($WLXIM.sidebar).bind("onSidebarOpenedEvent", i),
          e($WLXIM.sidebar).bind("onSidebarCloseCompletedEvent", r),
          e($WLXIM.sidebar).addClass("t_sbgc"),
          A.register(
            "wlxim_startconversation",
            $WLXIM.startConversationWithContact
          ),
          A.when("NotificationControls", 0, function () {
            k.Controls.Notifications.getQueue().start();
          }),
          e(t).css("top", Xe),
          $.$Sutra && $.$Sutra.WebIM && sutra(t, "$Sutra.WebIM.WebIMSidebar");
      }
      function a() {
        var t = $.MsgrUI,
          n = e("#sidebar").get(0),
          i =
            "<span id='sidebar_close_img' tabindex='0' class='imCloseImg' style='background-image:url(" +
            v(R) +
            ");display:block;' role='button' aria-pressed='false'/>",
          r = 13,
          o = 32;
        e(n).append(i),
          e(n)
            .find("#sidebar_close_img")
            .on("click", function () {
              return $WLXIM.dismissSidebar(), !1;
            })
            .on("keyup", function (e) {
              return e.keyCode === o || e.keyCode === r
                ? ($WLXIM.dismissSidebar(), !1)
                : void 0;
            });
        var a = m(B, n, "sidebar_info", null),
          l = v(H),
          u =
            "<div style='text-align:center'><img src='" +
            l +
            "' class='signin_loading_img' /> " +
            t._getLocString("signingInInfo") +
            "</div>";
        s(a, "signing", u, ""),
          s(
            a,
            "reconnect",
            "",
            "<button class='default sidebar_button' type='button' onclick='$WLXIM.reconnect()'>" +
              t._getLocString("messagingPaneReconnectNow") +
              "</button>"
          ),
          s(
            a,
            "signout",
            t._getLocString("messagingPaneSignOut"),
            "<button class='default sidebar_button' type='button' onclick='$WLXIM.signIn()'>" +
              t._getLocString("messagingPaneSignInButton") +
              "</button>"
          ),
          s(
            a,
            "resignin",
            t._getLocString("messagingPaneSignOut"),
            "<button class='default sidebar_button' type='button' onclick='location.reload()'>" +
              t._getLocString("messagingPaneSignInButton") +
              "</button>"
          );
        var d = m(B, n, "rec_conv", null),
          f = m(B, d, "rec_conv_body", null),
          g = m(B, n, "chat_view", null),
          p = m(B, g, "chat_view_body", null);
        c(),
          $.$Sutra &&
            $.$Sutra.WebIM &&
            (sutra(n, "$Sutra.WebIM.WebIMSidebar"),
            sutra(d, "$Sutra.WebIM.RecentConversationsView"),
            sutra(f, "$Sutra.WebIM.RecentConversationsList"),
            sutra(g, "$Sutra.WebIM.ChatView"),
            sutra(p, "$Sutra.WebIM.ChatViewBody"));
      }
      function s(t, n, i, r) {
        var o =
          "<table class='sidebar_info_table " +
          n +
          "'><tr style='vertical-align: bottom; height:50%'><td><div class='sidebar_info_top'>" +
          i +
          "</div></td></tr><tr style='vertical-align: top; height:50%'><td><div class='sidebar_info_bottom'>" +
          r +
          "</div></td></tr></table>";
        e(o).appendTo(t);
      }
      function c() {
        var t = $.Microsoft.Live.Messenger,
          n = $.MsgrUI,
          i = e(".sidebar_info");
        if ((i.find("table").hide(), $WLXIM.isWaitingToReconnect())) {
          var r = i.find("table.reconnect"),
            o = n
              ._getLocString("messagingPaneReconnect")
              .format(
                $WLXIM.getReconnectingTime().min +
                  ":" +
                  $WLXIM.getReconnectingTime().sec
              );
          r.find(".sidebar_info_top").text(o), r.show(), $.setTimeout(c, 1e3);
        } else if ($WLXIM.isLoading()) i.find("table.signing").show();
        else if (
          $WLXIM.user &&
          $WLXIM.user.get_status() == t.UserStatus.signedOut
        )
          i.find("table.resignin").show();
        else {
          if (
            !$WLXIM.user ||
            $WLXIM.user.get_presence().get_status() !=
              t.PresenceStatus.offline ||
            $WLXIM.user.get_status() != t.UserStatus.signedIn
          )
            return void u();
          l();
        }
        d();
      }
      function l() {
        var t = e(".sidebar_info");
        d(),
          t.find("table").hide(),
          t.find("table.signout").show(),
          we && (we.dispose(), (we = null), e("#chat_view_body").empty());
      }
      function u() {
        var t = e(".sidebar_info");
        return t.is(":hidden")
          ? void t.hide()
          : (k.Animations.fadeOut(t).then(function () {
              t.hide();
            }),
            void (Se && $WLXIM.startConversationWithContactId(Se, qe, !0)));
      }
      function d() {
        var t = e(".sidebar_info");
        t.is(":hidden") &&
          (t.show(),
          k.Animations.fadeIn(t).then(function () {}),
          $WLXIM.removeAllToasts());
      }
      function f() {
        A.when("$WLXIM.UserSignedIn", 0, function () {
          (uiQosApiStartTime = new Date().getTime()),
            g(),
            (Ae = !0),
            (xe = !1),
            $WLXIM.isWac ||
              e($WLXIM.user.get_conversations()).bind(
                "getRecentConversationsCompleted",
                function () {
                  var e = $WLXIM.getSidebarOpenCookieState();
                  e &&
                    e != j &&
                    (e != O &&
                    null !=
                      $WLXIM.user.get_contacts().findByIdWithoutRoleCheck(e)
                      ? $WLXIM.startConversationWithContactId(e, qe, !1)
                      : $WLXIM.showSidebar(!1));
                }
              );
        });
      }
      function g() {
        var t = null,
          n = $.$pwc.settings.getImHistoryEnabled();
        n && (t = h()),
          (be = new $.MsgrUI.LandingPageControl($WLXIM.user)),
          e("#rec_conv_body").append(be.render()),
          be.activate(),
          Ue && w(),
          p();
      }
      function p() {
        var t = $.MsgrUI,
          n = e("#chat_view_body");
        we && (n.empty(), we.dispose()),
          Ce
            ? ((we = new t.ModernConversationControl(
                n[0],
                null,
                Ce,
                $WLXIM.user
              )),
              (Ce = null))
            : Se &&
              (we = new t.ModernConversationControl(n[0], Se, null, null));
      }
      function h() {
        var e = D.WebIM.mh;
        return "javascript:window.location='" + e + "'";
      }
      function v(e) {
        return D.WebIM.imgBase + e;
      }
      function m(e, t, n, i) {
        var r = N.createElement(e);
        return (
          i && (r.innerHTML = i),
          n && ((r.id = n), (r.className = n)),
          t && t.appendChild(r),
          r
        );
      }
      function _() {
        var t =
            'a[href][tabindex!="-1"]:visible, textarea[tabindex!="-1"]:visible:not([disabled])',
          n = e(
            ".WebIMUpsell:visible, .RecentConversationsControl_ConnectedTo, .ModernConversationControlBottom",
            "#sidebar > div:visible"
          );
        Ye = e(t, n).last();
      }
      function y() {
        var t = $WLXIM;
        if (
          (D.WebIM.f || t.init(),
          A.register("wlxim", 0, !0),
          e(".App #BelowHeader").length > 0)
        )
          $WLXIM.setPaneToResize(e(".App #BelowHeader"));
        else {
          var n = e("#c_base"),
            i = e("div.Files-belowHeader"),
            r = e("div.od-Photos-belowHeader");
          i.length > 0
            ? $WLXIM.setPaneToResize(i)
            : r.length > 0
            ? $WLXIM.setPaneToResize(r)
            : n.length > 0 && $WLXIM.setPaneToResize(n);
        }
        0 == e("#c_header").length
          ? $WLXIM.setSidebarToFullScreen(!0)
          : $WLXIM.setSidebarToFullScreen(!1);
      }
      function b(e, t, n) {
        e &&
          (M.stopScenario(e, t, n),
          e.id && x.log({ eventType: e.id, resultCode: t ? null : n }, !t));
      }
      function w() {
        var e = { ConversationCount: be.get_visibleItemCount() };
        $.$BSI.reportEvent("WebIM.RecentConversationCount", e),
          x.logDetails("WebIM_RecentConversationCount", e);
      }
      function S(e, t, n) {
        if (t !== qe && Ze.indexOf(e) < 0) {
          Ze.push(e);
          var i = {
            WebIMLaunchPoint: t,
            ConversationType: n,
            isOverlayMode: $WLXIM.isSidebarOverlay(),
          };
          $.$BSI.reportEvent("WebIM.ConversationStarted", i),
            x.logDetails("WebIM_ConversationStarted", i);
        }
      }
      function C(e) {
        var t = { WebIMCloseLocation: e };
        $.$BSI.reportEvent("WebIM.SidebarHidden", { WebIMCloseLocation: e }),
          x.logDetails("WebIM_SidebarHidden", t);
      }
      function I(t, n, i) {
        var r = {};
        (r.TimeToLogin = Math.floor((new Date() - Pe) / 1e3)),
          (r.SignInSuccess = t),
          (r.Culture = D.mkt),
          (r.MessengerError = i || "-"),
          (r.WebImError = n || "-"),
          (r.EndpointId = t
            ? $WLXIM.user.get_localEndpoint().get_id().toString()
            : "-"),
          (r.WLContacts = 0),
          (r.SkypeContacts = 0),
          (r.ConnectContacts = 0);
        try {
          var o = $.Microsoft.Live.Messenger;
          if (
            ((r.IsSkypeLogin = o.Services.SkyJSHelper.skypeEnabled),
            r.IsSkypeLogin)
          ) {
            var a = o.Services.SkyJSHelper.initErrorCode;
            (r.SkyjsErrorCode = "" == a ? "-" : a),
              (r.SkypeAccountType = $.SkyJS.Outlook.isUserLinkStatusActive()),
              (r.SkypeLoginTime = $WLXIM.user.get_identity().skypeLoginTime);
          }
          for (var s = 0; s < $WLXIM.user.get_contacts().get_count(); s++)
            for (
              var c = $WLXIM.user.get_contacts().get_item(s).get_addresses(),
                l = 0;
              l < c.get_count();
              l++
            ) {
              var u = c.get_item(l).get_type();
              switch (u) {
                case o.IMAddressType.windowsLive:
                  r.WLContacts++;
                  break;
                case o.IMAddressType.skype:
                  r.SkypeContacts++;
                  break;
                case o.IMAddressType.connect:
                  r.ConnectContacts++;
              }
            }
        } catch (d) {
          x.logError("WebIM_SkypeReportingError", d);
        }
        var f = {
            TimeToLogin: 0,
            SkypeLoginTime: 0,
            IsSkypeLogin: !1,
            SignInSuccess: !1,
            SkyjsErrorCode: "-",
            SkypeAccountType: !1,
            Culture: "-",
            MessengerError: "-",
            WebImError: "-",
            EndpointId: "-",
            WLContacts: 0,
            SkypeContacts: 0,
            ConnectContacts: 0,
          },
          g = e.extend({}, f, r);
        $BSI.reportEvent("WebIM.LoginTime", g),
          x.logDetails("WebIM_LoginTime", g);
      }
      var $ = window,
        k = $.wLive,
        L = $.$B,
        T = $.$Network,
        M = $.$ScenarioQoS,
        P = $.$Cookie,
        D = $.$Config,
        A = $.$Do,
        x = k.People.Reporter,
        N = $.document,
        E = $._ge,
        B = "DIV",
        W = "rgba(0, 0, 0, 0.24)",
        R = "webim/imagestripmessaging.png",
        F = "webim/messaging_icon_1.png",
        H = "common/spinner_grey_40_transparent.gif",
        O = 0,
        j = -1,
        U = "FB",
        Q = "WL",
        X = "SKYPE",
        q = "SCD",
        z = "webimend",
        G = "searchshared",
        V = "WebIM",
        J = "WebIM_CoreScriptLoad",
        K = "WebIM_SkypeSendRequest",
        Y = "WebIM_SkypeDeclineRequest",
        Z = "WebIM_BlockRequest",
        ee = "WebIM_UnblockRequest",
        te = "WebIM_CoreScriptLoad_Loader",
        ne = "WebIM_CoreScriptLoad_MessengerCore",
        ie = "WebIM_CoreScriptLoad_MessengerStrings",
        re = "WebIM_CoreScriptLoad_SkyJS",
        oe = "WebIM_SkypeSendRequest_Call",
        ae = "WebIM_SkypeDeclineRequest_Call",
        se = "WebIM_SkypeBlockRequest_Call",
        ce = "WebIM_SkypeUnblockRequest_Call",
        le = "WebIM_MessengerBlockRequest_Call",
        ue = "WebIM_MessengerUnblockRequest_Call",
        de = "ScriptLoadFailure",
        fe =
          '<div><div class="wim_decline_block"><input tabindex="-1" title="{0}" aria-label="{0}" type="checkbox" value="Block"><label title="{0}">{0}</label></div><div><input tabindex="-1" title="{1}" aria-label="{1}" type="checkbox" value="ReportAbuse"><label title="{1}">{1}</label></div></div>',
        ge =
          '<div class="wim_block_message">{0}</div><div class="wim_block_repabuse"><input tabindex="-1" title="{1}" aria-label="{1}" type="checkbox" value="ReportAbuse"><label title="{1}">{1}</label></div>',
        pe = 1e5,
        he = pe,
        ve = 300,
        me = 20,
        _e = new Array(1);
      _e[U] = "sn/PsaMedium/FBActive.png";
      var ye = new Array(1);
      ye[U] = "Facebook";
      var be,
        we,
        Se,
        Ce,
        Ie,
        $e,
        ke,
        Le,
        Te,
        Me,
        Pe,
        De,
        Ae,
        xe,
        Ne,
        Ee = !1,
        Be = 0,
        We = 0,
        Re = 0,
        Fe = {},
        He = {},
        Oe = {},
        je = !1,
        Ue = !1,
        Qe = !1,
        Xe = 50,
        qe = "resumedConversation",
        ze = !1,
        Ge = !1,
        Ve = !1,
        Je = 0,
        Ke = null,
        Ye = null,
        Ze = [];
      n();
    })(window.originaljQuery || jQuery);
  }),
  define("wliveloaded", ["webim"], function () {
    !(function () {
      $Do.register("$WLiveLoaded");
    })();
  }),
  define("Embed2", function () {});
