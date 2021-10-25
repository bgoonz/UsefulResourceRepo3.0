$(function () {
    mkTool(
        'delete-column',
        function (text) {
            var col = $('#delete-column-number').val();
            var delim = $('#delete-column-delimiter').val();
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
                    cols.splice(col-1,1);
                    ret += cols.join(delim) + "\n";
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
