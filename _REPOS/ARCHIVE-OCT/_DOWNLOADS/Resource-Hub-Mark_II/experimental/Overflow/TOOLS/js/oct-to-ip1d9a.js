$(function () {
    mkTool('oct-to-ip', function (text) {
        text.replace(/\r\n/g, '\n');
        var lines = text.split('\n');

        var output = '';
        for (var i = 0; i < lines.length; i++) {
            var line = lines[i];
            if (line.indexOf('.') > 0) {
                var match = /([0-7]+\.[0-7]+\.[0-7]+\.[0-7]+)/.exec(line);
                if (match) {
                    var matchText = match[1];
                    var ipParts = matchText.split('.');
                    var p0 = parseInt(ipParts[0],8);
                    var p1 = parseInt(ipParts[1],8);
                    var p2 = parseInt(ipParts[2],8);
                    var p3 = parseInt(ipParts[3],8);
                    output += p0 + "." + p1 + "." + p2 + "." + p3;
                }
                else {
                    output += line;
                }
            }
            else {
                var match = /([0-7]+)/.exec(line);
                if (match) {
                    var matchText = parseInt(match[1],8);
                    var converted = ((matchText>>24)&0xff) + '.' +
                        ((matchText>>16)&0xff) + '.' +
                        ((matchText>>8)&0xff) + '.' + 
                        (matchText&0xff);
                    output += converted;
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

