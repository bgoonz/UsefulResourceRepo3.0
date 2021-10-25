$(function () {
    mkTool(
        'prime-numbers',
        function () {
            var howMany = parseInt($('#prime-numbers-how-many').val(), 10);
            var start = parseInt($('#prime-numbers-start').val(), 10);
            var primes = [];
            var sieve = [];
            for (var i = start; ; i++) {
                isPrime = true;
                upTo = Math.floor(Math.sqrt(i));
                for (var j = 2; j <= upTo; j++) {
                    if (i % j == 0) {
                        isPrime = false;
                        break;
                    }
                }
                if (isPrime) {
                    primes.push(i);
                    if (primes.length >= howMany) {
                        break;
                    }
                }
            }
            return primes.join('\n');
        },
        {
            allowEmptyText : true
        }
    );
});
