window.bridges["convert-text-to-uppercase"] = function () {
  var bridge = function (text) {
    var options = this.options.get();

    return text.toUpperCase();
  };

  return {
    converter: bridge,
    config: {},
  };
};
