$(function () {
    mkTool(
        'bcd-to-dec',
        function (text) {
            text = text.replace(/\r\n/g, '\n');
            var lines = text.split('\n');
            var ret = '';

            var lookup = {
                '0000' : 0,
                '0001' : 1, 
                '0010' : 2,
                '0011' : 3,
                '0100' : 4,
                '0101' : 5, 
                '0110' : 6,
                '0111' : 7,
                '1000' : 8,
                '1001' : 9
            };

            for (var i = 0; i < lines.length; i++) {
                var line = lines[i];
                line = line.replace(/^\s+/, '');
                line = line.replace(/\s+$/, '');
                line = line.replace(/\s+/g, '');
                if (line.length % 4 != 0) {
                    throw new Error("Input binary isn't grouped by 4 bits.");
                }
                if (/[01]+/.test(line)) {
                    var m = line.match(/[01]{4}/g);
                    if (m) {
                        for (var j = 0; j < m.length; j++) {
                            ret += lookup[m[j]].toString();
                        }
                    }
                    else {
                        ret += line;
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
