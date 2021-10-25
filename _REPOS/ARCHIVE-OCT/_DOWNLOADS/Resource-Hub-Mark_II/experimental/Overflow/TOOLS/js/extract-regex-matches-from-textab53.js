window.bridges["extract-regex-matches-from-text"] = function () {
  var bridge = function (text) {
    var tool = this;
    var options = tool.options.get();

    if (text.length == 0) {
      return "";
    }

    var regex = options["regex"];
    regex = regex.trim();
    var sep = options["separator"] || "\n";
    if (sep == "\\n") sep = "\n";

    var regexParts = regex.match(/^\/(.*?)\/([gimuy]*)$/);
    if (regexParts) {
      var r = new RegExp(regexParts[1], regexParts[2]);
    } else {
      var r = new RegExp(regex);
    }
    var matches = text.match(r);
    var ret = "";
    if (matches) {
      for (var i = 0; i < matches.length; i++) {
        ret += matches[i];
        if (i != matches.length - 1) ret += sep;
      }
    }
    return ret;
  };

  return {
    converter: bridge,
    config: {},
  };
};
