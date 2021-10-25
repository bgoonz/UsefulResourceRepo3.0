$(function () {
    mkTool('text-to-html-entities', function (text) {
        var ret = '';
        for (var i = 0; i < text.length; i++) {
            ret += "&#x" + text[i].charCodeAt(0).toString(16) + ";";
        }
        return ret;
    });
});
