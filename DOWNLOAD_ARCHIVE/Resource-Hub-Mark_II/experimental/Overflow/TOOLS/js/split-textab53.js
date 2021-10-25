window.bridges["split-text"] = function () {
  var bridge = function (text) {
    var tool = this;
    var opts = parseOptions(tool);
    if (!opts) return "";
    if (text.trim().length == 0) return "";

    if (opts.splitByChar) {
      if (opts.char.length == 0) {
        var chunks = splitIntoGraphemes(text);
      } else {
        var chunks = text.split(opts.char);
      }
    } else if (opts.splitByRegex) {
      if (opts.regex == "//") {
        var chunks = splitIntoGraphemes(text);
      } else {
        var regexParts = opts.regex.match(/^\/(.*?)\/([gimuy]*)$/);
        if (regexParts) {
          var re = new RegExp(regexParts[1], regexParts[2]);
        } else {
          var re = new RegExp(opts.regex);
        }
        var chunks = text.split(re);
      }
    } else {
      var chars = splitIntoGraphemes(text);
      if (opts.length == 0) {
        var chunks = chars;
      } else {
        var chunks = [];
        for (var i = 0; i < chars.length; i += opts.length) {
          chunks.push(chars.slice(i, i + opts.length).join(""));
        }
      }
    }

    if (opts.charBefore.length == 0 && opts.charAfter.length == 0) {
      return chunks.join(opts.sep);
    }
    chunks = chunks.map(function (x) {
      return opts.charBefore + x + opts.charAfter;
    });
    return chunks.join(opts.sep);
  };

  function splitIntoGraphemes(text) {
    var splitter = new GraphemeSplitter();
    var chars = splitter.splitGraphemes(text);
    return chars;
  }

  function parseOptions(tool) {
    var options = tool.options.get();
    var error = function (a, b) {
      tool.output.showNegativeBadge(a, b, -1);
    };

    var splitByChar = options["split-by-char"];
    var splitByRegex = options["split-by-regex"];
    var splitByLength = options["split-by-length"];
    var sep = options["separator"];
    var char = options["char"];
    var regex = options["regex"] || "/\\s+/";
    var charBefore = options["symbol-before-chunk"] || "";
    var charAfter = options["symbol-after-chunk"] || "";

    if (sep == "\\n") sep = "\n";
    if (sep == "\\t") sep = "\t";

    if (splitByLength) {
      var length = options["length"].trim();
      if (!/^-?\d+$/.test(length)) {
        error(
          "Invalid Fragment Length",
          "Fragment length value isn't a valid number."
        );
        return false;
      }
      length = parseInt(length);
      if (length < 0) {
        error(
          "Invalid Fragment Length",
          "Fragment length value cannot be negative."
        );
        return false;
      }
    }

    return {
      splitByChar: splitByChar,
      splitByRegex: splitByRegex,
      sep: sep,
      char: char,
      regex: regex,
      length: length,
      charBefore: charBefore,
      charAfter: charAfter,
    };
  }

  return {
    converter: bridge,
    config: {},
  };
};
