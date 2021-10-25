$(function () {
    mkTool('text-uppercase', function (text) {
        var ret = '';
        for (var i = 0; i < text.length; i++) {
            ret += text[i].toUpperCase();
        }
        return ret;
    });
});
