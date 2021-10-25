$(function () {
    // make random-password tool work (copy of random-string tool);
    //
    $('#random-password-format').change(function () {
        var format = $('#random-password-format').val();
        if (format == "custom") {
            $('#random-password-custom-format').slideDown();
        }
        else {
            $('#random-password-custom-format').slideUp();
        }
    })
    mkTool(
        'random-password',
        function () {
            var format = $('#random-password-format').val();
            var len = $('#random-password-length').val();
            var count = $('#random-password-count').val();

            var possibleAlphaLc = 'abcdefghijklmnopqrstuvwxyz';
            var possibleAlphaUc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
            var possibleAlphaMix = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

            var possibleAlphaLcNum = 'abcdefghijklmnopqrstuvwxyz0123456789';
            var possibleAlphaUcNum = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
            var possibleAlphaMixNum = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

            var possibleBase58 = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz';
            var possibleNum = '0123456789';

            if (format == "custom") {
                var customFormat = $('#random-password-custom-format input').val();
                if (customFormat.length == 0) {
                    return '';
                }
            }
            
            var str = '';

            for (var i = 0; i < count; i++) {
                for (var j = 0; j < len; j++) {
                    if (format == "alphalc") {
                        var char = possibleAlphaLc.charAt(Math.random() * possibleAlphaLc.length);
                        str += char;
                    }
                    else if (format == "alphauc") {
                        var char = possibleAlphaUc.charAt(Math.random() * possibleAlphaUc.length);
                        str += char;
                    }
                    else if (format == "alphamix") {
                        var char = possibleAlphaMix.charAt(Math.random() * possibleAlphaMix.length);
                        str += char;
                    }
                    else if (format == "alphalcnum") {
                        var char = possibleAlphaLcNum.charAt(Math.random() * possibleAlphaLcNum.length);
                        str += char;
                    }
                    else if (format == "alphaucnum") {
                        var char = possibleAlphaUcNum.charAt(Math.random() * possibleAlphaUcNum.length);
                        str += char;
                    }
                    else if (format == "alphamixnum") {
                        var char = possibleAlphaMixNum.charAt(Math.random() * possibleAlphaMixNum.length);
                        str += char;
                    }
                    else if (format == "num") {
                        var char = possibleNum.charAt(Math.random() * possibleNum.length);
                        str += char;
                    }
                    else if (format == "base58") {
                        var char = possibleBase58.charAt(Math.random() * possibleBase58.length);
                        str += char;
                    }
                    else if (format == "custom") {
                        var char = customFormat.charAt(Math.random() * customFormat.length);
                        str += char;
                    }
                }
                if (i != count-1) {
                    str += "\n";
                }
            }

            return str;
        },
        {
            allowEmptyText : true
        }
    );
});
