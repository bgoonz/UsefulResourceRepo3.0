"use strict";

window.bridges = {};
window.primaryTool = null;

window.addEventListener("load", function(){
    makeAutosizeTextareas();
    makeColorpickers();
    makeWrappingExamples();
    makePrimaryTool();
    chainPrimaryTool();
});

function getChainData(tool) {
    var getEncoded = function (tool) {
        var overridden = {};
        var overriddenData = tool.sides.getAttribute("data-override-options");
        if (overriddenData) {
            overridden = JSON.parse(overriddenData);
        }
        var query = [];

        var options = tool.options.get();
        var keys = Object.keys(options);
        if (keys.length) {
            for (var i = 0; i < keys.length; i++) {
                var key = keys[i];
                if (overridden[key] === undefined) {
                    var value = options[key];
                    query.push(encodeURIComponent(key) + "=" + encodeURIComponent(value));
                }
            }
        }

        return query;
    }

    var getURL = function (tool) {
        var base  = tool.sides.getAttribute("data-tool-url") || "";
        var query = getEncoded(tool);

        if (query.length == 0) {
            return base;
        }

        return base + encodeURIComponent("?" + query.join("&"));
    }

    var data = [];
    var current = tool;

    while (current.chainChild) {
        current = current.chainChild;
        data.push(getURL(current));
    }

    return data;
}

function chainPrimaryTool() {
    var chainData = getURLQuery("chain");
    if (chainData) {
        chainToolWithArray(primaryTool, chainData.split(","), function(lastTool) {})
    }
}

function removeChainedTools(tool) {
    var container = document.querySelector(".all-tools-container");
    var widget = tool.sides.querySelector(".side.output .side-widgets .widget-chain");

    var last = container.querySelector(".tool-chained:last-child");
    while (last && last.tool != tool) {
        last.tool.chainParent.removeChain();
        last.tool.destroy();
        last = container.querySelector(".tool-chained:last-child");
    }

    widget.classList.remove("is-disabled");
    widget.textContent = "Chain with...";
    tool.sides.classList.remove("is-chained");

    zenscroll.intoView(tool.sides, 400);
}

function chainToolWithArray(tool, data, callback) {
    var tools   = document.querySelectorAll(".all-tools-container .tool");
    var current = tool;
    var info    = null;

    for (var i = 0, t = 0; i < data.length; i++, t++) {
        info = data[i];
        var parts = info.split(encodeURIComponent("?"));
        var url   = parts[0];
        var decodedOptions = {};
        var encodedOptions = parts[1];

        if (encodedOptions) {
            encodedOptions = decodeURIComponent(encodedOptions).split("&");

            for (var j = 0; j < encodedOptions.length; j++) {
                var pair = encodedOptions[j].split("=");
                var k = decodeURIComponent(pair[0]);
                var v = decodeURIComponent(pair[1] || "");

                // "true", "yes" -> true;
                // "false", "no" -> false;
                if (v == "true" || v == "yes" || v == "false" || v == "no") v = (v == "true" || v == "yes");

                if (k) decodedOptions[k] = v;
            }
        }

        var element = tools[t + 1];
        // Less elements than URLs.
        // Probable cause: Tool with last URL could not be found.
        if (!element) {
            current.output.showNegativeBadge("No tool with URL \"{0}\" was found".format(url), "Last URL in your query might be invalid.");
            zenscroll.intoView(current.sides, 400);
            break;
        }

        // Current URL in query does not correspond to the URL
        // in the current element. Note: Does not support aliases yet.
        // Probable cause: Tool with nth URL could not be found.
        if (url != element.getAttribute("data-tool-url")) {
            if (data[i + 1]) {
                var next = "\"" + data[i + 1].split(encodeURIComponent("?"))[0] + "\"";
            }
            else {
                var next = "next tool";
            }

            current.output.showNegativeBadge("No tool with URL \"{0}\" was found".format(url), "Chaining with {0} instead.".format(next));
            t--;
            continue;
        }

        var bridge  = element.getAttribute("data-tool-bridge") || element.getAttribute("data-tool-url");
        var another = createTool(bridge, {
            sides: element,
            examples: null,
            chained: true
        });

        // Could not create a tool with bridge from element.
        // Probable cause: Bridge wasn't loaded.
        if (!another) {
            current.output.showNegativeBadge("Can't chain with \"{0}\"".format(url), "Bridge \"{0}\" is not available.".format(bridge));
            zenscroll.intoView(current.sides, 400);
            break;
        }

        if (encodedOptions) {
            another.options.set(decodedOptions);
        }

        current.attachChain(another);
        current.output.showStatus("chained!");
        current.sides.classList.add("is-chained");
        zenscroll.intoView(another.sides, 400);

        makeAutosizeTextareas();
        makeColorpickers();

        current = another;
    }

    callback(current);
}

function chainToolWith(tool, url, callback) {
    var sides = tool.sides;
    var side  = tool.output;
    var widget = tool.sides.querySelector(".side.output .side-widgets .widget-chain");
    var container = document.querySelector(".all-tools-container");

    widget.classList.remove("is-disabled");
    sides.classList.remove("is-chained");
    widget.classList.add("is-disabled");
    widget.textContent = "Chaining...";

    side.showStatus("chaining...");
    side.hideBadge();

    Site.GET("chain.json?tool=" + url , function(state) {
        var response = state.responseText;
        if (state.readyState == 4 && state.status == 200) {
            try {
                var data = JSON.parse(response);
                side.showStatus("loading libraries...");

                // Load dependencies
                var deps = {
                    js: data.js,
                    css: data.css
                }

                // When dependencies are loaded
                Site.resources.importFrom(deps, function() {
                    var template = document.createElement("div");
                    template.innerHTML = data.html;
                    var element = template.firstChild;

                    container.insertBefore(element, tool.sides.nextSibling);

                    var another = createTool(data.call, {
                        sides: element,
                        examples: null,
                        chained: true
                    })

                    tool.attachChain(another);
                    side.showStatus("chained!");
                    widget.textContent = "Chained!";

                    sides.classList.add("is-chained");
                    side.hideBadge();
                    zenscroll.intoView(another.sides, 400);

                    makeAutosizeTextareas();
                    makeColorpickers();

                    (typeof callback === "function") && callback(another);
                })
            }
            catch (e) {
                console.log(e);
                // Unparsable data
                side.showNegativeBadge("Server error", "Something has gone wrong while chaining the tool.", -1);
                widget.classList.remove("is-disabled");
                widget.textContent = "Retry chain?";
            }
        }
        else if (state.readyState == 4) {
            // HTTP not 200
            side.showNegativeBadge("Server error", "We can't chain this tool due to a server error.", -1);
            widget.classList.remove("is-disabled");
            widget.textContent = "Retry chain?";
        }
    });
}

function makePrimaryTool() {
    var first   = document.querySelector(".all-tools-container .tool-primary");
    var name    = first.getAttribute("data-tool-bridge") || first.getAttribute("data-tool-url");

    primaryTool = createTool(name, {
        sides: first,
        examples: document.querySelector(".examples-primary"),
        chained: false
    });
}

function createTool(name, extra) {
    var bridge = window.bridges[name] !== undefined ? window.bridges[name]() : false;
    var tool   = null;

    if (!bridge) {
        window.raise("Fatal error: Bridge \"{0}\" is not available.".format(name));
        return tool;
    }

    var opts = bridge.config;
    var simple = Object.keys(opts).length == 0;

    if (simple) {
        tool = new TextTool(bridge.converter, null, extra);
    }
    else if (opts.type == "text") {
        tool = new TextTool(bridge.converter, opts, extra);
    }
    else if (opts.type == "image") {
        tool = new ImageTool(bridge.converter, opts, extra);
    }
    else if (opts.type == "file") {
        tool = new FileTool(bridge.converter, opts, extra);
    }

    if (!simple) {
        var overrides = opts.override;
        for (var path in overrides) {
            tool.override(path).with(overrides[path]);
        }
    }

    return tool.start();
}

/*
    Text Tool is a generic Tool.
*/
function TextTool (bridge, config, extra) {
    var tool = new Tool({
        converter: bridge,
        sides: extra.sides,
        examples: extra.examples,
        chained: extra.chained
    });
    return tool;
}

