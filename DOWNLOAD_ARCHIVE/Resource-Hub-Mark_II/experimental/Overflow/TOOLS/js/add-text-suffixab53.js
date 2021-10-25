window.bridges["add-text-suffix"] = function () {
  var bridge = function (text) {
    var options = this.options.get();
    var suffix = options.suffix;
    var singleSuffixMode = options["single-suffix-mode"];
    var multiLineMode = options["multi-line"] || options["multi-line-mode"];
    var paragraphMode = options["paragraph-mode"];
    var skipEmptyLines = options["skip-empty-lines"];

    var lines = text.split("\n");
    var ret = "";

    if (multiLineMode) {
      for (var i = 0; i < lines.length; i++) {
        var line = lines[i];
        if (skipEmptyLines && line.length == 0) {
          ret += "\n";
          continue;
        }
        ret += line + suffix + "\n";
      }
      return ret;
    } else if (paragraphMode) {
      var newParagraph = false;
      for (var i = 0; i < lines.length; i++) {
        var line = lines[i];

        if (/\S/.test(line)) {
          // non blank line starts a new paragraph
          newParagraph = true;
        }

        if (i == lines.length - 1 && newParagraph) {
          // if it's the last line of input, and we're in a paragraph,
          // then append suffix.
          ret += line + suffix + "\n";
        } else if (!/\S/.test(lines[i + 1]) && newParagraph) {
          // if the next line is blank and we were in a paragraph,
          // then append suffix at the end of paragraph, and
          // set newParagraph to false so that suffix
          // doesnt get appended anywhere else until
          // a new paragraph starts again
          ret += line + suffix + "\n";
          newParagraph = false;
        } else {
          ret += line + "\n";
        }
      }
      return ret;
    } else if (singleSuffixMode) {
      return text + suffix;
    }
  };

  return {
    converter: bridge,
    config: {},
  };
};
