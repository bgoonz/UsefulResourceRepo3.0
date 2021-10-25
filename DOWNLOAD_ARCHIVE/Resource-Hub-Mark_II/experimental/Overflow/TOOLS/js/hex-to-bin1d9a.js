$(function () {
    mkTool(
        'hex-to-bin',
        function (text) {
            text = text.replace(/\r\n/g, '\n');
            var lines = text.split('\n');
            var ret = '';

            for (var i = 0; i < lines.length; i++) {
                var line = lines[i];
                if (/(\w+)/.test(line)) {
                    var num = new BigNumber(line, 16);
                    var numBin = num.toString(2);
                    while (numBin.length < 8) {
                        numBin = "0" + numBin;
                    }
                    ret += numBin;
                }
                else {
                    ret += line;
                }
                ret += '\n';
            }

            return ret;
        }
    );
});
