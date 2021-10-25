$(function () {
    mkTool('text-reverse', function (text) {
        return text.split('').reverse().join('');
    });
});
