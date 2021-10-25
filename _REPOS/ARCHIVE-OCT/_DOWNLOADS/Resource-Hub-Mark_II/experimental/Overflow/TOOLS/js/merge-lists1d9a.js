$(function () {
    mkTool('merge-lists', function (text) {
        var list1 = text.split('\n');
        var list2 = $('#merge-lists-text2').val().split('\n');
        var delim = $('#merge-lists-delimiter').val();

        var ret = '';
        for (var i = 0; i < list1.length; i++) {
            var el1 = list1[i];
            var el2 = list2[i];
            if (el2 === undefined) {
                break;
            }
            ret += el1 + '' + delim + '' + el2 + '\n';
        }

        return ret;
    });
});
