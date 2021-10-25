window.bridges["change-text-case"] = function () {
  var bridge = function (text) {
    var options = this.options.get();

    // If case is selected through a list box, then create
    // the set of options for the selection.

    if (options["case"]) {
      options[options["case"]] = true;
    }

    if (
      options["multiline"] &&
      (options["sentence-case"] ||
        options["alternating-1-case"] ||
        options["alternating-2-case"])
    ) {
      var lines = text.split("\n");
      var output = [];
      for (var i = 0; i < lines.length; i++) {
        if (options["sentence-case"]) {
          output.push(textToSentenceCase(lines[i]));
        } else if (options["alternating-1-case"]) {
          output.push(textToAlternatingCase(lines[i], "first-letter"));
        } else {
          output.push(textToAlternatingCase(lines[i], "second-letter"));
        }
      }
      return output.join("\n");
    }

    if (options["lower-case"]) {
      return textToLowerCase(text);
    } else if (options["upper-case"]) {
      return textToUpperCase(text);
    } else if (options["random-case"]) {
      return textToRandomCase(text);
    } else if (options["title-case"]) {
      return textToTitleCase(text);
    } else if (options["sentence-case"]) {
      return textToSentenceCase(text);
    } else if (options["alternating-1-case"]) {
      return textToAlternatingCase(text, "first-letter");
    } else if (options["alternating-2-case"]) {
      return textToAlternatingCase(text, "second-letter");
    } else if (options["inverse-case"]) {
      return textToInverseCase(text);
    } else if (options["capitalized-case"]) {
      return textToCapitalizedCase(text);
    } else if (options["reverse-capitalized-case"]) {
      return textToReverseCapitalizedCase(text);
    }
  };

  function textToLowerCase(text) {
    return text.toLowerCase();
  }

  function textToUpperCase(text) {
    return text.toUpperCase();
  }

  function textToRandomCase(text) {
    var chars = splitIntoGraphemes(text);
    var output = [];
    for (var i = 0; i < chars.length; i++) {
      var char = chars[i];
      if (Math.random() < 0.5) {
        output.push(char.toLowerCase());
      } else {
        output.push(char.toUpperCase());
      }
    }
    return output.join("");
  }

  function textToTitleCase(text) {
    return titleCase(text);
  }

  function textToSentenceCase(text) {
    var ret = "";
    var sentences = tokenizer.sentences(text);
    for (var i = 0; i < sentences.length; i++) {
      var sentence = sentences[i].replace(/ ?\n ?/g, "\n");
      if (sentence.length == 0) {
        continue;
      }
      var start = sentence
        .match(/^[\s('"[{⟨‒–—―\-‐‘«*]*.{1}/g)[0]
        .toUpperCase();
      var end = sentence.slice(start.length).toLowerCase();
      var space = /\s/.test(start[0]) || i == 0 ? "" : " ";
      ret += space + start + end;
    }
    ret = ret.replace(/(^|[^A-Za-z])i('m|'ll|'ve|$|[^A-Za-z])/i, "$1I$2");
    return ret;
  }

  function textToAlternatingCase(text, type) {
    var chars = splitIntoGraphemes(text);
    var output = [];
    var count = 0;
    var oneOrZero = type == "first-letter" ? 1 : 0;
    for (var i = 0; i < chars.length; i++) {
      var char = chars[i];
      if (/^\s*$/.test(char)) {
        output.push(char);
      } else if (count % 2 == oneOrZero) {
        output.push(char.toLowerCase());
        count++;
      } else {
        output.push(char.toUpperCase());
        count++;
      }
    }
    return output.join("");
  }

  function textToInverseCase(text) {
    var chars = splitIntoGraphemes(text);
    var output = [];
    for (var i = 0; i < chars.length; i++) {
      var char = chars[i];
      if (char == char.toUpperCase()) {
        output.push(char.toLowerCase());
      } else {
        output.push(char.toUpperCase());
      }
    }
    return output.join("");
  }

  function textToCapitalizedCase(text) {
    var chars = text.split(/(\s+)/);
    var output = [];
    for (var i = 0; i < chars.length; i++) {
      var char = chars[i];
      var matches = char.match(
        /^['"())[\]{}!*?,.;:<>\-+~@#$%^&/\\|`⟨‒–—―‐‘«]*.{1}/g
      );
      if (matches) {
        var start = matches[0].toUpperCase();
        var end = char.slice(start.length).toLowerCase();
        output.push(start + end);
      } else {
        output.push(char);
      }
    }
    return output.join("");
  }

  function textToReverseCapitalizedCase(text) {
    var chars = text.split(/(\s+)/);
    var output = [];
    for (var i = 0; i < chars.length; i++) {
      var char = chars[i];
      var matches = char.match(/.{1}['"())[\]{}!*?,.;:<>\-+~@#$%^&/\\|`]*$/g);
      if (matches) {
        var end = matches[0].toUpperCase();
        var start = char.slice(0, char.length - end.length).toLowerCase();
        output.push(start + end);
      } else {
        output.push(char);
      }
    }
    return output.join("");
  }

  function splitIntoGraphemes(text) {
    var splitter = new GraphemeSplitter();
    var chars = splitter.splitGraphemes(text);
    return chars;
  }

  return {
    converter: bridge,
    config: {},
  };
};
