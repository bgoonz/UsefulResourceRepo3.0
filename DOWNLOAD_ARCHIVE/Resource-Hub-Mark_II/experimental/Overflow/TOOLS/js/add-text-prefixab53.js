window.bridges["add-text-prefix"] = function () {
  var bridge = function (text) {
    var options = this.options.get();
    var prefix = options.prefix;
    var singlePrefixMode = options["single-prefix-mode"];
    var multiLineMode = options["multi-line"] || options["multi-line-mode"];
    var paragraphMode = options["paragraph-mode"];
    var skipEmptyLines = options["skip-empty-lines"];

    var lines = text.split("\n");
    var ret = "";

    if (
      (multiLineMode == false || multiLineMode === undefined) &&
      (paragraphMode == false || paragraphMode === undefined)
    ) {
      singlePrefixMode = true;
    }

    if (multiLineMode) {
      for (var i = 0; i < lines.length; i++) {
        var line = lines[i];
        if (skipEmptyLines && line.length == 0) {
          ret += "\n";
          continue;
        }
        ret += prefix + line + "\n";
      }
      return ret;
    } else if (paragraphMode) {
      var newParagraph = true;
      for (var i = 0; i < lines.length; i++) {
        var line = lines[i];
        if (line.length == 0) {
          newParagraph = true;
          ret += "\n";
          continue;
        }
        if (newParagraph) {
          ret += prefix + line + "\n";
          newParagraph = false;
        } else {
          ret += line + "\n";
        }
      }
      return ret;
    } else if (singlePrefixMode) {
      return prefix + text;
    }
  };

  return {
    converter: bridge,
    config: {},
  };
};
