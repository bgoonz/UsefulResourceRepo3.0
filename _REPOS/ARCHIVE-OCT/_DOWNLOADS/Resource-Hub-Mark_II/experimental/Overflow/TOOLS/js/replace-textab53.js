window.bridges["replace-text"] = function () {
  var bridge = function (text) {
    var options = this.options.get();

    var newString = options["new-string"];

    if (options["find-by-string"]) {
      var replaceFrom = options["find"];
      return text.split(replaceFrom).join(newString);
    } else {
      var splitRegex = options["regex"];
      var regexParts = splitRegex.match(/^\/(.*?)\/([gimuy]*)$/);
      if (regexParts) {
        var re = new RegExp(regexParts[1], regexParts[2]);
      } else {
        var re = new RegExp(splitRegex);
      }
      return text.replace(re, newString);
    }
  };

  return {
    converter: bridge,
    config: {},
  };
};
