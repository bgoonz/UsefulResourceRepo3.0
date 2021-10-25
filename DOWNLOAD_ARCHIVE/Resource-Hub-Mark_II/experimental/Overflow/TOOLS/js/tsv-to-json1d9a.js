$(function () {
    mkTool(
        'tsv-to-json',
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

            var prettified = JSON.stringify(data, null, 2);
            return prettified;
        },
        {
            exceptionFn : function (err) {
                $('#action-error').show();
                $('#action-error').text(err.message);
            }
        }
    );
});
