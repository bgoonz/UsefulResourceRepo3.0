$(function () {
    mkTool(
        'tsv-swap-columns',
        function (text) {
            var col1 = $('#tsv-swap-columns-col1').val();
            if (!/^\d+$/.test(col1)) {
                throw new Error("Invalid column 1 number");
            }
            var col2 = $('#tsv-swap-columns-col2').val();
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
                    var cols = line.split("\t");
                    var rowCol1 = cols[col1-1];
                    var rowCol2 = cols[col2-1];
                    cols[col1-1] = rowCol2;
                    cols[col2-1] = rowCol1;

                    ret += cols.join("\t") + "\n";
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
