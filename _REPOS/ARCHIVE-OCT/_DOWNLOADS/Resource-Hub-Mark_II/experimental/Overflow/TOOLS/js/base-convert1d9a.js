$(function () {
    mkTool(
        'base-convert',
        function (text) {
            var baseFrom = $('#base-convert-from').val();
            var baseTo = $('#base-convert-to').val();

            text = text.replace(/\r\n/g, '\n');
            var lines = text.split('\n');
            var ret = '';

            for (var i = 0; i < lines.length; i++) {
                var line = lines[i];
                if (/(\w+)/.test(line)) {
                    var num = new BigNumber(line, baseFrom);
                    ret += num.toString(baseTo);
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
