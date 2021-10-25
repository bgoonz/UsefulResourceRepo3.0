window.bridges["rot47-text"] = function () {
  var bridge = function (text) {
    var options = this.options.get();

    var rotAlphabet =
      "!\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~";
    var ret = "";
    for (var i = 0; i < text.length; i++) {
      var pos = rotAlphabet.indexOf(text[i]);
      if (pos >= 0) {
        var c = rotAlphabet[(pos + 47) % 94];
      } else {
        var c = text[i];
      }
      ret += c;
    }
    return ret;
  };

  return {
    converter: bridge,
    config: {},
  };
};
