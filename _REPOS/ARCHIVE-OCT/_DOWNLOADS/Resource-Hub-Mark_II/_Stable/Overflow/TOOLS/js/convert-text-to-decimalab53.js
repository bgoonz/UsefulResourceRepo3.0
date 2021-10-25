window.bridges["convert-text-to-decimal"] = function () {
  var bridge = function (text) {
    var bytes = [];
    var options = this.options.get();
    var space = options["byte-spacing"] ? " " : "";

    for (var i = 0; i < text.length; i++) {
      var realBytes = unescape(encodeURIComponent(text[i]));
      for (var j = 0; j < realBytes.length; j++) {
        bytes.push(realBytes[j].charCodeAt(0));
      }
    }

    var converted = [];
    for (var i = 0; i < bytes.length; i++) {
      var byte = bytes[i].toString(10);
      converted.push(byte);
    }

    return converted.join(space);
  };

  return {
    converter: bridge,
    config: {},
  };
};
