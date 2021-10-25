$(function () {
    mkTool('text-titlecase', function (text) {
        text = text.toLowerCase();
        return titleCase(text);
    });
});
