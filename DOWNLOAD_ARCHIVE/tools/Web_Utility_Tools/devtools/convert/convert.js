function setfocus() {
  document.calcform.x.focus();
}
function calc() {
  x = document.calcform.x.value;
  y = convert(x);
  y = roundresult(y);
  document.calcform.y.value = y;
}
function calctest() {
  x = document.calcform.x.value;
  y = convert(x);
  //y = roundresult(y);
  y = roundresult1(y);
  document.calcform.y.value = y;
}
function calc3() {
  x1 = document.calcform.x1.value;
  x2 = document.calcform.x2.value;
  y = convert(x1, x2);
  y = roundresult(y);
  document.calcform.y.value = y;
}
function calc4() {
  x1 = document.calcform.x1.value;
  x2 = document.calcform.x2.value;
  x3 = document.calcform.x3.value;
  y = convert(x1, x2, x3);
  y = roundresult(y);
  //yy = y.toString();
  //if( yy.length>12 ) {
  //	y = parseFloat(y);
  //	y = y.toPrecision(10);
  //}
  document.calcform.y.value = y;
}
function calc5() {
  x = document.calcform.x.value;
  y = convert1(x);
  y = roundresult(y);
  document.calcform.y1.value = y;
  y = convert2(x);
  y = roundresult(y);
  document.calcform.y2.value = y;
}
function str2num(s) {
  s = s
    .toString()
    .trim()
    .replace(/(\d)(\s+)(?=\d)/gm, "$1+")
    .replace(/[^-()\d/*+.]/g, "");
  if (s == "") return 0;
  return Function('"use strict";return (' + s + ")")();
}
function isInt(n) {
  return Number(n) === n && n % 1 === 0;
}

function isFloat(n) {
  return Number(n) === n && n % 1 !== 0;
}
function roundresult(x) {
  y = parseFloat(x);
  y = roundnum(y, 10);
  return y;
}
function roundnum(x, p) {
  var i;
  var n = parseFloat(x);
  var m = n.toPrecision(p + 1);
  var y = String(m);
  i = y.indexOf("e");
  if (i == -1) i = y.length;
  j = y.indexOf(".");
  if (i > j && j != -1) {
    while (i > 0) {
      if (y.charAt(--i) == "0") y = removeAt(y, i);
      else break;
    }
    if (y.charAt(i) == ".") y = removeAt(y, i);
  }
  return y;
}
function removeAt(s, i) {
  s = s.substring(0, i) + s.substring(i + 1, s.length);
  return s;
}
