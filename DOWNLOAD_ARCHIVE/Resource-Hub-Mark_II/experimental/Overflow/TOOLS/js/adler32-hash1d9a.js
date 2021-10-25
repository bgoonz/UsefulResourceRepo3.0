$(function () {
    mkTool(
        'adler32-hash',
        function (text) {
            var hash = ADLER32.str(text);
            var hashHex = (hash>>>0).toString(16);
            var paddingLength = 8 - hashHex.length;
            while (paddingLength-- > 0) {
                hashHex = "0" + hashHex;
            }
            return hashHex;
        },
        {
            allowEmptyText : true
        }
    );
});
