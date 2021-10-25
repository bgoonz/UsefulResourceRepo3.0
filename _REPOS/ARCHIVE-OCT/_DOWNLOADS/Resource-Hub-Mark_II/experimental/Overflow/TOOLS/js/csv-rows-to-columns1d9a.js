$(function () {
    mkTool(
        'csv-rows-to-columns',
        function (text, asyncResultFn) {
            text = text.replace("\r\n", "\n");
            var lines = text.split("\n");
            lines.splice(0,0,lines[0]);
            text = lines.join("\n");

            var Converter = window.csvtojson.Converter;
            var converter = new Converter({});
            converter.transform = function (json, row, index) {
                json['rowIndex_xyzzy'] = index;
                json['row_xyzzy'] = row;
            }
            converter.fromString(text, function(err, result){
                if (err) throw new Error(err);
                asyncResultFn(result, text);
            });
        },
        {
            asyncResultFn : function (json, text) {
                var transposedJson = [];
                for (var i = 0; i < json.length; i++) {
                    var row = json[i]['row_xyzzy'];
                    for (var j = 0; j < row.length; j++) {
                        if (transposedJson[j] == undefined) {
                            transposedJson[j] = [];
                        }
                        transposedJson[j].push(row[j]);
                    }
                }
                var transposed = json2csv({
                    data : transposedJson
                });
                var lines = transposed.split('\n');
                transposed = lines.slice(1).join('\n');
                $('#csv-rows-to-columns-text').val(transposed);
            },
            exceptionFn : function (err) {
                $('#action-error').show();
                $('#action-error').text(err);
            }
        }
    );
});
