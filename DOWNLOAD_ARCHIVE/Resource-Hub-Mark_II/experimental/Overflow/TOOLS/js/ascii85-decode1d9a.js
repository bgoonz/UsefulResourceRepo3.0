$(function () {
    mkTool('ascii85-decode', function (text) {
        return ascii85.decode(text);
    });
});
