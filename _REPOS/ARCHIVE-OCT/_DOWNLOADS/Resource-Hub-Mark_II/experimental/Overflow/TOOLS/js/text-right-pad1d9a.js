$(function () {
    mkTool('text-right-pad', function (text) {
        var width = $('#text-right-pad-width').val();
        var symbol = $('#text-right-pad-symbol').val();
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
                    newLine += symbol.toString();
                }
                ret += newLine;
            }
            ret += "\n";
        }
        return ret;
    });
});
