$(function () {
    mkTool(
        'json-to-xml',
        function (text) {
            try {
                var parsed = JSON.parse(text);
            }
            catch (err) {
                throw new Error("Invalid JSON"); // rethrow for exceptionFn
            }
            var converted = vkbeautify.xml(json2xml(parsed));
            return converted;
        },
        {
            exceptionFn : function (err) {
                $('#action-error').show();
                $('#action-error').text(err.message);
            }
        }
    );
});
