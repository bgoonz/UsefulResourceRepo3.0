$(function () {
    mkTool(
        'ripemd128-hash',
        function (text) {
            return CryptoJS.RIPEMD128(text);
        },
        {
            allowEmptyText : true
        }
    );
});
