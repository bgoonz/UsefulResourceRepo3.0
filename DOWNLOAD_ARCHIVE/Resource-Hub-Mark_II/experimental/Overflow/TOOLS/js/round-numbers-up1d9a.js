$(function () {
    mkTool('round-numbers-up', function (text) {
        var precision = $('#round-numbers-up-precision').val();
        var lines = text.split('\n');
        var ret = '';
        for (i = 0; i < lines.length; i++) {
            var line = lines[i];
            if (!/\d/.test(line)) {
                ret += line + "\n";
                continue;
            }
            if (precision == 0) {
                ret += Math.ceil(line) + "\n";
            }
            else {
                BigNumber.config({ ROUNDING_MODE: BigNumber.ROUND_UP });
                var num = new BigNumber(line);
                ret += num.round(precision).toString() + "\n";
            }
        }
        return ret;
    });
});
