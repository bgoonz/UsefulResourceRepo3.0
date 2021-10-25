$(function () {
    mkTool(
        'tsv-to-yaml',
        function (text) {
            // copy pasted from tsv-to-json
            // todo: dont copy paste
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

            // then convert json to yaml
            return YAML.stringify(data);
        },
        {
            exceptionFn : function (err) {
                $('#action-error').show();
                $('#action-error').text(err.message);
            }
        }
    );
});
