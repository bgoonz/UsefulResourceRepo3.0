$(function () {
    // make text-to-hex format work
    //
    $('#text-to-hex-format').click(function (ev) {
        ev.preventDefault();
        $('#text-to-hex-format-field').slideToggle();
    });

    // make text-to-hex tool work
    //
    mkTool('text-to-hex', function (text) {
        var bytes = [];
        for (var i = 0; i < text.length; i++) {
            var realBytes = unescape(encodeURIComponent(text[i]));
            for (var j = 0; j < realBytes.length; j++) {
                bytes.push(realBytes[j].charCodeAt(0));
            }
        }

        var converted = '';
        var textToHexFormat = $('#text-to-hex-format-field input').val();
        for (var i = 0; i < bytes.length; i++) {
            var byte = bytes[i];
            var hexByte = byte.toString(16);
            if (hexByte.length == 1) {
                hexByte = '0' + hexByte;
            }
            var char = textToHexFormat;
            char = char.replace(/%x/g, hexByte);
            converted += char;
        }

        return converted;
    });
});
