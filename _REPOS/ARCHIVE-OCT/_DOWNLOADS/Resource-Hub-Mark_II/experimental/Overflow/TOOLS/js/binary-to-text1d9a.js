$(function () {
    mkTool(
        'binary-to-text',
        function (text) {
            text = text.replace(/\s+/g, ' ');
            bytes = text.split(' ');
            for (var i = 0; i < bytes.length; i++) {
                if (bytes[i].length < 8) {
                    for (var j = bytes[i].length; j != 8; j++) {
                        bytes[i] = "0" + bytes[i];
                    }
                }
            }
            text = bytes.join('');
            if (text.length % 8 != 0) {
                throw new Error('Input binary doesnt split into groups of 8 bits evenly.');
            }
            var ret = '';
            for (var i = 0; i < text.length; i+=8) {
                ret += String.fromCharCode(parseInt(text.substr(i, 8), 2));
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
