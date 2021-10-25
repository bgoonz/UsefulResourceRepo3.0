window.bridges["count-text-lines"] = function () {
  var bridge = function (text) {
    var opts = this.options.get();
    if (text.length == 0) {
      return "";
    }

    var lines = text.split(/\n/g);
    var count = 0;

    for (var i = 0; i < lines.length; i++) {
      var line = lines[i];

      if (opts["trim-lines"]) {
        line = line.trim();
      }

      if (opts["count-all-lines"]) {
        count++;
      } else if (opts["count-non-empty-lines"] && line.length > 0) {
        count++;
      } else if (opts["count-empty-lines"] && line.length == 0) {
        count++;
      }
    }

    return count;
  };

  return {
    converter: bridge,
    config: {},
  };
};
