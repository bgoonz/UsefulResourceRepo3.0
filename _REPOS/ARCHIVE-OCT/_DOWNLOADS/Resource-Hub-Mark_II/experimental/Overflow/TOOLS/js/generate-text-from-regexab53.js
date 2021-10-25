window.bridges["generate-text-from-regex"] = function () {
  var bridge = function (regex) {
    var options = this.options.get();
    var regex = options["regex"];
    var results = +options["results"];

    if (!results) {
      this.output.showNegativeBadge(
        "Can't generate.",
        '"' +
          options["results"] +
          '" is not a valid number for number of results.'
      );
      return "";
    }

    console.dir(regex);
    var text = [];
    for (var i = 1; i <= results; i++) {
      var r = new RandExp(regex);
      text.push(r.gen());
    }

    this.output.showStatus("generated");
    return text.join("\n");
  };

  return {
    converter: bridge,
    config: {},
  };
};
