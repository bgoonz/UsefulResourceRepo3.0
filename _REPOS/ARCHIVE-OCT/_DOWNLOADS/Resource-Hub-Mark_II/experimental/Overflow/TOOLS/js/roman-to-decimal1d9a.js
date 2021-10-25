$(function () {
    mkTool(
        'roman-to-decimal',
        function (text) {
            text = text.replace(/\r\n/g, '\n');
            var lines = text.split('\n');
            var ret = '';

            for (var i = 0; i < lines.length; i++) {
                var line = lines[i];
                if (/[ivxlcdm]+/i.test(line)) {
                    ret += fromRoman(line);
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
