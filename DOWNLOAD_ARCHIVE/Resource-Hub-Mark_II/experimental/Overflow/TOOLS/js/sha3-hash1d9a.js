$(function () {
    mkTool(
        'sha3-hash',
        function (text) {
            var size = parseInt($('#sha3-hash-size').val(), 10);
            if (size == 224) {
                var hash = sha3_224(text);
            }
            else if (size == 256) {
                var hash = sha3_256(text);
            }
            else if (size == 384) {
                var hash = sha3_384(text);
            }
            else if (size == 512) {
                var hash = sha3_512(text);
            }
            return hash;
        },
        {
            allowEmptyText : true
        }
    );
});
