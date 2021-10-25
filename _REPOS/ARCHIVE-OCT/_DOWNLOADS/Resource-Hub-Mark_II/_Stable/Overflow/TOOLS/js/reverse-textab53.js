window.bridges["reverse-text"] = function () {
  var bridge = function (text) {
    var options = this.options.get();
    var splitter = new GraphemeSplitter();

    if (options["multi-line"]) {
      var lines = text.split("\n");
      var ret = [];
      for (var i = 0; i < lines.length; i++) {
        var line = lines[i];
        if (options["trim"]) {
          line = line.trim();
        }
        if (options["skip-empty"] && line.length == 0) {
          continue;
        }
        var characters = splitter.splitGraphemes(line);
        var revLine = reverseString(characters);
        ret.push(revLine);
      }
      return ret.join("\n");
    }

    if (options["trim"]) {
      text = text.trim();
    }

    var characters = splitter.splitGraphemes(text);
    return reverseString(characters);
  };

  function reverseString(str) {
    return str.reverse().join("");
  }

  return {
    converter: bridge,
    config: {},
  };
};
