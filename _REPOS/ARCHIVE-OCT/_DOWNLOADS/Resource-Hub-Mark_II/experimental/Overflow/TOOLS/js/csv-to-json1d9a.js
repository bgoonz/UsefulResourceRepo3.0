$(function () {
    mkTool(
        'csv-to-json',
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
                $('#csv-to-json-text').val(JSON.stringify(result, null, 2));
            },
            exceptionFn : function (err) {
                $('#action-error').show();
                $('#action-error').text(err);
            }
        }
    );
});