/*
    File Tool is a Text Tool designed to work
    with binary values and file examples.
    Accepts both Blobs and text
*/
function FileTool (bridge, config, extra) {
    var tool = new Tool({
        converter: bridge,
        sides: extra.sides,
        examples: extra.examples,
        chained: extra.chained
    });

    function downloadBlob (src, callback) {
        if (src.indexOf("http:") !== 0 && src.indexOf("https:") !== 0 && src.indexOf("ftp:") !== 0) {
            if (src.indexOf("/") !== 0) {
                src = "http://" + src;
            }
        }

        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            // OK!
            if (this.readyState == 4 && this.status == 200) {
                callback(this.response);
            }

            // CORS Error, forward to backend
            else if (this.readyState == 4 && this.status == 0) {
                downloadBlob("/get-external-file?url=" + encodeURIComponent(src), callback);
            }
        };

        xhttp.open("GET", src, true);
        xhttp.responseType = "blob";
        xhttp.send();
    }

    var inputContainer = null;
    var inputTextarea  = null;

    function setToolMode (mode) {
        inputContainer.dataset.multitypeMode = mode;
        tool.input.currentMode = mode;
        updateFileInfo();
    }

    function allowsText () {
        return inputContainer.dataset.multitypeAllowText == "true";
    }

    function getToolMode () {
        return inputContainer.dataset.multitypeMode;
    }

    function updateFileInfo() {
        console.log("Updating file info...");
    }

    function setInputValue (value) {
        if (value instanceof Blob) {
            this.input.blob = value;
            setToolMode("file");
        }

        else {
            inputTextarea.value = value;
            setToolMode("text");
        }
    }

    function getInputValue () {
        var toolMode = getToolMode();

        if (toolMode == "text") {
            return inputTextarea.value;
        }
        else if (toolMode == "file") {
            return this.input.blob;
        }
    }

    function importFromFile (e) {
        var tool = this;
        tool.input.showStatus("importing...");

        var blob = e.target.files[0];
        if (blob) {
            tool.input.setValue(blob);
            tool.input.showStatus("imported");
            tool.convert(Trigger.IMPORT); // convert
        }
        else {
            tool.input.showWarningBadge("Can't import", "No file was selected.", -1);
        }
    }

    function downloadInput() {
        var tool  = this;
        var value = tool.input.getValue();

        if (!value) {
            tool.input.showStatus("nothing to save");
            return;
        }

        // If current value is a blob, tool is in File Mode:
        // Todo: resolve blob.type and map to common file extensions
        if (value instanceof Blob) {
            saveAs(value, "input-" + tool.siteName + ".bin");
        }

        // If current value is not a blob, it's text: turn it into blob to download it
        else {
            var textBlob = new Blob([value], {type: "text/plain;charset=utf-8"});
            saveAs(textBlob, "input-" + tool.siteName + ".txt");
        }
    }

    function inputToClipboard() {
        var tool = this;
        var toolMode = getToolMode();

        if (toolMode == "text") {
            inputTextarea.select();
            var copied = false;

            try {
                copied = document.execCommand("copy");
            }
            catch (ignored) {}

            if (copied) {
                tool.input.showStatus("copied");
            }
            else {
                tool.input.showStatus("can't copy");
            }
        }

        else {
            tool.input.showStatus("can't copy files (yet)");
        }
    }

    function setExample(example) {
        var tool = this;

        var sample = example.querySelector(".input-sample");

        if (zenscroll) {
            zenscroll.intoView(tool.sides, 400);
        }
        else window.scrollTo(0, tool.sides);

        // Text-based example
        if (sample.classList.contains("text-sample")) {

            if (allowsText()) {
                var text = sample.querySelector("span").textContent;

                tool.input.setValue(text);
                tool.options.set(tool.options.get(example));
                tool.convert(Trigger.EXAMPLE); // convert
            }
            else {
                tool.input.showWarningBadge("Unsupported example", "This example uses text input, which is not supported by this tool.");
            }
        }

        else {
            var src = sample.getAttribute("data-src");
            tool.options.set(tool.options.get(example));
            tool.input.showStatus("loading example...");

            downloadBlob(src, function(blob) {
                tool.input.setValue(blob);
                tool.input.showStatus("imported");
                tool.convert(Trigger.EXAMPLE); // convert
            });
        }
    }

    function restoreInput(opts) {
        var tool = this;

        var inputURL = opts.queryURL;
        var inputText = opts.queryInput || opts.savedInput;
        var callback = opts.then;

        var getURLDomain = function(url) {
            var a = document.createElement("a");
            a.href = url;
            var domain = a.hostname.split(".");

            var tld = domain[domain.length - 1];
            var site = domain[domain.length - 2];

            if (!site || !tld) {
                return "url";
            }

            return site + "." + tld;
        };

        if (inputURL) {
            var domain = getURLDomain(inputURL);
            tool.input.showStatus("loading from {0}...".format(domain));

            downloadBlob(inputURL, function(blob) {
                tool.input.setValue(blob);
                tool.input.showStatus("loaded from {0}".format(domain));
                tool.convert(Trigger.IMPORT); // convert
                callback(true);
            });
        }
        else if (allowsText() && inputText) {
            tool.input.showStatus("loading from input...");
            tool.input.setValue(inputText);

            tool.input.showStatus("loaded from input");
            tool.convert(Trigger.RESTORE); // convert
            callback(true);
        }

        callback();
    }

    if (config.input) {
        inputContainer = tool.input.element.querySelector(".data-wrapper");
        inputTextarea  = inputContainer.querySelector(".mode-text .data");

        tool.input.currentMode = "file";
        tool.input.blob = null;

        tool.input.setValue = setInputValue.bind(tool);
        tool.input.getValue = getInputValue.bind(tool);
        tool.input.importFromFile = importFromFile.bind(tool);
        tool.input.download = downloadInput.bind(tool);
        tool.input.toClipboard = inputToClipboard.bind(tool);
        tool.setExample = setExample.bind(tool);
        tool.restore.input = restoreInput.bind(tool);
    }

    return tool;
}

