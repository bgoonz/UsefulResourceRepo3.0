$(function () {
    mkTool('base58-encode', function (text) {
        var bytes = [];
        for (var i = 0; i < text.length; i++) {
            bytes.push(text[i].charCodeAt(0));
        }
        return Base58.encode(bytes);
    });
})
