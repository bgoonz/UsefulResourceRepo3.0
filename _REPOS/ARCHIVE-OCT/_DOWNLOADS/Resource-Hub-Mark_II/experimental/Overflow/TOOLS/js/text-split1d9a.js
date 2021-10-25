$(function () {
    mkTool('text-split', function (text) {
        var symbol = $('#text-split-symbol').val();
        var parts = text.split(symbol);
        return parts.join("\n");
    });
});
