"use strict";
cc._RF.push(module, '53760bD7U5LuJmcwzgaRjym', 'MGOBE');
// Script/MGOBE.js

"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e23) { throw _e23; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e24) { didErr = true; err = _e24; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*v1.3.8_1*/
!function (e, t) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? exports.MGOBE = t() : e.MGOBE = t();
}({}, function () {
  return function (e) {
    var t = {};

    function n(r) {
      if (t[r]) return t[r].exports;
      var i = t[r] = {
        i: r,
        l: !1,
        exports: {}
      };
      return e[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports;
    }

    return n.m = e, n.c = t, n.d = function (e, t, r) {
      n.o(e, t) || Object.defineProperty(e, t, {
        enumerable: !0,
        get: r
      });
    }, n.r = function (e) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
      }), Object.defineProperty(e, "__esModule", {
        value: !0
      });
    }, n.t = function (e, t) {
      if (1 & t && (e = n(e)), 8 & t) return e;
      if (4 & t && "object" == _typeof(e) && e && e.__esModule) return e;
      var r = Object.create(null);
      if (n.r(r), Object.defineProperty(r, "default", {
        enumerable: !0,
        value: e
      }), 2 & t && "string" != typeof e) for (var i in e) {
        n.d(r, i, function (t) {
          return e[t];
        }.bind(null, i));
      }
      return r;
    }, n.n = function (e) {
      var t = e && e.__esModule ? function () {
        return e["default"];
      } : function () {
        return e;
      };
      return n.d(t, "a", t), t;
    }, n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }, n.p = "", n(n.s = 14);
  }([function (e, t, n) {
    var r;

    e.exports = r = r || function (e, t) {
      var n = Object.create || function () {
        function e() {}

        return function (t) {
          var n;
          return e.prototype = t, n = new e(), e.prototype = null, n;
        };
      }(),
          r = {},
          i = r.lib = {},
          o = i.Base = {
        extend: function extend(e) {
          var t = n(this);
          return e && t.mixIn(e), t.hasOwnProperty("init") && this.init !== t.init || (t.init = function () {
            t.$super.init.apply(this, arguments);
          }), t.init.prototype = t, t.$super = this, t;
        },
        create: function create() {
          var e = this.extend();
          return e.init.apply(e, arguments), e;
        },
        init: function init() {},
        mixIn: function mixIn(e) {
          for (var t in e) {
            e.hasOwnProperty(t) && (this[t] = e[t]);
          }

          e.hasOwnProperty("toString") && (this.toString = e.toString);
        },
        clone: function clone() {
          return this.init.prototype.extend(this);
        }
      },
          s = i.WordArray = o.extend({
        init: function init(e, t) {
          e = this.words = e || [], this.sigBytes = null != t ? t : 4 * e.length;
        },
        toString: function toString(e) {
          return (e || _).stringify(this);
        },
        concat: function concat(e) {
          var t = this.words,
              n = e.words,
              r = this.sigBytes,
              i = e.sigBytes;
          if (this.clamp(), r % 4) for (var o = 0; o < i; o++) {
            var s = n[o >>> 2] >>> 24 - o % 4 * 8 & 255;
            t[r + o >>> 2] |= s << 24 - (r + o) % 4 * 8;
          } else for (o = 0; o < i; o += 4) {
            t[r + o >>> 2] = n[o >>> 2];
          }
          return this.sigBytes += i, this;
        },
        clamp: function clamp() {
          var t = this.words,
              n = this.sigBytes;
          t[n >>> 2] &= 4294967295 << 32 - n % 4 * 8, t.length = e.ceil(n / 4);
        },
        clone: function clone() {
          var e = o.clone.call(this);
          return e.words = this.words.slice(0), e;
        },
        random: function random(t) {
          for (var n, r = [], i = function i(t) {
            t = t;
            var n = 987654321,
                r = 4294967295;
            return function () {
              var i = ((n = 36969 * (65535 & n) + (n >> 16) & r) << 16) + (t = 18e3 * (65535 & t) + (t >> 16) & r) & r;
              return i /= 4294967296, (i += .5) * (e.random() > .5 ? 1 : -1);
            };
          }, o = 0; o < t; o += 4) {
            var a = i(4294967296 * (n || e.random()));
            n = 987654071 * a(), r.push(4294967296 * a() | 0);
          }

          return new s.init(r, t);
        }
      }),
          a = r.enc = {},
          _ = a.Hex = {
        stringify: function stringify(e) {
          for (var t = e.words, n = e.sigBytes, r = [], i = 0; i < n; i++) {
            var o = t[i >>> 2] >>> 24 - i % 4 * 8 & 255;
            r.push((o >>> 4).toString(16)), r.push((15 & o).toString(16));
          }

          return r.join("");
        },
        parse: function parse(e) {
          for (var t = e.length, n = [], r = 0; r < t; r += 2) {
            n[r >>> 3] |= parseInt(e.substr(r, 2), 16) << 24 - r % 8 * 4;
          }

          return new s.init(n, t / 2);
        }
      },
          E = a.Latin1 = {
        stringify: function stringify(e) {
          for (var t = e.words, n = e.sigBytes, r = [], i = 0; i < n; i++) {
            var o = t[i >>> 2] >>> 24 - i % 4 * 8 & 255;
            r.push(String.fromCharCode(o));
          }

          return r.join("");
        },
        parse: function parse(e) {
          for (var t = e.length, n = [], r = 0; r < t; r++) {
            n[r >>> 2] |= (255 & e.charCodeAt(r)) << 24 - r % 4 * 8;
          }

          return new s.init(n, t);
        }
      },
          l = a.Utf8 = {
        stringify: function stringify(e) {
          try {
            return decodeURIComponent(escape(E.stringify(e)));
          } catch (e) {
            throw new Error("Malformed UTF-8 data");
          }
        },
        parse: function parse(e) {
          return E.parse(unescape(encodeURIComponent(e)));
        }
      },
          d = i.BufferedBlockAlgorithm = o.extend({
        reset: function reset() {
          this._data = new s.init(), this._nDataBytes = 0;
        },
        _append: function _append(e) {
          "string" == typeof e && (e = l.parse(e)), this._data.concat(e), this._nDataBytes += e.sigBytes;
        },
        _process: function _process(t) {
          var n = this._data,
              r = n.words,
              i = n.sigBytes,
              o = this.blockSize,
              a = i / (4 * o),
              _ = (a = t ? e.ceil(a) : e.max((0 | a) - this._minBufferSize, 0)) * o,
              E = e.min(4 * _, i);

          if (_) {
            for (var l = 0; l < _; l += o) {
              this._doProcessBlock(r, l);
            }

            var d = r.splice(0, _);
            n.sigBytes -= E;
          }

          return new s.init(d, E);
        },
        clone: function clone() {
          var e = o.clone.call(this);
          return e._data = this._data.clone(), e;
        },
        _minBufferSize: 0
      }),
          u = (i.Hasher = d.extend({
        cfg: o.extend(),
        init: function init(e) {
          this.cfg = this.cfg.extend(e), this.reset();
        },
        reset: function reset() {
          d.reset.call(this), this._doReset();
        },
        update: function update(e) {
          return this._append(e), this._process(), this;
        },
        finalize: function finalize(e) {
          return e && this._append(e), this._doFinalize();
        },
        blockSize: 16,
        _createHelper: function _createHelper(e) {
          return function (t, n) {
            return new e.init(n).finalize(t);
          };
        },
        _createHmacHelper: function _createHmacHelper(e) {
          return function (t, n) {
            return new u.HMAC.init(e, n).finalize(t);
          };
        }
      }), r.algo = {});

      return r;
    }(Math);
  }, function (e, t) {}, function (e) {
    e.exports = JSON.parse('{"sdkType":1,"version":"1.3.8"}');
  }, function (e, t, n) {
    var r, i, o;
    e.exports = (o = n(0), i = (r = o).lib.WordArray, r.enc.Base64 = {
      stringify: function stringify(e) {
        var t = e.words,
            n = e.sigBytes,
            r = this._map;
        e.clamp();

        for (var i = [], o = 0; o < n; o += 3) {
          for (var s = (t[o >>> 2] >>> 24 - o % 4 * 8 & 255) << 16 | (t[o + 1 >>> 2] >>> 24 - (o + 1) % 4 * 8 & 255) << 8 | t[o + 2 >>> 2] >>> 24 - (o + 2) % 4 * 8 & 255, a = 0; a < 4 && o + .75 * a < n; a++) {
            i.push(r.charAt(s >>> 6 * (3 - a) & 63));
          }
        }

        var _ = r.charAt(64);

        if (_) for (; i.length % 4;) {
          i.push(_);
        }
        return i.join("");
      },
      parse: function parse(e) {
        var t = e.length,
            n = this._map,
            r = this._reverseMap;

        if (!r) {
          r = this._reverseMap = [];

          for (var o = 0; o < n.length; o++) {
            r[n.charCodeAt(o)] = o;
          }
        }

        var s = n.charAt(64);

        if (s) {
          var a = e.indexOf(s);
          -1 !== a && (t = a);
        }

        return function (e, t, n) {
          for (var r = [], o = 0, s = 0; s < t; s++) {
            if (s % 4) {
              var a = n[e.charCodeAt(s - 1)] << s % 4 * 2,
                  _ = n[e.charCodeAt(s)] >>> 6 - s % 4 * 2;

              r[o >>> 2] |= (a | _) << 24 - o % 4 * 8, o++;
            }
          }

          return i.create(r, o);
        }(e, t, r);
      },
      _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
    }, o.enc.Base64);
  }, function (e, t, n) {
    var r;
    e.exports = (r = n(0), n(5), n(6), r.HmacSHA1);
  }, function (e, t, n) {
    var r, i, o, s, a, _, E, l;

    e.exports = (i = (r = l = n(0)).lib, o = i.WordArray, s = i.Hasher, a = r.algo, _ = [], E = a.SHA1 = s.extend({
      _doReset: function _doReset() {
        this._hash = new o.init([1732584193, 4023233417, 2562383102, 271733878, 3285377520]);
      },
      _doProcessBlock: function _doProcessBlock(e, t) {
        for (var n = this._hash.words, r = n[0], i = n[1], o = n[2], s = n[3], a = n[4], E = 0; E < 80; E++) {
          if (E < 16) _[E] = 0 | e[t + E];else {
            var l = _[E - 3] ^ _[E - 8] ^ _[E - 14] ^ _[E - 16];
            _[E] = l << 1 | l >>> 31;
          }
          var d = (r << 5 | r >>> 27) + a + _[E];
          d += E < 20 ? 1518500249 + (i & o | ~i & s) : E < 40 ? 1859775393 + (i ^ o ^ s) : E < 60 ? (i & o | i & s | o & s) - 1894007588 : (i ^ o ^ s) - 899497514, a = s, s = o, o = i << 30 | i >>> 2, i = r, r = d;
        }

        n[0] = n[0] + r | 0, n[1] = n[1] + i | 0, n[2] = n[2] + o | 0, n[3] = n[3] + s | 0, n[4] = n[4] + a | 0;
      },
      _doFinalize: function _doFinalize() {
        var e = this._data,
            t = e.words,
            n = 8 * this._nDataBytes,
            r = 8 * e.sigBytes;
        return t[r >>> 5] |= 128 << 24 - r % 32, t[14 + (r + 64 >>> 9 << 4)] = Math.floor(n / 4294967296), t[15 + (r + 64 >>> 9 << 4)] = n, e.sigBytes = 4 * t.length, this._process(), this._hash;
      },
      clone: function clone() {
        var e = s.clone.call(this);
        return e._hash = this._hash.clone(), e;
      }
    }), r.SHA1 = s._createHelper(E), r.HmacSHA1 = s._createHmacHelper(E), l.SHA1);
  }, function (e, t, n) {
    var r, i, o;
    e.exports = (i = (r = n(0)).lib.Base, o = r.enc.Utf8, void (r.algo.HMAC = i.extend({
      init: function init(e, t) {
        e = this._hasher = new e.init(), "string" == typeof t && (t = o.parse(t));
        var n = e.blockSize,
            r = 4 * n;
        t.sigBytes > r && (t = e.finalize(t)), t.clamp();

        for (var i = this._oKey = t.clone(), s = this._iKey = t.clone(), a = i.words, _ = s.words, E = 0; E < n; E++) {
          a[E] ^= 1549556828, _[E] ^= 909522486;
        }

        i.sigBytes = s.sigBytes = r, this.reset();
      },
      reset: function reset() {
        var e = this._hasher;
        e.reset(), e.update(this._iKey);
      },
      update: function update(e) {
        return this._hasher.update(e), this;
      },
      finalize: function finalize(e) {
        var t = this._hasher,
            n = t.finalize(e);
        return t.reset(), t.finalize(this._oKey.clone().concat(n));
      }
    })));
  }, function (e, t, n) {
    var r, i;
    void 0 === (i = "function" == typeof (r = function r(e) {
      "use strict";

      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e["default"] = void 0;

      var t = function () {
        function e() {
          var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "",
              n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 0,
              r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
          !function (e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
          }(this, e);
          var i,
              o,
              s = "";
          this.escapeRegExp = function (e) {
            return e.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
          }, this.parseInt = function (e, t) {
            return /^(-|\+)?([0-9]+|Infinity)$/.test(e) ? parseInt(e, t) : NaN;
          }, this.seps = "cfhistuCFHISTU", this.minLength = 0 < parseInt(n, 10) ? n : 0, this.salt = "string" == typeof t ? t : "", "string" == typeof r && (this.alphabet = r);

          for (var a = 0; a !== this.alphabet.length; a++) {
            -1 === s.indexOf(this.alphabet.charAt(a)) && (s += this.alphabet.charAt(a));
          }

          if (this.alphabet = s, this.alphabet.length < 16) throw "error: alphabet must contain at least X unique characters".replace("X", 16);
          if (-1 !== this.alphabet.search(" ")) throw "error: alphabet cannot contain spaces";

          for (var _ = 0; _ !== this.seps.length; _++) {
            var E = this.alphabet.indexOf(this.seps.charAt(_));
            -1 === E ? this.seps = this.seps.substr(0, _) + " " + this.seps.substr(_ + 1) : this.alphabet = this.alphabet.substr(0, E) + " " + this.alphabet.substr(E + 1);
          }

          this.alphabet = this.alphabet.replace(/ /g, ""), this.seps = this.seps.replace(/ /g, ""), this.seps = this._shuffle(this.seps, this.salt), (!this.seps.length || 3.5 < this.alphabet.length / this.seps.length) && (i = Math.ceil(this.alphabet.length / 3.5)) > this.seps.length && (o = i - this.seps.length, this.seps += this.alphabet.substr(0, o), this.alphabet = this.alphabet.substr(o)), this.alphabet = this._shuffle(this.alphabet, this.salt);
          var l = Math.ceil(this.alphabet.length / 12);
          this.alphabet.length < 3 ? (this.guards = this.seps.substr(0, l), this.seps = this.seps.substr(l)) : (this.guards = this.alphabet.substr(0, l), this.alphabet = this.alphabet.substr(l));
        }

        var t;
        return (t = [{
          key: "encode",
          value: function value() {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) {
              t[n] = arguments[n];
            }

            if (!t.length) return "";
            if (t[0] && t[0].constructor === Array && !(t = t[0]).length) return "";

            for (var r = 0; r !== t.length; r++) {
              if (t[r] = this.parseInt(t[r], 10), !(0 <= t[r])) return "";
            }

            return this._encode(t);
          }
        }, {
          key: "decode",
          value: function value(e) {
            return e && e.length && "string" == typeof e ? this._decode(e, this.alphabet) : [];
          }
        }, {
          key: "encodeHex",
          value: function value(e) {
            if (e = e.toString(), !/^[0-9a-fA-F]+$/.test(e)) return "";

            for (var t = e.match(/[\w\W]{1,12}/g), n = 0; n !== t.length; n++) {
              t[n] = parseInt("1" + t[n], 16);
            }

            return this.encode.apply(this, t);
          }
        }, {
          key: "decodeHex",
          value: function value(e) {
            for (var t = [], n = this.decode(e), r = 0; r !== n.length; r++) {
              t += n[r].toString(16).substr(1);
            }

            return t;
          }
        }, {
          key: "_encode",
          value: function value(e) {
            for (var t, n = this.alphabet, r = 0, i = 0; i !== e.length; i++) {
              r += e[i] % (i + 100);
            }

            for (var o = t = n.charAt(r % n.length), s = 0; s !== e.length; s++) {
              var a = e[s],
                  _ = o + this.salt + n;

              n = this._shuffle(n, _.substr(0, n.length));

              var E = this._toAlphabet(a, n);

              if (t += E, s + 1 < e.length) {
                var l = (a %= E.charCodeAt(0) + s) % this.seps.length;
                t += this.seps.charAt(l);
              }
            }

            if (t.length < this.minLength) {
              var d = (r + t[0].charCodeAt(0)) % this.guards.length,
                  u = this.guards[d];
              (t = u + t).length < this.minLength && (d = (r + t[2].charCodeAt(0)) % this.guards.length, t += u = this.guards[d]);
            }

            for (var h = parseInt(n.length / 2, 10); t.length < this.minLength;) {
              var c = (t = (n = this._shuffle(n, n)).substr(h) + t + n.substr(0, h)).length - this.minLength;
              0 < c && (t = t.substr(c / 2, this.minLength));
            }

            return t;
          }
        }, {
          key: "_decode",
          value: function value(e, t) {
            var n = [],
                r = 0,
                i = new RegExp("[".concat(this.escapeRegExp(this.guards), "]"), "g"),
                o = e.replace(i, " "),
                s = o.split(" ");

            if (3 !== s.length && 2 !== s.length || (r = 1), void 0 !== (o = s[r])[0]) {
              var a = o[0];
              o = o.substr(1), i = new RegExp("[".concat(this.escapeRegExp(this.seps), "]"), "g"), s = (o = o.replace(i, " ")).split(" ");

              for (var _ = 0; _ !== s.length; _++) {
                var E = s[_],
                    l = a + this.salt + t;
                t = this._shuffle(t, l.substr(0, t.length)), n.push(this._fromAlphabet(E, t));
              }

              this.encode(n) !== e && (n = []);
            }

            return n;
          }
        }, {
          key: "_shuffle",
          value: function value(e, t) {
            var n;
            if (!t.length) return e;

            for (var r = (e = e.split("")).length - 1, i = 0, o = 0, s = 0; 0 < r; r--, i++) {
              i %= t.length, o += n = t.charCodeAt(i);
              var a = e[s = (n + i + o) % r];
              e[s] = e[r], e[r] = a;
            }

            return e.join("");
          }
        }, {
          key: "_toAlphabet",
          value: function value(e, t) {
            for (var n = ""; n = t.charAt(e % t.length) + n, e = parseInt(e / t.length, 10);) {
              ;
            }

            return n;
          }
        }, {
          key: "_fromAlphabet",
          value: function value(e, t) {
            return e.split("").map(function (e) {
              return t.indexOf(e);
            }).reduce(function (e, n) {
              return e * t.length + n;
            }, 0);
          }
        }]) && function (e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
          }
        }(e.prototype, t), e;
      }();

      e["default"] = t;
    }) ? r.apply(t, [t]) : r) || (e.exports = i);
  }, function (e, t, n) {
    (function (r) {
      var i, o, s;
      o = [n(10)], void 0 === (s = "function" == typeof (i = function i(e, t) {
        "use strict";

        var i,
            o = {};
        return o.ByteBuffer = e, o.Long = e.Long || null, o.VERSION = "5.0.3", o.WIRE_TYPES = {}, o.WIRE_TYPES.VARINT = 0, o.WIRE_TYPES.BITS64 = 1, o.WIRE_TYPES.LDELIM = 2, o.WIRE_TYPES.STARTGROUP = 3, o.WIRE_TYPES.ENDGROUP = 4, o.WIRE_TYPES.BITS32 = 5, o.PACKABLE_WIRE_TYPES = [o.WIRE_TYPES.VARINT, o.WIRE_TYPES.BITS64, o.WIRE_TYPES.BITS32], o.TYPES = {
          int32: {
            name: "int32",
            wireType: o.WIRE_TYPES.VARINT,
            defaultValue: 0
          },
          uint32: {
            name: "uint32",
            wireType: o.WIRE_TYPES.VARINT,
            defaultValue: 0
          },
          sint32: {
            name: "sint32",
            wireType: o.WIRE_TYPES.VARINT,
            defaultValue: 0
          },
          int64: {
            name: "int64",
            wireType: o.WIRE_TYPES.VARINT,
            defaultValue: o.Long ? o.Long.ZERO : void 0
          },
          uint64: {
            name: "uint64",
            wireType: o.WIRE_TYPES.VARINT,
            defaultValue: o.Long ? o.Long.UZERO : void 0
          },
          sint64: {
            name: "sint64",
            wireType: o.WIRE_TYPES.VARINT,
            defaultValue: o.Long ? o.Long.ZERO : void 0
          },
          bool: {
            name: "bool",
            wireType: o.WIRE_TYPES.VARINT,
            defaultValue: !1
          },
          "double": {
            name: "double",
            wireType: o.WIRE_TYPES.BITS64,
            defaultValue: 0
          },
          string: {
            name: "string",
            wireType: o.WIRE_TYPES.LDELIM,
            defaultValue: ""
          },
          bytes: {
            name: "bytes",
            wireType: o.WIRE_TYPES.LDELIM,
            defaultValue: null
          },
          fixed32: {
            name: "fixed32",
            wireType: o.WIRE_TYPES.BITS32,
            defaultValue: 0
          },
          sfixed32: {
            name: "sfixed32",
            wireType: o.WIRE_TYPES.BITS32,
            defaultValue: 0
          },
          fixed64: {
            name: "fixed64",
            wireType: o.WIRE_TYPES.BITS64,
            defaultValue: o.Long ? o.Long.UZERO : void 0
          },
          sfixed64: {
            name: "sfixed64",
            wireType: o.WIRE_TYPES.BITS64,
            defaultValue: o.Long ? o.Long.ZERO : void 0
          },
          "float": {
            name: "float",
            wireType: o.WIRE_TYPES.BITS32,
            defaultValue: 0
          },
          "enum": {
            name: "enum",
            wireType: o.WIRE_TYPES.VARINT,
            defaultValue: 0
          },
          message: {
            name: "message",
            wireType: o.WIRE_TYPES.LDELIM,
            defaultValue: null
          },
          group: {
            name: "group",
            wireType: o.WIRE_TYPES.STARTGROUP,
            defaultValue: null
          }
        }, o.MAP_KEY_TYPES = [o.TYPES.int32, o.TYPES.sint32, o.TYPES.sfixed32, o.TYPES.uint32, o.TYPES.fixed32, o.TYPES.int64, o.TYPES.sint64, o.TYPES.sfixed64, o.TYPES.uint64, o.TYPES.fixed64, o.TYPES.bool, o.TYPES.string, o.TYPES.bytes], o.ID_MIN = 1, o.ID_MAX = 536870911, o.convertFieldsToCamelCase = !1, o.populateAccessors = !0, o.populateDefaults = !0, o.Util = ((i = {}).IS_NODE = !("object" != _typeof(r) || r + "" != "[object process]" || r.browser), i.XHR = function () {
          for (var e = [function () {
            return new XMLHttpRequest();
          }, function () {
            return new ActiveXObject("Msxml2.XMLHTTP");
          }, function () {
            return new ActiveXObject("Msxml3.XMLHTTP");
          }, function () {
            return new ActiveXObject("Microsoft.XMLHTTP");
          }], t = null, n = 0; n < e.length; n++) {
            try {
              t = e[n]();
            } catch (e) {
              continue;
            }

            break;
          }

          if (!t) throw Error("XMLHttpRequest is not supported");
          return t;
        }, i.fetch = function (e, t) {
          if (t && "function" != typeof t && (t = null), i.IS_NODE) {
            var r = n(12);
            if (t) r.readFile(e, function (e, n) {
              t(e ? null : "" + n);
            });else try {
              return r.readFileSync(e);
            } catch (e) {
              return null;
            }
          } else {
            var o = i.XHR();
            if (o.open("GET", e, !!t), o.setRequestHeader("Accept", "text/plain"), "function" == typeof o.overrideMimeType && o.overrideMimeType("text/plain"), !t) return o.send(null), 200 == o.status || 0 == o.status && "string" == typeof o.responseText ? o.responseText : null;
            if (o.onreadystatechange = function () {
              4 == o.readyState && (200 == o.status || 0 == o.status && "string" == typeof o.responseText ? t(o.responseText) : t(null));
            }, 4 == o.readyState) return;
            o.send(null);
          }
        }, i.toCamelCase = function (e) {
          return e.replace(/_([a-zA-Z])/g, function (e, t) {
            return t.toUpperCase();
          });
        }, i), o.Lang = {
          DELIM: /[\s\{\}=;:\[\],'"\(\)<>]/g,
          RULE: /^(?:required|optional|repeated|map)$/,
          TYPE: /^(?:double|float|int32|uint32|sint32|int64|uint64|sint64|fixed32|sfixed32|fixed64|sfixed64|bool|string|bytes)$/,
          NAME: /^[a-zA-Z_][a-zA-Z_0-9]*$/,
          TYPEDEF: /^[a-zA-Z][a-zA-Z_0-9]*$/,
          TYPEREF: /^(?:\.?[a-zA-Z_][a-zA-Z_0-9]*)(?:\.[a-zA-Z_][a-zA-Z_0-9]*)*$/,
          FQTYPEREF: /^(?:\.[a-zA-Z_][a-zA-Z_0-9]*)+$/,
          NUMBER: /^-?(?:[1-9][0-9]*|0|0[xX][0-9a-fA-F]+|0[0-7]+|([0-9]*(\.[0-9]*)?([Ee][+-]?[0-9]+)?)|inf|nan)$/,
          NUMBER_DEC: /^(?:[1-9][0-9]*|0)$/,
          NUMBER_HEX: /^0[xX][0-9a-fA-F]+$/,
          NUMBER_OCT: /^0[0-7]+$/,
          NUMBER_FLT: /^([0-9]*(\.[0-9]*)?([Ee][+-]?[0-9]+)?|inf|nan)$/,
          BOOL: /^(?:true|false)$/i,
          ID: /^(?:[1-9][0-9]*|0|0[xX][0-9a-fA-F]+|0[0-7]+)$/,
          NEGID: /^\-?(?:[1-9][0-9]*|0|0[xX][0-9a-fA-F]+|0[0-7]+)$/,
          WHITESPACE: /\s/,
          STRING: /(?:"([^"\\]*(?:\\.[^"\\]*)*)")|(?:'([^'\\]*(?:\\.[^'\\]*)*)')/g,
          STRING_DQ: /(?:"([^"\\]*(?:\\.[^"\\]*)*)")/g,
          STRING_SQ: /(?:'([^'\\]*(?:\\.[^'\\]*)*)')/g
        }, o.DotProto = function (e, t) {
          var n = {},
              r = function r(e) {
            this.source = e + "", this.index = 0, this.line = 1, this.stack = [], this._stringOpen = null;
          },
              i = r.prototype;

          i._readString = function () {
            var e = '"' === this._stringOpen ? t.STRING_DQ : t.STRING_SQ;
            e.lastIndex = this.index - 1;
            var n = e.exec(this.source);
            if (!n) throw Error("unterminated string");
            return this.index = e.lastIndex, this.stack.push(this._stringOpen), this._stringOpen = null, n[1];
          }, i.next = function () {
            if (this.stack.length > 0) return this.stack.shift();
            if (this.index >= this.source.length) return null;
            if (null !== this._stringOpen) return this._readString();
            var e, n, r;

            do {
              for (e = !1; t.WHITESPACE.test(r = this.source.charAt(this.index));) {
                if ("\n" === r && ++this.line, ++this.index === this.source.length) return null;
              }

              if ("/" === this.source.charAt(this.index)) if (++this.index, "/" === this.source.charAt(this.index)) {
                for (; "\n" !== this.source.charAt(++this.index);) {
                  if (this.index == this.source.length) return null;
                }

                ++this.index, ++this.line, e = !0;
              } else {
                if ("*" !== (r = this.source.charAt(this.index))) return "/";

                do {
                  if ("\n" === r && ++this.line, ++this.index === this.source.length) return null;
                  n = r, r = this.source.charAt(this.index);
                } while ("*" !== n || "/" !== r);

                ++this.index, e = !0;
              }
            } while (e);

            if (this.index === this.source.length) return null;
            var i = this.index;
            if (t.DELIM.lastIndex = 0, !t.DELIM.test(this.source.charAt(i++))) for (; i < this.source.length && !t.DELIM.test(this.source.charAt(i));) {
              ++i;
            }
            var o = this.source.substring(this.index, this.index = i);
            return '"' !== o && "'" !== o || (this._stringOpen = o), o;
          }, i.peek = function () {
            if (0 === this.stack.length) {
              var e = this.next();
              if (null === e) return null;
              this.stack.push(e);
            }

            return this.stack[0];
          }, i.skip = function (e) {
            var t = this.next();
            if (t !== e) throw Error("illegal '" + t + "', '" + e + "' expected");
          }, i.omit = function (e) {
            return this.peek() === e && (this.next(), !0);
          }, i.toString = function () {
            return "Tokenizer (" + this.index + "/" + this.source.length + " at line " + this.line + ")";
          }, n.Tokenizer = r;

          var o = function o(e) {
            this.tn = new r(e), this.proto3 = !1;
          },
              s = o.prototype;

          function a(e, n) {
            var r = -1,
                i = 1;
            if ("-" == e.charAt(0) && (i = -1, e = e.substring(1)), t.NUMBER_DEC.test(e)) r = parseInt(e);else if (t.NUMBER_HEX.test(e)) r = parseInt(e.substring(2), 16);else {
              if (!t.NUMBER_OCT.test(e)) throw Error("illegal id value: " + (i < 0 ? "-" : "") + e);
              r = parseInt(e.substring(1), 8);
            }
            if (r = i * r | 0, !n && r < 0) throw Error("illegal id value: " + (i < 0 ? "-" : "") + e);
            return r;
          }

          function _(e) {
            var n = 1;
            if ("-" == e.charAt(0) && (n = -1, e = e.substring(1)), t.NUMBER_DEC.test(e)) return n * parseInt(e, 10);
            if (t.NUMBER_HEX.test(e)) return n * parseInt(e.substring(2), 16);
            if (t.NUMBER_OCT.test(e)) return n * parseInt(e.substring(1), 8);
            if ("inf" === e) return n * (1 / 0);
            if ("nan" === e) return NaN;
            if (t.NUMBER_FLT.test(e)) return n * parseFloat(e);
            throw Error("illegal number value: " + (n < 0 ? "-" : "") + e);
          }

          function E(e, t, n) {
            void 0 === e[t] ? e[t] = n : (Array.isArray(e[t]) || (e[t] = [e[t]]), e[t].push(n));
          }

          return s.parse = function () {
            var e,
                n,
                r = {
              name: "[ROOT]",
              "package": null,
              messages: [],
              enums: [],
              imports: [],
              options: {},
              services: []
            },
                i = !0;

            try {
              for (; e = this.tn.next();) {
                switch (e) {
                  case "package":
                    if (!i || null !== r["package"]) throw Error("unexpected 'package'");
                    if (e = this.tn.next(), !t.TYPEREF.test(e)) throw Error("illegal package name: " + e);
                    this.tn.skip(";"), r["package"] = e;
                    break;

                  case "import":
                    if (!i) throw Error("unexpected 'import'");
                    ("public" === (e = this.tn.peek()) || (n = "weak" === e)) && this.tn.next(), e = this._readString(), this.tn.skip(";"), n || r.imports.push(e);
                    break;

                  case "syntax":
                    if (!i) throw Error("unexpected 'syntax'");
                    this.tn.skip("="), "proto3" === (r.syntax = this._readString()) && (this.proto3 = !0), this.tn.skip(";");
                    break;

                  case "message":
                    this._parseMessage(r, null), i = !1;
                    break;

                  case "enum":
                    this._parseEnum(r), i = !1;
                    break;

                  case "option":
                    this._parseOption(r);

                    break;

                  case "service":
                    this._parseService(r);

                    break;

                  case "extend":
                    this._parseExtend(r);

                    break;

                  default:
                    throw Error("unexpected '" + e + "'");
                }
              }
            } catch (e) {
              throw e.message = "Parse error at line " + this.tn.line + ": " + e.message, e;
            }

            return delete r.name, r;
          }, o.parse = function (e) {
            return new o(e).parse();
          }, s._readString = function () {
            var e,
                t,
                n = "";

            do {
              if ("'" !== (t = this.tn.next()) && '"' !== t) throw Error("illegal string delimiter: " + t);
              n += this.tn.next(), this.tn.skip(t), e = this.tn.peek();
            } while ('"' === e || '"' === e);

            return n;
          }, s._readValue = function (e) {
            var n = this.tn.peek();
            if ('"' === n || "'" === n) return this._readString();
            if (this.tn.next(), t.NUMBER.test(n)) return _(n);
            if (t.BOOL.test(n)) return "true" === n.toLowerCase();
            if (e && t.TYPEREF.test(n)) return n;
            throw Error("illegal value: " + n);
          }, s._parseOption = function (e, n) {
            var r = this.tn.next(),
                i = !1;
            if ("(" === r && (i = !0, r = this.tn.next()), !t.TYPEREF.test(r)) throw Error("illegal option name: " + r);
            var o = r;
            i && (this.tn.skip(")"), o = "(" + o + ")", r = this.tn.peek(), t.FQTYPEREF.test(r) && (o += r, this.tn.next())), this.tn.skip("="), this._parseOptionValue(e, o), n || this.tn.skip(";");
          }, s._parseOptionValue = function (e, n) {
            var r = this.tn.peek();
            if ("{" !== r) E(e.options, n, this._readValue(!0));else for (this.tn.skip("{"); "}" !== (r = this.tn.next());) {
              if (!t.NAME.test(r)) throw Error("illegal option name: " + n + "." + r);
              this.tn.omit(":") ? E(e.options, n + "." + r, this._readValue(!0)) : this._parseOptionValue(e, n + "." + r);
            }
          }, s._parseService = function (e) {
            var n = this.tn.next();
            if (!t.NAME.test(n)) throw Error("illegal service name at line " + this.tn.line + ": " + n);
            var r = {
              name: n,
              rpc: {},
              options: {}
            };

            for (this.tn.skip("{"); "}" !== (n = this.tn.next());) {
              if ("option" === n) this._parseOption(r);else {
                if ("rpc" !== n) throw Error("illegal service token: " + n);

                this._parseServiceRPC(r);
              }
            }

            this.tn.omit(";"), e.services.push(r);
          }, s._parseServiceRPC = function (e) {
            var n = this.tn.next();
            if (!t.NAME.test(n)) throw Error("illegal rpc service method name: " + n);
            var r = n,
                i = {
              request: null,
              response: null,
              request_stream: !1,
              response_stream: !1,
              options: {}
            };
            if (this.tn.skip("("), "stream" === (n = this.tn.next()).toLowerCase() && (i.request_stream = !0, n = this.tn.next()), !t.TYPEREF.test(n)) throw Error("illegal rpc service request type: " + n);
            if (i.request = n, this.tn.skip(")"), "returns" !== (n = this.tn.next()).toLowerCase()) throw Error("illegal rpc service request type delimiter: " + n);

            if (this.tn.skip("("), "stream" === (n = this.tn.next()).toLowerCase() && (i.response_stream = !0, n = this.tn.next()), i.response = n, this.tn.skip(")"), "{" === (n = this.tn.peek())) {
              for (this.tn.next(); "}" !== (n = this.tn.next());) {
                if ("option" !== n) throw Error("illegal rpc service token: " + n);

                this._parseOption(i);
              }

              this.tn.omit(";");
            } else this.tn.skip(";");

            void 0 === e.rpc && (e.rpc = {}), e.rpc[r] = i;
          }, s._parseMessage = function (e, n) {
            var r = !!n,
                i = this.tn.next(),
                o = {
              name: "",
              fields: [],
              enums: [],
              messages: [],
              options: {},
              services: [],
              oneofs: {}
            };
            if (!t.NAME.test(i)) throw Error("illegal " + (r ? "group" : "message") + " name: " + i);

            for (o.name = i, r && (this.tn.skip("="), n.id = a(this.tn.next()), o.isGroup = !0), "[" === (i = this.tn.peek()) && n && this._parseFieldOptions(n), this.tn.skip("{"); "}" !== (i = this.tn.next());) {
              if (t.RULE.test(i)) this._parseMessageField(o, i);else if ("oneof" === i) this._parseMessageOneOf(o);else if ("enum" === i) this._parseEnum(o);else if ("message" === i) this._parseMessage(o);else if ("option" === i) this._parseOption(o);else if ("service" === i) this._parseService(o);else if ("extensions" === i) o.hasOwnProperty("extensions") ? o.extensions = o.extensions.concat(this._parseExtensionRanges()) : o.extensions = this._parseExtensionRanges();else if ("reserved" === i) this._parseIgnored();else if ("extend" === i) this._parseExtend(o);else {
                if (!t.TYPEREF.test(i)) throw Error("illegal message token: " + i);
                if (!this.proto3) throw Error("illegal field rule: " + i);

                this._parseMessageField(o, "optional", i);
              }
            }

            return this.tn.omit(";"), e.messages.push(o), o;
          }, s._parseIgnored = function () {
            for (; ";" !== this.tn.peek();) {
              this.tn.next();
            }

            this.tn.skip(";");
          }, s._parseMessageField = function (e, n, r) {
            if (!t.RULE.test(n)) throw Error("illegal message field rule: " + n);
            var i,
                o = {
              rule: n,
              type: "",
              name: "",
              options: {},
              id: 0
            };

            if ("map" === n) {
              if (r) throw Error("illegal type: " + r);
              if (this.tn.skip("<"), i = this.tn.next(), !t.TYPE.test(i) && !t.TYPEREF.test(i)) throw Error("illegal message field type: " + i);
              if (o.keytype = i, this.tn.skip(","), i = this.tn.next(), !t.TYPE.test(i) && !t.TYPEREF.test(i)) throw Error("illegal message field: " + i);
              if (o.type = i, this.tn.skip(">"), i = this.tn.next(), !t.NAME.test(i)) throw Error("illegal message field name: " + i);
              o.name = i, this.tn.skip("="), o.id = a(this.tn.next()), "[" === (i = this.tn.peek()) && this._parseFieldOptions(o), this.tn.skip(";");
            } else if ("group" === (r = void 0 !== r ? r : this.tn.next())) {
              var s = this._parseMessage(e, o);

              if (!/^[A-Z]/.test(s.name)) throw Error("illegal group name: " + s.name);
              o.type = s.name, o.name = s.name.toLowerCase(), this.tn.omit(";");
            } else {
              if (!t.TYPE.test(r) && !t.TYPEREF.test(r)) throw Error("illegal message field type: " + r);
              if (o.type = r, i = this.tn.next(), !t.NAME.test(i)) throw Error("illegal message field name: " + i);
              o.name = i, this.tn.skip("="), o.id = a(this.tn.next()), "[" === (i = this.tn.peek()) && this._parseFieldOptions(o), this.tn.skip(";");
            }

            return e.fields.push(o), o;
          }, s._parseMessageOneOf = function (e) {
            var n = this.tn.next();
            if (!t.NAME.test(n)) throw Error("illegal oneof name: " + n);
            var r,
                i = n,
                o = [];

            for (this.tn.skip("{"); "}" !== (n = this.tn.next());) {
              (r = this._parseMessageField(e, "optional", n)).oneof = i, o.push(r.id);
            }

            this.tn.omit(";"), e.oneofs[i] = o;
          }, s._parseFieldOptions = function (e) {
            this.tn.skip("[");

            for (var t = !0; "]" !== this.tn.peek();) {
              t || this.tn.skip(","), this._parseOption(e, !0), t = !1;
            }

            this.tn.next();
          }, s._parseEnum = function (e) {
            var n = {
              name: "",
              values: [],
              options: {}
            },
                r = this.tn.next();
            if (!t.NAME.test(r)) throw Error("illegal name: " + r);

            for (n.name = r, this.tn.skip("{"); "}" !== (r = this.tn.next());) {
              if ("option" === r) this._parseOption(n);else {
                if (!t.NAME.test(r)) throw Error("illegal name: " + r);
                this.tn.skip("=");
                var i = {
                  name: r,
                  id: a(this.tn.next(), !0)
                };
                "[" === (r = this.tn.peek()) && this._parseFieldOptions({
                  options: {}
                }), this.tn.skip(";"), n.values.push(i);
              }
            }

            this.tn.omit(";"), e.enums.push(n);
          }, s._parseExtensionRanges = function () {
            var t,
                n,
                r,
                i = [];

            do {
              for (n = [];;) {
                switch (t = this.tn.next()) {
                  case "min":
                    r = e.ID_MIN;
                    break;

                  case "max":
                    r = e.ID_MAX;
                    break;

                  default:
                    r = _(t);
                }

                if (n.push(r), 2 === n.length) break;

                if ("to" !== this.tn.peek()) {
                  n.push(r);
                  break;
                }

                this.tn.next();
              }

              i.push(n);
            } while (this.tn.omit(","));

            return this.tn.skip(";"), i;
          }, s._parseExtend = function (e) {
            var n = this.tn.next();
            if (!t.TYPEREF.test(n)) throw Error("illegal extend reference: " + n);
            var r = {
              ref: n,
              fields: []
            };

            for (this.tn.skip("{"); "}" !== (n = this.tn.next());) {
              if (t.RULE.test(n)) this._parseMessageField(r, n);else {
                if (!t.TYPEREF.test(n)) throw Error("illegal extend token: " + n);
                if (!this.proto3) throw Error("illegal field rule: " + n);

                this._parseMessageField(r, "optional", n);
              }
            }

            return this.tn.omit(";"), e.messages.push(r), r;
          }, s.toString = function () {
            return "Parser at line " + this.tn.line;
          }, n.Parser = o, n;
        }(o, o.Lang), o.Reflect = function (t) {
          var n = {},
              r = function r(e, t, n) {
            this.builder = e, this.parent = t, this.name = n, this.className;
          },
              i = r.prototype;

          i.fqn = function () {
            for (var e = this.name, t = this; null != (t = t.parent);) {
              e = t.name + "." + e;
            }

            return e;
          }, i.toString = function (e) {
            return (e ? this.className + " " : "") + this.fqn();
          }, i.build = function () {
            throw Error(this.toString(!0) + " cannot be built directly");
          }, n.T = r;

          var o = function o(e, t, n, i, _o) {
            r.call(this, e, t, n), this.className = "Namespace", this.children = [], this.options = i || {}, this.syntax = _o || "proto2";
          },
              s = o.prototype = Object.create(r.prototype);

          s.getChildren = function (e) {
            if (null == (e = e || null)) return this.children.slice();

            for (var t = [], n = 0, r = this.children.length; n < r; ++n) {
              this.children[n] instanceof e && t.push(this.children[n]);
            }

            return t;
          }, s.addChild = function (e) {
            var t;
            if (t = this.getChild(e.name)) if (t instanceof l.Field && t.name !== t.originalName && null === this.getChild(t.originalName)) t.name = t.originalName;else {
              if (!(e instanceof l.Field && e.name !== e.originalName && null === this.getChild(e.originalName))) throw Error("Duplicate name in namespace " + this.toString(!0) + ": " + e.name);
              e.name = e.originalName;
            }
            this.children.push(e);
          }, s.getChild = function (e) {
            for (var t = "number" == typeof e ? "id" : "name", n = 0, r = this.children.length; n < r; ++n) {
              if (this.children[n][t] === e) return this.children[n];
            }

            return null;
          }, s.resolve = function (e, t) {
            var r,
                i = "string" == typeof e ? e.split(".") : e,
                o = this,
                s = 0;

            if ("" === i[s]) {
              for (; null !== o.parent;) {
                o = o.parent;
              }

              s++;
            }

            do {
              do {
                if (!(o instanceof n.Namespace)) {
                  o = null;
                  break;
                }

                if (!(r = o.getChild(i[s])) || !(r instanceof n.T) || t && !(r instanceof n.Namespace)) {
                  o = null;
                  break;
                }

                o = r, s++;
              } while (s < i.length);

              if (null != o) break;
              if (null !== this.parent) return this.parent.resolve(e, t);
            } while (null != o);

            return o;
          }, s.qn = function (e) {
            var t = [],
                r = e;

            do {
              t.unshift(r.name), r = r.parent;
            } while (null !== r);

            for (var i = 1; i <= t.length; i++) {
              var o = t.slice(t.length - i);
              if (e === this.resolve(o, e instanceof n.Namespace)) return o.join(".");
            }

            return e.fqn();
          }, s.build = function () {
            for (var e, t = {}, n = this.children, r = 0, i = n.length; r < i; ++r) {
              (e = n[r]) instanceof o && (t[e.name] = e.build());
            }

            return Object.defineProperty && Object.defineProperty(t, "$options", {
              value: this.buildOpt()
            }), t;
          }, s.buildOpt = function () {
            for (var e = {}, t = Object.keys(this.options), n = 0, r = t.length; n < r; ++n) {
              var i = t[n],
                  o = this.options[t[n]];
              e[i] = o;
            }

            return e;
          }, s.getOption = function (e) {
            return void 0 === e ? this.options : void 0 !== this.options[e] ? this.options[e] : null;
          }, n.Namespace = o;

          var a = function a(e, n, r, i, o) {
            if (this.type = e, this.resolvedType = n, this.isMapKey = r, this.syntax = i, this.name = o, r && t.MAP_KEY_TYPES.indexOf(e) < 0) throw Error("Invalid map key type: " + e.name);
          },
              _ = a.prototype;

          function E(e, n) {
            if (e && "number" == typeof e.low && "number" == typeof e.high && "boolean" == typeof e.unsigned && e.low == e.low && e.high == e.high) return new t.Long(e.low, e.high, void 0 === n ? e.unsigned : n);
            if ("string" == typeof e) return t.Long.fromString(e, n || !1, 10);
            if ("number" == typeof e) return t.Long.fromNumber(e, n || !1);
            throw Error("not convertible to Long");
          }

          a.defaultFieldValue = function (n) {
            if ("string" == typeof n && (n = t.TYPES[n]), void 0 === n.defaultValue) throw Error("default value for type " + n.name + " is not supported");
            return n == t.TYPES.bytes ? new e(0) : n.defaultValue;
          }, _.toString = function () {
            return (this.name || "") + (this.isMapKey ? "map" : "value") + " element";
          }, _.verifyValue = function (n) {
            var r = this;

            function i(e, t) {
              throw Error("Illegal value for " + r.toString(!0) + " of type " + r.type.name + ": " + e + " (" + t + ")");
            }

            switch (this.type) {
              case t.TYPES.int32:
              case t.TYPES.sint32:
              case t.TYPES.sfixed32:
                return ("number" != typeof n || n == n && n % 1 != 0) && i(_typeof(n), "not an integer"), n > 4294967295 ? 0 | n : n;

              case t.TYPES.uint32:
              case t.TYPES.fixed32:
                return ("number" != typeof n || n == n && n % 1 != 0) && i(_typeof(n), "not an integer"), n < 0 ? n >>> 0 : n;

              case t.TYPES.int64:
              case t.TYPES.sint64:
              case t.TYPES.sfixed64:
                if (t.Long) try {
                  return E(n, !1);
                } catch (e) {
                  i(_typeof(n), e.message);
                } else i(_typeof(n), "requires Long.js");

              case t.TYPES.uint64:
              case t.TYPES.fixed64:
                if (t.Long) try {
                  return E(n, !0);
                } catch (e) {
                  i(_typeof(n), e.message);
                } else i(_typeof(n), "requires Long.js");

              case t.TYPES.bool:
                return "boolean" != typeof n && i(_typeof(n), "not a boolean"), n;

              case t.TYPES["float"]:
              case t.TYPES["double"]:
                return "number" != typeof n && i(_typeof(n), "not a number"), n;

              case t.TYPES.string:
                return "string" == typeof n || n && n instanceof String || i(_typeof(n), "not a string"), "" + n;

              case t.TYPES.bytes:
                return e.isByteBuffer(n) ? n : e.wrap(n, "base64");

              case t.TYPES["enum"]:
                var o = this.resolvedType.getChildren(t.Reflect.Enum.Value);

                for (a = 0; a < o.length; a++) {
                  if (o[a].name == n) return o[a].id;
                  if (o[a].id == n) return o[a].id;
                }

                if ("proto3" === this.syntax) return ("number" != typeof n || n == n && n % 1 != 0) && i(_typeof(n), "not an integer"), (n > 4294967295 || n < 0) && i(_typeof(n), "not in range for uint32"), n;
                i(n, "not a valid enum value");

              case t.TYPES.group:
              case t.TYPES.message:
                if (n && "object" == _typeof(n) || i(_typeof(n), "object expected"), n instanceof this.resolvedType.clazz) return n;

                if (n instanceof t.Builder.Message) {
                  var s = {};

                  for (var a in n) {
                    n.hasOwnProperty(a) && (s[a] = n[a]);
                  }

                  n = s;
                }

                return new this.resolvedType.clazz(n);
            }

            throw Error("[INTERNAL] Illegal value for " + this.toString(!0) + ": " + n + " (undefined type " + this.type + ")");
          }, _.calculateLength = function (n, r) {
            if (null === r) return 0;
            var i;

            switch (this.type) {
              case t.TYPES.int32:
                return r < 0 ? e.calculateVarint64(r) : e.calculateVarint32(r);

              case t.TYPES.uint32:
                return e.calculateVarint32(r);

              case t.TYPES.sint32:
                return e.calculateVarint32(e.zigZagEncode32(r));

              case t.TYPES.fixed32:
              case t.TYPES.sfixed32:
              case t.TYPES["float"]:
                return 4;

              case t.TYPES.int64:
              case t.TYPES.uint64:
                return e.calculateVarint64(r);

              case t.TYPES.sint64:
                return e.calculateVarint64(e.zigZagEncode64(r));

              case t.TYPES.fixed64:
              case t.TYPES.sfixed64:
                return 8;

              case t.TYPES.bool:
                return 1;

              case t.TYPES["enum"]:
                return e.calculateVarint32(r);

              case t.TYPES["double"]:
                return 8;

              case t.TYPES.string:
                return i = e.calculateUTF8Bytes(r), e.calculateVarint32(i) + i;

              case t.TYPES.bytes:
                if (r.remaining() < 0) throw Error("Illegal value for " + this.toString(!0) + ": " + r.remaining() + " bytes remaining");
                return e.calculateVarint32(r.remaining()) + r.remaining();

              case t.TYPES.message:
                return i = this.resolvedType.calculate(r), e.calculateVarint32(i) + i;

              case t.TYPES.group:
                return (i = this.resolvedType.calculate(r)) + e.calculateVarint32(n << 3 | t.WIRE_TYPES.ENDGROUP);
            }

            throw Error("[INTERNAL] Illegal value to encode in " + this.toString(!0) + ": " + r + " (unknown type)");
          }, _.encodeValue = function (n, r, i) {
            if (null === r) return i;

            switch (this.type) {
              case t.TYPES.int32:
                r < 0 ? i.writeVarint64(r) : i.writeVarint32(r);
                break;

              case t.TYPES.uint32:
                i.writeVarint32(r);
                break;

              case t.TYPES.sint32:
                i.writeVarint32ZigZag(r);
                break;

              case t.TYPES.fixed32:
                i.writeUint32(r);
                break;

              case t.TYPES.sfixed32:
                i.writeInt32(r);
                break;

              case t.TYPES.int64:
              case t.TYPES.uint64:
                i.writeVarint64(r);
                break;

              case t.TYPES.sint64:
                i.writeVarint64ZigZag(r);
                break;

              case t.TYPES.fixed64:
                i.writeUint64(r);
                break;

              case t.TYPES.sfixed64:
                i.writeInt64(r);
                break;

              case t.TYPES.bool:
                "string" == typeof r ? i.writeVarint32("false" === r.toLowerCase() ? 0 : !!r) : i.writeVarint32(r ? 1 : 0);
                break;

              case t.TYPES["enum"]:
                i.writeVarint32(r);
                break;

              case t.TYPES["float"]:
                i.writeFloat32(r);
                break;

              case t.TYPES["double"]:
                i.writeFloat64(r);
                break;

              case t.TYPES.string:
                i.writeVString(r);
                break;

              case t.TYPES.bytes:
                if (r.remaining() < 0) throw Error("Illegal value for " + this.toString(!0) + ": " + r.remaining() + " bytes remaining");
                var o = r.offset;
                i.writeVarint32(r.remaining()), i.append(r), r.offset = o;
                break;

              case t.TYPES.message:
                var s = new e().LE();
                this.resolvedType.encode(r, s), i.writeVarint32(s.offset), i.append(s.flip());
                break;

              case t.TYPES.group:
                this.resolvedType.encode(r, i), i.writeVarint32(n << 3 | t.WIRE_TYPES.ENDGROUP);
                break;

              default:
                throw Error("[INTERNAL] Illegal value to encode in " + this.toString(!0) + ": " + r + " (unknown type)");
            }

            return i;
          }, _.decode = function (e, n, r) {
            if (n != this.type.wireType) throw Error("Unexpected wire type for element");
            var i, o;

            switch (this.type) {
              case t.TYPES.int32:
                return 0 | e.readVarint32();

              case t.TYPES.uint32:
                return e.readVarint32() >>> 0;

              case t.TYPES.sint32:
                return 0 | e.readVarint32ZigZag();

              case t.TYPES.fixed32:
                return e.readUint32() >>> 0;

              case t.TYPES.sfixed32:
                return 0 | e.readInt32();

              case t.TYPES.int64:
                return e.readVarint64();

              case t.TYPES.uint64:
                return e.readVarint64().toUnsigned();

              case t.TYPES.sint64:
                return e.readVarint64ZigZag();

              case t.TYPES.fixed64:
                return e.readUint64();

              case t.TYPES.sfixed64:
                return e.readInt64();

              case t.TYPES.bool:
                return !!e.readVarint32();

              case t.TYPES["enum"]:
                return e.readVarint32();

              case t.TYPES["float"]:
                return e.readFloat();

              case t.TYPES["double"]:
                return e.readDouble();

              case t.TYPES.string:
                return e.readVString();

              case t.TYPES.bytes:
                if (o = e.readVarint32(), e.remaining() < o) throw Error("Illegal number of bytes for " + this.toString(!0) + ": " + o + " required but got only " + e.remaining());
                return (i = e.clone()).limit = i.offset + o, e.offset += o, i;

              case t.TYPES.message:
                return o = e.readVarint32(), this.resolvedType.decode(e, o);

              case t.TYPES.group:
                return this.resolvedType.decode(e, -1, r);
            }

            throw Error("[INTERNAL] Illegal decode type");
          }, _.valueFromString = function (n) {
            if (!this.isMapKey) throw Error("valueFromString() called on non-map-key element");

            switch (this.type) {
              case t.TYPES.int32:
              case t.TYPES.sint32:
              case t.TYPES.sfixed32:
              case t.TYPES.uint32:
              case t.TYPES.fixed32:
                return this.verifyValue(parseInt(n));

              case t.TYPES.int64:
              case t.TYPES.sint64:
              case t.TYPES.sfixed64:
              case t.TYPES.uint64:
              case t.TYPES.fixed64:
                return this.verifyValue(n);

              case t.TYPES.bool:
                return "true" === n;

              case t.TYPES.string:
                return this.verifyValue(n);

              case t.TYPES.bytes:
                return e.fromBinary(n);
            }
          }, _.valueToString = function (e) {
            if (!this.isMapKey) throw Error("valueToString() called on non-map-key element");
            return this.type === t.TYPES.bytes ? e.toString("binary") : e.toString();
          }, n.Element = a;

          var l = function l(e, t, n, r, i, s) {
            o.call(this, e, t, n, r, s), this.className = "Message", this.extensions = void 0, this.clazz = null, this.isGroup = !!i, this._fields = null, this._fieldsById = null, this._fieldsByName = null;
          },
              d = l.prototype = Object.create(o.prototype);

          function u(e, n) {
            var r = n.readVarint32(),
                i = 7 & r,
                o = r >>> 3;

            switch (i) {
              case t.WIRE_TYPES.VARINT:
                do {
                  r = n.readUint8();
                } while (128 == (128 & r));

                break;

              case t.WIRE_TYPES.BITS64:
                n.offset += 8;
                break;

              case t.WIRE_TYPES.LDELIM:
                r = n.readVarint32(), n.offset += r;
                break;

              case t.WIRE_TYPES.STARTGROUP:
                u(o, n);
                break;

              case t.WIRE_TYPES.ENDGROUP:
                if (o === e) return !1;
                throw Error("Illegal GROUPEND after unknown group: " + o + " (" + e + " expected)");

              case t.WIRE_TYPES.BITS32:
                n.offset += 4;
                break;

              default:
                throw Error("Illegal wire type in unknown group " + e + ": " + i);
            }

            return !0;
          }

          d.build = function (n) {
            if (this.clazz && !n) return this.clazz;

            var r = function (t, n) {
              var r = n.getChildren(t.Reflect.Message.Field),
                  i = n.getChildren(t.Reflect.Message.OneOf),
                  o = function o(s, a) {
                t.Builder.Message.call(this);

                for (var _ = 0, E = i.length; _ < E; ++_) {
                  this[i[_].name] = null;
                }

                for (_ = 0, E = r.length; _ < E; ++_) {
                  var l = r[_];
                  this[l.name] = l.repeated ? [] : l.map ? new t.Map(l) : null, !l.required && "proto3" !== n.syntax || null === l.defaultValue || (this[l.name] = l.defaultValue);
                }

                var d;
                if (arguments.length > 0) if (1 !== arguments.length || null === s || "object" != _typeof(s) || !("function" != typeof s.encode || s instanceof o) || Array.isArray(s) || s instanceof t.Map || e.isByteBuffer(s) || s instanceof ArrayBuffer || t.Long && s instanceof t.Long) for (_ = 0, E = arguments.length; _ < E; ++_) {
                  void 0 !== (d = arguments[_]) && this.$set(r[_].name, d);
                } else this.$set(s);
              },
                  s = o.prototype = Object.create(t.Builder.Message.prototype);

              s.add = function (e, r, i) {
                var o = n._fieldsByName[e];

                if (!i) {
                  if (!o) throw Error(this + "#" + e + " is undefined");
                  if (!(o instanceof t.Reflect.Message.Field)) throw Error(this + "#" + e + " is not a field: " + o.toString(!0));
                  if (!o.repeated) throw Error(this + "#" + e + " is not a repeated field");
                  r = o.verifyValue(r, !0);
                }

                return null === this[e] && (this[e] = []), this[e].push(r), this;
              }, s.$add = s.add, s.set = function (e, r, i) {
                if (e && "object" == _typeof(e)) {
                  for (var o in i = r, e) {
                    e.hasOwnProperty(o) && void 0 !== (r = e[o]) && void 0 === n._oneofsByName[o] && this.$set(o, r, i);
                  }

                  return this;
                }

                var s = n._fieldsByName[e];
                if (i) this[e] = r;else {
                  if (!s) throw Error(this + "#" + e + " is not a field: undefined");
                  if (!(s instanceof t.Reflect.Message.Field)) throw Error(this + "#" + e + " is not a field: " + s.toString(!0));
                  this[s.name] = r = s.verifyValue(r);
                }

                if (s && s.oneof) {
                  var a = this[s.oneof.name];
                  null !== r ? (null !== a && a !== s.name && (this[a] = null), this[s.oneof.name] = s.name) : a === e && (this[s.oneof.name] = null);
                }

                return this;
              }, s.$set = s.set, s.get = function (e, r) {
                if (r) return this[e];
                var i = n._fieldsByName[e];
                if (!(i && i instanceof t.Reflect.Message.Field)) throw Error(this + "#" + e + " is not a field: undefined");
                if (!(i instanceof t.Reflect.Message.Field)) throw Error(this + "#" + e + " is not a field: " + i.toString(!0));
                return this[i.name];
              }, s.$get = s.get;

              for (var a = 0; a < r.length; a++) {
                var _ = r[a];
                _ instanceof t.Reflect.Message.ExtensionField || n.builder.options.populateAccessors && function (e) {
                  var t = e.originalName.replace(/(_[a-zA-Z])/g, function (e) {
                    return e.toUpperCase().replace("_", "");
                  });
                  t = t.substring(0, 1).toUpperCase() + t.substring(1);

                  var r = e.originalName.replace(/([A-Z])/g, function (e) {
                    return "_" + e;
                  }),
                      i = function i(t, n) {
                    return this[e.name] = n ? t : e.verifyValue(t), this;
                  },
                      o = function o() {
                    return this[e.name];
                  };

                  null === n.getChild("set" + t) && (s["set" + t] = i), null === n.getChild("set_" + r) && (s["set_" + r] = i), null === n.getChild("get" + t) && (s["get" + t] = o), null === n.getChild("get_" + r) && (s["get_" + r] = o);
                }(_);
              }

              function E(n, r, i, o) {
                if (null === n || "object" != _typeof(n)) {
                  if (o && o instanceof t.Reflect.Enum) {
                    var s = t.Reflect.Enum.getName(o.object, n);
                    if (null !== s) return s;
                  }

                  return n;
                }

                if (e.isByteBuffer(n)) return r ? n.toBase64() : n.toBuffer();
                if (t.Long.isLong(n)) return i ? n.toString() : t.Long.fromValue(n);
                var a;
                if (Array.isArray(n)) return a = [], n.forEach(function (e, t) {
                  a[t] = E(e, r, i, o);
                }), a;

                if (a = {}, n instanceof t.Map) {
                  for (var _ = n.entries(), l = _.next(); !l.done; l = _.next()) {
                    a[n.keyElem.valueToString(l.value[0])] = E(l.value[1], r, i, n.valueElem.resolvedType);
                  }

                  return a;
                }

                var d = n.$type,
                    u = void 0;

                for (var h in n) {
                  n.hasOwnProperty(h) && (d && (u = d.getChild(h)) ? a[h] = E(n[h], r, i, u.resolvedType) : a[h] = E(n[h], r, i));
                }

                return a;
              }

              return s.encode = function (t, r) {
                "boolean" == typeof t && (r = t, t = void 0);
                var i = !1;
                t || (t = new e(), i = !0);
                var o = t.littleEndian;

                try {
                  return n.encode(this, t.LE(), r), (i ? t.flip() : t).LE(o);
                } catch (e) {
                  throw t.LE(o), e;
                }
              }, o.encode = function (e, t, n) {
                return new o(e).encode(t, n);
              }, s.calculate = function () {
                return n.calculate(this);
              }, s.encodeDelimited = function (t, r) {
                var i = !1;
                t || (t = new e(), i = !0);
                var o = new e().LE();
                return n.encode(this, o, r).flip(), t.writeVarint32(o.remaining()), t.append(o), i ? t.flip() : t;
              }, s.encodeAB = function () {
                try {
                  return this.encode().toArrayBuffer();
                } catch (e) {
                  throw e.encoded && (e.encoded = e.encoded.toArrayBuffer()), e;
                }
              }, s.toArrayBuffer = s.encodeAB, s.encodeNB = function () {
                try {
                  return this.encode().toBuffer();
                } catch (e) {
                  throw e.encoded && (e.encoded = e.encoded.toBuffer()), e;
                }
              }, s.toBuffer = s.encodeNB, s.encode64 = function () {
                try {
                  return this.encode().toBase64();
                } catch (e) {
                  throw e.encoded && (e.encoded = e.encoded.toBase64()), e;
                }
              }, s.toBase64 = s.encode64, s.encodeHex = function () {
                try {
                  return this.encode().toHex();
                } catch (e) {
                  throw e.encoded && (e.encoded = e.encoded.toHex()), e;
                }
              }, s.toHex = s.encodeHex, s.toRaw = function (e, t) {
                return E(this, !!e, !!t, this.$type);
              }, s.encodeJSON = function () {
                return JSON.stringify(E(this, !0, !0, this.$type));
              }, o.decode = function (t, r, i) {
                "string" == typeof r && (i = r, r = -1), "string" == typeof t ? t = e.wrap(t, i || "base64") : e.isByteBuffer(t) || (t = e.wrap(t));
                var o = t.littleEndian;

                try {
                  var s = n.decode(t.LE(), r);
                  return t.LE(o), s;
                } catch (e) {
                  throw t.LE(o), e;
                }
              }, o.decodeDelimited = function (t, r) {
                if ("string" == typeof t ? t = e.wrap(t, r || "base64") : e.isByteBuffer(t) || (t = e.wrap(t)), t.remaining() < 1) return null;
                var i = t.offset,
                    o = t.readVarint32();
                if (t.remaining() < o) return t.offset = i, null;

                try {
                  var s = n.decode(t.slice(t.offset, t.offset + o).LE());
                  return t.offset += o, s;
                } catch (e) {
                  throw t.offset += o, e;
                }
              }, o.decode64 = function (e) {
                return o.decode(e, "base64");
              }, o.decodeHex = function (e) {
                return o.decode(e, "hex");
              }, o.decodeJSON = function (e) {
                return new o(JSON.parse(e));
              }, s.toString = function () {
                return n.toString();
              }, Object.defineProperty && (Object.defineProperty(o, "$options", {
                value: n.buildOpt()
              }), Object.defineProperty(s, "$options", {
                value: o.$options
              }), Object.defineProperty(o, "$type", {
                value: n
              }), Object.defineProperty(s, "$type", {
                value: n
              })), o;
            }(t, this);

            this._fields = [], this._fieldsById = {}, this._fieldsByName = {}, this._oneofsByName = {};

            for (var i, o = 0, s = this.children.length; o < s; o++) {
              if ((i = this.children[o]) instanceof p || i instanceof l || i instanceof g) {
                if (r.hasOwnProperty(i.name)) throw Error("Illegal reflect child of " + this.toString(!0) + ": " + i.toString(!0) + " cannot override static property '" + i.name + "'");
                r[i.name] = i.build();
              } else if (i instanceof l.Field) i.build(), this._fields.push(i), this._fieldsById[i.id] = i, this._fieldsByName[i.name] = i;else if (i instanceof l.OneOf) this._oneofsByName[i.name] = i;else if (!(i instanceof l.OneOf || i instanceof m)) throw Error("Illegal reflect child of " + this.toString(!0) + ": " + this.children[o].toString(!0));
            }

            return this.clazz = r;
          }, d.encode = function (e, t, n) {
            for (var r, i, o = null, s = 0, a = this._fields.length; s < a; ++s) {
              i = e[(r = this._fields[s]).name], r.required && null === i ? null === o && (o = r) : r.encode(n ? i : r.verifyValue(i), t, e);
            }

            if (null !== o) {
              var _ = Error("Missing at least one required field for " + this.toString(!0) + ": " + o);

              throw _.encoded = t, _;
            }

            return t;
          }, d.calculate = function (e) {
            for (var t, n, r = 0, i = 0, o = this._fields.length; i < o; ++i) {
              if (n = e[(t = this._fields[i]).name], t.required && null === n) throw Error("Missing at least one required field for " + this.toString(!0) + ": " + t);
              r += t.calculate(n, e);
            }

            return r;
          }, d.decode = function (e, n, r) {
            "number" != typeof n && (n = -1);

            for (var i, o, s, a, _ = e.offset, E = new this.clazz(); e.offset < _ + n || -1 === n && e.remaining() > 0;) {
              if (s = (i = e.readVarint32()) >>> 3, (o = 7 & i) === t.WIRE_TYPES.ENDGROUP) {
                if (s !== r) throw Error("Illegal group end indicator for " + this.toString(!0) + ": " + s + " (" + (r ? r + " expected" : "not a group") + ")");
                break;
              }

              if (a = this._fieldsById[s]) {
                if (a.repeated && !a.options.packed) E[a.name].push(a.decode(o, e));else if (a.map) {
                  var l = a.decode(o, e);
                  E[a.name].set(l[0], l[1]);
                } else if (E[a.name] = a.decode(o, e), a.oneof) {
                  var d = E[a.oneof.name];
                  null !== d && d !== a.name && (E[d] = null), E[a.oneof.name] = a.name;
                }
              } else switch (o) {
                case t.WIRE_TYPES.VARINT:
                  e.readVarint32();
                  break;

                case t.WIRE_TYPES.BITS32:
                  e.offset += 4;
                  break;

                case t.WIRE_TYPES.BITS64:
                  e.offset += 8;
                  break;

                case t.WIRE_TYPES.LDELIM:
                  var h = e.readVarint32();
                  e.offset += h;
                  break;

                case t.WIRE_TYPES.STARTGROUP:
                  for (; u(s, e);) {
                    ;
                  }

                  break;

                default:
                  throw Error("Illegal wire type for unknown field " + s + " in " + this.toString(!0) + "#decode: " + o);
              }
            }

            for (var c = 0, f = this._fields.length; c < f; ++c) {
              if (null === E[(a = this._fields[c]).name]) if ("proto3" === this.syntax) E[a.name] = a.defaultValue;else {
                if (a.required) {
                  var p = Error("Missing at least one required field for " + this.toString(!0) + ": " + a.name);
                  throw p.decoded = E, p;
                }

                t.populateDefaults && null !== a.defaultValue && (E[a.name] = a.defaultValue);
              }
            }

            return E;
          }, n.Message = l;

          var h = function h(e, n, i, o, s, a, _, E, d, u) {
            r.call(this, e, n, a), this.className = "Message.Field", this.required = "required" === i, this.repeated = "repeated" === i, this.map = "map" === i, this.keyType = o || null, this.type = s, this.resolvedType = null, this.id = _, this.options = E || {}, this.defaultValue = null, this.oneof = d || null, this.syntax = u || "proto2", this.originalName = this.name, this.element = null, this.keyElement = null, !this.builder.options.convertFieldsToCamelCase || this instanceof l.ExtensionField || (this.name = t.Util.toCamelCase(this.name));
          },
              c = h.prototype = Object.create(r.prototype);

          c.build = function () {
            this.element = new a(this.type, this.resolvedType, !1, this.syntax, this.name), this.map && (this.keyElement = new a(this.keyType, void 0, !0, this.syntax, this.name)), "proto3" !== this.syntax || this.repeated || this.map ? void 0 !== this.options["default"] && (this.defaultValue = this.verifyValue(this.options["default"])) : this.defaultValue = a.defaultFieldValue(this.type);
          }, c.verifyValue = function (e, n) {
            n = n || !1;
            var r,
                i = this;

            function o(e, t) {
              throw Error("Illegal value for " + i.toString(!0) + " of type " + i.type.name + ": " + e + " (" + t + ")");
            }

            if (null === e) return this.required && o(_typeof(e), "required"), "proto3" === this.syntax && this.type !== t.TYPES.message && o(_typeof(e), "proto3 field without field presence cannot be null"), null;

            if (this.repeated && !n) {
              Array.isArray(e) || (e = [e]);
              var s = [];

              for (r = 0; r < e.length; r++) {
                s.push(this.element.verifyValue(e[r]));
              }

              return s;
            }

            return this.map && !n ? e instanceof t.Map ? e : (e instanceof Object || o(_typeof(e), "expected ProtoBuf.Map or raw object for map field"), new t.Map(this, e)) : (!this.repeated && Array.isArray(e) && o(_typeof(e), "no array expected"), this.element.verifyValue(e));
          }, c.hasWirePresence = function (e, n) {
            if ("proto3" !== this.syntax) return null !== e;
            if (this.oneof && n[this.oneof.name] === this.name) return !0;

            switch (this.type) {
              case t.TYPES.int32:
              case t.TYPES.sint32:
              case t.TYPES.sfixed32:
              case t.TYPES.uint32:
              case t.TYPES.fixed32:
                return 0 !== e;

              case t.TYPES.int64:
              case t.TYPES.sint64:
              case t.TYPES.sfixed64:
              case t.TYPES.uint64:
              case t.TYPES.fixed64:
                return 0 !== e.low || 0 !== e.high;

              case t.TYPES.bool:
                return e;

              case t.TYPES["float"]:
              case t.TYPES["double"]:
                return 0 !== e;

              case t.TYPES.string:
                return e.length > 0;

              case t.TYPES.bytes:
                return e.remaining() > 0;

              case t.TYPES["enum"]:
                return 0 !== e;

              case t.TYPES.message:
                return null !== e;

              default:
                return !0;
            }
          }, c.encode = function (n, r, i) {
            if (null === this.type || "object" != _typeof(this.type)) throw Error("[INTERNAL] Unresolved type in " + this.toString(!0) + ": " + this.type);
            if (null === n || this.repeated && 0 == n.length) return r;

            try {
              var o;
              if (this.repeated) {
                if (this.options.packed && t.PACKABLE_WIRE_TYPES.indexOf(this.type.wireType) >= 0) {
                  r.writeVarint32(this.id << 3 | t.WIRE_TYPES.LDELIM), r.ensureCapacity(r.offset += 1);
                  var s = r.offset;

                  for (o = 0; o < n.length; o++) {
                    this.element.encodeValue(this.id, n[o], r);
                  }

                  var a = r.offset - s,
                      _ = e.calculateVarint32(a);

                  if (_ > 1) {
                    var E = r.slice(s, r.offset);
                    s += _ - 1, r.offset = s, r.append(E);
                  }

                  r.writeVarint32(a, s - _);
                } else for (o = 0; o < n.length; o++) {
                  r.writeVarint32(this.id << 3 | this.type.wireType), this.element.encodeValue(this.id, n[o], r);
                }
              } else this.map ? n.forEach(function (n, i, o) {
                var s = e.calculateVarint32(8 | this.keyType.wireType) + this.keyElement.calculateLength(1, i) + e.calculateVarint32(16 | this.type.wireType) + this.element.calculateLength(2, n);
                r.writeVarint32(this.id << 3 | t.WIRE_TYPES.LDELIM), r.writeVarint32(s), r.writeVarint32(8 | this.keyType.wireType), this.keyElement.encodeValue(1, i, r), r.writeVarint32(16 | this.type.wireType), this.element.encodeValue(2, n, r);
              }, this) : this.hasWirePresence(n, i) && (r.writeVarint32(this.id << 3 | this.type.wireType), this.element.encodeValue(this.id, n, r));
            } catch (e) {
              throw Error("Illegal value for " + this.toString(!0) + ": " + n + " (" + e + ")");
            }

            return r;
          }, c.calculate = function (n, r) {
            if (n = this.verifyValue(n), null === this.type || "object" != _typeof(this.type)) throw Error("[INTERNAL] Unresolved type in " + this.toString(!0) + ": " + this.type);
            if (null === n || this.repeated && 0 == n.length) return 0;
            var i = 0;

            try {
              var o, s;
              if (this.repeated) {
                if (this.options.packed && t.PACKABLE_WIRE_TYPES.indexOf(this.type.wireType) >= 0) {
                  for (i += e.calculateVarint32(this.id << 3 | t.WIRE_TYPES.LDELIM), s = 0, o = 0; o < n.length; o++) {
                    s += this.element.calculateLength(this.id, n[o]);
                  }

                  i += e.calculateVarint32(s), i += s;
                } else for (o = 0; o < n.length; o++) {
                  i += e.calculateVarint32(this.id << 3 | this.type.wireType), i += this.element.calculateLength(this.id, n[o]);
                }
              } else this.map ? n.forEach(function (n, r, o) {
                var s = e.calculateVarint32(8 | this.keyType.wireType) + this.keyElement.calculateLength(1, r) + e.calculateVarint32(16 | this.type.wireType) + this.element.calculateLength(2, n);
                i += e.calculateVarint32(this.id << 3 | t.WIRE_TYPES.LDELIM), i += e.calculateVarint32(s), i += s;
              }, this) : this.hasWirePresence(n, r) && (i += e.calculateVarint32(this.id << 3 | this.type.wireType), i += this.element.calculateLength(this.id, n));
            } catch (e) {
              throw Error("Illegal value for " + this.toString(!0) + ": " + n + " (" + e + ")");
            }

            return i;
          }, c.decode = function (e, n, r) {
            var i, o;
            if (!(!this.map && e == this.type.wireType || !r && this.repeated && this.options.packed && e == t.WIRE_TYPES.LDELIM || this.map && e == t.WIRE_TYPES.LDELIM)) throw Error("Illegal wire type for field " + this.toString(!0) + ": " + e + " (" + this.type.wireType + " expected)");

            if (e == t.WIRE_TYPES.LDELIM && this.repeated && this.options.packed && t.PACKABLE_WIRE_TYPES.indexOf(this.type.wireType) >= 0 && !r) {
              o = n.readVarint32(), o = n.offset + o;

              for (var s = []; n.offset < o;) {
                s.push(this.decode(this.type.wireType, n, !0));
              }

              return s;
            }

            if (this.map) {
              var _ = a.defaultFieldValue(this.keyType);

              if (i = a.defaultFieldValue(this.type), o = n.readVarint32(), n.remaining() < o) throw Error("Illegal number of bytes for " + this.toString(!0) + ": " + o + " required but got only " + n.remaining());
              var E = n.clone();

              for (E.limit = E.offset + o, n.offset += o; E.remaining() > 0;) {
                var l = E.readVarint32();
                e = 7 & l;
                var d = l >>> 3;
                if (1 === d) _ = this.keyElement.decode(E, e, d);else {
                  if (2 !== d) throw Error("Unexpected tag in map field key/value submessage");
                  i = this.element.decode(E, e, d);
                }
              }

              return [_, i];
            }

            return this.element.decode(n, e, this.id);
          }, n.Message.Field = h;

          var f = function f(e, t, n, r, i, o, s) {
            h.call(this, e, t, n, null, r, i, o, s), this.extension;
          };

          f.prototype = Object.create(h.prototype), n.Message.ExtensionField = f, n.Message.OneOf = function (e, t, n) {
            r.call(this, e, t, n), this.fields = [];
          };

          var p = function p(e, t, n, r, i) {
            o.call(this, e, t, n, r, i), this.className = "Enum", this.object = null;
          };

          p.getName = function (e, t) {
            for (var n, r = Object.keys(e), i = 0; i < r.length; ++i) {
              if (e[n = r[i]] === t) return n;
            }

            return null;
          }, (p.prototype = Object.create(o.prototype)).build = function (e) {
            if (this.object && !e) return this.object;

            for (var n = new t.Builder.Enum(), r = this.getChildren(p.Value), i = 0, o = r.length; i < o; ++i) {
              n[r[i].name] = r[i].id;
            }

            return Object.defineProperty && Object.defineProperty(n, "$options", {
              value: this.buildOpt(),
              enumerable: !1
            }), this.object = n;
          }, n.Enum = p;

          var R = function R(e, t, n, i) {
            r.call(this, e, t, n), this.className = "Enum.Value", this.id = i;
          };

          R.prototype = Object.create(r.prototype), n.Enum.Value = R;

          var m = function m(e, t, n, i) {
            r.call(this, e, t, n), this.field = i;
          };

          m.prototype = Object.create(r.prototype), n.Extension = m;

          var g = function g(e, t, n, r) {
            o.call(this, e, t, n, r), this.className = "Service", this.clazz = null;
          };

          (g.prototype = Object.create(o.prototype)).build = function (n) {
            return this.clazz && !n ? this.clazz : this.clazz = function (t, n) {
              for (var r = function r(e) {
                t.Builder.Service.call(this), this.rpcImpl = e || function (e, t, n) {
                  setTimeout(n.bind(this, Error("Not implemented, see: https://github.com/dcodeIO/ProtoBuf.js/wiki/Services")), 0);
                };
              }, i = r.prototype = Object.create(t.Builder.Service.prototype), o = n.getChildren(t.Reflect.Service.RPCMethod), s = 0; s < o.length; s++) {
                !function (t) {
                  i[t.name] = function (r, i) {
                    try {
                      try {
                        r = t.resolvedRequestType.clazz.decode(e.wrap(r));
                      } catch (e) {
                        if (!(e instanceof TypeError)) throw e;
                      }

                      if (null === r || "object" != _typeof(r)) throw Error("Illegal arguments");
                      r instanceof t.resolvedRequestType.clazz || (r = new t.resolvedRequestType.clazz(r)), this.rpcImpl(t.fqn(), r, function (e, r) {
                        if (e) i(e);else {
                          null === r && (r = "");

                          try {
                            r = t.resolvedResponseType.clazz.decode(r);
                          } catch (e) {}

                          r && r instanceof t.resolvedResponseType.clazz ? i(null, r) : i(Error("Illegal response type received in service method " + n.name + "#" + t.name));
                        }
                      });
                    } catch (e) {
                      setTimeout(i.bind(this, e), 0);
                    }
                  }, r[t.name] = function (e, n, i) {
                    new r(e)[t.name](n, i);
                  }, Object.defineProperty && (Object.defineProperty(r[t.name], "$options", {
                    value: t.buildOpt()
                  }), Object.defineProperty(i[t.name], "$options", {
                    value: r[t.name].$options
                  }));
                }(o[s]);
              }

              return Object.defineProperty && (Object.defineProperty(r, "$options", {
                value: n.buildOpt()
              }), Object.defineProperty(i, "$options", {
                value: r.$options
              }), Object.defineProperty(r, "$type", {
                value: n
              }), Object.defineProperty(i, "$type", {
                value: n
              })), r;
            }(t, this);
          }, n.Service = g;

          var y = function y(e, t, n, i) {
            r.call(this, e, t, n), this.className = "Service.Method", this.options = i || {};
          };

          (y.prototype = Object.create(r.prototype)).buildOpt = s.buildOpt, n.Service.Method = y;

          var S = function S(e, t, n, r, i, o, s, a) {
            y.call(this, e, t, n, a), this.className = "Service.RPCMethod", this.requestName = r, this.responseName = i, this.requestStream = o, this.responseStream = s, this.resolvedRequestType = null, this.resolvedResponseType = null;
          };

          return S.prototype = Object.create(y.prototype), n.Service.RPCMethod = S, n;
        }(o), o.Builder = function (e, t, r) {
          var i = function i(e) {
            this.ns = new r.Namespace(this, null, ""), this.ptr = this.ns, this.resolved = !1, this.result = null, this.files = {}, this.importRoot = null, this.options = e || {};
          },
              o = i.prototype;

          return i.isMessage = function (e) {
            return "string" == typeof e.name && void 0 === e.values && void 0 === e.rpc;
          }, i.isMessageField = function (e) {
            return "string" == typeof e.rule && "string" == typeof e.name && "string" == typeof e.type && void 0 !== e.id;
          }, i.isEnum = function (e) {
            return "string" == typeof e.name && !(void 0 === e.values || !Array.isArray(e.values) || 0 === e.values.length);
          }, i.isService = function (e) {
            return !("string" != typeof e.name || "object" != _typeof(e.rpc) || !e.rpc);
          }, i.isExtend = function (e) {
            return "string" == typeof e.ref;
          }, o.reset = function () {
            return this.ptr = this.ns, this;
          }, o.define = function (e) {
            if ("string" != typeof e || !t.TYPEREF.test(e)) throw Error("illegal namespace: " + e);
            return e.split(".").forEach(function (e) {
              var t = this.ptr.getChild(e);
              null === t && this.ptr.addChild(t = new r.Namespace(this, this.ptr, e)), this.ptr = t;
            }, this), this;
          }, o.create = function (t) {
            if (!t) return this;

            if (Array.isArray(t)) {
              if (0 === t.length) return this;
              t = t.slice();
            } else t = [t];

            for (var n = [t]; n.length > 0;) {
              if (t = n.pop(), !Array.isArray(t)) throw Error("not a valid namespace: " + JSON.stringify(t));

              for (; t.length > 0;) {
                var o = t.shift();

                if (i.isMessage(o)) {
                  var s = new r.Message(this, this.ptr, o.name, o.options, o.isGroup, o.syntax),
                      a = {};
                  o.oneofs && Object.keys(o.oneofs).forEach(function (e) {
                    s.addChild(a[e] = new r.Message.OneOf(this, s, e));
                  }, this), o.fields && o.fields.forEach(function (e) {
                    if (null !== s.getChild(0 | e.id)) throw Error("duplicate or invalid field id in " + s.name + ": " + e.id);
                    if (e.options && "object" != _typeof(e.options)) throw Error("illegal field options in " + s.name + "#" + e.name);
                    var t = null;
                    if ("string" == typeof e.oneof && !(t = a[e.oneof])) throw Error("illegal oneof in " + s.name + "#" + e.name + ": " + e.oneof);
                    e = new r.Message.Field(this, s, e.rule, e.keytype, e.type, e.name, e.id, e.options, t, o.syntax), t && t.fields.push(e), s.addChild(e);
                  }, this);
                  var _ = [];

                  if (o.enums && o.enums.forEach(function (e) {
                    _.push(e);
                  }), o.messages && o.messages.forEach(function (e) {
                    _.push(e);
                  }), o.services && o.services.forEach(function (e) {
                    _.push(e);
                  }), o.extensions && ("number" == typeof o.extensions[0] ? s.extensions = [o.extensions] : s.extensions = o.extensions), this.ptr.addChild(s), _.length > 0) {
                    n.push(t), t = _, _ = null, this.ptr = s, s = null;
                    continue;
                  }

                  _ = null;
                } else if (i.isEnum(o)) s = new r.Enum(this, this.ptr, o.name, o.options, o.syntax), o.values.forEach(function (e) {
                  s.addChild(new r.Enum.Value(this, s, e.name, e.id));
                }, this), this.ptr.addChild(s);else if (i.isService(o)) s = new r.Service(this, this.ptr, o.name, o.options), Object.keys(o.rpc).forEach(function (e) {
                  var t = o.rpc[e];
                  s.addChild(new r.Service.RPCMethod(this, s, e, t.request, t.response, !!t.request_stream, !!t.response_stream, t.options));
                }, this), this.ptr.addChild(s);else {
                  if (!i.isExtend(o)) throw Error("not a valid definition: " + JSON.stringify(o));
                  if (s = this.ptr.resolve(o.ref, !0)) o.fields.forEach(function (t) {
                    if (null !== s.getChild(0 | t.id)) throw Error("duplicate extended field id in " + s.name + ": " + t.id);

                    if (s.extensions) {
                      var n = !1;
                      if (s.extensions.forEach(function (e) {
                        t.id >= e[0] && t.id <= e[1] && (n = !0);
                      }), !n) throw Error("illegal extended field id in " + s.name + ": " + t.id + " (not within valid ranges)");
                    }

                    var i = t.name;
                    this.options.convertFieldsToCamelCase && (i = e.Util.toCamelCase(i));
                    var o = new r.Message.ExtensionField(this, s, t.rule, t.type, this.ptr.fqn() + "." + i, t.id, t.options),
                        a = new r.Extension(this, this.ptr, t.name, o);
                    o.extension = a, this.ptr.addChild(a), s.addChild(o);
                  }, this);else if (!/\.?google\.protobuf\./.test(o.ref)) throw Error("extended message " + o.ref + " is not defined");
                }

                o = null, s = null;
              }

              t = null, this.ptr = this.ptr.parent;
            }

            return this.resolved = !1, this.result = null, this;
          }, o["import"] = function (t, r) {
            var i = "/";

            if ("string" == typeof r) {
              if (e.Util.IS_NODE && (r = n(1).resolve(r)), !0 === this.files[r]) return this.reset();
              this.files[r] = !0;
            } else if ("object" == _typeof(r)) {
              var o,
                  s = r.root;
              if (e.Util.IS_NODE && (s = n(1).resolve(s)), (s.indexOf("\\") >= 0 || r.file.indexOf("\\") >= 0) && (i = "\\"), o = e.Util.IS_NODE ? n(1).join(s, r.file) : s + i + r.file, !0 === this.files[o]) return this.reset();
              this.files[o] = !0;
            }

            if (t.imports && t.imports.length > 0) {
              var a,
                  _ = !1;

              "object" == _typeof(r) ? (this.importRoot = r.root, _ = !0, a = this.importRoot, r = r.file, (a.indexOf("\\") >= 0 || r.indexOf("\\") >= 0) && (i = "\\")) : "string" == typeof r ? this.importRoot ? a = this.importRoot : r.indexOf("/") >= 0 ? "" === (a = r.replace(/\/[^\/]*$/, "")) && (a = "/") : r.indexOf("\\") >= 0 ? (a = r.replace(/\\[^\\]*$/, ""), i = "\\") : a = "." : a = null;

              for (var E = 0; E < t.imports.length; E++) {
                if ("string" == typeof t.imports[E]) {
                  if (!a) throw Error("cannot determine import root");
                  var l = t.imports[E];
                  if ("google/protobuf/descriptor.proto" === l) continue;
                  if (l = e.Util.IS_NODE ? n(1).join(a, l) : a + i + l, !0 === this.files[l]) continue;
                  /\.proto$/i.test(l) && !e.DotProto && (l = l.replace(/\.proto$/, ".json"));
                  var d = e.Util.fetch(l);
                  if (null === d) throw Error("failed to import '" + l + "' in '" + r + "': file not found");
                  /\.json$/i.test(l) ? this["import"](JSON.parse(d + ""), l) : this["import"](e.DotProto.Parser.parse(d), l);
                } else r ? /\.(\w+)$/.test(r) ? this["import"](t.imports[E], r.replace(/^(.+)\.(\w+)$/, function (e, t, n) {
                  return t + "_import" + E + "." + n;
                })) : this["import"](t.imports[E], r + "_import" + E) : this["import"](t.imports[E]);
              }

              _ && (this.importRoot = null);
            }

            t["package"] && this.define(t["package"]), t.syntax && function e(t) {
              t.messages && t.messages.forEach(function (n) {
                n.syntax = t.syntax, e(n);
              }), t.enums && t.enums.forEach(function (e) {
                e.syntax = t.syntax;
              });
            }(t);
            var u = this.ptr;
            return t.options && Object.keys(t.options).forEach(function (e) {
              u.options[e] = t.options[e];
            }), t.messages && (this.create(t.messages), this.ptr = u), t.enums && (this.create(t.enums), this.ptr = u), t.services && (this.create(t.services), this.ptr = u), t["extends"] && this.create(t["extends"]), this.reset();
          }, o.resolveAll = function () {
            var n;
            if (null == this.ptr || "object" == _typeof(this.ptr.type)) return this;
            if (this.ptr instanceof r.Namespace) this.ptr.children.forEach(function (e) {
              this.ptr = e, this.resolveAll();
            }, this);else if (this.ptr instanceof r.Message.Field) {
              if (t.TYPE.test(this.ptr.type)) this.ptr.type = e.TYPES[this.ptr.type];else {
                if (!t.TYPEREF.test(this.ptr.type)) throw Error("illegal type reference in " + this.ptr.toString(!0) + ": " + this.ptr.type);
                if (!(n = (this.ptr instanceof r.Message.ExtensionField ? this.ptr.extension.parent : this.ptr.parent).resolve(this.ptr.type, !0))) throw Error("unresolvable type reference in " + this.ptr.toString(!0) + ": " + this.ptr.type);

                if (this.ptr.resolvedType = n, n instanceof r.Enum) {
                  if (this.ptr.type = e.TYPES["enum"], "proto3" === this.ptr.syntax && "proto3" !== n.syntax) throw Error("proto3 message cannot reference proto2 enum");
                } else {
                  if (!(n instanceof r.Message)) throw Error("illegal type reference in " + this.ptr.toString(!0) + ": " + this.ptr.type);
                  this.ptr.type = n.isGroup ? e.TYPES.group : e.TYPES.message;
                }
              }

              if (this.ptr.map) {
                if (!t.TYPE.test(this.ptr.keyType)) throw Error("illegal key type for map field in " + this.ptr.toString(!0) + ": " + this.ptr.keyType);
                this.ptr.keyType = e.TYPES[this.ptr.keyType];
              }

              "proto3" === this.ptr.syntax && this.ptr.repeated && void 0 === this.ptr.options.packed && -1 !== e.PACKABLE_WIRE_TYPES.indexOf(this.ptr.type.wireType) && (this.ptr.options.packed = !0);
            } else if (this.ptr instanceof e.Reflect.Service.Method) {
              if (!(this.ptr instanceof e.Reflect.Service.RPCMethod)) throw Error("illegal service type in " + this.ptr.toString(!0));
              if (!((n = this.ptr.parent.resolve(this.ptr.requestName, !0)) && n instanceof e.Reflect.Message)) throw Error("Illegal type reference in " + this.ptr.toString(!0) + ": " + this.ptr.requestName);
              if (this.ptr.resolvedRequestType = n, !((n = this.ptr.parent.resolve(this.ptr.responseName, !0)) && n instanceof e.Reflect.Message)) throw Error("Illegal type reference in " + this.ptr.toString(!0) + ": " + this.ptr.responseName);
              this.ptr.resolvedResponseType = n;
            } else if (!(this.ptr instanceof e.Reflect.Message.OneOf || this.ptr instanceof e.Reflect.Extension || this.ptr instanceof e.Reflect.Enum.Value)) throw Error("illegal object in namespace: " + _typeof(this.ptr) + ": " + this.ptr);
            return this.reset();
          }, o.build = function (e) {
            if (this.reset(), this.resolved || (this.resolveAll(), this.resolved = !0, this.result = null), null === this.result && (this.result = this.ns.build()), !e) return this.result;

            for (var t = "string" == typeof e ? e.split(".") : e, n = this.result, r = 0; r < t.length; r++) {
              if (!n[t[r]]) {
                n = null;
                break;
              }

              n = n[t[r]];
            }

            return n;
          }, o.lookup = function (e, t) {
            return e ? this.ns.resolve(e, t) : this.ns;
          }, o.toString = function () {
            return "Builder";
          }, i.Message = function () {}, i.Enum = function () {}, i.Service = function () {}, i;
        }(o, o.Lang, o.Reflect), o.Map = function (e, t) {
          var n = function n(e, _n2) {
            if (!e.map) throw Error("field is not a map");
            if (this.field = e, this.keyElem = new t.Element(e.keyType, null, !0, e.syntax), this.valueElem = new t.Element(e.type, e.resolvedType, !1, e.syntax), this.map = {}, Object.defineProperty(this, "size", {
              get: function get() {
                return Object.keys(this.map).length;
              }
            }), _n2) for (var r = Object.keys(_n2), i = 0; i < r.length; i++) {
              var o = this.keyElem.valueFromString(r[i]),
                  s = this.valueElem.verifyValue(_n2[r[i]]);
              this.map[this.keyElem.valueToString(o)] = {
                key: o,
                value: s
              };
            }
          },
              r = n.prototype;

          function i(e) {
            var t = 0;
            return {
              next: function next() {
                return t < e.length ? {
                  done: !1,
                  value: e[t++]
                } : {
                  done: !0
                };
              }
            };
          }

          return r.clear = function () {
            this.map = {};
          }, r["delete"] = function (e) {
            var t = this.keyElem.valueToString(this.keyElem.verifyValue(e)),
                n = (t in this.map);
            return delete this.map[t], n;
          }, r.entries = function () {
            for (var e, t = [], n = Object.keys(this.map), r = 0; r < n.length; r++) {
              t.push([(e = this.map[n[r]]).key, e.value]);
            }

            return i(t);
          }, r.keys = function () {
            for (var e = [], t = Object.keys(this.map), n = 0; n < t.length; n++) {
              e.push(this.map[t[n]].key);
            }

            return i(e);
          }, r.values = function () {
            for (var e = [], t = Object.keys(this.map), n = 0; n < t.length; n++) {
              e.push(this.map[t[n]].value);
            }

            return i(e);
          }, r.forEach = function (e, t) {
            for (var n, r = Object.keys(this.map), i = 0; i < r.length; i++) {
              e.call(t, (n = this.map[r[i]]).value, n.key, this);
            }
          }, r.set = function (e, t) {
            var n = this.keyElem.verifyValue(e),
                r = this.valueElem.verifyValue(t);
            return this.map[this.keyElem.valueToString(n)] = {
              key: n,
              value: r
            }, this;
          }, r.get = function (e) {
            var t = this.keyElem.valueToString(this.keyElem.verifyValue(e));
            if (t in this.map) return this.map[t].value;
          }, r.has = function (e) {
            return this.keyElem.valueToString(this.keyElem.verifyValue(e)) in this.map;
          }, n;
        }(0, o.Reflect), o.loadProto = function (e, t, n) {
          return ("string" == typeof t || t && "string" == typeof t.file && "string" == typeof t.root) && (n = t, t = void 0), o.loadJson(o.DotProto.Parser.parse(e), t, n);
        }, o.protoFromString = o.loadProto, o.loadProtoFile = function (e, t, n) {
          if (t && "object" == _typeof(t) ? (n = t, t = null) : t && "function" == typeof t || (t = null), t) return o.Util.fetch("string" == typeof e ? e : e.root + "/" + e.file, function (r) {
            if (null !== r) try {
              t(null, o.loadProto(r, n, e));
            } catch (e) {
              t(e);
            } else t(Error("Failed to fetch file"));
          });
          var r = o.Util.fetch("object" == _typeof(e) ? e.root + "/" + e.file : e);
          return null === r ? null : o.loadProto(r, n, e);
        }, o.protoFromFile = o.loadProtoFile, o.newBuilder = function (e) {
          return void 0 === (e = e || {}).convertFieldsToCamelCase && (e.convertFieldsToCamelCase = o.convertFieldsToCamelCase), void 0 === e.populateAccessors && (e.populateAccessors = o.populateAccessors), new o.Builder(e);
        }, o.loadJson = function (e, t, n) {
          return ("string" == typeof t || t && "string" == typeof t.file && "string" == typeof t.root) && (n = t, t = null), t && "object" == _typeof(t) || (t = o.newBuilder()), "string" == typeof e && (e = JSON.parse(e)), t["import"](e, n), t.resolveAll(), t;
        }, o.loadJsonFile = function (e, t, n) {
          if (t && "object" == _typeof(t) ? (n = t, t = null) : t && "function" == typeof t || (t = null), t) return o.Util.fetch("string" == typeof e ? e : e.root + "/" + e.file, function (r) {
            if (null !== r) try {
              t(null, o.loadJson(JSON.parse(r), n, e));
            } catch (e) {
              t(e);
            } else t(Error("Failed to fetch file"));
          });
          var r = o.Util.fetch("object" == _typeof(e) ? e.root + "/" + e.file : e);
          return null === r ? null : o.loadJson(JSON.parse(r), n, e);
        }, o;
      }) ? i.apply(t, o) : i) || (e.exports = s);
    }).call(this, n(9));
  }, function (e, t) {
    var n,
        r,
        i = e.exports = {};

    function o() {
      throw new Error("setTimeout has not been defined");
    }

    function s() {
      throw new Error("clearTimeout has not been defined");
    }

    function a(e) {
      if (n === setTimeout) return setTimeout(e, 0);
      if ((n === o || !n) && setTimeout) return n = setTimeout, setTimeout(e, 0);

      try {
        return n(e, 0);
      } catch (t) {
        try {
          return n.call(null, e, 0);
        } catch (t) {
          return n.call(this, e, 0);
        }
      }
    }

    !function () {
      try {
        n = "function" == typeof setTimeout ? setTimeout : o;
      } catch (e) {
        n = o;
      }

      try {
        r = "function" == typeof clearTimeout ? clearTimeout : s;
      } catch (e) {
        r = s;
      }
    }();

    var _,
        E = [],
        l = !1,
        d = -1;

    function u() {
      l && _ && (l = !1, _.length ? E = _.concat(E) : d = -1, E.length && h());
    }

    function h() {
      if (!l) {
        var e = a(u);
        l = !0;

        for (var t = E.length; t;) {
          for (_ = E, E = []; ++d < t;) {
            _ && _[d].run();
          }

          d = -1, t = E.length;
        }

        _ = null, l = !1, function (e) {
          if (r === clearTimeout) return clearTimeout(e);
          if ((r === s || !r) && clearTimeout) return r = clearTimeout, clearTimeout(e);

          try {
            r(e);
          } catch (t) {
            try {
              return r.call(null, e);
            } catch (t) {
              return r.call(this, e);
            }
          }
        }(e);
      }
    }

    function c(e, t) {
      this.fun = e, this.array = t;
    }

    function f() {}

    i.nextTick = function (e) {
      var t = new Array(arguments.length - 1);
      if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) {
        t[n - 1] = arguments[n];
      }
      E.push(new c(e, t)), 1 !== E.length || l || a(h);
    }, c.prototype.run = function () {
      this.fun.apply(null, this.array);
    }, i.title = "browser", i.browser = !0, i.env = {}, i.argv = [], i.version = "", i.versions = {}, i.on = f, i.addListener = f, i.once = f, i.off = f, i.removeListener = f, i.removeAllListeners = f, i.emit = f, i.prependListener = f, i.prependOnceListener = f, i.listeners = function (e) {
      return [];
    }, i.binding = function (e) {
      throw new Error("process.binding is not supported");
    }, i.cwd = function () {
      return "/";
    }, i.chdir = function (e) {
      throw new Error("process.chdir is not supported");
    }, i.umask = function () {
      return 0;
    };
  }, function (e, t, n) {
    var r, i, o;
    i = [n(11)], void 0 === (o = "function" == typeof (r = function r(e) {
      "use strict";

      var t = function t(e, n, i) {
        if (void 0 === e && (e = t.DEFAULT_CAPACITY), void 0 === n && (n = t.DEFAULT_ENDIAN), void 0 === i && (i = t.DEFAULT_NOASSERT), !i) {
          if ((e |= 0) < 0) throw RangeError("Illegal capacity");
          n = !!n, i = !!i;
        }

        this.buffer = 0 === e ? r : new ArrayBuffer(e), this.view = 0 === e ? null : new Uint8Array(this.buffer), this.offset = 0, this.markedOffset = -1, this.limit = e, this.littleEndian = n, this.noAssert = i;
      };

      t.VERSION = "5.0.1", t.LITTLE_ENDIAN = !0, t.BIG_ENDIAN = !1, t.DEFAULT_CAPACITY = 16, t.DEFAULT_ENDIAN = t.BIG_ENDIAN, t.DEFAULT_NOASSERT = !1, t.Long = e || null;
      var n = t.prototype;
      n.__isByteBuffer__, Object.defineProperty(n, "__isByteBuffer__", {
        value: !0,
        enumerable: !1,
        configurable: !1
      });
      var r = new ArrayBuffer(0),
          i = String.fromCharCode;

      function o(e) {
        var t = 0;
        return function () {
          return t < e.length ? e.charCodeAt(t++) : null;
        };
      }

      function s() {
        var e = [],
            t = [];
        return function () {
          if (0 === arguments.length) return t.join("") + i.apply(String, e);
          e.length + arguments.length > 1024 && (t.push(i.apply(String, e)), e.length = 0), Array.prototype.push.apply(e, arguments);
        };
      }

      function a(e, t, n, r, i) {
        var o,
            s,
            a = 8 * i - r - 1,
            _ = (1 << a) - 1,
            E = _ >> 1,
            l = -7,
            d = n ? i - 1 : 0,
            u = n ? -1 : 1,
            h = e[t + d];

        for (d += u, o = h & (1 << -l) - 1, h >>= -l, l += a; l > 0; o = 256 * o + e[t + d], d += u, l -= 8) {
          ;
        }

        for (s = o & (1 << -l) - 1, o >>= -l, l += r; l > 0; s = 256 * s + e[t + d], d += u, l -= 8) {
          ;
        }

        if (0 === o) o = 1 - E;else {
          if (o === _) return s ? NaN : 1 / 0 * (h ? -1 : 1);
          s += Math.pow(2, r), o -= E;
        }
        return (h ? -1 : 1) * s * Math.pow(2, o - r);
      }

      function _(e, t, n, r, i, o) {
        var s,
            a,
            _,
            E = 8 * o - i - 1,
            l = (1 << E) - 1,
            d = l >> 1,
            u = 23 === i ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
            h = r ? 0 : o - 1,
            c = r ? 1 : -1,
            f = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;

        for (t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (a = isNaN(t) ? 1 : 0, s = l) : (s = Math.floor(Math.log(t) / Math.LN2), t * (_ = Math.pow(2, -s)) < 1 && (s--, _ *= 2), (t += s + d >= 1 ? u / _ : u * Math.pow(2, 1 - d)) * _ >= 2 && (s++, _ /= 2), s + d >= l ? (a = 0, s = l) : s + d >= 1 ? (a = (t * _ - 1) * Math.pow(2, i), s += d) : (a = t * Math.pow(2, d - 1) * Math.pow(2, i), s = 0)); i >= 8; e[n + h] = 255 & a, h += c, a /= 256, i -= 8) {
          ;
        }

        for (s = s << i | a, E += i; E > 0; e[n + h] = 255 & s, h += c, s /= 256, E -= 8) {
          ;
        }

        e[n + h - c] |= 128 * f;
      }

      t.accessor = function () {
        return Uint8Array;
      }, t.allocate = function (e, n, r) {
        return new t(e, n, r);
      }, t.concat = function (e, n, r, i) {
        "boolean" != typeof n && "string" == typeof n || (i = r, r = n, n = void 0);

        for (var o, s = 0, a = 0, _ = e.length; a < _; ++a) {
          t.isByteBuffer(e[a]) || (e[a] = t.wrap(e[a], n)), (o = e[a].limit - e[a].offset) > 0 && (s += o);
        }

        if (0 === s) return new t(0, r, i);
        var E,
            l = new t(s, r, i);

        for (a = 0; a < _;) {
          (o = (E = e[a++]).limit - E.offset) <= 0 || (l.view.set(E.view.subarray(E.offset, E.limit), l.offset), l.offset += o);
        }

        return l.limit = l.offset, l.offset = 0, l;
      }, t.isByteBuffer = function (e) {
        return !0 === (e && e.__isByteBuffer__);
      }, t.type = function () {
        return ArrayBuffer;
      }, t.wrap = function (e, r, i, o) {
        if ("string" != typeof r && (o = i, i = r, r = void 0), "string" == typeof e) switch (void 0 === r && (r = "utf8"), r) {
          case "base64":
            return t.fromBase64(e, i);

          case "hex":
            return t.fromHex(e, i);

          case "binary":
            return t.fromBinary(e, i);

          case "utf8":
            return t.fromUTF8(e, i);

          case "debug":
            return t.fromDebug(e, i);

          default:
            throw Error("Unsupported encoding: " + r);
        }
        if (null === e || "object" != _typeof(e)) throw TypeError("Illegal buffer");
        var s;
        if (t.isByteBuffer(e)) return (s = n.clone.call(e)).markedOffset = -1, s;
        if (e instanceof Uint8Array) s = new t(0, i, o), e.length > 0 && (s.buffer = e.buffer, s.offset = e.byteOffset, s.limit = e.byteOffset + e.byteLength, s.view = new Uint8Array(e.buffer));else if (e instanceof ArrayBuffer) s = new t(0, i, o), e.byteLength > 0 && (s.buffer = e, s.offset = 0, s.limit = e.byteLength, s.view = e.byteLength > 0 ? new Uint8Array(e) : null);else {
          if ("[object Array]" !== Object.prototype.toString.call(e)) throw TypeError("Illegal buffer");
          (s = new t(e.length, i, o)).limit = e.length;

          for (var a = 0; a < e.length; ++a) {
            s.view[a] = e[a];
          }
        }
        return s;
      }, n.writeBitSet = function (e, t) {
        var n = void 0 === t;

        if (n && (t = this.offset), !this.noAssert) {
          if (!(e instanceof Array)) throw TypeError("Illegal BitSet: Not an array");
          if ("number" != typeof t || t % 1 != 0) throw TypeError("Illegal offset: " + t + " (not an integer)");
          if ((t >>>= 0) < 0 || t + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + t + " (+0) <= " + this.buffer.byteLength);
        }

        var r,
            i = t,
            o = e.length,
            s = o >> 3,
            a = 0;

        for (t += this.writeVarint32(o, t); s--;) {
          r = 1 & !!e[a++] | (1 & !!e[a++]) << 1 | (1 & !!e[a++]) << 2 | (1 & !!e[a++]) << 3 | (1 & !!e[a++]) << 4 | (1 & !!e[a++]) << 5 | (1 & !!e[a++]) << 6 | (1 & !!e[a++]) << 7, this.writeByte(r, t++);
        }

        if (a < o) {
          var _ = 0;

          for (r = 0; a < o;) {
            r |= (1 & !!e[a++]) << _++;
          }

          this.writeByte(r, t++);
        }

        return n ? (this.offset = t, this) : t - i;
      }, n.readBitSet = function (e) {
        var t = void 0 === e;
        t && (e = this.offset);
        var n,
            r = this.readVarint32(e),
            i = r.value,
            o = i >> 3,
            s = 0,
            a = [];

        for (e += r.length; o--;) {
          n = this.readByte(e++), a[s++] = !!(1 & n), a[s++] = !!(2 & n), a[s++] = !!(4 & n), a[s++] = !!(8 & n), a[s++] = !!(16 & n), a[s++] = !!(32 & n), a[s++] = !!(64 & n), a[s++] = !!(128 & n);
        }

        if (s < i) {
          var _ = 0;

          for (n = this.readByte(e++); s < i;) {
            a[s++] = !!(n >> _++ & 1);
          }
        }

        return t && (this.offset = e), a;
      }, n.readBytes = function (e, t) {
        var n = void 0 === t;

        if (n && (t = this.offset), !this.noAssert) {
          if ("number" != typeof t || t % 1 != 0) throw TypeError("Illegal offset: " + t + " (not an integer)");
          if ((t >>>= 0) < 0 || t + e > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + t + " (+" + e + ") <= " + this.buffer.byteLength);
        }

        var r = this.slice(t, t + e);
        return n && (this.offset += e), r;
      }, n.writeBytes = n.append, n.writeInt8 = function (e, t) {
        var n = void 0 === t;

        if (n && (t = this.offset), !this.noAssert) {
          if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal value: " + e + " (not an integer)");
          if (e |= 0, "number" != typeof t || t % 1 != 0) throw TypeError("Illegal offset: " + t + " (not an integer)");
          if ((t >>>= 0) < 0 || t + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + t + " (+0) <= " + this.buffer.byteLength);
        }

        t += 1;
        var r = this.buffer.byteLength;
        return t > r && this.resize((r *= 2) > t ? r : t), t -= 1, this.view[t] = e, n && (this.offset += 1), this;
      }, n.writeByte = n.writeInt8, n.readInt8 = function (e) {
        var t = void 0 === e;

        if (t && (e = this.offset), !this.noAssert) {
          if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal offset: " + e + " (not an integer)");
          if ((e >>>= 0) < 0 || e + 1 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + e + " (+1) <= " + this.buffer.byteLength);
        }

        var n = this.view[e];
        return 128 == (128 & n) && (n = -(255 - n + 1)), t && (this.offset += 1), n;
      }, n.readByte = n.readInt8, n.writeUint8 = function (e, t) {
        var n = void 0 === t;

        if (n && (t = this.offset), !this.noAssert) {
          if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal value: " + e + " (not an integer)");
          if (e >>>= 0, "number" != typeof t || t % 1 != 0) throw TypeError("Illegal offset: " + t + " (not an integer)");
          if ((t >>>= 0) < 0 || t + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + t + " (+0) <= " + this.buffer.byteLength);
        }

        t += 1;
        var r = this.buffer.byteLength;
        return t > r && this.resize((r *= 2) > t ? r : t), t -= 1, this.view[t] = e, n && (this.offset += 1), this;
      }, n.writeUInt8 = n.writeUint8, n.readUint8 = function (e) {
        var t = void 0 === e;

        if (t && (e = this.offset), !this.noAssert) {
          if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal offset: " + e + " (not an integer)");
          if ((e >>>= 0) < 0 || e + 1 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + e + " (+1) <= " + this.buffer.byteLength);
        }

        var n = this.view[e];
        return t && (this.offset += 1), n;
      }, n.readUInt8 = n.readUint8, n.writeInt16 = function (e, t) {
        var n = void 0 === t;

        if (n && (t = this.offset), !this.noAssert) {
          if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal value: " + e + " (not an integer)");
          if (e |= 0, "number" != typeof t || t % 1 != 0) throw TypeError("Illegal offset: " + t + " (not an integer)");
          if ((t >>>= 0) < 0 || t + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + t + " (+0) <= " + this.buffer.byteLength);
        }

        t += 2;
        var r = this.buffer.byteLength;
        return t > r && this.resize((r *= 2) > t ? r : t), t -= 2, this.littleEndian ? (this.view[t + 1] = (65280 & e) >>> 8, this.view[t] = 255 & e) : (this.view[t] = (65280 & e) >>> 8, this.view[t + 1] = 255 & e), n && (this.offset += 2), this;
      }, n.writeShort = n.writeInt16, n.readInt16 = function (e) {
        var t = void 0 === e;

        if (t && (e = this.offset), !this.noAssert) {
          if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal offset: " + e + " (not an integer)");
          if ((e >>>= 0) < 0 || e + 2 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + e + " (+2) <= " + this.buffer.byteLength);
        }

        var n = 0;
        return this.littleEndian ? (n = this.view[e], n |= this.view[e + 1] << 8) : (n = this.view[e] << 8, n |= this.view[e + 1]), 32768 == (32768 & n) && (n = -(65535 - n + 1)), t && (this.offset += 2), n;
      }, n.readShort = n.readInt16, n.writeUint16 = function (e, t) {
        var n = void 0 === t;

        if (n && (t = this.offset), !this.noAssert) {
          if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal value: " + e + " (not an integer)");
          if (e >>>= 0, "number" != typeof t || t % 1 != 0) throw TypeError("Illegal offset: " + t + " (not an integer)");
          if ((t >>>= 0) < 0 || t + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + t + " (+0) <= " + this.buffer.byteLength);
        }

        t += 2;
        var r = this.buffer.byteLength;
        return t > r && this.resize((r *= 2) > t ? r : t), t -= 2, this.littleEndian ? (this.view[t + 1] = (65280 & e) >>> 8, this.view[t] = 255 & e) : (this.view[t] = (65280 & e) >>> 8, this.view[t + 1] = 255 & e), n && (this.offset += 2), this;
      }, n.writeUInt16 = n.writeUint16, n.readUint16 = function (e) {
        var t = void 0 === e;

        if (t && (e = this.offset), !this.noAssert) {
          if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal offset: " + e + " (not an integer)");
          if ((e >>>= 0) < 0 || e + 2 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + e + " (+2) <= " + this.buffer.byteLength);
        }

        var n = 0;
        return this.littleEndian ? (n = this.view[e], n |= this.view[e + 1] << 8) : (n = this.view[e] << 8, n |= this.view[e + 1]), t && (this.offset += 2), n;
      }, n.readUInt16 = n.readUint16, n.writeInt32 = function (e, t) {
        var n = void 0 === t;

        if (n && (t = this.offset), !this.noAssert) {
          if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal value: " + e + " (not an integer)");
          if (e |= 0, "number" != typeof t || t % 1 != 0) throw TypeError("Illegal offset: " + t + " (not an integer)");
          if ((t >>>= 0) < 0 || t + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + t + " (+0) <= " + this.buffer.byteLength);
        }

        t += 4;
        var r = this.buffer.byteLength;
        return t > r && this.resize((r *= 2) > t ? r : t), t -= 4, this.littleEndian ? (this.view[t + 3] = e >>> 24 & 255, this.view[t + 2] = e >>> 16 & 255, this.view[t + 1] = e >>> 8 & 255, this.view[t] = 255 & e) : (this.view[t] = e >>> 24 & 255, this.view[t + 1] = e >>> 16 & 255, this.view[t + 2] = e >>> 8 & 255, this.view[t + 3] = 255 & e), n && (this.offset += 4), this;
      }, n.writeInt = n.writeInt32, n.readInt32 = function (e) {
        var t = void 0 === e;

        if (t && (e = this.offset), !this.noAssert) {
          if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal offset: " + e + " (not an integer)");
          if ((e >>>= 0) < 0 || e + 4 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + e + " (+4) <= " + this.buffer.byteLength);
        }

        var n = 0;
        return this.littleEndian ? (n = this.view[e + 2] << 16, n |= this.view[e + 1] << 8, n |= this.view[e], n += this.view[e + 3] << 24 >>> 0) : (n = this.view[e + 1] << 16, n |= this.view[e + 2] << 8, n |= this.view[e + 3], n += this.view[e] << 24 >>> 0), n |= 0, t && (this.offset += 4), n;
      }, n.readInt = n.readInt32, n.writeUint32 = function (e, t) {
        var n = void 0 === t;

        if (n && (t = this.offset), !this.noAssert) {
          if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal value: " + e + " (not an integer)");
          if (e >>>= 0, "number" != typeof t || t % 1 != 0) throw TypeError("Illegal offset: " + t + " (not an integer)");
          if ((t >>>= 0) < 0 || t + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + t + " (+0) <= " + this.buffer.byteLength);
        }

        t += 4;
        var r = this.buffer.byteLength;
        return t > r && this.resize((r *= 2) > t ? r : t), t -= 4, this.littleEndian ? (this.view[t + 3] = e >>> 24 & 255, this.view[t + 2] = e >>> 16 & 255, this.view[t + 1] = e >>> 8 & 255, this.view[t] = 255 & e) : (this.view[t] = e >>> 24 & 255, this.view[t + 1] = e >>> 16 & 255, this.view[t + 2] = e >>> 8 & 255, this.view[t + 3] = 255 & e), n && (this.offset += 4), this;
      }, n.writeUInt32 = n.writeUint32, n.readUint32 = function (e) {
        var t = void 0 === e;

        if (t && (e = this.offset), !this.noAssert) {
          if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal offset: " + e + " (not an integer)");
          if ((e >>>= 0) < 0 || e + 4 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + e + " (+4) <= " + this.buffer.byteLength);
        }

        var n = 0;
        return this.littleEndian ? (n = this.view[e + 2] << 16, n |= this.view[e + 1] << 8, n |= this.view[e], n += this.view[e + 3] << 24 >>> 0) : (n = this.view[e + 1] << 16, n |= this.view[e + 2] << 8, n |= this.view[e + 3], n += this.view[e] << 24 >>> 0), t && (this.offset += 4), n;
      }, n.readUInt32 = n.readUint32, e && (n.writeInt64 = function (t, n) {
        var r = void 0 === n;

        if (r && (n = this.offset), !this.noAssert) {
          if ("number" == typeof t) t = e.fromNumber(t);else if ("string" == typeof t) t = e.fromString(t);else if (!(t && t instanceof e)) throw TypeError("Illegal value: " + t + " (not an integer or Long)");
          if ("number" != typeof n || n % 1 != 0) throw TypeError("Illegal offset: " + n + " (not an integer)");
          if ((n >>>= 0) < 0 || n + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + n + " (+0) <= " + this.buffer.byteLength);
        }

        "number" == typeof t ? t = e.fromNumber(t) : "string" == typeof t && (t = e.fromString(t)), n += 8;
        var i = this.buffer.byteLength;
        n > i && this.resize((i *= 2) > n ? i : n), n -= 8;
        var o = t.low,
            s = t.high;
        return this.littleEndian ? (this.view[n + 3] = o >>> 24 & 255, this.view[n + 2] = o >>> 16 & 255, this.view[n + 1] = o >>> 8 & 255, this.view[n] = 255 & o, n += 4, this.view[n + 3] = s >>> 24 & 255, this.view[n + 2] = s >>> 16 & 255, this.view[n + 1] = s >>> 8 & 255, this.view[n] = 255 & s) : (this.view[n] = s >>> 24 & 255, this.view[n + 1] = s >>> 16 & 255, this.view[n + 2] = s >>> 8 & 255, this.view[n + 3] = 255 & s, n += 4, this.view[n] = o >>> 24 & 255, this.view[n + 1] = o >>> 16 & 255, this.view[n + 2] = o >>> 8 & 255, this.view[n + 3] = 255 & o), r && (this.offset += 8), this;
      }, n.writeLong = n.writeInt64, n.readInt64 = function (t) {
        var n = void 0 === t;

        if (n && (t = this.offset), !this.noAssert) {
          if ("number" != typeof t || t % 1 != 0) throw TypeError("Illegal offset: " + t + " (not an integer)");
          if ((t >>>= 0) < 0 || t + 8 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + t + " (+8) <= " + this.buffer.byteLength);
        }

        var r = 0,
            i = 0;
        this.littleEndian ? (r = this.view[t + 2] << 16, r |= this.view[t + 1] << 8, r |= this.view[t], r += this.view[t + 3] << 24 >>> 0, t += 4, i = this.view[t + 2] << 16, i |= this.view[t + 1] << 8, i |= this.view[t], i += this.view[t + 3] << 24 >>> 0) : (i = this.view[t + 1] << 16, i |= this.view[t + 2] << 8, i |= this.view[t + 3], i += this.view[t] << 24 >>> 0, t += 4, r = this.view[t + 1] << 16, r |= this.view[t + 2] << 8, r |= this.view[t + 3], r += this.view[t] << 24 >>> 0);
        var o = new e(r, i, !1);
        return n && (this.offset += 8), o;
      }, n.readLong = n.readInt64, n.writeUint64 = function (t, n) {
        var r = void 0 === n;

        if (r && (n = this.offset), !this.noAssert) {
          if ("number" == typeof t) t = e.fromNumber(t);else if ("string" == typeof t) t = e.fromString(t);else if (!(t && t instanceof e)) throw TypeError("Illegal value: " + t + " (not an integer or Long)");
          if ("number" != typeof n || n % 1 != 0) throw TypeError("Illegal offset: " + n + " (not an integer)");
          if ((n >>>= 0) < 0 || n + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + n + " (+0) <= " + this.buffer.byteLength);
        }

        "number" == typeof t ? t = e.fromNumber(t) : "string" == typeof t && (t = e.fromString(t)), n += 8;
        var i = this.buffer.byteLength;
        n > i && this.resize((i *= 2) > n ? i : n), n -= 8;
        var o = t.low,
            s = t.high;
        return this.littleEndian ? (this.view[n + 3] = o >>> 24 & 255, this.view[n + 2] = o >>> 16 & 255, this.view[n + 1] = o >>> 8 & 255, this.view[n] = 255 & o, n += 4, this.view[n + 3] = s >>> 24 & 255, this.view[n + 2] = s >>> 16 & 255, this.view[n + 1] = s >>> 8 & 255, this.view[n] = 255 & s) : (this.view[n] = s >>> 24 & 255, this.view[n + 1] = s >>> 16 & 255, this.view[n + 2] = s >>> 8 & 255, this.view[n + 3] = 255 & s, n += 4, this.view[n] = o >>> 24 & 255, this.view[n + 1] = o >>> 16 & 255, this.view[n + 2] = o >>> 8 & 255, this.view[n + 3] = 255 & o), r && (this.offset += 8), this;
      }, n.writeUInt64 = n.writeUint64, n.readUint64 = function (t) {
        var n = void 0 === t;

        if (n && (t = this.offset), !this.noAssert) {
          if ("number" != typeof t || t % 1 != 0) throw TypeError("Illegal offset: " + t + " (not an integer)");
          if ((t >>>= 0) < 0 || t + 8 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + t + " (+8) <= " + this.buffer.byteLength);
        }

        var r = 0,
            i = 0;
        this.littleEndian ? (r = this.view[t + 2] << 16, r |= this.view[t + 1] << 8, r |= this.view[t], r += this.view[t + 3] << 24 >>> 0, t += 4, i = this.view[t + 2] << 16, i |= this.view[t + 1] << 8, i |= this.view[t], i += this.view[t + 3] << 24 >>> 0) : (i = this.view[t + 1] << 16, i |= this.view[t + 2] << 8, i |= this.view[t + 3], i += this.view[t] << 24 >>> 0, t += 4, r = this.view[t + 1] << 16, r |= this.view[t + 2] << 8, r |= this.view[t + 3], r += this.view[t] << 24 >>> 0);
        var o = new e(r, i, !0);
        return n && (this.offset += 8), o;
      }, n.readUInt64 = n.readUint64), n.writeFloat32 = function (e, t) {
        var n = void 0 === t;

        if (n && (t = this.offset), !this.noAssert) {
          if ("number" != typeof e) throw TypeError("Illegal value: " + e + " (not a number)");
          if ("number" != typeof t || t % 1 != 0) throw TypeError("Illegal offset: " + t + " (not an integer)");
          if ((t >>>= 0) < 0 || t + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + t + " (+0) <= " + this.buffer.byteLength);
        }

        t += 4;
        var r = this.buffer.byteLength;
        return t > r && this.resize((r *= 2) > t ? r : t), t -= 4, _(this.view, e, t, this.littleEndian, 23, 4), n && (this.offset += 4), this;
      }, n.writeFloat = n.writeFloat32, n.readFloat32 = function (e) {
        var t = void 0 === e;

        if (t && (e = this.offset), !this.noAssert) {
          if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal offset: " + e + " (not an integer)");
          if ((e >>>= 0) < 0 || e + 4 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + e + " (+4) <= " + this.buffer.byteLength);
        }

        var n = a(this.view, e, this.littleEndian, 23, 4);
        return t && (this.offset += 4), n;
      }, n.readFloat = n.readFloat32, n.writeFloat64 = function (e, t) {
        var n = void 0 === t;

        if (n && (t = this.offset), !this.noAssert) {
          if ("number" != typeof e) throw TypeError("Illegal value: " + e + " (not a number)");
          if ("number" != typeof t || t % 1 != 0) throw TypeError("Illegal offset: " + t + " (not an integer)");
          if ((t >>>= 0) < 0 || t + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + t + " (+0) <= " + this.buffer.byteLength);
        }

        t += 8;
        var r = this.buffer.byteLength;
        return t > r && this.resize((r *= 2) > t ? r : t), t -= 8, _(this.view, e, t, this.littleEndian, 52, 8), n && (this.offset += 8), this;
      }, n.writeDouble = n.writeFloat64, n.readFloat64 = function (e) {
        var t = void 0 === e;

        if (t && (e = this.offset), !this.noAssert) {
          if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal offset: " + e + " (not an integer)");
          if ((e >>>= 0) < 0 || e + 8 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + e + " (+8) <= " + this.buffer.byteLength);
        }

        var n = a(this.view, e, this.littleEndian, 52, 8);
        return t && (this.offset += 8), n;
      }, n.readDouble = n.readFloat64, t.MAX_VARINT32_BYTES = 5, t.calculateVarint32 = function (e) {
        return (e >>>= 0) < 128 ? 1 : e < 16384 ? 2 : e < 1 << 21 ? 3 : e < 1 << 28 ? 4 : 5;
      }, t.zigZagEncode32 = function (e) {
        return ((e |= 0) << 1 ^ e >> 31) >>> 0;
      }, t.zigZagDecode32 = function (e) {
        return e >>> 1 ^ -(1 & e) | 0;
      }, n.writeVarint32 = function (e, n) {
        var r = void 0 === n;

        if (r && (n = this.offset), !this.noAssert) {
          if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal value: " + e + " (not an integer)");
          if (e |= 0, "number" != typeof n || n % 1 != 0) throw TypeError("Illegal offset: " + n + " (not an integer)");
          if ((n >>>= 0) < 0 || n + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + n + " (+0) <= " + this.buffer.byteLength);
        }

        var i,
            o = t.calculateVarint32(e);
        n += o;
        var s = this.buffer.byteLength;

        for (n > s && this.resize((s *= 2) > n ? s : n), n -= o, e >>>= 0; e >= 128;) {
          i = 127 & e | 128, this.view[n++] = i, e >>>= 7;
        }

        return this.view[n++] = e, r ? (this.offset = n, this) : o;
      }, n.writeVarint32ZigZag = function (e, n) {
        return this.writeVarint32(t.zigZagEncode32(e), n);
      }, n.readVarint32 = function (e) {
        var t = void 0 === e;

        if (t && (e = this.offset), !this.noAssert) {
          if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal offset: " + e + " (not an integer)");
          if ((e >>>= 0) < 0 || e + 1 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + e + " (+1) <= " + this.buffer.byteLength);
        }

        var n,
            r = 0,
            i = 0;

        do {
          if (!this.noAssert && e > this.limit) {
            var o = Error("Truncated");
            throw o.truncated = !0, o;
          }

          n = this.view[e++], r < 5 && (i |= (127 & n) << 7 * r), ++r;
        } while (0 != (128 & n));

        return i |= 0, t ? (this.offset = e, i) : {
          value: i,
          length: r
        };
      }, n.readVarint32ZigZag = function (e) {
        var n = this.readVarint32(e);
        return "object" == _typeof(n) ? n.value = t.zigZagDecode32(n.value) : n = t.zigZagDecode32(n), n;
      }, e && (t.MAX_VARINT64_BYTES = 10, t.calculateVarint64 = function (t) {
        "number" == typeof t ? t = e.fromNumber(t) : "string" == typeof t && (t = e.fromString(t));
        var n = t.toInt() >>> 0,
            r = t.shiftRightUnsigned(28).toInt() >>> 0,
            i = t.shiftRightUnsigned(56).toInt() >>> 0;
        return 0 == i ? 0 == r ? n < 16384 ? n < 128 ? 1 : 2 : n < 1 << 21 ? 3 : 4 : r < 16384 ? r < 128 ? 5 : 6 : r < 1 << 21 ? 7 : 8 : i < 128 ? 9 : 10;
      }, t.zigZagEncode64 = function (t) {
        return "number" == typeof t ? t = e.fromNumber(t, !1) : "string" == typeof t ? t = e.fromString(t, !1) : !1 !== t.unsigned && (t = t.toSigned()), t.shiftLeft(1).xor(t.shiftRight(63)).toUnsigned();
      }, t.zigZagDecode64 = function (t) {
        return "number" == typeof t ? t = e.fromNumber(t, !1) : "string" == typeof t ? t = e.fromString(t, !1) : !1 !== t.unsigned && (t = t.toSigned()), t.shiftRightUnsigned(1).xor(t.and(e.ONE).toSigned().negate()).toSigned();
      }, n.writeVarint64 = function (n, r) {
        var i = void 0 === r;

        if (i && (r = this.offset), !this.noAssert) {
          if ("number" == typeof n) n = e.fromNumber(n);else if ("string" == typeof n) n = e.fromString(n);else if (!(n && n instanceof e)) throw TypeError("Illegal value: " + n + " (not an integer or Long)");
          if ("number" != typeof r || r % 1 != 0) throw TypeError("Illegal offset: " + r + " (not an integer)");
          if ((r >>>= 0) < 0 || r + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + r + " (+0) <= " + this.buffer.byteLength);
        }

        "number" == typeof n ? n = e.fromNumber(n, !1) : "string" == typeof n ? n = e.fromString(n, !1) : !1 !== n.unsigned && (n = n.toSigned());

        var o = t.calculateVarint64(n),
            s = n.toInt() >>> 0,
            a = n.shiftRightUnsigned(28).toInt() >>> 0,
            _ = n.shiftRightUnsigned(56).toInt() >>> 0;

        r += o;
        var E = this.buffer.byteLength;

        switch (r > E && this.resize((E *= 2) > r ? E : r), r -= o, o) {
          case 10:
            this.view[r + 9] = _ >>> 7 & 1;

          case 9:
            this.view[r + 8] = 9 !== o ? 128 | _ : 127 & _;

          case 8:
            this.view[r + 7] = 8 !== o ? a >>> 21 | 128 : a >>> 21 & 127;

          case 7:
            this.view[r + 6] = 7 !== o ? a >>> 14 | 128 : a >>> 14 & 127;

          case 6:
            this.view[r + 5] = 6 !== o ? a >>> 7 | 128 : a >>> 7 & 127;

          case 5:
            this.view[r + 4] = 5 !== o ? 128 | a : 127 & a;

          case 4:
            this.view[r + 3] = 4 !== o ? s >>> 21 | 128 : s >>> 21 & 127;

          case 3:
            this.view[r + 2] = 3 !== o ? s >>> 14 | 128 : s >>> 14 & 127;

          case 2:
            this.view[r + 1] = 2 !== o ? s >>> 7 | 128 : s >>> 7 & 127;

          case 1:
            this.view[r] = 1 !== o ? 128 | s : 127 & s;
        }

        return i ? (this.offset += o, this) : o;
      }, n.writeVarint64ZigZag = function (e, n) {
        return this.writeVarint64(t.zigZagEncode64(e), n);
      }, n.readVarint64 = function (t) {
        var n = void 0 === t;

        if (n && (t = this.offset), !this.noAssert) {
          if ("number" != typeof t || t % 1 != 0) throw TypeError("Illegal offset: " + t + " (not an integer)");
          if ((t >>>= 0) < 0 || t + 1 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + t + " (+1) <= " + this.buffer.byteLength);
        }

        var r = t,
            i = 0,
            o = 0,
            s = 0,
            a = 0;
        if (i = 127 & (a = this.view[t++]), 128 & a && (i |= (127 & (a = this.view[t++])) << 7, (128 & a || this.noAssert && void 0 === a) && (i |= (127 & (a = this.view[t++])) << 14, (128 & a || this.noAssert && void 0 === a) && (i |= (127 & (a = this.view[t++])) << 21, (128 & a || this.noAssert && void 0 === a) && (o = 127 & (a = this.view[t++]), (128 & a || this.noAssert && void 0 === a) && (o |= (127 & (a = this.view[t++])) << 7, (128 & a || this.noAssert && void 0 === a) && (o |= (127 & (a = this.view[t++])) << 14, (128 & a || this.noAssert && void 0 === a) && (o |= (127 & (a = this.view[t++])) << 21, (128 & a || this.noAssert && void 0 === a) && (s = 127 & (a = this.view[t++]), (128 & a || this.noAssert && void 0 === a) && (s |= (127 & (a = this.view[t++])) << 7, 128 & a || this.noAssert && void 0 === a)))))))))) throw Error("Buffer overrun");

        var _ = e.fromBits(i | o << 28, o >>> 4 | s << 24, !1);

        return n ? (this.offset = t, _) : {
          value: _,
          length: t - r
        };
      }, n.readVarint64ZigZag = function (n) {
        var r = this.readVarint64(n);
        return r && r.value instanceof e ? r.value = t.zigZagDecode64(r.value) : r = t.zigZagDecode64(r), r;
      }), n.writeCString = function (e, t) {
        var n = void 0 === t;
        n && (t = this.offset);
        var r,
            i = e.length;

        if (!this.noAssert) {
          if ("string" != typeof e) throw TypeError("Illegal str: Not a string");

          for (r = 0; r < i; ++r) {
            if (0 === e.charCodeAt(r)) throw RangeError("Illegal str: Contains NULL-characters");
          }

          if ("number" != typeof t || t % 1 != 0) throw TypeError("Illegal offset: " + t + " (not an integer)");
          if ((t >>>= 0) < 0 || t + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + t + " (+0) <= " + this.buffer.byteLength);
        }

        i = l.calculateUTF16asUTF8(o(e))[1], t += i + 1;
        var s = this.buffer.byteLength;
        return t > s && this.resize((s *= 2) > t ? s : t), t -= i + 1, l.encodeUTF16toUTF8(o(e), function (e) {
          this.view[t++] = e;
        }.bind(this)), this.view[t++] = 0, n ? (this.offset = t, this) : i;
      }, n.readCString = function (e) {
        var t = void 0 === e;

        if (t && (e = this.offset), !this.noAssert) {
          if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal offset: " + e + " (not an integer)");
          if ((e >>>= 0) < 0 || e + 1 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + e + " (+1) <= " + this.buffer.byteLength);
        }

        var n,
            r = e,
            i = -1;
        return l.decodeUTF8toUTF16(function () {
          if (0 === i) return null;
          if (e >= this.limit) throw RangeError("Illegal range: Truncated data, " + e + " < " + this.limit);
          return 0 === (i = this.view[e++]) ? null : i;
        }.bind(this), n = s(), !0), t ? (this.offset = e, n()) : {
          string: n(),
          length: e - r
        };
      }, n.writeIString = function (e, t) {
        var n = void 0 === t;

        if (n && (t = this.offset), !this.noAssert) {
          if ("string" != typeof e) throw TypeError("Illegal str: Not a string");
          if ("number" != typeof t || t % 1 != 0) throw TypeError("Illegal offset: " + t + " (not an integer)");
          if ((t >>>= 0) < 0 || t + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + t + " (+0) <= " + this.buffer.byteLength);
        }

        var r,
            i = t;
        r = l.calculateUTF16asUTF8(o(e), this.noAssert)[1], t += 4 + r;
        var s = this.buffer.byteLength;
        if (t > s && this.resize((s *= 2) > t ? s : t), t -= 4 + r, this.littleEndian ? (this.view[t + 3] = r >>> 24 & 255, this.view[t + 2] = r >>> 16 & 255, this.view[t + 1] = r >>> 8 & 255, this.view[t] = 255 & r) : (this.view[t] = r >>> 24 & 255, this.view[t + 1] = r >>> 16 & 255, this.view[t + 2] = r >>> 8 & 255, this.view[t + 3] = 255 & r), t += 4, l.encodeUTF16toUTF8(o(e), function (e) {
          this.view[t++] = e;
        }.bind(this)), t !== i + 4 + r) throw RangeError("Illegal range: Truncated data, " + t + " == " + (t + 4 + r));
        return n ? (this.offset = t, this) : t - i;
      }, n.readIString = function (e) {
        var n = void 0 === e;

        if (n && (e = this.offset), !this.noAssert) {
          if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal offset: " + e + " (not an integer)");
          if ((e >>>= 0) < 0 || e + 4 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + e + " (+4) <= " + this.buffer.byteLength);
        }

        var r = e,
            i = this.readUint32(e),
            o = this.readUTF8String(i, t.METRICS_BYTES, e += 4);
        return e += o.length, n ? (this.offset = e, o.string) : {
          string: o.string,
          length: e - r
        };
      }, t.METRICS_CHARS = "c", t.METRICS_BYTES = "b", n.writeUTF8String = function (e, t) {
        var n,
            r = void 0 === t;

        if (r && (t = this.offset), !this.noAssert) {
          if ("number" != typeof t || t % 1 != 0) throw TypeError("Illegal offset: " + t + " (not an integer)");
          if ((t >>>= 0) < 0 || t + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + t + " (+0) <= " + this.buffer.byteLength);
        }

        var i = t;
        n = l.calculateUTF16asUTF8(o(e))[1], t += n;
        var s = this.buffer.byteLength;
        return t > s && this.resize((s *= 2) > t ? s : t), t -= n, l.encodeUTF16toUTF8(o(e), function (e) {
          this.view[t++] = e;
        }.bind(this)), r ? (this.offset = t, this) : t - i;
      }, n.writeString = n.writeUTF8String, t.calculateUTF8Chars = function (e) {
        return l.calculateUTF16asUTF8(o(e))[0];
      }, t.calculateUTF8Bytes = function (e) {
        return l.calculateUTF16asUTF8(o(e))[1];
      }, t.calculateString = t.calculateUTF8Bytes, n.readUTF8String = function (e, n, r) {
        "number" == typeof n && (r = n, n = void 0);
        var i = void 0 === r;

        if (i && (r = this.offset), void 0 === n && (n = t.METRICS_CHARS), !this.noAssert) {
          if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal length: " + e + " (not an integer)");
          if (e |= 0, "number" != typeof r || r % 1 != 0) throw TypeError("Illegal offset: " + r + " (not an integer)");
          if ((r >>>= 0) < 0 || r + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + r + " (+0) <= " + this.buffer.byteLength);
        }

        var o,
            a = 0,
            _ = r;

        if (n === t.METRICS_CHARS) {
          if (o = s(), l.decodeUTF8(function () {
            return a < e && r < this.limit ? this.view[r++] : null;
          }.bind(this), function (e) {
            ++a, l.UTF8toUTF16(e, o);
          }), a !== e) throw RangeError("Illegal range: Truncated data, " + a + " == " + e);
          return i ? (this.offset = r, o()) : {
            string: o(),
            length: r - _
          };
        }

        if (n === t.METRICS_BYTES) {
          if (!this.noAssert) {
            if ("number" != typeof r || r % 1 != 0) throw TypeError("Illegal offset: " + r + " (not an integer)");
            if ((r >>>= 0) < 0 || r + e > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + r + " (+" + e + ") <= " + this.buffer.byteLength);
          }

          var E = r + e;
          if (l.decodeUTF8toUTF16(function () {
            return r < E ? this.view[r++] : null;
          }.bind(this), o = s(), this.noAssert), r !== E) throw RangeError("Illegal range: Truncated data, " + r + " == " + E);
          return i ? (this.offset = r, o()) : {
            string: o(),
            length: r - _
          };
        }

        throw TypeError("Unsupported metrics: " + n);
      }, n.readString = n.readUTF8String, n.writeVString = function (e, n) {
        var r = void 0 === n;

        if (r && (n = this.offset), !this.noAssert) {
          if ("string" != typeof e) throw TypeError("Illegal str: Not a string");
          if ("number" != typeof n || n % 1 != 0) throw TypeError("Illegal offset: " + n + " (not an integer)");
          if ((n >>>= 0) < 0 || n + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + n + " (+0) <= " + this.buffer.byteLength);
        }

        var i,
            s,
            a = n;
        i = l.calculateUTF16asUTF8(o(e), this.noAssert)[1], s = t.calculateVarint32(i), n += s + i;
        var _ = this.buffer.byteLength;
        if (n > _ && this.resize((_ *= 2) > n ? _ : n), n -= s + i, n += this.writeVarint32(i, n), l.encodeUTF16toUTF8(o(e), function (e) {
          this.view[n++] = e;
        }.bind(this)), n !== a + i + s) throw RangeError("Illegal range: Truncated data, " + n + " == " + (n + i + s));
        return r ? (this.offset = n, this) : n - a;
      }, n.readVString = function (e) {
        var n = void 0 === e;

        if (n && (e = this.offset), !this.noAssert) {
          if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal offset: " + e + " (not an integer)");
          if ((e >>>= 0) < 0 || e + 1 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + e + " (+1) <= " + this.buffer.byteLength);
        }

        var r = e,
            i = this.readVarint32(e),
            o = this.readUTF8String(i.value, t.METRICS_BYTES, e += i.length);
        return e += o.length, n ? (this.offset = e, o.string) : {
          string: o.string,
          length: e - r
        };
      }, n.append = function (e, n, r) {
        "number" != typeof n && "string" == typeof n || (r = n, n = void 0);
        var i = void 0 === r;

        if (i && (r = this.offset), !this.noAssert) {
          if ("number" != typeof r || r % 1 != 0) throw TypeError("Illegal offset: " + r + " (not an integer)");
          if ((r >>>= 0) < 0 || r + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + r + " (+0) <= " + this.buffer.byteLength);
        }

        e instanceof t || (e = t.wrap(e, n));
        var o = e.limit - e.offset;
        if (o <= 0) return this;
        r += o;
        var s = this.buffer.byteLength;
        return r > s && this.resize((s *= 2) > r ? s : r), r -= o, this.view.set(e.view.subarray(e.offset, e.limit), r), e.offset += o, i && (this.offset += o), this;
      }, n.appendTo = function (e, t) {
        return e.append(this, t), this;
      }, n.assert = function (e) {
        return this.noAssert = !e, this;
      }, n.capacity = function () {
        return this.buffer.byteLength;
      }, n.clear = function () {
        return this.offset = 0, this.limit = this.buffer.byteLength, this.markedOffset = -1, this;
      }, n.clone = function (e) {
        var n = new t(0, this.littleEndian, this.noAssert);
        return e ? (n.buffer = new ArrayBuffer(this.buffer.byteLength), n.view = new Uint8Array(n.buffer)) : (n.buffer = this.buffer, n.view = this.view), n.offset = this.offset, n.markedOffset = this.markedOffset, n.limit = this.limit, n;
      }, n.compact = function (e, t) {
        if (void 0 === e && (e = this.offset), void 0 === t && (t = this.limit), !this.noAssert) {
          if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal begin: Not an integer");
          if (e >>>= 0, "number" != typeof t || t % 1 != 0) throw TypeError("Illegal end: Not an integer");
          if (t >>>= 0, e < 0 || e > t || t > this.buffer.byteLength) throw RangeError("Illegal range: 0 <= " + e + " <= " + t + " <= " + this.buffer.byteLength);
        }

        if (0 === e && t === this.buffer.byteLength) return this;
        var n = t - e;
        if (0 === n) return this.buffer = r, this.view = null, this.markedOffset >= 0 && (this.markedOffset -= e), this.offset = 0, this.limit = 0, this;
        var i = new ArrayBuffer(n),
            o = new Uint8Array(i);
        return o.set(this.view.subarray(e, t)), this.buffer = i, this.view = o, this.markedOffset >= 0 && (this.markedOffset -= e), this.offset = 0, this.limit = n, this;
      }, n.copy = function (e, n) {
        if (void 0 === e && (e = this.offset), void 0 === n && (n = this.limit), !this.noAssert) {
          if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal begin: Not an integer");
          if (e >>>= 0, "number" != typeof n || n % 1 != 0) throw TypeError("Illegal end: Not an integer");
          if (n >>>= 0, e < 0 || e > n || n > this.buffer.byteLength) throw RangeError("Illegal range: 0 <= " + e + " <= " + n + " <= " + this.buffer.byteLength);
        }

        if (e === n) return new t(0, this.littleEndian, this.noAssert);
        var r = n - e,
            i = new t(r, this.littleEndian, this.noAssert);
        return i.offset = 0, i.limit = r, i.markedOffset >= 0 && (i.markedOffset -= e), this.copyTo(i, 0, e, n), i;
      }, n.copyTo = function (e, n, r, i) {
        var o, s;
        if (!this.noAssert && !t.isByteBuffer(e)) throw TypeError("Illegal target: Not a ByteBuffer");
        if (n = (s = void 0 === n) ? e.offset : 0 | n, r = (o = void 0 === r) ? this.offset : 0 | r, i = void 0 === i ? this.limit : 0 | i, n < 0 || n > e.buffer.byteLength) throw RangeError("Illegal target range: 0 <= " + n + " <= " + e.buffer.byteLength);
        if (r < 0 || i > this.buffer.byteLength) throw RangeError("Illegal source range: 0 <= " + r + " <= " + this.buffer.byteLength);
        var a = i - r;
        return 0 === a ? e : (e.ensureCapacity(n + a), e.view.set(this.view.subarray(r, i), n), o && (this.offset += a), s && (e.offset += a), this);
      }, n.ensureCapacity = function (e) {
        var t = this.buffer.byteLength;
        return t < e ? this.resize((t *= 2) > e ? t : e) : this;
      }, n.fill = function (e, t, n) {
        var r = void 0 === t;

        if (r && (t = this.offset), "string" == typeof e && e.length > 0 && (e = e.charCodeAt(0)), void 0 === t && (t = this.offset), void 0 === n && (n = this.limit), !this.noAssert) {
          if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal value: " + e + " (not an integer)");
          if (e |= 0, "number" != typeof t || t % 1 != 0) throw TypeError("Illegal begin: Not an integer");
          if (t >>>= 0, "number" != typeof n || n % 1 != 0) throw TypeError("Illegal end: Not an integer");
          if (n >>>= 0, t < 0 || t > n || n > this.buffer.byteLength) throw RangeError("Illegal range: 0 <= " + t + " <= " + n + " <= " + this.buffer.byteLength);
        }

        if (t >= n) return this;

        for (; t < n;) {
          this.view[t++] = e;
        }

        return r && (this.offset = t), this;
      }, n.flip = function () {
        return this.limit = this.offset, this.offset = 0, this;
      }, n.mark = function (e) {
        if (e = void 0 === e ? this.offset : e, !this.noAssert) {
          if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal offset: " + e + " (not an integer)");
          if ((e >>>= 0) < 0 || e + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + e + " (+0) <= " + this.buffer.byteLength);
        }

        return this.markedOffset = e, this;
      }, n.order = function (e) {
        if (!this.noAssert && "boolean" != typeof e) throw TypeError("Illegal littleEndian: Not a boolean");
        return this.littleEndian = !!e, this;
      }, n.LE = function (e) {
        return this.littleEndian = void 0 === e || !!e, this;
      }, n.BE = function (e) {
        return this.littleEndian = void 0 !== e && !e, this;
      }, n.prepend = function (e, n, r) {
        "number" != typeof n && "string" == typeof n || (r = n, n = void 0);
        var i = void 0 === r;

        if (i && (r = this.offset), !this.noAssert) {
          if ("number" != typeof r || r % 1 != 0) throw TypeError("Illegal offset: " + r + " (not an integer)");
          if ((r >>>= 0) < 0 || r + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + r + " (+0) <= " + this.buffer.byteLength);
        }

        e instanceof t || (e = t.wrap(e, n));
        var o = e.limit - e.offset;
        if (o <= 0) return this;
        var s = o - r;

        if (s > 0) {
          var a = new ArrayBuffer(this.buffer.byteLength + s),
              _ = new Uint8Array(a);

          _.set(this.view.subarray(r, this.buffer.byteLength), o), this.buffer = a, this.view = _, this.offset += s, this.markedOffset >= 0 && (this.markedOffset += s), this.limit += s, r += s;
        } else new Uint8Array(this.buffer);

        return this.view.set(e.view.subarray(e.offset, e.limit), r - o), e.offset = e.limit, i && (this.offset -= o), this;
      }, n.prependTo = function (e, t) {
        return e.prepend(this, t), this;
      }, n.printDebug = function (e) {
        "function" != typeof e && (e = console.log.bind(console)), e(this.toString() + "\n-------------------------------------------------------------------\n" + this.toDebug(!0));
      }, n.remaining = function () {
        return this.limit - this.offset;
      }, n.reset = function () {
        return this.markedOffset >= 0 ? (this.offset = this.markedOffset, this.markedOffset = -1) : this.offset = 0, this;
      }, n.resize = function (e) {
        if (!this.noAssert) {
          if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal capacity: " + e + " (not an integer)");
          if ((e |= 0) < 0) throw RangeError("Illegal capacity: 0 <= " + e);
        }

        if (this.buffer.byteLength < e) {
          var t = new ArrayBuffer(e),
              n = new Uint8Array(t);
          n.set(this.view), this.buffer = t, this.view = n;
        }

        return this;
      }, n.reverse = function (e, t) {
        if (void 0 === e && (e = this.offset), void 0 === t && (t = this.limit), !this.noAssert) {
          if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal begin: Not an integer");
          if (e >>>= 0, "number" != typeof t || t % 1 != 0) throw TypeError("Illegal end: Not an integer");
          if (t >>>= 0, e < 0 || e > t || t > this.buffer.byteLength) throw RangeError("Illegal range: 0 <= " + e + " <= " + t + " <= " + this.buffer.byteLength);
        }

        return e === t || Array.prototype.reverse.call(this.view.subarray(e, t)), this;
      }, n.skip = function (e) {
        if (!this.noAssert) {
          if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal length: " + e + " (not an integer)");
          e |= 0;
        }

        var t = this.offset + e;
        if (!this.noAssert && (t < 0 || t > this.buffer.byteLength)) throw RangeError("Illegal length: 0 <= " + this.offset + " + " + e + " <= " + this.buffer.byteLength);
        return this.offset = t, this;
      }, n.slice = function (e, t) {
        if (void 0 === e && (e = this.offset), void 0 === t && (t = this.limit), !this.noAssert) {
          if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal begin: Not an integer");
          if (e >>>= 0, "number" != typeof t || t % 1 != 0) throw TypeError("Illegal end: Not an integer");
          if (t >>>= 0, e < 0 || e > t || t > this.buffer.byteLength) throw RangeError("Illegal range: 0 <= " + e + " <= " + t + " <= " + this.buffer.byteLength);
        }

        var n = this.clone();
        return n.offset = e, n.limit = t, n;
      }, n.toBuffer = function (e) {
        var t = this.offset,
            n = this.limit;

        if (!this.noAssert) {
          if ("number" != typeof t || t % 1 != 0) throw TypeError("Illegal offset: Not an integer");
          if (t >>>= 0, "number" != typeof n || n % 1 != 0) throw TypeError("Illegal limit: Not an integer");
          if (n >>>= 0, t < 0 || t > n || n > this.buffer.byteLength) throw RangeError("Illegal range: 0 <= " + t + " <= " + n + " <= " + this.buffer.byteLength);
        }

        if (!e && 0 === t && n === this.buffer.byteLength) return this.buffer;
        if (t === n) return r;
        var i = new ArrayBuffer(n - t);
        return new Uint8Array(i).set(new Uint8Array(this.buffer).subarray(t, n), 0), i;
      }, n.toArrayBuffer = n.toBuffer, n.toString = function (e, t, n) {
        if (void 0 === e) return "ByteBufferAB(offset=" + this.offset + ",markedOffset=" + this.markedOffset + ",limit=" + this.limit + ",capacity=" + this.capacity() + ")";

        switch ("number" == typeof e && (n = t = e = "utf8"), e) {
          case "utf8":
            return this.toUTF8(t, n);

          case "base64":
            return this.toBase64(t, n);

          case "hex":
            return this.toHex(t, n);

          case "binary":
            return this.toBinary(t, n);

          case "debug":
            return this.toDebug();

          case "columns":
            return this.toColumns();

          default:
            throw Error("Unsupported encoding: " + e);
        }
      };

      var E = function () {
        for (var e = {}, t = [65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 43, 47], n = [], r = 0, i = t.length; r < i; ++r) {
          n[t[r]] = r;
        }

        return e.encode = function (e, n) {
          for (var r, i; null !== (r = e());) {
            n(t[r >> 2 & 63]), i = (3 & r) << 4, null !== (r = e()) ? (n(t[63 & ((i |= r >> 4 & 15) | r >> 4 & 15)]), i = (15 & r) << 2, null !== (r = e()) ? (n(t[63 & (i | r >> 6 & 3)]), n(t[63 & r])) : (n(t[63 & i]), n(61))) : (n(t[63 & i]), n(61), n(61));
          }
        }, e.decode = function (e, t) {
          var r, i, o;

          function s(e) {
            throw Error("Illegal character code: " + e);
          }

          for (; null !== (r = e());) {
            if (void 0 === (i = n[r]) && s(r), null !== (r = e()) && (void 0 === (o = n[r]) && s(r), t(i << 2 >>> 0 | (48 & o) >> 4), null !== (r = e()))) {
              if (void 0 === (i = n[r])) {
                if (61 === r) break;
                s(r);
              }

              if (t((15 & o) << 4 >>> 0 | (60 & i) >> 2), null !== (r = e())) {
                if (void 0 === (o = n[r])) {
                  if (61 === r) break;
                  s(r);
                }

                t((3 & i) << 6 >>> 0 | o);
              }
            }
          }
        }, e.test = function (e) {
          return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(e);
        }, e;
      }();

      n.toBase64 = function (e, t) {
        if (void 0 === e && (e = this.offset), void 0 === t && (t = this.limit), t |= 0, (e |= 0) < 0 || t > this.capacity || e > t) throw RangeError("begin, end");
        var n;
        return E.encode(function () {
          return e < t ? this.view[e++] : null;
        }.bind(this), n = s()), n();
      }, t.fromBase64 = function (e, n) {
        if ("string" != typeof e) throw TypeError("str");
        var r = new t(e.length / 4 * 3, n),
            i = 0;
        return E.decode(o(e), function (e) {
          r.view[i++] = e;
        }), r.limit = i, r;
      }, t.btoa = function (e) {
        return t.fromBinary(e).toBase64();
      }, t.atob = function (e) {
        return t.fromBase64(e).toBinary();
      }, n.toBinary = function (e, t) {
        if (void 0 === e && (e = this.offset), void 0 === t && (t = this.limit), t |= 0, (e |= 0) < 0 || t > this.capacity() || e > t) throw RangeError("begin, end");
        if (e === t) return "";

        for (var n = [], r = []; e < t;) {
          n.push(this.view[e++]), n.length >= 1024 && (r.push(String.fromCharCode.apply(String, n)), n = []);
        }

        return r.join("") + String.fromCharCode.apply(String, n);
      }, t.fromBinary = function (e, n) {
        if ("string" != typeof e) throw TypeError("str");

        for (var r, i = 0, o = e.length, s = new t(o, n); i < o;) {
          if ((r = e.charCodeAt(i)) > 255) throw RangeError("illegal char code: " + r);
          s.view[i++] = r;
        }

        return s.limit = o, s;
      }, n.toDebug = function (e) {
        for (var t, n = -1, r = this.buffer.byteLength, i = "", o = "", s = ""; n < r;) {
          if (-1 !== n && (i += (t = this.view[n]) < 16 ? "0" + t.toString(16).toUpperCase() : t.toString(16).toUpperCase(), e && (o += t > 32 && t < 127 ? String.fromCharCode(t) : ".")), ++n, e && n > 0 && n % 16 == 0 && n !== r) {
            for (; i.length < 51;) {
              i += " ";
            }

            s += i + o + "\n", i = o = "";
          }

          n === this.offset && n === this.limit ? i += n === this.markedOffset ? "!" : "|" : n === this.offset ? i += n === this.markedOffset ? "[" : "<" : n === this.limit ? i += n === this.markedOffset ? "]" : ">" : i += n === this.markedOffset ? "'" : e || 0 !== n && n !== r ? " " : "";
        }

        if (e && " " !== i) {
          for (; i.length < 51;) {
            i += " ";
          }

          s += i + o + "\n";
        }

        return e ? s : i;
      }, t.fromDebug = function (e, n, r) {
        for (var i, o, s = e.length, a = new t((s + 1) / 3 | 0, n, r), _ = 0, E = 0, l = !1, d = !1, u = !1, h = !1, c = !1; _ < s;) {
          switch (i = e.charAt(_++)) {
            case "!":
              if (!r) {
                if (d || u || h) {
                  c = !0;
                  break;
                }

                d = u = h = !0;
              }

              a.offset = a.markedOffset = a.limit = E, l = !1;
              break;

            case "|":
              if (!r) {
                if (d || h) {
                  c = !0;
                  break;
                }

                d = h = !0;
              }

              a.offset = a.limit = E, l = !1;
              break;

            case "[":
              if (!r) {
                if (d || u) {
                  c = !0;
                  break;
                }

                d = u = !0;
              }

              a.offset = a.markedOffset = E, l = !1;
              break;

            case "<":
              if (!r) {
                if (d) {
                  c = !0;
                  break;
                }

                d = !0;
              }

              a.offset = E, l = !1;
              break;

            case "]":
              if (!r) {
                if (h || u) {
                  c = !0;
                  break;
                }

                h = u = !0;
              }

              a.limit = a.markedOffset = E, l = !1;
              break;

            case ">":
              if (!r) {
                if (h) {
                  c = !0;
                  break;
                }

                h = !0;
              }

              a.limit = E, l = !1;
              break;

            case "'":
              if (!r) {
                if (u) {
                  c = !0;
                  break;
                }

                u = !0;
              }

              a.markedOffset = E, l = !1;
              break;

            case " ":
              l = !1;
              break;

            default:
              if (!r && l) {
                c = !0;
                break;
              }

              if (o = parseInt(i + e.charAt(_++), 16), !r && (isNaN(o) || o < 0 || o > 255)) throw TypeError("Illegal str: Not a debug encoded string");
              a.view[E++] = o, l = !0;
          }

          if (c) throw TypeError("Illegal str: Invalid symbol at " + _);
        }

        if (!r) {
          if (!d || !h) throw TypeError("Illegal str: Missing offset or limit");
          if (E < a.buffer.byteLength) throw TypeError("Illegal str: Not a debug encoded string (is it hex?) " + E + " < " + s);
        }

        return a;
      }, n.toHex = function (e, t) {
        if (e = void 0 === e ? this.offset : e, t = void 0 === t ? this.limit : t, !this.noAssert) {
          if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal begin: Not an integer");
          if (e >>>= 0, "number" != typeof t || t % 1 != 0) throw TypeError("Illegal end: Not an integer");
          if (t >>>= 0, e < 0 || e > t || t > this.buffer.byteLength) throw RangeError("Illegal range: 0 <= " + e + " <= " + t + " <= " + this.buffer.byteLength);
        }

        for (var n, r = new Array(t - e); e < t;) {
          (n = this.view[e++]) < 16 ? r.push("0", n.toString(16)) : r.push(n.toString(16));
        }

        return r.join("");
      }, t.fromHex = function (e, n, r) {
        if (!r) {
          if ("string" != typeof e) throw TypeError("Illegal str: Not a string");
          if (e.length % 2 != 0) throw TypeError("Illegal str: Length not a multiple of 2");
        }

        for (var i, o = e.length, s = new t(o / 2 | 0, n), a = 0, _ = 0; a < o; a += 2) {
          if (i = parseInt(e.substring(a, a + 2), 16), !r && (!isFinite(i) || i < 0 || i > 255)) throw TypeError("Illegal str: Contains non-hex characters");
          s.view[_++] = i;
        }

        return s.limit = _, s;
      };

      var l = function () {
        var e = {
          MAX_CODEPOINT: 1114111,
          encodeUTF8: function encodeUTF8(e, t) {
            var n = null;

            for ("number" == typeof e && (n = e, e = function e() {
              return null;
            }); null !== n || null !== (n = e());) {
              n < 128 ? t(127 & n) : n < 2048 ? (t(n >> 6 & 31 | 192), t(63 & n | 128)) : n < 65536 ? (t(n >> 12 & 15 | 224), t(n >> 6 & 63 | 128), t(63 & n | 128)) : (t(n >> 18 & 7 | 240), t(n >> 12 & 63 | 128), t(n >> 6 & 63 | 128), t(63 & n | 128)), n = null;
            }
          },
          decodeUTF8: function decodeUTF8(e, t) {
            for (var n, r, i, o, s = function s(e) {
              e = e.slice(0, e.indexOf(null));
              var t = Error(e.toString());
              throw t.name = "TruncatedError", t.bytes = e, t;
            }; null !== (n = e());) {
              if (0 == (128 & n)) t(n);else if (192 == (224 & n)) null === (r = e()) && s([n, r]), t((31 & n) << 6 | 63 & r);else if (224 == (240 & n)) (null === (r = e()) || null === (i = e())) && s([n, r, i]), t((15 & n) << 12 | (63 & r) << 6 | 63 & i);else {
                if (240 != (248 & n)) throw RangeError("Illegal starting byte: " + n);
                (null === (r = e()) || null === (i = e()) || null === (o = e())) && s([n, r, i, o]), t((7 & n) << 18 | (63 & r) << 12 | (63 & i) << 6 | 63 & o);
              }
            }
          },
          UTF16toUTF8: function UTF16toUTF8(e, t) {
            for (var n, r = null; null !== (n = null !== r ? r : e());) {
              n >= 55296 && n <= 57343 && null !== (r = e()) && r >= 56320 && r <= 57343 ? (t(1024 * (n - 55296) + r - 56320 + 65536), r = null) : t(n);
            }

            null !== r && t(r);
          },
          UTF8toUTF16: function UTF8toUTF16(e, t) {
            var n = null;

            for ("number" == typeof e && (n = e, e = function e() {
              return null;
            }); null !== n || null !== (n = e());) {
              n <= 65535 ? t(n) : (t(55296 + ((n -= 65536) >> 10)), t(n % 1024 + 56320)), n = null;
            }
          },
          encodeUTF16toUTF8: function encodeUTF16toUTF8(t, n) {
            e.UTF16toUTF8(t, function (t) {
              e.encodeUTF8(t, n);
            });
          },
          decodeUTF8toUTF16: function decodeUTF8toUTF16(t, n) {
            e.decodeUTF8(t, function (t) {
              e.UTF8toUTF16(t, n);
            });
          },
          calculateCodePoint: function calculateCodePoint(e) {
            return e < 128 ? 1 : e < 2048 ? 2 : e < 65536 ? 3 : 4;
          },
          calculateUTF8: function calculateUTF8(e) {
            for (var t, n = 0; null !== (t = e());) {
              n += t < 128 ? 1 : t < 2048 ? 2 : t < 65536 ? 3 : 4;
            }

            return n;
          },
          calculateUTF16asUTF8: function calculateUTF16asUTF8(t) {
            var n = 0,
                r = 0;
            return e.UTF16toUTF8(t, function (e) {
              ++n, r += e < 128 ? 1 : e < 2048 ? 2 : e < 65536 ? 3 : 4;
            }), [n, r];
          }
        };
        return e;
      }();

      return n.toUTF8 = function (e, t) {
        if (void 0 === e && (e = this.offset), void 0 === t && (t = this.limit), !this.noAssert) {
          if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal begin: Not an integer");
          if (e >>>= 0, "number" != typeof t || t % 1 != 0) throw TypeError("Illegal end: Not an integer");
          if (t >>>= 0, e < 0 || e > t || t > this.buffer.byteLength) throw RangeError("Illegal range: 0 <= " + e + " <= " + t + " <= " + this.buffer.byteLength);
        }

        var n;

        try {
          l.decodeUTF8toUTF16(function () {
            return e < t ? this.view[e++] : null;
          }.bind(this), n = s());
        } catch (n) {
          if (e !== t) throw RangeError("Illegal range: Truncated data, " + e + " != " + t);
        }

        return n();
      }, t.fromUTF8 = function (e, n, r) {
        if (!r && "string" != typeof e) throw TypeError("Illegal str: Not a string");
        var i = new t(l.calculateUTF16asUTF8(o(e), !0)[1], n, r),
            s = 0;
        return l.encodeUTF16toUTF8(o(e), function (e) {
          i.view[s++] = e;
        }), i.limit = s, i;
      }, t;
    }) ? r.apply(t, i) : r) || (e.exports = o);
  }, function (e, t, n) {
    var r, i;
    void 0 === (i = "function" == typeof (r = function r() {
      "use strict";

      function e(e, t, n) {
        this.low = 0 | e, this.high = 0 | t, this.unsigned = !!n;
      }

      function t(e) {
        return !0 === (e && e.__isLong__);
      }

      e.prototype.__isLong__, Object.defineProperty(e.prototype, "__isLong__", {
        value: !0,
        enumerable: !1,
        configurable: !1
      }), e.isLong = t;
      var n = {},
          r = {};

      function i(e, t) {
        var i, o, a;
        return t ? (a = 0 <= (e >>>= 0) && e < 256) && (o = r[e]) ? o : (i = s(e, (0 | e) < 0 ? -1 : 0, !0), a && (r[e] = i), i) : (a = -128 <= (e |= 0) && e < 128) && (o = n[e]) ? o : (i = s(e, e < 0 ? -1 : 0, !1), a && (n[e] = i), i);
      }

      function o(e, t) {
        if (isNaN(e) || !isFinite(e)) return t ? f : c;

        if (t) {
          if (e < 0) return f;
          if (e >= d) return y;
        } else {
          if (e <= -u) return S;
          if (e + 1 >= u) return g;
        }

        return e < 0 ? o(-e, t).neg() : s(e % l | 0, e / l | 0, t);
      }

      function s(t, n, r) {
        return new e(t, n, r);
      }

      e.fromInt = i, e.fromNumber = o, e.fromBits = s;
      var a = Math.pow;

      function _(e, t, n) {
        if (0 === e.length) throw Error("empty string");
        if ("NaN" === e || "Infinity" === e || "+Infinity" === e || "-Infinity" === e) return c;
        if ("number" == typeof t ? (n = t, t = !1) : t = !!t, (n = n || 10) < 2 || 36 < n) throw RangeError("radix");
        var r;
        if ((r = e.indexOf("-")) > 0) throw Error("interior hyphen");
        if (0 === r) return _(e.substring(1), t, n).neg();

        for (var i = o(a(n, 8)), s = c, E = 0; E < e.length; E += 8) {
          var l = Math.min(8, e.length - E),
              d = parseInt(e.substring(E, E + l), n);

          if (l < 8) {
            var u = o(a(n, l));
            s = s.mul(u).add(o(d));
          } else s = (s = s.mul(i)).add(o(d));
        }

        return s.unsigned = t, s;
      }

      function E(t) {
        return t instanceof e ? t : "number" == typeof t ? o(t) : "string" == typeof t ? _(t) : s(t.low, t.high, t.unsigned);
      }

      e.fromString = _, e.fromValue = E;
      var l = 4294967296,
          d = l * l,
          u = d / 2,
          h = i(1 << 24),
          c = i(0);
      e.ZERO = c;
      var f = i(0, !0);
      e.UZERO = f;
      var p = i(1);
      e.ONE = p;
      var R = i(1, !0);
      e.UONE = R;
      var m = i(-1);
      e.NEG_ONE = m;
      var g = s(-1, 2147483647, !1);
      e.MAX_VALUE = g;
      var y = s(-1, -1, !0);
      e.MAX_UNSIGNED_VALUE = y;
      var S = s(0, -2147483648, !1);
      e.MIN_VALUE = S;
      var I = e.prototype;
      return I.toInt = function () {
        return this.unsigned ? this.low >>> 0 : this.low;
      }, I.toNumber = function () {
        return this.unsigned ? (this.high >>> 0) * l + (this.low >>> 0) : this.high * l + (this.low >>> 0);
      }, I.toString = function (e) {
        if ((e = e || 10) < 2 || 36 < e) throw RangeError("radix");
        if (this.isZero()) return "0";

        if (this.isNegative()) {
          if (this.eq(S)) {
            var t = o(e),
                n = this.div(t),
                r = n.mul(t).sub(this);
            return n.toString(e) + r.toInt().toString(e);
          }

          return "-" + this.neg().toString(e);
        }

        for (var i = o(a(e, 6), this.unsigned), s = this, _ = "";;) {
          var E = s.div(i),
              l = (s.sub(E.mul(i)).toInt() >>> 0).toString(e);
          if ((s = E).isZero()) return l + _;

          for (; l.length < 6;) {
            l = "0" + l;
          }

          _ = "" + l + _;
        }
      }, I.getHighBits = function () {
        return this.high;
      }, I.getHighBitsUnsigned = function () {
        return this.high >>> 0;
      }, I.getLowBits = function () {
        return this.low;
      }, I.getLowBitsUnsigned = function () {
        return this.low >>> 0;
      }, I.getNumBitsAbs = function () {
        if (this.isNegative()) return this.eq(S) ? 64 : this.neg().getNumBitsAbs();

        for (var e = 0 != this.high ? this.high : this.low, t = 31; t > 0 && 0 == (e & 1 << t); t--) {
          ;
        }

        return 0 != this.high ? t + 33 : t + 1;
      }, I.isZero = function () {
        return 0 === this.high && 0 === this.low;
      }, I.isNegative = function () {
        return !this.unsigned && this.high < 0;
      }, I.isPositive = function () {
        return this.unsigned || this.high >= 0;
      }, I.isOdd = function () {
        return 1 == (1 & this.low);
      }, I.isEven = function () {
        return 0 == (1 & this.low);
      }, I.equals = function (e) {
        return t(e) || (e = E(e)), (this.unsigned === e.unsigned || this.high >>> 31 != 1 || e.high >>> 31 != 1) && this.high === e.high && this.low === e.low;
      }, I.eq = I.equals, I.notEquals = function (e) {
        return !this.eq(e);
      }, I.neq = I.notEquals, I.lessThan = function (e) {
        return this.comp(e) < 0;
      }, I.lt = I.lessThan, I.lessThanOrEqual = function (e) {
        return this.comp(e) <= 0;
      }, I.lte = I.lessThanOrEqual, I.greaterThan = function (e) {
        return this.comp(e) > 0;
      }, I.gt = I.greaterThan, I.greaterThanOrEqual = function (e) {
        return this.comp(e) >= 0;
      }, I.gte = I.greaterThanOrEqual, I.compare = function (e) {
        if (t(e) || (e = E(e)), this.eq(e)) return 0;
        var n = this.isNegative(),
            r = e.isNegative();
        return n && !r ? -1 : !n && r ? 1 : this.unsigned ? e.high >>> 0 > this.high >>> 0 || e.high === this.high && e.low >>> 0 > this.low >>> 0 ? -1 : 1 : this.sub(e).isNegative() ? -1 : 1;
      }, I.comp = I.compare, I.negate = function () {
        return !this.unsigned && this.eq(S) ? S : this.not().add(p);
      }, I.neg = I.negate, I.add = function (e) {
        t(e) || (e = E(e));

        var n = this.high >>> 16,
            r = 65535 & this.high,
            i = this.low >>> 16,
            o = 65535 & this.low,
            a = e.high >>> 16,
            _ = 65535 & e.high,
            l = e.low >>> 16,
            d = 0,
            u = 0,
            h = 0,
            c = 0;

        return h += (c += o + (65535 & e.low)) >>> 16, u += (h += i + l) >>> 16, d += (u += r + _) >>> 16, d += n + a, s((h &= 65535) << 16 | (c &= 65535), (d &= 65535) << 16 | (u &= 65535), this.unsigned);
      }, I.subtract = function (e) {
        return t(e) || (e = E(e)), this.add(e.neg());
      }, I.sub = I.subtract, I.multiply = function (e) {
        if (this.isZero()) return c;
        if (t(e) || (e = E(e)), e.isZero()) return c;
        if (this.eq(S)) return e.isOdd() ? S : c;
        if (e.eq(S)) return this.isOdd() ? S : c;
        if (this.isNegative()) return e.isNegative() ? this.neg().mul(e.neg()) : this.neg().mul(e).neg();
        if (e.isNegative()) return this.mul(e.neg()).neg();
        if (this.lt(h) && e.lt(h)) return o(this.toNumber() * e.toNumber(), this.unsigned);

        var n = this.high >>> 16,
            r = 65535 & this.high,
            i = this.low >>> 16,
            a = 65535 & this.low,
            _ = e.high >>> 16,
            l = 65535 & e.high,
            d = e.low >>> 16,
            u = 65535 & e.low,
            f = 0,
            p = 0,
            R = 0,
            m = 0;

        return R += (m += a * u) >>> 16, p += (R += i * u) >>> 16, R &= 65535, p += (R += a * d) >>> 16, f += (p += r * u) >>> 16, p &= 65535, f += (p += i * d) >>> 16, p &= 65535, f += (p += a * l) >>> 16, f += n * u + r * d + i * l + a * _, s((R &= 65535) << 16 | (m &= 65535), (f &= 65535) << 16 | (p &= 65535), this.unsigned);
      }, I.mul = I.multiply, I.divide = function (e) {
        if (t(e) || (e = E(e)), e.isZero()) throw Error("division by zero");
        if (this.isZero()) return this.unsigned ? f : c;
        var n, r, i;

        if (this.unsigned) {
          if (e.unsigned || (e = e.toUnsigned()), e.gt(this)) return f;
          if (e.gt(this.shru(1))) return R;
          i = f;
        } else {
          if (this.eq(S)) return e.eq(p) || e.eq(m) ? S : e.eq(S) ? p : (n = this.shr(1).div(e).shl(1)).eq(c) ? e.isNegative() ? p : m : (r = this.sub(e.mul(n)), i = n.add(r.div(e)));
          if (e.eq(S)) return this.unsigned ? f : c;
          if (this.isNegative()) return e.isNegative() ? this.neg().div(e.neg()) : this.neg().div(e).neg();
          if (e.isNegative()) return this.div(e.neg()).neg();
          i = c;
        }

        for (r = this; r.gte(e);) {
          n = Math.max(1, Math.floor(r.toNumber() / e.toNumber()));

          for (var s = Math.ceil(Math.log(n) / Math.LN2), _ = s <= 48 ? 1 : a(2, s - 48), l = o(n), d = l.mul(e); d.isNegative() || d.gt(r);) {
            d = (l = o(n -= _, this.unsigned)).mul(e);
          }

          l.isZero() && (l = p), i = i.add(l), r = r.sub(d);
        }

        return i;
      }, I.div = I.divide, I.modulo = function (e) {
        return t(e) || (e = E(e)), this.sub(this.div(e).mul(e));
      }, I.mod = I.modulo, I.not = function () {
        return s(~this.low, ~this.high, this.unsigned);
      }, I.and = function (e) {
        return t(e) || (e = E(e)), s(this.low & e.low, this.high & e.high, this.unsigned);
      }, I.or = function (e) {
        return t(e) || (e = E(e)), s(this.low | e.low, this.high | e.high, this.unsigned);
      }, I.xor = function (e) {
        return t(e) || (e = E(e)), s(this.low ^ e.low, this.high ^ e.high, this.unsigned);
      }, I.shiftLeft = function (e) {
        return t(e) && (e = e.toInt()), 0 == (e &= 63) ? this : e < 32 ? s(this.low << e, this.high << e | this.low >>> 32 - e, this.unsigned) : s(0, this.low << e - 32, this.unsigned);
      }, I.shl = I.shiftLeft, I.shiftRight = function (e) {
        return t(e) && (e = e.toInt()), 0 == (e &= 63) ? this : e < 32 ? s(this.low >>> e | this.high << 32 - e, this.high >> e, this.unsigned) : s(this.high >> e - 32, this.high >= 0 ? 0 : -1, this.unsigned);
      }, I.shr = I.shiftRight, I.shiftRightUnsigned = function (e) {
        if (t(e) && (e = e.toInt()), 0 == (e &= 63)) return this;
        var n = this.high;
        return e < 32 ? s(this.low >>> e | n << 32 - e, n >>> e, this.unsigned) : s(32 === e ? n : n >>> e - 32, 0, this.unsigned);
      }, I.shru = I.shiftRightUnsigned, I.toSigned = function () {
        return this.unsigned ? s(this.low, this.high, !1) : this;
      }, I.toUnsigned = function () {
        return this.unsigned ? this : s(this.low, this.high, !0);
      }, I.toBytes = function (e) {
        return e ? this.toBytesLE() : this.toBytesBE();
      }, I.toBytesLE = function () {
        var e = this.high,
            t = this.low;
        return [255 & t, t >>> 8 & 255, t >>> 16 & 255, t >>> 24 & 255, 255 & e, e >>> 8 & 255, e >>> 16 & 255, e >>> 24 & 255];
      }, I.toBytesBE = function () {
        var e = this.high,
            t = this.low;
        return [e >>> 24 & 255, e >>> 16 & 255, e >>> 8 & 255, 255 & e, t >>> 24 & 255, t >>> 16 & 255, t >>> 8 & 255, 255 & t];
      }, e;
    }) ? r.apply(t, []) : r) || (e.exports = i);
  }, function (e, t) {}, function (e) {
    e.exports = JSON.parse('{"package":"mgobexs","syntax":"proto3","messages":[{"name":"ClientSendServerReqWrap1","syntax":"proto3","fields":[{"name":"version","type":"string","id":1},{"name":"appName","type":"string","id":2},{"name":"cmd","type":"string","id":3},{"name":"seq","type":"string","id":4},{"name":"clientIp","type":"string","id":5},{"name":"serviceIp","type":"string","id":6},{"name":"business","type":"string","id":7},{"name":"authKey","type":"string","id":8},{"name":"authType","type":"uint32","id":9},{"name":"authIp","type":"string","id":10},{"name":"gameId","type":"string","id":11},{"name":"uid","type":"uint64","id":12},{"name":"playerId","type":"string","id":13},{"name":"body","type":"bytes","id":14}]},{"name":"ServerSendClientBstWrap1","syntax":"proto3","fields":[{"name":"version","type":"string","id":1},{"name":"appName","type":"string","id":2},{"name":"cmd","type":"string","id":3},{"name":"seq","type":"string","id":4},{"name":"clientIp","type":"string","id":5},{"name":"serviceIp","type":"string","id":6},{"name":"business","type":"string","id":7},{"name":"authKey","type":"string","id":8},{"name":"authType","type":"uint32","id":9},{"name":"authIp","type":"string","id":10},{"name":"gameId","type":"string","id":11},{"name":"uid","type":"uint64","id":12},{"name":"playerId","type":"string","id":13},{"name":"body","type":"bytes","id":14}]},{"name":"ClientSendServerRspWrap1","syntax":"proto3","fields":[{"name":"seq","type":"string","id":1},{"name":"errCode","type":"int32","id":2},{"name":"errMsg","type":"string","id":3},{"name":"body","type":"bytes","id":4}]},{"name":"ClientSendServerReqWrap2","syntax":"proto3","fields":[{"name":"cmd","type":"ClientSendServerReqWrap2Cmd","id":1},{"name":"body","type":"bytes","id":2}]},{"name":"ClientSendServerRspWrap2","syntax":"proto3","fields":[{"name":"body","type":"bytes","id":1}]},{"name":"EventInfo","syntax":"proto3","fields":[{"name":"eventType","type":"EventType","id":1},{"name":"seq","type":"string","id":2},{"name":"body","type":"bytes","id":3}]},{"name":"EventNetworkState","syntax":"proto3","fields":[{"name":"gameId","type":"string","id":1},{"name":"playerId","type":"string","id":2},{"name":"networkState","type":"NetworkState","id":3}]},{"name":"HeartBeatReq","syntax":"proto3","fields":[{"name":"conType","type":"ConnectionType","id":1},{"name":"routeId","type":"string","id":2}]},{"name":"HeartBeatRsp","syntax":"proto3","fields":[]},{"name":"ServerSendClientBstWrap2","syntax":"proto3","fields":[{"name":"type","type":"ServerSendClientBstWrap2Type","id":1},{"name":"msg","type":"bytes","id":2}]},{"name":"NOUSEServerSendClientBstRspWrap2","syntax":"proto3","fields":[]},{"name":"CheckLoginReq","syntax":"proto3","fields":[{"name":"token","type":"string","id":1},{"name":"routeId","type":"string","id":2}]},{"name":"CheckLoginRsp","syntax":"proto3","fields":[]},{"name":"PushBodyType","syntax":"proto3","fields":[{"name":"pushMsg","type":"string","id":1}]},{"name":"LoginReq","syntax":"proto3","fields":[{"name":"gameId","type":"string","id":1},{"name":"openId","type":"string","id":2},{"name":"platform","type":"uint64","id":3},{"name":"channel","type":"uint64","id":4},{"name":"nonce","type":"uint64","id":5},{"name":"timestamp","type":"uint64","id":6},{"name":"sign","type":"string","id":7},{"name":"deviceId","type":"string","id":8},{"name":"mac","type":"string","id":9},{"name":"imei","type":"string","id":10}]},{"name":"LoginRsp","syntax":"proto3","fields":[{"name":"token","type":"string","id":1},{"name":"playerId","type":"string","id":2},{"name":"expireTime","type":"uint64","id":3},{"name":"sdkConfig","type":"SdkConfig","id":4}]},{"name":"SdkConfig","syntax":"proto3","fields":[{"name":"pingInterval","type":"uint32","id":1},{"name":"reportInterval","type":"uint32","id":2},{"name":"serverTime","type":"uint64","id":3},{"name":"enableUdp","type":"bool","id":4},{"name":"disableReport","type":"bool","id":5},{"name":"disableReqReport","type":"bool","id":6},{"name":"disableFrameReport","type":"bool","id":7},{"name":"minReportSize","type":"uint32","id":8}]},{"name":"LogoutReq","syntax":"proto3","fields":[]},{"name":"LogoutRsp","syntax":"proto3","fields":[]},{"name":"StartFrameSyncReq","syntax":"proto3","fields":[]},{"name":"StartFrameSyncRsp","syntax":"proto3","fields":[]},{"name":"StopFrameSyncReq","syntax":"proto3","fields":[]},{"name":"StopFrameSyncRsp","syntax":"proto3","fields":[]},{"name":"FrameItem","syntax":"proto3","fields":[{"name":"playerId","type":"string","id":1},{"name":"data","type":"string","id":2},{"name":"timestamp","type":"uint64","id":3}]},{"name":"SendFrameReq","syntax":"proto3","fields":[{"name":"roomId","type":"string","id":1},{"name":"item","type":"FrameItem","id":2}]},{"name":"SendFrameRsp","syntax":"proto3","fields":[]},{"name":"FrameExtInfo","syntax":"proto3","fields":[{"name":"seed","type":"uint64","id":1}]},{"name":"Frame","syntax":"proto3","fields":[{"name":"id","type":"uint64","id":1},{"rule":"repeated","name":"items","type":"FrameItem","id":2},{"name":"ext","type":"FrameExtInfo","id":3}]},{"name":"RequestFrameReq","syntax":"proto3","fields":[{"name":"roomId","type":"string","id":1},{"name":"beginFrameId","type":"uint64","id":2},{"name":"endFrameId","type":"uint64","id":3},{"name":"supportPartial","type":"bool","id":4}]},{"name":"RequestFrameRsp","syntax":"proto3","fields":[{"rule":"repeated","name":"frames","type":"Frame","id":1},{"name":"isPartial","type":"bool","id":2}]},{"name":"PlayerInfo","syntax":"proto3","fields":[{"name":"id","type":"string","id":1},{"name":"name","type":"string","id":2},{"name":"teamId","type":"string","id":3},{"name":"customPlayerStatus","type":"uint64","id":4},{"name":"customProfile","type":"string","id":5},{"name":"commonNetworkState","type":"NetworkState","id":6},{"name":"relayNetworkState","type":"NetworkState","id":7},{"name":"isRobot","type":"bool","id":8},{"rule":"repeated","name":"matchAttributes","type":"MatchAttribute","id":9}]},{"name":"TeamInfo","syntax":"proto3","fields":[{"name":"id","type":"string","id":1},{"name":"name","type":"string","id":2},{"name":"minPlayers","type":"uint32","id":3},{"name":"maxPlayers","type":"uint32","id":4}]},{"name":"RoomInfo","syntax":"proto3","fields":[{"name":"id","type":"string","id":1},{"name":"name","type":"string","id":2},{"name":"type","type":"string","id":3},{"name":"createType","type":"CreateRoomType","id":4},{"name":"maxPlayers","type":"uint64","id":5},{"name":"owner","type":"string","id":6},{"name":"isPrivate","type":"bool","id":9},{"name":"customProperties","type":"string","id":10},{"rule":"repeated","name":"playerList","type":"PlayerInfo","id":11},{"rule":"repeated","name":"teamList","type":"TeamInfo","id":13},{"name":"frameSyncState","type":"FrameSyncState","id":14},{"name":"frameRate","type":"uint32","id":15},{"name":"routeId","type":"string","id":16},{"name":"createTime","type":"uint64","id":17},{"name":"startGameTime","type":"uint64","id":18},{"name":"isForbidJoin","type":"bool","id":19}]},{"name":"CreateRoomReq","syntax":"proto3","fields":[{"name":"roomName","type":"string","id":1},{"name":"roomType","type":"string","id":2},{"name":"createType","type":"CreateRoomType","id":3},{"name":"maxPlayers","type":"uint64","id":4},{"name":"isPrivate","type":"bool","id":7},{"name":"customProperties","type":"string","id":8},{"name":"playerInfo","type":"PlayerInfo","id":9},{"name":"region","type":"string","id":11},{"name":"owner","type":"string","id":12},{"rule":"repeated","name":"playerList","type":"PlayerInfo","id":13},{"rule":"repeated","name":"teamList","type":"TeamInfo","id":14}]},{"name":"CreateRoomRsp","syntax":"proto3","fields":[{"name":"roomInfo","type":"RoomInfo","id":1}]},{"name":"JoinRoomReq","syntax":"proto3","fields":[{"name":"roomId","type":"string","id":1},{"name":"teamId","type":"string","id":2},{"name":"joinType","type":"JoinRoomType","id":3},{"name":"playerInfo","type":"PlayerInfo","id":4}]},{"name":"JoinRoomRsp","syntax":"proto3","fields":[{"name":"roomInfo","type":"RoomInfo","id":1}]},{"name":"LeaveRoomReq","syntax":"proto3","fields":[]},{"name":"LeaveRoomRsp","syntax":"proto3","fields":[{"name":"roomInfo","type":"RoomInfo","id":1}]},{"name":"DismissRoomReq","syntax":"proto3","fields":[{"name":"roomId","type":"string","id":1}]},{"name":"DismissRoomRsp","syntax":"proto3","fields":[]},{"name":"ChangeRoomReq","syntax":"proto3","fields":[{"name":"roomName","type":"string","id":1},{"name":"owner","type":"string","id":2},{"name":"isPrivate","type":"bool","id":5},{"name":"customProperties","type":"string","id":6},{"name":"isForbidJoin","type":"bool","id":7},{"rule":"repeated","name":"changeRoomOptionList","type":"ChangeRoomOption","id":8}]},{"name":"ChangeRoomRsp","syntax":"proto3","fields":[{"name":"roomInfo","type":"RoomInfo","id":4}]},{"name":"SvrChangeRoomReq","syntax":"proto3","fields":[{"name":"roomName","type":"string","id":1},{"name":"owner","type":"string","id":2},{"name":"isPrivate","type":"bool","id":5},{"name":"customProperties","type":"string","id":6},{"name":"isForbidJoin","type":"bool","id":7},{"name":"roomId","type":"string","id":8},{"rule":"repeated","name":"changeRoomOptionList","type":"ChangeRoomOption","id":9}]},{"name":"SvrChangeRoomRsp","syntax":"proto3","fields":[{"name":"roomInfo","type":"RoomInfo","id":4}]},{"name":"RemovePlayerReq","syntax":"proto3","fields":[{"name":"removePlayerId","type":"string","id":3}]},{"name":"RemovePlayerRsp","syntax":"proto3","fields":[{"name":"roomInfo","type":"RoomInfo","id":1}]},{"name":"SvrRemovePlayerReq","syntax":"proto3","fields":[{"name":"roomId","type":"string","id":1},{"name":"removePlayerId","type":"string","id":3}]},{"name":"SvrRemovePlayerRsp","syntax":"proto3","fields":[{"name":"roomInfo","type":"RoomInfo","id":1}]},{"name":"GetRoomByRoomIdReq","syntax":"proto3","fields":[{"name":"roomId","type":"string","id":1}]},{"name":"GetRoomByRoomIdRsp","syntax":"proto3","fields":[{"name":"roomInfo","type":"RoomInfo","id":1}]},{"name":"SendToClientReq","syntax":"proto3","fields":[{"name":"roomId","type":"string","id":1},{"rule":"repeated","name":"recvPlayerList","type":"string","id":2},{"name":"msg","type":"string","id":3}]},{"name":"SendToClientRsp","syntax":"proto3","fields":[]},{"name":"ChangeCustomPlayerStatusReq","syntax":"proto3","fields":[{"name":"customPlayerStatus","type":"uint64","id":1}]},{"name":"ChangeCustomPlayerStatusRsp","syntax":"proto3","fields":[{"name":"roomInfo","type":"RoomInfo","id":1}]},{"name":"SvrChangeCustomPlayerStatusReq","syntax":"proto3","fields":[{"name":"customPlayerStatus","type":"uint64","id":1}]},{"name":"SvrChangeCustomPlayerStatusRsp","syntax":"proto3","fields":[{"name":"roomInfo","type":"RoomInfo","id":1}]},{"name":"ChangePlayerNetworkStateReq","syntax":"proto3","fields":[{"name":"networkState","type":"NetworkState","id":1}]},{"name":"ChangePlayerNetworkStateRsp","syntax":"proto3","fields":[{"name":"roomInfo","type":"RoomInfo","id":1}]},{"name":"GetRoomListReq","syntax":"proto3","fields":[{"name":"gameId","type":"string","id":1},{"name":"pageNo","type":"uint32","id":2},{"name":"pageSize","type":"uint32","id":3},{"name":"roomType","type":"string","id":4},{"name":"isDesc","type":"bool","id":5}]},{"name":"GetRoomListRsp","syntax":"proto3","fields":[{"name":"gameId","type":"string","id":1},{"rule":"repeated","name":"roomList","type":"RoomInfo","id":2},{"name":"total","type":"uint64","id":3}]},{"name":"ChangeRoomPlayerProfileReq","syntax":"proto3","fields":[{"name":"customProfile","type":"string","id":1}]},{"name":"ChangeRoomPlayerProfileRsp","syntax":"proto3","fields":[{"name":"roomInfo","type":"RoomInfo","id":1}]},{"name":"ChangeGroupPlayerProfileReq","syntax":"proto3","fields":[{"name":"groupId","type":"string","id":1},{"name":"customProfile","type":"string","id":2}]},{"name":"ChangeGroupPlayerProfileRsp","syntax":"proto3","fields":[{"name":"groupInfo","type":"GroupInfo","id":1}]},{"name":"MatchRoomSimpleReq","syntax":"proto3","fields":[{"name":"roomType","type":"string","id":1},{"name":"maxPlayers","type":"uint64","id":2},{"name":"playerInfo","type":"PlayerInfo","id":3}]},{"name":"MatchRoomSimpleRsp","syntax":"proto3","fields":[{"name":"roomInfo","type":"RoomInfo","id":1}]},{"name":"MatchRoomComplexReq","syntax":"proto3","fields":[]},{"name":"MatchRoomComplexRsp","syntax":"proto3","fields":[]},{"name":"MatchPlayersSimpleReq","syntax":"proto3","fields":[]},{"name":"MatchPlayersSimpleRsp","syntax":"proto3","fields":[]},{"name":"MatchAttribute","syntax":"proto3","fields":[{"name":"name","type":"string","id":1},{"name":"value","type":"int32","id":2}]},{"name":"MatchPlayerInfo","syntax":"proto3","fields":[{"name":"id","type":"string","id":1},{"name":"name","type":"string","id":2},{"name":"customPlayerStatus","type":"uint64","id":3},{"name":"customProfile","type":"string","id":4},{"rule":"repeated","name":"matchAttributes","type":"MatchAttribute","id":5},{"name":"matchStatus","type":"MatchStatus","id":6},{"name":"teamId","type":"string","id":7},{"name":"region","type":"string","id":8},{"name":"teamLeader","type":"string","id":9},{"name":"sdkVersion","type":"string","id":10},{"name":"groupId","type":"string","id":11},{"name":"teamType","type":"string","id":12},{"name":"requestId","type":"string","id":13}]},{"name":"MatchGroupPlayerInfo","syntax":"proto3","fields":[{"name":"id","type":"string","id":1},{"name":"name","type":"string","id":2},{"name":"customPlayerStatus","type":"uint64","id":3},{"name":"customProfile","type":"string","id":4},{"rule":"repeated","name":"matchAttributes","type":"MatchAttribute","id":5},{"name":"matchStatus","type":"MatchStatus","id":6},{"name":"teamId","type":"string","id":7},{"name":"region","type":"string","id":8},{"name":"teamLeader","type":"string","id":9},{"name":"sdkVersion","type":"string","id":10},{"name":"groupId","type":"string","id":11},{"name":"teamType","type":"string","id":12},{"name":"requestId","type":"string","id":13}]},{"name":"MatchGroupInfo","syntax":"proto3","fields":[{"name":"id","type":"string","id":1},{"name":"leader","type":"string","id":2},{"rule":"repeated","name":"playerIdList","type":"string","id":3},{"rule":"repeated","name":"playerInfoList","type":"MatchPlayerInfo","id":4},{"rule":"repeated","name":"matchAttributes","type":"MatchAttribute","id":5},{"name":"region","type":"string","id":6},{"name":"sdkVersion","type":"string","id":7},{"name":"teamId","type":"string","id":8},{"name":"teamType","type":"string","id":12},{"name":"requestId","type":"string","id":13},{"name":"startMatchTime","type":"uint64","id":14},{"name":"isRobot","type":"bool","id":15}]},{"name":"MatchTeamInfo","syntax":"proto3","fields":[{"name":"teamId","type":"string","id":1},{"name":"teamName","type":"string","id":2},{"name":"teamLeader","type":"string","id":3},{"rule":"repeated","name":"members","type":"string","id":4},{"rule":"repeated","name":"matchAttributes","type":"MatchAttribute","id":5},{"rule":"repeated","name":"memberSdkVersions","type":"string","id":6},{"rule":"repeated","name":"groupIds","type":"string","id":7},{"rule":"repeated","name":"groupSdkVersions","type":"string","id":8},{"name":"teamType","type":"string","id":12}]},{"name":"ProgressPlayerInfo","syntax":"proto3","fields":[{"name":"playerId","type":"string","id":1},{"name":"teamName","type":"string","id":2},{"rule":"repeated","name":"matchAttributes","type":"MatchAttribute","id":3},{"name":"startMatchTime","type":"uint64","id":4}]},{"name":"MatchmakerTeam","syntax":"proto3","fields":[{"name":"name","type":"string","id":1},{"rule":"repeated","name":"players","type":"ProgressPlayerInfo","id":2}]},{"name":"MatchmakerData","syntax":"proto3","fields":[{"name":"matchId","type":"string","id":1},{"rule":"repeated","name":"teams","type":"MatchmakerTeam","id":2}]},{"name":"MatchPlacementInfo","syntax":"proto3","fields":[{"name":"gameId","type":"string","id":1},{"name":"matchCode","type":"string","id":2},{"name":"matchId","type":"string","id":3},{"name":"type","type":"MatchPlacementType","id":4},{"name":"createRoomReq","type":"CreateRoomReq","id":5},{"name":"matchmakerDataJson","type":"string","id":6},{"name":"status","type":"PlacementStatus","id":8},{"name":"resultBody","type":"bytes","id":9}]},{"name":"MgobePlacementJob","syntax":"proto3","fields":[{"name":"createRoomReq","type":"CreateRoomReq","id":1}]},{"name":"MgobePlacementResult","syntax":"proto3","fields":[{"name":"roomInfo","type":"RoomInfo","id":1}]},{"name":"GsePlacementJob","syntax":"proto3","fields":[{"name":"createRoomReq","type":"CreateRoomReq","id":1},{"name":"matchmakerData","type":"string","id":2}]},{"name":"GsePlacementResult","syntax":"proto3","fields":[{"name":"gseGameSession","type":"GseGameSession","id":1}]},{"name":"ThirdpartyPlacementJob","syntax":"proto3","fields":[]},{"name":"ThirdpartyPlacementResult","syntax":"proto3","fields":[]},{"name":"GsePlayerLatency","syntax":"proto3","fields":[{"name":"latencyInMilliseconds","type":"uint32","id":1},{"name":"playerId","type":"string","id":2},{"name":"regionIdentifier","type":"string","id":3}]},{"name":"GseGameProperty","syntax":"proto3","fields":[{"name":"key","type":"string","id":1},{"name":"value","type":"string","id":2}]},{"name":"GsePlacedPlayerSession","syntax":"proto3","fields":[{"name":"playerId","type":"string","id":1},{"name":"playerSessionId","type":"string","id":2}]},{"name":"GseGameSession","syntax":"proto3","fields":[{"name":"placementId","type":"string","id":1},{"name":"gameServerSessionQueueName","type":"string","id":2},{"rule":"repeated","name":"playerLatencies","type":"GsePlayerLatency","id":3},{"name":"status","type":"PlacementStatus","id":4},{"name":"dnsName","type":"string","id":5},{"name":"gameServerSessionId","type":"string","id":6},{"name":"gameServerSessionName","type":"string","id":7},{"name":"gameServerSessionRegion","type":"string","id":8},{"rule":"repeated","name":"gameProperties","type":"GseGameProperty","id":9},{"name":"maximumPlayerSessionCount","type":"uint32","id":10},{"name":"gameServerSessionData","type":"string","id":11},{"name":"ipAddress","type":"string","id":12},{"name":"port","type":"uint32","id":13},{"name":"matchmakerData","type":"string","id":14},{"rule":"repeated","name":"placedPlayerSessions","type":"GsePlacedPlayerSession","id":15},{"name":"startTime","type":"uint64","id":16},{"name":"endTime","type":"uint64","id":17}]},{"name":"PlaceMatchReq","syntax":"proto3","fields":[{"name":"seq","type":"string","id":1},{"name":"gameId","type":"string","id":2},{"name":"matchId","type":"string","id":3},{"name":"type","type":"MatchPlacementType","id":4},{"name":"jobBody","type":"bytes","id":5},{"name":"matchCode","type":"string","id":6}]},{"name":"PlaceMatchRsp","syntax":"proto3","fields":[{"name":"matchPlacementResult","type":"MatchPlacementResult","id":1}]},{"name":"MatchPlacementResult","syntax":"proto3","fields":[{"name":"seq","type":"string","id":1},{"name":"gameId","type":"string","id":2},{"name":"matchId","type":"string","id":3},{"name":"type","type":"MatchPlacementType","id":4},{"name":"status","type":"PlacementStatus","id":5},{"name":"resultBody","type":"bytes","id":6},{"name":"errCode","type":"int32","id":7},{"name":"matchCode","type":"string","id":8}]},{"name":"UpdateMatchPlacementResultReq","syntax":"proto3","fields":[{"name":"matchPlacementResult","type":"MatchPlacementResult","id":1}]},{"name":"UpdateMatchPlacementResultRsp","syntax":"proto3","fields":[]},{"name":"CmqPlacementResult","syntax":"proto3","fields":[{"name":"placementId","type":"string","id":1},{"name":"placementType","type":"MatchPlacementType","id":2},{"name":"resultBody","type":"bytes","id":3}]},{"name":"MatchPlayersReq","syntax":"proto3","fields":[{"name":"matchCode","type":"string","id":2},{"name":"playerInfo","type":"MatchPlayerInfo","id":3}]},{"name":"MatchPlayersRsp","syntax":"proto3","fields":[{"name":"matchCode","type":"string","id":1}]},{"name":"MatchGroupReq","syntax":"proto3","fields":[{"name":"matchCode","type":"string","id":1},{"rule":"repeated","name":"playerInfoList","type":"MatchGroupPlayerInfo","id":2}]},{"name":"MatchGroupRsp","syntax":"proto3","fields":[{"name":"matchCode","type":"string","id":1}]},{"name":"DescribeMatchReq","syntax":"proto3","fields":[{"rule":"repeated","name":"requestIdList","type":"string","id":1}]},{"name":"MatchProgress","syntax":"proto3","fields":[{"name":"requestId","type":"string","id":1},{"rule":"repeated","name":"playerIdList","type":"string","id":2},{"rule":"repeated","name":"playerInfoList","type":"MatchPlayerInfo","id":3},{"name":"status","type":"string","id":4},{"name":"eventType","type":"uint32","id":5},{"rule":"repeated","name":"playerInfoSuccessList","type":"PlayerInfo","id":6},{"rule":"repeated","name":"teamInfoList","type":"TeamInfo","id":7},{"name":"completedTime","type":"uint64","id":8},{"name":"startMatchTime","type":"uint64","id":9},{"name":"gameSessionConnectionInfo","type":"GameSessionConnectionInfo","id":10}]},{"name":"DescribeMatchRsp","syntax":"proto3","fields":[{"rule":"repeated","name":"matchProgressList","type":"MatchProgress","id":1}]},{"name":"CancelPlayerMatchReq","syntax":"proto3","fields":[{"name":"matchType","type":"MatchType","id":3}]},{"name":"CancelPlayerMatchRsp","syntax":"proto3","fields":[]},{"name":"ApiMatchGroupReq","syntax":"proto3","fields":[{"name":"matchCode","type":"string","id":1},{"rule":"repeated","name":"playerInfoList","type":"MatchPlayerInfo","id":2},{"name":"requestId","type":"string","id":3}]},{"name":"ApiMatchGroupRsp","syntax":"proto3","fields":[{"name":"requestId","type":"string","id":1}]},{"name":"ApiDescribeMatchReq","syntax":"proto3","fields":[{"rule":"repeated","name":"requestIdList","type":"string","id":1}]},{"name":"ApiDescribeMatchRsp","syntax":"proto3","fields":[{"rule":"repeated","name":"matchProgressList","type":"MatchProgress","id":1},{"name":"gameId","type":"string","id":2},{"name":"matchCode","type":"string","id":3},{"name":"startMatchTime","type":"uint64","id":4}]},{"name":"GameSessionConnectionInfo","syntax":"proto3","fields":[{"name":"dnsName","type":"string","id":1},{"name":"ipAddress","type":"string","id":2},{"rule":"repeated","name":"matchedPlayerSessions","type":"MatchedPlayerSession","id":3},{"name":"port","type":"int64","id":4}]},{"name":"MatchedPlayerSession","syntax":"proto3","fields":[{"name":"playerId","type":"string","id":1},{"name":"playerSessionId","type":"string","id":2}]},{"name":"StartMatchPlacement","syntax":"proto3","fields":[{"name":"region","type":"string","id":1},{"name":"placementId","type":"string","id":2},{"name":"queueName","type":"string","id":3},{"name":"maximumPlayerSessionCount","type":"int64","id":4},{"rule":"repeated","name":"desiredPlayerSessions","type":"DesiredPlayerSession","id":5},{"rule":"repeated","name":"gameProperties","type":"GameProperty","id":6},{"name":"matchMakerData","type":"string","id":7}]},{"name":"DesiredPlayerSession","syntax":"proto3","fields":[{"name":"playerId","type":"string","id":1},{"name":"playerData","type":"string","id":2}]},{"name":"GameProperty","syntax":"proto3","fields":[{"name":"key","type":"string","id":1},{"name":"value","type":"string","id":2}]},{"name":"ApiCancelPlayerMatchReq","syntax":"proto3","fields":[{"name":"matchType","type":"MatchType","id":1},{"rule":"repeated","name":"requestIdList","type":"string","id":2}]},{"name":"ApiCancelPlayerMatchRsp","syntax":"proto3","fields":[{"rule":"repeated","name":"requestIdList","type":"string","id":1}]},{"name":"CreateRoomBst","syntax":"proto3","fields":[{"name":"roomInfo","type":"RoomInfo","id":1}]},{"name":"DestroyRoomBst","syntax":"proto3","fields":[{"name":"roomInfo","type":"RoomInfo","id":1}]},{"name":"JoinRoomBst","syntax":"proto3","fields":[{"name":"roomInfo","type":"RoomInfo","id":1},{"name":"joinPlayerId","type":"string","id":2}]},{"name":"LeaveRoomBst","syntax":"proto3","fields":[{"name":"roomInfo","type":"RoomInfo","id":1},{"name":"leavePlayerId","type":"string","id":2}]},{"name":"RemovePlayerBst","syntax":"proto3","fields":[{"name":"roomInfo","type":"RoomInfo","id":1},{"name":"removePlayerId","type":"string","id":2}]},{"name":"DismissRoomBst","syntax":"proto3","fields":[{"name":"roomInfo","type":"RoomInfo","id":1}]},{"name":"ChangeRoomBst","syntax":"proto3","fields":[{"name":"roomInfo","type":"RoomInfo","id":1}]},{"name":"RecvFromClientBst","syntax":"proto3","fields":[{"name":"roomId","type":"string","id":1},{"name":"sendPlayerId","type":"string","id":2},{"name":"msg","type":"string","id":3}]},{"name":"ChangeCustomPlayerStatusBst","syntax":"proto3","fields":[{"name":"changePlayerId","type":"string","id":1},{"name":"customPlayerStatus","type":"uint64","id":2},{"name":"roomInfo","type":"RoomInfo","id":3}]},{"name":"ChangeRoomPlayerProfileBst","syntax":"proto3","fields":[{"name":"changePlayerId","type":"string","id":1},{"name":"customProfile","type":"string","id":2},{"name":"roomInfo","type":"RoomInfo","id":3}]},{"name":"ChangeGroupPlayerProfileBst","syntax":"proto3","fields":[{"name":"changePlayerId","type":"string","id":1},{"name":"customProfile","type":"string","id":2},{"name":"groupInfo","type":"GroupInfo","id":3}]},{"name":"ChangePlayerNetworkStateBst","syntax":"proto3","fields":[{"name":"changePlayerId","type":"string","id":1},{"name":"networkState","type":"NetworkState","id":2},{"name":"roomInfo","type":"RoomInfo","id":3},{"rule":"repeated","name":"groupIdList","type":"string","id":4}]},{"name":"MatchTimeoutBst","syntax":"proto3","fields":[{"name":"matchType","type":"MatchType","id":1},{"name":"errCode","type":"int32","id":2}]},{"name":"CancelMatchBst","syntax":"proto3","fields":[{"name":"matchCode","type":"string","id":1},{"name":"playerId","type":"string","id":2}]},{"name":"MatchPlayersBst","syntax":"proto3","fields":[{"name":"matchType","type":"MatchType","id":1},{"name":"roomInfo","type":"RoomInfo","id":2}]},{"name":"StartFrameSyncBst","syntax":"proto3","fields":[{"name":"roomInfo","type":"RoomInfo","id":1}]},{"name":"StopFrameSyncBst","syntax":"proto3","fields":[{"name":"roomInfo","type":"RoomInfo","id":1}]},{"name":"RecvFrameBst","syntax":"proto3","fields":[{"name":"frame","type":"Frame","id":1}]},{"name":"GameSvrCommunication","syntax":"proto3","fields":[{"name":"type","type":"GameSvrForwardType","id":1},{"name":"body","type":"bytes","id":2},{"name":"needRsp","type":"bool","id":3}]},{"name":"NotifyRelayConnectionReq","syntax":"proto3","fields":[{"name":"roomId","type":"string","id":1},{"name":"ip","type":"string","id":2},{"name":"port","type":"uint32","id":3}]},{"name":"NotifyRoomEventReq","syntax":"proto3","fields":[{"name":"cmd","type":"ServerSendClientBstWrap2Type","id":1},{"name":"msg","type":"bytes","id":2}]},{"name":"SendToGameSvrReq","syntax":"proto3","fields":[{"name":"roomId","type":"string","id":1},{"name":"playerId","type":"string","id":2},{"name":"data","type":"string","id":3}]},{"name":"SendToGameSvrRsp","syntax":"proto3","fields":[]},{"name":"RecvFromGameSvrBst","syntax":"proto3","fields":[{"name":"roomId","type":"string","id":1},{"rule":"repeated","name":"recvPlayerIdList","type":"string","id":2},{"name":"data","type":"string","id":3}]},{"name":"ClientRecvFromGameSvrRsp","syntax":"proto3","fields":[]},{"name":"GroupInfo","syntax":"proto3","fields":[{"name":"id","type":"string","id":1},{"name":"name","type":"string","id":2},{"name":"type","type":"GroupType","id":3},{"name":"maxPlayers","type":"uint64","id":4},{"name":"owner","type":"string","id":5},{"name":"customProperties","type":"string","id":6},{"name":"createTime","type":"uint64","id":7},{"name":"isForbidJoin","type":"bool","id":8},{"name":"isPersistent","type":"bool","id":9},{"rule":"repeated","name":"groupPlayerList","type":"GroupPlayerInfo","id":10}]},{"name":"GroupPlayerInfo","syntax":"proto3","fields":[{"name":"id","type":"string","id":1},{"name":"name","type":"string","id":2},{"name":"customGroupPlayerStatus","type":"uint64","id":3},{"name":"customGroupPlayerProfile","type":"string","id":4},{"name":"commonGroupNetworkState","type":"NetworkState","id":5}]},{"name":"CreateGroupReq","syntax":"proto3","fields":[{"name":"groupName","type":"string","id":1},{"name":"groupType","type":"GroupType","id":2},{"name":"maxPlayers","type":"uint64","id":3},{"name":"customProperties","type":"string","id":4},{"name":"playerInfo","type":"GroupPlayerInfo","id":5},{"name":"isForbidJoin","type":"bool","id":6},{"name":"isPersistent","type":"bool","id":7}]},{"name":"CreateGroupRsp","syntax":"proto3","fields":[{"name":"groupInfo","type":"GroupInfo","id":1}]},{"name":"JoinGroupReq","syntax":"proto3","fields":[{"name":"groupId","type":"string","id":1},{"name":"playerInfo","type":"GroupPlayerInfo","id":2}]},{"name":"JoinGroupRsp","syntax":"proto3","fields":[{"name":"groupInfo","type":"GroupInfo","id":1}]},{"name":"LeaveGroupReq","syntax":"proto3","fields":[{"name":"groupId","type":"string","id":1}]},{"name":"LeaveGroupRsp","syntax":"proto3","fields":[{"name":"groupInfo","type":"GroupInfo","id":1}]},{"name":"DismissGroupReq","syntax":"proto3","fields":[{"name":"groupId","type":"string","id":1}]},{"name":"DismissGroupRsp","syntax":"proto3","fields":[]},{"name":"ChangeGroupReq","syntax":"proto3","fields":[{"name":"groupId","type":"string","id":1},{"name":"groupName","type":"string","id":2},{"name":"owner","type":"string","id":3},{"name":"customProperties","type":"string","id":4},{"name":"isForbidJoin","type":"bool","id":5},{"rule":"repeated","name":"changeGroupOptionList","type":"ChangeGroupOption","id":6}]},{"name":"ChangeGroupRsp","syntax":"proto3","fields":[{"name":"groupInfo","type":"GroupInfo","id":1}]},{"name":"RemoveGroupPlayerReq","syntax":"proto3","fields":[{"name":"groupId","type":"string","id":1},{"name":"removePlayerId","type":"string","id":2}]},{"name":"RemoveGroupPlayerRsp","syntax":"proto3","fields":[{"name":"groupInfo","type":"GroupInfo","id":1}]},{"name":"GetGroupByGroupIdReq","syntax":"proto3","fields":[{"name":"groupId","type":"string","id":1}]},{"name":"GetGroupByGroupIdRsp","syntax":"proto3","fields":[{"name":"groupInfo","type":"GroupInfo","id":1}]},{"name":"GetMyGroupsReq","syntax":"proto3","fields":[]},{"name":"GetMyGroupsRsp","syntax":"proto3","fields":[{"rule":"repeated","name":"groupInfoList","type":"GroupInfo","id":1}]},{"name":"ChangeCustomGroupPlayerStatusReq","syntax":"proto3","fields":[{"name":"groupId","type":"string","id":1},{"name":"customGroupPlayerStatus","type":"uint64","id":2}]},{"name":"ChangeCustomGroupPlayerStatusRsp","syntax":"proto3","fields":[{"name":"groupInfo","type":"GroupInfo","id":1}]},{"name":"SendToGroupClientReq","syntax":"proto3","fields":[{"name":"groupId","type":"string","id":1},{"rule":"repeated","name":"recvPlayerList","type":"string","id":2},{"name":"msg","type":"string","id":3},{"name":"recvType","type":"GroupRecvType","id":4}]},{"name":"SendToGroupClientRsp","syntax":"proto3","fields":[]},{"name":"GroupPlayers","syntax":"proto3","fields":[{"name":"groupId","type":"string","id":1},{"rule":"repeated","name":"playerIdList","type":"string","id":2}]},{"name":"ChangeGroupPlayerNetworkReq","syntax":"proto3","fields":[{"name":"networkState","type":"NetworkState","id":1},{"name":"playerId","type":"string","id":2},{"name":"gameId","type":"string","id":3},{"name":"seq","type":"string","id":4}]},{"name":"ChangeGroupPlayerNetworkRsp","syntax":"proto3","fields":[{"rule":"repeated","name":"groupPlayers","type":"GroupPlayers","id":1}]},{"name":"JoinGroupBst","syntax":"proto3","fields":[{"name":"groupInfo","type":"GroupInfo","id":1},{"name":"joinPlayerId","type":"string","id":2}]},{"name":"LeaveGroupBst","syntax":"proto3","fields":[{"name":"groupInfo","type":"GroupInfo","id":1},{"name":"leavePlayerId","type":"string","id":2}]},{"name":"DismissGroupBst","syntax":"proto3","fields":[{"name":"groupInfo","type":"GroupInfo","id":1}]},{"name":"ChangeGroupBst","syntax":"proto3","fields":[{"name":"groupInfo","type":"GroupInfo","id":1}]},{"name":"RemoveGroupPlayerBst","syntax":"proto3","fields":[{"name":"groupInfo","type":"GroupInfo","id":1},{"name":"removePlayerId","type":"string","id":2}]},{"name":"ChangeGroupPlayerNetworkStateBst","syntax":"proto3","fields":[{"name":"groupInfo","type":"GroupInfo","id":1},{"name":"changePlayerId","type":"string","id":2},{"name":"networkState","type":"NetworkState","id":3}]},{"name":"ChangeCustomGroupPlayerStatusBst","syntax":"proto3","fields":[{"name":"groupInfo","type":"GroupInfo","id":1},{"name":"changePlayerId","type":"string","id":2},{"name":"customGroupPlayerStatus","type":"uint64","id":3}]},{"name":"RecvFromGroupClientBst","syntax":"proto3","fields":[{"name":"groupId","type":"string","id":1},{"name":"sendPlayerId","type":"string","id":2},{"name":"msg","type":"string","id":3}]}],"enums":[{"name":"ConnectionType","syntax":"proto3","values":[{"name":"COMMON","id":0},{"name":"RELAY","id":1}]},{"name":"EventType","syntax":"proto3","values":[{"name":"ET_Unknown","id":0},{"name":"ET_NetworkState","id":1}]},{"name":"ServerSendClientBstWrap2Type","syntax":"proto3","values":[{"name":"E_PUSH_TYPE_TEST","id":0},{"name":"E_PUSH_TYPE_RELAY","id":1},{"name":"E_PUSH_TYPE_GAMESVR","id":2},{"name":"E_PUSH_TYPE_JOIN_ROOM","id":100},{"name":"E_PUSH_TYPE_LEAVE_ROOM","id":101},{"name":"E_PUSH_TYPE_DISMISS_ROOM","id":102},{"name":"E_PUSH_TYPE_REMOVE_PLAYER","id":103},{"name":"E_PUSH_TYPE_MODIFY_ROOM_PROPERTY","id":104},{"name":"E_PUSH_TYPE_NETWORK_STATE","id":105},{"name":"E_PUSH_TYPE_ROOM_CHAT","id":106},{"name":"E_PUSH_TYPE_PLAYER_STATE","id":107},{"name":"E_PUSH_TYPE_START_GAME","id":108},{"name":"E_PUSH_TYPE_STOP_GAME","id":109},{"name":"E_PUSH_TYPE_CREATE_ROOM","id":110},{"name":"E_PUSH_TYPE_DESTROY_ROOM","id":111},{"name":"E_PUSH_TYPE_MODIFY_ROOM_PLAYER_PROFILE","id":112},{"name":"E_PUSH_TYPE_MATCH_SUCCESS","id":200},{"name":"E_PUSH_TYPE_MATCH_TIMEOUT","id":201},{"name":"E_PUSH_TYPE_MATCH_CANCEL","id":202},{"name":"E_PUSH_TYPE_JOIN_GROUP","id":500},{"name":"E_PUSH_TYPE_LEAVE_GROUP","id":501},{"name":"E_PUSH_TYPE_DISMISS_GROUP","id":502},{"name":"E_PUSH_TYPE_MODIFY_GROUP_PROPERTY","id":503},{"name":"E_PUSH_TYPE_REMOVE_GROUP_PLAYER","id":504},{"name":"E_PUSH_TYPE_GROUP_PLAYER_STATE","id":505},{"name":"E_PUSH_TYPE_GROUP_CHAT","id":506},{"name":"E_PUSH_TYPE_MODIFY_GROUP_PLAYER_PROFILE","id":507}]},{"name":"ClientSendServerReqWrap2Cmd","syntax":"proto3","values":[{"name":"E_CMD_INVALID","id":0},{"name":"E_CMD_HEART_BEAT_REQ","id":100},{"name":"E_CMD_CHECK_LOGIN_REQ","id":101},{"name":"E_CMD_LOGIN_TO_ROOM_REQ","id":102},{"name":"E_CMD_FORWARD_TO_RELAY_REQ","id":103},{"name":"E_CMD_LOGIN_REQ","id":1000},{"name":"E_CMD_LOGOUT_REQ","id":1001},{"name":"E_CMD_AUTH_REQ","id":1002},{"name":"E_CMD_QUERY_BY_PLAYER_ID_REQ","id":1003},{"name":"E_CMD_QUERY_BY_GAME_ID_REQ","id":1004},{"name":"E_CMD_GET_ROOM_DETAIL_REQ","id":2001},{"name":"E_CMD_JOIN_ROOM_REQ","id":2002},{"name":"E_CMD_QUIT_ROOM_REQ","id":2003},{"name":"E_CMD_CREATE_ROOM_REQ","id":2004},{"name":"E_CMD_DESTORY_ROOM_REQ","id":2005},{"name":"E_CMD_REMOVE_MEMBER_REQ","id":2006},{"name":"E_CMD_CHANGE_ROOM_PROPERTIS_REQ","id":2007},{"name":"E_CMD_DISSMISS_ROOM_REQ","id":2008},{"name":"E_CMD_CHANGE_PLAYER_STATE_REQ","id":2009},{"name":"E_CMD_CHANGE_PLAYER_NETWORK_STATE_REQ","id":2010},{"name":"E_CMD_ROOM_CHAT_REQ","id":2011},{"name":"E_CMD_START_FRAME_SYNC_REQ","id":2012},{"name":"E_CMD_STOP_FRAME_SYNC_REQ","id":2013},{"name":"E_CMD_GET_ROOM_LIST_REQ","id":2014},{"name":"E_CMD_SVR_REMOVE_MEMBER_REQ","id":2015},{"name":"E_CMD_SVR_CHANGE_ROOM_PROPERTIS_REQ","id":2016},{"name":"E_CMD_SVR_CHANGE_PLAYER_STATE_REQ","id":2017},{"name":"E_CMD_GET_ROOM_LIST_V2_REQ","id":2018},{"name":"E_CMD_CREATE_ROOM_FOR_THIRD_PARTY_REQ","id":2019},{"name":"E_CMD_CHANGE_ROOM_PLAYER_PROFILE","id":2020},{"name":"E_CMD_MATCH_ROOM_SIMPLE_REQ","id":3001},{"name":"E_CMD_MATCH_USER_SIMPLE_REQ","id":3002},{"name":"E_CMD_MATCH_CANCEL_MATCH_REQ","id":3003},{"name":"E_CMD_MATCH_ROOM_COMPLEX_REQ","id":3004},{"name":"E_CMD_MATCH_PLAYER_COMPLEX_REQ","id":3005},{"name":"E_CMD_MATCH_GROUP_REQ","id":3006},{"name":"E_CMD_RELAY_SEND_FRAME_REQ","id":4000},{"name":"E_CMD_RELAY_REQUEST_FRAME_REQ","id":4001},{"name":"E_CMD_RELAY_CLIENT_SENDTO_GAMESVR_REQ","id":4002},{"name":"E_CMD_RELAY_CLIENT_RECV_FROM_GAMESVR_REQ","id":4003},{"name":"E_CMD_NOTIFY_JOIN_ROOM","id":5000},{"name":"E_CMD_NOTIFY_QUIT_ROOM","id":5001},{"name":"E_CMD_NOTIFY_DESTORY_ROOM","id":5002},{"name":"E_CMD_NOTIFY_NET_STATE","id":5003},{"name":"E_CMD_NOTIFY_KICK_MEMBER","id":5004},{"name":"E_CMD_GET_ADDR_BY_ROUTER_ID_REQ","id":6000},{"name":"E_CMD_GET_GROUP_DETAIL_REQ","id":7001},{"name":"E_CMD_JOIN_GROUP_REQ","id":7002},{"name":"E_CMD_QUIT_GROUP_REQ","id":7003},{"name":"E_CMD_CREATE_GROUP_REQ","id":7004},{"name":"E_CMD_REMOVE_GROUP_MEMBER_REQ","id":7005},{"name":"E_CMD_CHANGE_GROUP_PROPERTIES_REQ","id":7006},{"name":"E_CMD_DISMISS_GROUP_REQ","id":7007},{"name":"E_CMD_CHANGE_GROUP_PLAYER_STATE_REQ","id":7008},{"name":"E_CMD_CHANGE_GROUP_PLAYER_NETWORK_STATE_REQ","id":7009},{"name":"E_CMD_GROUP_CHAT_REQ","id":7010},{"name":"E_CMD_GET_GROUP_LIST_REQ","id":7011},{"name":"E_CMD_CHANGE_GROUP_PLAYER_PROFILE","id":7012}]},{"name":"QAppProtoErrCode","syntax":"proto3","values":[{"name":"EC_OK","id":0},{"name":"EC_REQ_BAD_PKG","id":1},{"name":"EC_CMD_INVALID","id":2},{"name":"EC_PARAMS_INVALID","id":3},{"name":"EC_INNER_ERROR","id":4},{"name":"EC_TIME_OUT","id":5},{"name":"EC_SERVER_BUSY","id":6},{"name":"EC_NO_RIGHT","id":7},{"name":"EC_ACCESS_CMD_INVALID_ERR","id":200},{"name":"EC_ACCESS_CMD_GET_TOKEN_ERR","id":201},{"name":"EC_ACCESS_CMD_TOKEN_PRE_EXPIRE","id":202},{"name":"EC_ACCESS_CMD_INVALID_TOKEN","id":203},{"name":"EC_ACCESS_PUSH_SERIALIZE_ERR","id":204},{"name":"EC_ACCESS_LOGIN_BODY_PARSE_ERR","id":205},{"name":"EC_ACCESS_CONN_ERR","id":206},{"name":"EC_ACCESS_GET_RS_IP_ERR","id":207},{"name":"EC_ACCESS_ADD_COMM_CONN_ERR","id":208},{"name":"EC_ACCESS_ADD_HEART_CONN_ERR","id":209},{"name":"EC_ACCESS_ADD_RELAY_CONN_ERR","id":210},{"name":"EC_ACCESS_HEART_BODY_PARSE_ERR","id":211},{"name":"EC_ACCESS_GET_COMM_CONNECT_ERR","id":212},{"name":"EC_ACCESS_GET_RELAY_CONNECT_ERR","id":213},{"name":"EC_ACCESS_ACCESS_INFO_EMPTY","id":214},{"name":"EC_ACCESS_PLAYER_DUPLICATE_LOGIN","id":215},{"name":"EC_ACCESS_NOE_RELAY_OR_STATE_SVR","id":216},{"name":"EC_PLAYER_GAME_NOT_EXIST","id":10000},{"name":"EC_PLAYER_SECRET_KEY_FAIL","id":10001},{"name":"EC_PLAYER_SIGN_ERR","id":10002},{"name":"EC_PLAYER_DUPLICATE_REQ","id":10003},{"name":"EC_PLAYER_TIMESTAMP_INVALID","id":10004},{"name":"EC_PLAYER_QUERY_PLAYER_FAIL","id":10005},{"name":"EC_PLAYER_ADD_PLAYER_FAIL","id":10006},{"name":"EC_PLAYER_QUERY_GAME_FAIL","id":10007},{"name":"EC_PLAYER_RECORD_NUM_ERR","id":10008},{"name":"EC_PLAYER_GET_TOKEN_FAIL","id":10009},{"name":"EC_PLAYER_TOKEN_NOT_EXIST","id":10010},{"name":"EC_PLAYER_TOKEN_INVALID","id":10011},{"name":"EC_PLAYER_CLEAR_TOKEN_FAIL","id":10012},{"name":"EC_PLAYER_LOCK_FAIL","id":10013},{"name":"EC_PLAYER_UNLOCK_FAIL","id":10014},{"name":"EC_PLAYER_SAVE_TOKEN_FAIL","id":10015},{"name":"EC_PLAYER_GAME_OUT_OF_SERVICE","id":10016},{"name":"EC_ROOM_CREATE_NO_PERMISSION","id":20000},{"name":"EC_ROOM_DESTORY_NO_PERMISSION","id":20001},{"name":"EC_ROOM_JOIN_NO_PERMISSION","id":20002},{"name":"EC_ROOM_REMOVE_PLAYER_NO_PERMISSION","id":20003},{"name":"EC_ROOM_MODIFY_PROPERTIES_NO_PEMISSION","id":20004},{"name":"EC_ROOM_DISSMISS_NO_PERMISSION","id":20005},{"name":"EC_ROOM_REMOVE_SELF_NO_PERMISSION","id":20006},{"name":"EC_ROOM_CHECK_LOGIN_SESSION_ERR","id":20007},{"name":"EC_ROOM_REMOVE_PLAYER_NOT_IN_ROOM","id":20008},{"name":"EC_ROOM_PLAYER_ALREADY_IN_ROOM","id":20010},{"name":"EC_ROOM_PLAYER_NOT_IN_ROOM","id":20011},{"name":"EC_ROOM_PLAYERS_EXCEED_LIMIT","id":20012},{"name":"EC_ROOM_JOIN_NOT_ALLOW","id":20013},{"name":"EC_ROOM_MAX_PLAYERS_INVALID","id":20014},{"name":"EC_ROOM_CREATE_FAIL","id":20015},{"name":"EC_ROOM_PLAYER_OFFLINE","id":20016},{"name":"EC_ROOM_PARAM_PAGE_INVALID","id":20017},{"name":"EC_ROOM_GET_PLAYER_INFO_ERR","id":20050},{"name":"EC_ROOM_GET_ROOM_INFO_ERR","id":20051},{"name":"EC_ROOM_MODIFY_OWNER_ERR","id":20052},{"name":"EC_ROOM_MAX_ROOM_NUMBER_EXCEED_LIMIT","id":20053},{"name":"EC_ROOM_REMOVE_REDIS_PLAYER_ROOM_MATCH_ERR","id":-20052},{"name":"EC_ROOM_REMOVE_REDIS_ROOM_INFO_ERR","id":-20053},{"name":"EC_ROOM_REDIS_UPDATE_ERR","id":-20054},{"name":"EC_ROOM_REDIS_GET_LOCK_ERR","id":-20055},{"name":"EC_ROOM_REDIS_CHECK_LOCK_ERR","id":-20056},{"name":"EC_ROOM_REDIS_DEL_LOCK_ERR","id":-20057},{"name":"EC_ROOM_QUERY_PLAYER_ERR","id":20060},{"name":"EC_ROOM_QUERY_GAME_ERR","id":20061},{"name":"EC_ROOM_PLAYER_INFO_NOT_EXIST","id":20062},{"name":"EC_ROOM_GAME_INFO_NOT_EXIST","id":20063},{"name":"EC_ROOM_HISTORY_INFO_INSERT_ERR","id":-20064},{"name":"EC_ROOM_REGION_INFO_NOT_EXIST","id":20065},{"name":"EC_ROOM_QUERY_REGION_ERR","id":20066},{"name":"EC_ROOM_MODIFY_PLAYER_BUSY","id":20070},{"name":"EC_ROOM_INFO_UNEXIST","id":20080},{"name":"EC_ROOM_ALLOCATE_RELAYSVR_IP_PORT_ERR","id":20090},{"name":"EC_ROOM_INVALID_PARAMS_TEAM_ID","id":20100},{"name":"EC_ROOM_TEAM_MEMBER_LIMIT_EXCEED","id":20101},{"name":"EC_ROOM_ALLOCATE_SERVICE_FAIL","id":-20200},{"name":"EC_MATCH_NO_ROOM","id":30000},{"name":"EC_MATCH_TIMEOUT","id":30001},{"name":"EC_MATCH_LOGIC_ERR","id":30002},{"name":"EC_MATCH_ERR","id":30010},{"name":"EC_MATCH_PLAYER_IS_IN_MATCH","id":30011},{"name":"EC_MATCH_PLAYER_NOT_IN_MATCH","id":30012},{"name":"EC_MATCH_GET_MATCH_INFO_ERR","id":30013},{"name":"EC_MATCH_UPDATE_MATCH_INFO_ERR","id":30014},{"name":"EC_MATCH_CANCEL_FAILED","id":30015},{"name":"EC_MATCH_GET_PLAYER_LIST_INFO_ERR","id":30016},{"name":"EC_MATCH_CREATE_ROOM_ERR","id":30041},{"name":"EC_MATCH_JOIN_ROOM_ERR","id":30042},{"name":"EC_MATCH_INVALID_PARAMS","id":30043},{"name":"EC_MATCH_GROUP_NUM_EXCEED_LIMIT","id":30044},{"name":"EC_MATCH_PLAYER_ID_IS_REPEATED","id":30045},{"name":"EC_MATCH_CREATE_ROOM_PLAYER_ALREADY_IN_ROOM","id":30050},{"name":"EC_MATCH_QUERY_PLAYER_ERR","id":30100},{"name":"EC_MATCH_PLAYER_INFO_NOT_EXIST","id":30101},{"name":"EC_MATCH_QUERY_GAME_ERR","id":30102},{"name":"EC_MATCH_GAME_INFO_NOT_EXIST","id":30103},{"name":"EC_MATCH_QUERY_REGION_ERR","id":30104},{"name":"EC_MATCH_REGION_INFO_NOT_EXIST","id":30105},{"name":"EC_MATCH_TEAM_FAIL","id":30106},{"name":"EC_MATCH_PLAY_RULE_NOT_RUNNING","id":30107},{"name":"EC_MATCH_PLAY_ATTR_NOT_FOUND","id":30108},{"name":"EC_MATCH_PLAY_RULE_NOT_FOUND","id":30109},{"name":"EC_MATCH_PLAY_RULE_ATTR_SEGMENT_NOT_FOUND","id":30110},{"name":"EC_MATCH_PLAY_RULE_FUNC_ERR","id":30111},{"name":"EC_MATCH_GET_PLAYER_ATTR_FAIL","id":30112},{"name":"EC_MATCH_GET_TEAM_ATTR_FAIL","id":30113},{"name":"EC_MATCH_NONE_TEAM_TYPE_FIT","id":30114},{"name":"EC_MATCH_TEAM_TYPE_INVALID","id":30115},{"name":"EC_MATCH_PLAYER_ATTR_NOT_FOUND","id":30116},{"name":"EC_MATCH_REQUEST_ID_NOT_EXIST","id":30117},{"name":"EC_MATCH_REQUEST_ID_IS_EXIST","id":30118},{"name":"EC_MATCH_TEAM_MATCH_FAIL","id":30119},{"name":"EC_MATCH_ROBOT_GROUP_NOT_RIGHT","id":30120},{"name":"EC_MATCH_ROBOT_TEAM_NOT_RIGHT","id":30121},{"name":"EC_MATCH_INNER_LOGIC_ERR","id":-30150},{"name":"EC_MATCH_INNER_PARAMS_ERR","id":-30160},{"name":"EC_MATCH_ROOM_INNER_ADD_NODE_ERR","id":-30170},{"name":"EC_MATCH_ROOM_INNER_DEL_NODE_ERR","id":-30171},{"name":"EC_MATCH_RESULT_TYPE_NOT_GSE","id":-30172},{"name":"EC_MATCH_REQUEST_CANCELED","id":30173},{"name":"EC_RELAY_ALREADY_EXISTS","id":40000},{"name":"EC_RELAY_NOT_EXISTS","id":40001},{"name":"EC_RELAY_DATA_EXCEED_LIMITED","id":40002},{"name":"EC_RELAY_MEMBER_ALREADY_EXISTS","id":40003},{"name":"EC_RELAY_MEMBER_NOT_EXISTS","id":40004},{"name":"EC_RELAY_STATE_INVALID","id":40005},{"name":"EC_RELAY_INVALID_FRAME_RATE","id":40006},{"name":"EC_RELAY_SET_FRAME_RATE_FORBIDDEN","id":40007},{"name":"EC_RELAY_NO_MEMBERS","id":40008},{"name":"EC_RELAY_GAMESVR_SERVICE_NOT_OPEN","id":40009},{"name":"EC_RELAY_REQ_POD_FAIL","id":40010},{"name":"EC_RELAY_NO_AVAILABLE_POD","id":40011},{"name":"EC_RELAY_GET_FRAME_CACHE_FAIL","id":40012},{"name":"EC_RELAY_HKV_CACHE_ERROR","id":40015},{"name":"EC_RELAY_REDIS_CACHE_ERROR","id":40016},{"name":"EC_RELAY_NOTIFY_RELAYWORKER_FAIL","id":40018},{"name":"EC_RELAY_RESET_RELAY_ROOM_FAIL","id":40019},{"name":"EC_RELAY_CLEAN_RELAY_ROOM_FAIL","id":40020},{"name":"EC_RELAY_REQ_FRAME_GAME_NOT_STARTED","id":40021},{"name":"EC_RELAY_NO_PERMISSION","id":40100},{"name":"EC_RELAY_NOTIFY_GAMESVR_FAIL","id":40200},{"name":"EC_RELAY_FORWARD_TO_GAMESVR_FAIL","id":40201},{"name":"EC_RELAY_FORWARD_TO_CLIENT_FAIL","id":40202},{"name":"EC_RELAY_GAMESVR_NOT_FOUND_ROOM_FAIL","id":40203},{"name":"EC_GROUP_OPERATION_FAILED","id":70000},{"name":"EC_INVALID_PARAMS_GROUP_NAME","id":70001},{"name":"EC_INVALID_PARAMS_GROUP_TYPE","id":70002},{"name":"EC_INVALID_PARAMS_GROUP_CUSTOM_PROPERTIES","id":70003},{"name":"EC_INVALID_PARAMS_GROUP_PLAYER_NAME","id":70004},{"name":"EC_INVALID_PARAMS_GROUP_PLAYER_CUSTOM_STATUS","id":70005},{"name":"EC_INVALID_PARAMS_GROUP_PLAYER_CUSTOM_PROPERTIES","id":70006},{"name":"EC_GROUP_MODIFY_OWNER_NO_PERMISSION","id":70007},{"name":"EC_INVALID_PARAMS_GROUP_ID","id":70008},{"name":"EC_INVALID_CHANGE_OPTION","id":70009},{"name":"EC_INVALID_PARAMS_GROUP_OWNER","id":70010},{"name":"EC_PLAYER_IS_EXIST_GROUP","id":70011},{"name":"EC_PLAYER_IS_NOT_EXIST_GROUP","id":70012},{"name":"EC_REMOVE_PLAYER_ID_IS_EMPTY","id":70013},{"name":"EC_GROUP_REMOVE_PLAYER_NO_PERMISSION","id":70014},{"name":"EC_INVALID_PARAMS_GROUP_RECV_TYPE","id":70015},{"name":"EC_INVALID_PARAMS_RECV_PLAYER_ID","id":70016},{"name":"EC_INVALID_PARAMS_MESSAGE_LENGTH","id":70017},{"name":"EC_INVALID_PARAMS_MAX_PLAYER","id":70018},{"name":"PERSISTENCE_GROUP_NUM_EXCEED_THE_LIMIT","id":70019},{"name":"EC_INVALID_PARAMS_PLAYER_NOT_IN_GROUP","id":70020},{"name":"NO_GROUP_OPERATION_PERMISSION","id":70021},{"name":"EC_OPERATION_FAILED_GROUP_FORBID_JOIN","id":70022},{"name":"EC_GROUP_CHAT_FREQUENCY_LIMIT","id":70023},{"name":"EC_GROUP_PLAYER_NUM_LIMIT_EXCEED","id":70024},{"name":"EC_PLAYER_GROUP_NUM_LIMIT_EXCEED","id":70025},{"name":"EC_GROUP_NOT_EXIST","id":70026},{"name":"EC_INVALID_PARAMS","id":60000},{"name":"EC_INVALID_PARAMS_PLAY_MODE_VERSION","id":60001},{"name":"EC_INVALID_PARAMS_PLAY_MODE_RULETYPE","id":60002},{"name":"EC_INVALID_PARAMS_PLAY_MODE_EXPRESSION","id":60003},{"name":"EC_INVALID_PARAMS_PLAY_MODE_TEAM","id":60004},{"name":"EC_INVALID_PARAMS_MSGQ_ENCODE","id":60020},{"name":"EC_INVALID_PARAMS_MSGQ_DECODE","id":60021},{"name":"EC_INVALID_PARAMS_GAME_ID","id":61000},{"name":"EC_INVALID_PARAMS_PLAYER_INFO","id":61001},{"name":"EC_INVALID_PARAMS_MAX_PLAYERS","id":61002},{"name":"EC_INVALID_PARAMS_ROOM_TYPE","id":61003},{"name":"EC_INVALID_PARAMS_PLAYER_ID","id":61004},{"name":"EC_INVALID_PARAMS_MATCH_TYPE","id":61005},{"name":"EC_INVALID_PARAMS_MATCH_CODE","id":61006},{"name":"EC_INVALID_PARAMS_OPEN_ID","id":61007},{"name":"EC_INVALID_PARAMS_PLATFORM","id":61008},{"name":"EC_INVALID_PARAMS_TIMESTAMP","id":61009},{"name":"EC_INVALID_PARAMS_SIGN","id":61010},{"name":"EC_INVALID_PARAMS_NONCE","id":61011},{"name":"EC_INVALID_PARAMS_TOKEN","id":61012},{"name":"EC_INVALID_PARAMS_NETWORK_STATE","id":61013},{"name":"EC_INVALID_PARAMS_ROOM_NAME","id":61014},{"name":"EC_INVALID_PARAMS_CREATE_ROOM_TYPE","id":61015},{"name":"EC_INVALID_PARAMS_DEVICE_ID","id":61016},{"name":"EC_INVALID_PARAMS_PAGE_NO","id":61017},{"name":"EC_INVALID_PARAMS_PAGE_SIZE","id":61018},{"name":"EC_INVALID_PARAMS_PLAYER_LIST","id":61019},{"name":"EC_INVALID_PARAMS_MESSAGE","id":61020},{"name":"EC_INVALID_CHANGE_ROOM_OPTION","id":61021},{"name":"EC_INVALID_PARAMS_REGION","id":61022},{"name":"EC_INVALID_PARAMS_OWNER","id":61023},{"name":"EC_INVALID_PARAMS_OWNER_OPEN_ID","id":61024},{"name":"EC_INVALID_PARAMS_OPEN_ID_DUPLICATE","id":61026},{"name":"EC_INVALID_PARAMS_ROOM_CREATE_TYPE","id":61027},{"name":"EC_MYSPP_SYSTEM_ERR","id":-1000},{"name":"EC_REDIS_KEY_NOT_EXIST","id":-66000},{"name":"EC_REDIS_SET_OP_ERR","id":-66001},{"name":"EC_REDIS_GET_OP_ERR","id":-66002},{"name":"EC_REDIS_DEL_OP_ERR","id":-66003},{"name":"EC_REDIS_EXPIRE_OP_ERR","id":-66004},{"name":"EC_REDIS_LOCK_OP_ERR","id":-66005},{"name":"EC_REDIS_LOCK_ALREADY_EXIST","id":-66006},{"name":"EC_REDIS_LIST_OP_ERR","id":-66020},{"name":"EC_REDIS_LIST_POP_EMPTY","id":-66021},{"name":"EC_REDIS_POOL_GET_INSTANCE_FAIL","id":-66022},{"name":"EC_REDIS_SET_IS_EMPTY","id":-66023},{"name":"EC_REDIS_OP_INVALID_PARAMS","id":-66024},{"name":"EC_MYSQL_NO_ROW_FOUND","id":-66100},{"name":"EC_MYSQL_MULTI_ROW_FOUND","id":-66101},{"name":"EC_MYSQL_INSERT_FAIL","id":-66102},{"name":"EC_MYSQL_DELETE_FAIL","id":-66103},{"name":"EC_MYSQL_UPDATE_FAIL","id":-66104},{"name":"EC_MYSQL_QUERYS_FAIL","id":-66105},{"name":"EC_PB_SERIALIZE_TO_STR_ERR","id":-66200},{"name":"EC_PB_PARSE_FROM_STR_ERR","id":-66201},{"name":"EC_DATA_FORMAT_ERR","id":-66210},{"name":"EC_JSON_FORMAT_ERR","id":-66211},{"name":"EC_JSON_PLAY_MODE_FORMAT_ERR","id":-66212},{"name":"EC_JSON_PLAY_MODE_PARISE_ERR","id":-66213},{"name":"EC_INVALID_PARAMS_RECORE_ID","id":-66601},{"name":"EC_HASHID_ERR","id":-66700},{"name":"EC_HASHID_ENCODE_ERR","id":-66701},{"name":"EC_HASHID_DECODE_ERR","id":-66702},{"name":"EC_CONF_ROOM_ID_BUCKET_ERR","id":-66801},{"name":"EC_SDK_SEND_FAIL","id":90001},{"name":"EC_SDK_UNINIT","id":90002},{"name":"EC_SDK_RES_TIMEOUT","id":90003},{"name":"EC_SDK_NO_LOGIN","id":90004},{"name":"EC_SDK_NO_CHECK_LOGIN","id":90005},{"name":"EC_SDK_SOCKET_ERROR","id":90006},{"name":"EC_SDK_SOCKET_CLOSE","id":90007},{"name":"EC_SDK_NO_ROOM","id":90008},{"name":"EC_SDK_ENCODE_PARAM_FAIL","id":90009},{"name":"EC_SDK_INVALID_PARAMS","id":90010}]},{"name":"NetworkState","syntax":"proto3","values":[{"name":"COMMON_OFFLINE","id":0},{"name":"COMMON_ONLINE","id":1},{"name":"RELAY_OFFLINE","id":2},{"name":"RELAY_ONLINE","id":3}]},{"name":"CreateRoomType","syntax":"proto3","values":[{"name":"COMMON_CREATE","id":0},{"name":"MATCH_CREATE","id":1},{"name":"THIRD_PARTY_CREATE","id":2}]},{"name":"FrameSyncState","syntax":"proto3","values":[{"name":"STOP","id":0},{"name":"START","id":1}]},{"name":"JoinRoomType","syntax":"proto3","values":[{"name":"COMMON_JOIN","id":0},{"name":"MATCH_JOIN","id":1}]},{"name":"ChangeRoomOption","syntax":"proto3","values":[{"name":"ROOM_NAME","id":0},{"name":"OWNER","id":1},{"name":"IS_VIEWED","id":2},{"name":"IS_INVITED","id":3},{"name":"IS_PRIVATE","id":4},{"name":"CUSTOM_PROPERTIES","id":5},{"name":"IS_FORBID_JOIN","id":6}]},{"name":"MatchStatus","syntax":"proto3","values":[{"name":"PENDING","id":0},{"name":"MATCHING","id":1},{"name":"SUCCESS","id":3},{"name":"TIMEOUT","id":4}]},{"name":"MatchPlacementType","syntax":"proto3","values":[{"name":"MP_MGOBE","id":0},{"name":"MP_GSE","id":1},{"name":"MP_THIRDPARTY","id":-1}]},{"name":"PlacementStatus","syntax":"proto3","values":[{"name":"PS_UNKNOW","id":0},{"name":"PS_PENDING","id":2},{"name":"PS_FULFILLED","id":3},{"name":"PS_CANCELLED","id":4},{"name":"PS_TIMED_OUT","id":5},{"name":"PS_FAILED","id":6},{"name":"PS_TIMED_OUT_MQ","id":100},{"name":"PS_PLACE_MATCH_FAIL","id":101}]},{"name":"MatchType","syntax":"proto3","values":[{"name":"ROOM_SIMPLE","id":1},{"name":"PLAYER_COMPLEX","id":2}]},{"name":"GameSvrForwardType","syntax":"proto3","values":[{"name":"E_GS_FORWARDTYPE_DEFAULT","id":0},{"name":"E_GS_FORWARDTYPE_NOTIFY_CONNECTION","id":1},{"name":"E_GS_FORWARDTYPE_NOTIFY_ROOM_EVENT","id":2},{"name":"E_GS_FORWARDTYPE_NOTIFY_COM_EVENT","id":3},{"name":"E_GS_FORWARDTYPE_CLIENT_SENDTO_GAMESVR","id":4}]},{"name":"GroupType","syntax":"proto3","values":[{"name":"GROUP_LIMITED","id":0},{"name":"GROUP_MANY","id":1}]},{"name":"ChangeGroupOption","syntax":"proto3","values":[{"name":"GROUP_NAME","id":0},{"name":"GROUP_OWNER","id":1},{"name":"GROUP_CUSTOM_PROPERTIES","id":2},{"name":"GROUP_IS_FORBID_JOIN","id":3}]},{"name":"GroupRecvType","syntax":"proto3","values":[{"name":"GROUP_ALL","id":1},{"name":"GROUP_OTHERS","id":2},{"name":"GROUP_SOME","id":3}]}],"services":[],"isNamespace":true}');
  }, function (e, t, n) {
    "use strict";

    n.r(t);
    var r,
        i,
        o = {};
    n.r(o), n.d(o, "packageName", function () {
      return re;
    }), n.d(o, "ConnectionType", function () {
      return ie;
    }), n.d(o, "EventType", function () {
      return oe;
    }), n.d(o, "ServerSendClientBstWrap2Type", function () {
      return se;
    }), n.d(o, "ClientSendServerReqWrap2Cmd", function () {
      return ae;
    }), n.d(o, "QAppProtoErrCode", function () {
      return _e;
    }), n.d(o, "NetworkState", function () {
      return Ee;
    }), n.d(o, "CreateRoomType", function () {
      return le;
    }), n.d(o, "FrameSyncState", function () {
      return de;
    }), n.d(o, "JoinRoomType", function () {
      return ue;
    }), n.d(o, "ChangeRoomOption", function () {
      return he;
    }), n.d(o, "MatchStatus", function () {
      return ce;
    }), n.d(o, "MatchPlacementType", function () {
      return fe;
    }), n.d(o, "PlacementStatus", function () {
      return pe;
    }), n.d(o, "MatchType", function () {
      return Re;
    }), n.d(o, "GameSvrForwardType", function () {
      return me;
    }), n.d(o, "GroupType", function () {
      return ge;
    }), n.d(o, "ChangeGroupOption", function () {
      return ye;
    }), n.d(o, "GroupRecvType", function () {
      return Se;
    }), n.d(o, "messages", function () {
      return Ie;
    }), function (e) {
      e[e.UNKNOWN = 0] = "UNKNOWN", e[e.WX = 1] = "WX", e[e.QQ = 2] = "QQ", e[e.BD = 3] = "BD", e[e.OP = 4] = "OP", e[e.VV = 5] = "VV", e[e.WXMP = 6] = "WXMP", e[e.QQMP = 7] = "QQMP", e[e.COCOS_NATIVE = 8] = "COCOS_NATIVE", e[e.UNITY = 9] = "UNITY", e[e.TT = 10] = "TT";
    }(r || (r = {})), function (e) {
      e[e.UNKNOWN = 0] = "UNKNOWN", e[e.ANDROID = 1] = "ANDROID", e[e.IOS = 2] = "IOS";
    }(i || (i = {}));

    var s = {},
        a = function a(e) {
      return function (t) {
        var n = e(t.url);
        return n.binaryType = "arraybuffer", {
          onClose: function onClose(e) {
            return n.onclose = e;
          },
          onOpen: function onOpen(e) {
            return n.onopen = e;
          },
          onError: function onError(e) {
            return n.onerror = e;
          },
          onMessage: function onMessage(e) {
            return n.onmessage = e;
          },
          close: function close() {
            return n.close();
          },
          send: function send(_ref) {
            var e = _ref.data,
                t = _ref.fail,
                r = _ref.success;

            try {
              n.send(e), setTimeout(function () {
                return r && r();
              }, 0);
            } catch (e) {
              setTimeout(function () {
                return t && t();
              }, 0);
            }
          },

          get readyState() {
            return n.readyState;
          },

          CONNECTING: 0,
          OPEN: 1,
          CLOSING: 2,
          CLOSED: 3
        };
      };
    },
        _ = a(function (e) {
      return new WebSocket(e);
    }),
        E = function E(e) {
      var t = (e.method + "").toLowerCase() || "get",
          n = new XMLHttpRequest();
      var r = "",
          i = "";

      if ("get" === t) {
        i = "?";

        var _t2 = Object.keys(e.data || {});

        for (var _i = 0, _t3 = _t2; _i < _t3.length; _i++) {
          var _n3 = _t3[_i];
          i += _n3 + "=" + e.data[_n3] + "&";
        }
      }

      "post" === t && (r = JSON.stringify(e.data || {})), n.open(t, e.url + i), n.onreadystatechange = function () {
        if (4 === n.readyState) return 200 === n.status ? e.success && e.success({
          data: JSON.parse(n.responseText)
        }) : e.fail && e.fail();
      }, n.send("post" === t && r);
    },
        l = function l(e) {
      return null;
    },
        d = function d(e) {
      return null;
    },
        u = function u(e) {
      return null;
    },
        h = function h(e) {
      return null;
    },
        c = {},
        f = function f(e) {
      return c[e];
    },
        p = function p(e, t) {
      return c[e] = t;
    },
        R = function R(e) {
      return delete c[e];
    },
        m = function m(_ref2) {
      var e = _ref2.fail;
      return e && e("ERROR");
    },
        g = function g() {
      return {};
    },
        y = function y(_ref3) {
      var e = _ref3.fail;
      return e && e("ERROR");
    },
        S = function S(_ref4) {
      var e = _ref4.fail;
      return e && e("ERROR");
    };

    function I(e, t) {
      var n = s;
      return t[e] || n[e];
    }

    s.connectSocket = _, s.request = E, s.onHide = l, s.offHide = d, s.onShow = u, s.offShow = h, s.getStorageSync = f, s.setStorageSync = p, s.removeStorageSync = R, s.getUserInfo = m, s.getSystemInfoSync = g, s.getLocation = y, s.getNetworkType = S, s.createUDPSocket = null, s.channel = r.UNKNOWN, "undefined" != typeof window ? s.root = window : s.root = {};
    var C = {};

    function O() {
      if ("undefined" == typeof wx) return !1;
      if ("undefined" == typeof GameGlobal) return !1;
      if (!wx.onHide) return !1;
      if (!wx.offHide) return !1;
      if (!wx.onShow) return !1;
      if (!wx.offShow) return !1;
      if (!wx.getSystemInfoSync) return !1;
      if (!wx.getStorageSync) return !1;
      if (!wx.setStorageSync) return !1;
      if (!wx.connectSocket) return !1;
      if (!wx.request) return !1;

      try {
        if (!wx.getSystemInfoSync()) return !1;
      } catch (e) {
        return !1;
      }

      return !0;
    }

    O() && (C = wx);
    var T = {};
    T.connectSocket = I("connectSocket", C), T.request = I("request", C), T.onHide = I("onHide", C), T.offHide = I("offHide", C), T.onShow = I("onShow", C), T.offShow = I("offShow", C), T.getStorageSync = I("getStorageSync", C), T.setStorageSync = I("setStorageSync", C), T.removeStorageSync = I("removeStorageSync", C), T.getUserInfo = I("getUserInfo", C), T.getSystemInfoSync = I("getSystemInfoSync", C), T.getLocation = I("getLocation", C), T.getNetworkType = I("getNetworkType", C), T.createUDPSocket = I("createUDPSocket", C), T.channel = r.WX, "undefined" != typeof GameGlobal && (T.root = GameGlobal);
    var A = {};

    function P() {
      if ("undefined" == typeof qq) return !1;
      if (!qq.onHide) return !1;
      if (!qq.offHide) return !1;
      if (!qq.onShow) return !1;
      if (!qq.offShow) return !1;
      if (!qq.getSystemInfoSync) return !1;
      if (!qq.getStorageSync) return !1;
      if (!qq.setStorageSync) return !1;
      if (!qq.connectSocket) return !1;
      if (!qq.request) return !1;

      try {
        var _e2 = qq.getSystemInfoSync();

        if (!_e2) return !1;
        if ("qq" !== (_e2.AppPlatform + "").toLowerCase()) return !1;
      } catch (e) {
        return !1;
      }

      return !0;
    }

    P() && (A = qq);
    var M = {},
        v = I("connectSocket", A);
    M.connectSocket = function (e) {
      var t = v(e);
      var n = 0;
      return {
        onClose: function onClose(e) {
          t.onClose(function (t) {
            n = 3, e && e(t);
          });
        },
        onOpen: function onOpen(e) {
          t.onOpen(function (t) {
            n = 1, e && e(t);
          });
        },
        onError: function onError(e) {
          t.onError(function (r) {
            n = 3, t.close(), e && e(r);
          });
        },
        onMessage: function onMessage(e) {
          return t.onMessage(e);
        },
        close: function close() {
          n = 3, t.close();
        },
        send: function send(_ref5) {
          var e = _ref5.data,
              n = _ref5.fail,
              r = _ref5.success;
          return t.send({
            data: e,
            fail: n,
            success: r
          });
        },

        get readyState() {
          return n;
        },

        CONNECTING: 0,
        OPEN: 1,
        CLOSING: 2,
        CLOSED: 3
      };
    }, M.request = I("request", A), M.onHide = I("onHide", A), M.offHide = I("offHide", A), M.onShow = I("onShow", A), M.offShow = I("offShow", A), M.getStorageSync = I("getStorageSync", A), M.setStorageSync = I("setStorageSync", A), M.removeStorageSync = I("removeStorageSync", A), M.getUserInfo = I("getUserInfo", A), M.getSystemInfoSync = I("getSystemInfoSync", A), M.getLocation = I("getLocation", A), M.getNetworkType = I("getNetworkType", A), M.createUDPSocket = I("createUDPSocket", A), M.channel = r.QQ, "undefined" != typeof GameGlobal && (M.root = GameGlobal);
    var N = {};

    function L() {
      if ("undefined" == typeof swan) return !1;
      if (!swan.onHide) return !1;
      if (!swan.offHide) return !1;
      if (!swan.onShow) return !1;
      if (!swan.offShow) return !1;
      if (!swan.getSystemInfoSync) return !1;
      if (!swan.getStorageSync) return !1;
      if (!swan.setStorageSync) return !1;
      if (!swan.connectSocket) return !1;
      if (!swan.request) return !1;

      try {
        var _e3 = swan.getSystemInfoSync();

        if (!_e3) return !1;
        if (!_e3.swanNativeVersion) return !1;
        if (!(_e3.host + "").toLowerCase().includes("baidu")) return !1;
      } catch (e) {
        return !1;
      }

      return !0;
    }

    L() && (N = swan);
    var b = {},
        D = I("connectSocket", N);
    b.connectSocket = function (e) {
      var t = D(e);
      var n = 0;
      return {
        onClose: function onClose(e) {
          t.onClose(function (t) {
            n = 3, e && e(t);
          });
        },
        onOpen: function onOpen(e) {
          t.onOpen(function (t) {
            n = 1, e && e(t);
          });
        },
        onError: function onError(e) {
          t.onError(function (r) {
            n = 3, t.close(), e && e(r);
          });
        },
        onMessage: function onMessage(e) {
          return t.onMessage(e);
        },
        close: function close() {
          n = 3, t.close();
        },
        send: function send(_ref6) {
          var e = _ref6.data,
              n = _ref6.fail,
              r = _ref6.success;
          return t.send({
            data: e,
            fail: n,
            success: r
          });
        },

        get readyState() {
          return n;
        },

        CONNECTING: 0,
        OPEN: 1,
        CLOSING: 2,
        CLOSED: 3
      };
    }, b.request = I("request", N), b.onHide = I("onHide", N), b.offHide = I("offHide", N), b.onShow = I("onShow", N), b.offShow = I("offShow", N), b.getStorageSync = I("getStorageSync", N), b.setStorageSync = I("setStorageSync", N), b.removeStorageSync = I("removeStorageSync", N), b.getUserInfo = I("getUserInfo", N), b.getSystemInfoSync = I("getSystemInfoSync", N), b.getLocation = I("getLocation", N), b.getNetworkType = I("getNetworkType", N), b.createUDPSocket = null, b.channel = r.BD, "undefined" != typeof GameGlobal && (b.root = GameGlobal);
    var w = {};

    function G() {
      if ("undefined" == typeof qg) return !1;
      if (!qg.onHide) return !1;
      if (!qg.offHide) return !1;
      if (!qg.onShow) return !1;
      if (!qg.offShow) return !1;
      if (!qg.getSystemInfoSync) return !1;
      if (!qg.getProvider) return !1;
      if (!localStorage.getItem) return !1;
      if (!localStorage.setItem) return !1;
      if (!WebSocket) return !1;
      if (!XMLHttpRequest) return !1;
      if (!localStorage) return !1;

      try {
        if ("OPPO" !== qg.getProvider().toLocaleUpperCase()) return !1;
      } catch (e) {
        return !1;
      }

      try {
        if (!qg.getSystemInfoSync()) return !1;
      } catch (e) {
        return !1;
      }

      return !0;
    }

    G() && (w = qg);
    var U = {};
    U.connectSocket = _, U.request = E, U.onHide = I("onHide", w), U.offHide = I("offHide", w), U.onShow = I("onShow", w), U.offShow = I("offShow", w), U.getStorageSync = function (e) {
      localStorage.getItem(e);
    }, U.setStorageSync = function (e, t) {
      localStorage.setItem(e, t);
    }, U.removeStorageSync = function (e) {
      localStorage.removeItem(e);
    }, U.getUserInfo = m, U.getSystemInfoSync = I("getSystemInfoSync", w), U.getLocation = I("getLocation", w), U.getNetworkType = I("getNetworkType", w), U.createUDPSocket = null, U.channel = r.OP, "undefined" != typeof window && (U.root = window);
    var Y = {};

    function F() {
      if ("undefined" == typeof qg) return !1;
      if (!qg.onHide) return !1;
      if (!qg.offHide) return !1;
      if (!qg.onShow) return !1;
      if (!qg.offShow) return !1;
      if (!qg.getSystemInfoSync) return !1;
      if (!qg.getProvider) return !1;
      if (!qg.getStorageSync) return !1;
      if (!qg.setStorageSync) return !1;
      if (!qg.createWebSocket) return !1;
      if (!qg.request) return !1;

      try {
        if ("VIVO" !== qg.getProvider().toLocaleUpperCase()) return !1;
      } catch (e) {
        return !1;
      }

      try {
        if (!qg.getSystemInfoSync()) return !1;
      } catch (e) {
        return !1;
      }

      return !0;
    }

    F() && (Y = qg);
    var k = {
      connectSocket: function connectSocket(e) {
        var t = qg.createWebSocket({
          url: e.url
        });
        return {
          onClose: function onClose(e) {
            return t.onclose = e;
          },
          onOpen: function onOpen(e) {
            return t.onopen = e;
          },
          onError: function onError(e) {
            return t.onerror = e;
          },
          onMessage: function onMessage(e) {
            return t.onmessage = e;
          },
          close: function close() {
            return t.close();
          },
          send: function send(_ref7) {
            var e = _ref7.data,
                n = _ref7.fail,
                r = _ref7.success;

            try {
              t.send(e), setTimeout(function () {
                return r && r();
              }, 0);
            } catch (e) {
              setTimeout(function () {
                return n && n();
              }, 0);
            }
          },

          get readyState() {
            return t.readyState;
          },

          CONNECTING: 0,
          OPEN: 1,
          CLOSING: 2,
          CLOSED: 3
        };
      },
      request: function request(e) {
        return e.data = "object" == _typeof(e.data) ? JSON.stringify(e.data) : e.data, qg.request(e);
      }
    };
    k.onHide = I("onHide", Y), k.offHide = I("offHide", Y), k.onShow = I("onShow", Y), k.offShow = I("offShow", Y), k.getStorageSync = function (e) {
      return qg.getStorageSync({
        key: e
      });
    }, k.setStorageSync = function (e, t) {
      return qg.setStorageSync({
        key: e,
        value: t
      });
    }, k.removeStorageSync = function (e) {
      return qg.deleteStorageSync({
        key: e
      });
    }, k.getUserInfo = m, k.getSystemInfoSync = I("getSystemInfoSync", Y), k.getLocation = I("getLocation", Y), k.getNetworkType = function (e) {
      qg.getNetworkType({
        success: function success(t) {
          e.success && e.success({
            networkType: t.type
          });
        },
        fail: function fail() {
          e.fail && e.fail();
        },
        complete: function complete() {
          e.complete && e.complete();
        }
      });
    }, k.createUDPSocket = null, k.channel = r.VV, "undefined" != typeof window && (k.root = window);
    var q = {};

    function H() {
      if ("undefined" == typeof wx) return !1;
      if ("undefined" == typeof App) return !1;
      if ("undefined" == typeof Page) return !1;
      if ("function" != typeof getApp) return !1;
      if (!wx.onAppHide) return !1;
      if (!wx.offAppHide) return !1;
      if (!wx.onAppShow) return !1;
      if (!wx.offAppShow) return !1;
      if (!wx.getSystemInfoSync) return !1;
      if (!wx.getStorageSync) return !1;
      if (!wx.setStorageSync) return !1;
      if (!wx.connectSocket) return !1;
      if (!wx.request) return !1;

      try {
        if (!wx.getSystemInfoSync()) return !1;
        if ("qq" === wx.getSystemInfoSync().AppPlatform) return !1;
      } catch (e) {
        return !1;
      }

      return !0;
    }

    var x = l,
        B = d,
        V = u,
        Q = h;
    H() && (q = wx, x = wx.onAppHide, B = wx.offAppHide, V = wx.onAppShow, Q = wx.offAppShow);
    var K = {};
    K.connectSocket = I("connectSocket", q), K.request = I("request", q), K.onHide = x, K.offHide = B, K.onShow = V, K.offShow = Q, K.getStorageSync = I("getStorageSync", q), K.setStorageSync = I("setStorageSync", q), K.removeStorageSync = I("removeStorageSync", q), K.getUserInfo = I("getUserInfo", q), K.getSystemInfoSync = I("getSystemInfoSync", q), K.getLocation = I("getLocation", q), K.getNetworkType = I("getNetworkType", q), K.createUDPSocket = I("createUDPSocket", q), K.channel = r.WXMP, K.root = {};
    var W = {};
    var j = "___MGOBE_PREVENT_MULTI_QQ_MP_JS_PROCESS___",
        J = Date.now() + "_" + Math.random();

    function X() {
      if ("undefined" == typeof qq) return !1;
      if ("undefined" == typeof App) return !1;
      if ("undefined" == typeof Page) return !1;
      if ("function" != typeof getApp) return !1;
      if (!qq.onAppHide) return !1;
      if (!qq.offAppHide) return !1;
      if (!qq.onAppShow) return !1;
      if (!qq.offAppShow) return !1;
      if (!qq.getSystemInfoSync) return !1;
      if (!qq.getStorageSync) return !1;
      if (!qq.setStorageSync) return !1;
      if (!qq.connectSocket) return !1;
      if (!qq.request) return !1;

      try {
        var _e4 = qq.getSystemInfoSync();

        if (!_e4) return !1;
        if ("qq" !== (_e4.AppPlatform + "").toLowerCase()) return !1;
      } catch (e) {
        return !1;
      }

      try {
        qq.setStorageSync(j, J);
      } catch (e) {
        console.log("set storage fail", e);
      }

      return !0;
    }

    var z = l,
        $ = d,
        Z = u,
        ee = h;
    X() && (W = qq, z = qq.onAppHide, $ = qq.offAppHide, Z = qq.onAppShow, ee = qq.offAppShow);
    var te = {},
        ne = I("connectSocket", W);
    te.connectSocket = function (e) {
      var t = ne(e);
      var n = 0;
      return {
        onClose: function onClose(e) {
          t.onClose(function (t) {
            n = 3, e && e(t);
          });
        },
        onOpen: function onOpen(e) {
          t.onOpen(function (t) {
            n = 1, e && e(t);
          });
        },
        onError: function onError(e) {
          t.onError(function (r) {
            n = 3, t.close(), e && e(r);
          });
        },
        onMessage: function onMessage(e) {
          return t.onMessage(e);
        },
        close: function close() {
          n = 3, t.close();
        },
        send: function send(_ref8) {
          var e = _ref8.data,
              n = _ref8.fail,
              r = _ref8.success;
          var i = "";

          try {
            i = qq.getStorageSync(j);
          } catch (e) {
            console.log("get storage fail", e);
          }

          if (!i || i === J) return t.send({
            data: e,
            fail: n,
            success: r
          });
          n && n();
        },

        get readyState() {
          return n;
        },

        CONNECTING: 0,
        OPEN: 1,
        CLOSING: 2,
        CLOSED: 3
      };
    }, te.request = I("request", W), te.onHide = z, te.offHide = $, te.onShow = Z, te.offShow = ee, te.getStorageSync = I("getStorageSync", W), te.setStorageSync = I("setStorageSync", W), te.removeStorageSync = I("removeStorageSync", W), te.getUserInfo = I("getUserInfo", W), te.getSystemInfoSync = I("getSystemInfoSync", W), te.getLocation = I("getLocation", W), te.getNetworkType = I("getNetworkType", W), te.createUDPSocket = I("createUDPSocket", W), te.channel = r.QQMP, te.root = {};
    var re = "mgobexs";

    var ie, oe, se, ae, _e, Ee, le, de, ue, he, ce, fe, pe, Re, me, ge, ye, Se;

    !function (e) {
      e[e.COMMON = 0] = "COMMON", e[e.RELAY = 1] = "RELAY";
    }(ie || (ie = {})), function (e) {
      e[e.ET_Unknown = 0] = "ET_Unknown", e[e.ET_NetworkState = 1] = "ET_NetworkState";
    }(oe || (oe = {})), function (e) {
      e[e.E_PUSH_TYPE_TEST = 0] = "E_PUSH_TYPE_TEST", e[e.E_PUSH_TYPE_RELAY = 1] = "E_PUSH_TYPE_RELAY", e[e.E_PUSH_TYPE_GAMESVR = 2] = "E_PUSH_TYPE_GAMESVR", e[e.E_PUSH_TYPE_JOIN_ROOM = 100] = "E_PUSH_TYPE_JOIN_ROOM", e[e.E_PUSH_TYPE_LEAVE_ROOM = 101] = "E_PUSH_TYPE_LEAVE_ROOM", e[e.E_PUSH_TYPE_DISMISS_ROOM = 102] = "E_PUSH_TYPE_DISMISS_ROOM", e[e.E_PUSH_TYPE_REMOVE_PLAYER = 103] = "E_PUSH_TYPE_REMOVE_PLAYER", e[e.E_PUSH_TYPE_MODIFY_ROOM_PROPERTY = 104] = "E_PUSH_TYPE_MODIFY_ROOM_PROPERTY", e[e.E_PUSH_TYPE_NETWORK_STATE = 105] = "E_PUSH_TYPE_NETWORK_STATE", e[e.E_PUSH_TYPE_ROOM_CHAT = 106] = "E_PUSH_TYPE_ROOM_CHAT", e[e.E_PUSH_TYPE_PLAYER_STATE = 107] = "E_PUSH_TYPE_PLAYER_STATE", e[e.E_PUSH_TYPE_START_GAME = 108] = "E_PUSH_TYPE_START_GAME", e[e.E_PUSH_TYPE_STOP_GAME = 109] = "E_PUSH_TYPE_STOP_GAME", e[e.E_PUSH_TYPE_CREATE_ROOM = 110] = "E_PUSH_TYPE_CREATE_ROOM", e[e.E_PUSH_TYPE_DESTROY_ROOM = 111] = "E_PUSH_TYPE_DESTROY_ROOM", e[e.E_PUSH_TYPE_MODIFY_ROOM_PLAYER_PROFILE = 112] = "E_PUSH_TYPE_MODIFY_ROOM_PLAYER_PROFILE", e[e.E_PUSH_TYPE_MATCH_SUCCESS = 200] = "E_PUSH_TYPE_MATCH_SUCCESS", e[e.E_PUSH_TYPE_MATCH_TIMEOUT = 201] = "E_PUSH_TYPE_MATCH_TIMEOUT", e[e.E_PUSH_TYPE_MATCH_CANCEL = 202] = "E_PUSH_TYPE_MATCH_CANCEL", e[e.E_PUSH_TYPE_JOIN_GROUP = 500] = "E_PUSH_TYPE_JOIN_GROUP", e[e.E_PUSH_TYPE_LEAVE_GROUP = 501] = "E_PUSH_TYPE_LEAVE_GROUP", e[e.E_PUSH_TYPE_DISMISS_GROUP = 502] = "E_PUSH_TYPE_DISMISS_GROUP", e[e.E_PUSH_TYPE_MODIFY_GROUP_PROPERTY = 503] = "E_PUSH_TYPE_MODIFY_GROUP_PROPERTY", e[e.E_PUSH_TYPE_REMOVE_GROUP_PLAYER = 504] = "E_PUSH_TYPE_REMOVE_GROUP_PLAYER", e[e.E_PUSH_TYPE_GROUP_PLAYER_STATE = 505] = "E_PUSH_TYPE_GROUP_PLAYER_STATE", e[e.E_PUSH_TYPE_GROUP_CHAT = 506] = "E_PUSH_TYPE_GROUP_CHAT", e[e.E_PUSH_TYPE_MODIFY_GROUP_PLAYER_PROFILE = 507] = "E_PUSH_TYPE_MODIFY_GROUP_PLAYER_PROFILE";
    }(se || (se = {})), function (e) {
      e[e.E_CMD_INVALID = 0] = "E_CMD_INVALID", e[e.E_CMD_HEART_BEAT_REQ = 100] = "E_CMD_HEART_BEAT_REQ", e[e.E_CMD_CHECK_LOGIN_REQ = 101] = "E_CMD_CHECK_LOGIN_REQ", e[e.E_CMD_LOGIN_TO_ROOM_REQ = 102] = "E_CMD_LOGIN_TO_ROOM_REQ", e[e.E_CMD_FORWARD_TO_RELAY_REQ = 103] = "E_CMD_FORWARD_TO_RELAY_REQ", e[e.E_CMD_LOGIN_REQ = 1e3] = "E_CMD_LOGIN_REQ", e[e.E_CMD_LOGOUT_REQ = 1001] = "E_CMD_LOGOUT_REQ", e[e.E_CMD_AUTH_REQ = 1002] = "E_CMD_AUTH_REQ", e[e.E_CMD_QUERY_BY_PLAYER_ID_REQ = 1003] = "E_CMD_QUERY_BY_PLAYER_ID_REQ", e[e.E_CMD_QUERY_BY_GAME_ID_REQ = 1004] = "E_CMD_QUERY_BY_GAME_ID_REQ", e[e.E_CMD_GET_ROOM_DETAIL_REQ = 2001] = "E_CMD_GET_ROOM_DETAIL_REQ", e[e.E_CMD_JOIN_ROOM_REQ = 2002] = "E_CMD_JOIN_ROOM_REQ", e[e.E_CMD_QUIT_ROOM_REQ = 2003] = "E_CMD_QUIT_ROOM_REQ", e[e.E_CMD_CREATE_ROOM_REQ = 2004] = "E_CMD_CREATE_ROOM_REQ", e[e.E_CMD_DESTORY_ROOM_REQ = 2005] = "E_CMD_DESTORY_ROOM_REQ", e[e.E_CMD_REMOVE_MEMBER_REQ = 2006] = "E_CMD_REMOVE_MEMBER_REQ", e[e.E_CMD_CHANGE_ROOM_PROPERTIS_REQ = 2007] = "E_CMD_CHANGE_ROOM_PROPERTIS_REQ", e[e.E_CMD_DISSMISS_ROOM_REQ = 2008] = "E_CMD_DISSMISS_ROOM_REQ", e[e.E_CMD_CHANGE_PLAYER_STATE_REQ = 2009] = "E_CMD_CHANGE_PLAYER_STATE_REQ", e[e.E_CMD_CHANGE_PLAYER_NETWORK_STATE_REQ = 2010] = "E_CMD_CHANGE_PLAYER_NETWORK_STATE_REQ", e[e.E_CMD_ROOM_CHAT_REQ = 2011] = "E_CMD_ROOM_CHAT_REQ", e[e.E_CMD_START_FRAME_SYNC_REQ = 2012] = "E_CMD_START_FRAME_SYNC_REQ", e[e.E_CMD_STOP_FRAME_SYNC_REQ = 2013] = "E_CMD_STOP_FRAME_SYNC_REQ", e[e.E_CMD_GET_ROOM_LIST_REQ = 2014] = "E_CMD_GET_ROOM_LIST_REQ", e[e.E_CMD_SVR_REMOVE_MEMBER_REQ = 2015] = "E_CMD_SVR_REMOVE_MEMBER_REQ", e[e.E_CMD_SVR_CHANGE_ROOM_PROPERTIS_REQ = 2016] = "E_CMD_SVR_CHANGE_ROOM_PROPERTIS_REQ", e[e.E_CMD_SVR_CHANGE_PLAYER_STATE_REQ = 2017] = "E_CMD_SVR_CHANGE_PLAYER_STATE_REQ", e[e.E_CMD_GET_ROOM_LIST_V2_REQ = 2018] = "E_CMD_GET_ROOM_LIST_V2_REQ", e[e.E_CMD_CREATE_ROOM_FOR_THIRD_PARTY_REQ = 2019] = "E_CMD_CREATE_ROOM_FOR_THIRD_PARTY_REQ", e[e.E_CMD_CHANGE_ROOM_PLAYER_PROFILE = 2020] = "E_CMD_CHANGE_ROOM_PLAYER_PROFILE", e[e.E_CMD_MATCH_ROOM_SIMPLE_REQ = 3001] = "E_CMD_MATCH_ROOM_SIMPLE_REQ", e[e.E_CMD_MATCH_USER_SIMPLE_REQ = 3002] = "E_CMD_MATCH_USER_SIMPLE_REQ", e[e.E_CMD_MATCH_CANCEL_MATCH_REQ = 3003] = "E_CMD_MATCH_CANCEL_MATCH_REQ", e[e.E_CMD_MATCH_ROOM_COMPLEX_REQ = 3004] = "E_CMD_MATCH_ROOM_COMPLEX_REQ", e[e.E_CMD_MATCH_PLAYER_COMPLEX_REQ = 3005] = "E_CMD_MATCH_PLAYER_COMPLEX_REQ", e[e.E_CMD_MATCH_GROUP_REQ = 3006] = "E_CMD_MATCH_GROUP_REQ", e[e.E_CMD_RELAY_SEND_FRAME_REQ = 4e3] = "E_CMD_RELAY_SEND_FRAME_REQ", e[e.E_CMD_RELAY_REQUEST_FRAME_REQ = 4001] = "E_CMD_RELAY_REQUEST_FRAME_REQ", e[e.E_CMD_RELAY_CLIENT_SENDTO_GAMESVR_REQ = 4002] = "E_CMD_RELAY_CLIENT_SENDTO_GAMESVR_REQ", e[e.E_CMD_RELAY_CLIENT_RECV_FROM_GAMESVR_REQ = 4003] = "E_CMD_RELAY_CLIENT_RECV_FROM_GAMESVR_REQ", e[e.E_CMD_NOTIFY_JOIN_ROOM = 5e3] = "E_CMD_NOTIFY_JOIN_ROOM", e[e.E_CMD_NOTIFY_QUIT_ROOM = 5001] = "E_CMD_NOTIFY_QUIT_ROOM", e[e.E_CMD_NOTIFY_DESTORY_ROOM = 5002] = "E_CMD_NOTIFY_DESTORY_ROOM", e[e.E_CMD_NOTIFY_NET_STATE = 5003] = "E_CMD_NOTIFY_NET_STATE", e[e.E_CMD_NOTIFY_KICK_MEMBER = 5004] = "E_CMD_NOTIFY_KICK_MEMBER", e[e.E_CMD_GET_ADDR_BY_ROUTER_ID_REQ = 6e3] = "E_CMD_GET_ADDR_BY_ROUTER_ID_REQ", e[e.E_CMD_GET_GROUP_DETAIL_REQ = 7001] = "E_CMD_GET_GROUP_DETAIL_REQ", e[e.E_CMD_JOIN_GROUP_REQ = 7002] = "E_CMD_JOIN_GROUP_REQ", e[e.E_CMD_QUIT_GROUP_REQ = 7003] = "E_CMD_QUIT_GROUP_REQ", e[e.E_CMD_CREATE_GROUP_REQ = 7004] = "E_CMD_CREATE_GROUP_REQ", e[e.E_CMD_REMOVE_GROUP_MEMBER_REQ = 7005] = "E_CMD_REMOVE_GROUP_MEMBER_REQ", e[e.E_CMD_CHANGE_GROUP_PROPERTIES_REQ = 7006] = "E_CMD_CHANGE_GROUP_PROPERTIES_REQ", e[e.E_CMD_DISMISS_GROUP_REQ = 7007] = "E_CMD_DISMISS_GROUP_REQ", e[e.E_CMD_CHANGE_GROUP_PLAYER_STATE_REQ = 7008] = "E_CMD_CHANGE_GROUP_PLAYER_STATE_REQ", e[e.E_CMD_CHANGE_GROUP_PLAYER_NETWORK_STATE_REQ = 7009] = "E_CMD_CHANGE_GROUP_PLAYER_NETWORK_STATE_REQ", e[e.E_CMD_GROUP_CHAT_REQ = 7010] = "E_CMD_GROUP_CHAT_REQ", e[e.E_CMD_GET_GROUP_LIST_REQ = 7011] = "E_CMD_GET_GROUP_LIST_REQ", e[e.E_CMD_CHANGE_GROUP_PLAYER_PROFILE = 7012] = "E_CMD_CHANGE_GROUP_PLAYER_PROFILE";
    }(ae || (ae = {})), function (e) {
      e[e.EC_OK = 0] = "EC_OK", e[e.EC_REQ_BAD_PKG = 1] = "EC_REQ_BAD_PKG", e[e.EC_CMD_INVALID = 2] = "EC_CMD_INVALID", e[e.EC_PARAMS_INVALID = 3] = "EC_PARAMS_INVALID", e[e.EC_INNER_ERROR = 4] = "EC_INNER_ERROR", e[e.EC_TIME_OUT = 5] = "EC_TIME_OUT", e[e.EC_SERVER_BUSY = 6] = "EC_SERVER_BUSY", e[e.EC_NO_RIGHT = 7] = "EC_NO_RIGHT", e[e.EC_ACCESS_CMD_INVALID_ERR = 200] = "EC_ACCESS_CMD_INVALID_ERR", e[e.EC_ACCESS_CMD_GET_TOKEN_ERR = 201] = "EC_ACCESS_CMD_GET_TOKEN_ERR", e[e.EC_ACCESS_CMD_TOKEN_PRE_EXPIRE = 202] = "EC_ACCESS_CMD_TOKEN_PRE_EXPIRE", e[e.EC_ACCESS_CMD_INVALID_TOKEN = 203] = "EC_ACCESS_CMD_INVALID_TOKEN", e[e.EC_ACCESS_PUSH_SERIALIZE_ERR = 204] = "EC_ACCESS_PUSH_SERIALIZE_ERR", e[e.EC_ACCESS_LOGIN_BODY_PARSE_ERR = 205] = "EC_ACCESS_LOGIN_BODY_PARSE_ERR", e[e.EC_ACCESS_CONN_ERR = 206] = "EC_ACCESS_CONN_ERR", e[e.EC_ACCESS_GET_RS_IP_ERR = 207] = "EC_ACCESS_GET_RS_IP_ERR", e[e.EC_ACCESS_ADD_COMM_CONN_ERR = 208] = "EC_ACCESS_ADD_COMM_CONN_ERR", e[e.EC_ACCESS_ADD_HEART_CONN_ERR = 209] = "EC_ACCESS_ADD_HEART_CONN_ERR", e[e.EC_ACCESS_ADD_RELAY_CONN_ERR = 210] = "EC_ACCESS_ADD_RELAY_CONN_ERR", e[e.EC_ACCESS_HEART_BODY_PARSE_ERR = 211] = "EC_ACCESS_HEART_BODY_PARSE_ERR", e[e.EC_ACCESS_GET_COMM_CONNECT_ERR = 212] = "EC_ACCESS_GET_COMM_CONNECT_ERR", e[e.EC_ACCESS_GET_RELAY_CONNECT_ERR = 213] = "EC_ACCESS_GET_RELAY_CONNECT_ERR", e[e.EC_ACCESS_ACCESS_INFO_EMPTY = 214] = "EC_ACCESS_ACCESS_INFO_EMPTY", e[e.EC_ACCESS_PLAYER_DUPLICATE_LOGIN = 215] = "EC_ACCESS_PLAYER_DUPLICATE_LOGIN", e[e.EC_ACCESS_NOE_RELAY_OR_STATE_SVR = 216] = "EC_ACCESS_NOE_RELAY_OR_STATE_SVR", e[e.EC_PLAYER_GAME_NOT_EXIST = 1e4] = "EC_PLAYER_GAME_NOT_EXIST", e[e.EC_PLAYER_SECRET_KEY_FAIL = 10001] = "EC_PLAYER_SECRET_KEY_FAIL", e[e.EC_PLAYER_SIGN_ERR = 10002] = "EC_PLAYER_SIGN_ERR", e[e.EC_PLAYER_DUPLICATE_REQ = 10003] = "EC_PLAYER_DUPLICATE_REQ", e[e.EC_PLAYER_TIMESTAMP_INVALID = 10004] = "EC_PLAYER_TIMESTAMP_INVALID", e[e.EC_PLAYER_QUERY_PLAYER_FAIL = 10005] = "EC_PLAYER_QUERY_PLAYER_FAIL", e[e.EC_PLAYER_ADD_PLAYER_FAIL = 10006] = "EC_PLAYER_ADD_PLAYER_FAIL", e[e.EC_PLAYER_QUERY_GAME_FAIL = 10007] = "EC_PLAYER_QUERY_GAME_FAIL", e[e.EC_PLAYER_RECORD_NUM_ERR = 10008] = "EC_PLAYER_RECORD_NUM_ERR", e[e.EC_PLAYER_GET_TOKEN_FAIL = 10009] = "EC_PLAYER_GET_TOKEN_FAIL", e[e.EC_PLAYER_TOKEN_NOT_EXIST = 10010] = "EC_PLAYER_TOKEN_NOT_EXIST", e[e.EC_PLAYER_TOKEN_INVALID = 10011] = "EC_PLAYER_TOKEN_INVALID", e[e.EC_PLAYER_CLEAR_TOKEN_FAIL = 10012] = "EC_PLAYER_CLEAR_TOKEN_FAIL", e[e.EC_PLAYER_LOCK_FAIL = 10013] = "EC_PLAYER_LOCK_FAIL", e[e.EC_PLAYER_UNLOCK_FAIL = 10014] = "EC_PLAYER_UNLOCK_FAIL", e[e.EC_PLAYER_SAVE_TOKEN_FAIL = 10015] = "EC_PLAYER_SAVE_TOKEN_FAIL", e[e.EC_PLAYER_GAME_OUT_OF_SERVICE = 10016] = "EC_PLAYER_GAME_OUT_OF_SERVICE", e[e.EC_ROOM_CREATE_NO_PERMISSION = 2e4] = "EC_ROOM_CREATE_NO_PERMISSION", e[e.EC_ROOM_DESTORY_NO_PERMISSION = 20001] = "EC_ROOM_DESTORY_NO_PERMISSION", e[e.EC_ROOM_JOIN_NO_PERMISSION = 20002] = "EC_ROOM_JOIN_NO_PERMISSION", e[e.EC_ROOM_REMOVE_PLAYER_NO_PERMISSION = 20003] = "EC_ROOM_REMOVE_PLAYER_NO_PERMISSION", e[e.EC_ROOM_MODIFY_PROPERTIES_NO_PEMISSION = 20004] = "EC_ROOM_MODIFY_PROPERTIES_NO_PEMISSION", e[e.EC_ROOM_DISSMISS_NO_PERMISSION = 20005] = "EC_ROOM_DISSMISS_NO_PERMISSION", e[e.EC_ROOM_REMOVE_SELF_NO_PERMISSION = 20006] = "EC_ROOM_REMOVE_SELF_NO_PERMISSION", e[e.EC_ROOM_CHECK_LOGIN_SESSION_ERR = 20007] = "EC_ROOM_CHECK_LOGIN_SESSION_ERR", e[e.EC_ROOM_REMOVE_PLAYER_NOT_IN_ROOM = 20008] = "EC_ROOM_REMOVE_PLAYER_NOT_IN_ROOM", e[e.EC_ROOM_PLAYER_ALREADY_IN_ROOM = 20010] = "EC_ROOM_PLAYER_ALREADY_IN_ROOM", e[e.EC_ROOM_PLAYER_NOT_IN_ROOM = 20011] = "EC_ROOM_PLAYER_NOT_IN_ROOM", e[e.EC_ROOM_PLAYERS_EXCEED_LIMIT = 20012] = "EC_ROOM_PLAYERS_EXCEED_LIMIT", e[e.EC_ROOM_JOIN_NOT_ALLOW = 20013] = "EC_ROOM_JOIN_NOT_ALLOW", e[e.EC_ROOM_MAX_PLAYERS_INVALID = 20014] = "EC_ROOM_MAX_PLAYERS_INVALID", e[e.EC_ROOM_CREATE_FAIL = 20015] = "EC_ROOM_CREATE_FAIL", e[e.EC_ROOM_PLAYER_OFFLINE = 20016] = "EC_ROOM_PLAYER_OFFLINE", e[e.EC_ROOM_PARAM_PAGE_INVALID = 20017] = "EC_ROOM_PARAM_PAGE_INVALID", e[e.EC_ROOM_GET_PLAYER_INFO_ERR = 20050] = "EC_ROOM_GET_PLAYER_INFO_ERR", e[e.EC_ROOM_GET_ROOM_INFO_ERR = 20051] = "EC_ROOM_GET_ROOM_INFO_ERR", e[e.EC_ROOM_MODIFY_OWNER_ERR = 20052] = "EC_ROOM_MODIFY_OWNER_ERR", e[e.EC_ROOM_MAX_ROOM_NUMBER_EXCEED_LIMIT = 20053] = "EC_ROOM_MAX_ROOM_NUMBER_EXCEED_LIMIT", e[e.EC_ROOM_REMOVE_REDIS_PLAYER_ROOM_MATCH_ERR = -20052] = "EC_ROOM_REMOVE_REDIS_PLAYER_ROOM_MATCH_ERR", e[e.EC_ROOM_REMOVE_REDIS_ROOM_INFO_ERR = -20053] = "EC_ROOM_REMOVE_REDIS_ROOM_INFO_ERR", e[e.EC_ROOM_REDIS_UPDATE_ERR = -20054] = "EC_ROOM_REDIS_UPDATE_ERR", e[e.EC_ROOM_REDIS_GET_LOCK_ERR = -20055] = "EC_ROOM_REDIS_GET_LOCK_ERR", e[e.EC_ROOM_REDIS_CHECK_LOCK_ERR = -20056] = "EC_ROOM_REDIS_CHECK_LOCK_ERR", e[e.EC_ROOM_REDIS_DEL_LOCK_ERR = -20057] = "EC_ROOM_REDIS_DEL_LOCK_ERR", e[e.EC_ROOM_QUERY_PLAYER_ERR = 20060] = "EC_ROOM_QUERY_PLAYER_ERR", e[e.EC_ROOM_QUERY_GAME_ERR = 20061] = "EC_ROOM_QUERY_GAME_ERR", e[e.EC_ROOM_PLAYER_INFO_NOT_EXIST = 20062] = "EC_ROOM_PLAYER_INFO_NOT_EXIST", e[e.EC_ROOM_GAME_INFO_NOT_EXIST = 20063] = "EC_ROOM_GAME_INFO_NOT_EXIST", e[e.EC_ROOM_HISTORY_INFO_INSERT_ERR = -20064] = "EC_ROOM_HISTORY_INFO_INSERT_ERR", e[e.EC_ROOM_REGION_INFO_NOT_EXIST = 20065] = "EC_ROOM_REGION_INFO_NOT_EXIST", e[e.EC_ROOM_QUERY_REGION_ERR = 20066] = "EC_ROOM_QUERY_REGION_ERR", e[e.EC_ROOM_MODIFY_PLAYER_BUSY = 20070] = "EC_ROOM_MODIFY_PLAYER_BUSY", e[e.EC_ROOM_INFO_UNEXIST = 20080] = "EC_ROOM_INFO_UNEXIST", e[e.EC_ROOM_ALLOCATE_RELAYSVR_IP_PORT_ERR = 20090] = "EC_ROOM_ALLOCATE_RELAYSVR_IP_PORT_ERR", e[e.EC_ROOM_INVALID_PARAMS_TEAM_ID = 20100] = "EC_ROOM_INVALID_PARAMS_TEAM_ID", e[e.EC_ROOM_TEAM_MEMBER_LIMIT_EXCEED = 20101] = "EC_ROOM_TEAM_MEMBER_LIMIT_EXCEED", e[e.EC_ROOM_ALLOCATE_SERVICE_FAIL = -20200] = "EC_ROOM_ALLOCATE_SERVICE_FAIL", e[e.EC_MATCH_NO_ROOM = 3e4] = "EC_MATCH_NO_ROOM", e[e.EC_MATCH_TIMEOUT = 30001] = "EC_MATCH_TIMEOUT", e[e.EC_MATCH_LOGIC_ERR = 30002] = "EC_MATCH_LOGIC_ERR", e[e.EC_MATCH_ERR = 30010] = "EC_MATCH_ERR", e[e.EC_MATCH_PLAYER_IS_IN_MATCH = 30011] = "EC_MATCH_PLAYER_IS_IN_MATCH", e[e.EC_MATCH_PLAYER_NOT_IN_MATCH = 30012] = "EC_MATCH_PLAYER_NOT_IN_MATCH", e[e.EC_MATCH_GET_MATCH_INFO_ERR = 30013] = "EC_MATCH_GET_MATCH_INFO_ERR", e[e.EC_MATCH_UPDATE_MATCH_INFO_ERR = 30014] = "EC_MATCH_UPDATE_MATCH_INFO_ERR", e[e.EC_MATCH_CANCEL_FAILED = 30015] = "EC_MATCH_CANCEL_FAILED", e[e.EC_MATCH_GET_PLAYER_LIST_INFO_ERR = 30016] = "EC_MATCH_GET_PLAYER_LIST_INFO_ERR", e[e.EC_MATCH_CREATE_ROOM_ERR = 30041] = "EC_MATCH_CREATE_ROOM_ERR", e[e.EC_MATCH_JOIN_ROOM_ERR = 30042] = "EC_MATCH_JOIN_ROOM_ERR", e[e.EC_MATCH_INVALID_PARAMS = 30043] = "EC_MATCH_INVALID_PARAMS", e[e.EC_MATCH_GROUP_NUM_EXCEED_LIMIT = 30044] = "EC_MATCH_GROUP_NUM_EXCEED_LIMIT", e[e.EC_MATCH_PLAYER_ID_IS_REPEATED = 30045] = "EC_MATCH_PLAYER_ID_IS_REPEATED", e[e.EC_MATCH_CREATE_ROOM_PLAYER_ALREADY_IN_ROOM = 30050] = "EC_MATCH_CREATE_ROOM_PLAYER_ALREADY_IN_ROOM", e[e.EC_MATCH_QUERY_PLAYER_ERR = 30100] = "EC_MATCH_QUERY_PLAYER_ERR", e[e.EC_MATCH_PLAYER_INFO_NOT_EXIST = 30101] = "EC_MATCH_PLAYER_INFO_NOT_EXIST", e[e.EC_MATCH_QUERY_GAME_ERR = 30102] = "EC_MATCH_QUERY_GAME_ERR", e[e.EC_MATCH_GAME_INFO_NOT_EXIST = 30103] = "EC_MATCH_GAME_INFO_NOT_EXIST", e[e.EC_MATCH_QUERY_REGION_ERR = 30104] = "EC_MATCH_QUERY_REGION_ERR", e[e.EC_MATCH_REGION_INFO_NOT_EXIST = 30105] = "EC_MATCH_REGION_INFO_NOT_EXIST", e[e.EC_MATCH_TEAM_FAIL = 30106] = "EC_MATCH_TEAM_FAIL", e[e.EC_MATCH_PLAY_RULE_NOT_RUNNING = 30107] = "EC_MATCH_PLAY_RULE_NOT_RUNNING", e[e.EC_MATCH_PLAY_ATTR_NOT_FOUND = 30108] = "EC_MATCH_PLAY_ATTR_NOT_FOUND", e[e.EC_MATCH_PLAY_RULE_NOT_FOUND = 30109] = "EC_MATCH_PLAY_RULE_NOT_FOUND", e[e.EC_MATCH_PLAY_RULE_ATTR_SEGMENT_NOT_FOUND = 30110] = "EC_MATCH_PLAY_RULE_ATTR_SEGMENT_NOT_FOUND", e[e.EC_MATCH_PLAY_RULE_FUNC_ERR = 30111] = "EC_MATCH_PLAY_RULE_FUNC_ERR", e[e.EC_MATCH_GET_PLAYER_ATTR_FAIL = 30112] = "EC_MATCH_GET_PLAYER_ATTR_FAIL", e[e.EC_MATCH_GET_TEAM_ATTR_FAIL = 30113] = "EC_MATCH_GET_TEAM_ATTR_FAIL", e[e.EC_MATCH_NONE_TEAM_TYPE_FIT = 30114] = "EC_MATCH_NONE_TEAM_TYPE_FIT", e[e.EC_MATCH_TEAM_TYPE_INVALID = 30115] = "EC_MATCH_TEAM_TYPE_INVALID", e[e.EC_MATCH_PLAYER_ATTR_NOT_FOUND = 30116] = "EC_MATCH_PLAYER_ATTR_NOT_FOUND", e[e.EC_MATCH_REQUEST_ID_NOT_EXIST = 30117] = "EC_MATCH_REQUEST_ID_NOT_EXIST", e[e.EC_MATCH_REQUEST_ID_IS_EXIST = 30118] = "EC_MATCH_REQUEST_ID_IS_EXIST", e[e.EC_MATCH_TEAM_MATCH_FAIL = 30119] = "EC_MATCH_TEAM_MATCH_FAIL", e[e.EC_MATCH_ROBOT_GROUP_NOT_RIGHT = 30120] = "EC_MATCH_ROBOT_GROUP_NOT_RIGHT", e[e.EC_MATCH_ROBOT_TEAM_NOT_RIGHT = 30121] = "EC_MATCH_ROBOT_TEAM_NOT_RIGHT", e[e.EC_MATCH_INNER_LOGIC_ERR = -30150] = "EC_MATCH_INNER_LOGIC_ERR", e[e.EC_MATCH_INNER_PARAMS_ERR = -30160] = "EC_MATCH_INNER_PARAMS_ERR", e[e.EC_MATCH_ROOM_INNER_ADD_NODE_ERR = -30170] = "EC_MATCH_ROOM_INNER_ADD_NODE_ERR", e[e.EC_MATCH_ROOM_INNER_DEL_NODE_ERR = -30171] = "EC_MATCH_ROOM_INNER_DEL_NODE_ERR", e[e.EC_MATCH_RESULT_TYPE_NOT_GSE = -30172] = "EC_MATCH_RESULT_TYPE_NOT_GSE", e[e.EC_MATCH_REQUEST_CANCELED = 30173] = "EC_MATCH_REQUEST_CANCELED", e[e.EC_RELAY_ALREADY_EXISTS = 4e4] = "EC_RELAY_ALREADY_EXISTS", e[e.EC_RELAY_NOT_EXISTS = 40001] = "EC_RELAY_NOT_EXISTS", e[e.EC_RELAY_DATA_EXCEED_LIMITED = 40002] = "EC_RELAY_DATA_EXCEED_LIMITED", e[e.EC_RELAY_MEMBER_ALREADY_EXISTS = 40003] = "EC_RELAY_MEMBER_ALREADY_EXISTS", e[e.EC_RELAY_MEMBER_NOT_EXISTS = 40004] = "EC_RELAY_MEMBER_NOT_EXISTS", e[e.EC_RELAY_STATE_INVALID = 40005] = "EC_RELAY_STATE_INVALID", e[e.EC_RELAY_INVALID_FRAME_RATE = 40006] = "EC_RELAY_INVALID_FRAME_RATE", e[e.EC_RELAY_SET_FRAME_RATE_FORBIDDEN = 40007] = "EC_RELAY_SET_FRAME_RATE_FORBIDDEN", e[e.EC_RELAY_NO_MEMBERS = 40008] = "EC_RELAY_NO_MEMBERS", e[e.EC_RELAY_GAMESVR_SERVICE_NOT_OPEN = 40009] = "EC_RELAY_GAMESVR_SERVICE_NOT_OPEN", e[e.EC_RELAY_REQ_POD_FAIL = 40010] = "EC_RELAY_REQ_POD_FAIL", e[e.EC_RELAY_NO_AVAILABLE_POD = 40011] = "EC_RELAY_NO_AVAILABLE_POD", e[e.EC_RELAY_GET_FRAME_CACHE_FAIL = 40012] = "EC_RELAY_GET_FRAME_CACHE_FAIL", e[e.EC_RELAY_HKV_CACHE_ERROR = 40015] = "EC_RELAY_HKV_CACHE_ERROR", e[e.EC_RELAY_REDIS_CACHE_ERROR = 40016] = "EC_RELAY_REDIS_CACHE_ERROR", e[e.EC_RELAY_NOTIFY_RELAYWORKER_FAIL = 40018] = "EC_RELAY_NOTIFY_RELAYWORKER_FAIL", e[e.EC_RELAY_RESET_RELAY_ROOM_FAIL = 40019] = "EC_RELAY_RESET_RELAY_ROOM_FAIL", e[e.EC_RELAY_CLEAN_RELAY_ROOM_FAIL = 40020] = "EC_RELAY_CLEAN_RELAY_ROOM_FAIL", e[e.EC_RELAY_REQ_FRAME_GAME_NOT_STARTED = 40021] = "EC_RELAY_REQ_FRAME_GAME_NOT_STARTED", e[e.EC_RELAY_NO_PERMISSION = 40100] = "EC_RELAY_NO_PERMISSION", e[e.EC_RELAY_NOTIFY_GAMESVR_FAIL = 40200] = "EC_RELAY_NOTIFY_GAMESVR_FAIL", e[e.EC_RELAY_FORWARD_TO_GAMESVR_FAIL = 40201] = "EC_RELAY_FORWARD_TO_GAMESVR_FAIL", e[e.EC_RELAY_FORWARD_TO_CLIENT_FAIL = 40202] = "EC_RELAY_FORWARD_TO_CLIENT_FAIL", e[e.EC_RELAY_GAMESVR_NOT_FOUND_ROOM_FAIL = 40203] = "EC_RELAY_GAMESVR_NOT_FOUND_ROOM_FAIL", e[e.EC_GROUP_OPERATION_FAILED = 7e4] = "EC_GROUP_OPERATION_FAILED", e[e.EC_INVALID_PARAMS_GROUP_NAME = 70001] = "EC_INVALID_PARAMS_GROUP_NAME", e[e.EC_INVALID_PARAMS_GROUP_TYPE = 70002] = "EC_INVALID_PARAMS_GROUP_TYPE", e[e.EC_INVALID_PARAMS_GROUP_CUSTOM_PROPERTIES = 70003] = "EC_INVALID_PARAMS_GROUP_CUSTOM_PROPERTIES", e[e.EC_INVALID_PARAMS_GROUP_PLAYER_NAME = 70004] = "EC_INVALID_PARAMS_GROUP_PLAYER_NAME", e[e.EC_INVALID_PARAMS_GROUP_PLAYER_CUSTOM_STATUS = 70005] = "EC_INVALID_PARAMS_GROUP_PLAYER_CUSTOM_STATUS", e[e.EC_INVALID_PARAMS_GROUP_PLAYER_CUSTOM_PROPERTIES = 70006] = "EC_INVALID_PARAMS_GROUP_PLAYER_CUSTOM_PROPERTIES", e[e.EC_GROUP_MODIFY_OWNER_NO_PERMISSION = 70007] = "EC_GROUP_MODIFY_OWNER_NO_PERMISSION", e[e.EC_INVALID_PARAMS_GROUP_ID = 70008] = "EC_INVALID_PARAMS_GROUP_ID", e[e.EC_INVALID_CHANGE_OPTION = 70009] = "EC_INVALID_CHANGE_OPTION", e[e.EC_INVALID_PARAMS_GROUP_OWNER = 70010] = "EC_INVALID_PARAMS_GROUP_OWNER", e[e.EC_PLAYER_IS_EXIST_GROUP = 70011] = "EC_PLAYER_IS_EXIST_GROUP", e[e.EC_PLAYER_IS_NOT_EXIST_GROUP = 70012] = "EC_PLAYER_IS_NOT_EXIST_GROUP", e[e.EC_REMOVE_PLAYER_ID_IS_EMPTY = 70013] = "EC_REMOVE_PLAYER_ID_IS_EMPTY", e[e.EC_GROUP_REMOVE_PLAYER_NO_PERMISSION = 70014] = "EC_GROUP_REMOVE_PLAYER_NO_PERMISSION", e[e.EC_INVALID_PARAMS_GROUP_RECV_TYPE = 70015] = "EC_INVALID_PARAMS_GROUP_RECV_TYPE", e[e.EC_INVALID_PARAMS_RECV_PLAYER_ID = 70016] = "EC_INVALID_PARAMS_RECV_PLAYER_ID", e[e.EC_INVALID_PARAMS_MESSAGE_LENGTH = 70017] = "EC_INVALID_PARAMS_MESSAGE_LENGTH", e[e.EC_INVALID_PARAMS_MAX_PLAYER = 70018] = "EC_INVALID_PARAMS_MAX_PLAYER", e[e.PERSISTENCE_GROUP_NUM_EXCEED_THE_LIMIT = 70019] = "PERSISTENCE_GROUP_NUM_EXCEED_THE_LIMIT", e[e.EC_INVALID_PARAMS_PLAYER_NOT_IN_GROUP = 70020] = "EC_INVALID_PARAMS_PLAYER_NOT_IN_GROUP", e[e.NO_GROUP_OPERATION_PERMISSION = 70021] = "NO_GROUP_OPERATION_PERMISSION", e[e.EC_OPERATION_FAILED_GROUP_FORBID_JOIN = 70022] = "EC_OPERATION_FAILED_GROUP_FORBID_JOIN", e[e.EC_GROUP_CHAT_FREQUENCY_LIMIT = 70023] = "EC_GROUP_CHAT_FREQUENCY_LIMIT", e[e.EC_GROUP_PLAYER_NUM_LIMIT_EXCEED = 70024] = "EC_GROUP_PLAYER_NUM_LIMIT_EXCEED", e[e.EC_PLAYER_GROUP_NUM_LIMIT_EXCEED = 70025] = "EC_PLAYER_GROUP_NUM_LIMIT_EXCEED", e[e.EC_GROUP_NOT_EXIST = 70026] = "EC_GROUP_NOT_EXIST", e[e.EC_INVALID_PARAMS = 6e4] = "EC_INVALID_PARAMS", e[e.EC_INVALID_PARAMS_PLAY_MODE_VERSION = 60001] = "EC_INVALID_PARAMS_PLAY_MODE_VERSION", e[e.EC_INVALID_PARAMS_PLAY_MODE_RULETYPE = 60002] = "EC_INVALID_PARAMS_PLAY_MODE_RULETYPE", e[e.EC_INVALID_PARAMS_PLAY_MODE_EXPRESSION = 60003] = "EC_INVALID_PARAMS_PLAY_MODE_EXPRESSION", e[e.EC_INVALID_PARAMS_PLAY_MODE_TEAM = 60004] = "EC_INVALID_PARAMS_PLAY_MODE_TEAM", e[e.EC_INVALID_PARAMS_MSGQ_ENCODE = 60020] = "EC_INVALID_PARAMS_MSGQ_ENCODE", e[e.EC_INVALID_PARAMS_MSGQ_DECODE = 60021] = "EC_INVALID_PARAMS_MSGQ_DECODE", e[e.EC_INVALID_PARAMS_GAME_ID = 61e3] = "EC_INVALID_PARAMS_GAME_ID", e[e.EC_INVALID_PARAMS_PLAYER_INFO = 61001] = "EC_INVALID_PARAMS_PLAYER_INFO", e[e.EC_INVALID_PARAMS_MAX_PLAYERS = 61002] = "EC_INVALID_PARAMS_MAX_PLAYERS", e[e.EC_INVALID_PARAMS_ROOM_TYPE = 61003] = "EC_INVALID_PARAMS_ROOM_TYPE", e[e.EC_INVALID_PARAMS_PLAYER_ID = 61004] = "EC_INVALID_PARAMS_PLAYER_ID", e[e.EC_INVALID_PARAMS_MATCH_TYPE = 61005] = "EC_INVALID_PARAMS_MATCH_TYPE", e[e.EC_INVALID_PARAMS_MATCH_CODE = 61006] = "EC_INVALID_PARAMS_MATCH_CODE", e[e.EC_INVALID_PARAMS_OPEN_ID = 61007] = "EC_INVALID_PARAMS_OPEN_ID", e[e.EC_INVALID_PARAMS_PLATFORM = 61008] = "EC_INVALID_PARAMS_PLATFORM", e[e.EC_INVALID_PARAMS_TIMESTAMP = 61009] = "EC_INVALID_PARAMS_TIMESTAMP", e[e.EC_INVALID_PARAMS_SIGN = 61010] = "EC_INVALID_PARAMS_SIGN", e[e.EC_INVALID_PARAMS_NONCE = 61011] = "EC_INVALID_PARAMS_NONCE", e[e.EC_INVALID_PARAMS_TOKEN = 61012] = "EC_INVALID_PARAMS_TOKEN", e[e.EC_INVALID_PARAMS_NETWORK_STATE = 61013] = "EC_INVALID_PARAMS_NETWORK_STATE", e[e.EC_INVALID_PARAMS_ROOM_NAME = 61014] = "EC_INVALID_PARAMS_ROOM_NAME", e[e.EC_INVALID_PARAMS_CREATE_ROOM_TYPE = 61015] = "EC_INVALID_PARAMS_CREATE_ROOM_TYPE", e[e.EC_INVALID_PARAMS_DEVICE_ID = 61016] = "EC_INVALID_PARAMS_DEVICE_ID", e[e.EC_INVALID_PARAMS_PAGE_NO = 61017] = "EC_INVALID_PARAMS_PAGE_NO", e[e.EC_INVALID_PARAMS_PAGE_SIZE = 61018] = "EC_INVALID_PARAMS_PAGE_SIZE", e[e.EC_INVALID_PARAMS_PLAYER_LIST = 61019] = "EC_INVALID_PARAMS_PLAYER_LIST", e[e.EC_INVALID_PARAMS_MESSAGE = 61020] = "EC_INVALID_PARAMS_MESSAGE", e[e.EC_INVALID_CHANGE_ROOM_OPTION = 61021] = "EC_INVALID_CHANGE_ROOM_OPTION", e[e.EC_INVALID_PARAMS_REGION = 61022] = "EC_INVALID_PARAMS_REGION", e[e.EC_INVALID_PARAMS_OWNER = 61023] = "EC_INVALID_PARAMS_OWNER", e[e.EC_INVALID_PARAMS_OWNER_OPEN_ID = 61024] = "EC_INVALID_PARAMS_OWNER_OPEN_ID", e[e.EC_INVALID_PARAMS_OPEN_ID_DUPLICATE = 61026] = "EC_INVALID_PARAMS_OPEN_ID_DUPLICATE", e[e.EC_INVALID_PARAMS_ROOM_CREATE_TYPE = 61027] = "EC_INVALID_PARAMS_ROOM_CREATE_TYPE", e[e.EC_MYSPP_SYSTEM_ERR = -1e3] = "EC_MYSPP_SYSTEM_ERR", e[e.EC_REDIS_KEY_NOT_EXIST = -66e3] = "EC_REDIS_KEY_NOT_EXIST", e[e.EC_REDIS_SET_OP_ERR = -66001] = "EC_REDIS_SET_OP_ERR", e[e.EC_REDIS_GET_OP_ERR = -66002] = "EC_REDIS_GET_OP_ERR", e[e.EC_REDIS_DEL_OP_ERR = -66003] = "EC_REDIS_DEL_OP_ERR", e[e.EC_REDIS_EXPIRE_OP_ERR = -66004] = "EC_REDIS_EXPIRE_OP_ERR", e[e.EC_REDIS_LOCK_OP_ERR = -66005] = "EC_REDIS_LOCK_OP_ERR", e[e.EC_REDIS_LOCK_ALREADY_EXIST = -66006] = "EC_REDIS_LOCK_ALREADY_EXIST", e[e.EC_REDIS_LIST_OP_ERR = -66020] = "EC_REDIS_LIST_OP_ERR", e[e.EC_REDIS_LIST_POP_EMPTY = -66021] = "EC_REDIS_LIST_POP_EMPTY", e[e.EC_REDIS_POOL_GET_INSTANCE_FAIL = -66022] = "EC_REDIS_POOL_GET_INSTANCE_FAIL", e[e.EC_REDIS_SET_IS_EMPTY = -66023] = "EC_REDIS_SET_IS_EMPTY", e[e.EC_REDIS_OP_INVALID_PARAMS = -66024] = "EC_REDIS_OP_INVALID_PARAMS", e[e.EC_MYSQL_NO_ROW_FOUND = -66100] = "EC_MYSQL_NO_ROW_FOUND", e[e.EC_MYSQL_MULTI_ROW_FOUND = -66101] = "EC_MYSQL_MULTI_ROW_FOUND", e[e.EC_MYSQL_INSERT_FAIL = -66102] = "EC_MYSQL_INSERT_FAIL", e[e.EC_MYSQL_DELETE_FAIL = -66103] = "EC_MYSQL_DELETE_FAIL", e[e.EC_MYSQL_UPDATE_FAIL = -66104] = "EC_MYSQL_UPDATE_FAIL", e[e.EC_MYSQL_QUERYS_FAIL = -66105] = "EC_MYSQL_QUERYS_FAIL", e[e.EC_PB_SERIALIZE_TO_STR_ERR = -66200] = "EC_PB_SERIALIZE_TO_STR_ERR", e[e.EC_PB_PARSE_FROM_STR_ERR = -66201] = "EC_PB_PARSE_FROM_STR_ERR", e[e.EC_DATA_FORMAT_ERR = -66210] = "EC_DATA_FORMAT_ERR", e[e.EC_JSON_FORMAT_ERR = -66211] = "EC_JSON_FORMAT_ERR", e[e.EC_JSON_PLAY_MODE_FORMAT_ERR = -66212] = "EC_JSON_PLAY_MODE_FORMAT_ERR", e[e.EC_JSON_PLAY_MODE_PARISE_ERR = -66213] = "EC_JSON_PLAY_MODE_PARISE_ERR", e[e.EC_INVALID_PARAMS_RECORE_ID = -66601] = "EC_INVALID_PARAMS_RECORE_ID", e[e.EC_HASHID_ERR = -66700] = "EC_HASHID_ERR", e[e.EC_HASHID_ENCODE_ERR = -66701] = "EC_HASHID_ENCODE_ERR", e[e.EC_HASHID_DECODE_ERR = -66702] = "EC_HASHID_DECODE_ERR", e[e.EC_CONF_ROOM_ID_BUCKET_ERR = -66801] = "EC_CONF_ROOM_ID_BUCKET_ERR", e[e.EC_SDK_SEND_FAIL = 90001] = "EC_SDK_SEND_FAIL", e[e.EC_SDK_UNINIT = 90002] = "EC_SDK_UNINIT", e[e.EC_SDK_RES_TIMEOUT = 90003] = "EC_SDK_RES_TIMEOUT", e[e.EC_SDK_NO_LOGIN = 90004] = "EC_SDK_NO_LOGIN", e[e.EC_SDK_NO_CHECK_LOGIN = 90005] = "EC_SDK_NO_CHECK_LOGIN", e[e.EC_SDK_SOCKET_ERROR = 90006] = "EC_SDK_SOCKET_ERROR", e[e.EC_SDK_SOCKET_CLOSE = 90007] = "EC_SDK_SOCKET_CLOSE", e[e.EC_SDK_NO_ROOM = 90008] = "EC_SDK_NO_ROOM", e[e.EC_SDK_ENCODE_PARAM_FAIL = 90009] = "EC_SDK_ENCODE_PARAM_FAIL", e[e.EC_SDK_INVALID_PARAMS = 90010] = "EC_SDK_INVALID_PARAMS";
    }(_e || (_e = {})), function (e) {
      e[e.COMMON_OFFLINE = 0] = "COMMON_OFFLINE", e[e.COMMON_ONLINE = 1] = "COMMON_ONLINE", e[e.RELAY_OFFLINE = 2] = "RELAY_OFFLINE", e[e.RELAY_ONLINE = 3] = "RELAY_ONLINE";
    }(Ee || (Ee = {})), function (e) {
      e[e.COMMON_CREATE = 0] = "COMMON_CREATE", e[e.MATCH_CREATE = 1] = "MATCH_CREATE", e[e.THIRD_PARTY_CREATE = 2] = "THIRD_PARTY_CREATE";
    }(le || (le = {})), function (e) {
      e[e.STOP = 0] = "STOP", e[e.START = 1] = "START";
    }(de || (de = {})), function (e) {
      e[e.COMMON_JOIN = 0] = "COMMON_JOIN", e[e.MATCH_JOIN = 1] = "MATCH_JOIN";
    }(ue || (ue = {})), function (e) {
      e[e.ROOM_NAME = 0] = "ROOM_NAME", e[e.OWNER = 1] = "OWNER", e[e.IS_VIEWED = 2] = "IS_VIEWED", e[e.IS_INVITED = 3] = "IS_INVITED", e[e.IS_PRIVATE = 4] = "IS_PRIVATE", e[e.CUSTOM_PROPERTIES = 5] = "CUSTOM_PROPERTIES", e[e.IS_FORBID_JOIN = 6] = "IS_FORBID_JOIN";
    }(he || (he = {})), function (e) {
      e[e.PENDING = 0] = "PENDING", e[e.MATCHING = 1] = "MATCHING", e[e.SUCCESS = 3] = "SUCCESS", e[e.TIMEOUT = 4] = "TIMEOUT";
    }(ce || (ce = {})), function (e) {
      e[e.MP_MGOBE = 0] = "MP_MGOBE", e[e.MP_GSE = 1] = "MP_GSE", e[e.MP_THIRDPARTY = -1] = "MP_THIRDPARTY";
    }(fe || (fe = {})), function (e) {
      e[e.PS_UNKNOW = 0] = "PS_UNKNOW", e[e.PS_PENDING = 2] = "PS_PENDING", e[e.PS_FULFILLED = 3] = "PS_FULFILLED", e[e.PS_CANCELLED = 4] = "PS_CANCELLED", e[e.PS_TIMED_OUT = 5] = "PS_TIMED_OUT", e[e.PS_FAILED = 6] = "PS_FAILED", e[e.PS_TIMED_OUT_MQ = 100] = "PS_TIMED_OUT_MQ", e[e.PS_PLACE_MATCH_FAIL = 101] = "PS_PLACE_MATCH_FAIL";
    }(pe || (pe = {})), function (e) {
      e[e.ROOM_SIMPLE = 1] = "ROOM_SIMPLE", e[e.PLAYER_COMPLEX = 2] = "PLAYER_COMPLEX";
    }(Re || (Re = {})), function (e) {
      e[e.E_GS_FORWARDTYPE_DEFAULT = 0] = "E_GS_FORWARDTYPE_DEFAULT", e[e.E_GS_FORWARDTYPE_NOTIFY_CONNECTION = 1] = "E_GS_FORWARDTYPE_NOTIFY_CONNECTION", e[e.E_GS_FORWARDTYPE_NOTIFY_ROOM_EVENT = 2] = "E_GS_FORWARDTYPE_NOTIFY_ROOM_EVENT", e[e.E_GS_FORWARDTYPE_NOTIFY_COM_EVENT = 3] = "E_GS_FORWARDTYPE_NOTIFY_COM_EVENT", e[e.E_GS_FORWARDTYPE_CLIENT_SENDTO_GAMESVR = 4] = "E_GS_FORWARDTYPE_CLIENT_SENDTO_GAMESVR";
    }(me || (me = {})), function (e) {
      e[e.GROUP_LIMITED = 0] = "GROUP_LIMITED", e[e.GROUP_MANY = 1] = "GROUP_MANY";
    }(ge || (ge = {})), function (e) {
      e[e.GROUP_NAME = 0] = "GROUP_NAME", e[e.GROUP_OWNER = 1] = "GROUP_OWNER", e[e.GROUP_CUSTOM_PROPERTIES = 2] = "GROUP_CUSTOM_PROPERTIES", e[e.GROUP_IS_FORBID_JOIN = 3] = "GROUP_IS_FORBID_JOIN";
    }(ye || (ye = {})), function (e) {
      e[e.GROUP_ALL = 1] = "GROUP_ALL", e[e.GROUP_OTHERS = 2] = "GROUP_OTHERS", e[e.GROUP_SOME = 3] = "GROUP_SOME";
    }(Se || (Se = {}));
    var Ie = {
      ClientSendServerReqWrap1: void 0,
      ServerSendClientBstWrap1: void 0,
      ClientSendServerRspWrap1: void 0,
      ClientSendServerReqWrap2: void 0,
      ClientSendServerRspWrap2: void 0,
      EventInfo: void 0,
      EventNetworkState: void 0,
      HeartBeatReq: void 0,
      HeartBeatRsp: void 0,
      ServerSendClientBstWrap2: void 0,
      NOUSEServerSendClientBstRspWrap2: void 0,
      CheckLoginReq: void 0,
      CheckLoginRsp: void 0,
      PushBodyType: void 0,
      LoginReq: void 0,
      LoginRsp: void 0,
      SdkConfig: void 0,
      LogoutReq: void 0,
      LogoutRsp: void 0,
      StartFrameSyncReq: void 0,
      StartFrameSyncRsp: void 0,
      StopFrameSyncReq: void 0,
      StopFrameSyncRsp: void 0,
      FrameItem: void 0,
      SendFrameReq: void 0,
      SendFrameRsp: void 0,
      FrameExtInfo: void 0,
      Frame: void 0,
      RequestFrameReq: void 0,
      RequestFrameRsp: void 0,
      PlayerInfo: void 0,
      TeamInfo: void 0,
      RoomInfo: void 0,
      CreateRoomReq: void 0,
      CreateRoomRsp: void 0,
      JoinRoomReq: void 0,
      JoinRoomRsp: void 0,
      LeaveRoomReq: void 0,
      LeaveRoomRsp: void 0,
      DismissRoomReq: void 0,
      DismissRoomRsp: void 0,
      ChangeRoomReq: void 0,
      ChangeRoomRsp: void 0,
      SvrChangeRoomReq: void 0,
      SvrChangeRoomRsp: void 0,
      RemovePlayerReq: void 0,
      RemovePlayerRsp: void 0,
      SvrRemovePlayerReq: void 0,
      SvrRemovePlayerRsp: void 0,
      GetRoomByRoomIdReq: void 0,
      GetRoomByRoomIdRsp: void 0,
      SendToClientReq: void 0,
      SendToClientRsp: void 0,
      ChangeCustomPlayerStatusReq: void 0,
      ChangeCustomPlayerStatusRsp: void 0,
      SvrChangeCustomPlayerStatusReq: void 0,
      SvrChangeCustomPlayerStatusRsp: void 0,
      ChangePlayerNetworkStateReq: void 0,
      ChangePlayerNetworkStateRsp: void 0,
      GetRoomListReq: void 0,
      GetRoomListRsp: void 0,
      ChangeRoomPlayerProfileReq: void 0,
      ChangeRoomPlayerProfileRsp: void 0,
      ChangeGroupPlayerProfileReq: void 0,
      ChangeGroupPlayerProfileRsp: void 0,
      MatchRoomSimpleReq: void 0,
      MatchRoomSimpleRsp: void 0,
      MatchRoomComplexReq: void 0,
      MatchRoomComplexRsp: void 0,
      MatchPlayersSimpleReq: void 0,
      MatchPlayersSimpleRsp: void 0,
      MatchAttribute: void 0,
      MatchPlayerInfo: void 0,
      MatchGroupPlayerInfo: void 0,
      MatchGroupInfo: void 0,
      MatchTeamInfo: void 0,
      ProgressPlayerInfo: void 0,
      MatchmakerTeam: void 0,
      MatchmakerData: void 0,
      MatchPlacementInfo: void 0,
      MgobePlacementJob: void 0,
      MgobePlacementResult: void 0,
      GsePlacementJob: void 0,
      GsePlacementResult: void 0,
      ThirdpartyPlacementJob: void 0,
      ThirdpartyPlacementResult: void 0,
      GsePlayerLatency: void 0,
      GseGameProperty: void 0,
      GsePlacedPlayerSession: void 0,
      GseGameSession: void 0,
      PlaceMatchReq: void 0,
      PlaceMatchRsp: void 0,
      MatchPlacementResult: void 0,
      UpdateMatchPlacementResultReq: void 0,
      UpdateMatchPlacementResultRsp: void 0,
      CmqPlacementResult: void 0,
      MatchPlayersReq: void 0,
      MatchPlayersRsp: void 0,
      MatchGroupReq: void 0,
      MatchGroupRsp: void 0,
      DescribeMatchReq: void 0,
      MatchProgress: void 0,
      DescribeMatchRsp: void 0,
      CancelPlayerMatchReq: void 0,
      CancelPlayerMatchRsp: void 0,
      ApiMatchGroupReq: void 0,
      ApiMatchGroupRsp: void 0,
      ApiDescribeMatchReq: void 0,
      ApiDescribeMatchRsp: void 0,
      GameSessionConnectionInfo: void 0,
      MatchedPlayerSession: void 0,
      StartMatchPlacement: void 0,
      DesiredPlayerSession: void 0,
      GameProperty: void 0,
      ApiCancelPlayerMatchReq: void 0,
      ApiCancelPlayerMatchRsp: void 0,
      CreateRoomBst: void 0,
      DestroyRoomBst: void 0,
      JoinRoomBst: void 0,
      LeaveRoomBst: void 0,
      RemovePlayerBst: void 0,
      DismissRoomBst: void 0,
      ChangeRoomBst: void 0,
      RecvFromClientBst: void 0,
      ChangeCustomPlayerStatusBst: void 0,
      ChangeRoomPlayerProfileBst: void 0,
      ChangeGroupPlayerProfileBst: void 0,
      ChangePlayerNetworkStateBst: void 0,
      MatchTimeoutBst: void 0,
      CancelMatchBst: void 0,
      MatchPlayersBst: void 0,
      StartFrameSyncBst: void 0,
      StopFrameSyncBst: void 0,
      RecvFrameBst: void 0,
      GameSvrCommunication: void 0,
      NotifyRelayConnectionReq: void 0,
      NotifyRoomEventReq: void 0,
      SendToGameSvrReq: void 0,
      SendToGameSvrRsp: void 0,
      RecvFromGameSvrBst: void 0,
      ClientRecvFromGameSvrRsp: void 0,
      GroupInfo: void 0,
      GroupPlayerInfo: void 0,
      CreateGroupReq: void 0,
      CreateGroupRsp: void 0,
      JoinGroupReq: void 0,
      JoinGroupRsp: void 0,
      LeaveGroupReq: void 0,
      LeaveGroupRsp: void 0,
      DismissGroupReq: void 0,
      DismissGroupRsp: void 0,
      ChangeGroupReq: void 0,
      ChangeGroupRsp: void 0,
      RemoveGroupPlayerReq: void 0,
      RemoveGroupPlayerRsp: void 0,
      GetGroupByGroupIdReq: void 0,
      GetGroupByGroupIdRsp: void 0,
      GetMyGroupsReq: void 0,
      GetMyGroupsRsp: void 0,
      ChangeCustomGroupPlayerStatusReq: void 0,
      ChangeCustomGroupPlayerStatusRsp: void 0,
      SendToGroupClientReq: void 0,
      SendToGroupClientRsp: void 0,
      GroupPlayers: void 0,
      ChangeGroupPlayerNetworkReq: void 0,
      ChangeGroupPlayerNetworkRsp: void 0,
      JoinGroupBst: void 0,
      LeaveGroupBst: void 0,
      DismissGroupBst: void 0,
      ChangeGroupBst: void 0,
      RemoveGroupPlayerBst: void 0,
      ChangeGroupPlayerNetworkStateBst: void 0,
      ChangeCustomGroupPlayerStatusBst: void 0,
      RecvFromGroupClientBst: void 0
    },
        Ce = o.QAppProtoErrCode;
    var Oe;
    !function (e) {
      e.EC_SDK_SEND_FAIL = "发送失败", e.EC_SDK_UNINIT = "未初始化", e.EC_SDK_RES_TIMEOUT = "发送超时", e.EC_SDK_NO_LOGIN = "未登录", e.EC_SDK_NO_CHECK_LOGIN = "CheckLogin失败", e.EC_SDK_SOCKET_ERROR = "Socket错误", e.EC_SDK_SOCKET_CLOSE = "Socket断开", e.EC_SDK_NO_ROOM = "无房间信息";
    }(Oe || (Oe = {}));
    var Te = {};
    Te[Ce.EC_SDK_SEND_FAIL] = Oe.EC_SDK_SEND_FAIL, Te[Ce.EC_SDK_UNINIT] = Oe.EC_SDK_UNINIT, Te[Ce.EC_SDK_RES_TIMEOUT] = Oe.EC_SDK_RES_TIMEOUT, Te[Ce.EC_SDK_NO_LOGIN] = Oe.EC_SDK_NO_LOGIN, Te[Ce.EC_SDK_NO_CHECK_LOGIN] = Oe.EC_SDK_NO_CHECK_LOGIN, Te[Ce.EC_SDK_SOCKET_ERROR] = Oe.EC_SDK_SOCKET_ERROR, Te[Ce.EC_SDK_SOCKET_CLOSE] = Oe.EC_SDK_SOCKET_CLOSE, Te[Ce.EC_SDK_NO_ROOM] = Oe.EC_SDK_NO_ROOM;
    var Ae,
        Pe = Ce;
    !function (e) {
      var t, n, r, i, o, s, a;
      !function (e) {
        e[e.ROOM_ALL = 1] = "ROOM_ALL", e[e.ROOM_OTHERS = 2] = "ROOM_OTHERS", e[e.ROOM_SOME = 3] = "ROOM_SOME";
      }(t = e.RecvType || (e.RecvType = {})), function (e) {
        e[e.ROOM_SIMPLE = 1] = "ROOM_SIMPLE", e[e.PLAYER_COMPLEX = 2] = "PLAYER_COMPLEX";
      }(n = e.MatchType || (e.MatchType = {})), function (e) {
        e[e.COMMON_CREATE = 0] = "COMMON_CREATE", e[e.MATCH_CREATE = 1] = "MATCH_CREATE", e[e.THIRD_PARTY_CREATE = 2] = "THIRD_PARTY_CREATE";
      }(r = e.CreateRoomType || (e.CreateRoomType = {})), function (e) {
        e[e.COMMON_OFFLINE = 0] = "COMMON_OFFLINE", e[e.COMMON_ONLINE = 1] = "COMMON_ONLINE", e[e.RELAY_OFFLINE = 2] = "RELAY_OFFLINE", e[e.RELAY_ONLINE = 3] = "RELAY_ONLINE";
      }(i = e.NetworkState || (e.NetworkState = {})), function (e) {
        e[e.STOP = 0] = "STOP", e[e.START = 1] = "START";
      }(o = e.FrameSyncState || (e.FrameSyncState = {})), function (e) {
        e[e.GROUP_LIMITED = 0] = "GROUP_LIMITED", e[e.GROUP_MANY = 1] = "GROUP_MANY";
      }(s = e.GroupType || (e.GroupType = {})), function (e) {
        e[e.GROUP_ALL = 1] = "GROUP_ALL", e[e.GROUP_OTHERS = 2] = "GROUP_OTHERS", e[e.GROUP_SOME = 3] = "GROUP_SOME";
      }(a = e.GroupRecvType || (e.GroupRecvType = {}));
    }(Ae || (Ae = {}));
    var Me = {
      get CreateRoomType() {
        return o.CreateRoomType;
      },

      get MatchType() {
        return o.MatchType;
      },

      get NetworkState() {
        return o.NetworkState;
      },

      get FrameSyncState() {
        return o.FrameSyncState;
      },

      get RecvType() {
        return Ae.RecvType;
      },

      get GroupRecvType() {
        return Ae.GroupRecvType;
      },

      get GroupType() {
        return Ae.GroupType;
      }

    };

    var ve = n(2),
        Ne = function Ne(e, t) {
      return void 0 === t ? null : t;
    },
        Le = {
      pingTimeout: 5e3,
      reconnectInterval: 500,
      reconnectMaxTimes: 15,
      resendInterval: 1e3,
      resendTimeout: 2e4,
      url: void 0,
      enableUDP: !1,
      isAutoRequestFrame: !1,
      cacertNativeUrl: ""
    },
        be = JSON.stringify(Le, Ne),
        De = {
      version: ve.version,
      appName: void 0,
      cmd: "",
      seq: void 0,
      clientIp: void 0,
      serviceIp: void 0,
      business: void 0,
      authKey: void 0,
      authType: void 0,
      authIp: void 0,
      gameId: void 0,
      uid: void 0,
      playerId: void 0,
      body: void 0
    },
        we = JSON.stringify(De, Ne),
        Ge = {
      gameId: void 0,
      openId: void 0,
      secretKey: void 0,
      createSignature: void 0
    },
        Ue = JSON.stringify(Ge, Ne);

    var Ye, Fe, ke, qe;
    !function (e) {
      var t = {};
      e.getInfo = function () {
        return t;
      }, e.setInfo = function (e) {
        return t = e;
      };
    }(Ye || (Ye = {})), function (e) {
      var t;
      !function (e) {
        e[e.INITED = 1] = "INITED", e[e.INITING = 2] = "INITING", e[e.UNINIT = 3] = "UNINIT";
      }(t = e.StatusType || (e.StatusType = {}));
      var n = t.UNINIT;
      e.isInited = function () {
        return n === t.INITED;
      }, e.isIniting = function () {
        return n === t.INITING;
      }, e.isUnInit = function () {
        return n === t.UNINIT;
      }, e.setStatus = function (e) {
        return n = e;
      };
    }(Fe || (Fe = {})), function (e) {
      var t;
      !function (e) {
        e[e.LOGIN = 1] = "LOGIN", e[e.LOGINING = 2] = "LOGINING", e[e.LOGOUT = 3] = "LOGOUT", e[e.LOGOUTING = 4] = "LOGOUTING";
      }(t = e.StatusType || (e.StatusType = {}));
      var n = t.LOGOUT,
          r = 0,
          i = "";
      e.isStatus = function (e) {
        return n === e;
      }, e.setStatus = function (e) {
        n = e, e === t.LOGIN && (r = 0);
      }, e.setErrCode = function (e, t) {
        r = e, i = t;
      }, e.getErrCode = function () {
        return r;
      }, e.getErrMsg = function () {
        return i;
      };
    }(ke || (ke = {})), function (e) {
      var t;
      !function (e) {
        e[e.CHECKING = 1] = "CHECKING", e[e.CHECKED = 2] = "CHECKED", e[e.OFFLINE = 3] = "OFFLINE";
      }(t = e.StatusType || (e.StatusType = {}));
      var n = t.CHECKING;
      e.isChecked = function () {
        return n === t.CHECKED;
      }, e.isOffline = function () {
        return n === t.OFFLINE;
      }, e.setStatus = function (e) {
        return n = e;
      };
      var r = "";
      e.setRouteId = function (e) {
        return r = e;
      }, e.getRouteId = function () {
        return r;
      };
    }(qe || (qe = {}));
    var He = o.ClientSendServerReqWrap2Cmd,
        xe = o.ServerSendClientBstWrap2Type,
        Be = {
      initServerTime: 0,
      offset: 0,
      setServerTime: function setServerTime(e) {
        Be.initServerTime = e, Be.offset = e - Date.now();
      },
      getServerTime_UTC_8: function getServerTime_UTC_8() {
        return Date.now() + Be.offset;
      }
    };

    function Ve() {
      return !!("undefined" != typeof cc && "undefined" != typeof WebSocket && "undefined" != typeof XMLHttpRequest && cc.game && "function" == typeof cc.game.on && cc.game.EVENT_HIDE && cc.game.EVENT_SHOW && cc.sys && cc.sys.isNative);
    }

    var Qe = {};
    Qe.connectSocket = a(function (e) {
      return new WebSocket(e, [], Le.cacertNativeUrl);
    }), Qe.request = E, Qe.onHide = function (e) {
      return cc.game.on(cc.game.EVENT_HIDE, e);
    }, Qe.offHide = function (e) {
      return cc.game.off(cc.game.EVENT_HIDE, e);
    }, Qe.onShow = function (e) {
      return cc.game.on(cc.game.EVENT_SHOW, e);
    }, Qe.offShow = function (e) {
      return cc.game.off(cc.game.EVENT_SHOW, e);
    }, Qe.getStorageSync = f, Qe.setStorageSync = p, Qe.removeStorageSync = R, Qe.getUserInfo = m, Qe.getSystemInfoSync = g, Qe.getLocation = y, Qe.getNetworkType = S, Qe.createUDPSocket = null, Qe.channel = r.COCOS_NATIVE, "undefined" != typeof window ? Qe.root = window : Qe.root = {};
    var Ke = {};

    function We() {
      if ("undefined" == typeof tt) return !1;
      if ("undefined" == typeof GameGlobal) return !1;
      if (!tt.onHide) return !1;
      if (!tt.offHide) return !1;
      if (!tt.onShow) return !1;
      if (!tt.offShow) return !1;
      if (!tt.getStorageSync) return !1;
      if (!tt.setStorageSync) return !1;
      if (!tt.connectSocket) return !1;
      if (!tt.request) return !1;

      try {
        var _e5 = tt.getSystemInfoSync();

        if (!_e5) return !1;
        if (!_e5.appName) return !1;
        if (!(tt.env.USER_DATA_PATH + "").toLowerCase().startsWith("ttfile")) return !1;
      } catch (e) {
        return !1;
      }

      return !0;
    }

    We() && (Ke = tt);
    var je = {},
        Je = I("connectSocket", Ke);
    je.connectSocket = function (e) {
      var t = Je(e);
      var n = 0,
          _r2 = null;
      var i = {
        onClose: function onClose(e) {
          _r2 = function r(t) {
            e && e(t), _r2 = null;
          }, t.onClose(function (e) {
            n = 3, _r2 && _r2(e);
          });
        },
        onOpen: function onOpen(e) {
          t.onOpen(function (t) {
            n = 1, e && e(t);
          });
        },
        onError: function onError(e) {
          t.onError(function (r) {
            n = 3, t.close(), e && e(r);
          });
        },
        onMessage: function onMessage(e) {
          return t.onMessage(e);
        },
        close: function close() {
          n = 3, t.close();
        },
        send: function send(_ref9) {
          var e = _ref9.data,
              n = _ref9.fail,
              r = _ref9.success;
          return t.send({
            data: e,
            fail: n,
            success: r
          });
        },

        get readyState() {
          return n;
        },

        CONNECTING: 0,
        OPEN: 1,
        CLOSING: 2,
        CLOSED: 3
      };
      return setTimeout(function () {
        i && i.readyState === i.CONNECTING && (console.log("CONNECTING TIMEOUT: NO CALLBACK"), i.close(), _r2 && _r2({}));
      }, 5e3), i;
    }, je.request = I("request", Ke), je.onHide = I("onHide", Ke), je.offHide = I("offHide", Ke), je.onShow = I("onShow", Ke), je.offShow = I("offShow", Ke), je.getStorageSync = I("getStorageSync", Ke), je.setStorageSync = I("setStorageSync", Ke), je.removeStorageSync = I("removeStorageSync", Ke), je.getUserInfo = I("getUserInfo", Ke), je.getSystemInfoSync = I("getSystemInfoSync", Ke), je.getLocation = I("getLocation", Ke), je.getNetworkType = I("getNetworkType", Ke), je.createUDPSocket = I("createUDPSocket", Ke), je.channel = r.TT, "undefined" != typeof GameGlobal && (je.root = GameGlobal);
    var Xe = s,
        ze = r.UNKNOWN,
        $e = i.UNKNOWN;
    L() ? (Xe = b, $e = function () {
      if (!L()) return i.UNKNOWN;
      var e = swan.getSystemInfoSync(),
          t = e ? e.system + "" : "";
      return t.includes("Android") ? i.ANDROID : t.includes("iOS") ? i.IOS : i.UNKNOWN;
    }()) : P() ? (Xe = M, $e = function () {
      if (!P()) return i.UNKNOWN;
      var e = qq.getSystemInfoSync(),
          t = e ? e.system + "" : "";
      return t.includes("Android") ? i.ANDROID : t.includes("iOS") ? i.IOS : i.UNKNOWN;
    }()) : X() ? (Xe = te, $e = function () {
      if (!X()) return i.UNKNOWN;
      var e = qq.getSystemInfoSync(),
          t = e ? e.system + "" : "";
      return t.includes("Android") ? i.ANDROID : t.includes("iOS") ? i.IOS : i.UNKNOWN;
    }()) : G() ? (Xe = U, $e = G() ? i.ANDROID : i.UNKNOWN) : F() ? (Xe = k, $e = F() ? i.ANDROID : i.UNKNOWN) : Ve() ? (Xe = Qe, $e = Ve() ? cc.sys.os === cc.sys.OS_ANDROID ? i.ANDROID : cc.sys.os === cc.sys.OS_IOS ? i.IOS : i.UNKNOWN : i.UNKNOWN) : We() ? (Xe = je, $e = function () {
      if (!We()) return i.UNKNOWN;
      var e = tt.getSystemInfoSync(),
          t = e ? e.system + "" : "";
      return t.includes("Android") ? i.ANDROID : t.includes("iOS") ? i.IOS : i.UNKNOWN;
    }()) : O() ? (Xe = T, $e = function () {
      if (!O()) return i.UNKNOWN;
      var e = wx.getSystemInfoSync(),
          t = e ? e.system + "" : "";
      return t.includes("Android") ? i.ANDROID : t.includes("iOS") ? i.IOS : i.UNKNOWN;
    }()) : H() && (Xe = K, $e = function () {
      if (!H()) return i.UNKNOWN;
      var e = wx.getSystemInfoSync(),
          t = e ? e.system + "" : "";
      return t.includes("Android") ? i.ANDROID : t.includes("iOS") ? i.IOS : i.UNKNOWN;
    }()), Xe.globalData = {}, ze = Xe.channel;

    var Ze = function Ze() {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : -1;

      _classCallCheck(this, Ze);

      this.id = e;
    };

    var et = function et(e, t, n) {
      clearTimeout(e.id), e.id = setTimeout(t, n);
    },
        nt = function nt() {
      for (var _len = arguments.length, e = new Array(_len), _key = 0; _key < _len; _key++) {
        e[_key] = arguments[_key];
      }

      e.forEach(function (e) {
        return e && clearTimeout(e.id);
      });
    },
        rt = n(2);

    var it = function it() {
      _classCallCheck(this, it);
    };

    it.enable = !1, it.exclude = [], it.callback = function (e) {
      var _console;

      return (_console = console).log.apply(_console, _toConsumableArray(e));
    }, it.log = function () {
      for (var _len2 = arguments.length, e = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        e[_key2] = arguments[_key2];
      }

      if (!it.enable) return;
      if (Array.isArray(it.exclude) && it.exclude.findIndex(function (t) {
        return t === e[0];
      }) >= 0) return;
      var t = ["DEBUGGER_v".concat(rt.version, "_").concat(rt.sdkType, "_").concat(ze, " ") + Date.now()].concat(e);
      "function" == typeof it.callback && it.callback(t);
    }, Object.defineProperty(it, "log", {
      enumerable: !1,
      configurable: !1,
      writable: !1,
      value: it.log
    });
    var ot = it;
    var st = n(3),
        at = n(4),
        _t = n(7)["default"],
        Et = new _t(ut(), 16),
        lt = new _t(ut(), 32);
    var dt = 1;

    function ut() {
      var e = Date.now().toString(36);

      for (var _t4 = 0; _t4 < 6; _t4++) {
        e += (1e6, Math.ceil(1e6 * (Math.random() + 1))).toString(36);
      }

      return e;
    }

    var ht = lt.encode(Date.now()),
        ct = function ct(e, t) {
      return e < 0 && (t = "\u670D\u52A1\u5668\u5185\u90E8\u9519\u8BEF[".concat(e, "]"), e = Pe.EC_INNER_ERROR), {
        errCode: e,
        errMsg: t
      };
    };

    function ft(e) {
      return function () {
        for (var _len3 = arguments.length, t = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
          t[_key3] = arguments[_key3];
        }

        return setTimeout(function () {
          return e && e.apply(void 0, t);
        }, 0);
      };
    }

    function pt(e) {
      return e.next = e, e.prev = e, e;
    }

    function Rt(e, t) {
      e.prev = t.prev, e.next = t, t.prev.next = e, t.prev = e;
    }

    function mt(e) {
      e.next.prev = e.prev, e.prev.next = e.next, e.next = null, e.prev = null;
    }

    function gt(e) {
      return e === e.next;
    }

    function yt() {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Uint8Array(0);
      return {
        data: e
      };
    }

    function St(e, t) {
      var n = new Uint8Array(e.length + t.length);
      return n.set(e, 0), n.set(t, e.length), n;
    }

    function It(e, t, n) {
      return e[t++] = n, t;
    }

    function Ct(e, t) {
      return [e[t++], t];
    }

    function Ot(e, t, n) {
      return e[t++] = 255 & n, e[t++] = n >> 8 & 255, e[t++] = n >> 16 & 255, e[t++] = n >> 24 & 255, t;
    }

    function Tt(e, t) {
      return [e[t++] | e[t++] << 8 | e[t++] << 16 | e[t++] << 24, t];
    }

    var At = Math.min,
        Pt = Math.max;

    function Mt(e, t) {
      return e - t;
    }

    function vt(e, t) {
      return 0 == t.length ? 0 : e.output(t, e);
    }

    function Nt(e) {
      var t = 0,
          n = new Uint8Array(0);
      if (gt(e.rcv_queue)) return n;
      if (function (e) {
        var t = 0;
        if (gt(e.rcv_queue)) return -1;
        var n = e.rcv_queue.next;
        if (0 == n.frg) return n.data.length;
        if (e.nrcv_que < n.frg + 1) return -1;

        for (var _n4 = e.rcv_queue.next; _n4 != e.rcv_queue; _n4 = _n4.next) {
          var _e6 = _n4;
          if (t += _e6.data.length, 0 == _e6.frg) break;
        }

        return t;
      }(e) < 0) return n;
      e.nrcv_que >= e.rcv_wnd && (t = 1);

      for (var _t5 = e.rcv_queue.next; _t5 !== e.rcv_queue;) {
        var _r3 = _t5;
        _t5 = _t5.next, n = St(n, _r3.data);
        var _i2 = _r3.frg;
        if (mt(_r3), e.nrcv_que--, 0 == _i2) break;
      }

      for (; !gt(e.rcv_buf);) {
        var _t6 = e.rcv_buf.next;
        if (!(_t6.sn == e.rcv_nxt && e.nrcv_que < e.rcv_wnd)) break;
        mt(_t6), e.nrcv_buf--, Rt(_t6, e.rcv_queue), e.nrcv_que++, e.rcv_nxt++;
      }

      return e.nrcv_que < e.rcv_wnd && t && (e.probe |= 2), n;
    }

    function Lt(e, t) {
      var n = 0;
      if (0 == e.rx_srtt) e.rx_srtt = t, e.rx_rttval = t / 2;else {
        var _n5 = t - e.rx_srtt;

        _n5 < 0 && (_n5 = -_n5), e.rx_rttval = (3 * e.rx_rttval + _n5) / 4, e.rx_srtt = (7 * e.rx_srtt + t) / 8, e.rx_srtt < 1 && (e.rx_srtt = 1);
      }
      var r;
      n = e.rx_srtt + Pt(e.interval, 4 * e.rx_rttval), e.rx_rto = (r = e.rx_minrto, 6e4, At(Pt(r, n), 6e4));
    }

    function bt(e) {
      var t = e.snd_buf.next;
      t != e.snd_buf ? e.snd_una = t.sn : e.snd_una = e.snd_nxt;
    }

    function Dt(e, t) {
      if (!(Mt(t, e.snd_una) < 0 || Mt(t, e.snd_nxt) >= 0)) for (var _n6, _r4 = e.snd_buf.next; _r4 != e.snd_buf; _r4 = _n6) {
        if (_n6 = _r4.next, t == _r4.sn) {
          mt(_r4), e.nsnd_buf--;
          break;
        }

        if (Mt(t, _r4.sn) < 0) break;
      }
    }

    function wt(e, t) {
      for (var _n7, _r5 = e.snd_buf.next; _r5 != e.snd_buf && (_n7 = _r5.next, Mt(t, _r5.sn) > 0); _r5 = _n7) {
        mt(_r5), e.nsnd_buf--;
      }
    }

    function Gt(e, t, n) {
      var r = e.ackcount + 1;

      if (r > e.ackblock) {
        var _t7, _n8;

        for (_n8 = 8; _n8 < r; _n8 <<= 1) {
          ;
        }

        if (_t7 = new Uint32Array(2 * _n8), null != e.acklist) for (var _n9 = 0; _n9 < e.ackcount; _n9++) {
          _t7[2 * _n9 + 0] = e.acklist[2 * _n9 + 0], _t7[2 * _n9 + 1] = e.acklist[2 * _n9 + 1];
        }
        e.acklist = _t7, e.ackblock = _n8;
      }

      var i = 2 * e.ackcount;
      e.acklist[i] = t, e.acklist[i + 1] = n, e.ackcount++;
    }

    function Ut(e, t) {
      return [e.acklist[2 * t + 0], e.acklist[2 * t + 1]];
    }

    function Yt(e, t) {
      var n,
          r,
          i = t.sn,
          o = 0;

      if (!(Mt(i, e.rcv_nxt + e.rcv_wnd) >= 0 || Mt(i, e.rcv_nxt) < 0)) {
        for (n = e.rcv_buf.prev; n != e.rcv_buf; n = r) {
          if (r = n.prev, n.sn == i) {
            o = 1;
            break;
          }

          if (Mt(i, n.sn) > 0) break;
        }

        var s, a;

        for (0 == o && (pt(t), a = n, (s = t).prev = a, s.next = a.next, a.next.prev = s, a.next = s, e.nrcv_buf++); !gt(e.rcv_buf);) {
          var _t8 = e.rcv_buf.next;
          if (!(_t8.sn == e.rcv_nxt && e.nrcv_que < e.rcv_wnd)) break;
          mt(_t8), e.nrcv_buf--, Rt(_t8, e.rcv_queue), e.nrcv_que++, e.rcv_nxt++;
        }
      }
    }

    function Ft(e, t, n) {
      var r, i, o;
      return t = It(e, t = Ot(e, t, n.conv), n.cmd), r = e, i = t = It(e, t, n.frg), o = n.wnd, r[i++] = 255 & o, r[i++] = o >> 8 & 255, t = Ot(e, t = i, n.ts), t = Ot(e, t, n.sn), t = Ot(e, t, n.una), Ot(e, t, n.data.length);
    }

    function kt(e) {
      var t = e.current;
      var n = e.buffer;
      var r = 0,
          i = 0,
          o = 0,
          s = yt();
      if (0 == e.updated) return;
      s.conv = e.conv, s.cmd = 82, s.frg = 0, s.wnd = function (e) {
        return e.nrcv_que < e.rcv_wnd ? e.rcv_wnd - e.nrcv_que : 0;
      }(e), s.una = e.rcv_nxt, s.sn = 0, s.ts = 0;
      var a = e.ackcount;

      for (var _t9 = 0; _t9 < a; _t9++) {
        var _Ut, _Ut2;

        r + 24 > e.mtu && (vt(e, n.slice(0, r)), r = 0), (_Ut = Ut(e, _t9), _Ut2 = _slicedToArray(_Ut, 2), s.sn = _Ut2[0], s.ts = _Ut2[1], _Ut), r = Ft(n, r, s);
      }

      e.ackcount = 0, 0 == e.rmt_wnd ? 0 == e.probe_wait ? (e.probe_wait = 7e3, e.ts_probe = e.current + e.probe_wait) : Mt(e.current, e.ts_probe) >= 0 && (e.probe_wait < 7e3 && (e.probe_wait = 7e3), e.probe_wait += e.probe_wait / 2, e.probe_wait > 12e4 && (e.probe_wait = 12e4), e.ts_probe = e.current + e.probe_wait, e.probe |= 1) : (e.ts_probe = 0, e.probe_wait = 0), 1 & e.probe && (s.cmd = 83, r + 24 > e.mtu && (vt(e, n.slice(0, r)), r = 0), r = Ft(n, r, s)), 2 & e.probe && (s.cmd = 84, r + 24 > e.mtu && (vt(e, n.slice(0, r)), r = 0), r = Ft(n, r, s)), e.probe = 0;

      var _ = At(e.snd_wnd, e.rmt_wnd);

      for (0 == e.nocwnd && (_ = At(e.cwnd, _)); Mt(e.snd_nxt, e.snd_una + _) < 0 && !gt(e.snd_queue);) {
        var _n10 = e.snd_queue.next;
        mt(_n10), Rt(_n10, e.snd_buf), e.nsnd_que--, e.nsnd_buf++, _n10.conv = e.conv, _n10.cmd = 81, _n10.wnd = s.wnd, _n10.ts = t, _n10.sn = e.snd_nxt++, _n10.una = e.rcv_nxt, _n10.resendts = t, _n10.rto = e.rx_rto, _n10.fastack = 0, _n10.xmit = 0;
      }

      var E = e.fastresend > 0 ? e.fastresend : 4294967295,
          l = 0 == e.nodelay ? e.rx_rto >> 3 : 0;

      for (var _a = e.snd_buf.next; _a != e.snd_buf; _a = _a.next) {
        var _2 = 0;
        0 == _a.xmit ? (_2 = 1, _a.xmit++, _a.rto = e.rx_rto, _a.resendts = t + _a.rto + l) : Mt(t, _a.resendts) >= 0 ? (_2 = 1, _a.xmit++, e.xmit++, 0 == e.nodelay ? _a.rto += e.rx_rto : _a.rto += e.rx_rto / 2, _a.resendts = t + _a.rto, o = 1) : _a.fastack >= E && (_a.xmit <= e.fastlimit || e.fastlimit <= 0) && (_2 = 1, _a.xmit++, _a.fastack = 0, _a.resendts = t + _a.rto, i++), _2 && (_a.ts = t, _a.wnd = s.wnd, _a.una = e.rcv_nxt, r + (24 + _a.data.length) > e.mtu && (vt(e, n.slice(0, r)), r = 0), r = Ft(n, r, _a), _a.data.length > 0 && (n.set(_a.data.slice(0, _a.data.length), r), r += _a.data.length), _a.xmit >= e.dead_link && (e.state = -1));
      }

      if (r > 0 && (vt(e, n.slice(0, r)), r = 0), i) {
        var _t10 = e.snd_nxt - e.snd_una;

        e.ssthresh = _t10 / 2, e.ssthresh < 2 && (e.ssthresh = 2), e.cwnd = e.ssthresh + E, e.incr = e.cwnd * e.mss;
      }

      o && (e.ssthresh = _ / 2, e.ssthresh < 2 && (e.ssthresh = 2), e.cwnd = 1, e.incr = e.mss), e.cwnd < 1 && (e.cwnd = 1, e.incr = e.mss);
    }

    var qt = /*#__PURE__*/function () {
      function qt(e, t) {
        var _this = this;

        _classCallCheck(this, qt);

        this._ts = Date.now(), this.updateAsync = function () {
          var e = !1;
          return function () {
            e || (e = !0, qt.asyncer(function () {
              _this.update(), e = !1;
            }));
          };
        }(), this.context = t, this._kcp = function (e) {
          return {
            conv: e,
            snd_una: 0,
            snd_nxt: 0,
            rcv_nxt: 0,
            ts_recent: 0,
            ts_lastack: 0,
            ts_probe: 0,
            probe_wait: 0,
            snd_wnd: 32,
            rcv_wnd: 128,
            rmt_wnd: 128,
            cwnd: 0,
            incr: 0,
            probe: 0,
            mtu: 1400,
            mss: 1376,
            stream: 0,
            buffer: new Uint8Array(4272),
            snd_queue: pt(yt()),
            rcv_queue: pt(yt()),
            snd_buf: pt(yt()),
            rcv_buf: pt(yt()),
            nrcv_buf: 0,
            nsnd_buf: 0,
            nrcv_que: 0,
            nsnd_que: 0,
            state: 0,
            acklist: null,
            ackblock: 0,
            ackcount: 0,
            rx_srtt: 0,
            rx_rttval: 0,
            rx_rto: 200,
            rx_minrto: 100,
            current: 0,
            interval: 100,
            ts_flush: 100,
            nodelay: 0,
            updated: 0,
            logmask: 0,
            ssthresh: 2,
            fastresend: 0,
            fastlimit: 5,
            nocwnd: 0,
            xmit: 0,
            dead_link: 20,
            output: null
          };
        }(e);
      }

      _createClass(qt, [{
        key: "input",
        value: function input(e) {
          var t = function (e, t) {
            var n = e.snd_una,
                r = 0,
                i = 0,
                o = 0,
                s = 0,
                a = t.length;

            for (;;) {
              var _Tt, _Tt2, _Ct, _Ct2, _Ct3, _Ct4, _ref10, _ref11, _Tt3, _Tt4, _Tt5, _Tt6, _Tt7, _Tt8, _Tt9, _Tt10;

              var _n11 = void 0,
                  _l = void 0,
                  _d2 = void 0,
                  _u = void 0,
                  _h = void 0,
                  _c = void 0,
                  _f = void 0,
                  _p = void 0;

              if (a < 24) break;
              if ((_Tt = Tt(t, s), _Tt2 = _slicedToArray(_Tt, 2), _h = _Tt2[0], s = _Tt2[1], _Tt), _h != e.conv) return -1;
              if ((_Ct = Ct(t, s), _Ct2 = _slicedToArray(_Ct, 2), _f = _Ct2[0], s = _Ct2[1], _Ct), (_Ct3 = Ct(t, s), _Ct4 = _slicedToArray(_Ct3, 2), _p = _Ct4[0], s = _Ct4[1], _Ct3), (_ref10 = (E = s, [(_ = t)[E++] | _[E++] << 8, E]), _ref11 = _slicedToArray(_ref10, 2), _c = _ref11[0], s = _ref11[1], _ref10), (_Tt3 = Tt(t, s), _Tt4 = _slicedToArray(_Tt3, 2), _n11 = _Tt4[0], s = _Tt4[1], _Tt3), (_Tt5 = Tt(t, s), _Tt6 = _slicedToArray(_Tt5, 2), _l = _Tt6[0], s = _Tt6[1], _Tt5), (_Tt7 = Tt(t, s), _Tt8 = _slicedToArray(_Tt7, 2), _u = _Tt8[0], s = _Tt8[1], _Tt7), (_Tt9 = Tt(t, s), _Tt10 = _slicedToArray(_Tt9, 2), _d2 = _Tt10[0], s = _Tt10[1], _Tt9), (a -= 24) < _d2 || _d2 < 0) return -2;
              if (81 != _f && 82 != _f && 83 != _f && 84 != _f) return -3;
              if (e.rmt_wnd = _c, wt(e, _u), bt(e), 82 == _f) Mt(e.current, _n11) >= 0 && Lt(e, Mt(e.current, _n11)), Dt(e, _l), bt(e), 0 == o ? (o = 1, r = _l, i = _n11) : Mt(_l, r) > 0 && Mt(_n11, i) > 0 && (r = _l, i = _n11);else if (81 == _f) {
                if (Mt(_l, e.rcv_nxt + e.rcv_wnd) < 0 && (Gt(e, _l, _n11), Mt(_l, e.rcv_nxt) >= 0)) {
                  var _r6 = yt();

                  _r6.conv = _h, _r6.cmd = _f, _r6.frg = _p, _r6.wnd = _c, _r6.ts = _n11, _r6.sn = _l, _r6.una = _u, _d2 > 0 && (_r6.data = t.slice(s, s + _d2)), Yt(e, _r6);
                }
              } else if (83 == _f) e.probe |= 2;else if (84 != _f) return -3;
              s += _d2, a -= _d2;
            }

            var _, E;

            if (0 != o && function (e, t, n) {
              if (!(Mt(t, e.snd_una) < 0 || Mt(t, e.snd_nxt) >= 0)) for (var _r7, _i3 = e.snd_buf.next; _i3 != e.snd_buf && (_r7 = _i3.next, !(Mt(t, _i3.sn) < 0)); _i3 = _r7) {
                t != _i3.sn && Mt(n, _i3.ts) >= 0 && _i3.fastack++;
              }
            }(e, r, i), Mt(e.snd_una, n) > 0 && e.cwnd < e.rmt_wnd) {
              var _t11 = e.mss;
              e.cwnd < e.ssthresh ? (e.cwnd++, e.incr += _t11) : (e.incr < _t11 && (e.incr = _t11), e.incr += _t11 * _t11 / e.incr + _t11 / 16, (e.cwnd + 1) * _t11 <= e.incr && e.cwnd++), e.cwnd > e.rmt_wnd && (e.cwnd = e.rmt_wnd, e.incr = e.rmt_wnd * _t11);
            }

            return 0;
          }(this._kcp, e);

          for (;;) {
            var _e7 = Nt(this._kcp);

            if (0 === _e7.length) break;
            this._onRecv && this._onRecv(_e7, this.context);
          }

          return t;
        }
      }, {
        key: "onOutput",
        value: function onOutput(e) {
          var _this2 = this;

          this._kcp.output = function (t, n) {
            return e(t, _this2.context), t.length;
          };
        }
      }, {
        key: "send",
        value: function send(e) {
          return function (e, t) {
            var n = 0,
                r = t.length;

            if (0 != e.stream) {
              if (!gt(e.snd_queue)) {
                var _o2 = e.snd_queue.prev;

                if (_o2.data.length < e.mss) {
                  var _s2 = e.mss - _o2.data.length,
                      _a2 = r < _s2 ? r : _s2,
                      _3 = St(_o2.data, t.slice(n, n + _a2));

                  n += _a2;

                  var _E = yt(_3);

                  Rt(_E, e.snd_queue), _E.frg = 0, r -= _a2, mt(i = _o2), pt(i);
                }
              }

              if (r <= 0) return 0;
            }

            var i;
            var o;
            if ((o = r <= e.mss ? 1 : (r + e.mss - 1) / e.mss) >= 128) return -2;
            0 == o && (o = 1);

            for (var _i4 = 0; _i4 < o; _i4++) {
              var _s3 = r > e.mss ? e.mss : r,
                  _a3 = yt();

              r > 0 && (_a3.data = t.slice(n, n + _s3), n += _s3), _a3.frg = 0 == e.stream ? o - _i4 - 1 : 0, pt(_a3), Rt(_a3, e.snd_queue), e.nsnd_que++, r -= _s3;
            }

            return 0;
          }(this._kcp, e);
        }
      }, {
        key: "onRecv",
        value: function onRecv(e) {
          this._onRecv = e;
        }
      }, {
        key: "update",
        value: function update() {
          var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !1;
          var t = Date.now(),
              n = t - this._ts;
          return n >= 4294967296 && (this._ts = t, n = 0), e ? (i = n, (r = this._kcp).current = i, 0 == r.updated && (r.updated = 1, r.ts_flush = r.current), r.ts_flush = r.current, r.ts_flush += r.interval, Mt(r.current, r.ts_flush) >= 0 && (r.ts_flush = r.current + r.interval), void kt(r)) : function (e, t) {
            e.current = t, 0 == e.updated && (e.updated = 1, e.ts_flush = e.current);
            var n = Mt(e.current, e.ts_flush);
            (n >= 1e4 || n < -1e4) && (e.ts_flush = e.current, n = 0), n >= 0 && (e.ts_flush += e.interval, Mt(e.current, e.ts_flush) >= 0 && (e.ts_flush = e.current + e.interval), kt(e));
          }(this._kcp, n);
          var r, i;
        }
      }, {
        key: "nodelay",
        value: function nodelay(e, t, n, r) {
          return function (e, t, n, r, i) {
            return t >= 0 && (e.nodelay = t, e.rx_minrto = t ? 30 : 100), n >= 0 && (n > 5e3 ? n = 5e3 : n < 1 && (n = 1), e.interval = n), r >= 0 && (e.fastresend = r), i >= 0 && (e.nocwnd = i), 0;
          }(this._kcp, e, t, n, r);
        }
      }, {
        key: "setWinSize",
        value: function setWinSize(e, t) {
          return r = e, i = t, (n = this._kcp) && (r > 0 && (n.snd_wnd = r), i > 0 && (n.rcv_wnd = Pt(i, 128))), 0;
          var n, r, i;
        }
      }]);

      return qt;
    }();

    qt.asyncer = function (e) {
      return new Promise(function (e) {
        return e();
      }).then(e);
    };

    var Ht = {
      get connectSocket() {
        var e = Xe.connectSocket;
        return Le.enableUDP && Xe.createUDPSocket && (e = function e(_e8) {
          var t,
              n = null,
              r = null,
              i = null,
              o = null,
              s = 0;

          var a = _e8.url.toLowerCase().replace("wss://", "").replace("ws://", ""),
              _ = a.split(":")[0],
              E = parseInt(a.split(":")[1] || "443", 10),
              l = new qt(123, {
            address: _,
            port: E
          });

          l.nodelay(1, 10, 2, 1), l.setWinSize(1024, 1024);
          var d = Xe.createUDPSocket(),
              u = {
            get readyState() {
              return s;
            },

            CONNECTING: 0,
            OPEN: 1,
            CLOSING: 2,
            CLOSED: 3,
            onClose: function onClose(e) {
              return r = e;
            },
            onOpen: function onOpen(e) {
              return i = e;
            },
            onError: function onError(e) {
              return o = e;
            },
            onMessage: function onMessage(e) {
              return n = e;
            },
            close: function close(e) {
              d.close(), c(), e && e.success && e.success();
            },
            send: function send(_ref12) {
              var e = _ref12.data,
                  t = _ref12.fail,
                  n = _ref12.success;
              l && (0 !== l.send(new Uint8Array(e)) ? ft(function () {
                return t && t();
              })() : ft(function () {
                return n && n();
              })(), l.updateAsync());
            }
          };
          d.onClose(function (e) {
            s = 3, c(), ft(function () {
              return r && r(e);
            })();
          }), d.onError(function (e) {
            s = 3, d.close(), ft(function () {
              return o && o(e);
            })();
          }), d.onListening(function (e) {
            ot.log("UDP_onListening"), s = 1, h(), ft(function () {
              return i && i(e);
            })();
          }), d.onMessage(function (e) {
            var t = e.message || ("number" == typeof e.byteLength ? e : void 0);
            l.input(new Uint8Array(t)), l.updateAsync();
          }), l.onOutput(function (e, t) {
            d.send({
              address: _,
              port: E,
              message: e.buffer || e
            });
          }), l.onRecv(function (e, t) {
            e.length > 0 && n && n({
              data: e.buffer
            });
          });

          var h = function h() {
            t = !0, requestAnimationFrame(function () {
              t && (l.update(), h());
            });
          },
              c = function c() {
            t = !1;
          },
              f = d.bind();

          return ot.log("UDP_bind", f), u;
        }), e;
      }

    },
        xt = {
      connectSocket: Xe.connectSocket
    },
        Bt = {
      connect: "connect",
      connectClose: "connectClose",
      connectClosing: "connectClosing",
      connectError: "connectError",
      connecting: "connecting",
      message: "message",
      autoAuth: "autoAuth"
    },
        Vt = Object.keys(Bt);

    var Qt = /*#__PURE__*/function () {
      function Qt(e, t, n) {
        _classCallCheck(this, Qt);

        this.isMsgBind = !1, this.forceClose = !1, this.init(n), this.id = e, this.enableUdp = t;
      }

      _createClass(Qt, [{
        key: "init",
        value: function init(e) {
          var _this3 = this;

          this.url = e, this.eventCallbacks = [], this.eventOnceCallbacks = new Map(), this.socketTask = null;
          var t = new Ze();
          var n = 0;

          var r = function r() {
            ot.log("SOCKET_OPEN", _this3.id, _this3.isConnect()), n = 0, l(), nt(t);
          },
              i = function i(e) {
            ot.log("SOCKET_CLOSE", e, _this3.id), E(), et(t, function () {
              return s("close");
            }, Le.reconnectInterval), _this3.forceClose && (n = 0, _this3.forceClose = !1, nt(t));
          },
              o = function o(e) {
            ot.log("SOCKET_ERROR", e, _this3.id, _this3.socketTask && _this3.socketTask.readyState), _(Bt.connectError, {
              msg: "socket connectError",
              data: e
            }), et(t, function () {
              return s("error");
            }, Le.reconnectInterval);
          },
              s = function s(e) {
            if (!_this3.url) throw new Error("socket.url = " + _this3.url);
            if (!_this3.isConnect() && !_this3.isClose()) return et(t, function () {
              return s("open");
            }, Le.reconnectInterval);
            if (!_this3.isClose()) return;
            if (ot.log("SOCKET_TRY_OPEN", _this3.id, e, _this3.socketTask && _this3.socketTask.readyState, n, Le.reconnectMaxTimes), ++n > Le.reconnectMaxTimes) return n = 0, void ot.log("SOCKET_RECONNECT_TIMEOUT");

            var a = "wss://" + _this3.url.replace("wss://", "").replace("ws://", "");

            nt(t), _this3.forceClose = !1, _this3.enableUdp ? _this3.socketTask = Ht.connectSocket({
              url: a,
              fail: function fail() {
                return console.error("connectSocket fail");
              }
            }) : _this3.socketTask = xt.connectSocket({
              url: a,
              fail: function fail() {
                return console.error("connectSocket fail");
              }
            }), _this3.socketTask.onOpen(r.bind(_this3)), _this3.socketTask.onClose(i.bind(_this3)), _this3.socketTask.onError(o.bind(_this3)), _this3.socketTask.onMessage(function (e) {
              _(Bt.message, {
                msg: "socket message",
                data: e.data
              });
            }.bind(_this3));
          },
              a = function a(e) {
            ot.log("SOCKET_CONNECT", _this3.id, e), !_this3.isConnect() && n > 0 && n < Le.reconnectMaxTimes || (n = 0, s(e + " connect"));
          },
              _ = function _(e) {
            var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            t.tag = e, _this3.eventCallbacks.forEach(function (_ref13) {
              var _ref14 = _slicedToArray(_ref13, 2),
                  n = _ref14[0],
                  r = _ref14[1];

              n !== e && "*" !== n || r(t);
            });

            var n = _this3.eventOnceCallbacks.get(e);

            n && (n(t), _this3.eventOnceCallbacks["delete"](e));
          },
              E = function E() {
            return _(Bt.connectClose, {
              msg: "socket is closed"
            });
          },
              l = function l() {
            return _(Bt.connect, {
              msg: "socket is connected"
            });
          };

          this.connect = a, this.connectNewSocket = function (e) {
            ot.log("SOCKET_CONNECT_NEW", _this3.id, _this3.isClose()), _this3.url = e, n = 0;

            var t = function t() {
              a("connectNewSocket");
            };

            _this3.close(t, t);
          }, this.send = function (e, _ref15) {
            var t = _ref15.fail,
                n = _ref15.success;
            if (!_this3.isConnect()) return t({
              data: e
            }), void a("send");

            _this3.socketTask.send({
              data: e.buffer,
              fail: function fail(n) {
                ot.log("SOCKET_SEND_FAIL", _this3.id, n), t({
                  data: e
                });
              },
              success: function success() {
                n({
                  data: e
                });
              }
            });
          }, this.close = function (e, t) {
            if (_this3.forceClose = !0, !_this3.socketTask) return e && e(), E();

            _this3.socketTask.close({
              success: function success(t) {
                ot.log("SOCKET_CLOSE_SUCCESS", _this3.id, t), _this3.socketTask = null, e && e();
              },
              fail: function fail(e) {
                ot.log("SOCKET_CLOSE_ERROR", _this3.id, e), _this3.socketTask = null, t && t();
              }
            });
          }, this.destory = function () {
            nt(t), !_this3.isClose() && _this3.close(), _this3.offAll();
          }, this.isConnect = function () {
            return _this3.socketTask && _this3.socketTask.readyState === _this3.socketTask.OPEN;
          }, this.isConnecting = function () {
            return _this3.socketTask && _this3.socketTask.readyState === _this3.socketTask.CONNECTING;
          }, this.isClose = function () {
            return !_this3.socketTask || _this3.socketTask && _this3.socketTask.readyState === _this3.socketTask.CLOSED;
          }, this.isClosing = function () {
            return _this3.socketTask && _this3.socketTask.readyState === _this3.socketTask.CLOSING;
          }, this.on = function (e, t) {
            (Vt.includes(e) || "*" === e) && "function" == typeof t && (_this3.eventCallbacks.push([e, t]), e === Bt.message && (_this3.isMsgBind = !0));
          }, this.once = function (e, t) {
            Vt.includes(e) && "function" == typeof t && _this3.eventOnceCallbacks.set(e, t);
          }, this.emit = _, this.offAll = function () {
            _this3.eventCallbacks = [], _this3.eventOnceCallbacks.clear(), _this3.isMsgBind = !1;
          };
        }
      }]);

      return Qt;
    }();

    var Kt = [He.E_CMD_LOGIN_REQ, He.E_CMD_LOGOUT_REQ],
        Wt = [He.E_CMD_RELAY_SEND_FRAME_REQ, He.E_CMD_RELAY_REQUEST_FRAME_REQ, He.E_CMD_HEART_BEAT_REQ, He.E_CMD_RELAY_CLIENT_SENDTO_GAMESVR_REQ];
    var jt;
    !function (e) {
      e[e.CLIENT_PRE = parseInt("0x2", 16)] = "CLIENT_PRE", e[e.CLIENT_END = parseInt("0x3", 16)] = "CLIENT_END", e[e.SERVER_PRE = parseInt("0x28", 16)] = "SERVER_PRE", e[e.SERVER_END = parseInt("0x29", 16)] = "SERVER_END";
    }(jt || (jt = {}));

    var Jt = /*#__PURE__*/function () {
      function Jt() {
        _classCallCheck(this, Jt);

        this.queue = new Set(), this.bdHandlers = new Set(), this.socket = null;
      }

      _createClass(Jt, [{
        key: "bindSocket",
        value: function bindSocket(e, t, n) {
          var _this4 = this;

          return !(this.socket || !e) && (this.socket = e, !this.socket.isMsgBind && this.socket.on(Bt.message, function (e) {
            if (!e.data) return;

            var _this4$unpackBody = _this4.unpackBody(new Uint8Array(e.data)),
                r = _this4$unpackBody.body,
                i = _this4$unpackBody.pre,
                o = _this4$unpackBody.end;

            i === jt.CLIENT_PRE && o === jt.CLIENT_END && t(r), i === jt.SERVER_PRE && o === jt.SERVER_END && n(r);
          }.bind(this)), !0);
        }
      }, {
        key: "unbindSocket",
        value: function unbindSocket() {
          this.socket && this.socket.offAll(), this.socket = null, this.clearQueue(), this.clearBdHandlers();
        }
      }, {
        key: "clearQueue",
        value: function clearQueue() {
          var _this5 = this;

          Array.from(this.queue).forEach(function (e) {
            _this5.deleteSeqQueue(e);
          });
        }
      }, {
        key: "clearBdHandlers",
        value: function clearBdHandlers() {
          var _this6 = this;

          Array.from(this.bdHandlers).forEach(function (e) {
            Jt.broadcastHandlers["delete"](e), _this6.bdHandlers["delete"](e);
          });
        }
      }, {
        key: "deleteSeqQueue",
        value: function deleteSeqQueue(e) {
          Jt.sendQueue["delete"](e), this.queue["delete"](e);
        }
      }, {
        key: "addSeqQueue",
        value: function addSeqQueue(e, t) {
          Jt.sendQueue.set(e, t), this.queue.add(e);
        }
      }, {
        key: "setBroadcastHandler",
        value: function setBroadcastHandler(e, t) {
          Jt.broadcastHandlers.set(e, t), this.bdHandlers.add(e);
        }
      }, {
        key: "handleErrCode",
        value: function handleErrCode(e) {
          return !1;
        }
      }, {
        key: "send",
        value: function send(e, t, n) {
          var _this7 = this;

          var r = this.getReadyCode(n);
          return Jt.sendQueue.size > 10 && ot.log("SENDQUEUE_size", Jt.sendQueue.size), 0 !== r ? this.handleSendFail(t, r) : this.socket.send(e, {
            fail: function fail(e) {
              return _this7.handleSendFail(t, e);
            },
            success: function success() {
              return _this7.handleSendSuccess(t);
            }
          }), t;
        }
      }, {
        key: "buildData",
        value: function buildData(e, t, n) {
          var r = 5 + t.length + 1,
              i = new Uint8Array(function (e, t) {
            var n = [];

            for (; e > 255;) {
              n.push(255 & e), e >>= 8;
            }

            for (0 !== e && n.push(e), n = n.slice(0, 4); n.length < 4;) {
              n.push(0);
            }

            return n.reverse();
          }(r)),
              o = new Uint8Array(r);
          return o.set(e), o.set(i, e.length), o.set(t, e.length + i.length), o.set(n, e.length + i.length + t.length), o;
        }
      }, {
        key: "unpackBody",
        value: function unpackBody(e) {
          var t = e.slice(1, 5),
              n = function (e) {
            var t = 0;
            var n = e.length;

            for (var _r8 = n - 1; _r8 >= 0; _r8--) {
              t += e[_r8] * Math.pow(2, 8 * (n - 1 - _r8));
            }

            return t;
          }(Array.from(t)) - 6;

          return {
            body: e.slice(5, 5 + n),
            pre: e[0],
            end: e[e.length - 1]
          };
        }
      }, {
        key: "handleSendFail",
        value: function handleSendFail(e, t) {
          var n = Jt.sendQueue.get(e);
          if (n) return Date.now() - n.time > Le.resendTimeout ? n.sendFail(ke.getErrCode() || t) : t === Pe.EC_SDK_UNINIT ? n.sendFail(t) : t === Pe.EC_SDK_NO_LOGIN || t === Pe.EC_SDK_NO_CHECK_LOGIN ? this.socket.emit(Bt.autoAuth, {}) : void 0;
        }
      }, {
        key: "handleSendSuccess",
        value: function handleSendSuccess(e) {
          Jt.sendQueue.has(e) && Jt.sendQueue.get(e).sendSuccess();
        }
      }, {
        key: "getReadyCode",
        value: function getReadyCode(e) {
          return Fe.isInited() || e === He.E_CMD_LOGIN_REQ ? this.socket && this.socket.url ? ke.isStatus(ke.StatusType.LOGIN) || Kt.includes(e) ? this.socket.id === o.ConnectionType.RELAY && !qe.isChecked() && Wt.includes(e) ? Pe.EC_SDK_NO_CHECK_LOGIN : 0 : Pe.EC_SDK_NO_LOGIN : Pe.EC_SDK_SEND_FAIL : (console.error("MGOBE.Listener 未初始化"), Ye.setInfo({
            id: ""
          }), ke.setStatus(ke.StatusType.LOGOUT), Pe.EC_SDK_UNINIT);
        }
      }], [{
        key: "startQueueLoop",
        value: function startQueueLoop() {
          et(Jt.timer, function () {
            var e = Date.now();
            return Array.from(Jt.sendQueue).forEach(function (_ref16) {
              var _ref17 = _slicedToArray(_ref16, 2),
                  t = _ref17[0],
                  n = _ref17[1];

              if (e - n.time > Le.resendTimeout) {
                var _e9,
                    _t12 = "";

                ke.isStatus(ke.StatusType.LOGIN) ? _e9 = Pe.EC_SDK_RES_TIMEOUT : ke.getErrCode() === Pe.EC_OK ? (_e9 = Pe.EC_SDK_NO_LOGIN, _t12 = "登录失败") : (_e9 = ke.getErrCode(), _t12 = "登录失败，" + ke.getErrMsg()), n.sendFail(_e9, _t12);
              } else !n.isSocketSend && e - n.time >= Le.resendInterval && n.resend();
            }), Jt.startQueueLoop();
          }, Le.resendInterval);
        }
      }, {
        key: "stopQueueLoop",
        value: function stopQueueLoop() {
          nt(Jt.timer), Array.from(Jt.sendQueue).forEach(function (_ref18) {
            var _ref19 = _slicedToArray(_ref18, 2),
                e = _ref19[0],
                t = _ref19[1];

            t.remove();
          }), Jt.sendQueue.clear();
        }
      }]);

      return Jt;
    }();

    Jt.sendQueue = new Map(), Jt.broadcastHandlers = new Map(), Jt.timer = new Ze();
    var Xt = Jt;
    var zt = n(8);

    var $t = /*#__PURE__*/function () {
      function $t(e) {
        _classCallCheck(this, $t);

        this.root = zt.newBuilder({})["import"](e).build();
      }

      _createClass($t, [{
        key: "lookupType",
        value: function lookupType(e) {
          var t = this.root;
          return e.split(".").forEach(function (e) {
            return t = t[e];
          }), t;
        }
      }, {
        key: "bufferify",
        value: function bufferify(e, t) {
          var n = this.lookupType(e);
          return function (e) {
            var r = {};
            t.forEach(function (t) {
              return e.hasOwnProperty(t) && (r[t] = e[t]);
            });
            var i = n.encode(r);
            return new Uint8Array(i.buffer.slice(i.offset, i.offset + i.limit));
          };
        }
      }, {
        key: "objectify",
        value: function objectify(e) {
          var t = this.lookupType(e);
          return function (e) {
            var n = t.decode(e);
            return $t.numberify(n);
          };
        }
      }], [{
        key: "numberify",
        value: function numberify(e) {
          if (null == e) return e;
          if (e.constructor === zt.Long) return Number(e);
          var t = Object.prototype.toString.apply(e);
          return e.constructor === zt.ByteBuffer ? e.buffer.slice(e.offset, e.offset + e.limit) : ("[object Object]" !== t && "[object Array]" !== t || Object.keys(e).forEach(function (t) {
            e[t] = $t.numberify(e[t]);
          }), e);
        }
      }]);

      return $t;
    }();

    var Zt = {
      ClientSendServerReqWrap1: ["version", "appName", "cmd", "seq", "clientIp", "serviceIp", "business", "authKey", "authType", "authIp", "gameId", "uid", "playerId", "body"],
      ServerSendClientBstWrap1: ["version", "appName", "cmd", "seq", "clientIp", "serviceIp", "business", "authKey", "authType", "authIp", "gameId", "uid", "playerId", "body"],
      ClientSendServerRspWrap1: ["seq", "errCode", "errMsg", "body"],
      ClientSendServerReqWrap2: ["cmd", "body"],
      ClientSendServerRspWrap2: ["body"],
      EventInfo: ["eventType", "seq", "body"],
      EventNetworkState: ["gameId", "playerId", "networkState"],
      HeartBeatReq: ["conType", "routeId"],
      HeartBeatRsp: [],
      ServerSendClientBstWrap2: ["type", "msg"],
      NOUSEServerSendClientBstRspWrap2: [],
      CheckLoginReq: ["token", "routeId"],
      CheckLoginRsp: [],
      PushBodyType: ["pushMsg"],
      LoginReq: ["gameId", "openId", "platform", "channel", "nonce", "timestamp", "sign", "deviceId", "mac", "imei"],
      LoginRsp: ["token", "playerId", "expireTime", "sdkConfig"],
      SdkConfig: ["pingInterval", "reportInterval", "serverTime", "enableUdp", "disableReport", "disableReqReport", "disableFrameReport", "minReportSize"],
      LogoutReq: [],
      LogoutRsp: [],
      StartFrameSyncReq: [],
      StartFrameSyncRsp: [],
      StopFrameSyncReq: [],
      StopFrameSyncRsp: [],
      FrameItem: ["playerId", "data", "timestamp"],
      SendFrameReq: ["roomId", "item"],
      SendFrameRsp: [],
      FrameExtInfo: ["seed"],
      Frame: ["id", "items", "ext"],
      RequestFrameReq: ["roomId", "beginFrameId", "endFrameId", "supportPartial"],
      RequestFrameRsp: ["frames", "isPartial"],
      PlayerInfo: ["id", "name", "teamId", "customPlayerStatus", "customProfile", "commonNetworkState", "relayNetworkState", "isRobot", "matchAttributes"],
      TeamInfo: ["id", "name", "minPlayers", "maxPlayers"],
      RoomInfo: ["id", "name", "type", "createType", "maxPlayers", "owner", "isPrivate", "customProperties", "playerList", "teamList", "frameSyncState", "frameRate", "routeId", "createTime", "startGameTime", "isForbidJoin"],
      CreateRoomReq: ["roomName", "roomType", "createType", "maxPlayers", "isPrivate", "customProperties", "playerInfo", "region", "owner", "playerList", "teamList"],
      CreateRoomRsp: ["roomInfo"],
      JoinRoomReq: ["roomId", "teamId", "joinType", "playerInfo"],
      JoinRoomRsp: ["roomInfo"],
      LeaveRoomReq: [],
      LeaveRoomRsp: ["roomInfo"],
      DismissRoomReq: ["roomId"],
      DismissRoomRsp: [],
      ChangeRoomReq: ["roomName", "owner", "isPrivate", "customProperties", "isForbidJoin", "changeRoomOptionList"],
      ChangeRoomRsp: ["roomInfo"],
      SvrChangeRoomReq: ["roomName", "owner", "isPrivate", "customProperties", "isForbidJoin", "roomId", "changeRoomOptionList"],
      SvrChangeRoomRsp: ["roomInfo"],
      RemovePlayerReq: ["removePlayerId"],
      RemovePlayerRsp: ["roomInfo"],
      SvrRemovePlayerReq: ["roomId", "removePlayerId"],
      SvrRemovePlayerRsp: ["roomInfo"],
      GetRoomByRoomIdReq: ["roomId"],
      GetRoomByRoomIdRsp: ["roomInfo"],
      SendToClientReq: ["roomId", "recvPlayerList", "msg"],
      SendToClientRsp: [],
      ChangeCustomPlayerStatusReq: ["customPlayerStatus"],
      ChangeCustomPlayerStatusRsp: ["roomInfo"],
      SvrChangeCustomPlayerStatusReq: ["customPlayerStatus"],
      SvrChangeCustomPlayerStatusRsp: ["roomInfo"],
      ChangePlayerNetworkStateReq: ["networkState"],
      ChangePlayerNetworkStateRsp: ["roomInfo"],
      GetRoomListReq: ["gameId", "pageNo", "pageSize", "roomType", "isDesc"],
      GetRoomListRsp: ["gameId", "roomList", "total"],
      ChangeRoomPlayerProfileReq: ["customProfile"],
      ChangeRoomPlayerProfileRsp: ["roomInfo"],
      ChangeGroupPlayerProfileReq: ["groupId", "customProfile"],
      ChangeGroupPlayerProfileRsp: ["groupInfo"],
      MatchRoomSimpleReq: ["roomType", "maxPlayers", "playerInfo"],
      MatchRoomSimpleRsp: ["roomInfo"],
      MatchRoomComplexReq: [],
      MatchRoomComplexRsp: [],
      MatchPlayersSimpleReq: [],
      MatchPlayersSimpleRsp: [],
      MatchAttribute: ["name", "value"],
      MatchPlayerInfo: ["id", "name", "customPlayerStatus", "customProfile", "matchAttributes", "matchStatus", "teamId", "region", "teamLeader", "sdkVersion", "groupId", "teamType", "requestId"],
      MatchGroupPlayerInfo: ["id", "name", "customPlayerStatus", "customProfile", "matchAttributes", "matchStatus", "teamId", "region", "teamLeader", "sdkVersion", "groupId", "teamType", "requestId"],
      MatchGroupInfo: ["id", "leader", "playerIdList", "playerInfoList", "matchAttributes", "region", "sdkVersion", "teamId", "teamType", "requestId", "startMatchTime", "isRobot"],
      MatchTeamInfo: ["teamId", "teamName", "teamLeader", "members", "matchAttributes", "memberSdkVersions", "groupIds", "groupSdkVersions", "teamType"],
      ProgressPlayerInfo: ["playerId", "teamName", "matchAttributes", "startMatchTime"],
      MatchmakerTeam: ["name", "players"],
      MatchmakerData: ["matchId", "teams"],
      MatchPlacementInfo: ["gameId", "matchCode", "matchId", "type", "createRoomReq", "matchmakerDataJson", "status", "resultBody"],
      MgobePlacementJob: ["createRoomReq"],
      MgobePlacementResult: ["roomInfo"],
      GsePlacementJob: ["createRoomReq", "matchmakerData"],
      GsePlacementResult: ["gseGameSession"],
      ThirdpartyPlacementJob: [],
      ThirdpartyPlacementResult: [],
      GsePlayerLatency: ["latencyInMilliseconds", "playerId", "regionIdentifier"],
      GseGameProperty: ["key", "value"],
      GsePlacedPlayerSession: ["playerId", "playerSessionId"],
      GseGameSession: ["placementId", "gameServerSessionQueueName", "playerLatencies", "status", "dnsName", "gameServerSessionId", "gameServerSessionName", "gameServerSessionRegion", "gameProperties", "maximumPlayerSessionCount", "gameServerSessionData", "ipAddress", "port", "matchmakerData", "placedPlayerSessions", "startTime", "endTime"],
      PlaceMatchReq: ["seq", "gameId", "matchId", "type", "jobBody", "matchCode"],
      PlaceMatchRsp: ["matchPlacementResult"],
      MatchPlacementResult: ["seq", "gameId", "matchId", "type", "status", "resultBody", "errCode", "matchCode"],
      UpdateMatchPlacementResultReq: ["matchPlacementResult"],
      UpdateMatchPlacementResultRsp: [],
      CmqPlacementResult: ["placementId", "placementType", "resultBody"],
      MatchPlayersReq: ["matchCode", "playerInfo"],
      MatchPlayersRsp: ["matchCode"],
      MatchGroupReq: ["matchCode", "playerInfoList"],
      MatchGroupRsp: ["matchCode"],
      DescribeMatchReq: ["requestIdList"],
      MatchProgress: ["requestId", "playerIdList", "playerInfoList", "status", "eventType", "playerInfoSuccessList", "teamInfoList", "completedTime", "startMatchTime", "gameSessionConnectionInfo"],
      DescribeMatchRsp: ["matchProgressList"],
      CancelPlayerMatchReq: ["matchType"],
      CancelPlayerMatchRsp: [],
      ApiMatchGroupReq: ["matchCode", "playerInfoList", "requestId"],
      ApiMatchGroupRsp: ["requestId"],
      ApiDescribeMatchReq: ["requestIdList"],
      ApiDescribeMatchRsp: ["matchProgressList", "gameId", "matchCode", "startMatchTime"],
      GameSessionConnectionInfo: ["dnsName", "ipAddress", "matchedPlayerSessions", "port"],
      MatchedPlayerSession: ["playerId", "playerSessionId"],
      StartMatchPlacement: ["region", "placementId", "queueName", "maximumPlayerSessionCount", "desiredPlayerSessions", "gameProperties", "matchMakerData"],
      DesiredPlayerSession: ["playerId", "playerData"],
      GameProperty: ["key", "value"],
      ApiCancelPlayerMatchReq: ["matchType", "requestIdList"],
      ApiCancelPlayerMatchRsp: ["requestIdList"],
      CreateRoomBst: ["roomInfo"],
      DestroyRoomBst: ["roomInfo"],
      JoinRoomBst: ["roomInfo", "joinPlayerId"],
      LeaveRoomBst: ["roomInfo", "leavePlayerId"],
      RemovePlayerBst: ["roomInfo", "removePlayerId"],
      DismissRoomBst: ["roomInfo"],
      ChangeRoomBst: ["roomInfo"],
      RecvFromClientBst: ["roomId", "sendPlayerId", "msg"],
      ChangeCustomPlayerStatusBst: ["changePlayerId", "customPlayerStatus", "roomInfo"],
      ChangeRoomPlayerProfileBst: ["changePlayerId", "customProfile", "roomInfo"],
      ChangeGroupPlayerProfileBst: ["changePlayerId", "customProfile", "groupInfo"],
      ChangePlayerNetworkStateBst: ["changePlayerId", "networkState", "roomInfo", "groupIdList"],
      MatchTimeoutBst: ["matchType", "errCode"],
      CancelMatchBst: ["matchCode", "playerId"],
      MatchPlayersBst: ["matchType", "roomInfo"],
      StartFrameSyncBst: ["roomInfo"],
      StopFrameSyncBst: ["roomInfo"],
      RecvFrameBst: ["frame"],
      GameSvrCommunication: ["type", "body", "needRsp"],
      NotifyRelayConnectionReq: ["roomId", "ip", "port"],
      NotifyRoomEventReq: ["cmd", "msg"],
      SendToGameSvrReq: ["roomId", "playerId", "data"],
      SendToGameSvrRsp: [],
      RecvFromGameSvrBst: ["roomId", "recvPlayerIdList", "data"],
      ClientRecvFromGameSvrRsp: [],
      GroupInfo: ["id", "name", "type", "maxPlayers", "owner", "customProperties", "createTime", "isForbidJoin", "isPersistent", "groupPlayerList"],
      GroupPlayerInfo: ["id", "name", "customGroupPlayerStatus", "customGroupPlayerProfile", "commonGroupNetworkState"],
      CreateGroupReq: ["groupName", "groupType", "maxPlayers", "customProperties", "playerInfo", "isForbidJoin", "isPersistent"],
      CreateGroupRsp: ["groupInfo"],
      JoinGroupReq: ["groupId", "playerInfo"],
      JoinGroupRsp: ["groupInfo"],
      LeaveGroupReq: ["groupId"],
      LeaveGroupRsp: ["groupInfo"],
      DismissGroupReq: ["groupId"],
      DismissGroupRsp: [],
      ChangeGroupReq: ["groupId", "groupName", "owner", "customProperties", "isForbidJoin", "changeGroupOptionList"],
      ChangeGroupRsp: ["groupInfo"],
      RemoveGroupPlayerReq: ["groupId", "removePlayerId"],
      RemoveGroupPlayerRsp: ["groupInfo"],
      GetGroupByGroupIdReq: ["groupId"],
      GetGroupByGroupIdRsp: ["groupInfo"],
      GetMyGroupsReq: [],
      GetMyGroupsRsp: ["groupInfoList"],
      ChangeCustomGroupPlayerStatusReq: ["groupId", "customGroupPlayerStatus"],
      ChangeCustomGroupPlayerStatusRsp: ["groupInfo"],
      SendToGroupClientReq: ["groupId", "recvPlayerList", "msg", "recvType"],
      SendToGroupClientRsp: [],
      GroupPlayers: ["groupId", "playerIdList"],
      ChangeGroupPlayerNetworkReq: ["networkState", "playerId", "gameId", "seq"],
      ChangeGroupPlayerNetworkRsp: ["groupPlayers"],
      JoinGroupBst: ["groupInfo", "joinPlayerId"],
      LeaveGroupBst: ["groupInfo", "leavePlayerId"],
      DismissGroupBst: ["groupInfo"],
      ChangeGroupBst: ["groupInfo"],
      RemoveGroupPlayerBst: ["groupInfo", "removePlayerId"],
      ChangeGroupPlayerNetworkStateBst: ["groupInfo", "changePlayerId", "networkState"],
      ChangeCustomGroupPlayerStatusBst: ["groupInfo", "changePlayerId", "customGroupPlayerStatus"],
      RecvFromGroupClientBst: ["groupId", "sendPlayerId", "msg"]
    },
        en = n(13),
        tn = function () {
      var e;
      return function () {
        return e || (e = new $t(en));
      };
    }();

    Object.keys(Ie).map(function (e) {
      return Ie[e] = (t = tn, n = [re, e].join("."), r = Zt[e], {
        bufferify: t().bufferify(n, r),
        objectify: t().objectify(n)
      });
      var t, n, r;
    });

    var nn = ct,
        rn = He,
        on = xe,
        sn = Ie,
        an = new Map(),
        _n = new Map(),
        En = new Map(),
        ln = sn.ClientSendServerReqWrap1,
        dn = sn.ClientSendServerReqWrap2,
        un = sn.ClientSendServerRspWrap1,
        hn = sn.ClientSendServerRspWrap2,
        cn = sn.ServerSendClientBstWrap1,
        fn = sn.ServerSendClientBstWrap2;

    var pn;
    an.set(rn.E_CMD_LOGIN_REQ, sn.LoginReq), _n.set(rn.E_CMD_LOGIN_REQ, sn.LoginRsp), an.set(rn.E_CMD_LOGOUT_REQ, sn.LogoutReq), _n.set(rn.E_CMD_LOGOUT_REQ, sn.LogoutRsp), an.set(rn.E_CMD_CHANGE_PLAYER_STATE_REQ, sn.ChangeCustomPlayerStatusReq), _n.set(rn.E_CMD_CHANGE_PLAYER_STATE_REQ, sn.ChangeCustomPlayerStatusRsp), an.set(rn.E_CMD_CHANGE_ROOM_PLAYER_PROFILE, sn.ChangeRoomPlayerProfileReq), _n.set(rn.E_CMD_CHANGE_ROOM_PLAYER_PROFILE, sn.ChangeRoomPlayerProfileRsp), an.set(rn.E_CMD_RELAY_CLIENT_SENDTO_GAMESVR_REQ, sn.SendToGameSvrReq), _n.set(rn.E_CMD_RELAY_CLIENT_SENDTO_GAMESVR_REQ, sn.SendToGameSvrRsp), an.set(rn.E_CMD_RELAY_SEND_FRAME_REQ, sn.SendFrameReq), _n.set(rn.E_CMD_RELAY_SEND_FRAME_REQ, sn.SendFrameRsp), an.set(rn.E_CMD_ROOM_CHAT_REQ, sn.SendToClientReq), _n.set(rn.E_CMD_ROOM_CHAT_REQ, sn.SendToClientRsp), an.set(rn.E_CMD_CHECK_LOGIN_REQ, sn.CheckLoginReq), _n.set(rn.E_CMD_CHECK_LOGIN_REQ, sn.CheckLoginRsp), an.set(rn.E_CMD_RELAY_REQUEST_FRAME_REQ, sn.RequestFrameReq), _n.set(rn.E_CMD_RELAY_REQUEST_FRAME_REQ, sn.RequestFrameRsp), an.set(rn.E_CMD_START_FRAME_SYNC_REQ, sn.StartFrameSyncReq), _n.set(rn.E_CMD_START_FRAME_SYNC_REQ, sn.StartFrameSyncRsp), an.set(rn.E_CMD_STOP_FRAME_SYNC_REQ, sn.StopFrameSyncReq), _n.set(rn.E_CMD_STOP_FRAME_SYNC_REQ, sn.StopFrameSyncRsp), an.set(rn.E_CMD_CREATE_ROOM_REQ, sn.CreateRoomReq), _n.set(rn.E_CMD_CREATE_ROOM_REQ, sn.CreateRoomRsp), an.set(rn.E_CMD_JOIN_ROOM_REQ, sn.JoinRoomReq), _n.set(rn.E_CMD_JOIN_ROOM_REQ, sn.JoinRoomRsp), an.set(rn.E_CMD_QUIT_ROOM_REQ, sn.LeaveRoomReq), _n.set(rn.E_CMD_QUIT_ROOM_REQ, sn.LeaveRoomRsp), an.set(rn.E_CMD_DISSMISS_ROOM_REQ, sn.DismissRoomReq), _n.set(rn.E_CMD_DISSMISS_ROOM_REQ, sn.DismissRoomRsp), an.set(rn.E_CMD_CHANGE_ROOM_PROPERTIS_REQ, sn.ChangeRoomReq), _n.set(rn.E_CMD_CHANGE_ROOM_PROPERTIS_REQ, sn.ChangeRoomRsp), an.set(rn.E_CMD_REMOVE_MEMBER_REQ, sn.RemovePlayerReq), _n.set(rn.E_CMD_REMOVE_MEMBER_REQ, sn.RemovePlayerRsp), an.set(rn.E_CMD_GET_ROOM_DETAIL_REQ, sn.GetRoomByRoomIdReq), _n.set(rn.E_CMD_GET_ROOM_DETAIL_REQ, sn.GetRoomByRoomIdRsp), an.set(rn.E_CMD_GET_ROOM_LIST_REQ, sn.GetRoomListReq), _n.set(rn.E_CMD_GET_ROOM_LIST_REQ, sn.GetRoomListRsp), an.set(rn.E_CMD_GET_ROOM_LIST_V2_REQ, sn.GetRoomListReq), _n.set(rn.E_CMD_GET_ROOM_LIST_V2_REQ, sn.GetRoomListRsp), an.set(rn.E_CMD_HEART_BEAT_REQ, sn.HeartBeatReq), _n.set(rn.E_CMD_HEART_BEAT_REQ, sn.HeartBeatRsp), an.set(rn.E_CMD_MATCH_PLAYER_COMPLEX_REQ, sn.MatchPlayersReq), _n.set(rn.E_CMD_MATCH_PLAYER_COMPLEX_REQ, sn.MatchPlayersRsp), an.set(rn.E_CMD_MATCH_GROUP_REQ, sn.MatchGroupReq), _n.set(rn.E_CMD_MATCH_GROUP_REQ, sn.MatchGroupRsp), an.set(rn.E_CMD_MATCH_ROOM_SIMPLE_REQ, sn.MatchRoomSimpleReq), _n.set(rn.E_CMD_MATCH_ROOM_SIMPLE_REQ, sn.MatchRoomSimpleRsp), an.set(rn.E_CMD_MATCH_CANCEL_MATCH_REQ, sn.CancelPlayerMatchReq), _n.set(rn.E_CMD_MATCH_CANCEL_MATCH_REQ, sn.CancelPlayerMatchRsp), an.set(rn.E_CMD_CREATE_GROUP_REQ, sn.CreateGroupReq), _n.set(rn.E_CMD_CREATE_GROUP_REQ, sn.CreateGroupRsp), an.set(rn.E_CMD_JOIN_GROUP_REQ, sn.JoinGroupReq), _n.set(rn.E_CMD_JOIN_GROUP_REQ, sn.JoinGroupRsp), an.set(rn.E_CMD_QUIT_GROUP_REQ, sn.LeaveGroupReq), _n.set(rn.E_CMD_QUIT_GROUP_REQ, sn.LeaveGroupRsp), an.set(rn.E_CMD_DISMISS_GROUP_REQ, sn.DismissGroupReq), _n.set(rn.E_CMD_DISMISS_GROUP_REQ, sn.DismissGroupRsp), an.set(rn.E_CMD_CHANGE_GROUP_PROPERTIES_REQ, sn.ChangeGroupReq), _n.set(rn.E_CMD_CHANGE_GROUP_PROPERTIES_REQ, sn.ChangeGroupRsp), an.set(rn.E_CMD_REMOVE_GROUP_MEMBER_REQ, sn.RemoveGroupPlayerReq), _n.set(rn.E_CMD_REMOVE_GROUP_MEMBER_REQ, sn.RemoveGroupPlayerRsp), an.set(rn.E_CMD_GET_GROUP_DETAIL_REQ, sn.GetGroupByGroupIdReq), _n.set(rn.E_CMD_GET_GROUP_DETAIL_REQ, sn.GetGroupByGroupIdRsp), an.set(rn.E_CMD_GET_GROUP_LIST_REQ, sn.GetMyGroupsReq), _n.set(rn.E_CMD_GET_GROUP_LIST_REQ, sn.GetMyGroupsRsp), an.set(rn.E_CMD_CHANGE_GROUP_PLAYER_STATE_REQ, sn.ChangeCustomGroupPlayerStatusReq), _n.set(rn.E_CMD_CHANGE_GROUP_PLAYER_STATE_REQ, sn.ChangeCustomGroupPlayerStatusRsp), an.set(rn.E_CMD_CHANGE_GROUP_PLAYER_PROFILE, sn.ChangeGroupPlayerProfileReq), _n.set(rn.E_CMD_CHANGE_GROUP_PLAYER_PROFILE, sn.ChangeGroupPlayerProfileRsp), an.set(rn.E_CMD_GROUP_CHAT_REQ, sn.SendToGroupClientReq), _n.set(rn.E_CMD_GROUP_CHAT_REQ, sn.SendToGroupClientRsp), En.set(on.E_PUSH_TYPE_GAMESVR, sn.RecvFromGameSvrBst), En.set(on.E_PUSH_TYPE_ROOM_CHAT, sn.RecvFromClientBst), En.set(on.E_PUSH_TYPE_START_GAME, sn.StartFrameSyncBst), En.set(on.E_PUSH_TYPE_STOP_GAME, sn.StopFrameSyncBst), En.set(on.E_PUSH_TYPE_RELAY, sn.RecvFrameBst), En.set(on.E_PUSH_TYPE_JOIN_ROOM, sn.JoinRoomBst), En.set(on.E_PUSH_TYPE_LEAVE_ROOM, sn.LeaveRoomBst), En.set(on.E_PUSH_TYPE_DISMISS_ROOM, sn.DismissRoomBst), En.set(on.E_PUSH_TYPE_MODIFY_ROOM_PROPERTY, sn.ChangeRoomBst), En.set(on.E_PUSH_TYPE_REMOVE_PLAYER, sn.RemovePlayerBst), En.set(on.E_PUSH_TYPE_PLAYER_STATE, sn.ChangeCustomPlayerStatusBst), En.set(on.E_PUSH_TYPE_MODIFY_ROOM_PLAYER_PROFILE, sn.ChangeRoomPlayerProfileBst), En.set(on.E_PUSH_TYPE_NETWORK_STATE, sn.ChangePlayerNetworkStateBst), En.set(on.E_PUSH_TYPE_MATCH_TIMEOUT, sn.MatchTimeoutBst), En.set(on.E_PUSH_TYPE_MATCH_SUCCESS, sn.MatchPlayersBst), En.set(on.E_PUSH_TYPE_MATCH_CANCEL, sn.CancelMatchBst), En.set(on.E_PUSH_TYPE_JOIN_GROUP, sn.JoinGroupBst), En.set(on.E_PUSH_TYPE_LEAVE_GROUP, sn.LeaveGroupBst), En.set(on.E_PUSH_TYPE_DISMISS_GROUP, sn.DismissGroupBst), En.set(on.E_PUSH_TYPE_MODIFY_GROUP_PROPERTY, sn.ChangeGroupBst), En.set(on.E_PUSH_TYPE_REMOVE_GROUP_PLAYER, sn.RemoveGroupPlayerBst), En.set(on.E_PUSH_TYPE_GROUP_PLAYER_STATE, sn.ChangeCustomGroupPlayerStatusBst), En.set(on.E_PUSH_TYPE_MODIFY_GROUP_PLAYER_PROFILE, sn.ChangeGroupPlayerProfileBst), En.set(on.E_PUSH_TYPE_GROUP_CHAT, sn.RecvFromGroupClientBst), function (e) {
      e.batch = "e6", e.batchTest = "e6_test";
    }(pn || (pn = {}));
    var Rn = {
      onPingTime: function onPingTime(e) {
        return null;
      },
      onFitFrameTime: function onFitFrameTime(e) {
        return null;
      },
      onBstFrameRate: function onBstFrameRate(e) {
        return null;
      },
      onRenderFrameRate: function onRenderFrameRate(e) {
        return null;
      }
    };
    var mn = {
      get id() {
        return Ye.getInfo().id;
      },

      get openId() {
        return Ge.openId;
      },

      get name() {
        return Ye.getInfo().name;
      },

      get teamId() {
        return Ye.getInfo().teamId;
      },

      get customPlayerStatus() {
        return Ye.getInfo().customPlayerStatus;
      },

      get customProfile() {
        return Ye.getInfo().customProfile;
      },

      get commonNetworkState() {
        return Ye.getInfo().commonNetworkState;
      },

      get relayNetworkState() {
        return Ye.getInfo().relayNetworkState;
      }

    };

    function gn() {
      return Be.getServerTime_UTC_8();
    }

    function yn(e) {
      return (1e6 * gn() + Math.floor(1e6 * Math.random())).toString(e) || "";
    }

    function Sn() {
      On.conf.getLocation && Xe.getLocation({
        type: On.conf.locationType || "wgs84",
        success: function success(e) {
          Xe.setStorageSync(On.prefix + On.lt, JSON.stringify(e));
        }
      });
    }

    function In() {
      On.conf.getUserInfo && Xe.getUserInfo({
        withCredentials: !1,
        success: function success(e) {
          var t = e.userInfo;
          t.nickName = encodeURIComponent(t.nickName), Xe.setStorageSync(On.prefix + On.ui, JSON.stringify(t));
        },
        fail: function fail(e) {}
      });
    }

    function Cn(e, t, n, r, i) {
      (!t || void 0 === t || 0 >= t) && (t = gn());
      var o = [{
        type: 2,
        data: {
          id: yn(32),
          start: t,
          status: e,
          duration: n || 0,
          events: r || []
        }
      }],
          s = Xe.getSystemInfoSync(),
          a = {
        deviceId: function () {
          var e = Xe.getStorageSync(On.prefix + On.u);
          return e || (e = yn(36), Xe.setStorageSync(On.prefix + On.u, e)), e;
        }(),
        appkey: On.conf.appKey,
        versionCode: On.conf.version,
        initTime: t,
        channelID: On.conf.channelId,
        sdkVersion: On.sdkVersion,
        pixel: void 0 === s.screenWidth ? "" : s.screenWidth + "*" + s.screenHeight + "*" + s.pixelRatio,
        language: s.language,
        model: encodeURIComponent(s.model),
        wxVersion: s.version,
        networkType: Xe.getStorageSync(On.prefix + On.nt) || "4g",
        system: encodeURIComponent(s.system),
        platform: encodeURIComponent(s.platform),
        windowArea: void 0 === s.windowWidth ? "" : s.windowWidth + "*" + s.windowHeight + "*" + s.pixelRatio,
        opid: On.opid,
        unid: On.unid,
        userInfo: On.conf.getUserInfo && Xe.getStorageSync(On.prefix + On.ui) || "",
        location: On.conf.getLocation && Xe.getStorageSync(On.prefix + On.lt) || "",
        msgs: o
      };
      Xe.request({
        url: On.serverUrl,
        data: a,
        method: "POST",
        success: function success() {
          return i && i(!0);
        },
        fail: function fail() {
          return i && i(!1);
        }
      });
    }

    var On = {
      serverUrl: null,
      opid: null,
      unid: null,
      conf: {
        appKey: "MA0NCELB39H5S6",
        version: "1.0.0",
        channelId: "",
        getLocation: !1,
        getUserInfo: !1,
        isDebug: !1,
        locationType: void 0
      },
      prefix: "beacon_",
      sdkVersion: "weapp_v1.0.7",
      u: "u",
      ui: "ui",
      lt: "lt",
      nt: "nt",
      oik: "oik",
      uik: "uik",
      atl: 0,
      ats: 0,
      ptl: 0,
      pts: 0,
      init: function init() {
        var e;
        On.conf.appKey && void 0 !== On.conf.appKey && On.conf.appKey.length > 0 && On.conf.version && void 0 !== On.conf.version && On.conf.version.length > 0 && (On.serverUrl = "https://" + (On.conf.isDebug ? "jrlts" : "report") + ".wxlagame.com/analytics/upload?tp=weapp", Sn(), In(), Xe.getNetworkType({
          success: function success(e) {
            Xe.setStorageSync(On.prefix + On.nt, e.networkType);
          }
        }), On.opid = Xe.getStorageSync(On.prefix + On.oik), On.unid = Xe.getStorageSync(On.prefix + On.uik), this.atl = gn(), 1, (!(e = this.atl) || void 0 === e || 0 >= e) && (e = gn()), Cn(1, e, 0, []));
      },
      onEvent: function onEvent(e, t, n) {
        var r = gn();
        Cn(4, r, 0, [{
          count: 1,
          start: r,
          name: e,
          params: t || {}
        }], n);
      },
      onEvents: function onEvents(e, t) {
        var n = gn(),
            r = [];
        e.forEach(function (e) {
          r.push({
            count: 1,
            start: n,
            name: e.eventName,
            params: e.param || {}
          });
        }), r.length > 0 && Cn(4, n, 0, r, t);
      },
      setAppKey: function setAppKey(e) {
        On.conf.appKey = e;
      },
      setChannelId: function setChannelId(e) {
        On.conf.channelId = e;
      },
      setOpenid: function setOpenid(e) {
        e && e.length > 0 && (On.opid = e, Xe.setStorageSync(On.prefix + On.oik, e));
      },
      setUnionid: function setUnionid(e) {
        e && e.length > 0 && (On.unid = e, Xe.setStorageSync(On.prefix + On.uik, e));
      },
      setGetLocation: function setGetLocation(e) {
        On.conf.getLocation = !0 === e, !0 === e && Sn();
      },
      setGetUserInfo: function setGetUserInfo(e) {
        On.conf.getUserInfo = !0 === e, !0 === e && In();
      }
    },
        Tn = {
      lastFrameTime: 0,
      deltaTime: 0,
      roomId: "",
      frameId: 0,
      trigger: function trigger(e, t) {
        var n = Date.now(),
            r = Tn.roomId,
            i = Tn.frameId;
        Tn.roomId = e, Tn.frameId = t, 0 !== Tn.lastFrameTime && r === e && i + 1 === t ? (Tn.deltaTime = n - Tn.lastFrameTime, Rn.onBstFrameRate && Rn.onBstFrameRate(Tn.deltaTime), function (e, t) {
          if (!Pn || Nn.disableReport || Nn.disableFrameReport || t < 0) return;
          var n = "{\"reFt\":".concat(t, ",\"frRt\":").concat(Dn.frameRate, ",\"start\":\"").concat(Ln(), "\"").concat(e ? ",\"rid\":\"".concat(e + "", "\"") : "", "}");
          Mn.e5.push(n);
        }(e, Tn.deltaTime), Tn.lastFrameTime = n) : Tn.lastFrameTime = n;
      },
      clear: function clear() {
        Tn.lastFrameTime = 0, Tn.deltaTime = 0, Tn.roomId = "", Tn.frameId = 0;
      }
    },
        An = n(2);
    var Pn = !1,
        Mn = {
      e2: [],
      e5: []
    },
        vn = Date.now(),
        Nn = {
      reportInterval: 1e4,
      disableReport: !1,
      disableFrameReport: !1,
      disableReqReport: !1,
      minReportSize: 10
    };

    function Ln() {
      var e = 60 * (new Date().getTimezoneOffset() + 480) * 1e3,
          t = new Date(Be.getServerTime_UTC_8() + e),
          n = function n(e) {
        return e < 10 ? "0" + e : e + "";
      };

      return "".concat(t.getFullYear(), "-").concat(n(t.getMonth() + 1), "-").concat(n(t.getDate()), " ").concat(n(t.getHours()), ":").concat(n(t.getMinutes()), ":").concat(n(t.getSeconds()));
    }

    function bn() {
      Tn.clear(), vn = Date.now();
    }

    setInterval(function () {
      Pn && Mn.e2.length + Mn.e5.length > Nn.minReportSize && function () {
        if (!Fe.isInited()) return;
        var e = {};
        e.sv = An.version || "", e.pi = mn.id || "", e.gi = Ge.gameId || "", e.sc = ze || 0, e.es = "{\"e2\":[".concat(Mn.e2.join(","), "],\"e5\":[").concat(Mn.e5.join(","), "]}"), On.onEvents([{
          eventName: pn.batch,
          param: e
        }], function () {
          return null;
        }), Mn = {
          e2: [],
          e5: []
        };
      }();
    }, Nn.reportInterval);
    var Dn = {
      lastTime: 0,
      frameRate: 0,
      callback: function callback(e) {
        return null;
      },
      run: function run(e) {
        Dn.callback && Dn.callback(e), "function" == typeof requestAnimationFrame && requestAnimationFrame(Dn.run);
      }
    };
    Dn.callback = function (e) {
      if (0 === Dn.lastTime) return void (Dn.lastTime = e);
      var t = e,
          n = t - Dn.lastTime,
          r = Math.round(1e3 / (n + 1e-6));
      Dn.frameRate = r, Dn.lastTime = t, Rn.onRenderFrameRate && Rn.onRenderFrameRate(n);
    }, Dn.run(0);
    var wn = Math.pow(2, 12);

    function Gn(e) {
      var t = !1;
      return [Pe.EC_ACCESS_CMD_GET_TOKEN_ERR, Pe.EC_ACCESS_CMD_TOKEN_PRE_EXPIRE, Pe.EC_ACCESS_CMD_INVALID_TOKEN, Pe.EC_ACCESS_GET_COMM_CONNECT_ERR].includes(e) && (t = !0), t;
    }

    function Un(e) {
      var t = !1;
      return [Pe.EC_ACCESS_GET_RELAY_CONNECT_ERR].includes(e) && (t = !0), t;
    }

    var Yn,
        Fn = /*#__PURE__*/function (_Xt) {
      _inherits(Fn, _Xt);

      var _super = _createSuper(Fn);

      function Fn() {
        _classCallCheck(this, Fn);

        return _super.apply(this, arguments);
      }

      _createClass(Fn, [{
        key: "sendRequest",
        value: function sendRequest(e, t, n, r, i) {
          var _this8 = this;

          var o = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : "";

          if (!o) {
            o = function () {
              var e = Et.encode(dt++);
              return dt >= Number.MAX_SAFE_INTEGER && (dt = 1), e;
            }();

            var _s4 = {
              time: Date.now(),
              isSocketSend: !1,
              cmd: t,
              response: function response(e) {
                n(!0, e, r), _this8.deleteSeqQueue(o);
              },
              resend: function resend() {
                return _this8.sendRequest(e, t, n, r, i, o);
              },
              sendSuccess: function sendSuccess() {
                this.isSocketSend = !0;
              },
              sendFail: function sendFail(e) {
                var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
                n(!1, {
                  RspWrap1: {
                    seq: o,
                    body: null,
                    errCode: e,
                    errMsg: "\u6D88\u606F\u53D1\u9001\u5931\u8D25 [".concat(e, "]")
                  },
                  RspWrap2: null,
                  body: null
                }, r), _this8.deleteSeqQueue(o);
              },
              remove: function remove() {
                return _this8.deleteSeqQueue(o);
              }
            };
            this.addSeqQueue(o, _s4);
          }

          var s = Object.assign({}, De, {
            cmd: i,
            seq: o,
            body: null
          }),
              a = {
            cmd: t,
            body: null
          };

          var _ = new Uint8Array([]);

          try {
            _ = function (e, t, n) {
              var r = t.cmd,
                  i = an.get(r);
              if (!i || !i.bufferify) throw new Error("找不到该 cmd 编码方法: " + r);
              var o = i.bufferify(n),
                  s = dn.bufferify(Object.assign({}, t, {
                body: o
              }));
              return ln.bufferify(Object.assign({}, e, {
                body: s
              }));
            }(s, a, e);
          } catch (e) {
            var _t13 = Pe.EC_SDK_ENCODE_PARAM_FAIL,
                _n12 = e + "",
                _r9 = Xt.sendQueue.get(o);

            return setTimeout(function () {
              return _r9 && _r9.sendFail(_t13, _n12);
            }, 0), o;
          }

          if (_.length > wn) {
            var _e10 = Xt.sendQueue.get(o);

            return setTimeout(function () {
              return _e10 && _e10.sendFail(Pe.EC_SDK_SEND_FAIL, "数据长度超限");
            }, 0), o;
          }

          var E = this.buildData(_);
          return this.send(E, o, t);
        }
      }, {
        key: "buildData",
        value: function buildData(e) {
          var t = new Uint8Array(1),
              n = new Uint8Array(1);
          return t[0] = jt.CLIENT_PRE, n[0] = jt.CLIENT_END, _get(_getPrototypeOf(Fn.prototype), "buildData", this).call(this, t, e, n);
        }
      }, {
        key: "handleMessage",
        value: function handleMessage(e) {
          var t = function (e, t) {
            var n = un.objectify(e),
                r = hn.objectify(n.body),
                i = function (e) {
              var t = Xt.sendQueue.get(e);
              if (t) return t.cmd;
            }(n.seq);

            if (!i) return null;
            var o = null;

            var s = _n.get(i);

            if (!s || !s.objectify) return console.error("找不到该 cmd 解码方法: " + i), {
              RspWrap1: n,
              RspWrap2: r,
              body: o
            };
            r.body && (o = s.objectify(r.body));

            var _nn = nn(n.errCode, n.errMsg),
                a = _nn.errCode,
                _ = _nn.errMsg;

            return n.errMsg = _, n.errCode = a, n.body = null, r.body = null, {
              RspWrap1: n,
              RspWrap2: r,
              body: o
            };
          }(e);

          if (!t || !t.RspWrap1 || !t.RspWrap1.seq) return;
          var n = Xt.sendQueue.get(t.RspWrap1.seq);
          return n && (function (e, t) {
            if (!Pn || Nn.disableReport || Nn.disableReqReport || e.time < 0) return;
            if (t < vn) return;
            e && e.rqCmd === He.E_CMD_HEART_BEAT_REQ && Rn.onPingTime && Rn.onPingTime(e.time);
            var n = Ln(),
                r = "{\"rqCd\":".concat(e.rqCd, ",\"rqSq\":\"").concat(e.rqSq, "\",\"rqCmd\":").concat(e.rqCmd, ",\"time\":").concat(e.time, ",\"start\":\"").concat(n, "\"}");
            Mn.e2.push(r);
          }({
            rqCmd: n.cmd,
            rqSq: t.RspWrap1.seq,
            rqCd: t.RspWrap1.errCode,
            time: Date.now() - n.time
          }, n.time), n.cmd === He.E_CMD_HEART_BEAT_REQ || !this.handleErrCode(t.RspWrap1)) ? n.response(t) : void 0;
        }
      }, {
        key: "handleResponse",
        value: function handleResponse(e) {
          return this.handleMessage(e);
        }
      }, {
        key: "handleErrCode",
        value: function handleErrCode(e) {
          return Gn(e.errCode) ? (this.handleTokenErr(), ot.log("TOKEN_ERROR", e), !0) : !(!Un(e.errCode) || this.socket.id !== o.ConnectionType.RELAY || (this.handleRelayConnectErr(), ot.log("RELAY_CONNECT_ERROR", e), 0));
        }
      }, {
        key: "handleSuccess",
        value: function handleSuccess(e, t) {
          e === Pe.EC_OK && t();
        }
      }, {
        key: "handleTokenErr",
        value: function handleTokenErr() {
          ke.setStatus(ke.StatusType.LOGOUT), this.socket.emit(Bt.autoAuth, {});
        }
      }, {
        key: "handleRelayConnectErr",
        value: function handleRelayConnectErr() {
          qe.setStatus(qe.StatusType.OFFLINE), this.socket.emit(Bt.autoAuth, {});
        }
      }]);

      return Fn;
    }(Xt),
        kn = /*#__PURE__*/function (_Xt2) {
      _inherits(kn, _Xt2);

      var _super2 = _createSuper(kn);

      function kn() {
        _classCallCheck(this, kn);

        return _super2.call(this);
      }

      _createClass(kn, [{
        key: "buildData",
        value: function buildData(e) {
          var t = new Uint8Array(1),
              n = new Uint8Array(1);
          return t[0] = jt.SERVER_PRE, n[0] = jt.SERVER_END, _get(_getPrototypeOf(kn.prototype), "buildData", this).call(this, t, e, n);
        }
      }, {
        key: "handleMessage",
        value: function handleMessage(e) {
          var t = function (e) {
            var t = cn.objectify(e),
                n = fn.objectify(t.body);
            var r = null;
            var i = En.get(n.type);
            return i && i.objectify ? (n.msg && (r = i.objectify(n.msg)), t.body = null, n.msg = null, {
              BstWrap1: t,
              BstWrap2: n,
              body: r
            }) : (console.error("找不到该 push 解码方法: " + n.type), {
              BstWrap1: t,
              BstWrap2: n,
              body: r
            });
          }(e),
              n = Xt.broadcastHandlers.get(t.BstWrap2.type);

          n && n(t.body, t.BstWrap1.seq);
        }
      }, {
        key: "handleBroadcast",
        value: function handleBroadcast(e) {
          return this.handleMessage(e);
        }
      }]);

      return kn;
    }(Xt);

    !function (e) {
      e.comm = "comm_cmd", e.relay = "relay_cmd";
    }(Yn || (Yn = {}));
    var qn = [o.ClientSendServerReqWrap2Cmd.E_CMD_CREATE_ROOM_REQ, o.ClientSendServerReqWrap2Cmd.E_CMD_JOIN_ROOM_REQ, o.ClientSendServerReqWrap2Cmd.E_CMD_QUIT_ROOM_REQ, o.ClientSendServerReqWrap2Cmd.E_CMD_DISSMISS_ROOM_REQ, o.ClientSendServerReqWrap2Cmd.E_CMD_CHANGE_ROOM_PROPERTIS_REQ, o.ClientSendServerReqWrap2Cmd.E_CMD_REMOVE_MEMBER_REQ, o.ClientSendServerReqWrap2Cmd.E_CMD_CHANGE_PLAYER_STATE_REQ, o.ClientSendServerReqWrap2Cmd.E_CMD_START_FRAME_SYNC_REQ, o.ClientSendServerReqWrap2Cmd.E_CMD_STOP_FRAME_SYNC_REQ];

    var Hn = /*#__PURE__*/function () {
      function Hn(e) {
        _classCallCheck(this, Hn);

        this.client = new Fn(), this.server = new kn(), this.bstCallbacks = e;
      }

      _createClass(Hn, [{
        key: "bindSocket",
        value: function bindSocket(e) {
          var t = this.client.handleResponse.bind(this.client),
              n = this.server.handleBroadcast.bind(this.server);
          this.client.bindSocket(e, t, n), this.server.bindSocket(e, t, n);
        }
      }, {
        key: "unbindSocket",
        value: function unbindSocket() {
          this.client.unbindSocket(), this.server.unbindSocket();
        }
      }, {
        key: "setBroadcastHandler",
        value: function setBroadcastHandler(e, t) {
          this.server.setBroadcastHandler(e, t);
        }
      }, {
        key: "send",
        value: function send(e, t, n, r) {
          var i = Yn.comm;
          this.client.socket.id === o.ConnectionType.RELAY && (i = Yn.relay);
          var s = {
            body: e,
            subcmd: t,
            response: n,
            callback: r,
            requestCmd: i,
            running: !1
          };
          var a = null;
          return t === o.ClientSendServerReqWrap2Cmd.E_CMD_CHECK_LOGIN_REQ && (a = Hn.checkLoginQueue, s.beforeRequest = function () {
            qe.setStatus(qe.StatusType.CHECKING);
          }, s.afterRequest = function (e) {
            ot.log("CHECKLOGIN", e);
          }), qn.includes(t) && (a = Hn.roomQueue), a ? this.pushQueue(s, a) : this.sendRequest(s);
        }
      }, {
        key: "pushQueue",
        value: function pushQueue(e, t) {
          var _this9 = this;

          var n = e.callback;
          return e.callback = function (r, i, o, s) {
            n && n(r, i, o, s), e.running = !1, t.shift(), _this9.sendQueue(t);
          }, t.push(e), this.sendQueue(t);
        }
      }, {
        key: "sendQueue",
        value: function sendQueue(e) {
          if (!Array.isArray(e) || 0 === e.length || e[0].running) return "NO_SEQ";
          var t = e[0];
          return this.sendRequest(t);
        }
      }, {
        key: "sendRequest",
        value: function sendRequest(e) {
          e.running = !0, e.beforeRequest && e.beforeRequest();
          var t = this.client.sendRequest(e.body, e.subcmd, e.response, e.callback, e.requestCmd);
          return e.afterRequest && e.afterRequest(t), t;
        }
      }], [{
        key: "startQueueLoop",
        value: function startQueueLoop() {
          Hn.checkLoginQueue = [], Hn.roomQueue = [], Xt.startQueueLoop();
        }
      }, {
        key: "stopQueueLoop",
        value: function stopQueueLoop() {
          Hn.checkLoginQueue = [], Hn.roomQueue = [], Xt.stopQueueLoop();
        }
      }]);

      return Hn;
    }();

    Hn.checkLoginQueue = [], Hn.roomQueue = [];

    var xn = Hn,
        Bn = /*#__PURE__*/function (_xn) {
      _inherits(Bn, _xn);

      var _super3 = _createSuper(Bn);

      function Bn(e) {
        var _this10;

        _classCallCheck(this, Bn);

        _this10 = _super3.call(this, e), _this10.matchTimeoutBroadcastType = o.ServerSendClientBstWrap2Type.E_PUSH_TYPE_MATCH_TIMEOUT, _this10.matchUsersBroadcastType = o.ServerSendClientBstWrap2Type.E_PUSH_TYPE_MATCH_SUCCESS, _this10.cancelMatchBroadcastType = o.ServerSendClientBstWrap2Type.E_PUSH_TYPE_MATCH_CANCEL, _this10.setBroadcastHandler(_this10.matchTimeoutBroadcastType, _this10.matchUsersTimeoutBroadcast.bind(_assertThisInitialized(_this10))), _this10.setBroadcastHandler(_this10.matchUsersBroadcastType, _this10.matchUsersBroadcast.bind(_assertThisInitialized(_this10))), _this10.setBroadcastHandler(_this10.cancelMatchBroadcastType, _this10.cancelMatchBroadcast.bind(_assertThisInitialized(_this10)));
        return _this10;
      }

      _createClass(Bn, [{
        key: "matchUsersComplex",
        value: function matchUsersComplex(e, t) {
          var n = He.E_CMD_MATCH_PLAYER_COMPLEX_REQ,
              r = this.send(e, n, this.matchUsersComplexResponse.bind(this), t);
          return ot.log("MATCH_USERS_COMPLEX_Para", e, r), r;
        }
      }, {
        key: "matchGroup",
        value: function matchGroup(e, t) {
          var n = He.E_CMD_MATCH_GROUP_REQ,
              r = this.send(e, n, this.matchGroupResponse.bind(this), t);
          return ot.log("MATCH_GROUP_Para", e, r), r;
        }
      }, {
        key: "matchRoom",
        value: function matchRoom(e, t) {
          var n = He.E_CMD_MATCH_ROOM_SIMPLE_REQ,
              r = this.send(e, n, this.matchRoomResponse.bind(this), t);
          return ot.log("MATCH_ROOM_Para", e, r), r;
        }
      }, {
        key: "cancelMatch",
        value: function cancelMatch(e, t) {
          var n = He.E_CMD_MATCH_CANCEL_MATCH_REQ,
              r = this.send(e, n, this.cancelMatchResponse.bind(this), t);
          return ot.log("CANCEL_MATCH_Para", e, r), r;
        }
      }, {
        key: "matchUsersComplexResponse",
        value: function matchUsersComplexResponse(e, t, n) {
          var r = t.RspWrap1,
              i = {
            code: r.errCode,
            msg: r.errMsg,
            seq: r.seq,
            data: t.body
          };
          ot.log("matchPlayersRsp", i), n && n(i);
        }
      }, {
        key: "matchGroupResponse",
        value: function matchGroupResponse(e, t, n) {
          var r = t.RspWrap1,
              i = {
            code: r.errCode,
            msg: r.errMsg,
            seq: r.seq,
            data: t.body
          };
          ot.log("matchGroupRsp", i), n && n(i);
        }
      }, {
        key: "matchRoomResponse",
        value: function matchRoomResponse(e, t, n) {
          var r = t.RspWrap1,
              i = {
            code: r.errCode,
            msg: r.errMsg,
            seq: r.seq,
            data: t.body
          };
          ot.log("matchRoomSimpleRsp", i), n && n(i);
        }
      }, {
        key: "cancelMatchResponse",
        value: function cancelMatchResponse(e, t, n) {
          var r = t.RspWrap1,
              i = {
            code: r.errCode,
            msg: r.errMsg,
            seq: r.seq,
            data: t.body
          };
          ot.log("cancelPlayerMatchRsp", i), n && n(i);
        }
      }, {
        key: "matchUsersTimeoutBroadcast",
        value: function matchUsersTimeoutBroadcast(e, t) {
          var n = {
            data: e,
            seq: t
          };
          return this.bstCallbacks.room.onMatchTimeout(n);
        }
      }, {
        key: "matchUsersBroadcast",
        value: function matchUsersBroadcast(e, t) {
          var n = {
            data: e,
            seq: t
          };
          return this.bstCallbacks.room.onMatchPlayers(n);
        }
      }, {
        key: "cancelMatchBroadcast",
        value: function cancelMatchBroadcast(e, t) {
          var n = {
            data: e,
            seq: t
          };
          return this.bstCallbacks.room.onCancelMatch(n);
        }
      }]);

      return Bn;
    }(xn),
        Vn = /*#__PURE__*/function (_xn2) {
      _inherits(Vn, _xn2);

      var _super4 = _createSuper(Vn);

      function Vn(e) {
        var _this11;

        _classCallCheck(this, Vn);

        _this11 = _super4.call(this, e), _this11.joinRoomBroadcastType = o.ServerSendClientBstWrap2Type.E_PUSH_TYPE_JOIN_ROOM, _this11.leaveRoomBroadcastType = o.ServerSendClientBstWrap2Type.E_PUSH_TYPE_LEAVE_ROOM, _this11.dismissRoomBroadcastType = o.ServerSendClientBstWrap2Type.E_PUSH_TYPE_DISMISS_ROOM, _this11.changeRoomBroadcastType = o.ServerSendClientBstWrap2Type.E_PUSH_TYPE_MODIFY_ROOM_PROPERTY, _this11.removeUserBroadcastType = o.ServerSendClientBstWrap2Type.E_PUSH_TYPE_REMOVE_PLAYER, _this11.changeCustomPlayerStatusBroadcastType = o.ServerSendClientBstWrap2Type.E_PUSH_TYPE_PLAYER_STATE, _this11.changeRoomPlayerProfileBroadcastType = o.ServerSendClientBstWrap2Type.E_PUSH_TYPE_MODIFY_ROOM_PLAYER_PROFILE, _this11.roomUserNetworkBroadcastType = o.ServerSendClientBstWrap2Type.E_PUSH_TYPE_NETWORK_STATE, _this11.setBroadcastHandler(_this11.joinRoomBroadcastType, _this11.onJoinRoom.bind(_assertThisInitialized(_this11))), _this11.setBroadcastHandler(_this11.leaveRoomBroadcastType, _this11.onLeaveRoom.bind(_assertThisInitialized(_this11))), _this11.setBroadcastHandler(_this11.dismissRoomBroadcastType, _this11.onDismissRoom.bind(_assertThisInitialized(_this11))), _this11.setBroadcastHandler(_this11.changeRoomBroadcastType, _this11.onChangeRoom.bind(_assertThisInitialized(_this11))), _this11.setBroadcastHandler(_this11.removeUserBroadcastType, _this11.onRemoveUser.bind(_assertThisInitialized(_this11))), _this11.setBroadcastHandler(_this11.changeCustomPlayerStatusBroadcastType, _this11.onChangeCustomPlayerStatus.bind(_assertThisInitialized(_this11))), _this11.setBroadcastHandler(_this11.changeRoomPlayerProfileBroadcastType, _this11.onChangeRoomPlayerProfile.bind(_assertThisInitialized(_this11))), _this11.setBroadcastHandler(_this11.roomUserNetworkBroadcastType, _this11.onChangePlayerNetworkState.bind(_assertThisInitialized(_this11)));
        return _this11;
      }

      _createClass(Vn, [{
        key: "createRoom",
        value: function createRoom(e, t) {
          var n = He.E_CMD_CREATE_ROOM_REQ,
              r = this.send(e, n, this.createRoomResponse.bind(this), t);
          return ot.log("CREATE_ROOM_Para", e, r), r;
        }
      }, {
        key: "joinRoom",
        value: function joinRoom(e, t) {
          var n = He.E_CMD_JOIN_ROOM_REQ,
              r = this.send(e, n, this.joinRoomResponse.bind(this), t);
          return ot.log("JOIN_ROOM_Para", e, r), r;
        }
      }, {
        key: "leaveRoom",
        value: function leaveRoom(e, t) {
          var n = He.E_CMD_QUIT_ROOM_REQ,
              r = this.send(e, n, this.leaveRoomResponse.bind(this), t);
          return ot.log("LEAVE_ROOM_Para", e, r), r;
        }
      }, {
        key: "dismissRoom",
        value: function dismissRoom(e, t) {
          var n = He.E_CMD_DISSMISS_ROOM_REQ,
              r = this.send(e, n, this.dismissRoomResponse.bind(this), t);
          return ot.log("DISMISS_ROOM_Para", e, r), r;
        }
      }, {
        key: "changeRoom",
        value: function changeRoom(e, t) {
          var n = He.E_CMD_CHANGE_ROOM_PROPERTIS_REQ,
              r = this.send(e, n, this.changeRoomResponse.bind(this), t);
          return ot.log("CHANGE_ROOM_Para", e, r), r;
        }
      }, {
        key: "removeUser",
        value: function removeUser(e, t) {
          var n = He.E_CMD_REMOVE_MEMBER_REQ,
              r = this.send(e, n, this.removeUserResponse.bind(this), t);
          return ot.log("REMOVE_USER_Para", e, r), r;
        }
      }, {
        key: "getRoomByRoomId",
        value: function getRoomByRoomId(e, t) {
          var n = He.E_CMD_GET_ROOM_DETAIL_REQ,
              r = this.send(e, n, this.getRoomByRoomIdRsp().bind(this), t);
          return ot.log("GET_ROOM_BY_ROOM_ID_Para", e, r), r;
        }
      }, {
        key: "getRoomList",
        value: function getRoomList(e, t) {
          var n = He.E_CMD_GET_ROOM_LIST_V2_REQ,
              r = this.send(e, n, this.getRoomListResponse.bind(this), t);
          return ot.log("GET_ROOM_LIST_Para", e, r), r;
        }
      }, {
        key: "createRoomResponse",
        value: function createRoomResponse(e, t, n) {
          var r = t.RspWrap1,
              i = {
            code: r.errCode,
            msg: r.errMsg,
            seq: r.seq,
            data: t.body
          };
          ot.log("createRoomRsp", i), n && n(i);
        }
      }, {
        key: "joinRoomResponse",
        value: function joinRoomResponse(e, t, n) {
          var r = t.RspWrap1,
              i = {
            code: r.errCode,
            msg: r.errMsg,
            seq: r.seq,
            data: t.body
          };
          ot.log("joinRoomRsp", i), n && n(i);
        }
      }, {
        key: "leaveRoomResponse",
        value: function leaveRoomResponse(e, t, n) {
          var r = t.RspWrap1,
              i = {
            code: r.errCode,
            msg: r.errMsg,
            seq: r.seq,
            data: t.body
          };
          ot.log("leaveRoomRsp", i), n && n(i);
        }
      }, {
        key: "dismissRoomResponse",
        value: function dismissRoomResponse(e, t, n) {
          var r = t.RspWrap1,
              i = {
            code: r.errCode,
            msg: r.errMsg,
            seq: r.seq,
            data: t.body
          };
          ot.log("dismissRoomRsp", i), n && n(i);
        }
      }, {
        key: "changeRoomResponse",
        value: function changeRoomResponse(e, t, n) {
          var r = t.RspWrap1,
              i = {
            code: r.errCode,
            msg: r.errMsg,
            seq: r.seq,
            data: t.body
          };
          ot.log("changeRoomRsp", i), n && n(i);
        }
      }, {
        key: "removeUserResponse",
        value: function removeUserResponse(e, t, n) {
          var r = t.RspWrap1,
              i = {
            code: r.errCode,
            msg: r.errMsg,
            seq: r.seq,
            data: t.body
          };
          ot.log("removePlayerRsp", i), n && n(i);
        }
      }, {
        key: "getRoomByRoomIdRsp",
        value: function getRoomByRoomIdRsp() {
          return function (e, t, n) {
            var r = t.RspWrap1,
                i = {
              code: r.errCode,
              msg: r.errMsg,
              seq: r.seq,
              data: t.body
            };
            ot.log("getRoomByRoomIdRsp", i), n && n(i);
          };
        }
      }, {
        key: "getRoomListResponse",
        value: function getRoomListResponse(e, t, n) {
          var r = t.RspWrap1,
              i = {
            code: r.errCode,
            msg: r.errMsg,
            seq: r.seq,
            data: t.body
          };
          ot.log("getRoomListRsp", i), n && n(i);
        }
      }, {
        key: "onJoinRoom",
        value: function onJoinRoom(e, t) {
          var n = {
            data: e,
            seq: t
          };
          return this.bstCallbacks.room.onJoinRoom(n);
        }
      }, {
        key: "onLeaveRoom",
        value: function onLeaveRoom(e, t) {
          var n = {
            data: e,
            seq: t
          };
          return this.bstCallbacks.room.onLeaveRoom(n);
        }
      }, {
        key: "onDismissRoom",
        value: function onDismissRoom(e, t) {
          var n = {
            data: e,
            seq: t
          };
          return this.bstCallbacks.room.onDismissRoom(n);
        }
      }, {
        key: "onChangeRoom",
        value: function onChangeRoom(e, t) {
          var n = {
            data: e,
            seq: t
          };
          return this.bstCallbacks.room.onChangeRoom(n);
        }
      }, {
        key: "onRemoveUser",
        value: function onRemoveUser(e, t) {
          var n = {
            data: e,
            seq: t
          };
          return this.bstCallbacks.room.onRemovePlayer(n);
        }
      }, {
        key: "onChangeCustomPlayerStatus",
        value: function onChangeCustomPlayerStatus(e, t) {
          var n = {
            data: e,
            seq: t
          };
          return this.bstCallbacks.room.onChangeCustomPlayerStatus(n);
        }
      }, {
        key: "onChangeRoomPlayerProfile",
        value: function onChangeRoomPlayerProfile(e, t) {
          var n = {
            data: e,
            seq: t
          };
          return this.bstCallbacks.room.onChangeRoomPlayerProfile(n);
        }
      }, {
        key: "onChangePlayerNetworkState",
        value: function onChangePlayerNetworkState(e, t) {
          var n = {
            data: e,
            seq: t
          };

          if (ot.log("onChangeNetworkState", n), n.data.roomInfo) {
            var _e11 = JSON.parse(JSON.stringify(n));

            delete _e11.data.groupIdList, this.bstCallbacks.room.onChangePlayerNetworkState(_e11);
          }

          if (Array.isArray(n.data.groupIdList) && n.data.groupIdList.length > 0) {
            var _e12 = JSON.parse(JSON.stringify(n));

            delete _e12.data.roomInfo, delete _e12.data.roomId, this.bstCallbacks.group.onChangeGroupPlayerNetworkState(_e12);
          }
        }
      }]);

      return Vn;
    }(xn),
        Qn = /*#__PURE__*/function () {
      function Qn(e) {
        _classCallCheck(this, Qn);

        this.netUtil1 = null, this.netUtil2 = null, this.frameBroadcastType = o.ServerSendClientBstWrap2Type.E_PUSH_TYPE_RELAY, this.startGameBroadcastType = o.ServerSendClientBstWrap2Type.E_PUSH_TYPE_START_GAME, this.stopGameBroadcastType = o.ServerSendClientBstWrap2Type.E_PUSH_TYPE_STOP_GAME, this.sendMessageExtBroadcastType = o.ServerSendClientBstWrap2Type.E_PUSH_TYPE_GAMESVR, this.bstCallbacks = e, this.netUtil1 = new xn(e), this.netUtil2 = new xn(e), this.netUtil1.setBroadcastHandler(this.startGameBroadcastType, this.onStartFrameSync.bind(this)), this.netUtil1.setBroadcastHandler(this.stopGameBroadcastType, this.onStopFrameSync.bind(this)), this.netUtil2.setBroadcastHandler(this.frameBroadcastType, this.onRecvFrame.bind(this)), this.netUtil2.setBroadcastHandler(this.sendMessageExtBroadcastType, this.onRecvFromGameSvr.bind(this));
      }

      _createClass(Qn, [{
        key: "setFrameRoom",
        value: function setFrameRoom(e) {
          ot.log("SETFRAMEROOM", e);
          var t = this.getFrameRoom();
          this.roomInfo = e || {
            roomId: 0,
            routeId: ""
          };
          var n = t.routeId,
              r = this.roomInfo.routeId;
          return r ? n !== r ? (qe.setStatus(qe.StatusType.OFFLINE), this.autoCheckLogin()) : n === r ? this.autoCheckLogin() : void 0 : this.netUtil2.client.socket && this.netUtil2.client.socket.close();
        }
      }, {
        key: "getFrameRoom",
        value: function getFrameRoom() {
          return this.roomInfo || {
            id: 0,
            routeId: ""
          };
        }
      }, {
        key: "isRoomExist",
        value: function isRoomExist() {
          return !!this.roomInfo && !!this.roomInfo.id;
        }
      }, {
        key: "startFrameSync",
        value: function startFrameSync(e, t) {
          if (!this.isRoomExist()) {
            var _e13 = {
              RspWrap1: {
                seq: null,
                body: null,
                errCode: Pe.EC_SDK_NO_ROOM,
                errMsg: "无房间信息"
              },
              RspWrap2: null,
              body: null
            };
            return void this.startFrameSyncResponse(!1, _e13, t);
          }

          var n = He.E_CMD_START_FRAME_SYNC_REQ,
              r = this.netUtil1.send(e, n, this.startFrameSyncResponse.bind(this), t);
          return ot.log("START_FRAMESYNC_Para", e, r), r;
        }
      }, {
        key: "stopFrameSync",
        value: function stopFrameSync(e, t) {
          if (!this.isRoomExist()) {
            var _e14 = {
              RspWrap1: {
                seq: null,
                body: null,
                errCode: Pe.EC_SDK_NO_ROOM,
                errMsg: "无房间信息"
              },
              RspWrap2: null,
              body: null
            };
            return void this.stopFrameSyncResponse(!1, _e14, t);
          }

          var n = He.E_CMD_STOP_FRAME_SYNC_REQ,
              r = this.netUtil1.send(e, n, this.stopFrameSyncResponse.bind(this), t);
          return ot.log("STOP_FRAMESYNC_Para", e, r), r;
        }
      }, {
        key: "sendFrame",
        value: function sendFrame(e, t) {
          if (!this.isRoomExist()) {
            var _e15 = {
              RspWrap1: {
                seq: null,
                body: null,
                errCode: Pe.EC_SDK_NO_ROOM,
                errMsg: "无房间信息"
              },
              RspWrap2: null,
              body: null
            };
            return void this.sendFrameResponse(!1, _e15, t);
          }

          this.autoCheckLogin();
          var n = He.E_CMD_RELAY_SEND_FRAME_REQ,
              r = this.netUtil2.send(e, n, this.sendFrameResponse.bind(this), t);
          return ot.log("SEND_FRAME_Para", e, r), r;
        }
      }, {
        key: "requestFrame",
        value: function requestFrame(e, t) {
          if (!this.isRoomExist()) {
            var _e16 = {
              RspWrap1: {
                seq: null,
                body: null,
                errCode: Pe.EC_SDK_NO_ROOM,
                errMsg: "无房间信息"
              },
              RspWrap2: null,
              body: null
            };
            return void this.requestFrameResponse(!1, _e16, t);
          }

          this.autoCheckLogin();
          var n = He.E_CMD_RELAY_REQUEST_FRAME_REQ,
              r = this.netUtil2.send(e, n, this.requestFrameResponse.bind(this), t);
          return ot.log("REQUEST_FRAME_Para", e, r), r;
        }
      }, {
        key: "checkLogin",
        value: function checkLogin(e, t) {
          if (!this.isRoomExist()) {
            var _t14 = {
              RspWrap1: {
                seq: null,
                body: null,
                errCode: Pe.EC_SDK_NO_ROOM,
                errMsg: "无房间信息"
              },
              RspWrap2: null,
              body: null
            };
            return void this.checkLoginResponse(!1, _t14, e);
          }

          qe.setStatus(qe.StatusType.CHECKING);
          var n = He.E_CMD_CHECK_LOGIN_REQ,
              r = {
            token: De.authKey,
            routeId: this.roomInfo.routeId
          },
              i = this.netUtil2.send(r, n, this.checkLoginResponse.bind(this), e);
          return ot.log("CHECKLOGIN", i, t, r.routeId), qe.setRouteId(r.routeId), i;
        }
      }, {
        key: "sendMessageExt",
        value: function sendMessageExt(e, t) {
          if (!this.isRoomExist()) {
            var _e17 = {
              RspWrap1: {
                seq: null,
                body: null,
                errCode: Pe.EC_SDK_NO_ROOM,
                errMsg: "无房间信息"
              },
              RspWrap2: null,
              body: null
            };
            return void this.sendMessageExtResponse(!1, _e17, t);
          }

          this.autoCheckLogin();
          var n = He.E_CMD_RELAY_CLIENT_SENDTO_GAMESVR_REQ,
              r = this.netUtil2.send(e, n, this.sendMessageExtResponse.bind(this), t);
          return ot.log("SEND_TO_GAMESVR_Para", e, r), r;
        }
      }, {
        key: "startFrameSyncResponse",
        value: function startFrameSyncResponse(e, t, n) {
          var r = t.RspWrap1,
              i = {
            code: r.errCode,
            msg: r.errMsg,
            seq: r.seq,
            data: t.body
          };
          ot.log("startFrameSyncRsp", i), n && n(i);
        }
      }, {
        key: "stopFrameSyncResponse",
        value: function stopFrameSyncResponse(e, t, n) {
          var r = t.RspWrap1,
              i = {
            code: r.errCode,
            msg: r.errMsg,
            seq: r.seq,
            data: t.body
          };
          ot.log("stopFrameSyncRsp", i), n && n(i);
        }
      }, {
        key: "autoCheckLogin",
        value: function autoCheckLogin() {
          this.connect(), this.netUtil2.client.socket.isConnect() && qe.isOffline() && this.netUtil2.client.socket.emit(Bt.autoAuth, {});
        }
      }, {
        key: "connect",
        value: function connect() {
          !this.netUtil2.client.socket.isConnect() && this.roomInfo && (this.netUtil2.client.socket.url = Le.url + ":" + (Le.enableUDP ? 8585 : 5443), this.netUtil2.client.socket.connect("framesender connect"));
        }
      }, {
        key: "sendFrameResponse",
        value: function sendFrameResponse(e, t, n) {
          var r = t.RspWrap1,
              i = {
            code: r.errCode,
            msg: r.errMsg,
            seq: r.seq,
            data: t.body
          };
          ot.log("sendFrameRsp", i), n && n(i);
        }
      }, {
        key: "checkLoginResponse",
        value: function checkLoginResponse(e, t, n) {
          qe.setStatus(qe.StatusType.OFFLINE);
          var r = t.RspWrap1,
              i = {
            code: r.errCode,
            msg: r.errMsg,
            seq: r.seq,
            data: t.body
          };
          return i.code === Pe.EC_OK && qe.setStatus(qe.StatusType.CHECKED), ot.log("RESPONSE_CheckLoginResponse", i), n && n(i);
        }
      }, {
        key: "requestFrameResponse",
        value: function requestFrameResponse(e, t, n) {
          var r = t.RspWrap1,
              i = {
            code: r.errCode,
            msg: r.errMsg,
            seq: r.seq,
            data: t.body
          };
          ot.log("requestFrameRsp", i), n && n(i);
        }
      }, {
        key: "sendMessageExtResponse",
        value: function sendMessageExtResponse(e, t, n) {
          var r = t.RspWrap1,
              i = {
            code: r.errCode,
            msg: r.errMsg,
            seq: r.seq,
            data: t.body
          };
          ot.log("sendToGameSvrRsp", i), n && n(i);
        }
      }, {
        key: "onRecvFrame",
        value: function onRecvFrame(e, t) {
          var n = {
            data: {
              frame: Object.assign({}, e.frame, {
                roomId: this.getFrameRoom().id
              })
            },
            seq: t
          };
          return Tn.trigger(this.roomInfo.id || void 0, n.data.frame.id), this.bstCallbacks.room.onRecvFrame(n);
        }
      }, {
        key: "onStartFrameSync",
        value: function onStartFrameSync(e, t) {
          var n = {
            data: Object.assign({}, e),
            seq: t
          };
          return Tn.clear(), this.bstCallbacks.room.onStartFrameSync(n);
        }
      }, {
        key: "onStopFrameSync",
        value: function onStopFrameSync(e, t) {
          var n = {
            data: Object.assign({}, e),
            seq: t
          };
          return Tn.clear(), this.bstCallbacks.room.onStopFrameSync(n);
        }
      }, {
        key: "onRecvFromGameSvr",
        value: function onRecvFromGameSvr(e, t) {
          var n = {};

          try {
            n = JSON.parse(e.data);
          } catch (t) {
            n = e.data;
          }

          var r = {
            data: Object.assign({}, e, {
              data: n
            }, {
              roomId: e.roomId
            }),
            seq: t
          };
          return this.bstCallbacks.room.onRecvFromGameSvr(r);
        }
      }]);

      return Qn;
    }(),
        Kn = /*#__PURE__*/function (_xn3) {
      _inherits(Kn, _xn3);

      var _super5 = _createSuper(Kn);

      function Kn(e) {
        var _this12;

        _classCallCheck(this, Kn);

        _this12 = _super5.call(this, e), _this12.messageBroadcastType = o.ServerSendClientBstWrap2Type.E_PUSH_TYPE_ROOM_CHAT, _this12.setBroadcastHandler(_this12.messageBroadcastType, _this12.onRecvFromClient.bind(_assertThisInitialized(_this12)));
        return _this12;
      }

      _createClass(Kn, [{
        key: "sendMessage",
        value: function sendMessage(e, t) {
          var n = He.E_CMD_ROOM_CHAT_REQ,
              r = this.send(e, n, this.sendMessageResponse.bind(this), t);
          return ot.log("SEND_MESSAGE_Para", e, r), r;
        }
      }, {
        key: "sendMessageResponse",
        value: function sendMessageResponse(e, t, n) {
          var r = t.RspWrap1,
              i = {
            code: r.errCode,
            msg: r.errMsg,
            seq: r.seq,
            data: t.body
          };
          ot.log("sendToClientRsp", i), n && n(i);
        }
      }, {
        key: "onRecvFromClient",
        value: function onRecvFromClient(e, t) {
          var n = {
            data: e,
            seq: t
          };
          return this.bstCallbacks.room.onRecvFromClient(n);
        }
      }]);

      return Kn;
    }(xn),
        Wn = /*#__PURE__*/function (_xn4) {
      _inherits(Wn, _xn4);

      var _super6 = _createSuper(Wn);

      function Wn(e) {
        _classCallCheck(this, Wn);

        return _super6.call(this, e);
      }

      _createClass(Wn, [{
        key: "login",
        value: function login(e, t, n, r) {
          var _this13 = this;

          var i = He.E_CMD_LOGIN_REQ;
          var o, s, a;
          Array.from(this.client.queue).forEach(function (e) {
            var t = Xt.sendQueue.get(e);
            t && t.cmd === i && _this13.client.deleteSeqQueue(e);
          }), n ? (o = n.timestamp, s = n.nonce, a = n.sign) : (o = Math.floor(Date.now() / 1e3), s = Math.floor(Math.random() * (Math.pow(2, 32) - 1)), a = function (e, t, n, r, i) {
            var o = [["game_id", t], ["open_id", n], ["nonce", i], ["timestamp", r]].sort().map(function (e) {
              return e.join("=");
            }).join("&"),
                s = at(o, e || "");
            return {
              sign: st.stringify(s)
            };
          }(t, e.gameId, e.openId, o, s).sign);
          var _ = $e,
              E = ze,
              l = ht,
              d = {
            gameId: e.gameId,
            openId: e.openId,
            sign: a,
            timestamp: o,
            nonce: s,
            platform: _,
            channel: E,
            deviceId: l,
            mac: void 0,
            imei: void 0
          };
          ke.setStatus(ke.StatusType.LOGINING);
          var u = this.send(d, i, this.loginResponse.bind(this), r);
          return ot.log("LOGIN_Para", d, u), ke.setErrCode(0, ""), u;
        }
      }, {
        key: "logout",
        value: function logout(e, t) {
          var n = He.E_CMD_LOGOUT_REQ,
              r = this.send(e, n, this.logoutResponse.bind(this), t);
          return ot.log("LOGOUT_Para", e, r), ke.setStatus(ke.StatusType.LOGOUTING), r;
        }
      }, {
        key: "changeCustomPlayerStatus",
        value: function changeCustomPlayerStatus(e, t) {
          var n = He.E_CMD_CHANGE_PLAYER_STATE_REQ,
              r = this.send(e, n, this.changeCustomPlayerStatusResponse.bind(this), t);
          return ot.log("CHANGE_USER_STATE_Para", e, r), r;
        }
      }, {
        key: "changeRoomPlayerProfile",
        value: function changeRoomPlayerProfile(e, t) {
          var n = He.E_CMD_CHANGE_ROOM_PLAYER_PROFILE,
              r = this.send(e, n, this.changeRoomPlayerProfileResponse.bind(this), t);
          return ot.log("changeRoomPlayerProfile_Para", e, r), r;
        }
      }, {
        key: "loginResponse",
        value: function loginResponse(e, t, n) {
          e || ke.setStatus(ke.StatusType.LOGOUT);
          var r = t.RspWrap1,
              i = {
            code: r.errCode,
            msg: r.errMsg,
            seq: r.seq,
            data: t.body
          };
          this.client.handleSuccess(i.code, function () {
            De.authKey = t.body.token, De.playerId = t.body.playerId, ke.setStatus(ke.StatusType.LOGIN), !Ye.getInfo().id && Ye.setInfo({
              id: i.data.playerId
            }), Be.setServerTime(t.body.sdkConfig.serverTime);
          }), ke.setErrCode(i.code, i.msg), n && n(i), ot.log("RESPONSE_LoginResponse", i);
        }
      }, {
        key: "logoutResponse",
        value: function logoutResponse(e, t, n) {
          var r = t.RspWrap1,
              i = {
            code: r.errCode,
            msg: r.errMsg,
            seq: r.seq
          };
          return ot.log("RESPONSE_LogoutResponse", i), this.client.handleSuccess(i.code, function () {
            De.authKey = void 0, De.playerId = void 0, ke.setStatus(ke.StatusType.LOGOUT), Ye.setInfo({
              id: void 0
            });
          }), n && n(i);
        }
      }, {
        key: "changeCustomPlayerStatusResponse",
        value: function changeCustomPlayerStatusResponse(e, t, n) {
          var r = t.RspWrap1,
              i = {
            code: r.errCode,
            msg: r.errMsg,
            seq: r.seq,
            data: t.body
          };
          ot.log("changeCustomPlayerStatusRsp", i), n && n(i);
        }
      }, {
        key: "changeRoomPlayerProfileResponse",
        value: function changeRoomPlayerProfileResponse(e, t, n) {
          var r = t.RspWrap1,
              i = {
            code: r.errCode,
            msg: r.errMsg,
            seq: r.seq,
            data: t.body
          };
          ot.log("changeRoomPlayerProfileRsp", i), n && n(i);
        }
      }]);

      return Wn;
    }(xn),
        jn = /*#__PURE__*/function (_xn5) {
      _inherits(jn, _xn5);

      var _super7 = _createSuper(jn);

      function jn(e) {
        var _this14;

        _classCallCheck(this, jn);

        _this14 = _super7.call(this, e), _this14.joinGroupBstType = o.ServerSendClientBstWrap2Type.E_PUSH_TYPE_JOIN_GROUP, _this14.leaveGroupBstType = o.ServerSendClientBstWrap2Type.E_PUSH_TYPE_LEAVE_GROUP, _this14.dismissGroupBstType = o.ServerSendClientBstWrap2Type.E_PUSH_TYPE_DISMISS_GROUP, _this14.changeGroupBstType = o.ServerSendClientBstWrap2Type.E_PUSH_TYPE_MODIFY_GROUP_PROPERTY, _this14.removeGroupBstType = o.ServerSendClientBstWrap2Type.E_PUSH_TYPE_REMOVE_GROUP_PLAYER, _this14.changeCustomGroupPlayerStatusBstType = o.ServerSendClientBstWrap2Type.E_PUSH_TYPE_GROUP_PLAYER_STATE, _this14.changeGroupPlayerProfileBstType = o.ServerSendClientBstWrap2Type.E_PUSH_TYPE_MODIFY_GROUP_PLAYER_PROFILE, _this14.recvFromGroupClientType = o.ServerSendClientBstWrap2Type.E_PUSH_TYPE_GROUP_CHAT, _this14.setBroadcastHandler(_this14.joinGroupBstType, _this14.onJoinGroup.bind(_assertThisInitialized(_this14))), _this14.setBroadcastHandler(_this14.leaveGroupBstType, _this14.onLeaveGroup.bind(_assertThisInitialized(_this14))), _this14.setBroadcastHandler(_this14.dismissGroupBstType, _this14.onDismissGroup.bind(_assertThisInitialized(_this14))), _this14.setBroadcastHandler(_this14.changeGroupBstType, _this14.onChangeGroup.bind(_assertThisInitialized(_this14))), _this14.setBroadcastHandler(_this14.removeGroupBstType, _this14.onRemoveGroupPlayer.bind(_assertThisInitialized(_this14))), _this14.setBroadcastHandler(_this14.changeCustomGroupPlayerStatusBstType, _this14.onChangeCustomGroupPlayerStatus.bind(_assertThisInitialized(_this14))), _this14.setBroadcastHandler(_this14.changeGroupPlayerProfileBstType, _this14.onChangeGroupPlayerProfile.bind(_assertThisInitialized(_this14))), _this14.setBroadcastHandler(_this14.recvFromGroupClientType, _this14.onRecvFromGroupClient.bind(_assertThisInitialized(_this14)));
        return _this14;
      }

      _createClass(jn, [{
        key: "createGroup",
        value: function createGroup(e, t) {
          var n = He.E_CMD_CREATE_GROUP_REQ,
              r = this.send(e, n, this.createGroupResponse.bind(this), t);
          return ot.log("CREATE_GROUP_Para", e, r), r;
        }
      }, {
        key: "joinGroup",
        value: function joinGroup(e, t) {
          var n = He.E_CMD_JOIN_GROUP_REQ,
              r = this.send(e, n, this.joinGroupResponse.bind(this), t);
          return ot.log("JOIN_GROUP_Para", e, r), r;
        }
      }, {
        key: "leaveGroup",
        value: function leaveGroup(e, t) {
          var n = He.E_CMD_QUIT_GROUP_REQ,
              r = this.send(e, n, this.leaveGroupResponse.bind(this), t);
          return ot.log("LEAVE_GROUP_Para", e, r), r;
        }
      }, {
        key: "dismissGroup",
        value: function dismissGroup(e, t) {
          var n = He.E_CMD_DISMISS_GROUP_REQ,
              r = this.send(e, n, this.dismissGroupResponse.bind(this), t);
          return ot.log("DISMISS_GROUP_Para", e, r), r;
        }
      }, {
        key: "changeGroup",
        value: function changeGroup(e, t) {
          var n = He.E_CMD_CHANGE_GROUP_PROPERTIES_REQ,
              r = this.send(e, n, this.changeGroupResponse.bind(this), t);
          return ot.log("CHANGE_GROUP_Para", e, r), r;
        }
      }, {
        key: "removeGroupPlayer",
        value: function removeGroupPlayer(e, t) {
          var n = He.E_CMD_REMOVE_GROUP_MEMBER_REQ,
              r = this.send(e, n, this.removeGroupPlayerResponse.bind(this), t);
          return ot.log("REMOVE_GROUP_PLAYER_Para", e, r), r;
        }
      }, {
        key: "getGroupByGroupId",
        value: function getGroupByGroupId(e, t) {
          var n = He.E_CMD_GET_GROUP_DETAIL_REQ,
              r = this.send(e, n, this.getGroupByGroupIdResponse.bind(this), t);
          return ot.log("GET_GROUP_BY_GROUP_ID_Para", e, r), r;
        }
      }, {
        key: "getMyGroups",
        value: function getMyGroups(e, t) {
          var n = He.E_CMD_GET_GROUP_LIST_REQ,
              r = this.send(e, n, this.getMyGroupsResponse.bind(this), t);
          return ot.log("GET_MY_GROUPS_Para", e, r), r;
        }
      }, {
        key: "changeCustomGroupPlayerStatus",
        value: function changeCustomGroupPlayerStatus(e, t) {
          var n = He.E_CMD_CHANGE_GROUP_PLAYER_STATE_REQ,
              r = this.send(e, n, this.changeCustomGroupPlayerStatusResponse.bind(this), t);
          return ot.log("CHANGE_CUSTOM_GROUP_PLAYER_STATUS_Para", e, r), r;
        }
      }, {
        key: "changeGroupPlayerProfile",
        value: function changeGroupPlayerProfile(e, t) {
          var n = He.E_CMD_CHANGE_GROUP_PLAYER_PROFILE,
              r = this.send(e, n, this.changeGroupPlayerProfileResponse.bind(this), t);
          return ot.log("changeGroupPlayerProfile_Para", e, r), r;
        }
      }, {
        key: "sendToGroupClient",
        value: function sendToGroupClient(e, t) {
          var n = He.E_CMD_GROUP_CHAT_REQ,
              r = this.send(e, n, this.sendToGroupClientResponse.bind(this), t);
          return ot.log("SEND_TO_GROUP_CLIENT_Para", e, r), r;
        }
      }, {
        key: "createGroupResponse",
        value: function createGroupResponse(e, t, n) {
          var r = t.RspWrap1,
              i = {
            code: r.errCode,
            msg: r.errMsg,
            seq: r.seq,
            data: t.body
          };
          ot.log("createGroupRsp", i), n && n(i);
        }
      }, {
        key: "joinGroupResponse",
        value: function joinGroupResponse(e, t, n) {
          var r = t.RspWrap1,
              i = {
            code: r.errCode,
            msg: r.errMsg,
            seq: r.seq,
            data: t.body
          };
          ot.log("joinGroupRsp", i), n && n(i);
        }
      }, {
        key: "leaveGroupResponse",
        value: function leaveGroupResponse(e, t, n) {
          var r = t.RspWrap1,
              i = {
            code: r.errCode,
            msg: r.errMsg,
            seq: r.seq,
            data: t.body
          };
          ot.log("leaveGroupRsp", i), n && n(i);
        }
      }, {
        key: "dismissGroupResponse",
        value: function dismissGroupResponse(e, t, n) {
          var r = t.RspWrap1,
              i = {
            code: r.errCode,
            msg: r.errMsg,
            seq: r.seq,
            data: t.body
          };
          ot.log("dismissGroupRsp", i), n && n(i);
        }
      }, {
        key: "changeGroupResponse",
        value: function changeGroupResponse(e, t, n) {
          var r = t.RspWrap1,
              i = {
            code: r.errCode,
            msg: r.errMsg,
            seq: r.seq,
            data: t.body
          };
          ot.log("changeGroupRsp", i), n && n(i);
        }
      }, {
        key: "removeGroupPlayerResponse",
        value: function removeGroupPlayerResponse(e, t, n) {
          var r = t.RspWrap1,
              i = {
            code: r.errCode,
            msg: r.errMsg,
            seq: r.seq,
            data: t.body
          };
          ot.log("removeGroupPlayerRsp", i), n && n(i);
        }
      }, {
        key: "getGroupByGroupIdResponse",
        value: function getGroupByGroupIdResponse(e, t, n) {
          var r = t.RspWrap1,
              i = {
            code: r.errCode,
            msg: r.errMsg,
            seq: r.seq,
            data: t.body
          };
          ot.log("getGroupByGroupIdRsp", i), n && n(i);
        }
      }, {
        key: "getMyGroupsResponse",
        value: function getMyGroupsResponse(e, t, n) {
          var r = t.RspWrap1,
              i = {
            code: r.errCode,
            msg: r.errMsg,
            seq: r.seq,
            data: t.body
          };
          ot.log("getMyGroupsRsp", i), n && n(i);
        }
      }, {
        key: "changeCustomGroupPlayerStatusResponse",
        value: function changeCustomGroupPlayerStatusResponse(e, t, n) {
          var r = t.RspWrap1,
              i = {
            code: r.errCode,
            msg: r.errMsg,
            seq: r.seq,
            data: t.body
          };
          ot.log("changeCustomGroupPlayerStatusRsp", i), n && n(i);
        }
      }, {
        key: "changeGroupPlayerProfileResponse",
        value: function changeGroupPlayerProfileResponse(e, t, n) {
          var r = t.RspWrap1,
              i = {
            code: r.errCode,
            msg: r.errMsg,
            seq: r.seq,
            data: t.body
          };
          ot.log("changeGroupPlayerProfileRsp", i), n && n(i);
        }
      }, {
        key: "sendToGroupClientResponse",
        value: function sendToGroupClientResponse(e, t, n) {
          var r = t.RspWrap1,
              i = {
            code: r.errCode,
            msg: r.errMsg,
            seq: r.seq,
            data: t.body
          };
          ot.log("sendToGroupClientRsp", i), n && n(i);
        }
      }, {
        key: "onJoinGroup",
        value: function onJoinGroup(e, t) {
          var n = {
            data: e,
            seq: t
          };
          return this.bstCallbacks.group.onJoinGroup(n);
        }
      }, {
        key: "onLeaveGroup",
        value: function onLeaveGroup(e, t) {
          var n = {
            data: e,
            seq: t
          };
          return this.bstCallbacks.group.onLeaveGroup(n);
        }
      }, {
        key: "onDismissGroup",
        value: function onDismissGroup(e, t) {
          var n = {
            data: e,
            seq: t
          };
          return this.bstCallbacks.group.onDismissGroup(n);
        }
      }, {
        key: "onChangeGroup",
        value: function onChangeGroup(e, t) {
          var n = {
            data: e,
            seq: t
          };
          return this.bstCallbacks.group.onChangeGroup(n);
        }
      }, {
        key: "onRemoveGroupPlayer",
        value: function onRemoveGroupPlayer(e, t) {
          var n = {
            data: e,
            seq: t
          };
          return this.bstCallbacks.group.onRemoveGroupPlayer(n);
        }
      }, {
        key: "onChangeCustomGroupPlayerStatus",
        value: function onChangeCustomGroupPlayerStatus(e, t) {
          var n = {
            data: e,
            seq: t
          };
          return this.bstCallbacks.group.onChangeCustomGroupPlayerStatus(n);
        }
      }, {
        key: "onChangeGroupPlayerProfile",
        value: function onChangeGroupPlayerProfile(e, t) {
          var n = {
            data: e,
            seq: t
          };
          return this.bstCallbacks.group.onChangeGroupPlayerProfile(n);
        }
      }, {
        key: "onRecvFromGroupClient",
        value: function onRecvFromGroupClient(e, t) {
          var n = {
            data: e,
            seq: t
          };
          return this.bstCallbacks.group.onRecvFromGroupClient(n);
        }
      }]);

      return jn;
    }(xn),
        Jn = /*#__PURE__*/function (_xn6) {
      _inherits(Jn, _xn6);

      var _super8 = _createSuper(Jn);

      function Jn(e, t, n) {
        var _this15;

        _classCallCheck(this, Jn);

        _this15 = _super8.call(this, e), _this15.pingTimer = new Ze(), _this15.pongTimer = new Ze(), _this15.currentSeq = "", _this15.retry = 2, _this15.id = t, _this15.frameSender = n;
        return _this15;
      }

      _createClass(Jn, [{
        key: "unbindSocket",
        value: function unbindSocket() {
          this.stop(), _get(_getPrototypeOf(Jn.prototype), "unbindSocket", this).call(this);
        }
      }, {
        key: "ping",
        value: function ping(e) {
          var _this16 = this;

          if (nt(this.pingTimer), !De.authKey) return;
          var t = Date.now(),
              n = this.frameSender && this.frameSender.roomInfo && this.frameSender.roomInfo.routeId ? this.frameSender.roomInfo.routeId : "",
              r = {
            conType: this.id,
            routeId: n
          },
              i = this.send(r, He.E_CMD_HEART_BEAT_REQ, function (e, n) {
            return _this16.handlePong(e, n, t);
          }, e);
          this.currentSeq = i, ot.log("PING", this.id, i), et(this.pongTimer, function () {
            return _this16.handlePongTimeout(i);
          }, this.timeout);
        }
      }, {
        key: "stop",
        value: function stop() {
          nt(this.pingTimer, this.pongTimer);
        }
      }, {
        key: "handlePong",
        value: function handlePong(e, t, n) {
          if (ot.log("Pong", this.id, t.RspWrap1, "send", e), nt(this.pongTimer), !e) return this.handlePongTimeout(t.RspWrap1.seq);
          this.retry = 2, this.client.clearQueue();
          var r = t.RspWrap1.errCode;
          return Gn(r) ? (ke.setStatus(ke.StatusType.LOGOUT), this.client.socket.emit(Bt.autoAuth, {})) : Un(r) && this.client.socket.id === o.ConnectionType.RELAY ? (qe.setStatus(qe.StatusType.OFFLINE), this.client.socket.emit(Bt.autoAuth, {})) : void et(this.pingTimer, this.ping.bind(this), this.timeout);
        }
      }, {
        key: "handlePongTimeout",
        value: function handlePongTimeout(e) {
          if (this.client.deleteSeqQueue(e), this.retry--, e === this.currentSeq && this.client.socket) {
            if (this.id === o.ConnectionType.RELAY && Le.enableUDP) {
              if (this.retry >= 0) return et(this.pingTimer, this.ping.bind(this), this.timeout);
              this.retry = 2;
            }

            this.client.socket.connectNewSocket(this.client.socket.url), this.client.clearQueue(), ot.log("Pong_Timeout", this.id);
          }
        }
      }, {
        key: "timeout",
        get: function get() {
          return this.id === o.ConnectionType.RELAY && Le.enableUDP ? Le.pingTimeout / 2 : Le.pingTimeout;
        }
      }]);

      return Jn;
    }(xn);

    var Xn = /*#__PURE__*/function () {
      function Xn() {
        _classCallCheck(this, Xn);

        this.contexts = [];
      }

      _createClass(Xn, [{
        key: "bindCallbacks",
        value: function bindCallbacks(e) {
          -1 === this.contexts.findIndex(function (t) {
            return t === e;
          }) && this.contexts.push(e), ot.log("BindCallbacks", this.contexts.length);
        }
      }, {
        key: "unbindCallbacks",
        value: function unbindCallbacks(e) {
          var t = this.contexts.findIndex(function (t) {
            return t === e;
          });
          -1 !== t && this.contexts.splice(t, 1), ot.log("UnBindCallbacks", this.contexts.length);
        }
      }, {
        key: "clearCallbacks",
        value: function clearCallbacks() {
          this.contexts = [], ot.log("ClearCallbacks", this.contexts.length);
        }
      }, {
        key: "handleBst",
        value: function handleBst(e, t) {
          "error" !== t && ot.log(t, e);

          var _iterator = _createForOfIteratorHelper(this.contexts),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var _n13 = _step.value;
              _n13 && _n13[t + ""] && _n13[t + ""](e);
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        }
      }]);

      return Xn;
    }();

    var zn = /*#__PURE__*/function (_Xn) {
      _inherits(zn, _Xn);

      var _super9 = _createSuper(zn);

      function zn() {
        _classCallCheck(this, zn);

        return _super9.apply(this, arguments);
      }

      _createClass(zn, [{
        key: "onJoinRoom",
        value: function onJoinRoom(e) {
          this.handleBst(e, "onJoinRoom");
        }
      }, {
        key: "onLeaveRoom",
        value: function onLeaveRoom(e) {
          this.handleBst(e, "onLeaveRoom");
        }
      }, {
        key: "onDismissRoom",
        value: function onDismissRoom(e) {
          this.handleBst(e, "onDismissRoom");
        }
      }, {
        key: "onChangeRoom",
        value: function onChangeRoom(e) {
          this.handleBst(e, "onChangeRoom");
        }
      }, {
        key: "onRemovePlayer",
        value: function onRemovePlayer(e) {
          this.handleBst(e, "onRemovePlayer");
        }
      }, {
        key: "onMatchTimeout",
        value: function onMatchTimeout(e) {
          this.handleBst(e, "onMatchTimeout");
        }
      }, {
        key: "onMatchPlayers",
        value: function onMatchPlayers(e) {
          this.handleBst(e, "onMatchPlayers");
        }
      }, {
        key: "onCancelMatch",
        value: function onCancelMatch(e) {
          this.handleBst(e, "onCancelMatch");
        }
      }, {
        key: "onRecvFromClient",
        value: function onRecvFromClient(e) {
          this.handleBst(e, "onRecvFromClient");
        }
      }, {
        key: "onRecvFromGameSvr",
        value: function onRecvFromGameSvr(e) {
          this.handleBst(e, "onRecvFromGameSvr");
        }
      }, {
        key: "onChangePlayerNetworkState",
        value: function onChangePlayerNetworkState(e) {
          this.handleBst(e, "onChangePlayerNetworkState");
        }
      }, {
        key: "onRecvFrame",
        value: function onRecvFrame(e) {
          this.handleBst(e, "onRecvFrame");
        }
      }, {
        key: "onChangeCustomPlayerStatus",
        value: function onChangeCustomPlayerStatus(e) {
          this.handleBst(e, "onChangeCustomPlayerStatus");
        }
      }, {
        key: "onChangeRoomPlayerProfile",
        value: function onChangeRoomPlayerProfile(e) {
          this.handleBst(e, "onChangeRoomPlayerProfile");
        }
      }, {
        key: "onStartFrameSync",
        value: function onStartFrameSync(e) {
          this.handleBst(e, "onStartFrameSync");
        }
      }, {
        key: "onStopFrameSync",
        value: function onStopFrameSync(e) {
          this.handleBst(e, "onStopFrameSync");
        }
      }, {
        key: "onNetwork",
        value: function onNetwork(e) {
          this.handleBst(e, "onNetwork");
        }
      }]);

      return zn;
    }(Xn);

    var $n = /*#__PURE__*/function (_Xn2) {
      _inherits($n, _Xn2);

      var _super10 = _createSuper($n);

      function $n() {
        _classCallCheck(this, $n);

        return _super10.apply(this, arguments);
      }

      _createClass($n, [{
        key: "onJoinGroup",
        value: function onJoinGroup(e) {
          this.handleBst(e, "onJoinGroup");
        }
      }, {
        key: "onLeaveGroup",
        value: function onLeaveGroup(e) {
          this.handleBst(e, "onLeaveGroup");
        }
      }, {
        key: "onDismissGroup",
        value: function onDismissGroup(e) {
          this.handleBst(e, "onDismissGroup");
        }
      }, {
        key: "onChangeGroup",
        value: function onChangeGroup(e) {
          this.handleBst(e, "onChangeGroup");
        }
      }, {
        key: "onRemoveGroupPlayer",
        value: function onRemoveGroupPlayer(e) {
          this.handleBst(e, "onRemoveGroupPlayer");
        }
      }, {
        key: "onChangeGroupPlayerNetworkState",
        value: function onChangeGroupPlayerNetworkState(e) {
          this.handleBst(e, "onChangeGroupPlayerNetworkState");
        }
      }, {
        key: "onChangeCustomGroupPlayerStatus",
        value: function onChangeCustomGroupPlayerStatus(e) {
          this.handleBst(e, "onChangeCustomGroupPlayerStatus");
        }
      }, {
        key: "onChangeGroupPlayerProfile",
        value: function onChangeGroupPlayerProfile(e) {
          this.handleBst(e, "onChangeGroupPlayerProfile");
        }
      }, {
        key: "onRecvFromGroupClient",
        value: function onRecvFromGroupClient(e) {
          this.handleBst(e, "onRecvFromGroupClient");
        }
      }, {
        key: "onNetwork",
        value: function onNetwork(e) {
          this.handleBst(e, "onNetwork");
        }
      }]);

      return $n;
    }(Xn);

    var Zn,
        er,
        tr = null,
        nr = null,
        rr = null,
        ir = null,
        or = null,
        sr = null,
        ar = null,
        _r = null;

    function Er() {
      ur.instance.clearResponses(), Zn && Zn.destory(), er && er.destory(), function () {
        for (var _len4 = arguments.length, e = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
          e[_key4] = arguments[_key4];
        }

        e.forEach(function (e) {
          return e && e.unbindSocket();
        });
      }(rr, ir, or, sr, ar.netUtil1, ar.netUtil2, tr, nr, _r), Xe.offHide(ur.instance.onHide), Xe.offShow(ur.instance.onShow), Fe.setStatus(Fe.StatusType.UNINIT), ke.setStatus(ke.StatusType.LOGOUT), ur.instance.group = null;
    }

    var lr = {
      login: function login(e) {
        var t = Object.assign({}, Ge),
            n = function n(t) {
          e && e(t), lr.loginRsp(t);
        };

        return Ge.createSignature ? rr && Ge.createSignature(function (e) {
          return rr.login(t, void 0, e, n);
        }) : rr && rr.login(t, Ge.secretKey, null, n);
      },
      loginRsp: function loginRsp(e) {
        if (Fe.isIniting()) {
          if (e.code !== Pe.EC_OK) return dr(!1, {
            code: e.code
          });

          var _n14 = 5e3,
              _r10 = !1,
              _i5 = 0;

          return e.data.sdkConfig && (e.data.sdkConfig.pingInterval && (_n14 = e.data.sdkConfig.pingInterval), e.data.sdkConfig.reportInterval && (Nn.reportInterval = e.data.sdkConfig.reportInterval), e.data.sdkConfig.serverTime && (_i5 = e.data.sdkConfig.serverTime), e.data.sdkConfig.enableUdp && (_r10 = e.data.sdkConfig.enableUdp), e.data.sdkConfig.disableReport && (Nn.disableReport = e.data.sdkConfig.disableReport), e.data.sdkConfig.disableFrameReport && (Nn.disableFrameReport = e.data.sdkConfig.disableFrameReport), e.data.sdkConfig.disableReqReport && (Nn.disableReqReport = e.data.sdkConfig.disableReqReport), e.data.sdkConfig.minReportSize && (Nn.minReportSize = e.data.sdkConfig.minReportSize)), t = Ge.openId, De.playerId, ot.log("EventUploader"), On.init(), On.setOpenid(t || ""), Pn = !0, Le.pingTimeout = _n14, Le.enableUDP = !!_r10, dr(!0, {
            code: Pe.EC_OK,
            data: {
              serverTime: _i5
            }
          }), tr.ping();
        }

        var t;
        e.code === Pe.EC_OK && tr.ping();
      },
      logout: function logout() {
        return rr && rr.logout({}, lr.logoutRsp);
      },
      logoutRsp: function logoutRsp(e) {
        e.code === Pe.EC_OK && tr.stop();
      }
    };

    function dr(e, t) {
      if (Fe.isIniting()) {
        var _r12;

        e && Fe.setStatus(Fe.StatusType.INITED), !e && Fe.setStatus(Fe.StatusType.UNINIT);

        var _n15 = Fe.isInited() ? Pe.EC_OK : Pe.EC_SDK_UNINIT;

        !e && t && t.code !== Pe.EC_OK && (_n15 = t.code);

        var _r11 = (_r12 = {
          "default": "初始化失败。请确认域名是否正确配置，以及网络是否顺畅。"
        }, _defineProperty(_r12, Pe.EC_ACCESS_PLAYER_DUPLICATE_LOGIN, "初始化失败。用户已在其他客户端登录。"), _defineProperty(_r12, Pe.EC_INVALID_PARAMS_TIMESTAMP, "初始化失败。请检查本地时间是否正常。"), _defineProperty(_r12, Pe.EC_INVALID_PARAMS_SIGN, "初始化失败。签名校验失败，请检查初始化参数是否正确。"), _defineProperty(_r12, Pe.EC_INVALID_PARAMS_GAME_ID, "初始化失败。请检查 gameId 是否正确。"), _defineProperty(_r12, Pe.EC_SDK_SEND_FAIL, "初始化失败。消息发送失败，请检查网络是否正常。"), _defineProperty(_r12, Pe.EC_SDK_RES_TIMEOUT, "初始化失败。消息响应超时，请检查网络后重试。"), _defineProperty(_r12, Pe.EC_SDK_SOCKET_ERROR, "初始化失败。网络异常。" + (t.errMsg || "")), _defineProperty(_r12, Pe.EC_SDK_SOCKET_CLOSE, "初始化失败。网络已断开。"), _r12),
            _i6 = Fe.isInited() ? "初始化成功" : _r11[_n15] || _r11["default"],
            _o3 = t.data && t.data.serverTime || void 0;

        ur.instance.initRsp && ur.instance.initRsp({
          code: _n15,
          msg: _i6,
          seq: null,
          data: {
            serverTime: _o3
          }
        });
      }
    }

    var ur = /*#__PURE__*/function () {
      function ur(e, t) {
        _classCallCheck(this, ur);

        if (this.ErrCode = ur.ErrCode, this.ENUM = ur.ENUM, this.group = null, !e.openId && (e.openId = ""), e.openId = e.openId + "", Object.assign(Ge, e), Object.assign(Le, t, {
          pingTimeout: Le.pingTimeout
        }), De.gameId = Ge.gameId, ot.log("CONSTRUCTOR", e, t), ur.instance instanceof ur) return ur.instance;
        ur.instance = this;
      }

      _createClass(ur, [{
        key: "clearResponses",
        value: function clearResponses() {
          ur.bstCallbacks.clearCallbacks();
        }
      }, {
        key: "onHide",
        value: function onHide() {
          ke.setStatus(ke.StatusType.LOGOUT), qe.setStatus(qe.StatusType.OFFLINE), tr && tr.stop(), nr && nr.stop(), nr.client.socket.id === o.ConnectionType.RELAY && Le.enableUDP && nr.client.socket.close(), bn(), ot.log("SDK_onHide");
        }
      }, {
        key: "onShow",
        value: function onShow() {
          tr && tr.stop(), nr && nr.stop(), tr && tr.client.socket.url && tr.ping(), nr && nr.client.socket.url && nr.ping(), bn(), ot.log("SDK_onShow", tr.client.socket.url, nr.client.socket.url);
        }
      }, {
        key: "getSocket",
        value: function getSocket(e) {
          return e === o.ConnectionType.COMMON ? Zn : e === o.ConnectionType.RELAY ? er : void 0;
        }
      }, {
        key: "init",
        value: function init(e) {
          this.initRsp = function (t) {
            e(t);
          }, function () {
            var e, t;
            Fe.isUnInit() && (rr && Er(), Fe.setStatus(Fe.StatusType.INITING), rr = new Wn(ur.bstCallbacks), or = new Bn(ur.bstCallbacks), sr = new Kn(ur.bstCallbacks), ir = new Vn(ur.bstCallbacks), ar = new Qn(ur.bstCallbacks), _r = new jn(ur.bstCallbacks), Zn = new Qt(o.ConnectionType.COMMON, !1), er = new Qt(o.ConnectionType.RELAY, !0), tr = new Jn(ur.bstCallbacks, o.ConnectionType.COMMON, null), nr = new Jn(ur.bstCallbacks, o.ConnectionType.RELAY, ar), e = [tr, rr, ir, or, sr, ar.netUtil1, _r], t = [nr, ar.netUtil2], e.forEach(function (e) {
              return e.bindSocket(Zn);
            }), t.forEach(function (e) {
              return e.bindSocket(er);
            }), xn.stopQueueLoop(), xn.startQueueLoop(), Zn.url = Le.url, Zn.on(Bt.connect, function () {
              ke.isStatus(ke.StatusType.LOGINING) || lr.login(), Zn.url && ur.bstCallbacks.onNetwork({
                code: Pe.EC_OK,
                data: {
                  type: Zn.id
                }
              });
            }), er.on(Bt.connect, function () {
              ar.checkLogin(null, "connect " + !!er.isConnect()), er.url && ur.bstCallbacks.onNetwork({
                code: Pe.EC_OK,
                data: {
                  type: er.id
                }
              }), nr.ping();
            }), Zn.on(Bt.connectClose, function () {
              dr(!1, {
                code: Pe.EC_SDK_SOCKET_CLOSE
              }), Fe.isInited() && (ke.setStatus(ke.StatusType.LOGOUT), Zn.url && ur.bstCallbacks.onNetwork({
                code: Pe.EC_SDK_SOCKET_CLOSE,
                msg: "Socket断开",
                seq: null
              }));
            }), er.on(Bt.connectClose, function () {
              Fe.isInited() && (qe.setStatus(qe.StatusType.OFFLINE), er.url && ur.bstCallbacks.onNetwork({
                code: Pe.EC_SDK_SOCKET_CLOSE,
                msg: "Socket断开",
                seq: null
              }), nr.stop());
            }), Zn.on(Bt.connectError, function (e) {
              dr(!1, {
                code: Pe.EC_SDK_SOCKET_ERROR,
                errMsg: JSON.stringify(e)
              }), Fe.isInited() && Zn.url && ur.bstCallbacks.onNetwork({
                code: Pe.EC_SDK_SOCKET_ERROR,
                msg: "Socket错误",
                seq: null
              });
            }), er.on(Bt.connectError, function (e) {
              Fe.isInited() && er.url && ur.bstCallbacks.onNetwork({
                code: Pe.EC_SDK_SOCKET_ERROR,
                msg: "Socket错误",
                seq: null
              });
            }), Zn.on(Bt.autoAuth, function () {
              if (!Fe.isInited()) return;
              var e = ke.isStatus(ke.StatusType.LOGOUT);
              Zn.url && e && lr.login();
            }), er.on(Bt.autoAuth, function () {
              if (!Fe.isInited()) return;
              if (!er.url) return;
              ke.isStatus(ke.StatusType.LOGOUT) && lr.login();
              var e = ar.roomInfo || {
                routeId: ""
              };
              (qe.isOffline() || qe.getRouteId() !== e.routeId) && ar.checkLogin(function (e) {
                e.code === Pe.EC_OK && nr.ping();
              }, "autoAuth");
            }), Zn.connect("init sdk"), Xe.onHide(ur.instance.onHide), Xe.onShow(ur.instance.onShow), ur.instance.group = _r);
          }();
        }
      }, {
        key: "initRsp",
        value: function initRsp(e) {
          return null;
        }
      }, {
        key: "unInit",
        value: function unInit() {
          Fe.isUnInit() || (xn.stopQueueLoop(), tr && tr.stop(), nr && nr.stop(), ke.setStatus(ke.StatusType.LOGOUT), qe.setStatus(qe.StatusType.OFFLINE), Ye.setInfo({
            id: void 0
          }), Er(), Object.assign(Ge, JSON.parse(Ue)), Object.assign(Le, JSON.parse(be)), Object.assign(De, JSON.parse(we)), ur.instance = null);
        }
      }, {
        key: "isInited",
        value: function isInited() {
          return Fe.isInited();
        }
      }, {
        key: "changeCustomPlayerStatus",
        value: function changeCustomPlayerStatus(e, t, n) {
          var r = Object.assign({}, e);
          return rr.changeCustomPlayerStatus(r, n);
        }
      }, {
        key: "changeRoomPlayerProfile",
        value: function changeRoomPlayerProfile(e, t, n) {
          var r = Object.assign({}, e);
          return rr.changeRoomPlayerProfile(r, n);
        }
      }, {
        key: "createRoom",
        value: function createRoom(e, t) {
          return this.createTeamRoom(Object.assign({}, e, {
            teamNumber: 1
          }), t);
        }
      }, {
        key: "createTeamRoom",
        value: function createTeamRoom(e, t) {
          "object" != _typeof(e) && (e = {});
          var n = [];
          var r = (e = JSON.parse(JSON.stringify(e))).maxPlayers || 0,
              i = e.teamNumber || 0;

          if (r % i != 0) {
            var _e18 = "";
            return t && t({
              seq: _e18,
              code: Pe.EC_PARAMS_INVALID,
              msg: "参数错误，最大玩家数无法被队伍数量整除",
              data: null
            }), _e18;
          }

          var o = Object.assign({}, e.playerInfo, {
            id: De.playerId,
            commonNetworkState: void 0,
            relayNetworkState: void 0,
            teamId: void 0,
            isRobot: void 0,
            matchAttributes: void 0
          });

          if (delete e.teamNumber, !("number" == typeof r && "number" == typeof i && r >= i && i >= 1)) {
            var _e19 = "";
            return t && t({
              seq: "",
              code: Pe.EC_PARAMS_INVALID,
              msg: "参数错误，请检查最大玩家数量和队伍数量",
              data: null
            }), _e19;
          }

          {
            r = Math.floor(r), i = Math.floor(i);

            var _e20 = Math.floor(r / i);

            for (var _t15 = 0; _t15 < i; _t15++) {
              var _s5 = {
                id: _t15 + "",
                maxPlayers: _e20,
                minPlayers: 1,
                name: ""
              };
              !o.teamId && (o.teamId = _s5.id), _t15 === i - 1 && (_s5.maxPlayers = r - (i - 1) * _e20), n.push(_s5);
            }
          }
          var s = Object.assign({}, e, {
            playerList: void 0,
            owner: void 0,
            region: void 0,
            teamList: n,
            createType: Me.CreateRoomType.COMMON_CREATE,
            playerInfo: o
          });
          return ir.createRoom(s, t);
        }
      }, {
        key: "joinRoom",
        value: function joinRoom(e, t, n) {
          var r = Object.assign({}, e, {
            teamId: "0",
            joinType: o.JoinRoomType.COMMON_JOIN,
            roomId: t,
            playerInfo: Object.assign({}, e.playerInfo, {
              id: De.playerId,
              commonNetworkState: void 0,
              relayNetworkState: void 0,
              teamId: void 0,
              isRobot: void 0,
              matchAttributes: void 0
            })
          });
          return ir.joinRoom(r, n);
        }
      }, {
        key: "joinTeamRoom",
        value: function joinTeamRoom(e, t, n) {
          var r = Object.assign({}, e, {
            joinType: o.JoinRoomType.COMMON_JOIN,
            roomId: t,
            playerInfo: Object.assign({}, e.playerInfo, {
              commonNetworkState: void 0,
              relayNetworkState: void 0,
              teamId: void 0,
              isRobot: void 0,
              matchAttributes: void 0,
              id: De.playerId
            })
          });
          return ir.joinRoom(r, n);
        }
      }, {
        key: "leaveRoom",
        value: function leaveRoom(e) {
          return ir.leaveRoom({}, e);
        }
      }, {
        key: "dismissRoom",
        value: function dismissRoom(e, t, n) {
          var r = {
            roomId: t
          };
          return ir.dismissRoom(r, n);
        }
      }, {
        key: "changeRoom",
        value: function changeRoom(e, t, n) {
          var r = {
            changeRoomOptionList: []
          };
          if (e.hasOwnProperty("roomName") && r.changeRoomOptionList.push(o.ChangeRoomOption.ROOM_NAME), e.hasOwnProperty("owner") && r.changeRoomOptionList.push(o.ChangeRoomOption.OWNER), e.hasOwnProperty("isPrivate") && r.changeRoomOptionList.push(o.ChangeRoomOption.IS_PRIVATE), e.hasOwnProperty("customProperties") && r.changeRoomOptionList.push(o.ChangeRoomOption.CUSTOM_PROPERTIES), e.hasOwnProperty("isForbidJoin") && r.changeRoomOptionList.push(o.ChangeRoomOption.IS_FORBID_JOIN), 0 !== r.changeRoomOptionList.length) return ir.changeRoom(Object.assign({}, e, r), n);
          {
            var _e21 = {
              code: o.QAppProtoErrCode.EC_OK,
              msg: "未修改房间信息",
              seq: "",
              data: t
            };
            n && n(_e21);
          }
        }
      }, {
        key: "removePlayer",
        value: function removePlayer(e, t) {
          var n = Object.assign({}, e);
          return ir.removeUser(n, t);
        }
      }, {
        key: "getRoomByRoomId",
        value: function getRoomByRoomId(e, t) {
          var n = Object.assign({}, e);
          return ir.getRoomByRoomId(n, t);
        }
      }, {
        key: "getRoomList",
        value: function getRoomList(e, t) {
          var n = Object.assign({
            roomType: "",
            isDesc: !1
          }, e, {
            gameId: Ge.gameId
          });
          return ir.getRoomList(n, t);
        }
      }, {
        key: "matchPlayers",
        value: function matchPlayers(e, t) {
          var n = Object.assign({}, e, {
            playerInfo: Object.assign({}, e.playerInfo, {
              matchStatus: void 0,
              id: De.playerId,
              teamId: "",
              region: "",
              teamLeader: "",
              sdkVersion: void 0,
              groupId: void 0,
              teamType: void 0,
              requestId: void 0
            })
          });
          return or.matchUsersComplex(n, t);
        }
      }, {
        key: "matchGroup",
        value: function matchGroup(e, t) {
          var n = e.playerInfoList.map(function (e) {
            return Object.assign({}, e, {
              matchStatus: void 0,
              teamId: "",
              region: "",
              teamLeader: "",
              sdkVersion: void 0,
              groupId: void 0,
              teamType: void 0,
              requestId: void 0
            });
          }),
              r = {
            matchCode: e.matchCode,
            playerInfoList: n
          };
          return or.matchGroup(r, t);
        }
      }, {
        key: "matchRoom",
        value: function matchRoom(e, t) {
          var n = Object.assign({}, e, {
            playerInfo: Object.assign({}, e.playerInfo, {
              commonNetworkState: void 0,
              relayNetworkState: void 0,
              teamId: void 0,
              isRobot: void 0,
              matchAttributes: void 0,
              id: De.playerId
            })
          });
          return or.matchRoom(n, t);
        }
      }, {
        key: "cancelMatch",
        value: function cancelMatch(e, t) {
          var n = Object.assign({}, e);
          return or.cancelMatch(n, t);
        }
      }, {
        key: "setFrameRoom",
        value: function setFrameRoom(e) {
          return !(!e || !Array.isArray(e.playerList) || e.playerList.findIndex(function (e) {
            return e.id === De.playerId;
          }) < 0 || (ar.setFrameRoom(e), 0));
        }
      }, {
        key: "startFrameSync",
        value: function startFrameSync(e) {
          var t = ar.roomInfo;

          function n(t) {
            e && e(t);
          }

          if (!t) return ot.log("STARTFRAMESYNC", "fail at roomInfo === null"), n({
            code: ur.ErrCode.EC_SDK_NO_ROOM,
            msg: "无房间信息",
            seq: null
          });
          ot.log("STARTFRAMESYNC", ar.roomInfo), ot.log("STARTFRAMESYNC", "socket2 isConnect", er.isConnect(), er.socketTask), ar.checkLogin(function (r) {
            if (r.code === Pe.EC_OK) {
              ot.log("STARTFRAMESYNC", "start");
              var _n16 = {
                roomId: t.id,
                gameId: Ge.gameId
              };
              return ar.startFrameSync(_n16, e);
            }

            return ot.log("STARTFRAMESYNC", "fail at CheckLogin, seq=", r.seq, ", code=", r.code, t), n({
              code: ur.ErrCode.EC_SDK_NO_CHECK_LOGIN,
              msg: "CheckLogin失败。" + JSON.stringify(r),
              seq: null
            });
          }, "sdk startFrame");
        }
      }, {
        key: "stopFrameSync",
        value: function stopFrameSync(e) {
          var t = {
            roomId: (ar.roomInfo || {
              id: void 0
            }).id,
            gameId: Ge.gameId
          };
          ar.stopFrameSync(t, function (t) {
            return e && e(t);
          });
        }
      }, {
        key: "sendFrame",
        value: function sendFrame(e, t) {
          var n = {
            roomId: (ar.roomInfo || {
              id: void 0
            }).id,
            item: {
              playerId: De.playerId,
              data: JSON.stringify(e.data),
              timestamp: Date.now()
            }
          };
          return ar.sendFrame(n, t);
        }
      }, {
        key: "requestFrame",
        value: function requestFrame(e, t) {
          var n = (ar.roomInfo || {
            id: void 0
          }).id;
          e.beginFrameId = Number(e.beginFrameId) || 1, e.endFrameId = Number(e.endFrameId) || 1;
          var r = e.beginFrameId,
              i = Math.min(r + 1999, e.endFrameId),
              o = [];

          var s = function s(a) {
            if (0 !== a.code) return t && t(a);

            if (o = o.concat(a.data.frames), a.data.isPartial && o.length > 0) {
              var _e22 = o.length - 1;

              i = o[_e22].id;
            }

            return i < e.endFrameId ? (r = i + 1, i = Math.min(r + 1999, e.endFrameId), ar.requestFrame({
              roomId: n,
              beginFrameId: r,
              endFrameId: i,
              supportPartial: !0
            }, s)) : (a.data.frames = o, delete a.data.isPartial, t && t(a));
          };

          return ar.requestFrame({
            roomId: n,
            beginFrameId: r,
            endFrameId: i,
            supportPartial: !0
          }, s);
        }
      }, {
        key: "sendToClient",
        value: function sendToClient(e, t, n) {
          if (0 === e.recvPlayerList.length) return void (n && n({
            code: this.ErrCode.EC_OK,
            data: null,
            seq: "",
            msg: ""
          }));
          var r = Object.assign({}, e, {
            roomId: t
          });
          return sr.sendMessage(r, n);
        }
      }, {
        key: "sendToGameSvr",
        value: function sendToGameSvr(e, t, n) {
          var r = Object.assign({}, e, {
            playerId: De.playerId,
            roomId: t,
            data: JSON.stringify(e.data)
          });
          return ar.sendMessageExt(r, n);
        }
      }]);

      return ur;
    }();

    ur.instance = null, ur.bstCallbacks = new ( /*#__PURE__*/function () {
      function _class() {
        _classCallCheck(this, _class);

        this.room = new zn(), this.group = new $n();
      }

      _createClass(_class, [{
        key: "clearCallbacks",
        value: function clearCallbacks() {
          this.room.clearCallbacks(), this.group.clearCallbacks();
        }
      }, {
        key: "onNetwork",
        value: function onNetwork(e) {
          this.room.onNetwork(e), this.group.onNetwork(e);
        }
      }, {
        key: "error",
        value: function error(e) {}
      }]);

      return _class;
    }())(), ur.ErrCode = Pe, ur.ENUM = Me;

    var hr = /*#__PURE__*/function () {
      function hr(e) {
        _classCallCheck(this, hr);

        this.batch = [], this.isUpdating = !1, this.updateTime = 0, this.clear(), this.bstUpdaterFunc = e;
      }

      _createClass(hr, [{
        key: "push",
        value: function push(e) {
          var t = Object.assign({}, e, {
            isUpdating: !1
          });
          this.batch.push(t), Date.now() - this.updateTime > 3e4 && (this.isUpdating = !1), !this.isUpdating && this.update();
        }
      }, {
        key: "clear",
        value: function clear() {
          this.batch = [], this.isUpdating = !1, this.updateTime = Date.now();
        }
      }, {
        key: "update",
        value: function update() {
          var _this17 = this;

          if (this.updateTime = Date.now(), this.isUpdating = !0, this.batch = this.batch.filter(function (e) {
            return !e.isUpdating;
          }), this.batch.forEach(function (e) {
            return e.isUpdating = !0;
          }), 0 === this.batch.length) return this.isUpdating = !1;
          this.bstUpdaterFunc(function (e, t) {
            return _this17.trigger(e, t);
          });
        }
      }, {
        key: "trigger",
        value: function trigger(e, t) {
          var _this18 = this;

          this.isUpdating = !1, this.batch.forEach(function (n) {
            n.isUpdating && e && t && setTimeout(function () {
              var r = !1;

              try {
                r = n.shouldItemUpdate(t);
              } catch (e) {
                console.log(e);
              }

              r && n.itemUpdater(e, t);
            }, 0);
          }), this.batch = this.batch.filter(function (e) {
            return !e.isUpdating;
          }), this.batch.length > 0 && setTimeout(function () {
            return !_this18.isUpdating && _this18.update();
          }, 500);
        }
      }]);

      return hr;
    }();

    var cr = /*#__PURE__*/function () {
      function cr(e) {
        var _this19 = this;

        _classCallCheck(this, cr);

        this.group = e, this.bstUpdater = new hr(function (e) {
          if (!_this19.group || !_this19.group.groupInfo || !_this19.group.groupInfo.id) return e(null, null);
          pr.getGroupByGroupId({
            groupId: _this19.group.groupInfo.id
          }, function (t) {
            return t && t.data && t.data.groupInfo && t.data.groupInfo.id ? e(t.seq, t.data.groupInfo) : e(null, null);
          });
        });
      }

      _createClass(cr, [{
        key: "onNetwork",
        value: function onNetwork(e) {
          this.group.onUpdate && this.group.onUpdate(this.group);
        }
      }, {
        key: "onJoinGroup",
        value: function onJoinGroup(e) {
          var _this20 = this;

          this.matchGroupInfo(e) && this.bstUpdater.push({
            bstSeq: e.seq,
            shouldItemUpdate: function shouldItemUpdate(t) {
              return t.id === e.data.groupInfo.id;
            },
            itemUpdater: function itemUpdater(t, n) {
              var r = e.data.joinPlayerId;
              n && n.groupPlayerList && n.groupPlayerList.find(function (e) {
                return e.id === r;
              }) && (e.seq += "_" + t, e.data = Object.assign({}, e.data, {
                groupInfo: n
              }), _this20.saveAndInvoke("onJoinGroup", e));
            }
          });
        }
      }, {
        key: "onLeaveGroup",
        value: function onLeaveGroup(e) {
          this.bstUpdater.clear(), this.saveAndInvoke("onLeaveGroup", e);
        }
      }, {
        key: "onDismissGroup",
        value: function onDismissGroup(e) {
          var _this21 = this;

          this.bstUpdater.clear(), this.matchGroupInfoAndInvoke("onDismissGroup", e, function () {
            return _this21.group.groupInfo = {};
          });
        }
      }, {
        key: "onChangeGroup",
        value: function onChangeGroup(e) {
          var _this22 = this;

          this.matchGroupInfo(e) && this.bstUpdater.push({
            bstSeq: e.seq,
            shouldItemUpdate: function shouldItemUpdate(t) {
              return t.id === e.data.groupInfo.id;
            },
            itemUpdater: function itemUpdater(t, n) {
              e.seq += "_" + t, e.data = Object.assign({}, e.data, {
                groupInfo: n
              }), _this22.saveAndInvoke("onChangeGroup", e);
            }
          });
        }
      }, {
        key: "onRemoveGroupPlayer",
        value: function onRemoveGroupPlayer(e) {
          var _this23 = this;

          this.matchGroupInfo(e) && this.bstUpdater.push({
            bstSeq: e.seq,
            shouldItemUpdate: function shouldItemUpdate(t) {
              return t.id === e.data.groupInfo.id;
            },
            itemUpdater: function itemUpdater(t, n) {
              var r = e.data.removePlayerId;
              n && n.groupPlayerList && !n.groupPlayerList.find(function (e) {
                return e.id === r;
              }) && (e.seq += "_" + t, e.data = Object.assign({}, e.data, {
                groupInfo: n
              }), _this23.saveAndInvoke("onRemoveGroupPlayer", e));
            }
          });
        }
      }, {
        key: "onChangeGroupPlayerNetworkState",
        value: function onChangeGroupPlayerNetworkState(e) {
          var _this24 = this;

          var t = e.data.groupIdList,
              n = this.group.groupInfo.id;
          n && (!Array.isArray(t) || t.length <= 0 || t.find(function (e) {
            return e === n;
          }) && this.bstUpdater.push({
            bstSeq: e.seq,
            shouldItemUpdate: function shouldItemUpdate(e) {
              return e.id === n;
            },
            itemUpdater: function itemUpdater(t, n) {
              var r = e.data.changePlayerId,
                  i = n && n.groupPlayerList && n.groupPlayerList.find(function (e) {
                return e.id === r;
              });

              if (i) {
                var _o4 = i.commonGroupNetworkState,
                    _s6 = {
                  seq: e.seq + "_" + t,
                  data: {
                    networkState: _o4,
                    changePlayerId: r,
                    groupInfo: n
                  }
                };

                _this24.saveAndInvoke("onChangeGroupPlayerNetworkState", _s6);
              }
            }
          }));
        }
      }, {
        key: "onChangeCustomGroupPlayerStatus",
        value: function onChangeCustomGroupPlayerStatus(e) {
          var _this25 = this;

          this.matchGroupInfo(e) && this.bstUpdater.push({
            bstSeq: e.seq,
            shouldItemUpdate: function shouldItemUpdate(t) {
              return t.id === e.data.groupInfo.id;
            },
            itemUpdater: function itemUpdater(t, n) {
              var r = e.data.changePlayerId,
                  i = n && n.groupPlayerList && n.groupPlayerList.find(function (e) {
                return e.id === r;
              });
              i && (e.seq += "_" + t, e.data = Object.assign({}, e.data, {
                customGroupPlayerStatus: i.customGroupPlayerStatus,
                groupInfo: n
              }), _this25.saveAndInvoke("onChangeCustomGroupPlayerStatus", e));
            }
          });
        }
      }, {
        key: "onChangeGroupPlayerProfile",
        value: function onChangeGroupPlayerProfile(e) {
          var _this26 = this;

          this.matchGroupInfo(e) && this.bstUpdater.push({
            bstSeq: e.seq,
            shouldItemUpdate: function shouldItemUpdate(t) {
              return t.id === e.data.groupInfo.id;
            },
            itemUpdater: function itemUpdater(t, n) {
              var r = e.data.changePlayerId,
                  i = n && n.groupPlayerList && n.groupPlayerList.find(function (e) {
                return e.id === r;
              });
              i && (e.seq += "_" + t, e.data = Object.assign({}, e.data, {
                customProfile: i.customGroupPlayerProfile,
                groupInfo: n
              }), _this26.saveAndInvoke("onChangeGroupPlayerProfile", e));
            }
          });
        }
      }, {
        key: "onRecvFromGroupClient",
        value: function onRecvFromGroupClient(e) {
          this.matchIDAndInvoke("onRecvFromGroupClient", e);
        }
      }, {
        key: "matchGroupInfo",
        value: function matchGroupInfo(e) {
          return this.group.groupInfo.id === e.data.groupInfo.id;
        }
      }, {
        key: "matchID",
        value: function matchID(e) {
          return this.group.groupInfo.id === e.data.groupId;
        }
      }, {
        key: "invoke",
        value: function invoke(e, t) {
          this.group[e] && this.group[e].call(this.group, t);
        }
      }, {
        key: "saveAndInvoke",
        value: function saveAndInvoke(e, t) {
          this.matchGroupInfo(t) && (this.group.groupUtil.setGroupInfo(t.data.groupInfo), this.invoke(e, t));
        }
      }, {
        key: "matchIDAndInvoke",
        value: function matchIDAndInvoke(e, t, n) {
          this.matchID(t) && (n && n(t), this.invoke(e, t));
        }
      }, {
        key: "matchGroupInfoAndInvoke",
        value: function matchGroupInfoAndInvoke(e, t, n) {
          this.matchGroupInfo(t) && (n && n(t), this.invoke(e, t));
        }
      }]);

      return cr;
    }();

    var fr = /*#__PURE__*/function () {
      function fr(e) {
        _classCallCheck(this, fr);

        this.group = e;
      }

      _createClass(fr, [{
        key: "setGroupInfo",
        value: function setGroupInfo(e) {
          !e && (e = {}), this.group.groupInfo = JSON.parse(JSON.stringify(e || {})), this.group.groupInfo.groupPlayerList = this.group.groupInfo.groupPlayerList || [], this.group.onUpdate && this.group.onUpdate(this.group);
        }
      }, {
        key: "saveGroupInfo",
        value: function saveGroupInfo(e) {
          e.code === o.QAppProtoErrCode.EC_OK && this.setGroupInfo(e.data ? e.data.groupInfo : null);
        }
      }, {
        key: "addGroupParam",
        value: function addGroupParam() {
          return {
            groupId: this.group.groupInfo.id || ""
          };
        }
      }, {
        key: "initBroadcast",
        value: function initBroadcast() {
          this.group.groupBroadcast || (this.group.groupBroadcast = new cr(this.group));
        }
      }]);

      return fr;
    }();

    var pr = /*#__PURE__*/function (_ref20) {
      _inherits(pr, _ref20);

      var _super11 = _createSuper(pr);

      function pr(e) {
        var _this27;

        _classCallCheck(this, pr);

        _this27 = _super11.call(this), _this27.groupUtil = new fr(_assertThisInitialized(_this27)), _this27.groupUtil.setGroupInfo(e || null);
        return _this27;
      }

      _createClass(pr, [{
        key: "initGroup",
        value: function initGroup(e) {
          this.groupUtil.setGroupInfo(e);
        }
      }, {
        key: "onUpdate",
        value: function onUpdate(e) {}
      }, {
        key: "createGroup",
        value: function createGroup(e, t) {
          var _this28 = this;

          var n = Object.assign({}, e, {
            playerInfo: Object.assign({}, e.playerInfo, {
              id: De.playerId,
              commonGroupNetworkState: void 0
            })
          });
          ur.instance.group.createGroup(n, ft(function (e) {
            _this28.groupUtil.saveGroupInfo(e), t && t(e);
          }));
        }
      }, {
        key: "getGroupDetail",
        value: function getGroupDetail(e) {
          var _this29 = this;

          var t = {
            groupId: this.groupInfo.id
          };
          ur.instance.group.getGroupByGroupId(t, ft(function (t) {
            _this29.groupUtil.saveGroupInfo(t), e && e(t);
          }));
        }
      }, {
        key: "joinGroup",
        value: function joinGroup(e, t) {
          var _this30 = this;

          var n = Object.assign({}, e, {
            playerInfo: Object.assign({}, e.playerInfo, {
              id: De.playerId,
              commonGroupNetworkState: void 0
            }),
            groupId: this.groupInfo.id
          });
          ur.instance.group.joinGroup(n, ft(function (e) {
            _this30.groupUtil.saveGroupInfo(e), t && t(e);
          }));
        }
      }, {
        key: "leaveGroup",
        value: function leaveGroup(e, t) {
          var _this31 = this;

          var n = {
            groupId: this.groupInfo.id
          };
          ur.instance.group.leaveGroup(n, ft(function (e) {
            _this31.groupUtil.saveGroupInfo(e), t && t(e);
          }));
        }
      }, {
        key: "dismissGroup",
        value: function dismissGroup(e, t) {
          var _this32 = this;

          var n = {
            groupId: this.groupInfo.id
          };
          ur.instance.group.dismissGroup(n, ft(function (e) {
            e.code === o.QAppProtoErrCode.EC_OK && _this32.groupUtil.setGroupInfo(null), t && t(e);
          }));
        }
      }, {
        key: "changeGroup",
        value: function changeGroup(e, t) {
          var _this33 = this;

          var n = [];
          e.hasOwnProperty("groupName") && n.push(o.ChangeGroupOption.GROUP_NAME), e.hasOwnProperty("owner") && n.push(o.ChangeGroupOption.GROUP_OWNER), e.hasOwnProperty("customProperties") && n.push(o.ChangeGroupOption.GROUP_CUSTOM_PROPERTIES), e.hasOwnProperty("isForbidJoin") && n.push(o.ChangeGroupOption.GROUP_IS_FORBID_JOIN);
          var r = Object.assign({}, e, {
            groupId: this.groupInfo.id,
            changeGroupOptionList: n
          });
          ur.instance.group.changeGroup(r, ft(function (e) {
            _this33.groupUtil.saveGroupInfo(e), t && t(e);
          }));
        }
      }, {
        key: "removeGroupPlayer",
        value: function removeGroupPlayer(e, t) {
          var _this34 = this;

          var n = Object.assign({}, e, {
            groupId: this.groupInfo.id
          });
          ur.instance.group.removeGroupPlayer(n, ft(function (e) {
            _this34.groupUtil.saveGroupInfo(e), t && t(e);
          }));
        }
      }, {
        key: "changeCustomGroupPlayerStatus",
        value: function changeCustomGroupPlayerStatus(e, t) {
          var _this35 = this;

          var n = Object.assign({}, e, {
            groupId: this.groupInfo.id
          });
          ur.instance.group.changeCustomGroupPlayerStatus(n, ft(function (e) {
            _this35.groupUtil.saveGroupInfo(e), t && t(e);
          }));
        }
      }, {
        key: "changeGroupPlayerProfile",
        value: function changeGroupPlayerProfile(e, t) {
          var _this36 = this;

          var n = Object.assign({}, e, {
            groupId: this.groupInfo.id
          });
          ur.instance.group.changeGroupPlayerProfile(n, ft(function (e) {
            _this36.groupUtil.saveGroupInfo(e), t && t(e);
          }));
        }
      }, {
        key: "sendToGroupClient",
        value: function sendToGroupClient(e, t) {
          var n = Object.assign({}, e, {
            groupId: this.groupInfo.id
          });
          ur.instance.group.sendToGroupClient(n, ft(t));
        }
      }], [{
        key: "getGroupByGroupId",
        value: function getGroupByGroupId(e, t) {
          t = ft(t), ur.instance.group.getGroupByGroupId(e, t);
        }
      }, {
        key: "getMyGroups",
        value: function getMyGroups(e) {
          e = ft(e), ur.instance.group.getMyGroups({}, e);
        }
      }]);

      return pr;
    }( /*#__PURE__*/function () {
      function _class2() {
        _classCallCheck(this, _class2);
      }

      return _class2;
    }());

    var Rr = /*#__PURE__*/function () {
      function Rr(e, t) {
        _classCallCheck(this, Rr);

        this.frameIdFill = 0, this.frameIdSent = 0, this.autoReqFrameErrTimes = 0, this.lastFrameTime = 0, this.beginFrameId = -1, this.endFrameId = -1, this.fillCache = {}, this.timer = new mr(e), this.callback = t;
      }

      _createClass(Rr, [{
        key: "reset",
        value: function reset() {
          var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
          this.timer.init(), this.frameIdSent = e, this.frameIdFill = e, this.lastFrameTime = 0;
        }
      }, {
        key: "push",
        value: function push(e, t) {
          var n = e.data.frame.id;
          1 === n && this.reset(), this.timer.push(n, Date.now());
          var r = this.frameIdSent,
              i = this.frameIdFill;
          return this.frameIdFill = n, Le.isAutoRequestFrame ? n <= r + 1 ? this.send(e) : (this.fillCache[n] = {
            endFrameId: n,
            data: [e.data.frame]
          }, void (n > i + 1 && this.fill(i + 1, n - 1, t))) : this.send(e);
        }
      }, {
        key: "retryFill",
        value: function retryFill(e) {
          this.beginFrameId === this.endFrameId && this.beginFrameId < 0 || (this.autoReqFrameErrTimes = 0, this.fill(this.beginFrameId, this.endFrameId, e));
        }
      }, {
        key: "send",
        value: function send(e) {
          var t = e.data.frame.id;
          if (t <= this.frameIdSent) return;
          e.data.frame.time = this.timer.time(t), this.frameIdSent = t, this.callback(e), !this.lastFrameTime && (this.lastFrameTime = e.data.frame.time);
          var n = e.data.frame.time - this.lastFrameTime;
          0 !== n && Rn.onFitFrameTime(n), Math.abs(n) > 300 && !e.data.frame.isReplay && (this.reset(t), this.timer.push(t, Date.now())), this.lastFrameTime = e.data.frame.time;
        }
      }, {
        key: "fillSend",
        value: function fillSend(e) {
          var _this37 = this;

          if (e <= this.frameIdSent + 1 && this.fillCache[e]) {
            var _t16 = this.fillCache[e];
            delete this.fillCache[e], _t16.data.forEach(function (e) {
              return _this37.send({
                data: {
                  frame: e
                },
                seq: ""
              });
            }), this.fillSend(_t16.endFrameId + 1);
          }
        }
      }, {
        key: "fill",
        value: function fill(e, t, n) {
          var _this38 = this;

          n.isInRoom() && n.requestFrame({
            beginFrameId: e,
            endFrameId: t
          }, function (r) {
            if (_this38.beginFrameId = e, _this38.endFrameId = t, r.code !== o.QAppProtoErrCode.EC_OK) {
              if (_this38.autoReqFrameErrTimes++, _this38.autoReqFrameErrTimes <= 5) return _this38.fill(e, t, n);
              n.onAutoRequestFrameError && n.onAutoRequestFrameError({
                data: r,
                seq: ""
              });
            } else _this38.beginFrameId = -1, _this38.endFrameId = -1, _this38.autoReqFrameErrTimes = 0, _this38.fillCache[e] = {
              endFrameId: t,
              data: r.data.frames.map(function (e) {
                return Object.assign({}, e, {
                  roomId: n.roomInfo.id,
                  isReplay: !0
                });
              })
            }, _this38.fillSend(e);
          });
        }
      }]);

      return Rr;
    }();

    var mr = /*#__PURE__*/function () {
      function mr(e) {
        _classCallCheck(this, mr);

        this._a1 = e, this.init();
      }

      _createClass(mr, [{
        key: "init",
        value: function init() {
          this.n = 0, this.S_xi = 0, this.S_yi = 0, this.S_xiyi = 0, this.S_xixi = 0;
        }
      }, {
        key: "push",
        value: function push(e, t) {
          this.n++, this.S_xi += e, this.S_yi += t, this.S_xiyi += e * t, this.S_xixi += e * e;
        }
      }, {
        key: "a0",
        value: function a0(e) {
          return void 0 === e && (e = this.a1()), this.S_yi / this.n - this.a1() * this.S_xi / this.n;
        }
      }, {
        key: "a1",
        value: function a1() {
          return (this.n * this.S_xiyi - this.S_xi * this.S_yi) / (this.n * this.S_xixi - this.S_xi * this.S_xi);
        }
      }, {
        key: "ap",
        value: function ap() {
          var e = this.a1();
          return {
            a0: this.a0(e),
            a1: e
          };
        }
      }, {
        key: "time",
        value: function time(e) {
          if (0 === this.n) return 0;
          var t = this.n >= 2 ? this.ap() : {
            a0: this.S_yi - this.S_xi * this._a1,
            a1: this._a1
          };
          return Math.round(t.a0 + e * t.a1);
        }
      }]);

      return mr;
    }();

    var gr = /*#__PURE__*/function () {
      function gr(e) {
        var _this39 = this;

        _classCallCheck(this, gr);

        this.frameBroadcastFrameId = 0, this.room = e, this.frameBroadcast = new Rr(this.room.roomInfo.frameRate ? Math.floor(1e3 / this.room.roomInfo.frameRate) : 66, function (e) {
          e && e.data && e.data.frame && e.data.frame.items && e.data.frame.items.forEach(function (e) {
            return e.data = "object" == _typeof(e.data) ? e.data : JSON.parse(e.data);
          }), _this39.matchFrameBstAndInvoke("onRecvFrame", e);
        }), this.bstUpdater = new hr(function (e) {
          if (!_this39.room || !_this39.room.roomInfo || !_this39.room.roomInfo.id) return e(null, null);
          Cr.getRoomByRoomId({
            roomId: _this39.room.roomInfo.id
          }, function (t) {
            return t && t.data && t.data.roomInfo && t.data.roomInfo.id ? e(t.seq, t.data.roomInfo) : e(null, null);
          });
        });
      }

      _createClass(gr, [{
        key: "onNetwork",
        value: function onNetwork(e) {
          this.room.onUpdate && this.room.onUpdate(this.room);
        }
      }, {
        key: "onJoinRoom",
        value: function onJoinRoom(e) {
          var _this40 = this;

          this.matchRoomInfo(e) && this.bstUpdater.push({
            bstSeq: e.seq,
            shouldItemUpdate: function shouldItemUpdate(t) {
              return t.id === e.data.roomInfo.id;
            },
            itemUpdater: function itemUpdater(t, n) {
              var r = e.data.joinPlayerId;
              n && n.playerList && n.playerList.find(function (e) {
                return e.id === r;
              }) && (e.seq += "_" + t, e.data = Object.assign({}, e.data, {
                roomInfo: n
              }), _this40.saveAndInvoke("onJoinRoom", e));
            }
          });
        }
      }, {
        key: "onLeaveRoom",
        value: function onLeaveRoom(e) {
          this.bstUpdater.clear(), this.saveAndInvoke("onLeaveRoom", e);
        }
      }, {
        key: "onDismissRoom",
        value: function onDismissRoom(e) {
          var _this41 = this;

          this.bstUpdater.clear(), this.matchRoomInfoAndInvoke("onDismissRoom", e, function () {
            return _this41.room.roomInfo = {};
          });
        }
      }, {
        key: "onChangeRoom",
        value: function onChangeRoom(e) {
          var _this42 = this;

          this.matchRoomInfo(e) && this.bstUpdater.push({
            bstSeq: e.seq,
            shouldItemUpdate: function shouldItemUpdate(t) {
              return t.id === e.data.roomInfo.id;
            },
            itemUpdater: function itemUpdater(t, n) {
              e.seq += "_" + t, e.data = Object.assign({}, e.data, {
                roomInfo: n
              }), _this42.saveAndInvoke("onChangeRoom", e);
            }
          });
        }
      }, {
        key: "onRemovePlayer",
        value: function onRemovePlayer(e) {
          var _this43 = this;

          this.matchRoomInfo(e) && this.bstUpdater.push({
            bstSeq: e.seq,
            shouldItemUpdate: function shouldItemUpdate(t) {
              return t.id === e.data.roomInfo.id;
            },
            itemUpdater: function itemUpdater(t, n) {
              var r = e.data.removePlayerId;
              n && n.playerList && !n.playerList.find(function (e) {
                return e.id === r;
              }) && (e.seq += "_" + t, e.data = Object.assign({}, e.data, {
                roomInfo: n
              }), _this43.saveAndInvoke("onRemovePlayer", e));
            }
          });
        }
      }, {
        key: "onRecvFromClient",
        value: function onRecvFromClient(e) {
          this.matchIDAndInvoke("onRecvFromClient", e);
        }
      }, {
        key: "onRecvFromGameSvr",
        value: function onRecvFromGameSvr(e) {
          this.matchIDAndInvoke("onRecvFromGameSvr", e, null);
        }
      }, {
        key: "onMatchPlayers",
        value: function onMatchPlayers(e) {
          this.room.roomUtil.setRoomInfo(e.data.roomInfo), e.data.roomInfo && e.data.roomInfo.playerList && e.data.roomInfo.playerList.find(function (e) {
            return Or.isMe(e.id);
          }) && this.room.roomUtil.activeFrame();
          var t = e.data.matchType;
          yr.once(t, {
            code: o.QAppProtoErrCode.EC_OK,
            msg: "",
            seq: "",
            data: e.data
          });
        }
      }, {
        key: "onMatchTimeout",
        value: function onMatchTimeout(e) {
          var t = e.data.matchType,
              n = e.data.errCode || o.QAppProtoErrCode.EC_MATCH_TIMEOUT,
              _ct = ct(n, ""),
              r = _ct.errCode,
              i = _ct.errMsg;

          yr.once(t, {
            code: r,
            msg: i,
            seq: "",
            data: {}
          });
        }
      }, {
        key: "onChangePlayerNetworkState",
        value: function onChangePlayerNetworkState(e) {
          var _this44 = this;

          this.matchRoomInfo(e) && this.bstUpdater.push({
            bstSeq: e.seq,
            shouldItemUpdate: function shouldItemUpdate(t) {
              return t.id === e.data.roomInfo.id;
            },
            itemUpdater: function itemUpdater(t, n) {
              var r = e.data.changePlayerId,
                  i = n && n.playerList && n.playerList.find(function (e) {
                return e.id === r;
              });

              if (i) {
                e.seq += "_" + t;

                var _r13 = [Me.NetworkState.COMMON_OFFLINE, Me.NetworkState.COMMON_ONLINE].includes(e.data.networkState) ? i.commonNetworkState : i.relayNetworkState;

                e.data = Object.assign({}, e.data, {
                  networkState: _r13,
                  roomInfo: n
                }), _this44.saveAndInvoke("onChangePlayerNetworkState", e);
              }
            }
          });
        }
      }, {
        key: "onChangeCustomPlayerStatus",
        value: function onChangeCustomPlayerStatus(e) {
          var _this45 = this;

          this.matchRoomInfo(e) && this.bstUpdater.push({
            bstSeq: e.seq,
            shouldItemUpdate: function shouldItemUpdate(t) {
              return t.id === e.data.roomInfo.id;
            },
            itemUpdater: function itemUpdater(t, n) {
              var r = e.data.changePlayerId,
                  i = n && n.playerList && n.playerList.find(function (e) {
                return e.id === r;
              });
              i && (e.seq += "_" + t, e.data = Object.assign({}, e.data, {
                customPlayerStatus: i.customPlayerStatus,
                roomInfo: n
              }), _this45.saveAndInvoke("onChangeCustomPlayerStatus", e));
            }
          });
        }
      }, {
        key: "onChangeRoomPlayerProfile",
        value: function onChangeRoomPlayerProfile(e) {
          var _this46 = this;

          this.matchRoomInfo(e) && this.bstUpdater.push({
            bstSeq: e.seq,
            shouldItemUpdate: function shouldItemUpdate(t) {
              return t.id === e.data.roomInfo.id;
            },
            itemUpdater: function itemUpdater(t, n) {
              var r = e.data.changePlayerId,
                  i = n && n.playerList && n.playerList.find(function (e) {
                return e.id === r;
              });
              i && (e.seq += "_" + t, e.data = Object.assign({}, e.data, {
                customProfile: i.customProfile,
                roomInfo: n
              }), _this46.saveAndInvoke("onChangeRoomPlayerProfile", e));
            }
          });
        }
      }, {
        key: "onStartFrameSync",
        value: function onStartFrameSync(e) {
          var _this47 = this;

          this.frameBroadcast.reset(), this.matchRoomInfo(e) && this.bstUpdater.push({
            bstSeq: e.seq,
            shouldItemUpdate: function shouldItemUpdate(t) {
              return t.id === e.data.roomInfo.id;
            },
            itemUpdater: function itemUpdater(t, n) {
              e.seq += "_" + t, e.data = Object.assign({}, e.data, {
                roomInfo: n
              }), _this47.saveAndInvoke("onStartFrameSync", e);
            }
          });
        }
      }, {
        key: "onStopFrameSync",
        value: function onStopFrameSync(e) {
          var _this48 = this;

          this.matchRoomInfo(e) && this.bstUpdater.push({
            bstSeq: e.seq,
            shouldItemUpdate: function shouldItemUpdate(t) {
              return t.id === e.data.roomInfo.id;
            },
            itemUpdater: function itemUpdater(t, n) {
              e.seq += "_" + t, e.data = Object.assign({}, e.data, {
                roomInfo: n
              }), _this48.frameBroadcast.reset(), _this48.saveAndInvoke("onStopFrameSync", e);
            }
          });
        }
      }, {
        key: "onRecvFrame",
        value: function onRecvFrame(e) {
          this.room.roomInfo.frameSyncState !== o.FrameSyncState.STOP && this.frameBroadcast.push(e, this.room);
        }
      }, {
        key: "frameBroadcastFrameIdReset",
        value: function frameBroadcastFrameIdReset() {
          var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
          return this.frameBroadcast.reset(e);
        }
      }, {
        key: "matchRoomInfo",
        value: function matchRoomInfo(e) {
          return this.room.roomInfo.id === e.data.roomInfo.id;
        }
      }, {
        key: "matchID",
        value: function matchID(e) {
          return this.room.roomInfo.id === e.data.roomId;
        }
      }, {
        key: "invoke",
        value: function invoke(e, t) {
          this.room[e] && this.room[e].call(this.room, t);
        }
      }, {
        key: "saveAndInvoke",
        value: function saveAndInvoke(e, t) {
          this.matchRoomInfo(t) && (this.room.roomUtil.setRoomInfo(t.data.roomInfo), this.invoke(e, t));
        }
      }, {
        key: "matchFrameBstAndInvoke",
        value: function matchFrameBstAndInvoke(e, t, n) {
          this.matchID({
            data: t.data.frame,
            seq: ""
          }) && (n && n(t), this.invoke(e, t));
        }
      }, {
        key: "matchIDAndInvoke",
        value: function matchIDAndInvoke(e, t, n) {
          this.matchID(t) && (n && n(t), this.invoke(e, t));
        }
      }, {
        key: "matchRoomInfoAndInvoke",
        value: function matchRoomInfoAndInvoke(e, t, n) {
          this.matchRoomInfo(t) && (n && n(t), this.invoke(e, t));
        }
      }]);

      return gr;
    }();

    var yr = new ( /*#__PURE__*/function () {
      function _class3() {
        _classCallCheck(this, _class3);

        this.callbacks = {};
      }

      _createClass(_class3, [{
        key: "push",
        value: function push(e, t) {
          !this.callbacks[e] && (this.callbacks[e] = []), this.callbacks[e].push(t);
        }
      }, {
        key: "once",
        value: function once(e, t) {
          (this.callbacks[e] || []).forEach(function (e) {
            return e && e(t);
          }), this.removeCallbacksByTag(e);
        }
      }, {
        key: "removeCallbacksByTag",
        value: function removeCallbacksByTag(e) {
          e && this.callbacks[e] && delete this.callbacks[e];
        }
      }]);

      return _class3;
    }())(),
        Sr = new ( /*#__PURE__*/function () {
      function _class4() {
        _classCallCheck(this, _class4);
      }

      _createClass(_class4, [{
        key: "onMatchPlayers",
        value: function onMatchPlayers(e) {
          var t = {
            data: {
              roomInfo: e.data.roomInfo,
              errCode: Pe.EC_OK
            },
            seq: e.seq
          };
          Cr.onMatch && Cr.onMatch(t);
        }
      }, {
        key: "onMatchTimeout",
        value: function onMatchTimeout(e) {
          var t = {
            data: {
              roomInfo: null,
              errCode: e.data.errCode
            },
            seq: e.seq
          };
          Cr.onMatch && Cr.onMatch(t);
        }
      }, {
        key: "onCancelMatch",
        value: function onCancelMatch(e) {
          var t = {
            data: {
              matchCode: e.data.matchCode,
              playerId: e.data.playerId
            },
            seq: e.seq
          };
          Cr.onCancelMatch && Cr.onCancelMatch(t);
        }
      }]);

      return _class4;
    }())();

    var Ir = /*#__PURE__*/function () {
      function Ir(e) {
        _classCallCheck(this, Ir);

        this.room = e;
      }

      _createClass(Ir, [{
        key: "setRoomInfo",
        value: function setRoomInfo(e) {
          !e && (e = {});
          var t = JSON.parse(JSON.stringify(this.room.roomInfo || {}));
          this.room.roomInfo = JSON.parse(JSON.stringify(e || {})), this.room.roomInfo.playerList = this.room.roomInfo.playerList || [], this.room.isInRoom() && Ye.setInfo(this.room.roomInfo.playerList.find(function (e) {
            return e.id === De.playerId;
          })), t.id === this.room.roomInfo.id && this.room.roomInfo.id && this.room.isInRoom() && t.startGameTime === this.room.roomInfo.startGameTime || this.room.roomBroadcast && this.room.roomBroadcast.frameBroadcastFrameIdReset(), this.room.roomInfo && Array.isArray(this.room.roomInfo.playerList) && this.room.roomInfo.playerList.find(function (e) {
            return Or.isMe(e.id);
          }) && this.activeFrame(), this.room.onUpdate && this.room.onUpdate(this.room);
        }
      }, {
        key: "saveRoomInfo",
        value: function saveRoomInfo(e) {
          e.code === o.QAppProtoErrCode.EC_OK && this.setRoomInfo(e.data ? e.data.roomInfo : null);
        }
      }, {
        key: "setParam",
        value: function setParam(e) {
          this.room.roomInfo.id && (e.roomId = this.room.roomInfo.id);
        }
      }, {
        key: "addRoomParam",
        value: function addRoomParam() {
          return {
            roomId: this.room.roomInfo.id || ""
          };
        }
      }, {
        key: "initBroadcast",
        value: function initBroadcast() {
          this.room.roomBroadcast || (this.room.roomBroadcast = new gr(this.room));
        }
      }, {
        key: "activeFrame",
        value: function activeFrame() {
          return ur.instance.setFrameRoom(this.room.roomInfo);
        }
      }]);

      return Ir;
    }();

    var Cr = /*#__PURE__*/function (_ref21) {
      _inherits(Cr, _ref21);

      var _super12 = _createSuper(Cr);

      function Cr(e) {
        var _this49;

        _classCallCheck(this, Cr);

        _this49 = _super12.call(this), _this49.roomUtil = new Ir(_assertThisInitialized(_this49)), _this49.roomUtil.setRoomInfo(e || null);
        return _this49;
      }

      _createClass(Cr, [{
        key: "isInRoom",
        value: function isInRoom() {
          return !!this.roomInfo.playerList.find(function (e) {
            return e.id === De.playerId;
          });
        }
      }, {
        key: "initRoom",
        value: function initRoom(e) {
          this.roomUtil.setRoomInfo(e);
          var t = e;
          t && t.id && t.routeId && Array.isArray(t.playerList) && t.playerList.find(function (e) {
            return e.id && Or.isMe(e.id);
          }) && this.roomUtil.activeFrame();
        }
      }, {
        key: "onUpdate",
        value: function onUpdate(e) {}
      }, {
        key: "createRoom",
        value: function createRoom(e, t) {
          var _this50 = this;

          ur.instance.createRoom(e, ft(function (e) {
            _this50.roomUtil.saveRoomInfo(e), t && t(e);
          }));
        }
      }, {
        key: "createTeamRoom",
        value: function createTeamRoom(e, t) {
          var _this51 = this;

          ur.instance.createTeamRoom(e, ft(function (e) {
            _this51.roomUtil.saveRoomInfo(e), t && t(e);
          }));
        }
      }, {
        key: "joinRoom",
        value: function joinRoom(e, t) {
          var _this52 = this;

          ur.instance.joinRoom(Object.assign({}, e), this.roomInfo.id, ft(function (e) {
            _this52.roomUtil.saveRoomInfo(e), t && t(e);
          }));
        }
      }, {
        key: "joinTeamRoom",
        value: function joinTeamRoom(e, t) {
          var _this53 = this;

          ur.instance.joinTeamRoom(Object.assign({}, e), this.roomInfo.id, ft(function (e) {
            _this53.roomUtil.saveRoomInfo(e), t && t(e);
          }));
        }
      }, {
        key: "leaveRoom",
        value: function leaveRoom(e, t) {
          var _this54 = this;

          this.roomUtil.setParam(e), ur.instance.leaveRoom(ft(function (e) {
            _this54.roomUtil.saveRoomInfo(e), t && t(e);
          }));
        }
      }, {
        key: "dismissRoom",
        value: function dismissRoom(e, t) {
          var _this55 = this;

          ur.instance.dismissRoom(e, this.roomInfo.id, ft(function (e) {
            e.code === o.QAppProtoErrCode.EC_OK && _this55.roomUtil.setRoomInfo(null), t && t(e);
          }));
        }
      }, {
        key: "changeRoom",
        value: function changeRoom(e, t) {
          var _this56 = this;

          ur.instance.changeRoom(e, this.roomInfo, ft(function (e) {
            _this56.roomUtil.saveRoomInfo(e), t && t(e);
          }));
        }
      }, {
        key: "changeCustomPlayerStatus",
        value: function changeCustomPlayerStatus(e, t) {
          var _this57 = this;

          ur.instance.changeCustomPlayerStatus(Object.assign({}, e), this.roomInfo.id, ft(function (e) {
            _this57.roomUtil.saveRoomInfo(e), t && t(e);
          }));
        }
      }, {
        key: "changeRoomPlayerProfile",
        value: function changeRoomPlayerProfile(e, t) {
          var _this58 = this;

          ur.instance.changeRoomPlayerProfile(Object.assign({}, e), this.roomInfo.id, ft(function (e) {
            _this58.roomUtil.saveRoomInfo(e), t && t(e);
          }));
        }
      }, {
        key: "removePlayer",
        value: function removePlayer(e, t) {
          var _this59 = this;

          ur.instance.removePlayer(e, ft(function (e) {
            _this59.roomUtil.saveRoomInfo(e), t && t(e);
          }));
        }
      }, {
        key: "getRoomDetail",
        value: function getRoomDetail(e) {
          var _this60 = this;

          ur.instance.getRoomByRoomId(Object.assign({}, this.roomUtil.addRoomParam()), ft(function (t) {
            _this60.roomUtil.saveRoomInfo(t), e && e(t);
          }));
        }
      }, {
        key: "matchPlayers",
        value: function matchPlayers(e, t) {
          var n = t;
          ot.log("typeof_Room.onMatch", _typeof(Cr.onMatch)), "function" != typeof Cr.onMatch && (yr.push(o.MatchType.PLAYER_COMPLEX, t), n = function n(e) {
            if (e.code !== o.QAppProtoErrCode.EC_OK) return e.data = null, yr.once(o.MatchType.PLAYER_COMPLEX, e);
          }), ur.instance.matchPlayers(e, ft(n));
        }
      }, {
        key: "matchGroup",
        value: function matchGroup(e, t) {
          ur.instance.matchGroup(e, ft(t));
        }
      }, {
        key: "matchRoom",
        value: function matchRoom(e, t) {
          var _this61 = this;

          ur.instance.matchRoom(e, ft(function (e) {
            _this61.roomUtil.saveRoomInfo(e), t && t(e);
          }));
        }
      }, {
        key: "cancelPlayerMatch",
        value: function cancelPlayerMatch(e, t) {
          var n = t;
          e.matchType === Me.MatchType.PLAYER_COMPLEX && (n = function n(_n17) {
            _n17.code === Pe.EC_OK && yr.removeCallbacksByTag(e.matchType), t && t(_n17);
          }), ur.instance.cancelMatch(e, ft(n));
        }
      }, {
        key: "startFrameSync",
        value: function startFrameSync(e, t) {
          this.roomUtil.activeFrame(), ur.instance.startFrameSync(ft(t));
        }
      }, {
        key: "stopFrameSync",
        value: function stopFrameSync(e, t) {
          this.roomUtil.activeFrame(), ur.instance.stopFrameSync(ft(t));
        }
      }, {
        key: "sendFrame",
        value: function sendFrame(e, t) {
          this.roomUtil.activeFrame(), ur.instance.sendFrame(e, ft(t));
        }
      }, {
        key: "requestFrame",
        value: function requestFrame(e, t) {
          this.roomUtil.activeFrame(), ur.instance.requestFrame(e, ft(function (e) {
            e && e.data && e.data.frames && e.data.frames.forEach(function (e) {
              e.items.forEach(function (e) {
                e.data = "object" == _typeof(e.data) ? e.data : JSON.parse(e.data);
              });
            }), t && t(e);
          }));
        }
      }, {
        key: "retryAutoRequestFrame",
        value: function retryAutoRequestFrame() {
          this.roomBroadcast.frameBroadcast.retryFill(this);
        }
      }, {
        key: "sendToClient",
        value: function sendToClient(e, t) {
          var n = e.recvPlayerList || [];
          e.recvType === Me.RecvType.ROOM_ALL ? n = this.roomInfo.playerList.map(function (e) {
            return e.id;
          }) : e.recvType === Me.RecvType.ROOM_OTHERS && (n = this.roomInfo.playerList.filter(function (e) {
            return e.id !== De.playerId;
          }).map(function (e) {
            return e.id;
          }));
          var r = {
            recvType: void 0,
            recvPlayerList: n,
            msg: e.msg
          };
          ur.instance.sendToClient(r, this.roomInfo.id, ft(t));
        }
      }, {
        key: "sendToGameSvr",
        value: function sendToGameSvr(e, t) {
          this.roomUtil.activeFrame(), ur.instance.sendToGameSvr(e, this.roomInfo.id, ft(t));
        }
      }, {
        key: "networkState",
        get: function get() {
          var e = !1,
              t = !1;
          var n = ur.instance.getSocket(o.ConnectionType.COMMON),
              r = ur.instance.getSocket(o.ConnectionType.RELAY);
          return {
            COMMON: e = !(!n || !n.isConnect()),
            RELAY: t = !(!r || !r.isConnect())
          };
        }
      }], [{
        key: "getRoomList",
        value: function getRoomList(e, t) {
          ur.instance.getRoomList(e, ft(t));
        }
      }, {
        key: "getRoomByRoomId",
        value: function getRoomByRoomId(e, t) {
          ur.instance.getRoomByRoomId(e, ft(t));
        }
      }, {
        key: "getMyRoom",
        value: function getMyRoom(e) {
          ur.instance.getRoomByRoomId({
            roomId: ""
          }, ft(e));
        }
      }]);

      return Cr;
    }( /*#__PURE__*/function () {
      function _class5() {
        _classCallCheck(this, _class5);
      }

      return _class5;
    }());

    var Or = /*#__PURE__*/function () {
      function Or() {
        _classCallCheck(this, Or);
      }

      _createClass(Or, null, [{
        key: "isMe",
        value: function isMe(e) {
          return De.playerId === e;
        }
      }, {
        key: "init",
        value: function init(e, t, n) {
          ur.instance = new ur(e, t), ur.instance.init(ft(n)), ur.bstCallbacks.room.bindCallbacks(Sr);
        }
      }, {
        key: "add",
        value: function add(e) {
          if (e instanceof Cr) {
            var _t17 = e;
            return _t17.roomUtil.initBroadcast(), void ur.bstCallbacks.room.bindCallbacks(_t17.roomBroadcast);
          }

          if (e instanceof pr) {
            var _t18 = e;
            return _t18.groupUtil.initBroadcast(), void ur.bstCallbacks.group.bindCallbacks(_t18.groupBroadcast);
          }
        }
      }, {
        key: "remove",
        value: function remove(e) {
          if (e instanceof Cr) {
            var _t19 = e;
            ur.bstCallbacks.room.unbindCallbacks(_t19.roomBroadcast);
          } else if (e instanceof pr) {
            var _t20 = e;
            ur.bstCallbacks.group.unbindCallbacks(_t20.groupBroadcast);
          }
        }
      }, {
        key: "clear",
        value: function clear() {
          ur.bstCallbacks.room.clearCallbacks(), ur.bstCallbacks.room.bindCallbacks(Sr), ur.bstCallbacks.group.clearCallbacks();
        }
      }, {
        key: "isInited",
        get: function get() {
          return !!ur.instance && ur.instance.isInited();
        }
      }]);

      return Or;
    }();

    var Tr = 0;
    var Ar = Math.pow(2, 32) - 1;
    var Pr = {
      init: function init(e) {
        Tr = e;
      },
      random: function random() {
        var e = (1103515245 * Tr + 123456789) % Ar;
        return Tr = e, e / Ar;
      }
    };

    var Mr = function Mr() {
      _classCallCheck(this, Mr);
    };

    Mr.Listener = null, Mr.Room = null, Mr.Group = null, Mr.ENUM = null, Mr.ErrCode = null, Mr.RandomUtil = null, Mr.DebuggerLog = null, Mr.Player = null, Mr.StatCallbacks = null, Mr.Listener = Or, Mr.Room = Cr, Mr.Group = pr, Mr.ENUM = Me, Mr.ErrCode = Pe, Mr.RandomUtil = Pr, Mr.DebuggerLog = ot, Mr.Player = mn, Mr.StatCallbacks = Rn, (Xe.root || {}).MGOBE = Mr, Mr.types = Me, Mr.Adapter = {
      channel: ze,
      platform: $e
    }, t["default"] = Mr;
  }])["default"];
});

cc._RF.pop();