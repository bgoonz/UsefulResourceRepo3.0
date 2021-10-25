$(function () {
    mkTool(
        'json-to-tsv',
        function (text) {
            var parsed = JSON.parse(text);
            return jsonToTsv(parsed);
        },
        {
            exceptionFn : function (err) {
                $('#action-error').show();
                $('#action-error').text(err);
            }
        }
    );
});
