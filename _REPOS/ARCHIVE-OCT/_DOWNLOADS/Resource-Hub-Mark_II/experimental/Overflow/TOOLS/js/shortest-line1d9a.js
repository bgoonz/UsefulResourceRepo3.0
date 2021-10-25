$(function () {
    mkTool('shortest-line', function (text) {
        text = text.replace(/\r\n/g, '\n');
        var lines = text.split('\n');
        var ret = '';
        var currLen = -1;
        for (var i = 0; i < lines.length; i++) {
            var line = lines[i];
            if (line.length) {
                if (currLen == -1 || line.length < ret.length) {
                    ret = line;
                    currLen = line.length;
                }
            }
        }
        return ret;
    });
});
