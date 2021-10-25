window.bridges["url-encode-text"] = function () {
  var bridge = function (text) {
    var options = this.options.get();

    var encoding = options["encoding"] || "utf8";
    var method = options["method"];
    var skipNewlines = options["preserve-newlines"];
    var skipTabs = options["preserve-tabs"];
    var skipSpaces = options["preserve-spaces"];
    var lowercase = options["lowercase-hex"];

    if (method == "escape") {
      var notEncode =
        "*+-./0123456789@ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz";
    } else if (method == "encode-uri") {
      var notEncode =
        "!#$&'()*+,-./0123456789:;=?@ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz~";
    } else if (method == "alphanumeric-underscore") {
      var notEncode =
        "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz";
    } else if (method == "custom-encode") {
      var encode = options["custom-symbols"] || "";
    } else if (method == "custom-don-not-encode") {
      var notEncode = options["custom-symbols"] || "";
    } else if (method == "encode-all-chars" || options["encode-all-chars"]) {
      var notEncode = "";
    } else {
      // encode-uri-component method;
      var notEncode =
        "!'()*-.0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz~";
    }

    var chars = splitIntoGraphemes(text);
    var output = [];

    for (var i = 0; i < chars.length; i++) {
      var char = chars[i];

      var skipChar =
        (skipNewlines && char == "\n") ||
        (skipTabs && char == "\t") ||
        (skipSpaces && char == " ");
      if (skipChar) {
        output.push(char);
        continue;
      }

      if (method == "custom-encode") {
        var shouldEncode = encode.indexOf(char) >= 0;
      } else {
        var shouldEncode = notEncode.indexOf(char) < 0;
      }

      if (shouldEncode) {
        var urlEncodedChar = urlEncodeText(char, encoding, lowercase, false);
        output.push(urlEncodedChar);
      } else {
        output.push(char);
      }
    }
    if (options["bom"]) {
      var bom = urlEncodeText("", encoding, lowercase, true);
      output.unshift(bom);
    }
    return output.join("");
  };

  function urlEncodeText(text, encoding, lowercase, bom) {
    var utf8 = textToUtf8(text);

    if (encoding == "utf8") {
      var urlEncoded = bytesToUrlEncoding(utf8, lowercase);
    } else if (/^(utf16|ucs2)/.test(encoding)) {
      var byteOrder = encoding.substr(-2, 2);
      var utf16Units = utf8ToUtf16(utf8, byteOrder, bom);
      var utf16Bytes = utf16ToBytes(utf16Units);
      var urlEncoded = bytesToUrlEncoding(utf16Bytes, lowercase);
    } else if (/^(utf32|ucs4)/.test(encoding)) {
      var byteOrder = encoding.substr(-2, 2);
      var utf32Units = utf8ToUtf32(utf8, byteOrder, bom);
      var utf32Bytes = utf32ToBytes(utf32Units);
      var urlEncoded = bytesToUrlEncoding(utf32Bytes, lowercase);
    }

    return urlEncoded;
  }

  function bytesToUrlEncoding(bytes, lowercase) {
    var urlEncoded = "";
    for (var i = 0; i < bytes.length; i++) {
      var byte = bytes[i].toString(16);
      if (byte.length == 1) {
        byte = "0" + byte;
      }
      urlEncoded = urlEncoded + "%" + byte;
    }
    if (!lowercase) urlEncoded = urlEncoded.toUpperCase();
    return urlEncoded;
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
