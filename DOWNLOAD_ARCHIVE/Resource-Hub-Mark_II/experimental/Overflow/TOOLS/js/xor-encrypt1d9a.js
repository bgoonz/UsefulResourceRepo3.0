$(function () {
    mkTool(
        'xor-encrypt',
        function (text) {
            var pass = $('#xor-encrypt-pass').val();
            if (pass.length == 0) {
                throw new Error("empty pass");
            }

            var encrypted = '';
            for (var i = 0; i < text.length; i++) {
                var char = text[i].charCodeAt(0);
                var passChar = pass[i % pass.length].charCodeAt(0);
                var encChar = (char ^ passChar).toString(16);
                if (encChar.length == 1) {
                    encChar = "0" + encChar;
                }
                encrypted += encChar;
                if (i != text.length-1) {
                    encrypted += "-";
                }
            }

            return encrypted;
        },
        {
            exceptionFn : function (err) {
                $('#action-error').show();
                $('#action-error').text(err);
            }
        }
    );
});
