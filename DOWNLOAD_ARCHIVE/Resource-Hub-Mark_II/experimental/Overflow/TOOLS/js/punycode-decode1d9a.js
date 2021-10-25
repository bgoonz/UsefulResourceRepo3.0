$(function () {
    mkTool('punycode-decode', function (text) {
        return punycode.toUnicode(text);
    });
});
