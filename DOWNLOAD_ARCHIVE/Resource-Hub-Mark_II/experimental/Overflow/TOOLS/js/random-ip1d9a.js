$(function () {
    // make random-ip ip range work
    //
    $('#random-ip-range').click(function (ev) {
        ev.preventDefault();
        $('#random-ip-range-field').slideToggle();
    });

    // make random-ip tool work
    //
    mkTool(
        'random-ip',
        function () {
            var howMany = parseInt($('#random-ip-how-many').val(), 10);
            var startIp = $('#random-ip-range-field input[name="start"]').val();
            var endIp = $('#random-ip-range-field input[name="end"]').val();

            function ipToDec (ip) {
                var parts = ip.split('.');
                var dec = parseInt(parts[0]) * 256 * 256 * 256 +
                    parseInt(parts[1]) * 256 * 256 +
                    parseInt(parts[2]) * 256 +
                    parseInt(parts[3]);
                return dec;
            }

            function decToIp (dec) {
                var ip = ((dec>>24)&0xff) + '.' +
                    ((dec>>16)&0xff) + '.' +
                    ((dec>>8)&0xff) + '.' +
                    (dec&0xff);
                return ip
            }

            var startIpDec = ipToDec(startIp);
            var endIpDec = ipToDec(endIp);

            function randRange (start, end) {
                return Math.floor(Math.random() * (end - start + 1)) + start;
            }

            var str = '';
            for (var i = 0; i < howMany; i++) {
                str += decToIp(randRange(startIpDec, endIpDec));
                if (i != howMany-1) str += "\n";
            }
            return str;
        },
        {
            allowEmptyText : true
        }
    );
});
