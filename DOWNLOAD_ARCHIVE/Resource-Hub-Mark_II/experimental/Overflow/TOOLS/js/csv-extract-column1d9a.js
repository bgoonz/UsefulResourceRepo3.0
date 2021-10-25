$(function () {
    mkTool(
        'csv-extract-column',
        function (text, asyncResultFn) {
            var col = $('#csv-extract-column-number').val();
            if (!/^\d+$/.test(col)) {
                throw new Error("Invalid column number");
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
                asyncResultFn(result, text, col);
            });
        },
        {
            asyncResultFn : function (json, text, col) {
                var ret = '';
                colName = json[0]['row_xyzzy'][col-1];
                if (colName === undefined) {
                    var err = "Column " + col + " doesn't exist";
                    $('#action-error').show();
                    $('#action-error').text(err);
                    return;
                }
                    
                for (var i = 0; i < json.length; i++) {
                    ret += json[i][colName] + "\n";
                }
                $('#csv-extract-column-text').val(ret);
            },
            exceptionFn : function (err) {
                $('#action-error').show();
                $('#action-error').text(err);
            }
        }
    );
});
