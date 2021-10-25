window.bridges["convert-base64-to-text"] = function () {
  var bridge = function (base64) {
    var tool = this;
    var options = tool.options.get();
    var error = function (a, b) {
      tool.output.showNegativeBadge(a, b, -1);
    };
    var multiLine = options["multi-line"] || false;

    if (/^data:.+?,/.test(base64)) {
      base64 = base64.replace(/^data:.+?,/, "");
    }

    if (multiLine) {
      if (/\n{2,}/.test(base64)) {
        var lines = base64.split(/\n{2,}/);
      } else {
        var lines = base64.split("\n");
      }

      var ret = [];
      for (var i = 0; i < lines.length; i++) {
        ret.push(base64_to_text(error, lines[i]));
      }
      return ret.join("\n");
    } else {
      return base64_to_text(error, base64);
    }
  };

  function base64_to_text(error, str) {
    try {
      return decodeURIComponent(
        atob(str)
          .split("")
          .map(function (c) {
            return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
          })
          .join("")
      );
    } catch (e) {
      if (e instanceof DOMException) {
        error("Can't Convert", "Base64 is encoded incorrectly.");
        return "";
      } else if (e instanceof URIError) {
        error("Can't Convert", "This Base64 is invalid.");
        return "";
      }
      return "";
    }
  }

  return {
    converter: bridge,
    config: {},
  };
};
