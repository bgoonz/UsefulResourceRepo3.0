$(function () {
    mkTool(
        'random-bytes',
        function () {
            var howMany = parseInt($('#random-bytes-how-many').val(), 10);
            var format = $('#random-bytes-format').val();

            var str = '';
            for (var i = 0; i < howMany; i++) {
                var randByte = parseInt(Math.random() * 256, 10);

                if (format == "hex") {
                    randByte = randByte.toString(16);
                    if (randByte.length == 1) {
                        randByte = "0" + randByte;
                    }
                }
                else if (format == "bin") {
                    randByte = randByte.toString(2);
                    while (randByte.length < 8) {
                        randByte = "0" + randByte;
                    }
                }
                else if (format == "oct") {
                    randByte = randByte.toString(8);
                    while (randByte.length < 3) {
                        randByte = "0" + randByte;
                    }
                }
                else if (format == "dec") {
                    randByte = randByte.toString(10);
                }
                str += randByte;
                str += " ";
            }
            str += "\n";
            return str;
        },
        {
            allowEmptyText : true
        }
    );
});
