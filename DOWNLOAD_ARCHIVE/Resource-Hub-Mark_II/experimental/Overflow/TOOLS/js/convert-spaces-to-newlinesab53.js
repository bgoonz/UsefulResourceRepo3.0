window.bridges["convert-spaces-to-newlines"] = function () {
  var bridge = function (text) {
    var options = this.options.get();
    var tabsAsSpaces = options["tabs-as-spaces"];

    if (tabsAsSpaces) {
      text = text.replace(/\s/g, "\n");
    } else {
      text = text.replace(/ /g, "\n");
    }

    return text;
  };

  return {
    converter: bridge,
    config: {},
  };
};
