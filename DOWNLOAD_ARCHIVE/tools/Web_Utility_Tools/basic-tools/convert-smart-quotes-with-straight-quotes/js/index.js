function convert() {
  var orig = document.getElementById("input").value;
  var conv = document.getElementById("output");

  var s = orig;

  // Codes can be found here:
  // http://en.wikipedia.org/wiki/Windows-1252#Codepage_layout
  s = s.replace(/\u2018|\u2019|\u201A|\uFFFD/g, "'");
  s = s.replace(/\u201c|\u201d|\u201e/g, '"');
  s = s.replace(/\u02C6/g, "^");
  s = s.replace(/\u2039/g, "<");
  s = s.replace(/\u203A/g, ">");
  s = s.replace(/\u2013/g, "-");
  s = s.replace(/\u2014/g, "--");
  s = s.replace(/\u2026/g, "...");
  s = s.replace(/\u00A9/g, "(c)");
  s = s.replace(/\u00AE/g, "(r)");
  s = s.replace(/\u2122/g, "TM");
  s = s.replace(/\u00BC/g, "1/4");
  s = s.replace(/\u00BD/g, "1/2");
  s = s.replace(/\u00BE/g, "3/4");
  s = s.replace(/[\u02DC|\u00A0]/g, " ");

  conv.innerHTML = s;
  conv.focus();
  conv.select();
}
