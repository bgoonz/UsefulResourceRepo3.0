// copyright broowserools

var StringCode = {};
StringCode.of = function (string) {
  var that = this;
  var code = [];

  for (var i = 0; i < string.length; i++) {
    var parsed = that.codePointAt(string, i);
    code.push(parsed.code);

    if (parsed.skipAhead) i++;
  }

  return code;
};
StringCode.codePointAt = function (string, index) {
  var size = string.length;
  var first = string.charCodeAt(index);
  var second;
  if (first >= 0xd800 && first <= 0xdbff && size > index + 1) {
    second = string.charCodeAt(index + 1);
    if (second >= 0xdc00 && second <= 0xdfff) {
      return {
        code: (first - 0xd800) * 0x400 + second - 0xdc00 + 0x10000,
        skipAhead: true,
      };
    }
  }

  return {
    code: first,
    skipAhead: false,
  };
};
