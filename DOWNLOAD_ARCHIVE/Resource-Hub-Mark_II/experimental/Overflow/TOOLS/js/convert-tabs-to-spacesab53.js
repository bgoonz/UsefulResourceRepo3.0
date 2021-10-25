window.bridges["convert-tabs-to-spaces"] = function () {
  var bridge = function (text) {
    var options = this.options.get();
    var spacesPerTab = +options["spaces-per-tab"];

    if (isNaN(spacesPerTab)) {
      spacesPerTab = 1;
    }

    var spaces = "";
    for (var i = 1; i <= spacesPerTab; i++) {
      spaces += " ";
    }

    text = text.replace(/\t/g, spaces);
    return text;
  };

  return {
    converter: bridge,
    config: {},
  };
};
