$(function () {
    mkTool('scientific-to-decimal', function (text) {
        var lines = text.split("\n");
        var ret = '';
        for (var i = 0; i < lines.length; i++) {
            var line = lines[i];
            line = line.replace(/\s+/g, '');
            line = line.replace("*10^", "e");
            ret += scientificToDecimal(line) + "\n";
        }
        return ret;
    });
});
