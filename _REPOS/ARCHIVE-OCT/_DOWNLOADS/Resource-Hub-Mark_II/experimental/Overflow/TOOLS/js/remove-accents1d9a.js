$(function () {
    mkTool('remove-accents', function (text) {
        text = removeAccents(text);
        return text;
    });
});
