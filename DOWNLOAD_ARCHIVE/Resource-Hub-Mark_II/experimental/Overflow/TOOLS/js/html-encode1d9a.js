$(function () {
    mkTool('html-encode', function (text) {
        return $('<div>').text(text).html();
    });
});
