$(function () {
    mkTool(
        'sha512-hash',
        function (text) {
            var hash = CryptoJS.SHA512(text);
            return hash;
        },
        {
            allowEmptyText : true
        }
    );
});
