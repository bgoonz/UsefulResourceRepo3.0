$(function () {
    mkTool(
        'xml-to-yaml',
        function (text) {
            // first convert xml to json
            var x2js = new X2JS();
            var jsonObj = x2js.xml_str2json(text);

            // then convert json to yaml
            return YAML.stringify(jsonObj);
        },
        {
            exceptionFn : function (err) {
                $('#action-error').show();
                $('#action-error').text(err.message);
            }
        }
    );
});
