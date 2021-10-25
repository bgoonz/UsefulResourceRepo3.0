$(function () {
    mkTool('word-sort', function (text) {
        text = text.replace(/[?.,!"]/g, ' ');
        text = text.replace(/\s+$/g, '');
        text = text.replace(/^\s+/g, '');
        var words = text.split(/\s+/);
        words.sort(function (a, b) {
            if (a.toLowerCase() < b.toLowerCase()) return -1;
            if (a.toLowerCase() > b.toLowerCase()) return 1;
            return 0;
        });
        return words.join(' ');
    });
});
