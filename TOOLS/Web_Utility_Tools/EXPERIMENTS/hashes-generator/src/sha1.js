/*
CryptoJS v3.1.2
code.google.com/p/crypto-js
(c) 2009-2013 by Jeff Mott. All rights reserved.
code.google.com/p/crypto-js/wiki/License
*/
const CryptoJS =
  CryptoJS ||
  ((e, m) => {
    const p = {},
      j = (p.lib = {}),
      l = () => {},
      f = (j.Base = {
        extend(a) {
          l.prototype = this;
          const c = new l();
          a && c.mixIn(a);
          c.hasOwnProperty("init") ||
            (c.init = function () {
              c.$super.init.apply(this, arguments);
            });
          c.init.prototype = c;
          c.$super = this;
          return c;
        },
        create() {
          const a = this.extend();
          a.init.apply(a, arguments);
          return a;
        },
        init() {},
        mixIn(a) {
          for (const c in a) a.hasOwnProperty(c) && (this[c] = a[c]);
          a.hasOwnProperty("toString") && (this.toString = a.toString);
        },
        clone() {
          return this.init.prototype.extend(this);
        },
      }),
      n = (j.WordArray = f.extend({
        init(a, c) {
          a = this.words = a || [];
          this.sigBytes = c != m ? c : 4 * a.length;
        },
        toString(a) {
          return (a || h).stringify(this);
        },
        concat(a) {
          const c = this.words,
            q = a.words,
            d = this.sigBytes;
          a = a.sigBytes;
          this.clamp();
          if (d % 4)
            for (var b = 0; b < a; b++)
              c[(d + b) >>> 2] |=
                ((q[b >>> 2] >>> (24 - 8 * (b % 4))) & 255) <<
                (24 - 8 * ((d + b) % 4));
          else if (65535 < q.length)
            for (b = 0; b < a; b += 4) c[(d + b) >>> 2] = q[b >>> 2];
          else c.push.apply(c, q);
          this.sigBytes += a;
          return this;
        },
        clamp() {
          const a = this.words,
            c = this.sigBytes;
          a[c >>> 2] &= 4294967295 << (32 - 8 * (c % 4));
          a.length = e.ceil(c / 4);
        },
        clone() {
          const a = f.clone.call(this);
          a.words = this.words.slice(0);
          return a;
        },
        random(a) {
          for (var c = [], b = 0; b < a; b += 4)
            c.push((4294967296 * e.random()) | 0);
          return new n.init(c, a);
        },
      })),
      b = (p.enc = {}),
      h = (b.Hex = {
        stringify(a) {
          const c = a.words;
          a = a.sigBytes;
          for (var b = [], d = 0; d < a; d++) {
            const f = (c[d >>> 2] >>> (24 - 8 * (d % 4))) & 255;
            b.push((f >>> 4).toString(16));
            b.push((f & 15).toString(16));
          }
          return b.join("");
        },
        parse(a) {
          for (var c = a.length, b = [], d = 0; d < c; d += 2)
            b[d >>> 3] |= parseInt(a.substr(d, 2), 16) << (24 - 4 * (d % 8));
          return new n.init(b, c / 2);
        },
      }),
      g = (b.Latin1 = {
        stringify(a) {
          const c = a.words;
          a = a.sigBytes;
          for (var b = [], d = 0; d < a; d++)
            b.push(
              String.fromCharCode((c[d >>> 2] >>> (24 - 8 * (d % 4))) & 255)
            );
          return b.join("");
        },
        parse(a) {
          for (var c = a.length, b = [], d = 0; d < c; d++)
            b[d >>> 2] |= (a.charCodeAt(d) & 255) << (24 - 8 * (d % 4));
          return new n.init(b, c);
        },
      }),
      r = (b.Utf8 = {
        stringify(a) {
          try {
            return decodeURIComponent(escape(g.stringify(a)));
          } catch (c) {
            throw Error("Malformed UTF-8 data");
          }
        },
        parse(a) {
          return g.parse(unescape(encodeURIComponent(a)));
        },
      }),
      k = (j.BufferedBlockAlgorithm = f.extend({
        reset() {
          this._data = new n.init();
          this._nDataBytes = 0;
        },
        _append(a) {
          "string" == typeof a && (a = r.parse(a));
          this._data.concat(a);
          this._nDataBytes += a.sigBytes;
        },
        _process(a) {
          const c = this._data;
          const b = c.words;
          let d = c.sigBytes;
          const f = this.blockSize;
          var h = d / (4 * f);
          const h = a ? e.ceil(h) : e.max((h | 0) - this._minBufferSize, 0);
          a = h * f;
          d = e.min(4 * a, d);
          if (a) {
            for (var g = 0; g < a; g += f) this._doProcessBlock(b, g);
            g = b.splice(0, a);
            c.sigBytes -= d;
          }
          return new n.init(g, d);
        },
        clone() {
          const a = f.clone.call(this);
          a._data = this._data.clone();
          return a;
        },
        _minBufferSize: 0,
      }));
    j.Hasher = k.extend({
      cfg: f.extend(),
      init(a) {
        this.cfg = this.cfg.extend(a);
        this.reset();
      },
      reset() {
        k.reset.call(this);
        this._doReset();
      },
      update(a) {
        this._append(a);
        this._process();
        return this;
      },
      finalize(a) {
        a && this._append(a);
        return this._doFinalize();
      },
      blockSize: 16,
      _createHelper(a) {
        return (c, b) => {
          return new a.init(b).finalize(c);
        };
      },
      _createHmacHelper(a) {
        return (b, f) => {
          return new s.HMAC.init(a, f).finalize(b);
        };
      },
    });
    var s = (p.algo = {});
    return p;
  })(Math);
