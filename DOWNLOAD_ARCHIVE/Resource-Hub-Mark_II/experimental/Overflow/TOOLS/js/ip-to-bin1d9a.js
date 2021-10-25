$(function () {
    mkTool('ip-to-bin', function (text) {
        text.replace(/\r\n/g, '\n');
        var lines = text.split('\n');

        var output = '';
        for (var i = 0; i < lines.length; i++) {
            var line = lines[i];
            var match = /(\d+\.\d+\.\d+\.\d+)/.exec(line);
            if (match) {
                var matchText = match[1];
                var ipParts = matchText.split('.');
                var p3 = parseInt(ipParts[3],10).toString(2);
                var p2 = parseInt(ipParts[2],10).toString(2);
                var p1 = parseInt(ipParts[1],10).toString(2);
                var p0 = parseInt(ipParts[0],10).toString(2);
                function pad8 (bin) {
                    while (bin.length < 8) {
                        bin = "0" + bin;
                    }
                    return bin;
                }
                output += pad8(p0) + "." + pad8(p1) + "." + pad8(p2) + "." + pad8(p3);
            }
            else {
                output += line;
            }
            output += '\n';
        }

        return output;
    });
});

