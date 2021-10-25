window.bridges["convert-text-to-morse"] = function () {
  var bridge = function (text) {
    var options = this.options.get();
    var dot = options["dot"] || ".";
    var dash = options["dash"] || "-";

    var morse = textToMorse(text);
    morse = morse.replace(/\./g, dot);
    morse = morse.replace(/\-/g, dash);

    return morse;
  };

  return {
    converter: bridge,
    config: {},
  };
};
