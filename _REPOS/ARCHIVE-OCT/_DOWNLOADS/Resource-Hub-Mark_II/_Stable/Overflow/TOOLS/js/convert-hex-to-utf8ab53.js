window.bridges["convert-hex-to-utf8"] = function () {
  var bridge = function (hex) {
    hex = hex.replace(/\s+/g, " ");
    hex = hex.replace(/^\s+/g, "");
    hex = hex.replace(/\s+$/g, "");
    hex = hex.replace(/0x/g, "");

    if (hex.length == 0) {
      return "";
    }

    var chars = [];
    if (hex.indexOf(" ") > 0) {
      // hex values are separated by space
      //
      var bytes = hex.split(" ");
      for (var i = 0; i < bytes.length; i++) {
        chars.push(String.fromCharCode(parseInt(bytes[i], 16)));
      }
    } else {
      // hex values are one large blob of hex bytes
      //
      if (hex.length < 2) {
        hex = "0" + hex;
      }

      if (hex.length % 2 != 0) {
        this.output.showNegativeBadge(
          "Can't convert.",
          "Input hex doesn't split into groups of 2 bytes evenly."
        );
        return "";
      }

      for (var i = 0; i < hex.length; i += 2) {
        chars.push(String.fromCharCode(parseInt(hex.substr(i, 2), 16)));
      }
    }

    return utf8.decode(chars.join(""));
  };

  return {
    converter: bridge,
    config: {},
  };
};
