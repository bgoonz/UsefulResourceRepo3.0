$(function () {
    mkTool(
        'html-minify',
        function (text) {
            return minify(text, { collapseWhitespace : true });
        },
        {
            exceptionFn : function (err) {
                $('#action-error').show();
                $('#action-error').text(err);
            }
        }
    );
});
