$(function () {
    mkTool('aes-decrypt', function (text) {
        var pass = $('#aes-decrypt-pass').val();
        var decrypted = CryptoJS.AES.decrypt(text, pass);
        var utf8 = CryptoJS.enc.Utf8.stringify(decrypted);
        return utf8;
    });
});
