$(function () {
    mkTool('ip-to-oct', function (text) {
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
                var p3o = p3.toString(8);
                var p2 = parseInt(ipParts[2],10);
                var p2o = p2.toString(8);
                var p1 = parseInt(ipParts[1],10);
                var p1o = p1.toString(8);
                var p0 = parseInt(ipParts[0],10);
                var p0o = p0.toString(8);
                var dec = p3 + p2 * 256 + p1 * 256 * 256 + p0 * 256 * 256 * 256;
                var oct = dec.toString(8);
                if (oct[0] != "0") {
                    oct = "0" + oct;
                }
                function pad4 (oct) {
                    while (oct.length < 4) {
                        oct = "0" + oct;
                    }
                    return oct;
                }
                output += pad4(p0o) + "." + pad4(p1o) + "." + pad4(p2o) + "." + pad4(p3o) +
                    " (" + oct + ")";
            }
            else {
                output += line;
            }
            output += '\n';
        }

        return output;
    });
});
