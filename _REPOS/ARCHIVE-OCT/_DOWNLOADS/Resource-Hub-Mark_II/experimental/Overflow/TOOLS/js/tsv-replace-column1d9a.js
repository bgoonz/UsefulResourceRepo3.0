$(function () {
    mkTool(
        'tsv-replace-column',
        function (text) {
            var col = $('#tsv-replace-column-number').val();
            if (!/^\d+$/.test(col)) {
                throw new Error("Invalid column number");
            }
            var newCol = $('#tsv-replace-column-new-column').val();

            text = text.replace("\r\n", "\n");
            var lines = text.split("\n");

            var ret = '';

            if (newCol.length == 0) {
                // delete column
                for (var i = 0; i < lines.length; i++) {
                    var line = lines[i];
                    var cols = line.split("\t");
                    cols.splice(cols-1,1);
                    ret += cols.join('\t') + "\n";
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
                    var cols = line.split("\t");
                    cols[col-1] = newColLines[i];
                    ret += cols.join('\t') + "\n";
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
