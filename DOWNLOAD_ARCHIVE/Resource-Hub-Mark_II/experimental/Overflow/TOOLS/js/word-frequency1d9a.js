$(function () {
    mkTool('word-frequency', function (text) {
        // copy paste from text-info
        var wordStats = {};
        var words = text.split(/\s+/g);
        for (var i = 0; i < words.length; i++) {
            var word = words[i].toLowerCase();
            word = word.replace(/[,.?!]+/, '');
            if (!word.length) {
                continue;
            }
            if (wordStats[word] === undefined) {
                wordStats[word] = 1;
            }
            else {
                wordStats[word]++;
            }
        }
        var sortedWordStatsKeys = Object.keys(wordStats).sort(function (a, b) {
            return wordStats[b] - wordStats[a];
        });
        var retText = '';
        for (var i = 0; i < sortedWordStatsKeys.length; i++) {
            var key = sortedWordStatsKeys[i];
            retText += key + ": " + wordStats[key] + "\n";
        }
        return retText;
    });
});
