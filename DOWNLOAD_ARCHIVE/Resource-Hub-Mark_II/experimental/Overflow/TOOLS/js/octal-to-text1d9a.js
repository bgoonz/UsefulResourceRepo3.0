$(function () {
    mkTool(
        'octal-to-text',
        function (text) {
            text = text.replace(/\s+/g, ' ');
            bytes = text.split(' ');
            for (var i = 0; i < bytes.length; i++) {
                if (bytes[i].length < 3) {
                    for (var j = bytes[i].length; j != 3; j++) {
                        bytes[i] = "0" + bytes[i];
                    }
                }
            }
            text = bytes.join('');
            if (text.length % 3 != 0) {
                throw new Error('Input octal doesnt split into groups of 3 digits evenly.');
            }
            var ret = '';
            for (var i = 0; i < text.length; i+=3) {
                ret += String.fromCharCode(parseInt(text.substr(i, 3), 8));
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
