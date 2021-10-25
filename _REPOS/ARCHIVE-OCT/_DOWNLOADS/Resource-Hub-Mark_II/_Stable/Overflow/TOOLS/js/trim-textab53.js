window.bridges["trim-text"] = function () {
  var bridge = function (text) {
    var options = this.options.get();
    var multiLine = options["multi-line"];

    if (multiLine) {
      var lines = text.split("\n");
      var ret = "";
      for (var i = 0; i < lines.length; i++) {
        var line = lines[i];
        if (options["left-trim"]) {
          line = leftTrim(line);
        }
        if (options["right-trim"]) {
          line = rightTrim(line);
        }
        ret += line + "\n";
      }
      return ret;
    } else {
      if (options["left-trim"]) {
        text = leftTrim(text);
      }
      if (options["right-trim"]) {
        text = rightTrim(text);
      }
      return text;
    }
  };

  function leftTrim(str) {
    return str.replace(/^\s+/, "");
  }
  function rightTrim(str) {
    return str.replace(/\s+$/, "");
  }

  return {
    converter: bridge,
    config: {},
  };
};
