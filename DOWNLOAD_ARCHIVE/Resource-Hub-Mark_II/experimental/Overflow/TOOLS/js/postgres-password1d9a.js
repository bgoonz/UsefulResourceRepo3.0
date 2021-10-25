$(function () {
    mkTool('postgres-password', function (text) {
        var username = $('#postgres-username').val();
        return 'md5' + CryptoJS.MD5(text.toString() + username.toString());
    });
});
