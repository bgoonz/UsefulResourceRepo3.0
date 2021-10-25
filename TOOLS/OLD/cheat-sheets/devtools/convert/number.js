var gcd = function (a, b) {
  if (!b) {
    return a;
  }
  return gcd(b, a % b);
};

var gcd2 = function (a, b, f) {
  if (f) {
    if (b <= 1) return a;
  } else {
    if (!b) return a;
  }
  return gcd2(b, a % b, f);
};

function digits_after_period(x) {
  f = x.toString();
  i = f.indexOf(".");
  len = f.length - i - 1;
  return len;
}

function parseFraction(s) {
  var n1 = (n2 = 0);
  var sign = (n3 = 1);
  i = s.indexOf(" ");
  if (i == 0) s = s.substring(1);
  i = s.indexOf("-");
  if (i == 0) {
    s = s.substring(1);
    sign = -1;
  }
  i = s.indexOf(" ");
  if (i == 0) s = s.substring(1);
  i = s.indexOf(" ");
  if (!isNaN(parseInt(s)) && isFinite(s)) i = s.length;
  if (i != -1) {
    n1 = parseInt(s.substring(0, i));
    s = s.substring(i + 1);
  }
  i = s.indexOf("/");
  if (i != -1) {
    n2 = parseInt(s.substring(0, i));
    s = s.substring(i + 1);
    n3 = parseInt(s);
  }
  return [sign, n1, n2, n3];
}
