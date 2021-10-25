$(function () {
    mkTool('line-length-sort', function (text) {
        text = text.replace(/\r\n/g, '\n');
        var lines = text.split('\n');
        var format = $('#line-length-sort-format').val();
        lines.sort(function(a, b){
            if (format == "s2l") {
                return a.length - b.length;
            }
            else {
                return b.length - a.length;
            }
        });
        return lines.join('\n');
    });
});
