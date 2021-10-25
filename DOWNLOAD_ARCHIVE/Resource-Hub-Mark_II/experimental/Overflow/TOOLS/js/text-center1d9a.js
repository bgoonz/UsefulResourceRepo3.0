$(function () {
    mkTool('text-center', function (text) {
        var width = $('#text-center-width').val();
        var symbol = $('#text-center-pad-symbol').val();
        var lines = text.split("\n");
        ret = '';
        for (var i = 0; i < lines.length; i++) {
            var line = lines[i];
            if (line.length >= width) {
                ret += line;
            }
            else {
                var padLength = width - line.length;

                if (padLength % 2 == 0) {
                    var addStart = padLength/2;
                    var addEnd = padLength/2;
                }
                else {
                    var addStart = parseInt(padLength/2,10);
                    var addEnd = parseInt(padLength/2,10)+1;
                }

                var newLine = '';
                for (var j = 0; j < addStart; j++) {
                    newLine += symbol.toString();
                }
                newLine += line;
                for (var j = 0; j < addEnd; j++) {
                    newLine += symbol.toString();
                }
                ret += newLine;
            }
            ret += "\n";
        }
        return ret;
    });
});
