$(function () {
    mkTool(
        'gray-to-dec',
        function (text) {
            text = text.replace(/\r\n/g, '\n');
            var lines = text.split('\n');
            var ret = '';

            for (var i = 0; i < lines.length; i++) {
                var line = lines[i];
                line = line.replace(/^\s+/, '');
                line = line.replace(/\s+$/, '');
                if (/[01]+/.test(line)) {
                    var num = parseInt(line, 2);
                    for (var mask = num >> 1; mask != 0; mask = mask >> 1) {
                        num = num ^ mask;
                    }
                    ret += num.toString();
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
