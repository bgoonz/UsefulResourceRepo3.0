$(function () {
    mkTool('ip-to-hex', function (text) {
        text.replace(/\r\n/g, '\n');
        var lines = text.split('\n');

        var output = '';
        for (var i = 0; i < lines.length; i++) {
            var line = lines[i];
            var match = /(\d+\.\d+\.\d+\.\d+)/.exec(line);
            if (match) {
                var matchText = match[1];
                var ipParts = matchText.split('.');
                var p3 = parseInt(ipParts[3],10);
                var p3x = p3.toString(16);
                var p2 = parseInt(ipParts[2],10);
                var p2x = p2.toString(16);
                var p1 = parseInt(ipParts[1],10);
                var p1x = p1.toString(16);
                var p0 = parseInt(ipParts[0],10);
                var p0x = p0.toString(16);
                var dec = p3 + p2 * 256 + p1 * 256 * 256 + p0 * 256 * 256 * 256;
                var hex = dec.toString(16);
                function pad2 (hex) {
                    while (hex.length < 2) {
                        hex = "0" + hex;
                    }
                    return hex;
                }
                function pad8 (hex) {
                    while (hex.length < 8) {
                        hex = "0" + hex;
                    }
                    return hex;
                }
                hex = "0x" + pad8(hex);
                output += pad2(p0x) + "." + pad2(p1x) + "." + pad2(p2x) + "." + pad2(p3x) +
                    " (" + hex + ")";
            }
            else {
                output += line;
            }
            output += '\n';
        }

        return output;
    });
})
