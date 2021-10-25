$(function () {
    mkTool('word-count', function (text) {
        return text.match(/\S+/g).length;
    });
});
