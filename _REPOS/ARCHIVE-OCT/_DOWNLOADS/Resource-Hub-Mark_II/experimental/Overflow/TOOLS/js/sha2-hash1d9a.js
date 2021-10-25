$(function () {
    mkTool(
        'sha2-hash',
        function (text) {
            var size = parseInt($('#sha2-hash-size').val(), 10);
            if (size == 224) {
                // sha 224
                var sha224Hash = CryptoJS.SHA224(text);
                return sha224Hash;
            }
            else if (size == 256) {
                // sha 256
                var sha256Hash = CryptoJS.SHA256(text);
                return sha256Hash;
            }
            else if (size == 384) {
                // sha 384
                var sha384Hash = CryptoJS.SHA384(text);
                return sha384Hash;
            }
            else if (size == 512) {
                // sha 512
                var sha512Hash = CryptoJS.SHA512(text);
                return sha512Hash;
            }
            return 'unknown hash size';
        },
        {
            allowEmptyText : true
        }
    );
});
