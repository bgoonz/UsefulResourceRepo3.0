$(function () {
    mkTool(
        'text-columns-to-rows',
        function (text, asyncResultFn) {
            text = text.replace("\r\n", "\n");
            var lines = text.split("\n");
            var delim = $('#text-columns-to-rows-delimiter').val();

            var transposed = [];
            for (var i = 0; i < lines.length; i++) {
                var line = lines[i];
                if (delim == ' ') {
                    var row = line.split(/\s+/g);
                }
                else {
                    var row = line.split(delim);
                }
                for (var j = 0; j < row.length; j++) {
                    if (transposed[j] == undefined) {
                        transposed[j] = [];
                    }
                    transposed[j].push(row[j]);
                }
            }
            for (var i = 0; i < transposed.length; i++) {
                transposed[i] = transposed[i].join(delim);
            }
            return transposed.join("\n");
        }
    );
});
