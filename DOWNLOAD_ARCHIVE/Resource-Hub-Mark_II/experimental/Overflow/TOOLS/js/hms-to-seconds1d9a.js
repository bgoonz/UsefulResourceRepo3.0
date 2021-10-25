$(function () {
    mkTool(
        'hms-to-seconds',
        function (text) {
            text = text.replace(/\r\n/g, '\n');
            var lines = text.split('\n');
            var ret = '';
            for (var i = 0; i < lines.length; i++) {
                var line = lines[i];
                if (/(\d+)/.test(line)) {
                    var parts = line.split(':');
                    var hours = parseInt(parts[0], 10);
                    var minutes = parseInt(parts[1], 10);
                    var seconds = parseInt(parts[2], 10);
                    ret += (hours*3600 + minutes*60 + seconds).toString();
                }
                else {
                    ret += line;
                }
                ret += '\n';
            }

            return ret;
        }
    );
});
