window.bridges["extract-substring"] = function () {
  var bridge = function (text) {
    var tool = this;
    var opts = parseOptions(tool);
    if (!opts) return "";

    text = text.trim();
    if (text.length == 0) {
      return "";
    }
    var start = opts.start;
    var length = opts.length;

    if (opts.multiLine) {
      var lines = text.split("\n");
      var output = [];
      for (var i = 0; i < lines.length; i++) {
        var chars = splitIntoGraphemes(lines[i]);
        var sliced = sliceChars(chars, start, length);
        if (sliced.warning) {
          var plural = sliced.chars.length == 1 ? "" : "s";
          tool.output.showWarningBadge(
            "Not Complete Substring",
            "You wanted a substring of length {0}, but on the line {1} only {2} character{3} left.".format(
              length,
              i + 1,
              sliced.chars.length,
              plural
            )
          );
        }
        if (opts.reverse) {
          output.push(sliced.chars.reverse().join(""));
        } else {
          output.push(sliced.chars.join(""));
        }
      }
      return output.join("\n");
    } else {
      var chars = splitIntoGraphemes(text);
      var sliced = sliceChars(chars, start, length);
      if (sliced.warning) {
        var plural = sliced.chars.length == 1 ? "" : "s";
        tool.output.showWarningBadge(
          "Not Complete Substring",
          "You wanted a substring of length {0}, but only {1} character{2} left.".format(
            length,
            sliced.chars.length,
            plural
          )
        );
      }
      if (opts.reverse) {
        return sliced.chars.reverse().join("");
      }
      return sliced.chars.join("");
    }
  };

  function sliceChars(chars, start, length) {
    var strLen = chars.length;
    if (length == "") {
      if (start > 0) length = strLen - start + 1;
      else length = -start;
    }
    if (length == "-") {
      if (start > 0) length = -start;
      else length = -strLen - start - 1;
    }

    if (length > 0) {
      if (start > 0) var begin = start - 1;
      else var begin = strLen + start;

      if (begin + length > strLen) {
        warning = true;
        chars = chars.slice(begin);
      } else {
        warning = false;
        chars = chars.slice(begin, begin + length);
      }
    } else if (length < 0) {
      if (start > 0) var begin = start + length;
      else var begin = strLen + start + length + 1;

      if (begin < 0) {
        warning = true;
        chars = chars.slice(0, begin - length);
      } else {
        warning = false;
        chars = chars.slice(begin, begin - length);
      }
    }

    return {
      warning: warning,
      chars: chars,
    };
  }

  function splitIntoGraphemes(text) {
    var splitter = new GraphemeSplitter();
    var chars = splitter.splitGraphemes(text);
    return chars;
  }

  function parseOptions(tool) {
    var options = tool.options.get();

    var multiLine = options["multi-line"];
    var reverse = options["reverse"];

    var length = options["length"].trim();
    if (!/^[+-]?\d+$/.test(length) && !/^[-]?$/.test(length)) {
      tool.output.showNegativeBadge(
        "Invalid Length",
        "Length value isn't a valid number."
      );
      return false;
    }
    length = parseInt(length) || length;

    var start = options["start"].trim();
    if (!/^[+-]?\d+$/.test(start)) {
      tool.output.showNegativeBadge(
        "Invalid Start",
        "Start value isn't a valid number."
      );
      return false;
    }
    start = parseInt(start);

    return {
      multiLine: multiLine,
      reverse: reverse,
      start: start,
      length: length,
    };
  }

  return {
    converter: bridge,
    config: {},
  };
};
