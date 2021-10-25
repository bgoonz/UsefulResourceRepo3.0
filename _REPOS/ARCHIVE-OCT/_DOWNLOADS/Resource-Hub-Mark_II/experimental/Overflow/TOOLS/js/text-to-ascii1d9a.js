$(function () {
    mkTool('text-to-ascii', function (text) {
        var bytes = [];
        for (var i = 0; i < text.length; i++) {
            var realBytes = unescape(encodeURIComponent(text[i]));
            for (var j = 0; j < realBytes.length; j++) {
                bytes.push(realBytes[j].charCodeAt(0));
            }
        }

        var converted = '';
        var textToDecFormat = "%d ";
        for (var i = 0; i < bytes.length; i++) {
            var byte = bytes[i];
            var decByte = byte.toString(10);
            var char = textToDecFormat;

            char = char.replace(/%d/g, decByte);
            converted += char;
        }

        return converted;
    });
});
