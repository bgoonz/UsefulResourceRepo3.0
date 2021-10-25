$(function () {
    mkTool('xml-minify', function (text) {
        var converted = vkbeautify.xmlmin(text);
        return converted;
    });
});
