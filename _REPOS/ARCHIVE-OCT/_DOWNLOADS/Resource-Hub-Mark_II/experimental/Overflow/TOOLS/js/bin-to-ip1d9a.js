$(function () {
    mkTool('bin-to-ip', function (text) {
        text.replace(/\r\n/g, '\n');
        var lines = text.split('\n');

        var output = '';
        for (var i = 0; i < lines.length; i++) {
            var line = lines[i];
            if (line.indexOf('.') > 0) {
                var match = /([01]+\.[01]+\.[01]+\.[01]+)/.exec(line);
                if (match) {
                    var matchText = match[1];
                    var ipParts = matchText.split('.');
                    var p0 = parseInt(ipParts[0],2);
                    var p1 = parseInt(ipParts[1],2);
                    var p2 = parseInt(ipParts[2],2);
                    var p3 = parseInt(ipParts[3],2);
                    output += p0 + "." + p1 + "." + p2 + "." + p3;
                }
                else {
                    output += line;
                }
            }
            else {
                var match = /([01]{8})([01]{8})([01]{8})([01]{8})/.exec(line);
                if (match) {
                    var p0 = parseInt(match[1],2);
                    var p1 = parseInt(match[2],2);
                    var p2 = parseInt(match[3],2);
                    var p3 = parseInt(match[4],2);

                    output += p0 + "." + p1 + "." + p2 + "." + p3;
                }
                else {
                    output += line;
                }
            }
            output += '\n';
        }

        return output;
    });
});

