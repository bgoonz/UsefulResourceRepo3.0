$(function () {
    mkTool(
        'hex-to-bcd',
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
                '1001',
                '1010',
                '1011',
                '1100',
                '1101',
                '1110',
                '1111'
            ];

            for (var i = 0; i < lines.length; i++) {
                var line = lines[i];
                line = line.replace(/^\s+/, '');
                line = line.replace(/\s+$/, '');
                if (/([0-9a-f]+)/i.test(line)) {
                    var digits = line.split('');
                    for (var j = 0; j < digits.length; j++) {
                        var index = parseInt(digits[j],16);
                        ret += lookup[index].toString();
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
