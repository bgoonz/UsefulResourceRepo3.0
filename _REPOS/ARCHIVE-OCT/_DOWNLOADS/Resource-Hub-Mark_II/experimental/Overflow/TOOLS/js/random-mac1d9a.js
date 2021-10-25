$(function () {
    // make random-mac mac range work
    //
    $('#random-mac-range').click(function (ev) {
        ev.preventDefault();
        $('#random-mac-range-field').slideToggle();
    });

    // make random-mac tool work
    //
    mkTool(
        'random-mac',
        function () {
            var howMany = parseInt($('#random-mac-how-many').val(), 10);
            var startIp = $('#random-mac-range-field input[name="start"]').val();
            var endIp = $('#random-mac-range-field input[name="end"]').val();

            function randRange (low, high) {
                return parseInt(parseInt(low,16) + Math.random() * (parseInt(high,16)-parseInt(low,16)), 16);
            }

            var str = '';
            for (var i = 0; i < howMany; i++) {
                var r1 = randRange(startIp.split(':')[0], endIp.split(':')[0]).toString(16);
                r1 = parseInt(r1, 10).toString(16);
                if (r1.length == 1) {
                    r1 = "0" + r1;
                }
                var r2 = randRange(startIp.split(':')[1], endIp.split(':')[1]).toString(16);
                r2 = parseInt(r2, 10).toString(16);
                if (r2.length == 1) {
                    r2 = "0" + r2;
                }
                var r3 = randRange(startIp.split(':')[2], endIp.split(':')[2]).toString(16);
                r3 = parseInt(r3, 10).toString(16);
                if (r3.length == 1) {
                    r3 = "0" + r3;
                }
                var r4 = randRange(startIp.split(':')[3], endIp.split(':')[3]).toString(16);
                r4 = parseInt(r4, 10).toString(16);
                if (r4.length == 1) {
                    r4 = "0" + r4;
                }
                var r5 = randRange(startIp.split(':')[4], endIp.split(':')[4]).toString(16);
                r5 = parseInt(r5, 10).toString(16);
                if (r5.length == 1) {
                    r5 = "0" + r5;
                }
                var r6 = randRange(startIp.split(':')[5], endIp.split(':')[5]).toString(16);
                r6 = parseInt(r6, 10).toString(16);
                if (r6.length == 1) {
                    r6 = "0" + r6;
                }
                str += r1 + ':' + r2 + ':' + r3 + ':' + r4 + ':' + r5 + ':' + r6;
                if (i != howMany-1) str += "\n";
            }
            return str;
        },
        {
            allowEmptyText : true
        }
    );
});
