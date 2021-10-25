$(function () {
    mkTool('mariadb-password', function (text) {
        var x1 = CryptoJS.SHA1(text);
        var x2 = CryptoJS.SHA1(x1);
        var pass = '*' + x2;
        return pass.toUpperCase();
    });
});
