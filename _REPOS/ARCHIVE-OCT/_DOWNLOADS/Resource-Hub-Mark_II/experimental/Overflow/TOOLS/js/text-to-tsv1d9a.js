$(function () {
    mkTool(
        'text-to-tsv',
        function (text) {
            text = text.replace("\r\n", "\n");
            var lines = text.split("\n");
            var ret = '';
            for (var i = 0; i < lines.length; i++) {
                var cols = lines[i].split(/\s+/g);
                ret += cols.join('\t') + "\n";
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
