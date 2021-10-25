window.bridges["generate-text-bigrams"] = function () {
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
    var bigrams = generateTextBigrams(text, options, re);

    for (var i = 0; i < bigrams.length; i++) {
      bigrams[i] = bigrams[i].join(options.elSep);
    }
    return bigrams.join(options.rowSep);
  };

  function generateTextBigrams(text, options, re) {
    var bigrams = [];
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

      if (options.severalBigrams) {
        bigrams = bigrams.concat(nGram.bigram(splitSentences));
      } else {
        bigrams = bigrams.concat(splitSentences);
      }
    }
    if (options.oneBigram) {
      bigrams = nGram.bigram(bigrams);
    }
    return bigrams;
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

    var elSep = options["element-separator"];
    var rowSep = options["row-separator"] || "\n";
    var oneBigram = options["one-bigram-for-sentences"];
    var severalBigrams = options["several-bigrams-for-sentences"];
    var removePunctuation = options["remove-punctuation"];
    var punct = options["punctuation-characters"] || "?.,!()";
    var lowercase = options["lowercase"];
    var splitByWords = options["split-by-words"];
    var letterSpace = options["letter-space"] || "_";

    if (elSep == "\\n") elSep = "\n";
    if (rowSep == "\\n") rowSep = "\n";

    if (letterSpace.length > 1) {
      warning(
        "Invalid space symbol between letters.",
        "Replace space with a single character."
      );
    }

    return {
      elSep: elSep,
      rowSep: rowSep,
      oneBigram: oneBigram,
      severalBigrams: severalBigrams,
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
