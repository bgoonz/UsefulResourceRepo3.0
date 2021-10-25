$(function () {
    mkTool(
        'md5-hash',
        function (text) {
            var hash = CryptoJS.MD5(text);
            return hash;
        },
        {
            allowEmptyText : true
        }
    );
});