/*
    Image Tool works with images, image-based
    examples and interactable converters.
*/
function ImageTool (bridge, config, extra) {
    var tool = new Tool({
        converter: bridge,
        sides: extra.sides,
        examples: extra.examples,
        chained: extra.chained
    });

    function imageToBlob (src, callback) {
        if (src.indexOf("data:") === 0) {
            var data = src.slice(5).split(";");
            var binary = window.atob(data[1].split(",")[1]);
            var array = [];
            for (var i = 0; i < binary.length; i++) array.push(binary.charCodeAt(i));
            callback(new Blob([new Uint8Array(array)], {type: data[0]}));
        }
        else {
            if (src.indexOf("http:") !== 0 && src.indexOf("https:") !== 0 && src.indexOf("ftp:") !== 0) {
                if (src.indexOf("/") !== 0) {
                    src = "http://" + src;
                }
            }
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {

                // OK!
                if (this.readyState == 4 && this.status == 200) {
                    callback(this.response);
                }

                // CORS Error, forward to backend
                else if (this.readyState == 4 && this.status == 0) {
                    imageToBlob("/get-external-file?url=" + encodeURIComponent(src), callback);
                }
            }
            xhttp.open("GET", src, true);
            xhttp.responseType = "blob";
            xhttp.send();
        }
    }

    function resetFileInput (tool) {
        var input = tool.input.element.querySelector(".widget-load input[type=file]");
        input.value = "";
        input.type  = "";
        input.type  = "file";
    }

    /*
      For still images that can be blob-ified by canvas:
         tool.respond()
      For gifs, webps, etc:
         tool.respond(blob)

      Call when the operation is complete!
    */
    function asyncRespond (blob) {
        var tool = this;

        if (blob === undefined) {
            var canvas = tool.output.element.querySelector(".data");
            canvas.toBlob(function(blob) {
                tool.dispatchEvent("response", blob);
            });
            return;
        }

        tool.dispatchEvent("response", blob);
    }

    function getInputValue() {
        return this.input.blob;
    }

    function getOutputValue() {
        return this.output.blob;
    }

    function setOutputValue (blob) {
        this.output.blob = blob;
    }

    function setInputValue (value, callback) {
        var tool = this;

        if (!value) {
            callback && callback();
            return;
        }

        if (value instanceof Blob) {
            try {
                tool.input.blob = value;

                var image = document.createElement("img");
                image.onload = function() {
                    var data = tool.input.element.querySelector("canvas.data");
                    var box  = tool.input.element.querySelector(".side-box");
                        box.classList.remove("empty");

                    data.width  = image.naturalWidth;
                    data.height = image.naturalHeight;

                    markCanvasesReady(tool);

                    data.getContext("2d").drawImage(image, 0, 0);

                    URL.revokeObjectURL(image.src);

                    resetFileInput(tool);

                    callback && callback();
                }

                image.src = URL.createObjectURL(value);
            }
            catch (ignored) {}
        }

        else if (typeof value === "string") {
            imageToBlob(value, function(blob) {
                setInputValue.call(tool, blob, callback);
            })
        }
    }

    function processFile (blob, trigger) {
        if (!trigger) trigger = Trigger.IMPORT;
        var tool = this;

        tool.input.setValue(blob, function() {
            tool.input.showStatus("imported");
            element.classList.remove("importing");
            tool.convert(trigger);
        });

    }

    function markCanvasesReady (tool) {
        var elements = [
            tool.input.element.querySelector("canvas.data"),
            tool.output.element ? tool.output.element.querySelector("canvas.data") : null,
            tool.input.element.querySelector("canvas.preview"),
            tool.output.element ? tool.output.element.querySelector("canvas.preview") : null
        ];
        for (var i = 0; i < elements.length; i++) {
            if (elements[i]) {
                elements[i].classList.add("not-empty");
                elements[i].style.transform = "";
                elements[i].removeAttribute("data-scroll-x");
                elements[i].removeAttribute("data-scroll-y");
            }
        }
    }

    function imageExample (example) {
        var tool = this;
        var sample = example.querySelector(".input-sample");
        var src    = sample.getAttribute("data-src");

        if (zenscroll) {
            zenscroll.intoView(tool.sides, 400);
        }
        else window.scrollTo(0, tool.sides);

        tool.options.set(tool.options.get(example));
        tool.input.showStatus("loading example...");

        imageToBlob(src, function(blob) {
            processFile.call(tool, blob, Trigger.EXAMPLE);
        });
    }

    function downloadCanvas (side, format) {
        var tool = this;
        var mimes = {
            "png": "image/png",
            "jpg": "image/jpeg",
            "bmp": "image/jpeg", //todo
            "gif": "image/gif"
        }

        if (tool[side].element) {
            if (typeof format == "function") {
                format = format.call(tool);
            }

            // If the side to download is input, download uploaded blob.
            if (side == "input") {
                var blob = tool.input.blob;
                if (blob) saveAs(blob, side + "-" + tool.siteName + "." + format);
                else tool.input.showStatus("nothing to save");
            }

            // OVERRIDE THE DOWNLOADER FOR NON-STILL IMAGES
            // If the side to download is output, extract the image from data canvas.
            // Only works if there is a .data canvas and for still images.
            else {
                var canvas = tool[side].element.querySelector(".data");
                canvas.toBlob(function(blob) {
                    saveAs(blob, side + "-" + tool.siteName + "." + format);
                }, mimes[format]);
            }
        }
    }

    function disabledClipboard (side) {
        var tool = this;
        tool[side].showStatus("can't copy images (yet)");
        return;
    }

    function imageDragLeaveHandler (e) {
        var tool = this;
        e.preventDefault();
        var element = tool.input.element.querySelector(".side-box");
        element.classList.remove("dragging");
        tool.input.showStatus("");
    }

    function imageDragOverHandler (e) {
        var tool = this;
        e.preventDefault();
        tool.input.showStatus("drop file to import!");
        var element = tool.input.element.querySelector(".side-box");
        if (!element.classList.contains("dragging"))
            element.classList.add("dragging");
        return false;
    }

    function imageDragEndHandler (e) {
        var tool = this;
        var element = tool.input.element.querySelector(".side-box");
        element.classList.remove("dragging");
        var data = e.dataTransfer;
        if (data.items) {
            for (var i = 0; i < data.items.length; i++) {
                data.items.remove(i);
            }
        }
        else e.dataTransfer.clearData();
    }

    function imageDropHandler (allowedType, e) {
        e.preventDefault();
        var tool = this;
        var element = tool.input.element.querySelector(".side-box");
        element.classList.remove("dragging");
        element.classList.add("importing");
        tool.input.showStatus("importing...");
        var files = e.dataTransfer.files;
        var any   = (allowedType == "*");
        for (var i = 0; i < files.length; i++) {
            var blob = files[i];
            if (any || blob.type.indexOf(allowedType) !== -1) {
                processFile.call(tool, blob, Trigger.IMPORT);
            }
            else {
                var format = blob.type ? ("\"" + blob.type + "\"") : "This";
                tool.input.showWarningBadge("Can't import", format + " format is not allowed.", -1);
            }
        }
        element.classList.remove("importing");
        element.classList.remove("dragging");
        return false;
    }

    function imagePasteListener (allowedType, e) {
        var tool = this;
        tool.input.showStatus("importing...");
        var items = (e.clipboardData || e.originalEvent.clipboardData).items;
        var any   = (allowedType == "*");
        for (var index in items) {
            var item = items[index];
            if (item.kind === 'file') {
                var blob = item.getAsFile();
                if (any || blob.type.indexOf(allowedType) !== -1) {
                    processFile.call(tool, blob, Trigger.IMPORT);
                }
                else {
                    var format = blob.type ? ("\"" + blob.type + "\"") : "This";
                    tool.input.showWarningBadge("Can't import", format + " format is not allowed.", -1);
                }
            }
        }
    }

    function restoreInput(opts) {
        var callback = opts.then;
        if (opts.hasInput) {
            var getURLDomain = function(url) {
                var a = document.createElement("a");
                a.href = url;
                var domain = a.hostname.split(".");

                var tld = domain[domain.length - 1];
                var site = domain[domain.length - 2];

                if (!site || !tld) {
                    return "url";
                }

                return site + "." + tld;
            }

            var value = opts.queryURL || opts.queryInput || opts.savedInput;

            opts.showStatus("loading from url...");
            tool.input.setValue(value, callback);
        }
        else {
            callback();
        }
    }

    function importAsBase64 (e) {
        var tool = this;
        tool.input.showStatus("importing...");
        var blob = e.target.files[0];
        if (blob) {
            processFile.call(tool, blob, Trigger.IMPORT);
        }
        else {
            tool.input.showWarningBadge("Can't import", "No file was selected.", -1);
        }
    }

    if (config.input) {
        // Imports as base64
        if (config.input.import == "base64") {
            tool.input.importFromFile = importAsBase64.bind(tool);
        }

        if (config.parseImage === false) {
            tool.parseImage = false;
        }
        else {
            tool.parseImage = true;
        }

        // Custom example setter
        if (config.input.image == true) {
            tool.setExample = imageExample.bind(tool);
            document.addEventListener("paste", imagePasteListener.bind(tool, "image/"));

            var element = tool.input.element.querySelector(".side-box");
            element.addEventListener("dragover", imageDragOverHandler.bind(tool), false);
            element.addEventListener("dragend", imageDragEndHandler.bind(tool), false);
            element.addEventListener("dragleave", imageDragLeaveHandler.bind(tool), false);
            element.addEventListener("drop", imageDropHandler.bind(tool, "image/"), false);
            element.querySelector(".preview").addEventListener("click", function() {
                var empty = tool.input.element.querySelector(".side-box").classList.contains("empty");
                if (empty)  tool.input.element.querySelector(".widget-load").click();
            });

            tool.input.setValue = setInputValue.bind(tool);
            tool.input.getValue = getInputValue.bind(tool);
            tool.restore.input  = restoreInput.bind(tool);
        }

        // Custom downloader for graphical inputs
        if (config.input.download) {
            tool.input.download = downloadCanvas.bind(tool, "input", config.input.download);
        }

        // Disables "Copy to Clipboard"
        if (config.input.noClipboard) {
            tool.input.toClipboard = disabledClipboard.bind(tool, "input");
        }
    }

    if (config.output) {
        // Custom downloader for graphical outputs
        if (config.output.download) {
            tool.output.download = downloadCanvas.bind(tool, "output", config.output.download);
        }

        // Disables "Copy to Clipboard"
        if (config.output.noClipboard) {
            tool.output.toClipboard = disabledClipboard.bind(tool, "output");
        }

        tool.output.setValue = setOutputValue.bind(tool);
        tool.output.getValue = getOutputValue.bind(tool);
        tool.respond = asyncRespond.bind(tool);
    }

    return tool;
}

