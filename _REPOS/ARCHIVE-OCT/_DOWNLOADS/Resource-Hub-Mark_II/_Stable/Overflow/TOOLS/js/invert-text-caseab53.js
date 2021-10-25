window.bridges["invert-text-case"] = function () {
  var bridge = function (text) {
    var ret = "";
    for (var i = 0; i < text.length; i++) {
      var char = text[i];
      if (char == char.toUpperCase()) {
        char = char.toLowerCase();
      } else {
        char = char.toUpperCase();
      }
      ret += char;
    }
    return ret;
  };

  return {
    converter: bridge,
    config: {},
  };
};
