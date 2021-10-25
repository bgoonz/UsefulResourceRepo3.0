window.bridges["remove-empty-lines-from-text"] = function () {
  var bridge = function (text) {
    var options = this.options.get();
    var lines = text.split("\n");
    var outputLines = [];

    for (var i = 0; i < lines.length; i++) {
      var line = lines[i];
      if (line.length == 0) {
        continue;
      }
      if (options["spaces-tabs"]) {
        if (/^\s+$/.test(line)) {
          continue;
        }
      }
      outputLines.push(line);
    }

    return outputLines.join("\n");
  };

  return {
    converter: bridge,
    config: {},
  };
};
