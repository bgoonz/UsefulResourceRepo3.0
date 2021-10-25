$(function () {
    mkTool('text-capitalize', function (text) {
        // todo: handle tabs
        var ret = '';
        text = text.replace(/\r\n/, '\n');
        var lines = text.split('\n');
        for (var i = 0; i < lines.length; i++) {
            var line = lines[i];
            var words = line.split(' ');
            for (var j = 0; j < words.length; j++) {
                words[j] = words[j].charAt(0).toUpperCase() + words[j].substring(1);
            }
            lines[i] = words.join(' ');
        }
        return lines.join('\n');
    });
});
