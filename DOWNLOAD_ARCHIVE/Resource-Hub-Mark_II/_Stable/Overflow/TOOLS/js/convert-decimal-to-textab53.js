window.bridges["convert-decimal-to-text"] = function () {
  var bridge = function (decimal) {
    var tool = this;
    var options = tool.options.get();

    if (!decimal) {
      return "";
    }

    var hasSpaces = decimal.indexOf(" ") !== -1;
    decimal = decimal.replace(/\s+/g, " ");
    var bytes = decimal.split(" ");
    var parseGlued = options["parse-glued"] == true;

    if (!hasSpaces && parseGlued) {
      var maxCharCode = options["glued-max-code"];
      var goDownFrom = options["glued-down-from"];
      var shouldWarn = options["glued-warn"] == true;

      shouldWarn &&
        tool.output.showWarningBadge(
          "Output might be incorrect",
          "This decimal has no spaces and was parsed heuristically."
        );
      return parseGluedDecimal(decimal, maxCharCode, goDownFrom);
    }

    var text = "";
    for (var i = 0; i < bytes.length; i++) {
      text += String.fromCharCode(bytes[i]);
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

  function parseGluedDecimal(decimalString, maxCharCode, goDownFrom) {
    var canStartWithZero = false;

    maxCharCode = maxCharCode || 256;
    var maxChars = maxCharCode.toString(10).length;

    if (!goDownFrom || goDownFrom < 1 || goDownFrom > maxChars) {
      goDownFrom = maxChars;
    }

    var chars = [];

    for (var i = 0; i < decimalString.length; i++) {
      for (var j = goDownFrom; j > 0; j--) {
        var parsedPart = decimalString.substr(i, j);
        var nextZero = decimalString.charAt(i + j) == "0";
        var charCode = parseInt(parsedPart);
        var codeExceeds = charCode > maxCharCode;

        if (!codeExceeds && !(nextZero && canStartWithZero)) {
          chars.push(String.fromCharCode(charCode));
          i += j - 1;
          break;
        }
      }
    }

    return chars.join("");
  }

  return {
    converter: bridge,
    config: {},
  };
};
