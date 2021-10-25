window.bridges["json-stringify-text"] = function () {
  var bridge = function (text) {
    return JSON.stringify(text);
  };

  return {
    converter: bridge,
    config: {},
  };
};
