$(function () {
    mkTool(
        'hex-to-gray',
        function (text) {
            text = text.replace(/\r\n/g, '\n');
            var lines = text.split('\n');
            var ret = '';

            for (var i = 0; i < lines.length; i++) {
                var line = lines[i];
                line = line.replace(/^\s+/, '');
                line = line.replace(/\s+$/, '');
                line = line.replace(/^0x/i, '');
                if (/[0-9a-f]/i.test(line)) {
                    var num = parseInt(line, 16);
                    var gray = (num ^ (num >> 1)).toString(2);
                    while (gray.length < 8) {
                        gray = "0" + gray;
                    }
                    ret += gray;
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
