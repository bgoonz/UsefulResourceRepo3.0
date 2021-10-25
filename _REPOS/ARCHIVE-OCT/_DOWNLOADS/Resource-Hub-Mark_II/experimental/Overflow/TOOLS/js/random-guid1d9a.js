$(function () {
    // (copy/paste random-uuid code as it's the same thing)
    mkTool(
        'random-guid',
        function () {
            var howMany = parseInt($('#random-guid-how-many').val(), 10);

            var str = '';
            for (var i = 0; i < howMany; i++) {
                var format = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx';
                format = format.replace(/x/g, function (char) {
                    var randInt = parseInt(Math.random()*16, 10);
                    return randInt.toString(16);
                });
                format = format.replace(/y/g, function(char) {
                    var yRange = ['8', '9', 'a', 'b'];
                    var randInt = parseInt(Math.random()*4, 10);
                    var y = yRange[randInt];
                    return y;
                });
                str += format;
                if (i != howMany-1) str += "\n";
            }
            return str;
        },
        {
            allowEmptyText : true
        }
    );
});
