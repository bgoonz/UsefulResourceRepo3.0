$(function () {
    mkTool('utc-to-unix', function (text) {
        text.replace(/\r\n/g, '\n');
        var lines = text.split('\n');

        var output = '';
        for (var i = 0; i < lines.length; i++) {
            var line = lines[i];
            if (line.length == 0) {
                output += '\n';
                continue;
            }

            var momentObj = moment.utc(line);
            if (momentObj.isValid()) {
                var converted = momentObj.unix();
                output += converted;
            }
            else {
                output += "Invalid date or couldn't prase it (" + line + ")";
            }
            output += '\n';
        }

        return output;
    });
});
