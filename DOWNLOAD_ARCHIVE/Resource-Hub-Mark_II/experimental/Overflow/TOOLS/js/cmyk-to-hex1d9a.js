$(function () {
    mkTool(
        'cmyk-to-hex',
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

                var rHex = parseInt(r,10).toString(16);
                var gHex = parseInt(g,10).toString(16);
                var bHex = parseInt(b,10).toString(16);

                if (rHex.length==1) {
                    rHex = "0" + rHex;
                }
                if (gHex.length==1) {
                    gHex = "0" + gHex;
                }
                if (bHex.length==1) {
                    bHex = "0" + bHex;
                }

                ret += lines[i] + ' is #' + rHex + gHex + bHex + "\n";
            }
            return ret;
        }
    );
});
