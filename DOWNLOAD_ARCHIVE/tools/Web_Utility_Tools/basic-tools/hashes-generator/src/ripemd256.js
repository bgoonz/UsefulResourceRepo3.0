(function (Math) {
  // Shortcuts
  var C = CryptoJS;
  var C_lib = C.lib;
  var WordArray = C_lib.WordArray;
  var Hasher = C_lib.Hasher;
  var C_algo = C.algo;

  // Constants table
  var _zl = WordArray.create([
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6,
    15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13,
    11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2,
  ]);
  var _zr = WordArray.create([
    5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5,
    10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10,
    0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14,
  ]);
  var _sl = WordArray.create([
    11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11, 9,
    7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13,
    6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12,
  ]);
  var _sr = WordArray.create([
    8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8,
    9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14,
    13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8,
  ]);

  var _hl = WordArray.create([0x00000000, 0x5a827999, 0x6ed9eba1, 0x8f1bbcdc]);
  var _hr = WordArray.create([0x50a28be6, 0x5c4dd124, 0x6d703ef3, 0x00000000]);

  /**
   * RIPEMD256 hash algorithm.
   */
  var RIPEMD256 = (C_algo.RIPEMD256 = Hasher.extend({
    _doReset: function () {
      this._hash = WordArray.create([
        0x67452301, 0xefcdab89, 0x98badcfe, 0x10325476, 0x76543210, 0xfedcba98,
        0x89abcdef, 0x01234567,
      ]);
    },

    _doProcessBlock: function (M, offset) {
      // Swap endian
      for (var i = 0; i < 16; i++) {
        // Shortcuts
        var offset_i = offset + i;
        var M_offset_i = M[offset_i];

        // Swap
        M[offset_i] =
          (((M_offset_i << 8) | (M_offset_i >>> 24)) & 0x00ff00ff) |
          (((M_offset_i << 24) | (M_offset_i >>> 8)) & 0xff00ff00);
      }
      // Shortcut
      var H = this._hash.words;
      var hl = _hl.words;
      var hr = _hr.words;
      var zl = _zl.words;
      var zr = _zr.words;
      var sl = _sl.words;
      var sr = _sr.words;

      // Working variables
      var al, bl, cl, dl;
      var ar, br, cr, dr;

      al = H[0];
      bl = H[1];
      cl = H[2];
      dl = H[3];
      ar = H[4];
      br = H[5];
      cr = H[6];
      dr = H[7];
      // Computation
      var t;
      for (var i = 0; i < 64; i += 1) {
        t = (al + M[offset + zl[i]]) | 0;
        if (i < 16) {
          t += f1(bl, cl, dl) + hl[0];
        } else if (i < 32) {
          t += f2(bl, cl, dl) + hl[1];
        } else if (i < 48) {
          t += f3(bl, cl, dl) + hl[2];
        } else if (i < 64) {
          t += f4(bl, cl, dl) + hl[3];
        }
        t = t | 0;
        t = rotl(t, sl[i]);
        al = dl;
        dl = cl;
        cl = bl;
        bl = t;

        t = (ar + M[offset + zr[i]]) | 0;
        if (i < 16) {
          t += f4(br, cr, dr) + hr[0];
        } else if (i < 32) {
          t += f3(br, cr, dr) + hr[1];
        } else if (i < 48) {
          t += f2(br, cr, dr) + hr[2];
        } else if (i < 64) {
          t += f1(br, cr, dr) + hr[3];
        }
        t = t | 0;
        t = rotl(t, sr[i]);
        ar = dr;
        dr = cr;
        cr = br;
        br = t;

        if (i == 15) {
          t = al;
          al = ar;
          ar = t;
        } else if (i == 31) {
          t = bl;
          bl = br;
          br = t;
        } else if (i == 47) {
          t = cl;
          cl = cr;
          cr = t;
        } else if (i == 63) {
          t = dl;
          dl = dr;
          dr = t;
        }
      }
      // Intermediate hash value
      H[0] = (H[0] + al) | 0;
      H[1] = (H[1] + bl) | 0;
      H[2] = (H[2] + cl) | 0;
      H[3] = (H[3] + dl) | 0;
      H[4] = (H[4] + ar) | 0;
      H[5] = (H[5] + br) | 0;
      H[6] = (H[6] + cr) | 0;
      H[7] = (H[7] + dr) | 0;
    },

    _doFinalize: function () {
      // Shortcuts
      var data = this._data;
      var dataWords = data.words;

      var nBitsTotal = this._nDataBytes * 8;
      var nBitsLeft = data.sigBytes * 8;

      // Add padding
      dataWords[nBitsLeft >>> 5] |= 0x80 << (24 - (nBitsLeft % 32));
      dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 14] =
        (((nBitsTotal << 8) | (nBitsTotal >>> 24)) & 0x00ff00ff) |
        (((nBitsTotal << 24) | (nBitsTotal >>> 8)) & 0xff00ff00);
      data.sigBytes = (dataWords.length + 1) * 4;

      // Hash final blocks
      this._process();

      // Shortcuts
      var hash = this._hash;
      var H = hash.words;

      // Swap endian
      for (var i = 0; i < 8; i++) {
        // Shortcut
        var H_i = H[i];

        // Swap
        H[i] =
          (((H_i << 8) | (H_i >>> 24)) & 0x00ff00ff) |
          (((H_i << 24) | (H_i >>> 8)) & 0xff00ff00);
      }

      // Return final computed hash
      return hash;
    },

    clone: function () {
      var clone = Hasher.clone.call(this);
      clone._hash = this._hash.clone();

      return clone;
    },
  }));

  function f1(x, y, z) {
    return x ^ y ^ z;
  }

  function f2(x, y, z) {
    return (x & y) | (~x & z);
  }

  function f3(x, y, z) {
    return (x | ~y) ^ z;
  }

  function f4(x, y, z) {
    return (x & z) | (y & ~z);
  }

  function rotl(x, n) {
    return (x << n) | (x >>> (32 - n));
  }

  /**
   * Shortcut function to the hasher's object interface.
   *
   * @param {WordArray|string} message The message to hash.
   *
   * @return {WordArray} The hash.
   *
   * @static
   *
   * @example
   *
   *     var hash = CryptoJS.RIPEMD256('message');
   *     var hash = CryptoJS.RIPEMD256(wordArray);
   */
  C.RIPEMD256 = Hasher._createHelper(RIPEMD256);

  /**
   * Shortcut function to the HMAC's object interface.
   *
   * @param {WordArray|string} message The message to hash.
   * @param {WordArray|string} key The secret key.
   *
   * @return {WordArray} The HMAC.
   *
   * @static
   *
   * @example
   *
   *     var hmac = CryptoJS.HmacRIPEMD256(message, key);
   */
  C.HmacRIPEMD256 = Hasher._createHmacHelper(RIPEMD256);
})(Math);
