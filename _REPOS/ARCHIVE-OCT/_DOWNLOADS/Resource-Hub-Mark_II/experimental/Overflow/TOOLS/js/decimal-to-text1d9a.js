$(function () {
    mkTool(
        'decimal-to-text',
        function (text) {
            text = text.replace(/\s+/g, ' ');
            bytes = text.split(' ');
            var ret = '';
            for (var i = 0; i < bytes.length; i++) {
                ret += String.fromCharCode(bytes[i]);
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
