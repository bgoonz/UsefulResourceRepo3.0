$(function () {
    mkTool('random-letters', function (text) {
        text = text.replace(/\r\n/g, '\n');

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

        var letters = text.split('');
        letters = KnuthShuffle(letters);

        return letters.join('');
    });
});
