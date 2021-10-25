window.bridges["convert-bbcode-to-text"] = function () {
  var bridge = function (text) {
    var options = this.options.get();

    if (!text) return "";

    var result = XBBCODE.process({
      text: text,
      removeMisalignedTags: false,
      addInLineBreaks: false,
    });
    if (result.error) {
      throw new Error(result.errorQueue.join("\n"));
    }

    var ret = htmlToText(result.html, "textcontent");

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
