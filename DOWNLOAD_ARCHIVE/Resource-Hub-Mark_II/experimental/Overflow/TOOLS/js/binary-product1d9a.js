$(function () {
    mkTool(
        'binary-product',
        function (text) {
            var lines = text.split('\n');

            if (lines.length == 1) {
                return text;
            }

            var prod = new BigNumber(1, 2); // initialize to 1 in base 2

            for (var i = 0; i < lines.length; i++) {
                var line = lines[i];
                if (line.length == 0) {
                    continue;
                }
                var num = new BigNumber(line, 2);
                prod = prod.times(num);
            }

            return prod.toString(2);
        },
        {
            exceptionFn : function (err) {
                $('#action-error').show();
                $('#action-error').text(err.message);
            }
        }
    );
});
