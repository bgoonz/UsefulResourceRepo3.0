$(function () {
    mkTool('letter-frequency', function (text) {
        // copy paste from text-info
        var charStats = {};
        var chars = text.split('');
        for (var i = 0; i < chars.length; i++) {
            var char = chars[i];
            if (charStats[char] === undefined) {
                charStats[char] = 1;
            }
            else {
                charStats[char]++;
            }
        }
        var sortedCharStatsKeys = Object.keys(charStats).sort(function (a, b) {
            return charStats[b] - charStats[a];
        });
        var retText = '';
        for (var i = 0; i < sortedCharStatsKeys.length; i++) {
            var key = sortedCharStatsKeys[i];
            var strKey = key;
            if (key.charCodeAt(0) == "10") {
                strKey = "↵"; 
            }
            else if (key.charCodeAt(0) == "32") {
                strKey = "⎵";
            }

            retText += strKey + ": " + charStats[key] + "\n";
        } 
        return retText;
    });
});
