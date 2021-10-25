$(function () {
    mkTool(
        'xml-to-text',
        function (text) {
            var x2js = new X2JS();
            var converted = x2js.xml_str2json(text);
            return jsonToText(converted);
        },
        {
            exceptionFn : function (err) {
                $('#action-error').show();
                $('#action-error').text(err.message);
            }
        }
    );
});
