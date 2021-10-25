window.bridges["convert-nice-columns-to-text"] = function () {
  var bridge = function (text) {
    var tool = this;
    var options = tool.options.get();

    if (text.length == 0) {
      return "";
    }

    var outputElSep = options["output-element-separator"] || "";
    var outputRowSep = options["output-row-separator"] || "\n";
    var ignoreColumns = options["ignore-columns"];

    if (outputElSep == "\\n") outputElSep = "\n";
    if (outputRowSep == "\\n") outputRowSep = "\n";

    var ignoreColumn = parseColumns(ignoreColumns);
    if (!ignoreColumn.success) {
      tool.output.showNegativeBadge(
        "Can't ignore columns.",
        ignoreColumn.error
      );
      return "";
    }

    var lines = text.split("\n");
    removeEmptyRows(lines);

    if (text.indexOf("\t") != -1) {
      var outputText = columnsWithTabs(lines, ignoreColumn.columnNumbers);
    } else {
      var maxLine = findMaxLine(lines);
      var outputText = columnsToText(
        lines,
        maxLine,
        ignoreColumn.columnNumbers
      );
    }

    for (var i = 0; i < outputText.length; i++) {
      outputText[i] = outputText[i].join(outputElSep);
    }
    return outputText.join(outputRowSep);
  };

  function columnsWithTabs(lines, ignoreColumn) {
    var arr = [];
    for (var i = 0; i < lines.length; i++) {
      var startPos = 0;
      var row = lines[i].trim();
      row = row.split(/(\t+)/);

      if (arr[i] == undefined) {
        arr[i] = [];
      }

      for (var j = 0; j < row.length; j++) {
        if (
          (/^\t+$/.test(row[j]) || j == row.length - 1) &&
          ignoreColumn.indexOf((j + 1) / 2) == -1
        ) {
          if (j == row.length - 1) {
            arr[i].push(row.slice(startPos, j + 1).join(""));
          } else {
            arr[i].push(row.slice(startPos, j).join(""));
            startPos = j + 1;
          }
        }
      }
    }
    return arr;
  }

  function columnsToText(lines, maxLine, ignoreColumn) {
    var arr = [];
    var startPos = 0;
    var count = 0;

    for (var i = 0; i < maxLine.len; i++) {
      if (lines[maxLine.number][i] != " " && i != maxLine.len - 1) {
        continue;
      }

      var foundСolumn = findColumn(true, lines, i, 0);
      if (foundСolumn.columnStatus == true) {
        i = foundСolumn.colNum;
      }

      if (foundСolumn.columnStatus == true || i == maxLine.len - 1) {
        count++;
        if (ignoreColumn.indexOf(count) != -1 && i != maxLine.len - 1) {
          continue;
        }

        for (var j = 0; j < lines.length; j++) {
          if (arr[j] == undefined) {
            arr[j] = [];
          }

          var element = lines[j].substring(startPos, i + 1);
          if (ignoreColumn.indexOf(0) != -1 && arr[j].length == 0) {
            element = rtrim(element);
          } else {
            element = element.trim();
          }

          if (element.length != 0) {
            arr[j].push(element);
          }
        }
        startPos = i;
      }
    }
    return arr;
  }

  function findColumn(columnStatus, lines, i, count) {
    if (columnStatus == false) {
      if (count == 1) {
        return { columnStatus: false };
      } else {
        return {
          columnStatus: true,
          colNum: i - 2,
        };
      }
    } else {
      for (var j = 0; j < lines.length; j++) {
        if (lines[j][i] != " " && lines[j][i] != undefined) {
          columnStatus = false;
          break;
        }
      }
      return findColumn(columnStatus, lines, i + 1, count + 1);
    }
  }

  function rtrim(text) {
    return text.replace(/\s+$/, "");
  }

  function parseColumns(ignoreColumn) {
    var clearedItems = [];
    if (ignoreColumn.length == 0) {
      return {
        columnNumbers: clearedItems,
        success: true,
      };
    }

    var items = ignoreColumn.split(",");
    for (var i = 0; i < items.length; i++) {
      var clearedItem = items[i].trim().replace(/\s+/g, "");

      if (!/^\d+-\d+$/.test(clearedItem) && !/^\d+$/.test(clearedItem)) {
        return {
          success: false,
          error: "Column numbers must be comma separated.",
        };
      }

      if (/^\d+-\d+$/.test(clearedItem)) {
        var parts = clearedItem.split("-");
        var start = parts[0];
        var end = parts[1];

        if (start > end) {
          return {
            success: false,
            error: "The start of the interval is greater than the end.",
          };
        }

        for (var j = start; j <= end; j++) {
          clearedItems.push(parseInt(j));
        }
      } else {
        clearedItems.push(parseInt(clearedItem));
      }
    }
    return {
      columnNumbers: clearedItems,
      success: true,
    };
  }

  function removeEmptyRows(lines) {
    for (var i = 0; i < lines.length; i++) {
      if (lines[i].length == 0) {
        lines.splice(i, 1);
        i--;
        continue;
      }
    }
  }

  function findMaxLine(lines) {
    var len = 0;
    var number = 0;
    for (var i = 0; i < lines.length; i++) {
      var line = lines[i];
      if (line.length > len) {
        len = line.length;
        number = i;
      }
    }
    return {
      len: len,
      number: number,
    };
  }

  return {
    converter: bridge,
    config: {},
  };
};
