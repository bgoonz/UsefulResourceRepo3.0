$(function () {
    mkTool(
        'md4-hash',
        function (text) {
            return md4(text);
        },
        {
            allowEmptyText : true
        }
    );
});
