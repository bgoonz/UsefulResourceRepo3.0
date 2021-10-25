window.bridges["convert-morse-to-text"] = function () {
  var bridge = function (morse) {
    if (!morse) return "";

    var options = this.options.get();
    var dot = options["dot"] || ".";
    var dash = options["dash"] || "-";
    var signal = options["signal"];

    morse = morse.replace(regex_literal(dot), ".");
    morse = morse.replace(regex_literal(dash), "-");

    var result = morseToText(morse, signal);
    if (result.error) {
      var encounter = result.error.char;
      encounter = encounter.replace(/\./g, dot);
      encounter = encounter.replace(/\-/g, dash);
      this.output.showWarningBadge(
        "Output might not be correct.",
        '"' + encounter + '" contains an invalid Morse symbol.'
      );
    }
    return result.text;
  };

  function regex_literal(text) {
    text = text.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
    return new RegExp(text, "g");
  }
  return {
    converter: bridge,
    config: {},
  };
};
