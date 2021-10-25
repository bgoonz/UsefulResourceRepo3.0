$(function () {
    mkTool('triple-des-decrypt', function (text) {
        var pass = $('#triple-des-decrypt-pass').val();
        var decrypted = CryptoJS.TripleDES.decrypt(text, pass);
        var utf8 = CryptoJS.enc.Utf8.stringify(decrypted);
        return utf8;
    });
});
