$(function () {
    mkTool('rc4-encrypt', function (text) {
        var pass = $('#rc4-encrypt-pass').val();
        var encrypted = CryptoJS.RC4.encrypt(text, pass);
        return encrypted;
    });
});
