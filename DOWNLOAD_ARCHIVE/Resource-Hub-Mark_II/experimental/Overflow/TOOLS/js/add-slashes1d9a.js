$(function () {
    mkTool('add-slashes', function (text) {
        text = text.replace(/\\/g, '\\\\');
        text = text.replace(/\t/g, '\\t');
        text = text.replace(/\n/g, '\\n');
        text = text.replace(/'/g, "\\'");
        text = text.replace(/"/g, '\\"');
        return text;
    });
});
