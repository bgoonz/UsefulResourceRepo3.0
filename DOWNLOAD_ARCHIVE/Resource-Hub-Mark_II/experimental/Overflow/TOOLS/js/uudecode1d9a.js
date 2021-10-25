$(function () {
    mkTool('uu-decode', function (text) {
            return uuencode.decode(text);
    });
});
