$(function () {
    mkTool(
        'sha1-hash',
        function (text) {
            var hash = CryptoJS.SHA1(text);
            return hash;
        },
        {
            allowEmptyText : true
        }
    );
});