function Tool(config) {
    var tool = this;

    tool.sides = config.sides;

    // Manages Tool's input area.
    tool.input = {
        // Returns the value of an input area.
        getValue: function() {
            if (!tool.input.element) return "";
            var e = tool.input.element.querySelector("textarea.data");
            return e ? e.value : "";
        },

        // Sets the value of an input area, saves and returns it.
        setValue: function(value) {
            if (!tool.input.element) return "";
            var e = tool.input.element.querySelector("textarea.data");

            if (e) {
                e.value = value;
                tool.save();
                return e.value;
            }
        },

        // Shows a fading grey status label.
        showStatus: function(text) {
            var side = tool.input.element;
            return tool.showStatus(side, text);
        },

        showPositiveBadge: function(title, message) {
            var side = tool.input.element;
            return tool.showBadge(side, "positive", title, message);
        },

        showNegativeBadge: function(title, message) {
            var side = tool.input.element;
            return tool.showBadge(side, "negative", title, message);
        },

        showWarningBadge: function(title, message) {
            var side = tool.input.element;
            return tool.showBadge(side, "warning", title, message);
        },

        hideBadge: function() {
            var side = tool.input.element;
            return tool.hideAllBadges(side);
        },

        // Handles importing data from file,
        // attached to the hidden <input type="file">
        importFromFile: function(e) {
            tool.input.showStatus("importing...");
            var file = e.target.files[0];
            if (file) {
                var reader = new FileReader();
                reader.onload = function(f) {
                    var text = reader.result;
                    tool.input.setValue(text);
                    tool.convert(Trigger.IMPORT);
                    tool.input.showPositiveBadge("Import successful!", file.name + " (" + sizeToString(file.size) + ") imported as plain text.", -1);
                };
                reader.readAsText(file);
            }
            else {
                tool.input.showWarningBadge("Can't import", "No file was selected.", -1);
            }
        },

        // Downloads the contents of an input area.
        download: function() {
            // Downloads data provided by tool.input.getValue as plain text
            // For a custom implementation, redefine this function.

            var blob = new Blob([tool.input.getValue()], {type: "text/plain;charset=utf-8"});
            saveAs(blob, "input-" + tool.siteName + ".txt");
        },

        // Copies the input value to clipboard if possible.
        toClipboard: function() {
            return tool.toClipboard(tool.input);
        },

        showWidgetToggle: function(name) {
            tool.dispatchEvent("widgetshow", {
                side:  "input",
                name:  name,
                cause: "function"
            });
        },

        hideWidgetToggle: function() {
            tool.dispatchEvent("widgethide", {
                side:  "input",
                cause: "function"
            });
        },

        element: null
    };

    // Manages the Tool's output area.
    tool.output = {
        // Gets the output value.
        getValue: function() {
            if (!tool.output.element) return "";
            var e = tool.output.element.querySelector("textarea.data");
            return e ? e.value : "";
        },

        // Sets the output value but does not saves anything.
        setValue: function(value) {
            if (!tool.output.element) return "";
            var e = tool.output.element.querySelector("textarea.data");
            return e ? e.value = value : "";
        },

        // Disables the output area and shows an error message.
        showError: function(error) {
            tool.output.hideError();
            tool.output.hideBadge();

            tool.output.element.classList.add("error");

            tool.output.showNegativeBadge("Can't convert.", "An error has occurred.");
            tool.output.showStatus("error");
            tool.output.setValue("Error: {0}".format(error || "(not specified)"));
        },

        // Enables the output area back.
        hideError: function() {
            tool.output.hideBadge();
            //tool.output.hideWidgetToggle();
            tool.output.element.classList.remove("error");
        },

        showPositiveBadge: function(title, message) {
            var side = tool.output.element;
            tool.showBadge(side, "positive", title, message);
        },

        showNegativeBadge: function(title, message) {
            var side = tool.output.element;
            tool.showBadge(side, "negative", title, message);
        },

        showWarningBadge: function(title, message) {
            var side = tool.output.element;
            tool.showBadge(side, "warning", title, message);
        },

        hideBadge: function() {
            var side = tool.output.element;
            tool.hideAllBadges(side);
        },

        // Downloads the contents of an output area.
        download: function() {
            // Downloads data provided by tool.output.getValue as plain text
            // For a custom implementation, redefine this function.

            var blob = new Blob([tool.output.getValue()], {type: "text/plain;charset=utf-8"});
            saveAs(blob, "output-" + tool.siteName + ".txt");
        },

        // Copies the contents of an output area to clipboard if possible.
        toClipboard: function() {
            return tool.toClipboard(tool.output);
        },

        // Displays a fading grey status label.
        showStatus: function(text) {
            var side = tool.output.element;
            return tool.showStatus(side, text);
        },

        showWidgetToggle: function(name) {
            tool.dispatchEvent("widgetshow", {
                side:  "output",
                name:  name,
                cause: "function"
            });
        },

        hideWidgetToggle: function() {
            tool.dispatchEvent("widgethide", {
                side:  "output",
                cause: "function"
            });
        },

        element: null
    };

    // Save
    tool.save = function() {
        if (!tool.isPrimary) {
            return;
        }

        if (typeof(Storage) === "undefined") {
            tool.warn("error:save", "local storage not supported");
            return false;
        }

        var input   = (tool.input.element ? tool.input.element.querySelector(".data") : false);
        var options = tool.options.element;
        var storage = window.localStorage || null;

        if (storage) storage.setItem("autosave_origin", window.location.pathname);

        if (input && input.getAttribute("data-autosave") !== null) {
            var old = storage.autosave_input;
            var cur = tool.input.getValue();

            if (old !== cur) {
                if (storage) storage.setItem("autosave_input", cur);
                tool.input.showStatus("saved");
            }
        }

        if (options && options.getAttribute("data-autosave") !== null) {
            var old = storage.autosave_options || {};
            var cur = JSON.stringify(tool.options.get());

            if (!isEquivalent(old, cur)) {
                if (storage) storage.setItem("autosave_options", cur);
            }
        }
    };

    // Restore
    tool.restore = {
        input: function(opts) {
            var callback = opts.then;
            if (opts.hasInput) {
                var getURLDomain = function(url) {
                    var a = document.createElement("a");
                    a.href = url;
                    var domain = a.hostname.split(".");

                    var tld = domain[domain.length - 1];
                    var site = domain[domain.length - 2];

                    if (!site || !tld) {
                        return "url";
                    }

                    return site + "." + tld;
                }

                var setInput = function(value) {
                    var setter = tool.input.setValue;
                    if (setter.length == 2) {
                        setter(value, callback.bind(null, true));
                    }
                    else if (setter.length == 1) {
                        setter(value);
                        callback(true);
                    }
                }

                var getExternalText = function(url, callback) {
                    if (url.indexOf("http:") !== 0 && url.indexOf("https:") !== 0 && url.indexOf("ftp:") !== 0) {
                        if (url.indexOf("/") !== 0) {
                            url = "http://" + url;
                        }
                    }
                    var xhttp = new XMLHttpRequest();
                    xhttp.onreadystatechange = function() {
                        if (this.readyState == 4 && this.status == 200) {
                            callback(this.responseText);
                        }
                        else if (this.readyState == 4 && this.status == 0) {
                            getExternalText("/get-external-file?url=" + encodeURIComponent(url), callback);
                        }
                    }
                    xhttp.open("GET", url, true);
                    xhttp.responseType = "text";
                    xhttp.send();
                }

                if (opts.queryURL) {
                    opts.showStatus("loading from {0}...".format(getURLDomain(opts.queryURL)));
                    getExternalText(opts.queryURL, setInput);
                }
                else {
                    opts.showStatus("loading from input...");
                    setInput(opts.queryInput || opts.savedInput);
                }
            }
            else {
                callback();
            }
        },

        options: function(opts) {
            var callback = opts.then;
            if (opts.hasOptions) {

                // If any options were saved, load them first.
                if (opts.savedOptions) tool.options.set(opts.savedOptions);

                // Check what options tool has, for each option
                // then check if that option is being changed in query.
                var currentOptions = tool.options.get();
                var queryOptions   = {};

                for (var key in opts.fullQuery) {
                    var isInQuery   = opts.fullQuery[key] !== undefined;
                    var isInOptions = currentOptions[key] !== undefined;

                    if (isInQuery && isInOptions) {
                        queryOptions[key] = opts.fullQuery[key];
                    }
                }

                var anyChanged = Object.keys(queryOptions).length > 0;

                if (anyChanged) {
                    tool.options.set(queryOptions);
                }

                callback(anyChanged);
            }
            else {
                callback(false);
            }
        },

        all: function() {
            if (!tool.isPrimary) {
                return;
            }

            var storage = window.localStorage || {};
            var differentOrigin = storage.autosave_origin && (window.location.pathname !== storage.autosave_origin);

            // If loaded from different origin, discard the saved data.
            if (differentOrigin) {
                storage.autosave_input = "";
                storage.autosave_options = "{}";
            }

            var query = getURLQuery();

            var savedInput = storage.autosave_input || "";
            var savedOptions = JSON.parse(storage.autosave_options || "{}");
            var queryInput = query.input;
            var queryURL   = query["input-url"];

            tool.restore.input({
                savedInput: savedInput,
                queryInput: queryInput,
                showStatus: tool.input.showStatus,
                hasInput:   !!tool.input.element,
                queryURL:   queryURL,
                then: function() {
                    tool.restore.options({
                        savedOptions: savedOptions,
                        hasOptions: !!tool.options.element,
                        fullQuery: query,
                        then: function(optionsRestored) {
                            tool.convert(Trigger.RESTORE);

                            if (queryInput === null) {
                                tool.input.showWarningBadge("Can't load input from query", "The ?input parameter is malformed.");
                            }

                            if (queryURL === null) {
                                tool.input.showWarningBadge("Can't load input from URL", "The ?input-url parameter is malformed.");
                            }
                        }
                    });
                }
            });
        }
    };

    // Animates and swaps the tools.
    tool.swap = function(to) {
        if (tool.input.element && tool.output.element) {
            var input_value  = tool.input.getValue() || "";
            var output_value = tool.output.getValue() || "";
            var input_label  = tool.input.element.querySelector("label");
            var output_label = tool.output.element.querySelector("label");

            // If labels are not already swapped
            if(!input_label.style.left) {

                // Animate labels
                var delta = Math.abs(output_label.getBoundingClientRect().left - input_label.getBoundingClientRect().left);
                input_label.style.left = delta + "px";
                output_label.style.left = -1*delta + "px";

                // Swap values
                tool.input.setValue(output_value);
                tool.output.setValue(input_value);

                // Set source to future location so it doesn't get discarded
                if (typeof(Storage) !== "undefined") {
                    var storage = window.localStorage;
                    storage.setItem("autosave_origin", "/" + to);

                    // Force save output as input
                    storage.setItem("autosave_input", output_value);

                    // Uncomment to empty the options.
                    // Keeping options might be useful if the opposite tool shares same options, e.g delimiter
                    // storage.setItem("autosave_options", "{}");
                }

                // Navigate to future location
                setTimeout(function(){ window.location.assign("/" + to) }, 100);
            }
        }
        else {
            // ...
        }
    };

    // How was the conversion triggered?
    tool.trigger = null;

    // Reset badges and errors on conversion?
    tool.resetErrorsOnConvert = true;

    // Asynchronous bridge return
    tool.respond = function(result) {
        if (result === undefined) {
            result = tool.output.getValue();
        }

        tool.dispatchEvent("response", result);
    }

    tool.events = {
        response: [],
        optionchange: [],
        widgetshow: [],
        widgethide: []
    };

    tool.dispatchEvent = function(event, data) {
        if (Object.keys(tool.events).indexOf(event) === -1) {
            throw "Event \"" + event + "\" is not supported";
        }

        var handlers = tool.events[event];
        for (var i = 0; i < handlers.length; i++) {

            var result = handlers[i].handler.call(tool, data);
            if (handlers[i].once) {
                tool.events[event].splice(i, 1);
            }

            if (result === false) break;
        }
    };

    tool.removeEventListener = function(event, note) {
        if (Object.keys(tool.events).indexOf(event) === -1) {
            throw "Event \"" + event + "\" is not supported";
        }
        if (typeof note === "undefined") {
            throw "Listener note is not specified";
        }

        var handlers = tool.events[event];
        for (var i = 0; i < handlers.length; i++) {
            if (handlers[i].note == note) {
                tool.events[event].splice(i, 1);
            }
        }
    }

    tool.addEventListener = function(opts) {
        if (typeof opts !== "object") opts = {};
        var event   = opts.event || "undefined";
        var handler = opts.handler || false;

        if (!handler) {
            throw "Event handler is not specified";
        }

        if (Object.keys(tool.events).indexOf(event) === -1) {
            throw "Event \"" + event + "\" is not supported";
        }

        tool.events[event].push({
            handler: handler,
            note: opts.note || undefined,
            once: opts.once || false
        })
    };

    tool.isPrimary   = !config.chained;
    tool.chainParent = null;
    tool.chainChild  = null;

    tool.getCompatibility = function() {
        var sides = tool.sides;

        var accepts = sides.getAttribute("data-accepts") || false;
        var returns = sides.getAttribute("data-returns") || false;

        return {
            accepts: accepts,
            returns: returns
        }
    }

    tool.attachChain = function(another) {
        tool.chainChild = another;
        another.chainParent = tool;

        tool.addEventListener({
            event: "response",
            note:  "chain",
            handler: function(data) {
                var setter = another.input.setValue;

                tool.log({
                    type: "chain propagate",
                    from: tool,
                    to: another,
                    data: data
                })

                // If setter is asynchronous, convert only when the value was set
                if (setter.length == 2) {
                    setter(data, function() {
                        another.convert(Trigger.CHAIN);
                    })
                }

                // Otherwise, convert immediately
                else if (setter.length == 1) {
                    setter(data);
                    another.convert(Trigger.CHAIN);
                }

            }
        });

        var data = tool.output.getValue();
        if (data) {
            tool.log({
                type: "chain connect",
                from: tool,
                to: another,
                data: data
            })

            var setter = another.input.setValue;

            // If setter is asynchronous, convert only when the value was set
            if (setter.length == 2) {
                setter(data, function() {
                    another.convert(Trigger.CHAIN);
                })
            }

            // Otherwise, convert immediately
            else if (setter.length == 1) {
                setter(data);
                another.convert(Trigger.CHAIN);
            }
        }
    };

    tool.removeChain = function() {
        tool.chainChild.chainParent = null;
        tool.chainChild = null;
        tool.removeEventListener("response", "chain");
    }

    // Converts input to output.
    tool.convert = function(trigger) {
        var input  = !!tool.input.element;
        var output = !!tool.output.element;

        tool.trigger = null;
        if (trigger) tool.trigger = trigger;

        tool.log({
            type: "conversion",
            trigger: trigger
        })

        // If there's both input and output, get the
        // input value and pass result to output.
        if (input && output) {
            if (tool.resetErrorsOnConvert) {
                tool.output.hideError();
                tool.input.hideBadge();
            }

            var value = tool.input.getValue();

            try {
                var result = tool.converter(value);
                if (result !== undefined) {
                    tool.dispatchEvent("response", result);
                }
            }
            catch (error) {
                window.raise("<b>Conversion error:</b> " + error.toString());
                console.error(error);

                // If there's nothing in the input, do not show the error.
                if (!value) {
                    tool.output.setValue("");
                }
                else {
                    tool.warn("error:converting", error.toString());
                    tool.output.showError(error);
                }
            }
        }

        // If only input is present, then there's nowhere to set result.
        // Let bridge handle the convertation.
        // Example: validators.
        else if (input && !output) {
            tool.resetErrorsOnConvert && tool.input.hideBadge();

            try {
                var value = tool.input.getValue();
                tool.converter(value);
            }
            catch (error) {
                window.raise("<b>Conversion error:</b> " + error.toString());
                console.error(error);

                // If there's nothing in the input, do not show the error.
                if (!value) {
                    tool.output.setValue("");
                }
                else {
                    tool.warn("error:converting", error.toString());
                    tool.input.showNegativeBadge("Error has occured", error, -1);
                }
            }
        }

        // Only output is present.
        // Example: generators.
        else if (!input && output) {
            tool.resetErrorsOnConvert && tool.output.hideError();

            try {
                var result = tool.converter();
                if (result !== undefined) {
                    tool.dispatchEvent("response", result);
                }
            }
            catch (error) {
                window.raise("<b>Conversion error:</b> " + error.toString());
                console.error(error);

                tool.warn("error:converting", error.toString());
                tool.output.showError(error);
            }
        }

        tool.save();
    };

    // Bridge reclaims this function.
    tool.converter = function(){};

    // Handles option section.
    tool.options = {
        default: null,

        // Returns a key-value representation of an option-like element.
        // Used in tool options and example options.
        get: function(source) {
            var overriddenData = tool.sides.getAttribute("data-override-options");

            if (!source) {
                source = tool.options.element;
            }
            if (!source) {
                if (overriddenData) {
                    return JSON.parse(overriddenData);
                }
                else {
                    return {};
                }
            }

            var resets = source.getAttribute("data-resets-all-options") !== null;
            if (resets) {
                tool.options.reset();
            }

            var inputs  = source.querySelectorAll(".input-option");

            var options = {};

            for (var i = 0; i < inputs.length; i++) {
                var input = inputs[i];
                var index = input.getAttribute("data-index");
                var value = null;
                var tag   = input.tagName.toLowerCase();

                if (input.type == "checkbox" || input.type == "radio")
                    value = input.checked;
                else if (input.type == "text" || tag == "textarea" || tag == "select")
                    value = input.value;

                options[index] = value;
            }

            if (overriddenData) {
                var defined = JSON.parse(overriddenData);
                for (var key in defined) {
                    options[key] = defined[key];
                }
            }

            return options;
        },

        // Sets the converter options.
        set: function(options) {
            var source = tool.options.element;
            if (source) {
                var inputs = source.querySelectorAll(".input-option");

                for (var i = 0; i < inputs.length; i++) {
                    var input = inputs[i];
                    var index = input.getAttribute("data-index");
                    if (typeof options[index] !== "undefined") {

                        var value = options[index];
                        var tag   = input.tagName.toLowerCase();

                        if (input.type == "checkbox" || input.type == "radio")
                            input.checked = value;
                        else if (input.type == "text" || tag == "textarea" || tag == "select")
                            input.value = value;

                        if (input.type == "textarea")
                            autosize.update(input);

                    }
                    //else tool.warn("warn:option-not-found", index);
                }
            }
            return tool.options.get();
        },

        reset: function() {
            tool.options.set(tool.options.default);
        },

        // Sets the value of a templated option description.
        // Use <key> in option description to set a template.
        describe: function(key, value) {
            var source = tool.options.element;
            if (source) {
                var element = source.querySelector(".option-detail-key[data-detail-key=\"" + key + "\"]");
                if (element) element.innerText = value;
            }
            return tool.options.get();
        },

        element: null
    };

    tool.accidents = [];
    tool.warn = function(type, data) {
        var event = {
            event: type,
            data: data
        }

        tool.accidents.push(event);
        window.raise("<b>Tool warning:</b> (" + type.toString() + ") " + data.toString(), "warning");
    }
    tool.log = function(data) {
        window.log(tool, data);
    }

    tool.init = function(){
        var sides = tool.sides;
        var examples_wrapper = config.examples;

        tool.input.element = sides.querySelector(".side.input");
        tool.output.element = sides.querySelector(".side.output");
        tool.options.element = sides.querySelector(".converter-options");
        var option_details = tool.options.element ? tool.options.element.querySelectorAll(".option-row .option-details") : null;
        if (option_details) {
            for (var i = 0; i < option_details.length; i++) {
                var detail = option_details[i];
                detail.innerHTML = detail.innerHTML.replace(/{([a-z0-9\-]+)}/ig, function(match, key) {
                    var span = document.createElement("span");
                    span.className = "option-detail-key";
                    span.setAttribute("data-detail-key", key);
                    span.innerText = "<" + key + ">";
                    return span.outerHTML;
                });
            }
        }

        var expander = sides.querySelector(".tool-toggle-layout");
        if (expander) expander.addEventListener("click", function(){
            sides.classList.toggle("expanded");
            setTimeout(function(){
                tool.convert(Trigger.RESIZE);
            }, 100);
        });

        var action_button = sides.querySelector(".sides-primary-button button");
        if (action_button) action_button.addEventListener("click", function(){
            tool.convert(Trigger.ACTION);
        });

        var swap = sides.querySelector(".tool-swap");
        if (swap) swap.addEventListener("click", function(e){
            var where = swap.getAttribute("data-swap-to");
            tool.swap(where);
        });

        var share = sides.querySelector(".tool-create-link");
        var wrapper = sides.querySelector(".sides-wrapper");

        var tweet = sides.querySelector(".tweet-link-button");
        if (tweet) {
            tweet.addEventListener("click", function(){
                var url = this.getAttribute("data-tweet-url");
                window.open(url);
            })
        }

        if (share) {
            // Named function to remove event listener
            var link = share.querySelector(".tool-link");
            var hide_share = function(e) {
                if (!e || (!link.contains(e.target))) {
                    (!e || e.stopPropagation());
                    share.classList.remove("active");
                    wrapper.classList.remove("muted");
                    document.removeEventListener("click", hide_share);
                }
            };

            share.addEventListener("click", function(e){
                if (!link.contains(e.target)) {
                    if (share.classList.contains("active")) hide_share();
                    else {
                        var box = link.querySelector("input");
                        var url = window.location.origin + window.location.pathname + "?";
                        var query = [];
                        var options = tool.options.get();
                        var overridden = {};
                        var overriddenData = tool.sides.getAttribute("data-override-options");
                        if (overriddenData) {
                            overridden = JSON.parse(overriddenData);
                        }
                        var chainData = getChainData(tool);

                        if (chainData.length > 0) {
                            query.push("chain=" + encodeURIComponent(chainData.join(",")));
                        }

                        if (tool.input.element) {
                            var inputIsString  = typeof tool.input.getValue() === "string";
                            var inputFromQuery = getURLQuery("input");
                            var inputFromURL   = getURLQuery("input-url");

                            if (inputFromURL) {
                                query.push("input-url=" + encodeURIComponent(inputFromURL));
                            }
                            else if (inputFromQuery) {
                                query.push("input=" + encodeURIComponent(inputFromQuery));
                            }
                            else if (inputIsString) {
                                query.push("input=" + encodeURIComponent(tool.input.getValue()));
                            }
                        }

                        var option_keys = Object.keys(options);
                        if (option_keys.length) {
                            for (var i = 0; i < option_keys.length; i++) {

                                var option_key = option_keys[i];
                                if (overridden[option_key] === undefined) {
                                    var option_val = options[option_key];
                                    query.push(encodeURIComponent(option_key) + "=" + encodeURIComponent(option_val));
                                }
                            }
                        }

                        box.value = url + query.join("&");

                        e.stopPropagation();
                        share.classList.add("active");
                        wrapper.classList.add("muted");
                        document.addEventListener("click", hide_share);

                        setTimeout(function(){
                            box.select();
                            box.focus();
                            box.select();
                        }, 201);
                    }
                }
            });
        }

        if (tool.input.element) {
            makeToggleableWidgets(tool, "input");

            tool.input.element.addEventListener("keyup", function(){
                tool.convert(Trigger.KEYPRESS);
            });

            var import_widget = sides.querySelector(".widget-load");
            import_widget.addEventListener("click", function(){
                sides.querySelector(".widget-load input").click();
            });

            var import_input = sides.querySelector(".widget-load input");
            import_input.addEventListener("change", function(e){
                tool.input.importFromFile(e);
            }, false);

            var download_input_widget = sides.querySelector(".input .widget-save-as");
            download_input_widget.addEventListener("click", function(){
                tool.input.showStatus("saving...");
                tool.input.download();
            });

            var clipboard_input_widget = sides.querySelector(".input .widget-copy");
            clipboard_input_widget.addEventListener("click", function(){
                tool.input.toClipboard();
            });
        }

        if (tool.output.element) {
            makeToggleableWidgets(tool, "output");

            // When toggle-chain widget panel is shown, also show the combinator
            tool.addEventListener({
                event: "widgetshow",
                handler: function(e) {
                    if (e.name == "toggle-chain") {
                        var output = sides.querySelector(".output");
                        populateChainCombinator(tool, output);
                    }
                }
            })

            // When toggle-remove-chain widget panel is shown, display how many tools will be removed
            tool.addEventListener({
                event: "widgetshow",
                handler: function(e) {
                    if (e.name == "toggle-remove-chain") {
                        var amount = getChainData(tool).length;

                        if (amount == 1) {
                            amount += " tool";
                        }
                        else if (amount > 1) {
                            amount += " tools";
                        }

                        var widget = sides.querySelector(".output .toggle-remove-chain .remove-how-many");
                        widget.textContent = amount;
                    }
                }
            })

            // When any widget panel in output is hidden, also hide the combinator
            tool.addEventListener({
                event: "widgethide",
                handler: function(e) {
                    var output = sides.querySelector(".output");
                    var active = output.classList.contains("combinator-active");
                    if (e.side == "output" && active) {
                        output.classList.remove("combinator-active");
                    }
                }
            })

            var remove_chain_confirm = sides.querySelector(".output .toggle-remove-chain .remove-chain-yes");
            remove_chain_confirm.addEventListener("click", function(){
                removeChainedTools(tool);
                tool.output.hideWidgetToggle();
            })

            var chain_search = sides.querySelector(".output .toggle-chain .chain-search");
            chain_search.addEventListener("keyup", function(){
                chainSearch(sides);
            })

            var clipboard_output_widget = sides.querySelector(".output .widget-copy");
            clipboard_output_widget.addEventListener("click", function(){
                tool.output.toClipboard();
            });
            var download_output_widget = sides.querySelector(".output .widget-save-as");
            download_output_widget.addEventListener("click", function(){
                tool.output.showStatus("saving...");
                tool.output.download();
            });
        }

        tool.globalHandlers.convertOnResize = tool.globalHandlers.convertOnResize.bind(tool);
        window.addEventListener("resize", tool.globalHandlers.convertOnResize);

        if (examples_wrapper) {
            var samples = examples_wrapper.querySelectorAll(".card");
            if (samples) {
                for (var i = 0; i < samples.length; i++) {
                    (function (sample) {
                        sample.addEventListener("click", function(e) {
                            tool.setExample.call(tool, sample);
                        });
                    })(samples[i]);
                }
            }
        }

        tool.addEventListener({
            event: "optionchange",
            handler: tool.convert.bind(tool, Trigger.OPTIONS)
        });

        var all_options = sides.querySelectorAll(".converter-options .input-option");
        if (all_options) {
            for (var i = 0; i < all_options.length; i++) {
                var o = all_options[i];
                o.addEventListener("change", tool.dispatchEvent.bind(tool, "optionchange"));
                o.addEventListener("keyup", tool.dispatchEvent.bind(tool, "optionchange"));
            }
        }

        tool.addEventListener({
            event: "response",
            handler: function(e) {
                tool.log({
                    type: "response self",
                    data: e
                })

                this.output.setValue(e);
            }
        });

        tool.addEventListener({
            event: "widgetshow",
            handler: function(e) {
                showWidgetToggle(tool, e.side, e.name);
            }
        })

        tool.addEventListener({
            event: "widgethide",
            handler: function(e) {
                hideWidgetToggle(tool, e.side);
            }
        })

        // Attaches an instance of the tool to the tool element.
        sides.tool = tool;
        tool.converter = config.converter;
        tool.sides = sides;
        var button_fav = sides.querySelector(".tool-favorite");

        if (button_fav) {
            button_fav.addEventListener("click", tool.favorite.bind(tool));
            tool.favorite();
        }

        tool.options.default = tool.options.get();
    }

    tool.override = function(path) {
        path = path.split(".");
        var object = tool;
        var index = null;
        for (var i = 0; i < path.length; i++) {
            index = path[i];
            if (object[index] !== undefined) {
                if (i != path.length - 1) object = object[index];
            }
            else throw "tool." + path.splice(0, i).join(".") + " does not contain " + index;
        }
        return {
            with: function(fn) {
                object[index] = fn.bind(tool);
            }
        }
    }

    tool.destroy = function() {
        tool.output.element = null;
        tool.output.tool = null;
        tool.input.element = null;
        tool.input.tool = null;
        tool.options.element = null;
        tool.converter = null;
        tool.sides.tool = null;
        tool.sides.innerHTML = tool.sides.innerHTML;
        tool.sides.parentElement.removeChild(tool.sides);
        tool.sides = null;
        for (var event in tool.events) {
            tool.events[event] = [];
        }
        window.removeEventListener("resize", tool.globalHandlers.convertOnResize);
        tool = null;
    }

    tool.input.tool  = tool;
    tool.output.tool = tool;
    tool.init();

    tool.start = function() {
        tool.restore.all();
        return tool;
    }
}

