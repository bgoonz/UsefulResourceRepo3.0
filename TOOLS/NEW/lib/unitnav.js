var pagetbl = [
  { u1: 0, u2: 1, url: "/convert/number/binary-to-decimal.html" },
  { u1: 0, u2: 2, url: "/convert/number/binary-to-hex.html" },
  { u1: 1, u2: 0, url: "/convert/number/decimal-to-binary.html" },
  { u1: 1, u2: 2, url: "/convert/number/decimal-to-hex.html" },
  { u1: 2, u2: 0, url: "/convert/number/hex-to-binary.html" },
  { u1: 2, u2: 1, url: "/convert/number/hex-to-decimal.html" },
];
function navPage() {
  var u1 = document.getElementById("unit1").selectedIndex;
  var u2 = document.getElementById("unit2").selectedIndex;
  var url = "";
  for (var i = 0; i < pagetbl.length; i++) {
    if (pagetbl[i].u1 == u1 && pagetbl[i].u2 == u2) {
      url = pagetbl[i].url;
      break;
    }
  }
  if (url != "") window.location = url;
}
window.addEventListener(
  "load",
  function () {
    var sel1 = document.getElementById("unit1");
    var sel2 = document.getElementById("unit2");
    sel1.addEventListener("change", navPage, "false");
    sel2.addEventListener("change", navPage, "false");
  },
  false
);
