$(function () {
    mkTool(
        'text-from-regex',
        function (text) {
            var howMany = parseInt($('#text-from-regex-how-many').val(), 10);
            var regex = $('#text-from-regex-regex').val();
            var ret = '';
            for (var i = 1; i <= howMany; i++) {
                var r = new RandExp(regex);
                ret += r.gen();
                ret += "\n";
            }
            return ret;
        },
        {
            allowEmptyText : true,
            exceptionFn : function (err) {
                $('#action-error').show();
                $('#action-error').text(err);
            }
        }
    );
});