var Trigger = Object.freeze({
    OPTIONS:  1,
    ACTION:   2,
    KEYPRESS: 3,
    RESIZE:   4,
    RESTORE:  5,
    EXAMPLE:  6,
    IMPORT:   7,
    CHAIN:    8
});

Tool.prototype.globalHandlers = {
    convertOnResize: function() {
        this.convert(Trigger.RESIZE);
    }
}

Tool.prototype.setExample = function(example) {
    var tool = this;
    var sample = example.querySelector(".text-sample.input-sample span");
    var text = (sample ? sample.textContent : "");
    tool.input.setValue(text);
    tool.options.set(tool.options.get(example));
    tool.convert(Trigger.EXAMPLE);
    if (zenscroll) {
        zenscroll.intoView(tool.sides, 400);
    }
    else window.scrollTo(0, tool.sides);
}

Tool.prototype.favorite = function(event) {
    var tool = this;

    if (typeof(Storage) !== "undefined") {
        var storage = window.localStorage || null;
        var favorites = JSON.parse(storage ? (storage.favorite_tools || "[]") : "[]");

        var path = "/" + window.location.pathname.split("/")[1];

        if (event) {
            var index = favorites.indexOf(path);
            if (index !== -1) favorites.splice(index, 1);
            else favorites.push(path);
        }

        if (storage) storage.setItem("favorite_tools", JSON.stringify(favorites));

        var favorite = (favorites.indexOf(path) !== -1);
        var button = tool.sides.querySelector(".tool-favorite");
        button.classList.remove("active");
        if (favorite) button.classList.add("active");

        Site.sortAllTools();
    }
}

