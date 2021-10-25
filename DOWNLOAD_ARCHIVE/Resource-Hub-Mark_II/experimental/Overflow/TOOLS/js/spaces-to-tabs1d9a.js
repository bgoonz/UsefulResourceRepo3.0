$(function () {
    mkTool('spaces-to-tabs', function (text) {
        var spaceCount = $('#spaces-to-tabs-count').val();
        var rx = new RegExp(" {" + spaceCount + "}", "g");
        return text.replace(rx, "\t");
    });
});
