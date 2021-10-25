window.bridges["join-text"] = function () {
  var bridge = function (text) {
    var tool = this;
    var opts = parseOptions(tool);
    if (text.trim().length == 0) {
      return "";
    }

    if (opts.re) {
      var lines = text.split(opts.re);
    } else {
      var lines = text.split(opts.inputSep);
    }

    var linesOut = [];
    for (var i = 0; i < lines.length; i++) {
      var line = lines[i];
      if (opts.leftTrim) {
        line = line.replace(/^\s+/g, "");
      }
      if (opts.rightTrim) {
        line = line.replace(/\s+$/g, "");
      }
      if (opts.removeEmpty) {
        if (line.length == 0) continue;
      }
      linesOut.push(line);
    }

    return linesOut.join(opts.joinChar);
  };

  function parseOptions(tool) {
    var options = tool.options.get();

    var stringSep = options["string-separator"] || true;
    var regexpSep = options["regexp-separator"] || false;

    var inputSep = options["input-separator"] || "\n";
    var joinChar = options["join-character"] || options["char"] || "";

    var leftTrim = options["remove-leading-whitespace"] || options["left-trim"];
    var rightTrim =
      options["remove-trailing-whitespace"] || options["right-trim"];

    var removeEmpty = options["remove-empty-lines"] || options["remove-empty"];

    // Earlier the options were called 'remove-leading-whitespace',
    // 'remove-trailing-whitespace', 'remove-empty-lines', and 'char'.

    // Now they are simplified and called 'left-trim',
    // 'right-trim', 'remove-empty', and 'join-character'.

    var re = null;
    if (regexpSep) {
      var regexParts = inputSep.match(/^\/(.*?)\/([gimuy]*)$/);
      if (regexParts) {
        re = new RegExp(regexParts[1], regexParts[2]);
      } else {
        re = new RegExp(inputSep);
      }
    } else {
      if (inputSep == "\\n") inputSep = "\n";
    }

    if (joinChar == "\\n") joinChar = "\n";

    return {
      inputSep: inputSep,
      joinChar: joinChar,
      stringSep: stringSep,
      re: re,
      removeEmpty: removeEmpty,
      leftTrim: leftTrim,
      rightTrim: rightTrim,
    };
  }

  return {
    converter: bridge,
    config: {},
  };
};
