$(function () {
    mkTool('numeric-sort', function (text) {
        text = text.replace(/\r\n/g, '\n');
        var lines = text.split('\n');
        var nonEmptyLines = [];
        for (var i = 0; i < lines.length; i++) {
            if (lines[i].length == 0) {
                continue;
            }
            nonEmptyLines.push(lines[i]);
        }
        nonEmptyLines.sort(function (a, b) {
            return parseInt(a, 10) - parseInt(b, 10);
        });
        return nonEmptyLines.join('\n');
    });
});
