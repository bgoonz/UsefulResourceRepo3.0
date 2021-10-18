// mathview.js
"use strict";

function ClearView(obj) {
  var ctx = obj.getContext("2d");
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}

// for fraction/integer number/
function CircNumber(obj, data) {
  var r = data.radius;
  var n = Math.abs(data.n);
  var d = 2 * (r + data.lineWidth + 1);
  if (data.lineColor === undefined) data.lineColor = "black";
  if (data.fillColor === undefined) data.fillColor = "green";
  if (data.lineWidth === undefined) data.lineWidth = 2;
  var num = Math.abs(data.num);
  var den = Math.abs(data.den);
  n = Math.floor(n);
  num = Math.floor(num);
  den = Math.floor(den);
  if (data.noLines === undefined) {
    if (den > 15) data.noLines = true;
    else data.noLines = false;
  }
  n += Math.floor(num / den);
  num %= den;
  if (data.width === undefined) data.width = d * (n + 1);
  if (data.height === undefined) data.height = 2 * (r + data.lineWidth);
  var pi = Math.PI;
  var x = d / 2;
  var y = data.height / 2;
  var ctx = obj.getContext("2d");
  ctx.canvas.width = data.width;
  ctx.canvas.height = data.height;
  ctx.strokeStyle = data.lineColor;
  ctx.lineWidth = data.lineWidth;
  ctx.lineCap = "round";
  if (n > 5) return;
  if (n >= 1) {
    for (var i = 0; i < n; i++) {
      ctx.beginPath();
      ctx.arc(x + i * d, y, r, 0, 2 * pi);
      ctx.fillStyle = data.fillColor;
      ctx.fill();
      ctx.stroke();
      ctx.closePath();
    }
  }
  if (den >= 2 && num > 0) {
    x += n * d;
    var dx, dy;
    var a = -pi / 2;
    var da = (2 * pi) / den;
    if (data.noLines == true) {
      ctx.beginPath();
      dx = r * Math.cos(a);
      dy = r * Math.sin(a);
      da *= num;
      ctx.moveTo(x, y);
      ctx.lineTo(x + dx, y + dy);
      ctx.arc(x, y, r, a, a + da);
      ctx.lineTo(x, y);
      ctx.fillStyle = data.fillColor;
      ctx.fill();
      ctx.arc(x, y, r, a + da, a);
      ctx.stroke();
      ctx.closePath();
    } else
      for (var i = 0; i < den; i++, a += da) {
        ctx.beginPath();
        dx = r * Math.cos(a);
        dy = r * Math.sin(a);
        ctx.moveTo(x, y);
        ctx.lineTo(x + dx, y + dy);
        ctx.arc(x, y, r, a, a + da);
        if (i < num) {
          ctx.fillStyle = data.fillColor;
          ctx.fill();
        }
        ctx.stroke();
        ctx.closePath();
      }
  }
}

function RectNumber(obj, data) {
  var n = Math.abs(data.n);
  if (data.lineColor === undefined) data.lineColor = "black";
  if (data.fillColor === undefined) data.fillColor = "green";
  if (data.lineWidth === undefined) data.lineWidth = 10;
  if (data.noLines === undefined) data.noLines = false;
  var num = Math.abs(data.num);
  var den = Math.abs(data.den);
  n = Math.floor(n);
  num = Math.floor(num);
  den = Math.floor(den);
  n += Math.floor(num / den);
  num %= den;
  if (data.width === undefined) data.width = 100;
  if (data.height === undefined) data.height = 50;
  var ctx = obj.getContext("2d");
  ctx.canvas.width = data.width * (n + 1) + 20;
  ctx.canvas.height = data.height + 20;
  ctx.strokeStyle = data.lineColor;
  ctx.fillStyle = data.fillColor;
  ctx.lineWidth = data.lineWidth;
  ctx.lineCap = "round";
  var x = data.lineWidth;
  var y = data.lineWidth;
  var dx = data.width / den;
  var dy = data.height;
  if (data.noLines) {
    ctx.beginPath();
    ctx.rect(x, y, dx * den, dy);
    ctx.rect(x, y, dx * den, dy);
    ctx.rect(x, y, dx * num, dy);
    ctx.fillRect(x, y, dx * num, dy);
    ctx.stroke();
  } else
    for (var i = 0; i < den; i++, x += dx) {
      ctx.beginPath();
      ctx.rect(x, y, dx, dy);
      if (i < num) ctx.fillRect(x, y, dx, dy);
      ctx.stroke();
    }

  if (data.label != undefined) {
    ctx.font = "14px Georgia";
    ctx.fillStyle = "#ffffaa";
    ctx.textAlign = "start";
    ctx.textBaseline = "middle";
    ctx.fillText(data.label, 10, data.height / 2);
    ctx.stroke();
  }
}

function Angle(obj, data) {
  var r = data.radius;
  if (data.lineColor === undefined) data.lineColor = "black";
  if (data.lineWidth === undefined) data.lineWidth = 4;
  if (data.width === undefined) data.width = 2.1 * r;
  var pi = Math.PI;
  var degrees = data.degrees % 360;
  var a = (degrees * pi) / 180;
  var ctx = obj.getContext("2d");
  ctx.canvas.width = data.width;
  ctx.canvas.height = 2.1 * r;
  ctx.strokeStyle = data.lineColor;
  ctx.lineWidth = data.lineWidth;
  ctx.beginPath();
  ctx.lineCap = "round";
  ctx.moveTo(r, r);
  ctx.lineTo(2 * r, r);
  ctx.moveTo(r, r);
  var x = r * Math.cos(a);
  var y = r * Math.sin(a);
  ctx.lineTo(r + x, r - y);
  ctx.moveTo(r, r);
  //ctx.closePath();
  ctx.stroke();
  ctx.lineWidth = 1;
  if (degrees == 90) {
    ctx.moveTo(r + r / 3, r);
    ctx.lineTo(r + r / 3, r - r / 3);
    ctx.lineTo(r, r - r / 3);
  } else if (degrees == -90) {
    ctx.moveTo(r + r / 3, r);
    ctx.lineTo(r + r / 3, r + r / 3);
    ctx.lineTo(r, r + r / 3);
  } else {
    if (data.degrees == 0 || data.degrees == -360) a = 2 * pi;
    if (data.degrees == 360) a = 0;
    if (data.degrees < 0) ctx.arc(r, r, r / 3, 0, -a, false);
    else ctx.arc(r, r, r / 3, 0, 2 * pi - a, true);
  }
  ctx.fillStyle = data.fillColor;
  ctx.fill();
  ctx.stroke();
}

function TempScale(obj, temp, min, max, color) {}

// convert 2/3 to fraction
function SetFraction() {}
