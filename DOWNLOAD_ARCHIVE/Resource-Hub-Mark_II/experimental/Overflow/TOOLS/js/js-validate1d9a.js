$(function () {
    mkTool(
        'js-validate',
        function (text) {
            $('#action-error').hide();
            $('#action-success').hide();
            UglifyJS.parse(text);
            $('#action-success').show();
            $('#action-success').text('All good!');
            return text;
        },
        {
            exceptionFn : function (err) {
                if (err instanceof UglifyJS.JS_Parse_Error) {
                    $('#action-error').show();
                    $('#action-error').text(err.message);
                    return;
                }
                else if (err.message) {
                    $('#action-error').show();
                    $('#action-error').text("Failed validating: " + err.message);
                    return;
                }
                else {
                    $('#action-error').show();
                    $('#action-error').text("Something went wrong while validating...");
                    return;
                }
            }
        }
    );
});
