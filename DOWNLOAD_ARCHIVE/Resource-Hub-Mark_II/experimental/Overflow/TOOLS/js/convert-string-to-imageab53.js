window.bridges["convert-string-to-image"] = function () {
  var canvas_preview = null;
  var canvas_data = null;
  var font_stylesheet = null;

  var bridge = function (string) {
    var tool = this;
    if (string.length == 0) return;

    // If not initialized yet
    if (!canvas_data) {
      // Find the canvases
      canvas_data = tool.output.element.querySelector("canvas.data");
      canvas_preview = tool.output.element.querySelector("canvas.preview");

      // Normalize preview canvas size
      canvas_preview.width = canvas_preview.clientWidth;
      canvas_preview.height = canvas_preview.clientHeight;

      // Custom font stylesheet
      font_stylesheet = document.createElement("style");
      font_stylesheet.addEventListener("load", function () {
        setTimeout(function () {
          tool.convert();
        }, 250);
      });
      document.head.appendChild(font_stylesheet);
    }

    if (canvas_preview.width != canvas_preview.clientWidth) {
      canvas_preview.width = canvas_preview.clientWidth;
      canvas_preview.height = canvas_preview.clientHeight;
    }

    var options = parseOptions(tool);

    if (!options) return;

    var result = wrapText({
      width: options.width,
      height: options.height,
      padding: options.padding,
      text: string,
      color: options.color,
      lineHeight: options.lineHeight,
      background: options.background,
      textShadow: options.textShadow,
      align: options.align,
      style: options.font,
    });

    // Draw the actual image in its full width and height
    canvas_data.width = result.width;
    canvas_data.height = result.height;

    if (result.width != 0 && result.height != 0) {
      canvas_data.getContext("2d").drawImage(result, 0, 0);
      tool.respond();
      // Fill preview with transparency effect and try to fit the image, then draw it
      var fit = best_image_fit(
        result.width,
        result.height,
        canvas_preview.width,
        canvas_preview.height
      );
      var ctx = canvas_preview.getContext("2d");
      fillTransparencyEffect(canvas_preview);
      ctx.drawImage(result, fit.offsetX, fit.offsetY, fit.width, fit.height);
    } else {
      var which = result.width == 0 ? "width" : "height";
      tool.output.showWarningBadge(
        "No image data",
        "Image {0} is zero.".format(which),
        -1
      );
    }

    tool.output.showStatus(canvas_data.width + "×" + canvas_data.height);
  };

  function wrapText(opts) {
    var canvas = document.createElement("canvas");
    var ctx = canvas.getContext("2d");
    var text = opts.text;
    var imagePadding = opts.padding;
    var doublePadding = imagePadding * 2;

    ctx.font = opts.style;
    var tempWidth = opts.width || ctx.measureText(text).width;

    // String "👍" -> Character Split  -> Array ["�", "�"]
    // String "👍" -> GraphemeSplitter -> Array ["👍"]
    var chars = new GraphemeSplitter().splitGraphemes(text);

    var parts = [];
    var start = 0;
    var end = 1;
    var maxWrapWidth = 0;

    // Iterate the split text by character
    // "Hello, world": H, He, Hel, Hell, Hello, Hello, <...>
    for (; end <= chars.length; end++) {
      var newline = false;

      // Get the cut part as a string
      var part = chars.slice(start, end).join("");

      if (part[part.length - 1] == "\n") {
        newline = true;
        part = part.slice(0, -1);
      }

      // Measure that part
      var partWidth = ctx.measureText(part).width;

      // If this part goes outside the width boundary
      // or it ends with a line break, put this part
      // in parts (for drawing wrapped text) and continue
      // from the last character
      if (partWidth > tempWidth || newline) {
        if (partWidth > maxWrapWidth) maxWrapWidth = partWidth;

        parts.push(part);
        start = end;
      }
    }

    // Take care of the last part if it wasn't iterated
    if (start != end - 1) {
      var part = chars.slice(start, end).join("");
      var partWidth = ctx.measureText(part).width;
      parts.push(part);

      if (partWidth > maxWrapWidth) maxWrapWidth = partWidth;
    }

    var fontSize = parseInt(ctx.font.match(/\d+px/)[0]);
    var lineHeight = opts.lineHeight || fontSize;
    var totalLines = parts.length;
    var totalTextHeight = totalLines * lineHeight;

    canvas.width = parseInt((opts.width || maxWrapWidth) + doublePadding);
    canvas.height = parseInt((opts.height || totalTextHeight) + doublePadding);
    var width = canvas.width;
    var height = canvas.height;

    ctx.font = opts.style;
    ctx.textBaseline = "hanging";
    ctx.fillStyle = opts.background;
    ctx.fillRect(0, 0, width, height);
    ctx.fillStyle = opts.color;

    ctx.shadowOffsetX = opts.textShadow.x;
    ctx.shadowOffsetY = opts.textShadow.y;
    ctx.shadowBlur = opts.textShadow.blur;
    ctx.shadowColor = opts.textShadow.color;

    var currentHeight = 0;
    var verticalAlign = opts.align.vertical;
    var horizontalAlign = opts.align.horizontal;
    var availableWidth = width - doublePadding;
    var availableHeight = height - doublePadding;

    for (var i = 0; i < parts.length; i++) {
      var part = parts[i].replace(/(^\n|\n$)/g, "");

      var lineWidth = ctx.measureText(part).width;

      if (horizontalAlign == "center") {
        var x = (availableWidth - lineWidth) / 2;
      } else if (horizontalAlign == "left") {
        var x = 0;
      } else if (horizontalAlign == "right") {
        var x = availableWidth - lineWidth;
      }

      if (verticalAlign == "top") {
        var y = currentHeight;
      } else if (verticalAlign == "middle") {
        var y = currentHeight + (availableHeight - totalTextHeight) / 2;
      } else if (verticalAlign == "bottom") {
        var y = currentHeight + (availableHeight - totalTextHeight);
      }

      ctx.fillText(
        part,
        imagePadding + parseInt(x),
        imagePadding + parseInt(y)
      );

      currentHeight += lineHeight;
    }

    return canvas;
  }

  function importFontFromURL(url) {
    var css =
      "@font-face {" +
      "font-family: 'Custom';" +
      "src: url(" +
      url +
      ");" +
      "}";
    if (font_stylesheet.innerHTML != css) font_stylesheet.innerHTML = css;
  }

  function fillTransparencyEffect(canvas) {
    var ctx = canvas.getContext("2d");
    var w = canvas.width;
    var h = canvas.height;
    var size = 15;
    var odd = true;
    for (var i = 0; i <= w; i += size) {
      for (var j = 0; j <= h; j += size) {
        if (odd) ctx.fillStyle = "#ffffff";
        else ctx.fillStyle = "#efefef";

        odd = !odd;
        ctx.fillRect(i, j, i + size, j + size);
      }
    }
  }

  function parseShadow(shadowStr) {
    if (shadowStr == "") return true;
    var shadowRx = /(-?\d+|-?\.\d+|-?\d+\.\d+)(em|ex|px|cm|mm|in|pt|pc)\s+(-?\d+|-?\.\d+|-?\d+\.\d+)(em|ex|px|cm|mm|in|pt|pc)\s+(-?\d+|-?\.\d+|-?\d+\.\d+)(em|ex|px|cm|mm|in|pt|pc)\s+(.+)/;
    var toPx = {
      px: 1,
      em: 16,
      ex: 7.15625,
      cm: 37.795275591,
      mm: 3.7795275591,
      in: 96,
      pt: 1.33333,
      pc: 16,
    };

    var shadowMatch = shadowStr.match(shadowRx);

    if (!shadowMatch) {
      return false;
    } else {
      var x = shadowMatch[1];
      var xUnit = shadowMatch[2];
      var xPx = x * toPx[xUnit];

      var y = shadowMatch[3];
      var yUnit = shadowMatch[4];
      var yPx = y * toPx[yUnit];

      var blur = shadowMatch[5];
      var blurUnit = shadowMatch[6];
      var blurPx = blur * toPx[blurUnit];

      var color = shadowMatch[7];
    }
    return {
      x: xPx,
      y: yPx,
      blur: blurPx,
      color: color,
    };
  }

  function parseOptions(tool) {
    var options = tool.options.get();
    var width = parseInt(options.width || 0);
    var height = parseInt(options.height || 0);
    var lineHeight = parseInt(options["line-height"] || 0);
    var size = parseInt(options["font-size"] || 48);
    var padding = parseInt(options["padding"] || 0);
    var error = function (a, b) {
      tool.input.showNegativeBadge(a, b);
    };

    function stripString(str) {
      return str.replace(/^\s+/, "").replace(/\s+$/, "");
    }
    var textShadow = parseShadow(stripString(options["text-shadow"]));

    if (!textShadow) {
      error("Unknown shadow format.", "Use x-offset, y-offset, blur, color.");
      return false;
    }

    var preview = tool.output.element.querySelector("canvas.preview");

    if (isNaN(width)) {
      error("Can't convert to image.", "Width is not a number.");
      return false;
    }
    if (width < 0) {
      error("Can't convert to image.", "Width must be a positive number.");
      return false;
    }

    if (isNaN(height)) {
      error("Can't convert to image.", "Height is not a number.");
      return false;
    }
    if (height < 0) {
      error("Can't convert to image.", "Height must be a positive number.");
      return false;
    }

    if (isNaN(lineHeight)) {
      error("Can't convert to image.", "Line height is not a number.");
      return false;
    }
    if (lineHeight < 0) {
      error(
        "Can't convert to image.",
        "Line height must be a positive number."
      );
      return false;
    }

    if (isNaN(size)) {
      error("Can't convert to image.", "Font size is not a number.");
      return false;
    }
    if (size < 0) {
      error("Can't convert to image.", "Font size must be a positive number.");
      return false;
    }

    if (isNaN(padding)) {
      error("Can't convert to image.", "Padding is not a number.");
      return false;
    }
    if (padding < 0) {
      error("Can't convert to image.", "Padding can't be negative.");
      return false;
    }

    var font = [];
    if (options.bold) font.push("bold");
    if (options.italic) font.push("italic");
    font.push(size + "px");

    if (options.typeface == "Custom" && options["typeface-url"]) {
      importFontFromURL(options["typeface-url"]);
    }

    font.push(options.typeface);

    var verticalAlign;
    var horizontalAlign;
    if (options["align-vertical"] == "top") verticalAlign = "top";
    if (options["align-vertical"] == "middle") verticalAlign = "middle";
    if (options["align-vertical"] == "bottom") verticalAlign = "bottom";

    if (options["align-horizontal"] == "left") horizontalAlign = "left";
    if (options["align-horizontal"] == "center") horizontalAlign = "center";
    if (options["align-horizontal"] == "right") horizontalAlign = "right";

    return {
      width: width,
      height: height,
      lineHeight: lineHeight,
      padding: padding,
      textShadow: textShadow,
      color: isColorValid(options["text-color"])
        ? options["text-color"]
        : "black",
      background: isColorValid(options["background-color"])
        ? options["background-color"]
        : "transparent",
      align: {
        horizontal: horizontalAlign,
        vertical: verticalAlign,
      },
      font: font.join(" "),
    };
  }

  return {
    converter: bridge,
    config: {
      type: "image",
      output: {
        download: function () {
          return this.options.get()["format"];
        },
        noClipboard: true,
      },
    },
  };
};
