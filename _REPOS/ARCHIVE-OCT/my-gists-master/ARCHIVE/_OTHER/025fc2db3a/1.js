function whateverYouCallIt(obj) {
  function F() {}
  F.prototype = obj;
  return F;
}

var o = {};

class C extends whateverYouCallIt(o) {}
