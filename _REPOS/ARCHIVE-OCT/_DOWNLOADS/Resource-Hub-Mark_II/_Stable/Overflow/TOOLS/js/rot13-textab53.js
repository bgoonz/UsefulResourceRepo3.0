window.bridges["rot13-text"] = function () {
  var bridge = function (text) {
    var options = this.options.get();

    return rot(text, 13);
  };

  return {
    converter: bridge,
    config: {},
  };
};
