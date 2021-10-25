$(function () {
    mkTool('duplicate-lines', function (text) {
        text = text.replace(/\r\n/g, '\n');
        var lines = text.split('\n');
        var seen = {};
        var ret = '';

        for (var i = 0; i < lines.length; i++) {
            var line = lines[i];
            if (seen[line]) {
                continue;
            }
            seen[line] = 1;
            ret += line + '\n';
        }
        return ret;
    });
});