Tool.prototype.showBadge = function(side, type, title, message) {
    this.hideAllBadges(side);

    if (side && (type == "negative" || type == "positive" || type == "warning")) {

        var padding = 5;
        var t = side.querySelector(".badge .badge-title");
        var m = side.querySelector(".badge .badge-message");

        t.textContent = title;
        m.textContent = message;

        side.classList.add("badge-" + type);

        var badgeHeight = side.querySelector(".badge").offsetHeight;
        var wrap = side.querySelector(".data-wrapper");

        if (wrap) {
            wrap.style.paddingTop = (badgeHeight+padding) + "px";
        }

    }
}

Tool.prototype.siteName = (function(){
    if (/^local/.test(window.location.host)) {
        return window.location.host.split('.')[1];
    }
    else {
        return window.location.host.split('.')[0];
    }
})();

Tool.prototype.hideAllBadges = function(side) {
    if (!side) return;

    var wrap = side.querySelector(".data-wrapper");
    if (wrap) {
        wrap.style.paddingTop = "";
    }

    side.classList.remove("badge-negative");
    side.classList.remove("badge-positive");
    side.classList.remove("badge-warning");
}

Tool.prototype.showStatus = function(side, text) {
    if (!side) return;

    var duration = 1000;
    var e = side.querySelector("label .status");
    var r = Math.random();
        e.textContent = text;
        e.className = "status active";
        e.setAttribute("animation-id", r);
    setTimeout(function(){
        if(r == e.getAttribute("animation-id")) {
            e.classList.remove("active");
            setTimeout(function(){
                e.textContent = "";
            }, 200);
        }
    }, duration);
}

