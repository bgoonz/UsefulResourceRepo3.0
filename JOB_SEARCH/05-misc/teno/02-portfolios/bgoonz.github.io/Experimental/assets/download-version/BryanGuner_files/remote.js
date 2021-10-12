(function (g) {
  var window = this;
  var ZGa = function (a, b) {
      return g.Nb(a, b);
    },
    k4 = function (a, b, c) {
      a.C.set(b, c);
    },
    l4 = function (a) {
      k4(
        a,
        "zx",
        Math.floor(2147483648 * Math.random()).toString(36) +
          Math.abs(Math.floor(2147483648 * Math.random()) ^ g.A()).toString(36)
      );
      return a;
    },
    m4 = function (a, b, c) {
      Array.isArray(c) || (c = [String(c)]);
      g.jn(a.C, b, c);
    },
    $Ga = function (a, b) {
      var c = [];
      g.nj(
        b,
        function (d) {
          try {
            var e = g.fo.prototype.B.call(this, d, !0);
          } catch (f) {
            if ("Storage: Invalid value was encountered" == f) return;
            throw f;
          }
          void 0 === e ? c.push(d) : g.eo(e) && c.push(d);
        },
        a
      );
      return c;
    },
    aHa = function (a, b) {
      var c = $Ga(a, b);
      g.Bb(
        c,
        function (d) {
          g.fo.prototype.remove.call(this, d);
        },
        a
      );
    },
    bHa = function (a) {
      if (a.U) {
        if (a.U.locationOverrideToken)
          return { locationOverrideToken: a.U.locationOverrideToken };
        if (null != a.U.latitudeE7 && null != a.U.longitudeE7)
          return { latitudeE7: a.U.latitudeE7, longitudeE7: a.U.longitudeE7 };
      }
      return null;
    },
    cHa = function (a, b) {
      g.gb(a, b) || a.push(b);
    },
    n4 = function (a) {
      var b = 0,
        c;
      for (c in a) b++;
      return b;
    },
    dHa = function (a, b) {
      var c = b instanceof g.Cc ? b : g.Ic(b, /^data:image\//i.test(b));
      a.src = g.Dc(c);
    },
    o4 = function () {},
    eHa = function (a) {
      try {
        return g.v.JSON.parse(a);
      } catch (b) {}
      a = String(a);
      if (
        /^\s*$/.test(a)
          ? 0
          : /^[\],:{}\s\u2028\u2029]*$/.test(
              a
                .replace(/\\["\\\/bfnrtu]/g, "@")
                .replace(
                  /(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g,
                  "]"
                )
                .replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, "")
            )
      )
        try {
          return eval("(" + a + ")");
        } catch (b) {}
      throw Error("Invalid JSON string: " + a);
    },
    fHa = function (a) {
      if (a.Zf && "function" == typeof a.Zf) return a.Zf();
      if ("string" === typeof a) return a.split("");
      if (g.Ma(a)) {
        for (var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d]);
        return b;
      }
      return g.Kb(a);
    },
    gHa = function (a, b) {
      if (a.forEach && "function" == typeof a.forEach) a.forEach(b, void 0);
      else if (g.Ma(a) || "string" === typeof a) g.Bb(a, b, void 0);
      else {
        if (a.sh && "function" == typeof a.sh) var c = a.sh();
        else if (a.Zf && "function" == typeof a.Zf) c = void 0;
        else if (g.Ma(a) || "string" === typeof a) {
          c = [];
          for (var d = a.length, e = 0; e < d; e++) c.push(e);
        } else c = g.Lb(a);
        d = fHa(a);
        e = d.length;
        for (var f = 0; f < e; f++) b.call(void 0, d[f], c && c[f], a);
      }
    },
    hHa = function (a, b, c, d) {
      var e = new g.Xm(null, void 0);
      a && g.Ym(e, a);
      b && g.Zm(e, b);
      c && g.$m(e, c);
      d && (e.B = d);
      return e;
    },
    p4 = function (a, b) {
      g.Oo[a] = !0;
      var c = g.Mo();
      c && c.publish.apply(c, arguments);
      g.Oo[a] = !1;
    },
    q4 = function (a) {
      this.app = this.name = this.id = "";
      this.type = "REMOTE_CONTROL";
      this.obfuscatedGaiaId = this.avatar = this.username = "";
      this.capabilities = new Set();
      this.experiments = new Set();
      this.theme = "u";
      new g.Um();
      a &&
        ((this.id = a.id || a.name),
        (this.name = a.name),
        (this.app = a.app),
        (this.type = a.type || "REMOTE_CONTROL"),
        (this.username = a.user || ""),
        (this.avatar = a.userAvatarUri || ""),
        (this.obfuscatedGaiaId = a.obfuscatedGaiaId || ""),
        (this.theme = a.theme || "u"),
        iHa(this, a.capabilities || ""),
        jHa(this, a.experiments || ""));
    },
    iHa = function (a, b) {
      a.capabilities.clear();
      g.Ne(b.split(","), g.Ra(ZGa, kHa)).forEach(function (c) {
        a.capabilities.add(c);
      });
    },
    jHa = function (a, b) {
      a.experiments.clear();
      b.split(",").forEach(function (c) {
        a.experiments.add(c);
      });
    },
    r4 = function (a) {
      a = a || {};
      this.name = a.name || "";
      this.id = a.id || a.screenId || "";
      this.token = a.token || a.loungeToken || "";
      this.uuid = a.uuid || a.dialId || "";
      this.idType = a.screenIdType || "normal";
    },
    s4 = function (a, b) {
      return !!b && (a.id == b || a.uuid == b);
    },
    lHa = function (a) {
      return {
        name: a.name,
        screenId: a.id,
        loungeToken: a.token,
        dialId: a.uuid,
        screenIdType: a.idType,
      };
    },
    mHa = function (a) {
      return new r4(a);
    },
    nHa = function (a) {
      return Array.isArray(a) ? g.Mc(a, mHa) : [];
    },
    t4 = function (a) {
      return a
        ? '{name:"' +
            a.name +
            '",id:' +
            a.id.substr(0, 6) +
            "..,token:" +
            ((a.token ? ".." + a.token.slice(-6) : "-") +
              ",uuid:" +
              (a.uuid ? ".." + a.uuid.slice(-6) : "-") +
              ",idType:" +
              a.idType +
              "}")
        : "null";
    },
    u4 = function (a) {
      return Array.isArray(a) ? "[" + g.Mc(a, t4).join(",") + "]" : "null";
    },
    v4 = function () {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
        /[xy]/g,
        function (a) {
          var b = (16 * Math.random()) | 0;
          return ("x" == a ? b : (b & 3) | 8).toString(16);
        }
      );
    },
    oHa = function (a) {
      return g.Mc(a, function (b) {
        return { key: b.id, name: b.name };
      });
    },
    w4 = function (a, b) {
      return g.cb(a, function (c) {
        return c || b ? (!c != !b ? !1 : c.id == b.id) : !0;
      });
    },
    x4 = function (a, b) {
      return g.cb(a, function (c) {
        return s4(c, b);
      });
    },
    pHa = function () {
      var a = (0, g.Cu)();
      a && aHa(a, a.u.Yj(!0));
    },
    y4 = function () {
      var a = g.Fu("yt-remote-connected-devices") || [];
      g.yb(a);
      return a;
    },
    qHa = function (a) {
      if (g.ib(a)) return [];
      var b = a[0].indexOf("#"),
        c = -1 == b ? a[0] : a[0].substring(0, b);
      return g.Mc(a, function (d, e) {
        return 0 == e ? d : d.substring(c.length);
      });
    },
    rHa = function (a) {
      g.Eu("yt-remote-connected-devices", a, 86400);
    },
    A4 = function () {
      if (z4) return z4;
      var a = g.Fu("yt-remote-device-id");
      a || ((a = v4()), g.Eu("yt-remote-device-id", a, 31536e3));
      for (var b = y4(), c = 1, d = a; g.gb(b, d); ) c++, (d = a + "#" + c);
      return (z4 = d);
    },
    B4 = function () {
      var a = y4(),
        b = A4();
      g.gb(a, b);
      g.Hu() && g.Ab(a, b);
      a = qHa(a);
      if (g.ib(a))
        try {
          g.Gq("remote_sid");
        } catch (c) {}
      else
        try {
          g.Eq("remote_sid", a.join(","), -1);
        } catch (c) {}
    },
    sHa = function () {
      return g.Fu("yt-remote-session-browser-channel");
    },
    tHa = function () {
      return g.Fu("yt-remote-local-screens") || [];
    },
    uHa = function () {
      g.Eu("yt-remote-lounge-token-expiration", !0, 86400);
    },
    vHa = function (a) {
      5 < a.length && (a = a.slice(a.length - 5));
      var b = g.Mc(tHa(), function (d) {
          return d.loungeToken;
        }),
        c = g.Mc(a, function (d) {
          return d.loungeToken;
        });
      g.xh(c, function (d) {
        return !g.gb(b, d);
      }) && uHa();
      g.Eu("yt-remote-local-screens", a, 31536e3);
    },
    wHa = function (a, b) {
      g.Eu("yt-remote-session-browser-channel", a);
      g.Eu("yt-remote-session-screen-id", b);
      var c = y4(),
        d = A4();
      g.gb(c, d) || c.push(d);
      rHa(c);
      B4();
    },
    C4 = function (a) {
      a ||
        (g.Gu("yt-remote-session-screen-id"),
        g.Gu("yt-remote-session-video-id"));
      B4();
      a = y4();
      g.lb(a, A4());
      rHa(a);
    },
    xHa = function () {
      if (!D4) {
        var a = g.po();
        a && (D4 = new g.Zn(a));
      }
    },
    yHa = function () {
      xHa();
      return D4 ? !!D4.get("yt-remote-use-staging-server") : !1;
    },
    zHa = function (a) {
      return (
        !!document.currentScript &&
        (-1 != document.currentScript.src.indexOf("?" + a) ||
          -1 != document.currentScript.src.indexOf("&" + a))
      );
    },
    AHa = function () {
      return "function" == typeof window.__onGCastApiAvailable
        ? window.__onGCastApiAvailable
        : null;
    },
    E4 = function (a) {
      a.length
        ? BHa(a.shift(), function () {
            E4(a);
          })
        : F4();
    },
    CHa = function (a) {
      return "chrome-extension://" + a + "/cast_sender.js";
    },
    BHa = function (a, b, c) {
      var d = document.createElement("script");
      d.onerror = b;
      c && (d.onload = c);
      g.hd(d, g.vg(a));
      (document.head || document.documentElement).appendChild(d);
    },
    F4 = function () {
      var a = AHa();
      a && a(!1, "No cast extension found");
    },
    EHa = function () {
      if (DHa) {
        var a = 2,
          b = AHa(),
          c = function () {
            a--;
            0 == a && b && b(!0);
          };
        window.__onGCastApiAvailable = c;
        BHa(
          "//www.gstatic.com/cast/sdk/libs/sender/1.0/cast_framework.js",
          F4,
          c
        );
      }
    },
    FHa = function () {
      EHa();
      var a = (a = window.navigator.userAgent.match(/Chrome\/([0-9]+)/))
        ? parseInt(a[1], 10)
        : 0;
      var b = [];
      if (0 != a) {
        var c = a - 1;
        b.push("//www.gstatic.com/eureka/clank/" + a + "/cast_sender.js");
        b.push("//www.gstatic.com/eureka/clank/" + c + "/cast_sender.js");
      }
      b.push("//www.gstatic.com/eureka/clank/cast_sender.js");
      E4(b);
    },
    G4 = function (a, b, c) {
      g.B.call(this);
      this.I = null != c ? (0, g.z)(a, c) : a;
      this.Lf = b;
      this.F = (0, g.z)(this.XJ, this);
      this.u = !1;
      this.B = 0;
      this.C = this.gb = null;
      this.D = [];
    },
    H4 = function (a, b, c) {
      g.B.call(this);
      this.D = null != c ? a.bind(c) : a;
      this.Lf = b;
      this.C = null;
      this.u = !1;
      this.B = 0;
      this.gb = null;
    },
    I4 = function (a) {
      a.gb = g.Sm(function () {
        a.gb = null;
        a.u && !a.B && ((a.u = !1), I4(a));
      }, a.Lf);
      var b = a.C;
      a.C = null;
      a.D.apply(null, b);
    },
    J4 = function (a) {
      if (g.v.JSON)
        try {
          return g.v.JSON.parse(a);
        } catch (b) {}
      return eHa(a);
    },
    K4 = function () {},
    L4 = function (a, b) {
      if ("function" !== typeof a)
        throw Error("Fn must not be null and must be a function");
      return g.v.setTimeout(function () {
        a();
      }, b);
    },
    N4 = function (a) {
      M4.dispatchEvent(new GHa(M4, a));
    },
    GHa = function (a) {
      g.Ll.call(this, "statevent", a);
    },
    O4 = function () {},
    HHa = function () {},
    JHa = function (a) {
      return (a = IHa(a)) ? new ActiveXObject(a) : new XMLHttpRequest();
    },
    IHa = function (a) {
      if (
        !a.B &&
        "undefined" == typeof XMLHttpRequest &&
        "undefined" != typeof ActiveXObject
      ) {
        for (
          var b = [
              "MSXML2.XMLHTTP.6.0",
              "MSXML2.XMLHTTP.3.0",
              "MSXML2.XMLHTTP",
              "Microsoft.XMLHTTP",
            ],
            c = 0;
          c < b.length;
          c++
        ) {
          var d = b[c];
          try {
            return new ActiveXObject(d), (a.B = d);
          } catch (e) {}
        }
        throw Error(
          "Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed"
        );
      }
      return a.B;
    },
    P4 = function (a, b, c, d) {
      this.u = a;
      this.B = b;
      this.N = c;
      this.K = d || 1;
      this.F = 45e3;
      this.D = new g.p_(this);
      this.C = new g.Rm();
      this.C.setInterval(250);
    },
    LHa = function (a, b, c) {
      a.bq = 1;
      a.fl = l4(b.clone());
      a.On = c;
      a.I = !0;
      KHa(a, null);
    },
    Q4 = function (a, b, c, d, e) {
      a.bq = 1;
      a.fl = l4(b.clone());
      a.On = null;
      a.I = c;
      e && (a.eH = !1);
      KHa(a, d);
    },
    KHa = function (a, b) {
      a.Rp = g.A();
      R4(a);
      a.im = a.fl.clone();
      m4(a.im, "t", a.K);
      a.Zs = 0;
      a.Ce = a.u.Ax(a.u.Hs() ? b : null);
      0 < a.ty && (a.xv = new H4((0, g.z)(a.aI, a, a.Ce), a.ty));
      a.D.ya(a.Ce, "readystatechange", a.MQ);
      var c = a.sn ? g.Ub(a.sn) : {};
      a.On
        ? ((a.hw = "POST"),
          (c["Content-Type"] = "application/x-www-form-urlencoded"),
          a.Ce.send(a.im, a.hw, a.On, c))
        : ((a.hw = "GET"),
          a.eH && !g.Be && (c.Connection = "close"),
          a.Ce.send(a.im, a.hw, null, c));
      a.u.mi(1);
    },
    OHa = function (a, b, c) {
      for (var d = !0; !a.Ym && a.Zs < c.length; ) {
        var e = MHa(a, c);
        if (e == S4) {
          4 == b && ((a.Fl = 4), N4(15), (d = !1));
          break;
        } else if (e == NHa) {
          a.Fl = 4;
          N4(16);
          d = !1;
          break;
        } else T4(a, e);
      }
      4 == b && 0 == c.length && ((a.Fl = 1), N4(17), (d = !1));
      a.Di = a.Di && d;
      d || (U4(a), V4(a));
    },
    MHa = function (a, b) {
      var c = a.Zs,
        d = b.indexOf("\n", c);
      if (-1 == d) return S4;
      c = Number(b.substring(c, d));
      if (isNaN(c)) return NHa;
      d += 1;
      if (d + c > b.length) return S4;
      var e = b.substr(d, c);
      a.Zs = d + c;
      return e;
    },
    QHa = function (a, b) {
      a.Rp = g.A();
      R4(a);
      var c = b ? window.location.hostname : "";
      a.im = a.fl.clone();
      k4(a.im, "DOMAIN", c);
      k4(a.im, "t", a.K);
      try {
        a.Hi = new ActiveXObject("htmlfile");
      } catch (n) {
        U4(a);
        a.Fl = 7;
        N4(22);
        V4(a);
        return;
      }
      var d = "<html><body>";
      if (b) {
        for (var e = "", f = 0; f < c.length; f++) {
          var h = c.charAt(f);
          if ("<" == h) h = e + "\\x3c";
          else if (">" == h) h = e + "\\x3e";
          else {
            if (h in W4) h = W4[h];
            else if (h in PHa) h = W4[h] = PHa[h];
            else {
              var l = h.charCodeAt(0);
              if (31 < l && 127 > l) var m = h;
              else {
                if (256 > l) {
                  if (((m = "\\x"), 16 > l || 256 < l)) m += "0";
                } else (m = "\\u"), 4096 > l && (m += "0");
                m += l.toString(16).toUpperCase();
              }
              h = W4[h] = m;
            }
            h = e + h;
          }
          e = h;
        }
        d += '<script>document.domain="' + e + '"\x3c/script>';
      }
      c = g.ed(g.fc("b/12014412"), d + "</body></html>");
      a.Hi.open();
      a.Hi.write(g.ad(c));
      a.Hi.close();
      a.Hi.parentWindow.m = (0, g.z)(a.eQ, a);
      a.Hi.parentWindow.d = (0, g.z)(a.oG, a, !0);
      a.Hi.parentWindow.rpcClose = (0, g.z)(a.oG, a, !1);
      c = a.Hi.createElement("DIV");
      a.Hi.parentWindow.document.body.appendChild(c);
      d = g.Hc(a.im.toString());
      d = g.md(g.Dc(d));
      d = g.ed(g.fc("b/12014412"), '<iframe src="' + d + '"></iframe>');
      g.fd(c, d);
      a.u.mi(1);
    },
    R4 = function (a) {
      a.aB = g.A() + a.F;
      RHa(a, a.F);
    },
    RHa = function (a, b) {
      if (null != a.iq) throw Error("WatchDog timer not null");
      a.iq = L4((0, g.z)(a.mQ, a), b);
    },
    X4 = function (a) {
      a.iq && (g.v.clearTimeout(a.iq), (a.iq = null));
    },
    V4 = function (a) {
      a.u.oD() || a.Ym || a.u.du(a);
    },
    U4 = function (a) {
      X4(a);
      g.bg(a.xv);
      a.xv = null;
      a.C.stop();
      g.qBa(a.D);
      if (a.Ce) {
        var b = a.Ce;
        a.Ce = null;
        b.abort();
        b.dispose();
      }
      a.Hi && (a.Hi = null);
    },
    T4 = function (a, b) {
      try {
        a.u.fG(a, b), a.u.mi(4);
      } catch (c) {}
    },
    THa = function (a, b, c, d, e) {
      if (0 == d) c(!1);
      else {
        var f = e || 0;
        d--;
        SHa(a, b, function (h) {
          h
            ? c(!0)
            : g.v.setTimeout(function () {
                THa(a, b, c, d, f);
              }, f);
        });
      }
    },
    SHa = function (a, b, c) {
      var d = new Image();
      d.onload = function () {
        try {
          Y4(d), c(!0);
        } catch (e) {}
      };
      d.onerror = function () {
        try {
          Y4(d), c(!1);
        } catch (e) {}
      };
      d.onabort = function () {
        try {
          Y4(d), c(!1);
        } catch (e) {}
      };
      d.ontimeout = function () {
        try {
          Y4(d), c(!1);
        } catch (e) {}
      };
      g.v.setTimeout(function () {
        if (d.ontimeout) d.ontimeout();
      }, b);
      dHa(d, a);
    },
    Y4 = function (a) {
      a.onload = null;
      a.onerror = null;
      a.onabort = null;
      a.ontimeout = null;
    },
    Z4 = function (a) {
      g.hm.call(this);
      this.headers = new g.Um();
      this.da = a || null;
      this.C = !1;
      this.Z = this.u = null;
      this.wa = this.U = "";
      this.I = 0;
      this.D = "";
      this.F = this.ka = this.N = this.ga = !1;
      this.K = 0;
      this.W = null;
      this.Aa = "";
      this.X = this.ea = !1;
    },
    UHa = function (a) {
      return (
        g.ze &&
        g.ce(9) &&
        "number" === typeof a.timeout &&
        void 0 !== a.ontimeout
      );
    },
    VHa = function (a) {
      return "content-type" == a.toLowerCase();
    },
    XHa = function (a, b) {
      a.C = !1;
      a.u && ((a.F = !0), a.u.abort(), (a.F = !1));
      a.D = b;
      a.I = 5;
      WHa(a);
      $4(a);
    },
    WHa = function (a) {
      a.ga ||
        ((a.ga = !0), a.dispatchEvent("complete"), a.dispatchEvent("error"));
    },
    ZHa = function (a) {
      if (a.C && "undefined" != typeof g.u_)
        if (a.Z[1] && 4 == a5(a) && 2 == a.getStatus())
          b5(a, "Local request error detected and ignored");
        else if (a.N && 4 == a5(a)) g.Sm(a.cG, 0, a);
        else if ((a.dispatchEvent("readystatechange"), a.isComplete())) {
          b5(a, "Request complete");
          a.C = !1;
          try {
            var b = a.getStatus();
            a: switch (b) {
              case 200:
              case 201:
              case 202:
              case 204:
              case 206:
              case 304:
              case 1223:
                var c = !0;
                break a;
              default:
                c = !1;
            }
            var d;
            if (!(d = c)) {
              var e;
              if ((e = 0 === b)) {
                var f = g.vd(1, String(a.U));
                if (!f && g.v.self && g.v.self.location) {
                  var h = g.v.self.location.protocol;
                  f = h.substr(0, h.length - 1);
                }
                e = !YHa.test(f ? f.toLowerCase() : "");
              }
              d = e;
            }
            if (d) a.dispatchEvent("complete"), a.dispatchEvent("success");
            else {
              a.I = 6;
              try {
                var l = 2 < a5(a) ? a.u.statusText : "";
              } catch (m) {
                l = "";
              }
              a.D = l + " [" + a.getStatus() + "]";
              WHa(a);
            }
          } finally {
            $4(a);
          }
        }
    },
    $4 = function (a, b) {
      if (a.u) {
        $Ha(a);
        var c = a.u,
          d = a.Z[0] ? g.Ja : null;
        a.u = null;
        a.Z = null;
        b || a.dispatchEvent("ready");
        try {
          c.onreadystatechange = d;
        } catch (e) {}
      }
    },
    $Ha = function (a) {
      a.u && a.X && (a.u.ontimeout = null);
      a.W && (g.v.clearTimeout(a.W), (a.W = null));
    },
    a5 = function (a) {
      return a.u ? a.u.readyState : 0;
    },
    c5 = function (a) {
      try {
        return a.u ? a.u.responseText : "";
      } catch (b) {
        return "";
      }
    },
    b5 = function (a, b) {
      return b + " [" + a.wa + " " + a.U + " " + a.getStatus() + "]";
    },
    aIa = function (a) {
      this.u = a;
      this.B = new K4();
    },
    bIa = function (a) {
      var b = d5(a.u, a.xq, "/mail/images/cleardot.gif");
      l4(b);
      THa(b.toString(), 5e3, (0, g.z)(a.aJ, a), 3, 2e3);
      a.mi(1);
    },
    f5 = function (a) {
      var b = a.u.N;
      if (null != b)
        N4(5), b ? (N4(11), e5(a.u, a, !1)) : (N4(12), e5(a.u, a, !0));
      else if (
        ((a.Fg = new P4(a, void 0, void 0, void 0)),
        (a.Fg.sn = a.qy),
        (b = a.u),
        (b = d5(b, b.Hs() ? a.sr : null, a.sy)),
        N4(5),
        !g.ze || g.de(10))
      )
        m4(b, "TYPE", "xmlhttp"), Q4(a.Fg, b, !1, a.sr, !1);
      else {
        m4(b, "TYPE", "html");
        var c = a.Fg;
        a = !!a.sr;
        c.bq = 3;
        c.fl = l4(b.clone());
        QHa(c, a);
      }
    },
    g5 = function (a, b, c) {
      this.La = 1;
      this.u = [];
      this.C = [];
      this.D = new K4();
      this.K = a || null;
      this.N = null != b ? b : null;
      this.F = c || !1;
    },
    cIa = function (a, b) {
      this.u = a;
      this.map = b;
      this.context = null;
    },
    dIa = function (a, b, c, d) {
      g.Ll.call(this, "timingevent", a);
      this.size = b;
      this.zs = d;
    },
    eIa = function (a) {
      g.Ll.call(this, "serverreachability", a);
    },
    hIa = function (a) {
      fIa(a);
      if (3 == a.La) {
        var b = a.Vr++,
          c = a.Et.clone();
        k4(c, "SID", a.B);
        k4(c, "RID", b);
        k4(c, "TYPE", "terminate");
        h5(a, c);
        b = new P4(a, a.B, b, void 0);
        b.bq = 2;
        b.fl = l4(c.clone());
        dHa(new Image(), b.fl.toString());
        b.Rp = g.A();
        R4(b);
      }
      gIa(a);
    },
    iIa = function (a) {
      a.vJ(1, 0);
      a.Et = d5(a, null, a.py);
      i5(a);
    },
    fIa = function (a) {
      a.ll && (a.ll.abort(), (a.ll = null));
      a.Zd && (a.Zd.cancel(), (a.Zd = null));
      a.Zj && (g.v.clearTimeout(a.Zj), (a.Zj = null));
      j5(a);
      a.sg && (a.sg.cancel(), (a.sg = null));
      a.ul && (g.v.clearTimeout(a.ul), (a.ul = null));
    },
    jIa = function (a, b) {
      if (0 == a.La)
        throw Error("Invalid operation: sending map when state is closed");
      a.u.push(new cIa(a.cN++, b));
      (2 != a.La && 3 != a.La) || i5(a);
    },
    kIa = function (a) {
      var b = 0;
      a.Zd && b++;
      a.sg && b++;
      return b;
    },
    i5 = function (a) {
      a.sg || a.ul || ((a.ul = L4((0, g.z)(a.mG, a), 0)), (a.No = 0));
    },
    mIa = function (a, b) {
      if (1 == a.La) {
        if (!b) {
          a.Vr = Math.floor(1e5 * Math.random());
          var c = a.Vr++,
            d = new P4(a, "", c, void 0);
          d.sn = a.kj;
          var e = k5(a),
            f = a.Et.clone();
          k4(f, "RID", c);
          k4(f, "CVER", "1");
          h5(a, f);
          LHa(d, f, e);
          a.sg = d;
          a.La = 2;
        }
      } else 3 == a.La && (b ? lIa(a, b) : 0 == a.u.length || a.sg || lIa(a));
    },
    lIa = function (a, b) {
      if (b)
        if (6 < a.Zm) {
          a.u = a.C.concat(a.u);
          a.C.length = 0;
          var c = a.Vr - 1;
          var d = k5(a);
        } else (c = b.N), (d = b.On);
      else (c = a.Vr++), (d = k5(a));
      var e = a.Et.clone();
      k4(e, "SID", a.B);
      k4(e, "RID", c);
      k4(e, "AID", a.jp);
      h5(a, e);
      c = new P4(a, a.B, c, a.No + 1);
      c.sn = a.kj;
      c.setTimeout(1e4 + Math.round(1e4 * Math.random()));
      a.sg = c;
      LHa(c, e, d);
    },
    h5 = function (a, b) {
      if (a.Jf) {
        var c = a.Jf.SC();
        c &&
          g.Db(c, function (d, e) {
            k4(b, e, d);
          });
      }
    },
    k5 = function (a) {
      var b = Math.min(a.u.length, 1e3),
        c = ["count=" + b];
      if (6 < a.Zm && 0 < b) {
        var d = a.u[0].u;
        c.push("ofs=" + d);
      } else d = 0;
      for (var e = {}, f = 0; f < b; e = { mo: e.mo }, f++) {
        e.mo = a.u[f].u;
        var h = a.u[f].map;
        e.mo = 6 >= a.Zm ? f : e.mo - d;
        try {
          g.Db(
            h,
            (function (l) {
              return function (m, n) {
                c.push("req" + l.mo + "_" + n + "=" + encodeURIComponent(m));
              };
            })(e)
          );
        } catch (l) {
          c.push("req" + e.mo + "_type=" + encodeURIComponent("_badmap"));
        }
      }
      a.C = a.C.concat(a.u.splice(0, b));
      return c.join("&");
    },
    nIa = function (a) {
      a.Zd ||
        a.Zj ||
        ((a.I = 1), (a.Zj = L4((0, g.z)(a.lG, a), 0)), (a.yo = 0));
    },
    l5 = function (a) {
      if (a.Zd || a.Zj || 3 <= a.yo) return !1;
      a.I++;
      a.Zj = L4((0, g.z)(a.lG, a), oIa(a, a.yo));
      a.yo++;
      return !0;
    },
    e5 = function (a, b, c) {
      a.dw = c;
      a.lj = b.tk;
      a.F || iIa(a);
    },
    j5 = function (a) {
      null != a.gn && (g.v.clearTimeout(a.gn), (a.gn = null));
    },
    oIa = function (a, b) {
      var c = 5e3 + Math.floor(1e4 * Math.random());
      a.isActive() || (c *= 2);
      return c * b;
    },
    m5 = function (a, b) {
      if (2 == b || 9 == b) {
        var c = null;
        a.Jf && (c = null);
        var d = (0, g.z)(a.vR, a);
        c || ((c = new g.Xm("//www.google.com/images/cleardot.gif")), l4(c));
        SHa(c.toString(), 1e4, d);
      } else N4(2);
      pIa(a, b);
    },
    pIa = function (a, b) {
      a.La = 0;
      a.Jf && a.Jf.hC(b);
      gIa(a);
      fIa(a);
    },
    gIa = function (a) {
      a.La = 0;
      a.lj = -1;
      if (a.Jf)
        if (0 == a.C.length && 0 == a.u.length) a.Jf.kx();
        else {
          g.pb(a.C);
          var b = g.pb(a.u);
          a.C.length = 0;
          a.u.length = 0;
          a.Jf.kx(b);
        }
    },
    d5 = function (a, b, c) {
      var d = g.en(c);
      if ("" != d.u) b && g.Zm(d, b + "." + d.u), g.$m(d, d.D);
      else {
        var e = window.location;
        d = hHa(e.protocol, b ? b + "." + e.hostname : e.hostname, +e.port, c);
      }
      a.Qq &&
        g.Db(a.Qq, function (f, h) {
          k4(d, h, f);
        });
      k4(d, "VER", a.Zm);
      h5(a, d);
      return d;
    },
    qIa = function () {},
    rIa = function () {
      this.u = [];
      this.B = [];
    },
    sIa = function (a, b) {
      this.action = a;
      this.params = b || {};
    },
    n5 = function (a, b) {
      g.B.call(this);
      this.u = new g.E(this.WP, 0, this);
      g.C(this, this.u);
      this.Lf = 5e3;
      this.B = 0;
      if ("function" === typeof a) b && (a = (0, g.z)(a, b));
      else if (a && "function" === typeof a.handleEvent)
        a = (0, g.z)(a.handleEvent, a);
      else throw Error("Invalid listener argument");
      this.C = a;
    },
    o5 = function (a, b, c, d, e) {
      c = void 0 === c ? !1 : c;
      d =
        void 0 === d
          ? function () {
              return "";
            }
          : d;
      e = void 0 === e ? !1 : e;
      this.Z = a;
      this.I = b;
      this.C = new g.Yn();
      this.B = new n5(this.XQ, this);
      this.u = null;
      this.W = !1;
      this.F = null;
      this.U = "";
      this.N = this.D = 0;
      this.K = [];
      this.da = c;
      this.X = d;
      this.ga = e;
    },
    tIa = function (a) {
      return {
        firstTestResults: [""],
        secondTestResults: !a.u.dw,
        sessionId: a.u.B,
        arrayId: a.u.jp,
      };
    },
    uIa = function (a, b) {
      a.N = b || 0;
      a.B.stop();
      p5(a);
      a.u && (3 == a.u.getState() && mIa(a.u), hIa(a.u));
      a.N = 0;
    },
    q5 = function (a) {
      return !!a.u && 3 == a.u.getState();
    },
    p5 = function (a) {
      if (a.u) {
        var b = a.X(),
          c = a.u.kj || {};
        b
          ? (c["x-youtube-lounge-xsrf-token"] = b)
          : delete c["x-youtube-lounge-xsrf-token"];
        a.u.kj = c;
      }
    },
    r5 = function (a) {
      this.scheme = "https";
      this.port = this.domain = "";
      this.u = "/api/lounge";
      this.B = !0;
      a = a || document.location.href;
      var b = Number(g.vd(4, a)) || "";
      b && (this.port = ":" + b);
      this.domain = g.wd(a) || "";
      a = g.Uc;
      0 <= a.search("MSIE") &&
        ((a = a.match(/MSIE ([\d.]+)/)[1]),
        0 > g.Ac(a, "10.0") && (this.B = !1));
    },
    s5 = function (a, b) {
      var c = a.u;
      a.B && (c = a.scheme + "://" + a.domain + a.port + a.u);
      return g.Nd(c + b, {});
    },
    t5 = function (a, b, c, d, e) {
      a = {
        format: "JSON",
        method: "POST",
        context: a,
        timeout: 5e3,
        withCredentials: !1,
        onSuccess: g.Ra(a.D, d, !0),
        onError: g.Ra(a.C, e),
        onTimeout: g.Ra(a.F, e),
      };
      c &&
        ((a.postParams = c),
        (a.headers = { "Content-Type": "application/x-www-form-urlencoded" }));
      return g.yq(b, a);
    },
    yIa = function () {
      var a = vIa;
      wIa();
      u5.push(a);
      xIa();
    },
    v5 = function (a, b) {
      wIa();
      var c = zIa(a, String(b));
      g.ib(u5)
        ? AIa(c)
        : (xIa(),
          g.Bb(u5, function (d) {
            d(c);
          }));
    },
    wIa = function () {
      u5 ||
        ((u5 = g.Ia("yt.mdx.remote.debug.handlers_") || []),
        g.Ea("yt.mdx.remote.debug.handlers_", u5, void 0));
    },
    AIa = function (a) {
      var b = (w5 + 1) % 50;
      w5 = b;
      x5[b] = a;
      y5 || (y5 = 49 == b);
    },
    xIa = function () {
      var a = u5;
      if (x5[0]) {
        var b = y5 ? w5 : -1;
        do {
          b = (b + 1) % 50;
          var c = x5[b];
          g.Bb(a, function (d) {
            d(c);
          });
        } while (b != w5);
        x5 = Array(50);
        w5 = -1;
        y5 = !1;
      }
    },
    zIa = function (a, b) {
      var c = (g.A() - BIa) / 1e3;
      c.toFixed && (c = c.toFixed(3));
      var d = [];
      d.push("[", c + "s", "] ");
      d.push("[", "yt.mdx.remote", "] ");
      d.push(a + ": " + b, "\n");
      return d.join("");
    },
    z5 = function (a) {
      g.N.call(this);
      this.I = a;
      this.screens = [];
    },
    CIa = function (a, b) {
      var c = a.get(b.uuid) || a.get(b.id);
      if (c) {
        var d = c.name;
        c.id = b.id || c.id;
        c.name = b.name;
        c.token = b.token;
        c.uuid = b.uuid || c.uuid;
        return c.name != d;
      }
      a.screens.push(b);
      return !0;
    },
    DIa = function (a, b) {
      var c = a.screens.length != b.length;
      a.screens = g.Ne(a.screens, function (f) {
        return !!w4(b, f);
      });
      for (var d = 0, e = b.length; d < e; d++) c = CIa(a, b[d]) || c;
      return c;
    },
    EIa = function (a, b) {
      var c = a.screens.length;
      a.screens = g.Ne(a.screens, function (d) {
        return !(d || b ? (!d != !b ? 0 : d.id == b.id) : 1);
      });
      return a.screens.length < c;
    },
    A5 = function (a, b, c, d) {
      g.N.call(this);
      this.F = a;
      this.I = b;
      this.C = c;
      this.D = d;
      this.B = 0;
      this.u = null;
      this.gb = NaN;
    },
    C5 = function (a) {
      z5.call(this, "LocalScreenService");
      this.B = a;
      this.u = NaN;
      B5(this);
      this.info("Initializing with " + u4(this.screens));
    },
    FIa = function (a) {
      if (a.screens.length) {
        var b = g.Mc(a.screens, function (d) {
            return d.id;
          }),
          c = s5(a.B, "/pairing/get_lounge_token_batch");
        t5(
          a.B,
          c,
          { screen_ids: b.join(",") },
          (0, g.z)(a.fK, a),
          (0, g.z)(a.eK, a)
        );
      }
    },
    B5 = function (a) {
      if (g.Zo("deprecate_pair_servlet_enabled")) return DIa(a, []);
      var b = nHa(tHa());
      b = g.Ne(b, function (c) {
        return !c.uuid;
      });
      return DIa(a, b);
    },
    D5 = function (a, b) {
      vHa(g.Mc(a.screens, lHa));
      b && uHa();
    },
    F5 = function (a, b) {
      g.N.call(this);
      this.I = b;
      var c = g.Fu("yt-remote-online-screen-ids") || "";
      c = c ? c.split(",") : [];
      for (var d = {}, e = this.I(), f = 0, h = e.length; f < h; ++f) {
        var l = e[f].id;
        d[l] = g.gb(c, l);
      }
      this.u = d;
      this.F = a;
      this.C = this.D = NaN;
      this.B = null;
      E5("Initialized with " + g.Tj(this.u));
    },
    G5 = function (a, b, c) {
      var d = s5(a.F, "/pairing/get_screen_availability");
      t5(
        a.F,
        d,
        { lounge_token: b.token },
        (0, g.z)(function (e) {
          e = e.screens || [];
          for (var f = 0, h = e.length; f < h; ++f)
            if (e[f].loungeToken == b.token) {
              c("online" == e[f].status);
              return;
            }
          c(!1);
        }, a),
        (0, g.z)(function () {
          c(!1);
        }, a)
      );
    },
    H5 = function (a, b) {
      a: if (n4(b) != n4(a.u)) var c = !1;
      else {
        c = g.Lb(b);
        for (var d = 0, e = c.length; d < e; ++d)
          if (!a.u[c[d]]) {
            c = !1;
            break a;
          }
        c = !0;
      }
      c ||
        (E5("Updated online screens: " + g.Tj(a.u)),
        (a.u = b),
        a.V("screenChange"));
      GIa(a);
    },
    I5 = function (a) {
      isNaN(a.C) || g.Lo(a.C);
      a.C = g.Jo((0, g.z)(a.cA, a), 0 < a.D && a.D < g.A() ? 2e4 : 1e4);
    },
    E5 = function (a) {
      v5("OnlineScreenService", a);
    },
    HIa = function (a) {
      var b = {};
      g.Bb(a.I(), function (c) {
        c.token
          ? (b[c.token] = c.id)
          : this.Fd("Requesting availability of screen w/o lounge token.");
      });
      return b;
    },
    GIa = function (a) {
      a = g.Lb(
        g.Eb(a.u, function (b) {
          return b;
        })
      );
      g.yb(a);
      a.length
        ? g.Eu("yt-remote-online-screen-ids", a.join(","), 60)
        : g.Gu("yt-remote-online-screen-ids");
    },
    J5 = function (a) {
      z5.call(this, "ScreenService");
      this.F = a;
      this.u = this.B = null;
      this.C = [];
      this.D = {};
      IIa(this);
    },
    KIa = function (a, b, c, d, e, f) {
      a.info("getAutomaticScreenByIds " + c + " / " + b);
      c || (c = a.D[b]);
      var h = a.Qg();
      if ((h = (c ? x4(h, c) : null) || x4(h, b))) {
        h.uuid = b;
        var l = K5(a, h);
        G5(a.u, l, function (m) {
          e(m ? l : null);
        });
      } else
        c
          ? JIa(
              a,
              c,
              (0, g.z)(function (m) {
                var n = K5(
                  this,
                  new r4({
                    name: d,
                    screenId: c,
                    loungeToken: m,
                    dialId: b || "",
                  })
                );
                G5(this.u, n, function (p) {
                  e(p ? n : null);
                });
              }, a),
              f
            )
          : e(null);
    },
    LIa = function (a, b) {
      for (var c = 0, d = a.screens.length; c < d; ++c)
        if (a.screens[c].name == b) return a.screens[c];
      return null;
    },
    MIa = function (a, b, c) {
      G5(a.u, b, c);
    },
    JIa = function (a, b, c, d) {
      a.info("requestLoungeToken_ for " + b);
      var e = {
        postParams: { screen_ids: b },
        method: "POST",
        context: a,
        onSuccess: function (f, h) {
          var l = (h && h.screens) || [];
          l[0] && l[0].screenId == b
            ? c(l[0].loungeToken)
            : d(Error("Missing lounge token in token response"));
        },
        onError: function () {
          d(Error("Request screen lounge token failed"));
        },
      };
      g.yq(s5(a.F, "/pairing/get_lounge_token_batch"), e);
    },
    NIa = function (a) {
      a.screens = a.B.Qg();
      var b = a.D,
        c = {},
        d;
      for (d in b) c[b[d]] = d;
      b = 0;
      for (d = a.screens.length; b < d; ++b) {
        var e = a.screens[b];
        e.uuid = c[e.id] || "";
      }
      a.info("Updated manual screens: " + u4(a.screens));
    },
    IIa = function (a) {
      L5(a);
      a.B = new C5(a.F);
      a.B.subscribe("screenChange", (0, g.z)(a.lK, a));
      NIa(a);
      a.C = nHa(g.Fu("yt-remote-automatic-screen-cache") || []);
      L5(a);
      a.info("Initializing automatic screens: " + u4(a.C));
      a.u = new F5(a.F, (0, g.z)(a.Qg, a, !0));
      a.u.subscribe(
        "screenChange",
        (0, g.z)(function () {
          this.V("onlineScreenChange");
        }, a)
      );
    },
    K5 = function (a, b) {
      var c = a.get(b.id);
      c
        ? ((c.uuid = b.uuid), (b = c))
        : ((c = x4(a.C, b.uuid))
            ? ((c.id = b.id), (c.token = b.token), (b = c))
            : a.C.push(b),
          OIa(a));
      L5(a);
      a.D[b.uuid] = b.id;
      g.Eu("yt-remote-device-id-map", a.D, 31536e3);
      return b;
    },
    OIa = function (a) {
      a = g.Ne(a.C, function (b) {
        return "shortLived" != b.idType;
      });
      g.Eu("yt-remote-automatic-screen-cache", g.Mc(a, lHa));
    },
    L5 = function (a) {
      a.D = g.Fu("yt-remote-device-id-map") || {};
    },
    M5 = function (a, b, c) {
      g.N.call(this);
      this.ga = c;
      this.F = a;
      this.u = b;
      this.C = null;
    },
    N5 = function (a, b) {
      a.C = b;
      a.V("sessionScreen", a.C);
    },
    O5 = function (a, b) {
      v5(a.ga, b);
    },
    P5 = function (a, b, c) {
      M5.call(this, a, b, "CastSession");
      var d = this;
      this.ea = c;
      this.B = null;
      this.da = (0, g.z)(this.XR, this);
      this.X = (0, g.z)(this.tQ, this);
      this.W = g.Jo(function () {
        PIa(d, null);
      }, 12e4);
      this.K = this.D = this.I = this.N = 0;
      this.Z = !1;
      this.U = "unknown";
    },
    Q5 = function (a, b) {
      g.Lo(a.K);
      a.K = 0;
      0 == b
        ? QIa(a)
        : (a.K = g.Jo(function () {
            QIa(a);
          }, b));
    },
    QIa = function (a) {
      RIa(a, "getLoungeToken");
      g.Lo(a.D);
      a.D = g.Jo(function () {
        SIa(a, null);
      }, 3e4);
    },
    RIa = function (a, b) {
      a.info("sendYoutubeMessage_: " + b + " " + g.Tj(void 0));
      var c = {};
      c.type = b;
      a.B
        ? a.B.sendMessage(
            "urn:x-cast:com.google.youtube.mdx",
            c,
            g.Ja,
            (0, g.z)(function () {
              O5(this, "Failed to send message: " + b + ".");
            }, a)
          )
        : O5(a, "Sending yt message without session: " + g.Tj(c));
    },
    R5 = function (a, b) {
      b
        ? (a.info("onConnectedScreenId_: Received screenId: " + b),
          (a.getScreen() && a.getScreen().id == b) ||
            a.jD(
              b,
              function (c) {
                N5(a, c);
              },
              function () {
                return a.gg();
              },
              5
            ))
        : a.gg(Error("Waiting for session status timed out."));
    },
    UIa = function (a, b, c) {
      a.info(
        "onConnectedScreenData_: Received screenData: " + JSON.stringify(b)
      );
      var d = new r4(b);
      TIa(
        a,
        d,
        function (e) {
          e
            ? ((a.Z = !0), K5(a.F, d), N5(a, d), (a.U = "unknown"), Q5(a, c))
            : (g.Go(
                Error(
                  "CastSession, RemoteScreen from screenData: " +
                    JSON.stringify(b) +
                    " is not online."
                )
              ),
              a.gg());
        },
        5
      );
    },
    PIa = function (a, b) {
      g.Lo(a.W);
      a.W = 0;
      b
        ? a.ea.l4 && b.loungeToken
          ? b.deviceId
            ? (a.getScreen() && a.getScreen().uuid == b.deviceId) ||
              (b.loungeTokenRefreshIntervalMs
                ? UIa(
                    a,
                    {
                      name: a.u.friendlyName,
                      screenId: b.screenId,
                      loungeToken: b.loungeToken,
                      dialId: b.deviceId,
                      screenIdType: "shortLived",
                    },
                    b.loungeTokenRefreshIntervalMs
                  )
                : (g.Go(
                    Error(
                      "No loungeTokenRefreshIntervalMs presents in mdxSessionStatusData: " +
                        JSON.stringify(b) +
                        "."
                    )
                  ),
                  R5(a, b.screenId)))
            : (g.Go(
                Error(
                  "No device id presents in mdxSessionStatusData: " +
                    JSON.stringify(b) +
                    "."
                )
              ),
              R5(a, b.screenId))
          : R5(a, b.screenId)
        : a.gg(Error("Waiting for session status timed out."));
    },
    SIa = function (a, b) {
      g.Lo(a.D);
      a.D = 0;
      var c = null;
      if (b)
        if (b.loungeToken) {
          var d;
          (null == (d = a.getScreen()) ? void 0 : d.token) == b.loungeToken &&
            (c = "staleLoungeToken");
        } else c = "missingLoungeToken";
      else c = "noLoungeTokenResponse";
      c
        ? (a.info(
            "Did not receive a new lounge token in onLoungeToken_ with data: " +
              (JSON.stringify(b) + ", error: " + c)
          ),
          (a.U = c),
          Q5(a, 3e4))
        : (a.C && ((a.C.token = b.loungeToken), K5(a.F, a.C)),
          a.V("sessionScreen", a.C),
          (a.Z = !1),
          (a.U = "unknown"),
          Q5(a, b.loungeTokenRefreshIntervalMs));
    },
    TIa = function (a, b, c, d) {
      g.Lo(a.I);
      a.I = 0;
      MIa(a.F, b, function (e) {
        e || 0 > d
          ? c(e)
          : (a.I = g.Jo(function () {
              TIa(a, b, c, d - 1);
            }, 300));
      });
    },
    VIa = function (a) {
      g.Lo(a.N);
      a.N = 0;
      g.Lo(a.I);
      a.I = 0;
      g.Lo(a.W);
      a.W = 0;
      g.Lo(a.D);
      a.D = 0;
      g.Lo(a.K);
      a.K = 0;
    },
    S5 = function (a, b, c) {
      M5.call(this, a, b, "DialSession");
      this.D = this.N = null;
      this.U = "";
      this.Z = c;
      this.W = null;
      this.K = g.Ja;
      this.I = NaN;
      this.X = (0, g.z)(this.bL, this);
      this.B = g.Ja;
    },
    WIa = function (a) {
      a.B = a.F.fI(
        a.U,
        a.u.label,
        a.u.friendlyName,
        (0, g.z)(function (b) {
          this.B = g.Ja;
          N5(this, b);
        }, a),
        (0, g.z)(function (b) {
          this.B = g.Ja;
          this.gg(b);
        }, a)
      );
    },
    XIa = function (a) {
      var b = {};
      b.pairingCode = a.U;
      b.theme = a.Z;
      yHa() && (b.env_useStageMdx = 1);
      return g.Jd(b);
    },
    T5 = function (a, b) {
      M5.call(this, a, b, "ManualSession");
      this.B = g.Jo((0, g.z)(this.kp, this, null), 150);
    },
    U5 = function (a, b) {
      g.N.call(this);
      this.D = b;
      this.B = a;
      this.N = b.appId || "233637DE";
      this.K = b.theme || "cl";
      this.U = b.disableCastApi || !1;
      this.u = null;
      this.I = !1;
      this.C = [];
      this.F = (0, g.z)(this.mP, this);
    },
    YIa = function (a, b) {
      return b
        ? g.cb(
            a.C,
            function (c) {
              return s4(b, c.label);
            },
            a
          )
        : null;
    },
    V5 = function (a) {
      v5("Controller", a);
    },
    vIa = function (a) {
      window.chrome &&
        chrome.cast &&
        chrome.cast.logMessage &&
        chrome.cast.logMessage(a);
    },
    W5 = function (a) {
      return a.I || !!a.C.length || !!a.u;
    },
    X5 = function (a, b, c) {
      b != a.u &&
        (g.bg(a.u),
        (a.u = b)
          ? (c
              ? a.V("yt-remote-cast2-receiver-resumed", b.u)
              : a.V("yt-remote-cast2-receiver-selected", b.u),
            b.subscribe("sessionScreen", (0, g.z)(a.jG, a, b)),
            b.getScreen()
              ? a.V("yt-remote-cast2-session-change", b.getScreen())
              : c && a.u.kp(null))
          : a.V("yt-remote-cast2-session-change", null));
    },
    ZIa = function (a) {
      var b = a.B.eI(),
        c = a.u && a.u.u;
      a = g.Mc(
        b,
        function (d) {
          c && s4(d, c.label) && (c = null);
          var e = d.uuid ? d.uuid : d.id,
            f = YIa(this, d);
          f
            ? ((f.label = e), (f.friendlyName = d.name))
            : ((f = new chrome.cast.Receiver(e, d.name)),
              (f.receiverType = chrome.cast.ReceiverType.CUSTOM));
          return f;
        },
        a
      );
      c &&
        (c.receiverType != chrome.cast.ReceiverType.CUSTOM &&
          ((c = new chrome.cast.Receiver(c.label, c.friendlyName)),
          (c.receiverType = chrome.cast.ReceiverType.CUSTOM)),
        a.push(c));
      return a;
    },
    eJa = function (a, b, c, d) {
      d.disableCastApi
        ? Y5("Cannot initialize because disabled by Mdx config.")
        : $Ia()
        ? aJa(b, d) &&
          (Z5(!0),
          window.chrome && chrome.cast && chrome.cast.isAvailable
            ? bJa(a, c)
            : ((window.__onGCastApiAvailable = function (e, f) {
                e
                  ? bJa(a, c)
                  : ($5("Failed to load cast API: " + f),
                    a6(!1),
                    Z5(!1),
                    g.Gu("yt-remote-cast-available"),
                    g.Gu("yt-remote-cast-receiver"),
                    cJa(),
                    c(!1));
              }),
              d.loadCastApiSetupScript
                ? g.Vo("https://www.gstatic.com/cv/js/sender/v1/cast_sender.js")
                : 0 <= window.navigator.userAgent.indexOf("Android") &&
                  0 <= window.navigator.userAgent.indexOf("Chrome/") &&
                  window.navigator.presentation
                ? FHa()
                : !window.chrome ||
                  !window.navigator.presentation ||
                  0 <= window.navigator.userAgent.indexOf("Edge")
                ? F4()
                : (EHa(), E4(dJa.map(CHa)))))
        : Y5("Cannot initialize because not running Chrome");
    },
    cJa = function () {
      Y5("dispose");
      var a = b6();
      a && a.dispose();
      g.Ea("yt.mdx.remote.cloudview.instance_", null, void 0);
      fJa(!1);
      g.Ro(c6);
      c6.length = 0;
    },
    d6 = function () {
      return !!g.Fu("yt-remote-cast-installed");
    },
    gJa = function () {
      var a = g.Fu("yt-remote-cast-receiver");
      return a ? a.friendlyName : null;
    },
    hJa = function () {
      Y5("clearCurrentReceiver");
      g.Gu("yt-remote-cast-receiver");
    },
    iJa = function () {
      return d6()
        ? b6()
          ? b6().getCastSession()
          : ($5("getCastSelector: Cast is not initialized."), null)
        : ($5("getCastSelector: Cast API is not installed!"), null);
    },
    f6 = function () {
      d6()
        ? b6()
          ? e6()
            ? (Y5("Requesting cast selector."), b6().requestSession())
            : (Y5("Wait for cast API to be ready to request the session."),
              c6.push(g.Qo("yt-remote-cast2-api-ready", f6)))
          : $5("requestCastSelector: Cast is not initialized.")
        : $5("requestCastSelector: Cast API is not installed!");
    },
    g6 = function (a, b) {
      e6()
        ? b6().setConnectedScreenStatus(a, b)
        : $5("setConnectedScreenStatus called before ready.");
    },
    $Ia = function () {
      var a = 0 <= g.Uc.search(/ (CrMo|Chrome|CriOS)\//);
      return g.xB || a;
    },
    jJa = function (a, b) {
      b6().init(a, b);
    },
    aJa = function (a, b) {
      var c = !1;
      b6() ||
        ((c = new U5(a, b)),
        c.subscribe("yt-remote-cast2-availability-change", function (d) {
          g.Eu("yt-remote-cast-available", d);
          p4("yt-remote-cast2-availability-change", d);
        }),
        c.subscribe("yt-remote-cast2-receiver-selected", function (d) {
          Y5("onReceiverSelected: " + d.friendlyName);
          g.Eu("yt-remote-cast-receiver", d);
          p4("yt-remote-cast2-receiver-selected", d);
        }),
        c.subscribe("yt-remote-cast2-receiver-resumed", function (d) {
          Y5("onReceiverResumed: " + d.friendlyName);
          g.Eu("yt-remote-cast-receiver", d);
          p4("yt-remote-cast2-receiver-resumed", d);
        }),
        c.subscribe("yt-remote-cast2-session-change", function (d) {
          Y5("onSessionChange: " + t4(d));
          d || g.Gu("yt-remote-cast-receiver");
          p4("yt-remote-cast2-session-change", d);
        }),
        g.Ea("yt.mdx.remote.cloudview.instance_", c, void 0),
        (c = !0));
      Y5("cloudview.createSingleton_: " + c);
      return c;
    },
    b6 = function () {
      return g.Ia("yt.mdx.remote.cloudview.instance_");
    },
    bJa = function (a, b) {
      a6(!0);
      Z5(!1);
      jJa(a, function (c) {
        c
          ? (fJa(!0), g.So("yt-remote-cast2-api-ready"))
          : ($5("Failed to initialize cast API."),
            a6(!1),
            g.Gu("yt-remote-cast-available"),
            g.Gu("yt-remote-cast-receiver"),
            cJa());
        b(c);
      });
    },
    Y5 = function (a) {
      v5("cloudview", a);
    },
    $5 = function (a) {
      v5("cloudview", a);
    },
    a6 = function (a) {
      Y5("setCastInstalled_ " + a);
      g.Eu("yt-remote-cast-installed", a);
    },
    e6 = function () {
      return !!g.Ia("yt.mdx.remote.cloudview.apiReady_");
    },
    fJa = function (a) {
      Y5("setApiReady_ " + a);
      g.Ea("yt.mdx.remote.cloudview.apiReady_", a, void 0);
    },
    Z5 = function (a) {
      g.Ea("yt.mdx.remote.cloudview.initializing_", a, void 0);
    },
    h6 = function (a) {
      this.index = -1;
      this.videoId = this.listId = "";
      this.volume = this.playerState = -1;
      this.muted = !1;
      this.audioTrackId = null;
      this.K = this.N = 0;
      this.u = null;
      this.hasNext = this.nj = !1;
      this.U = this.I = this.B = this.F = 0;
      this.D = NaN;
      this.C = !1;
      this.reset(a);
    },
    i6 = function (a) {
      a.audioTrackId = null;
      a.u = null;
      a.playerState = -1;
      a.nj = !1;
      a.hasNext = !1;
      a.N = 0;
      a.K = g.A();
      a.F = 0;
      a.B = 0;
      a.I = 0;
      a.U = 0;
      a.D = NaN;
      a.C = !1;
    },
    j6 = function (a) {
      return a.Gb() ? (g.A() - a.K) / 1e3 : 0;
    },
    k6 = function (a, b) {
      a.N = b;
      a.K = g.A();
    },
    l6 = function (a) {
      switch (a.playerState) {
        case 1:
        case 1081:
          return (g.A() - a.K) / 1e3 + a.N;
        case -1e3:
          return 0;
      }
      return a.N;
    },
    m6 = function (a, b, c) {
      var d = a.videoId;
      a.videoId = b;
      a.index = c;
      b != d && i6(a);
    },
    n6 = function (a) {
      var b = {};
      b.index = a.index;
      b.listId = a.listId;
      b.videoId = a.videoId;
      b.playerState = a.playerState;
      b.volume = a.volume;
      b.muted = a.muted;
      b.audioTrackId = a.audioTrackId;
      b.trackData = g.Vb(a.u);
      b.hasPrevious = a.nj;
      b.hasNext = a.hasNext;
      b.playerTime = a.N;
      b.playerTimeAt = a.K;
      b.seekableStart = a.F;
      b.seekableEnd = a.B;
      b.duration = a.I;
      b.loadedTime = a.U;
      b.liveIngestionTime = a.D;
      return b;
    },
    p6 = function (a, b) {
      g.N.call(this);
      this.La = 0;
      this.C = a;
      this.F = [];
      this.D = new rIa();
      this.B = this.u = null;
      this.N = (0, g.z)(this.ON, this);
      this.I = (0, g.z)(this.Xr, this);
      this.K = (0, g.z)(this.NN, this);
      this.U = (0, g.z)(this.VN, this);
      var c = 0;
      a
        ? ((c = a.getProxyState()),
          3 != c && (a.subscribe("proxyStateChange", this.qA, this), kJa(this)))
        : (c = 3);
      0 != c &&
        (b
          ? this.qA(c)
          : g.Jo(
              (0, g.z)(function () {
                this.qA(c);
              }, this),
              0
            ));
      var d = iJa();
      d && o6(this, d);
      this.subscribe("yt-remote-cast2-session-change", this.U);
    },
    q6 = function (a) {
      return new h6(a.C.getPlayerContextData());
    },
    kJa = function (a) {
      g.Bb(
        "nowAutoplaying autoplayDismissed remotePlayerChange remoteQueueChange autoplayModeChange autoplayUpNext previousNextChange".split(
          " "
        ),
        function (b) {
          this.F.push(this.C.subscribe(b, g.Ra(this.jP, b), this));
        },
        a
      );
    },
    lJa = function (a) {
      g.Bb(
        a.F,
        function (b) {
          this.C.unsubscribeByKey(b);
        },
        a
      );
      a.F.length = 0;
    },
    r6 = function (a) {
      return 1 == a.getState();
    },
    s6 = function (a, b) {
      var c = a.D;
      50 > c.u.length + c.B.length && a.D.B.push(b);
    },
    u6 = function (a, b, c) {
      var d = q6(a);
      k6(d, c);
      -1e3 != d.playerState && (d.playerState = b);
      t6(a, d);
    },
    v6 = function (a, b, c) {
      a.C.sendMessage(b, c);
    },
    t6 = function (a, b) {
      lJa(a);
      a.C.setPlayerContextData(n6(b));
      kJa(a);
    },
    o6 = function (a, b) {
      a.B &&
        (a.B.removeUpdateListener(a.N),
        a.B.removeMediaListener(a.I),
        a.Xr(null));
      a.B = b;
      a.B &&
        (v5("CP", "Setting cast session: " + a.B.sessionId),
        a.B.addUpdateListener(a.N),
        a.B.addMediaListener(a.I),
        a.B.media.length && a.Xr(a.B.media[0]));
    },
    mJa = function (a) {
      var b = a.u.media,
        c = a.u.customData;
      if (b && c) {
        var d = q6(a);
        b.contentId != d.videoId &&
          v5("CP", "Cast changing video to: " + b.contentId);
        d.videoId = b.contentId;
        d.playerState = c.playerState;
        k6(d, a.u.getEstimatedTime());
        t6(a, d);
      } else v5("CP", "No cast media video. Ignoring state update.");
    },
    w6 = function (a, b, c) {
      return (0, g.z)(function (d) {
        this.Fd(
          "Failed to " + b + " with cast v2 channel. Error code: " + d.code
        );
        d.code != chrome.cast.ErrorCode.TIMEOUT &&
          (this.Fd("Retrying " + b + " using MDx browser channel."),
          v6(this, b, c));
      }, a);
    },
    x6 = function (a, b, c) {
      g.N.call(this);
      this.F = NaN;
      this.X = !1;
      this.N = this.K = this.U = this.W = NaN;
      this.Z = [];
      this.D = this.I = this.C = this.Ib = this.u = null;
      this.ea = a;
      this.Z.push(g.kp(window, "beforeunload", (0, g.z)(this.ZJ, this)));
      this.B = [];
      this.Ib = new h6();
      this.ga = b.id;
      this.da = b.idType;
      this.u = nJa(this, c);
      this.u.subscribe("handlerOpened", this.SN, this);
      this.u.subscribe("handlerClosed", this.PN, this);
      this.u.subscribe("handlerError", this.QN, this);
      this.u.subscribe("handlerMessage", this.RN, this);
      this.u.Hv(b.token);
      this.subscribe(
        "remoteQueueChange",
        function () {
          var d = this.Ib.videoId;
          g.Hu() && g.Eu("yt-remote-session-video-id", d);
        },
        this
      );
    },
    y6 = function (a) {
      v5("conn", a);
    },
    nJa = function (a, b) {
      return new o5(
        s5(a.ea, "/bc"),
        b,
        !1,
        function () {
          return a.cI();
        },
        "shortLived" == a.da
      );
    },
    z6 = function (a, b) {
      a.V("proxyStateChange", b);
    },
    oJa = function (a) {
      a.F = g.Jo(
        (0, g.z)(function () {
          y6("Connecting timeout");
          this.Jo(1);
        }, a),
        2e4
      );
    },
    A6 = function (a) {
      g.Lo(a.F);
      a.F = NaN;
    },
    B6 = function (a) {
      g.Lo(a.W);
      a.W = NaN;
    },
    pJa = function (a) {
      C6(a);
      a.U = g.Jo(
        (0, g.z)(function () {
          D6(this, "getNowPlaying");
        }, a),
        2e4
      );
    },
    C6 = function (a) {
      g.Lo(a.U);
      a.U = NaN;
    },
    rJa = function (a, b) {
      b && (A6(a), B6(a));
      var c = q5(a.u) && isNaN(a.F);
      b == c
        ? b && (z6(a, 1), D6(a, "getSubtitlesTrack"))
        : b
        ? (a.iD() && a.Ib.reset(), z6(a, 1), D6(a, "getNowPlaying"), qJa(a))
        : a.Jo(1);
    },
    sJa = function (a, b) {
      var c = b.params.videoId;
      delete b.params.videoId;
      c == a.Ib.videoId &&
        (g.Qb(b.params) ? (a.Ib.u = null) : (a.Ib.u = b.params),
        a.V("remotePlayerChange"));
    },
    tJa = function (a, b) {
      var c = b.params.videoId || b.params.video_id,
        d = parseInt(b.params.currentIndex, 10);
      a.Ib.listId = b.params.listId || a.Ib.listId;
      m6(a.Ib, c, d);
      a.V("remoteQueueChange");
    },
    vJa = function (a, b) {
      b.params = b.params || {};
      tJa(a, b);
      uJa(a, b);
      a.V("autoplayDismissed");
    },
    uJa = function (a, b) {
      var c = parseInt(b.params.currentTime || b.params.current_time, 10);
      k6(a.Ib, isNaN(c) ? 0 : c);
      c = parseInt(b.params.state, 10);
      c = isNaN(c) ? -1 : c;
      -1 == c && -1e3 == a.Ib.playerState && (c = -1e3);
      a.Ib.playerState = c;
      c = Number(b.params.loadedTime);
      a.Ib.U = isNaN(c) ? 0 : c;
      c = Number(b.params.duration);
      a.Ib.I = isNaN(c) ? 0 : c;
      c = a.Ib;
      var d = Number(b.params.liveIngestionTime);
      c.D = d;
      c.C = isNaN(d) ? !1 : !0;
      c = a.Ib;
      d = Number(b.params.seekableStartTime);
      var e = Number(b.params.seekableEndTime);
      c.F = isNaN(d) ? 0 : d;
      c.B = isNaN(e) ? 0 : e;
      1 == a.Ib.playerState ? pJa(a) : C6(a);
      a.V("remotePlayerChange");
    },
    wJa = function (a, b) {
      if (-1e3 != a.Ib.playerState) {
        var c = 1085;
        switch (parseInt(b.params.adState, 10)) {
          case 1:
            c = 1081;
            break;
          case 2:
            c = 1084;
            break;
          case 0:
            c = 1083;
        }
        a.Ib.playerState = c;
        c = parseInt(b.params.currentTime, 10);
        k6(a.Ib, isNaN(c) ? 0 : c);
        a.V("remotePlayerChange");
      }
    },
    xJa = function (a, b) {
      var c = "true" == b.params.muted;
      a.Ib.volume = parseInt(b.params.volume, 10);
      a.Ib.muted = c;
      a.V("remotePlayerChange");
    },
    yJa = function (a, b) {
      a.I = b.params.videoId;
      a.V("nowAutoplaying", parseInt(b.params.timeout, 10));
    },
    zJa = function (a, b) {
      var c = "true" == b.params.hasNext;
      a.Ib.nj = "true" == b.params.hasPrevious;
      a.Ib.hasNext = c;
      a.V("previousNextChange");
    },
    qJa = function (a) {
      g.Lo(a.N);
      a.N = g.Jo((0, g.z)(a.Jo, a, 1), 864e5);
    },
    D6 = function (a, b, c) {
      c
        ? y6("Sending: action=" + b + ", params=" + g.Tj(c))
        : y6("Sending: action=" + b);
      a.u.sendMessage(b, c);
    },
    E6 = function (a) {
      z5.call(this, "ScreenServiceProxy");
      this.Kf = a;
      this.u = [];
      this.u.push(this.Kf.$_s("screenChange", (0, g.z)(this.aL, this)));
      this.u.push(this.Kf.$_s("onlineScreenChange", (0, g.z)(this.QO, this)));
    },
    DJa = function (a, b) {
      xHa();
      if (!D4 || !D4.get("yt-remote-disable-remote-module-for-dev")) {
        b = g.L("MDX_CONFIG") || b;
        pHa();
        B4();
        F6 ||
          ((F6 = new r5(b ? b.loungeApiHost : void 0)),
          yHa() && (F6.u = "/api/loungedev"));
        G6 ||
          ((G6 = g.Ia("yt.mdx.remote.deferredProxies_") || []),
          g.Ea("yt.mdx.remote.deferredProxies_", G6, void 0));
        AJa();
        var c = H6();
        if (!c) {
          var d = new J5(F6);
          g.Ea("yt.mdx.remote.screenService_", d, void 0);
          c = H6();
          var e = {};
          b &&
            (e = {
              appId: b.appId,
              disableDial: b.disableDial,
              theme: b.theme,
              loadCastApiSetupScript: b.loadCastApiSetupScript,
              disableCastApi: b.disableCastApi,
              enableDialLoungeToken: b.enableDialLoungeToken,
              enableCastLoungeToken: b.enableCastLoungeToken,
            });
          eJa(
            a,
            d,
            function (h) {
              h
                ? I6() && g6(I6(), "YouTube TV")
                : d.subscribe("onlineScreenChange", function () {
                    p4("yt-remote-receiver-availability-change");
                  });
            },
            e
          );
        }
        if (b && !g.Ia("yt.mdx.remote.initialized_")) {
          g.Ea("yt.mdx.remote.initialized_", !0, void 0);
          J6("Initializing: " + g.Tj(b));
          K6.push(
            g.Qo("yt-remote-cast2-availability-change", function () {
              p4("yt-remote-receiver-availability-change");
            })
          );
          K6.push(
            g.Qo("yt-remote-cast2-receiver-selected", function () {
              L6(null);
              p4("yt-remote-auto-connect", "cast-selector-receiver");
            })
          );
          K6.push(
            g.Qo("yt-remote-cast2-receiver-resumed", function () {
              p4("yt-remote-receiver-resumed", "cast-selector-receiver");
            })
          );
          K6.push(g.Qo("yt-remote-cast2-session-change", BJa));
          K6.push(
            g.Qo("yt-remote-connection-change", function (h) {
              h ? g6(I6(), "YouTube TV") : M6() || (g6(null, null), hJa());
            })
          );
          e = N6();
          b.isAuto && (e.id += "#dial");
          g.Zo("desktop_enable_autoplay") && (e.capabilities = ["atp"]);
          e.name = b.device;
          e.app = b.app;
          var f = b.theme;
          f && (e.theme = f);
          J6(" -- with channel params: " + g.Tj(e));
          e
            ? (g.Eu("yt-remote-session-app", e.app),
              g.Eu("yt-remote-session-name", e.name))
            : (g.Gu("yt-remote-session-app"), g.Gu("yt-remote-session-name"));
          g.Ea("yt.mdx.remote.channelParams_", e, void 0);
          c.start();
          I6() || CJa();
        }
      }
    },
    EJa = function () {
      var a = H6().Kf.$_gos();
      var b = O6();
      b && P6() && (w4(a, b) || a.push(b));
      return oHa(a);
    },
    Q6 = function () {
      var a = FJa();
      !a &&
        d6() &&
        gJa() &&
        (a = { key: "cast-selector-receiver", name: gJa() });
      return a;
    },
    FJa = function () {
      var a = EJa(),
        b = O6();
      b || (b = M6());
      return g.cb(a, function (c) {
        return b && s4(b, c.key) ? !0 : !1;
      });
    },
    O6 = function () {
      var a = I6();
      if (!a) return null;
      var b = H6().Qg();
      return x4(b, a);
    },
    BJa = function (a) {
      J6("remote.onCastSessionChange_: " + t4(a));
      if (a) {
        var b = O6();
        if (b && b.id == a.id) {
          if (
            (g6(b.id, "YouTube TV"), "shortLived" == a.idType && (a = a.token))
          )
            R6 && (R6.token = a), (b = P6()) && b.Hv(a);
        } else b && S6(), T6(a, 1);
      } else P6() && S6();
    },
    S6 = function () {
      e6() ? b6().stopSession() : $5("stopSession called before API ready.");
      var a = P6();
      a && (a.disconnect(1), U6(null));
    },
    V6 = function () {
      var a = P6();
      return !!a && 3 != a.getProxyState();
    },
    J6 = function (a) {
      v5("remote", a);
    },
    H6 = function () {
      if (!W6) {
        var a = g.Ia("yt.mdx.remote.screenService_");
        W6 = a ? new E6(a) : null;
      }
      return W6;
    },
    I6 = function () {
      return g.Ia("yt.mdx.remote.currentScreenId_");
    },
    GJa = function (a) {
      g.Ea("yt.mdx.remote.currentScreenId_", a, void 0);
    },
    HJa = function () {
      return g.Ia("yt.mdx.remote.connectData_");
    },
    L6 = function (a) {
      g.Ea("yt.mdx.remote.connectData_", a, void 0);
    },
    P6 = function () {
      return g.Ia("yt.mdx.remote.connection_");
    },
    U6 = function (a) {
      var b = P6();
      L6(null);
      a || GJa("");
      g.Ea("yt.mdx.remote.connection_", a, void 0);
      G6 &&
        (g.Bb(G6, function (c) {
          c(a);
        }),
        (G6.length = 0));
      b && !a
        ? p4("yt-remote-connection-change", !1)
        : !b && a && p4("yt-remote-connection-change", !0);
    },
    M6 = function () {
      var a = g.Hu();
      if (!a) return null;
      var b = H6();
      if (!b) return null;
      b = b.Qg();
      return x4(b, a);
    },
    T6 = function (a, b) {
      I6();
      O6() && O6();
      if (X6) R6 = a;
      else {
        GJa(a.id);
        var c = new x6(F6, a, N6());
        c.connect(b, HJa());
        c.subscribe("beforeDisconnect", function (d) {
          p4("yt-remote-before-disconnect", d);
        });
        c.subscribe("beforeDispose", function () {
          P6() && (P6(), U6(null));
        });
        c.subscribe("browserChannelAuthError", function () {
          var d = O6();
          d &&
            "shortLived" == d.idType &&
            (e6()
              ? b6().handleBrowserChannelAuthError()
              : $5("refreshLoungeToken called before API ready."));
        });
        U6(c);
      }
    },
    CJa = function () {
      var a = M6();
      a
        ? (J6("Resume connection to: " + t4(a)), T6(a, 0))
        : (C4(),
          hJa(),
          J6("Skipping connecting because no session screen found."));
    },
    AJa = function () {
      var a = N6();
      if (g.Qb(a)) {
        a = A4();
        var b = g.Fu("yt-remote-session-name") || "",
          c = g.Fu("yt-remote-session-app") || "";
        a = { device: "REMOTE_CONTROL", id: a, name: b, app: c, mdxVersion: 3 };
        g.Ea("yt.mdx.remote.channelParams_", a, void 0);
      }
    },
    N6 = function () {
      return g.Ia("yt.mdx.remote.channelParams_") || {};
    },
    Y6 = function (a, b, c) {
      g.B.call(this);
      var d = this;
      this.B = a;
      this.J = b;
      this.wb = c;
      this.events = new g.YN(this);
      this.W = this.events.P(this.J, "onVolumeChange", function (e) {
        IJa(d, e);
      });
      this.F = !1;
      this.suggestion = null;
      this.I = new g.WK(64);
      this.u = new g.E(this.pH, 500, this);
      this.C = new g.E(this.qH, 1e3, this);
      this.N = new G4(this.LR, 0, this);
      this.D = {};
      this.U = new g.E(this.SH, 1e3, this);
      this.K = new H4(this.seekTo, 1e3, this);
      this.X = g.Ja;
      g.C(this, this.events);
      this.events.P(b, "onCaptionsTrackListChanged", this.zO);
      this.events.P(b, "captionschanged", this.LN);
      this.events.P(b, "captionssettingschanged", this.uH);
      this.events.P(b, "videoplayerreset", this.kv);
      this.events.P(b, "mdxautoplaycancel", function () {
        d.wb.BC();
      });
      a = this.wb;
      a.ma();
      a.subscribe("proxyStateChange", this.eG, this);
      a.subscribe("remotePlayerChange", this.ks, this);
      a.subscribe("remoteQueueChange", this.kv, this);
      a.subscribe("previousNextChange", this.bG, this);
      a.subscribe("nowAutoplaying", this.WF, this);
      a.subscribe("autoplayDismissed", this.wF, this);
      g.C(this, this.u);
      g.C(this, this.C);
      g.C(this, this.N);
      g.C(this, this.U);
      g.C(this, this.K);
      this.uH();
      this.kv();
      this.ks();
    },
    IJa = function (a, b) {
      if (Z6(a)) {
        a.wb.unsubscribe("remotePlayerChange", a.ks, a);
        var c = Math.round(b.volume),
          d = !!b.muted,
          e = q6(a.wb);
        if (c !== e.volume || d !== e.muted) a.wb.setVolume(c, d), a.U.start();
        a.wb.subscribe("remotePlayerChange", a.ks, a);
      }
    },
    JJa = function (a) {
      a.Bb(0);
      a.u.stop();
      a.tb(new g.WK(64));
    },
    $6 = function (a, b) {
      if (Z6(a) && !a.F) {
        var c = null;
        b && ((c = { style: a.J.getSubtitlesUserSettings() }), g.Xb(c, b));
        a.wb.dI(a.J.getVideoData(1).videoId, c);
        a.D = q6(a.wb).u;
      }
    },
    a7 = function (a, b) {
      var c = a.J.getPlaylist();
      if (null === c || void 0 === c ? 0 : c.listId) {
        var d = c.index;
        var e = c.listId.toString();
      }
      c = a.J.getVideoData(1);
      a.wb.playVideo(c.videoId, b, d, e, c.playerParams, c.ea, bHa(c));
      a.tb(new g.WK(1));
    },
    KJa = function (a, b) {
      if (b) {
        var c = a.J.getOption("captions", "tracklist", { ID: 1 });
        c && c.length
          ? (a.J.setOption("captions", "track", b), (a.F = !1))
          : (a.J.loadModule("captions"), (a.F = !0));
      } else a.J.setOption("captions", "track", {});
    },
    Z6 = function (a) {
      return q6(a.wb).videoId === a.J.getVideoData(1).videoId;
    },
    b7 = function () {
      g.U.call(this, {
        G: "div",
        L: "ytp-mdx-manual-pairing-popup-dialog",
        T: { role: "dialog" },
        R: [
          {
            G: "div",
            L: "ytp-mdx-manual-pairing-popup-dialog-inner-content",
            R: [
              {
                G: "div",
                L: "ytp-mdx-manual-pairing-popup-title",
                ba: "Connecting to your TV on web using a code will be going away soon",
              },
              {
                G: "div",
                L: "ytp-mdx-manual-pairing-popup-buttons",
                R: [
                  {
                    G: "button",
                    ia: [
                      "ytp-button",
                      "ytp-mdx-manual-pairing-popup-learn-more",
                    ],
                    ba: "Learn more",
                  },
                  {
                    G: "button",
                    ia: ["ytp-button", "ytp-mdx-manual-pairing-popup-ok"],
                    ba: "OK",
                  },
                ],
              },
            ],
          },
        ],
      });
      this.u = new g.EM(this, 250);
      this.learnMoreButton = this.ha("ytp-mdx-manual-pairing-popup-learn-more");
      this.okButton = this.ha("ytp-mdx-manual-pairing-popup-ok");
      g.C(this, this.u);
      this.P(this.learnMoreButton, "click", this.B);
      this.P(this.okButton, "click", this.C);
    },
    c7 = function () {
      g.U.call(this, {
        G: "div",
        L: "ytp-mdx-popup-dialog",
        T: { role: "dialog" },
        R: [
          {
            G: "div",
            L: "ytp-mdx-popup-dialog-inner-content",
            R: [
              { G: "div", L: "ytp-mdx-popup-title", ba: "You're signed out" },
              {
                G: "div",
                L: "ytp-mdx-popup-description",
                ba: "Videos you watch may be added to the TV's watch history and influence TV recommendations. To avoid this, cancel and sign in to YouTube on your computer.",
              },
              {
                G: "div",
                L: "ytp-mdx-privacy-popup-buttons",
                R: [
                  {
                    G: "button",
                    ia: ["ytp-button", "ytp-mdx-privacy-popup-cancel"],
                    ba: "Cancel",
                  },
                  {
                    G: "button",
                    ia: ["ytp-button", "ytp-mdx-privacy-popup-confirm"],
                    ba: "Confirm",
                  },
                ],
              },
            ],
          },
        ],
      });
      this.u = new g.EM(this, 250);
      this.cancelButton = this.ha("ytp-mdx-privacy-popup-cancel");
      this.confirmButton = this.ha("ytp-mdx-privacy-popup-confirm");
      g.C(this, this.u);
      this.P(this.cancelButton, "click", this.B);
      this.P(this.confirmButton, "click", this.C);
    },
    d7 = function (a) {
      g.U.call(this, {
        G: "div",
        L: "ytp-remote",
        R: [
          {
            G: "div",
            L: "ytp-remote-display-status",
            R: [
              { G: "div", L: "ytp-remote-display-status-icon", R: [g.fna()] },
              {
                G: "div",
                L: "ytp-remote-display-status-text",
                ba: "{{statustext}}",
              },
            ],
          },
        ],
      });
      this.api = a;
      this.u = new g.EM(this, 250);
      g.C(this, this.u);
      this.P(a, "presentingplayerstatechange", this.B);
      LJa(this, a.Va());
    },
    LJa = function (a, b) {
      if (3 === a.api.getPresentingPlayerType()) {
        var c = {
          RECEIVER_NAME: a.api.getOption("remote", "currentReceiver").name,
        };
        c = g.T(b, 128)
          ? g.wK("Error on $RECEIVER_NAME", c)
          : b.Gb() || g.T(b, 4)
          ? g.wK("Playing on $RECEIVER_NAME", c)
          : g.wK("Connected to $RECEIVER_NAME", c);
        a.za("statustext", c);
        a.u.show();
      } else a.u.hide();
    },
    e7 = function (a, b) {
      g.sR.call(this, "Play on", 0, a, b);
      this.J = a;
      this.gm = {};
      this.P(a, "onMdxReceiversChange", this.D);
      this.P(a, "presentingplayerstatechange", this.D);
      this.D();
    },
    f7 = function (a) {
      g.hO.call(this, a);
      this.hi = { key: v4(), name: "This computer" };
      this.nh = null;
      this.subscriptions = [];
      this.Rz = this.wb = null;
      this.gm = [this.hi];
      this.ol = this.hi;
      this.Nc = new g.WK(64);
      this.eE = 0;
      this.Qe = -1;
      this.pp = null;
      this.qs = this.zu = !1;
      this.Nn = this.Np = null;
      if (!g.ID(this.player.S())) {
        a = this.player;
        var b = g.MN(a);
        b && (b = b.Cl()) && ((b = new e7(a, b)), g.C(this, b));
        b = new d7(a);
        g.C(this, b);
        g.WN(a, b.element, 4);
        this.Np = new c7();
        g.C(this, this.Np);
        g.WN(a, this.Np.element, 4);
        g.P(
          this.player.S().experiments,
          "pair_servlet_deprecation_warning_enabled"
        ) &&
          !g.P(this.player.S().experiments, "deprecate_pair_servlet_enabled") &&
          ((this.pp = new b7()),
          g.C(this, this.pp),
          g.WN(a, this.pp.element, 4));
        this.qs = !!M6();
        this.zu = !!g.Fu("yt-remote-manual-pairing-warning-shown");
      }
    },
    g7 = function (a) {
      a.Nn &&
        (a.player.removeEventListener("presentingplayerstatechange", a.Nn),
        (a.Nn = null));
    },
    MJa = function (a, b, c) {
      a.Nc = c;
      a.player.V("presentingplayerstatechange", new g.cK(c, b));
    },
    NJa = function (a, b, c) {
      var d = !1;
      1 === b ? (d = !a.qs) : 2 === b && (d = !a.zu);
      d && g.eK(c, 8) && (a.player.pauseVideo(), g7(a));
    },
    h7 = function (a, b) {
      if (b.key !== a.ol.key)
        if (b.key === a.hi.key) S6();
        else {
          if (
            a.pp &&
            !a.zu &&
            b !== a.hi &&
            "cast-selector-receiver" !== b.key &&
            g.TD(a.player.S())
          )
            OJa(a);
          else {
            var c;
            (c = !g.P(
              a.player.S().experiments,
              "mdx_enable_privacy_disclosure_ui"
            )) ||
              (c =
                ((c = g.L("PLAYER_CONFIG")) &&
                c.args &&
                void 0 !== c.args.authuser
                  ? !0
                  : !(!g.L("SESSION_INDEX") && !g.L("LOGGED_IN"))) ||
                a.qs ||
                !a.Np);
            (c ? 0 : g.TD(a.player.S()) || g.XD(a.player.S())) && PJa(a);
          }
          a.ol = b;
          var d = a.player.getPlaylistId();
          c = a.player.getVideoData(1);
          var e = c.videoId;
          if (
            (!d && !e) ||
            ((2 === a.player.getAppState() || 1 === a.player.getAppState()) &&
              g.P(
                a.player.S().experiments,
                "should_clear_video_data_on_player_cued_unstarted"
              ))
          )
            c = null;
          else {
            var f = a.player.getPlaylist();
            if (f) {
              var h = [];
              for (var l = 0; l < f.length; l++) h[l] = f.Ma(l).videoId;
            } else h = [e];
            f = a.player.getCurrentTime(1);
            d = {
              videoIds: h,
              listId: d,
              videoId: e,
              playerParams: c.playerParams,
              clickTrackingParams: c.ea,
              index: Math.max(a.player.getPlaylistIndex(), 0),
              currentTime: 0 === f ? void 0 : f,
            };
            (c = bHa(c)) && (d.locationInfo = c);
            c = d;
          }
          J6("Connecting to: " + g.Tj(b));
          "cast-selector-receiver" == b.key
            ? (L6(c || null),
              (c = c || null),
              e6()
                ? b6().setLaunchParams(c)
                : $5("setLaunchParams called before ready."))
            : !c && V6() && I6() == b.key
            ? p4("yt-remote-connection-change", !0)
            : (S6(),
              L6(c || null),
              (c = H6().Qg()),
              (c = x4(c, b.key)) && T6(c, 1));
        }
    },
    PJa = function (a) {
      a.player.Va().Gb()
        ? a.player.pauseVideo()
        : ((a.Nn = function (b) {
            NJa(a, 1, b);
          }),
          a.player.addEventListener("presentingplayerstatechange", a.Nn));
      a.Np && a.Np.Ec();
      P6() || (X6 = !0);
    },
    OJa = function (a) {
      a.player.Va().Gb()
        ? a.player.pauseVideo()
        : ((a.Nn = function (b) {
            NJa(a, 2, b);
          }),
          a.player.addEventListener("presentingplayerstatechange", a.Nn));
      a.pp && a.pp.Ec();
      P6() || (X6 = !0);
    },
    PHa = {
      "\x00": "\\0",
      "\b": "\\b",
      "\f": "\\f",
      "\n": "\\n",
      "\r": "\\r",
      "\t": "\\t",
      "\x0B": "\\x0B",
      '"': '\\"',
      "\\": "\\\\",
      "<": "\\u003C",
    },
    W4 = { "'": "\\'" },
    QJa = {},
    kHa = {
      PS: "atp",
      d2: "ska",
      Z0: "que",
      i_: "mus",
      b2: "sus",
      EW: "dsp",
      v1: "seq",
      NZ: "mic",
      CV: "dpa",
    },
    D4,
    z4 = "",
    DHa = zHa("loadCastFramework") || zHa("loadCastApplicationFramework"),
    dJa = [
      "pkedcjkdefgpdelpbcmbmeomcjbeemfm",
      "enhhojjnijigcajfphajepfemndkmdlo",
    ]; /*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
  g.Ta(G4, g.B);
  g.k = G4.prototype;
  g.k.WJ = function (a) {
    this.D = arguments;
    this.u = !1;
    this.gb ? (this.C = g.A() + this.Lf) : (this.gb = g.Sm(this.F, this.Lf));
  };
  g.k.stop = function () {
    this.gb && (g.v.clearTimeout(this.gb), (this.gb = null));
    this.C = null;
    this.u = !1;
    this.D = [];
  };
  g.k.pause = function () {
    ++this.B;
  };
  g.k.resume = function () {
    this.B &&
      (--this.B,
      !this.B && this.u && ((this.u = !1), this.I.apply(null, this.D)));
  };
  g.k.ca = function () {
    this.stop();
    G4.Dd.ca.call(this);
  };
  g.k.XJ = function () {
    this.C
      ? ((this.gb = g.Sm(this.F, this.C - g.A())), (this.C = null))
      : ((this.gb = null),
        this.B ? (this.u = !0) : ((this.u = !1), this.I.apply(null, this.D)));
  };
  g.u(H4, g.B);
  g.k = H4.prototype;
  g.k.wE = function (a) {
    this.C = arguments;
    this.gb || this.B ? (this.u = !0) : I4(this);
  };
  g.k.stop = function () {
    this.gb &&
      (g.v.clearTimeout(this.gb),
      (this.gb = null),
      (this.u = !1),
      (this.C = null));
  };
  g.k.pause = function () {
    this.B++;
  };
  g.k.resume = function () {
    this.B--;
    this.B || !this.u || this.gb || ((this.u = !1), I4(this));
  };
  g.k.ca = function () {
    g.B.prototype.ca.call(this);
    this.stop();
  };
  K4.prototype.stringify = function (a) {
    return g.v.JSON.stringify(a, void 0);
  };
  K4.prototype.parse = function (a) {
    return g.v.JSON.parse(a, void 0);
  };
  var M4 = new g.hm();
  g.u(GHa, g.Ll);
  O4.prototype.u = null;
  O4.prototype.getOptions = function () {
    var a;
    (a = this.u) ||
      ((a = {}), IHa(this) && ((a[0] = !0), (a[1] = !0)), (a = this.u = a));
    return a;
  };
  var i7;
  g.Ta(HHa, O4);
  i7 = new HHa();
  g.k = P4.prototype;
  g.k.sn = null;
  g.k.Di = !1;
  g.k.iq = null;
  g.k.aB = null;
  g.k.Rp = null;
  g.k.bq = null;
  g.k.fl = null;
  g.k.im = null;
  g.k.On = null;
  g.k.Ce = null;
  g.k.Zs = 0;
  g.k.Hi = null;
  g.k.hw = null;
  g.k.Fl = null;
  g.k.tr = -1;
  g.k.eH = !0;
  g.k.Ym = !1;
  g.k.ty = 0;
  g.k.xv = null;
  var NHa = {},
    S4 = {};
  g.k = P4.prototype;
  g.k.setTimeout = function (a) {
    this.F = a;
  };
  g.k.MQ = function (a) {
    a = a.target;
    var b = this.xv;
    b && 3 == a5(a) ? b.wE() : this.aI(a);
  };
  g.k.aI = function (a) {
    try {
      if (a == this.Ce)
        a: {
          var b = a5(this.Ce),
            c = this.Ce.I,
            d = this.Ce.getStatus();
          if ((g.ze && !g.de(10)) || (g.Be && !g.ce("420+"))) {
            if (4 > b) break a;
          } else if (3 > b || (3 == b && !g.Bg && !c5(this.Ce))) break a;
          this.Ym ||
            4 != b ||
            7 == c ||
            (8 == c || 0 >= d ? this.u.mi(3) : this.u.mi(2));
          X4(this);
          var e = this.Ce.getStatus();
          this.tr = e;
          var f = c5(this.Ce);
          (this.Di = 200 == e)
            ? (4 == b && U4(this),
              this.I
                ? (OHa(this, b, f),
                  g.Bg &&
                    this.Di &&
                    3 == b &&
                    (this.D.ya(this.C, "tick", this.FQ), this.C.start()))
                : T4(this, f),
              this.Di &&
                !this.Ym &&
                (4 == b ? this.u.du(this) : ((this.Di = !1), R4(this))))
            : (400 == e && 0 < f.indexOf("Unknown SID")
                ? ((this.Fl = 3), N4(13))
                : ((this.Fl = 0), N4(14)),
              U4(this),
              V4(this));
        }
    } catch (h) {
      this.Ce && c5(this.Ce);
    } finally {
    }
  };
  g.k.FQ = function () {
    var a = a5(this.Ce),
      b = c5(this.Ce);
    this.Zs < b.length &&
      (X4(this), OHa(this, a, b), this.Di && 4 != a && R4(this));
  };
  g.k.eQ = function (a) {
    L4((0, g.z)(this.dQ, this, a), 0);
  };
  g.k.dQ = function (a) {
    this.Ym || (X4(this), T4(this, a), R4(this));
  };
  g.k.oG = function (a) {
    L4((0, g.z)(this.cQ, this, a), 0);
  };
  g.k.cQ = function (a) {
    this.Ym || (U4(this), (this.Di = a), this.u.du(this), this.u.mi(4));
  };
  g.k.cancel = function () {
    this.Ym = !0;
    U4(this);
  };
  g.k.mQ = function () {
    this.iq = null;
    var a = g.A();
    0 <= a - this.aB
      ? (2 != this.bq && this.u.mi(3),
        U4(this),
        (this.Fl = 2),
        N4(18),
        V4(this))
      : RHa(this, this.aB - a);
  };
  g.k.getLastError = function () {
    return this.Fl;
  };
  g.Ta(Z4, g.hm);
  var YHa = /^https?$/i,
    RJa = ["POST", "PUT"];
  g.k = Z4.prototype;
  g.k.send = function (a, b, c, d) {
    if (this.u)
      throw Error(
        "[goog.net.XhrIo] Object is active with another request=" +
          this.U +
          "; newUri=" +
          a
      );
    b = b ? b.toUpperCase() : "GET";
    this.U = a;
    this.D = "";
    this.I = 0;
    this.wa = b;
    this.ga = !1;
    this.C = !0;
    this.u = this.da ? JHa(this.da) : JHa(i7);
    this.Z = this.da ? this.da.getOptions() : i7.getOptions();
    this.u.onreadystatechange = (0, g.z)(this.cG, this);
    try {
      o4(b5(this, "Opening Xhr")),
        (this.ka = !0),
        this.u.open(b, String(a), !0),
        (this.ka = !1);
    } catch (f) {
      o4(b5(this, "Error opening Xhr: " + f.message));
      XHa(this, f);
      return;
    }
    a = c || "";
    var e = this.headers.clone();
    d &&
      gHa(d, function (f, h) {
        e.set(h, f);
      });
    d = g.cb(e.sh(), VHa);
    c = g.v.FormData && a instanceof g.v.FormData;
    !g.gb(RJa, b) ||
      d ||
      c ||
      e.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
    e.forEach(function (f, h) {
      this.u.setRequestHeader(h, f);
    }, this);
    this.Aa && (this.u.responseType = this.Aa);
    "withCredentials" in this.u &&
      this.u.withCredentials !== this.ea &&
      (this.u.withCredentials = this.ea);
    try {
      $Ha(this),
        0 < this.K &&
          ((this.X = UHa(this.u)),
          o4(
            b5(
              this,
              "Will abort after " + this.K + "ms if incomplete, xhr2 " + this.X
            )
          ),
          this.X
            ? ((this.u.timeout = this.K),
              (this.u.ontimeout = (0, g.z)(this.qD, this)))
            : (this.W = g.Sm(this.qD, this.K, this))),
        o4(b5(this, "Sending request")),
        (this.N = !0),
        this.u.send(a),
        (this.N = !1);
    } catch (f) {
      o4(b5(this, "Send error: " + f.message)), XHa(this, f);
    }
  };
  g.k.qD = function () {
    "undefined" != typeof g.u_ &&
      this.u &&
      ((this.D = "Timed out after " + this.K + "ms, aborting"),
      (this.I = 8),
      b5(this, this.D),
      this.dispatchEvent("timeout"),
      this.abort(8));
  };
  g.k.abort = function (a) {
    this.u &&
      this.C &&
      (b5(this, "Aborting"),
      (this.C = !1),
      (this.F = !0),
      this.u.abort(),
      (this.F = !1),
      (this.I = a || 7),
      this.dispatchEvent("complete"),
      this.dispatchEvent("abort"),
      $4(this));
  };
  g.k.ca = function () {
    this.u &&
      (this.C && ((this.C = !1), (this.F = !0), this.u.abort(), (this.F = !1)),
      $4(this, !0));
    Z4.Dd.ca.call(this);
  };
  g.k.cG = function () {
    this.ma() || (this.ka || this.N || this.F ? ZHa(this) : this.lP());
  };
  g.k.lP = function () {
    ZHa(this);
  };
  g.k.isActive = function () {
    return !!this.u;
  };
  g.k.isComplete = function () {
    return 4 == a5(this);
  };
  g.k.getStatus = function () {
    try {
      return 2 < a5(this) ? this.u.status : -1;
    } catch (a) {
      return -1;
    }
  };
  g.k.getResponseHeader = function (a) {
    if (this.u && this.isComplete())
      return (a = this.u.getResponseHeader(a)), null === a ? void 0 : a;
  };
  g.k.getLastError = function () {
    return "string" === typeof this.D ? this.D : String(this.D);
  };
  g.k = aIa.prototype;
  g.k.qy = null;
  g.k.Fg = null;
  g.k.yv = !1;
  g.k.pD = null;
  g.k.Dt = null;
  g.k.Uy = null;
  g.k.sy = null;
  g.k.La = null;
  g.k.tk = -1;
  g.k.sr = null;
  g.k.xq = null;
  g.k.connect = function (a) {
    this.sy = a;
    a = d5(this.u, null, this.sy);
    N4(3);
    this.pD = g.A();
    var b = this.u.K;
    null != b
      ? ((this.sr = b[0]),
        (this.xq = b[1])
          ? ((this.La = 1), bIa(this))
          : ((this.La = 2), f5(this)))
      : (m4(a, "MODE", "init"),
        (this.Fg = new P4(this, void 0, void 0, void 0)),
        (this.Fg.sn = this.qy),
        Q4(this.Fg, a, !1, null, !0),
        (this.La = 0));
  };
  g.k.aJ = function (a) {
    if (a) (this.La = 2), f5(this);
    else {
      N4(4);
      var b = this.u;
      b.lj = b.ll.tk;
      m5(b, 9);
    }
    a && this.mi(2);
  };
  g.k.Ax = function (a) {
    return this.u.Ax(a);
  };
  g.k.abort = function () {
    this.Fg && (this.Fg.cancel(), (this.Fg = null));
    this.tk = -1;
  };
  g.k.oD = function () {
    return !1;
  };
  g.k.fG = function (a, b) {
    this.tk = a.tr;
    if (0 == this.La)
      if (b) {
        try {
          var c = this.B.parse(b);
        } catch (d) {
          c = this.u;
          c.lj = this.tk;
          m5(c, 2);
          return;
        }
        this.sr = c[0];
        this.xq = c[1];
      } else (c = this.u), (c.lj = this.tk), m5(c, 2);
    else if (2 == this.La)
      if (this.yv) N4(7), (this.Uy = g.A());
      else if ("11111" == b) {
        if (
          (N4(6),
          (this.yv = !0),
          (this.Dt = g.A()),
          (c = this.Dt - this.pD),
          !g.ze || g.de(10) || 500 > c)
        )
          (this.tk = 200), this.Fg.cancel(), N4(12), e5(this.u, this, !0);
      } else N4(8), (this.Dt = this.Uy = g.A()), (this.yv = !1);
  };
  g.k.du = function () {
    this.tk = this.Fg.tr;
    if (this.Fg.Di)
      0 == this.La
        ? this.xq
          ? ((this.La = 1), bIa(this))
          : ((this.La = 2), f5(this))
        : 2 == this.La &&
          ((!g.ze || g.de(10) ? !this.yv : 200 > this.Uy - this.Dt)
            ? (N4(11), e5(this.u, this, !1))
            : (N4(12), e5(this.u, this, !0)));
    else {
      0 == this.La ? N4(9) : 2 == this.La && N4(10);
      var a = this.u;
      this.Fg.getLastError();
      a.lj = this.tk;
      m5(a, 2);
    }
  };
  g.k.Hs = function () {
    return this.u.Hs();
  };
  g.k.isActive = function () {
    return this.u.isActive();
  };
  g.k.mi = function (a) {
    this.u.mi(a);
  };
  g.k = g5.prototype;
  g.k.kj = null;
  g.k.Qq = null;
  g.k.sg = null;
  g.k.Zd = null;
  g.k.py = null;
  g.k.Et = null;
  g.k.VB = null;
  g.k.cu = null;
  g.k.Vr = 0;
  g.k.cN = 0;
  g.k.Jf = null;
  g.k.ul = null;
  g.k.Zj = null;
  g.k.gn = null;
  g.k.ll = null;
  g.k.dw = null;
  g.k.jp = -1;
  g.k.dE = -1;
  g.k.lj = -1;
  g.k.No = 0;
  g.k.yo = 0;
  g.k.Zm = 8;
  g.Ta(dIa, g.Ll);
  g.Ta(eIa, g.Ll);
  g.k = g5.prototype;
  g.k.connect = function (a, b, c, d, e) {
    N4(0);
    this.py = b;
    this.Qq = c || {};
    d && void 0 !== e && ((this.Qq.OSID = d), (this.Qq.OAID = e));
    this.F ? (L4((0, g.z)(this.nC, this, a), 100), iIa(this)) : this.nC(a);
  };
  g.k.nC = function (a) {
    this.ll = new aIa(this);
    this.ll.qy = this.kj;
    this.ll.B = this.D;
    this.ll.connect(a);
  };
  g.k.oD = function () {
    return 0 == this.La;
  };
  g.k.getState = function () {
    return this.La;
  };
  g.k.mG = function (a) {
    this.ul = null;
    mIa(this, a);
  };
  g.k.lG = function () {
    this.Zj = null;
    this.Zd = new P4(this, this.B, "rpc", this.I);
    this.Zd.sn = this.kj;
    this.Zd.ty = 0;
    var a = this.VB.clone();
    k4(a, "RID", "rpc");
    k4(a, "SID", this.B);
    k4(a, "CI", this.dw ? "0" : "1");
    k4(a, "AID", this.jp);
    h5(this, a);
    if (!g.ze || g.de(10))
      k4(a, "TYPE", "xmlhttp"), Q4(this.Zd, a, !0, this.cu, !1);
    else {
      k4(a, "TYPE", "html");
      var b = this.Zd,
        c = !!this.cu;
      b.bq = 3;
      b.fl = l4(a.clone());
      QHa(b, c);
    }
  };
  g.k.fG = function (a, b) {
    if (0 != this.La && (this.Zd == a || this.sg == a))
      if (((this.lj = a.tr), this.sg == a && 3 == this.La))
        if (7 < this.Zm) {
          try {
            var c = this.D.parse(b);
          } catch (f) {
            c = null;
          }
          if (Array.isArray(c) && 3 == c.length)
            if (0 == c[0])
              a: {
                if (!this.Zj) {
                  if (this.Zd)
                    if (this.Zd.Rp + 3e3 < this.sg.Rp)
                      j5(this), this.Zd.cancel(), (this.Zd = null);
                    else break a;
                  l5(this);
                  N4(19);
                }
              }
            else
              (this.dE = c[1]),
                0 < this.dE - this.jp &&
                  37500 > c[2] &&
                  this.dw &&
                  0 == this.yo &&
                  !this.gn &&
                  (this.gn = L4((0, g.z)(this.HN, this), 6e3));
          else m5(this, 11);
        } else b != QJa.rV.u && m5(this, 11);
      else if ((this.Zd == a && j5(this), !g.oc(b))) {
        c = this.D.parse(b);
        for (var d = 0; d < c.length; d++) {
          var e = c[d];
          this.jp = e[0];
          e = e[1];
          2 == this.La
            ? "c" == e[0]
              ? ((this.B = e[1]),
                (this.cu = e[2]),
                (e = e[3]),
                null != e ? (this.Zm = e) : (this.Zm = 6),
                (this.La = 3),
                this.Jf && this.Jf.jC(),
                (this.VB = d5(this, this.Hs() ? this.cu : null, this.py)),
                nIa(this))
              : "stop" == e[0] && m5(this, 7)
            : 3 == this.La &&
              ("stop" == e[0]
                ? m5(this, 7)
                : "noop" != e[0] && this.Jf && this.Jf.iC(e),
              (this.yo = 0));
        }
      }
  };
  g.k.HN = function () {
    null != this.gn &&
      ((this.gn = null), this.Zd.cancel(), (this.Zd = null), l5(this), N4(20));
  };
  g.k.du = function (a) {
    if (this.Zd == a) {
      j5(this);
      this.Zd = null;
      var b = 2;
    } else if (this.sg == a) (this.sg = null), (b = 1);
    else return;
    this.lj = a.tr;
    if (0 != this.La)
      if (a.Di)
        1 == b
          ? ((b = M4),
            b.dispatchEvent(
              new dIa(b, a.On ? a.On.length : 0, g.A() - a.Rp, this.No)
            ),
            i5(this),
            (this.C.length = 0))
          : nIa(this);
      else {
        var c = a.getLastError(),
          d;
        if (!(d = 3 == c || 7 == c || (0 == c && 0 < this.lj))) {
          if ((d = 1 == b))
            this.sg || this.ul || 1 == this.La || 2 <= this.No
              ? (d = !1)
              : ((this.ul = L4((0, g.z)(this.mG, this, a), oIa(this, this.No))),
                this.No++,
                (d = !0));
          d = !(d || (2 == b && l5(this)));
        }
        if (d)
          switch (c) {
            case 1:
              m5(this, 5);
              break;
            case 4:
              m5(this, 10);
              break;
            case 3:
              m5(this, 6);
              break;
            case 7:
              m5(this, 12);
              break;
            default:
              m5(this, 2);
          }
      }
  };
  g.k.vJ = function (a) {
    if (!g.gb(arguments, this.La))
      throw Error("Unexpected channel state: " + this.La);
  };
  g.k.vR = function (a) {
    a ? N4(2) : (N4(1), pIa(this, 8));
  };
  g.k.Ax = function (a) {
    if (a) throw Error("Can't create secondary domain capable XhrIo object.");
    a = new Z4();
    a.ea = !1;
    return a;
  };
  g.k.isActive = function () {
    return !!this.Jf && this.Jf.isActive(this);
  };
  g.k.mi = function (a) {
    var b = M4;
    b.dispatchEvent(new eIa(b, a));
  };
  g.k.Hs = function () {
    return !(!g.ze || g.de(10));
  };
  g.k = qIa.prototype;
  g.k.jC = function () {};
  g.k.iC = function () {};
  g.k.hC = function () {};
  g.k.kx = function () {};
  g.k.SC = function () {
    return {};
  };
  g.k.isActive = function () {
    return !0;
  };
  g.k = rIa.prototype;
  g.k.isEmpty = function () {
    return g.ib(this.u) && g.ib(this.B);
  };
  g.k.clear = function () {
    this.u = [];
    this.B = [];
  };
  g.k.contains = function (a) {
    return g.gb(this.u, a) || g.gb(this.B, a);
  };
  g.k.remove = function (a) {
    var b = this.u;
    var c = (0, g.vBa)(b, a);
    0 <= c ? (g.kb(b, c), (b = !0)) : (b = !1);
    return b || g.lb(this.B, a);
  };
  g.k.Zf = function () {
    for (var a = [], b = this.u.length - 1; 0 <= b; --b) a.push(this.u[b]);
    var c = this.B.length;
    for (b = 0; b < c; ++b) a.push(this.B[b]);
    return a;
  };
  g.Ta(n5, g.B);
  g.k = n5.prototype;
  g.k.WP = function () {
    this.Lf = Math.min(3e5, 2 * this.Lf);
    this.C();
    this.B && this.start();
  };
  g.k.start = function () {
    var a = this.Lf + 15e3 * Math.random();
    g.sn(this.u, a);
    this.B = g.A() + a;
  };
  g.k.stop = function () {
    this.u.stop();
    this.B = 0;
  };
  g.k.isActive = function () {
    return this.u.isActive();
  };
  g.k.reset = function () {
    this.u.stop();
    this.Lf = 5e3;
  };
  g.Ta(o5, qIa);
  g.k = o5.prototype;
  g.k.subscribe = function (a, b, c) {
    return this.C.subscribe(a, b, c);
  };
  g.k.unsubscribe = function (a, b, c) {
    return this.C.unsubscribe(a, b, c);
  };
  g.k.Rf = function (a) {
    return this.C.Rf(a);
  };
  g.k.V = function (a, b) {
    return this.C.V.apply(this.C, arguments);
  };
  g.k.dispose = function () {
    this.W ||
      ((this.W = !0),
      g.bg(this.C),
      uIa(this),
      g.bg(this.B),
      (this.B = null),
      (this.X = function () {
        return "";
      }));
  };
  g.k.ma = function () {
    return this.W;
  };
  g.k.connect = function (a, b, c) {
    if (!this.u || 2 != this.u.getState()) {
      this.U = "";
      this.B.stop();
      this.F = a || null;
      this.D = b || 0;
      a = this.Z + "/test";
      b = this.Z + "/bind";
      var d = new g5(
          c ? c.firstTestResults : null,
          c ? c.secondTestResults : null,
          this.da
        ),
        e = this.u;
      e && (e.Jf = null);
      d.Jf = this;
      this.u = d;
      p5(this);
      if (this.u) {
        d = g.L("ID_TOKEN");
        var f = this.u.kj || {};
        d
          ? (f["x-youtube-identity-token"] = d)
          : delete f["x-youtube-identity-token"];
        this.u.kj = f;
      }
      e
        ? ((3 != e.getState() && 0 == kIa(e)) || e.getState(),
          this.u.connect(a, b, this.I, e.B, e.jp))
        : c
        ? this.u.connect(a, b, this.I, c.sessionId, c.arrayId)
        : this.u.connect(a, b, this.I);
    }
  };
  g.k.sendMessage = function (a, b) {
    var c = { _sc: a };
    b && g.Xb(c, b);
    this.B.isActive() || 2 == (this.u ? this.u.getState() : 0)
      ? this.K.push(c)
      : q5(this) && (p5(this), jIa(this.u, c));
  };
  g.k.jC = function () {
    this.B.reset();
    this.F = null;
    this.D = 0;
    if (this.K.length) {
      var a = this.K;
      this.K = [];
      for (var b = 0, c = a.length; b < c; ++b) jIa(this.u, a[b]);
    }
    this.V("handlerOpened");
  };
  g.k.hC = function (a) {
    var b = 2 == a && 401 == this.u.lj;
    4 == a || b || this.B.start();
    this.V("handlerError", a, b);
  };
  g.k.kx = function (a) {
    if (!this.B.isActive()) this.V("handlerClosed");
    else if (a)
      for (var b = 0, c = a.length; b < c; ++b) {
        var d = a[b].map;
        d && this.K.push(d);
      }
  };
  g.k.SC = function () {
    var a = { v: 2 };
    this.U && (a.gsessionid = this.U);
    0 != this.D && (a.ui = "" + this.D);
    0 != this.N && (a.ui = "" + this.N);
    this.F && g.Xb(a, this.F);
    return a;
  };
  g.k.iC = function (a) {
    "S" == a[0]
      ? (this.U = a[1])
      : "gracefulReconnect" == a[0]
      ? (this.B.start(), hIa(this.u))
      : this.V("handlerMessage", new sIa(a[0], a[1]));
  };
  g.k.Hv = function (a) {
    (this.I.loungeIdToken = a) || this.B.stop();
    if (this.ga && this.u) {
      var b = this.u.kj || {};
      a
        ? (b["X-YouTube-LoungeId-Token"] = a)
        : delete b["X-YouTube-LoungeId-Token"];
      this.u.kj = b;
    }
  };
  g.k.XQ = function () {
    this.B.isActive();
    0 == kIa(this.u) && this.connect(this.F, this.D);
  };
  r5.prototype.D = function (a, b, c, d) {
    b ? a(d) : a({ text: c.responseText });
  };
  r5.prototype.C = function (a, b) {
    a(Error("Request error: " + b.status));
  };
  r5.prototype.F = function (a) {
    a(Error("request timed out"));
  };
  var BIa = g.A(),
    u5 = null,
    x5 = Array(50),
    w5 = -1,
    y5 = !1;
  g.Ta(z5, g.N);
  z5.prototype.Qg = function () {
    return this.screens;
  };
  z5.prototype.contains = function (a) {
    return !!w4(this.screens, a);
  };
  z5.prototype.get = function (a) {
    return a ? x4(this.screens, a) : null;
  };
  z5.prototype.info = function (a) {
    v5(this.I, a);
  };
  g.u(A5, g.N);
  g.k = A5.prototype;
  g.k.start = function () {
    !this.u && isNaN(this.gb) && this.zG();
  };
  g.k.stop = function () {
    this.u && (this.u.abort(), (this.u = null));
    isNaN(this.gb) || (g.Lo(this.gb), (this.gb = NaN));
  };
  g.k.ca = function () {
    this.stop();
    g.N.prototype.ca.call(this);
  };
  g.k.zG = function () {
    this.gb = NaN;
    this.u = g.yq(s5(this.F, "/pairing/get_screen"), {
      method: "POST",
      postParams: { pairing_code: this.I },
      timeout: 5e3,
      onSuccess: (0, g.z)(this.YK, this),
      onError: (0, g.z)(this.XK, this),
      onTimeout: (0, g.z)(this.ZK, this),
    });
  };
  g.k.YK = function (a, b) {
    this.u = null;
    var c = b.screen || {};
    c.dialId = this.C;
    c.name = this.D;
    this.V("pairingComplete", new r4(c));
  };
  g.k.XK = function (a) {
    this.u = null;
    a.status && 404 == a.status
      ? this.B >= SJa.length
        ? this.V("pairingFailed", Error("DIAL polling timed out"))
        : ((a = SJa[this.B]),
          (this.gb = g.Jo((0, g.z)(this.zG, this), a)),
          this.B++)
      : this.V("pairingFailed", Error("Server error " + a.status));
  };
  g.k.ZK = function () {
    this.u = null;
    this.V("pairingFailed", Error("Server not responding"));
  };
  var SJa = [2e3, 2e3, 1e3, 1e3, 1e3, 2e3, 2e3, 5e3, 5e3, 1e4];
  g.Ta(C5, z5);
  g.k = C5.prototype;
  g.k.start = function () {
    B5(this) && this.V("screenChange");
    !g.Fu("yt-remote-lounge-token-expiration") && FIa(this);
    g.Lo(this.u);
    this.u = g.Jo((0, g.z)(this.start, this), 1e4);
  };
  g.k.add = function (a, b) {
    B5(this);
    CIa(this, a);
    D5(this, !1);
    this.V("screenChange");
    b(a);
    a.token || FIa(this);
  };
  g.k.remove = function (a, b) {
    var c = B5(this);
    EIa(this, a) && (D5(this, !1), (c = !0));
    b(a);
    c && this.V("screenChange");
  };
  g.k.bw = function (a, b, c, d) {
    var e = B5(this),
      f = this.get(a.id);
    f
      ? (f.name != b && ((f.name = b), D5(this, !1), (e = !0)), c(a))
      : d(Error("no such local screen."));
    e && this.V("screenChange");
  };
  g.k.ca = function () {
    g.Lo(this.u);
    C5.Dd.ca.call(this);
  };
  g.k.fK = function (a) {
    B5(this);
    var b = this.screens.length;
    a = (a && a.screens) || [];
    for (var c = 0, d = a.length; c < d; ++c) {
      var e = a[c],
        f = this.get(e.screenId);
      f && ((f.token = e.loungeToken), --b);
    }
    D5(this, !b);
    b && v5(this.I, "Missed " + b + " lounge tokens.");
  };
  g.k.eK = function (a) {
    v5(this.I, "Requesting lounge tokens failed: " + a);
  };
  g.u(F5, g.N);
  g.k = F5.prototype;
  g.k.start = function () {
    var a = parseInt(g.Fu("yt-remote-fast-check-period") || "0", 10);
    (this.D = g.A() - 144e5 < a ? 0 : a)
      ? I5(this)
      : ((this.D = g.A() + 3e5),
        g.Eu("yt-remote-fast-check-period", this.D),
        this.cA());
  };
  g.k.isEmpty = function () {
    return g.Qb(this.u);
  };
  g.k.update = function () {
    E5("Updating availability on schedule.");
    var a = this.I(),
      b = g.Eb(
        this.u,
        function (c, d) {
          return c && !!x4(a, d);
        },
        this
      );
    H5(this, b);
  };
  g.k.ca = function () {
    g.Lo(this.C);
    this.C = NaN;
    this.B && (this.B.abort(), (this.B = null));
    g.N.prototype.ca.call(this);
  };
  g.k.cA = function () {
    g.Lo(this.C);
    this.C = NaN;
    this.B && this.B.abort();
    var a = HIa(this);
    if (n4(a)) {
      var b = s5(this.F, "/pairing/get_screen_availability");
      this.B = t5(
        this.F,
        b,
        { lounge_token: g.Lb(a).join(",") },
        (0, g.z)(this.FP, this, a),
        (0, g.z)(this.EP, this)
      );
    } else H5(this, {}), I5(this);
  };
  g.k.FP = function (a, b) {
    this.B = null;
    var c = g.Lb(HIa(this));
    if (g.zb(c, g.Lb(a))) {
      c = b.screens || [];
      for (var d = {}, e = 0, f = c.length; e < f; ++e)
        d[a[c[e].loungeToken]] = "online" == c[e].status;
      H5(this, d);
      I5(this);
    } else this.Fd("Changing Screen set during request."), this.cA();
  };
  g.k.EP = function (a) {
    this.Fd("Screen availability failed: " + a);
    this.B = null;
    I5(this);
  };
  g.k.Fd = function (a) {
    v5("OnlineScreenService", a);
  };
  g.Ta(J5, z5);
  g.k = J5.prototype;
  g.k.start = function () {
    this.B.start();
    this.u.start();
    this.screens.length &&
      (this.V("screenChange"),
      this.u.isEmpty() || this.V("onlineScreenChange"));
  };
  g.k.add = function (a, b, c) {
    this.B.add(a, b, c);
  };
  g.k.remove = function (a, b, c) {
    this.B.remove(a, b, c);
    this.u.update();
  };
  g.k.bw = function (a, b, c, d) {
    this.B.contains(a)
      ? this.B.bw(a, b, c, d)
      : ((a = "Updating name of unknown screen: " + a.name),
        v5(this.I, a),
        d(Error(a)));
  };
  g.k.Qg = function (a) {
    return a
      ? this.screens
      : g.ob(
          this.screens,
          g.Ne(
            this.C,
            function (b) {
              return !this.contains(b);
            },
            this
          )
        );
  };
  g.k.eI = function () {
    return g.Ne(
      this.Qg(!0),
      function (a) {
        return !!this.u.u[a.id];
      },
      this
    );
  };
  g.k.fI = function (a, b, c, d, e) {
    this.info("getDialScreenByPairingCode " + a + " / " + b);
    var f = new A5(this.F, a, b, c);
    f.subscribe(
      "pairingComplete",
      (0, g.z)(function (h) {
        g.bg(f);
        d(K5(this, h));
      }, this)
    );
    f.subscribe("pairingFailed", function (h) {
      g.bg(f);
      e(h);
    });
    f.start();
    return (0, g.z)(f.stop, f);
  };
  g.k.WR = function (a, b, c, d) {
    g.yq(s5(this.F, "/pairing/get_screen"), {
      method: "POST",
      postParams: { pairing_code: a },
      timeout: 5e3,
      onSuccess: (0, g.z)(function (e, f) {
        var h = new r4(f.screen || {});
        if (!h.name || LIa(this, h.name)) {
          a: {
            var l = h.name;
            for (var m = 2, n = b(l, m); LIa(this, n); ) {
              m++;
              if (20 < m) break a;
              n = b(l, m);
            }
            l = n;
          }
          h.name = l;
        }
        c(K5(this, h));
      }, this),
      onError: (0, g.z)(function (e) {
        d(Error("pairing request failed: " + e.status));
      }, this),
      onTimeout: (0, g.z)(function () {
        d(Error("pairing request timed out."));
      }, this),
    });
  };
  g.k.ca = function () {
    g.bg(this.B);
    g.bg(this.u);
    J5.Dd.ca.call(this);
  };
  g.k.lK = function () {
    NIa(this);
    this.V("screenChange");
    this.u.update();
  };
  J5.prototype.dispose = J5.prototype.dispose;
  g.Ta(M5, g.N);
  g.k = M5.prototype;
  g.k.getScreen = function () {
    return this.C;
  };
  g.k.gg = function (a) {
    this.ma() ||
      (a && O5(this, "" + a), (this.C = null), this.V("sessionScreen", null));
  };
  g.k.info = function (a) {
    v5(this.ga, a);
  };
  g.k.hI = function () {
    return null;
  };
  g.k.nA = function (a) {
    var b = this.u;
    a
      ? ((b.displayStatus = new chrome.cast.ReceiverDisplayStatus(a, [])),
        (b.displayStatus.showStop = !0))
      : (b.displayStatus = null);
    chrome.cast.setReceiverDisplayStatus(
      b,
      (0, g.z)(function () {
        this.info("Updated receiver status for " + b.friendlyName + ": " + a);
      }, this),
      (0, g.z)(function () {
        O5(this, "Failed to update receiver status for: " + b.friendlyName);
      }, this)
    );
  };
  g.k.ca = function () {
    this.nA("");
    M5.Dd.ca.call(this);
  };
  g.u(P5, M5);
  g.k = P5.prototype;
  g.k.mA = function (a) {
    if (this.B) {
      if (this.B == a) return;
      O5(this, "Overriding cast session with new session object");
      VIa(this);
      this.Z = !1;
      this.U = "unknown";
      this.B.removeUpdateListener(this.da);
      this.B.removeMessageListener("urn:x-cast:com.google.youtube.mdx", this.X);
    }
    this.B = a;
    this.B.addUpdateListener(this.da);
    this.B.addMessageListener("urn:x-cast:com.google.youtube.mdx", this.X);
    RIa(this, "getMdxSessionStatus");
  };
  g.k.kp = function (a) {
    this.info("launchWithParams no-op for Cast: " + g.Tj(a));
  };
  g.k.stop = function () {
    this.B
      ? this.B.stop(
          (0, g.z)(function () {
            this.gg();
          }, this),
          (0, g.z)(function () {
            this.gg(Error("Failed to stop receiver app."));
          }, this)
        )
      : this.gg(Error("Stopping cast device without session."));
  };
  g.k.nA = function () {};
  g.k.ca = function () {
    this.info("disposeInternal");
    VIa(this);
    this.B &&
      (this.B.removeUpdateListener(this.da),
      this.B.removeMessageListener(
        "urn:x-cast:com.google.youtube.mdx",
        this.X
      ));
    this.B = null;
    M5.prototype.ca.call(this);
  };
  g.k.tQ = function (a, b) {
    if (!this.ma())
      if (b) {
        var c = J4(b);
        if (g.Na(c)) {
          var d = "" + c.type;
          c = c.data || {};
          this.info("onYoutubeMessage_: " + d + " " + g.Tj(c));
          switch (d) {
            case "mdxSessionStatus":
              PIa(this, c);
              break;
            case "loungeToken":
              SIa(this, c);
              break;
            default:
              O5(this, "Unknown youtube message: " + d);
          }
        } else O5(this, "Unable to parse message.");
      } else O5(this, "No data in message.");
  };
  g.k.jD = function (a, b, c, d) {
    g.Lo(this.N);
    this.N = 0;
    KIa(
      this.F,
      this.u.label,
      a,
      this.u.friendlyName,
      (0, g.z)(function (e) {
        e
          ? b(e)
          : 0 <= d
          ? (O5(
              this,
              "Screen " + a + " appears to be offline. " + d + " retries left."
            ),
            (this.N = g.Jo((0, g.z)(this.jD, this, a, b, c, d - 1), 300)))
          : c(Error("Unable to fetch screen."));
      }, this),
      c
    );
  };
  g.k.hI = function () {
    return this.B;
  };
  g.k.XR = function (a) {
    this.ma() || a || (O5(this, "Cast session died."), this.gg());
  };
  g.u(S5, M5);
  g.k = S5.prototype;
  g.k.mA = function (a) {
    this.D = a;
    this.D.addUpdateListener(this.X);
  };
  g.k.kp = function (a) {
    this.W = a;
    this.K();
  };
  g.k.stop = function () {
    this.B();
    this.B = g.Ja;
    g.Lo(this.I);
    this.D
      ? this.D.stop(
          (0, g.z)(this.gg, this, null),
          (0, g.z)(this.gg, this, "Failed to stop DIAL device.")
        )
      : this.gg();
  };
  g.k.ca = function () {
    this.B();
    this.B = g.Ja;
    g.Lo(this.I);
    this.D && this.D.removeUpdateListener(this.X);
    this.D = null;
    M5.prototype.ca.call(this);
  };
  g.k.bL = function (a) {
    this.ma() ||
      a ||
      (O5(this, "DIAL session died."), this.B(), (this.B = g.Ja), this.gg());
  };
  g.k.Hy = function (a) {
    this.U = v4();
    if (this.W) {
      var b = new chrome.cast.DialLaunchResponse(!0, XIa(this));
      a(b);
      WIa(this);
    } else
      (this.K = (0, g.z)(function () {
        g.Lo(this.I);
        this.K = g.Ja;
        this.I = NaN;
        var c = new chrome.cast.DialLaunchResponse(!0, XIa(this));
        a(c);
        WIa(this);
      }, this)),
        (this.I = g.Jo(
          (0, g.z)(function () {
            this.K();
          }, this),
          100
        ));
  };
  g.k.CK = function (a, b, c) {
    KIa(
      this.F,
      this.N.receiver.label,
      a,
      this.u.friendlyName,
      (0, g.z)(function (d) {
        d && d.token
          ? (N5(this, d), b(new chrome.cast.DialLaunchResponse(!1)))
          : this.Hy(b, c);
      }, this),
      (0, g.z)(function (d) {
        O5(this, "Failed to get DIAL screen: " + d);
        this.Hy(b, c);
      }, this)
    );
  };
  g.u(T5, M5);
  T5.prototype.stop = function () {
    this.gg();
  };
  T5.prototype.mA = function () {};
  T5.prototype.kp = function () {
    g.Lo(this.B);
    this.B = NaN;
    var a = x4(this.F.Qg(), this.u.label);
    a ? N5(this, a) : this.gg(Error("No such screen"));
  };
  T5.prototype.ca = function () {
    g.Lo(this.B);
    this.B = NaN;
    M5.prototype.ca.call(this);
  };
  g.u(U5, g.N);
  g.k = U5.prototype;
  g.k.init = function (a, b) {
    chrome.cast.timeout.requestSession = 3e4;
    var c = new chrome.cast.SessionRequest(this.N);
    this.U || (c.dialRequest = new chrome.cast.DialRequest("YouTube"));
    var d = chrome.cast.AutoJoinPolicy.TAB_AND_ORIGIN_SCOPED,
      e = a
        ? chrome.cast.DefaultActionPolicy.CAST_THIS_TAB
        : chrome.cast.DefaultActionPolicy.CREATE_SESSION,
      f = (0, g.z)(this.pP, this);
    c = new chrome.cast.ApiConfig(c, (0, g.z)(this.hG, this), f, d, e);
    c.customDialLaunchCallback = (0, g.z)(this.cO, this);
    chrome.cast.initialize(
      c,
      (0, g.z)(function () {
        this.ma() ||
          (chrome.cast.addReceiverActionListener(this.F),
          yIa(),
          this.B.subscribe("onlineScreenChange", (0, g.z)(this.gI, this)),
          (this.C = ZIa(this)),
          chrome.cast.setCustomReceivers(
            this.C,
            g.Ja,
            (0, g.z)(function (h) {
              this.Fd("Failed to set initial custom receivers: " + g.Tj(h));
            }, this)
          ),
          this.V("yt-remote-cast2-availability-change", W5(this)),
          b(!0));
      }, this),
      (0, g.z)(function (h) {
        this.Fd("Failed to initialize API: " + g.Tj(h));
        b(!1);
      }, this)
    );
  };
  g.k.eR = function (a, b) {
    V5("Setting connected screen ID: " + a + " -> " + b);
    if (this.u) {
      var c = this.u.getScreen();
      if (!a || (c && c.id != a))
        V5("Unsetting old screen status: " + this.u.u.friendlyName),
          X5(this, null);
    }
    if (a && b) {
      if (!this.u) {
        c = x4(this.B.Qg(), a);
        if (!c) {
          V5("setConnectedScreenStatus: Unknown screen.");
          return;
        }
        if ("shortLived" == c.idType) {
          V5(
            "setConnectedScreenStatus: Screen with id type to be short lived."
          );
          return;
        }
        var d = YIa(this, c);
        d ||
          (V5("setConnectedScreenStatus: Connected receiver not custom..."),
          (d = new chrome.cast.Receiver(c.uuid ? c.uuid : c.id, c.name)),
          (d.receiverType = chrome.cast.ReceiverType.CUSTOM),
          this.C.push(d),
          chrome.cast.setCustomReceivers(
            this.C,
            g.Ja,
            (0, g.z)(function (e) {
              this.Fd("Failed to set initial custom receivers: " + g.Tj(e));
            }, this)
          ));
        V5("setConnectedScreenStatus: new active receiver: " + d.friendlyName);
        X5(this, new T5(this.B, d), !0);
      }
      this.u.nA(b);
    } else V5("setConnectedScreenStatus: no screen.");
  };
  g.k.fR = function (a) {
    this.ma()
      ? this.Fd("Setting connection data on disposed cast v2")
      : this.u
      ? this.u.kp(a)
      : this.Fd("Setting connection data without a session");
  };
  g.k.ZR = function () {
    this.ma()
      ? this.Fd("Stopping session on disposed cast v2")
      : this.u
      ? (this.u.stop(), X5(this, null))
      : V5("Stopping non-existing session");
  };
  g.k.requestSession = function () {
    chrome.cast.requestSession(
      (0, g.z)(this.hG, this),
      (0, g.z)(this.IP, this)
    );
  };
  g.k.ca = function () {
    this.B.unsubscribe("onlineScreenChange", (0, g.z)(this.gI, this));
    window.chrome &&
      chrome.cast &&
      chrome.cast.removeReceiverActionListener(this.F);
    var a = vIa,
      b = g.Ia("yt.mdx.remote.debug.handlers_");
    g.lb(b || [], a);
    g.bg(this.u);
    g.N.prototype.ca.call(this);
  };
  g.k.Fd = function (a) {
    v5("Controller", a);
  };
  g.k.jG = function (a, b) {
    this.u == a &&
      (b || X5(this, null), this.V("yt-remote-cast2-session-change", b));
  };
  g.k.mP = function (a, b) {
    if (!this.ma())
      if (a)
        switch (
          ((a.friendlyName = chrome.cast.unescape(a.friendlyName)),
          V5(
            "onReceiverAction_ " + a.label + " / " + a.friendlyName + "-- " + b
          ),
          b)
        ) {
          case chrome.cast.ReceiverAction.CAST:
            if (this.u)
              if (this.u.u.label != a.label)
                V5(
                  "onReceiverAction_: Stopping active receiver: " +
                    this.u.u.friendlyName
                ),
                  this.u.stop();
              else {
                V5("onReceiverAction_: Casting to active receiver.");
                this.u.getScreen() &&
                  this.V("yt-remote-cast2-session-change", this.u.getScreen());
                break;
              }
            switch (a.receiverType) {
              case chrome.cast.ReceiverType.CUSTOM:
                X5(this, new T5(this.B, a));
                break;
              case chrome.cast.ReceiverType.DIAL:
                X5(this, new S5(this.B, a, this.K));
                break;
              case chrome.cast.ReceiverType.CAST:
                X5(this, new P5(this.B, a, this.D));
                break;
              default:
                this.Fd("Unknown receiver type: " + a.receiverType);
            }
            break;
          case chrome.cast.ReceiverAction.STOP:
            this.u && this.u.u.label == a.label
              ? this.u.stop()
              : this.Fd("Stopping receiver w/o session: " + a.friendlyName);
        }
      else this.Fd("onReceiverAction_ called without receiver.");
  };
  g.k.cO = function (a) {
    if (this.ma()) return Promise.reject(Error("disposed"));
    var b = a.receiver;
    b.receiverType != chrome.cast.ReceiverType.DIAL &&
      (this.Fd("Not DIAL receiver: " + b.friendlyName),
      (b.receiverType = chrome.cast.ReceiverType.DIAL));
    var c = this.u ? this.u.u : null;
    if (!c || c.label != b.label)
      return (
        this.Fd(
          "Receiving DIAL launch request for non-clicked DIAL receiver: " +
            b.friendlyName
        ),
        Promise.reject(Error("illegal DIAL launch"))
      );
    if (
      c &&
      c.label == b.label &&
      c.receiverType != chrome.cast.ReceiverType.DIAL
    ) {
      if (this.u.getScreen())
        return (
          V5("Reselecting dial screen."),
          this.V("yt-remote-cast2-session-change", this.u.getScreen()),
          Promise.resolve(new chrome.cast.DialLaunchResponse(!1))
        );
      this.Fd(
        'Changing CAST intent from "' +
          c.receiverType +
          '" to "dial" for ' +
          b.friendlyName
      );
      X5(this, new S5(this.B, b, this.K));
    }
    b = this.u;
    b.N = a;
    return b.N.appState == chrome.cast.DialAppState.RUNNING
      ? new Promise((0, g.z)(b.CK, b, (b.N.extraData || {}).screenId || null))
      : new Promise((0, g.z)(b.Hy, b));
  };
  g.k.hG = function (a) {
    if (!this.ma()) {
      V5("New cast session ID: " + a.sessionId);
      var b = a.receiver;
      if (b.receiverType != chrome.cast.ReceiverType.CUSTOM) {
        if (!this.u)
          if (b.receiverType == chrome.cast.ReceiverType.CAST)
            V5("Got resumed cast session before resumed mdx connection."),
              (b.friendlyName = chrome.cast.unescape(b.friendlyName)),
              X5(this, new P5(this.B, b, this.D), !0);
          else {
            this.Fd(
              "Got non-cast session without previous mdx receiver event, or mdx resume."
            );
            return;
          }
        var c = this.u.u,
          d = x4(this.B.Qg(), c.label);
        d &&
          s4(d, b.label) &&
          c.receiverType != chrome.cast.ReceiverType.CAST &&
          b.receiverType == chrome.cast.ReceiverType.CAST &&
          (V5(
            "onSessionEstablished_: manual to cast session change " +
              b.friendlyName
          ),
          g.bg(this.u),
          (this.u = new P5(this.B, b, this.D)),
          this.u.subscribe("sessionScreen", (0, g.z)(this.jG, this, this.u)),
          this.u.kp(null));
        this.u.mA(a);
      }
    }
  };
  g.k.YR = function () {
    return this.u ? this.u.hI() : null;
  };
  g.k.IP = function (a) {
    this.ma() ||
      (this.Fd("Failed to estabilish a session: " + g.Tj(a)),
      a.code != chrome.cast.ErrorCode.CANCEL && X5(this, null));
  };
  g.k.pP = function (a) {
    V5("Receiver availability updated: " + a);
    if (!this.ma()) {
      var b = W5(this);
      this.I = a == chrome.cast.ReceiverAvailability.AVAILABLE;
      W5(this) != b && this.V("yt-remote-cast2-availability-change", W5(this));
    }
  };
  g.k.gI = function () {
    this.ma() ||
      ((this.C = ZIa(this)),
      V5("Updating custom receivers: " + g.Tj(this.C)),
      chrome.cast.setCustomReceivers(
        this.C,
        g.Ja,
        (0, g.z)(function () {
          this.Fd("Failed to set custom receivers.");
        }, this)
      ),
      this.V("yt-remote-cast2-availability-change", W5(this)));
  };
  U5.prototype.setLaunchParams = U5.prototype.fR;
  U5.prototype.setConnectedScreenStatus = U5.prototype.eR;
  U5.prototype.stopSession = U5.prototype.ZR;
  U5.prototype.getCastSession = U5.prototype.YR;
  U5.prototype.requestSession = U5.prototype.requestSession;
  U5.prototype.init = U5.prototype.init;
  U5.prototype.dispose = U5.prototype.dispose;
  var c6 = [];
  g.k = h6.prototype;
  g.k.reset = function (a) {
    this.listId = "";
    this.index = -1;
    this.videoId = "";
    i6(this);
    this.volume = -1;
    this.muted = !1;
    a &&
      ((this.index = a.index),
      (this.listId = a.listId),
      (this.videoId = a.videoId),
      (this.playerState = a.playerState),
      (this.volume = a.volume),
      (this.muted = a.muted),
      (this.audioTrackId = a.audioTrackId),
      (this.u = a.trackData),
      (this.nj = a.hasPrevious),
      (this.hasNext = a.hasNext),
      (this.N = a.playerTime),
      (this.K = a.playerTimeAt),
      (this.F = a.seekableStart),
      (this.B = a.seekableEnd),
      (this.I = a.duration),
      (this.U = a.loadedTime),
      (this.D = a.liveIngestionTime),
      (this.C = !isNaN(this.D)));
  };
  g.k.Gb = function () {
    return 1 == this.playerState;
  };
  g.k.isAdPlaying = function () {
    return 1081 == this.playerState;
  };
  g.k.getDuration = function () {
    return this.C ? this.I + j6(this) : this.I;
  };
  g.k.clone = function () {
    return new h6(n6(this));
  };
  g.u(p6, g.N);
  g.k = p6.prototype;
  g.k.getState = function () {
    return this.La;
  };
  g.k.play = function () {
    r6(this)
      ? (this.u ? this.u.play(null, g.Ja, w6(this, "play")) : v6(this, "play"),
        u6(this, 1, l6(q6(this))),
        this.V("remotePlayerChange"))
      : s6(this, this.play);
  };
  g.k.pause = function () {
    r6(this)
      ? (this.u
          ? this.u.pause(null, g.Ja, w6(this, "pause"))
          : v6(this, "pause"),
        u6(this, 2, l6(q6(this))),
        this.V("remotePlayerChange"))
      : s6(this, this.pause);
  };
  g.k.seekTo = function (a) {
    if (r6(this)) {
      if (this.u) {
        var b = q6(this),
          c = new chrome.cast.media.SeekRequest();
        c.currentTime = a;
        b.Gb() || 3 == b.playerState
          ? (c.resumeState = chrome.cast.media.ResumeState.PLAYBACK_START)
          : (c.resumeState = chrome.cast.media.ResumeState.PLAYBACK_PAUSE);
        this.u.seek(c, g.Ja, w6(this, "seekTo", { newTime: a }));
      } else v6(this, "seekTo", { newTime: a });
      u6(this, 3, a);
      this.V("remotePlayerChange");
    } else s6(this, g.Ra(this.seekTo, a));
  };
  g.k.stop = function () {
    if (r6(this)) {
      this.u
        ? this.u.stop(null, g.Ja, w6(this, "stopVideo"))
        : v6(this, "stopVideo");
      var a = q6(this);
      a.index = -1;
      a.videoId = "";
      i6(a);
      t6(this, a);
      this.V("remotePlayerChange");
    } else s6(this, this.stop);
  };
  g.k.setVolume = function (a, b) {
    if (r6(this)) {
      var c = q6(this);
      if (this.B) {
        if (c.volume != a) {
          var d = Math.round(a) / 100;
          this.B.setReceiverVolumeLevel(
            d,
            (0, g.z)(function () {
              v5("CP", "set receiver volume: " + d);
            }, this),
            (0, g.z)(function () {
              this.Fd("failed to set receiver volume.");
            }, this)
          );
        }
        c.muted != b &&
          this.B.setReceiverMuted(
            b,
            (0, g.z)(function () {
              v5("CP", "set receiver muted: " + b);
            }, this),
            (0, g.z)(function () {
              this.Fd("failed to set receiver muted.");
            }, this)
          );
      } else {
        var e = { volume: a, muted: b };
        -1 != c.volume && (e.delta = a - c.volume);
        v6(this, "setVolume", e);
      }
      c.muted = b;
      c.volume = a;
      t6(this, c);
    } else s6(this, g.Ra(this.setVolume, a, b));
  };
  g.k.dI = function (a, b) {
    if (r6(this)) {
      var c = q6(this),
        d = { videoId: a };
      b &&
        ((c.u = {
          trackName: b.name,
          languageCode: b.languageCode,
          sourceLanguageCode: b.translationLanguage
            ? b.translationLanguage.languageCode
            : "",
          languageName: b.languageName,
          kind: b.kind,
        }),
        (d.style = g.Tj(b.style)),
        g.Xb(d, c.u));
      v6(this, "setSubtitlesTrack", d);
      t6(this, c);
    } else s6(this, g.Ra(this.dI, a, b));
  };
  g.k.setAudioTrack = function (a, b) {
    if (r6(this)) {
      var c = b.getLanguageInfo().getId();
      v6(this, "setAudioTrack", { videoId: a, audioTrackId: c });
      var d = q6(this);
      d.audioTrackId = c;
      t6(this, d);
    } else s6(this, g.Ra(this.setAudioTrack, a, b));
  };
  g.k.playVideo = function (a, b, c, d, e, f, h) {
    var l = q6(this);
    c = c || 0;
    var m = { videoId: a, currentIndex: c };
    m6(l, a, c);
    void 0 !== b && (k6(l, b), (m.currentTime = b));
    void 0 !== d && (m.listId = d);
    null != e && (m.playerParams = e);
    null != f && (m.clickTrackingParams = f);
    null != h && (m.locationInfo = g.Tj(h));
    v6(this, "setPlaylist", m);
    d || t6(this, l);
  };
  g.k.qv = function (a, b) {
    if (r6(this)) {
      if (a && b) {
        var c = q6(this);
        m6(c, a, b);
        t6(this, c);
      }
      v6(this, "previous");
    } else s6(this, g.Ra(this.qv, a, b));
  };
  g.k.nextVideo = function (a, b) {
    if (r6(this)) {
      if (a && b) {
        var c = q6(this);
        m6(c, a, b);
        t6(this, c);
      }
      v6(this, "next");
    } else s6(this, g.Ra(this.nextVideo, a, b));
  };
  g.k.BC = function () {
    r6(this) ? v6(this, "dismissAutoplay") : s6(this, this.BC);
  };
  g.k.dispose = function () {
    if (3 != this.La) {
      var a = this.La;
      this.La = 3;
      this.V("proxyStateChange", a, this.La);
    }
    g.N.prototype.dispose.call(this);
  };
  g.k.ca = function () {
    lJa(this);
    this.C = null;
    this.D.clear();
    o6(this, null);
    g.N.prototype.ca.call(this);
  };
  g.k.qA = function (a) {
    if ((a != this.La || 2 == a) && 3 != this.La && 0 != a) {
      var b = this.La;
      this.La = a;
      this.V("proxyStateChange", b, a);
      if (1 == a)
        for (; !this.D.isEmpty(); )
          (b = a = this.D),
            g.ib(b.u) && ((b.u = b.B), b.u.reverse(), (b.B = [])),
            a.u.pop().apply(this);
      else 3 == a && this.dispose();
    }
  };
  g.k.jP = function (a, b) {
    this.V(a, b);
  };
  g.k.ON = function (a) {
    if (!a) this.Xr(null), o6(this, null);
    else if (this.B.receiver.volume) {
      a = this.B.receiver.volume;
      var b = q6(this),
        c = Math.round(100 * a.level || 0);
      if (b.volume != c || b.muted != a.muted)
        v5("CP", "Cast volume update: " + a.level + (a.muted ? " muted" : "")),
          (b.volume = c),
          (b.muted = !!a.muted),
          t6(this, b);
    }
  };
  g.k.Xr = function (a) {
    v5("CP", "Cast media: " + !!a);
    this.u && this.u.removeUpdateListener(this.K);
    if ((this.u = a))
      this.u.addUpdateListener(this.K), mJa(this), this.V("remotePlayerChange");
  };
  g.k.NN = function (a) {
    a ? (mJa(this), this.V("remotePlayerChange")) : this.Xr(null);
  };
  g.k.FA = function () {
    v6(this, "sendDebugCommand", { debugCommand: "stats4nerds " });
  };
  g.k.VN = function () {
    var a = iJa();
    a && o6(this, a);
  };
  g.k.Fd = function (a) {
    v5("CP", a);
  };
  g.u(x6, g.N);
  g.k = x6.prototype;
  g.k.connect = function (a, b) {
    if (b) {
      var c = b.listId,
        d = b.videoId,
        e = b.playerParams,
        f = b.clickTrackingParams,
        h = b.index,
        l = { videoId: d },
        m = b.currentTime,
        n = b.locationInfo;
      void 0 !== m && (l.currentTime = 5 >= m ? 0 : m);
      e && (l.playerParams = e);
      n && (l.locationInfo = n);
      f && (l.clickTrackingParams = f);
      c && (l.listId = c);
      void 0 !== h && (l.currentIndex = h);
      c && (this.Ib.listId = c);
      this.Ib.videoId = d;
      this.Ib.index = h || 0;
      this.Ib.state = 3;
      k6(this.Ib, m);
      this.D = "UNSUPPORTED";
      y6("Connecting with setPlaylist and params: " + g.Tj(l));
      this.u.connect({ method: "setPlaylist", params: g.Tj(l) }, a, sHa());
    } else y6("Connecting without params"), this.u.connect({}, a, sHa());
    oJa(this);
  };
  g.k.Hv = function (a) {
    this.u.Hv(a);
  };
  g.k.dispose = function () {
    this.ma() || (this.V("beforeDispose"), z6(this, 3));
    g.N.prototype.dispose.call(this);
  };
  g.k.ca = function () {
    A6(this);
    C6(this);
    B6(this);
    g.Lo(this.K);
    this.K = NaN;
    g.Lo(this.N);
    this.N = NaN;
    this.C = null;
    g.lp(this.Z);
    this.Z.length = 0;
    this.u.dispose();
    g.N.prototype.ca.call(this);
    this.D = this.I = this.B = this.Ib = this.u = null;
  };
  g.k.ZJ = function () {
    this.Jo(2);
  };
  g.k.SN = function () {
    y6("Channel opened");
    this.X &&
      ((this.X = !1),
      B6(this),
      (this.W = g.Jo(
        (0, g.z)(function () {
          y6("Timing out waiting for a screen.");
          this.Jo(1);
        }, this),
        15e3
      )));
    wHa(tIa(this.u), this.ga);
  };
  g.k.PN = function () {
    y6("Channel closed");
    isNaN(this.F) ? C4(!0) : C4();
    this.dispose();
  };
  g.k.QN = function (a, b) {
    C4();
    isNaN(this.kr())
      ? (b && "shortLived" == this.da && this.V("browserChannelAuthError", a),
        y6("Channel error: " + a + " without reconnection"),
        this.dispose())
      : ((this.X = !0),
        y6(
          "Channel error: " + a + " with reconnection in " + this.kr() + " ms"
        ),
        z6(this, 2));
  };
  g.k.RN = function (a) {
    a.params
      ? y6("Received: action=" + a.action + ", params=" + g.Tj(a.params))
      : y6("Received: action=" + a.action + " {}");
    switch (a.action) {
      case "loungeStatus":
        a = J4(a.params.devices);
        this.B = g.Mc(a, function (c) {
          return new q4(c);
        });
        a = !!g.cb(this.B, function (c) {
          return "LOUNGE_SCREEN" == c.type;
        });
        rJa(this, a);
        break;
      case "loungeScreenDisconnected":
        g.nb(this.B, function (c) {
          return "LOUNGE_SCREEN" == c.type;
        });
        rJa(this, !1);
        break;
      case "remoteConnected":
        var b = new q4(J4(a.params.device));
        g.cb(this.B, function (c) {
          return b ? c.id == b.id : !1;
        }) || cHa(this.B, b);
        break;
      case "remoteDisconnected":
        b = new q4(J4(a.params.device));
        g.nb(this.B, function (c) {
          return b ? c.id == b.id : !1;
        });
        break;
      case "gracefulDisconnect":
        break;
      case "playlistModified":
        tJa(this, a);
        break;
      case "nowPlaying":
        vJa(this, a);
        break;
      case "onStateChange":
        uJa(this, a);
        break;
      case "onAdStateChange":
        wJa(this, a);
        break;
      case "onVolumeChanged":
        xJa(this, a);
        break;
      case "onSubtitlesTrackChanged":
        sJa(this, a);
        break;
      case "nowAutoplaying":
        yJa(this, a);
        break;
      case "autoplayDismissed":
        this.V("autoplayDismissed");
        break;
      case "autoplayUpNext":
        this.I = a.params.videoId || null;
        this.V("autoplayUpNext", this.I);
        break;
      case "onAutoplayModeChanged":
        this.D = a.params.autoplayMode;
        this.V("autoplayModeChange", this.D);
        "DISABLED" == this.D && this.V("autoplayDismissed");
        break;
      case "onHasPreviousNextChanged":
        zJa(this, a);
        break;
      case "requestAssistedSignIn":
        this.V("assistedSignInRequested", a.params.authCode);
        break;
      default:
        y6("Unrecognized action: " + a.action);
    }
  };
  g.k.TQ = function () {
    if (this.C) {
      var a = this.C;
      this.C = null;
      this.Ib.videoId != a && D6(this, "getNowPlaying");
    }
  };
  g.k.QJ = function () {
    var a = 3;
    this.ma() ||
      ((a = 0),
      isNaN(this.kr()) ? q5(this.u) && isNaN(this.F) && (a = 1) : (a = 2));
    return a;
  };
  g.k.Jo = function (a) {
    y6("Disconnecting with " + a);
    A6(this);
    this.V("beforeDisconnect", a);
    1 == a && C4();
    uIa(this.u, a);
    this.dispose();
  };
  g.k.OJ = function () {
    var a = this.Ib;
    this.C && ((a = this.Ib.clone()), m6(a, this.C, a.index));
    return n6(a);
  };
  g.k.gR = function (a) {
    var b = new h6(a);
    b.videoId &&
      b.videoId != this.Ib.videoId &&
      ((this.C = b.videoId),
      g.Lo(this.K),
      (this.K = g.Jo((0, g.z)(this.TQ, this), 5e3)));
    var c = [];
    (this.Ib.listId == b.listId &&
      this.Ib.videoId == b.videoId &&
      this.Ib.index == b.index) ||
      c.push("remoteQueueChange");
    (this.Ib.playerState == b.playerState &&
      this.Ib.volume == b.volume &&
      this.Ib.muted == b.muted &&
      l6(this.Ib) == l6(b) &&
      g.Tj(this.Ib.u) == g.Tj(b.u)) ||
      c.push("remotePlayerChange");
    this.Ib.reset(a);
    g.Bb(
      c,
      function (d) {
        this.V(d);
      },
      this
    );
  };
  g.k.iD = function () {
    var a = this.u.I.id,
      b = g.cb(this.B, function (c) {
        return "REMOTE_CONTROL" == c.type && c.id != a;
      });
    return b ? b.id : "";
  };
  g.k.kr = function () {
    var a = this.u;
    return a.B.isActive() ? a.B.B - g.A() : NaN;
  };
  g.k.FJ = function () {
    return this.D || "UNSUPPORTED";
  };
  g.k.GJ = function () {
    return this.I || "";
  };
  g.k.VR = function () {
    if (!isNaN(this.kr())) {
      var a = this.u.B;
      g.tn(a.u);
      a.start();
    }
  };
  g.k.cR = function (a, b) {
    D6(this, a, b);
    qJa(this);
  };
  g.k.cI = function () {
    var a = g.Fq("SID", "") || "",
      b = g.Fq("SAPISID", "") || "",
      c = g.Fq("__Secure-3PAPISID", "") || "";
    if (!a && !b && !c) return "";
    a = g.tf(g.Ye(a), 2);
    b = g.tf(g.Ye(b), 2);
    c = g.tf(g.Ye(c), 2);
    return g.tf(g.Ye(a + "," + b + "," + c), 2);
  };
  x6.prototype.subscribe = x6.prototype.subscribe;
  x6.prototype.unsubscribeByKey = x6.prototype.Rf;
  x6.prototype.getProxyState = x6.prototype.QJ;
  x6.prototype.disconnect = x6.prototype.Jo;
  x6.prototype.getPlayerContextData = x6.prototype.OJ;
  x6.prototype.setPlayerContextData = x6.prototype.gR;
  x6.prototype.getOtherConnectedRemoteId = x6.prototype.iD;
  x6.prototype.getReconnectTimeout = x6.prototype.kr;
  x6.prototype.getAutoplayMode = x6.prototype.FJ;
  x6.prototype.getAutoplayVideoId = x6.prototype.GJ;
  x6.prototype.reconnect = x6.prototype.VR;
  x6.prototype.sendMessage = x6.prototype.cR;
  x6.prototype.getXsrfToken = x6.prototype.cI;
  g.u(E6, z5);
  g.k = E6.prototype;
  g.k.Qg = function (a) {
    return this.Kf.$_gs(a);
  };
  g.k.contains = function (a) {
    return !!this.Kf.$_c(a);
  };
  g.k.get = function (a) {
    return this.Kf.$_g(a);
  };
  g.k.start = function () {
    this.Kf.$_st();
  };
  g.k.add = function (a, b, c) {
    this.Kf.$_a(a, b, c);
  };
  g.k.remove = function (a, b, c) {
    this.Kf.$_r(a, b, c);
  };
  g.k.bw = function (a, b, c, d) {
    this.Kf.$_un(a, b, c, d);
  };
  g.k.ca = function () {
    for (var a = 0, b = this.u.length; a < b; ++a) this.Kf.$_ubk(this.u[a]);
    this.u.length = 0;
    this.Kf = null;
    z5.prototype.ca.call(this);
  };
  g.k.aL = function () {
    this.V("screenChange");
  };
  g.k.QO = function () {
    this.V("onlineScreenChange");
  };
  J5.prototype.$_st = J5.prototype.start;
  J5.prototype.$_gspc = J5.prototype.WR;
  J5.prototype.$_gsppc = J5.prototype.fI;
  J5.prototype.$_c = J5.prototype.contains;
  J5.prototype.$_g = J5.prototype.get;
  J5.prototype.$_a = J5.prototype.add;
  J5.prototype.$_un = J5.prototype.bw;
  J5.prototype.$_r = J5.prototype.remove;
  J5.prototype.$_gs = J5.prototype.Qg;
  J5.prototype.$_gos = J5.prototype.eI;
  J5.prototype.$_s = J5.prototype.subscribe;
  J5.prototype.$_ubk = J5.prototype.Rf;
  var R6 = null,
    X6 = !1,
    F6 = null,
    G6 = null,
    W6 = null,
    K6 = [];
  g.u(Y6, g.B);
  g.k = Y6.prototype;
  g.k.ca = function () {
    g.B.prototype.ca.call(this);
    this.u.stop();
    this.C.stop();
    this.N.stop();
    this.X();
    var a = this.wb;
    a.unsubscribe("proxyStateChange", this.eG, this);
    a.unsubscribe("remotePlayerChange", this.ks, this);
    a.unsubscribe("remoteQueueChange", this.kv, this);
    a.unsubscribe("previousNextChange", this.bG, this);
    a.unsubscribe("nowAutoplaying", this.WF, this);
    a.unsubscribe("autoplayDismissed", this.wF, this);
    this.wb = this.B = null;
  };
  g.k.ME = function (a, b) {
    for (var c = [], d = 1; d < arguments.length; ++d) c[d - 1] = arguments[d];
    if (2 != this.wb.La)
      if (Z6(this)) {
        if (!q6(this.wb).isAdPlaying() || "control_seek" !== a)
          switch (a) {
            case "control_toggle_play_pause":
              q6(this.wb).Gb() ? this.wb.pause() : this.wb.play();
              break;
            case "control_play":
              this.wb.play();
              break;
            case "control_pause":
              this.wb.pause();
              break;
            case "control_seek":
              this.K.wE(c[0], c[1]);
              break;
            case "control_subtitles_set_track":
              $6(this, c[0]);
              break;
            case "control_set_audio_track":
              this.setAudioTrack(c[0]);
          }
      } else
        switch (a) {
          case "control_toggle_play_pause":
          case "control_play":
          case "control_pause":
            c = this.J.getCurrentTime();
            a7(this, 0 === c ? void 0 : c);
            break;
          case "control_seek":
            a7(this, c[0]);
            break;
          case "control_subtitles_set_track":
            $6(this, c[0]);
            break;
          case "control_set_audio_track":
            this.setAudioTrack(c[0]);
        }
  };
  g.k.LN = function (a) {
    this.N.WJ(a);
  };
  g.k.LR = function (a) {
    this.ME("control_subtitles_set_track", g.Qb(a) ? null : a);
  };
  g.k.uH = function () {
    var a = this.J.getOption("captions", "track");
    g.Qb(a) || $6(this, a);
  };
  g.k.Bb = function (a) {
    this.B.Bb(a, this.J.getVideoData().lengthSeconds);
  };
  g.k.zO = function () {
    g.Qb(this.D) || KJa(this, this.D);
    this.F = !1;
  };
  g.k.eG = function (a, b) {
    this.C.stop();
    2 === b && this.qH();
  };
  g.k.ks = function () {
    if (Z6(this)) {
      this.u.stop();
      var a = q6(this.wb);
      switch (a.playerState) {
        case 1080:
        case 1081:
        case 1084:
        case 1085:
          this.B.Qe = 1;
          break;
        case 1082:
        case 1083:
          this.B.Qe = 0;
          break;
        default:
          this.B.Qe = -1;
      }
      switch (a.playerState) {
        case 1081:
        case 1:
          this.tb(new g.WK(8));
          this.pH();
          break;
        case 1085:
        case 3:
          this.tb(new g.WK(9));
          break;
        case 1083:
        case 0:
          this.tb(new g.WK(2));
          this.K.stop();
          this.Bb(this.J.getVideoData().lengthSeconds);
          break;
        case 1084:
          this.tb(new g.WK(4));
          break;
        case 2:
          this.tb(new g.WK(4));
          this.Bb(l6(a));
          break;
        case -1:
          this.tb(new g.WK(64));
          break;
        case -1e3:
          this.tb(
            new g.WK(128, {
              errorCode: "mdx.remoteerror",
              errorMessage: "This video is not available for remote playback.",
            })
          );
      }
      a = q6(this.wb).u;
      var b = this.D;
      (a || b
        ? a &&
          b &&
          a.trackName == b.trackName &&
          a.languageCode == b.languageCode &&
          a.languageName == b.languageName &&
          a.kind == b.kind
        : 1) || ((this.D = a), KJa(this, a));
      a = q6(this.wb);
      -1 === a.volume ||
        (Math.round(this.J.getVolume()) === a.volume &&
          this.J.isMuted() === a.muted) ||
        this.U.isActive() ||
        this.SH();
    } else JJa(this);
  };
  g.k.bG = function () {
    this.J.V("mdxpreviousnextchange");
  };
  g.k.kv = function () {
    Z6(this) || JJa(this);
  };
  g.k.WF = function (a) {
    isNaN(a) || this.J.V("mdxnowautoplaying", a);
  };
  g.k.wF = function () {
    this.J.V("mdxautoplaycanceled");
  };
  g.k.setAudioTrack = function (a) {
    Z6(this) && this.wb.setAudioTrack(this.J.getVideoData(1).videoId, a);
  };
  g.k.seekTo = function (a, b) {
    -1 === q6(this.wb).playerState ? a7(this, a) : b && this.wb.seekTo(a);
  };
  g.k.SH = function () {
    var a = this;
    if (Z6(this)) {
      var b = q6(this.wb);
      this.events.Jb(this.W);
      b.muted ? this.J.mute() : this.J.unMute();
      this.J.setVolume(b.volume);
      this.W = this.events.P(this.J, "onVolumeChange", function (c) {
        IJa(a, c);
      });
    }
  };
  g.k.pH = function () {
    this.u.stop();
    if (!this.wb.ma()) {
      var a = q6(this.wb);
      a.Gb() && this.tb(new g.WK(8));
      this.Bb(l6(a));
      this.u.start();
    }
  };
  g.k.qH = function () {
    this.C.stop();
    this.u.stop();
    var a = this.wb.C.getReconnectTimeout();
    2 == this.wb.La && !isNaN(a) && this.C.start();
  };
  g.k.tb = function (a) {
    this.C.stop();
    var b = this.I;
    if (!g.aL(b, a)) {
      var c = g.T(a, 2);
      c !== g.T(this.I, 2) && this.J.Rn(c);
      this.I = a;
      MJa(this.B, b, a);
    }
  };
  g.u(b7, g.U);
  b7.prototype.Ec = function () {
    this.u.show();
  };
  b7.prototype.jb = function () {
    this.u.hide();
  };
  b7.prototype.B = function () {
    g.EK("https://support.google.com/youtube/answer/7640706");
  };
  b7.prototype.C = function () {
    p4("mdx-manual-pairing-popup-ok");
    this.jb();
  };
  g.u(c7, g.U);
  c7.prototype.Ec = function () {
    this.u.show();
  };
  c7.prototype.jb = function () {
    this.u.hide();
  };
  c7.prototype.B = function () {
    p4("mdx-privacy-popup-cancel");
    this.jb();
  };
  c7.prototype.C = function () {
    p4("mdx-privacy-popup-confirm");
    this.jb();
  };
  g.u(d7, g.U);
  d7.prototype.B = function (a) {
    LJa(this, a.state);
  };
  g.u(e7, g.sR);
  e7.prototype.D = function () {
    var a = this.J.getOption("remote", "receivers");
    a && 1 < a.length && !this.J.getOption("remote", "quickCast")
      ? ((this.gm = g.Cb(a, this.u, this)),
        g.tR(this, g.Mc(a, this.u)),
        (a = this.J.getOption("remote", "currentReceiver")),
        (a = this.u(a)),
        this.options[a] && this.zh(a),
        this.enable(!0))
      : this.enable(!1);
  };
  e7.prototype.u = function (a) {
    return a.key;
  };
  e7.prototype.ki = function (a) {
    return "cast-selector-receiver" === a ? "Cast..." : this.gm[a].name;
  };
  e7.prototype.mf = function (a) {
    g.sR.prototype.mf.call(this, a);
    this.J.setOption("remote", "currentReceiver", this.gm[a]);
    this.Ya.jb();
  };
  g.u(f7, g.hO);
  g.k = f7.prototype;
  g.k.create = function () {
    var a = this.player.S(),
      b = g.xD(a);
    a = {
      device: "Desktop",
      app: "youtube-desktop",
      loadCastApiSetupScript: g.P(
        a.experiments,
        "mdx_load_cast_api_bootstrap_script"
      ),
      enableDialLoungeToken: g.P(
        a.experiments,
        "enable_dial_short_lived_lounge_token"
      ),
      enableCastLoungeToken: g.P(
        a.experiments,
        "enable_cast_short_lived_lounge_token"
      ),
    };
    DJa(b, a);
    this.subscriptions.push(g.Qo("yt-remote-before-disconnect", this.JN, this));
    this.subscriptions.push(g.Qo("yt-remote-connection-change", this.qP, this));
    this.subscriptions.push(
      g.Qo("yt-remote-receiver-availability-change", this.dG, this)
    );
    this.subscriptions.push(g.Qo("yt-remote-auto-connect", this.oP, this));
    this.subscriptions.push(g.Qo("yt-remote-receiver-resumed", this.nP, this));
    this.subscriptions.push(g.Qo("mdx-privacy-popup-confirm", this.IQ, this));
    this.subscriptions.push(g.Qo("mdx-privacy-popup-cancel", this.HQ, this));
    this.subscriptions.push(g.Qo("mdx-manual-pairing-popup-ok", this.TK, this));
    this.dG();
  };
  g.k.load = function () {
    this.player.cancelPlayback();
    g.hO.prototype.load.call(this);
    this.nh = new Y6(this, this.player, this.wb);
    var a = (a = HJa()) ? a.currentTime : 0;
    var b = V6() ? new p6(P6(), void 0) : null;
    0 == a && b && (a = l6(q6(b)));
    0 !== a && this.Bb(a);
    MJa(this, this.Nc, this.Nc);
    this.player.Rj(6);
  };
  g.k.unload = function () {
    this.player.V("mdxautoplaycanceled");
    this.ol = this.hi;
    g.cg(this.nh, this.wb);
    this.wb = this.nh = null;
    g.hO.prototype.unload.call(this);
    this.player.Rj(5);
    g7(this);
  };
  g.k.ca = function () {
    g.Ro(this.subscriptions);
    g.hO.prototype.ca.call(this);
  };
  g.k.Ij = function (a, b) {
    for (var c = [], d = 1; d < arguments.length; ++d) c[d - 1] = arguments[d];
    this.loaded && this.nh.ME.apply(this.nh, [a].concat(g.ma(c)));
  };
  g.k.getAdState = function () {
    return this.Qe;
  };
  g.k.RJ = function () {
    return this.loaded ? this.nh.suggestion : null;
  };
  g.k.nj = function () {
    return this.wb ? q6(this.wb).nj : !1;
  };
  g.k.hasNext = function () {
    return this.wb ? q6(this.wb).hasNext : !1;
  };
  g.k.Bb = function (a, b) {
    this.eE = a || 0;
    this.player.V("progresssync", a, b);
  };
  g.k.getCurrentTime = function () {
    return this.eE;
  };
  g.k.getProgressState = function () {
    var a = q6(this.wb),
      b = this.player.getVideoData();
    return {
      allowSeeking: g.P(
        this.player.S().experiments,
        "web_player_mdx_allow_seeking_change_killswitch"
      )
        ? this.player.Oe()
        : !a.isAdPlaying() && this.player.Oe(),
      clipEnd: b.clipEnd,
      clipStart: b.clipStart,
      current: this.getCurrentTime(),
      displayedStart: -1,
      duration: a.getDuration(),
      ingestionTime: a.C ? a.D + j6(a) : a.D,
      isAtLiveHead: 1 >= (a.C ? a.B + j6(a) : a.B) - this.getCurrentTime(),
      loaded: a.U,
      seekableEnd: a.C ? a.B + j6(a) : a.B,
      seekableStart: 0 < a.F ? a.F + j6(a) : a.F,
    };
  };
  g.k.nextVideo = function () {
    this.wb && this.wb.nextVideo();
  };
  g.k.qv = function () {
    this.wb && this.wb.qv();
  };
  g.k.JN = function (a) {
    1 === a && (this.Rz = this.wb ? q6(this.wb) : null);
  };
  g.k.qP = function () {
    var a = V6() ? new p6(P6(), void 0) : null;
    if (a) {
      var b = this.ol;
      this.loaded && this.unload();
      this.wb = a;
      this.Rz = null;
      b.key !== this.hi.key && ((this.ol = b), this.load());
    } else
      g.bg(this.wb),
        (this.wb = null),
        this.loaded &&
          (this.unload(),
          (a = this.Rz) &&
            a.videoId === this.player.getVideoData().videoId &&
            this.player.cueVideoById(a.videoId, l6(a)));
    this.player.V("videodatachange", "newdata", this.player.getVideoData(), 3);
  };
  g.k.dG = function () {
    var a = [this.hi],
      b = a.concat,
      c = EJa();
    d6() &&
      g.Fu("yt-remote-cast-available") &&
      c.push({ key: "cast-selector-receiver", name: "Cast..." });
    this.gm = b.call(a, c);
    a = Q6() || this.hi;
    h7(this, a);
    this.player.va("onMdxReceiversChange");
  };
  g.k.oP = function () {
    var a = Q6();
    h7(this, a);
  };
  g.k.nP = function () {
    this.ol = Q6();
  };
  g.k.IQ = function () {
    this.qs = !0;
    g7(this);
    X6 = !1;
    R6 && T6(R6, 1);
    R6 = null;
  };
  g.k.HQ = function () {
    this.qs = !1;
    g7(this);
    h7(this, this.hi);
    this.ol = this.hi;
    X6 = !1;
    R6 = null;
    this.player.playVideo();
  };
  g.k.TK = function () {
    this.zu = !0;
    g7(this);
    g.Eu("yt-remote-manual-pairing-warning-shown", !0, 2592e3);
    X6 = !1;
    R6 && T6(R6, 1);
    R6 = null;
  };
  g.k.He = function (a, b) {
    switch (a) {
      case "casting":
        return this.loaded;
      case "receivers":
        return this.gm;
      case "currentReceiver":
        return (
          b && ("cast-selector-receiver" === b.key ? f6() : h7(this, b)),
          this.loaded ? this.ol : this.hi
        );
      case "quickCast":
        return 2 === this.gm.length &&
          "cast-selector-receiver" === this.gm[1].key
          ? (b && f6(), !0)
          : !1;
    }
  };
  g.k.FA = function () {
    this.wb.FA();
  };
  g.k.Bi = function () {
    return !1;
  };
  g.k.getOptions = function () {
    return ["casting", "receivers", "currentReceiver", "quickCast"];
  };
  g.nO.remote = f7;
})(_yt_player);
