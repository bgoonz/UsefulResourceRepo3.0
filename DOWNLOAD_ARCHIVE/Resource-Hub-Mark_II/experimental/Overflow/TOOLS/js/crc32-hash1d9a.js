$(function () {
    mkTool(
        'crc32-hash',
        function (text) {
            var hash = CRC32.str(text);
            return (hash>>>0).toString(16);
        },
        {
            allowEmptyText : true
        }
    );
});
