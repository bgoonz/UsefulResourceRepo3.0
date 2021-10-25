window.bridges["add-line-numbers"] = function () {
  var bridge = function (text) {
    var tool = this;
    var options = tool.options.get();
    if (text.length == 0) return "";

    var numberNonEmptyLines = options["number-non-empty-lines"];
    var format = options["number-format"];
    if (format == "number") {
      var format = "%n ";
    } else if (format == "number-dot") {
      var format = "%n. ";
    } else if (format == "number-bracket") {
      var format = "%n) ";
    } else if (format == "custom") {
      var format = options["custom-format"];
    }

    var lines = text.split("\n");
    var output = [];
    var count = 1;
    for (var i = 0; i < lines.length; i++) {
      var line = lines[i];
      if (numberNonEmptyLines && /^\s*$/.test(line)) {
        output.push(line);
        continue;
      }
      var lineNumber = format.replace(/%n/g, count);
      output.push(lineNumber + line);
      count++;
    }
    return output.join("\n");
  };

  return {
    converter: bridge,
    config: {},
  };
};
