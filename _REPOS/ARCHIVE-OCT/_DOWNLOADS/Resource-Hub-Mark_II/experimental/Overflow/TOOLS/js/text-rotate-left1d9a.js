$(function () {
    mkTool(
        'text-rotate-left',
        function (text) {
            var lines = text.split('\n');

            for (var i = 0; i < lines.length; i++) {
                var line = lines[i];
                if (line.length == 0) {
                    continue;
                }
                var leftBit = line[0];
                line = line.substr(1) + leftBit;
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
