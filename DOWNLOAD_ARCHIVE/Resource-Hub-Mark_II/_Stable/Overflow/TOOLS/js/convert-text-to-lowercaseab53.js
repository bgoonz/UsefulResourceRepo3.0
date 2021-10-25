window.bridges["convert-text-to-lowercase"] = function () {
  var bridge = function (text) {
    var options = this.options.get();

    return text.toLowerCase();
  };

  return {
    converter: bridge,
    config: {},
  };
};
