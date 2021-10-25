$(function () {
    mkTool(
        'random-hex',
        function () {
            var howManyDigits = parseInt($('#random-hex-how-many-digits').val(), 10);
            var howManyResuls = parseInt($('#random-hex-how-many-results').val(), 10);

            var str = '';
            for (var i = 0; i < howManyResuls; i++) {
                var res = '';
                for (var j = 0; j < howManyDigits; j++) {
                    var randByte = parseInt(Math.random() * 16, 10).toString(16);
                    res += randByte;
                }
                str += res;
                str += "\n";
            }
            return str;
        },
        {
            allowEmptyText : true
        }
    );
});
