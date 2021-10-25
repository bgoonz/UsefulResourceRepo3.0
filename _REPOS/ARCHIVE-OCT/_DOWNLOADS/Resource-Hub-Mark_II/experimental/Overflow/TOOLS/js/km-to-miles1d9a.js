$(function () {
    mkTool('km-to-miles', function (text) {
        var lines = text.split("\n");
        var ret = '';
        for (var i = 0; i < lines.length; i++) {
            var line = lines[i];
            var km = parseFloat(line);
            if (isNaN(km)) {
                ret += line + "\n";
            }
            else {
                var miles = km / 1.609344;
                ret += miles.toFixed(4) + "\n";
            }
        }
        return ret;
    });
});
