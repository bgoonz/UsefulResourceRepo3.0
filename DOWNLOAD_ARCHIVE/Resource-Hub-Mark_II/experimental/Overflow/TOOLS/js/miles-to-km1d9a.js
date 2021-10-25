$(function () {
    mkTool('miles-to-km', function (text) {
        var lines = text.split("\n");
        var ret = '';
        for (var i = 0; i < lines.length; i++) {
            var line = lines[i];
            var miles = parseFloat(line);
            if (isNaN(miles)) {
                ret += line + "\n";
            }
            else {
                var km = miles * 1.609344;
                ret += km.toFixed(4) + "\n";
            }
        }
        return ret;
    });
});
