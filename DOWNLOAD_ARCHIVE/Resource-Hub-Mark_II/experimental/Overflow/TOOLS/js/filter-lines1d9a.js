$(function () {
    mkTool('filter-lines', function (text) {
        text = text.replace(/\r\n/g, '\n');
        var lines = text.split('\n');
        var ret = '';
        var pattern = $('#filter-lines-pattern').val();
        var invertMatches = $('#filter-lines-invert').is(':checked');
        for (var i = 0; i < lines.length; i++) {
            if (invertMatches) {
                if (!(lines[i].indexOf(pattern) >= 0)) {
                    ret += lines[i] + "\n";
                }
            }
            else {
                if (lines[i].indexOf(pattern) >= 0) {
                    ret += lines[i] + "\n";
                }
            }
        }
        return ret;
    });
});
