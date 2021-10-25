$(function () {
    mkTool('empty-lines', function (text) {
        text = text.replace(/\r\n/g, '\n');
        var lines = text.split('\n');
        var ret = '';

        for (var i = 0; i < lines.length; i++) {
            var line = lines[i];
            if (/^[\s\t]*$/.test(line)) {
                continue;
            }
            ret += line + '\n';
        }
        return ret;
    });
});
