$(function () {
    mkTool(
        'extract-emails',
        function (text) {
            var matches = text.match(/[a-z0-9._%+-]+@[a-z0-9-]+\.([a-z0-9]+)/gi);
            var ret = '';
            if (matches) {
                for (var i = 0; i < matches.length; i++) {
                    ret += matches[i];
                    ret += "\n";
                }
            }
            return ret;
        }
    );
});
