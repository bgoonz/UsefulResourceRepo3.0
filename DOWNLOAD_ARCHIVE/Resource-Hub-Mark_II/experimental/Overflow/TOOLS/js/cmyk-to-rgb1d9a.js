$(function () {
    mkTool(
        'cmyk-to-rgb',
        function (text) {
            $('#action-error').hide();

            var lines = text.split('\n');
            var ret = '';
            for (var i = 0; i < lines.length; i++) {
                var line = lines[i];
                if (line.length == 0) {
                    ret += '\n';
                    continue;
                }
                var match = line.match(/(\d+(?:\.\d+)?)[^\d]+(\d+(?:\.\d+)?)[^\d]+(\d+(?:\.\d+)?)[^\d]+(\d+(?:\.\d+)?)/);
                if (match) {
                    var c = match[1];
                    var m = match[2];
                    var y = match[3];
                    var k = match[4];
                }
                else {
                    $('#action-error').show();
                    $('#action-error').text("Invalid Hex value. Should be #RRGGBB or #RGB");
                    return text;
                }

                var r = 255 * (1-c) * (1-k);
                var g = 255 * (1-m) * (1-k);
                var b = 255 * (1-y) * (1-k);

                var rDec = parseInt(r,10);
                var gDec = parseInt(g,10);
                var bDec = parseInt(b,10);

                ret += lines[i] + ' rgb(' + rDec + ', ' + gDec + ', ' + bDec + ')\n';
            }
            return ret;
        }
    );
});
