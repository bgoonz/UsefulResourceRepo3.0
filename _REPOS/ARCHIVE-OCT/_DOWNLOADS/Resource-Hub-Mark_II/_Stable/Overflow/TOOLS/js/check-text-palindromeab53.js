window.bridges["check-text-palindrome"] = function () {
  var bridge = function (text) {
    var options = this.options.get();

    if (text.length == 0) {
      return "";
    }

    if (options["multi-line"]) {
      var lines = text.split("\n");
      var ret = "";
      for (var i = 0; i < lines.length; i++) {
        var line = lines[i];
        if (line.length == 0) {
          ret += "\n";
        } else if (isPalindrome(line)) {
          ret += "true\n";
        } else {
          ret += "false\n";
        }
      }
      return ret;
    }

    if (isPalindrome(text)) {
      return "true\n";
    }

    return "false\n";
  };

  function isPalindrome(str) {
    var strPalindrome = str.split("").reverse().join("");
    return strPalindrome == str;
  }

  return {
    converter: bridge,
    config: {},
  };
};
