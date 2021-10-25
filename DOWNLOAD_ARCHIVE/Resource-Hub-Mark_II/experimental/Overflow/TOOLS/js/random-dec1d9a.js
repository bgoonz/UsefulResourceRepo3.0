$(function () {
    mkTool(
        'random-dec',
        function () {
            var howManyDigits = parseInt($('#random-dec-how-many-digits').val(), 10);
            var howManyResuls = parseInt($('#random-dec-how-many-results').val(), 10);

            var str = '';
            for (var i = 0; i < howManyResuls; i++) {
                var res = '';
                for (var j = 0; j < howManyDigits; j++) {
                    var randByte = parseInt(Math.random() * 10, 10);
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
