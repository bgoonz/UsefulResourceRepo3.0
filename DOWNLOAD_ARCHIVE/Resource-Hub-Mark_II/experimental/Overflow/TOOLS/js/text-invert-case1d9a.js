$(function () {
    mkTool('text-invert-case', function (text) {
        var ret = '';
        for (var i = 0; i < text.length; i++) {
            var isLower = text[i].toLowerCase() == text[i];
            if (isLower) {
                ret += text[i].toUpperCase();
            }
            else {
                ret += text[i].toLowerCase();
            }
        }
        return ret;
    });
});
