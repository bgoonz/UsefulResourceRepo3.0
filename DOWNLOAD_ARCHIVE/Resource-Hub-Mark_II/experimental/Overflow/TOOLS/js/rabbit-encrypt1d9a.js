$(function () {
    mkTool('rabbit-encrypt', function (text) {
        var pass = $('#rabbit-encrypt-pass').val();
        var encrypted = CryptoJS.Rabbit.encrypt(text, pass);
        return encrypted;
    });
});
