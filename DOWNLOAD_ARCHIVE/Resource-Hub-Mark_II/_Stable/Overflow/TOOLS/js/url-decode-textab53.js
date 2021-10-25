window.bridges["url-decode-text"] = function () {
  var bridge = function (text) {
    return decodeURIComponent(text);
  };

  return {
    converter: bridge,
    config: {},
  };
};
