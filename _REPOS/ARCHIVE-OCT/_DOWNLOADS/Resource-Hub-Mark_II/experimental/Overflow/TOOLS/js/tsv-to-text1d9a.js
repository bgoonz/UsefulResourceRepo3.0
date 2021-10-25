$(function () {
    mkTool(
        'tsv-to-text',
        function (text) {
            text = text.replace("\r\n", "\n");
            var lines = text.split("\n");
            var ret = '';
            var maxColLens = [];
            for (var row = 0; row < lines.length; row++) {
                var cols = lines[row].split('\t');
                for (var col = 0; col < cols.length; col++) {
                    if (maxColLens[col] === undefined) {
                        maxColLens[col] = 0;
                    }
                    if (cols[col].length > maxColLens[col]) {
                        maxColLens[col] = cols[col].length;
                    }
                }
            }
            for (var row = 0; row < lines.length; row++) {
                var cols = lines[row].split('\t');
                for (var col = 0; col < cols.length; col++) {
                    if (cols[col].length < maxColLens[col]) {
                        var extraSpaceCount = maxColLens[col] - cols[col].length;
                        for (var i = 0; i < extraSpaceCount; i++) {
                            cols[col] += ' ';
                        }
                    }
                    ret += cols[col] + ' ';
                }
                ret += "\n";
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
