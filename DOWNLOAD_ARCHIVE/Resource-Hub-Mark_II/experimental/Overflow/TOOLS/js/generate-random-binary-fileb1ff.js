window.bridges["generate-random-binary-file"] = function(){
    var randomBytes = [];

    var bridge = function() {
        var tool = this;
        var opts = parseOptions(tool);
        if (!opts) return '';

        randomBytes = [];
        for (var i = 0; i < opts.size; i++) {
            randomBytes.push(pickRandomArrElement(opts.byteRange));
        }

        var output = [];
        for (var i = 0; i < randomBytes.length; i++) {
            output.push(String.fromCharCode(parseInt(randomBytes[i], 10)));
        }

        return output.join('');
    }

    function pickRandomArrElement(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    }

    function parseOptions(tool) {
        var options = tool.options.get();
        var error   = function(a, b) { tool.output.showNegativeBadge(a, b, -1); }

        var fileSize = options['file-size'].trim();
        if (!/^\d+(\.\d+)?\s*(b|k|m|kb|mb)?$/i.test(fileSize)) {
            error("Invalid File Size", "File size isn't a valid number.");
            return false;
        }
        if (/^\d+$/.test(fileSize)) {
            var size = fileSize;
        }
        else if (/^\d+\s*b$/i.test(fileSize)) {
            // bytes
            var size = parseInt(fileSize);
        }
        else if (/^\d+(\.\d+)\s*b$/i.test(fileSize)) {
            // invalid bytes format
            error("Invalid File Size", "File size in bytes can't be a fraction.");
            return false;
        }
        else if (/^\d+(\.\d+)?\s*(k|kb)$/i.test(fileSize)) {
            // kilobytes
            var fileSize = parseFloat(fileSize);
            var size = parseInt(fileSize * 1024);
        }
        else if (/^\d+(\.\d+)?\s*(m|mb)$/i.test(fileSize)) {
            // megabytes
            var fileSize = parseFloat(fileSize);
            var size = parseInt(fileSize * 1024 * 1024);
        }

        var ranges = {
            'all-bytes'         : '0-255',
            'low-nibbles'       : '0-127',
            'high-nibbles'      : '128-255',
            'full-bytes'        : '255',
            'null-bytes'        : '0',
            'c0-control-chars'  : '0-31, 127',
            'c1-control-chars'  : '128-159',
            'printable-chars'   : '32-126',
            'lowercase-chars'   : '97-122',
            'uppercase-chars'   : '65-90',
            'digits'            : '48-57',
            'punctuation-chars' : '33-47, 58-64, 91-96, 123-126',
            'single-bits'       : '0, 1',
            'powers-of-two'     : '1, 2, 4, 8, 16, 32, 64, 128',
            'custom'            : options['custom-range']
        }

        var range = parseRange(ranges[options['byte-range']]);
        if (!range.success) {
            error("Invalid Skip Sprite Range", range.error);
            return false;
        }
        var byteRange = range.numbers;

        for (var i = 0; i < byteRange.length; i++) {
            if (byteRange[i] > 255) {
                error("Invalid custom Byte Range", "Bytes must be in the range 0 to 255.");
                return false;
            }
        }

        var fileExtension = options["file-extension"];

        return {
            size          : size,
            byteRange     : byteRange,
            fileExtension : fileExtension
        }
    }

    function downloader() {
        var tool = this;
        var opts = parseOptions(tool);

        var byteArray = new Uint8Array(randomBytes);
        var data = new Blob([byteArray], { type : "text/plain" });
        saveAs(data, "output-" + tool.siteName + opts.fileExtension.toString());
    }

    return {
        converter: bridge,
        config: {
            type: "text",
            override: {
                "output.download" : downloader
            }
        }
    }

}
