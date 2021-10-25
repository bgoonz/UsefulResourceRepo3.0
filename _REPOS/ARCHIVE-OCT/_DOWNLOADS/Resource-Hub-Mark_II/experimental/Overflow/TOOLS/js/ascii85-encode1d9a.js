$(function () {
    mkTool('ascii85-encode', function (text) {
        return ascii85.encode(text);
    });

});
