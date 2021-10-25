$(function () {
    mkTool('html-decode', function (text) {
        return $('<div>').html(text).text();
    });
});
