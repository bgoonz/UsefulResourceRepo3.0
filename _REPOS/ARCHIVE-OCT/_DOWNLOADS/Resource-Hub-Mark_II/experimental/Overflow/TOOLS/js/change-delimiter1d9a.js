$(function () {
    mkTool(
        'change-delimiter',
        function (text) {
            text = text.replace("\r\n", "\n");
            var lines = text.split("\n");
            var oldDelim = $('#change-delimiter-old-delimiter').val();
            var newDelim = $('#change-delimiter-new-delimiter').val();

            var ret = '';
            for (var i = 0; i < lines.length; i++) {
                var line = lines[i];
                if (oldDelim == ' ') {
                    var row = line.split(/\s+/g);
                }
                else {
                    var row = line.split(oldDelim);
                }

                row = row.join(newDelim);
                ret += row + '\n';
            }
            return ret;
        }
    );
});
