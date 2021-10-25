$(function () {
    // make random string format button work
    //
    $('#random-string-format').change(function () {
        var format = $('#random-string-format').val();
        if (format == "custom") {
            $('#random-string-custom-format').slideDown();
        }
        else {
            $('#random-string-custom-format').slideUp();
        }
    })

    // make randoms tring tool work
    //
    mkTool(
        'random-string',
        function () {
            var len = $('#random-string-length').val();
            var format = $('#random-string-format').val();

            var possibleAlphaLc = 'abcdefghijklmnopqrstuvwxyz';
            var possibleAlphaUc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
            var possibleAlphaMix = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

            var possibleAlphaLcNum = 'abcdefghijklmnopqrstuvwxyz0123456789';
            var possibleAlphaUcNum = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
            var possibleAlphaMixNum = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

            var possibleNum = '0123456789';

            if (format == "custom") {
                var customFormat = $('#random-string-custom-format input').val();
                if (customFormat.length == 0) {
                    return '';
                }
            }
            
            var str = '';
            for (var i = 0; i < len; i++) {
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
                else if (format == "custom") {
                    var char = customFormat.charAt(Math.random() * customFormat.length);
                    str += char;
                }
            }

            return str;
        },
        {
            allowEmptyText : true
        }
    );
});
