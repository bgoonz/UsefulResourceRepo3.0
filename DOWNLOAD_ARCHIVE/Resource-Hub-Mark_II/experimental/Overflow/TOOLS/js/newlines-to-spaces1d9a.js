$(function () {
    mkTool('newlines-to-spaces', function (text) {
        text = text.replace(/\r\n/g, '\n');
        var lines = text.split('\n');
        var retLines = [];
        for (var i = 0; i < lines.length; i++) {
            if (/\w/.test(lines[i])) {
                retLines.push(lines[i]);
            }
        }
        return retLines.join(' ');
    });
});
