$(function () {
    mkTool(
        'json-validate',
        function (text) {
            $('#action-error').hide();
            $('#action-success').hide();
            JSON.parse(text);
            $('#action-success').show();
            $('#action-success').text('All good!');
            return text;
        },
        {
            exceptionFn : function (err) {
                $('#action-error').show();
                $('#action-error').text(err.toString());
            }
        }
    );
});
