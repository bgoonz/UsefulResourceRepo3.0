$(function () {
    mkTool('c-to-f', function (text) {
        var lines = text.split("\n");
        var ret = '';
        for (var i = 0; i < lines.length; i++) {
            var line = lines[i];
            var c = parseFloat(line);
            if (isNaN(c)) {
                ret += line + "\n";
            }
            else {
                var f = c * 1.8 + 32;
                ret += f.toFixed(4) + "\n";
            }
        }
        return ret;
    });
});
