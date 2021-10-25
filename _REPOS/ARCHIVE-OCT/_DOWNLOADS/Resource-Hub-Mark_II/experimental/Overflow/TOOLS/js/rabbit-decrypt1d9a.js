$(function () {
    mkTool('rabbit-decrypt', function (text) {
        var pass = $('#rabbit-decrypt-pass').val();
        var decrypted = CryptoJS.Rabbit.decrypt(text, pass);
        var utf8 = CryptoJS.enc.Utf8.stringify(decrypted);
        return utf8;
    });
});
