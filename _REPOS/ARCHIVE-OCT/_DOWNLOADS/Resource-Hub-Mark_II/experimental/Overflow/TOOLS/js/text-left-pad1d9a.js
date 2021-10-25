$(function () {
    mkTool('text-left-pad', function (text) {
        var width = $('#text-left-pad-width').val();
        var symbol = $('#text-left-pad-symbol').val();
        var lines = text.split("\n");
        ret = '';
        for (var i = 0; i < lines.length; i++) {
            var line = lines[i];
            if (line.length >= width) {
                ret += line;
            }
            else {
                var padLength = width - line.length;

                var newLine = line;
                for (var j = 0; j < padLength; j++) {
                    newLine = symbol.toString() + newLine.toString();
                }
                ret += newLine;
            }
            ret += "\n";
        }
        return ret;
    });
});
