$(function () {
    mkTool(
        'yaml-to-xml',
        function (text) {
            // first convert yaml to json

            try {
                var jsonObj = YAML.parse(text);
            }
            catch (err) {
                throw new Error("Invalid YAML"); // rethrow for exceptionFn
            }

            // then convert json to xml
            return vkbeautify.xml(json2xml(jsonObj));
        },
        {
            exceptionFn : function (err) {
                $('#action-error').show();
                $('#action-error').text(err.message);
            }
        }
    );
});
