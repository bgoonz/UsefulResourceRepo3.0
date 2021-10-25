window.bridges["html-decode-text"] = function () {
  var bridge = function (text) {
    var options = this.options.get();

    var el = document.createElement("div");
    el.innerHTML = text;
    return el.textContent;
  };

  return {
    converter: bridge,
    config: {},
  };
};
