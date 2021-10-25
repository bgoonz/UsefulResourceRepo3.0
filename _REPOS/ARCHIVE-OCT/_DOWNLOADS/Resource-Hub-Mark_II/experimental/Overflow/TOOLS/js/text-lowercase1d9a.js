$(function () {
    mkTool('text-lowercase', function (text) {
        var ret = '';
        for (var i = 0; i < text.length; i++) {
            ret += text[i].toLowerCase();
        }
        return ret;
    });
});
