$(function () {
    mkTool('prefix-lines', function (text) {
        text = text.replace(/\r\n/g, '\n');
        var lines = text.split('\n');
        var ret = '';

        var prefix = $('#prefix-lines-field input[name="prefix"]').val();
        for (var i = 0; i < lines.length; i++) {
            var line = lines[i];
            ret += (prefix + line) + '\n';
        }
        return ret;
    });
});
