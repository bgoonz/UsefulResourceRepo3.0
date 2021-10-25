$(function () {
    if (typeof scrypt_module_factory !== 'undefined') {
        scrypt_module_factory(on_scrypt_ready);
        function on_scrypt_ready(scrypt) {
            mkTool(
                'scrypt-check',
                function (text) {
                    var lines = text.split("\n");
                    var pass = $('#scrypt-check-pass').val();
                    var salt = $('#scrypt-check-salt').val();
                    var outputSize = $('#scrypt-check-output-size').val();
                    var n = $('#scrypt-check-n').val();
                    var r = $('#scrypt-check-r').val();
                    var p = $('#scrypt-check-p').val();
                    var ret = '';
                    for (var i = 0; i < lines.length; i++) {
                        var line = lines[i];
                        if (line.length == 0) {
                            ret += "\n";
                        }
                        else {
                            var actualHash = scrypt.crypto_scrypt(
                                scrypt.encode_utf8(pass),
                                scrypt.encode_utf8(salt),
                                n,
                                r,
                                p,
                                line.length/2
                            );
                            actualHash = scrypt.to_hex(actualHash);
                            if (actualHash == line) {
                                ret += "Valid: " + line + "\n";
                            }
                            else {
                                ret += "Invalid: " + line + "\n";
                            }
                        }
                    }
                    return ret;
                },
                {
                    exceptionFn : function (err) {
                        $('#action-error').show();
                        $('#action-error').text(err);
                    }
                }
            );
        }
    }
});
