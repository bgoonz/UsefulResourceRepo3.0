$(function () {
    mkTool('grep', function (text) {
        var regex = $('#grep-regex').val();
        var invertMatches = $('#grep-invert').is(':checked');
        var regexParts = regex.match(/^\/(.*?)\/([gimuy]*)$/);
        if (regexParts) {
            var r = new RegExp(regexParts[1], regexParts[2]);
        } else {
            var r = new RegExp(regex);
        }
        text = text.replace(/\r\n/g, '\n');
        var lines = text.split('\n');
        var ret = '';
        for (var i = 0; i < lines.length; i++) {
            var line = lines[i];
            if (invertMatches) {
                if (!r.test(line)) {
                    ret += line + "\n";
                }
            }
            else {
                if (r.test(line)) {
                    ret += line + "\n";
                }
            }
        }
        return ret;
    });
});
