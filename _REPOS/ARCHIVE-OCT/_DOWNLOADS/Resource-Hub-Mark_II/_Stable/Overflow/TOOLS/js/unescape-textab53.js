window.bridges["unescape-text"] = function () {
  var bridge = function (text) {
    var options = this.options.get();

    return text.replace(/\\(.?)/g, function (match, char) {
      if (char == "\\") return "\\";
      if (char == "n") return "\n";
      if (char == "t") return "\t";
      if (char == "") return "";
      return char;
    });
  };

  return {
    converter: bridge,
    config: {},
  };
};
