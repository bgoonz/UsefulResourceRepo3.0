$(function () {
    mkTool(
        'md6-hash',
        function (text) {
            var size = parseInt($('#md6-hash-size').val(), 10);
            var md6 = new md6hash();
            return md6.hex(text, size);
        },
        {
            allowEmptyText : true
        }
    );
});
