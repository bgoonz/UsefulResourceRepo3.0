$(function () {
    mkTool(
        'rgb-to-cmyk',
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

                    var rp = r/255;
                    var gp = g/255;
                    var bp = b/255;

                    var k = 1 - Math.max(rp, gp, bp);
                    var c = (1-rp-k) / (1-k);
                    var m = (1-gp-k) / (1-k);
                    var y = (1-bp-k) / (1-k);

                    ret += lines[i] + ' is C=' + c.toFixed(2) + ', M=' + m.toFixed(2) +
                        ', Y=' + y.toFixed(2) + ", K=" + k.toFixed(2);
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
