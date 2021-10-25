$(function () {
    mkTool('paragraph-count', function (text) {
        var paragraphs = text.split(/\n\n+/g);
        var paragraphCount = 0;
        for (var i = 0; i < paragraphs.length; i++) {
            if (paragraphs[i].length != 0) {
                paragraphCount++;
            }
        }
        return paragraphCount;
    });
});
