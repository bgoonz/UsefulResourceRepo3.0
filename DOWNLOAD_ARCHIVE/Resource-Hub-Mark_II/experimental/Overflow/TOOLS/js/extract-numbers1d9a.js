$(function () {
    mkTool(
        'extract-numbers',
        function (text) {
            var matches = text.match(/-?([0-9](\.[0-9]+)?)+/gi);
            var ret = '';
            if (matches) {
                for (var i = 0; i < matches.length; i++) {
                    ret += matches[i];
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
