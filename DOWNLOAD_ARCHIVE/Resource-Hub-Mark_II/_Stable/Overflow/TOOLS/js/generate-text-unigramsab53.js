window.bridges["generate-text-unigrams"] = function () {
  var bridge = function (text) {
    var tool = this;
    var options = parseOptions(tool);
    if (!options) {
      return false;
    }
    if (text.length == 0) {
      return "";
    }

    var re = punctToRegex(options.punct);
    var unigrams = generateTextUnigrams(text, options, re);

    return unigrams.join(options.separator);
  };

  function generateTextUnigrams(text, options, re) {
    if (options.removePunctuation) {
      text = text.replace(re, "");
    }
    if (options.lowercase) {
      text = text.toLowerCase();
    }
    if (options.splitByWords) {
      var unigrams = text.split(/\s+/);
      for (var i = 0; i < unigrams.length; i++) {
        if (
          /^[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,\-.\/:;<=>?@\[\]^_`{|}~]+$/.test(
            unigrams[i]
          )
        ) {
          unigrams.splice(i, 1);
          i--;
        }
      }
    } else {
      text = text.replace(/\s+/g, options.letterSpace);
      var unigrams = text.split("");
    }
    return unigrams;
  }

  function punctToRegex(punct) {
    var escapedPunct = "";
    for (var i = 0; i < punct.length; i++) {
      escapedPunct = escapedPunct + "\\" + punct[i];
    }
    var replace = "[" + escapedPunct + "]";
    var re = new RegExp(replace, "g");
    return re;
  }

  function parseOptions(tool) {
    var options = tool.options.get();
    var warning = function (a, b) {
      tool.output.showWarningBadge(a, b, -1);
    };

    var separator = options["unigrams-separator"] || "\n";
    var removePunctuation = options["remove-punctuation"];
    var punct = options["punctuation-characters"] || "?.,!()";
    var lowercase = options["lowercase"];
    var splitByWords = options["split-by-words"];
    var letterSpace = options["letter-space"] || "_";

    if (separator == "\\n") separator = "\n";

    if (letterSpace.length > 1) {
      warning(
        "Invalid space symbol between letters.",
        "Replace space with a single character."
      );
    }

    return {
      separator: separator,
      removePunctuation: removePunctuation,
      punct: punct,
      lowercase: lowercase,
      splitByWords: splitByWords,
      letterSpace: letterSpace[0],
    };
  }

  return {
    converter: bridge,
    config: {},
  };
};
