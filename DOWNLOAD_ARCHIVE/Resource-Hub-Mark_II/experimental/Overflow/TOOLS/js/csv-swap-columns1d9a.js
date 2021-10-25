$(function () {
    mkTool(
        'csv-swap-columns',
        function (text, asyncResultFn) {
            var col1 = $('#csv-swap-columns-col1').val();
            if (!/^\d+$/.test(col1)) {
                throw new Error("Invalid column 1 number");
            }
            var col2 = $('#csv-swap-columns-col2').val();
            if (!/^\d+$/.test(col2)) {
                throw new Error("Invalid column 2 number");
            }
            if (col1 == col2) {
                throw new Error("Can't swap the same column");
            }
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
                asyncResultFn(result, text, col1, col2);
            });
        },
        {
            asyncResultFn : function (json, text, col1, col2) {
                var col1Name = json[0]['row_xyzzy'][col1-1];
                if (col1Name === undefined) {
                    var err = "Column " + col1 + " doesn't exist";
                    $('#action-error').show();
                    $('#action-error').text(err);
                    return;
                }
                var col2Name = json[0]['row_xyzzy'][col2-1];
                if (col2Name === undefined) {
                    var err = "Column " + col2 + " doesn't exist";
                    $('#action-error').show();
                    $('#action-error').text(err);
                    return;
                }
                var swappedJson = [];
                for (var i = 0; i < json.length; i++) {
                    var row = json[i]['row_xyzzy'];
                    var rowCol1 = row[col1-1];
                    var rowCol2 = row[col2-1];
                    row[col1-1] = rowCol2;
                    row[col2-1] = rowCol1;
                    swappedJson.push(row);
                }
                var transposed = json2csv({
                    data : swappedJson
                });
                var lines = transposed.split('\n');
                transposed = lines.slice(1).join('\n');
                $('#csv-swap-columns-text').val(transposed);
            },
            exceptionFn : function (err) {
                $('#action-error').show();
                $('#action-error').text(err);
            }
        }
    );
});
