$(function () {
    mkTool('rc4-decrypt', function (text) {
        var pass = $('#rc4-decrypt-pass').val();
        var decrypted = CryptoJS.RC4.decrypt(text, pass);
        var utf8 = CryptoJS.enc.Utf8.stringify(decrypted);
        return utf8;
    });
});
