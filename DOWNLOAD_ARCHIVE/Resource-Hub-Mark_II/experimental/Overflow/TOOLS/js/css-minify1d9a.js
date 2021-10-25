$(function () {
    mkTool(
        'css-minify',
        function (text) {
            var minified = YAHOO.compressor.cssmin(text)
            return minified;
        },
        {
            exceptionFn : function (err) {
                if (err.message) {
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