// Default implementation for copying text to clipboard
// For a custom implementation, redefine tool.input/output.toClipboard
Tool.prototype.toClipboard = function(controller) {
    var element = controller.element.querySelector(".data");
    element.select();
    try {
        var copied = document.execCommand('copy');
        if (copied) controller.showStatus("copied");
        else controller.showStatus("can't copy");
    }
    catch (ignored) {}
}

function makeWrappingExamples() {
    window.addEventListener("resize", updateExamples);
    updateExamples();
}

function chainSearch(sides) {
    var output = sides.querySelector(".side.output");
    var list   = output.querySelector(".tool-combinator .combinator-tools");
    var tools  = list.querySelectorAll(".combinator-tool");
    var search = output.querySelector(".side-widgets .toggle-chain .chain-search");
    var purge  = function(text) {
        return Site.removeStopWords(text.toLowerCase());
    }
    var query  = purge(search.value);

    for (var i = 0; i < tools.length; i++) {
        var tool = tools[i];

        var name = purge(tool.querySelector(".combinator-title").textContent);
        var desc = purge(tool.querySelector(".combinator-description").textContent);

        tool.classList.remove("hidden");

        // Hide the tool if it does not match the search query.
        if (name.indexOf(query) === -1 && desc.indexOf(query) === -1) {
            tool.classList.add("hidden");
            list.appendChild(tool);
        }
    }

    //var total = list.querySelectorAll(".combinator-tool").length;
    //var found = wrapper.querySelectorAll(".combinator-tool:not(.hidden)").length;
}

