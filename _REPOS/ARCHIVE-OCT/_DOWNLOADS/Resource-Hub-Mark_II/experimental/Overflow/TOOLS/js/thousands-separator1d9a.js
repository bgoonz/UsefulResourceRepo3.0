$(function () {
    mkTool('thousands-separator', function (text) {
        var sepSymbol = $('input[name="separator"]').val();
        text = text.replace(/\r\n/g, '\n');
        var lines = text.split('\n');
        var ret = '';
        for (var i = 0; i < lines.length; i++) {
            var parts = lines[i].split('.');
            var num = parts[0];
            num = num.replace(/,/g, "");
            if (num.length > 3) {
                num = num.split('').reverse().join('');
                var retLine = '';
                for (var j = 0; j < num.length; j++) {
                    retLine += num[j];
                    if (j > 0 && (j+1) % 3 == 0 && j != num.length-1) {
                        retLine += sepSymbol;
                    }
                }
                retLine = retLine.split('').reverse().join('');
                ret += retLine;
                if (parts.length > 1) {
                    ret += "." + parts[1];
                }
            }
            else {
                ret += lines[i];
            }
            ret += "\n";
        }
        return ret;
    });
});
