/*!--------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/ (function () {
  var H = [
      "require",
      "exports",
      "vs/base/common/platform",
      "vs/base/common/path",
      "vs/base/common/process",
      "fs",
      "vs/base/node/terminalEncoding",
      "child_process",
      "vs/nls!vs/platform/environment/node/argv",
      "vs/platform/environment/node/argv",
      "vs/platform/environment/node/stdin",
      "os",
      "vs/platform/environment/node/wait",
      "vs/nls",
      "vs/nls!vs/server/remoteCli",
      "minimist",
      "vs/server/remoteCli",
      "url",
      "http",
    ],
    q = function (R) {
      for (var t = [], y = 0, f = R.length; y < f; y++) t[y] = H[R[y]];
      return t;
    };
  define(H[2], q([0, 1]), function (R, t) {
    "use strict";
    var y;
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.isLittleEndian =
        t.OS =
        t.OperatingSystem =
        t.setImmediate =
        t.translationsConfigFile =
        t.locale =
        t.Language =
        t.language =
        t.userAgent =
        t.platform =
        t.isIOS =
        t.isWeb =
        t.isNative =
        t.isLinuxSnap =
        t.isLinux =
        t.isMacintosh =
        t.isWindows =
        t.PlatformToString =
        t.Platform =
        t.isPreferringBrowserCodeLoad =
        t.browserCodeLoadingCacheStrategy =
        t.isElectronSandboxed =
        t.globals =
          void 0);
    const f = "en";
    let E = !1,
      D = !1,
      M = !1,
      O = !1,
      w = !1,
      $ = !1,
      P = !1,
      k,
      L = f,
      v,
      c;
    t.globals =
      typeof self == "object" ? self : typeof global == "object" ? global : {};
    let g;
    typeof t.globals.vscode != "undefined"
      ? (g = t.globals.vscode.process)
      : typeof process != "undefined" && (g = process);
    const b =
      typeof ((y = g == null ? void 0 : g.versions) === null || y === void 0
        ? void 0
        : y.electron) == "string" && g.type === "renderer";
    if (
      ((t.isElectronSandboxed = b && (g == null ? void 0 : g.sandboxed)),
      (t.browserCodeLoadingCacheStrategy = (() => {
        if (t.isElectronSandboxed) return "bypassHeatCheck";
        const r = g == null ? void 0 : g.env.VSCODE_BROWSER_CODE_LOADING;
        if (typeof r == "string")
          return r === "none" ||
            r === "code" ||
            r === "bypassHeatCheck" ||
            r === "bypassHeatCheckAndEagerCompile"
            ? r
            : "bypassHeatCheck";
      })()),
      (t.isPreferringBrowserCodeLoad =
        typeof t.browserCodeLoadingCacheStrategy == "string"),
      typeof navigator == "object" && !b)
    )
      (c = navigator.userAgent),
        (E = c.indexOf("Windows") >= 0),
        (D = c.indexOf("Macintosh") >= 0),
        (P =
          (c.indexOf("Macintosh") >= 0 ||
            c.indexOf("iPad") >= 0 ||
            c.indexOf("iPhone") >= 0) &&
          !!navigator.maxTouchPoints &&
          navigator.maxTouchPoints > 0),
        (M = c.indexOf("Linux") >= 0),
        ($ = !0),
        (k = navigator.language),
        (L = k);
    else if (typeof g == "object") {
      (E = g.platform === "win32"),
        (D = g.platform === "darwin"),
        (M = g.platform === "linux"),
        (O = M && !!g.env.SNAP && !!g.env.SNAP_REVISION),
        (k = f),
        (L = f);
      const r = g.env.VSCODE_NLS_CONFIG;
      if (r)
        try {
          const a = JSON.parse(r),
            d = a.availableLanguages["*"];
          (k = a.locale), (L = d || f), (v = a._translationsConfigFile);
        } catch (a) {}
      w = !0;
    } else console.error("Unable to resolve platform.");
    var I;
    (function (r) {
      (r[(r.Web = 0)] = "Web"),
        (r[(r.Mac = 1)] = "Mac"),
        (r[(r.Linux = 2)] = "Linux"),
        (r[(r.Windows = 3)] = "Windows");
    })((I = t.Platform || (t.Platform = {})));
    function T(r) {
      switch (r) {
        case 0:
          return "Web";
        case 1:
          return "Mac";
        case 2:
          return "Linux";
        case 3:
          return "Windows";
      }
    }
    t.PlatformToString = T;
    let e = 0;
    D ? (e = 1) : E ? (e = 3) : M && (e = 2),
      (t.isWindows = E),
      (t.isMacintosh = D),
      (t.isLinux = M),
      (t.isLinuxSnap = O),
      (t.isNative = w),
      (t.isWeb = $),
      (t.isIOS = P),
      (t.platform = e),
      (t.userAgent = c),
      (t.language = L);
    var n;
    (function (r) {
      function a() {
        return t.language;
      }
      r.value = a;
      function d() {
        return t.language.length === 2
          ? t.language === "en"
          : t.language.length >= 3
          ? t.language[0] === "e" &&
            t.language[1] === "n" &&
            t.language[2] === "-"
          : !1;
      }
      r.isDefaultVariant = d;
      function h() {
        return t.language === "en";
      }
      r.isDefault = h;
    })((n = t.Language || (t.Language = {}))),
      (t.locale = k),
      (t.translationsConfigFile = v),
      (t.setImmediate = (function () {
        if (t.globals.setImmediate)
          return t.globals.setImmediate.bind(t.globals);
        if (
          typeof t.globals.postMessage == "function" &&
          !t.globals.importScripts
        ) {
          let d = [];
          t.globals.addEventListener("message", (C) => {
            if (C.data && C.data.vscodeSetImmediateId)
              for (let u = 0, A = d.length; u < A; u++) {
                const W = d[u];
                if (W.id === C.data.vscodeSetImmediateId) {
                  d.splice(u, 1), W.callback();
                  return;
                }
              }
          });
          let h = 0;
          return (C) => {
            const u = ++h;
            d.push({ id: u, callback: C }),
              t.globals.postMessage({ vscodeSetImmediateId: u }, "*");
          };
        }
        if (typeof (g == null ? void 0 : g.nextTick) == "function")
          return g.nextTick.bind(g);
        const a = Promise.resolve();
        return (d) => a.then(d);
      })());
    var l;
    (function (r) {
      (r[(r.Windows = 1)] = "Windows"),
        (r[(r.Macintosh = 2)] = "Macintosh"),
        (r[(r.Linux = 3)] = "Linux");
    })((l = t.OperatingSystem || (t.OperatingSystem = {}))),
      (t.OS = D || P ? 2 : E ? 1 : 3);
    let s = !0,
      i = !1;
    function o() {
      if (!i) {
        i = !0;
        const r = new Uint8Array(2);
        (r[0] = 1),
          (r[1] = 2),
          (s = new Uint16Array(r.buffer)[0] === (2 << 8) + 1);
      }
      return s;
    }
    t.isLittleEndian = o;
  }),
    define(H[4], q([0, 1, 2]), function (R, t, y) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.nextTick = t.platform = t.env = t.cwd = void 0);
      let f;
      if (typeof y.globals.vscode != "undefined") {
        const E = y.globals.vscode.process;
        f = {
          get platform() {
            return E.platform;
          },
          get env() {
            return E.env;
          },
          cwd() {
            return E.cwd();
          },
          nextTick(D) {
            return (0, y.setImmediate)(D);
          },
        };
      } else
        typeof process != "undefined"
          ? (f = {
              get platform() {
                return process.platform;
              },
              get env() {
                return process.env;
              },
              cwd() {
                return process.env.VSCODE_CWD || process.cwd();
              },
              nextTick(E) {
                return process.nextTick(E);
              },
            })
          : (f = {
              get platform() {
                return y.isWindows
                  ? "win32"
                  : y.isMacintosh
                  ? "darwin"
                  : "linux";
              },
              nextTick(E) {
                return (0, y.setImmediate)(E);
              },
              get env() {
                return Object.create(null);
              },
              cwd() {
                return "/";
              },
            });
      (t.cwd = f.cwd),
        (t.env = f.env),
        (t.platform = f.platform),
        (t.nextTick = f.nextTick);
    }),
    define(H[3], q([0, 1, 4]), function (R, t, y) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.delimiter =
          t.sep =
          t.toNamespacedPath =
          t.parse =
          t.format =
          t.extname =
          t.basename =
          t.dirname =
          t.relative =
          t.resolve =
          t.join =
          t.isAbsolute =
          t.normalize =
          t.posix =
          t.win32 =
            void 0);
      const f = 65,
        E = 97,
        D = 90,
        M = 122,
        O = 46,
        w = 47,
        $ = 92,
        P = 58,
        k = 63;
      class L extends Error {
        constructor(n, l, s) {
          let i;
          typeof l == "string" && l.indexOf("not ") === 0
            ? ((i = "must not be"), (l = l.replace(/^not /, "")))
            : (i = "must be");
          const o = n.indexOf(".") !== -1 ? "property" : "argument";
          let r = `The "${n}" ${o} ${i} of type ${l}`;
          (r += `. Received type ${typeof s}`),
            super(r),
            (this.code = "ERR_INVALID_ARG_TYPE");
        }
      }
      function v(e, n) {
        if (typeof e != "string") throw new L(n, "string", e);
      }
      function c(e) {
        return e === w || e === $;
      }
      function g(e) {
        return e === w;
      }
      function b(e) {
        return (e >= f && e <= D) || (e >= E && e <= M);
      }
      function I(e, n, l, s) {
        let i = "",
          o = 0,
          r = -1,
          a = 0,
          d = 0;
        for (let h = 0; h <= e.length; ++h) {
          if (h < e.length) d = e.charCodeAt(h);
          else {
            if (s(d)) break;
            d = w;
          }
          if (s(d)) {
            if (!(r === h - 1 || a === 1))
              if (a === 2) {
                if (
                  i.length < 2 ||
                  o !== 2 ||
                  i.charCodeAt(i.length - 1) !== O ||
                  i.charCodeAt(i.length - 2) !== O
                ) {
                  if (i.length > 2) {
                    const C = i.lastIndexOf(l);
                    C === -1
                      ? ((i = ""), (o = 0))
                      : ((i = i.slice(0, C)),
                        (o = i.length - 1 - i.lastIndexOf(l))),
                      (r = h),
                      (a = 0);
                    continue;
                  } else if (i.length !== 0) {
                    (i = ""), (o = 0), (r = h), (a = 0);
                    continue;
                  }
                }
                n && ((i += i.length > 0 ? `${l}..` : ".."), (o = 2));
              } else
                i.length > 0
                  ? (i += `${l}${e.slice(r + 1, h)}`)
                  : (i = e.slice(r + 1, h)),
                  (o = h - r - 1);
            (r = h), (a = 0);
          } else d === O && a !== -1 ? ++a : (a = -1);
        }
        return i;
      }
      function T(e, n) {
        if (n === null || typeof n != "object")
          throw new L("pathObject", "Object", n);
        const l = n.dir || n.root,
          s = n.base || `${n.name || ""}${n.ext || ""}`;
        return l ? (l === n.root ? `${l}${s}` : `${l}${e}${s}`) : s;
      }
      (t.win32 = {
        resolve(...e) {
          let n = "",
            l = "",
            s = !1;
          for (let i = e.length - 1; i >= -1; i--) {
            let o;
            if (i >= 0) {
              if (((o = e[i]), v(o, "path"), o.length === 0)) continue;
            } else
              n.length === 0
                ? (o = y.cwd())
                : ((o = y.env[`=${n}`] || y.cwd()),
                  (o === void 0 ||
                    (o.slice(0, 2).toLowerCase() !== n.toLowerCase() &&
                      o.charCodeAt(2) === $)) &&
                    (o = `${n}\\`));
            const r = o.length;
            let a = 0,
              d = "",
              h = !1;
            const C = o.charCodeAt(0);
            if (r === 1) c(C) && ((a = 1), (h = !0));
            else if (c(C))
              if (((h = !0), c(o.charCodeAt(1)))) {
                let u = 2,
                  A = u;
                for (; u < r && !c(o.charCodeAt(u)); ) u++;
                if (u < r && u !== A) {
                  const W = o.slice(A, u);
                  for (A = u; u < r && c(o.charCodeAt(u)); ) u++;
                  if (u < r && u !== A) {
                    for (A = u; u < r && !c(o.charCodeAt(u)); ) u++;
                    (u === r || u !== A) &&
                      ((d = `\\\\${W}\\${o.slice(A, u)}`), (a = u));
                  }
                }
              } else a = 1;
            else
              b(C) &&
                o.charCodeAt(1) === P &&
                ((d = o.slice(0, 2)),
                (a = 2),
                r > 2 && c(o.charCodeAt(2)) && ((h = !0), (a = 3)));
            if (d.length > 0)
              if (n.length > 0) {
                if (d.toLowerCase() !== n.toLowerCase()) continue;
              } else n = d;
            if (s) {
              if (n.length > 0) break;
            } else if (
              ((l = `${o.slice(a)}\\${l}`), (s = h), h && n.length > 0)
            )
              break;
          }
          return (l = I(l, !s, "\\", c)), s ? `${n}\\${l}` : `${n}${l}` || ".";
        },
        normalize(e) {
          v(e, "path");
          const n = e.length;
          if (n === 0) return ".";
          let l = 0,
            s,
            i = !1;
          const o = e.charCodeAt(0);
          if (n === 1) return g(o) ? "\\" : e;
          if (c(o))
            if (((i = !0), c(e.charCodeAt(1)))) {
              let a = 2,
                d = a;
              for (; a < n && !c(e.charCodeAt(a)); ) a++;
              if (a < n && a !== d) {
                const h = e.slice(d, a);
                for (d = a; a < n && c(e.charCodeAt(a)); ) a++;
                if (a < n && a !== d) {
                  for (d = a; a < n && !c(e.charCodeAt(a)); ) a++;
                  if (a === n) return `\\\\${h}\\${e.slice(d)}\\`;
                  a !== d && ((s = `\\\\${h}\\${e.slice(d, a)}`), (l = a));
                }
              }
            } else l = 1;
          else
            b(o) &&
              e.charCodeAt(1) === P &&
              ((s = e.slice(0, 2)),
              (l = 2),
              n > 2 && c(e.charCodeAt(2)) && ((i = !0), (l = 3)));
          let r = l < n ? I(e.slice(l), !i, "\\", c) : "";
          return (
            r.length === 0 && !i && (r = "."),
            r.length > 0 && c(e.charCodeAt(n - 1)) && (r += "\\"),
            s === void 0 ? (i ? `\\${r}` : r) : i ? `${s}\\${r}` : `${s}${r}`
          );
        },
        isAbsolute(e) {
          v(e, "path");
          const n = e.length;
          if (n === 0) return !1;
          const l = e.charCodeAt(0);
          return (
            c(l) ||
            (n > 2 && b(l) && e.charCodeAt(1) === P && c(e.charCodeAt(2)))
          );
        },
        join(...e) {
          if (e.length === 0) return ".";
          let n, l;
          for (let o = 0; o < e.length; ++o) {
            const r = e[o];
            v(r, "path"),
              r.length > 0 && (n === void 0 ? (n = l = r) : (n += `\\${r}`));
          }
          if (n === void 0) return ".";
          let s = !0,
            i = 0;
          if (typeof l == "string" && c(l.charCodeAt(0))) {
            ++i;
            const o = l.length;
            o > 1 &&
              c(l.charCodeAt(1)) &&
              (++i, o > 2 && (c(l.charCodeAt(2)) ? ++i : (s = !1)));
          }
          if (s) {
            for (; i < n.length && c(n.charCodeAt(i)); ) i++;
            i >= 2 && (n = `\\${n.slice(i)}`);
          }
          return t.win32.normalize(n);
        },
        relative(e, n) {
          if ((v(e, "from"), v(n, "to"), e === n)) return "";
          const l = t.win32.resolve(e),
            s = t.win32.resolve(n);
          if (
            l === s ||
            ((e = l.toLowerCase()), (n = s.toLowerCase()), e === n)
          )
            return "";
          let i = 0;
          for (; i < e.length && e.charCodeAt(i) === $; ) i++;
          let o = e.length;
          for (; o - 1 > i && e.charCodeAt(o - 1) === $; ) o--;
          const r = o - i;
          let a = 0;
          for (; a < n.length && n.charCodeAt(a) === $; ) a++;
          let d = n.length;
          for (; d - 1 > a && n.charCodeAt(d - 1) === $; ) d--;
          const h = d - a,
            C = r < h ? r : h;
          let u = -1,
            A = 0;
          for (; A < C; A++) {
            const p = e.charCodeAt(i + A);
            if (p !== n.charCodeAt(a + A)) break;
            p === $ && (u = A);
          }
          if (A !== C) {
            if (u === -1) return s;
          } else {
            if (h > C) {
              if (n.charCodeAt(a + A) === $) return s.slice(a + A + 1);
              if (A === 2) return s.slice(a + A);
            }
            r > C && (e.charCodeAt(i + A) === $ ? (u = A) : A === 2 && (u = 3)),
              u === -1 && (u = 0);
          }
          let W = "";
          for (A = i + u + 1; A <= o; ++A)
            (A === o || e.charCodeAt(A) === $) &&
              (W += W.length === 0 ? ".." : "\\..");
          return (
            (a += u),
            W.length > 0
              ? `${W}${s.slice(a, d)}`
              : (s.charCodeAt(a) === $ && ++a, s.slice(a, d))
          );
        },
        toNamespacedPath(e) {
          if (typeof e != "string") return e;
          if (e.length === 0) return "";
          const n = t.win32.resolve(e);
          if (n.length <= 2) return e;
          if (n.charCodeAt(0) === $) {
            if (n.charCodeAt(1) === $) {
              const l = n.charCodeAt(2);
              if (l !== k && l !== O) return `\\\\?\\UNC\\${n.slice(2)}`;
            }
          } else if (
            b(n.charCodeAt(0)) &&
            n.charCodeAt(1) === P &&
            n.charCodeAt(2) === $
          )
            return `\\\\?\\${n}`;
          return e;
        },
        dirname(e) {
          v(e, "path");
          const n = e.length;
          if (n === 0) return ".";
          let l = -1,
            s = 0;
          const i = e.charCodeAt(0);
          if (n === 1) return c(i) ? e : ".";
          if (c(i)) {
            if (((l = s = 1), c(e.charCodeAt(1)))) {
              let a = 2,
                d = a;
              for (; a < n && !c(e.charCodeAt(a)); ) a++;
              if (a < n && a !== d) {
                for (d = a; a < n && c(e.charCodeAt(a)); ) a++;
                if (a < n && a !== d) {
                  for (d = a; a < n && !c(e.charCodeAt(a)); ) a++;
                  if (a === n) return e;
                  a !== d && (l = s = a + 1);
                }
              }
            }
          } else
            b(i) &&
              e.charCodeAt(1) === P &&
              ((l = n > 2 && c(e.charCodeAt(2)) ? 3 : 2), (s = l));
          let o = -1,
            r = !0;
          for (let a = n - 1; a >= s; --a)
            if (c(e.charCodeAt(a))) {
              if (!r) {
                o = a;
                break;
              }
            } else r = !1;
          if (o === -1) {
            if (l === -1) return ".";
            o = l;
          }
          return e.slice(0, o);
        },
        basename(e, n) {
          n !== void 0 && v(n, "ext"), v(e, "path");
          let l = 0,
            s = -1,
            i = !0,
            o;
          if (
            (e.length >= 2 &&
              b(e.charCodeAt(0)) &&
              e.charCodeAt(1) === P &&
              (l = 2),
            n !== void 0 && n.length > 0 && n.length <= e.length)
          ) {
            if (n === e) return "";
            let r = n.length - 1,
              a = -1;
            for (o = e.length - 1; o >= l; --o) {
              const d = e.charCodeAt(o);
              if (c(d)) {
                if (!i) {
                  l = o + 1;
                  break;
                }
              } else
                a === -1 && ((i = !1), (a = o + 1)),
                  r >= 0 &&
                    (d === n.charCodeAt(r)
                      ? --r == -1 && (s = o)
                      : ((r = -1), (s = a)));
            }
            return (
              l === s ? (s = a) : s === -1 && (s = e.length), e.slice(l, s)
            );
          }
          for (o = e.length - 1; o >= l; --o)
            if (c(e.charCodeAt(o))) {
              if (!i) {
                l = o + 1;
                break;
              }
            } else s === -1 && ((i = !1), (s = o + 1));
          return s === -1 ? "" : e.slice(l, s);
        },
        extname(e) {
          v(e, "path");
          let n = 0,
            l = -1,
            s = 0,
            i = -1,
            o = !0,
            r = 0;
          e.length >= 2 &&
            e.charCodeAt(1) === P &&
            b(e.charCodeAt(0)) &&
            (n = s = 2);
          for (let a = e.length - 1; a >= n; --a) {
            const d = e.charCodeAt(a);
            if (c(d)) {
              if (!o) {
                s = a + 1;
                break;
              }
              continue;
            }
            i === -1 && ((o = !1), (i = a + 1)),
              d === O
                ? l === -1
                  ? (l = a)
                  : r !== 1 && (r = 1)
                : l !== -1 && (r = -1);
          }
          return l === -1 ||
            i === -1 ||
            r === 0 ||
            (r === 1 && l === i - 1 && l === s + 1)
            ? ""
            : e.slice(l, i);
        },
        format: T.bind(null, "\\"),
        parse(e) {
          v(e, "path");
          const n = { root: "", dir: "", base: "", ext: "", name: "" };
          if (e.length === 0) return n;
          const l = e.length;
          let s = 0,
            i = e.charCodeAt(0);
          if (l === 1)
            return c(i)
              ? ((n.root = n.dir = e), n)
              : ((n.base = n.name = e), n);
          if (c(i)) {
            if (((s = 1), c(e.charCodeAt(1)))) {
              let u = 2,
                A = u;
              for (; u < l && !c(e.charCodeAt(u)); ) u++;
              if (u < l && u !== A) {
                for (A = u; u < l && c(e.charCodeAt(u)); ) u++;
                if (u < l && u !== A) {
                  for (A = u; u < l && !c(e.charCodeAt(u)); ) u++;
                  u === l ? (s = u) : u !== A && (s = u + 1);
                }
              }
            }
          } else if (b(i) && e.charCodeAt(1) === P) {
            if (l <= 2) return (n.root = n.dir = e), n;
            if (((s = 2), c(e.charCodeAt(2)))) {
              if (l === 3) return (n.root = n.dir = e), n;
              s = 3;
            }
          }
          s > 0 && (n.root = e.slice(0, s));
          let o = -1,
            r = s,
            a = -1,
            d = !0,
            h = e.length - 1,
            C = 0;
          for (; h >= s; --h) {
            if (((i = e.charCodeAt(h)), c(i))) {
              if (!d) {
                r = h + 1;
                break;
              }
              continue;
            }
            a === -1 && ((d = !1), (a = h + 1)),
              i === O
                ? o === -1
                  ? (o = h)
                  : C !== 1 && (C = 1)
                : o !== -1 && (C = -1);
          }
          return (
            a !== -1 &&
              (o === -1 || C === 0 || (C === 1 && o === a - 1 && o === r + 1)
                ? (n.base = n.name = e.slice(r, a))
                : ((n.name = e.slice(r, o)),
                  (n.base = e.slice(r, a)),
                  (n.ext = e.slice(o, a)))),
            r > 0 && r !== s ? (n.dir = e.slice(0, r - 1)) : (n.dir = n.root),
            n
          );
        },
        sep: "\\",
        delimiter: ";",
        win32: null,
        posix: null,
      }),
        (t.posix = {
          resolve(...e) {
            let n = "",
              l = !1;
            for (let s = e.length - 1; s >= -1 && !l; s--) {
              const i = s >= 0 ? e[s] : y.cwd();
              v(i, "path"),
                i.length !== 0 &&
                  ((n = `${i}/${n}`), (l = i.charCodeAt(0) === w));
            }
            return (n = I(n, !l, "/", g)), l ? `/${n}` : n.length > 0 ? n : ".";
          },
          normalize(e) {
            if ((v(e, "path"), e.length === 0)) return ".";
            const n = e.charCodeAt(0) === w,
              l = e.charCodeAt(e.length - 1) === w;
            return (
              (e = I(e, !n, "/", g)),
              e.length === 0
                ? n
                  ? "/"
                  : l
                  ? "./"
                  : "."
                : (l && (e += "/"), n ? `/${e}` : e)
            );
          },
          isAbsolute(e) {
            return v(e, "path"), e.length > 0 && e.charCodeAt(0) === w;
          },
          join(...e) {
            if (e.length === 0) return ".";
            let n;
            for (let l = 0; l < e.length; ++l) {
              const s = e[l];
              v(s, "path"),
                s.length > 0 && (n === void 0 ? (n = s) : (n += `/${s}`));
            }
            return n === void 0 ? "." : t.posix.normalize(n);
          },
          relative(e, n) {
            if (
              (v(e, "from"),
              v(n, "to"),
              e === n ||
                ((e = t.posix.resolve(e)), (n = t.posix.resolve(n)), e === n))
            )
              return "";
            const l = 1,
              s = e.length,
              i = s - l,
              o = 1,
              r = n.length - o,
              a = i < r ? i : r;
            let d = -1,
              h = 0;
            for (; h < a; h++) {
              const u = e.charCodeAt(l + h);
              if (u !== n.charCodeAt(o + h)) break;
              u === w && (d = h);
            }
            if (h === a)
              if (r > a) {
                if (n.charCodeAt(o + h) === w) return n.slice(o + h + 1);
                if (h === 0) return n.slice(o + h);
              } else
                i > a &&
                  (e.charCodeAt(l + h) === w ? (d = h) : h === 0 && (d = 0));
            let C = "";
            for (h = l + d + 1; h <= s; ++h)
              (h === s || e.charCodeAt(h) === w) &&
                (C += C.length === 0 ? ".." : "/..");
            return `${C}${n.slice(o + d)}`;
          },
          toNamespacedPath(e) {
            return e;
          },
          dirname(e) {
            if ((v(e, "path"), e.length === 0)) return ".";
            const n = e.charCodeAt(0) === w;
            let l = -1,
              s = !0;
            for (let i = e.length - 1; i >= 1; --i)
              if (e.charCodeAt(i) === w) {
                if (!s) {
                  l = i;
                  break;
                }
              } else s = !1;
            return l === -1
              ? n
                ? "/"
                : "."
              : n && l === 1
              ? "//"
              : e.slice(0, l);
          },
          basename(e, n) {
            n !== void 0 && v(n, "ext"), v(e, "path");
            let l = 0,
              s = -1,
              i = !0,
              o;
            if (n !== void 0 && n.length > 0 && n.length <= e.length) {
              if (n === e) return "";
              let r = n.length - 1,
                a = -1;
              for (o = e.length - 1; o >= 0; --o) {
                const d = e.charCodeAt(o);
                if (d === w) {
                  if (!i) {
                    l = o + 1;
                    break;
                  }
                } else
                  a === -1 && ((i = !1), (a = o + 1)),
                    r >= 0 &&
                      (d === n.charCodeAt(r)
                        ? --r == -1 && (s = o)
                        : ((r = -1), (s = a)));
              }
              return (
                l === s ? (s = a) : s === -1 && (s = e.length), e.slice(l, s)
              );
            }
            for (o = e.length - 1; o >= 0; --o)
              if (e.charCodeAt(o) === w) {
                if (!i) {
                  l = o + 1;
                  break;
                }
              } else s === -1 && ((i = !1), (s = o + 1));
            return s === -1 ? "" : e.slice(l, s);
          },
          extname(e) {
            v(e, "path");
            let n = -1,
              l = 0,
              s = -1,
              i = !0,
              o = 0;
            for (let r = e.length - 1; r >= 0; --r) {
              const a = e.charCodeAt(r);
              if (a === w) {
                if (!i) {
                  l = r + 1;
                  break;
                }
                continue;
              }
              s === -1 && ((i = !1), (s = r + 1)),
                a === O
                  ? n === -1
                    ? (n = r)
                    : o !== 1 && (o = 1)
                  : n !== -1 && (o = -1);
            }
            return n === -1 ||
              s === -1 ||
              o === 0 ||
              (o === 1 && n === s - 1 && n === l + 1)
              ? ""
              : e.slice(n, s);
          },
          format: T.bind(null, "/"),
          parse(e) {
            v(e, "path");
            const n = { root: "", dir: "", base: "", ext: "", name: "" };
            if (e.length === 0) return n;
            const l = e.charCodeAt(0) === w;
            let s;
            l ? ((n.root = "/"), (s = 1)) : (s = 0);
            let i = -1,
              o = 0,
              r = -1,
              a = !0,
              d = e.length - 1,
              h = 0;
            for (; d >= s; --d) {
              const C = e.charCodeAt(d);
              if (C === w) {
                if (!a) {
                  o = d + 1;
                  break;
                }
                continue;
              }
              r === -1 && ((a = !1), (r = d + 1)),
                C === O
                  ? i === -1
                    ? (i = d)
                    : h !== 1 && (h = 1)
                  : i !== -1 && (h = -1);
            }
            if (r !== -1) {
              const C = o === 0 && l ? 1 : o;
              i === -1 || h === 0 || (h === 1 && i === r - 1 && i === o + 1)
                ? (n.base = n.name = e.slice(C, r))
                : ((n.name = e.slice(C, i)),
                  (n.base = e.slice(C, r)),
                  (n.ext = e.slice(i, r)));
            }
            return o > 0 ? (n.dir = e.slice(0, o - 1)) : l && (n.dir = "/"), n;
          },
          sep: "/",
          delimiter: ":",
          win32: null,
          posix: null,
        }),
        (t.posix.win32 = t.win32.win32 = t.win32),
        (t.posix.posix = t.win32.posix = t.posix),
        (t.normalize =
          y.platform === "win32" ? t.win32.normalize : t.posix.normalize),
        (t.isAbsolute =
          y.platform === "win32" ? t.win32.isAbsolute : t.posix.isAbsolute),
        (t.join = y.platform === "win32" ? t.win32.join : t.posix.join),
        (t.resolve =
          y.platform === "win32" ? t.win32.resolve : t.posix.resolve),
        (t.relative =
          y.platform === "win32" ? t.win32.relative : t.posix.relative),
        (t.dirname =
          y.platform === "win32" ? t.win32.dirname : t.posix.dirname),
        (t.basename =
          y.platform === "win32" ? t.win32.basename : t.posix.basename),
        (t.extname =
          y.platform === "win32" ? t.win32.extname : t.posix.extname),
        (t.format = y.platform === "win32" ? t.win32.format : t.posix.format),
        (t.parse = y.platform === "win32" ? t.win32.parse : t.posix.parse),
        (t.toNamespacedPath =
          y.platform === "win32"
            ? t.win32.toNamespacedPath
            : t.posix.toNamespacedPath),
        (t.sep = y.platform === "win32" ? t.win32.sep : t.posix.sep),
        (t.delimiter =
          y.platform === "win32" ? t.win32.delimiter : t.posix.delimiter);
    }),
    define(H[6], q([0, 1, 7, 2]), function (R, t, y, f) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.resolveTerminalEncoding = void 0);
      const E = {
        437: "cp437",
        850: "cp850",
        852: "cp852",
        855: "cp855",
        857: "cp857",
        860: "cp860",
        861: "cp861",
        863: "cp863",
        865: "cp865",
        866: "cp866",
        869: "cp869",
        936: "cp936",
        1252: "cp1252",
      };
      function D($) {
        const P = $.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
        return M[P] || P;
      }
      const M = { ibm866: "cp866", big5: "cp950" },
        O = "utf8";
      async function w($) {
        let P;
        const k = process.env.VSCODE_CLI_ENCODING;
        k
          ? ($ && console.log(`Found VSCODE_CLI_ENCODING variable: ${k}`),
            (P = Promise.resolve(k)))
          : f.isWindows
          ? (P = new Promise((v) => {
              $ && console.log('Running "chcp" to detect terminal encoding...'),
                (0, y.exec)("chcp", (c, g, b) => {
                  if (g) {
                    $ && console.log(`Output from "chcp" command is: ${g}`);
                    const I = Object.keys(E);
                    for (const T of I) if (g.indexOf(T) >= 0) return v(E[T]);
                  }
                  return v(void 0);
                });
            }))
          : (P = new Promise((v) => {
              $ &&
                console.log(
                  'Running "locale charmap" to detect terminal encoding...'
                ),
                (0, y.exec)("locale charmap", (c, g, b) => v(g));
            }));
        const L = await P;
        return (
          $ && console.log(`Detected raw terminal encoding: ${L}`),
          !L || L.toLowerCase() === "utf-8" || L.toLowerCase() === O ? O : D(L)
        );
      }
      t.resolveTerminalEncoding = w;
    }),
    define(H[8], q([13, 14]), function (R, t) {
      return R.create("vs/platform/environment/node/argv", t);
    }),
    define(H[9], q([0, 1, 15, 8, 2]), function (R, t, y, f, E) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.buildVersionMessage =
          t.buildHelpMessage =
          t.formatOptions =
          t.parseArgs =
          t.OPTIONS =
            void 0);
      const D = {
        o: (0, f.localize)(0, null),
        e: (0, f.localize)(1, null),
        t: (0, f.localize)(2, null),
      };
      t.OPTIONS = {
        diff: {
          type: "boolean",
          cat: "o",
          alias: "d",
          args: ["file", "file"],
          description: (0, f.localize)(3, null),
        },
        add: {
          type: "boolean",
          cat: "o",
          alias: "a",
          args: "folder",
          description: (0, f.localize)(4, null),
        },
        goto: {
          type: "boolean",
          cat: "o",
          alias: "g",
          args: "file:line[:character]",
          description: (0, f.localize)(5, null),
        },
        "new-window": {
          type: "boolean",
          cat: "o",
          alias: "n",
          description: (0, f.localize)(6, null),
        },
        "reuse-window": {
          type: "boolean",
          cat: "o",
          alias: "r",
          description: (0, f.localize)(7, null),
        },
        wait: {
          type: "boolean",
          cat: "o",
          alias: "w",
          description: (0, f.localize)(8, null),
        },
        waitMarkerFilePath: { type: "string" },
        locale: {
          type: "string",
          cat: "o",
          args: "locale",
          description: (0, f.localize)(9, null),
        },
        "user-data-dir": {
          type: "string",
          cat: "o",
          args: "dir",
          description: (0, f.localize)(10, null),
        },
        help: {
          type: "boolean",
          cat: "o",
          alias: "h",
          description: (0, f.localize)(11, null),
        },
        "extensions-dir": {
          type: "string",
          deprecates: "extensionHomePath",
          cat: "e",
          args: "dir",
          description: (0, f.localize)(12, null),
        },
        "extensions-download-dir": { type: "string" },
        "builtin-extensions-dir": { type: "string" },
        "list-extensions": {
          type: "boolean",
          cat: "e",
          description: (0, f.localize)(13, null),
        },
        "show-versions": {
          type: "boolean",
          cat: "e",
          description: (0, f.localize)(14, null),
        },
        category: {
          type: "string",
          cat: "e",
          description: (0, f.localize)(15, null),
        },
        "install-extension": {
          type: "string[]",
          cat: "e",
          args: "extension-id[@version] | path-to-vsix",
          description: (0, f.localize)(16, null),
        },
        "uninstall-extension": {
          type: "string[]",
          cat: "e",
          args: "extension-id",
          description: (0, f.localize)(17, null),
        },
        "enable-proposed-api": {
          type: "string[]",
          cat: "e",
          args: "extension-id",
          description: (0, f.localize)(18, null),
        },
        version: {
          type: "boolean",
          cat: "t",
          alias: "v",
          description: (0, f.localize)(19, null),
        },
        verbose: {
          type: "boolean",
          cat: "t",
          description: (0, f.localize)(20, null),
        },
        log: {
          type: "string",
          cat: "t",
          args: "level",
          description: (0, f.localize)(21, null),
        },
        status: {
          type: "boolean",
          alias: "s",
          cat: "t",
          description: (0, f.localize)(22, null),
        },
        "prof-startup": {
          type: "boolean",
          cat: "t",
          description: (0, f.localize)(23, null),
        },
        "prof-append-timers": { type: "string" },
        "prof-startup-prefix": { type: "string" },
        "prof-v8-extensions": { type: "boolean" },
        "disable-extensions": {
          type: "boolean",
          deprecates: "disableExtensions",
          cat: "t",
          description: (0, f.localize)(24, null),
        },
        "disable-extension": {
          type: "string[]",
          cat: "t",
          args: "extension-id",
          description: (0, f.localize)(25, null),
        },
        sync: {
          type: "string",
          cat: "t",
          description: (0, f.localize)(26, null),
          args: ["on", "off"],
        },
        "inspect-extensions": {
          type: "string",
          deprecates: "debugPluginHost",
          args: "port",
          cat: "t",
          description: (0, f.localize)(27, null),
        },
        "inspect-brk-extensions": {
          type: "string",
          deprecates: "debugBrkPluginHost",
          args: "port",
          cat: "t",
          description: (0, f.localize)(28, null),
        },
        "disable-gpu": {
          type: "boolean",
          cat: "t",
          description: (0, f.localize)(29, null),
        },
        "max-memory": {
          type: "string",
          cat: "t",
          description: (0, f.localize)(30, null),
        },
        telemetry: {
          type: "boolean",
          cat: "t",
          description: (0, f.localize)(31, null),
        },
        remote: { type: "string" },
        "folder-uri": { type: "string[]", cat: "o", args: "uri" },
        "file-uri": { type: "string[]", cat: "o", args: "uri" },
        "locate-extension": { type: "string[]" },
        extensionDevelopmentPath: { type: "string[]" },
        extensionDevelopmentKind: { type: "string[]" },
        extensionTestsPath: { type: "string" },
        debugId: { type: "string" },
        debugRenderer: { type: "boolean" },
        "inspect-search": { type: "string", deprecates: "debugSearch" },
        "inspect-brk-search": { type: "string", deprecates: "debugBrkSearch" },
        "export-default-configuration": { type: "string" },
        "install-source": { type: "string" },
        driver: { type: "string" },
        logExtensionHostCommunication: { type: "boolean" },
        "skip-release-notes": { type: "boolean" },
        "disable-telemetry": { type: "boolean" },
        "disable-updates": { type: "boolean" },
        "disable-keytar": { type: "boolean" },
        "disable-crash-reporter": { type: "boolean" },
        "crash-reporter-directory": { type: "string" },
        "crash-reporter-id": { type: "string" },
        "skip-add-to-recently-opened": { type: "boolean" },
        "unity-launch": { type: "boolean" },
        "open-url": { type: "boolean" },
        "file-write": { type: "boolean" },
        "file-chmod": { type: "boolean" },
        "driver-verbose": { type: "boolean" },
        "install-builtin-extension": { type: "string[]" },
        force: { type: "boolean" },
        "do-not-sync": { type: "boolean" },
        trace: { type: "boolean" },
        "trace-category-filter": { type: "string" },
        "trace-options": { type: "string" },
        "force-user-env": { type: "boolean" },
        "force-disable-user-env": { type: "boolean" },
        "open-devtools": { type: "boolean" },
        __sandbox: { type: "boolean" },
        logsPath: { type: "string" },
        "no-proxy-server": { type: "boolean" },
        "proxy-server": { type: "string" },
        "proxy-bypass-list": { type: "string" },
        "proxy-pac-url": { type: "string" },
        "js-flags": { type: "string" },
        inspect: { type: "string" },
        "inspect-brk": { type: "string" },
        nolazy: { type: "boolean" },
        "force-device-scale-factor": { type: "string" },
        "force-renderer-accessibility": { type: "boolean" },
        "ignore-certificate-errors": { type: "boolean" },
        "allow-insecure-localhost": { type: "boolean" },
        "log-net-log": { type: "string" },
        vmodule: { type: "string" },
        _urls: { type: "string[]" },
        _: { type: "string[]" },
      };
      const M = { onUnknownOption: () => {}, onMultipleValues: () => {} };
      function O(c, g, b = M) {
        const I = {},
          T = [],
          e = [];
        for (let i in g) {
          const o = g[i];
          o.alias && (I[i] = o.alias),
            o.type === "string" || o.type === "string[]"
              ? (T.push(i), o.deprecates && T.push(o.deprecates))
              : o.type === "boolean" &&
                (e.push(i), o.deprecates && e.push(o.deprecates));
        }
        const n = y(c, { string: T, boolean: e, alias: I }),
          l = {},
          s = n;
        (l._ = n._.map((i) => String(i)).filter((i) => i.length > 0)),
          delete s._;
        for (let i in g) {
          const o = g[i];
          o.alias && delete s[o.alias];
          let r = s[i];
          o.deprecates &&
            s.hasOwnProperty(o.deprecates) &&
            (r || (r = s[o.deprecates]), delete s[o.deprecates]),
            typeof r != "undefined" &&
              (o.type === "string[]"
                ? r && !Array.isArray(r) && (r = [r])
                : o.type === "string" &&
                  Array.isArray(r) &&
                  ((r = r.pop()), b.onMultipleValues(i, r)),
              (l[i] = r)),
            delete s[i];
        }
        for (let i in s) b.onUnknownOption(i);
        return l;
      }
      t.parseArgs = O;
      function w(c, g) {
        let b = "";
        return (
          g.args &&
            (Array.isArray(g.args)
              ? (b = ` <${g.args.join("> <")}>`)
              : (b = ` <${g.args}>`)),
          g.alias ? `-${g.alias} --${c}${b}` : `--${c}${b}`
        );
      }
      function $(c, g) {
        let b = 0,
          I = [];
        for (const l in c) {
          const s = c[l],
            i = w(l, s);
          (b = Math.max(b, i.length)), I.push([i, s.description]);
        }
        let T = b + 2 + 1;
        if (g - T < 25)
          return I.reduce(
            (l, s) => l.concat([`  ${s[0]}`, `      ${s[1]}`]),
            []
          );
        let e = g - T - 1,
          n = [];
        for (const l of I) {
          let s = l[0],
            i = k(l[1], e),
            o = P(T - s.length - 2);
          n.push("  " + s + o + i[0]);
          for (let r = 1; r < i.length; r++) n.push(P(T) + i[r]);
        }
        return n;
      }
      t.formatOptions = $;
      function P(c) {
        return " ".repeat(c);
      }
      function k(c, g) {
        let b = [];
        for (; c.length; ) {
          let I = c.length < g ? c.length : c.lastIndexOf(" ", g),
            T = c.slice(0, I).trim();
          (c = c.slice(I)), b.push(T);
        }
        return b;
      }
      function L(c, g, b, I, T = !0) {
        const e = (process.stdout.isTTY && process.stdout.columns) || 80;
        let n = [`${c} ${b}`];
        n.push(""),
          n.push(
            `${(0, f.localize)(32, null)}: ${g} [${(0, f.localize)(
              33,
              null
            )}][${(0, f.localize)(34, null)}...]`
          ),
          n.push(""),
          T &&
            (E.isWindows
              ? n.push((0, f.localize)(35, null, g))
              : n.push((0, f.localize)(36, null, g)),
            n.push(""));
        const l = {};
        for (const s in I) {
          const i = I[s];
          if (i.description && i.cat) {
            let o = l[i.cat];
            o || (l[i.cat] = o = {}), (o[s] = i);
          }
        }
        for (let s in l) {
          const i = s;
          let o = l[i];
          o && (n.push(D[i]), n.push(...$(o, e)), n.push(""));
        }
        return n.join(`
`);
      }
      t.buildHelpMessage = L;
      function v(c, g) {
        return `${c || (0, f.localize)(37, null)}
${g || (0, f.localize)(38, null)}
${process.arch}`;
      }
      t.buildVersionMessage = v;
    }),
    define(H[10], q([0, 1, 3, 5, 11, 6]), function (R, t, y, f, E, D) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.readFromStdin =
          t.getStdinFilePath =
          t.stdinDataListener =
          t.hasStdinWithoutTty =
            void 0);
      function M() {
        try {
          return !process.stdin.isTTY;
        } catch (P) {}
        return !1;
      }
      t.hasStdinWithoutTty = M;
      function O(P) {
        return new Promise((k) => {
          const L = () => k(!0);
          setTimeout(() => {
            process.stdin.removeListener("data", L), k(!1);
          }, P),
            process.stdin.once("data", L);
        });
      }
      t.stdinDataListener = O;
      function w() {
        return y.join(
          E.tmpdir(),
          `code-stdin-${Math.random()
            .toString(36)
            .replace(/[^a-z]+/g, "")
            .substr(0, 3)}.txt`
        );
      }
      t.getStdinFilePath = w;
      async function $(P, k) {
        const L = f.createWriteStream(P);
        let v = await (0, D.resolveTerminalEncoding)(k);
        const c = await new Promise((b, I) => {
          R(["iconv-lite-umd"], b, I);
        });
        c.encodingExists(v) ||
          (console.log(
            `Unsupported terminal encoding: ${v}, falling back to UTF-8.`
          ),
          (v = "utf8"));
        const g = c.getDecoder(v);
        process.stdin.on("data", (b) => L.write(g.write(b))),
          process.stdin.on("end", () => {
            const b = g.end();
            typeof b == "string" && L.write(b), L.end();
          }),
          process.stdin.on("error", (b) => L.destroy(b)),
          process.stdin.on("close", () => L.close());
      }
      t.readFromStdin = $;
    }),
    define(H[12], q([0, 1, 5, 11, 3]), function (R, t, y, f, E) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.createWaitMarkerFile = void 0);
      function D(M) {
        const O = (0, E.join)(
          (0, f.tmpdir)(),
          Math.random()
            .toString(36)
            .replace(/[^a-z]+/g, "")
            .substr(0, 10)
        );
        try {
          return (
            y.writeFileSync(O, ""),
            M && console.log(`Marker file for --wait created: ${O}`),
            O
          );
        } catch (w) {
          M && console.error(`Failed to create marker file for --wait: ${w}`);
          return;
        }
      }
      t.createWaitMarkerFile = D;
    }),
    define(
      H[16],
      q([0, 1, 5, 17, 7, 18, 4, 3, 9, 12, 10]),
      function (R, t, y, f, E, D, M, O, w, $, P) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.main = void 0);
        const k = (p) => {
            switch (p) {
              case "user-data-dir":
              case "extensions-dir":
              case "export-default-configuration":
              case "install-source":
              case "driver":
              case "extensions-download-dir":
              case "builtin-extensions-dir":
              case "telemetry":
                return !1;
              default:
                return !0;
            }
          },
          L = (p) => {
            switch (p) {
              case "version":
              case "help":
              case "folder-uri":
              case "file-uri":
              case "add":
              case "diff":
              case "wait":
              case "goto":
              case "reuse-window":
              case "new-window":
              case "status":
              case "install-extension":
              case "uninstall-extension":
              case "list-extensions":
              case "force":
              case "show-versions":
              case "category":
                return !0;
              default:
                return !1;
            }
          },
          v = process.env.VSCODE_IPC_HOOK_CLI,
          c = process.env.VSCODE_CLIENT_COMMAND,
          g = process.env.VSCODE_CLIENT_COMMAND_CWD,
          b = process.env.VSCODE_CLI_AUTHORITY,
          I = process.env.VSCODE_STDIN_FILE_PATH;
        function T(p, z) {
          var _, B;
          if (!v && !c) {
            console.log(
              "Command is only available in WSL or inside a Visual Studio Code terminal."
            );
            return;
          }
          const F = Object.assign({}, w.OPTIONS),
            U = c ? k : L;
          for (const S in w.OPTIONS) {
            const j = S;
            U(j) || delete F[j];
          }
          v && (F.openExternal = { type: "boolean" });
          const K = {
              onMultipleValues: (S, j) => {
                console.error(
                  `Option ${S} can only be defined once. Using value ${j}.`
                );
              },
              onUnknownOption: (S) => {
                console.error(
                  `Ignoring option ${S}: not supported for ${p.executableName}.`
                );
              },
            },
            m = (0, w.parseArgs)(z, F, K),
            Z = b ? d : (S) => S;
          if (m.help) {
            console.log(
              (0, w.buildHelpMessage)(
                p.productName,
                p.executableName,
                p.version,
                F,
                !0
              )
            );
            return;
          }
          if (m.version) {
            console.log((0, w.buildVersionMessage)(p.version, p.commit));
            return;
          }
          if (v && m.openExternal) {
            n(m._);
            return;
          }
          let J = (m["folder-uri"] || []).map(Z);
          m["folder-uri"] = J;
          let Y = (m["file-uri"] || []).map(Z);
          m["file-uri"] = Y;
          let ee = m._,
            X = !1;
          for (let S of ee) S === "-" ? (X = !0) : a(S, Z, J, Y);
          if (
            ((m._ = []),
            X &&
              Y.length === 0 &&
              J.length === 0 &&
              (0, P.hasStdinWithoutTty)())
          )
            try {
              let S = I;
              S ||
                ((S = (0, P.getStdinFilePath)()),
                (0, P.readFromStdin)(S, !!m.verbose)),
                a(S, Z, J, Y),
                (m.wait = !0),
                (m["skip-add-to-recently-opened"] = !0),
                console.log(`Reading from stdin via: ${S}`);
            } catch (S) {
              console.log(
                `Failed to create file to read via stdin: ${S.toString()}`
              );
            }
          m.extensionDevelopmentPath &&
            (m.extensionDevelopmentPath = m.extensionDevelopmentPath.map((S) =>
              Z(r(S).href)
            )),
            m.extensionTestsPath &&
              (m.extensionTestsPath = Z(r(m.extensionTestsPath).href));
          const Q = m["crash-reporter-directory"];
          if (Q !== void 0 && !Q.match(/^([a-zA-Z]:[\\\/])/)) {
            console.log(
              `The crash reporter directory '${Q}' must be an absolute Windows path (e.g. c:/crashes)`
            );
            return;
          }
          if ((b && (m.remote = b), c)) {
            if (
              m["install-extension"] !== void 0 ||
              m["uninstall-extension"] !== void 0 ||
              m["list-extensions"]
            ) {
              const N = [];
              (_ = m["install-extension"]) === null ||
                _ === void 0 ||
                _.forEach((V) => N.push("--install-extension", V)),
                (B = m["uninstall-extension"]) === null ||
                  B === void 0 ||
                  B.forEach((V) => N.push("--uninstall-extension", V)),
                [
                  "list-extensions",
                  "force",
                  "show-versions",
                  "category",
                ].forEach((V) => {
                  const x = m[V];
                  x !== void 0 && N.push(`--${V}=${x}`);
                }),
                E.fork((0, O.join)(__dirname, "main.js"), N, {
                  stdio: "inherit",
                }).on("error", (V) => console.log(V));
              return;
            }
            let S = [];
            for (let N in m) {
              let G = m[N];
              if (typeof G == "boolean") G && S.push("--" + N);
              else if (Array.isArray(G))
                for (let V of G) S.push(`--${N}=${V.toString()}`);
              else G && S.push(`--${N}=${G.toString()}`);
            }
            const j = (0, O.extname)(c);
            if (j === ".bat" || j === ".cmd") {
              const N = g || (0, M.cwd)();
              m.verbose &&
                console.log(`Invoking: cmd.exe /C ${c} ${S.join(" ")} in ${N}`),
                E.spawn("cmd.exe", ["/C", c, ...S], {
                  stdio: "inherit",
                  cwd: N,
                });
            } else {
              const N = (0, O.dirname)(c),
                G = Object.assign(Object.assign({}, process.env), {
                  ELECTRON_RUN_AS_NODE: "1",
                });
              S.unshift("resources/app/out/cli.js"),
                m.verbose &&
                  console.log(`Invoking: ${c} ${S.join(" ")} in ${N}`),
                E.spawn(c, S, { cwd: N, env: G, stdio: ["inherit"] });
            }
          } else {
            if (z.length === 0) {
              console.log(
                (0, w.buildHelpMessage)(
                  p.productName,
                  p.executableName,
                  p.version,
                  F,
                  !0
                )
              );
              return;
            }
            if (m.status) {
              l({ type: "status" }).then((j) => {
                console.log(j);
              });
              return;
            }
            if (
              m["install-extension"] !== void 0 ||
              m["uninstall-extension"] !== void 0 ||
              m["list-extensions"]
            ) {
              l({
                type: "extensionManagement",
                list: m["list-extensions"]
                  ? { showVersions: m["show-versions"], category: m.category }
                  : void 0,
                install: s(m["install-extension"]),
                uninstall: s(m["uninstall-extension"]),
                force: m.force,
              }).then((j) => {
                console.log(j);
              });
              return;
            }
            if (!Y.length && !J.length) {
              console.log("At least one file or folder must be provided.");
              return;
            }
            let S;
            if (m.wait) {
              if (!Y.length) {
                console.log("At least one file must be provided to wait for.");
                return;
              }
              S = (0, $.createWaitMarkerFile)(m.verbose);
            }
            l({
              type: "open",
              fileURIs: Y,
              folderURIs: J,
              diffMode: m.diff,
              addMode: m.add,
              gotoLineMode: m.goto,
              forceReuseWindow: m["reuse-window"],
              forceNewWindow: m["new-window"],
              waitMarkerFilePath: S,
            }),
              S && e(S);
          }
        }
        t.main = T;
        async function e(p) {
          for (; y.existsSync(p); )
            await new Promise((z) => setTimeout(z, 1e3));
        }
        function n(p) {
          let z = [];
          for (let _ of p)
            try {
              /^(http|https|file):\/\//.test(_)
                ? z.push(f.parse(_).href)
                : z.push(r(_).href);
            } catch (B) {
              console.log(`Invalid url: ${_}`);
            }
          z.length && l({ type: "openExternal", uris: z });
        }
        function l(p) {
          return new Promise((z) => {
            const _ = JSON.stringify(p);
            if (!v) {
              console.log("Message " + _), z("");
              return;
            }
            const B = { socketPath: v, path: "/", method: "POST" },
              F = D.request(B, (U) => {
                const K = [];
                U.setEncoding("utf8"),
                  U.on("data", (m) => {
                    K.push(m);
                  }),
                  U.on("error", () => i("Error in response")),
                  U.on("end", () => {
                    z(K.join(""));
                  });
              });
            F.on("error", () => i("Error in request")), F.write(_), F.end();
          });
        }
        function s(p) {
          return p == null
            ? void 0
            : p.map((z) => (/\.vsix$/i.test(z) ? r(z).href : z));
        }
        function i(p) {
          console.error("Unable to connect to VS Code server."),
            console.error(p),
            process.exit(1);
        }
        const o = process.env.PWD || (0, M.cwd)();
        function r(p) {
          return (p = p.trim()), (p = (0, O.resolve)(o, p)), f.pathToFileURL(p);
        }
        function a(p, z, _, B) {
          let F = r(p),
            U = z(F.href);
          try {
            y.lstatSync(y.realpathSync(p)).isFile() ? B.push(U) : _.push(U);
          } catch (K) {
            K.code === "ENOENT"
              ? B.push(U)
              : console.log(`Problem accessing file ${p}. Ignoring file`, K);
          }
        }
        function d(p) {
          return p.replace(/^file:\/\//, "vscode-remote://" + b);
        }
        let [, , h, C, u, A, ...W] = process.argv;
        T({ productName: h, version: C, commit: u, executableName: A }, W);
      }
    );
}.call(this));

//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/054a9295330880ed74ceaedda236253b4f39a335/core/vs/server/remoteCli.js.map
