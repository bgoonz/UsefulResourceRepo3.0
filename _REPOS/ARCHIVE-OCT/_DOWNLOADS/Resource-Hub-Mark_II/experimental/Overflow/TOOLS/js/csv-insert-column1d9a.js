$(function () {
    mkTool(
        'csv-insert-column',
        function (text, asyncResultFn) {
            var col = $('#csv-insert-column-number').val();
            if (!/^-?\d+$/.test(col)) {
                throw new Error("Invalid column number");
            }
            var newCol = $('#csv-insert-column-new-column').val();

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
                if (newCol.length == 0) {
                    // insert an empty column
                    var replacedJson = [];
                    for (var i = 0; i < json.length; i++) {
                        if (col == -1) { // end
                            var colCount = json[i]['row_xyzzy'].length;
                            json[i]['row_xyzzy'].splice(colCount,0,'');
                        }
                        else {
                            json[i]['row_xyzzy'].splice(col-1,0,'');
                        }
                        replacedJson.push(json[i]['row_xyzzy']);
                    }
                    var replaced = json2csv({
                        data : replacedJson
                    });
                    var lines = replaced.split('\n');
                    replaced = lines.slice(1).join('\n');
                    $('#csv-insert-column-text').val(replaced);
                }
                else {
                    // insert column
                    var newColLines = newCol.split('\n');
                    if (newColLines.length < json.length) {
                        $('#action-error').show();
                        $('#action-error').text('The new column has less rows than the existing CSV. Inserting anyway.');
                        for (var i = 0; i < json.length-newColLines.length; i++) {
                            newColLines.push('');
                        }
                    }
                    if (newColLines.length > json.length) {
                        $('#action-error').show();
                        $('#action-error').text('The new column has more rows than the existing CSV. Inserting anyway.');
                        newColLines.splice(json.length,newColLines.length);
                    }
                    var replacedJson = [];
                    for (var i = 0; i < json.length; i++) {
                        if (col == -1) { // end
                            var colCount = json[i]['row_xyzzy'].length;
                            json[i]['row_xyzzy'].splice(colCount,0,newColLines[i]);
                        }
                        else {
                            json[i]['row_xyzzy'].splice(col-1, 0, newColLines[i]);
                        }
                        replacedJson.push(json[i]['row_xyzzy']);
                    }
                    var replaced = json2csv({
                        data : replacedJson
                    });
                    var lines = replaced.split('\n');
                    replaced = lines.slice(1).join('\n');
                    $('#csv-insert-column-text').val(replaced);
                }
            },
            exceptionFn : function (err) {
                $('#action-error').show();
                $('#action-error').text(err);
            }
        }
    );
});
