$(function () {
    mkTool(
        'random-pick',
        function (text) {
            var lines = text.split('\n');
            var howMany = parseInt($('#random-pick-how-many').val(), 10);

            var ret = [];
            for (var i = 0; i < howMany; i++) {
                var itemIndex = parseInt(Math.random() * lines.length, 10);
                ret.push(lines[itemIndex]);
                lines.splice(itemIndex, 1);
            }
            return ret.join('\n');
        }
    );
});
