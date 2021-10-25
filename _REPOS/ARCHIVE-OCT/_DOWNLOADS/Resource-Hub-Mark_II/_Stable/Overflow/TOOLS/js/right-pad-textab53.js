window.bridges["right-pad-text"] = function () {
  var bridge = function (text) {
    var tool = this;
    var opts = parseOptions(tool);
    if (!opts) {
      tool.output.setValue("");
      return "";
    }

    var splitter = new GraphemeSplitter();
    var padChar = splitter.splitGraphemes(opts.padChar);

    if (opts.multiLine) {
      var output = "";
      var lines = text.split("\n");
      for (var i = 0; i < lines.length; i++) {
        var line = lines[i];
        var chars = splitter.splitGraphemes(line);
        var paddedText = rightPadString(chars, opts.padLength, padChar);
        output += paddedText + "\n";
      }
    } else {
      var chars = splitter.splitGraphemes(text);
      var output = rightPadString(chars, opts.padLength, padChar);
    }

    return output;
  };

  function rightPadString(chars, length, padChar) {
    var padLength = length - chars.length;
    var wholePad = Math.floor(padLength / padChar.length);
    var wholePadLen = wholePad * padChar.length;

    for (var j = 0; j < wholePad; j++) {
      chars.push(padChar.join(""));
    }
    if (wholePadLen >= 0 && padLength - wholePadLen > 0) {
      var fragment = padChar.slice(0, padLength - wholePadLen).join("");
      chars.push(fragment);
    }

    return chars.join("");
  }

  function parseOptions(tool) {
    var options = tool.options.get();

    var padLength = options["length"];
    var padChar = options["right-pad-char"] || " ";
    var multiLine = options["separate-lines"];

    var padLength = options["length"].trim();
    if (!/^-?\d+$/.test(padLength)) {
      tool.output.showNegativeBadge(
        "Invalid pad length.",
        "Pad length value isn't a valid number."
      );
      return false;
    }
    padLength = parseInt(padLength);
    if (padLength < 0) {
      tool.output.showNegativeBadge(
        "Invalid pad length.",
        "Pad length value cannot be negative."
      );
      return false;
    }

    return {
      padLength: padLength,
      padChar: padChar,
      multiLine: multiLine,
    };
  }

  return {
    converter: bridge,
    config: {},
  };
};
