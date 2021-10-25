window.bridges["generate-text-n-grams"] = function () {
  var bridge = function (text) {
    var tool = this;
    var options = parseOptions(tool);
    if (!options) {
      return "";
    }
    if (text.length == 0) {
      return "";
    }

    var re = punctToRegex(options.punct);
    var ngrams = generateTextNGgrams(tool, text, options, re);

    for (var i = 0; i < ngrams.length; i++) {
      ngrams[i] = ngrams[i].join(options.elSep);
    }
    return ngrams.join(options.rowSep);
  };

  function generateTextNGgrams(tool, text, options, re) {
    var ngrams = [];
    var sentences = tokenizer.sentences(text);

    for (var i = 0; i < sentences.length; i++) {
      if (options.lowercase) {
        sentences[i] = sentences[i].toLowerCase();
      }
      if (options.removePunctuation) {
        sentences[i] = sentences[i].replace(re, "");
      }

      if (options.splitByWords) {
        var splitSentences = sentences[i].split(/\s+/);
        for (var j = 0; j < splitSentences.length; j++) {
          if (
            /^[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,\-.\/:;<=>?@\[\]^_`{|}~]+$/.test(
              splitSentences[j]
            )
          ) {
            splitSentences.splice(j, 1);
            j--;
          }
        }
      } else {
        sentences[i] = sentences[i].replace(/\s+/g, options.letterSpace);
        var splitSentences = sentences[i].split("");
      }
      if (options.severalNGgrams) {
        if (splitSentences.length < options.number) {
          tool.output.showWarningBadge(
            "Not enough items for {0}-grams".format(options.number),
            "Sentence {0} has only {1} items, but you want build {2}-gram.".format(
              i + 1,
              splitSentences.length,
              options.number
            )
          );
        }
        ngrams = ngrams.concat(nGram(options.number)(splitSentences));
      } else {
        ngrams = ngrams.concat(splitSentences);
      }
    }
    if (options.oneNGram) {
      if (ngrams.length < options.number) {
        tool.output.showWarningBadge(
          "Not enough items for {0}-grams".format(options.number),
          "Text has only {0} items, but you want build {1}-gram.".format(
            ngrams.length,
            options.number
          )
        );
      }
      ngrams = nGram(options.number)(ngrams);
    }
    return ngrams;
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
    var error = function (a, b) {
      tool.output.showNegativeBadge(a, b, -1);
    };
    var warning = function (a, b) {
      tool.output.showWarningBadge(a, b, -1);
    };

    var elSep = options["element-separator"];
    var rowSep = options["row-separator"] || "\n";
    var oneNGram = options["one-n-gram-for-sentences"];
    var severalNGgrams = options["several-n-grams-for-sentences"];
    var removePunctuation = options["remove-punctuation"];
    var punct = options["punctuation-characters"] || "?.,!()";
    var lowercase = options["lowercase"];
    var splitByWords = options["split-by-words"];
    var letterSpace = options["letter-space"] || "_";
    var number = parseInt(options["n-gram"] || 4);

    if (isNaN(number)) {
      error(
        "Can't generate n-gram.",
        "Amount of items in the n-gram sequence is not a number."
      );
      return false;
    }
    if (number < 1) {
      error(
        "Can't generate n-gram.",
        "Amount of items in the n-gram sequence must be a positive number."
      );
      return false;
    }

    if (letterSpace.length > 1) {
      warning(
        "Invalid space symbol between letters.",
        "Replace space with a single character."
      );
    }

    if (elSep == "\\n") elSep = "\n";
    if (rowSep == "\\n") rowSep = "\n";

    return {
      elSep: elSep,
      rowSep: rowSep,
      oneNGram: oneNGram,
      severalNGgrams: severalNGgrams,
      removePunctuation: removePunctuation,
      punct: punct,
      lowercase: lowercase,
      splitByWords: splitByWords,
      letterSpace: letterSpace[0],
      number: number,
    };
  }

  return {
    converter: bridge,
    config: {},
  };
};
