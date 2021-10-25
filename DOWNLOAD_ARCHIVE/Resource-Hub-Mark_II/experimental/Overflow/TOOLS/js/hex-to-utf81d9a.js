$(function () {
    mkTool(
        'hex-to-utf8',
        function (text) {
            text = text.replace(/^\s+/, '');
            text = text.replace(/\s+$/, '');
            var bytes = [];
            if (/^(\\x[0-9a-f]{1,2})/i.test(text)) {
                bytes = text.match(/(\\x[0-9a-f]{1,2})/gi);
            }
            else if (/^0x[0-9a-f]{1,2}/i.test(text)) {
                bytes = text.match(/(0x[0-9a-f]{1,2})/gi);
                if (bytes.length == 1) {
                    if (text.length == 3 || text.length == 4) {
                        // A single 0xa or 0xaa value
                        // Do nothing as it's in "bytes" array already
                        //
                    }
                    else {
                        // If we are here, that means we had a 0xaabbccdd etc value
                        // Extract all "aa", "bb", "cc", "dd" pairs
                        //
                        text = text.replace("0x", "");
                        bytes = text.match(/([0-9a-f]{2})/gi);
                    }
                }
            }
            else if (/^[0-9a-f]{1,2}$/i.test(text)) {
                // one byte
                bytes.push(text);
            }
            else if (/^[0-9a-f]{1,2} /i.test(text)) {
                bytes = text.split(' ');
            }
            else {
                var chars = text.split('');
                for (var i = 0; i < chars.length; i++) {
                    bytes.push(chars[i].charCodeAt(0).toString(16));
                }
            }
            
            for (var i = 0; i < bytes.length; i++) {
                bytes[i] = bytes[i].replace("\\x", '');
                bytes[i] = bytes[i].replace("\\X", '');
            }

            var utf8Text = '';
            for (var i = 0; i < bytes.length; i++) {
                utf8Text += String.fromCharCode(parseInt(bytes[i], 16));
            }

            return utf8.decode(utf8Text);
        },
        {
            exceptionFn : function (err) {
                $('#action-error').show();
                $('#action-error').text(err.message);
            }
        }
    );
});
