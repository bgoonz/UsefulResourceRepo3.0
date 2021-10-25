$(function () {
    mkTool(
        'csv-replace-column',
        function (text, asyncResultFn) {
            var col = $('#csv-replace-column-number').val();
            if (!/^\d+$/.test(col)) {
                throw new Error("Invalid column number");
            }
            var newCol = $('#csv-replace-column-new-column').val();

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
                asyncResultFn(result, text, col, newCol);
            });
        },
        {
            asyncResultFn : function (json, text, col, newCol) {
                var colName = json[0]['row_xyzzy'][col-1];
                if (colName === undefined) {
                    var err = "Column " + col + " doesn't exist";
                    $('#action-error').show();
                    $('#action-error').text(err);
                    return;
                }
                if (newCol.length == 0) {
                    // empty new column deletes the column
                    var replacedJson = [];
                    for (var i = 0; i < json.length; i++) {
                        json[i]['row_xyzzy'].splice(col-1,1);
                        replacedJson.push(json[i]['row_xyzzy']);
                    }
                    var replaced = json2csv({
                        data : replacedJson
                    });
                    var lines = replaced.split('\n');
                    replaced = lines.slice(1).join('\n');
                    $('#csv-replace-column-text').val(replaced);
                }
                else {
                    // replace column
                    var newColLines = newCol.split('\n');
                    if (newColLines.length < json.length) {
                        $('#action-error').show();
                        $('#action-error').text('The new column has less rows than the existing CSV. Replacing anyway.');
                        for (var i = 0; i < json.length-newColLines.length; i++) {
                            newColLines.push('');
                        }
                    }
                    if (newColLines.length > json.length) {
                        $('#action-error').show();
                        $('#action-error').text('The new column has more rows than the existing CSV. Replacing anyway.');
                        newColLines.splice(json.length,newColLines.length);
                    }
                    var replacedJson = [];
                    for (var i = 0; i < json.length; i++) {
                        json[i]['row_xyzzy'][col-1] = newColLines[i];
                        replacedJson.push(json[i]['row_xyzzy']);
                    }
                    var replaced = json2csv({
                        data : replacedJson
                    });
                    var lines = replaced.split('\n');
                    replaced = lines.slice(1).join('\n');
                    $('#csv-replace-column-text').val(replaced);
                }
            },
            exceptionFn : function (err) {
                $('#action-error').show();
                $('#action-error').text(err);
            }
        }
    );
});
