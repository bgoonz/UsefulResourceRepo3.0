window.bridges["transpose-text"] = function () {
  var bridge = function (text) {
    var options = this.options.get();
    var outputElSep = options["output-element-separator"] || " ";
    var outputRowSep = options["output-row-separator"] || "\n";
    var charByChar = options["char-by-char"];
    var wordByWord = options["word-by-word"];
    var sentBySent = options["sent-by-sent"];
    if (outputElSep == "\\n") outputElSep = "\n";
    if (outputRowSep == "\\n") outputRowSep = "\n";

    if (text.length == 0) {
      return "";
    }

    if (charByChar) {
      var sep = "";
    } else if (wordByWord) {
      var sep = / +/g;
    } else if (sentBySent) {
      var sep = /([.!?]+)\s*/g;
    }

    var lines = text.split("\n");
    var maxLineLen = maxLineLength(lines, sep, sentBySent);
    var transposed = [];

    for (var i = 0; i < lines.length; i++) {
      line = stripString(lines[i]);
      var row = line.split(sep);
      removeEmptyRows(row);

      for (var j = 0; j < maxLineLen; j++) {
        if (transposed[j] == undefined) {
          transposed[j] = [];
        }

        if (j < row.length) {
          if (sentBySent && row[j + 1] != undefined) {
            transposed[j].push(row[j] + row[j + 1]);
            row.splice(j, 1);
          } else {
            transposed[j].push(row[j]);
          }
        } else {
          transposed[j].push(" ");
        }
      }
    }

    if (outputRowSep != "\n") {
      return formatText(transposed, outputElSep, outputRowSep);
    }
    return prettify(transposed, outputElSep, outputRowSep);
  };

  function stripString(str) {
    str = str.replace(/^\s+/, "");
    str = str.replace(/\s+$/, "");
    return str;
  }

  function removeEmptyRows(row) {
    for (var i = 0; i < row.length; i++) {
      if (row[i].length == 0) {
        row.splice(i, 1);
        i--;
        continue;
      }
    }
  }

  function maxLineLength(lines, sep, sentBySent) {
    var maxLineLen = 0;
    for (var i = 0; i < lines.length; i++) {
      line = stripString(lines[i]);
      if (sentBySent) {
        sep = /[.!?]+\s*/g;
      }
      var row = line.split(sep);
      removeEmptyRows(row);

      if (row.length > maxLineLen) {
        maxLineLen = line.split(sep).length;
      }
    }
    return maxLineLen;
  }

  function formatText(text, outputElSep, outputRowSep) {
    var ret = "";
    for (var i = 0; i < text.length; i++) {
      var row = text[i];
      var rowStr = row.join(outputElSep);
      ret += rowStr;
      if (i != text.length - 1) {
        ret += outputRowSep;
      }
    }
    return ret;
  }

  function prettify(text, outputElSep, outputRowSep) {
    var ret = "";
    var maxElLength = [];
    for (var i = 0; i < text[0].length; i++) {
      maxElLength.push(0);
    }

    // find maximum element in all the text
    for (var i = 0; i < text.length; i++) {
      var row = text[i];
      for (var j = 0; j < row.length; j++) {
        var el = row[j];
        if (el.toString().length > maxElLength[j]) {
          maxElLength[j] = el.toString().length;
        }
      }
    }

    // format all text elements to have max length
    for (var i = 0; i < text.length; i++) {
      var row = text[i];
      for (var j = 0; j < row.length; j++) {
        var el = row[j];
        var padLength = maxElLength[j] - el.toString().length;

        if (j != row.length - 1) {
          if (!/^ +$/g.test(row[j])) {
            row[j] += outputElSep;
          } else {
            row[j] += repeatString(" ", outputElSep.length);
          }
        }
        for (var k = 0; k < padLength; k++) {
          row[j] = row[j] + " ";
        }
      }
    }

    // re-use formatText to join all elements together as a string
    return formatText(text, "", outputRowSep);
  }

  function repeatString(str, count) {
    if (count == 0) return "";
    if (count == 1) return str;
    var ret = "";
    for (var i = 0; i < count; i++) {
      ret = ret + str;
    }
    return ret;
  }

  return {
    converter: bridge,
    config: {},
  };
};
