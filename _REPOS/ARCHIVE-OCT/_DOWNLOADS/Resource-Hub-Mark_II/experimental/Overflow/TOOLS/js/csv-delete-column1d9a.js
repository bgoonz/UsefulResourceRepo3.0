$(function () {
    mkTool(
        'csv-delete-column',
        function (text, asyncResultFn) {
            var col = $('#csv-delete-column-number').val();
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
                var columnTitles = [];
                var columnData = [];
                for (var i = 0; i < json.length; i++) {
                    json[i]['row_xyzzy'].splice(col-1,1);
                }
                for (var i = 0; i < json.length; i++) {
                    if (i == 0) {
                        columnTitles = json[i]['row_xyzzy']
                    }
                    else {
                        var jsonObj = {};
                        for (var j = 0; j < json[i]['row_xyzzy'].length; j++) {
                            jsonObj[columnTitles[j]] = json[i]['row_xyzzy'][j];
                        }
                        columnData.push(jsonObj);
                    }
                }
                try {
                    var newCsv = json2csv({
                        data : columnData,
                        fields : columnTitles
                    });
                }
                catch (err) {
                    throw new Error("Couldn't convert data"); // rethrow for exceptionFn
                }
                
                $('#csv-delete-column-text').val(newCsv);
            },
            exceptionFn : function (err) {
                $('#action-error').show();
                $('#action-error').text(err);
            }
        }
    );
});
