!(function (e) {
  var t = {};
  function r(n) {
    if (t[n]) return t[n].exports;
    var i = (t[n] = { i: n, l: !1, exports: {} });
    return e[n].call(i.exports, i, i.exports, r), (i.l = !0), i.exports;
  }
  (r.m = e),
    (r.c = t),
    (r.d = function (e, t, n) {
      r.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
    }),
    (r.r = function (e) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    }),
    (r.t = function (e, t) {
      if ((1 & t && (e = r(e)), 8 & t)) return e;
      if (4 & t && 'object' == typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (
        (r.r(n),
        Object.defineProperty(n, 'default', { enumerable: !0, value: e }),
        2 & t && 'string' != typeof e)
      )
        for (var i in e)
          r.d(
            n,
            i,
            function (t) {
              return e[t];
            }.bind(null, i),
          );
      return n;
    }),
    (r.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return r.d(t, 'a', t), t;
    }),
    (r.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (r.p = ''),
    r((r.s = 1));
})([
  function (e, t) {
    e.exports = require('fs');
  },
  function (e, t, r) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 });
    const n = r(2),
      i = r(6),
      s = Buffer.from('(function (exports, require, module, __filename, __dirname) { '),
      a = Buffer.from('\n});'),
      o = Buffer.from(
        '(function (exports, require, module, __filename, __dirname, process, global, Buffer) { return function (exports, require, module, __filename, __dirname) { ',
      ),
      c = Buffer.from('\n}.call(this, exports, require, module, __filename, __dirname); });'),
      u = Buffer.from('#!'),
      l = Buffer.from('\r')[0],
      f = Buffer.from('\n')[0],
      d = (e, t, r) => {
        if (n.hash(e) === t) return !0;
        if (r) {
          if (((i = u), e.slice(0, i.length).equals(i))) {
            let r = e.indexOf(f);
            return e[r - 1] === l && r--, n.hash(e.slice(r)) === t;
          }
          if (n.hash(Buffer.concat([s, e, a])) === t) return !0;
        }
        var i;
        return n.hash(Buffer.concat([o, e, c])) === t;
      },
      h = e => (e instanceof Buffer ? e : Buffer.from(e, 'utf-8'));
    var m;
    process.send &&
      ((m = process.send.bind(process)),
      process.on('message', e => {
        (async function (e) {
          switch (e.type) {
            case 0:
              try {
                const t = await i.readFileRaw(e.file);
                return { id: e.id, hash: n.hash(t) };
              } catch (t) {
                return { id: e.id };
              }
            case 1:
              try {
                return { id: e.id, hash: n.hash(h(e.data)) };
              } catch (t) {
                return { id: e.id };
              }
            case 2:
              try {
                const t = await i.readFileRaw(e.file);
                return { id: e.id, matches: d(t, e.expected, e.checkNode) };
              } catch (t) {
                return { id: e.id, matches: !1 };
              }
            case 3:
              try {
                return { id: e.id, matches: d(h(e.data), e.expected, e.checkNode) };
              } catch (t) {
                return { id: e.id, matches: !1 };
              }
          }
        })(e).then(m);
      }));
  },
  function (e, t, r) {
    const { hash: n } = r(3),
      i = Buffer.alloc(20);
    t.hash = e => (n(s(e), i), i.toString('hex'));
    const s = e =>
        (e => e.length >= 3 && 239 === e[0] && 187 === e[1] && 191 === e[2])(e)
          ? a(e.slice(3))
          : (e => e.length >= 2 && 255 === e[0] && 254 === e[1])(e)
          ? e.slice(2)
          : (e => e.length >= 2 && 254 === e[0] && 255 === e[1])(e)
          ? e.slice(2).swap16()
          : a(e),
      a = e => Buffer.from(e.toString('utf8'), 'utf16le');
  },
  function (e, t, r) {
    let n,
      i = null;
    function s() {
      return (
        (null !== i && i.buffer === n.memory.buffer) || (i = new Uint8Array(n.memory.buffer)), i
      );
    }
    let a = 0;
    function o(e, t) {
      const r = t(1 * e.length);
      return s().set(e, r / 1), (a = e.length), r;
    }
    (e.exports.hash = function (e, t) {
      try {
        var r = o(e, n.__wbindgen_malloc),
          i = a,
          c = o(t, n.__wbindgen_malloc),
          u = a;
        n.hash(r, i, c, u);
      } finally {
        t.set(s().subarray(c / 1, c / 1 + u)), n.__wbindgen_free(c, 1 * u);
      }
    }),
      (n = r(4));
  },
  function (e, t, r) {
    const n = r(5).join(__dirname, 'chromehash_bg.wasm'),
      i = r(0).readFileSync(n);
    const s = new WebAssembly.Module(i),
      a = new WebAssembly.Instance(s, {});
    e.exports = a.exports;
  },
  function (e, t) {
    e.exports = require('path');
  },
  function (e, t, r) {
    'use strict';
    var n =
        (this && this.__createBinding) ||
        (Object.create
          ? function (e, t, r, n) {
              void 0 === n && (n = r),
                Object.defineProperty(e, n, {
                  enumerable: !0,
                  get: function () {
                    return t[r];
                  },
                });
            }
          : function (e, t, r, n) {
              void 0 === n && (n = r), (e[n] = t[r]);
            }),
      i =
        (this && this.__setModuleDefault) ||
        (Object.create
          ? function (e, t) {
              Object.defineProperty(e, 'default', { enumerable: !0, value: t });
            }
          : function (e, t) {
              e.default = t;
            }),
      s =
        (this && this.__importStar) ||
        function (e) {
          if (e && e.__esModule) return e;
          var t = {};
          if (null != e)
            for (var r in e) 'default' !== r && Object.hasOwnProperty.call(e, r) && n(t, e, r);
          return i(t, e), t;
        };
    Object.defineProperty(t, '__esModule', { value: !0 }),
      (t.LocalAndRemoteFsUtils =
        t.RemoteFsThroughDapUtils =
        t.LocalFsUtils =
        t.IFsUtils =
        t.readFileRaw =
        t.writeFile =
        t.readfile =
        t.readdir =
        t.stat =
        t.moveFile =
        t.existsWithoutDeref =
        t.existsInjected =
        t.canAccess =
        t.fsModule =
          void 0);
    const a = s(r(0)),
      o = s(r(7));
    (t.fsModule = a),
      (t.canAccess = async function ({ access: e }, t) {
        if (!t) return !1;
        try {
          return await e(t), !0;
        } catch (e) {
          return !1;
        }
      }),
      (t.existsInjected = async function ({ stat: e }, t) {
        if (t)
          try {
            return await e(t);
          } catch (e) {
            return;
          }
      }),
      (t.existsWithoutDeref = async function ({ lstat: e }, t) {
        if (t)
          try {
            return await e(t);
          } catch (e) {
            return;
          }
      }),
      (t.moveFile = async function ({ copyFile: e, rename: t, unlink: r }, n, i) {
        try {
          await t(n, i);
        } catch (t) {
          await e(n, i), await r(n);
        }
      }),
      (t.stat = function (e) {
        return new Promise(t => {
          a.stat(e, (e, r) => t(e ? void 0 : r));
        });
      }),
      (t.readdir = function (e) {
        return new Promise(t => {
          a.readdir(e, 'utf8', async (e, r) => {
            t(e ? [] : r);
          });
        });
      }),
      (t.readfile = function (e) {
        return new Promise(t => {
          a.readFile(e, 'utf8', async (e, r) => {
            t(e ? '' : r);
          });
        });
      }),
      (t.writeFile = o.promisify(a.writeFile)),
      (t.readFileRaw = function (e) {
        return a.promises.readFile(e).catch(() => Buffer.alloc(0));
      }),
      (t.IFsUtils = Symbol('FsUtils'));
    class c {
      constructor(e) {
        this.fs = e;
      }
      realPath(e) {
        return this.fs.realpath(e);
      }
      async exists(e) {
        try {
          return await this.fs.access(e, a.constants.F_OK), !0;
        } catch (e) {
          return !1;
        }
      }
      readFile(e) {
        return this.fs.readFile(e);
      }
    }
    t.LocalFsUtils = c;
    class u {
      constructor(e) {
        this.dap = e;
      }
      async realPath() {
        throw new Error('not implemented');
      }
      async exists(e) {
        try {
          const { doesExists: t } = await this.dap.remoteFileExistsRequest({ localFilePath: e });
          return t;
        } catch (e) {
          return !1;
        }
      }
      readFile() {
        throw new Error('not implemented');
      }
    }
    t.RemoteFsThroughDapUtils = u;
    t.LocalAndRemoteFsUtils = class {
      constructor(e, t, r) {
        (this.remoteFilePrefix = e), (this.localFsUtils = t), (this.remoteFsUtils = r);
      }
      static create(e, t, r) {
        const n = new c(t);
        return void 0 !== e ? new this(e.toLowerCase(), n, new u(r)) : n;
      }
      async exists(e) {
        return this.selectFs(e).exists(e);
      }
      async readFile(e) {
        return this.selectFs(e).readFile(e);
      }
      async realPath(e) {
        return this.selectFs(e).realPath(e);
      }
      selectFs(e) {
        return e.toLowerCase().startsWith(this.remoteFilePrefix)
          ? this.remoteFsUtils
          : this.localFsUtils;
      }
    };
  },
  function (e, t) {
    e.exports = require('util');
  },
]);
