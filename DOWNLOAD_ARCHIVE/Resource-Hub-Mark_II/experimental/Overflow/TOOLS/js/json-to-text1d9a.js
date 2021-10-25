$(function () {
    mkTool(
        'json-to-text',
        function (text) {
            try {
                var parsed = JSON.parse(text);
            }
            catch (err) {
                throw new Error("Invalid JSON"); // rethrow for exceptionFn
            }

            return jsonToText(parsed);
        },
        {
            exceptionFn : function (err) {
                $('#action-error').show();
                $('#action-error').text(err.message);
            }
        }
    );
});
