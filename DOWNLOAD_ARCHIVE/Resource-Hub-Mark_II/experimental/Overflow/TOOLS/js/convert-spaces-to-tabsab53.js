window.bridges["convert-spaces-to-tabs"] = function () {
  var bridge = function (text) {
    var options = this.options.get();
    var onlySpaces = options["only-spaces"];
    var repeatedSpaces = options["repeated-spaces"];
    var whitespaces = options["whitespaces"];

    if (onlySpaces) {
      text = text.replace(/ /g, "\t");
    } else if (repeatedSpaces) {
      text = text.replace(/ +/g, "\t");
    } else if (whitespaces) {
      text = text.replace(/\s/g, "\t");
    } else {
      text = text.replace(/\s+/g, "\t");
    }

    return text;
  };

  return {
    converter: bridge,
    config: {},
  };
};
