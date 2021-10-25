window.bridges["filter-text"] = function () {
  var bridge = function (text) {
    var options = this.options.get();
    var invert = options.invert;

    var lines = text.split("\n");
    var retLines = [];

    if (options["filter-by-string"]) {
      var filterString = options["string"];
      for (var i = 0; i < lines.length; i++) {
        var line = lines[i];
        if (invert) {
          if (line.indexOf(filterString) < 0) {
            retLines.push(line);
          }
        } else {
          if (line.indexOf(filterString) >= 0) {
            retLines.push(line);
          }
        }
      }
    } else {
      var filterRegex = options["regex"];
      var regexParts = filterRegex.match(/^\/(.*?)\/([gimuy]*)$/);
      if (regexParts) {
        var re = new RegExp(regexParts[1], regexParts[2]);
      } else {
        var re = new RegExp(filterRegex);
      }

      for (var i = 0; i < lines.length; i++) {
        var line = lines[i];
        if (invert) {
          if (!re.test(line)) {
            retLines.push(line);
          }
        } else {
          if (re.test(line)) {
            retLines.push(line);
          }
        }
      }
    }

    return retLines.join("\n");
  };

  return {
    converter: bridge,
    config: {},
  };
};
