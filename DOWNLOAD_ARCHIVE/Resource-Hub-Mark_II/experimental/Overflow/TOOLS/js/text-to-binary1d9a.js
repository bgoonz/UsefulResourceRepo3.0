$(function () {
    // make text-to-binary format work
    $('#text-to-binary-format').click(function (ev) {
        ev.preventDefault();
        $('#text-to-binary-format-field').slideToggle();
    });

    mkTool('text-to-binary', function (text) {
        var bytes = [];
        for (var i = 0; i < text.length; i++) {
            var realBytes = unescape(encodeURIComponent(text[i]));
            for (var j = 0; j < realBytes.length; j++) {
                bytes.push(realBytes[j].charCodeAt(0));
            }
        }

        var converted = '';
        var textToBinFormat = $('#text-to-binary-format-field input').val();
        for (var i = 0; i < bytes.length; i++) {
            var byte = bytes[i];
            var binByte = byte.toString(2);
            var binBytePadded = binByte;
            while (binBytePadded.length < 8) {
                binBytePadded = '0' + binBytePadded.toString();
            }
            var char = textToBinFormat;

            char = char.replace(/%0b/g, binBytePadded);
            char = char.replace(/%b/g, binByte);
            converted += char;
        }

        return converted;
    });
});
