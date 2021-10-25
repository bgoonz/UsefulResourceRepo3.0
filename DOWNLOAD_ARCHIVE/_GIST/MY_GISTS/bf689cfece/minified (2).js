require = (function e(t, n, r) {
  function s(o, u) {
    if (!n[o]) {
      if (!t[o]) {
        const a = typeof require == "function" && require;
        if (!u && a) return a(o, !0);
        if (i) return i(o, !0);
        const f = new Error(`Cannot find module '${o}'`);
        throw ((f.code = "MODULE_NOT_FOUND"), f);
      }
      const l = (n[o] = { exports: {} });
      t[o][0].call(
        l.exports,
        e => {
          const n = t[o][1][e];
          return s(n ? n : e);
        },
        l,
        l.exports,
        e,
        t,
        n,
        r
      );
    }
    return n[o].exports;
  }
  var i = typeof require == "function" && require;
  for (let o = 0; o < r.length; o++) s(r[o]);
  return s;
})(
  {
    1: [
      (require, module, exports) => {
        class EventEmitter {
          constructor() {
            this._events = this._events || {};
            this._maxListeners = this._maxListeners || undefined;
          }

          setMaxListeners(n) {
            if (!isNumber(n) || n < 0 || isNaN(n))
              throw TypeError("n must be a positive number");
            this._maxListeners = n;
            return this;
          }

          emit(type) {
            let er;
            let handler;
            let len;
            let args;
            let i;
            let listeners;
            if (!this._events) this._events = {};
            if (type === "error") {
              if (
                !this._events.error ||
                (isObject(this._events.error) && !this._events.error.length)
              ) {
                er = arguments[1];
                if (er instanceof Error) {
                  throw er;
                }
                throw TypeError('Uncaught, unspecified "error" event.');
              }
            }
            handler = this._events[type];
            if (isUndefined(handler)) return false;
            if (isFunction(handler)) {
              switch (arguments.length) {
                case 1:
                  handler.call(this);
                  break;
                case 2:
                  handler.call(this, arguments[1]);
                  break;
                case 3:
                  handler.call(this, arguments[1], arguments[2]);
                  break;
                default:
                  len = arguments.length;
                  args = new Array(len - 1);
                  for (i = 1; i < len; i++) args[i - 1] = arguments[i];
                  handler.apply(this, args);
              }
            } else if (isObject(handler)) {
              len = arguments.length;
              args = new Array(len - 1);
              for (i = 1; i < len; i++) args[i - 1] = arguments[i];
              listeners = handler.slice();
              len = listeners.length;
              for (i = 0; i < len; i++) listeners[i].apply(this, args);
            }
            return true;
          }

          addListener(type, listener) {
            var m;
            if (!isFunction(listener))
              throw TypeError("listener must be a function");
            if (!this._events) this._events = {};
            if (this._events.newListener)
              this.emit(
                "newListener",
                type,
                isFunction(listener.listener) ? listener.listener : listener
              );
            if (!this._events[type]) this._events[type] = listener;
            else if (isObject(this._events[type]))
              this._events[type].push(listener);
            else this._events[type] = [this._events[type], listener];
            if (isObject(this._events[type]) && !this._events[type].warned) {
              var m;
              if (!isUndefined(this._maxListeners)) {
                m = this._maxListeners;
              } else {
                m = EventEmitter.defaultMaxListeners;
              }
              if (m && m > 0 && this._events[type].length > m) {
                this._events[type].warned = true;
                console.error(
                  "(node) warning: possible EventEmitter memory " +
                    "leak detected. %d listeners added. " +
                    "Use emitter.setMaxListeners() to increase limit.",
                  this._events[type].length
                );
                if (typeof console.trace === "function") {
                  console.trace();
                }
              }
            }
            return this;
          }

          once(type, listener) {
            if (!isFunction(listener))
              throw TypeError("listener must be a function");
            let fired = false;
            function g(...args) {
              this.removeListener(type, g);
              if (!fired) {
                fired = true;
                listener.apply(this, args);
              }
            }
            g.listener = listener;
            this.on(type, g);
            return this;
          }

          removeListener(type, listener) {
            let list;
            let position;
            let length;
            let i;
            if (!isFunction(listener))
              throw TypeError("listener must be a function");
            if (!this._events || !this._events[type]) return this;
            list = this._events[type];
            length = list.length;
            position = -1;
            if (
              list === listener ||
              (isFunction(list.listener) && list.listener === listener)
            ) {
              delete this._events[type];
              if (this._events.removeListener)
                this.emit("removeListener", type, listener);
            } else if (isObject(list)) {
              for (i = length; i-- > 0; ) {
                if (
                  list[i] === listener ||
                  (list[i].listener && list[i].listener === listener)
                ) {
                  position = i;
                  break;
                }
              }
              if (position < 0) return this;
              if (list.length === 1) {
                list.length = 0;
                delete this._events[type];
              } else {
                list.splice(position, 1);
              }
              if (this._events.removeListener)
                this.emit("removeListener", type, listener);
            }
            return this;
          }

          removeAllListeners(type) {
            let key;
            let listeners;
            if (!this._events) return this;
            if (!this._events.removeListener) {
              if (arguments.length === 0) this._events = {};
              else if (this._events[type]) delete this._events[type];
              return this;
            }
            if (arguments.length === 0) {
              for (key in this._events) {
                if (key === "removeListener") continue;
                this.removeAllListeners(key);
              }
              this.removeAllListeners("removeListener");
              this._events = {};
              return this;
            }
            listeners = this._events[type];
            if (isFunction(listeners)) {
              this.removeListener(type, listeners);
            } else {
              while (listeners.length)
                this.removeListener(type, listeners[listeners.length - 1]);
            }
            delete this._events[type];
            return this;
          }

          listeners(type) {
            let ret;
            if (!this._events || !this._events[type]) ret = [];
            else if (isFunction(this._events[type])) ret = [this._events[type]];
            else ret = this._events[type].slice();
            return ret;
          }
        }

        module.exports = EventEmitter;
        EventEmitter.EventEmitter = EventEmitter;
        EventEmitter.prototype._events = undefined;
        EventEmitter.prototype._maxListeners = undefined;
        EventEmitter.defaultMaxListeners = 10;
        EventEmitter.prototype.on = EventEmitter.prototype.addListener;
        EventEmitter.listenerCount = ({_events}, type) => {
          let ret;
          if (!_events || !_events[type]) ret = 0;
          else if (isFunction(_events[type])) ret = 1;
          else ret = _events[type].length;
          return ret;
        };
        function isFunction(arg) {
          return typeof arg === "function";
        }
        function isNumber(arg) {
          return typeof arg === "number";
        }
        function isObject(arg) {
          return typeof arg === "object" && arg !== null;
        }
        function isUndefined(arg) {
          return arg === void 0;
        }
      },
      {},
    ],
    2: [
      (require, module, exports) => {
        const oz = require("oscillators");
        module.exports = (c, r, t, f) => {
          return c + r * oz.sine(t, f);
        };
      },
      { oscillators: 15 },
    ],
    3: [
      (require, module, exports) => {
        module.exports = (m, btz) => {
          return beat => {
            let x = beat % m;
            if (x == 0) x = m;
            let i = 0;
            let r = false;
            for (i; i < btz.length; i++) {
              if (btz[i] == x) {
                r = true;
                break;
              }
            }
            return r;
          };
        };
      },
      {},
    ],
    4: [
      (require, module, exports) => {
        const funstance = require("funstance");
        module.exports = (delay, feedback, mix, bufferSize) => {
          var delay = Math.floor(delay);
          var feedback = feedback;
          var mix = mix;
          var bufferSize = bufferSize || delay * 2;
          if (bufferSize < delay * 2) bufferSize = delay * 2;
          const d = new Delay(delay, feedback, mix, bufferSize);
          const fn = funstance(d, Sample);
          return fn;
          function Delay(delay, feedback, mix, bufferSize) {
            this.feedback = feedback;
            this.mix = mix;
            this.delay = delay;
            this.buffer = new Float32Array(bufferSize);
            this.writeOffset = 0;
            this.endPoint = this.delay * 2;
            this.readOffset = this.delay + 1;
            this.readZero = 0;
          }
          function Sample(sample, _delay, feedback, mix) {
            let s = sample;
            if (feedback) this.feedback = feedback;
            if (mix) this.mix = mix;
            if (_delay && _delay !== this.delay) {
              _delay = Math.max(0, Math.floor(_delay));
              if (_delay * 2 > this.buffer.length) {
                const nb = new Float32Array(_delay * 2);
                nb.set(this.buffer, 0);
                this.buffer = nb;
              }
              this.delay = _delay;
              this.endPoint = this.delay * 2;
            }
            if (this.readOffset >= this.endPoint) this.readOffset = 0;
            s = this.buffer[this.readOffset];
            const write = sample + s * this.feedback;
            this.buffer[this.writeOffset] = write;
            this.writeOffset++;
            this.readOffset++;
            if (this.writeOffset >= this.endPoint) this.writeOffset = 0;
            return (sample + s) * this.mix;
          }
        };
      },
      { funstance: 5 },
    ],
    5: [
      (require, module, exports) => {
        module.exports = (obj, fn) => {
          const f = (...args) => {
            if (typeof fn !== "function") return;
            return fn.apply(obj, args);
          };
          function C() {}
          C.prototype = Object.getPrototypeOf(obj);
          f.__proto__ = new C();
          Object.getOwnPropertyNames(Function.prototype).forEach(key => {
            if (f[key] === undefined) {
              f.__proto__[key] = Function.prototype[key];
            }
          });
          Object.getOwnPropertyNames(obj).forEach(key => {
            f[key] = obj[key];
          });
          return f;
        };
      },
      {},
    ],
    6: [
      (require, module, exports) => {
        const nvelope = require("nvelope");
        module.exports = chrono;
        function chrono(_time) {
          if (!(this instanceof chrono)) return new chrono(_time);
          const self = this;
          this.ret = {};
          this.gens = [];
          this.time = _time || 0;
          this.start = _time || 0;
          this.set = (time, synth, mods) => {
            let x;
            self.gens.push((x = new generate(time, synth, mods)));
            return x;
          };
          this.tick = (t, s, i) => {
            self.time = t;
            gc(t);
            return self.gens.reduce((a, e) => {
              return a + e.signal(t, s, i);
            }, 0);
          };
          function gc(t) {
            self.gens = self.gens.filter(({start, dur}) => {
              if (start + dur < t) return false;
              else return true;
            });
          }
        }
        function generate(_time, synth, mod) {
          if (!(this instanceof generate))
            return new generate(_time, synth, mod);
          const self = this;
          this.start = _time;
          this.dur = mod.durations.reduce((acc, e) => {
            return acc + e;
          }, 0);
          this.synth = synth;
          this.env = nvelope(mod.curves, mod.durations);
          this.signal = (t, s, i) => {
            return self.synth(t, s, i) * self.env(t - self.start);
          };
        }
      },
      { nvelope: 13 },
    ],
    7: [
      (require, module, exports) => {
        const sync = require("jsynth-sync");
        module.exports = (bpm, sampleRate) => {
          const Timer = sync(bpm, sampleRate);
          Timer.beat = beat;
          return Timer;
          function beat(interval, rayray, fn) {
            let swag = 0;
            const swinger = x => {
              swag = x;
            };
            let master = undefined;
            return eys(interval, rayray, fn);
            function eys(interval, rayray, fn) {
              const y = rayray.length;
              if (!master) master = { rayray, beat: 0 };
              const timer = Timer.on(interval, (time, beat, xxx, swing) => {
                if (rayray === master.rayray) {
                  master.beat = beat;
                } else {
                }
                swing(swag);
                const i = rayray[(beat - 1) % y];
                if (i) {
                  if (Array.isArray(i)) {
                    const yn = i.length;
                    const intervaln = interval / yn;
                    const bat = eys(intervaln, i, fn);
                    bat._l = i.length;
                    bat.on("beat", b => {
                      if (b == bat._l) bat.emit("stop");
                    });
                  } else {
                    fn(time, master.beat, xxx, swinger);
                  }
                } else {
                  return;
                }
              });
              return timer;
            }
          }
        };
      },
      { "jsynth-sync": 8 },
    ],
    8: [
      (require, module, exports) => {
        const emitter = require("events").EventEmitter;
        module.exports = sync;
        const $ = module.exports;
        function sync(bpm, sampleRate) {
          if (!(this instanceof sync)) return new sync(bpm, sampleRate);
          this.bpm = bpm;
          this.beatsPerSecond = bpm / 60;
          this.sampleRate = sampleRate;
          this.spb = Math.round(sampleRate / this.beatsPerSecond);
          this.s = 0;
          this.t = 0;
          this.index = [];
          this.beatIndex = new Array();
        }
        $.prototype.clearAll = function (bpm, samplerate) {
          this.index = this.index.map(() => {
            return undefined;
          });
        };
        $.prototype.tick = function (t, i) {
          ++this.s;
          for (let n = 0; n < this.index.length; n++) {
            if (this.index[n]) this.index[n](t, i, this.s);
          }
        };
        $.prototype.off = function (i) {
          this.index.splice(i, 1, undefined);
        };
        $.prototype.on = function (beats, fn) {
          const i = Math.ceil(this.spb * beats);
          const l = this.index.length;
          const self = this;
          const off = () => {
            self.off(l);
          };
          let delta = 0;
          let skipNext = false;
          let skip = false;
          function swing(beat) {
            delta = Math.abs(Math.floor(self.spb * beat));
            skipNext = beat === 0 ? false : true;
          }
          const emit = new emitter();
          emit.on("stop", off);
          this.index.push(((b, fn, beats, off) => {
            return (t, a, f) => {
              if (f % (i + delta) == 0) {
                if (skip) {
                  skip = false;
                  return;
                }
                if (skipNext) {
                  skipNext = false;
                  skip = true;
                  if (delta >= i) {
                    skip = false;
                  }
                }
                fn.apply(fn, [t, ++b, off, swing]);
                emit.emit("beat", b);
              }
            };
          })(0, fn, beats, off));
          return emit;
        };
        function amilli(t) {
          return [Math.floor(t), (t % 1) * 1e3];
        }
      },
      { events: 1 },
    ],
    9: [
      (require, module, exports) => {
        module.exports = (context, fn, bufSize) => {
          if (typeof context === "function") {
            fn = context;
            context = new webkitAudioContext();
          }
          if (!bufSize) bufSize = 4096;
          const self = context.createScriptProcessor(bufSize, 1, 1);
          self.fn = fn;
          let tt = 0;
          let ii = 0;
          const rate = context.sampleRate;
          self.i = self.t = 0;
          window._SAMPLERATE = self.sampleRate = self.rate = context.sampleRate;
          self.duration = Infinity;
          self.recording = false;
          self.onaudioprocess = ({outputBuffer, inputBuffer}) => {
            const output = outputBuffer.getChannelData(0);
            const input = inputBuffer.getChannelData(0);
            self.tick(output, input);
          };
          self.tick = (output, input) => {
            for (let i = 0; i < output.length; i += 1) {
              tt = ii / rate;
              ii = ii + 1;
              output[i] = self.fn(tt, ii, input[i]);
            }
            return output;
          };
          self.stop = () => {
            self.disconnect();
            self.playing = false;
            if (self.recording) {
            }
          };
          self.play = opts => {
            if (self.playing) return;
            self.connect(self.context.destination);
            self.playing = true;
            return;
          };
          self.record = () => {};
          self.reset = () => {
            self.i = self.t = 0;
          };
          self.createSample = duration => {
            self.reset();
            const buffer = self.context.createBuffer(
              1,
              duration,
              self.context.sampleRate
            );
            const blob = buffer.getChannelData(0);
            self.tick(blob);
            return buffer;
          };
          return self;
        };
        function mergeArgs(opts, args) {
          Object.keys(opts || {}).forEach(key => {
            args[key] = opts[key];
          });
          return Object.keys(args).reduce((acc, key) => {
            const dash = key.length === 1 ? "-" : "--";
            return acc.concat(dash + key, args[key]);
          }, []);
        }
        function signed(n) {
          if (isNaN(n)) return 0;
          const b = 2 ** 15;
          return n > 0
            ? Math.min(b - 1, Math.floor(b * n - 1))
            : Math.max(-b, Math.ceil(b * n - 1));
        }
      },
      {},
    ],
    10: [
      (require, module, exports) => {
        const gus = require("jgauss");
        const oz = require("oscillators");
        const sqrtau = Math.sqrt(Math.PI * 2);
        const defs = {};
        defs.m = 1 / 12;
        defs.f = 440;
        defs.wave = "sine";
        module.exports = makeStrangles;
        function makeStrangles(opts) {
          if (!opts) opts = {};
          if (typeof opts == "number") {
            opts = { f: opts };
          }
          for (const i in defs) {
            if (!opts[i]) opts[i] = defs[i];
          }
          return new chimera(opts);
          function chimera(opts) {
            for (const i in opts) this[i] = opts[i];
            this.ring = function (t, u, s) {
              let x = 1;
              let y = 0;
              u = u || 0;
              s = s || 1;
              while (x <= s * 4.67 - 1) {
                y += oz[this.wave](t, this.f * x) * gus.general(x - 1, u, s);
                x *= 2 ** this.m;
              }
              return y;
            };
          }
        }
      },
      { jgauss: 11, oscillators: 15 },
    ],
    11: [
      (require, module, exports) => {
        const sqrtau = Math.sqrt(Math.PI * 2);
        module.exports.standard = standard;
        module.exports.general = general;
        function standard(x) {
          return Math.E ** (-(1 / 2) * (x ** 2)) / sqrtau;
        }
        function general(x, u, s) {
          return (1 / s) * standard((x - u) / s);
        }
      },
      {},
    ],
    12: [
      (require, module, exports) => {
        module.exports = pts => {
          return t => {
            for (var a = pts; a.length > 1; a = b) {
              for (var i = 0, b = [], j; i < a.length - 1; i++) {
                for (b[i] = [], j = 1; j < a[i].length; j++) {
                  b[i][j] = a[i][j] * (1 - t) + a[i + 1][j] * t;
                }
              }
            }
            return a[0][1];
          };
        };
      },
      {},
    ],
    13: [
      (require, module, exports) => {
        const amod = require("./amod.js");
        const tnorm = require("normalize-time");
        module.exports = (pts, durs) => {
          pts = pts.map(amod);
          const t = 0;
          const totalDuration = durs.reduce((e, i) => {
            return e + i;
          }, 0);
          const tdNormFN = tnorm(t, totalDuration);
          let s = 0;
          const end = t + totalDuration;
          const durFNS = durs.map((e, i) => {
            const x = tnorm(t + s, e);
            s += e;
            return x;
          });
          let dp = 0;
          const durpercent = durs.map((e, i) => {
            const x = e / totalDuration + dp;
            dp += e / totalDuration;
            return x;
          });
          let tn;
          let n;
          let i;
          let v = 0;
          let fn = 0;
          const envelope = t => {
            tn = tdNormFN(t);
            if (0 > tn || tn > 1) return 0;
            fn = durpercent.reduce((p, e, i, d) => {
              return (d[i - 1] || 0) <= tn && tn <= e ? i : p;
            }, 0);
            v = pts[fn](durFNS[fn](t));
            return v;
          };
          return envelope;
          function xenvelope(t, sustain) {
            tn = tdNormFN(t);
            if (0 >= tn || tn >= 1) return 0;
            if (tn > durpercent[fn]) fn = fn + 1 > pts.length - 1 ? 0 : fn + 1;
            v = pts[fn](durFNS[fn](t));
            return v;
          }
        };
      },
      { "./amod.js": 12, "normalize-time": 14 },
    ],
    14: [
      (require, module, exports) => {
        module.exports = (start, dur, min, max) => {
          if (!min) min = 0;
          if (!max) max = 1;
          const end = start + dur;
          const d = end - start;
          const r = max - min;
          return time => {
            x = min + ((time - start) * r) / d;
            if (x > 1) {
              if (time < end)
                x = Number(`.${x.toString().split(".").join("")}`);
            }
            return x;
          };
        };
      },
      {},
    ],
    15: [
      (require, module, exports) => {
        const OZ = module.exports;
        const tau = Math.PI * 2;
        OZ.sine = sine;
        OZ.saw = saw;
        OZ.saw_i = saw_i;
        OZ.triangle = triangle;
        OZ.triangle_s = triangle_s;
        OZ.square = square;
        function sine(t, f) {
          return Math.sin(t * tau * f);
        }
        function saw(t, f) {
          const n = ((t % (1 / f)) * f) % 1;
          return -1 + 2 * n;
        }
        function saw_i(t, f) {
          const n = ((t % (1 / f)) * f) % 1;
          return 1 - 2 * n;
        }
        function triangle(t, f) {
          const n = ((t % (1 / f)) * f) % 1;
          return n < 0.5 ? -1 + 2 * (2 * n) : 1 - 2 * (2 * n);
        }
        function triangle_s(t, f) {
          const n = ((t % (1 / f)) * f) % 1;
          const s = Math.abs(Math.sin(t));
          return n < s ? -1 + 2 * (2 * (n / s)) : 1 - 2 * (2 * (n / s));
        }
        function square(t, f) {
          return ((t % (1 / f)) * f) % 1 > 0.5 ? 1 : -1;
        }
      },
      {},
    ],
    16: [
      (require, module, exports) => {
        (function teoriaScope() {
          const teoria = {};
          function add(note, interval) {
            return [note[0] + interval[0], note[1] + interval[1]];
          }
          function sub(note, interval) {
            return [note[0] - interval[0], note[1] - interval[1]];
          }
          function mul(note, interval) {
            if (typeof interval === "number")
              return [note[0] * interval, note[1] * interval];
            else return [note[0] * interval[0], note[1] * interval[1]];
          }
          function sum(coord) {
            return coord[0] + coord[1];
          }
          const notes = {
            c: [0, 0],
            d: [-1, 2],
            e: [-2, 4],
            f: [1, -1],
            g: [0, 1],
            a: [-1, 3],
            b: [-2, 5],
            h: [-2, 5],
          };
          const intervals = {
            unison: [0, 0],
            second: [3, -5],
            third: [2, -3],
            fourth: [1, -1],
            fifth: [0, 1],
            sixth: [3, -4],
            seventh: [2, -2],
            octave: [1, 0],
          };
          const intervalFromFifth = [
            "second",
            "sixth",
            "third",
            "seventh",
            "fourth",
            "unison",
            "fifth",
          ];
          const intervalsIndex = [
            "unison",
            "second",
            "third",
            "fourth",
            "fifth",
            "sixth",
            "seventh",
            "octave",
            "ninth",
            "tenth",
            "eleventh",
            "twelfth",
            "thirteenth",
            "fourteenth",
            "fifteenth",
          ];
          const fifths = ["f", "c", "g", "d", "a", "e", "b"];
          const accidentals = ["bb", "b", "", "#", "x"];
          const sharp = [-4, 7];
          const A4 = add(notes.a, [4, 0]);
          const kDurations = {
            0.25: "longa",
            0.5: "breve",
            1: "whole",
            2: "half",
            4: "quarter",
            8: "eighth",
            16: "sixteenth",
            32: "thirty-second",
            64: "sixty-fourth",
            128: "hundred-twenty-eighth",
          };
          const kQualityLong = {
            P: "perfect",
            M: "major",
            m: "minor",
            A: "augmented",
            AA: "doubly augmented",
            d: "diminished",
            dd: "doubly diminished",
          };
          const kAlterations = {
            perfect: ["dd", "d", "P", "A", "AA"],
            minor: ["dd", "d", "m", "M", "A", "AA"],
          };
          const kSymbols = {
            min: ["m3", "P5"],
            m: ["m3", "P5"],
            "-": ["m3", "P5"],
            M: ["M3", "P5"],
            "": ["M3", "P5"],
            "+": ["M3", "A5"],
            aug: ["M3", "A5"],
            dim: ["m3", "d5"],
            o: ["m3", "d5"],
            maj: ["M3", "P5", "M7"],
            dom: ["M3", "P5", "m7"],
            ø: ["m3", "d5", "m7"],
            5: ["P5"],
          };
          const kChordShort = {
            major: "M",
            minor: "m",
            augmented: "aug",
            diminished: "dim",
            "half-diminished": "7b5",
            power: "5",
            dominant: "7",
          };
          const kStepNumber = {
            unison: 1,
            first: 1,
            second: 2,
            third: 3,
            fourth: 4,
            fifth: 5,
            sixth: 6,
            seventh: 7,
            octave: 8,
            ninth: 9,
            eleventh: 11,
            thirteenth: 13,
          };
          const kIntervalSolfege = {
            dd1: "daw",
            d1: "de",
            P1: "do",
            A1: "di",
            AA1: "dai",
            d2: "raw",
            m2: "ra",
            M2: "re",
            A2: "ri",
            AA2: "rai",
            d3: "maw",
            m3: "me",
            M3: "mi",
            A3: "mai",
            dd4: "faw",
            d4: "fe",
            P4: "fa",
            A4: "fi",
            AA4: "fai",
            dd5: "saw",
            d5: "se",
            P5: "so",
            A5: "si",
            AA5: "sai",
            d6: "law",
            m6: "le",
            M6: "la",
            A6: "li",
            AA6: "lai",
            d7: "taw",
            m7: "te",
            M7: "ti",
            A7: "tai",
            dd8: "daw",
            d8: "de",
            P8: "do",
            A8: "di",
            AA8: "dai",
          };
          function pad(str, ch, len) {
            for (; len > 0; len--) {
              str += ch;
            }
            return str;
          }
          teoria.note = (name, duration) => {
            if (typeof name === "string")
              return teoria.note.fromString(name, duration);
            else return new TeoriaNote(name, duration);
          };
          teoria.note.fromKey = key => {
            const octave = Math.floor((key - 4) / 12);
            const distance = key - octave * 12 - 4;
            const name = fifths[(2 * Math.round(distance / 2) + 1) % 7];
            const note = add(sub(notes[name], A4), [octave + 1, 0]);
            const diff = key - 49 - sum(mul(note, [12, 7]));
            return teoria.note(diff ? add(note, mul(sharp, diff)) : note);
          };
          teoria.note.fromFrequency = (fq, concertPitch) => {
            let key;
            let cents;
            let originalFq;
            concertPitch = concertPitch || 440;
            key =
              49 + 12 * ((Math.log(fq) - Math.log(concertPitch)) / Math.log(2));
            key = Math.round(key);
            originalFq = concertPitch * (2 ** ((key - 49) / 12));
            cents = 1200 * (Math.log(fq / originalFq) / Math.log(2));
            return { note: teoria.note.fromKey(key), cents };
          };
          teoria.note.fromMIDI = note => {
            return teoria.note.fromKey(note - 20);
          };
          teoria.note.fromString = (name, dur) => {
            const scientific = /^([a-h])(x|#|bb|b?)(-?\d*)/i;
            const helmholtz = /^([a-h])(x|#|bb|b?)([,\']*)$/i;
            let parser;
            let noteName;
            let octave;
            let accidental;
            let note;
            let lower;
            parser = name.match(scientific);
            if (parser && name === parser[0] && parser[3].length) {
              noteName = parser[1];
              octave = +parser[3];
            } else {
              name = name.replace(/\u2032/g, "'").replace(/\u0375/g, ",");
              parser = name.match(helmholtz);
              if (!parser || name !== parser[0])
                throw new Error("Invalid note format");
              noteName = parser[1];
              octave = parser[3];
              lower = noteName === noteName.toLowerCase();
              if (!octave.length) octave = lower ? 3 : 2;
              else if (octave.match(/^'+$/) && lower)
                octave = 3 + octave.length;
              else if (octave.match(/^,+$/) && !lower)
                octave = 2 - octave.length;
              else throw new Error("Format must respect the Helmholtz format");
            }
            accidental = parser[2].length ? parser[2].toLowerCase() : "";
            noteName = noteName.toLowerCase();
            note = [notes[noteName][0], notes[noteName][1]];
            note = add(note, [octave, 0]);
            note = add(note, mul(sharp, accidentals.indexOf(accidental) - 2));
            return new TeoriaNote(sub(note, A4), dur);
          };
          teoria.chord = (name, symbol) => {
            if (typeof name === "string") {
              let root;
              let octave;
              root = name.match(/^([a-h])(x|#|bb|b?)/i);
              if (root && root[0]) {
                octave = typeof symbol === "number" ? symbol.toString(10) : "4";
                return new TeoriaChord(
                  teoria.note(root[0].toLowerCase() + octave),
                  name.substr(root[0].length)
                );
              }
            } else if (name instanceof TeoriaNote)
              return new TeoriaChord(name, symbol);
            throw new Error("Invalid Chord. Couldn't find note name");
          };
          teoria.interval = (from, to) => {
            if (typeof from === "string") return teoria.interval.toCoord(from);
            if (typeof to === "string" && from instanceof TeoriaNote)
              return teoria.interval.from(from, teoria.interval.toCoord(to));
            if (to instanceof TeoriaInterval && from instanceof TeoriaNote)
              return teoria.interval.from(from, to);
            if (to instanceof TeoriaNote && from instanceof TeoriaNote)
              return teoria.interval.between(from, to);
            throw new Error("Invalid parameters");
          };
          teoria.interval.toCoord = simple => {
            const pattern = /^(AA|A|P|M|m|d|dd)(-?\d+)$/;
            let parser;
            let number;
            let coord;
            let quality;
            let lower;
            let octaves;
            let base;
            let type;
            let alt;
            let down;
            parser = simple.match(pattern);
            if (!parser) throw new Error("Invalid simple format interval");
            quality = parser[1];
            number = +parser[2];
            down = number < 0;
            number = down ? -number : number;
            lower = number > 8 ? (number % 7 ? number % 7 : 7) : number;
            octaves = (number - lower) / 7;
            base = intervals[intervalsIndex[lower - 1]];
            coord = add(base, [octaves, 0]);
            type = base[0] <= 1 ? "perfect" : "minor";
            if (
              (type === "perfect" && (quality === "M" || quality === "m")) ||
              (type === "minor" && quality === "P")
            ) {
              throw new Error("Invalid interval quality");
            }
            alt = kAlterations[type].indexOf(quality) - 2;
            coord = add(coord, mul(sharp, alt));
            coord = down ? mul(coord, -1) : coord;
            return new TeoriaInterval(coord);
          };
          teoria.interval.from = ({coord}, {coord}) => {
            return new TeoriaNote(add(coord, coord));
          };
          teoria.interval.between = ({coord}, {coord}) => {
            return new TeoriaInterval(sub(coord, coord));
          };
          teoria.interval.invert = sInterval => {
            return teoria.interval(sInterval).invert().toString();
          };
          teoria.scale = (tonic, scale) => {
            if (!(tonic instanceof TeoriaNote)) tonic = teoria.note(tonic);
            return new TeoriaScale(tonic, scale);
          };
          teoria.scale.scales = {};

          class TeoriaNote {
            constructor(coord, duration = {}) {
              this.duration = {
                value: duration.value || 4,
                dots: duration.dots || 0,
              };
              this.coord = coord;
            }

            octave() {
              return (
                this.coord[0] +
                A4[0] -
                notes[this.name()][0] +
                this.accidentalValue() * 4
              );
            }

            name() {
              return fifths[
                this.coord[1] + A4[1] - this.accidentalValue() * 7 + 1
              ];
            }

            accidentalValue() {
              return Math.round((this.coord[1] + A4[1] - 2) / 7);
            }

            accidental() {
              return accidentals[this.accidentalValue() + 2];
            }

            key(white) {
              if (white) return this.coord[0] * 7 + this.coord[1] * 4 + 29;
              else return this.coord[0] * 12 + this.coord[1] * 7 + 49;
            }

            midi() {
              return this.key() + 20;
            }

            fq(concertPitch = 440) {
              return concertPitch *
              (2 ** ((this.coord[0] * 12 + this.coord[1] * 7) / 12));
            }

            chroma() {
              const value = (sum(mul(this.coord, [12, 7])) - 3) % 12;
              return value < 0 ? value + 12 : value;
            }

            scale(scale) {
              return teoria.scale(this, scale);
            }

            interval(interval) {
              return teoria.interval(this, interval);
            }

            transpose(interval) {
              const note = teoria.interval(this, interval);
              this.coord = note.coord;
              return this;
            }

            chord(chord) {
              chord = chord in kChordShort ? kChordShort[chord] : chord;
              return new TeoriaChord(this, chord);
            }

            helmholtz() {
              const octave = this.octave();
              let name = this.name();
              name = octave < 3 ? name.toUpperCase() : name.toLowerCase();
              const padchar = octave < 3 ? "," : "'";
              const padcount = octave < 2 ? 2 - octave : octave - 3;
              return pad(name + this.accidental(), padchar, padcount);
            }

            scientific() {
              return (
                this.name().toUpperCase() + this.accidental() + this.octave()
              );
            }

            enharmonics(oneaccidental) {
              const key = this.key();
              const limit = oneaccidental ? 2 : 3;
              return ["m3", "m2", "m-2", "m-3"]
                .map(this.interval.bind(this))
                .filter(note => {
                  const acc = note.accidentalValue();
                  const diff = key - (note.key() - acc);
                  if (diff < limit && diff > -limit) {
                    note.coord = add(note.coord, mul(sharp, diff - acc));
                    return true;
                  }
                });
            }

            solfege(scale, showOctaves) {
              if (!(scale instanceof TeoriaScale)) {
                throw new Error("Invalid Scale");
              }
              let interval = scale.tonic.interval(this);
              let solfege;
              let stroke;
              let count;
              if (interval.direction() === "down") interval = interval.invert();
              if (showOctaves) {
                count = (this.key(true) - scale.tonic.key(true)) / 7;
                count = count >= 0 ? Math.floor(count) : -Math.ceil(-count);
                stroke = count >= 0 ? "'" : ",";
              }
              solfege = kIntervalSolfege[interval.simple(true).toString()];
              return showOctaves
                ? pad(solfege, stroke, Math.abs(count))
                : solfege;
            }

            durationName() {
              return kDurations[this.duration.value];
            }

            durationInSeconds(bpm, beatUnit) {
              const secs = 60 / bpm / (this.duration.value / 4) / (beatUnit / 4);
              return secs * 2 - secs / (2 ** this.duration.dots);
            }

            scaleDegree(scale) {
              let inter = scale.tonic.interval(this);
              if (
                inter.direction() === "down" ||
                (inter.coord[1] === 0 && inter.coord[0] !== 0)
              ) {
                inter = inter.invert();
              }
              inter = inter.simple(true).coord;
              return scale.scale.reduce((index, current, i) => {
                const coord = teoria.interval(current).coord;
                return coord[0] === inter[0] && coord[1] === inter[1]
                  ? i + 1
                  : index;
              }, 0);
            }

            toString(dont) {
              return (
                this.name() + this.accidental() + (dont ? "" : this.octave())
              );
            }
          }

          class TeoriaInterval {
            constructor(coord) {
              this.coord = coord;
            }

            name() {
              return intervalsIndex[this.number() - 1];
            }

            semitones() {
              return sum(mul(this.coord, [12, 7]));
            }

            number() {
              return Math.abs(this.value());
            }

            value() {
              const without = sub(
                  this.coord,
                  mul(sharp, Math.floor((this.coord[1] - 2) / 7) + 1)
                );

              let i;
              let val;
              i = intervalFromFifth[without[1] + 5];
              val = kStepNumber[i] + (without[0] - intervals[i][0]) * 7;
              return val > 0 ? val : val - 2;
            }

            type() {
              return intervals[this.base()][0] <= 1 ? "perfect" : "minor";
            }

            base() {
              let fifth = sub(this.coord, mul(sharp, this.qualityValue()))[1];
              let name;
              fifth = this.value() > 0 ? fifth + 5 : -(fifth - 5) % 7;
              fifth = fifth < 0 ? intervalFromFifth.length + fifth : fifth;
              name = intervalFromFifth[fifth];
              if (name === "unison" && this.number() >= 8) name = "octave";
              return name;
            }

            direction(dir) {
              if (dir) {
                const is = this.value() >= 1 ? "up" : "down";
                if (is !== dir) this.coord = mul(this.coord, -1);
                return this;
              } else return this.value() >= 1 ? "up" : "down";
            }

            simple(ignore) {
              let simple = intervals[this.base()];
              simple = add(simple, mul(sharp, this.qualityValue()));
              if (!ignore)
                simple = this.direction() === "down" ? mul(simple, -1) : simple;
              return new TeoriaInterval(simple);
            }

            isCompound() {
              return this.number() > 8;
            }

            octaves() {
              let without;
              let octaves;
              if (this.direction() === "up") {
                without = sub(this.coord, mul(sharp, this.qualityValue()));
                octaves = without[0] - intervals[this.base()][0];
              } else {
                without = sub(this.coord, mul(sharp, -this.qualityValue()));
                octaves = -(without[0] + intervals[this.base()][0]);
              }
              return octaves;
            }

            invert() {
              const i = this.base();
              const qual = this.qualityValue();
              const acc = this.type() === "minor" ? -(qual - 1) : -qual;
              let coord = intervals[intervalsIndex[9 - kStepNumber[i] - 1]];
              coord = add(coord, mul(sharp, acc));
              return new TeoriaInterval(coord);
            }

            quality(lng) {
              const quality = kAlterations[this.type()][this.qualityValue() + 2];
              return lng ? kQualityLong[quality] : quality;
            }

            qualityValue() {
              if (this.direction() === "down")
                return Math.floor((-this.coord[1] - 2) / 7) + 1;
              else return Math.floor((this.coord[1] - 2) / 7) + 1;
            }

            equal({coord}) {
              return this.coord[0] === coord[0] &&
              this.coord[1] === coord[1];
            }

            greater(interval) {
              const semi = this.semitones();
              const isemi = interval.semitones();
              return semi === isemi
                ? this.number() > interval.number()
                : semi > isemi;
            }

            smaller(interval) {
              return !this.equal(interval) && !this.greater(interval);
            }

            add({coord}) {
              return new TeoriaInterval(add(this.coord, coord));
            }

            toString(ignore) {
              const number = ignore ? this.number() : this.value();
              return this.quality() + number;
            }
          }

          class TeoriaChord {
            constructor(root, name = "") {
              this.name = root.name().toUpperCase() + root.accidental() + name;
              this.symbol = name;
              this.root = root;
              this.intervals = [];
              this._voicing = [];
              let i;
              let length;
              let c;
              let shortQ;
              let parsing = "quality";
              const additionals = [];
              const notes = ["P1", "M3", "P5", "m7", "M9", "P11", "M13"];
              let chordLength = 2;
              let bass;
              let symbol;
              function setChord(intervals) {
                for (let n = 0, chordl = intervals.length; n < chordl; n++) {
                  notes[n + 1] = intervals[n];
                }
                chordLength = intervals.length;
              }
              name = name.replace(/[,\s\(\)]/g, "");
              bass = name.split("/");
              if (bass.length === 2) {
                name = bass[0];
                bass = bass[1];
              } else {
                bass = null;
              }
              for (i = 0, length = name.length; i < length; i++) {
                if (!(c = name[i])) {
                  break;
                }
                switch (parsing) {
                  case "quality":
                    shortQ =
                      i + 3 <= length ? name.substr(i, 3).toLowerCase() : null;
                    symbol = shortQ in kSymbols ? shortQ : c in kSymbols ? c : "";
                    setChord(kSymbols[symbol]);
                    i += symbol.length - 1;
                    parsing = "extension";
                    break;
                  case "extension":
                    c =
                      c === "1" && name[i + 1]
                        ? parseFloat(name.substr(i, 2))
                        : parseFloat(c);
                    if (!isNaN(c) && c !== 6) {
                      chordLength = (c - 1) / 2;
                      if (chordLength !== Math.round(chordLength)) {
                        throw new Error(
                          `Invalid interval extension: ${c.toString(10)}`
                        );
                      }
                      if (symbol === "o" || symbol === "dim") {
                        notes[3] = "d7";
                      }
                      i += String(c).length - 1;
                    } else if (c === 6) {
                      notes[3] = "M6";
                      chordLength = chordLength < 3 ? 3 : chordLength;
                    } else {
                      i -= 1;
                    }
                    parsing = "alterations";
                    break;
                  case "alterations":
                    const alterations = name
                        .substr(i)
                        .split(/(#|b|add|maj|sus|M)/i);

                    let next;
                    let flat = false;
                    let sharp = false;
                    if (alterations.length === 1) {
                      throw new Error("Invalid alterations");
                    } else if (alterations[0].length !== 0) {
                      throw new Error(`Invalid token: '${alterations[0]}'`);
                    }
                    for (
                      let a = 1, aLength = alterations.length;
                      a < aLength;
                      a++
                    ) {
                      next = alterations[a + 1];
                      switch (alterations[a]) {
                        case "M":
                        case "Maj":
                        case "maj":
                          chordLength = chordLength < 3 ? 3 : chordLength;
                          if (next === "7") {
                            a++;
                          }
                          notes[3] = "M7";
                          break;
                        case "Sus":
                        case "sus":
                          let type = "P4";
                          if (next === "2" || next === "4") {
                            a++;
                            if (next === "2") {
                              type = "M2";
                            }
                          }
                          notes[1] = type;
                          break;
                        case "Add":
                        case "add":
                          if (next && !isNaN(+next)) {
                            if (next === "9") {
                              additionals.push("M9");
                            } else if (next === "11") {
                              additionals.push("P11");
                            } else if (next === "13") {
                              additionals.push("M13");
                            }
                            a += next.length;
                          }
                          break;
                        case "b":
                          flat = true;
                          break;
                        case "#":
                          sharp = true;
                          break;
                        default:
                          if (alterations[a].length === 0) {
                            break;
                          }
                          const token = +alterations[a];
                          let quality;
                          let intPos;
                          if (
                            isNaN(token) ||
                            String(token).length !== alterations[a].length
                          ) {
                            throw new Error(
                              `Invalid token: '${alterations[a]}'`
                            );
                          }
                          if (token === 6) {
                            if (sharp) {
                              notes[3] = "A6";
                            } else if (flat) {
                              notes[3] = "m6";
                            } else {
                              notes[3] = "M6";
                            }
                            chordLength = chordLength < 3 ? 3 : chordLength;
                            continue;
                          }
                          intPos = (token - 1) / 2;
                          if (chordLength < intPos) {
                            chordLength = intPos;
                          }
                          if (
                            token < 5 ||
                            token === 7 ||
                            intPos !== Math.round(intPos)
                          ) {
                            throw new Error(
                              `Invalid interval alteration: ${token}`
                            );
                          }
                          quality = notes[intPos][0];
                          if (sharp) {
                            if (quality === "d") {
                              quality = "m";
                            } else if (quality === "m") {
                              quality = "M";
                            } else if (quality === "M" || quality === "P") {
                              quality = "A";
                            }
                          } else if (flat) {
                            if (quality === "A") {
                              quality = "M";
                            } else if (quality === "M") {
                              quality = "m";
                            } else if (quality === "m" || quality === "P") {
                              quality = "d";
                            }
                          }
                          sharp = flat = false;
                          notes[intPos] = quality + token;
                          break;
                      }
                    }
                    parsing = "ended";
                    break;
                }
                if (parsing === "ended") {
                  break;
                }
              }
              if (bass && bass === "9") {
                additionals.push("M9");
                bass = null;
              }
              this.intervals = notes
                .slice(0, chordLength + 1)
                .concat(additionals)
                .map(i => {
                  return teoria.interval(i);
                });
              for (i = 0, length = this.intervals.length; i < length; i++) {
                this._voicing[i] = this.intervals[i];
              }
              if (bass) {
                const intervals = this.intervals;
                let bassInterval;
                let note;
                note = teoria.note(bass + (root.octave() + 1));
                bassInterval = teoria.interval.between(root, note);
                bass = bassInterval.simple();
                bassInterval = bassInterval.invert();
                bassInterval.direction("down");
                this._voicing = [bassInterval];
                for (i = 0; i < length; i++) {
                  if (intervals[i].simple().equal(bass)) continue;
                  this._voicing.push(intervals[i]);
                }
              }
            }

            notes() {
              const voicing = this.voicing();
              const notes = [];
              for (let i = 0, length = voicing.length; i < length; i++) {
                notes.push(teoria.interval.from(this.root, voicing[i]));
              }
              return notes;
            }

            voicing(voicing) {
              if (!voicing) {
                return this._voicing;
              }
              this._voicing = [];
              for (let i = 0, length = voicing.length; i < length; i++) {
                this._voicing[i] = teoria.interval(voicing[i]);
              }
              return this;
            }

            resetVoicing() {
              this._voicing = this.intervals;
            }

            dominant(additional = "") {
              return new TeoriaChord(this.root.interval("P5"), additional);
            }

            subdominant(additional = "") {
              return new TeoriaChord(this.root.interval("P4"), additional);
            }

            parallel(additional = "") {
              const quality = this.quality();
              if (
                this.chordType() !== "triad" ||
                quality === "diminished" ||
                quality === "augmented"
              ) {
                throw new Error("Only major/minor triads have parallel chords");
              }
              if (quality === "major") {
                return new TeoriaChord(this.root.interval("m3", "down"), "m");
              } else {
                return new TeoriaChord(this.root.interval("m3", "up"));
              }
            }

            quality() {
              let third;
              let fifth;
              let seventh;
              const intervals = this.intervals;
              for (let i = 0, length = intervals.length; i < length; i++) {
                if (intervals[i].number() === 3) {
                  third = intervals[i];
                } else if (intervals[i].number() === 5) {
                  fifth = intervals[i];
                } else if (intervals[i].number() === 7) {
                  seventh = intervals[i];
                }
              }
              if (!third) {
                return;
              }
              third = third.direction() === "down" ? third.invert() : third;
              third = third.simple().toString();
              if (fifth) {
                fifth = fifth.direction === "down" ? fifth.invert() : fifth;
                fifth = fifth.simple().toString();
              }
              if (seventh) {
                seventh =
                  seventh.direction === "down" ? seventh.invert() : seventh;
                seventh = seventh.simple().toString();
              }
              if (third === "M3") {
                if (fifth === "A5") {
                  return "augmented";
                } else if (fifth === "P5") {
                  return seventh === "m7" ? "dominant" : "major";
                }
                return "major";
              } else if (third === "m3") {
                if (fifth === "P5") {
                  return "minor";
                } else if (fifth === "d5") {
                  return seventh === "m7" ? "half-diminished" : "diminished";
                }
                return "minor";
              }
            }

            chordType() {
              const length = this.intervals.length;
              let interval;
              let has;
              let invert;
              let i;
              let name;
              if (length === 2) {
                return "dyad";
              } else if (length === 3) {
                has = { first: false, third: false, fifth: false };
                for (i = 0; i < length; i++) {
                  interval = this.intervals[i];
                  invert = interval.invert();
                  if (interval.base() in has) {
                    has[interval.base()] = true;
                  } else if (invert.base() in has) {
                    has[invert.base()] = true;
                  }
                }
                name =
                  has.first && has.third && has.fifth ? "triad" : "trichord";
              } else if (length === 4) {
                has = {
                  first: false,
                  third: false,
                  fifth: false,
                  seventh: false,
                };
                for (i = 0; i < length; i++) {
                  interval = this.intervals[i];
                  invert = interval.invert();
                  if (interval.base() in has) {
                    has[interval.base()] = true;
                  } else if (invert.base() in has) {
                    has[invert.base()] = true;
                  }
                }
                if (has.first && has.third && has.fifth && has.seventh) {
                  name = "tetrad";
                }
              }
              return name || "unknown";
            }

            get(interval) {
              if (typeof interval === "string" && interval in kStepNumber) {
                const intervals = this.intervals;
                let i;
                let length;
                interval = kStepNumber[interval];
                for (i = 0, length = intervals.length; i < length; i++) {
                  if (intervals[i].number() === interval) {
                    return teoria.interval.from(this.root, intervals[i]);
                  }
                }
                return null;
              } else {
                throw new Error("Invalid interval name");
              }
            }

            interval(interval) {
              return new TeoriaChord(this.root.interval(interval), this.symbol);
            }

            transpose(interval) {
              this.root.transpose(interval);
              this.name =
                this.root.name().toUpperCase() +
                this.root.accidental() +
                this.symbol;
              return this;
            }

            toString() {
              return this.name;
            }
          }

          class TeoriaScale {
            constructor(tonic, scale) {
              let scaleName;
              let i;
              if (!(tonic instanceof TeoriaNote)) {
                throw new Error("Invalid Tonic");
              }
              if (typeof scale === "string") {
                scaleName = scale;
                scale = teoria.scale.scales[scale];
                if (!scale) throw new Error("Invalid Scale");
              } else {
                for (i in teoria.scale.scales) {
                  if (teoria.scale.scales.hasOwnProperty(i)) {
                    if (teoria.scale.scales[i].toString() === scale.toString()) {
                      scaleName = i;
                      break;
                    }
                  }
                }
              }
              this.name = scaleName;
              this.tonic = tonic;
              this.scale = scale;
            }

            notes() {
              const notes = [];
              for (let i = 0, length = this.scale.length; i < length; i++) {
                notes.push(teoria.interval(this.tonic, this.scale[i]));
              }
              return notes;
            }

            simple() {
              return this.notes().map(n => {
                return n.toString(true);
              });
            }

            type() {
              const length = this.scale.length - 2;
              if (length < 8) {
                return `${["di", "tri", "tetra", "penta", "hexa", "hepta", "octa"][
  length
]}tonic`;
              }
            }

            get(i) {
              i =
                typeof i === "string" && i in kStepNumber ? kStepNumber[i] : i;
              return this.tonic.interval(this.scale[i - 1]);
            }

            solfege(index, showOctaves) {
              if (index) return this.get(index).solfege(this, showOctaves);
              return this.notes().map(function (n) {
                return n.solfege(this, showOctaves);
              });
            }

            interval(interval) {
              return new TeoriaScale(this.tonic.interval(interval), this.scale);
            }

            transpose(interval) {
              const scale = this.interval(interval);
              this.scale = scale.scale;
              this.tonic = scale.tonic;
              return this;
            }
          }

          teoria.scale.scales.ionian = teoria.scale.scales.major = [
            "P1",
            "M2",
            "M3",
            "P4",
            "P5",
            "M6",
            "M7",
          ];
          teoria.scale.scales.dorian = [
            "P1",
            "M2",
            "m3",
            "P4",
            "P5",
            "M6",
            "m7",
          ];
          teoria.scale.scales.phrygian = [
            "P1",
            "m2",
            "m3",
            "P4",
            "P5",
            "m6",
            "m7",
          ];
          teoria.scale.scales.lydian = [
            "P1",
            "M2",
            "M3",
            "A4",
            "P5",
            "M6",
            "M7",
          ];
          teoria.scale.scales.mixolydian = [
            "P1",
            "M2",
            "M3",
            "P4",
            "P5",
            "M6",
            "m7",
          ];
          teoria.scale.scales.aeolian = teoria.scale.scales.minor = [
            "P1",
            "M2",
            "m3",
            "P4",
            "P5",
            "m6",
            "m7",
          ];
          teoria.scale.scales.locrian = [
            "P1",
            "m2",
            "m3",
            "P4",
            "d5",
            "m6",
            "m7",
          ];
          teoria.scale.scales.majorpentatonic = ["P1", "M2", "M3", "P5", "M6"];
          teoria.scale.scales.minorpentatonic = ["P1", "m3", "P4", "P5", "m7"];
          teoria.scale.scales.chromatic =
            teoria.scale.scales.harmonicchromatic = [
              "P1",
              "m2",
              "M2",
              "m3",
              "M3",
              "P4",
              "A4",
              "P5",
              "m6",
              "M6",
              "m7",
              "M7",
            ];
          teoria.TeoriaNote = TeoriaNote;
          teoria.TeoriaChord = TeoriaChord;
          teoria.TeoriaScale = TeoriaScale;
          teoria.TeoriaInterval = TeoriaInterval;
          if (typeof exports !== "undefined") {
            if (typeof module !== "undefined" && module.exports)
              exports = module.exports = teoria;
            exports.teoria = teoria;
          } else if (typeof this !== "undefined") this.teoria = teoria;
          else if (typeof window !== "undefined") window.teoria = teoria;
        })();
      },
      {},
    ],
    cheatcode: [
      (require, module, exports) => {
        window.time = 0;
        context = AudioContext;
        master = new context();
        SAMPLERATE = samplerate = master.sampleRate;
        jsynth = require("jsynth");
        nvelope = require("nvelope");
        sync = require("jsynth-zerone");
        oz = require("oscillators");
        jdelay = require("jdelay");
        amod = require("amod");
        chronotrigger = require("jigger");
        clang = require("meffisto");
        beatmath = require("beatmath");
        teoria = require("teoria");
        specialX = (t, s, i) => {
          return 0;
        };
        generator = new chronotrigger();
        music = (time, sample, input) => {
          window.time = time;
          timer.tick.call(timer, time);
          return (
            generator.tick(time, sample, input) + specialX(time, sample, input)
          );
        };
        timer = sync(60, master.sampleRate);
        dsp = (t, s, i) => {
          time = t;
          return music(t, s, i);
        };
        synth = jsynth(master, dsp);
        synth.connect(master.destination);
      },
      {
        amod: 2,
        beatmath: 3,
        jdelay: 4,
        jigger: 6,
        jsynth: 9,
        "jsynth-zerone": 7,
        meffisto: 10,
        nvelope: 13,
        oscillators: 15,
        teoria: 16,
      },
    ],
  },
  {},
  []
);
require("cheatcode");
var x = 2;
ttt = false;
specialX = t => {
  if (t > 12 * x) x += 2;
  if (!ttt) ttt = t;
  t *= 72 / 60 / 2;
  t = ((t * 5) % 12) % t;
  const a = amod(0.35, 0.15, t, 3);
  return (
    0 +
    oz.sine(
      t,
      120 + oz.triangle(t, amod(0.5, 0.21, t, 1 / 4) * oz.triangle(t, 2))
    ) *
      a +
    oz.sine(t, 360 + amod(0.5, 0.21, t, 1 / 6) * oz.triangle(t, 3)) * a
  );
};
