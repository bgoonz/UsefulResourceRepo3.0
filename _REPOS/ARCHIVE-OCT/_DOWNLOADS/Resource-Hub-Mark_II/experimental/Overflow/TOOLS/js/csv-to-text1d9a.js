$(function () {
    mkTool(
        'csv-to-text',
        function (text, asyncResultFn) {
            // duplicate first line so that csv parser treats second row
            // as column names. otherwise there's no way to access column names
            // in correct order.
            //
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
            asyncResultFn : function (result, text) {
                var ret = '';
                var json = result;
                var maxColLens = [];
                for (var row = 0; row < json.length; row++) {
                    for (var col = 0; col < json[row]['row_xyzzy'].length; col++) {
                        if (maxColLens[col] === undefined) {
                            maxColLens[col] = 0;
                        }
                        if (json[row]['row_xyzzy'][col].length > maxColLens[col]) {
                            maxColLens[col] = json[row]['row_xyzzy'][col].length;
                        }
                    }
                }
                for (var row = 0; row < json.length; row++) {
                    var cols = json[row]['row_xyzzy'];
                    for (var col = 0; col < cols.length; col++) {
                        if (cols[col].length < maxColLens[col]) {
                            var extraSpaceCount = maxColLens[col] - cols[col].length;
                            for (var i = 0; i < extraSpaceCount; i++) {
                                cols[col] += ' ';
                            }
                        }
                        ret += cols[col] + ' ';
                    }
                    ret += "\n";
                }
                $('#csv-to-text-text').val(ret);
            },
            exceptionFn : function (err) {
                $('#action-error').show();
                $('#action-error').text(err);
            }
        }
    );
});
