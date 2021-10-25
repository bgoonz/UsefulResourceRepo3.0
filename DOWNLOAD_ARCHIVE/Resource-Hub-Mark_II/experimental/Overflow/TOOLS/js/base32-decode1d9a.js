$(function () {
    mkTool('base32-decode', function (text) {
        return base32.decode(text);
    });
})
