$(function () {
    mkTool(
        'replace-column',
        function (text) {
            var col = $('#replace-column-number').val();
            var delim = $('#replace-column-delimiter').val();
            if (!/^\d+$/.test(col)) {
                throw new Error("Invalid column number");
            }
            var newCol = $('#replace-column-new-column').val();

            text = text.replace("\r\n", "\n");
            var lines = text.split("\n");
            var ret = '';
            if (newCol.length == 0) {
                // delete column
                for (var i = 0; i < lines.length; i++) {
                    var line = lines[i];
                    var cols = line.split(delim);
                    cols.splice(cols-1,1);
                    ret += cols.join(delim) + "\n";
                }
            }
            else {
                // replace column
                var newColLines = newCol.split('\n');
                if (newColLines.length < lines.length) {
                    $('#action-error').show();
                    $('#action-error').text('The new column has less rows than the existing TSV. Replacing anyway.');
                    for (var i = 0; i < lines.length-newColLines.length; i++) {
                        newColLines.push('');
                    }
                }
                if (newColLines.length > lines.length) {
                    $('#action-error').show();
                    $('#action-error').text('The new column has more rows than the existing TSV. Replacing anyway.');
                    newColLines.splice(lines.length,newColLines.length);
                }
                for (var i = 0; i < lines.length; i++) {
                    var line = lines[i];
                    var cols = line.split(delim);
                    cols[col-1] = newColLines[i];
                    ret += cols.join(delim) + "\n";
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
