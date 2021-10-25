window.bridges["printf-text"] = function () {
  var bridge = function (text) {
    var options = this.options.get();
    var format = options["format"];

    if (text.length == 0) {
      return "";
    }

    var lines = text.split("\n");

    var ret = "";
    for (var i = 0; i < lines.length; i++) {
      if (lines[i].length) {
        var lineArgs = lines[i].split(/\s+/);
        var fmtArgs = lineArgs;
        fmtArgs.unshift(format);
        try {
          var formattedLine = sprintf.apply(null, fmtArgs);
          ret += formattedLine + "\n";
        } catch (e) {
          throw new Error(e.toString() + " (line " + (i + 1) + ")");
        }
      } else {
        ret += "\n";
      }
    }
    return ret;
  };

  return {
    converter: bridge,
    config: {},
  };
};
