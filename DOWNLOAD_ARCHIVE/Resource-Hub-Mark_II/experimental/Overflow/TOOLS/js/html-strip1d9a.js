$(function () {
    mkTool('html-strip', function (text) {
        return $('<div>').html(text).text();
    });
});
