!(function (t, e) {
  "function" == typeof define && define.amd
    ? define([], e())
    : "object" == typeof module && module.exports
    ? (module.exports = e())
    : (function n() {
        document && document.body ? (t.zenscroll = e()) : setTimeout(n, 9);
      })();
})(this, function () {
  "use strict";
  var t = function (t) {
    return (
      "getComputedStyle" in window &&
      "smooth" === window.getComputedStyle(t)["scroll-behavior"]
    );
  };
  if ("undefined" == typeof window || !("document" in window)) return {};
  var e = function (e, n, o) {
      (n = n || 999), o || 0 === o || (o = 9);
      var i,
        r = function (t) {
          i = t;
        },
        u = function () {
          clearTimeout(i), r(0);
        },
        c = function (t) {
          return Math.max(0, e.getTopOf(t) - o);
        },
        f = function (o, i, c) {
          if ((u(), 0 === i || (i && i < 0) || t(e.body))) e.toY(o), c && c();
          else {
            var f = e.getY(),
              a = Math.max(0, o) - f,
              l = new Date().getTime();
            (i = i || Math.min(Math.abs(a), n)),
              (function t() {
                r(
                  setTimeout(function () {
                    var n = Math.min(1, (new Date().getTime() - l) / i),
                      o = Math.max(
                        0,
                        Math.floor(
                          f + a * (n < 0.5 ? 2 * n * n : n * (4 - 2 * n) - 1)
                        )
                      );
                    e.toY(o),
                      n < 1 && e.getHeight() + o < e.body.scrollHeight
                        ? t()
                        : (setTimeout(u, 99), c && c());
                  }, 9)
                );
              })();
          }
        },
        a = function (t, e, n) {
          f(c(t), e, n);
        },
        l = function (t, n, i) {
          var r = t.getBoundingClientRect().height,
            u = e.getTopOf(t) + r,
            l = e.getHeight(),
            s = e.getY(),
            d = s + l;
          c(t) < s || r + o > l
            ? a(t, n, i)
            : u + o > d
            ? f(u - l + o, n, i)
            : i && i();
        },
        s = function (t, n, o, i) {
          f(
            Math.max(
              0,
              e.getTopOf(t) -
                e.getHeight() / 2 +
                (o || t.getBoundingClientRect().height / 2)
            ),
            n,
            i
          );
        };
      return {
        setup: function (t, e) {
          return (
            (0 === t || t) && (n = t),
            (0 === e || e) && (o = e),
            { defaultDuration: n, edgeOffset: o }
          );
        },
        to: a,
        toY: f,
        intoView: l,
        center: s,
        stop: u,
        moving: function () {
          return !!i;
        },
        getY: e.getY,
        getTopOf: e.getTopOf,
      };
    },
    n = document.documentElement,
    o = function () {
      return window.scrollY || n.scrollTop;
    },
    i = e({
      body: document.scrollingElement || document.body,
      toY: function (t) {
        window.scrollTo(0, t);
      },
      getY: o,
      getHeight: function () {
        return window.innerHeight || n.clientHeight;
      },
      getTopOf: function (t) {
        return t.getBoundingClientRect().top + o() - n.offsetTop;
      },
    });
  if (
    ((i.createScroller = function (t, o, i) {
      return e(
        {
          body: t,
          toY: function (e) {
            t.scrollTop = e;
          },
          getY: function () {
            return t.scrollTop;
          },
          getHeight: function () {
            return Math.min(
              t.clientHeight,
              window.innerHeight || n.clientHeight
            );
          },
          getTopOf: function (t) {
            return t.offsetTop;
          },
        },
        o,
        i
      );
    }),
    "addEventListener" in window && !window.noZensmooth && !t(document.body))
  ) {
    var r = "scrollRestoration" in history;
    r && (history.scrollRestoration = "auto"),
      window.addEventListener(
        "load",
        function () {
          r &&
            (setTimeout(function () {
              history.scrollRestoration = "manual";
            }, 9),
            window.addEventListener(
              "popstate",
              function (t) {
                t.state && "zenscrollY" in t.state && i.toY(t.state.zenscrollY);
              },
              !1
            )),
            window.location.hash &&
              setTimeout(function () {
                var t = i.setup().edgeOffset;
                if (t) {
                  var e = document.getElementById(
                    window.location.href.split("#")[1]
                  );
                  if (e) {
                    var n = Math.max(0, i.getTopOf(e) - t),
                      o = i.getY() - n;
                    0 <= o && o < 9 && window.scrollTo(0, n);
                  }
                }
              }, 9);
        },
        !1
      );
    var u = new RegExp("(^|\\s)noZensmooth(\\s|$)");
    window.addEventListener(
      "click",
      function (t) {
        for (var e = t.target; e && "A" !== e.tagName; ) e = e.parentNode;
        if (
          !(
            !e ||
            1 !== t.which ||
            t.shiftKey ||
            t.metaKey ||
            t.ctrlKey ||
            t.altKey
          )
        ) {
          if (r)
            try {
              history.replaceState({ zenscrollY: i.getY() }, "");
            } catch (t) {}
          var n = e.getAttribute("href") || "";
          if (0 === n.indexOf("#") && !u.test(e.className)) {
            var o = 0,
              c = document.getElementById(n.substring(1));
            if ("#" !== n) {
              if (!c) return;
              o = i.getTopOf(c);
            }
            t.preventDefault();
            var f = function () {
                window.location = n;
              },
              a = i.setup().edgeOffset;
            a &&
              ((o = Math.max(0, o - a)),
              (f = function () {
                history.pushState(null, "", n);
              })),
              i.toY(o, null, f);
          }
        }
      },
      !1
    );
  }
  return i;
});