function makeColorpickers() {
    Site.applyToAllElements(".input-option.color.active.not-initialized", function(e) {
        e.classList.remove("not-initialized");
        Colorpicker.create(e);
    });
}

function makeAutosizeTextareas() {
    Site.applyToAllElements("textarea.autosize.not-initialized", function(e) {
        e.classList.remove("not-initialized");
        autosize(e);
    });
}

function populateChainCombinator(tool, output) {
    var panel   = output.querySelector(".side-widgets-toggle .toggle-chain .widget-chain-search");
    var search  = panel.querySelector(".chain-search");
    var list    = output.querySelector(".tool-combinator .combinator-list");
    var returns = tool.getCompatibility().returns || "nothing";

    var delay_after_load = 250;

    panel.classList.remove("state-wait");
    panel.classList.remove("state-search");
    panel.classList.remove("state-error");

    panel.classList.add("state-wait");
    search.disabled = true;
    search.value   = "";
    list.scrollTop = 0;
    search.placeholder = "Connecting to server...";

    var requestedUrl = "all-tools.json?accepts={0}".format(returns);
    Site.GET(requestedUrl, function(state) {
        var response = state.responseText;
        if (state.readyState == 4 && state.status == 200) {
            try {
                var data = JSON.parse(response);
                if (data.error || !data.json) {
                    panel.classList.remove("state-wait");
                    panel.classList.add("state-error");

                    search.placeholder = "Tools unavailable.";
                }
                else {
                    search.placeholder = "Loading all tools...";

                    var tools = list.querySelector(".combinator-tools");
                    while (tools.firstChild) {
                        tools.removeChild(tools.firstChild);
                    }

                    for (var keyword in data.json) {
                        for (var i = 0; i < data.json[keyword].length; i++) {
                            var t = data.json[keyword][i];

                            var element = document.createElement("div");
                                element.className = "combinator-tool";
                                element.setAttribute("data-url", t.url)

                            var title = document.createElement("span");
                                title.className = "combinator-title";
                                title.textContent = t.title;

                            var description = document.createElement("span");
                                description.className = "combinator-description";
                                description.textContent = t.desc;

                            element.appendChild(title);
                            element.appendChild(description);

                            (function(e){
                                e.addEventListener("click", function() {
                                    chainToolWith(tool, this.getAttribute("data-url"));
                                    tool.output.hideWidgetToggle();
                                });
                            })(element)

                            tools.appendChild(element);
                        }
                    }

                    setTimeout(function () {
                        panel.classList.remove("state-wait");
                        panel.classList.add("state-search");

                        search.disabled = false;
                        search.placeholder = "Search all tools...";
                        search.focus();

                        output.classList.remove("combinator-active");
                        output.classList.add("combinator-active");
                    }, delay_after_load);
                }
            }
            catch (e) {
                panel.classList.remove("state-wait");
                panel.classList.add("state-error");
                search.placeholder = "Can't load.";
            }
        }
        else if (state.readyState == 4) {
            panel.classList.remove("state-wait");
            panel.classList.add("state-error");

            search.placeholder = "Unexpected response.";
        }
    });
}

function makeToggleableWidgets(tool, side) {
    var side_widgets = tool[side].element.querySelector(".side-widgets");
    var wrapper = side_widgets.querySelector(".side-widgets-wrapper");
    var toggle  = side_widgets.querySelector(".side-widgets-toggle");

    var widgets = side_widgets.querySelectorAll(".widget");
    for (var i = 0; i < widgets.length; i++) {
        (function(w){
            w.addEventListener("click", function() {
                var section  = w.getAttribute("data-toggle");
                var autohide = (w.getAttribute("data-hides-toggle") !== null);

                if (section) {
                    tool.dispatchEvent("widgetshow", {
                        side: side,
                        cause: "click",
                        name: section
                    })
                }

                if (autohide) {
                    tool.dispatchEvent("widgethide", {
                        side: side,
                        cause: "click"
                    })
                }
            })
        })(widgets[i])
    }

    var close = toggle.querySelector(".toggle-hide");
    close.addEventListener("click", function(){
        tool.dispatchEvent("widgethide", {
            cause: "close",
            side:  side
        });
    });


    // Escape key closes the toggle.
    window.addEventListener("keyup", function(e){
        var key = e.key.toLowerCase();
        var esc = (key == "esc" || key == "escape");
        var opened = (side_widgets.classList.contains("toggled"));

        if (esc && opened) {
            tool.dispatchEvent("widgethide", {
                cause: "esc",
                side:  side
            });
        }
    });
}

function hideWidgetToggle(tool, side) {
    var element = tool[side].element;

    if (element) {
        var container = element.querySelector(".side-widgets");
        var wrapper   = container.querySelector(".side-widgets-wrapper");
        var toggle    = container.querySelector(".side-widgets-toggle");

        wrapper.style.transform = "rotateX(0deg) translateY(0px) translateZ(0px)";
        toggle.style.transform  = "rotateX(90deg) translateY(-50%) translateZ({0}px)".format(container.offsetHeight/2);
        container.classList.remove("toggled");
    }
}

function showWidgetToggle(tool, side, name) {
    var element = tool[side].element;

    if (element) {
        var container = element.querySelector(".side-widgets");
        var wrapper = container.querySelector(".side-widgets-wrapper");
        var toggle  = container.querySelector(".side-widgets-toggle");

        hideWidgetToggle(tool, side);

        if (name) {
            var group = toggle.querySelector("." + name);
            if (group) {
                var groups = container.querySelectorAll(".side-widgets-toggle .toggle-wrapper .widget-toggle");
                for (var i = 0; i < groups.length; i++) {
                    groups[i].classList.remove("toggle-active");
                }

                group.classList.add("toggle-active");

                toggle.style.transform  = "rotateX(0deg) translateY(0px) translateZ(0px)";
                wrapper.style.transform = "rotateX(-90deg) translateY(50%) translateZ({0}px)".format(container.offsetHeight/2);

                container.classList.remove("toggled");
                container.classList.add("toggled");
            }
            else {
                window.raise("Widget tried to toggle section .{0}, but it does not exists.".format(name));
            }
        }
    }
}

function updateExamples() {
    var wrappers = document.querySelectorAll(".examples .wrapper");
    for (var i = 0; i < wrappers.length; i++) {
        var wrapper = wrappers[i];
        var sample  = wrapper.querySelector(".sample");

        // File samples are always big
        if (!sample.querySelector(".file-sample")) {
            sample.classList.remove("big");
            var threshold     = 5;
            var wrapper_width = wrapper.getBoundingClientRect().width;
            var sample_width  = sample.scrollWidth;
            if (sample_width >= wrapper_width - threshold) sample.classList.add("big");
        }
    }
}

function buildURLQuery(data) {
    var query = [];
    for (var k in data) {
        var v = data[k];
        query.push(encodeURIComponent(k) + (v ? ("=" + encodeURIComponent(v)) : ""));
    }
    return "?" + query.join("&");
}

function getURLQuery(key) {
    var s = window.location.search.substring(1).split("&");
    var query = {};
    for (var i = 0; i < s.length; i++) {
        var pair = s[i].split("=");

        // If key cannot be uri-decoded, discard the whole pair
        try {
            var k = decodeURIComponent(pair[0]);
        }
        catch (e) {
            continue;
        }

        // If value cannot be uri-decoded, make it null
        try {
            var v = decodeURIComponent(pair[1] || "");
        }
        catch (e) {
            var v = null;
        }


        // "true", "yes" -> true;
        // "false", "no" -> false;
        if (v == "true" || v == "yes" || v == "false" || v == "no") v = (v == "true" || v == "yes");

        if (k) query[k] = v;
    }
    return key ? query[key] : query;
}

function isEquivalent(a, b) {
    if (typeof a !== "object" || typeof b !== "object") return false;
    var aProps = Object.getOwnPropertyNames(a);
    var bProps = Object.getOwnPropertyNames(b);
    if (aProps.length != bProps.length) {
        return false;
    }
    for (var i = 0; i < aProps.length; i++) {
        var propName = aProps[i];
        if (a[propName] !== b[propName]) {
            return false;
        }
    }
    return true;
}

function sizeToString (bytes, decimals) {
   if (bytes == 0) return 'empty';
   var k = 1024;
   var d = decimals || 2;
   var sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
   var i = Math.floor(Math.log(bytes) / Math.log(k));
   return parseFloat((bytes / Math.pow(k, i)).toFixed(d)) + sizes[i];
}

