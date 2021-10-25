$(function () {
    mkTool('f-to-c', function (text) {
        var lines = text.split("\n");
        var ret = '';
        for (var i = 0; i < lines.length; i++) {
            var line = lines[i];
            var f = parseFloat(line);
            if (isNaN(f)) {
                ret += line + "\n";
            }
            else {
                var c = (f - 32)/1.8;
                ret += c.toFixed(4) + "\n";
            }
        }
        return ret;
    });
});
