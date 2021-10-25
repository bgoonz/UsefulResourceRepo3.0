$(function () {
    mkTool('suffix-lines', function (text) {
        text = text.replace(/\r\n/g, '\n');
        var lines = text.split('\n');
        var ret = '';

        var suffix = $('#suffix-lines-field input[name="suffix"]').val();
        for (var i = 0; i < lines.length; i++) {
            var line = lines[i];
            ret += (line + suffix) + '\n';
        }
        return ret;
    });
});
