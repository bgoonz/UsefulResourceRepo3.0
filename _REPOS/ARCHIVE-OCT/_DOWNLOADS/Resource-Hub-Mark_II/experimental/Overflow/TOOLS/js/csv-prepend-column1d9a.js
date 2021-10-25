$(function () {
    mkTool(
        'csv-prepend-column',
        function (text, asyncResultFn) {
            var newCol = $('#csv-prepend-column-new-column').val();

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
                asyncResultFn(result, text, newCol);
            });
        },
        {
            asyncResultFn : function (json, text, newCol) {
                var newColLines = newCol.split('\n');
                if (newColLines.length < json.length) {
                    $('#action-error').show();
                    $('#action-error').text('The new column has less rows than the existing CSV. Prepending anyway.');
                    for (var i = 0; i < json.length-newColLines.length; i++) {
                        newColLines.push('');
                    }
                }
                if (newColLines.length > json.length) {
                    $('#action-error').show();
                    $('#action-error').text('The new column has more rows than the existing CSV. Prepending anyway.');
                    newColLines.splice(json.length,newColLines.length);
                }
                var prependedJson = [];
                for (var i = 0; i < json.length; i++) {
                    json[i]['row_xyzzy'].splice(0,0,newColLines[i]);
                    prependedJson.push(json[i]['row_xyzzy']);
                }
                var prepended = json2csv({
                    data : prependedJson
                });
                var lines = prepended.split('\n');
                prepended = lines.slice(1).join('\n');
                $('#csv-prepend-column-text').val(prepended);
            },
            exceptionFn : function (err) {
                $('#action-error').show();
                $('#action-error').text(err);
            }
        }
    );
});
