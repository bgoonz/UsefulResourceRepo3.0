$(function () {
    mkTool('tabs-to-spaces', function (text) {
        var spaceCount = $('#tabs-to-spaces-count').val();
        var spaceStr = '';
        for (var i = 1; i <= spaceCount; i++) {
            spaceStr += ' ';
        }
        return text.replace(/\t/g, spaceStr);
    });
});
