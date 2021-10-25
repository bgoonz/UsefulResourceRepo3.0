$(function () {
    mkTool('common-elements', function (text) {
        var list1 = text.split('\n');
        var list2 = $('#common-elements-text2').val().split('\n');

        var list1Hash = {};
        for (var i = 0; i < list1.length; i++) {
            var el1 = list1[i];
            list1Hash[el1] = 1;
        }

        var ret = '';
        for (var i = 0; i < list2.length; i++) {
            var el2 = list2[i];
            if (list1Hash[el2] !== undefined) {
                ret += el2 + '\n';
            }
        }

        $('#common-elements-text2').val('')

        return ret;
    });
});
