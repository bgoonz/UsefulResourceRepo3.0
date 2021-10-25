$(function () {
    mkTool('idn-encode', function (text) {
        return punycode.toASCII(text);
    });
});
