window.bridges["create-text-palindrome"] = function () {
  var bridge = function (text) {
    var options = this.options.get();
    var centered = options["centered-text"];
    if (options["multi-line"]) {
      var lines = text.split("\n");
      var ret = "";
      for (var i = 0; i < lines.length; i++) {
        var line = lines[i];
        var chars = splitIntoGraphemes(line);
        var palindrome = createPalindrome(chars, centered);
        ret += palindrome + "\n";
      }
      return ret;
    } else {
      var chars = splitIntoGraphemes(text);
      return createPalindrome(chars, centered);
    }
  };

  function createPalindrome(array, centered) {
    var string = array.join("");
    var copyArray = array.reverse();
    if (centered) {
      copyArray.shift();
    }
    var copyStr = copyArray.join("");
    return string + copyStr;
  }

  function splitIntoGraphemes(text) {
    var splitter = new GraphemeSplitter();
    var chars = splitter.splitGraphemes(text);
    return chars;
  }

  return {
    converter: bridge,
    config: {},
  };
};
