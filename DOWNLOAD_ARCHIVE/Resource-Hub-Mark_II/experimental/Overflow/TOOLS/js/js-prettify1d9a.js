$(function () {
    mkTool(
        'js-prettify',
        function (text) {
            var ast = UglifyJS.parse(text);
            ast.figure_out_scope();
            var prettified = ast.print_to_string({ beautify : true });
            return prettified;
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
                    $('#action-error').text("Failed prettifying: " + err.message);
                    return;
                }
                else {
                    $('#action-error').show();
                    $('#action-error').text("Something went wrong while prettifying...");
                    return;
                }
            }
        }
    );
});
