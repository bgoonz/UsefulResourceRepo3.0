$(function () {
    mkTool(
        'hex-to-text',
        function (text) {
            text = text.replace(/0x/g, '');
            text = text.replace(/\s+/g, ' ');
            bytes = text.split(' ');
            for (var i = 0; i < bytes.length; i++) {
                if (bytes[i].length == 1) {
                    bytes[i] = "0" + bytes[i];
                }
            }
            text = bytes.join('');
            if (text.length % 2 != 0) {
                throw new Error('Uneven number of hex characters.');
            }
            var ret = '';
            for (var i = 0; i < text.length; i+=2) {
                ret += String.fromCharCode(parseInt(text.substr(i, 2), 16));
            }
            return ret;
        },
        {
            exceptionFn : function (err) {
                $('#action-error').show();
                $('#action-error').text(err.message);
            }
        }
    );
});
