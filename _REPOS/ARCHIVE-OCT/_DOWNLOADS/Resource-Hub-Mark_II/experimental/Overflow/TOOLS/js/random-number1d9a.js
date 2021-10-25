$(function () {
    mkTool(
        'random-number',
        function () {
            var start = parseInt($('#random-number-start').val(), 10);
            var end = parseInt($('#random-number-end').val(), 10);
            var howMany = parseInt($('#random-number-how-many').val(), 10);

            var str = '';
            for (var i = 0; i < howMany; i++) {
                str += parseInt(Math.random() * (end - start + 1) + start, 10).toString();
                if (i != howMany-1) str += "\n";
            }
            return str;
        },
        {
            allowEmptyText : true
        }
    );
});
