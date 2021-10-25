$(function () {
    mkTool(
        'binary-sum',
        function (text) {
            var lines = text.split('\n');

            if (lines.length == 1) {
                return text;
            }

            var sum = new BigNumber(0, 2); // initialize to 0 in base 2

            for (var i = 0; i < lines.length; i++) {
                var line = lines[i];
                if (line.length == 0) {
                    continue;
                }
                var num = new BigNumber(line, 2);
                sum = sum.plus(num);
            }

            return sum.toString(2);
        },
        {
            exceptionFn : function (err) {
                $('#action-error').show();
                $('#action-error').text(err.message);
            }
        }
    );
});
