window.bridges["convert-json-to-text"] = function () {
  var bridge = function (json) {
    var options = this.options.get();

    if (!json) return "";
    return jsonToText(JSON.parse(json));
  };

  function jsonToText(json) {
    var text = "";
    if (typeof json == "object") {
      if (json instanceof Array) {
        for (var key in json) {
          text += jsonToText(json[key]);
        }
      } else {
        for (var key in json) {
          var val = json[key];
          if (typeof val == "object") {
            text += key + "\n" + jsonToText(val);
          } else {
            text += key + " " + jsonToText(val);
          }
        }
      }
    } else {
      text += json.toString() + "\n";
    }

    return text;
  }
  return {
    converter: bridge,
    config: {},
  };
};
