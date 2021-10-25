$(function () {
    mkTool('unix-to-utc', function (text) {
        text.replace(/\r\n/g, '\n');
        var lines = text.split('\n');

        var output = '';
        for (var i = 0; i < lines.length; i++) {
            var line = lines[i];
            var match = /(\d+)/.exec(line);
            if (match) {
                var matchText = match[1];
                var converted = new Date(matchText * 1000);
                converted = converted.toUTCString();
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
