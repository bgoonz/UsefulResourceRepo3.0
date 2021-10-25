$(function () {
    mkTool('round-numbers-down', function (text) {
        var precision = $('#round-numbers-down-precision').val();
        var lines = text.split('\n');
        var ret = '';
        for (i = 0; i < lines.length; i++) {
            var line = lines[i];
            if (!/\d/.test(line)) {
                ret += line + "\n";
                continue;
            }
            if (precision == 0) {
                ret += Math.floor(line) + "\n";
            }
            else {
                BigNumber.config({ ROUNDING_MODE: BigNumber.ROUND_DOWN });
                var num = new BigNumber(line);
                ret += num.round(precision).toString() + "\n";
            }
        }
        return ret;
    });
});
