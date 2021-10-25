window.bridges["remove-text-punctuation"] = function () {
  var bridge = function (text) {
    var puncRemover = new PunctuationRemover();
    return puncRemover.remove(text);
  };

  return {
    converter: bridge,
    config: {},
  };
};
