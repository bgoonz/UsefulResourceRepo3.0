$(function () {
    mkTool('text-repeat', function (text) {
        var count = $('#text-repeat-count').val();
        var ret = '';
        for (var i = 1; i <= count; i++) {
            ret += text;
        }
        return ret;
    });
});
