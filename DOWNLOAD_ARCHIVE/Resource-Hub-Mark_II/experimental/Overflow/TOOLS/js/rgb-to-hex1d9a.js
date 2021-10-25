$(function () {
    mkTool(
        'rgb-to-hex',
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
                line = line.replace(/,/g, " ");
                line = line.replace(/\./g, " ");
                var m = line.match(/(\d+)\s+(\d+)\s+(\d+)/);
                if (m) {
                    var r = parseInt(m[1],10);
                    var g = parseInt(m[2],10);
                    var b = parseInt(m[3],10);

                    var rHex = r.toString(16);
                    if (rHex.length == 1) {
                        rHex = "0" + rHex;
                    }
                    var gHex = g.toString(16);
                    if (gHex.length == 1) {
                        gHex = "0" + gHex;
                    }
                    var bHex = b.toString(16);
                    if (bHex.length == 1) {
                        bHex = "0" + bHex;
                    }

                    ret += lines[i] + ' #' + rHex + gHex + bHex + "\n";
                    continue;
                }
                else {
                    $('#action-error').show();
                    $('#action-error').text("Invalid color on line " + (i+1));
                    return text;
                }
            }
            return ret;
        }
    );
});
