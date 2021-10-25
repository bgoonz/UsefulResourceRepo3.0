$(function () {
    mkTool('lbs-to-kg', function (text) {
        var lines = text.split("\n");
        var ret = '';
        for (var i = 0; i < lines.length; i++) {
            var line = lines[i];
            var lbs = parseFloat(line);
            if (isNaN(lbs)) {
                lbs += line + "\n";
            }
            else {
                var kg = lbs / 2.2046226218;
                ret += kg.toFixed(4) + "\n";
            }
        }
        return ret;
    });
});
