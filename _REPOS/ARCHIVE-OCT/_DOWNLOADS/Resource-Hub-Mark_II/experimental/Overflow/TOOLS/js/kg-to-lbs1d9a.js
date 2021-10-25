$(function () {
    mkTool('kg-to-lbs', function (text) {
        var lines = text.split("\n");
        var ret = '';
        for (var i = 0; i < lines.length; i++) {
            var line = lines[i];
            var kg = parseFloat(line);
            if (isNaN(kg)) {
                ret += line + "\n";
            }
            else {
                var lbs = kg * 2.2046226218;
                ret += lbs.toFixed(4) + "\n";
            }
        }
        return ret;
    });
});
