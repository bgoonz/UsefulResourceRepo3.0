$(function () {
    mkTool(
        'seconds-to-hms',
        function (text) {
            text = text.replace(/\r\n/g, '\n');
            var lines = text.split('\n');
            var ret = '';
            for (var i = 0; i < lines.length; i++) {
                var line = lines[i];
                if (/(\d+)/.test(line)) {
                    var seconds = line;

                    var hours = Math.floor(seconds / 3600);
                    var minutes = Math.floor((seconds - hours*3600) / 60);
                    var seconds = seconds % 60;

                    ret += hours + ':' + minutes + ':' + seconds;
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
