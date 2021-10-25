javascript: (function () {
  d = document;
  t = d.querySelector("img");
  var s = String.fromCharCode,
    c = d.createElement("canvas");
  var cs = c.style,
    cx = c.getContext("2d"),
    w = t.offsetWidth,
    h = t.offsetHeight;
  c.width = w;
  c.height = h;
  cs.width = w + "px";
  cs.height = h + "px";
  cx.drawImage(t, 0, 0);
  var x = cx.getImageData(0, 0, w, h).data;
  var a = "",
    l = x.length,
    p = -1;
  for (var i = 0; i < l; i += 4) {
    if (x[i + 0]) a += s(x[i + 0]);
    if (x[i + 1]) a += s(x[i + 1]);
    if (x[i + 2]) a += s(x[i + 2]);
  }
  var dd = d.documentElement;
  while (dd.firstChild) {
    dd.removeChild(dd.firstChild);
  }
  var doc = new DOMParser().parseFromString(a, "text/html");
  var head = new Range().createContextualFragment(doc.head.outerHTML);
  var body = new Range().createContextualFragment(doc.body.outerHTML);
  dd.appendChild(head);
  dd.appendChild(body);
})();
