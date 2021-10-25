$(function () {
    mkTool(
        'bin-to-dec',
        function (text) {
            text = text.replace(/\r\n/g, '\n');
            var lines = text.split('\n');
            var ret = '';

            for (var i = 0; i < lines.length; i++) {
                var line = lines[i];
                if (/(\w+)/.test(line)) {
                    var num = new BigNumber(line, 2);
                    ret += num.toString(10);
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
