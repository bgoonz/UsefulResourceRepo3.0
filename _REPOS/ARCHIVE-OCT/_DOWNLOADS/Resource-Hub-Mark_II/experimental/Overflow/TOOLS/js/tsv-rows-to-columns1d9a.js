$(function () {
    mkTool(
        'tsv-rows-to-columns',
        function (text, asyncResultFn) {
            text = text.replace("\r\n", "\n");
            var lines = text.split("\n");

            var transposed = [];
            for (var i = 0; i < lines.length; i++) {
                var line = lines[i];
                var row = line.split("\t");
                for (var j = 0; j < row.length; j++) {
                    if (transposed[j] == undefined) {
                        transposed[j] = [];
                    }
                    transposed[j].push(row[j]);
                }
            }
            for (var i = 0; i < transposed.length; i++) {
                transposed[i] = transposed[i].join("\t");
            }
            return transposed.join("\n");
        }
    );
});
