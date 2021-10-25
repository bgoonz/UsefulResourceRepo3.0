$(function () {
    mkTool(
        'csv-to-xml',
        function (text, asyncResultFn) {
            var Converter = window.csvtojson.Converter;
            var converter = new Converter({});
            converter.fromString(text, function(err, result){
                if (err) throw new Error(err);
                asyncResultFn(result);
            });
        },
        {
            asyncResultFn : function (result) {
                var json = result;
                var converted = vkbeautify.xml(json2xml(json));

                $('#csv-to-xml-text').val(converted);
            },
            exceptionFn : function (err) {
                $('#action-error').show();
                $('#action-error').text(err);
            }
        }
    );
});
