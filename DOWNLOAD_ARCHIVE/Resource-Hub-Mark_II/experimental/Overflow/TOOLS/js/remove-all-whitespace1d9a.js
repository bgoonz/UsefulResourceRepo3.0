$(function () {
    mkTool('remove-all-whitespace', function (text) {
        text = text.replace(/\s+/g, '');
        return text;
    });
});
