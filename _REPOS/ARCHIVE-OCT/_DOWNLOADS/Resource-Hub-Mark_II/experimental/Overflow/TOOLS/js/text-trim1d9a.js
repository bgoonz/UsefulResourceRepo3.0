$(function () {
    mkTool('text-trim', function (text) {
        var lines = text.split("\n");
        ret = '';
        for (var i = 0; i < lines.length; i++) {
            var line = lines[i];
            line = line.replace(/^\s+/g, '');
            line = line.replace(/\s+$/g, '');
            ret += line + '\n';
        }
        return ret;
    });
});
