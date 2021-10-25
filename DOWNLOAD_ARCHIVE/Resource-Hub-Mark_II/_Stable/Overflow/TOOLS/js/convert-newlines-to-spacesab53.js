window.bridges["convert-newlines-to-spaces"] = function () {
  var bridge = function (text) {
    var options = this.options.get();
    var joinChar = options["char"];
    var collapseNewlines = options["collapse-newlines"];

    if (collapseNewlines) {
      text = text.replace(/\n+/g, "\n");
    }

    var lines = text.split("\n");
    return lines.join(joinChar);
  };

  return {
    converter: bridge,
    config: {},
  };
};
