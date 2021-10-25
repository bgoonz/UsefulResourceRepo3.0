$(function () {
    mkTool('random-lines', function (text) {
        text = text.replace(/\r\n/g, '\n');
        var lines = text.split('\n');

        function KnuthShuffle (array) {
            var currentIndex = array.length;
            var temporaryValue;
            var randomIndex;

            while (0 !== currentIndex) {
                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex -= 1;
                temporaryValue = array[currentIndex];
                array[currentIndex] = array[randomIndex];
                array[randomIndex] = temporaryValue;
            }

            return array;
        }

        lines = KnuthShuffle(lines);

        return lines.join('\n');
    });
});
