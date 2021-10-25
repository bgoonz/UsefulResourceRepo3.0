$(function () {
    mkTool('uu-encode', function (text) {
        return uuencode.encode(text);
    });

});
