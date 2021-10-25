$(function () {
    mkTool('xml-prettify', function (text) {
        var converted = vkbeautify.xml(text);
        return converted;
    });
});
