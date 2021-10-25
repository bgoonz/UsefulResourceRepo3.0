$(function () {
    mkTool(
        'crc16-hash',
        function (text) {
            return crc16(text);
        },
        {
            allowEmptyText : true
        }
    );
});
