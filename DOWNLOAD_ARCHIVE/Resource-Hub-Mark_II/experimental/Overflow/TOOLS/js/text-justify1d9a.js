$(function () {
    mkTool('text-justify', function (text) {
        var lines = text.split("\n");
        var maxLineLen = 0;
        for (var i = 0; i < lines.length; i++) {
            if (lines[i].length > maxLineLen) {
                maxLineLen = lines[i].length;
            }
        }

        ret = '';
        for (var i = 0; i < lines.length; i++) {
            var line = lines[i];
            if (line.length == 0) {
                ret += "\n";
            }
            else if (line.length == maxLineLen) {
                ret += line + "\n";
            }
            else {
                var words = line.split(/\s+/g);
                if (words[0] == '') {
                    words.shift();
                }
                if (words[words.length-1] == '') {
                    words.pop();
                }

                if (words.length == 0) {
                    ret += "\n";
                }
                else if (words.length == 1) {
                    ret += words[0] + "\n";
                }
                else {
                    var spaces = words.length-1;
                    var joinedLineLen = words.join(' ').length;
                    var padLen = maxLineLen - joinedLineLen;
                    var padLenLeft = padLen;
                    
                    var justifiedLine = '';
                    for (var j = 0; j < words.length; j++) {
                        justifiedLine += words[j];
                        if (j != words.length-1) {
                            if (words.length-2 >= 0 && j == words.length-2) {
                                var extraSpaces = padLenLeft;
                            }
                            else {
                                var extraSpaces = parseInt(Math.random() * (padLenLeft + 1), 10)
                            }
                            padLenLeft -= extraSpaces;
                            justifiedLine += ' ';
                            for (var k = 1; k <= extraSpaces; k++) {
                                justifiedLine += ' ';
                            }
                        }
                    }
                    ret += justifiedLine + "\n";
                }
            }
        }
        return ret;
    });
});
