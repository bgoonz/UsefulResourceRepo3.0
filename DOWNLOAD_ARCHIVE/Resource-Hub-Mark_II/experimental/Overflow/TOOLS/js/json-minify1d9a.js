$(function () {
    mkTool(
        'json-minify',
        function (text) {
            try {
                JSON.parse(text);
            }
            catch (err) {
                throw new Error("Invalid JSON"); // re-throw to exceptionFn handler
            }
            // https://github.com/getify/JSON.minify/issues/40
            var minified = JSON.minify(text + "\n");
            return minified;
        },
        {
            exceptionFn : function (err) {
                $('#action-error').show();
                $('#action-error').text(err.message);
            }
        }
    );
});
