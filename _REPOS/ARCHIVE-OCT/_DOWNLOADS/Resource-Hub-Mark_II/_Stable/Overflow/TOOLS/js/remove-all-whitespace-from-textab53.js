window.bridges["remove-all-whitespace-from-text"] = function () {
  var bridge = function (text) {
    var options = this.options.get();
    var onlySpaces = options["only-spaces"];
    var spacesAndTabs = options["spaces-and-tabs"];

    if (onlySpaces) {
      text = text.replace(/ +/g, "");
    } else if (spacesAndTabs) {
      text = text.replace(/ +|\t/g, "");
    } else {
      text = text.replace(/\s+/g, "");
    }

    return text;
  };

  return {
    converter: bridge,
    config: {},
  };
};
