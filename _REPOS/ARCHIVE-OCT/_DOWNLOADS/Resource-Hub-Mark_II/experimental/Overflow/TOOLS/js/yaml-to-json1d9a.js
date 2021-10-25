$(function () {
    mkTool(
        'yaml-to-json',
        function (text) {
            try {
                var jsonObj = YAML.parse(text);
            }
            catch (err) {
                throw new Error("Invalid YAML"); // rethrow for exceptionFn
            }

            return JSON.stringify(jsonObj, 0, 2);
        },
        {
            exceptionFn : function (err) {
                $('#action-error').show();
                $('#action-error').text(err.message);
            }
        }
    );
});
