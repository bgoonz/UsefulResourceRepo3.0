$(function () {
    mkTool('reverse-lines', function (text) {
        text = text.replace(/\r\n/g, '\n');
        var lines = text.split('\n');
        lines.reverse();
        return lines.join('\n');
    });
});
