$(function () {
    mkTool(
        'tsv-insert-column',
        function (text) {
            var col = $('#tsv-insert-column-number').val();
            if (!/^-?\d+$/.test(col)) {
                throw new Error("Invalid column number");
            }
            var newCol = $('#tsv-insert-column-new-column').val();

            text = text.replace("\r\n", "\n");
            var lines = text.split("\n");

            var ret = '';

            if (newCol.length == 0) {
                // insert an empty column
                for (var i = 0; i < lines.length; i++) {
                    var line = lines[i];
                    var cols = line.split("\t");
                    if (col == -1) {
                        var colCount = cols.length;
                        cols.splice(colCount, 0, '');
                    }
                    else {
                        cols.splice(col-1, 0, '');
                    }
                    ret += cols.join('\t') + "\n";
                }
            }
            else {
                // insert column
                var newColLines = newCol.split('\n');
                if (newColLines.length < lines.length) {
                    $('#action-error').show();
                    $('#action-error').text('The new column has less rows than the existing TSV. Inserting anyway.');
                    for (var i = 0; i < lines.length-newColLines.length; i++) {
                        newColLines.push('');
                    }
                }
                if (newColLines.length > lines.length) {
                    $('#action-error').show();
                    $('#action-error').text('The new column has more rows than the existing TSV. Inserting anyway.');
                    newColLines.splice(lines.length,newColLines.length);
                }
                for (var i = 0; i < lines.length; i++) {
                    var line = lines[i];
                    var cols = line.split("\t");
                    if (col == -1) {
                        var colCount = cols.length;
                        cols.splice(colCount, 0, newColLines[i]);
                    }
                    else {
                        cols.splice(col-1, 0, newColLines[i]);
                    }
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
