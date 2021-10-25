$(function () {
    mkTool('remove-punctuation', function (text) {
        var puntuationRe = /[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,\-.\/:;<=>?@\[\]^_`{|}~]/g;
        text = text.replace(puntuationRe, '');
        return text;
    });
});
