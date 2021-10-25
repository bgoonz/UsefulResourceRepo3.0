$(function () {
    mkTool(
        'base64-decode',
        function (text) {
            var B64 = new Base64Thing;
            var bytes = B64.b64ToByteArray(text);
            var encodedString = String.fromCharCode.apply(null, bytes);
            var decoded = decodeURIComponent(escape(encodedString));
            return decoded;
        },
        {
            exceptionFn : function (err) {
                $('#action-error').show();
                $('#action-error').text(err.message);
            }
        }
    );
});
