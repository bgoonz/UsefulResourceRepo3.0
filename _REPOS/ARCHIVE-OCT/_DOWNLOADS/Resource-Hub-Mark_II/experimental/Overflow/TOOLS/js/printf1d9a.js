$(function () {
    mkTool(
        'printf',
        function (text) {
            var format = $('#printf-format').val();
            text = text.replace(/\r\n/g, '\n');
            var lines = text.split('\n');
            var ret = '';
            for (var i = 0; i < lines.length; i++) {
                if (lines[i].length) {
                    var lineArgs = lines[i].split(/\s+/);
                    var fmtArgs = lineArgs;
                    fmtArgs.unshift(format);
                    try {
                        var formattedLine = sprintf.apply(null, fmtArgs);
                        ret += formattedLine + '\n';
                    }
                    catch (e) {
                        throw new Error(e.toString() + " (line " + (i+1) + ")");
                    }
                }
                else {
                    ret += '\n';
                }
            }
            return ret;
        },
        {
            exceptionFn : function (err) {
                $('#action-error').show();
                $('#action-error').text(err);
            }
        }
    );
});
