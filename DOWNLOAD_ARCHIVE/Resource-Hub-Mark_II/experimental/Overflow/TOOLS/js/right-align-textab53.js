window.bridges["right-align-text"] = function () {
  var bridge = function (text) {
    var tool = this;
    var opts = parseOptions(tool);
    if (!opts) {
      tool.output.setValue("");
      return "";
    }

    var splitter = new GraphemeSplitter();
    var alignChar = splitter.splitGraphemes(opts.alignChar);

    var output = "";
    var lines = text.split("\n");

    if (opts.textLen.length == 0) {
      opts.textLen = findTheLongestLine(splitter, lines);
    }

    for (var i = 0; i < lines.length; i++) {
      var line = lines[i];
      var chars = splitter.splitGraphemes(line);
      var paddedText = rightAlignString(chars, opts.textLen, alignChar);
      output += paddedText + "\n";
    }

    return output;
  };

  function findTheLongestLine(splitter, lines) {
    var maxLen = 0;
    for (var i = 0; i < lines.length; i++) {
      var line = lines[i];
      var chars = splitter.splitGraphemes(line);
      if (chars.length > maxLen) {
        maxLen = chars.length;
      }
    }
    return maxLen;
  }

  function rightAlignString(chars, length, padChar) {
    var padLength = length - chars.length;
    var wholePad = Math.floor(padLength / padChar.length);
    var wholePadLen = wholePad * padChar.length;

    if (wholePadLen >= 0 && padLength - wholePadLen > 0) {
      var fragment = padChar.slice(0, padLength - wholePadLen).join("");
      chars.unshift(fragment);
    }
    for (var j = 0; j < wholePad; j++) {
      chars.unshift(padChar.join(""));
    }

    return chars.join("");
  }

  function parseOptions(tool) {
    var options = tool.options.get();

    var textLen = options["length"] || "";
    var alignChar = options["align-char"] || " ";

    if (textLen.length != 0) {
      var textLen = options["length"].trim();
      if (!/^-?\d+$/.test(textLen)) {
        tool.output.showNegativeBadge(
          "Invalid align length.",
          "Align length value isn't a valid number."
        );
        return false;
      }
      textLen = parseInt(textLen);
      if (textLen < 0) {
        tool.output.showNegativeBadge(
          "Invalid align length.",
          "Align length value cannot be negative."
        );
        return false;
      }
    }

    return {
      textLen: textLen,
      alignChar: alignChar,
    };
  }

  return {
    converter: bridge,
    config: {},
  };
};
