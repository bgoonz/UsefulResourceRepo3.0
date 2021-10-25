window.bridges["remove-duplicate-lines-from-text"] = function () {
  var bridge = function (text) {
    var options = this.options.get();
    var lines = text.split("\n");
    var seenLines = {};
    var outputLines = [];
    var prevLine = null;

    for (var i = 0; i < lines.length; i++) {
      var line = lines[i];
      if (options["trim"]) {
        line = line.trim();
      }
      if (options["preserve-newlines"] && line.length == 0) {
        outputLines.push("");
        continue;
      }
      if (options["delete-newlines"] && line.length == 0) {
        continue;
      }
      if (options["all-duplicates"]) {
        // Remove all duplicate lines in entire text
        // Example input:
        // a
        // a
        // b
        // c
        // a
        //
        // Example output:
        // a
        // b
        // c

        if (seenLines[line] === undefined) {
          seenLines[line] = 1;
          outputLines.push(line);
        }
      } else if (options["repeated-duplicates"]) {
        // Remove only repeated duplicate lines.
        // Example input:
        // a
        // a
        // b
        // c
        // a
        //
        // Example output:
        // a
        // b
        // c
        // a

        if (prevLine === null) {
          // The first line of input
          outputLines.push(line);
        } else {
          if (prevLine != line) {
            outputLines.push(line);
          }
        }
      }
      prevLine = line;
    }

    if (options["sort"]) {
      return outputLines.sort().join("\n");
    } else {
      return outputLines.join("\n");
    }
  };

  return {
    converter: bridge,
    config: {},
  };
};
