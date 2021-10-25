window.bridges["find-text-length"] = function () {
  var bridge = function (text) {
    var tool = this;

    var options = parseOptions(tool);
    if (!options) {
      tool.output.setValue("");
      return;
    }

    if (options.ignoreNewlines) {
      text = text.replace(/\n+/g, "");
    }
    if (options.ignoreTabs) {
      text = text.replace(/\t+/g, "");
    }
    if (options.ignoreSpaces) {
      text = text.replace(/\ +/g, "");
    }

    if (options.countGraphemes) {
      var splitter = new GraphemeSplitter();
      var characters = splitter.splitGraphemes(text);
      return characters.length;
    } else {
      var bytes = [];
      var encoded = utf8.encode(text);
      for (var i = 0; i < encoded.length; i++) {
        var byte = encoded[i].charCodeAt(0);
        bytes.push(byte);
      }

      if (options.encoding == "utf8") {
        return bytes.length;
      } else if (options.encoding == "utf16") {
        var utf16Bytes = utf8ToUtf16(bytes);
        var length = 0;
        for (var i = 0; i < utf16Bytes.length; i++) {
          var utf16Units = utf16Bytes[i];
          if (utf16Units.length == 1) {
            length += 2;
          } else if (utf16Units.length == 2) {
            length += 4;
          }
        }
        return length;
      } else if (options.encoding == "utf32") {
        var utf32Bytes = utf8ToUtf32(bytes);
        var length = utf32Bytes.length * 4;
        return length;
      }
    }
  };

  function parseOptions(tool) {
    var options = tool.options.get();

    var countGraphemes = options["count-graphemes"];
    var encoding = options["output-encoding"];

    /*
        string and text tools use inverted to "ignore-newlines" option,
        called "count-newlines", therefore we adjust it for all cases
        */

    if (options["count-newlines"] !== undefined) {
      if (options["count-newlines"]) var ignoreNewlines = false;
      else var ignoreNewlines = true;
    } else {
      var ignoreNewlines = options["ignore-newlines"];
    }

    var ignoreTabs = options["ignore-tabs"];
    var ignoreSpaces = options["ignore-spaces"];

    return {
      countGraphemes: countGraphemes,
      encoding: encoding,
      ignoreNewlines: ignoreNewlines,
      ignoreTabs: ignoreTabs,
      ignoreSpaces: ignoreSpaces,
    };
  }

  return {
    converter: bridge,
    config: {},
  };
};
