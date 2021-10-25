$(function () {
    mkTool(
        'text-rotate',
        function (text) {
            var lines = text.split('\n');
            var direction = $('#text-rotate-direction').val();

            for (var i = 0; i < lines.length; i++) {
                var line = lines[i];
                if (line.length == 0) {
                    continue;
                }
                if (direction == "left") {
                    var leftChar = line[0];
                    line = line.substr(1) + leftChar;
                    lines[i] = line;
                }
                else if (direction == "right") {
                    var rightChar = line[line.length-1];
                    line = rightChar + line.substr(0,line.length-1);
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
