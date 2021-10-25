window.bridges["convert-octal-to-text"] = function () {
  var bridge = function (octal) {
    var tool = this;
    var options = tool.options.get();

    octal = octal.replace(/\s+/g, " ");
    var bytes = octal.split(" ");
    for (var i = 0; i < bytes.length; i++) {
      if (bytes[i].length < 3) {
        for (var j = bytes[i].length; j != 3; j++) {
          bytes[i] = "0" + bytes[i];
        }
      }
    }
    octal = bytes.join("");
    if (octal.length % 3 != 0) {
      this.output.showNegativeBadge(
        "Can't convert.",
        "Uneven number of octal characters."
      );
      return "";
    }
    var text = "";
    for (var i = 0; i < octal.length; i += 3) {
      text += String.fromCharCode(parseInt(octal.substr(i, 3), 8));
    }

    if (options["singlebyte"]) {
      if (typeof utf8 !== "undefined") {
        text = utf8.decode(text);
      } else {
        tool.output.showNegativeBadge(
          "Can't decode singlebyte",
          "UTF-8 library is not defined."
        );
        return "";
      }
    }

    return text;
  };

  return {
    converter: bridge,
    config: {},
  };
};
