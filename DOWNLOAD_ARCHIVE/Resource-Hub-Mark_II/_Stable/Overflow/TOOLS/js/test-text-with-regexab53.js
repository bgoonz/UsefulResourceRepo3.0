window.bridges["test-text-with-regex"] = function () {
  var bridge = function (text) {
    var tool = this;
    var options = tool.options.get();
    if (/^\s*$/.test(text)) return "";

    var regex = options["regex"].trim();
    var multiline = options["multi-line"];

    var regexParts = regex.match(/^\/(.*?)\/([gimuy]*)$/);
    if (regexParts) {
      var r = new RegExp(regexParts[1], regexParts[2]);
    } else {
      var r = new RegExp(regex);
    }

    if (multiline) {
      var output = [];
      var arr = text.split("\n");
      for (var i = 0; i < arr.length; i++) {
        var result = r.test(arr[i]);
        r.test(""); // reset lastIndex property;
        output.push(result);
      }
      return output.join("\n");
    }

    return r.test(text);
  };

  return {
    converter: bridge,
    config: {},
  };
};
