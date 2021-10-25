$(function () {
    mkTool(
        'xml-to-csv',
        function (text) {
            var x2js = new X2JS();
            var json = x2js.xml_str2json(text);
            while (Object.keys(json).length == 1) {
                if (typeof json[Object.keys(json)[0]] == "object") {
                    json = json[Object.keys(json)[0]];
                }
                else {
                    break;
                }
            }
            var converted = json2csv({
                data : json
            });
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
