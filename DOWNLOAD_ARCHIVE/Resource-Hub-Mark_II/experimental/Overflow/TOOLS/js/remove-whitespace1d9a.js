$(function () {
    mkTool('remove-whitespace', function (text) {
        text = text.replace(/ +/g, ' ');
        text = text.replace(/\t+/g, ' ');
        text = text.replace(/^\s+/g, '');
        text = text.replace(/\s+$/g, '');
        return text;
    });
});
