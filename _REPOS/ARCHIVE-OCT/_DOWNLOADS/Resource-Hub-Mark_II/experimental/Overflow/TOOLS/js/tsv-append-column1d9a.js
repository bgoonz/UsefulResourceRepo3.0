$(function () {
    mkTool(
        'tsv-append-column',
        function (text) {
            var newCol = $('#tsv-append-column-new-column').val();

            text = text.replace("\r\n", "\n");
            var lines = text.split("\n");

            var ret = '';

            if (newCol.length == 0) {
                // append an empty column
                for (var i = 0; i < lines.length; i++) {
                    var line = lines[i];
                    var cols = line.split("\t");
                    cols.push('');
                    ret += cols.join('\t') + "\n";
                }
            }
            else {
                // append column
                var newColLines = newCol.split('\n');
                if (newColLines.length < lines.length) {
                    $('#action-error').show();
                    $('#action-error').text('The new column has less rows than the existing TSV. Appending anyway.');
                    for (var i = 0; i < lines.length-newColLines.length; i++) {
                        newColLines.push('');
                    }
                }
                if (newColLines.length > lines.length) {
                    $('#action-error').show();
                    $('#action-error').text('The new column has more rows than the existing TSV. Appending anyway.');
                    newColLines.splice(lines.length,newColLines.length);
                }
                for (var i = 0; i < lines.length; i++) {
                    var line = lines[i];
                    var cols = line.split("\t");
                    cols.push(newColLines[i]);
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
