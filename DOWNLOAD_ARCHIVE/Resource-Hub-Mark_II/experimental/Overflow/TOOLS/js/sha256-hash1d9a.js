$(function () {
    mkTool(
        'sha256-hash',
        function (text) {
            var hash = CryptoJS.SHA256(text);
            return hash;
        },
        {
            allowEmptyText : true
        }
    );
});
