window.bridges["convert-text-to-base64"] = function () {
  var bridge = function (text) {
    if (!text) {
      return "";
    }

    var options = this.options.get();
    var split = options["base64-split"] || false;
    var toDataURI = options["data-uri"] || false;
    var dataURICharset = options["data-uri-charset"] || false;
    var mimeType = options["data-mime"] || "text/plain";
    var splitSize = parseInt(options["base64-split-length"], 10) || 76;
    var encoding = options["encoding"] || "utf8";
    var multiLine = options["multi-line"] || false;

    if (encoding == "utf8") {
      if (multiLine) {
        var lines = text.split("\n");
        var ret = [];
        var numbOfChunked = 0;

        for (var i = 0; i < lines.length; i++) {
          var base64 = text_to_base64(lines[i]);
          if (split) {
            var splittedBase64 = split_in_blocks(base64, splitSize);
            if (splittedBase64.length > splitSize) numbOfChunked++;
            ret.push(splittedBase64);
          } else {
            ret.push(base64);
          }
        }

        if (split && numbOfChunked > 0) {
          var base64 = "";
          for (var i = 0; i < ret.length; i++) {
            var line = ret[i];
            if (line.length == 0) {
              base64 += line + "\n";
            } else if (i < ret.length - 1) {
              base64 += line + "\n\n";
            } else {
              base64 += line;
            }
          }
        } else {
          var base64 = ret.join("\n");
        }
      } else {
        var base64 = text_to_base64(text);
      }
    } else {
      var bytes = [];
      var encoded = utf8.encode(text);
      for (var i = 0; i < encoded.length; i++) {
        var byte = encoded[i].charCodeAt(0);
        bytes.push(byte);
      }

      if (/^(utf16|ucs2)/.test(encoding)) {
        if (encoding == "utf16be" || encoding == "ucs2be") {
          var utf16Bytes = utf8ToUtf16(bytes, "be");
        } else if (encoding == "utf16le" || encoding == "ucs2le") {
          var utf16Bytes = utf8ToUtf16(bytes, "le");
        }

        var utf16str = "";

        for (var i = 0; i < utf16Bytes.length; i++) {
          var utf16Unit = utf16Bytes[i];
          if (utf16Unit.length == 1) {
            var unit = utf16Unit[0];
            var byte2 = (unit & 0xff00) >> 8;
            var byte1 = unit & 0x00ff;

            utf16str = utf16str + String.fromCharCode(byte2);
            utf16str = utf16str + String.fromCharCode(byte1);
          } else {
            var byte4 = (utf16Unit[0] & 0xff00) >> 8;
            var byte3 = utf16Unit[0] & 0x00ff;
            var byte2 = (utf16Unit[1] & 0xff00) >> 8;
            var byte1 = utf16Unit[1] & 0x00ff;

            utf16str = utf16str + String.fromCharCode(byte4);
            utf16str = utf16str + String.fromCharCode(byte3);
            utf16str = utf16str + String.fromCharCode(byte2);
            utf16str = utf16str + String.fromCharCode(byte1);
          }
        }

        var base64 = btoa(utf16str);
      } else if (/^(utf32|ucs4)/.test(encoding)) {
        if (encoding == "utf32be" || encoding == "ucs4be") {
          var utf32Bytes = utf8ToUtf32(bytes, "be");
        } else if (encoding == "utf32le" || encoding == "ucs4le") {
          var utf32Bytes = utf8ToUtf32(bytes, "le");
        }

        var utf32str = "";

        for (var i = 0; i < utf32Bytes.length; i++) {
          var utf32Unit = utf32Bytes[i];

          var byte4 = utf32Unit[0];
          var byte3 = utf32Unit[1];
          var byte2 = utf32Unit[2];
          var byte1 = utf32Unit[3];

          utf32str = utf32str + String.fromCharCode(byte4);
          utf32str = utf32str + String.fromCharCode(byte3);
          utf32str = utf32str + String.fromCharCode(byte2);
          utf32str = utf32str + String.fromCharCode(byte1);
        }

        var base64 = btoa(utf32str);
      }
    }

    if (split && !multiLine) {
      base64 = split_in_blocks(base64, splitSize);
    }

    if (toDataURI) {
      if (dataURICharset) {
        var encodingToCharset = {
          utf8: "utf-8",
          utf16be: "utf-16be",
          utf16le: "utf-16le",
          utf32be: "utf-32be",
          utf32le: "utf-32le",
          ucs2be: "iso-10646-ucs-2be",
          ucs2le: "iso-10646-ucs-2le",
          ucs4be: "iso-10646-ucs-4be",
          ucs4le: "iso-10646-ucs-4le",
        };
        var charsetString = encodingToCharset[encoding];
        base64 = "data:{0};charset={1};base64,{2}".format(
          mimeType,
          charsetString,
          base64
        );
      } else {
        base64 = "data:{0};base64,{1}".format(mimeType, base64);
      }
    }

    return base64;
  };

  function split_in_blocks(str, size) {
    var match = str.match(new RegExp(".{1," + size + "}", "gm"));
    if (!match) return "";
    return match.join("\n");
  }

  function text_to_base64(str) {
    return btoa(
      encodeURIComponent(str).replace(
        /%([0-9A-F]{2})/g,
        function toSolidBytes(match, p1) {
          return String.fromCharCode("0x" + p1);
        }
      )
    );
  }

  return {
    converter: bridge,
    config: {},
  };
};
