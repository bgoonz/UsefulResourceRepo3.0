$(function () {
    mkTool('word-wrap', function (text) {
        var len = $('#word-wrap-length').val();
        var ww = wordwrap(len);
        return ww(text);
    });
});
