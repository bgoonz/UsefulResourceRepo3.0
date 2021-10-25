$(function () {
    mkTool(
        'csv-to-tsv',
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
                for (var i = 0; i < json.length; i++) {
                    ret += json[i]['row_xyzzy'].join("\t") + "\n";
                }
                $('#csv-to-tsv-text').val(ret);
            },
            exceptionFn : function (err) {
                $('#action-error').show();
                $('#action-error').text(err);
            }
        }
    );
});
