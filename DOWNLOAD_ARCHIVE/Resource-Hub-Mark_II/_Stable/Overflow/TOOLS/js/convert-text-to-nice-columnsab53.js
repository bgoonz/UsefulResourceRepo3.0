window.bridges["convert-text-to-nice-columns"] = function () {
  var bridge = function (text) {
    var options = this.options.get();

    if (text.length == 0) {
      return "";
    }

    var inputElSep = options["input-element-separator"] || "";
    var inputRowSep = options["input-row-separator"] || "\n";
    var outputElSep = options["output-element-separator"] || "";
    var outputRowSep = options["output-row-separator"] || "\n";

    if (inputElSep == "\\n") inputElSep = "\n";
    if (outputElSep == "\\n") outputElSep = "\n";
    if (inputRowSep == "\\n") inputRowSep = "\n";
    if (outputRowSep == "\\n") outputRowSep = "\n";
    if (inputElSep == " ") inputElSep = /\s+/;

    if (options["right-align"]) {
      var align = "right";
    } else if (options["left-align"]) {
      var align = "left";
    } else {
      var align = "center";
    }

    var sepPos = {
      sepByColumns: options["align-separator-by-columns"],
      sepEverywhere: options["separator-everywhere"],
    };

    var lines = text.split(inputRowSep);
    var maxLineLen = maxLineLength(lines, inputElSep);
    var arr = [];

    for (var i = 0; i < lines.length; i++) {
      var line = lines[i].trim().split(inputElSep);
      arr.push(line);

      for (var j = line.length; j < maxLineLen; j++) {
        arr[i].push(" ");
      }
    }

    if (outputRowSep != "\n") {
      return formatText(arr, outputElSep, outputRowSep);
    }
    return prettify(arr, outputElSep, outputRowSep, align, sepPos);
  };

  function maxLineLength(lines, inputElSep) {
    var maxLineLen = 0;
    for (var i = 0; i < lines.length; i++) {
      line = lines[i].trim();
      var row = line.split(inputElSep);

      if (row.length > maxLineLen) {
        maxLineLen = line.split(inputElSep).length;
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

  function prettify(text, outputElSep, outputRowSep, align, sepPos) {
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

        if (!sepPos.sepByColumns) {
          addOutputElSep();
        }

        for (var k = 0; k < padLength; k++) {
          if (align == "right") {
            row[j] = " " + row[j];
          } else if (align == "left") {
            row[j] = row[j] + " ";
          } else {
            if (k < padLength / 2) {
              row[j] = row[j] + " ";
            } else {
              row[j] = " " + row[j];
            }
          }
        }

        if (sepPos.sepByColumns) {
          addOutputElSep();
        }

        function addOutputElSep() {
          if (j != row.length - 1) {
            if (!/^ +$/g.test(row[j]) || sepPos.sepEverywhere) {
              row[j] += outputElSep;
            } else {
              row[j] += repeatString(" ", outputElSep.length);
            }
          }
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
