$(function () {
    mkTool('rot13', function (text) {
        return rot(text, 13);
    });
});
