$(function () {
    mkTool('deg-to-rad', function (text) {
        var lines = text.split("\n");
        var ret = '';
        for (var i = 0; i < lines.length; i++) {
            var line = lines[i];
            var deg = parseFloat(line);
            if (isNaN(deg)) {
                ret += line + "\n";
            }
            else {
                var rad = deg * Math.PI / 180;
                ret += rad.toFixed(4) + "\n";
            }
        }
        return ret;
    });
});
