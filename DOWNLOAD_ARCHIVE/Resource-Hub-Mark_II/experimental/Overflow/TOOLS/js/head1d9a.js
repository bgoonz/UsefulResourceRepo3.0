$(function () {
    mkTool('head', function (text) {
        var howMany = $('#head-how-many').val();
        text = text.replace(/\r\n/g, '\n');
        var lines = text.split('\n');
        var ret = '';
        for (var i = 0; i < howMany; i++) {
            if (i >= lines.length) {
                break;
            }
            ret += lines[i] + "\n";
        }
        return ret;
    });
});
