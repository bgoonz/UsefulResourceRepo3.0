$(function () {
    mkTool('dec-to-ip', function (text) {
        text.replace(/\r\n/g, '\n');
        var lines = text.split('\n');

        var output = '';
        for (var i = 0; i < lines.length; i++) {
            var line = lines[i];
            var match = /(\d+)/.exec(line);
            if (match) {
                var matchText = match[1];
                var converted = ((matchText>>24)&0xff) + '.' +
                    ((matchText>>16)&0xff) + '.' +
                    ((matchText>>8)&0xff) + '.' + 
                    (matchText&0xff);
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
