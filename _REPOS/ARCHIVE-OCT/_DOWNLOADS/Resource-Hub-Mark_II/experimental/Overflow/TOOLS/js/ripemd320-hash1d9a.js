$(function () {
    mkTool(
        'ripemd320-hash',
        function (text) {
            var hash = CryptoJS.RIPEMD320(text);
            return hash;
        },
        {
            allowEmptyText : true
        }
    );
});
