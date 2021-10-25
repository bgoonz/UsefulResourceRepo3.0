window.bridges["center-text"] = function () {
  var bridge = function (text) {
    var tool = this;
    var opts = parseOptions(tool);
    if (!opts) {
      tool.output.setValue("");
      return "";
    }

    var splitter = new GraphemeSplitter();
    var padCharLeft = splitter.splitGraphemes(opts.padCharLeft);
    var padCharRight = splitter.splitGraphemes(opts.padCharRight);

    var lines = text.split("\n");

    if (opts.textLen.length == 0) {
      opts.textLen = findTheLongestLine(splitter, lines);
    }

    var ret = "";

    for (var i = 0; i < lines.length; i++) {
      var line = lines[i];
      var chars = splitter.splitGraphemes(line);
      var centeredLine = centerString(
        chars,
        opts.textLen,
        padCharLeft,
        padCharRight,
        opts.fillSide
      );
      ret += centeredLine + "\n";
    }
    return ret;
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

  function centerString(chars, textLen, padCharLeft, padCharRight, fillSide) {
    var padLength = textLen - chars.length;

    var addStart = parseInt(padLength / 2, 10);
    var addEnd = parseInt(padLength / 2, 10);
    if (padLength % 2 != 0) {
      if (fillSide == "right") addEnd++;
      else if (fillSide == "left") addStart++;
    }

    var wholePadLeft = Math.floor(addStart / padCharLeft.length);
    var wholePadRight = Math.floor(addEnd / padCharRight.length);
    var padLenLeft = wholePadLeft * padCharLeft.length;
    var padLenRight = wholePadRight * padCharRight.length;

    var centeredString = [];

    // pad start
    for (var i = 0; i < wholePadLeft; i++) {
      centeredString.push(padCharLeft.join(""));
    }
    if (padLenLeft >= 0 && addStart - padLenLeft > 0) {
      var fragment = padCharLeft.slice(0, addStart - padLenLeft).join("");
      centeredString.push(fragment);
    }

    // add text
    centeredString.push(chars.join(""));

    // pad end
    for (var i = 0; i < wholePadRight; i++) {
      centeredString.push(padCharRight.join(""));
    }
    if (padLenRight >= 0 && addEnd - padLenRight > 0) {
      var fragment = padCharRight.slice(0, addEnd - padLenRight).join("");
      centeredString.push(fragment);
    }

    return centeredString.join("");
  }

  function parseOptions(tool) {
    var options = tool.options.get();

    var padCharLeft = options["centering-char-left"] || " ";
    var padCharRight = options["centering-char-right"] || "";

    var textLen = options["line-length"].trim() || "";
    if (textLen.length != 0) {
      if (!/^-?\d+$/.test(textLen)) {
        tool.output.showNegativeBadge(
          "Invalid text length.",
          "Text length value isn't a valid number."
        );
        return false;
      }
      textLen = parseInt(textLen);
      if (textLen < 0) {
        tool.output.showNegativeBadge(
          "Invalid text length.",
          "Text length value cannot be negative."
        );
        return false;
      }
    }

    if (options["fill-right-side"]) {
      var fillSide = "right";
    } else {
      var fillSide = "left";
    }

    return {
      padCharLeft: padCharLeft,
      padCharRight: padCharRight,
      fillSide: fillSide,
      textLen: textLen,
    };
  }

  return {
    converter: bridge,
    config: {},
  };
};
