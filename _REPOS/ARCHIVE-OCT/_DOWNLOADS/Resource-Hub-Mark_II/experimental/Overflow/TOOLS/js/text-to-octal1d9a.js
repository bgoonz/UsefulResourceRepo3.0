$(function () {
    // make text-to-octal format work
    $('#text-to-octal-format').click(function (ev) {
        ev.preventDefault();
        $('#text-to-octal-format-field').slideToggle();
    });

    // make text-to-octal tool work
    mkTool('text-to-octal', function (text) {
        var bytes = [];
        for (var i = 0; i < text.length; i++) {
            var realBytes = unescape(encodeURIComponent(text[i]));
            for (var j = 0; j < realBytes.length; j++) {
                bytes.push(realBytes[j].charCodeAt(0));
            }
        }

        var converted = '';
        var textToOctFormat = $('#text-to-octal-format-field input').val();
        for (var i = 0; i < bytes.length; i++) {
            var byte = bytes[i];
            var octByte = byte.toString(8);
            var char = textToOctFormat;

            char = char.replace(/%o/g, octByte);
            converted += char;
        }

        return converted;
    });
});
