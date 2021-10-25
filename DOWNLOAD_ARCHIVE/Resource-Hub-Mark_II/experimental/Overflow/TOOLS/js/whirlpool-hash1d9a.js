$(function () {
    mkTool(
        'whirlpool-hash',
        function (text) {
            var hash = Whirlpool(text);
            return hash;
        },
        {
            allowEmptyText : true
        }
    );
});
