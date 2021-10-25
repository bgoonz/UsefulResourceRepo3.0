$(function () {
    mkTool('base32-encode', function (text) {
        return base32.encode(text);
    });
})
