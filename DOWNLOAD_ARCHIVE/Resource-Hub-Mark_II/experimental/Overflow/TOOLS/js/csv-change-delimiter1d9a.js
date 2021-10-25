$(function () {
    mkTool(
        'csv-change-delimiter',
        function (text, asyncResultFn) {
            var delim = $('#csv-change-delimiter-new-delimiter').val();
            text = text.replace("\r\n", "\n");
            var lines = text.split("\n");
            lines.splice(0,0,lines[0]);
            text = lines.join("\n");

            var Converter = window.csvtojson.Converter;
            var converter = new Converter({});
            converter.fromString(text, function(err, result){
                if (err) throw new Error(err);
                asyncResultFn(result, text, delim);
            });
        },
        {
            asyncResultFn : function (json, text, delim) {
                var newCsv = json2csv({
                    data : json,
                    del : delim
                });
                var lines = newCsv.split('\n');
                newCsv = lines.slice(1).join('\n');
                $('#csv-change-delimiter-text').val(newCsv);
            },
            exceptionFn : function (err) {
                $('#action-error').show();
                $('#action-error').text(err);
            }
        }
    );
});
