$(function () {
    mkTool(
        'random-bin',
        function () {
            var howManyDigits = parseInt($('#random-bin-how-many-digits').val(), 10);
            var howManyResuls = parseInt($('#random-bin-how-many-results').val(), 10);

            var str = '';
            for (var i = 0; i < howManyResuls; i++) {
                var res = '';
                for (var j = 0; j < howManyDigits; j++) {
                    var randByte = parseInt(Math.random() * 2, 10);
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
