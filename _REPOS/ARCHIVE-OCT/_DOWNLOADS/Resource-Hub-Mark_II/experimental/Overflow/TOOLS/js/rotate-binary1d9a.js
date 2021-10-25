$(function () {
    mkTool(
        'rotate-binary',
        function (text) {
            var lines = text.split('\n');
            var direction = $('#rotate-binary-direction').val();

            for (var i = 0; i < lines.length; i++) {
                var line = lines[i];
                if (line.length == 0) {
                    continue;
                }
                if (direction == "left") {
                    var leftBit = line[0];
                    line = line.substr(1) + leftBit;
                    lines[i] = line;
                }
                else if (direction == "right") {
                    var rightBit = line[line.length-1];
                    line = rightBit + line.substr(0,line.length-1);
                    lines[i] = line;
                }
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
