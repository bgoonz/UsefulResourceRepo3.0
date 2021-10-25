$(function () {
    mkTool('spaces-to-newlines', function (text) {
        return text.replace(/\s+/g, "\n");
    });
});
