$(function () {
    mkTool('markdown-to-html', function (text) {
        var converter = new showdown.Converter();
        var html = converter.makeHtml(text);
        return html;
    });
});
