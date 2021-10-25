$(function () {
    mkTool(
        'sha224-hash',
        function (text) {
            var hash = CryptoJS.SHA224(text);
            return hash;
        },
        {
            allowEmptyText : true
        }
    );
});
