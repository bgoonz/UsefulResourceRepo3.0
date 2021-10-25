$(function () {
    mkTool('ip-to-dec', function (text) {
        text.replace(/\r\n/g, '\n');
        var lines = text.split('\n');

        var output = '';
        for (var i = 0; i < lines.length; i++) {
            var line = lines[i];
            var match = /(\d+\.\d+\.\d+\.\d+)/.exec(line);
            if (match) {
                var matchText = match[1];
                var ipParts = matchText.split('.');
                var converted = parseInt(ipParts[3]) +
                    parseInt(ipParts[2]) * 256 +
                    parseInt(ipParts[1]) * 256 * 256 +
                    parseInt(ipParts[0]) * 256 * 256 * 256;
                output += converted;
            }
            else {
                output += line;
            }
            output += '\n';
        }

        return output;
    });
});

