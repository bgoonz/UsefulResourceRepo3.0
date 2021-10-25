$(function () {
    mkTool('aes-encrypt', function (text) {
        var pass = $('#aes-encrypt-pass').val();
        var encrypted = CryptoJS.AES.encrypt(text, pass);
        return encrypted;
    });
});
