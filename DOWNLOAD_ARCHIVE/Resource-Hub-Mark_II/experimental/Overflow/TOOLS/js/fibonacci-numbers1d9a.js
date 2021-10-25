$(function () {
    mkTool(
        'fibonacci-numbers',
        function () {
            var howMany = parseInt($('#fibonacci-numbers-how-many').val(), 10);
            var start = parseInt($('#fibonacci-numbers-start').val(), 10);
            var fibs = [];
            var fprev = 1;
            var fcur = 1;
            var fib = 1;
            if (howMany > 1 && start == 1) {
                fibs.push(fprev);
            }
            if (howMany > 2 && start == 1) {
                fibs.push(fcur);
            }
            while (1) {
                if (fibs.length >= howMany) {
                    break;
                }
                fib = fprev + fcur;
                fprev = fcur;
                if (fib >= start) {
                    fibs.push(fib);
                }
                fcur = fib;
            }
            return fibs.join('\n');
        },
        {
            allowEmptyText : true
        }
    );
});
