$(function () {
    mkTool('extract-lines', function (text) {
        var start = $('#extract-lines-start').val();
        var end = $('#extract-lines-end').val();
        text = text.replace(/\r\n/g, '\n');
        var lines = text.split('\n');
        var ret = '';
        for (var i = start-1; i <= end-1; i++) {
            if (i >= lines.length) {
                break;
            }
            ret += lines[i] + "\n";
        }
        return ret;
    });
});
