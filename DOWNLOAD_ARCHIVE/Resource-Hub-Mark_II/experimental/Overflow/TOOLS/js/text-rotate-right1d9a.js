$(function () {
    mkTool(
        'text-rotate-right',
        function (text) {
            var lines = text.split('\n');

            for (var i = 0; i < lines.length; i++) {
                var line = lines[i];
                if (line.length == 0) {
                    continue;
                }
                var rightBit = line[line.length-1];
                line = rightBit + line.substr(0,line.length-1);
                lines[i] = line;
            }

            return lines.join('\n');
        },
        {
            exceptionFn : function (err) {
                $('#action-error').show();
                $('#action-error').text(err.message);
            }
        }
    );
});
