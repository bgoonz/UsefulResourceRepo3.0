(self.webpackChunk_jupyter_widgets_jupyterlab_manager =
  self.webpackChunk_jupyter_widgets_jupyterlab_manager || []).push([
  [272],
  {
    2272: (e, t, n) => {
      "use strict";
      n.r(t),
        n.d(t, {
          DOMWidgetModel: () => H,
          DOMWidgetView: () => ee,
          IJupyterWidgetRegistry: () => ue,
          JUPYTER_WIDGETS_VERSION: () => C,
          JupyterPhosphorPanelWidget: () => Z,
          JupyterPhosphorWidget: () => X,
          LayoutModel: () => oe,
          LayoutView: () => re,
          ManagerBase: () => z,
          PROTOCOL_VERSION: () => P,
          StyleModel: () => se,
          StyleView: () => le,
          ViewList: () => ae,
          WidgetModel: () => $,
          WidgetView: () => Q,
          WrappedError: () => m,
          assign: () => d,
          base64ToBuffer: () => k,
          bufferToBase64: () => E,
          bufferToHex: () => O,
          difference: () => f,
          hexToBuffer: () => j,
          isEqual: () => p,
          put_buffers: () => g,
          reject: () => y,
          remove_buffers: () => w,
          resolvePromisesDict: () => v,
          serialize_state: () => x,
          shims: () => Y,
          unpack_models: () => G,
          uuid: () => _,
        });
      var o,
        r = n(4782),
        i = n(1797),
        s = n(6141),
        l = n.n(s),
        a = n(861),
        u = n.n(a),
        c =
          ((o = function (e, t) {
            return (o =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (e, t) {
                  e.__proto__ = t;
                }) ||
              function (e, t) {
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
              })(e, t);
          }),
          function (e, t) {
            function n() {
              this.constructor = e;
            }
            o(e, t),
              (e.prototype =
                null === t
                  ? Object.create(t)
                  : ((n.prototype = t.prototype), new n()));
          }),
        h = function () {
          return (h =
            Object.assign ||
            function (e) {
              for (var t, n = 1, o = arguments.length; n < o; n++)
                for (var r in (t = arguments[n]))
                  Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
              return e;
            }).apply(this, arguments);
        };
      function f(e, t) {
        return e.filter(function (e) {
          return -1 === t.indexOf(e);
        });
      }
      function p(e, t) {
        return l()(e, t);
      }
      var d =
        Object.assign ||
        function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var o in n)
              Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
          }
          return e;
        };
      function _() {
        return i.UUID.uuid4();
      }
      var m = (function (e) {
        function t(n, o) {
          var r = e.call(this, n) || this;
          return (
            console.warn("WrappedError has been deprecated!"),
            (r.error_stack = o instanceof t ? o.error_stack : [o]),
            r.error_stack.push(r),
            r
          );
        }
        return c(t, e), t;
      })(Error);
      function v(e) {
        var t = Object.keys(e),
          n = [];
        return (
          t.forEach(function (t) {
            n.push(e[t]);
          }),
          Promise.all(n).then(function (e) {
            for (var n = {}, o = 0; o < t.length; o++) n[t[o]] = e[o];
            return n;
          })
        );
      }
      function y(e, t) {
        return function (n) {
          throw (t && console.error(new Error(e)), n);
        };
      }
      function g(e, t, n) {
        for (var o = 0; o < t.length; o++) {
          for (var r = t[o], i = e, s = 0; s < r.length - 1; s++) i = i[r[s]];
          i[r[r.length - 1]] = n[o];
        }
      }
      function w(e) {
        var t = [],
          n = [];
        return {
          state: (function e(o, r) {
            if ((o.toJSON && (o = o.toJSON()), Array.isArray(o)))
              for (var i = !1, s = 0; s < o.length; s++)
                (a = o[s]) &&
                  (a instanceof ArrayBuffer || ArrayBuffer.isView(a)
                    ? (i || ((o = o.slice()), (i = !0)),
                      t.push(ArrayBuffer.isView(a) ? a.buffer : a),
                      n.push(r.concat([s])),
                      (o[s] = null))
                    : (c = e(a, r.concat([s]))) !== a &&
                      (i || ((o = o.slice()), (i = !0)), (o[s] = c)));
            else if (u()(o))
              for (var l in o) {
                var a, c;
                (i = !1),
                  o.hasOwnProperty(l) &&
                    (a = o[l]) &&
                    (a instanceof ArrayBuffer || ArrayBuffer.isView(a)
                      ? (i || ((o = h({}, o)), (i = !0)),
                        t.push(ArrayBuffer.isView(a) ? a.buffer : a),
                        n.push(r.concat([l])),
                        delete o[l])
                      : (c = e(a, r.concat([l]))) !== a &&
                        (i || ((o = h({}, o)), (i = !0)), (o[l] = c)));
              }
            return o;
          })(e, []),
          buffers: t,
          buffer_paths: n,
        };
      }
      var b = [
        "00",
        "01",
        "02",
        "03",
        "04",
        "05",
        "06",
        "07",
        "08",
        "09",
        "0A",
        "0B",
        "0C",
        "0D",
        "0E",
        "0F",
        "10",
        "11",
        "12",
        "13",
        "14",
        "15",
        "16",
        "17",
        "18",
        "19",
        "1A",
        "1B",
        "1C",
        "1D",
        "1E",
        "1F",
        "20",
        "21",
        "22",
        "23",
        "24",
        "25",
        "26",
        "27",
        "28",
        "29",
        "2A",
        "2B",
        "2C",
        "2D",
        "2E",
        "2F",
        "30",
        "31",
        "32",
        "33",
        "34",
        "35",
        "36",
        "37",
        "38",
        "39",
        "3A",
        "3B",
        "3C",
        "3D",
        "3E",
        "3F",
        "40",
        "41",
        "42",
        "43",
        "44",
        "45",
        "46",
        "47",
        "48",
        "49",
        "4A",
        "4B",
        "4C",
        "4D",
        "4E",
        "4F",
        "50",
        "51",
        "52",
        "53",
        "54",
        "55",
        "56",
        "57",
        "58",
        "59",
        "5A",
        "5B",
        "5C",
        "5D",
        "5E",
        "5F",
        "60",
        "61",
        "62",
        "63",
        "64",
        "65",
        "66",
        "67",
        "68",
        "69",
        "6A",
        "6B",
        "6C",
        "6D",
        "6E",
        "6F",
        "70",
        "71",
        "72",
        "73",
        "74",
        "75",
        "76",
        "77",
        "78",
        "79",
        "7A",
        "7B",
        "7C",
        "7D",
        "7E",
        "7F",
        "80",
        "81",
        "82",
        "83",
        "84",
        "85",
        "86",
        "87",
        "88",
        "89",
        "8A",
        "8B",
        "8C",
        "8D",
        "8E",
        "8F",
        "90",
        "91",
        "92",
        "93",
        "94",
        "95",
        "96",
        "97",
        "98",
        "99",
        "9A",
        "9B",
        "9C",
        "9D",
        "9E",
        "9F",
        "A0",
        "A1",
        "A2",
        "A3",
        "A4",
        "A5",
        "A6",
        "A7",
        "A8",
        "A9",
        "AA",
        "AB",
        "AC",
        "AD",
        "AE",
        "AF",
        "B0",
        "B1",
        "B2",
        "B3",
        "B4",
        "B5",
        "B6",
        "B7",
        "B8",
        "B9",
        "BA",
        "BB",
        "BC",
        "BD",
        "BE",
        "BF",
        "C0",
        "C1",
        "C2",
        "C3",
        "C4",
        "C5",
        "C6",
        "C7",
        "C8",
        "C9",
        "CA",
        "CB",
        "CC",
        "CD",
        "CE",
        "CF",
        "D0",
        "D1",
        "D2",
        "D3",
        "D4",
        "D5",
        "D6",
        "D7",
        "D8",
        "D9",
        "DA",
        "DB",
        "DC",
        "DD",
        "DE",
        "DF",
        "E0",
        "E1",
        "E2",
        "E3",
        "E4",
        "E5",
        "E6",
        "E7",
        "E8",
        "E9",
        "EA",
        "EB",
        "EC",
        "ED",
        "EE",
        "EF",
        "F0",
        "F1",
        "F2",
        "F3",
        "F4",
        "F5",
        "F6",
        "F7",
        "F8",
        "F9",
        "FA",
        "FB",
        "FC",
        "FD",
        "FE",
        "FF",
      ];
      function O(e) {
        for (var t = new Uint8Array(e), n = [], o = 0; o < t.length; o++)
          n.push(b[t[o]]);
        return n.join("");
      }
      function j(e) {
        for (var t = new Uint8Array(e.length / 2), n = 0; n < e.length; n += 2)
          t[n / 2] = parseInt(e.slice(n, n + 2), 16);
        return t.buffer;
      }
      function E(e) {
        return (0, r.JQ)(new Uint8Array(e));
      }
      function k(e) {
        return (0, r.b$)(e).buffer;
      }
      var C = "1.2.0",
        P = "2.0.0",
        A = function () {
          return (A =
            Object.assign ||
            function (e) {
              for (var t, n = 1, o = arguments.length; n < o; n++)
                for (var r in (t = arguments[n]))
                  Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
              return e;
            }).apply(this, arguments);
        },
        S = function (e, t, n, o) {
          return new (n || (n = Promise))(function (r, i) {
            function s(e) {
              try {
                a(o.next(e));
              } catch (e) {
                i(e);
              }
            }
            function l(e) {
              try {
                a(o.throw(e));
              } catch (e) {
                i(e);
              }
            }
            function a(e) {
              var t;
              e.done
                ? r(e.value)
                : ((t = e.value),
                  t instanceof n
                    ? t
                    : new n(function (e) {
                        e(t);
                      })).then(s, l);
            }
            a((o = o.apply(e, t || [])).next());
          });
        },
        D = function (e, t) {
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
            (i = { next: l(0), throw: l(1), return: l(2) }),
            "function" == typeof Symbol &&
              (i[Symbol.iterator] = function () {
                return this;
              }),
            i
          );
          function l(i) {
            return function (l) {
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
                        return s.label++, { value: i[1], done: !1 };
                      case 5:
                        s.label++, (o = i[1]), (i = [0]);
                        continue;
                      case 7:
                        (i = s.ops.pop()), s.trys.pop();
                        continue;
                      default:
                        if (
                          !(
                            (r = (r = s.trys).length > 0 && r[r.length - 1]) ||
                            (6 !== i[0] && 2 !== i[0])
                          )
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
                    i = t.call(e, s);
                  } catch (e) {
                    (i = [6, e]), (o = 0);
                  } finally {
                    n = r = 0;
                  }
                if (5 & i[0]) throw i[1];
                return { value: i[0] ? i[1] : void 0, done: !0 };
              })([i, l]);
            };
          }
        },
        B = P.split(".", 1)[0],
        z = (function () {
          function e() {
            (this.comm_target_name = "jupyter.widget"),
              (this._models = Object.create(null));
          }
          return (
            (e.prototype.display_model = function (e, t, n) {
              var o = this;
              return (
                void 0 === n && (n = {}),
                this.create_view(t, n)
                  .then(function (t) {
                    return o.display_view(e, t, n);
                  })
                  .catch(y("Could not create view", !0))
              );
            }),
            (e.prototype.setViewOptions = function (e) {
              return void 0 === e && (e = {}), e;
            }),
            (e.prototype.create_view = function (e, t) {
              var n = this;
              void 0 === t && (t = {});
              var o = (e.state_change = e.state_change.then(function () {
                  return n
                    .loadClass(
                      e.get("_view_name"),
                      e.get("_view_module"),
                      e.get("_view_module_version")
                    )
                    .then(function (o) {
                      var r = new o({ model: e, options: n.setViewOptions(t) });
                      return (
                        r.listenTo(e, "destroy", r.remove),
                        Promise.resolve(r.render()).then(function () {
                          return r;
                        })
                      );
                    })
                    .catch(
                      y(
                        "Could not create a view for model id " + e.model_id,
                        !0
                      )
                    );
                })),
                r = _();
              return (
                (e.views[r] = o),
                o.then(function (e) {
                  e.once(
                    "remove",
                    function () {
                      delete e.model.views[r];
                    },
                    n
                  );
                }),
                e.state_change
              );
            }),
            (e.prototype.callbacks = function (e) {
              return {};
            }),
            (e.prototype.get_model = function (e) {
              return this._models[e];
            }),
            (e.prototype.handle_comm_open = function (e, t) {
              var n = (t.metadata || {}).version || "";
              if (n.split(".", 1)[0] !== B) {
                var o =
                  "Wrong widget protocol version: received protocol version '" +
                  n +
                  "', but was expecting major version '" +
                  B +
                  "'";
                return console.error(o), Promise.reject(o);
              }
              var r = t.content.data,
                i = r.buffer_paths || [],
                s = (t.buffers || []).map(function (e) {
                  return e instanceof DataView
                    ? e
                    : new DataView(e instanceof ArrayBuffer ? e : e.buffer);
                });
              return (
                g(r.state, i, s),
                this.new_model(
                  {
                    model_name: r.state._model_name,
                    model_module: r.state._model_module,
                    model_module_version: r.state._model_module_version,
                    comm: e,
                  },
                  r.state
                ).catch(y("Could not create a model.", !0))
              );
            }),
            (e.prototype.new_widget = function (e, t) {
              var n,
                o = this;
              if (
                (void 0 === t && (t = {}),
                void 0 === e.view_name ||
                  void 0 === e.view_module ||
                  void 0 === e.view_module_version)
              )
                return Promise.reject(
                  "new_widget(...) must be given view information in the options."
                );
              n = e.comm
                ? Promise.resolve(e.comm)
                : this._create_comm(
                    this.comm_target_name,
                    e.model_id,
                    {
                      state: {
                        _model_module: e.model_module,
                        _model_module_version: e.model_module_version,
                        _model_name: e.model_name,
                        _view_module: e.view_module,
                        _view_module_version: e.view_module_version,
                        _view_name: e.view_name,
                      },
                    },
                    { version: P }
                  );
              var r = A({}, e);
              return n.then(
                function (e) {
                  return (
                    (r.comm = e),
                    o.new_model(r, t).then(function (e) {
                      return e.sync("create", e), e;
                    })
                  );
                },
                function () {
                  return r.model_id || (r.model_id = _()), o.new_model(r, t);
                }
              );
            }),
            (e.prototype.register_model = function (e, t) {
              var n = this;
              (this._models[e] = t),
                t.then(function (t) {
                  t.once("comm:close", function () {
                    delete n._models[e];
                  });
                });
            }),
            (e.prototype.new_model = function (e, t) {
              return (
                void 0 === t && (t = {}),
                S(this, void 0, void 0, function () {
                  var n, o;
                  return D(this, function (r) {
                    switch (r.label) {
                      case 0:
                        if (e.model_id) n = e.model_id;
                        else {
                          if (!e.comm)
                            throw new Error(
                              "Neither comm nor model_id provided in options object. At least one must exist."
                            );
                          n = e.model_id = e.comm.comm_id;
                        }
                        return (
                          (o = this._make_model(e, t)),
                          this.register_model(n, o),
                          [4, o]
                        );
                      case 1:
                        return [2, r.sent()];
                    }
                  });
                })
              );
            }),
            (e.prototype._make_model = function (e, t) {
              return (
                void 0 === t && (t = {}),
                S(this, void 0, void 0, function () {
                  var n, o, r, i, s, l, a;
                  return D(this, function (u) {
                    switch (u.label) {
                      case 0:
                        (n = e.model_id),
                          (o = this.loadClass(
                            e.model_name,
                            e.model_module,
                            e.model_module_version
                          )),
                          (u.label = 1);
                      case 1:
                        return u.trys.push([1, 3, , 4]), [4, o];
                      case 2:
                        return (r = u.sent()), [3, 4];
                      case 3:
                        throw (
                          ((i = u.sent()),
                          console.error("Could not instantiate widget"),
                          i)
                        );
                      case 4:
                        if (!r)
                          throw new Error(
                            "Cannot find model module " +
                              e.model_module +
                              "@" +
                              e.model_module_version +
                              ", " +
                              e.model_name
                          );
                        return [4, r._deserialize_state(t, this)];
                      case 5:
                        return (
                          (s = u.sent()),
                          (l = {
                            widget_manager: this,
                            model_id: n,
                            comm: e.comm,
                          }),
                          ((a = new r(s, l)).name = e.model_name),
                          (a.module = e.model_module),
                          [2, a]
                        );
                    }
                  });
                })
              );
            }),
            (e.prototype.clear_state = function () {
              var e = this;
              return v(this._models).then(function (t) {
                Object.keys(t).forEach(function (e) {
                  return t[e].close();
                }),
                  (e._models = Object.create(null));
              });
            }),
            (e.prototype.get_state = function (e) {
              var t = this;
              void 0 === e && (e = {});
              var n = Object.keys(this._models).map(function (e) {
                return t._models[e];
              });
              return Promise.all(n).then(function (t) {
                return x(t, e);
              });
            }),
            (e.prototype.set_state = function (e) {
              var t = this;
              if (!(e.version_major && e.version_major <= 2))
                throw "Unsupported widget state format";
              var n = e.state;
              return this._get_comm_info().then(function (e) {
                return Promise.all(
                  Object.keys(n).map(function (o) {
                    var r = { base64: k, hex: j },
                      i = n[o],
                      s = i.state;
                    if (i.buffers) {
                      var l = i.buffers.map(function (e) {
                          return e.path;
                        }),
                        a = i.buffers.map(function (e) {
                          return new DataView(r[e.encoding](e.data));
                        });
                      g(i.state, l, a);
                    }
                    if (t._models[o])
                      return t._models[o].then(function (e) {
                        return e.constructor
                          ._deserialize_state(s || {}, t)
                          .then(function (t) {
                            return e.set_state(t), e;
                          });
                      });
                    var u = {
                      model_id: o,
                      model_name: i.model_name,
                      model_module: i.model_module,
                      model_module_version: i.model_module_version,
                    };
                    return e.hasOwnProperty(o)
                      ? t
                          ._create_comm(t.comm_target_name, o)
                          .then(function (e) {
                            return (u.comm = e), t.new_model(u);
                          })
                      : t.new_model(u, s);
                  })
                );
              });
            }),
            (e.prototype.disconnect = function () {
              var e = this;
              Object.keys(this._models).forEach(function (t) {
                e._models[t].then(function (e) {
                  e.comm_live = !1;
                });
              });
            }),
            (e.prototype.resolveUrl = function (e) {
              return Promise.resolve(e);
            }),
            (e.prototype.filterExistingModelState = function (e) {
              var t = this,
                n = e.state;
              return (
                (n = Object.keys(n)
                  .filter(function (e) {
                    return !t._models[e];
                  })
                  .reduce(function (e, t) {
                    return (e[t] = n[t]), e;
                  }, {})),
                A(A({}, e), { state: n })
              );
            }),
            e
          );
        })();
      function x(e, t) {
        void 0 === t && (t = {});
        var n = {};
        return (
          e.forEach(function (e) {
            var o = e.model_id,
              r = w(e.serialize(e.get_state(t.drop_defaults))),
              i = r.buffers.map(function (e, t) {
                return {
                  data: E(e),
                  path: r.buffer_paths[t],
                  encoding: "base64",
                };
              });
            (n[o] = {
              model_name: e.name,
              model_module: e.module,
              model_module_version: e.get("_model_module_version"),
              state: r.state,
            }),
              i.length > 0 && (n[o].buffers = i);
          }),
          { version_major: 2, version_minor: 0, state: n }
        );
      }
      var M = function () {
        return (M =
          Object.assign ||
          function (e) {
            for (var t, n = 1, o = arguments.length; n < o; n++)
              for (var r in (t = arguments[n]))
                Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
            return e;
          }).apply(this, arguments);
      };
      function F(e, t, n) {
        if (null == e) return this;
        var o;
        if (
          ("object" == typeof e ? ((o = e), (n = t)) : ((o = {})[e] = t),
          n || (n = {}),
          !this._validate(o, n))
        )
          return !1;
        var r = n.unset,
          i = n.silent,
          s = [],
          l = this._changing;
        (this._changing = !0),
          l ||
            ((this._previousAttributes = M({}, this.attributes)),
            (this.changed = {}));
        var a = this.attributes,
          u = this.changed,
          c = this._previousAttributes;
        for (var h in o)
          (t = o[h]),
            p(a[h], t) || s.push(h),
            p(c[h], t) ? delete u[h] : (u[h] = t),
            r ? delete a[h] : (a[h] = t);
        if (((this.id = this.get(this.idAttribute)), !i)) {
          s.length && (this._pending = n);
          for (var f = 0; f < s.length; f++)
            this.trigger("change:" + s[f], this, a[s[f]], n);
        }
        if (l) return this;
        if (!i)
          for (; this._pending; )
            (n = this._pending),
              (this._pending = !1),
              this.trigger("change", this, n);
        return (this._pending = !1), (this._changing = !1), this;
      }
      var W = n(6083),
        N = n(1524),
        T = n.n(N),
        V = (function () {
          var e = function (t, n) {
            return (e =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (e, t) {
                  e.__proto__ = t;
                }) ||
              function (e, t) {
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
              })(t, n);
          };
          return function (t, n) {
            function o() {
              this.constructor = t;
            }
            e(t, n),
              (t.prototype =
                null === n
                  ? Object.create(n)
                  : ((o.prototype = n.prototype), new o()));
          };
        })(),
        L = Element.prototype,
        J =
          L.matches ||
          L.webkitMatchesSelector ||
          L.mozMatchesSelector ||
          L.msMatchesSelector ||
          L.oMatchesSelector ||
          function (e) {
            for (
              var t = (this.document || this.ownerDocument).querySelectorAll(e),
                n = t.length;
              --n >= 0 && t.item(n) !== this;

            );
            return n > -1;
          },
        I = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            V(t, e),
            (t.prototype._removeElement = function () {
              this.undelegateEvents(),
                this.el.parentNode && this.el.parentNode.removeChild(this.el);
            }),
            (t.prototype._setElement = function (e) {
              this.el = e;
            }),
            (t.prototype._setAttributes = function (e) {
              for (var t in e)
                t in this.el
                  ? (this.el[t] = e[t])
                  : this.el.setAttribute(t, e[t]);
            }),
            (t.prototype.delegate = function (e, t, n) {
              "string" != typeof t && ((n = t), (t = null)),
                void 0 === this._domEvents && (this._domEvents = []);
              var o = this.el,
                r = t
                  ? function (e) {
                      for (
                        var r = e.target || e.srcElement;
                        r && r !== o;
                        r = r.parentNode
                      )
                        if (J.call(r, t))
                          return (
                            (e.delegateTarget = r),
                            n.handleEvent ? n.handleEvent(e) : n(e)
                          );
                    }
                  : n;
              return (
                this.el.addEventListener(e, r, !1),
                this._domEvents.push({
                  eventName: e,
                  handler: r,
                  listener: n,
                  selector: t,
                }),
                r
              );
            }),
            (t.prototype.undelegate = function (e, t, n) {
              if (
                ("function" == typeof t && ((n = t), (t = null)),
                this.el && this._domEvents)
              )
                for (var o = this._domEvents.slice(), r = o.length; r--; ) {
                  var i = o[r];
                  !(
                    i.eventName !== e ||
                    (n && i.listener !== n) ||
                    (t && i.selector !== t)
                  ) &&
                    (this.el.removeEventListener(i.eventName, i.handler, !1),
                    this._domEvents.splice(r, 1));
                }
              return this;
            }),
            (t.prototype.undelegateEvents = function () {
              if (this.el && this._domEvents) {
                for (var e = this._domEvents.length, t = 0; t < e; t++) {
                  var n = this._domEvents[t];
                  this.el.removeEventListener(n.eventName, n.handler, !1);
                }
                this._domEvents.length = 0;
              }
              return this;
            }),
            t
          );
        })(W.View),
        U = n(6510),
        R = n(3211),
        q = (function () {
          var e = function (t, n) {
            return (e =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (e, t) {
                  e.__proto__ = t;
                }) ||
              function (e, t) {
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
              })(t, n);
          };
          return function (t, n) {
            function o() {
              this.constructor = t;
            }
            e(t, n),
              (t.prototype =
                null === n
                  ? Object.create(n)
                  : ((o.prototype = n.prototype), new o()));
          };
        })(),
        K = function () {
          return (K =
            Object.assign ||
            function (e) {
              for (var t, n = 1, o = arguments.length; n < o; n++)
                for (var r in (t = arguments[n]))
                  Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
              return e;
            }).apply(this, arguments);
        };
      function G(e, t) {
        if (Array.isArray(e)) {
          var n = [];
          return (
            e.forEach(function (e, o) {
              n.push(G(e, t));
            }),
            Promise.all(n)
          );
        }
        if (e instanceof Object) {
          var o = {};
          return (
            Object.keys(e).forEach(function (n) {
              o[n] = G(e[n], t);
            }),
            v(o)
          );
        }
        return "string" == typeof e && "IPY_MODEL_" === e.slice(0, 10)
          ? t.get_model(e.slice(10, e.length))
          : Promise.resolve(e);
      }
      var Y,
        $ = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            q(t, e),
            (t.prototype.defaults = function () {
              return {
                _model_module: "@jupyter-widgets/base",
                _model_name: "WidgetModel",
                _model_module_version: C,
                _view_module: "@jupyter-widgets/base",
                _view_name: null,
                _view_module_version: C,
                _view_count: null,
              };
            }),
            (t.prototype.isNew = function () {
              return !1;
            }),
            (t.prototype.initialize = function (t, n) {
              e.prototype.initialize.call(this, t, n),
                (this.widget_manager = n.widget_manager),
                (this.model_id = n.model_id);
              var o = n.comm;
              (this.views = Object.create(null)),
                (this.state_change = Promise.resolve()),
                (this._closed = !1),
                (this._state_lock = null),
                (this._msg_buffer = null),
                (this._msg_buffer_callbacks = null),
                (this._pending_msgs = 0),
                (this._buffered_state_diff = {}),
                o
                  ? ((this.comm = o),
                    o.on_close(this._handle_comm_closed.bind(this)),
                    o.on_msg(this._handle_comm_msg.bind(this)),
                    (this.comm_live = !0))
                  : (this.comm_live = !1);
            }),
            Object.defineProperty(t.prototype, "comm_live", {
              get: function () {
                return this._comm_live;
              },
              set: function (e) {
                (this._comm_live = e), this.trigger("comm_live_update");
              },
              enumerable: !0,
              configurable: !0,
            }),
            (t.prototype.send = function (e, t, n) {
              if (void 0 !== this.comm) {
                var o = { method: "custom", content: e };
                this.comm.send(o, t, {}, n);
              }
            }),
            (t.prototype.close = function (e) {
              var t = this;
              if ((void 0 === e && (e = !1), !this._closed)) {
                (this._closed = !0),
                  this.comm && !e && this.comm.close(),
                  this.stopListening(),
                  this.trigger("destroy", this),
                  this.comm && delete this.comm;
                var n = Object.keys(this.views).map(function (e) {
                  return t.views[e].then(function (e) {
                    return e.remove();
                  });
                });
                return delete this.views, Promise.all(n).then(function () {});
              }
            }),
            (t.prototype._handle_comm_closed = function (e) {
              this.trigger("comm:close"), this.close(!0);
            }),
            (t.prototype._handle_comm_msg = function (e) {
              var t = this,
                n = e.content.data;
              switch (n.method) {
                case "update":
                  return (
                    (this.state_change = this.state_change
                      .then(function () {
                        var o = n.state;
                        return (
                          g(
                            o,
                            n.buffer_paths || [],
                            (e.buffers || []).map(function (e) {
                              return e instanceof DataView
                                ? e
                                : new DataView(
                                    e instanceof ArrayBuffer ? e : e.buffer
                                  );
                            })
                          ),
                          t.constructor._deserialize_state(o, t.widget_manager)
                        );
                      })
                      .then(function (e) {
                        t.set_state(e);
                      })
                      .catch(
                        y(
                          "Could not process update msg for model id: " +
                            this.model_id,
                          !0
                        )
                      )),
                    this.state_change
                  );
                case "custom":
                  return (
                    this.trigger("msg:custom", n.content, e.buffers),
                    Promise.resolve()
                  );
              }
            }),
            (t.prototype.set_state = function (e) {
              this._state_lock = e;
              try {
                this.set(e);
              } catch (e) {
                console.error("Error setting state: " + e.message);
              } finally {
                this._state_lock = null;
              }
            }),
            (t.prototype.get_state = function (e) {
              var t = this.attributes;
              if (e) {
                var n = this.defaults,
                  o = "function" == typeof n ? n.call(this) : n,
                  r = {};
                return (
                  Object.keys(t).forEach(function (e) {
                    p(t[e], o[e]) || (r[e] = t[e]);
                  }),
                  r
                );
              }
              return K({}, t);
            }),
            (t.prototype._handle_status = function (e) {
              void 0 !== this.comm &&
                "idle" === e.content.execution_state &&
                (this._pending_msgs--,
                null !== this._msg_buffer &&
                  this._pending_msgs < 1 &&
                  (this.send_sync_message(
                    this._msg_buffer,
                    this._msg_buffer_callbacks
                  ),
                  (this._msg_buffer = null),
                  (this._msg_buffer_callbacks = null)));
            }),
            (t.prototype.callbacks = function (e) {
              return this.widget_manager.callbacks(e);
            }),
            (t.prototype.set = function (e, t, n) {
              var o = F.call(this, e, t, n);
              if (void 0 !== this._buffered_state_diff) {
                var r = this.changedAttributes() || {};
                if (this._state_lock)
                  for (
                    var i = 0, s = Object.keys(this._state_lock);
                    i < s.length;
                    i++
                  ) {
                    var l = s[i];
                    r[l] === this._state_lock[l] && delete r[l];
                  }
                this._buffered_state_diff = d(this._buffered_state_diff, r);
              }
              return o;
            }),
            (t.prototype.sync = function (e, t, n) {
              if ((void 0 === n && (n = {}), void 0 === this.comm))
                throw "Syncing error: no comm channel defined";
              var o = "patch" === e ? n.attrs : t.get_state(n.drop_defaults);
              if (this._state_lock)
                for (
                  var r = 0, i = Object.keys(this._state_lock);
                  r < i.length;
                  r++
                ) {
                  var s = i[r];
                  o[s] === this._state_lock[s] && delete o[s];
                }
              var l = this.serialize(o);
              if (Object.keys(l).length > 0) {
                var a = n.callbacks || this.callbacks();
                if (this._pending_msgs >= 1) {
                  switch (e) {
                    case "patch":
                      this._msg_buffer = d(this._msg_buffer || {}, l);
                      break;
                    case "update":
                    case "create":
                      this._msg_buffer = l;
                      break;
                    default:
                      throw "unrecognized syncing method";
                  }
                  this._msg_buffer_callbacks = a;
                } else this.send_sync_message(o, a);
              }
            }),
            (t.prototype.serialize = function (e) {
              for (
                var t = this.constructor.serializers || {},
                  n = 0,
                  o = Object.keys(e);
                n < o.length;
                n++
              ) {
                var r = o[n];
                try {
                  t[r] && t[r].serialize
                    ? (e[r] = t[r].serialize(e[r], this))
                    : (e[r] = JSON.parse(JSON.stringify(e[r]))),
                    e[r] && e[r].toJSON && (e[r] = e[r].toJSON());
                } catch (e) {
                  throw (
                    (console.error(
                      "Error serializing widget state attribute: ",
                      r
                    ),
                    e)
                  );
                }
              }
              return e;
            }),
            (t.prototype.send_sync_message = function (e, t) {
              var n = this;
              void 0 === t && (t = {});
              try {
                t.iopub = t.iopub || {};
                var o = t.iopub.status;
                t.iopub.status = function (e) {
                  n._handle_status(e), o && o(e);
                };
                var r = w(e);
                this.comm.send(
                  {
                    method: "update",
                    state: r.state,
                    buffer_paths: r.buffer_paths,
                  },
                  t,
                  {},
                  r.buffers
                ),
                  this._pending_msgs++;
              } catch (e) {
                console.error("Could not send widget sync message", e);
              }
            }),
            (t.prototype.save_changes = function (e) {
              if (this.comm_live) {
                var t = { patch: !0 };
                e && (t.callbacks = e),
                  this.save(this._buffered_state_diff, t),
                  (this._buffered_state_diff = {});
              }
            }),
            (t.prototype.on_some_change = function (e, t, n) {
              var o = this;
              this.on(
                "change",
                function () {
                  e.some(o.hasChanged, o) && t.apply(n, arguments);
                },
                this
              );
            }),
            (t.prototype.toJSON = function (e) {
              return "IPY_MODEL_" + this.model_id;
            }),
            (t._deserialize_state = function (e, t) {
              var n,
                o = this.serializers;
              if (o)
                for (var r in ((n = {}), e))
                  o[r] && o[r].deserialize
                    ? (n[r] = o[r].deserialize(e[r], t))
                    : (n[r] = e[r]);
              else n = e;
              return v(n);
            }),
            t
          );
        })(W.Model),
        H = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            q(t, e),
            (t.prototype.defaults = function () {
              return d(e.prototype.defaults.call(this), { _dom_classes: [] });
            }),
            (t.serializers = K(K({}, $.serializers), {
              layout: { deserialize: G },
              style: { deserialize: G },
            })),
            t
          );
        })($),
        Q = (function (e) {
          function t(t) {
            return e.call(this, t) || this;
          }
          return (
            q(t, e),
            (t.prototype.initialize = function (e) {
              var t = this;
              this.listenTo(this.model, "change", function () {
                var e = Object.keys(t.model.changedAttributes() || {});
                ("_view_count" === e[0] && 1 === e.length) || t.update();
              }),
                (this.options = e.options),
                this.once("remove", function () {
                  "number" == typeof t.model.get("_view_count") &&
                    (t.model.set("_view_count", t.model.get("_view_count") - 1),
                    t.model.save_changes());
                }),
                this.once("displayed", function () {
                  "number" == typeof t.model.get("_view_count") &&
                    (t.model.set("_view_count", t.model.get("_view_count") + 1),
                    t.model.save_changes());
                }),
                (this.displayed = new Promise(function (e, n) {
                  t.once("displayed", e);
                }));
            }),
            (t.prototype.update = function (e) {}),
            (t.prototype.render = function () {}),
            (t.prototype.create_child_view = function (e, t) {
              return (
                void 0 === t && (t = {}),
                (t = K({ parent: this }, t)),
                this.model.widget_manager
                  .create_view(e, t)
                  .catch(y("Could not create child view", !0))
              );
            }),
            (t.prototype.callbacks = function () {
              return this.model.callbacks(this);
            }),
            (t.prototype.send = function (e, t) {
              this.model.send(e, this.callbacks(), t);
            }),
            (t.prototype.touch = function () {
              this.model.save_changes(this.callbacks());
            }),
            (t.prototype.remove = function () {
              return (
                e.prototype.remove.call(this), this.trigger("remove"), this
              );
            }),
            t
          );
        })(I),
        X = (function (e) {
          function t(t) {
            var n = this,
              o = t.view;
            return delete t.view, ((n = e.call(this, t) || this)._view = o), n;
          }
          return (
            q(t, e),
            (t.prototype.dispose = function () {
              this.isDisposed ||
                (e.prototype.dispose.call(this),
                this._view && this._view.remove(),
                (this._view = null));
            }),
            (t.prototype.processMessage = function (t) {
              e.prototype.processMessage.call(this, t),
                this._view.processPhosphorMessage(t);
            }),
            t
          );
        })(U.Widget),
        Z = (function (e) {
          function t(t) {
            var n = this,
              o = t.view;
            return delete t.view, ((n = e.call(this, t) || this)._view = o), n;
          }
          return (
            q(t, e),
            (t.prototype.processMessage = function (t) {
              e.prototype.processMessage.call(this, t),
                this._view.processPhosphorMessage(t);
            }),
            (t.prototype.dispose = function () {
              this.isDisposed ||
                (e.prototype.dispose.call(this),
                this._view && this._view.remove(),
                (this._view = null));
            }),
            t
          );
        })(U.Panel),
        ee = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            q(t, e),
            (t.prototype.initialize = function (t) {
              var n = this;
              e.prototype.initialize.call(this, t),
                this.listenTo(
                  this.model,
                  "change:_dom_classes",
                  function (e, t) {
                    var o = e.previous("_dom_classes");
                    n.update_classes(o, t);
                  }
                ),
                (this.layoutPromise = Promise.resolve()),
                this.listenTo(this.model, "change:layout", function (e, t) {
                  n.setLayout(t, e.previous("layout"));
                }),
                (this.stylePromise = Promise.resolve()),
                this.listenTo(this.model, "change:style", function (e, t) {
                  n.setStyle(t, e.previous("style"));
                }),
                this.displayed.then(function () {
                  n.update_classes([], n.model.get("_dom_classes")),
                    n.setLayout(n.model.get("layout")),
                    n.setStyle(n.model.get("style"));
                }),
                this._comm_live_update(),
                this.listenTo(this.model, "comm_live_update", function () {
                  n._comm_live_update();
                });
            }),
            (t.prototype.setLayout = function (e, t) {
              var n = this;
              e &&
                (this.layoutPromise = this.layoutPromise.then(function (t) {
                  return (
                    t && (t.unlayout(), n.stopListening(t.model), t.remove()),
                    n
                      .create_child_view(e)
                      .then(function (e) {
                        return n.displayed.then(function () {
                          return (
                            e.trigger("displayed"),
                            n.listenTo(e.model, "change", function () {
                              R.MessageLoop.postMessage(
                                n.pWidget,
                                U.Widget.ResizeMessage.UnknownSize
                              );
                            }),
                            R.MessageLoop.postMessage(
                              n.pWidget,
                              U.Widget.ResizeMessage.UnknownSize
                            ),
                            e
                          );
                        });
                      })
                      .catch(y("Could not add LayoutView to DOMWidgetView", !0))
                  );
                }));
            }),
            (t.prototype.setStyle = function (e, t) {
              var n = this;
              e &&
                (this.stylePromise = this.stylePromise.then(function (t) {
                  return (
                    t && (t.unstyle(), n.stopListening(t.model), t.remove()),
                    n
                      .create_child_view(e)
                      .then(function (e) {
                        return n.displayed.then(function () {
                          return e.trigger("displayed"), e;
                        });
                      })
                      .catch(y("Could not add styleView to DOMWidgetView", !0))
                  );
                }));
            }),
            (t.prototype.update_classes = function (e, t, n) {
              void 0 === n && (n = this.el),
                f(e, t).map(function (e) {
                  n.classList
                    ? n.classList.remove(e)
                    : n.setAttribute(
                        "class",
                        n.getAttribute("class").replace(e, "")
                      );
                }),
                f(t, e).map(function (e) {
                  n.classList
                    ? n.classList.add(e)
                    : n.setAttribute(
                        "class",
                        n.getAttribute("class").concat(" ", e)
                      );
                });
            }),
            (t.prototype.update_mapped_classes = function (e, t, n) {
              var o = this.model.previous(t),
                r = e[o] ? e[o] : [],
                i = e[(o = this.model.get(t))] ? e[o] : [];
              this.update_classes(r, i, n || this.el);
            }),
            (t.prototype.set_mapped_classes = function (e, t, n) {
              var o = this.model.get(t),
                r = e[o] ? e[o] : [];
              this.update_classes([], r, n || this.el);
            }),
            (t.prototype._setElement = function (e) {
              this.pWidget && this.pWidget.dispose(),
                (this.$el = e instanceof T() ? e : T()(e)),
                (this.el = this.$el[0]),
                (this.pWidget = new X({ node: e, view: this }));
            }),
            (t.prototype.remove = function () {
              return (
                this.pWidget && this.pWidget.dispose(),
                e.prototype.remove.call(this)
              );
            }),
            (t.prototype.processPhosphorMessage = function (e) {
              switch (e.type) {
                case "after-attach":
                  this.trigger("displayed");
              }
            }),
            (t.prototype._comm_live_update = function () {
              this.model.comm_live
                ? this.pWidget.removeClass("jupyter-widgets-disconnected")
                : this.pWidget.addClass("jupyter-widgets-disconnected");
            }),
            t
          );
        })(Q),
        te = (function () {
          var e = function (t, n) {
            return (e =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (e, t) {
                  e.__proto__ = t;
                }) ||
              function (e, t) {
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
              })(t, n);
          };
          return function (t, n) {
            function o() {
              this.constructor = t;
            }
            e(t, n),
              (t.prototype =
                null === n
                  ? Object.create(n)
                  : ((o.prototype = n.prototype), new o()));
          };
        })(),
        ne = {
          align_content: null,
          align_items: null,
          align_self: null,
          border: null,
          bottom: null,
          display: null,
          flex: null,
          flex_flow: null,
          height: null,
          justify_content: null,
          justify_items: null,
          left: null,
          margin: null,
          max_height: null,
          max_width: null,
          min_height: null,
          min_width: null,
          overflow: null,
          overflow_x: null,
          overflow_y: null,
          order: null,
          padding: null,
          right: null,
          top: null,
          visibility: null,
          width: null,
          object_fit: null,
          object_position: null,
          grid_auto_columns: null,
          grid_auto_flow: null,
          grid_auto_rows: null,
          grid_gap: null,
          grid_template_rows: null,
          grid_template_columns: null,
          grid_template_areas: null,
          grid_row: null,
          grid_column: null,
          grid_area: null,
        },
        oe = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            te(t, e),
            (t.prototype.defaults = function () {
              return d(
                e.prototype.defaults.call(this),
                { _model_name: "LayoutModel", _view_name: "LayoutView" },
                ne
              );
            }),
            t
          );
        })($),
        re = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            te(t, e),
            (t.prototype.initialize = function (t) {
              (this._traitNames = []), e.prototype.initialize.call(this, t);
              for (var n = 0, o = Object.keys(ne); n < o.length; n++) {
                var r = o[n];
                this.registerTrait(r);
              }
            }),
            (t.prototype.registerTrait = function (e) {
              var t = this;
              if (
                (this._traitNames.push(e),
                "overflow_x" === e || "overflow_y" === e)
              )
                return (
                  this.listenTo(this.model, "change:" + e, function (n, o) {
                    t.handleOverflowChange(e, o);
                  }),
                  void this.handleOverflowChange(e, this.model.get(e))
                );
              this.listenTo(this.model, "change:" + e, function (n, o) {
                t.handleChange(e, o);
              }),
                this.handleChange(e, this.model.get(e));
            }),
            (t.prototype.css_name = function (e) {
              return e.replace(/_/g, "-");
            }),
            (t.prototype.handleChange = function (e, t) {
              var n = this.options.parent;
              n
                ? null === t
                  ? n.el.style.removeProperty(this.css_name(e))
                  : (n.el.style[this.css_name(e)] = t)
                : console.warn(
                    "Style not applied because a parent view does not exist"
                  );
            }),
            (t.prototype.handleOverflowChange = function (e, t) {
              var n = this.options.parent;
              n
                ? null === t
                  ? null === this.model.get("overflow") &&
                    n.el.style.removeProperty(this.css_name(e))
                  : (n.el.style[this.css_name(e)] = t)
                : console.warn(
                    "Style not applied because a parent view does not exist"
                  );
            }),
            (t.prototype.unlayout = function () {
              var e = this,
                t = this.options.parent;
              this._traitNames.forEach(function (n) {
                t
                  ? t.el.style.removeProperty(e.css_name(n))
                  : console.warn(
                      "Style not removed because a parent view does not exist"
                    );
              }, this);
            }),
            t
          );
        })(Q),
        ie = (function () {
          var e = function (t, n) {
            return (e =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (e, t) {
                  e.__proto__ = t;
                }) ||
              function (e, t) {
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
              })(t, n);
          };
          return function (t, n) {
            function o() {
              this.constructor = t;
            }
            e(t, n),
              (t.prototype =
                null === n
                  ? Object.create(n)
                  : ((o.prototype = n.prototype), new o()));
          };
        })(),
        se = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            ie(t, e),
            (t.prototype.defaults = function () {
              var t = this.constructor;
              return d(
                e.prototype.defaults.call(this),
                { _model_name: "StyleModel", _view_name: "StyleView" },
                Object.keys(t.styleProperties).reduce(function (e, n) {
                  return (e[n] = t.styleProperties[n].default), e;
                }, {})
              );
            }),
            (t.styleProperties = {}),
            t
          );
        })($),
        le = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            ie(t, e),
            (t.prototype.initialize = function (t) {
              (this._traitNames = []), e.prototype.initialize.call(this, t);
              for (
                var n = this.model.constructor,
                  o = 0,
                  r = Object.keys(n.styleProperties);
                o < r.length;
                o++
              ) {
                var i = r[o];
                this.registerTrait(i);
              }
              this.style();
            }),
            (t.prototype.registerTrait = function (e) {
              var t = this;
              this._traitNames.push(e),
                this.listenTo(this.model, "change:" + e, function (n, o) {
                  t.handleChange(e, o);
                });
            }),
            (t.prototype.handleChange = function (e, t) {
              var n = this.options.parent;
              if (n) {
                var o = this.model.constructor.styleProperties,
                  r = o[e].attribute,
                  i = o[e].selector,
                  s = i ? n.el.querySelectorAll(i) : [n.el];
                if (null === t)
                  for (var l = 0; l !== s.length; ++l)
                    s[l].style.removeProperty(r);
                else for (l = 0; l !== s.length; ++l) s[l].style[r] = t;
              } else
                console.warn(
                  "Style not applied because a parent view does not exist"
                );
            }),
            (t.prototype.style = function () {
              for (var e = 0, t = this._traitNames; e < t.length; e++) {
                var n = t[e];
                this.handleChange(n, this.model.get(n));
              }
            }),
            (t.prototype.unstyle = function () {
              var e = this.options.parent,
                t = this.model.constructor.styleProperties;
              this._traitNames.forEach(function (n) {
                if (e)
                  for (
                    var o = t[n].attribute,
                      r = t[n].selector,
                      i = r ? e.el.querySelectorAll(r) : [e.el],
                      s = 0;
                    s !== i.length;
                    ++s
                  )
                    i[s].style.removeProperty(o);
                else
                  console.warn(
                    "Style not removed because a parent view does not exist"
                  );
              }, this);
            }),
            t
          );
        })(Q);
      !(function (e) {
        !(function (e) {
          var t = (function () {
            function e(e) {
              (this.targets = Object.create(null)),
                (this.comms = Object.create(null)),
                (this.kernel = null),
                (this.jsServicesKernel = null),
                this.init_kernel(e);
            }
            return (
              (e.prototype.init_kernel = function (e) {
                (this.kernel = e), (this.jsServicesKernel = e);
              }),
              (e.prototype.new_comm = function (e, t, o, r, i, s) {
                return (
                  (l = this),
                  (a = void 0),
                  (c = function () {
                    var l, a;
                    return (function (e, t) {
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
                        (i = { next: l(0), throw: l(1), return: l(2) }),
                        "function" == typeof Symbol &&
                          (i[Symbol.iterator] = function () {
                            return this;
                          }),
                        i
                      );
                      function l(i) {
                        return function (l) {
                          return (function (i) {
                            if (n)
                              throw new TypeError(
                                "Generator is already executing."
                              );
                            for (; s; )
                              try {
                                if (
                                  ((n = 1),
                                  o &&
                                    (r =
                                      2 & i[0]
                                        ? o.return
                                        : i[0]
                                        ? o.throw ||
                                          ((r = o.return) && r.call(o), 0)
                                        : o.next) &&
                                    !(r = r.call(o, i[1])).done)
                                )
                                  return r;
                                switch (
                                  ((o = 0),
                                  r && (i = [2 & i[0], r.value]),
                                  i[0])
                                ) {
                                  case 0:
                                  case 1:
                                    r = i;
                                    break;
                                  case 4:
                                    return s.label++, { value: i[1], done: !1 };
                                  case 5:
                                    s.label++, (o = i[1]), (i = [0]);
                                    continue;
                                  case 7:
                                    (i = s.ops.pop()), s.trys.pop();
                                    continue;
                                  default:
                                    if (
                                      !(
                                        (r =
                                          (r = s.trys).length > 0 &&
                                          r[r.length - 1]) ||
                                        (6 !== i[0] && 2 !== i[0])
                                      )
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
                                i = t.call(e, s);
                              } catch (e) {
                                (i = [6, e]), (o = 0);
                              } finally {
                                n = r = 0;
                              }
                            if (5 & i[0]) throw i[1];
                            return { value: i[0] ? i[1] : void 0, done: !0 };
                          })([i, l]);
                        };
                      }
                    })(this, function (u) {
                      return (
                        (l = this.jsServicesKernel.createComm(e, i)),
                        (a = new n(l)),
                        this.register_comm(a),
                        a.open(t, o, r, s),
                        [2, a]
                      );
                    });
                  }),
                  new ((u = void 0) || (u = Promise))(function (e, t) {
                    function n(e) {
                      try {
                        r(c.next(e));
                      } catch (e) {
                        t(e);
                      }
                    }
                    function o(e) {
                      try {
                        r(c.throw(e));
                      } catch (e) {
                        t(e);
                      }
                    }
                    function r(t) {
                      var r;
                      t.done
                        ? e(t.value)
                        : ((r = t.value),
                          r instanceof u
                            ? r
                            : new u(function (e) {
                                e(r);
                              })).then(n, o);
                    }
                    r((c = c.apply(l, a || [])).next());
                  })
                );
                var l, a, u, c;
              }),
              (e.prototype.register_target = function (e, t) {
                var o = this,
                  r = this.jsServicesKernel.registerCommTarget(
                    e,
                    function (e, r) {
                      var i = new n(e);
                      o.register_comm(i);
                      try {
                        return t(i, r);
                      } catch (e) {
                        i.close(),
                          console.error(e),
                          console.error(
                            new Error("Exception opening new comm")
                          );
                      }
                    }
                  );
                this.targets[e] = r;
              }),
              (e.prototype.unregister_target = function (e, t) {
                this.targets[e].dispose(), delete this.targets[e];
              }),
              (e.prototype.register_comm = function (e) {
                return (
                  (this.comms[e.comm_id] = Promise.resolve(e)),
                  (e.kernel = this.kernel),
                  e.comm_id
                );
              }),
              e
            );
          })();
          e.CommManager = t;
          var n = (function () {
            function e(e) {
              (this.jsServicesComm = null),
                (this.kernel = null),
                (this.jsServicesComm = e);
            }
            return (
              Object.defineProperty(e.prototype, "comm_id", {
                get: function () {
                  return this.jsServicesComm.commId;
                },
                enumerable: !0,
                configurable: !0,
              }),
              Object.defineProperty(e.prototype, "target_name", {
                get: function () {
                  return this.jsServicesComm.targetName;
                },
                enumerable: !0,
                configurable: !0,
              }),
              (e.prototype.open = function (e, t, n, o) {
                var r = this.jsServicesComm.open(e, n, o);
                return this._hookupCallbacks(r, t), r.msg.header.msg_id;
              }),
              (e.prototype.send = function (e, t, n, o) {
                var r = this.jsServicesComm.send(e, n, o);
                return this._hookupCallbacks(r, t), r.msg.header.msg_id;
              }),
              (e.prototype.close = function (e, t, n, o) {
                var r = this.jsServicesComm.close(e, n, o);
                return this._hookupCallbacks(r, t), r.msg.header.msg_id;
              }),
              (e.prototype.on_msg = function (e) {
                this.jsServicesComm.onMsg = e.bind(this);
              }),
              (e.prototype.on_close = function (e) {
                this.jsServicesComm.onClose = e.bind(this);
              }),
              (e.prototype._hookupCallbacks = function (e, t) {
                t &&
                  ((e.onReply = function (e) {
                    t.shell && t.shell.reply && t.shell.reply(e);
                  }),
                  (e.onStdin = function (e) {
                    t.input && t.input(e);
                  }),
                  (e.onIOPub = function (e) {
                    if (t.iopub)
                      if (t.iopub.status && "status" === e.header.msg_type)
                        t.iopub.status(e);
                      else if (
                        t.iopub.clear_output &&
                        "clear_output" === e.header.msg_type
                      )
                        t.iopub.clear_output(e);
                      else if (t.iopub.output)
                        switch (e.header.msg_type) {
                          case "display_data":
                          case "execute_result":
                          case "stream":
                          case "error":
                            t.iopub.output(e);
                        }
                  }));
              }),
              e
            );
          })();
          e.Comm = n;
        })(e.services || (e.services = {}));
      })(Y || (Y = {}));
      var ae = (function () {
          function e(e, t, n) {
            this.initialize(e, t, n);
          }
          return (
            (e.prototype.initialize = function (e, t, n) {
              (this._handler_context = n || this),
                (this._models = []),
                (this.views = []),
                (this._create_view = e),
                (this._remove_view =
                  t ||
                  function (e) {
                    e.remove();
                  });
            }),
            (e.prototype.update = function (e, t, n, o) {
              var r = n || this._remove_view,
                i = t || this._create_view;
              o = o || this._handler_context;
              for (
                var s = 0;
                s < e.length &&
                !(s >= this._models.length || e[s] !== this._models[s]);
                s++
              );
              for (
                var l = s,
                  a = this.views.splice(l, this.views.length - l),
                  u = 0;
                u < a.length;
                u++
              )
                a[u].then(function (e) {
                  r.call(o, e);
                });
              for (; s < e.length; s++)
                this.views.push(Promise.resolve(i.call(o, e[s], s)));
              return (this._models = e.slice()), Promise.all(this.views);
            }),
            (e.prototype.remove = function () {
              var e = this;
              return Promise.all(this.views).then(function (t) {
                t.forEach(function (t) {
                  return e._remove_view.call(e._handler_context, t);
                }),
                  (e.views = []),
                  (e._models = []);
              });
            }),
            (e.prototype.dispose = function () {
              (this.views = null), (this._models = null);
            }),
            e
          );
        })(),
        ue = new i.Token("jupyter.extensions.jupyterWidgetRegistry");
    },
  },
]);
