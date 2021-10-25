$(function () {
    mkTool(
        'binary-not',
        function (text) {
            var lines = text.split('\n');

            var output = '';
            for (var i = 0; i < lines.length; i++) {
                var line = lines[i];
                for (var j = 0; j < line.length; j++) {
                    if (line[j] == 0) {
                        output += "1";
                    }
                    else if (line[j] == 1) {
                        output += "0";
                    }
                }
                output += "\n";
            }

            return output;
        },
        {
            exceptionFn : function (err) {
                $('#action-error').show();
                $('#action-error').text(err.message);
            }
        }
    );
});
