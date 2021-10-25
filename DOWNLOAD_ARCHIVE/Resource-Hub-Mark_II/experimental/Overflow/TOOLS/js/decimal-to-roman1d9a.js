$(function () {
    mkTool(
        'decimal-to-roman',
        function (text) {
            text = text.replace(/\r\n/g, '\n');
            var lines = text.split('\n');
            var ret = '';

            for (var i = 0; i < lines.length; i++) {
                var line = lines[i];
                if (/[0-9]+/i.test(line)) {
                    ret += toRoman(line);
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
