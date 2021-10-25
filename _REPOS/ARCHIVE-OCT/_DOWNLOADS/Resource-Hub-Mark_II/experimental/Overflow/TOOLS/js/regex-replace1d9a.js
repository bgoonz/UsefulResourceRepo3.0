$(function () {
    mkTool(
        'regex-replace',
        function (text) {
            var regex = $('#regex-replace-regex').val();
            var regexParts = regex.match(/^\/(.*?)\/([gimuy]*)$/);
            if (regexParts) {
                var r = new RegExp(regexParts[1], regexParts[2]);
            } else {
                var r = new RegExp(regex);
            }
            var replaceTo = $('#regex-replace-to').val();
            text = text.replace(r, replaceTo);
            return text;
        },
        {
            exceptionFn : function (err) {
                $('#action-error').show();
                $('#action-error').text(err);
            }
        }
    );
});
