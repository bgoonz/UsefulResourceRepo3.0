$(function () {
    mkTool(
        'pi-digits',
        function () {
            var howMany = parseInt($('#pi-digits-how-many').val(), 10);
            if (howMany == 0) {
                return "3";
            }

            // https://github.com/josdejong/mathjs/blob/master/test/pi_bailey-borwein-plouffe.html
            Decimal.config({
                precision: howMany + 2
            });

            var zero = new Decimal(0);
            var one = new Decimal(1);
            var two = new Decimal(2);
            var four = new Decimal(4);
            var p16 = one;
            var pi = zero;
            var precision = howMany + 2;
            var k8 = zero;
            for (var k = zero; k.lte(precision); k = k.plus(one)) {
                // pi += 1/p16 * (4/(8*k + 1) - 2/(8*k + 4) - 1/(8*k + 5) - 1/(8*k+6));
                // p16 *= 16;
                //
                // a little simpler:
                // pi += p16 * (4/(8*k + 1) - 2/(8*k + 4) - 1/(8*k + 5) - 1/(8*k+6));
                // p16 /= 16;
                var f = four.div(k8.plus(1))
                    .minus(two.div(k8.plus(4)))
                    .minus(one.div(k8.plus(5)))
                    .minus(one.div(k8.plus(6)));
                pi = pi.plus(p16.times(f));
                p16 = p16.div(16);
                k8 = k8.plus(8);
            }
            return pi.toString().substr(0, pi.toString().length-1);
        },
        {
            allowEmptyText : true
        }
    );
});
