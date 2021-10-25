$(function () {
    mkTool('triple-des-encrypt', function (text) {
        var pass = $('#triple-des-encrypt-pass').val();
        var encrypted = CryptoJS.TripleDES.encrypt(text, pass);
        return encrypted;
    });
});
