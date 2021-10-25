$(function () {
    mkTool('utf16-encode', function (text) {
        var encoded = punycode.ucs2.decode(text);
        ret = '';
        for (var i = 0; i < encoded.length; i++) {
            var hex = encoded[i].toString(16);
            ret += "\\u{" + hex + "}";
        }
        return ret;
    });
});
