$(function () {
    mkTool('text-transform', function (text) {
        var bytes = [];
        var converted = '';
        var textToHexFormat = $('#text-transform-format-field input').val();

        for (var i = 0; i < text.length; i++) {
            var realBytes = unescape(encodeURIComponent(text[i]));

            if (realBytes.length > 1) {
                var multibyteChar = text[i];
                var hexmbChar = '';
                var octmbChar = '';
                var binmbChar = '';
                var decmbChar = '';

                for (var j = 0; j < realBytes.length; j++) {
                    var byte = realBytes[j].charCodeAt(0);
                    var hexByte = byte.toString(16);
                    var octByte = byte.toString(8);
                    var binByte = byte.toString(2);
                    var decByte = byte.toString();
                    hexmbChar += hexByte;
                    octmbChar += octByte;
                    binmbChar += binByte;
                    decmbChar += decByte;
                }

                var char = textToHexFormat;
                char = char.replace(/%x/g, hexmbChar);
                char = char.replace(/%o/g, octmbChar);
                char = char.replace(/%b/g, binmbChar);
                char = char.replace(/%d/g, decmbChar);
                char = char.replace(/%_/g, multibyteChar);
                char = char.replace(/%c/g, multibyteChar.toLowerCase());
                char = char.replace(/%C/g, multibyteChar.toUpperCase());
                char = char.replace(/%~/g, 
                    multibyteChar.toUpperCase() == multibyteChar ?
                    multibyteChar.toLowerCase() :
                    multibyteChar.toUpperCase()
                );
                char = char.replace(/\\n/g, "\n");

                converted += char;
            }
            else {
                var byte = text[i].charCodeAt(0);
                var hexByte = byte.toString(16);
                var octByte = byte.toString(8);
                var binByte = byte.toString(2);
                var decByte = byte.toString();
                var char = textToHexFormat;
                char = char.replace(/%x/g, hexByte);
                char = char.replace(/%o/g, octByte);
                char = char.replace(/%b/g, binByte);
                char = char.replace(/%d/g, decByte);
                char = char.replace(/%_/g, text[i]);
                char = char.replace(/%c/g, text[i].toLowerCase());
                char = char.replace(/%C/g, text[i].toUpperCase());
                char = char.replace(/%~/g, 
                    text[i].toUpperCase() == text[i] ?
                    text[i].toLowerCase() :
                    text[i].toUpperCase()
                );
                char = char.replace(/\\n/g, "\n");
                converted += char;
            }
        }

        return converted;
    });
});
