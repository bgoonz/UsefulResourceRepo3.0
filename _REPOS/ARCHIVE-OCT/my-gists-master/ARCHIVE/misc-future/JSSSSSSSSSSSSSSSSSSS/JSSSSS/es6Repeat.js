"use strict";

module.exports = function (str, len, ch) {
  str = str + "";

  len = len - str.length;
  if (len <= 0) return str;

  if (!ch && ch !== 0) ch = " ";
  ch = ch + "";

  return ch.repeat(len) + str;
};
