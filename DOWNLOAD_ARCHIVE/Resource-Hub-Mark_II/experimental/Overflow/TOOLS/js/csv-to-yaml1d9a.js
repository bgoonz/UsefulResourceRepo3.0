$(function () {
    mkTool(
        'csv-to-yaml',
        function (text, asyncResultFn) {
            // first convert csv to json
            var Converter = window.csvtojson.Converter;
            var converter = new Converter({});
            converter.fromString(text, function(err, result){
                if (err) throw new Error(err);
                asyncResultFn(result);
            });
        },
        {
            asyncResultFn : function (json) {
                $('#csv-to-yaml-text').val(YAML.stringify(json));
            },
            exceptionFn : function (err) {
                $('#action-error').show();
                $('#action-error').text(err);
            }
        }
    );
});
