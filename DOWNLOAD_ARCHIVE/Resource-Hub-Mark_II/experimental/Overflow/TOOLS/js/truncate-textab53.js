window.bridges["truncate-text"] = function () {
  var truncatedBytes = [];
  var truncatedText = "";

  var bridge = function (text) {
    var tool = this;
    var error = function (a, b) {
      tool.output.showNegativeBadge(a, b, -1);
    };
    var opts = parseOptions(tool, error);
    if (!opts) return "";
    text = text.trim();
    if (text.length == 0) return "";

    truncatedBytes = [];
    truncatedText = "";

    var postfix = { char: opts.postfix };
    if (opts.truncateBySize) {
      postfix.bytes = convertTextToBytes(postfix.char);
      postfix.len = postfix.bytes.length;
    } else {
      postfix.len = splitIntoGraphemes(postfix.char).length;
    }

    if (postfix.len > opts.textLen) {
      error(
        "Invalid Truncation Length",
        "Postfix/prefix length is greater than truncation length."
      );
      return "";
    }

    if (opts.multiLine) {
      var output = [];
      var lines = text.split("\n");
      for (var i = 0; i < lines.length; i++) {
        var truncated = truncateText(lines[i], opts, postfix);

        if (truncated.bytes !== false) {
          if (truncatedBytes.length > 0) truncatedBytes.push(10); // add newline byte
          truncatedBytes = truncatedBytes.concat(truncated.bytes);
        } else {
          if (truncatedText.length > 0) truncatedText += "\n"; // add newline symbol
          truncatedText += truncated.text;
        }

        output.push(truncated.text);
      }
      return output.join("\n");
    }

    var truncated = truncateText(text, opts, postfix);
    if (truncated.bytes !== false) {
      truncatedBytes = truncated.bytes;
    } else {
      truncatedText = truncated.text;
    }

    return truncated.text;
  };

  function truncateText(text, opts, postfix) {
    if (opts.truncateBySize) {
      return truncateTextByBytes(text, opts, postfix);
    } else {
      return truncateTextByChars(text, opts, postfix);
    }
  }

  function truncateTextByChars(text, opts, postfix) {
    if (text.length == 0) {
      return {
        text: "",
        bytes: false,
      };
    }

    var chars = splitIntoGraphemes(text);
    if (opts.direction == "right") {
      var truncatedArr = chars.slice(0, opts.textLen - postfix.len);
      var output = truncatedArr.join("") + postfix.char;
    } else {
      // direction == 'left'
      var start = chars.length - opts.textLen + postfix.len;
      if (start < 0) start = 0;
      var truncatedArr = chars.slice(start);
      var output = postfix.char + truncatedArr.join("");
    }

    return {
      text: output,
      bytes: false,
    };
  }

  function truncateTextByBytes(text, opts, postfix) {
    if (text.length == 0) {
      return {
        text: "",
        bytes: [],
      };
    }

    var bytes = convertTextToBytes(text);

    if (opts.direction == "right") {
      var truncated = bytes.slice(0, opts.lengthInBytes - postfix.len);
      var numberOfExtraBytes = findNumberOfLastExtraBytes(truncated, 0);
      var bytesToUtf8 = truncated.slice(
        0,
        truncated.length - numberOfExtraBytes
      );
      var bytesToAscii = truncated.slice(truncated.length - numberOfExtraBytes);
    } else {
      // direction == 'left'
      var start = bytes.length - opts.lengthInBytes + postfix.len;
      if (start < 0) start = 0;
      var truncated = bytes.slice(start);
      var numberOfExtraBytes = findNumberOfFirstExtraBytes(truncated, 0);
      var bytesToUtf8 = truncated.slice(numberOfExtraBytes);
      var bytesToAscii = truncated.slice(0, numberOfExtraBytes);
    }

    var chars = [];
    for (var i = 0; i < bytesToUtf8.length; i++) {
      chars.push(String.fromCharCode(parseInt(bytesToUtf8[i], 10)));
    }
    var validUtf8 = utf8.decode(chars.join(""));

    var chars = [];
    for (var i = 0; i < bytesToAscii.length; i++) {
      chars.push(String.fromCharCode(parseInt(bytesToAscii[i], 10)));
    }
    var validAscii = chars.join("");

    if (opts.direction == "right") {
      return {
        text: validUtf8 + validAscii + postfix.char,
        bytes: truncated.concat(postfix.bytes),
      };
    } else {
      return {
        text: postfix.char + validAscii + validUtf8,
        bytes: postfix.bytes.concat(truncated),
      };
    }
  }

  function convertTextToBytes(text) {
    var bytes = [];
    var encoded = utf8.encode(text);
    for (var i = 0; i < encoded.length; i++) {
      var byte = encoded[i].charCodeAt(0);
      bytes.push(byte);
    }
    return bytes;
  }

  function findNumberOfFirstExtraBytes(bytes, count) {
    if (count >= bytes.length) return bytes.length;
    var byteToCheck = bytes[count];

    if (
      (byteToCheck & 0xf0) == 0xf0 ||
      (byteToCheck & 0xe0) == 0xe0 ||
      (byteToCheck & 0xc0) == 0xc0
    ) {
      return count;
    } else if ((byteToCheck & 0x80) == 0x80) {
      // byte in format "10xxxxxx"
      return findNumberOfFirstExtraBytes(bytes, count + 1);
    } else {
      return count;
    }
  }

  function findNumberOfLastExtraBytes(bytes, count) {
    if (count >= bytes.length) return bytes.length;
    var byteToCheck = bytes[bytes.length - 1 - count];

    if ((byteToCheck & 0xf0) == 0xf0) {
      // byte in format "11110xxx"
      if (count > 2) return 0;
      else return count + 1;
    } else if ((byteToCheck & 0xe0) == 0xe0) {
      // byte in format "1110xxxx"
      if (count > 1) return 0;
      else return count + 1;
    } else if ((byteToCheck & 0xc0) == 0xc0) {
      // byte in format "110xxxxx"
      if (count > 0) return 0;
      else return count + 1;
    } else if ((byteToCheck & 0x80) == 0x80) {
      // byte in format "10xxxxxx"
      return findNumberOfLastExtraBytes(bytes, count + 1);
    } else {
      return 0;
    }
  }

  function splitIntoGraphemes(text) {
    var splitter = new GraphemeSplitter();
    var chars = splitter.splitGraphemes(text);
    return chars;
  }

  function parseOptions(tool, error) {
    var options = tool.options.get();
    var direction = options["truncate-left"] ? "left" : "right";

    if (options["use-postfix"]) {
      var postfix = options["postfix"] || "";
      if (postfix == "\\n") postfix = "\n";
    } else {
      var postfix = "";
    }

    var truncateBySize = options["truncate-by-size"];
    if (truncateBySize) {
      var fileSize = options["file-size"].trim();
      if (!/^\d+(\.\d+)?\s*(b|k|m)?$/i.test(fileSize)) {
        error("Invalid File Size", "File size isn't a valid number.");
        return false;
      }
      var lengthInBytes = 0;
      if (/^\d+$/.test(fileSize)) {
        lengthInBytes = fileSize;
      } else if (/^\d+\s*b$/i.test(fileSize)) {
        // bytes
        lengthInBytes = parseInt(fileSize);
      } else if (/^\d+(\.\d+)\s*b$/i.test(fileSize)) {
        // invalid bytes format
        error("Invalid File Size", "File size in bytes can't be a fraction.");
        return false;
      } else if (/^\d+(\.\d+)?\s*k$/i.test(fileSize)) {
        // kilobytes
        var fileSize = parseFloat(fileSize);
        lengthInBytes = parseInt(fileSize * 1024);
      } else if (/^\d+(\.\d+)?\s*m$/i.test(fileSize)) {
        // megabytes
        var fileSize = parseFloat(fileSize);
        lengthInBytes = parseInt(fileSize * 1024 * 1024);
      }
    } else {
      var textLen = options["length"].trim();
      if (!/^[+-]?\d+$/.test(textLen)) {
        error(
          "Invalid Truncation Length",
          "Length value isn't a valid number."
        );
        return false;
      }
      textLen = parseInt(textLen);
      if (textLen < 0) {
        error("Invalid Truncation Length", "Length value cannot be negative.");
        return false;
      }
    }

    return {
      multiLine: options["multi-line"],
      direction: direction,
      postfix: postfix,
      textLen: textLen,
      truncateBySize: truncateBySize,
      lengthInBytes: lengthInBytes,
    };
  }

  function downloader() {
    var tool = this;

    if (truncatedBytes.length > 0) {
      var byteArray = new Uint8Array(truncatedBytes);
      var data = new Blob([byteArray], { type: "text/plain" });
    } else {
      var data = new Blob([truncatedText], { type: "text/plain" });
    }

    saveAs(data, "output-" + tool.siteName + ".txt");
  }

  return {
    converter: bridge,
    config: {
      type: "text",
      override: {
        "output.download": downloader,
      },
    },
  };
};
