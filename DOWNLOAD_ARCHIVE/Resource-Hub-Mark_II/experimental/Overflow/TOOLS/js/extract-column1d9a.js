$(function () {
    mkTool(
        'extract-column',
        function (text) {
            var col = $('#extract-column-number').val();
            var delim = $('#extract-column-delimiter').val();
            if (!/^\d+$/.test(col)) {
                throw new Error("Invalid column number");
            }
            text = text.replace("\r\n", "\n");
            var lines = text.split("\n");
            var ret = '';
            for (var i = 0; i < lines.length; i++) {
                var line = lines[i];
                if (line.length) {
                    if (delim == ' ') {
                        var cols = line.split(/\s+/g);
                    }
                    else {
                        var cols = line.split(delim);
                    }
                    ret += cols[col-1] + "\n";
                }
                else {
                    ret += "\n";
                }
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
