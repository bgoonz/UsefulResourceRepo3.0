$(function () {
    mkTool('punycode-encode', function (text) {
        return punycode.toASCII(text);
    });
});
