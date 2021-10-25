window.bridges["rotate-text"] = function () {
  var bridge = function (text) {
    var tool = this;

    var opts = parseOptions(tool);
    if (!opts) {
      tool.output.setValue("");
      return;
    }

    if (opts.multiLine) {
      var lines = text.split("\n");
      var ret = "";
      for (var i = 0; i < lines.length; i++) {
        var splitter = new GraphemeSplitter();
        var characters = splitter.splitGraphemes(lines[i]);
        if (opts.rotateLeft) {
          var line = rotateLeft(characters, opts.count);
        } else {
          var line = rotateRight(characters, opts.count);
        }
        ret += line + "\n";
      }
      return ret;
    } else {
      var splitter = new GraphemeSplitter();
      var characters = splitter.splitGraphemes(text);
      if (opts.rotateLeft) {
        return rotateLeft(characters, opts.count);
      } else {
        return rotateRight(characters, opts.count);
      }
    }
  };

  function rotateLeft(chars, len) {
    var firstChars = chars.splice(len % chars.length);
    var rotatedStr = firstChars.concat(chars);
    return rotatedStr.join("");
  }

  function rotateRight(chars, len) {
    var firstChars = chars.splice(chars.length - (len % chars.length));
    var rotatedStr = firstChars.concat(chars);
    return rotatedStr.join("");
  }

  function parseOptions(tool) {
    var options = tool.options.get();
    var rotateLeft = options["rotate-left"];
    var multiLine = options["multi-line"];

    var count = options["count"].trim();
    if (!/^\d+$/.test(count)) {
      tool.output.showNegativeBadge(
        "Invalid rotation count.",
        "Rotation count value contains non digits."
      );
      return false;
    }
    count = parseInt(count);
    if (count < 0) {
      tool.output.showNegativeBadge(
        "Invalid rotation count.",
        "Rotation count value should be a positive number."
      );
      return false;
    }

    return {
      rotateLeft: rotateLeft,
      multiLine: multiLine,
      count: count,
    };
  }

  return {
    converter: bridge,
    config: {},
  };
};
