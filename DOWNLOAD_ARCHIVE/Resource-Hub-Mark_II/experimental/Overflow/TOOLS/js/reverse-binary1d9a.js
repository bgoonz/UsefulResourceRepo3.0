$(function () {
    mkTool(
        'reverse-binary',
        function (text) {
            var lines = text.split('\n');

            var output = '';
            for (var i = 0; i < lines.length; i++) {
                var line = lines[i];
                output += line.split('').reverse().join('') + "\n";
            }

            return output;
        },
        {
            exceptionFn : function (err) {
                $('#action-error').show();
                $('#action-error').text(err.message);
            }
        }
    );
});
