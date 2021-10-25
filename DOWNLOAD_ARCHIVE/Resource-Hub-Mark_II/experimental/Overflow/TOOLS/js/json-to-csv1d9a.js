$(function () {
    mkTool(
        'json-to-csv',
        function (text) {
            try {
                var parsed = JSON.parse(text);
                var converted = json2csv({
                    data : parsed
                });
            }
            catch (err) {
                throw new Error("Invalid JSON"); // rethrow for exceptionFn
            }
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
