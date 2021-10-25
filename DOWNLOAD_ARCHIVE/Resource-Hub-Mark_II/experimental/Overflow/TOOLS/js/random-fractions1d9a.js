$(function () {
    mkTool(
        'random-fractions',
        function () {
            var start = parseInt($('#random-fractions-start').val(), 10);
            var end = parseInt($('#random-fractions-end').val(), 10);
            var howMany = parseInt($('#random-fractions-how-many').val(), 10);
            var precision = parseInt($('#random-fractions-precision').val(), 10);

            var str = '';
            for (var i = 0; i < howMany; i++) {
                str += (Math.random() * (end - start) + start).toFixed(precision).toString();
                if (i != howMany-1) str += "\n";
            }
            return str;
        },
        {
            allowEmptyText : true
        }
    );
});
