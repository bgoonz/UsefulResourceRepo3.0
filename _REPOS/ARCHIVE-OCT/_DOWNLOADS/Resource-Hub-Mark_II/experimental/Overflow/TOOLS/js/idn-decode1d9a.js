$(function () {
    mkTool('idn-decode', function (text) {
        return punycode.toUnicode(text);
    });
});
