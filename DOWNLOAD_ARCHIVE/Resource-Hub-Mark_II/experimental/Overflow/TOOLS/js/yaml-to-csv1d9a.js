$(function () {
    mkTool(
        'yaml-to-csv',
        function (text) {
            // first convert yaml to json

            try {
                var jsonObj = YAML.parse(text);
            }
            catch (err) {
                throw new Error("Invalid YAML"); // rethrow for exceptionFn
            }

            // then convert json to csv
            var converted = json2csv({
                data : jsonObj
            });

            return converted
        },
        {
            exceptionFn : function (err) {
                $('#action-error').show();
                $('#action-error').text(err.message);
            }
        }
    );
});
