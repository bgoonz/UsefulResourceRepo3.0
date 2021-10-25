$(function () {
    mkTool('base58-decode', function (text) {
        var bytes = Base58.decode(text);
        var str = '';
        for (var i = 0; i < bytes.length; i++) {
            str += String.fromCharCode(bytes[i]);
        }
        return str;
    });
});
