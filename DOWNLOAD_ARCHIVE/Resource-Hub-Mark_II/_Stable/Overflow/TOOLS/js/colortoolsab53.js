function colorToRGBA(color) {
  var probe = document.createElement("canvas");
  probe.width = 1;
  probe.height = 1;

  var ctx = probe.getContext("2d");

  ctx.rect(0, 0, 1, 1);
  ctx.fillStyle = color;
  ctx.fill();

  var data = ctx.getImageData(0, 0, 1, 1).data;

  return {
    r: data[0],
    g: data[1],
    b: data[2],
    a: data[3],
    toString: function () {
      return (
        "rgba(" + this.r + "," + this.g + "," + this.b + "," + this.a + ")"
      );
    },
    toArray: function () {
      return [this.r, this.g, this.b, this.a];
    },
    toInteger: function () {
      var r = this.r & 0xff;
      var g = this.g & 0xff;
      var b = this.b & 0xff;
      var a = this.a & 0xff;

      return (r << 24) + (g << 16) + (b << 8) + a;
    },
  };
}

function colorToRGB(color) {
  var probe = document.createElement("canvas");
  probe.width = 1;
  probe.height = 1;

  var ctx = probe.getContext("2d");

  ctx.rect(0, 0, 1, 1);
  ctx.fillStyle = color;
  ctx.fill();

  var data = ctx.getImageData(0, 0, 1, 1).data;

  return {
    r: data[0],
    g: data[1],
    b: data[2],
    toString: function () {
      return "rgb(" + this.r + "," + this.g + "," + this.b + ")";
    },
    toArray: function () {
      return [this.r, this.g, this.b];
    },
    toInteger: function () {
      function hexToStr(x) {
        var str = x.toString(16);
        if (str.length == 1) {
          str = "0" + str;
        }
        return str;
      }
      function hexToInt(x) {
        return parseInt(x, 16);
      }

      var r = this.r & 0xff;
      var g = this.g & 0xff;
      var b = this.b & 0xff;

      return hexToInt("0x" + hexToStr(r) + hexToStr(g) + hexToStr(b));
    },
  };
}

function isColorValid(color) {
  if (!color) return false;
  var e = document.createElement("div");
  e.style.color = color;
  return e.style.color !== "";
}

function rgbaDifference(colorA, colorB) {
  if (colorA.a == 0 && colorB.a == 0) {
    return 0;
  }
  if (colorA.a == 0 || colorB.a == 0) {
    return 1000;
  }
  return deltaE(rgba2lab(colorA), rgba2lab(colorB));
}

function rgba2lab(rgba) {
  var r = rgba.r / rgba.a,
    g = rgba.g / rgba.a,
    b = rgba.b / rgba.a,
    x,
    y,
    z;

  r = r > 0.04045 ? Math.pow((r + 0.055) / 1.055, 2.4) : r / 12.92;
  g = g > 0.04045 ? Math.pow((g + 0.055) / 1.055, 2.4) : g / 12.92;
  b = b > 0.04045 ? Math.pow((b + 0.055) / 1.055, 2.4) : b / 12.92;

  x = (r * 0.4124 + g * 0.3576 + b * 0.1805) / 0.95047;
  y = (r * 0.2126 + g * 0.7152 + b * 0.0722) / 1.0;
  z = (r * 0.0193 + g * 0.1192 + b * 0.9505) / 1.08883;

  x = x > 0.008856 ? Math.pow(x, 1 / 3) : 7.787 * x + 16 / 116;
  y = y > 0.008856 ? Math.pow(y, 1 / 3) : 7.787 * y + 16 / 116;
  z = z > 0.008856 ? Math.pow(z, 1 / 3) : 7.787 * z + 16 / 116;

  return [116 * y - 16, 500 * (x - y), 200 * (y - z)];
}

function deltaE(labA, labB) {
  var deltaL = labA[0] - labB[0];
  var deltaA = labA[1] - labB[1];
  var deltaB = labA[2] - labB[2];
  var c1 = Math.sqrt(labA[1] * labA[1] + labA[2] * labA[2]);
  var c2 = Math.sqrt(labB[1] * labB[1] + labB[2] * labB[2]);
  var deltaC = c1 - c2;
  var deltaH = deltaA * deltaA + deltaB * deltaB - deltaC * deltaC;
  deltaH = deltaH < 0 ? 0 : Math.sqrt(deltaH);
  var sc = 1.0 + 0.045 * c1;
  var sh = 1.0 + 0.015 * c1;
  var deltaLKlsl = deltaL / 1.0;
  var deltaCkcsc = deltaC / sc;
  var deltaHkhsh = deltaH / sh;
  var i =
    deltaLKlsl * deltaLKlsl + deltaCkcsc * deltaCkcsc + deltaHkhsh * deltaHkhsh;
  return i < 0 ? 0 : Math.sqrt(i);
}
