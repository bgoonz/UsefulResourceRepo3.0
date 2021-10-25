$(function () {
    if (typeof scrypt_module_factory !== 'undefined') {
        scrypt_module_factory(on_scrypt_ready);
        function on_scrypt_ready(scrypt) {
            mkTool(
                'scrypt',
                function (text) {
                    var pass = $('#scrypt-pass').val();
                    var salt = $('#scrypt-salt').val();
                    var outputSize = $('#scrypt-output-size').val();
                    var n = $('#scrypt-n').val();
                    var r = $('#scrypt-r').val();
                    var p = $('#scrypt-p').val();
                    var out = scrypt.crypto_scrypt(
                        scrypt.encode_utf8(pass),
                        scrypt.encode_utf8(salt),
                        n,
                        r,
                        p,
                        outputSize
                    );
                    return scrypt.to_hex(out);
                },
                {
                    allowEmptyText : true,
                    exceptionFn : function (err) {
                        $('#action-error').show();
                        $('#action-error').text(err.message);
                    }
                }
            );
        }
    }
});
