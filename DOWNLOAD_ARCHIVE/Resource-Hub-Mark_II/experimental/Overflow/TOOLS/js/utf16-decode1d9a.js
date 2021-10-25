$(function () {
    mkTool(
        'utf16-decode',
        function (text) {
            text = text.replace(/^\s+/, '');
            text = text.replace(/\s+$/, '');
            var bytes = [];
            if (/^(\\u\{?[0-9a-f]{2,8}\}?)/i.test(text)) {
                bytes = text.match(/(\\u\{?[0-9a-f]{2,8}\}?)/gi);
            }
            else {
                var chars = text.split('');
                for (var i = 0; i < chars.length; i++) {
                    bytes.push(chars[i].charCodeAt(0).toString(16));
                }
            }
            
            for (var i = 0; i < bytes.length; i++) {
                bytes[i] = bytes[i].replace("\\u", '');
                bytes[i] = bytes[i].replace("{", '');
                bytes[i] = bytes[i].replace("}", '');
                bytes[i] = parseInt(bytes[i],16).toString(10);
            }

            return punycode.ucs2.encode(bytes);
        },
        {
            exceptionFn : function (err) {
                $('#action-error').show();
                $('#action-error').text(err.message);
            }
        }
    );
});
