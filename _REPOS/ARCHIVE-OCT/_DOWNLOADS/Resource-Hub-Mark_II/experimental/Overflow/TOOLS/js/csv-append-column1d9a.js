$(function () {
    mkTool(
        'csv-append-column',
        function (text, asyncResultFn) {
            var newCol = $('#csv-append-column-new-column').val();

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
                    $('#action-error').text('The new column has less rows than the existing CSV. Appending anyway.');
                    for (var i = 0; i < json.length-newColLines.length; i++) {
                        newColLines.push('');
                    }
                }
                if (newColLines.length > json.length) {
                    $('#action-error').show();
                    $('#action-error').text('The new column has more rows than the existing CSV. Appending anyway.');
                    newColLines.splice(json.length,newColLines.length);
                }
                var colCount = json[0]['row_xyzzy'].length;
                var appendedJson = [];
                for (var i = 0; i < json.length; i++) {
                    json[i]['row_xyzzy'][colCount] = newColLines[i];
                    appendedJson.push(json[i]['row_xyzzy']);
                }
                var appended = json2csv({
                    data : appendedJson
                });
                var lines = appended.split('\n');
                appended = lines.slice(1).join('\n');
                $('#csv-append-column-text').val(appended);
            },
            exceptionFn : function (err) {
                $('#action-error').show();
                $('#action-error').text(err);
            }
        }
    );
});
