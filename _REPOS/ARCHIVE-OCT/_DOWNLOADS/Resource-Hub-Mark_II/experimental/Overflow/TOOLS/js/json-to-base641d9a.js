$(function () {
    mkTool('json-to-base64', function (text) {
        var bytes = [];
        for (var i = 0; i < text.length; i++) {
            var realBytes = unescape(encodeURIComponent(text[i]));
            for (var j = 0; j < realBytes.length; j++) {
                bytes.push(realBytes[j].charCodeAt(0));
            }
        }
        var B64 = new Base64Thing;
        var encoded = B64.uint8ToBase64(bytes);
        return encoded;
    });
});
