$(function () {
    mkTool('des-decrypt', function (text) {
        var pass = $('#des-decrypt-pass').val();
        var decrypted = CryptoJS.DES.decrypt(text, pass);
        var utf8 = CryptoJS.enc.Utf8.stringify(decrypted);
        return utf8;
    });
});
