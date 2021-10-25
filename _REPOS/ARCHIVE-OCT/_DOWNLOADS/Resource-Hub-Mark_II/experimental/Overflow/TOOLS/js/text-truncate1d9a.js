$(function () {
    mkTool('text-truncate', function (text) {
        var lines = text.split("\n");
        var truncateLength = $('#text-truncate-length').val();
        ret = '';
        for (var i = 0; i < lines.length; i++) {
            var line = lines[i];
            if (line.length > truncateLength) {
                line = line.substr(0, truncateLength);
            }
            ret += line + '\n';
        }
        return ret;
    });
});
