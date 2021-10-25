window.bridges["repeat-text"] = function () {
  var bridge = function (text) {
    var tool = this;
    var opts = parseOptions(tool);
    if (!opts) {
      tool.output.setValue("");
      return;
    }

    var output = [];
    var intPart = parseInt(opts.repeat);
    var fracPart = opts.repeat % 1;
    for (var i = 0; i < intPart; i++) {
      output.push(text);
    }
    if (fracPart > 0) {
      var splitter = new GraphemeSplitter();
      var characters = splitter.splitGraphemes(text);
      var truncLength = Math.round(characters.length * fracPart);
      var truncText = characters.slice(0, truncLength);
      output.push(truncText.join(""));
    }

    return output.join(opts.separator);
  };

  function parseOptions(tool) {
    var options = tool.options.get();

    var separator = options["separator"];
    if (separator == "\\n") separator = "\n";

    var repeat = options["repeat"].trim();
    if (!/^[+-]?\d*\.?\d+$/.test(repeat)) {
      tool.output.showNegativeBadge(
        "Invalid number of repetitions.",
        "The number of repetitions isn't a valid number."
      );
      return false;
    }
    repeat = parseFloat(repeat);
    if (repeat < 0) {
      tool.output.showNegativeBadge(
        "Invalid number of repetitions.",
        "The number of repetitions cannot be negative."
      );
      return false;
    }

    return {
      separator: separator,
      repeat: repeat,
    };
  }

  return {
    converter: bridge,
    config: {},
  };
};
