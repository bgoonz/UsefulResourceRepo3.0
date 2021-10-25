$(function () {
    mkTool(
        'bcrypt-check',
        function (text, asyncResultFn) {
            var lines = text.split("\n");
            var bcrypt = new bCrypt;
            var pass = $('#bcrypt-check-pass').val();
            for (var i = 0; i < lines.length; i++) {
                var line = lines[i];
                if (line.length == 0) {
                    continue;
                }
                (function () {
                    var j = i;
                    bcrypt.checkpw(pass, line, function (result) {
                        asyncResultFn(line, j, result);
                    });
                })();
            }
        },
        {
            asyncResultFn : function (line, lineNr, result) {
                var text = $('#bcrypt-check-text').val();
                var lines = text.split("\n");

                var valid = false;
                if (result == 1) {
                    valid = true;
                }
                if (valid) {
                    lines[lineNr] = "Valid: " + lines[lineNr];
                }
                else {
                    lines[lineNr] = "Invalid: " + lines[lineNr];
                }
                $('#bcrypt-check-text').val(lines.join("\n"));
            },
            exceptionFn : function (err) {
                $('#action-error').show();
                $('#action-error').text(err);
            }
        }
    );
});
