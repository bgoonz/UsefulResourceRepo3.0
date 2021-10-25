$(function () {
    mkTool(
        'tsv-change-delimiter',
        function (text) {
            text = text.replace("\r\n", "\n");
            var lines = text.split("\n");
            var delim = $('#tsv-change-delimiter-new-delimiter').val();

            var ret = '';
            for (var i = 0; i < lines.length; i++) {
                var line = lines[i];
                var row = line.split("\t");
                row = row.join(delim);
                ret += row + '\n';
            }
            return ret;
        }
    );
});
