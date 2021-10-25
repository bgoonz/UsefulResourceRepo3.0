window.bridges["convert-binary-to-utf8"] = function () {
  var bridge = function (binary) {
    var tool = this;
    var options = tool.options.get();

    binary = binary.replace(/\s+/g, " ");
    binary = binary.replace(/^\s+/g, "");
    binary = binary.replace(/\s+$/g, "");

    if (binary.length == 0) {
      return "";
    }

    var chars = [];
    if (binary.indexOf(" ") > 0) {
      // binary values are separated by space
      //
      var bytes = binary.split(" ");
      for (var i = 0; i < bytes.length; i++) {
        chars.push(String.fromCharCode(parseInt(bytes[i], 2)));
      }
    } else {
      // binary values are one large blob of binary bits
      //
      if (binary.length < 8) {
        while (binary.length < 8) {
          binary = "0" + binary;
        }
      }

      if (binary.length % 8 != 0) {
        this.output.showNegativeBadge(
          "Can't convert.",
          "Input binary doesn't split into groups of 8 bits evenly."
        );
        return "";
      }

      for (var i = 0; i < binary.length; i += 8) {
        chars.push(String.fromCharCode(parseInt(binary.substr(i, 8), 2)));
      }
    }

    var text = chars.join("");
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
