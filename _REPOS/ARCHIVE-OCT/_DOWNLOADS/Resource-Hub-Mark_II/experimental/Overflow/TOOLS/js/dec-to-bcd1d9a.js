$(function () {
    mkTool(
        'dec-to-bcd',
        function (text) {
            text = text.replace(/\r\n/g, '\n');
            var lines = text.split('\n');
            var ret = '';

            var lookup = [
                '0000',
                '0001',
                '0010',
                '0011',
                '0100',
                '0101',
                '0110',
                '0111',
                '1000',
                '1001'
            ];

            for (var i = 0; i < lines.length; i++) {
                var line = lines[i];
                line = line.replace(/^\s+/, '');
                line = line.replace(/\s+$/, '');
                if (/(\d+)/.test(line)) {
                    var digits = line.split('');
                    for (var j = 0; j < digits.length; j++) {
                        ret += lookup[digits[j]].toString();
                    }
                }
                else {
                    ret += line;
                }
                ret += '\n';
            }

            return ret;
        },
        {
            exceptionFn : function (err) {
                $('#action-error').show();
                $('#action-error').text(err.message);
            }
        }
    );
});
