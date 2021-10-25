$(function () {
    mkTool(
        'binary-xor',
        function (text) {
            var lines = text.split('\n');

            $('#action-error').hide();
            if (lines.length == 1) {
                $('#action-error').show();
                $('#action-error').text("Enter one binary value per line.");
                return text;
            }
            var bitwiseOp = new BitwiseOp({
                "inputBase" : 2,
                "outputBase" : 2
            });

            return bitwiseOp.xor(lines);
        },
        {
            exceptionFn : function (err) {
                $('#action-error').show();
                $('#action-error').text(err.message);
            }
        }
    );
});
