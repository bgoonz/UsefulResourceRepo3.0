$(function () {
    mkTool(
        'ripemd160-hash',
        function (text) {
            var hash = CryptoJS.RIPEMD160(text);
            return hash;
        },
        {
            allowEmptyText : true
        }
    );
});
