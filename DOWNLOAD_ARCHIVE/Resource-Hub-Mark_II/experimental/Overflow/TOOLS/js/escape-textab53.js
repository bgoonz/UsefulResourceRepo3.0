window.bridges["escape-text"] = function () {
  var bridge = function (text) {
    var options = this.options.get();

    text = text.replace(/\\/g, "\\\\");
    text = text.replace(/\t/g, "\\t");
    text = text.replace(/\n/g, "\\n");
    text = text.replace(/'/g, "\\'");
    text = text.replace(/"/g, '\\"');
    return text;
  };

  return {
    converter: bridge,
    config: {},
  };
};
