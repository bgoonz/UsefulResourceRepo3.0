$(function () {
    mkTool(
        'js-minify',
        function (text) {
            var ast = UglifyJS.parse(text);
            ast.figure_out_scope();
            var compressor = UglifyJS.Compressor();
            ast = ast.transform(compressor);
            var minified = ast.print_to_string();
            return minified;
        },
        {
            exceptionFn : function (err) {
                if (err instanceof UglifyJS.JS_Parse_Error) {
                    $('#action-error').show();
                    $('#action-error').text(err.message);
                    return;
                }
                else if (e.message) {
                    $('#action-error').show();
                    $('#action-error').text("Failed compressing: " + err.message);
                    return;
                }
                else {
                    $('#action-error').show();
                    $('#action-error').text("Something went wrong while minifying...");
                    return;
                }
            }
        }
    );
});
