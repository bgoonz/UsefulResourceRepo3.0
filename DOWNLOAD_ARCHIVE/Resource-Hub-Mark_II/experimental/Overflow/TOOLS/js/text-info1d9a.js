$(function () {
    mkTool('text-info', function (text) {
        var length = text.length;
        var wordCount = text.match(/\S+/g).length;
        var lineCount = text.split('\n').length;

        var paragraphs = text.split(/\n\n+/g);
        var paragraphCount = 0;
        for (var i = 0; i < paragraphs.length; i++) {
            if (paragraphs[i].length != 0) {
                paragraphCount++;
            }
        }

        var textSentences = text.split(/[.?!]+/);
        var sentenceCount = 0;
        for (var i = 0; i < textSentences.length; i++) {
            if (/\w/.test(textSentences[i])) {
                sentenceCount++;
            }
        }

        var charStats = {};
        var wordStats = {};

        var asciiCount = 0;
        var extendedAsciiCount = 0;
        var unicodeCount = 0;

        var chars = text.split('');
        for (var i = 0; i < chars.length; i++) {
            var char = chars[i];
            if (charStats[char] === undefined) {
                charStats[char] = 1;
            }
            else {
                charStats[char]++;
            }

            var charCode = char.charCodeAt(0);
            if (charCode >= 0 && charCode <= 127) {
                asciiCount++;
            }
            else if (charCode > 127 && charCode <= 255) {
                extendedAsciiCount++;
            }
            else {
                unicodeCount++;
            }
        }

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

        var retText = 
            "Text statistics:\n" + 
            "Length:      " + length + "\n" +
            "Words:       " + wordCount + "\n" +
            "Sentences:   " + sentenceCount + "\n" +
            "Lines:       " + lineCount + "\n" +
            "Paragraphs:  " + paragraphCount + "\n" +
            "\n" +
            "Ascii Characters (0-127):            " + asciiCount + "\n" +
            "Extended Ascii Characters (127-255): " + extendedAsciiCount + "\n" +
            "All Ascii Characters (0-255):        " + (extendedAsciiCount + asciiCount) + "\n" +
            "Unicode Characters (255+):           " + unicodeCount + "\n" +
            "\n" +
            "Word statistics:\n";

        var sortedWordStatsKeys = Object.keys(wordStats).sort(function (a, b) {
            return wordStats[b] - wordStats[a];
        });
        for (var i = 0; i < sortedWordStatsKeys.length; i++) {
            var key = sortedWordStatsKeys[i];
            retText += key + ": " + wordStats[key] + "\n";
        }   

        retText +=
            "\n" + 
            "Character statistics:\n";

        var sortedCharStatsKeys = Object.keys(charStats).sort(function (a, b) {
            return charStats[b] - charStats[a];
        });
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
