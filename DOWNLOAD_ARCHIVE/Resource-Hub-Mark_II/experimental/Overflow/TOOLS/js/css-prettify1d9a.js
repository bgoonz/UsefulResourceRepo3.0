$(function () {
    mkTool('css-prettify', function (text) {
        var converted = vkbeautify.css(text);
        return converted;
    });
})
