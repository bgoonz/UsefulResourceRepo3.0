$(function () {
    mkTool(
        'xml-to-json',
        function (text) {
            var x2js = new X2JS();
            var converted = JSON.stringify(x2js.xml_str2json(text), 0, 2);
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
