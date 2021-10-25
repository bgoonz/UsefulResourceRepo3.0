$(function () {
    mkTool(
        'tsv-to-csv',
        function (text) {
            text = text.replace("\r\n", "\n");
            var lines = text.split("\n");
            var data = [];
            var fields = [];
            for (var i = 0; i < lines.length; i++) {
                var line = lines[i];
                var cols = line.split("\t");
                if (i == 0) {
                    fields = cols;
                }
                else {
                    var jsonObj = {};
                    for (var j = 0; j < fields.length; j++) {
                        jsonObj[fields[j]] = cols[j];
                    }
                    data.push(jsonObj);
                }
            }
                
            try {
                var converted = json2csv({
                    data : data,
                    fields : fields
                });
            }
            catch (err) {
                throw new Error("Couldn't convert data"); // rethrow for exceptionFn
            }

            return converted;
        },
        {
            exceptionFn : function (err) {
                $('#action-error').show();
                $('#action-error').text(err.message);
            }
        }
    );
});
