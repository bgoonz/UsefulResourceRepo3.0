var u1elem = document.getElementById("unit1");
var u2elem = document.getElementById("unit2");
function navPage() {
  var i1 = u1elem.selectedIndex;
  var i2 = u2elem.selectedIndex;
  if (i1 == i2) return;
  if (u1elem.options[i1].value == "" || u2elem.options[i2].value == "") return;
  var url =
    u1elem.options[i1].value + "-to-" + u2elem.options[i2].value + ".html";
  window.location = url;
}
window.addEventListener(
  "load",
  function () {
    u1elem.onchange = function () {
      navPage();
    };
    u2elem.onchange = function () {
      navPage();
    };
  },
  false
);
