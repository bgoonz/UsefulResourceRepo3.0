$(function () {
    mkTool('text-right-align', function (text) {
        var lines = text.split("\n");
        var longestLine = 0;
        for (var i = 0; i < lines.length; i++) {
            if (lines[i].length > longestLine) {
                longestLine = lines[i].length;
            }
        }

        ret = '';
        for (var i = 0; i < lines.length; i++) {
            var line = lines[i];
            var padLength = longestLine - line.length;

            var newLine = line;
            for (var j = 0; j < padLength; j++) {
                newLine = ' ' + newLine.toString();
            }
            ret += newLine + "\n";
        }
        return ret;
    });
});
