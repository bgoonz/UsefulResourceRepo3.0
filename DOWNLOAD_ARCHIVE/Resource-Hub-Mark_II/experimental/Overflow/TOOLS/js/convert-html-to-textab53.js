window.bridges["convert-html-to-text"] = function () {
  var bridge = function (html) {
    var options = this.options.get();

    if (!html) return "";

    var conversionMethod = "textcontent";
    if (options["line-break"]) {
      var conversionMethod = "innertext";
    }

    var ret = htmlToText(html, conversionMethod);

    if (options["strip-whitespace"]) {
      ret = ret.replace(/\s+/g, " ");
      ret = ret.replace(/^\s+/, "");
      ret = ret.replace(/\s+$/, "");
    }

    return ret;
  };

  function htmlToText(html, method) {
    var div = document.createElement("div");
    div.innerHTML = html;

    if (method == "textcontent") {
      return div.textContent;
    } else if (method == "innertext") {
      return div.innerText;
    } else {
      return "unknown conversion method";
    }
  }

  return {
    converter: bridge,
    config: {},
  };
};
