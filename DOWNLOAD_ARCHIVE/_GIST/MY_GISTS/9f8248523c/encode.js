javascript: (function () {
  function encode(a) {
    if (a.length) {
      var c = a.length,
        e = Math.ceil(Math.sqrt(c / 3)),
        f = e,
        g = document.createElement("canvas"),
        h = g.getContext("2d");
      (g.width = e), (g.height = f);
      var j = h.getImageData(0, 0, e, f),
        k = j.data,
        l = 0;
      for (var m = 0; m < f; m++)
        for (var n = 0; n < e; n++) {
          var o = 4 * (m * e) + 4 * n,
            p = a[l++],
            q = a[l++],
            r = a[l++];
          (p || q || r) &&
            (p && (k[o] = ord(p)),
            q && (k[o + 1] = ord(q)),
            r && (k[o + 2] = ord(r)),
            (k[o + 3] = 255));
        }
      return h.putImageData(j, 0, 0), h.canvas.toDataURL();
    }
  }
  var ord = function ord(a) {
      var c = a + "",
        e = c.charCodeAt(0);
      if (55296 <= e && 56319 >= e) {
        if (1 === c.length) return e;
        var f = c.charCodeAt(1);
        return 1024 * (e - 55296) + (f - 56320) + 65536;
      }
      return 56320 <= e && 57343 >= e ? e : e;
    },
    d = document,
    b = d.body,
    img = new Image();
  (img.src = encode(d.querySelector("table").innerText)),
    (b.innerHTML = ""),
    b.appendChild(img);
})();
