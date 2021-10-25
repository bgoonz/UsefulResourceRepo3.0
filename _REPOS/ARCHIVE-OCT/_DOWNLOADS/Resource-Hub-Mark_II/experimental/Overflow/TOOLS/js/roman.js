/*!
 * repeat-string <https://github.com/jonschlinkert/repeat-string>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

function repeat(str, num) {
  var cache = '';
  var res = '';

  if (typeof str !== 'string') {
    throw new TypeError('expected a string');
  }

  // cover common, quick use cases
  if (num === 1) return str;
  if (num === 2) return str + str;

  var max = str.length * num;
  if (cache !== str || typeof cache === 'undefined') {
    cache = str;
    res = '';
  } else if (res.length >= max) {
    return res.substr(0, max);
  }

  while (max > res.length && num > 1) {
    if (num & 1) {
      res += str;
    }

    num >>= 1;
    str += str;
  }

  res += str;
  res = res.substr(0, max);
  return res;
}

/*!
 * romanize <https://github.com/jonschlinkert/romanize>
 * Inspired by http://bit.ly/1weeOfY
 *
 * Copyright (c) 2014, 2017, Jon Schlinkert.
 * Released under the MIT License.
 */


function toRoman (num) {
  var numerals = { M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1 };
  var keys = Object.keys(numerals);
  var str = '';

  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    str += repeat(key, num / numerals[key] >>> 0);
    num %= numerals[key];
  }
  return str;
};

/*!
 * deromanize <https://github.com/jonschlinkert/deromanize>
 * Inspired by http://bit.ly/1weeOfY
 *
 * Copyright (c) 2014, 2017, Jon Schlinkert.
 * Released under the MIT License.
 */


function fromRoman (roman) {
  var numerals = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  roman = roman.toUpperCase().split('');
  var num = 0;
  var val = 0;

  while (roman.length) {
    val = numerals[roman.shift()];
    num += val * (val < numerals[roman[0]] ? -1 : 1);
  }
  return num;
};

