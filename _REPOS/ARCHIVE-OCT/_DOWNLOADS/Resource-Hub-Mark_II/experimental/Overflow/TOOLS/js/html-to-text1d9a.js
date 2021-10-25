$(function () {
    mkTool('html-to-text', function (text) {
        return $('<div>').html(text).text();
    });
});
