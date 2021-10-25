$(function () {
    mkTool('text-sort', function (text) {
        text = text.replace(/\r\n/g, '\n');
        var lines = text.split('\n');
        lines.sort();
        return lines.join('\n');
    });
});
