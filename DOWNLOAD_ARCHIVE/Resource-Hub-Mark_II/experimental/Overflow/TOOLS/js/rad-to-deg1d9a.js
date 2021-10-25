$(function () {
    mkTool('rad-to-deg', function (text) {
        var lines = text.split("\n");
        var ret = '';
        for (var i = 0; i < lines.length; i++) {
            var line = lines[i];
            var rad = parseFloat(line);
            if (isNaN(rad)) {
                ret += line + "\n";
            }
            else {
                var deg = rad * 180 / Math.PI;
                ret += deg.toFixed(4) + "\n";
            }
        }
        return ret;
    });
});
