$(function () {
    mkTool(
        'regex-extract-matches',
        function (text) {
            var regex = $('#regex-extract-matches-regex').val();

            var regexParts = regex.match(/^\/(.*?)\/([gimuy]*)$/);
            if (regexParts) {
                var r = new RegExp(regexParts[1], regexParts[2]);
            } else {
                var r = new RegExp(regex);
            }
            var matches = text.match(r);
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
