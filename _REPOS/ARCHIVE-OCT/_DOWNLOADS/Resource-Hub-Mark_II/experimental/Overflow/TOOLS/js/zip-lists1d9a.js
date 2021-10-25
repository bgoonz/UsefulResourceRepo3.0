$(function () {
    mkTool('zip-lists', function (text) {
        var list1 = text.split('\n');
        var list2 = $('#zip-lists-text2').val().split('\n');

        var ret = '';
        for (var i = 0; i < list1.length; i++) {
            var el1 = list1[i];
            var el2 = list2[i];
            if (el2 === undefined) {
                break;
            }
            ret += el1 + '\n';
            ret += el2 + '\n';
        }

        return ret;
    });
});
