$(function () {
    mkTool(
        'swap-columns',
        function (text) {
            var col1 = $('#swap-columns-col1').val();
            var col2 = $('#swap-columns-col2').val();
            var delim = $('#swap-columns-delimiter').val();
            if (!/^\d+$/.test(col1)) {
                throw new Error("Invalid column 1 number");
            }
            if (!/^\d+$/.test(col2)) {
                throw new Error("Invalid column 2 number");
            }
            if (col1 == col2) {
                throw new Error("Can't swap the same column");
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
                    var rowCol1 = cols[col1-1];
                    var rowCol2 = cols[col2-1];
                    cols[col1-1] = rowCol2;
                    cols[col2-1] = rowCol1;
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
