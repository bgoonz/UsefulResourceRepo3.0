$(function () {
    mkTool('des-encrypt', function (text) {
        var pass = $('#des-encrypt-pass').val();
        var encrypted = CryptoJS.DES.encrypt(text, pass);
        return encrypted;
    });
});
