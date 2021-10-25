$(function () {
    mkTool('word-split', function (text) {
        var parts = text.split(/\s+/g);
        return parts.join("\n");
    });
});
