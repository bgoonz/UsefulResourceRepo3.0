$(function () {
    mkTool(
        'e-digits',
        function () {
            var howMany = parseInt($('#e-digits-how-many').val(), 10);
            if (howMany == 0) {
                return "2";
            }

            Decimal.config({
                precision: howMany + 100
            });

            function factorial (n) {
                if (n == 0) return new Decimal(1);
                var result = new Decimal(1);
                for (var i = new Decimal(1); i.lte(n); i = i.plus(new Decimal(1))) {
                    result = result.mul(i);
                }
                return result;
            }

            var e = new Decimal(1);
            var precision = howMany + 100;
            for (var i = new Decimal(1); i.lte(precision); i = i.plus(new Decimal(1))) {
                var ithTerm = new Decimal(1);
                ithTerm = ithTerm.div(factorial(i.toFixed()));
                e = e.plus(ithTerm);
            }
            return e.toString().substr(0, howMany+2);
        },
        {
            allowEmptyText : true
        }
    );
});
