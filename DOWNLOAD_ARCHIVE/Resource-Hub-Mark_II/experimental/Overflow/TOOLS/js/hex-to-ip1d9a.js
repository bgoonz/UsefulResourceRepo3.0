$(function () {
    mkTool('hex-to-ip', function (text) {
        text.replace(/\r\n/g, '\n');
        var lines = text.split('\n');

        var output = '';
        for (var i = 0; i < lines.length; i++) {
            var line = lines[i];
            var line = line.replace(/0x/gi, '');
            if (line.indexOf('.') > 0) {
                var match = /([0-f]+\.[0-f]+\.[0-f]+\.[0-f]+)/i.exec(line);
                if (match) {
                    var matchText = match[1];
                    var ipParts = matchText.split('.');
                    var p0 = parseInt(ipParts[0],16);
                    var p1 = parseInt(ipParts[1],16);
                    var p2 = parseInt(ipParts[2],16);
                    var p3 = parseInt(ipParts[3],16);
                    output += p0 + "." + p1 + "." + p2 + "." + p3;
                }
                else {
                    output += line;
                }
            }
            else {
                var match = /([0-f]+)/i.exec(line);
                if (match) {
                    var matchText = parseInt(match[1],16);
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
})
