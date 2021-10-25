$(function () {
    mkTool(
        'md2-hash',
        function (text) {
            return md2(text);
        },
        {
            allowEmptyText : true
        }
    );
});
