window.bridges["convert-text-to-octal"] = function () {
  var bridge = function (text) {
    var bytes = [];
    var options = this.options.get();
    var space = options["byte-spacing"] ? " " : "";
    var prefix = options["byte-prefix"];

    for (var i = 0; i < text.length; i++) {
      var realBytes = unescape(encodeURIComponent(text[i]));
      for (var j = 0; j < realBytes.length; j++) {
        bytes.push(realBytes[j].charCodeAt(0));
      }
    }

    var converted = [];
    for (var i = 0; i < bytes.length; i++) {
      var byte = bytes[i].toString(8);
      if (prefix) byte = "0" + byte;
      converted.push(byte);
    }

    return converted.join(space);
  };

  return {
    converter: bridge,
    config: {},
  };
};
