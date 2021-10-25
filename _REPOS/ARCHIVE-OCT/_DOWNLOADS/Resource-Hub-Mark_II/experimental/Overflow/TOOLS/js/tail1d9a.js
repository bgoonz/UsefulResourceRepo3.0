$(function () {
    mkTool('tail', function (text) {
        var howMany = $('#tail-how-many').val();
        text = text.replace(/\r\n/g, '\n');
        var lines = text.split('\n');
        lines = lines.reverse();
        var ret = [];
        for (var i = 0; i < howMany; i++) {
            if (i >= lines.length) {
                break;
            }
            ret.push(lines[i]);
        }
        ret = ret.reverse();
        return ret.join('\n');
    });
});
