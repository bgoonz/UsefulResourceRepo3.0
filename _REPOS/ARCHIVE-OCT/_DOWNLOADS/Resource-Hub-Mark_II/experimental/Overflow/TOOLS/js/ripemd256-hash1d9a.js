$(function () {
    mkTool(
        'ripemd256-hash',
        function (text) {
            var hash = CryptoJS.RIPEMD256(text);
            return hash;
        },
        {
            allowEmptyText : true
        }
    );
});
