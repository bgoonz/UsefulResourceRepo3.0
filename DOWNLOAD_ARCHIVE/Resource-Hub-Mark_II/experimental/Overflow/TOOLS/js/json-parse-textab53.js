window.bridges["json-parse-text"] = function () {
  var bridge = function (text) {
    var tool = this;
    text = text.trim();

    if (text.length == 0) {
      return "";
    }

    if (text.charAt(0) != '"' || text.charAt(text.length - 1) != '"') {
      tool.output.showNegativeBadge(
        "Can't parse text",
        "Text must be surrounded by quote marks."
      );
      return "";
    }

    return JSON.parse(text);
  };

  return {
    converter: bridge,
    config: {},
  };
};
