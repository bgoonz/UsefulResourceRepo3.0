$(function () {
    mkTool('strip-slashes', function (text) {
        return text.replace(/\\(.?)/g, function (match, char) {
            if (char == '\\') return '\\';
            if (char == 't') return '\t';
            if (char == 'n') return '\n';
            if (char == '') return '';
            return char;
        });
    });
});
