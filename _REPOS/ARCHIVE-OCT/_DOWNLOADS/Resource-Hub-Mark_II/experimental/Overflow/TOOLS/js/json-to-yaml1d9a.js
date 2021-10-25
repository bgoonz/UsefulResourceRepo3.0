$(function () {
    mkTool(
        'json-to-yaml',
        function (text) {
            try {
                var parsed = JSON.parse(text);
            }
            catch (err) {
                throw new Error("Invalid JSON"); // rethrow for exceptionFn
            }

            return YAML.stringify(parsed);
        },
        {
            exceptionFn : function (err) {
                $('#action-error').show();
                $('#action-error').text(err.message);
            }
        }
    );
});
