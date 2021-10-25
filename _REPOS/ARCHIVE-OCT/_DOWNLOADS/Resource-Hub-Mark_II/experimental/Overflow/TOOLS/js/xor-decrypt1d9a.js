$(function () {
    mkTool(
        'xor-decrypt',
        function (text) {
            var pass = $('#xor-decrypt-pass').val();
            if (pass.length == 0) {
                throw new Error("empty pass");
            }

            var bytes = text.split('-');
            var decrypted = '';
            for (var i = 0; i < bytes.length; i++) {
                var byte = parseInt(bytes[i], 16);
                var passChar = pass[i % pass.length].charCodeAt(0);
                var decChar = String.fromCharCode(byte ^ passChar);
                decrypted += decChar;
            }

            return decrypted;
        },
        {
            exceptionFn : function (err) {
                $('#action-error').show();
                $('#action-error').text(err);
            }
        }
    );
});