(() => {
  const e = CryptoJS;
  var m = e.lib;
  const p = m.WordArray;
  const j = m.Hasher;
  const l = [];

  const m = (e.algo.SHA1 = j.extend({
    _doReset() {
      this._hash = new p.init([
        1732584193, 4023233417, 2562383102, 271733878, 3285377520,
      ]);
    },
    _doProcessBlock(f, n) {
      for (
        var b = this._hash.words,
          h = b[0],
          g = b[1],
          e = b[2],
          k = b[3],
          j = b[4],
          a = 0;
        80 > a;
        a++
      ) {
        if (16 > a) l[a] = f[n + a] | 0;
        else {
          var c = l[a - 3] ^ l[a - 8] ^ l[a - 14] ^ l[a - 16];
          l[a] = (c << 1) | (c >>> 31);
        }
        c = ((h << 5) | (h >>> 27)) + j + l[a];
        c =
          20 > a
            ? c + (((g & e) | (~g & k)) + 1518500249)
            : 40 > a
            ? c + ((g ^ e ^ k) + 1859775393)
            : 60 > a
            ? c + (((g & e) | (g & k) | (e & k)) - 1894007588)
            : c + ((g ^ e ^ k) - 899497514);
        j = k;
        k = e;
        e = (g << 30) | (g >>> 2);
        g = h;
        h = c;
      }
      b[0] = (b[0] + h) | 0;
      b[1] = (b[1] + g) | 0;
      b[2] = (b[2] + e) | 0;
      b[3] = (b[3] + k) | 0;
      b[4] = (b[4] + j) | 0;
    },
    _doFinalize() {
      const f = this._data,
        e = f.words,
        b = 8 * this._nDataBytes,
        h = 8 * f.sigBytes;
      e[h >>> 5] |= 128 << (24 - (h % 32));
      e[(((h + 64) >>> 9) << 4) + 14] = Math.floor(b / 4294967296);
      e[(((h + 64) >>> 9) << 4) + 15] = b;
      f.sigBytes = 4 * e.length;
      this._process();
      return this._hash;
    },
    clone() {
      const e = j.clone.call(this);
      e._hash = this._hash.clone();
      return e;
    },
  }));

  e.SHA1 = j._createHelper(m);
  e.HmacSHA1 = j._createHmacHelper(m);
})();
