$(function () {
    mkTool('line-count', function (text) {
        return text.split('\n').length;
    });
});
