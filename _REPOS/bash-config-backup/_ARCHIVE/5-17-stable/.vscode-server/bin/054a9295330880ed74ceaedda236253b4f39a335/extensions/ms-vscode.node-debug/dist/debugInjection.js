!(function () {
  var n,
    a,
    o,
    v,
    r = /^(0|[1-9][0-9]*)$/,
    e = process.mainModule ? process.mainModule.require("vm") : require("vm"),
    y = e.runInDebugContext("LookupMirror"),
    t = e.runInDebugContext("DebugCommandProcessor");
  try {
    var s = e.runInDebugContext("PropertyKind");
    if (!s) throw new Error("undef");
    (n = function (e) {
      return e.propertyNames(s.Indexed).length;
    }),
      (a = function (e) {
        return e.propertyNames(s.Named).length;
      }),
      (o = function (e, r) {
        return e.propertyNames(s.Named | s.Indexed, r).length >= r;
      }),
      (v = function (e) {
        return e.propertyNames(s.Named);
      });
  } catch (e) {
    (n = function (e) {
      for (var r = 0, t = e.propertyNames(), n = 0; n < t.length; n++)
        i(t[n]) && r++;
      return r;
    }),
      (a = function (e) {
        for (var r = 0, t = e.propertyNames(), n = 0; n < t.length; n++)
          i(t[n]) || r++;
        return r;
      }),
      (o = function (e, r) {
        return e.propertyNames().length >= r;
      }),
      (v = function (e) {
        for (var r = [], t = e.propertyNames(), n = 0; n < t.length; n++) {
          var a = t[n];
          i(a) || r.push(a);
        }
        return r;
      });
  }
  var i = function (e) {
    switch (typeof e) {
      case "number":
        return !0;
      case "string":
        return r.test(e);
      default:
        return !1;
    }
  };
  try {
    e.runInDebugContext(
      "JSONProtocolSerializer"
    ).prototype.serializeReferencedObjects = function () {
      for (var e = [], r = 0; r < this.mirrors_.length; r++) {
        var t = this.mirrors_[r];
        if (!t.isArray()) {
          if (t.isObject())
            if (t.handle() < 0);
            else if (o(t, 100)) continue;
          e.push(this.serialize_(t, !1, !1));
        }
      }
      return e;
    };
  } catch (e) {}
  t.prototype.dispatch_.vscode_slice = function (e, r) {
    var t = e.arguments.handle,
      n = e.arguments.start,
      a = e.arguments.count,
      o = e.arguments.mode,
      s = y(t);
    if (!s) return r.failed("Object #" + t + "# not found");
    var i = [];
    if (("named" === o || "all" === o) && (s.isArray() || s.isObject()))
      for (var u = v(s), c = 0; c < u.length; c++) {
        var l = u[c],
          d = s.property(l);
        i.push({ name: l, value: d.value() });
      }
    if ("indexed" === o || "all" === o)
      if (s.isArray()) {
        var p = s.indexedPropertiesFromRange(n, n + a - 1);
        for (c = 0; c < p.length; c++)
          i.push({ name: (n + c).toString(), value: p[c].value() });
      } else if (s.isObject()) {
        c = 0;
        for (var f = n; c < a; c++, f++) {
          d = s.property(f.toString());
          i.push({ name: f.toString(), value: d.value() });
        }
      }
    r.body = { result: i };
  };
  function u(e) {
    var r = -1,
      t = -1;
    if (e.isArray()) (r = a(e)), (t = e.length());
    else if (e.isObject())
      switch (e.className()) {
        case "ArrayBuffer":
        case "Int8Array":
        case "Uint8Array":
        case "Uint8ClampedArray":
        case "Int16Array":
        case "Uint16Array":
        case "Int32Array":
        case "Uint32Array":
        case "Float32Array":
        case "Float64Array":
          (r = a(e)), (t = n(e));
      }
    return 100 < t
      ? {
          type: "object",
          handle: e.handle(),
          className: e.className(),
          vscode_namedCnt: r,
          vscode_indexedCnt: t,
        }
      : e;
  }
  (t.prototype.dispatch_.vscode_lookup = function (e, r) {
    var t = this.lookupRequest_(e, r);
    if (!t && r.body)
      for (var n = e.arguments.handles, a = 0; a < n.length; a++) {
        var o = n[a];
        r.body[o] = u(r.body[o]);
      }
    return t;
  }),
    (t.prototype.dispatch_.vscode_evaluate = function (e, r) {
      var t = this.evaluateRequest_(e, r);
      return t || (r.body = u(r.body)), t;
    }),
    (t.prototype.dispatch_.vscode_scopes = function (e, r) {
      var t = this.scopesRequest_(e, r);
      if (!t)
        for (
          var n = e.arguments.maxLocals, a = r.body.scopes, o = 0;
          o < a.length - 1;
          o++
        ) {
          var s = a[o].details_.details_;
          if (s && 1 === s[0]) {
            var i = s[1],
              u = Object.keys(i);
            if (u.length > n) {
              for (var c = {}, l = 0; l < n; l++) {
                var d = u[l];
                c[d] = i[d];
              }
              (s[1] = c), (r.body.vscode_locals = u.length);
            }
          }
        }
      return t;
    });
})();
