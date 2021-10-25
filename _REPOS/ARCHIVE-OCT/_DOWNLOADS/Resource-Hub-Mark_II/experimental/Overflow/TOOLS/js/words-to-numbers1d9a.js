$(function () {
    mkTool(
        'words-to-numbers',
        function (text) {
            text = text.replace(/,/g, ' ');
            var lines = text.split("\n");
            var ret = '';
            for (var i = 0; i < lines.length; i++) {
                if (lines[i].length) {
                    ret += text2num(lines[i]) + "\n";
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
                $('#action-error').text(err);
            }
        }
    );
});
