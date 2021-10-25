$(function () {
    mkTool('numbers-to-words', function (text) {
        var lines = text.split("\n");
        var ret = '';
        for (var i = 0; i < lines.length; i++) {
            if (lines[i].length) {
                ret += numberToWords.toWords(lines[i]) + "\n";
            }
            else {
                ret += "\n";
            }
        }
        return ret;
    });
});
