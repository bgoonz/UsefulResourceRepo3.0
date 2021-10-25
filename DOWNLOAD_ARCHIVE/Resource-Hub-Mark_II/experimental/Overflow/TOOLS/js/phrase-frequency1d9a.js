$(function () {
    mkTool('phrase-frequency', function (text) {
        var textSentences = text.split(/[.?!]+/);
        var sentences = [];
        for (var i = 0; i < textSentences.length; i++) {
            if (/\w/.test(textSentences[i])) {
                var sentence = textSentences[i].toLowerCase();
                sentence = sentence.replace(/\s+/g, ' ');
                sentence = sentence.replace(/\s+$/g, '');
                sentence = sentence.replace(/^\s+/g, '');
                sentences.push(sentence);
            }
        }

        function generateAllPhrases(sentence) {
            var words = sentence.split(/\s+/g);

            var phrases = [];
            for (k = 2; k <= words.length; k++) {
                for (l = 0; l < words.length; l++) {
                    if (k+l > words.length) {
                        continue;
                    }
                    var phrase = words.slice(l, l+k);
                    phrases.push(phrase);
                }
            }
            return phrases;
        }

        function filterUniquePhrases(phrases) {
            var unique = [];
            var seen = {};
            for (var i = 0; i < phrases.length; i++) {
                var phrase = phrases[i];
                var phraseStr = phrase.join(' ');
                if (seen[phraseStr] === undefined) {
                    unique.push(phrase);
                    seen[phraseStr] = 1;
                }
            }
            return unique;
        }

        var phrasesCache = []; // todo

        var phraseStats = {};
        var countedPhrases = {};

        for (var i = 0; i < sentences.length; i++) {
            var sentence = sentences[i];

            if (phrasesCache[i] != undefined) {
                var phrasesi = phrasesCache[i];
            }
            else {
                var phrasesi = generateAllPhrases(sentence);
                phrasesCache[i] = phrasesi;
            }
            var uniquePhrasesi = filterUniquePhrases(phrasesi);

            for (var j = i; j < sentences.length; j++) {
                var sentence = sentences[j];
                if (phrasesCache[j] != undefined) {
                    var phrasesj = phrasesCache[j];
                }
                else {
                    var phrasesj = generateAllPhrases(sentence);
                    phrasesCache[j] = phrasesj;
                }

                for (var k = 0; k < uniquePhrasesi.length; k++) {
                    var phrasei = uniquePhrasesi[k];

                    for (var l = 0; l < phrasesj.length; l++) {
                        var phrasej = phrasesj[l];
                        if (phrasei.length != phrasej.length) {
                            continue;
                        }

                        var phraseiStr = phrasei.join(' ');
                        var phrasejStr = phrasej.join(' ');

                        if (phraseiStr == phrasejStr && countedPhrases[phraseiStr] === undefined) {
                            if (phraseStats[phraseiStr] == undefined) {
                                phraseStats[phraseiStr] = 1;
                            }
                            else {
                                phraseStats[phraseiStr]++;
                            }
                        }
                    }
                }
            }
            for (var k = 0; k < uniquePhrasesi.length; k++) {
                var phraseStr = uniquePhrasesi[k].join(' ');
                countedPhrases[phraseStr] = 1;
            }
        }

        var sortedPhraseStatsKeys = Object.keys(phraseStats).sort(function (a, b) {
            return phraseStats[b] - phraseStats[a];
        });
        var retText = '';
        for (var i = 0; i < sortedPhraseStatsKeys.length; i++) {
            var key = sortedPhraseStatsKeys[i];
            var count = phraseStats[key];
            if (count > 1) {
                retText += key + ": " + count + "\n";
            }
        }
        return retText;
    });
});
