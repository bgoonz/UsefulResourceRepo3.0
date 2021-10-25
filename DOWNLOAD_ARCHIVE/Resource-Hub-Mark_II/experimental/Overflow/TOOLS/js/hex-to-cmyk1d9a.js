$(function () {
    mkTool(
        'hex-to-cmyk',
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
                line = line.replace(/\s+/g, "");
                line = line.replace(/^#/, "");
                if (line.length == 3) {
                    var r = line[0].toString() + line[0].toString();
                    var g = line[1].toString() + line[1].toString();
                    var b = line[2].toString() + line[2].toString();
                }
                else if (line.length == 6) {
                    var r = line[0].toString() + line[1].toString();
                    var g = line[2].toString() + line[3].toString();
                    var b = line[4].toString() + line[5].toString();
                }
                else {
                    $('#action-error').show();
                    $('#action-error').text("Invalid Hex value. Should be #RRGGBB or #RGB");
                    return text;
                }

                var rDec = parseInt(r,16);
                var gDec = parseInt(g,16);
                var bDec = parseInt(b,16);

                if (isNaN(rDec)) {
                    $('#action-error').show();
                    $('#action-error').text("Invalid RED value");
                    return text;
                }
                else if (isNaN(gDec)) {
                    $('#action-error').show();
                    $('#action-error').text("Invalid GREEN value");
                    return text;
                }
                else if (isNaN(bDec)) {
                    $('#action-error').show();
                    $('#action-error').text("Invalid BLUE value");
                    return text;
                }

                var rp = rDec/255;
                var gp = gDec/255;
                var bp = bDec/255;

                var k = 1 - Math.max(rp, gp, bp);
                var c = (1-rp-k) / (1-k);
                var m = (1-gp-k) / (1-k);
                var y = (1-bp-k) / (1-k);

                ret += lines[i] + ' is C=' + c.toFixed(2) + ', M=' + m.toFixed(2) +
                    ', Y=' + y.toFixed(2) + ", K=" + k.toFixed(2);
            }
            return ret;
        }
    );
});

