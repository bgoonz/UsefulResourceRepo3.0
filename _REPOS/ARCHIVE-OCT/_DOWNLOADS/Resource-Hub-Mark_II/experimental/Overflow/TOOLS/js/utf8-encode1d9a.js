$(function () {
    mkTool('utf8-encode', function (text) {
        var encoded = utf8.encode(text);
        ret = '';
        for (var i = 0; i < encoded.length; i++) {
            var hex = encoded[i].charCodeAt(0).toString(16);
            if (hex.length == 1) {
                hex = "0" + hex;
            }
            ret += "\\x" + hex;
        }
        return ret;
    });
});
