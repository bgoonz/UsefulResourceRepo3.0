window.bridges["generate-random-text-file"] = function(){
    var currentResult = "";

    var bridge = function() {
        var tool = this;
        var options = parseOptions(tool);
        if (!options) {
            return "";
        }

        var str = random_string(options.length, options.stringType, options.customChars);
        currentResult = str;
        return str;
    }

    function parseOptions (tool) {
        var options = tool.options.get();
        var error   = function(a, b) { tool.output.showNegativeBadge(a, b, -1); }

        var length = options.length.trim();
        if (length.length == 0) {
            error("Can't generate file", "File length was not specified.");
            return false;
        }

        var lengthInBytes = 0;
        if (!/^\d+(\.\d+)?(\s+)?(b|k|m|kb|mb)?$/i.test(length)) {
            error("Can't generate file", "File length has invalid format.");
            return false;
        }
        if (/^\d+$/.test(length)) {
            lengthInBytes = length;
        }
        else if (/^\d+(\s+)?b$/i.test(length)) {
            // bytes
            var length = parseInt(length);
            lengthInBytes = length;
        }
        else if (/^\d+(\.\d+)(\s+)?b$/i.test(length)) {
            // invalid bytes format
            error("Can't generate file", "File length in bytes can't be a fraction.");
            return false;
        }
        else if (/^\d+(\.\d+)?(\s+)?kb?$/i.test(length)) {
            // kilobytes
            console.log(length);
            var length = parseFloat(length);
            length = parseInt(length * 1024);
            lengthInBytes = length;
        }
        else if (/^\d+(\.\d+)?(\s+)?mb?$/i.test(length)) {
            // megabytes
            var length = parseFloat(length);
            length = parseInt(length * 1024 * 1024);
            lengthInBytes = length;
        }

        return {
            length : length,
            stringType : options["predefined-charset"],
            customChars : options["custom-charset"]
        };
    }


function random_string (length, predefinedStringSet, customStringSet) {
    var possibleAlphaLc = 'abcdefghijklmnopqrstuvwxyz';
    var possibleAlphaUc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var possibleAlphaMix = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

    var possibleAlphaLcNum = 'abcdefghijklmnopqrstuvwxyz0123456789';
    var possibleAlphaUcNum = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    var possibleAlphaMixNum = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

    var possibleBase58 = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz';
    var possibleNum = '0123456789';

    var str = '';
    if (predefinedStringSet == "alphalc") {
        var choiceLength = possibleAlphaLc.length;
        for (var i = 0; i < length; i++) {
            var char = possibleAlphaLc.charAt(Math.random() * choiceLength);
            str += char;
        }
        return str;
    }

    if (predefinedStringSet == "alphauc") {
        var choiceLength = possibleAlphaUc.length;
        for (var i = 0; i < length; i++) {
            var char = possibleAlphaUc.charAt(Math.random() * choiceLength);
            str += char;
        }
        return str;
    }

    if (predefinedStringSet == "alphamix") {
        var choiceLength = possibleAlphaMix.length;
        for (var i = 0; i < length; i++) {
            var char = possibleAlphaMix.charAt(Math.random() * choiceLength);
            str += char;
        }
        return str;
    }

    if (predefinedStringSet == "alphalcnum") {
        for (var i = 0; i < length; i++) {
            var choiceLength = possibleAlphaLcNum.length;
            var char = possibleAlphaLcNum.charAt(Math.random() * choiceLength);
            str += char;
        }
        return str;
    }

    if (predefinedStringSet == "alphaucnum") {
        for (var i = 0; i < length; i++) {
            var choiceLength = possibleAlphaUcNum.length;
            var char = possibleAlphaUcNum.charAt(Math.random() * choiceLength);
            str += char;
        }
        return str;
    }

    if (predefinedStringSet == "alphamixnum") {
        for (var i = 0; i < length; i++) {
            var choiceLength = possibleAlphaMixNum.length;
            var char = possibleAlphaMixNum.charAt(Math.random() * choiceLength);
            str += char;
        }
        return str;
    }

    if (predefinedStringSet == "numbers") {
        for (var i = 0; i < length; i++) {
            var choiceLength = possibleNum.length;
            var char = possibleNum.charAt(Math.random() * choiceLength);
            str += char;
        }
        return str;
    }

    if (predefinedStringSet == "base58") {
        for (var i = 0; i < length; i++) {
            var choiceLength = possibleBase58.length;
            var char = possibleBase58.charAt(Math.random() * choiceLength);
            str += char;
        }
        return str;
    }

    if (predefinedStringSet == "custom") {
        for (var i = 0; i < length; i++) {
            var choiceLength = customStringSet.length;
            var char = customStringSet.charAt(Math.random() * choiceLength);
            str += char;
        }
        return str;
    }
}

function random_int (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function random_lines (charset, length) {
    var lines = [];
    var min = 5;
    var max = 25;
    for (var i = 0; i < length; i++) {
        lines.push(random_words(charset, random_int(min, max)));
    }
    return lines.join("\n");
}

function random_words (charset, length) {
    var words = [];
    var min = 4;
    var max = 8;
    for (var i = 0; i < length; i++) {
        words.push(random_string(charset, random_int(min, max)));
    }
    return words.join(" ");
}

function downloader () {
    var tool = this;

    var chars = currentResult.split('');
    var bytes = [];
    for (var i = 0; i < chars.length; i++) {
        bytes.push(chars[i].charCodeAt(0));
    }
    var byteArray = new Uint8Array(bytes);

    var data = new Blob([byteArray], { type : "text/plain" });
    saveAs(data, "output-" + tool.siteName + ".txt");
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
